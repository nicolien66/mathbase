/* Polymates — Médecine — Anatomie (PASS / 1re année) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["anatomie"] = {
  id: "anatomie",
  nom: "Anatomie",
  icone: "🫀",
  couleur: "#c87a7a",
  intro: "L'anatomie décrit la forme, la structure et les rapports des organes du corps humain. Ce cours suit le programme de première année : après les généralités (os, articulations, muscles, vaisseaux et nerfs), il parcourt le membre supérieur, le membre inférieur, le tronc, la tête et le cou, puis le système nerveux et les organes des sens, avec la nomenclature anatomique internationale en français.",
  parties: [
    {
      titre: "Partie 1 — Anatomie générale",
      chapitres: [
        {
          id: "introduction-anatomie",
          titre: "Introduction : position anatomique, plans, axes et vocabulaire",
          duree: 25,
          objectifs: [
            "Définir l'anatomie et ses principales branches (descriptive, topographique, fonctionnelle, clinique).",
            "Décrire la position anatomique de référence et les trois plans fondamentaux.",
            "Utiliser correctement les termes de position (médial, latéral, proximal, distal, etc.) et de mouvement.",
            "Situer les grandes régions du corps et les cavités qui contiennent les viscères.",
            "Citer les grands systèmes de l'organisme et leur fonction principale."
          ],
          sections: [
            {
              titre: "Qu'est-ce que l'anatomie ?",
              contenu: `<p>L'<strong>anatomie</strong> (du grec <em>anatemnein</em>, « couper à travers ») est la science qui étudie la <strong>forme</strong>, la <strong>structure</strong> et les <strong>rapports</strong> des différentes parties du corps. Elle constitue le socle de la médecine : l'examen clinique, l'imagerie, la chirurgie et la compréhension des maladies reposent sur elle.</p>
<p>On distingue plusieurs approches complémentaires :</p>
<ul>
<li><strong>Anatomie descriptive</strong> (ou systématique) : étude organe par organe, système par système (ostéologie, arthrologie, myologie, angiologie, névrologie, splanchnologie).</li>
<li><strong>Anatomie topographique</strong> (ou régionale) : étude des régions du corps et des rapports entre les structures qui s'y trouvent (ex. le creux axillaire, le trigone fémoral). C'est l'anatomie du chirurgien.</li>
<li><strong>Anatomie fonctionnelle</strong> : étude des structures en relation avec leur fonction (biomécanique articulaire, action des muscles).</li>
<li><strong>Anatomie clinique et radiologique</strong> : application à l'examen du patient, à l'imagerie (radiographie, échographie, scanner, IRM) et aux gestes médicaux.</li>
<li><strong>Anatomie du développement</strong> (embryologie) et <strong>anatomie microscopique</strong> (histologie), traitées dans d'autres matières.</li>
</ul>
<h4>La nomenclature anatomique internationale</h4>
<p>Depuis 1998, la <strong>Terminologia Anatomica</strong> fixe une nomenclature internationale unique, traduite en français. Elle remplace de nombreux termes anciens, éponymes ou imprécis. Le concours exige la nomenclature actuelle, mais l'ancien terme reste souvent employé à l'hôpital : il faut connaître les deux.</p>
<table>
<thead><tr><th>Nomenclature internationale</th><th>Ancien terme</th></tr></thead>
<tbody>
<tr><td>Fibula</td><td>Péroné</td></tr>
<tr><td>Ulna</td><td>Cubitus</td></tr>
<tr><td>Scapula</td><td>Omoplate</td></tr>
<tr><td>Patella</td><td>Rotule</td></tr>
<tr><td>Artère subclavière</td><td>Artère sous-clavière</td></tr>
<tr><td>Nerf fibulaire commun</td><td>Nerf sciatique poplité externe</td></tr>
<tr><td>Muscle élévateur de la scapula</td><td>Angulaire de l'omoplate</td></tr>
<tr><td>Vertèbre lombale</td><td>Vertèbre lombaire</td></tr>
<tr><td>Moelle spinale</td><td>Moelle épinière</td></tr>
<tr><td>Liquide cérébro-spinal</td><td>Liquide céphalo-rachidien</td></tr>
<tr><td>Trompe utérine</td><td>Trompe de Fallope</td></tr>
<tr><td>Veine jugulaire interne</td><td>Veine jugulaire interne (inchangé)</td></tr>
</tbody>
</table>
<div class="encart" data-type="methode"><strong>Méthode :</strong> pour décrire n'importe quelle structure, suivre toujours le même plan : situation, forme et dimensions, orientation, description des faces et des bords, rapports, vascularisation, innervation, fonction. C'est aussi le plan attendu dans une question rédactionnelle.</div>`
            },
            {
              titre: "La position anatomique de référence",
              contenu: `<p>Toute description anatomique se fait par rapport à une <strong>position de référence</strong>, quelle que soit la position réelle du sujet ou de la pièce étudiée. Le sujet est :</p>
<ul>
<li><strong>debout</strong>, les pieds joints ou légèrement écartés, parallèles, pointés vers l'avant ;</li>
<li>le <strong>regard horizontal</strong>, dirigé vers l'avant ;</li>
<li>les <strong>membres supérieurs pendants</strong> le long du corps ;</li>
<li>les <strong>paumes des mains tournées vers l'avant</strong> (avant-bras en supination), pouces dirigés latéralement.</li>
</ul>
<p>Cette position est conventionnelle : elle sert à définir sans ambiguïté les faces (antérieure, postérieure), les bords et les directions. Ainsi, le radius est toujours décrit comme l'os <em>latéral</em> de l'avant-bras et l'ulna (cubitus) comme l'os <em>médial</em>, même si le patient est allongé la main en pronation.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la position anatomique impose la supination. Dans cette position, le pouce est latéral et le petit doigt médial. Lorsqu'on dit que le nerf ulnaire est « médial » au coude, c'est bien par rapport à cette position : il passe en arrière de l'épicondyle médial, du côté du petit doigt.</div>
<h4>Les trois axes</h4>
<ul>
<li><strong>Axe vertical</strong> (longitudinal, cranio-caudal) : perpendiculaire au sol, il traverse le corps de la tête aux pieds. Les rotations se font autour de lui.</li>
<li><strong>Axe transversal</strong> (horizontal, latéro-latéral) : de droite à gauche. La flexion et l'extension se font autour de lui.</li>
<li><strong>Axe sagittal</strong> (antéro-postérieur) : d'avant en arrière. L'abduction et l'adduction se font autour de lui.</li>
</ul>`
            },
            {
              titre: "Les plans de référence",
              contenu: `<p>Trois plans perpendiculaires entre eux permettent de situer les structures et d'orienter les coupes d'imagerie.</p>
<table>
<thead><tr><th>Plan</th><th>Définition</th><th>Axes contenus</th><th>Mouvements dans ce plan</th><th>Imagerie</th></tr></thead>
<tbody>
<tr><td><strong>Sagittal</strong></td><td>Plan vertical antéro-postérieur. Le plan <strong>sagittal médian</strong> divise le corps en deux moitiés droite et gauche symétriques ; les plans parallèles sont dits <strong>parasagittaux</strong>.</td><td>Vertical et sagittal</td><td>Flexion / extension</td><td>Coupe sagittale (IRM du rachis, du genou)</td></tr>
<tr><td><strong>Frontal</strong> (coronal)</td><td>Plan vertical latéro-latéral, parallèle au front. Divise le corps en une partie antérieure (ventrale) et une partie postérieure (dorsale).</td><td>Vertical et transversal</td><td>Abduction / adduction, inclinaison latérale</td><td>Coupe coronale (radiographie de face, IRM cérébrale coronale)</td></tr>
<tr><td><strong>Transversal</strong> (horizontal, axial)</td><td>Plan perpendiculaire à l'axe du corps. Divise le corps en une partie supérieure (crâniale) et une partie inférieure (caudale).</td><td>Transversal et sagittal</td><td>Rotations</td><td>Coupe axiale (scanner). Convention : le sujet est vu par ses pieds, sa droite est à gauche de l'image.</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> un mouvement se fait <em>dans</em> un plan et <em>autour</em> de l'axe perpendiculaire à ce plan. La flexion du coude se fait dans le plan sagittal autour d'un axe transversal.</div>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> sur une coupe axiale de scanner, le foie apparaît à gauche de l'image (il est à droite du patient) et la rate à droite. Confondre les côtés est une erreur classique et grave en pratique (côté d'une lésion à opérer).</div>`
            },
            {
              titre: "Termes de position et de direction",
              contenu: `<p>Le vocabulaire de position est toujours relatif (une structure est médiale <em>par rapport</em> à une autre) et toujours défini dans la position anatomique.</p>
<table>
<thead><tr><th>Terme</th><th>Signification</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><strong>Médial</strong> / <strong>latéral</strong></td><td>Plus proche / plus éloigné du plan sagittal médian</td><td>L'ulna est médiale, le radius est latéral</td></tr>
<tr><td><strong>Médian</strong></td><td>Situé sur le plan sagittal médian</td><td>Le sternum, la ligne blanche</td></tr>
<tr><td><strong>Antérieur</strong> (ventral) / <strong>postérieur</strong> (dorsal)</td><td>Vers l'avant / vers l'arrière du corps</td><td>Le sternum est antérieur au cœur</td></tr>
<tr><td><strong>Supérieur</strong> (crânial) / <strong>inférieur</strong> (caudal)</td><td>Vers la tête / vers les pieds</td><td>Le foie est supérieur au rein droit</td></tr>
<tr><td><strong>Proximal</strong> / <strong>distal</strong></td><td>Sur un membre ou un conduit : proche / éloigné de la racine ou de l'origine</td><td>Le coude est proximal par rapport au poignet ; le duodénum est proximal par rapport au côlon</td></tr>
<tr><td><strong>Superficiel</strong> / <strong>profond</strong></td><td>Proche de / éloigné de la surface cutanée</td><td>Les veines superficielles sont sous la peau, les veines profondes accompagnent les artères</td></tr>
<tr><td><strong>Interne</strong> / <strong>externe</strong></td><td>À l'intérieur / à l'extérieur d'une cavité ou d'un organe (ne pas confondre avec médial/latéral)</td><td>Carotide interne (dans le crâne) / carotide externe</td></tr>
<tr><td><strong>Homolatéral</strong> (ipsilatéral) / <strong>controlatéral</strong></td><td>Du même côté / du côté opposé</td><td>Une lésion de l'hémisphère gauche entraîne une paralysie controlatérale (droite)</td></tr>
<tr><td><strong>Palmaire</strong> / <strong>dorsal</strong> (main), <strong>plantaire</strong> / <strong>dorsal</strong> (pied)</td><td>Face de la paume ou de la plante / face opposée</td><td>Les muscles fléchisseurs des doigts sont palmaires</td></tr>
<tr><td><strong>Radial</strong> / <strong>ulnaire</strong> ; <strong>tibial</strong> / <strong>fibulaire</strong></td><td>Côté du radius (latéral) / de l'ulna (médial) à l'avant-bras ; côté du tibia (médial) / de la fibula (latéral) à la jambe</td><td>Bord radial de l'index ; bord fibulaire du pied</td></tr>
<tr><td><strong>Rostral</strong></td><td>Vers le « bec », c'est-à-dire vers l'avant de l'encéphale</td><td>Le lobe frontal est rostral par rapport au lobe occipital</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> « interne » n'est pas synonyme de « médial » dans la nomenclature internationale, même si l'usage ancien les confondait (ancien « condyle interne du fémur », aujourd'hui « condyle médial »). De même, « proximal » et « distal » ne s'emploient que pour les membres, les vaisseaux, les nerfs et les conduits, jamais pour le tronc.</div>`
            },
            {
              titre: "Termes de mouvement",
              contenu: `<p>Les mouvements sont décrits à partir de la position anatomique, segment par segment, en précisant le plan et l'axe.</p>
<ul>
<li><strong>Flexion</strong> : diminution de l'angle entre deux segments, le segment distal se rapproche de la face antérieure (sauf au genou et aux orteils où la flexion se fait vers l'arrière, et à la cheville où l'on parle de flexion dorsale et de flexion plantaire). <strong>Extension</strong> : mouvement inverse ; au-delà de l'alignement on parle d'hyperextension.</li>
<li><strong>Abduction</strong> : éloignement du plan sagittal médian (ou, pour les doigts, de l'axe de la main passant par le 3<sup>e</sup> doigt ; pour les orteils, de l'axe passant par le 2<sup>e</sup> orteil). <strong>Adduction</strong> : rapprochement.</li>
<li><strong>Rotation médiale</strong> (interne) : la face antérieure du segment tourne vers le plan médian ; <strong>rotation latérale</strong> (externe) : elle tourne vers l'extérieur. Pour le tronc et la tête, on parle de rotation droite ou gauche.</li>
<li><strong>Pronation</strong> : rotation de l'avant-bras amenant la paume vers l'arrière (ou vers le bas si le coude est fléchi), le radius croisant l'ulna ; <strong>supination</strong> : paume vers l'avant (position anatomique). Au pied, les termes correspondants font partie de l'éversion et de l'inversion.</li>
<li><strong>Inversion</strong> du pied : la plante regarde médialement (supination + adduction + flexion plantaire) ; <strong>éversion</strong> : la plante regarde latéralement (pronation + abduction + flexion dorsale).</li>
<li><strong>Circumduction</strong> : combinaison successive de flexion, abduction, extension et adduction, le segment décrivant un cône (épaule, hanche).</li>
<li><strong>Élévation</strong> / <strong>abaissement</strong> : déplacement vertical d'une structure (scapula, mandibule). <strong>Protraction</strong> / <strong>rétraction</strong> (antépulsion / rétropulsion) : déplacement vers l'avant / vers l'arrière (scapula, mandibule).</li>
<li><strong>Opposition</strong> du pouce : mouvement complexe qui amène la pulpe du pouce au contact des autres doigts ; <strong>reposition</strong> : retour. Elle est propre à la main humaine.</li>
<li><strong>Inclinaison latérale</strong> (latéroflexion) : flexion du tronc ou de la tête dans le plan frontal.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> flexion/extension dans le plan sagittal autour d'un axe transversal ; abduction/adduction dans le plan frontal autour d'un axe sagittal ; rotations dans le plan transversal autour d'un axe vertical.</div>`
            },
            {
              titre: "Les régions du corps et les cavités",
              contenu: `<p>Le corps se divise en <strong>tête</strong>, <strong>cou</strong>, <strong>tronc</strong> (thorax, abdomen, pelvis et dos) et <strong>membres</strong> (deux membres supérieurs ou thoraciques, deux membres inférieurs ou pelviens).</p>
<h4>Les membres</h4>
<p>Chaque membre se compose d'une <strong>ceinture</strong> qui le relie au tronc et de segments libres :</p>
<table>
<thead><tr><th>Membre supérieur</th><th>Membre inférieur</th></tr></thead>
<tbody>
<tr><td>Ceinture scapulaire (clavicule, scapula)</td><td>Ceinture pelvienne (deux os coxaux + sacrum)</td></tr>
<tr><td>Épaule</td><td>Hanche</td></tr>
<tr><td>Bras (humérus)</td><td>Cuisse (fémur)</td></tr>
<tr><td>Coude</td><td>Genou</td></tr>
<tr><td>Avant-bras (radius, ulna)</td><td>Jambe (tibia, fibula)</td></tr>
<tr><td>Poignet (carpe)</td><td>Cheville (cou-de-pied)</td></tr>
<tr><td>Main (métacarpe, doigts)</td><td>Pied (tarse, métatarse, orteils)</td></tr>
</tbody>
</table>
<p>Noter la terminologie : le « bras » désigne uniquement le segment entre l'épaule et le coude, la « jambe » uniquement le segment entre le genou et la cheville. Le mot « membre » désigne l'ensemble.</p>
<h4>Les cavités du corps</h4>
<ul>
<li><strong>Cavité crânienne</strong> (encéphale) et <strong>canal vertébral</strong> (moelle spinale) : cavité dorsale, protégée par les os.</li>
<li><strong>Cavité thoracique</strong> : limitée par la cage thoracique et le diaphragme ; elle contient les deux cavités pleurales (poumons) et le médiastin (cœur, gros vaisseaux, trachée, œsophage).</li>
<li><strong>Cavité abdominale</strong> : du diaphragme au détroit supérieur du bassin ; elle contient la cavité péritonéale et ses viscères, et l'espace rétropéritonéal (reins, gros vaisseaux).</li>
<li><strong>Cavité pelvienne</strong> : dans le petit bassin, en continuité avec l'abdomen ; vessie, rectum, organes génitaux internes.</li>
</ul>
<h4>Les régions de l'abdomen</h4>
<p>La paroi abdominale antérieure est divisée en <strong>neuf régions</strong> par deux lignes verticales (médio-claviculaires) et deux lignes horizontales (sous-costale et bi-tuberculaire, ou transpylorique et transtuberculaire selon les auteurs) : hypochondre droit, épigastre, hypochondre gauche ; flanc droit, région ombilicale, flanc gauche ; fosse iliaque droite (région inguinale), hypogastre, fosse iliaque gauche. Une division plus simple en <strong>quatre quadrants</strong> (deux lignes passant par l'ombilic) est utilisée en clinique.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la douleur de l'appendicite siège classiquement dans la fosse iliaque droite (point de McBurney), celle de la cholécystite dans l'hypochondre droit, celle de la pancréatite dans l'épigastre avec irradiation dorsale.</div>`
            },
            {
              titre: "Les grands systèmes de l'organisme",
              contenu: `<p>L'anatomie systématique regroupe les organes en appareils ou systèmes qui coopèrent à une même fonction.</p>
<table>
<thead><tr><th>Système</th><th>Principaux constituants</th><th>Fonction</th></tr></thead>
<tbody>
<tr><td><strong>Squelettique</strong></td><td>206 os chez l'adulte, cartilages, ligaments</td><td>Soutien, protection, levier, hématopoïèse, réserve minérale</td></tr>
<tr><td><strong>Articulaire</strong></td><td>Articulations fibreuses, cartilagineuses, synoviales</td><td>Mobilité et stabilité</td></tr>
<tr><td><strong>Musculaire</strong></td><td>Environ 600 muscles striés squelettiques (40 % de la masse corporelle)</td><td>Mouvement, posture, thermogenèse</td></tr>
<tr><td><strong>Nerveux</strong></td><td>SN central (encéphale, moelle spinale), SN périphérique (12 paires de nerfs crâniens, 31 paires de nerfs spinaux), SN autonome</td><td>Commande, intégration, sensibilité</td></tr>
<tr><td><strong>Cardiovasculaire</strong></td><td>Cœur, artères, veines, capillaires</td><td>Transport du sang, des gaz et des nutriments</td></tr>
<tr><td><strong>Lymphatique</strong></td><td>Vaisseaux et nœuds lymphatiques, rate, thymus, amygdales</td><td>Drainage interstitiel, immunité</td></tr>
<tr><td><strong>Respiratoire</strong></td><td>Voies aériennes supérieures, larynx, trachée, bronches, poumons</td><td>Échanges gazeux, phonation</td></tr>
<tr><td><strong>Digestif</strong></td><td>Tube digestif (bouche à anus, environ 9 m), foie, pancréas, glandes salivaires</td><td>Digestion, absorption, élimination</td></tr>
<tr><td><strong>Urinaire</strong></td><td>Reins, uretères, vessie, urètre</td><td>Épuration, équilibre hydro-électrolytique</td></tr>
<tr><td><strong>Génital</strong></td><td>Gonades, voies génitales, organes génitaux externes</td><td>Reproduction, hormones sexuelles</td></tr>
<tr><td><strong>Endocrinien</strong></td><td>Hypophyse, thyroïde, parathyroïdes, surrénales, îlots pancréatiques, gonades</td><td>Régulation hormonale</td></tr>
<tr><td><strong>Tégumentaire</strong></td><td>Peau (environ 2 m<sup>2</sup>, 1,5 à 4 mm d'épaisseur), phanères, glandes</td><td>Protection, thermorégulation, sensibilité</td></tr>
</tbody>
</table>
<p>Les organes creux (viscères) sont décrits par leur configuration externe, leur configuration interne, leurs rapports, leur vascularisation (artères, veines, lymphatiques) et leur innervation. Les organes pleins (foie, rein, rate) sont décrits selon leurs faces, bords, hile et pédicule.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 206 os, 31 paires de nerfs spinaux (8 cervicaux, 12 thoraciques, 5 lombaux, 5 sacraux, 1 coccygien), 12 paires de nerfs crâniens, 12 paires de côtes, 33 vertèbres (7 + 12 + 5 + 5 + 4) dont 24 mobiles.</div>`
            }
          ],
          points_cles: [
            "La position anatomique de référence : sujet debout, regard horizontal, membres supérieurs pendants, paumes tournées vers l'avant (supination).",
            "Trois plans : sagittal (droite/gauche), frontal ou coronal (avant/arrière), transversal ou axial (haut/bas).",
            "Un mouvement se fait dans un plan et autour de l'axe perpendiculaire : flexion/extension (plan sagittal, axe transversal), abduction/adduction (plan frontal, axe sagittal), rotations (plan transversal, axe vertical).",
            "Médial/latéral se réfèrent au plan sagittal médian ; proximal/distal ne s'emploient que pour les membres et les conduits.",
            "La nomenclature internationale remplace les anciens termes : fibula (péroné), ulna (cubitus), scapula (omoplate), patella (rotule), artère subclavière (sous-clavière).",
            "Le bras est le segment entre l'épaule et le coude, la jambe entre le genou et la cheville : ne pas confondre avec le membre entier.",
            "Sur une coupe axiale de scanner, le sujet est vu par les pieds : sa droite est à gauche de l'image.",
            "Chiffres de base : 206 os, 33 vertèbres, 12 paires de côtes, 31 paires de nerfs spinaux, 12 paires de nerfs crâniens."
          ],
          lexique: [
            { terme: "Position anatomique", def: "Position conventionnelle de référence : debout, regard horizontal, membres supérieurs pendants, paumes vers l'avant." },
            { terme: "Plan sagittal médian", def: "Plan vertical antéro-postérieur divisant le corps en deux moitiés droite et gauche symétriques." },
            { terme: "Plan frontal (coronal)", def: "Plan vertical parallèle au front, séparant une partie antérieure et une partie postérieure." },
            { terme: "Plan transversal (axial)", def: "Plan horizontal perpendiculaire à l'axe du corps, séparant une partie supérieure et une partie inférieure." },
            { terme: "Médial / latéral", def: "Proche / éloigné du plan sagittal médian." },
            { terme: "Proximal / distal", def: "Sur un membre ou un conduit, proche / éloigné de la racine ou de l'origine." },
            { terme: "Pronation / supination", def: "Rotation de l'avant-bras amenant la paume vers l'arrière / vers l'avant." },
            { terme: "Circumduction", def: "Mouvement combinant flexion, abduction, extension et adduction, le segment décrivant un cône." },
            { terme: "Terminologia Anatomica", def: "Nomenclature anatomique internationale officielle, adoptée en 1998." }
          ],
          qcm: [
            {
              q: "Concernant la position anatomique de référence, quelles propositions sont exactes ?",
              options: [
                "A. Le sujet est debout, le regard dirigé vers l'avant.",
                "B. Les paumes des mains sont tournées vers l'arrière.",
                "C. Les avant-bras sont en supination.",
                "D. Le pouce est situé du côté médial de la main.",
                "E. Cette position sert de référence même si le sujet est allongé."
              ],
              bonnes: [0, 2, 4],
              explication: "A est vraie : sujet debout, regard horizontal. B est fausse : les paumes regardent vers l'avant. C est vraie : paumes en avant signifie supination. D est fausse : en supination, le pouce est latéral (côté du radius). E est vraie : la position anatomique est une convention indépendante de la position réelle du sujet."
            },
            {
              q: "Concernant les plans et les axes, quelles propositions sont exactes ?",
              options: [
                "A. Le plan frontal divise le corps en une partie droite et une partie gauche.",
                "B. La flexion du coude se fait dans le plan sagittal autour d'un axe transversal.",
                "C. L'abduction de l'épaule se fait dans le plan frontal autour d'un axe sagittal.",
                "D. Le plan transversal est aussi appelé plan coronal.",
                "E. Les rotations se font autour de l'axe vertical."
              ],
              bonnes: [1, 2, 4],
              explication: "A est fausse : c'est le plan sagittal médian qui sépare droite et gauche ; le plan frontal sépare avant et arrière. B est vraie. C est vraie. D est fausse : le plan coronal est le plan frontal ; le plan transversal est dit axial ou horizontal. E est vraie."
            },
            {
              q: "Concernant les termes de position, quelles propositions sont exactes ?",
              options: [
                "A. L'ulna est l'os médial de l'avant-bras.",
                "B. Le coude est distal par rapport au poignet.",
                "C. Les termes proximal et distal s'appliquent au tronc.",
                "D. Une structure médiane est située sur le plan sagittal médian.",
                "E. La fibula est l'os latéral de la jambe."
              ],
              bonnes: [0, 3, 4],
              explication: "A est vraie : en position anatomique, l'ulna (cubitus) est du côté du petit doigt, donc médiale. B est fausse : le coude est proximal par rapport au poignet. C est fausse : proximal et distal ne concernent que les membres et les conduits. D est vraie. E est vraie : la fibula (péroné) est latérale, le tibia est médial."
            },
            {
              q: "Concernant les mouvements, quelles propositions sont exactes ?",
              options: [
                "A. La pronation amène la paume de la main vers l'arrière.",
                "B. L'inversion du pied oriente la plante vers le dehors.",
                "C. L'abduction des doigts se définit par rapport à l'axe du 3e doigt.",
                "D. La circumduction est une rotation pure autour de l'axe vertical.",
                "E. L'opposition est un mouvement propre au pouce."
              ],
              bonnes: [0, 2, 4],
              explication: "A est vraie. B est fausse : l'inversion oriente la plante médialement (vers le dedans) ; c'est l'éversion qui l'oriente latéralement. C est vraie : l'axe de la main passe par le 3e doigt, celui du pied par le 2e orteil. D est fausse : la circumduction combine flexion, abduction, extension et adduction, le segment décrivant un cône. E est vraie."
            },
            {
              q: "Concernant la nomenclature anatomique internationale, quelles associations sont exactes ?",
              options: [
                "A. Fibula = péroné.",
                "B. Ulna = radius.",
                "C. Scapula = omoplate.",
                "D. Artère subclavière = artère sous-clavière.",
                "E. Patella = calcanéus."
              ],
              bonnes: [0, 2, 3],
              explication: "A est vraie. B est fausse : ulna correspond au cubitus. C est vraie. D est vraie. E est fausse : la patella est la rotule ; le calcanéus (calcanéum) est l'os du talon."
            },
            {
              q: "Concernant les régions et les cavités du corps, quelles propositions sont exactes ?",
              options: [
                "A. Le bras désigne l'ensemble du membre supérieur.",
                "B. La cavité thoracique est séparée de la cavité abdominale par le diaphragme.",
                "C. La paroi abdominale antérieure est classiquement divisée en neuf régions.",
                "D. La fosse iliaque droite est la région classique de la douleur appendiculaire.",
                "E. Le squelette adulte compte 306 os."
              ],
              bonnes: [1, 2, 3],
              explication: "A est fausse : le bras est le seul segment compris entre l'épaule et le coude. B est vraie. C est vraie : deux lignes verticales et deux lignes horizontales délimitent neuf régions. D est vraie (point de McBurney). E est fausse : 206 os."
            }
          ]
        },
        {
          id: "osteologie-generale",
          titre: "Ostéologie générale",
          duree: 30,
          objectifs: [
            "Classer les os selon leur forme et donner un exemple de chaque classe.",
            "Décrire la structure macroscopique d'un os long (diaphyse, épiphyses, métaphyses, périoste, cavité médullaire).",
            "Expliquer la croissance en longueur et en épaisseur des os et l'importance du cartilage de conjugaison.",
            "Décrire la vascularisation et l'innervation d'un os long.",
            "Utiliser le vocabulaire des reliefs osseux (processus, tubérosité, fosse, foramen, etc.)."
          ],
          sections: [
            {
              titre: "Le squelette : définition, fonctions et composition",
              contenu: `<p>L'<strong>ostéologie</strong> est l'étude des os. Le squelette adulte compte <strong>206 os</strong> (le nombre varie légèrement avec les os surnuméraires, sésamoïdes ou suturaux), représentant environ <strong>15 à 20 % du poids du corps</strong>. Chez le nouveau-né, on compte environ 270 pièces osseuses qui fusionneront au cours de la croissance (sacrum, os coxal, crâne).</p>
<p>On distingue :</p>
<ul>
<li>le <strong>squelette axial</strong> (80 os) : crâne (22 os dont 8 pour le neurocrâne et 14 pour la face), osselets de l'ouïe (6), os hyoïde (1), colonne vertébrale (26 pièces chez l'adulte : 24 vertèbres mobiles, sacrum, coccyx), cage thoracique (sternum et 24 côtes) ;</li>
<li>le <strong>squelette appendiculaire</strong> (126 os) : ceinture scapulaire (4), membres supérieurs (60 : 30 par membre), ceinture pelvienne (2 os coxaux), membres inférieurs (60 : 30 par membre).</li>
</ul>
<h4>Fonctions du squelette</h4>
<ul>
<li><strong>Soutien</strong> et charpente du corps, maintien de la posture.</li>
<li><strong>Protection</strong> des organes : crâne (encéphale), canal vertébral (moelle), cage thoracique (cœur, poumons), bassin (viscères pelviens).</li>
<li><strong>Mouvement</strong> : les os sont les leviers sur lesquels agissent les muscles.</li>
<li><strong>Hématopoïèse</strong> : la moelle osseuse rouge (os spongieux des épiphyses, vertèbres, côtes, sternum, os coxal) produit les cellules sanguines.</li>
<li><strong>Réserve minérale</strong> : 99 % du calcium et 85 % du phosphore de l'organisme sont stockés dans l'os ; stockage de lipides dans la moelle jaune.</li>
<li><strong>Fonction endocrine</strong> (ostéocalcine, FGF23).</li>
</ul>
<p>Le tissu osseux est un tissu conjonctif spécialisé dont la matrice est minéralisée (cristaux d'hydroxyapatite déposés sur des fibres de collagène de type I). Il en existe deux formes macroscopiques : l'<strong>os compact</strong> (cortical), dense, formé d'ostéons, et l'<strong>os spongieux</strong> (trabéculaire), formé de travées orientées selon les lignes de force et contenant la moelle osseuse.</p>`
            },
            {
              titre: "Classification des os",
              contenu: `<p>Les os sont classés d'après leur <strong>forme</strong>, qui reflète leur fonction.</p>
<table>
<thead><tr><th>Type</th><th>Caractéristiques</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td><strong>Os longs</strong></td><td>La longueur l'emporte nettement sur la largeur et l'épaisseur. Une diaphyse tubulaire et deux épiphyses. Leviers des membres.</td><td>Humérus, radius, ulna, fémur, tibia, fibula, métacarpiens, métatarsiens, phalanges, clavicule</td></tr>
<tr><td><strong>Os courts</strong></td><td>Trois dimensions voisines, forme cubique ; os spongieux entouré d'une mince corticale. Transmettent les forces et permettent de petits mouvements.</td><td>Os du carpe, os du tarse</td></tr>
<tr><td><strong>Os plats</strong></td><td>Deux dimensions prédominent ; deux tables d'os compact enserrant une couche spongieuse (le « diploé » au crâne). Protection et larges surfaces d'insertion musculaire.</td><td>Os de la voûte crânienne, sternum, côtes, scapula, os coxal</td></tr>
<tr><td><strong>Os irréguliers</strong></td><td>Forme complexe n'entrant dans aucune autre catégorie.</td><td>Vertèbres, sacrum, os de la base du crâne (sphénoïde, ethmoïde, temporal), os de la face</td></tr>
<tr><td><strong>Os pneumatiques</strong></td><td>Creusés de cavités remplies d'air (sinus) tapissées de muqueuse.</td><td>Os frontal, maxillaire, ethmoïde, sphénoïde, temporal (cellules mastoïdiennes)</td></tr>
<tr><td><strong>Os sésamoïdes</strong></td><td>Petits os développés dans l'épaisseur d'un tendon, au voisinage d'une articulation ; ils modifient l'angle de traction du tendon et le protègent.</td><td>Patella (le plus grand), sésamoïdes du pouce et du gros orteil</td></tr>
<tr><td><strong>Os suturaux</strong> (wormiens)</td><td>Petits os surnuméraires inconstants dans les sutures du crâne.</td><td>Suture lambdoïde</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la clavicule est un os long (elle a une diaphyse et deux extrémités) mais elle n'a pas de cavité médullaire et s'ossifie en partie sur membrane (ossification mixte). La patella est un os sésamoïde et non un os court. Les côtes sont des os plats bien qu'elles soient allongées.</div>`
            },
            {
              titre: "Structure d'un os long",
              contenu: `<p>L'os long est le modèle de description.</p>
<ul>
<li>La <strong>diaphyse</strong> : corps de l'os, tubulaire, formé d'un épais manchon d'<strong>os compact</strong> (cortical) délimitant la <strong>cavité médullaire</strong> qui contient la moelle osseuse (rouge chez l'enfant, jaune graisseuse chez l'adulte). Elle est souvent décrite comme prismatique triangulaire, avec trois faces et trois bords.</li>
<li>Les <strong>épiphyses</strong> (proximale et distale) : extrémités renflées, formées d'<strong>os spongieux</strong> recouvert d'une mince corticale ; elles portent les <strong>surfaces articulaires</strong> recouvertes de <strong>cartilage articulaire</strong> hyalin (1 à 5 mm d'épaisseur, plus épais sur les surfaces très sollicitées comme la patella).</li>
<li>Les <strong>métaphyses</strong> : zones de transition entre diaphyse et épiphyses, siège du <strong>cartilage de conjugaison</strong> (cartilage de croissance ou physe) chez l'enfant. Richement vascularisées, elles sont le siège fréquent des ostéomyélites et des tumeurs primitives de l'os.</li>
<li>Le <strong>périoste</strong> : membrane conjonctive qui recouvre l'os sauf au niveau des surfaces articulaires et des insertions tendineuses. Il comprend une couche externe fibreuse (fibres de Sharpey qui l'ancrent à l'os) et une couche interne ostéogénique (ostéoblastes). Il est très innervé (douleur des fractures) et vascularisé.</li>
<li>L'<strong>endoste</strong> : fine membrane cellulaire tapissant la cavité médullaire et les travées.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le périoste est indispensable à la croissance en épaisseur et à la consolidation des fractures (cal périosté). Un os dépériosté se nécrose. Les surfaces articulaires n'ont pas de périoste : elles sont couvertes de cartilage hyalin, lui-même non vascularisé et non innervé.</div>
<h4>Les autres os</h4>
<p>Les os courts et irréguliers sont constitués d'os spongieux entouré d'une mince coque corticale, sans cavité médullaire. Les os plats comportent deux tables compactes (table externe et table interne au crâne) séparées par une couche d'os spongieux (diploé). Les os pneumatiques comportent des cavités aériennes communiquant avec les cavités nasales ou l'oreille moyenne.</p>
<h4>Architecture et lignes de force</h4>
<p>Les travées de l'os spongieux s'orientent selon les lignes de contrainte mécanique (loi de Wolff : l'os s'adapte aux contraintes). Au col fémoral, on décrit un éventail de sustentation et un faisceau arciforme, avec une zone de faiblesse (triangle de Ward) expliquant la fréquence des fractures du col chez le sujet âgé ostéoporotique.</p>`
            },
            {
              titre: "Ossification et croissance",
              contenu: `<p>Le squelette se forme à partir du mésenchyme selon deux modes :</p>
<ul>
<li><strong>Ossification membraneuse</strong> (directe, intramembraneuse) : le mésenchyme se transforme directement en os, sans stade cartilagineux. Elle concerne les os de la voûte du crâne, la plupart des os de la face, et en partie la clavicule et la mandibule.</li>
<li><strong>Ossification endochondrale</strong> (indirecte) : une maquette cartilagineuse est progressivement remplacée par de l'os. Elle concerne les os des membres, la colonne vertébrale, les côtes, le sternum, la base du crâne. C'est ce mode qui permet la croissance en longueur.</li>
</ul>
<h4>Les points d'ossification</h4>
<p>Dans un os long, l'ossification débute par un <strong>point primaire</strong> diaphysaire (apparu dès la 7<sup>e</sup>–12<sup>e</sup> semaine de vie intra-utérine pour la plupart des os longs), puis par des <strong>points secondaires</strong> épiphysaires qui apparaissent à des âges précis (par exemple l'épiphyse distale du fémur et l'épiphyse proximale du tibia sont présentes à la naissance ; la tête fémorale apparaît vers 4–6 mois ; les points du coude entre 1 et 12 ans). La connaissance de l'ordre d'apparition des points d'ossification permet de déterminer l'<strong>âge osseux</strong> sur une radiographie (main et poignet gauches selon l'atlas de Greulich et Pyle).</p>
<h4>Croissance en longueur</h4>
<p>Elle se fait au niveau du <strong>cartilage de conjugaison</strong> (physe), disque de cartilage hyalin situé entre épiphyse et métaphyse. Les chondrocytes prolifèrent du côté épiphysaire (zone germinative, zone de prolifération en colonnes), s'hypertrophient, puis la matrice se calcifie et est remplacée par de l'os du côté métaphysaire. La croissance s'arrête quand la physe s'ossifie (<strong>soudure</strong>), entre <strong>14 et 16 ans chez la fille</strong> et <strong>16 et 18 ans chez le garçon</strong>, sous l'effet des hormones sexuelles. Les physes « fertiles » (les plus actives) sont celles proches du genou (fémur distal, tibia proximal) et loin du coude (humérus proximal, radius distal).</p>
<h4>Croissance en épaisseur</h4>
<p>Elle est assurée par le <strong>périoste</strong> : apposition d'os en surface par les ostéoblastes de la couche interne, tandis que l'endoste résorbe l'os du côté de la cavité médullaire (modelage).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> chez l'enfant, le cartilage de conjugaison est un point de faiblesse : les fractures-décollements épiphysaires (classification de Salter et Harris, 5 types) peuvent entraîner un arrêt de croissance ou une déviation axiale si la physe est lésée. Chez l'adulte, la ligne épiphysaire (cicatrice de la physe) reste parfois visible en radiographie.</div>`
            },
            {
              titre: "Vascularisation et innervation des os",
              contenu: `<p>L'os est un tissu vivant, richement vascularisé (5 à 10 % du débit cardiaque). La vascularisation d'un os long provient de trois systèmes :</p>
<ul>
<li>L'<strong>artère nourricière</strong> (diaphysaire) : branche d'une artère régionale, elle pénètre obliquement la diaphyse par le <strong>foramen nourricier</strong> (généralement dirigé à l'opposé de la physe la plus active : « vers le coude je vais, du genou je fuis »), traverse la corticale et se divise dans la cavité médullaire en une branche ascendante et une branche descendante. Elle vascularise la moelle et les deux tiers internes de la corticale.</li>
<li>Les <strong>artères périostées</strong> : nombreuses, issues des muscles voisins, elles vascularisent le tiers externe de la corticale. Leur rôle devient prépondérant après une fracture.</li>
<li>Les <strong>artères épiphysaires et métaphysaires</strong> : issues des réseaux anastomotiques péri-articulaires. Avant la fermeture de la physe, les circulations épiphysaire et métaphysaire sont indépendantes (la physe est une barrière), ce qui explique certaines nécroses épiphysaires de l'enfant (ostéochondrite de la hanche).</li>
</ul>
<p>Le retour veineux se fait par des veines satellites, un vaste réseau médullaire et des veines périostées. Le drainage lymphatique concerne essentiellement le périoste.</p>
<h4>Innervation</h4>
<p>Les nerfs accompagnent les vaisseaux (nerfs vasomoteurs) et innervent surtout le <strong>périoste</strong>, très sensible, ainsi que la moelle et l'os lui-même par des fibres nociceptives. La loi de Hilton énonce que les nerfs qui innervent une articulation innervent aussi les muscles qui la mobilisent et la peau qui la recouvre.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> une fracture déplacée peut déchirer l'artère nourricière ; la consolidation dépend alors du périoste. Certaines régions à vascularisation précaire (col du fémur, col du talus, scaphoïde) sont exposées à la pseudarthrose et à la nécrose avasculaire. Au scaphoïde, l'artère pénètre par le pôle distal : une fracture du pôle proximal expose à la nécrose du fragment proximal.</div>`
            },
            {
              titre: "Vocabulaire des reliefs osseux",
              contenu: `<p>La surface des os présente des <strong>saillies</strong> (insertions musculaires et ligamentaires, surfaces articulaires), des <strong>dépressions</strong> et des <strong>orifices</strong>. Le vocabulaire est standardisé.</p>
<h4>Saillies non articulaires</h4>
<table>
<thead><tr><th>Terme</th><th>Définition</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><strong>Processus</strong> (apophyse)</td><td>Saillie marquée, allongée</td><td>Processus coracoïde, processus épineux</td></tr>
<tr><td><strong>Tubercule</strong></td><td>Petite saillie arrondie</td><td>Tubercule majeur de l'humérus</td></tr>
<tr><td><strong>Tubérosité</strong></td><td>Saillie large et rugueuse</td><td>Tubérosité tibiale, tubérosité ischiatique</td></tr>
<tr><td><strong>Trochanter</strong></td><td>Grosse saillie propre au fémur</td><td>Grand et petit trochanters</td></tr>
<tr><td><strong>Épine</strong></td><td>Saillie pointue ou lame</td><td>Épine de la scapula, épine ischiatique</td></tr>
<tr><td><strong>Crête</strong></td><td>Saillie linéaire proéminente</td><td>Crête iliaque</td></tr>
<tr><td><strong>Ligne</strong></td><td>Saillie linéaire peu marquée</td><td>Ligne âpre du fémur</td></tr>
<tr><td><strong>Épicondyle</strong></td><td>Saillie au-dessus d'un condyle</td><td>Épicondyles médial et latéral de l'humérus</td></tr>
<tr><td><strong>Malléole</strong></td><td>Saillie en forme de marteau</td><td>Malléoles médiale (tibia) et latérale (fibula)</td></tr>
<tr><td><strong>Protubérance</strong></td><td>Saillie arrondie</td><td>Protubérance occipitale externe</td></tr>
</tbody>
</table>
<h4>Saillies articulaires</h4>
<table>
<thead><tr><th>Terme</th><th>Définition</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><strong>Tête</strong></td><td>Extrémité arrondie, souvent portée par un col</td><td>Tête fémorale, tête humérale, tête radiale</td></tr>
<tr><td><strong>Col</strong></td><td>Partie rétrécie reliant la tête au corps</td><td>Col fémoral (angle cervico-diaphysaire 125° à 135°), col anatomique de l'humérus</td></tr>
<tr><td><strong>Condyle</strong></td><td>Surface articulaire arrondie, convexe</td><td>Condyles fémoraux, condyles occipitaux</td></tr>
<tr><td><strong>Trochlée</strong></td><td>Surface en forme de poulie</td><td>Trochlée humérale, trochlée du talus</td></tr>
<tr><td><strong>Facette</strong></td><td>Petite surface articulaire plane</td><td>Facettes costales des vertèbres thoraciques</td></tr>
<tr><td><strong>Capitulum</strong></td><td>Petite tête</td><td>Capitulum de l'humérus (articulé avec la tête radiale)</td></tr>
</tbody>
</table>
<h4>Dépressions et orifices</h4>
<table>
<thead><tr><th>Terme</th><th>Définition</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><strong>Fosse</strong></td><td>Dépression large</td><td>Fosse olécrânienne, fosse iliaque</td></tr>
<tr><td><strong>Fossette</strong></td><td>Petite dépression</td><td>Fossette de la tête fémorale (fovea capitis)</td></tr>
<tr><td><strong>Sillon</strong> (gouttière)</td><td>Dépression allongée où chemine un tendon, un vaisseau ou un nerf</td><td>Sillon du nerf radial, sillon intertuberculaire</td></tr>
<tr><td><strong>Incisure</strong> (échancrure)</td><td>Encoche sur le bord d'un os</td><td>Incisure ischiatique, incisure scapulaire</td></tr>
<tr><td><strong>Foramen</strong> (trou)</td><td>Orifice traversant l'os</td><td>Foramen magnum, foramen obturé</td></tr>
<tr><td><strong>Canal</strong></td><td>Conduit osseux allongé</td><td>Canal carotidien, canal optique</td></tr>
<tr><td><strong>Fissure</strong></td><td>Fente étroite</td><td>Fissure orbitaire supérieure</td></tr>
<tr><td><strong>Méat</strong></td><td>Orifice d'un conduit</td><td>Méat acoustique externe</td></tr>
<tr><td><strong>Sinus</strong></td><td>Cavité creusée dans un os</td><td>Sinus frontal, maxillaire</td></tr>
<tr><td><strong>Cavité</strong></td><td>Dépression articulaire profonde</td><td>Cavité glénoïdale, acétabulum</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> les saillies rugueuses (tubérosités, crêtes, lignes) correspondent à des insertions musculaires ou ligamentaires ; les saillies lisses (têtes, condyles, trochlées) sont des surfaces articulaires recouvertes de cartilage.</div>`
            }
          ],
          points_cles: [
            "Le squelette adulte compte 206 os : 80 pour le squelette axial, 126 pour le squelette appendiculaire.",
            "Les os sont classés en os longs, courts, plats, irréguliers, pneumatiques et sésamoïdes ; la patella est le plus grand os sésamoïde.",
            "Un os long comprend une diaphyse (os compact, cavité médullaire), deux épiphyses (os spongieux, cartilage articulaire) et deux métaphyses (cartilage de conjugaison chez l'enfant).",
            "Le périoste recouvre l'os sauf les surfaces articulaires ; il assure la croissance en épaisseur, la consolidation des fractures et la sensibilité douloureuse.",
            "La croissance en longueur se fait au cartilage de conjugaison, qui se soude vers 14–16 ans chez la fille et 16–18 ans chez le garçon.",
            "Ossification membraneuse pour la voûte du crâne et la face ; endochondrale pour les membres, la colonne, la base du crâne.",
            "Trois sources vasculaires pour un os long : artère nourricière (foramen nourricier), artères périostées, artères épiphyso-métaphysaires.",
            "Les métaphyses, très vascularisées, sont le siège des ostéomyélites et des tumeurs primitives.",
            "Saillies rugueuses = insertions ; saillies lisses (tête, condyle, trochlée) = surfaces articulaires."
          ],
          lexique: [
            { terme: "Diaphyse", def: "Corps tubulaire d'un os long, formé d'os compact entourant la cavité médullaire." },
            { terme: "Épiphyse", def: "Extrémité renflée d'un os long, en os spongieux, portant les surfaces articulaires." },
            { terme: "Métaphyse", def: "Zone de transition entre diaphyse et épiphyse, siège du cartilage de croissance chez l'enfant." },
            { terme: "Cartilage de conjugaison (physe)", def: "Disque de cartilage hyalin responsable de la croissance en longueur, qui s'ossifie à la fin de l'adolescence." },
            { terme: "Périoste", def: "Membrane conjonctive fibreuse et ostéogénique recouvrant l'os en dehors des surfaces articulaires." },
            { terme: "Os sésamoïde", def: "Petit os développé dans un tendon près d'une articulation (ex. patella)." },
            { terme: "Diploé", def: "Couche d'os spongieux comprise entre les deux tables compactes des os de la voûte crânienne." },
            { terme: "Foramen nourricier", def: "Orifice oblique de la diaphyse par lequel pénètre l'artère nourricière." },
            { terme: "Ossification endochondrale", def: "Formation d'os par remplacement progressif d'une maquette cartilagineuse." }
          ],
          qcm: [
            {
              q: "Concernant la classification des os, quelles propositions sont exactes ?",
              options: [
                "A. La clavicule est un os long.",
                "B. La patella est un os court.",
                "C. Les os du carpe sont des os courts.",
                "D. Les vertèbres sont des os irréguliers.",
                "E. Le sternum est un os pneumatique."
              ],
              bonnes: [0, 2, 3],
              explication: "A est vraie : la clavicule a une diaphyse et deux extrémités, même si elle n'a pas de cavité médullaire. B est fausse : la patella est le plus grand os sésamoïde. C est vraie. D est vraie. E est fausse : le sternum est un os plat ; les os pneumatiques (frontal, maxillaire, ethmoïde, sphénoïde, temporal) contiennent des cavités aériennes."
            },
            {
              q: "Concernant la structure d'un os long, quelles propositions sont exactes ?",
              options: [
                "A. La diaphyse est constituée essentiellement d'os spongieux.",
                "B. Les épiphyses sont recouvertes de cartilage articulaire hyalin.",
                "C. Le périoste recouvre la totalité de l'os, y compris les surfaces articulaires.",
                "D. La métaphyse est le siège du cartilage de conjugaison chez l'enfant.",
                "E. La cavité médullaire de l'adulte contient de la moelle jaune."
              ],
              bonnes: [1, 3, 4],
              explication: "A est fausse : la diaphyse est faite d'os compact entourant la cavité médullaire. B est vraie. C est fausse : le périoste s'arrête aux surfaces articulaires, couvertes de cartilage. D est vraie. E est vraie : la moelle rouge persiste dans l'os spongieux (épiphyses, vertèbres, côtes, sternum, os coxal)."
            },
            {
              q: "Concernant la croissance des os, quelles propositions sont exactes ?",
              options: [
                "A. La croissance en longueur se fait au niveau du périoste.",
                "B. La croissance en épaisseur dépend du périoste.",
                "C. Le cartilage de conjugaison se soude plus tôt chez la fille que chez le garçon.",
                "D. Les os de la voûte du crâne se forment par ossification endochondrale.",
                "E. La physe est une barrière entre les circulations épiphysaire et métaphysaire chez l'enfant."
              ],
              bonnes: [1, 2, 4],
              explication: "A est fausse : la croissance en longueur se fait au cartilage de conjugaison. B est vraie. C est vraie : 14–16 ans chez la fille, 16–18 ans chez le garçon. D est fausse : la voûte du crâne s'ossifie sur membrane. E est vraie, ce qui explique certaines nécroses épiphysaires de l'enfant."
            },
            {
              q: "Concernant la vascularisation des os, quelles propositions sont exactes ?",
              options: [
                "A. L'artère nourricière pénètre la diaphyse par le foramen nourricier.",
                "B. Les artères périostées vascularisent le tiers externe de la corticale.",
                "C. Le cartilage articulaire est richement vascularisé.",
                "D. Le col du fémur et le scaphoïde ont une vascularisation précaire exposant à la nécrose.",
                "E. L'os ne reçoit aucune innervation sensitive."
              ],
              bonnes: [0, 1, 3],
              explication: "A est vraie. B est vraie ; l'artère nourricière vascularise la moelle et les deux tiers internes. C est fausse : le cartilage hyalin articulaire est avasculaire, nourri par le liquide synovial. D est vraie. E est fausse : le périoste est très innervé, ce qui explique la douleur des fractures."
            },
            {
              q: "Concernant le vocabulaire des reliefs osseux, quelles associations sont exactes ?",
              options: [
                "A. Un foramen est un orifice traversant l'os.",
                "B. Une trochlée est une surface articulaire en forme de poulie.",
                "C. Une tubérosité est une dépression large.",
                "D. Un trochanter est une saillie propre au fémur.",
                "E. Une incisure est une encoche sur le bord d'un os."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la tubérosité est une saillie large et rugueuse (insertion musculaire) ; la dépression large est la fosse."
            },
            {
              q: "Concernant le squelette dans son ensemble, quelles propositions sont exactes ?",
              options: [
                "A. Le squelette axial comprend le crâne, la colonne vertébrale et la cage thoracique.",
                "B. Chaque membre supérieur compte 30 os (hors ceinture).",
                "C. Les os plats du crâne comportent deux tables compactes séparées par le diploé.",
                "D. L'os stocke environ 99 % du calcium de l'organisme.",
                "E. Les ostéomyélites de l'enfant siègent préférentiellement au niveau de la diaphyse."
              ],
              bonnes: [0, 1, 2, 3],
              explication: "A, B, C et D sont vraies. E est fausse : les ostéomyélites et les tumeurs primitives siègent préférentiellement dans la métaphyse, zone très vascularisée."
            }
          ]
        },
        {
          id: "arthrologie-generale",
          titre: "Arthrologie générale",
          duree: 30,
          objectifs: [
            "Classer les articulations en fibreuses, cartilagineuses et synoviales et donner des exemples.",
            "Décrire les éléments constitutifs d'une articulation synoviale (surfaces, cartilage, capsule, synoviale, ligaments, éléments accessoires).",
            "Reconnaître les types morphologiques d'articulations synoviales et leur nombre de degrés de liberté.",
            "Décrire les facteurs de stabilité et de mobilité d'une articulation.",
            "Relier la structure articulaire aux principales pathologies (entorse, luxation, arthrose, arthrite)."
          ],
          sections: [
            {
              titre: "Définition et classification générale",
              contenu: `<p>L'<strong>arthrologie</strong> est l'étude des articulations. Une <strong>articulation</strong> (jointure) est l'ensemble des éléments qui unissent deux ou plusieurs os entre eux. Elle réalise un compromis entre deux exigences contradictoires : la <strong>mobilité</strong> et la <strong>stabilité</strong>.</p>
<p>La classification repose sur la nature du tissu qui unit les os et sur la présence ou non d'une cavité articulaire :</p>
<table>
<thead><tr><th>Classe</th><th>Tissu d'union</th><th>Cavité</th><th>Mobilité</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td><strong>Articulations fibreuses</strong> (synarthroses)</td><td>Tissu conjonctif fibreux dense</td><td>Non</td><td>Nulle ou très faible</td><td>Sutures du crâne, syndesmoses (membrane interosseuse), gomphoses (dents)</td></tr>
<tr><td><strong>Articulations cartilagineuses</strong> (amphiarthroses)</td><td>Cartilage hyalin ou fibrocartilage</td><td>Non</td><td>Faible</td><td>Synchondroses (cartilage de conjugaison, 1re côte–sternum), symphyses (disques intervertébraux, symphyse pubienne)</td></tr>
<tr><td><strong>Articulations synoviales</strong> (diarthroses)</td><td>Capsule fibreuse, membrane synoviale</td><td>Oui, contenant du liquide synovial</td><td>Importante</td><td>Toutes les articulations des membres (épaule, hanche, genou…), articulations zygapophysaires</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> seules les articulations synoviales possèdent une cavité articulaire, une capsule et du liquide synovial. Ce sont elles qui permettent les grands mouvements, mais aussi elles qui se luxent, s'enraidissent (arthrose) ou s'enflamment (arthrite).</div>`
            },
            {
              titre: "Les articulations fibreuses et cartilagineuses",
              contenu: `<h4>Articulations fibreuses</h4>
<ul>
<li>Les <strong>sutures</strong> : unissent les os du crâne par une mince couche de tissu fibreux (ligament sutural). Chez le nourrisson, les espaces membraneux entre les os (fontanelles) permettent le modelage du crâne à la naissance et la croissance de l'encéphale. Les sutures s'ossifient progressivement (synostose) à l'âge adulte (vers 30–40 ans pour la suture sagittale). Selon leur forme on distingue les sutures dentelées (sagittale, coronale), squameuses (temporo-pariétale) et planes (os de la face).</li>
<li>Les <strong>syndesmoses</strong> : les os sont unis par un ligament ou une membrane interosseuse qui autorise un léger mouvement : membrane interosseuse antébrachiale (radius–ulna), membrane interosseuse crurale (tibia–fibula), syndesmose tibio-fibulaire distale.</li>
<li>Les <strong>gomphoses</strong> : articulation d'une dent avec son alvéole par le ligament alvéolo-dentaire (desmodonte).</li>
</ul>
<h4>Articulations cartilagineuses</h4>
<ul>
<li>Les <strong>synchondroses</strong> (articulations cartilagineuses primaires) : les os sont unis par du <strong>cartilage hyalin</strong>. Elles sont généralement temporaires et se transforment en synostose : cartilage de conjugaison, synchondrose sphéno-occipitale (soudée vers 18–20 ans), cartilage en Y de l'acétabulum. La 1<sup>re</sup> articulation sterno-costale est une synchondrose permanente.</li>
<li>Les <strong>symphyses</strong> (articulations cartilagineuses secondaires) : les surfaces osseuses recouvertes de cartilage hyalin sont unies par un <strong>fibrocartilage</strong> : disques intervertébraux (23 disques, du 2<sup>e</sup> au 5<sup>e</sup> espace lombal), symphyse pubienne, symphyse manubrio-sternale. Elles sont permanentes, situées sur la ligne médiane, solides et peu mobiles, mais la somme de leurs mouvements donne la souplesse de la colonne.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la symphyse pubienne et les disques intervertébraux sont des articulations cartilagineuses (symphyses), non des articulations synoviales : pas de capsule, pas de synoviale. En revanche, les articulations zygapophysaires (entre les processus articulaires des vertèbres) sont bien synoviales planes.</div>`
            },
            {
              titre: "Les éléments constitutifs d'une articulation synoviale",
              contenu: `<p>Une articulation synoviale associe des éléments constants et des éléments accessoires.</p>
<h4>Éléments constants</h4>
<ul>
<li>Les <strong>surfaces articulaires</strong> : zones osseuses en contact, de forme réciproque (convexe/concave), lisses, recouvertes de <strong>cartilage articulaire</strong>.</li>
<li>Le <strong>cartilage articulaire</strong> : cartilage <strong>hyalin</strong> (sauf aux articulations temporo-mandibulaire, sterno-claviculaire et acromio-claviculaire où il est fibreux), de 1 à 5 mm d'épaisseur (jusqu'à 6–7 mm sur la patella). Il est <strong>avasculaire, non innervé, dépourvu de périchondre</strong>, nourri par imbibition à partir du liquide synovial. Il absorbe les chocs et réduit les frottements (coefficient de friction très bas). Sa dégradation définit l'<strong>arthrose</strong> ; il ne se régénère pas.</li>
<li>La <strong>capsule articulaire</strong> : manchon fibreux qui s'insère sur le pourtour des surfaces articulaires (ou à distance, sur les cols) et délimite la cavité articulaire. Elle est plus ou moins lâche selon la mobilité recherchée (lâche à l'épaule, serrée à la hanche). Elle est renforcée par des épaississements, les ligaments capsulaires.</li>
<li>La <strong>membrane synoviale</strong> : tapisse la face profonde de la capsule et toutes les surfaces intra-articulaires non cartilagineuses (os, ligaments intra-capsulaires). Elle ne recouvre jamais le cartilage. Richement vascularisée et innervée, elle sécrète le <strong>liquide synovial</strong> et forme parfois des replis (franges, plis synoviaux) et des <strong>bourses</strong> qui communiquent avec la cavité.</li>
<li>Le <strong>liquide synovial</strong> (synovie) : filtrat plasmatique enrichi en acide hyaluronique, visqueux, jaune pâle, présent en très faible quantité (0,5 à 4 mL dans le genou). Il lubrifie, nourrit le cartilage et évacue les débris. Son analyse (ponction) distingue les liquides mécaniques (moins de 2 000 éléments/mm<sup>3</sup>) et inflammatoires.</li>
<li>Les <strong>ligaments</strong> : bandes de tissu conjonctif dense unissant les os, passifs, renforçant la capsule. Ils peuvent être intrinsèques (épaississements capsulaires : ligament ilio-fémoral), extrinsèques extracapsulaires (ligaments collatéraux du genou) ou intracapsulaires (ligaments croisés du genou, ligament de la tête fémorale). Ils sont richement innervés (proprioception, douleur de l'entorse).</li>
</ul>
<h4>Éléments accessoires</h4>
<ul>
<li>Le <strong>labrum</strong> (bourrelet) : anneau de fibrocartilage fixé sur le pourtour d'une cavité articulaire pour en augmenter la profondeur et la surface (labrum glénoïdal de l'épaule, labrum acétabulaire de la hanche).</li>
<li>Les <strong>ménisques</strong> et <strong>disques articulaires</strong> : fibrocartilages interposés entre deux surfaces non concordantes, qui améliorent la congruence et répartissent les pressions (ménisques du genou, disque de l'articulation temporo-mandibulaire, disque sterno-claviculaire, disque radio-ulnaire distal).</li>
<li>Les <strong>bourses synoviales</strong> et <strong>gaines synoviales</strong> : sacs de synoviale interposés entre un tendon et un os ou la peau, limitant les frottements (bourse subacromiale, bourse prépatellaire).</li>
<li>Les <strong>coussinets adipeux</strong> (corps adipeux infrapatellaire) comblant les espaces morts.</li>
<li>Les <strong>muscles péri-articulaires</strong>, ligaments actifs, principaux stabilisateurs dynamiques.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> un épanchement articulaire (hydarthrose, hémarthrose) distend la capsule et provoque douleur et limitation. Au genou, il se traduit par le signe du « choc patellaire ». Une ponction permet d'analyser le liquide. Une arthrite septique détruit le cartilage en quelques jours : urgence thérapeutique.</div>`
            },
            {
              titre: "Classification morphologique des articulations synoviales et degrés de liberté",
              contenu: `<p>Les articulations synoviales sont classées d'après la <strong>forme des surfaces articulaires</strong>, qui détermine les mouvements possibles. Un <strong>degré de liberté</strong> correspond à un axe de rotation possible (au maximum trois).</p>
<table>
<thead><tr><th>Type</th><th>Forme des surfaces</th><th>Degrés de liberté</th><th>Mouvements</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td><strong>Sphéroïde</strong> (énarthrose)</td><td>Sphère pleine dans une sphère creuse</td><td>3</td><td>Flexion/extension, abduction/adduction, rotations, circumduction</td><td>Scapulo-humérale, coxo-fémorale</td></tr>
<tr><td><strong>Ellipsoïde</strong> (condylienne)</td><td>Ovoïde convexe dans un ovoïde concave</td><td>2</td><td>Flexion/extension, abduction/adduction (pas de rotation axiale)</td><td>Radio-carpienne, métacarpo-phalangiennes, atlanto-occipitale</td></tr>
<tr><td><strong>En selle</strong> (par emboîtement réciproque)</td><td>Deux surfaces concaves dans un sens et convexes dans l'autre</td><td>2 (+ rotation automatique)</td><td>Flexion/extension, abduction/adduction, circumduction</td><td>Trapézo-métacarpienne du pouce, sterno-claviculaire, calcanéo-cuboïdienne</td></tr>
<tr><td><strong>Bicondylaire</strong></td><td>Deux condyles convexes sur deux surfaces peu creusées</td><td>2</td><td>Flexion/extension et rotation axiale limitée</td><td>Genou (fémoro-tibiale), temporo-mandibulaire</td></tr>
<tr><td><strong>Ginglyme</strong> (trochléenne, charnière)</td><td>Poulie (trochlée) dans une surface en gorge</td><td>1</td><td>Flexion/extension</td><td>Huméro-ulnaire, interphalangiennes, talo-crurale</td></tr>
<tr><td><strong>Trochoïde</strong> (pivot)</td><td>Cylindre plein dans un anneau ostéo-fibreux</td><td>1</td><td>Rotation autour de l'axe longitudinal</td><td>Radio-ulnaires proximale et distale, atlanto-axoïdienne médiane</td></tr>
<tr><td><strong>Plane</strong> (arthrodie)</td><td>Surfaces planes ou presque</td><td>0 axe défini (glissements)</td><td>Glissements de faible amplitude</td><td>Zygapophysaires, intercarpiennes, intertarsiennes, acromio-claviculaire</td></tr>
</tbody>
</table>
<p>Les articulations à un degré de liberté sont les plus stables (congruence élevée), celles à trois degrés les plus mobiles mais les plus instables (épaule : l'articulation la plus mobile et la plus souvent luxée).</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> l'articulation du coude comprend trois articulations dans une seule capsule : huméro-ulnaire (ginglyme), huméro-radiale (sphéroïde fonctionnellement limitée) et radio-ulnaire proximale (trochoïde). L'articulation du genou est bicondylaire (et non un simple ginglyme) : elle autorise une rotation axiale genou fléchi. La trapézo-métacarpienne est en selle, ce qui permet l'opposition du pouce.</div>
<h4>Articulations simples, composées et complexes</h4>
<ul>
<li><strong>Simple</strong> : deux os seulement (hanche, interphalangienne).</li>
<li><strong>Composée</strong> : plus de deux os dans une même capsule (coude, radio-carpienne).</li>
<li><strong>Complexe</strong> : présence d'un ménisque ou d'un disque intra-articulaire (genou, temporo-mandibulaire).</li>
</ul>`
            },
            {
              titre: "Mouvements, stabilité et mobilité",
              contenu: `<h4>Les mouvements élémentaires</h4>
<p>Entre deux surfaces articulaires, on décrit trois mouvements élémentaires : le <strong>glissement</strong> (translation d'une surface sur l'autre), le <strong>roulement</strong> (comme une roue sur le sol) et le <strong>pivotement</strong> (rotation autour d'un axe perpendiculaire aux surfaces). Les mouvements physiologiques les combinent : la flexion du genou associe roulement et glissement des condyles fémoraux sur les plateaux tibiaux.</p>
<h4>Amplitudes articulaires de référence</h4>
<table>
<thead><tr><th>Articulation</th><th>Flexion</th><th>Extension</th><th>Abduction</th><th>Rotations</th></tr></thead>
<tbody>
<tr><td>Épaule (complexe)</td><td>180°</td><td>45–50°</td><td>180°</td><td>Médiale 95°, latérale 80°</td></tr>
<tr><td>Coude</td><td>140–145°</td><td>0° (hyperextension 5–10°)</td><td>—</td><td>Pronation 85°, supination 90°</td></tr>
<tr><td>Poignet</td><td>85°</td><td>85°</td><td>Inclinaison radiale 15°, ulnaire 45°</td><td>—</td></tr>
<tr><td>Hanche</td><td>120° (genou fléchi)</td><td>15–20°</td><td>45°</td><td>Médiale 30–40°, latérale 60°</td></tr>
<tr><td>Genou</td><td>140–160°</td><td>0°</td><td>—</td><td>Médiale 10°, latérale 30–40° (genou fléchi)</td></tr>
<tr><td>Cheville</td><td>Flexion plantaire 40–50°</td><td>Flexion dorsale 20–30°</td><td>—</td><td>—</td></tr>
</tbody>
</table>
<h4>Facteurs de stabilité</h4>
<ul>
<li><strong>Congruence osseuse</strong> : plus les surfaces s'emboîtent (hanche : tête profondément enfouie dans l'acétabulum), plus l'articulation est stable ; l'épaule, dont la tête humérale n'est en contact qu'avec un tiers de la glène, est instable.</li>
<li><strong>Capsule et ligaments</strong> : stabilisateurs passifs, mis en tension en fin de course (ligament ilio-fémoral verrouillant la hanche en extension).</li>
<li><strong>Muscles péri-articulaires</strong> : stabilisateurs actifs (coiffe des rotateurs à l'épaule).</li>
<li><strong>Pression atmosphérique</strong> et cohésion du liquide synovial (pression intra-articulaire négative).</li>
<li><strong>Labrum, ménisques</strong> qui augmentent la congruence.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> mobilité et stabilité sont inversement proportionnelles. L'épaule privilégie la mobilité (luxations fréquentes), la hanche la stabilité (luxations rares, traumatismes violents).</div>`
            },
            {
              titre: "Pathologie articulaire élémentaire",
              contenu: `<ul>
<li><strong>Entorse</strong> : lésion ligamentaire par mouvement forcé, sans perte de contact des surfaces articulaires. Bénigne (élongation), moyenne (rupture partielle) ou grave (rupture complète, parfois avec arrachement osseux). Siège le plus fréquent : ligament collatéral latéral de la cheville (faisceau talo-fibulaire antérieur), lors d'un mouvement d'inversion.</li>
<li><strong>Luxation</strong> : perte de contact totale et permanente des surfaces articulaires ; subluxation si la perte est partielle. Nécessite une réduction. La plus fréquente est la luxation antéro-inférieure de l'épaule ; la luxation du coude est la plus fréquente chez l'enfant ; la luxation de la hanche survient lors de traumatismes violents (tableau de bord) et menace la vascularisation de la tête fémorale.</li>
<li><strong>Arthrose</strong> : dégénérescence du cartilage articulaire avec pincement de l'interligne, ostéophytes (becs osseux), condensation et géodes de l'os sous-chondral. Touche les articulations portantes (hanche : coxarthrose ; genou : gonarthrose) et les mains. Douleur mécanique (à l'effort, calmée par le repos).</li>
<li><strong>Arthrite</strong> : inflammation de la synoviale (synovite) d'origine infectieuse, microcristalline (goutte) ou auto-immune (polyarthrite rhumatoïde). Douleur inflammatoire (nocturne, dérouillage matinal), épanchement, chaleur.</li>
<li><strong>Ankylose</strong> : fusion des surfaces articulaires (osseuse ou fibreuse) avec perte complète de mobilité. <strong>Raideur</strong> : limitation partielle.</li>
<li><strong>Dysplasie</strong> : anomalie congénitale de la forme des surfaces (dysplasie de hanche dépistée à la naissance par la manœuvre d'Ortolani et l'échographie).</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la radiographie standard montre les os et l'interligne articulaire (espace radio-transparent correspondant au cartilage, qui n'est pas visible). Un interligne pincé signe l'usure du cartilage. L'IRM visualise le cartilage, les ménisques, les ligaments et la synoviale ; l'arthroscopie permet de voir et traiter l'intérieur de l'articulation.</div>`
            }
          ],
          points_cles: [
            "Trois classes d'articulations : fibreuses (sutures, syndesmoses, gomphoses), cartilagineuses (synchondroses à cartilage hyalin, symphyses à fibrocartilage), synoviales (cavité, capsule, synoviale, liquide synovial).",
            "Les disques intervertébraux et la symphyse pubienne sont des symphyses ; les articulations zygapophysaires sont synoviales planes.",
            "Le cartilage articulaire est hyalin, avasculaire, non innervé, nourri par le liquide synovial ; il ne se régénère pas (arthrose).",
            "La membrane synoviale tapisse la capsule et les structures intra-articulaires sauf le cartilage ; elle sécrète le liquide synovial.",
            "Sept types de synoviales : sphéroïde (3 degrés), ellipsoïde et en selle (2), bicondylaire (2), ginglyme et trochoïde (1), plane (glissements).",
            "L'épaule et la hanche sont des sphéroïdes ; le coude associe un ginglyme, une sphéroïde et une trochoïde ; le genou est bicondylaire ; la trapézo-métacarpienne est en selle.",
            "Stabilité et mobilité sont inversement liées : congruence osseuse, capsule, ligaments, muscles péri-articulaires, labrum et ménisques assurent la stabilité.",
            "Entorse = lésion ligamentaire sans perte de contact ; luxation = perte de contact permanente des surfaces.",
            "L'arthrose pince l'interligne et crée des ostéophytes ; l'arthrite est une inflammation de la synoviale."
          ],
          lexique: [
            { terme: "Diarthrose", def: "Articulation synoviale, mobile, possédant une cavité articulaire et une capsule." },
            { terme: "Symphyse", def: "Articulation cartilagineuse dont les os sont unis par un fibrocartilage (disque intervertébral, symphyse pubienne)." },
            { terme: "Syndesmose", def: "Articulation fibreuse par ligament ou membrane interosseuse (tibio-fibulaire distale)." },
            { terme: "Capsule articulaire", def: "Manchon fibreux insérant sur le pourtour des surfaces articulaires et délimitant la cavité articulaire." },
            { terme: "Membrane synoviale", def: "Membrane tapissant la face interne de la capsule et sécrétant le liquide synovial ; elle ne recouvre pas le cartilage." },
            { terme: "Labrum", def: "Anneau de fibrocartilage agrandissant une cavité articulaire (glène, acétabulum)." },
            { terme: "Ménisque", def: "Fibrocartilage interposé entre deux surfaces articulaires non congruentes (genou)." },
            { terme: "Ginglyme", def: "Articulation synoviale trochléenne à un degré de liberté (flexion/extension)." },
            { terme: "Trochoïde", def: "Articulation synoviale en pivot permettant une rotation autour de l'axe longitudinal." },
            { terme: "Degré de liberté", def: "Axe autour duquel une articulation peut effectuer un mouvement de rotation (au maximum trois)." }
          ],
          qcm: [
            {
              q: "Concernant la classification des articulations, quelles propositions sont exactes ?",
              options: [
                "A. Les sutures du crâne sont des articulations fibreuses.",
                "B. La symphyse pubienne est une articulation synoviale.",
                "C. Le cartilage de conjugaison est une synchondrose.",
                "D. La membrane interosseuse de l'avant-bras constitue une syndesmose.",
                "E. Les disques intervertébraux sont des articulations cartilagineuses secondaires (symphyses)."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A est vraie. B est fausse : la symphyse pubienne est une articulation cartilagineuse à fibrocartilage, sans cavité ni capsule. C est vraie : union par cartilage hyalin, temporaire. D est vraie. E est vraie."
            },
            {
              q: "Concernant le cartilage articulaire, quelles propositions sont exactes ?",
              options: [
                "A. Il est de nature hyaline dans la majorité des articulations synoviales.",
                "B. Il est recouvert de membrane synoviale.",
                "C. Il est vascularisé par des vaisseaux issus de l'os sous-chondral.",
                "D. Il est nourri par imbibition à partir du liquide synovial.",
                "E. Il n'est pas visible directement sur une radiographie standard."
              ],
              bonnes: [0, 3, 4],
              explication: "A est vraie (sauf temporo-mandibulaire, sterno-claviculaire et acromio-claviculaire où il est fibreux). B est fausse : la synoviale ne recouvre jamais le cartilage. C est fausse : le cartilage articulaire est avasculaire. D est vraie. E est vraie : il correspond à l'interligne radio-transparent."
            },
            {
              q: "Concernant les types d'articulations synoviales, quelles associations sont exactes ?",
              options: [
                "A. Articulation coxo-fémorale : sphéroïde à trois degrés de liberté.",
                "B. Articulation huméro-ulnaire : ginglyme.",
                "C. Articulation trapézo-métacarpienne : trochoïde.",
                "D. Articulation radio-ulnaire proximale : trochoïde.",
                "E. Articulations zygapophysaires : articulations planes."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la trapézo-métacarpienne est une articulation en selle (par emboîtement réciproque), à deux degrés de liberté plus une rotation automatique, ce qui permet l'opposition du pouce."
            },
            {
              q: "Concernant les éléments d'une articulation synoviale, quelles propositions sont exactes ?",
              options: [
                "A. La capsule articulaire est tapissée sur sa face profonde par la membrane synoviale.",
                "B. Les ligaments croisés du genou sont des ligaments intracapsulaires.",
                "C. Le labrum est un anneau de cartilage hyalin.",
                "D. Les ménisques améliorent la congruence entre des surfaces non concordantes.",
                "E. Le liquide synovial du genou normal est présent en grande quantité (plus de 50 mL)."
              ],
              bonnes: [0, 1, 3],
              explication: "A est vraie. B est vraie. C est fausse : le labrum est un fibrocartilage. D est vraie. E est fausse : le genou normal contient 0,5 à 4 mL de liquide synovial ; un volume important définit un épanchement."
            },
            {
              q: "Concernant la stabilité et la mobilité articulaires, quelles propositions sont exactes ?",
              options: [
                "A. Plus une articulation est congruente, plus elle est stable.",
                "B. L'articulation scapulo-humérale est l'articulation la plus souvent luxée.",
                "C. La hanche est plus mobile mais moins stable que l'épaule.",
                "D. Les muscles péri-articulaires sont des stabilisateurs actifs.",
                "E. Une articulation à un degré de liberté est généralement moins stable qu'une articulation à trois degrés."
              ],
              bonnes: [0, 1, 3],
              explication: "A est vraie. B est vraie (luxation antéro-inférieure). C est fausse : la hanche est moins mobile mais plus stable que l'épaule. D est vraie. E est fausse : les articulations à un degré de liberté sont les plus congruentes et donc les plus stables."
            },
            {
              q: "Concernant la pathologie articulaire, quelles propositions sont exactes ?",
              options: [
                "A. Une entorse est une perte de contact permanente des surfaces articulaires.",
                "B. Une luxation nécessite une réduction.",
                "C. L'arthrose se caractérise par un pincement de l'interligne et des ostéophytes.",
                "D. L'arthrite est une inflammation de la membrane synoviale.",
                "E. L'entorse la plus fréquente concerne le ligament collatéral latéral de la cheville."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "A est fausse : l'entorse est une lésion ligamentaire sans perte de contact des surfaces ; la perte de contact permanente définit la luxation. B, C, D et E sont vraies."
            }
          ]
        },
        {
          id: "myologie-generale",
          titre: "Myologie générale",
          duree: 30,
          objectifs: [
            "Distinguer les trois types de tissu musculaire et leurs caractéristiques.",
            "Décrire l'organisation d'un muscle squelettique : corps, tendons, fascias, aponévroses, bourses et gaines.",
            "Classer les muscles selon leur forme, leur mode d'action et leur rôle dans un mouvement (agoniste, antagoniste, fixateur).",
            "Expliquer la notion d'unité motrice, d'innervation segmentaire et de point moteur.",
            "Connaître les principales pathologies musculo-tendineuses (déchirure, tendinopathie, syndrome des loges)."
          ],
          sections: [
            {
              titre: "Les trois types de tissu musculaire",
              contenu: `<p>La <strong>myologie</strong> est l'étude des muscles. Le tissu musculaire est caractérisé par sa <strong>contractilité</strong> (raccourcissement sous l'effet d'un stimulus), son <strong>excitabilité</strong>, son <strong>élasticité</strong> et son <strong>extensibilité</strong>. Il représente environ 40 % du poids du corps chez l'adulte.</p>
<table>
<thead><tr><th>Type</th><th>Structure</th><th>Commande</th><th>Localisation</th></tr></thead>
<tbody>
<tr><td><strong>Muscle strié squelettique</strong></td><td>Fibres multinucléées (noyaux périphériques), striées, de 10 à 100 µm de diamètre et jusqu'à 30 cm de long ; organisation en sarcomères</td><td>Volontaire, par le système nerveux somatique (motoneurones alpha)</td><td>Environ 600 muscles attachés au squelette ; aussi langue, pharynx, larynx, diaphragme, sphincters externes</td></tr>
<tr><td><strong>Muscle strié cardiaque</strong> (myocarde)</td><td>Cellules mononucléées ramifiées, striées, unies par des disques intercalaires</td><td>Involontaire, automatique (tissu nodal), modulé par le système nerveux autonome</td><td>Cœur</td></tr>
<tr><td><strong>Muscle lisse</strong></td><td>Cellules fusiformes mononucléées, non striées, de 20 à 500 µm</td><td>Involontaire, système nerveux autonome et hormones</td><td>Parois des viscères creux (tube digestif, vessie, utérus, bronches), vaisseaux, muscles arrecteurs des poils, iris</td></tr>
</tbody>
</table>
<p>Ce chapitre traite du <strong>muscle strié squelettique</strong>, organe de la motricité volontaire, qui assure le mouvement, le maintien de la posture, la stabilisation des articulations et la production de chaleur (thermogenèse).</p>`
            },
            {
              titre: "Organisation d'un muscle squelettique",
              contenu: `<h4>Le corps musculaire</h4>
<p>Le muscle est formé de <strong>fibres musculaires</strong> (cellules) regroupées en <strong>faisceaux</strong>. Le tissu conjonctif l'organise à trois niveaux : l'<strong>endomysium</strong> entoure chaque fibre, le <strong>périmysium</strong> entoure chaque faisceau, l'<strong>épimysium</strong> entoure le muscle entier. Ces enveloppes se prolongent dans les tendons et transmettent la force. La partie charnue, rouge (myoglobine), est le <strong>corps</strong> ou <strong>ventre</strong> du muscle.</p>
<h4>Les tendons</h4>
<p>Le <strong>tendon</strong> est un cordon de tissu conjonctif dense, blanc nacré, inextensible et très résistant (jusqu'à 500–1 000 kg/cm<sup>2</sup>), qui fixe le muscle à l'os. Les fibres de collagène de type I sont parallèles. Il s'insère sur l'os par une zone de transition fibro-cartilagineuse, l'<strong>enthèse</strong>. Un tendon large et plat est une <strong>aponévrose d'insertion</strong> (lame tendineuse ; ex. aponévrose du muscle oblique externe). Le tendon est peu vascularisé (lenteur de cicatrisation) mais richement innervé (organes tendineux de Golgi). Le plus volumineux est le tendon calcanéen (tendon d'Achille), environ 15 cm de long.</p>
<p>Chaque muscle possède une <strong>origine</strong> (insertion proximale, généralement fixe) et une <strong>terminaison</strong> (insertion distale, mobile), même si le point fixe peut s'inverser selon le mouvement (ex. tractions à la barre).</p>
<h4>Fascias et aponévroses</h4>
<ul>
<li>Le <strong>fascia superficiel</strong> (tissu sous-cutané) : couche conjonctivo-adipeuse sous la peau, contenant les veines et nerfs superficiels.</li>
<li>Le <strong>fascia profond</strong> (aponévrose d'enveloppe) : lame fibreuse résistante qui engaine les muscles d'un segment de membre (fascia brachial, fascia lata à la cuisse) et envoie des <strong>septums intermusculaires</strong> jusqu'à l'os, délimitant ainsi des <strong>loges</strong> (compartiments) inextensibles. Chaque loge contient des muscles de même fonction et de même innervation, avec leur pédicule vasculo-nerveux.</li>
<li>Les <strong>rétinaculums</strong> : épaississements du fascia profond maintenant les tendons contre l'os au voisinage des articulations (rétinaculum des fléchisseurs au poignet formant le canal carpien, rétinaculums des extenseurs à la cheville).</li>
</ul>
<h4>Bourses et gaines synoviales</h4>
<p>Les <strong>bourses synoviales</strong> sont des sacs clos, aplatis, contenant un film de liquide synovial, interposés entre un tendon ou un muscle et un plan dur (os) ou la peau, pour supprimer les frottements (bourse subacromiale, bourse olécrânienne, bourse trochantérienne, bourses prépatellaire et infrapatellaire). Les <strong>gaines synoviales</strong> sont des bourses enroulées autour des tendons dans les zones de réflexion (tendons fléchisseurs des doigts, tendons de la cheville) ; elles comprennent un feuillet viscéral collé au tendon et un feuillet pariétal, réunis par un mésotendon qui apporte les vaisseaux.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> une <strong>bursite</strong> (inflammation d'une bourse) est fréquente au coude (olécrânienne, « hygroma ») et au genou (prépatellaire, « genou des carreleurs »). Une infection d'une gaine des fléchisseurs (phlegmon des gaines) diffuse rapidement le long du tendon : urgence chirurgicale. Le <strong>syndrome des loges</strong> est l'augmentation de pression dans une loge inextensible (fracture, effort intense) qui comprime vaisseaux et nerfs : nécrose musculaire en quelques heures si l'aponévrotomie n'est pas réalisée.</div>`
            },
            {
              titre: "Classification morphologique des muscles",
              contenu: `<p>Les muscles sont décrits selon leur forme et la disposition de leurs fibres par rapport au tendon, qui conditionnent la force (proportionnelle à la section physiologique, somme des sections de toutes les fibres) et l'amplitude du raccourcissement (proportionnelle à la longueur des fibres, environ 50 % de leur longueur de repos).</p>
<table>
<thead><tr><th>Type</th><th>Description</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td><strong>Muscles longs</strong> (fusiformes)</td><td>Fibres parallèles à l'axe du muscle, corps charnu allongé, tendons aux deux extrémités ; grande amplitude, force modérée</td><td>Biceps brachial, sartorius (le plus long muscle du corps, environ 50 cm)</td></tr>
<tr><td><strong>Muscles larges</strong> (plats)</td><td>Lames musculaires minces à aponévrose d'insertion ; parois des cavités</td><td>Grand dorsal, oblique externe, transverse de l'abdomen, diaphragme</td></tr>
<tr><td><strong>Muscles courts</strong></td><td>Trapus, puissants, au voisinage des articulations</td><td>Muscles intrinsèques de la main, muscles du dos profonds, carré fémoral</td></tr>
<tr><td><strong>Muscles penniformes</strong></td><td>Fibres obliques s'insérant sur un tendon central comme les barbes d'une plume : unipennés (demi-penniforme : extenseur long des orteils), bipennés (droit fémoral), multipennés (deltoïde). Grande force, faible amplitude</td><td>Droit fémoral, deltoïde, subscapulaire</td></tr>
<tr><td><strong>Muscles annulaires</strong> (sphincters, orbiculaires)</td><td>Fibres circulaires fermant un orifice</td><td>Orbiculaire de l'œil, orbiculaire de la bouche, sphincter externe de l'anus</td></tr>
<tr><td><strong>Muscles à plusieurs chefs</strong></td><td>Plusieurs origines convergeant vers un tendon commun</td><td>Biceps (2), triceps (3), quadriceps (4)</td></tr>
<tr><td><strong>Muscles à plusieurs ventres</strong> (digastriques, polygastriques)</td><td>Ventres charnus séparés par des intersections tendineuses</td><td>Digastrique (2 ventres), droit de l'abdomen (3–4 intersections), omo-hyoïdien</td></tr>
<tr><td><strong>Muscles convergents</strong> (triangulaires)</td><td>Large origine, insertion étroite</td><td>Grand pectoral</td></tr>
</tbody>
</table>
<p>La <strong>dénomination</strong> des muscles fait référence à leur forme (deltoïde, trapèze, rhomboïde), leur situation (brachial, tibial antérieur), leurs insertions (sterno-cléido-mastoïdien, coraco-brachial), leur taille (grand/petit fessier), leur direction (droit, oblique, transverse), leur nombre de chefs (biceps, triceps) ou leur action (fléchisseur, extenseur, abducteur, supinateur, élévateur).</p>`
            },
            {
              titre: "Actions musculaires et classification fonctionnelle",
              contenu: `<h4>Types de contraction</h4>
<ul>
<li><strong>Contraction isotonique</strong> : la tension est constante et le muscle change de longueur. <strong>Concentrique</strong> : le muscle se raccourcit et produit le mouvement (biceps lors de la flexion du coude contre résistance). <strong>Excentrique</strong> : le muscle s'allonge tout en se contractant, pour freiner un mouvement (quadriceps lors de la descente d'un escalier).</li>
<li><strong>Contraction isométrique</strong> : la longueur ne varie pas, le muscle développe une force sans mouvement (maintien de la posture, muscles stabilisateurs).</li>
<li>Le <strong>tonus musculaire</strong> est l'état de contraction permanente, involontaire et minime, des muscles au repos, entretenu par le réflexe myotatique.</li>
</ul>
<h4>Rôle des muscles dans un mouvement</h4>
<ul>
<li>L'<strong>agoniste</strong> (moteur principal) produit le mouvement considéré (biceps brachial et brachial pour la flexion du coude).</li>
<li>L'<strong>antagoniste</strong> produit le mouvement opposé ; il se relâche (inhibition réciproque) ou freine le mouvement (triceps brachial).</li>
<li>Les <strong>synergistes</strong> aident l'agoniste ou neutralisent une composante indésirable de son action (le pronateur rond annule la supination du biceps lors d'une flexion en pronation).</li>
<li>Les <strong>fixateurs</strong> stabilisent l'origine du muscle (muscles de la scapula lors des mouvements du bras).</li>
</ul>
<h4>Leviers</h4>
<p>Les os sont des leviers, les articulations des points d'appui. Les muscles agissent surtout avec des leviers de 3<sup>e</sup> genre (force entre l'appui et la résistance : biceps au coude ; favorise la vitesse) ; les leviers de 1<sup>er</sup> genre (appui au milieu : articulation atlanto-occipitale et muscles de la nuque) et de 2<sup>e</sup> genre (résistance au milieu : triceps sural lors de la montée sur la pointe des pieds ; favorise la force) sont plus rares.</p>
<h4>Classification fonctionnelle</h4>
<ul>
<li><strong>Muscles mono-articulaires</strong> : ne croisent qu'une articulation (brachial, vaste médial). <strong>Muscles bi- ou poly-articulaires</strong> : croisent plusieurs articulations (biceps brachial, ischio-jambiers, droit fémoral, fléchisseurs des doigts) ; leur action sur une articulation dépend de la position des autres (insuffisance active et passive).</li>
<li><strong>Muscles toniques</strong> (posturaux) : riches en fibres lentes de type I (rouges, oxydatives, endurantes), ex. muscles paravertébraux, soléaire. <strong>Muscles phasiques</strong> : riches en fibres rapides de type II (blanches, glycolytiques, puissantes, fatigables), ex. gastrocnémiens, muscles oculomoteurs.</li>
<li><strong>Muscles intrinsèques</strong> d'une région : origine et terminaison dans la région (muscles intrinsèques de la main) ; <strong>extrinsèques</strong> : origine à distance (fléchisseurs des doigts venant de l'avant-bras).</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> l'action d'un muscle se déduit de ses insertions et de son trajet par rapport aux axes articulaires. Un muscle qui passe en avant de l'axe transversal d'une articulation est fléchisseur (sauf au genou et à la cheville où la convention s'inverse) ; un muscle poly-articulaire a une action sur chacune des articulations qu'il croise (le biceps brachial est fléchisseur du coude, supinateur, et accessoirement fléchisseur de l'épaule).</div>`
            },
            {
              titre: "Innervation et vascularisation des muscles",
              contenu: `<h4>Innervation motrice</h4>
<p>Chaque muscle squelettique est innervé par un ou plusieurs <strong>nerfs moteurs</strong> dont les axones proviennent des <strong>motoneurones alpha</strong> de la corne antérieure de la moelle spinale (ou des noyaux moteurs des nerfs crâniens). Un motoneurone et l'ensemble des fibres musculaires qu'il innerve constituent une <strong>unité motrice</strong> : de 5 à 10 fibres pour les muscles de précision (muscles oculomoteurs, muscles de la main), jusqu'à 1 000 à 2 000 fibres pour les grands muscles posturaux (gastrocnémien). La jonction neuromusculaire (plaque motrice) utilise l'acétylcholine. Le nerf pénètre le muscle en un point relativement constant, le <strong>point moteur</strong>, utilisé pour la stimulation électrique.</p>
<p>L'innervation est <strong>segmentaire</strong> : chaque muscle dépend d'un ou plusieurs <strong>myotomes</strong> (groupe de fibres musculaires innervées par une racine spinale). Par exemple, la flexion du coude dépend de C5–C6, l'extension de C7 ; la flexion de la hanche de L2–L3, l'extension du genou de L3–L4, la flexion dorsale du pied de L4–L5, la flexion plantaire de S1–S2. Un nerf qui innerve un muscle innerve en général aussi l'articulation qu'il mobilise et la peau en regard (loi de Hilton).</p>
<h4>Innervation sensitive</h4>
<p>Le nerf du muscle contient aussi des fibres <strong>proprioceptives</strong> issues des <strong>fuseaux neuromusculaires</strong> (sensibles à l'étirement, support du réflexe myotatique) et des <strong>organes tendineux de Golgi</strong> (sensibles à la tension), ainsi que des fibres nociceptives et des fibres sympathiques vasomotrices.</p>
<h4>Vascularisation</h4>
<p>Le muscle est très vascularisé : une ou plusieurs artères pénètrent avec le nerf (pédicule vasculo-nerveux), se ramifient dans le périmysium puis forment un riche réseau capillaire parallèle aux fibres (jusqu'à 3 à 4 capillaires par fibre). Le débit sanguin musculaire passe de 1 L/min au repos à plus de 15 L/min à l'effort. Les veines satellites sont pourvues de valvules ; la contraction musculaire assure la « pompe musculaire » du retour veineux (notamment la pompe du mollet).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la lésion d'un nerf moteur entraîne une <strong>paralysie flasque</strong> avec <strong>amyotrophie</strong> en quelques semaines et abolition du réflexe correspondant. L'examen de la force musculaire est coté de 0 (aucune contraction) à 5 (force normale contre résistance). Les réflexes ostéo-tendineux explorent les segments : bicipital C5, stylo-radial C6, tricipital C7, patellaire L4, achilléen S1.</div>`
            },
            {
              titre: "Pathologie musculo-tendineuse élémentaire",
              contenu: `<ul>
<li><strong>Contracture</strong> : contraction involontaire, prolongée et douloureuse d'un muscle, sans lésion anatomique. <strong>Crampe</strong> : contraction brutale et brève.</li>
<li><strong>Élongation, déchirure (claquage), rupture</strong> : lésions traumatiques de gravité croissante des fibres musculaires, fréquentes aux ischio-jambiers, au droit fémoral et aux gastrocnémiens (« tennis leg »). La rupture complète d'un muscle ou d'un tendon donne une encoche palpable et une perte de fonction (rupture du tendon calcanéen : test de Thompson positif).</li>
<li><strong>Tendinopathie</strong> : souffrance du tendon par surmenage (tendon calcanéen, tendon patellaire, tendons de la coiffe des rotateurs, épicondyliens latéraux : « tennis elbow »). <strong>Ténosynovite</strong> : inflammation de la gaine synoviale (ténosynovite de De Quervain au poignet).</li>
<li><strong>Enthésopathie</strong> : atteinte de l'insertion tendineuse sur l'os, mécanique ou inflammatoire (spondylarthrite).</li>
<li><strong>Myopathies</strong> : maladies primitives du muscle, génétiques (dystrophie de Duchenne) ou acquises (myosites inflammatoires), avec déficit proximal et élévation des CPK.</li>
<li><strong>Hernie musculaire</strong> : issue du muscle à travers une brèche du fascia.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'IRM est l'examen de référence du muscle et du tendon ; l'échographie, dynamique, est utile pour les tendons superficiels. L'électromyogramme (EMG) différencie une atteinte neurogène (nerf) d'une atteinte myogène (muscle).</div>`
            }
          ],
          points_cles: [
            "Trois tissus musculaires : strié squelettique (volontaire), strié cardiaque (involontaire automatique), lisse (involontaire, viscères et vaisseaux).",
            "Le muscle squelettique est organisé par l'endomysium, le périmysium et l'épimysium, qui se prolongent dans le tendon.",
            "Le tendon fixe le muscle à l'os au niveau de l'enthèse ; une aponévrose d'insertion est un tendon plat.",
            "Le fascia profond et ses septums délimitent des loges inextensibles : un hématome ou un œdème y crée un syndrome des loges.",
            "Les bourses et gaines synoviales suppriment les frottements entre tendons et plans durs ; leur inflammation est une bursite ou une ténosynovite.",
            "Classification morphologique : muscles longs (amplitude), penniformes (force), larges, courts, annulaires, à plusieurs chefs ou plusieurs ventres.",
            "Agoniste, antagoniste, synergiste, fixateur : rôles d'un muscle dans un mouvement ; contractions concentrique, excentrique, isométrique.",
            "Unité motrice = un motoneurone alpha et les fibres qu'il innerve (5 à 2 000 fibres) ; innervation segmentaire par myotomes.",
            "Réflexes ostéo-tendineux : bicipital C5, stylo-radial C6, tricipital C7, patellaire L4, achilléen S1."
          ],
          lexique: [
            { terme: "Tendon", def: "Cordon de tissu conjonctif dense fixant le muscle à l'os." },
            { terme: "Aponévrose", def: "Lame fibreuse : aponévrose d'insertion (tendon plat) ou aponévrose d'enveloppe (fascia profond)." },
            { terme: "Enthèse", def: "Zone d'insertion d'un tendon ou d'un ligament sur l'os." },
            { terme: "Loge musculaire", def: "Compartiment délimité par le fascia profond, les septums intermusculaires et l'os, contenant des muscles de même fonction et innervation." },
            { terme: "Bourse synoviale", def: "Sac clos contenant un film de liquide synovial, interposé entre un tendon et un plan dur." },
            { terme: "Rétinaculum", def: "Épaississement du fascia maintenant des tendons contre l'os près d'une articulation." },
            { terme: "Agoniste / antagoniste", def: "Muscle produisant le mouvement / muscle produisant le mouvement opposé." },
            { terme: "Unité motrice", def: "Ensemble formé par un motoneurone alpha et toutes les fibres musculaires qu'il innerve." },
            { terme: "Myotome", def: "Ensemble des fibres musculaires innervées par une racine spinale donnée." },
            { terme: "Muscle penniforme", def: "Muscle dont les fibres obliques s'insèrent sur un tendon central comme les barbes d'une plume (force élevée)." }
          ],
          qcm: [
            {
              q: "Concernant les types de tissu musculaire, quelles propositions sont exactes ?",
              options: [
                "A. Le muscle strié squelettique est formé de fibres multinucléées à noyaux périphériques.",
                "B. Le myocarde est un muscle strié à commande volontaire.",
                "C. Le muscle lisse est présent dans la paroi des vaisseaux et des viscères creux.",
                "D. Le diaphragme est un muscle lisse.",
                "E. Le muscle strié squelettique représente environ 40 % du poids du corps."
              ],
              bonnes: [0, 2, 4],
              explication: "A est vraie. B est fausse : le myocarde est strié mais involontaire et automatique. C est vraie. D est fausse : le diaphragme est un muscle strié squelettique (innervé par le nerf phrénique). E est vraie."
            },
            {
              q: "Concernant les tendons, fascias et bourses, quelles propositions sont exactes ?",
              options: [
                "A. Le tendon est richement vascularisé, ce qui explique sa cicatrisation rapide.",
                "B. L'enthèse est la zone d'insertion du tendon sur l'os.",
                "C. Le fascia profond délimite des loges musculaires inextensibles.",
                "D. Une bourse synoviale communique toujours avec la cavité articulaire voisine.",
                "E. Le syndrome des loges résulte d'une augmentation de pression dans une loge et menace la vitalité du muscle."
              ],
              bonnes: [1, 2, 4],
              explication: "A est fausse : le tendon est peu vascularisé et cicatrise lentement. B est vraie. C est vraie. D est fausse : la plupart des bourses sont indépendantes de la cavité articulaire ; certaines seulement communiquent avec elle. E est vraie : c'est une urgence chirurgicale (aponévrotomie)."
            },
            {
              q: "Concernant la classification morphologique des muscles, quelles associations sont exactes ?",
              options: [
                "A. Le sartorius est un muscle long fusiforme.",
                "B. Le deltoïde est un muscle penniforme.",
                "C. Le droit de l'abdomen est un muscle polygastrique.",
                "D. Le grand pectoral est un muscle annulaire.",
                "E. Un muscle penniforme a une force supérieure à un muscle fusiforme de même volume."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B et C sont vraies. D est fausse : le grand pectoral est un muscle large convergent (triangulaire) ; les muscles annulaires sont les sphincters et orbiculaires. E est vraie : la section physiologique est plus grande, au prix d'une amplitude moindre."
            },
            {
              q: "Concernant les actions musculaires, quelles propositions sont exactes ?",
              options: [
                "A. Lors de la flexion du coude, le triceps brachial est l'antagoniste.",
                "B. Une contraction excentrique raccourcit le muscle.",
                "C. Une contraction isométrique développe une force sans changement de longueur.",
                "D. Un muscle synergiste s'oppose à l'action de l'agoniste.",
                "E. Le biceps brachial est un muscle poly-articulaire."
              ],
              bonnes: [0, 2, 4],
              explication: "A est vraie. B est fausse : en contraction excentrique le muscle s'allonge tout en freinant le mouvement. C est vraie. D est fausse : le synergiste aide l'agoniste ou neutralise une composante parasite de son action. E est vraie : il croise l'épaule, le coude et la radio-ulnaire proximale."
            },
            {
              q: "Concernant l'innervation des muscles, quelles propositions sont exactes ?",
              options: [
                "A. Une unité motrice comprend un motoneurone alpha et les fibres musculaires qu'il innerve.",
                "B. Les muscles oculomoteurs ont de grandes unités motrices (plus de 1 000 fibres).",
                "C. Le réflexe patellaire explore le segment L4.",
                "D. Le réflexe achilléen explore le segment C7.",
                "E. Les fuseaux neuromusculaires sont des récepteurs sensibles à l'étirement."
              ],
              bonnes: [0, 2, 4],
              explication: "A est vraie. B est fausse : les muscles de précision ont de petites unités motrices (5 à 10 fibres). C est vraie. D est fausse : l'achilléen explore S1 ; C7 correspond au réflexe tricipital. E est vraie."
            },
            {
              q: "Concernant les leviers et la pathologie musculaire, quelles propositions sont exactes ?",
              options: [
                "A. La flexion du coude par le biceps brachial correspond à un levier de 3e genre.",
                "B. La rupture du tendon calcanéen se recherche par le test de Thompson.",
                "C. La ténosynovite est une inflammation de la gaine synoviale d'un tendon.",
                "D. L'électromyogramme permet de distinguer une atteinte neurogène d'une atteinte myogène.",
                "E. Une paralysie d'origine nerveuse périphérique entraîne une amyotrophie."
              ],
              bonnes: [0, 1, 2, 3, 4],
              explication: "Toutes les propositions sont vraies. Le levier de 3e genre (force entre appui et résistance) est le plus fréquent dans le corps ; la lésion du motoneurone périphérique donne une paralysie flasque avec amyotrophie et aréflexie."
            }
          ]
        },
        {
          id: "vaisseaux-nerfs-lymphatiques-generalites",
          titre: "Généralités sur les vaisseaux, les nerfs et les lymphatiques",
          duree: 35,
          objectifs: [
            "Décrire l'organisation générale de la circulation (grande et petite circulation) et la structure des artères, veines et capillaires.",
            "Citer les grands troncs artériels et veineux et leurs territoires.",
            "Décrire l'organisation du système lymphatique et ses principaux relais.",
            "Expliquer l'organisation du système nerveux périphérique : nerf spinal, racines, rameaux, plexus.",
            "Définir les dermatomes et les myotomes et connaître les repères principaux."
          ],
          sections: [
            {
              titre: "Organisation générale de la circulation",
              contenu: `<p>L'<strong>angiologie</strong> étudie les vaisseaux. Le système cardiovasculaire est un circuit clos comprenant une pompe, le <strong>cœur</strong>, et des conduits : les <strong>artères</strong> (qui conduisent le sang du cœur vers les organes), les <strong>capillaires</strong> (lieu des échanges) et les <strong>veines</strong> (qui ramènent le sang au cœur). Le volume sanguin total est d'environ 5 litres (7 % du poids), dont 60 à 70 % dans le secteur veineux.</p>
<h4>Les deux circulations</h4>
<ul>
<li>La <strong>circulation pulmonaire</strong> (petite circulation) : du ventricule droit, le sang pauvre en oxygène est propulsé dans le <strong>tronc pulmonaire</strong> (environ 5 cm de long, 3 cm de diamètre) qui se divise en artères pulmonaires droite et gauche ; après oxygénation dans les capillaires alvéolaires, le sang revient par les <strong>quatre veines pulmonaires</strong> dans l'atrium gauche. Régime à basse pression (15–25 mmHg systolique).</li>
<li>La <strong>circulation systémique</strong> (grande circulation) : du ventricule gauche, le sang oxygéné est éjecté dans l'<strong>aorte</strong>, distribué à tous les organes, puis ramené à l'atrium droit par les <strong>veines caves supérieure et inférieure</strong> et le sinus coronaire. Régime à haute pression (120/80 mmHg).</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> une artère est définie par le sens de circulation (du cœur vers la périphérie) et non par la nature du sang : les artères pulmonaires transportent du sang pauvre en oxygène et les veines pulmonaires du sang riche en oxygène. De même, chez le fœtus, la veine ombilicale transporte du sang oxygéné.</div>
<h4>Structure des vaisseaux</h4>
<p>La paroi artérielle et veineuse comprend trois tuniques : l'<strong>intima</strong> (endothélium et sous-endothélium), la <strong>média</strong> (cellules musculaires lisses et fibres élastiques) et l'<strong>adventice</strong> (conjonctif, vasa vasorum, nerfs).</p>
<table>
<thead><tr><th>Vaisseau</th><th>Calibre</th><th>Caractéristiques</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>Artères élastiques (de conduction)</td><td>&gt; 1 cm</td><td>Média riche en élastine ; amortissent la pression systolique</td><td>Aorte (2,5–3 cm), tronc pulmonaire, carotides communes, subclavières, iliaques communes</td></tr>
<tr><td>Artères musculaires (de distribution)</td><td>1 mm à 1 cm</td><td>Média musculaire ; régulation régionale du débit</td><td>Brachiale, radiale, fémorale, rénale, coronaires</td></tr>
<tr><td>Artérioles</td><td>&lt; 300 µm</td><td>Principales résistances : régulation de la pression artérielle</td><td>—</td></tr>
<tr><td>Capillaires</td><td>5–10 µm</td><td>Endothélium seul sur lame basale ; échanges. Surface totale environ 600 m<sup>2</sup></td><td>Continus (muscle), fenêtrés (rein, intestin), discontinus (sinusoïdes du foie, rate)</td></tr>
<tr><td>Veines</td><td>Variable</td><td>Paroi mince, média pauvre, valvules dans les membres ; réservoir de capacité</td><td>Veines caves (2–3 cm), veines des membres</td></tr>
</tbody>
</table>
<p>Les <strong>anastomoses</strong> (communications entre artères) assurent une circulation de suppléance en cas d'obstruction (cercle anastomotique périarticulaire, polygone de Willis, arcades palmaires) ; les <strong>artères terminales</strong> (sans anastomoses efficaces : artères rétiniennes, certaines artères cérébrales, rénales, spléniques) exposent à l'infarctus. Les <strong>anastomoses artério-veineuses</strong> court-circuitent les capillaires (peau des extrémités, thermorégulation).</p>`
            },
            {
              titre: "Les grands troncs artériels",
              contenu: `<p>L'<strong>aorte</strong> naît du ventricule gauche (orifice aortique, 3 valvules semi-lunaires) et se termine en L4 en se divisant en deux artères iliaques communes. On lui décrit quatre segments :</p>
<ul>
<li>L'<strong>aorte ascendante</strong> (5–6 cm) : dans le péricarde ; donne les deux <strong>artères coronaires</strong> (droite et gauche).</li>
<li>L'<strong>arc aortique</strong> (crosse) : concave en bas, enjambe la bronche principale gauche ; donne de droite à gauche le <strong>tronc brachio-céphalique</strong> (qui se divise en artère carotide commune droite et artère subclavière droite), l'<strong>artère carotide commune gauche</strong> et l'<strong>artère subclavière gauche</strong>. Son isthme est le siège de la coarctation et le point de fixation du ligament artériel (vestige du canal artériel).</li>
<li>L'<strong>aorte thoracique descendante</strong> (de T4 à T12) : dans le médiastin postérieur, à gauche de la colonne ; branches pariétales (artères intercostales postérieures, 9 paires, de la 3<sup>e</sup> à la 11<sup>e</sup>, et subcostales) et viscérales (bronchiques, œsophagiennes, péricardiques, phréniques supérieures).</li>
<li>L'<strong>aorte abdominale</strong> (de T12 à L4, après le hiatus aortique du diaphragme) : branches viscérales impaires (<strong>tronc cœliaque</strong> en T12, <strong>artère mésentérique supérieure</strong> en L1, <strong>artère mésentérique inférieure</strong> en L3), paires (surrénales moyennes, rénales en L1–L2, gonadiques en L2) et pariétales (phréniques inférieures, 4 paires d'artères lombales), puis bifurcation en L4 en artères iliaques communes et artère sacrale médiane.</li>
</ul>
<h4>Vascularisation des membres</h4>
<table>
<thead><tr><th>Membre supérieur</th><th>Membre inférieur</th></tr></thead>
<tbody>
<tr><td>Artère subclavière (jusqu'au bord latéral de la 1re côte)</td><td>Artère iliaque commune puis iliaque externe (jusqu'au ligament inguinal)</td></tr>
<tr><td>Artère axillaire (jusqu'au bord inférieur du grand pectoral)</td><td>Artère fémorale (jusqu'au hiatus du grand adducteur)</td></tr>
<tr><td>Artère brachiale (jusqu'au pli du coude)</td><td>Artère poplitée (jusqu'à l'arcade du soléaire)</td></tr>
<tr><td>Artères radiale et ulnaire</td><td>Artères tibiale antérieure et tibiale postérieure (et fibulaire)</td></tr>
<tr><td>Arcades palmaires superficielle et profonde</td><td>Artère dorsale du pied, arcade plantaire</td></tr>
</tbody>
</table>
<p>Au cou et à la tête, l'artère carotide commune se divise en carotide externe (face, cou, méninges) et carotide interne (encéphale, œil) au niveau du bord supérieur du cartilage thyroïde (C4) ; l'artère vertébrale, branche de la subclavière, participe à la vascularisation de l'encéphale (tronc basilaire).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les pouls périphériques sont palpables là où une artère passe sur un plan osseux : carotidien (bord antérieur du sterno-cléido-mastoïdien), brachial (pli du coude, en dedans du tendon du biceps), radial (gouttière du pouls), fémoral (trigone fémoral, sous le ligament inguinal), poplité (genou fléchi), tibial postérieur (en arrière de la malléole médiale), pédieux (dos du pied, latéralement au tendon de l'extenseur de l'hallux).</div>`
            },
            {
              titre: "Le système veineux",
              contenu: `<p>Les veines sont plus nombreuses et plus volumineuses que les artères (capacité). Dans les membres, elles sont munies de <strong>valvules</strong> (replis endothéliaux en nid de pigeon) qui orientent le flux vers le cœur et le fragmentent. Il existe deux réseaux :</p>
<ul>
<li>Le <strong>réseau veineux profond</strong> : veines satellites des artères (souvent deux par artère en dessous du coude et du genou), portant le même nom. Il draine 90 % du sang des membres.</li>
<li>Le <strong>réseau veineux superficiel</strong> : dans le tissu sous-cutané, indépendant des artères, visible sous la peau. Au membre supérieur : veines céphalique (latérale) et basilique (médiale), unies par la veine médiane du coude (prélèvements). Au membre inférieur : grande veine saphène (médiale, se jette dans la veine fémorale à la crosse, 3 à 4 cm sous le ligament inguinal) et petite veine saphène (postéro-latérale, se jette dans la veine poplitée). Des <strong>veines perforantes</strong> relient les deux réseaux, du superficiel vers le profond.</li>
</ul>
<h4>Les grands troncs veineux</h4>
<ul>
<li>La <strong>veine cave supérieure</strong> (7 cm, 2 cm de diamètre) : formée par la réunion des deux <strong>veines brachio-céphaliques</strong> (chacune née de la jugulaire interne et de la subclavière, derrière l'articulation sterno-claviculaire), reçoit la veine azygos et se jette dans l'atrium droit. Elle draine la tête, le cou, les membres supérieurs et le thorax.</li>
<li>La <strong>veine cave inférieure</strong> (22 cm, 3 cm) : naît en L5 de la réunion des deux veines iliaques communes, monte à droite de l'aorte, traverse le diaphragme en T8 et se jette dans l'atrium droit. Elle reçoit les veines lombales, gonadiques (la gauche se jette dans la veine rénale gauche), rénales, surrénale droite, hépatiques et phréniques inférieures.</li>
<li>Le <strong>système porte hépatique</strong> : la veine porte (formée derrière le col du pancréas par la veine mésentérique supérieure et le tronc spléno-mésaraïque) conduit au foie le sang du tube digestif, de la rate et du pancréas. Elle est interposée entre deux réseaux capillaires. Des anastomoses porto-caves (œsophage, rectum, ombilic, rétropéritoine) se dilatent en cas d'hypertension portale (varices œsophagiennes).</li>
<li>Le <strong>système azygos</strong> : veines azygos (droite), hémi-azygos et hémi-azygos accessoire (gauche) drainent les parois thoracique et abdominale et relient les deux veines caves (voie de suppléance).</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>thrombose veineuse profonde</strong> des membres inférieurs (phlébite) expose à l'embolie pulmonaire par migration du thrombus via la veine cave inférieure, le cœur droit et les artères pulmonaires. L'<strong>insuffisance valvulaire</strong> du réseau superficiel entraîne les varices. Les voies veineuses centrales sont posées dans la jugulaire interne, la subclavière ou la fémorale.</div>`
            },
            {
              titre: "Le système lymphatique",
              contenu: `<p>Le système lymphatique draine le liquide interstitiel en excès (2 à 4 L par jour), les grosses molécules et les lipides absorbés par l'intestin, et participe à l'immunité. Il comprend des <strong>vaisseaux</strong> et des <strong>organes lymphoïdes</strong>.</p>
<h4>Les vaisseaux lymphatiques</h4>
<ul>
<li>Les <strong>capillaires lymphatiques</strong>, en cul-de-sac, très perméables, absents du système nerveux central, du cartilage, de la cornée et de l'os.</li>
<li>Les <strong>vaisseaux collecteurs</strong>, valvulés, qui traversent une ou plusieurs chaînes de <strong>nœuds lymphatiques</strong> (ganglions). On compte 500 à 700 nœuds, de 1 mm à 2 cm, filtrant la lymphe. Les groupes principaux sont cervicaux, axillaires, inguinaux, et profonds (médiastinaux, mésentériques, lombo-aortiques, iliaques).</li>
<li>Les <strong>troncs lymphatiques</strong> (jugulaires, subclaviers, broncho-médiastinaux, lombaux, intestinal) convergent vers deux collecteurs terminaux.</li>
<li>Le <strong>conduit thoracique</strong> (canal thoracique, 40 cm) : naît en L1–L2 de la <strong>citerne du chyle</strong> (confluent des troncs lombaux et intestinal), monte dans le médiastin postérieur à droite de l'aorte entre aorte et veine azygos, croise la ligne médiane en T4–T5 et se termine au <strong>confluent jugulo-subclavier gauche</strong> (angle veineux de Pirogoff). Il draine les trois quarts du corps : les deux membres inférieurs, l'abdomen, l'hémithorax gauche, le membre supérieur gauche et la moitié gauche de la tête et du cou.</li>
<li>Le <strong>conduit lymphatique droit</strong> (1 à 2 cm) : draine le membre supérieur droit, l'hémithorax droit et la moitié droite de la tête et du cou ; se termine au confluent jugulo-subclavier droit.</li>
</ul>
<h4>Les organes lymphoïdes</h4>
<p>Organes lymphoïdes primaires : <strong>moelle osseuse</strong> et <strong>thymus</strong> (médiastin antéro-supérieur, involue après la puberté). Organes secondaires : <strong>nœuds lymphatiques</strong>, <strong>rate</strong> (hypochondre gauche, 12 cm, 150 g, filtre le sang), <strong>amygdales</strong> (anneau de Waldeyer), tissu lymphoïde associé aux muqueuses (plaques de Peyer, appendice).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les cancers se disséminent par voie lymphatique vers les premiers relais (nœud sentinelle) : le cancer du sein vers les nœuds axillaires, les cancers ORL vers les nœuds cervicaux, les cancers du testicule vers les nœuds lombo-aortiques (et non inguinaux, car le testicule a migré depuis l'abdomen). Une adénopathie (gros nœud) impose de rechercher le territoire drainé. La rupture du conduit thoracique provoque un chylothorax.</div>`
            },
            {
              titre: "Organisation du système nerveux périphérique",
              contenu: `<p>Le <strong>système nerveux périphérique</strong> relie le système nerveux central (encéphale et moelle spinale) aux organes. Il comprend les <strong>12 paires de nerfs crâniens</strong>, les <strong>31 paires de nerfs spinaux</strong> et le système nerveux autonome périphérique.</p>
<h4>Le nerf spinal</h4>
<p>Chaque nerf spinal naît de la réunion de deux racines :</p>
<ul>
<li>la <strong>racine antérieure</strong> (ventrale), <strong>motrice</strong>, formée des axones des motoneurones de la corne antérieure (et des fibres sympathiques préganglionnaires de T1 à L2) ;</li>
<li>la <strong>racine postérieure</strong> (dorsale), <strong>sensitive</strong>, portant le <strong>ganglion spinal</strong> (corps cellulaires des neurones sensitifs en T) situé dans le foramen intervertébral.</li>
</ul>
<p>Le nerf spinal, <strong>mixte</strong>, sort par le <strong>foramen intervertébral</strong> (le nerf C1 au-dessus de l'atlas, C8 entre C7 et T1, puis chaque nerf thoracique, lombal et sacral sous la vertèbre de même numéro) et se divise aussitôt en :</p>
<ul>
<li>un <strong>rameau postérieur</strong> (dorsal), grêle, pour les muscles profonds du dos et la peau du dos ;</li>
<li>un <strong>rameau antérieur</strong> (ventral), volumineux, pour les parois antéro-latérales du tronc et les membres ; dans les régions cervicale, lombale et sacrale, les rameaux antérieurs s'anastomosent en <strong>plexus</strong> ;</li>
<li>un <strong>rameau méningé</strong> récurrent et des <strong>rameaux communicants</strong> (blancs et gris) avec la chaîne sympathique.</li>
</ul>
<h4>Les plexus</h4>
<table>
<thead><tr><th>Plexus</th><th>Racines</th><th>Branches principales</th><th>Territoire</th></tr></thead>
<tbody>
<tr><td><strong>Cervical</strong></td><td>C1–C4</td><td>Nerf phrénique (C3–C5), nerfs cutanés du cou, anse cervicale</td><td>Cou, diaphragme</td></tr>
<tr><td><strong>Brachial</strong></td><td>C5–T1</td><td>Nerfs musculo-cutané, médian, ulnaire, radial, axillaire</td><td>Membre supérieur</td></tr>
<tr><td><strong>Lombal</strong></td><td>L1–L4</td><td>Nerfs fémoral, obturateur, ilio-hypogastrique, ilio-inguinal, génito-fémoral, cutané latéral de la cuisse</td><td>Paroi abdominale basse, face antérieure et médiale de la cuisse</td></tr>
<tr><td><strong>Sacral</strong></td><td>L4–S3</td><td>Nerf sciatique (tibial et fibulaire commun), glutéaux, cutané postérieur de la cuisse</td><td>Fesse, face postérieure de la cuisse, jambe, pied</td></tr>
<tr><td><strong>Pudendal</strong> (honteux)</td><td>S2–S4</td><td>Nerf pudendal, nerfs splanchniques pelviens</td><td>Périnée, organes pelviens</td></tr>
</tbody>
</table>
<p>Les nerfs thoraciques (T2 à T11) ne forment pas de plexus : ce sont les <strong>nerfs intercostaux</strong>, segmentaires. Un <strong>nerf périphérique</strong> est un faisceau d'axones (fibres myélinisées et amyéliniques) entouré de trois gaines conjonctives : endonèvre, périnèvre (autour de chaque fascicule) et épinèvre.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 8 nerfs cervicaux pour 7 vertèbres cervicales. Le nerf C8 sort entre C7 et T1. Au-dessus, le nerf porte le numéro de la vertèbre sous-jacente ; en dessous de C8, celui de la vertèbre sus-jacente. Ainsi une hernie discale C5–C6 comprime la racine C6, mais une hernie L4–L5 comprime habituellement la racine L5 (la racine L4 étant déjà sortie).</div>`
            },
            {
              titre: "Dermatomes et myotomes",
              contenu: `<p>Un <strong>dermatome</strong> est le territoire cutané innervé par les fibres sensitives d'une seule racine spinale (d'un seul segment médullaire). Les dermatomes se chevauchent largement : la section d'une seule racine ne donne qu'une hypoesthésie limitée. Leur disposition est segmentaire sur le tronc (en bandes horizontales) et longitudinale sur les membres, qui ont « entraîné » les dermatomes lors de leur développement.</p>
<table>
<thead><tr><th>Racine</th><th>Repère cutané</th></tr></thead>
<tbody>
<tr><td>C2</td><td>Occiput, nuque</td></tr>
<tr><td>C4</td><td>Épaule (base du cou, clavicule)</td></tr>
<tr><td>C5</td><td>Face latérale du bras</td></tr>
<tr><td>C6</td><td>Face latérale de l'avant-bras, pouce et index</td></tr>
<tr><td>C7</td><td>Majeur (3e doigt)</td></tr>
<tr><td>C8</td><td>Annulaire et petit doigt, face médiale de l'avant-bras</td></tr>
<tr><td>T1</td><td>Face médiale du bras</td></tr>
<tr><td>T4</td><td>Mamelon</td></tr>
<tr><td>T10</td><td>Ombilic</td></tr>
<tr><td>L1</td><td>Pli inguinal</td></tr>
<tr><td>L3</td><td>Face antérieure de la cuisse et du genou</td></tr>
<tr><td>L4</td><td>Face médiale de la jambe, malléole médiale</td></tr>
<tr><td>L5</td><td>Face latérale de la jambe, dos du pied, gros orteil</td></tr>
<tr><td>S1</td><td>Face postérieure de la jambe, bord latéral du pied, petit orteil, talon</td></tr>
<tr><td>S2–S4</td><td>Périnée, région péri-anale (« selle »)</td></tr>
</tbody>
</table>
<p>Un <strong>myotome</strong> est l'ensemble des muscles innervés par une racine. Les mouvements clés sont : abduction de l'épaule C5, flexion du coude C5–C6, extension du coude C7, flexion des doigts C8, écartement des doigts T1 ; flexion de la hanche L2–L3, extension du genou L3–L4, flexion dorsale du pied L4–L5, extension du gros orteil L5, flexion plantaire S1, contraction du sphincter anal S2–S4.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le territoire d'une <strong>racine</strong> (dermatome, radiculaire) diffère du territoire d'un <strong>nerf périphérique</strong> (tronculaire) : la racine C6 innerve la face latérale de l'avant-bras et le pouce, alors que le nerf médian innerve les trois premiers doigts et demi à la paume, et le nerf radial la face dorsale de la première commissure. Une sciatique L5 (douleur radiculaire) suit le dermatome L5, une atteinte du nerf fibulaire commun donne un déficit tronculaire.</div>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le niveau d'une lésion médullaire est déterminé par le dernier dermatome normal (niveau sensitif) et le dernier myotome fonctionnel ; le zona, réactivation du virus varicelle-zona dans un ganglion spinal, dessine exactement un dermatome ; l'anesthésie péridurale est contrôlée par la limite supérieure de l'anesthésie (T4 pour une césarienne, T10 pour un accouchement).</div>`
            }
          ],
          points_cles: [
            "Deux circulations en série : pulmonaire (basse pression, tronc pulmonaire, quatre veines pulmonaires) et systémique (haute pression, aorte, veines caves).",
            "L'aorte comprend quatre segments : ascendante (coronaires), arc (tronc brachio-céphalique, carotide commune gauche, subclavière gauche), thoracique descendante, abdominale (tronc cœliaque T12, mésentérique supérieure L1, rénales L1–L2, mésentérique inférieure L3, bifurcation L4).",
            "Artère subclavière, axillaire, brachiale, radiale/ulnaire au membre supérieur ; iliaque externe, fémorale, poplitée, tibiales au membre inférieur.",
            "Deux réseaux veineux : profond (satellite des artères, 90 % du drainage) et superficiel (céphalique/basilique, grande et petite saphènes), reliés par des perforantes.",
            "Le système porte conduit au foie le sang du tube digestif et de la rate ; les anastomoses porto-caves se dilatent en cas d'hypertension portale.",
            "Le conduit thoracique draine les trois quarts du corps et se termine au confluent jugulo-subclavier gauche ; le conduit lymphatique droit draine le quart supérieur droit.",
            "Le nerf spinal est mixte, formé d'une racine antérieure motrice et d'une racine postérieure sensitive (ganglion spinal) ; il se divise en rameaux postérieur et antérieur.",
            "31 paires de nerfs spinaux : 8 C, 12 T, 5 L, 5 S, 1 Co ; les rameaux antérieurs forment les plexus cervical, brachial, lombal, sacral et pudendal.",
            "Dermatomes repères : C6 pouce, C7 majeur, C8 petit doigt, T4 mamelon, T10 ombilic, L4 malléole médiale, L5 gros orteil, S1 bord latéral du pied."
          ],
          lexique: [
            { terme: "Artère", def: "Vaisseau conduisant le sang du cœur vers les organes, quelle que soit sa teneur en oxygène." },
            { terme: "Anastomose", def: "Communication entre deux vaisseaux ou deux nerfs permettant une suppléance." },
            { terme: "Système porte", def: "Système veineux interposé entre deux réseaux capillaires (veine porte hépatique)." },
            { terme: "Valvule veineuse", def: "Repli endothélial orientant le flux veineux vers le cœur, présent surtout dans les veines des membres." },
            { terme: "Conduit thoracique", def: "Principal collecteur lymphatique, de la citerne du chyle au confluent jugulo-subclavier gauche." },
            { terme: "Nœud lymphatique", def: "Organe lymphoïde secondaire filtrant la lymphe sur le trajet des collecteurs (ancien ganglion)." },
            { terme: "Nerf spinal", def: "Nerf mixte formé par la réunion d'une racine antérieure motrice et d'une racine postérieure sensitive, sortant par le foramen intervertébral." },
            { terme: "Ganglion spinal", def: "Renflement de la racine postérieure contenant les corps cellulaires des neurones sensitifs." },
            { terme: "Plexus nerveux", def: "Réseau d'anastomoses entre rameaux antérieurs de plusieurs nerfs spinaux, donnant naissance aux nerfs des membres." },
            { terme: "Dermatome", def: "Territoire cutané innervé par les fibres sensitives d'une seule racine spinale." }
          ],
          qcm: [
            {
              q: "Concernant l'organisation de la circulation, quelles propositions sont exactes ?",
              options: [
                "A. Les artères pulmonaires transportent du sang riche en oxygène.",
                "B. Le tronc pulmonaire naît du ventricule droit.",
                "C. Les quatre veines pulmonaires se jettent dans l'atrium gauche.",
                "D. La circulation pulmonaire est un régime à haute pression.",
                "E. Environ 60 à 70 % du volume sanguin se trouve dans le secteur veineux."
              ],
              bonnes: [1, 2, 4],
              explication: "A est fausse : elles transportent du sang pauvre en oxygène vers les poumons. B et C sont vraies. D est fausse : la circulation pulmonaire est à basse pression (15–25 mmHg systolique). E est vraie."
            },
            {
              q: "Concernant l'aorte, quelles propositions sont exactes ?",
              options: [
                "A. L'aorte ascendante donne les artères coronaires.",
                "B. L'arc aortique donne, de droite à gauche, le tronc brachio-céphalique, l'artère carotide commune gauche et l'artère subclavière gauche.",
                "C. Le tronc brachio-céphalique se divise en artère carotide commune droite et artère subclavière droite.",
                "D. L'aorte abdominale se termine en L2.",
                "E. L'artère mésentérique supérieure naît de l'aorte au niveau de L1."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : l'aorte abdominale se divise en L4 en deux artères iliaques communes."
            },
            {
              q: "Concernant le système veineux, quelles propositions sont exactes ?",
              options: [
                "A. Les veines profondes des membres sont satellites des artères.",
                "B. La grande veine saphène se jette dans la veine poplitée.",
                "C. La veine cave supérieure est formée par la réunion des deux veines brachio-céphaliques.",
                "D. La veine cave inférieure naît en L5 de la réunion des veines iliaques communes.",
                "E. La veine porte se jette directement dans la veine cave inférieure."
              ],
              bonnes: [0, 2, 3],
              explication: "A est vraie. B est fausse : la grande saphène se jette dans la veine fémorale ; c'est la petite saphène qui rejoint la poplitée. C et D sont vraies. E est fausse : la veine porte se ramifie dans le foie ; le sang rejoint ensuite la veine cave inférieure par les veines hépatiques."
            },
            {
              q: "Concernant le système lymphatique, quelles propositions sont exactes ?",
              options: [
                "A. Le conduit thoracique se termine au confluent jugulo-subclavier droit.",
                "B. Le conduit thoracique naît de la citerne du chyle.",
                "C. Le conduit lymphatique droit draine le membre supérieur droit.",
                "D. Le système nerveux central possède un riche réseau de capillaires lymphatiques.",
                "E. Les nœuds lymphatiques axillaires sont le premier relais du cancer du sein."
              ],
              bonnes: [1, 2, 4],
              explication: "A est fausse : il se termine au confluent jugulo-subclavier gauche. B et C sont vraies. D est fausse : il n'y a pas de capillaires lymphatiques dans le système nerveux central, le cartilage, la cornée ni l'os. E est vraie."
            },
            {
              q: "Concernant le nerf spinal, quelles propositions sont exactes ?",
              options: [
                "A. La racine antérieure est sensitive.",
                "B. Le ganglion spinal est situé sur la racine postérieure.",
                "C. Il existe 8 paires de nerfs cervicaux pour 7 vertèbres cervicales.",
                "D. Le nerf spinal C8 sort entre les vertèbres C7 et T1.",
                "E. Le rameau postérieur du nerf spinal innerve les muscles des membres."
              ],
              bonnes: [1, 2, 3],
              explication: "A est fausse : la racine antérieure est motrice, la postérieure sensitive. B, C et D sont vraies. E est fausse : le rameau postérieur innerve les muscles profonds et la peau du dos ; les membres dépendent des rameaux antérieurs organisés en plexus."
            },
            {
              q: "Concernant les dermatomes et myotomes, quelles associations sont exactes ?",
              options: [
                "A. T10 : ombilic.",
                "B. C7 : pouce.",
                "C. L5 : gros orteil et dos du pied.",
                "D. S1 : bord latéral du pied.",
                "E. Extension du coude : C7."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le pouce correspond au dermatome C6 ; C7 correspond au majeur."
            },
            {
              q: "Concernant les plexus nerveux, quelles propositions sont exactes ?",
              options: [
                "A. Le plexus brachial est formé par les rameaux antérieurs de C5 à T1.",
                "B. Le nerf phrénique provient du plexus brachial.",
                "C. Le nerf fémoral provient du plexus lombal.",
                "D. Le nerf sciatique provient du plexus sacral.",
                "E. Les nerfs intercostaux s'organisent en plexus thoracique."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : le nerf phrénique (C3–C5) provient du plexus cervical. E est fausse : les nerfs thoraciques restent segmentaires et ne forment pas de plexus."
            }
          ]
        }
      ]
    },
    {
      titre: "Partie 2 — Appareil locomoteur : membre supérieur",
      chapitres: [
        {
          id: "ceinture-scapulaire-epaule",
          titre: "Ceinture scapulaire et épaule",
          duree: 40,
          objectifs: [
            "Décrire la clavicule, la scapula et l'extrémité proximale de l'humérus avec leurs reliefs.",
            "Décrire les articulations sterno-claviculaire, acromio-claviculaire et scapulo-humérale (surfaces, moyens d'union, mouvements).",
            "Citer les muscles de la coiffe des rotateurs et leur action, et les autres muscles de l'épaule avec origine, terminaison, action et innervation.",
            "Décrire les parois et le contenu du creux axillaire.",
            "Expliquer la luxation de l'épaule et la rupture de la coiffe à partir de l'anatomie."
          ],
          sections: [
            {
              titre: "La clavicule",
              contenu: `<p>La <strong>clavicule</strong> est un os long, pair, en forme de <strong>S italique</strong> allongé horizontalement, tendu entre le sternum et la scapula. Elle mesure 12 à 15 cm. Sous-cutanée sur toute sa longueur, elle est palpable et constitue le seul lien osseux entre le membre supérieur et le tronc. Elle s'ossifie la première (5<sup>e</sup>–6<sup>e</sup> semaine) et en partie sur membrane ; son extrémité sternale est la dernière physe de l'organisme à se souder (vers 25 ans).</p>
<ul>
<li>Le <strong>corps</strong> : convexe en avant dans ses deux tiers médiaux (concavité postérieure abritant les vaisseaux subclaviers et le plexus brachial), concave en avant dans son tiers latéral. Face supérieure lisse et sous-cutanée ; face inférieure rugueuse avec, de dedans en dehors, l'<strong>empreinte du ligament costo-claviculaire</strong>, le <strong>sillon du muscle subclavier</strong> et le <strong>tubercule conoïde</strong> et la <strong>ligne trapézoïde</strong> (insertion des ligaments coraco-claviculaires).</li>
<li>L'<strong>extrémité sternale</strong> (médiale) : volumineuse, porte une surface articulaire en selle pour le manubrium sternal et le 1<sup>er</sup> cartilage costal.</li>
<li>L'<strong>extrémité acromiale</strong> (latérale) : aplatie, porte une petite facette ovalaire plane pour l'acromion.</li>
</ul>
<p><strong>Insertions musculaires</strong> : en haut et en avant le grand pectoral (deux tiers médiaux) et le deltoïde (tiers latéral) ; en haut et en arrière le sterno-cléido-mastoïdien (médialement) et le trapèze (latéralement) ; en bas le subclavier.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la fracture de la clavicule est l'une des plus fréquentes (chute sur le moignon de l'épaule, accouchement). Elle siège dans 75 % des cas au <strong>tiers moyen</strong>, à la jonction des deux courbures ; le fragment médial est attiré vers le haut par le sterno-cléido-mastoïdien, le fragment latéral vers le bas par le poids du membre. Les complications vasculo-nerveuses (artère et veine subclavières, plexus brachial) sont rares grâce au muscle subclavier qui protège le pédicule.</div>`
            },
            {
              titre: "La scapula",
              contenu: `<p>La <strong>scapula</strong> (omoplate) est un os plat, triangulaire, mince, appliqué sur la face postéro-latérale du thorax de la 2<sup>e</sup> à la 7<sup>e</sup> côte, oblique en avant et latéralement d'environ 30° par rapport au plan frontal. Elle n'est unie au tronc que par des muscles (articulation scapulo-thoracique fonctionnelle), ce qui lui donne une grande mobilité.</p>
<h4>Faces</h4>
<ul>
<li><strong>Face antérieure</strong> (costale) : concave, la <strong>fosse subscapulaire</strong>, insertion du muscle subscapulaire.</li>
<li><strong>Face postérieure</strong> : divisée par l'<strong>épine de la scapula</strong>, lame osseuse transversale oblique en haut et latéralement, en une <strong>fosse supra-épineuse</strong> (muscle supra-épineux) et une <strong>fosse infra-épineuse</strong> (muscle infra-épineux). L'épine se prolonge latéralement par l'<strong>acromion</strong>, processus aplati surplombant l'articulation de l'épaule et portant la facette articulaire pour la clavicule. L'angle de l'acromion est un repère palpable.</li>
</ul>
<h4>Bords et angles</h4>
<ul>
<li><strong>Bord supérieur</strong> : court, mince, présente l'<strong>incisure scapulaire</strong> (fermée par le ligament transverse supérieur ; passage du nerf supra-scapulaire sous le ligament, de l'artère au-dessus) et, latéralement, le <strong>processus coracoïde</strong>, en forme de doigt fléchi, dirigé en avant et latéralement, où s'insèrent le petit pectoral, le coraco-brachial, le chef court du biceps et les ligaments coraco-claviculaires, coraco-acromial et coraco-huméral.</li>
<li><strong>Bord médial</strong> (spinal) : long, fin, parallèle à la colonne (insertions de l'élévateur de la scapula, des rhomboïdes et du dentelé antérieur).</li>
<li><strong>Bord latéral</strong> (axillaire) : épais, oblique, s'élargit en haut vers le <strong>col de la scapula</strong>.</li>
<li><strong>Angle supérieur</strong>, <strong>angle inférieur</strong> (en regard de T7, repère) et <strong>angle latéral</strong> portant la <strong>cavité glénoïdale</strong> : surface articulaire ovalaire, peu profonde, regardant en avant, latéralement et un peu en haut, surmontée du <strong>tubercule supra-glénoïdal</strong> (chef long du biceps) et sous-tendue du <strong>tubercule infra-glénoïdal</strong> (chef long du triceps).</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la cavité glénoïdale est quatre fois moins étendue que la tête humérale ; elle est agrandie par le <strong>labrum glénoïdal</strong>. Au-dessus de l'articulation, l'acromion, le ligament coraco-acromial et le processus coracoïde forment la <strong>voûte acromio-coracoïdienne</strong>, sous laquelle glisse la coiffe des rotateurs (espace sous-acromial, siège du conflit).</div>`
            },
            {
              titre: "L'extrémité proximale de l'humérus",
              contenu: `<p>L'<strong>humérus</strong> est l'os long du bras (environ 30–35 cm). Son extrémité proximale comprend :</p>
<ul>
<li>La <strong>tête humérale</strong> : tiers de sphère de 30 mm de rayon environ, recouverte de cartilage, regardant en haut, médialement et en arrière (<strong>rétroversion</strong> de 20 à 30° par rapport à l'axe transversal du coude). L'angle entre l'axe de la tête et celui de la diaphyse (angle d'inclinaison) est d'environ 130–135°.</li>
<li>Le <strong>col anatomique</strong> : sillon peu marqué séparant la tête des tubercules ; insertion de la capsule.</li>
<li>Le <strong>tubercule majeur</strong> (trochiter) : latéral, porte trois facettes pour les tendons du <strong>supra-épineux</strong> (supérieure), de l'<strong>infra-épineux</strong> (moyenne) et du <strong>petit rond</strong> (inférieure).</li>
<li>Le <strong>tubercule mineur</strong> (trochin) : antérieur, insertion du <strong>subscapulaire</strong>.</li>
<li>Le <strong>sillon intertuberculaire</strong> (gouttière bicipitale) : entre les deux tubercules, prolongé en bas par les crêtes des tubercules majeur (insertion du grand pectoral) et mineur (grand dorsal et grand rond) ; il contient le tendon du chef long du biceps, maintenu par le ligament transverse de l'humérus.</li>
<li>Le <strong>col chirurgical</strong> : zone rétrécie sous les tubercules, à la jonction avec la diaphyse ; en rapport avec le <strong>nerf axillaire</strong> et l'<strong>artère circonflexe postérieure de l'humérus</strong>. Siège le plus fréquent des fractures de l'extrémité supérieure (sujet âgé ostéoporotique).</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> col anatomique = limite de la tête, insertion capsulaire ; col chirurgical = zone de fracture, rapport avec le nerf axillaire. Les trois facettes du tubercule majeur reçoivent, de haut en bas : supra-épineux, infra-épineux, petit rond ; le tubercule mineur reçoit le subscapulaire.</div>`
            },
            {
              titre: "Les articulations de la ceinture scapulaire",
              contenu: `<h4>Articulation sterno-claviculaire</h4>
<p>Seule articulation vraie entre le membre supérieur et le tronc. Articulation synoviale <strong>en selle</strong> entre l'extrémité sternale de la clavicule, l'incisure claviculaire du manubrium et le 1<sup>er</sup> cartilage costal, avec un <strong>disque articulaire</strong> fibro-cartilagineux interposé. Moyens d'union : capsule, ligaments sterno-claviculaires antérieur et postérieur, ligament interclaviculaire, et surtout le très solide <strong>ligament costo-claviculaire</strong> (1<sup>re</sup> côte–clavicule), pivot des mouvements. Mouvements : élévation/abaissement (environ 10° / 3 cm), protraction/rétraction (30°), rotation axiale (30°). Les luxations sont rares ; les luxations postérieures menacent les gros vaisseaux et la trachée.</p>
<h4>Articulation acromio-claviculaire</h4>
<p>Articulation synoviale <strong>plane</strong>, avec parfois un ménisque incomplet. Capsule mince renforcée par les ligaments acromio-claviculaires ; mais la stabilité est assurée à distance par les <strong>ligaments coraco-claviculaires</strong> : <strong>trapézoïde</strong> (latéral, quadrilatère) et <strong>conoïde</strong> (médial, triangulaire), qui suspendent la scapula à la clavicule. Mouvements de glissement et de rotation de la scapula (environ 30°).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>disjonction acromio-claviculaire</strong> (chute sur l'épaule, rugby, vélo) est classée en stades selon la rupture successive des ligaments acromio-claviculaires puis coraco-claviculaires : au stade 3, la clavicule fait saillie sous la peau (« touche de piano »).</div>
<h4>Articulation scapulo-thoracique</h4>
<p>Fausse articulation (espace de glissement) entre la scapula, le dentelé antérieur et le gril costal. Elle permet la <strong>sonnette</strong> (rotation de la scapula autour d'un axe sagittal, 60°), l'élévation/abaissement et l'abduction/adduction de la scapula. Elle contribue au tiers de l'élévation totale du bras (rythme scapulo-huméral : 2° de scapulo-humérale pour 1° de scapulo-thoracique).</p>`
            },
            {
              titre: "L'articulation scapulo-humérale",
              contenu: `<p>L'articulation <strong>scapulo-humérale</strong> (gléno-humérale) est une articulation synoviale <strong>sphéroïde</strong> à trois degrés de liberté, la plus mobile du corps et la plus souvent luxée.</p>
<h4>Surfaces articulaires</h4>
<p>La tête humérale (tiers de sphère) et la cavité glénoïdale, agrandie par le <strong>labrum glénoïdal</strong>, anneau de fibrocartilage de section triangulaire. La congruence est faible : à chaque instant, seul un tiers de la tête est en contact avec la glène.</p>
<h4>Moyens d'union</h4>
<ul>
<li>La <strong>capsule</strong> : lâche, insérée sur le pourtour de la glène (en dehors du labrum) et sur le col anatomique (sauf en bas où elle descend sur le col chirurgical) ; elle forme en bas, bras pendant, un repli, le <strong>récessus axillaire</strong>, qui se tend en abduction. Elle est perforée par le tendon du chef long du biceps (intra-capsulaire mais extra-synovial) et communique avec la bourse subscapulaire par le foramen de Weitbrecht.</li>
<li>Les <strong>ligaments gléno-huméraux</strong> supérieur, moyen et inférieur (le plus solide, véritable hamac antéro-inférieur), formant un Z sur la face antérieure de la capsule, avec deux points faibles (foramen de Weitbrecht entre supérieur et moyen, foramen de Rouvière entre moyen et inférieur).</li>
<li>Le <strong>ligament coraco-huméral</strong> : du processus coracoïde aux deux tubercules, renforce la capsule en haut, suspend la tête.</li>
<li>Le <strong>ligament coraco-acromial</strong>, extra-articulaire, complète la voûte acromio-coracoïdienne.</li>
<li>Les <strong>ligaments actifs</strong> : les tendons de la coiffe des rotateurs, intimement adhérents à la capsule, et le chef long du biceps.</li>
</ul>
<h4>Synoviale</h4>
<p>Elle tapisse la capsule, entoure le tendon du chef long du biceps (gaine synoviale intertuberculaire) et forme la bourse subscapulaire. La <strong>bourse subacromio-deltoïdienne</strong>, indépendante de l'articulation sauf en cas de rupture de la coiffe, sépare la coiffe de l'acromion et du deltoïde.</p>
<h4>Mouvements</h4>
<p>Flexion (antépulsion) 90° pour la scapulo-humérale seule, 180° avec la ceinture ; extension 45–50° ; abduction 90° (jusqu'à 180° avec la scapulo-thoracique et l'inclinaison du tronc) ; adduction ; rotation latérale 80°, rotation médiale 95–110° (main dans le dos) ; circumduction.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>luxation antéro-interne</strong> (95 % des luxations de l'épaule) survient en abduction–rotation latérale forcée (chute, armé du bras) : la tête passe sous le processus coracoïde en déchirant la capsule antéro-inférieure et le labrum (lésion de Bankart). Signes : épaule « en épaulette », vacuité de la glène, bras en abduction–rotation latérale irréductible. Il faut rechercher une atteinte du <strong>nerf axillaire</strong> (anesthésie du moignon de l'épaule, paralysie du deltoïde) avant et après réduction. La récidive est fréquente chez le sujet jeune.</div>`
            },
            {
              titre: "Les muscles de l'épaule",
              contenu: `<p>On distingue les muscles reliant la ceinture au tronc (abordés avec le dos et le thorax : trapèze, élévateur de la scapula, rhomboïdes, dentelé antérieur, petit pectoral, subclavier), les muscles reliant le tronc à l'humérus (grand pectoral, grand dorsal) et les muscles propres de l'épaule, scapulo-huméraux.</p>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action</th><th>Innervation</th></tr></thead>
<tbody>
<tr><td><strong>Deltoïde</strong></td><td>Tiers latéral de la clavicule, acromion, épine de la scapula</td><td>Tubérosité deltoïdienne (face latérale de l'humérus)</td><td>Abducteur principal (faisceau moyen, à partir de 15–20°) ; fléchisseur et rotateur médial (faisceau antérieur) ; extenseur et rotateur latéral (faisceau postérieur)</td><td>Nerf axillaire (C5–C6)</td></tr>
<tr><td><strong>Supra-épineux</strong></td><td>Fosse supra-épineuse</td><td>Facette supérieure du tubercule majeur</td><td>Abducteur (starter des 15–20 premiers degrés), coapteur</td><td>Nerf supra-scapulaire (C5–C6)</td></tr>
<tr><td><strong>Infra-épineux</strong></td><td>Fosse infra-épineuse</td><td>Facette moyenne du tubercule majeur</td><td>Rotateur latéral principal, coapteur</td><td>Nerf supra-scapulaire (C5–C6)</td></tr>
<tr><td><strong>Petit rond</strong></td><td>Bord latéral de la scapula (partie supérieure)</td><td>Facette inférieure du tubercule majeur</td><td>Rotateur latéral, adducteur faible</td><td>Nerf axillaire (C5–C6)</td></tr>
<tr><td><strong>Subscapulaire</strong></td><td>Fosse subscapulaire</td><td>Tubercule mineur</td><td>Rotateur médial principal, coapteur, stabilisateur antérieur</td><td>Nerfs subscapulaires supérieur et inférieur (C5–C6)</td></tr>
<tr><td><strong>Grand rond</strong></td><td>Angle inférieur et bord latéral de la scapula</td><td>Crête du tubercule mineur</td><td>Adducteur, rotateur médial, extenseur</td><td>Nerf subscapulaire inférieur (C5–C6)</td></tr>
<tr><td><strong>Grand pectoral</strong></td><td>Deux tiers médiaux de la clavicule, sternum, 6 premiers cartilages costaux, gaine du droit</td><td>Crête du tubercule majeur (tendon en U, fibres croisées)</td><td>Adducteur, rotateur médial, fléchisseur (faisceau claviculaire), abaisseur (faisceau abdominal) ; inspirateur accessoire</td><td>Nerfs pectoraux latéral et médial (C5–T1)</td></tr>
<tr><td><strong>Grand dorsal</strong></td><td>Processus épineux T7–L5, sacrum, crête iliaque, 4 dernières côtes, angle inférieur de la scapula (fascia thoraco-lombal)</td><td>Fond du sillon intertuberculaire (crête du tubercule mineur)</td><td>Adducteur, rotateur médial, extenseur (rétropulsion) ; muscle de la traction (grimper) ; expirateur accessoire</td><td>Nerf thoraco-dorsal (C6–C8)</td></tr>
<tr><td><strong>Coraco-brachial</strong></td><td>Processus coracoïde</td><td>Face médiale de l'humérus (tiers moyen)</td><td>Fléchisseur et adducteur de l'épaule</td><td>Nerf musculo-cutané (C5–C7), qui le perfore</td></tr>
</tbody>
</table>
<h4>La coiffe des rotateurs</h4>
<p>Elle est formée de quatre muscles dont les tendons s'étalent sur les tubercules et adhèrent à la capsule : <strong>supra-épineux</strong>, <strong>infra-épineux</strong>, <strong>petit rond</strong> (en arrière et en haut) et <strong>subscapulaire</strong> (en avant). Le chef long du biceps lui est fonctionnellement associé. Rôle : <strong>coaptation</strong> (centrage de la tête dans la glène, en s'opposant à la composante ascensionnelle du deltoïde) et rotations. L'<strong>intervalle des rotateurs</strong> sépare le supra-épineux du subscapulaire et laisse passer le tendon du long biceps.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>rupture de la coiffe</strong>, dégénérative après 50 ans ou traumatique, touche surtout le supra-épineux (zone hypovasculaire près de son insertion, frottements sous la voûte acromio-coracoïdienne : conflit sous-acromial). Elle entraîne douleur, perte de force en abduction (test de Jobe), puis ascension de la tête humérale. Testing : Jobe (supra-épineux), Patte (infra-épineux), lift-off et belly-press (subscapulaire), palm-up (long biceps).</div>`
            },
            {
              titre: "Le creux axillaire",
              contenu: `<p>Le <strong>creux axillaire</strong> (aisselle) est une région pyramidale à sommet supérieur et base inférieure, située entre la paroi thoracique et la racine du membre supérieur, lieu de passage du pédicule vasculo-nerveux du membre.</p>
<h4>Parois</h4>
<ul>
<li><strong>Paroi antérieure</strong> : grand pectoral (plan superficiel), petit pectoral et subclavier (plan profond) réunis par le fascia clavi-pectoral.</li>
<li><strong>Paroi postérieure</strong> : subscapulaire en haut, grand rond et grand dorsal en bas. Elle présente deux orifices : l'<strong>espace axillaire latéral</strong> (quadrilatère huméro-tricipital de Velpeau, entre petit rond, grand rond, chef long du triceps et humérus), traversé par le nerf axillaire et l'artère circonflexe postérieure de l'humérus, et l'<strong>espace axillaire médial</strong> (triangle omo-tricipital), traversé par l'artère circonflexe de la scapula.</li>
<li><strong>Paroi médiale</strong> : paroi thoracique (côtes 1 à 4–5) couverte par le dentelé antérieur.</li>
<li><strong>Paroi latérale</strong> : sillon intertuberculaire de l'humérus, coraco-brachial et chef court du biceps.</li>
<li><strong>Sommet</strong> : espace entre la clavicule, la 1<sup>re</sup> côte et le bord supérieur de la scapula (canal cervico-axillaire), par où passent l'artère et la veine axillaires et le plexus brachial.</li>
<li><strong>Base</strong> : peau de l'aisselle, fascia axillaire.</li>
</ul>
<h4>Contenu</h4>
<ul>
<li>L'<strong>artère axillaire</strong>, axe de la région, de la 1<sup>re</sup> côte au bord inférieur du grand pectoral, divisée par le petit pectoral en trois segments et donnant six branches : thoracique supérieure, thoraco-acromiale, thoracique latérale, subscapulaire (la plus volumineuse), circonflexes antérieure et postérieure de l'humérus.</li>
<li>La <strong>veine axillaire</strong>, médiale et antérieure à l'artère, reçoit la veine céphalique.</li>
<li>Le <strong>plexus brachial</strong> : ses trois faisceaux (latéral, médial, postérieur) entourent l'artère, puis ses branches terminales naissent derrière le petit pectoral.</li>
<li>Les <strong>nœuds lymphatiques axillaires</strong> (20 à 30), répartis en cinq groupes (latéral/brachial, pectoral/antérieur, subscapulaire/postérieur, central, apical) ; ils drainent le membre supérieur, le sein et la paroi thoraco-abdominale supérieure.</li>
<li>Les <strong>nerfs thoracique long</strong> (du dentelé antérieur, sur la paroi médiale) et <strong>thoraco-dorsal</strong> (du grand dorsal, sur la paroi postérieure), le nerf intercosto-brachial, et de la graisse.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le curage axillaire du cancer du sein expose à la lésion du nerf thoracique long (scapula alata : décollement de la scapula lors de la poussée contre un mur) et du nerf thoraco-dorsal, et au lymphœdème du membre supérieur. Les niveaux de Berg (I sous, II derrière, III au-dessus du petit pectoral) classent les nœuds axillaires.</div>`
            }
          ],
          points_cles: [
            "La clavicule, os long en S italique de 12–15 cm, est le seul lien osseux entre le membre supérieur et le tronc ; ses fractures siègent au tiers moyen dans 75 % des cas.",
            "La scapula porte la cavité glénoïdale, l'acromion, le processus coracoïde, et trois fosses (subscapulaire, supra- et infra-épineuse) pour les muscles de la coiffe.",
            "L'extrémité proximale de l'humérus : tête rétroversée de 20–30°, col anatomique (capsule), tubercules majeur (supra-épineux, infra-épineux, petit rond) et mineur (subscapulaire), col chirurgical (nerf axillaire, fractures).",
            "La sterno-claviculaire est en selle avec un disque, stabilisée par le ligament costo-claviculaire ; l'acromio-claviculaire est plane, stabilisée par les ligaments coraco-claviculaires conoïde et trapézoïde.",
            "La scapulo-humérale est une sphéroïde peu congruente (labrum, capsule lâche, ligaments gléno-huméraux et coraco-huméral) : la plus mobile et la plus souvent luxée (luxation antéro-interne, risque pour le nerf axillaire).",
            "Coiffe des rotateurs : supra-épineux, infra-épineux, petit rond (nerfs supra-scapulaire et axillaire) et subscapulaire (nerfs subscapulaires) ; rôle de coaptation ; rupture surtout du supra-épineux.",
            "Le deltoïde (nerf axillaire) est l'abducteur principal, le supra-épineux le starter de l'abduction ; grand pectoral et grand dorsal sont adducteurs et rotateurs médiaux.",
            "Le creux axillaire est une pyramide à quatre parois contenant l'artère et la veine axillaires, le plexus brachial et 20 à 30 nœuds lymphatiques.",
            "Le nerf thoracique long (dentelé antérieur) longe la paroi médiale de l'aisselle : sa lésion donne une scapula alata."
          ],
          lexique: [
            { terme: "Cavité glénoïdale", def: "Surface articulaire de l'angle latéral de la scapula recevant la tête humérale, agrandie par le labrum." },
            { terme: "Processus coracoïde", def: "Saillie antérieure de la scapula en doigt fléchi, insertion du petit pectoral, du coraco-brachial, du chef court du biceps et de ligaments." },
            { terme: "Col chirurgical de l'humérus", def: "Zone rétrécie sous les tubercules, siège fréquent de fractures, en rapport avec le nerf axillaire." },
            { terme: "Coiffe des rotateurs", def: "Ensemble des tendons du supra-épineux, de l'infra-épineux, du petit rond et du subscapulaire, coaptant la tête humérale." },
            { terme: "Voûte acromio-coracoïdienne", def: "Arc formé par l'acromion, le ligament coraco-acromial et le processus coracoïde au-dessus de la coiffe." },
            { terme: "Ligaments coraco-claviculaires", def: "Ligaments conoïde et trapézoïde suspendant la scapula à la clavicule, stabilisateurs de l'acromio-claviculaire." },
            { terme: "Récessus axillaire", def: "Repli inférieur de la capsule scapulo-humérale, détendu bras pendant et tendu en abduction." },
            { terme: "Espace axillaire latéral", def: "Quadrilatère huméro-tricipital de la paroi postérieure de l'aisselle, traversé par le nerf axillaire et l'artère circonflexe postérieure." },
            { terme: "Scapula alata", def: "Décollement de la scapula par paralysie du dentelé antérieur (nerf thoracique long)." }
          ],
          qcm: [
            {
              q: "Concernant la clavicule, quelles propositions sont exactes ?",
              options: [
                "A. C'est un os long en forme de S italique.",
                "B. Son extrémité sternale s'articule avec le manubrium et le premier cartilage costal.",
                "C. Le tubercule conoïde reçoit le ligament costo-claviculaire.",
                "D. Les fractures siègent le plus souvent au tiers moyen.",
                "E. Elle s'ossifie entièrement sur maquette cartilagineuse."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : le tubercule conoïde reçoit le ligament conoïde (coraco-claviculaire) ; le ligament costo-claviculaire s'insère sur l'empreinte médiale de la face inférieure. E est fausse : l'ossification de la clavicule est mixte, en partie membraneuse."
            },
            {
              q: "Concernant la scapula, quelles propositions sont exactes ?",
              options: [
                "A. La fosse subscapulaire est sur la face postérieure.",
                "B. L'épine de la scapula se prolonge latéralement par l'acromion.",
                "C. Le processus coracoïde donne insertion au chef long du biceps brachial.",
                "D. Le tubercule infra-glénoïdal donne insertion au chef long du triceps brachial.",
                "E. L'angle inférieur de la scapula se projette en regard de T7."
              ],
              bonnes: [1, 3, 4],
              explication: "A est fausse : la fosse subscapulaire est sur la face antérieure (costale). B est vraie. C est fausse : le processus coracoïde reçoit le chef court du biceps ; le chef long naît du tubercule supra-glénoïdal. D et E sont vraies."
            },
            {
              q: "Concernant l'extrémité proximale de l'humérus, quelles propositions sont exactes ?",
              options: [
                "A. La tête humérale regarde en haut, médialement et en arrière.",
                "B. La capsule articulaire s'insère sur le col chirurgical en haut.",
                "C. Le tubercule mineur reçoit le tendon du subscapulaire.",
                "D. Le sillon intertuberculaire contient le tendon du chef long du biceps.",
                "E. Le nerf axillaire contourne le col chirurgical."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A est vraie (rétroversion de 20–30°). B est fausse : la capsule s'insère sur le col anatomique (sauf en bas). C, D et E sont vraies."
            },
            {
              q: "Concernant l'articulation scapulo-humérale, quelles propositions sont exactes ?",
              options: [
                "A. C'est une articulation sphéroïde à trois degrés de liberté.",
                "B. Le labrum glénoïdal est un anneau de fibrocartilage augmentant la surface de la glène.",
                "C. La capsule est très serrée, ce qui explique sa stabilité.",
                "D. La luxation la plus fréquente est antéro-interne.",
                "E. Le tendon du chef long du biceps est intra-capsulaire."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies (le tendon du long biceps est intra-capsulaire mais extra-synovial). C est fausse : la capsule est lâche, avec un récessus axillaire ; l'articulation est peu stable."
            },
            {
              q: "Concernant la coiffe des rotateurs, quelles propositions sont exactes ?",
              options: [
                "A. Elle comprend le deltoïde.",
                "B. Le supra-épineux est innervé par le nerf supra-scapulaire.",
                "C. Le petit rond est innervé par le nerf axillaire.",
                "D. Le subscapulaire est le principal rotateur latéral de l'épaule.",
                "E. Sa rupture dégénérative touche le plus souvent le supra-épineux."
              ],
              bonnes: [1, 2, 4],
              explication: "A est fausse : la coiffe comprend supra-épineux, infra-épineux, petit rond et subscapulaire. B et C sont vraies. D est fausse : le subscapulaire est rotateur médial ; l'infra-épineux est le rotateur latéral principal. E est vraie."
            },
            {
              q: "Concernant les muscles de l'épaule, quelles propositions sont exactes ?",
              options: [
                "A. Le deltoïde est innervé par le nerf axillaire.",
                "B. Le grand dorsal est innervé par le nerf thoraco-dorsal.",
                "C. Le grand pectoral se termine sur la crête du tubercule mineur.",
                "D. Le grand rond est adducteur et rotateur médial.",
                "E. Le coraco-brachial est traversé par le nerf musculo-cutané."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le grand pectoral se termine sur la crête du tubercule majeur ; ce sont le grand dorsal et le grand rond qui se terminent sur la crête du tubercule mineur."
            },
            {
              q: "Concernant le creux axillaire, quelles propositions sont exactes ?",
              options: [
                "A. Sa paroi antérieure est formée par les muscles pectoraux.",
                "B. Sa paroi médiale est formée par le dentelé antérieur.",
                "C. La veine axillaire est latérale par rapport à l'artère.",
                "D. L'espace axillaire latéral est traversé par le nerf axillaire.",
                "E. La lésion du nerf thoracique long entraîne une scapula alata."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la veine axillaire est médiale et antérieure par rapport à l'artère."
            }
          ]
        },
        {
          id: "bras-coude",
          titre: "Bras et coude",
          duree: 35,
          objectifs: [
            "Décrire la diaphyse et l'extrémité distale de l'humérus et leurs rapports vasculo-nerveux.",
            "Décrire les loges du bras et les muscles biceps brachial, brachial et triceps brachial (origine, terminaison, action, innervation).",
            "Décrire l'articulation du coude : les trois articulations, les surfaces, les ligaments, les mouvements et le valgus physiologique.",
            "Décrire les rapports vasculo-nerveux du bras et de la fosse cubitale.",
            "Relier l'anatomie aux fractures de l'humérus et aux luxations du coude."
          ],
          sections: [
            {
              titre: "La diaphyse humérale",
              contenu: `<p>La <strong>diaphyse</strong> de l'humérus est cylindrique en haut et prismatique triangulaire en bas, avec trois faces et trois bords.</p>
<ul>
<li><strong>Face antéro-latérale</strong> : porte la <strong>tubérosité deltoïdienne</strong> (V deltoïdien) à mi-hauteur, insertion du deltoïde ; en dessous s'insère le brachial.</li>
<li><strong>Face antéro-médiale</strong> : insertion du coraco-brachial (tiers moyen) et du brachial ; elle est longée par le pédicule brachial.</li>
<li><strong>Face postérieure</strong> : parcourue obliquement de haut en bas et de médial en latéral par le <strong>sillon du nerf radial</strong> (gouttière radiale), où cheminent le nerf radial et l'artère brachiale profonde entre les chefs médial et latéral du triceps.</li>
<li><strong>Bords</strong> : antérieur (crête du tubercule majeur en haut, bifurqué en bas vers la fosse coronoïdienne), médial (septum intermusculaire médial, foramen nourricier dirigé vers le bas, « vers le coude je vais ») et latéral (septum intermusculaire latéral).</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la fracture de la diaphyse humérale (tiers moyen) menace le <strong>nerf radial</strong> dans son sillon : paralysie radiale avec « main tombante » (déficit d'extension du poignet et des doigts) et hypoesthésie de la face dorsale de la première commissure. Elle doit être recherchée avant tout traitement. La paralysie radiale est le plus souvent une neurapraxie récupérant en quelques mois.</div>`
            },
            {
              titre: "L'extrémité distale de l'humérus",
              contenu: `<p>L'extrémité distale est aplatie d'avant en arrière, élargie transversalement (palette humérale) et <strong>inclinée en avant</strong> de 30 à 45° par rapport à la diaphyse (antéversion, qui explique la position fléchie de repos et le mécanisme des fractures supra-condyliennes). Elle comprend une partie articulaire, le <strong>condyle humérale</strong>, et deux saillies non articulaires, les <strong>épicondyles</strong>.</p>
<h4>Partie articulaire</h4>
<ul>
<li>La <strong>trochlée humérale</strong> : médiale, en forme de poulie, avec deux versants (lèvres) séparés par une gorge oblique ; elle s'articule avec l'incisure trochléaire de l'ulna. Sa lèvre médiale descend plus bas que la latérale : l'axe de la trochlée est oblique, ce qui explique le <strong>valgus physiologique</strong> du coude (cubitus valgus de 10 à 15°, plus marqué chez la femme).</li>
<li>Le <strong>capitulum</strong> : latéral, hémisphérique, antérieur et inférieur seulement (absent en arrière), s'articule avec la fovéa de la tête radiale.</li>
<li>La <strong>zone capitulo-trochléaire</strong> (sillon) entre les deux.</li>
<li>Trois fosses : la <strong>fosse coronoïdienne</strong> (au-dessus de la trochlée en avant, reçoit le processus coronoïde en flexion), la <strong>fosse radiale</strong> (au-dessus du capitulum, reçoit la tête radiale en flexion) et la <strong>fosse olécrânienne</strong> (en arrière, reçoit l'olécrâne en extension). La mince lame osseuse qui sépare les fosses coronoïdienne et olécrânienne est parfois perforée.</li>
</ul>
<h4>Épicondyles</h4>
<ul>
<li>L'<strong>épicondyle médial</strong> (épitrochlée) : volumineux, sous-cutané, origine des muscles épicondyliens médiaux (rond pronateur, fléchisseur radial du carpe, long palmaire, fléchisseur ulnaire du carpe, fléchisseur superficiel des doigts) et du ligament collatéral ulnaire. Sa face postérieure est creusée du <strong>sillon du nerf ulnaire</strong>.</li>
<li>L'<strong>épicondyle latéral</strong> : plus petit, origine des muscles épicondyliens latéraux (extenseurs du poignet et des doigts, supinateur, anconé) et du ligament collatéral radial.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> dans la nomenclature internationale, le <strong>condyle huméral</strong> désigne l'ensemble de la surface articulaire (trochlée + capitulum), et l'ancien « épicondyle » devient épicondyle latéral tandis que l'ancienne « épitrochlée » devient épicondyle médial. Le nerf ulnaire passe en arrière de l'épicondyle médial, dans un sillon palpable (sensation de décharge électrique au choc : le « petit juif »).</div>`
            },
            {
              titre: "Les loges et les muscles du bras",
              contenu: `<p>Le <strong>fascia brachial</strong> engaine le bras et envoie deux <strong>septums intermusculaires</strong> (médial et latéral) jusqu'aux bords de l'humérus, délimitant deux loges.</p>
<h4>Loge antérieure (fléchisseurs, nerf musculo-cutané)</h4>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action</th><th>Innervation</th></tr></thead>
<tbody>
<tr><td><strong>Biceps brachial</strong></td><td>Chef long : tubercule supra-glénoïdal (tendon intra-articulaire passant dans le sillon intertuberculaire). Chef court : processus coracoïde</td><td>Tubérosité du radius (tubérosité bicipitale) par un tendon solide ; expansion aponévrotique (lacertus fibrosus) vers le fascia antébrachial médial</td><td><strong>Supinateur</strong> puissant (coude fléchi à 90°), <strong>fléchisseur du coude</strong> (surtout en supination) ; fléchisseur accessoire et stabilisateur de l'épaule (chef long)</td><td>Nerf musculo-cutané (C5–C6)</td></tr>
<tr><td><strong>Brachial</strong></td><td>Moitié inférieure des faces antérieures de l'humérus</td><td>Tubérosité de l'ulna (face antérieure du processus coronoïde)</td><td>Fléchisseur pur du coude, quelle que soit la position de l'avant-bras (muscle « bourreau de travail » de la flexion)</td><td>Nerf musculo-cutané (C5–C6), rameau du nerf radial pour sa partie latérale</td></tr>
<tr><td><strong>Coraco-brachial</strong></td><td>Processus coracoïde</td><td>Face antéro-médiale de l'humérus</td><td>Fléchisseur et adducteur de l'épaule</td><td>Nerf musculo-cutané (C5–C7)</td></tr>
</tbody>
</table>
<h4>Loge postérieure (extenseur, nerf radial)</h4>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action</th><th>Innervation</th></tr></thead>
<tbody>
<tr><td><strong>Triceps brachial</strong></td><td>Chef long : tubercule infra-glénoïdal. Chef latéral : face postérieure de l'humérus au-dessus du sillon du nerf radial. Chef médial : face postérieure au-dessous du sillon</td><td>Face supérieure de l'olécrâne par un tendon commun ; expansion vers le fascia antébrachial</td><td><strong>Extenseur du coude</strong> (seul extenseur principal) ; le chef long est extenseur et adducteur de l'épaule</td><td>Nerf radial (C6–C8, surtout C7)</td></tr>
<tr><td><strong>Anconé</strong></td><td>Épicondyle latéral</td><td>Face latérale de l'olécrâne</td><td>Extenseur accessoire, stabilisateur</td><td>Nerf radial</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le brachial est le fléchisseur pur du coude ; le biceps est d'abord un supinateur et fléchit surtout en supination ; le brachio-radial (loge latérale de l'avant-bras, nerf radial) fléchit en position neutre (« position du verre de bière »). Le triceps est le seul extenseur notable. La règle « loge antérieure = nerf musculo-cutané, loge postérieure = nerf radial » est stricte au bras.</div>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la rupture du tendon distal du biceps (homme de 40–60 ans, effort de soulèvement) donne une rétraction du corps musculaire (signe de Popeye) et une perte de force en supination. La rupture du chef long au niveau du sillon intertuberculaire est fréquente chez le sujet âgé et souvent associée à une rupture de coiffe.</div>`
            },
            {
              titre: "L'articulation du coude",
              contenu: `<p>Le <strong>coude</strong> réunit l'humérus, l'ulna et le radius en <strong>trois articulations</strong> enfermées dans une <strong>capsule unique</strong> et une seule cavité synoviale :</p>
<ul>
<li>l'<strong>articulation huméro-ulnaire</strong> : <strong>ginglyme</strong> entre la trochlée humérale et l'<strong>incisure trochléaire</strong> de l'ulna (formée par l'olécrâne en arrière et le processus coronoïde en avant, séparés par une crête longitudinale correspondant à la gorge de la trochlée). Un degré de liberté : flexion-extension ;</li>
<li>l'<strong>articulation huméro-radiale</strong> : <strong>sphéroïde</strong> entre le capitulum et la <strong>fovéa</strong> (cupule) de la tête radiale ; ses mouvements sont limités par les deux autres (flexion-extension et rotation) ;</li>
<li>l'<strong>articulation radio-ulnaire proximale</strong> : <strong>trochoïde</strong> entre la circonférence articulaire de la tête radiale et l'<strong>incisure radiale</strong> de l'ulna, complétée par le <strong>ligament annulaire</strong> du radius (anneau ostéo-fibreux dans lequel tourne la tête). Un degré de liberté : pronation-supination.</li>
</ul>
<h4>Moyens d'union</h4>
<ul>
<li>La <strong>capsule</strong> : insérée sur l'humérus au-dessus des fosses coronoïdienne et radiale en avant, de la fosse olécrânienne en arrière (les épicondyles restent extra-capsulaires), sur l'ulna au pourtour de l'incisure trochléaire et sur le col du radius (la tête radiale est intra-articulaire). Trois coussinets adipeux occupent les fosses.</li>
<li>Le <strong>ligament collatéral ulnaire</strong> (médial) : trois faisceaux (antérieur, postérieur, transverse ou ligament de Cooper) de l'épicondyle médial au processus coronoïde et à l'olécrâne ; principal stabilisateur en valgus.</li>
<li>Le <strong>ligament collatéral radial</strong> (latéral) : de l'épicondyle latéral vers le ligament annulaire et l'ulna (faisceaux antérieur, moyen, postérieur) ; stabilisateur en varus.</li>
<li>Le <strong>ligament annulaire</strong> du radius et le <strong>ligament carré</strong> (de Dénucé), de l'incisure radiale au col du radius, pour la radio-ulnaire proximale.</li>
<li>Pas de ligament antérieur ni postérieur solide : seulement des renforcements capsulaires, d'où les luxations postérieures.</li>
</ul>
<h4>Mouvements et repères</h4>
<p><strong>Flexion</strong> : 140–145° (limitée par le contact des masses musculaires et l'entrée du processus coronoïde dans sa fosse) ; <strong>extension</strong> : 0°, l'olécrâne se bloque dans sa fosse (hyperextension de 5–10° chez la femme et l'enfant). En extension, l'axe de l'avant-bras forme avec celui du bras un <strong>valgus physiologique de 10 à 15°</strong> (cubitus valgus). Les trois repères osseux (épicondyle médial, épicondyle latéral, pointe de l'olécrâne) sont <strong>alignés horizontalement</strong> coude en extension et forment un <strong>triangle isocèle</strong> à sommet inférieur coude fléchi à 90° (triangle de Nélaton), ce qui permet de distinguer une luxation (triangle rompu) d'une fracture supra-condylienne (triangle conservé).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>luxation postérieure du coude</strong> (chute sur la main, coude en extension) est la 2<sup>e</sup> luxation la plus fréquente ; elle rompt les ligaments collatéraux et menace le nerf ulnaire et l'artère brachiale. Chez l'enfant, la <strong>pronation douloureuse</strong> est une subluxation de la tête radiale hors du ligament annulaire (traction sur la main d'un enfant de 1 à 4 ans). La <strong>fracture supra-condylienne</strong> de l'enfant menace l'artère brachiale et les nerfs médian (interosseux antérieur) et radial.</div>`
            },
            {
              titre: "Vaisseaux et nerfs du bras",
              contenu: `<h4>L'artère brachiale</h4>
<p>L'<strong>artère brachiale</strong> continue l'artère axillaire du bord inférieur du grand pectoral au pli du coude où elle se divise, 2 à 3 cm sous le pli, en <strong>artères radiale et ulnaire</strong>. Elle descend dans le <strong>canal brachial</strong>, le long du bord médial du biceps, avec le nerf médian (latéral à l'artère en haut, la croisant en avant pour devenir médial en bas), les veines brachiales et le nerf ulnaire (en haut, puis il traverse le septum médial). Elle est superficielle, palpable et compressible contre l'humérus (pouls brachial, prise de la pression artérielle). Branches : <strong>artère brachiale profonde</strong> (suit le nerf radial dans le sillon radial), artères collatérales ulnaires supérieure (avec le nerf ulnaire) et inférieure, artères nourricière et musculaires. Autour du coude, un riche <strong>réseau anastomotique péri-articulaire</strong> permet la ligature de l'artère brachiale au-dessus du coude.</p>
<h4>La fosse cubitale (pli du coude)</h4>
<p>Région triangulaire limitée latéralement par le brachio-radial, médialement par le rond pronateur, en haut par la ligne bi-épicondylienne ; plancher : brachial et supinateur. Elle contient, de latéral en médial, le <strong>tendon du biceps</strong>, l'<strong>artère brachiale</strong> et le <strong>nerf médian</strong> (« TAN »). Le nerf radial est plus latéral, sous le brachio-radial, où il se divise en branches superficielle et profonde. En superficie, la <strong>veine médiane du coude</strong> relie céphalique et basilique (prélèvements), séparée de l'artère par l'aponévrose bicipitale (lacertus fibrosus).</p>
<h4>Les nerfs du bras</h4>
<ul>
<li>Le <strong>nerf musculo-cutané</strong> : perfore le coraco-brachial, descend entre biceps et brachial qu'il innerve, puis devient le nerf cutané latéral de l'avant-bras.</li>
<li>Le <strong>nerf médian</strong> : accompagne l'artère brachiale sans donner de branche au bras.</li>
<li>Le <strong>nerf ulnaire</strong> : médial dans la loge antérieure, traverse le septum intermusculaire médial au tiers moyen, descend dans la loge postérieure et passe dans le <strong>sillon du nerf ulnaire</strong> derrière l'épicondyle médial, puis entre les deux chefs du fléchisseur ulnaire du carpe (tunnel cubital). Pas de branche au bras.</li>
<li>Le <strong>nerf radial</strong> : contourne la face postérieure de l'humérus dans le sillon du nerf radial avec l'artère brachiale profonde, innerve le triceps et l'anconé, perfore le septum latéral au tiers inférieur et gagne la loge antérieure entre brachial et brachio-radial.</li>
<li>Les nerfs cutanés médiaux du bras et de l'avant-bras et le nerf intercosto-brachial pour la peau médiale.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> au coude, le nerf médian est en avant et médial (sous le rond pronateur), le nerf ulnaire en arrière de l'épicondyle médial, le nerf radial en avant et latéral (sous le brachio-radial). Trois nerfs, trois sites de compression classiques : canal carpien (médian), tunnel cubital (ulnaire), arcade de Frohse du supinateur (radial).</div>`
            }
          ],
          points_cles: [
            "La diaphyse humérale porte la tubérosité deltoïdienne et, en arrière, le sillon du nerf radial : les fractures du tiers moyen menacent le nerf radial (main tombante).",
            "L'extrémité distale (palette) est antéversée de 30–45° ; elle comprend le condyle huméral (trochlée médiale + capitulum latéral), trois fosses et deux épicondyles.",
            "Le nerf ulnaire chemine dans le sillon postérieur de l'épicondyle médial ; les muscles épicondyliens médiaux sont fléchisseurs-pronateurs, les latéraux extenseurs-supinateurs.",
            "Loge antérieure du bras : biceps brachial (supinateur et fléchisseur, tubérosité du radius), brachial (fléchisseur pur, ulna), coraco-brachial ; tous innervés par le nerf musculo-cutané.",
            "Loge postérieure : triceps brachial (olécrâne, nerf radial), seul extenseur principal du coude.",
            "Le coude réunit trois articulations dans une capsule unique : huméro-ulnaire (ginglyme), huméro-radiale (sphéroïde), radio-ulnaire proximale (trochoïde avec ligament annulaire).",
            "Ligaments collatéraux ulnaire (valgus) et radial (varus) ; absence de ligament antéro-postérieur solide, d'où les luxations postérieures.",
            "Valgus physiologique de 10–15° ; les trois repères (épicondyles et olécrâne) sont alignés en extension et forment un triangle isocèle en flexion.",
            "Au pli du coude, de latéral en médial : tendon du biceps, artère brachiale, nerf médian ; le nerf radial est sous le brachio-radial, le nerf ulnaire derrière l'épicondyle médial."
          ],
          lexique: [
            { terme: "Sillon du nerf radial", def: "Gouttière oblique de la face postérieure de l'humérus où cheminent le nerf radial et l'artère brachiale profonde." },
            { terme: "Condyle huméral", def: "Ensemble de la surface articulaire distale de l'humérus : trochlée et capitulum." },
            { terme: "Capitulum", def: "Saillie hémisphérique latérale de l'extrémité distale de l'humérus, articulée avec la tête radiale." },
            { terme: "Incisure trochléaire", def: "Surface articulaire de l'ulna, formée par l'olécrâne et le processus coronoïde, recevant la trochlée humérale." },
            { terme: "Ligament annulaire du radius", def: "Anneau fibreux fixé aux bords de l'incisure radiale de l'ulna, entourant la tête radiale." },
            { terme: "Cubitus valgus", def: "Angle de 10 à 15° ouvert latéralement entre l'axe du bras et celui de l'avant-bras, coude en extension et supination." },
            { terme: "Fosse cubitale", def: "Région triangulaire du pli du coude contenant le tendon du biceps, l'artère brachiale et le nerf médian." },
            { terme: "Lacertus fibrosus", def: "Expansion aponévrotique du tendon du biceps vers le fascia antébrachial, séparant la veine médiane de l'artère brachiale." },
            { terme: "Pronation douloureuse", def: "Subluxation de la tête radiale hors du ligament annulaire chez le jeune enfant, après traction sur la main." }
          ],
          qcm: [
            {
              q: "Concernant l'humérus, quelles propositions sont exactes ?",
              options: [
                "A. Le sillon du nerf radial parcourt la face postérieure de la diaphyse.",
                "B. La tubérosité deltoïdienne est située sur la face antéro-médiale.",
                "C. La trochlée humérale est latérale par rapport au capitulum.",
                "D. La fosse olécrânienne reçoit l'olécrâne lors de l'extension.",
                "E. L'épicondyle médial présente en arrière le sillon du nerf ulnaire."
              ],
              bonnes: [0, 3, 4],
              explication: "A est vraie. B est fausse : la tubérosité deltoïdienne est sur la face antéro-latérale. C est fausse : la trochlée est médiale, le capitulum latéral. D et E sont vraies."
            },
            {
              q: "Concernant les muscles du bras, quelles propositions sont exactes ?",
              options: [
                "A. Le chef long du biceps brachial naît du processus coracoïde.",
                "B. Le biceps brachial se termine sur la tubérosité du radius.",
                "C. Le brachial se termine sur l'ulna.",
                "D. Le triceps brachial est innervé par le nerf musculo-cutané.",
                "E. Le biceps brachial est un puissant supinateur."
              ],
              bonnes: [1, 2, 4],
              explication: "A est fausse : le chef long naît du tubercule supra-glénoïdal ; c'est le chef court qui naît du processus coracoïde. B, C et E sont vraies. D est fausse : le triceps est innervé par le nerf radial."
            },
            {
              q: "Concernant l'articulation du coude, quelles propositions sont exactes ?",
              options: [
                "A. L'articulation huméro-ulnaire est un ginglyme.",
                "B. L'articulation radio-ulnaire proximale est une articulation en selle.",
                "C. Les trois articulations partagent une capsule unique.",
                "D. Le ligament annulaire entoure la tête radiale.",
                "E. Les épicondyles sont intra-capsulaires."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : la radio-ulnaire proximale est une trochoïde (pivot). E est fausse : les épicondyles restent en dehors de la capsule, ce qui permet les insertions musculaires."
            },
            {
              q: "Concernant la biomécanique et les repères du coude, quelles propositions sont exactes ?",
              options: [
                "A. La flexion du coude atteint environ 140°.",
                "B. Le valgus physiologique du coude est d'environ 10 à 15°.",
                "C. Coude fléchi à 90°, les deux épicondyles et l'olécrâne sont alignés.",
                "D. Le ligament collatéral ulnaire s'oppose au valgus forcé.",
                "E. La luxation du coude est le plus souvent antérieure."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : les trois repères sont alignés en extension et forment un triangle isocèle en flexion à 90°. E est fausse : la luxation du coude est le plus souvent postérieure."
            },
            {
              q: "Concernant les vaisseaux et nerfs du bras, quelles propositions sont exactes ?",
              options: [
                "A. L'artère brachiale se divise en artères radiale et ulnaire au pli du coude.",
                "B. Le nerf médian donne des branches motrices aux muscles du bras.",
                "C. Le nerf ulnaire passe en arrière de l'épicondyle médial.",
                "D. Au pli du coude, le nerf médian est médial par rapport à l'artère brachiale.",
                "E. L'artère brachiale profonde accompagne le nerf radial."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le nerf médian ne donne aucune branche au bras ; il innerve les muscles de l'avant-bras et de la main."
            },
            {
              q: "Concernant la pathologie du bras et du coude, quelles propositions sont exactes ?",
              options: [
                "A. La fracture de la diaphyse humérale expose à une paralysie du nerf radial.",
                "B. La paralysie radiale se traduit par une main tombante.",
                "C. La pronation douloureuse de l'enfant est une luxation complète du coude.",
                "D. La fracture supra-condylienne de l'enfant menace l'artère brachiale.",
                "E. La rupture du tendon distal du biceps entraîne une perte de force en supination."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la pronation douloureuse est une subluxation de la tête radiale hors du ligament annulaire, réduite par une simple manœuvre."
            }
          ]
        },
        {
          id: "avant-bras-poignet",
          titre: "Avant-bras et poignet",
          duree: 40,
          objectifs: [
            "Décrire le radius, l'ulna et la membrane interosseuse.",
            "Décrire les trois loges de l'avant-bras et leurs muscles (origine, terminaison, action, innervation).",
            "Expliquer le mécanisme de la pronation-supination et les articulations radio-ulnaires.",
            "Décrire l'articulation radio-carpienne et le canal carpien avec son contenu.",
            "Relier l'anatomie aux fractures de l'extrémité distale du radius et au syndrome du canal carpien."
          ],
          sections: [
            {
              titre: "Le radius",
              contenu: `<p>Le <strong>radius</strong> est l'os <strong>latéral</strong> de l'avant-bras, long d'environ 24 cm. Il est <strong>grêle en haut, volumineux en bas</strong> (à l'inverse de l'ulna) : il porte la main et transmet les forces vers l'ulna par la membrane interosseuse.</p>
<ul>
<li><strong>Extrémité proximale</strong> : la <strong>tête radiale</strong>, cylindrique, dont la face supérieure est creusée de la <strong>fovéa</strong> (cupule) pour le capitulum, et dont la <strong>circonférence articulaire</strong> tourne dans l'incisure radiale de l'ulna et le ligament annulaire. Le <strong>col</strong>, rétréci, et la <strong>tubérosité du radius</strong> (bicipitale), antéro-médiale, où se termine le biceps brachial.</li>
<li><strong>Diaphyse</strong> : prismatique triangulaire, légèrement concave en avant et convexe latéralement (courbure pronatrice), avec un bord interosseux médial tranchant (membrane interosseuse), une face antérieure (fléchisseur superficiel des doigts, long fléchisseur du pouce), une face postérieure (long abducteur et court extenseur du pouce) et une face latérale (supinateur en haut, rond pronateur à mi-hauteur, insertion rugueuse).</li>
<li><strong>Extrémité distale</strong> : volumineuse, quadrangulaire. Face inférieure : <strong>surface articulaire carpienne</strong>, concave, divisée par une crête en une facette latérale triangulaire pour le scaphoïde et une facette médiale quadrilatère pour le lunatum ; elle regarde en bas, en avant (inclinaison antérieure de 10–12°) et médialement (inclinaison ulnaire de 20–25°). Face médiale : <strong>incisure ulnaire</strong> pour la tête de l'ulna. Face latérale : le <strong>processus styloïde du radius</strong>, qui descend 1 cm plus bas que celui de l'ulna. Face postérieure : sillons pour les tendons extenseurs, avec le <strong>tubercule dorsal</strong> (de Lister), poulie de réflexion du long extenseur du pouce.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>fracture de l'extrémité distale du radius</strong> est la fracture la plus fréquente de l'adulte (chute sur la paume, femme ostéoporotique). Dans la <strong>fracture de Pouteau-Colles</strong>, le fragment distal bascule en arrière (déformation en dos de fourchette) et latéralement (main botte radiale), avec horizontalisation de la ligne bi-styloïdienne (la styloïde radiale remonte au niveau de l'ulnaire). La fracture de la tête radiale est la fracture du coude la plus fréquente de l'adulte.</div>`
            },
            {
              titre: "L'ulna et la membrane interosseuse",
              contenu: `<p>L'<strong>ulna</strong> (cubitus) est l'os <strong>médial</strong> de l'avant-bras, long d'environ 26 cm, <strong>volumineux en haut</strong> (où il forme l'essentiel du coude) et <strong>grêle en bas</strong>.</p>
<ul>
<li><strong>Extrémité proximale</strong> : l'<strong>olécrâne</strong>, en arrière, saillie verticale sous-cutanée (insertion du triceps sur sa face supérieure), et le <strong>processus coronoïde</strong>, en avant, saillie horizontale portant la <strong>tubérosité de l'ulna</strong> (brachial). Entre eux, l'<strong>incisure trochléaire</strong>, en crochet, encroûtée de cartilage, avec une crête sagittale mousse ; latéralement, l'<strong>incisure radiale</strong> pour la tête radiale ; sous elle, la crête du supinateur.</li>
<li><strong>Diaphyse</strong> : prismatique triangulaire, bord interosseux latéral, face antérieure (fléchisseur profond des doigts, carré pronateur), face postérieure (extenseurs du pouce, extenseur de l'index, supinateur), face médiale (fléchisseur profond des doigts). Bord postérieur sous-cutané et palpable sur toute sa longueur (voie d'abord).</li>
<li><strong>Extrémité distale</strong> : la <strong>tête de l'ulna</strong>, arrondie, dont la circonférence articulaire s'articule avec l'incisure ulnaire du radius, et dont la face inférieure répond au disque articulaire radio-ulnaire (elle ne s'articule <strong>pas</strong> directement avec le carpe) ; le <strong>processus styloïde de l'ulna</strong>, postéro-médial, sur lequel se fixent le disque et le ligament collatéral ulnaire du carpe.</li>
</ul>
<h4>La membrane interosseuse</h4>
<p>Lame fibreuse tendue entre les bords interosseux du radius et de l'ulna (syndesmose), dont les fibres sont obliques <strong>du radius (en haut) vers l'ulna (en bas)</strong> : elle transmet à l'ulna les forces reçues par le radius lors de l'appui sur la main (chute) et double la surface d'insertion des muscles profonds. Elle est tendue en position intermédiaire de pronation-supination (position de fonction), détendue en pronation ou supination complète. Un orifice supérieur laisse passer l'artère interosseuse postérieure, un orifice inférieur l'artère interosseuse antérieure. En haut, la <strong>corde oblique</strong> (de Weitbrecht) a une direction inverse.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la tête de l'ulna est <strong>distale</strong> (alors que la tête du radius est proximale) ; l'ulna n'est pas en contact direct avec le carpe : le disque articulaire (ligament triangulaire) s'interpose. La styloïde radiale est plus basse que la styloïde ulnaire (ligne bi-styloïdienne oblique de 15 à 25°), ce qui est perdu dans les fractures de Pouteau-Colles.</div>`
            },
            {
              titre: "Les loges musculaires de l'avant-bras",
              contenu: `<p>Le fascia antébrachial, la membrane interosseuse et les septums délimitent trois loges : <strong>antérieure</strong> (fléchisseurs et pronateurs, nerfs médian et ulnaire), <strong>latérale</strong> (nerf radial) et <strong>postérieure</strong> (extenseurs et supinateur, nerf radial par sa branche profonde / nerf interosseux postérieur). Vingt muscles au total.</p>
<h4>Loge antérieure (8 muscles, 4 plans)</h4>
<table>
<thead><tr><th>Plan</th><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action</th><th>Innervation</th></tr></thead>
<tbody>
<tr><td>1er plan</td><td><strong>Rond pronateur</strong></td><td>Épicondyle médial (chef huméral) et processus coronoïde (chef ulnaire)</td><td>Face latérale du radius (tiers moyen)</td><td>Pronateur, fléchisseur accessoire du coude</td><td>Médian (passe entre ses deux chefs)</td></tr>
<tr><td>1er plan</td><td><strong>Fléchisseur radial du carpe</strong></td><td>Épicondyle médial</td><td>Base du 2e (et 3e) métacarpien</td><td>Fléchisseur et abducteur (inclinaison radiale) du poignet</td><td>Médian</td></tr>
<tr><td>1er plan</td><td><strong>Long palmaire</strong></td><td>Épicondyle médial</td><td>Rétinaculum des fléchisseurs et aponévrose palmaire</td><td>Fléchisseur du poignet, tenseur de l'aponévrose palmaire (inconstant, 15 % d'absence)</td><td>Médian</td></tr>
<tr><td>1er plan</td><td><strong>Fléchisseur ulnaire du carpe</strong></td><td>Épicondyle médial et bord postérieur de l'ulna (olécrâne)</td><td>Pisiforme, hamulus de l'hamatum, base du 5e métacarpien</td><td>Fléchisseur et adducteur (inclinaison ulnaire) du poignet</td><td><strong>Ulnaire</strong> (passe entre ses deux chefs)</td></tr>
<tr><td>2e plan</td><td><strong>Fléchisseur superficiel des doigts</strong></td><td>Épicondyle médial, processus coronoïde, face antérieure du radius (arcade fibreuse sous laquelle passe le médian)</td><td>4 tendons pour les faces latérales de la 2e phalange (P2) des doigts II à V, après perforation en boutonnière par le tendon profond</td><td>Fléchisseur de P2 sur P1 (interphalangienne proximale), puis des doigts et du poignet</td><td>Médian</td></tr>
<tr><td>3e plan</td><td><strong>Fléchisseur profond des doigts</strong></td><td>Faces antérieure et médiale de l'ulna, membrane interosseuse</td><td>4 tendons pour la base de la 3e phalange (P3) des doigts II à V</td><td>Fléchisseur de P3 sur P2 (interphalangienne distale), puis des doigts</td><td>Médian (nerf interosseux antérieur) pour II et III ; <strong>ulnaire</strong> pour IV et V</td></tr>
<tr><td>3e plan</td><td><strong>Long fléchisseur du pouce</strong></td><td>Face antérieure du radius, membrane interosseuse</td><td>Base de P2 du pouce</td><td>Fléchisseur de P2 du pouce (seul fléchisseur de l'interphalangienne)</td><td>Médian (nerf interosseux antérieur)</td></tr>
<tr><td>4e plan</td><td><strong>Carré pronateur</strong></td><td>Quart distal de la face antérieure de l'ulna</td><td>Quart distal de la face antérieure du radius</td><td>Pronateur principal, maintien de la radio-ulnaire distale</td><td>Médian (nerf interosseux antérieur)</td></tr>
</tbody>
</table>
<h4>Loge latérale (4 muscles, nerf radial)</h4>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action</th><th>Innervation</th></tr></thead>
<tbody>
<tr><td><strong>Brachio-radial</strong></td><td>Bord latéral de l'humérus (crête supra-condylaire)</td><td>Processus styloïde du radius</td><td>Fléchisseur du coude en position neutre, ramène en position neutre</td><td>Radial (tronc)</td></tr>
<tr><td><strong>Long extenseur radial du carpe</strong></td><td>Crête supra-condylaire latérale</td><td>Base du 2e métacarpien</td><td>Extenseur et abducteur du poignet</td><td>Radial (tronc)</td></tr>
<tr><td><strong>Court extenseur radial du carpe</strong></td><td>Épicondyle latéral</td><td>Base du 3e métacarpien</td><td>Extenseur du poignet</td><td>Radial (branche profonde)</td></tr>
<tr><td><strong>Supinateur</strong></td><td>Épicondyle latéral, crête du supinateur de l'ulna</td><td>Tiers supérieur du radius (l'enroule)</td><td>Supinateur (quelle que soit la flexion du coude) ; traversé par la branche profonde du radial (arcade de Frohse)</td><td>Radial (branche profonde)</td></tr>
</tbody>
</table>
<h4>Loge postérieure (8 muscles, nerf interosseux postérieur = branche profonde du radial)</h4>
<table>
<thead><tr><th>Plan</th><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Superficiel</td><td><strong>Extenseur des doigts</strong></td><td>Épicondyle latéral</td><td>4 tendons pour les doigts II à V : languette médiane sur P2, deux languettes latérales sur P3 (dossière)</td><td>Extenseur des doigts (surtout métacarpo-phalangiennes) et du poignet</td></tr>
<tr><td>Superficiel</td><td><strong>Extenseur du petit doigt</strong></td><td>Épicondyle latéral</td><td>Dossière du 5e doigt</td><td>Extenseur du 5e doigt</td></tr>
<tr><td>Superficiel</td><td><strong>Extenseur ulnaire du carpe</strong></td><td>Épicondyle latéral, bord postérieur de l'ulna</td><td>Base du 5e métacarpien</td><td>Extenseur et adducteur du poignet</td></tr>
<tr><td>Superficiel</td><td><strong>Anconé</strong></td><td>Épicondyle latéral</td><td>Olécrâne</td><td>Extenseur accessoire du coude</td></tr>
<tr><td>Profond</td><td><strong>Long abducteur du pouce</strong></td><td>Faces postérieures du radius et de l'ulna, membrane</td><td>Base du 1er métacarpien</td><td>Abducteur du pouce</td></tr>
<tr><td>Profond</td><td><strong>Court extenseur du pouce</strong></td><td>Face postérieure du radius</td><td>Base de P1 du pouce</td><td>Extenseur de P1</td></tr>
<tr><td>Profond</td><td><strong>Long extenseur du pouce</strong></td><td>Face postérieure de l'ulna</td><td>Base de P2 du pouce (après réflexion sur le tubercule dorsal)</td><td>Extenseur de P2, rétropulsion du pouce</td></tr>
<tr><td>Profond</td><td><strong>Extenseur de l'index</strong></td><td>Face postérieure de l'ulna</td><td>Dossière de l'index</td><td>Extenseur de l'index (indépendance)</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> tous les muscles de la loge antérieure sont innervés par le nerf médian, <strong>sauf</strong> le fléchisseur ulnaire du carpe et la moitié médiale du fléchisseur profond des doigts (nerf ulnaire). Toutes les loges latérale et postérieure dépendent du nerf radial. Les tendons du long abducteur et du court extenseur du pouce limitent latéralement la <strong>tabatière anatomique</strong>, le long extenseur du pouce la limite médialement ; son fond est le scaphoïde et l'artère radiale la traverse.</div>`
            },
            {
              titre: "La pronation-supination",
              contenu: `<p>La <strong>pronation-supination</strong> est la rotation de l'avant-bras autour d'un axe longitudinal passant par le centre de la tête radiale et le processus styloïde de l'ulna (ou le 5<sup>e</sup> doigt) : le radius <strong>tourne autour de l'ulna</strong>, qui reste quasi fixe, en décrivant un cône. En pronation, le radius croise l'ulna en avant. Amplitude : pronation 85°, supination 90°, coude fléchi à 90° (pour éliminer la rotation de l'épaule). Elle fait intervenir deux articulations trochoïdes mécaniquement liées :</p>
<ul>
<li>l'<strong>articulation radio-ulnaire proximale</strong> (tête radiale, incisure radiale, ligament annulaire, ligament carré) ;</li>
<li>l'<strong>articulation radio-ulnaire distale</strong> : la tête de l'ulna tourne dans l'incisure ulnaire du radius (en réalité c'est le radius qui tourne autour de la tête fixe de l'ulna). Moyens d'union : le <strong>disque articulaire</strong> (ligament triangulaire), fibrocartilage tendu de la styloïde ulnaire au bord inférieur de l'incisure ulnaire, qui sépare la tête de l'ulna du carpe et constitue le pivot du mouvement ; ligaments radio-ulnaires antérieur et postérieur ; le complexe fibro-cartilagineux triangulaire (TFCC) les regroupe avec la gaine de l'extenseur ulnaire du carpe.</li>
</ul>
<table>
<thead><tr><th>Mouvement</th><th>Muscles</th><th>Nerfs</th></tr></thead>
<tbody>
<tr><td><strong>Pronation</strong></td><td>Carré pronateur (principal, en toute position), rond pronateur (rapidité, force), accessoirement fléchisseur radial du carpe</td><td>Médian</td></tr>
<tr><td><strong>Supination</strong></td><td>Biceps brachial (puissant, coude fléchi), supinateur (en toute position), accessoirement brachio-radial (retour en neutre), long abducteur et extenseurs du pouce</td><td>Musculo-cutané, radial</td></tr>
</tbody>
</table>
<p>La supination est plus puissante que la pronation (serrage des vis « à droite »). Les fractures des deux os de l'avant-bras, ou une cal vicieux avec perte de la courbure pronatrice du radius, limitent la pronation-supination. Dans la <strong>fracture de Monteggia</strong>, la fracture de l'ulna s'associe à une luxation de la tête radiale ; dans la <strong>fracture de Galeazzi</strong>, la fracture du radius s'associe à une luxation radio-ulnaire distale.</p>`
            },
            {
              titre: "Le poignet : articulation radio-carpienne et rétinaculums",
              contenu: `<p>Le <strong>poignet</strong> (carpe) comprend l'articulation <strong>radio-carpienne</strong>, l'articulation <strong>médio-carpienne</strong> (entre les deux rangées du carpe, décrite avec la main) et la radio-ulnaire distale.</p>
<h4>Articulation radio-carpienne</h4>
<p>Articulation synoviale <strong>ellipsoïde</strong> (condylienne) entre, d'une part, la <strong>surface articulaire carpienne du radius</strong> et le <strong>disque articulaire</strong> (cavité glénoïde antébrachiale, concave) et, d'autre part, le <strong>condyle carpien</strong> formé par le <strong>scaphoïde</strong>, le <strong>lunatum</strong> et le <strong>triquetrum</strong> (face latérale du triquetrum, en regard du disque). Capsule lâche, renforcée par les ligaments radio-carpiens palmaire (le plus solide) et dorsal, et les ligaments collatéraux radial (styloïde radiale–scaphoïde) et ulnaire (styloïde ulnaire–triquetrum et pisiforme). Mouvements (avec la médio-carpienne) : flexion 85°, extension 85°, inclinaison radiale 15°, inclinaison ulnaire 45° ; circumduction ; pas de rotation axiale propre (elle est assurée par la pronation-supination).</p>
<h4>Les rétinaculums</h4>
<ul>
<li>Le <strong>rétinaculum des fléchisseurs</strong> (ligament annulaire antérieur du carpe) : lame fibreuse épaisse tendue, latéralement, du tubercule du scaphoïde et du tubercule du trapèze et, médialement, du pisiforme et de l'hamulus de l'hamatum. Il transforme la gouttière carpienne en <strong>canal carpien</strong>.</li>
<li>Le <strong>rétinaculum des extenseurs</strong> (ligament annulaire postérieur) : de la face postérieure du radius au triquetrum et pisiforme ; il délimite <strong>six coulisses</strong> ostéo-fibreuses pour les tendons extenseurs, de latéral en médial : (1) long abducteur et court extenseur du pouce, (2) long et court extenseurs radiaux du carpe, (3) long extenseur du pouce, (4) extenseur des doigts et extenseur de l'index, (5) extenseur du petit doigt, (6) extenseur ulnaire du carpe.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>ténosynovite de De Quervain</strong> touche la 1<sup>re</sup> coulisse (long abducteur et court extenseur du pouce) : douleur de la styloïde radiale, test de Finkelstein. La <strong>fracture du scaphoïde</strong> (chute sur la main, jeune adulte) se traduit par une douleur au fond de la tabatière anatomique ; souvent invisible sur les premières radiographies, elle expose à la pseudarthrose et à la nécrose du pôle proximal.</div>`
            },
            {
              titre: "Le canal carpien et la loge de Guyon",
              contenu: `<h4>Le canal carpien</h4>
<p>Tunnel ostéo-fibreux inextensible de la face antérieure du poignet, limité en arrière et sur les côtés par la <strong>gouttière carpienne</strong> (concavité antérieure du carpe : scaphoïde et trapèze latéralement, pisiforme et hamatum médialement, lunatum et capitatum au fond) et en avant par le <strong>rétinaculum des fléchisseurs</strong>. Il mesure environ 2,5 cm de long. Il contient <strong>dix éléments</strong> :</p>
<ul>
<li>les <strong>quatre tendons du fléchisseur superficiel des doigts</strong> et les <strong>quatre tendons du fléchisseur profond des doigts</strong>, dans une gaine synoviale commune (gaine ulnaire) ;</li>
<li>le tendon du <strong>long fléchisseur du pouce</strong>, dans sa gaine propre (gaine radiale) ;</li>
<li>le <strong>nerf médian</strong>, le plus superficiel, directement sous le rétinaculum, en position antérieure et latérale.</li>
</ul>
<p>Le <strong>tendon du fléchisseur radial du carpe</strong> passe dans un dédoublement du rétinaculum (canal propre) et <strong>ne fait pas partie</strong> du canal carpien stricto sensu ; le long palmaire, le nerf ulnaire et l'artère ulnaire passent <strong>en avant</strong> du rétinaculum ; la branche palmaire cutanée du médian naît avant le canal et reste en avant du rétinaculum.</p>
<h4>La loge de Guyon (canal ulnaire)</h4>
<p>Située médialement, en avant du rétinaculum des fléchisseurs, entre le pisiforme et l'hamulus de l'hamatum, recouverte par une expansion du fléchisseur ulnaire du carpe. Elle contient le <strong>nerf ulnaire</strong> (qui s'y divise en branches superficielle sensitive et profonde motrice) et l'<strong>artère ulnaire</strong>.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>syndrome du canal carpien</strong> est la neuropathie de compression la plus fréquente (femme de 40–60 ans, grossesse, hypothyroïdie, diabète, mouvements répétitifs). Compression du nerf médian sous le rétinaculum : <strong>paresthésies nocturnes des trois premiers doigts et de la moitié latérale du 4<sup>e</sup></strong>, signe de Tinel, test de Phalen, puis amyotrophie de la loge thénarienne (opposant et court abducteur du pouce). La sensibilité de la paume (branche palmaire cutanée) est <strong>préservée</strong> car cette branche naît avant le canal. Traitement : infiltration ou section du rétinaculum des fléchisseurs. La compression dans la loge de Guyon donne des paresthésies des deux derniers doigts et une faiblesse des interosseux.</div>`
            }
          ],
          points_cles: [
            "Le radius est latéral, grêle en haut (tête, col, tubérosité bicipitale) et volumineux en bas (surface carpienne, incisure ulnaire, styloïde descendant 1 cm plus bas que l'ulnaire).",
            "L'ulna est médiale, volumineuse en haut (olécrâne, processus coronoïde, incisure trochléaire) et grêle en bas (tête distale, styloïde) ; elle ne touche pas le carpe (disque articulaire).",
            "La membrane interosseuse a des fibres obliques du radius vers l'ulna et transmet à l'ulna les forces reçues par le radius ; elle est tendue en position intermédiaire.",
            "Loge antérieure : 8 muscles en 4 plans, tous innervés par le médian sauf le fléchisseur ulnaire du carpe et la moitié médiale du fléchisseur profond (ulnaire).",
            "Loges latérale et postérieure : 12 muscles, tous innervés par le nerf radial (tronc ou branche profonde / interosseux postérieur).",
            "Pronation : carré pronateur et rond pronateur (médian) ; supination : biceps brachial (musculo-cutané) et supinateur (radial) ; le radius tourne autour de l'ulna, pivot distal = disque articulaire.",
            "La radio-carpienne est une ellipsoïde entre la glène antébrachiale (radius + disque) et le condyle carpien (scaphoïde, lunatum, triquetrum) ; inclinaison ulnaire 45° > radiale 15°.",
            "Le rétinaculum des extenseurs délimite six coulisses ; la 1re (long abducteur et court extenseur du pouce) est le siège de la ténosynovite de De Quervain.",
            "Le canal carpien contient 9 tendons (4 FSD, 4 FPD, LFP) et le nerf médian ; le fléchisseur radial du carpe, le long palmaire et le nerf ulnaire sont en dehors.",
            "Syndrome du canal carpien : paresthésies des 3 premiers doigts et demi, amyotrophie thénarienne, sensibilité palmaire préservée."
          ],
          lexique: [
            { terme: "Fovéa de la tête radiale", def: "Cupule de la face supérieure de la tête radiale articulée avec le capitulum." },
            { terme: "Tubérosité du radius", def: "Saillie antéro-médiale sous le col du radius où se termine le biceps brachial (tubérosité bicipitale)." },
            { terme: "Incisure ulnaire du radius", def: "Surface articulaire de la face médiale de l'extrémité distale du radius pour la tête de l'ulna." },
            { terme: "Disque articulaire radio-ulnaire", def: "Fibrocartilage triangulaire tendu de la styloïde ulnaire au radius, séparant la tête de l'ulna du carpe (ligament triangulaire)." },
            { terme: "Membrane interosseuse antébrachiale", def: "Syndesmose entre les bords interosseux du radius et de l'ulna, à fibres obliques du radius vers l'ulna." },
            { terme: "Rétinaculum des fléchisseurs", def: "Lame fibreuse antérieure du poignet fermant le canal carpien, tendue du scaphoïde et du trapèze au pisiforme et à l'hamatum." },
            { terme: "Canal carpien", def: "Tunnel ostéo-fibreux contenant les 9 tendons fléchisseurs des doigts et le nerf médian." },
            { terme: "Loge de Guyon", def: "Espace médial du poignet, en avant du rétinaculum des fléchisseurs, contenant le nerf et l'artère ulnaires." },
            { terme: "Tabatière anatomique", def: "Dépression dorso-latérale du poignet entre les tendons du long extenseur du pouce et ceux du long abducteur et court extenseur du pouce ; fond : scaphoïde, traversée par l'artère radiale." },
            { terme: "Arcade de Frohse", def: "Arcade fibreuse du bord supérieur du supinateur sous laquelle passe la branche profonde du nerf radial." }
          ],
          qcm: [
            {
              q: "Concernant le radius et l'ulna, quelles propositions sont exactes ?",
              options: [
                "A. Le radius est l'os médial de l'avant-bras.",
                "B. La tête du radius est proximale alors que la tête de l'ulna est distale.",
                "C. Le processus styloïde du radius descend plus bas que celui de l'ulna.",
                "D. La tête de l'ulna s'articule directement avec le triquetrum.",
                "E. Le tubercule dorsal du radius sert de poulie au long extenseur du pouce."
              ],
              bonnes: [1, 2, 4],
              explication: "A est fausse : le radius est latéral. B et C sont vraies. D est fausse : le disque articulaire s'interpose entre la tête de l'ulna et le carpe. E est vraie."
            },
            {
              q: "Concernant la loge antérieure de l'avant-bras, quelles propositions sont exactes ?",
              options: [
                "A. Le rond pronateur est innervé par le nerf médian.",
                "B. Le fléchisseur ulnaire du carpe est innervé par le nerf ulnaire.",
                "C. Le fléchisseur superficiel des doigts se termine sur la base de la troisième phalange.",
                "D. Le fléchisseur profond des doigts est innervé en totalité par le nerf médian.",
                "E. Le carré pronateur est le pronateur principal."
              ],
              bonnes: [0, 1, 4],
              explication: "A, B et E sont vraies. C est fausse : le fléchisseur superficiel se termine sur les faces latérales de la 2e phalange ; c'est le profond qui atteint la 3e phalange. D est fausse : la moitié médiale du fléchisseur profond (doigts IV et V) est innervée par le nerf ulnaire."
            },
            {
              q: "Concernant les loges latérale et postérieure de l'avant-bras, quelles propositions sont exactes ?",
              options: [
                "A. Tous leurs muscles sont innervés par le nerf radial.",
                "B. Le brachio-radial est fléchisseur du coude.",
                "C. Le supinateur est traversé par la branche profonde du nerf radial.",
                "D. L'extenseur ulnaire du carpe se termine sur la base du 2e métacarpien.",
                "E. Le long abducteur du pouce limite la tabatière anatomique."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : l'extenseur ulnaire du carpe se termine sur la base du 5e métacarpien ; c'est le long extenseur radial du carpe qui se termine sur le 2e."
            },
            {
              q: "Concernant la pronation-supination, quelles propositions sont exactes ?",
              options: [
                "A. Le radius tourne autour de l'ulna.",
                "B. Elle fait intervenir deux articulations trochoïdes.",
                "C. Le biceps brachial est un pronateur.",
                "D. Le disque articulaire radio-ulnaire est le pivot distal du mouvement.",
                "E. La membrane interosseuse est tendue au maximum en pronation complète."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : le biceps est un puissant supinateur. E est fausse : la membrane est tendue en position intermédiaire et détendue en pronation ou supination complète."
            },
            {
              q: "Concernant le canal carpien, quelles propositions sont exactes ?",
              options: [
                "A. Il est fermé en avant par le rétinaculum des fléchisseurs.",
                "B. Il contient le nerf ulnaire.",
                "C. Il contient les tendons des fléchisseurs superficiel et profond des doigts et du long fléchisseur du pouce.",
                "D. Le nerf médian y est l'élément le plus superficiel.",
                "E. La sensibilité de la paume est abolie dans le syndrome du canal carpien."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : le nerf ulnaire passe en avant du rétinaculum, dans la loge de Guyon. E est fausse : la branche palmaire cutanée du médian naît avant le canal, la sensibilité de la paume est préservée."
            },
            {
              q: "Concernant le poignet, quelles propositions sont exactes ?",
              options: [
                "A. L'articulation radio-carpienne est une articulation ellipsoïde.",
                "B. Le condyle carpien est formé par le scaphoïde, le lunatum et le triquetrum.",
                "C. L'inclinaison radiale est plus ample que l'inclinaison ulnaire.",
                "D. Le rétinaculum des extenseurs délimite six coulisses tendineuses.",
                "E. La ténosynovite de De Quervain concerne la 6e coulisse."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : inclinaison ulnaire 45° contre 15° pour la radiale (la styloïde radiale bloque). E est fausse : elle concerne la 1re coulisse (long abducteur et court extenseur du pouce)."
            },
            {
              q: "Concernant la pathologie de l'avant-bras et du poignet, quelles propositions sont exactes ?",
              options: [
                "A. La fracture de Pouteau-Colles est une fracture de l'extrémité distale du radius à bascule postérieure.",
                "B. La fracture du scaphoïde se manifeste par une douleur dans la tabatière anatomique.",
                "C. La fracture de Monteggia associe une fracture de l'ulna et une luxation de la tête radiale.",
                "D. Le syndrome du canal carpien provoque une amyotrophie de la loge hypothénarienne.",
                "E. La fracture de l'extrémité distale du radius est la fracture la plus fréquente de l'adulte."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la compression du nerf médian entraîne une amyotrophie de la loge thénarienne ; l'hypothénar dépend du nerf ulnaire."
            }
          ]
        },
        {
          id: "main",
          titre: "La main",
          duree: 40,
          objectifs: [
            "Citer et situer les huit os du carpe, les métacarpiens et les phalanges.",
            "Décrire les articulations de la main (médio-carpienne, carpo-métacarpiennes, trapézo-métacarpienne, métacarpo-phalangiennes, interphalangiennes).",
            "Décrire les muscles intrinsèques de la main : loges thénarienne et hypothénarienne, lombricaux, interosseux (insertions, actions, innervation).",
            "Décrire la vascularisation (arcades palmaires) et l'innervation sensitive de la main.",
            "Expliquer les déformations caractéristiques des paralysies des nerfs médian, ulnaire et radial."
          ],
          sections: [
            {
              titre: "Le squelette de la main : carpe, métacarpe, phalanges",
              contenu: `<p>La main comprend <strong>27 os</strong> : 8 os du carpe, 5 métacarpiens et 14 phalanges (3 par doigt long, 2 pour le pouce).</p>
<h4>Le carpe</h4>
<p>Huit os courts disposés en deux rangées, formant une gouttière à concavité antérieure (gouttière carpienne). De latéral en médial :</p>
<table>
<thead><tr><th>Rangée proximale</th><th>Rangée distale</th></tr></thead>
<tbody>
<tr><td><strong>Scaphoïde</strong> : le plus grand de la 1re rangée, en forme de barque, oblique ; tubercule antérieur palpable ; s'articule avec le radius, le lunatum, le capitatum, le trapèze et le trapézoïde ; fond de la tabatière anatomique</td><td><strong>Trapèze</strong> : tubercule antérieur ; surface en selle pour le 1er métacarpien</td></tr>
<tr><td><strong>Lunatum</strong> (semi-lunaire) : en forme de croissant, articulé avec le radius en haut et le capitatum en bas ; os le plus souvent luxé du carpe</td><td><strong>Trapézoïde</strong> : le plus petit de la 2e rangée, pour le 2e métacarpien</td></tr>
<tr><td><strong>Triquetrum</strong> (pyramidal) : pyramidal, en regard du disque articulaire ; porte en avant le pisiforme</td><td><strong>Capitatum</strong> (grand os) : le plus volumineux du carpe, tête enchâssée entre scaphoïde et lunatum, clé de voûte ; pour le 3e métacarpien</td></tr>
<tr><td><strong>Pisiforme</strong> : petit os sésamoïde dans le tendon du fléchisseur ulnaire du carpe, antérieur au triquetrum, palpable</td><td><strong>Hamatum</strong> (os crochu) : porte en avant l'hamulus (crochet) ; pour les 4e et 5e métacarpiens</td></tr>
</tbody>
</table>
<p>Moyen mnémotechnique classique : « <em>Sur Le Tableau Périodique, Tous Tes Chiffres Hésitent</em> » (Scaphoïde, Lunatum, Triquetrum, Pisiforme, Trapèze, Trapézoïde, Capitatum, Hamatum). Les quatre saillies de la gouttière carpienne (tubercule du scaphoïde, tubercule du trapèze, pisiforme, hamulus de l'hamatum) donnent insertion au rétinaculum des fléchisseurs.</p>
<h4>Le métacarpe</h4>
<p>Cinq <strong>métacarpiens</strong>, os longs numérotés de I (pouce) à V, avec une base proximale (articulée avec le carpe et les métacarpiens voisins), un corps prismatique concave en avant et une tête distale arrondie (condyle) pour la phalange. Le 1<sup>er</sup> est le plus court et le plus épais, en position de rotation (90° par rapport aux autres : son plan de flexion est perpendiculaire) ; le 2<sup>e</sup> est le plus long ; le 3<sup>e</sup> porte un processus styloïde. Les métacarpiens II et III sont fixes (pilier de la main), I, IV et V mobiles.</p>
<h4>Les phalanges</h4>
<p>Chaque doigt long a trois phalanges : <strong>proximale</strong> (P1), <strong>moyenne</strong> (P2) et <strong>distale</strong> (P3, qui porte la tubérosité unguéale) ; le pouce n'en a que deux (P1 et P2). Chaque phalange comprend une base, un corps et une tête (en poulie pour P1 et P2). Deux os sésamoïdes constants siègent à la face palmaire de la métacarpo-phalangienne du pouce.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le pisiforme ne participe pas au condyle carpien ni à la radio-carpienne ; c'est un sésamoïde posé sur le triquetrum. Le scaphoïde appartient à la 1<sup>re</sup> rangée mais s'articule aussi avec les deux os latéraux de la 2<sup>e</sup> (trapèze, trapézoïde) : il « chevauche » les deux rangées, d'où son rôle dans la stabilité du carpe et sa fréquente fracture.</div>`
            },
            {
              titre: "Les articulations de la main",
              contenu: `<ul>
<li>L'<strong>articulation médio-carpienne</strong> : entre les deux rangées du carpe ; complexe, condylienne dans sa partie médiale (tête du capitatum et de l'hamatum dans la concavité scaphoïde–lunatum–triquetrum) et plane latéralement (scaphoïde–trapèze–trapézoïde). Elle complète la radio-carpienne : la flexion se fait surtout dans la médio-carpienne, l'extension surtout dans la radio-carpienne. Les ligaments interosseux scapho-lunaire et luno-triquétral sont essentiels à la stabilité du carpe.</li>
<li>Les <strong>articulations intercarpiennes</strong> : planes, unies par des ligaments interosseux, palmaires et dorsaux ; les os de chaque rangée sont solidaires.</li>
<li>Les <strong>articulations carpo-métacarpiennes</strong> (II à V) : planes, très peu mobiles (II et III quasi fixes, V un peu plus mobile). La <strong>trapézo-métacarpienne</strong> du pouce est une articulation <strong>en selle</strong> à capsule lâche : deux degrés de liberté (flexion-extension et abduction-adduction) plus une rotation automatique, permettant l'<strong>opposition</strong>. Elle est le siège fréquent d'arthrose (rhizarthrose).</li>
<li>Les <strong>articulations intermétacarpiennes</strong> : planes entre les bases des métacarpiens II à V ; les têtes sont reliées par le <strong>ligament métacarpien transverse profond</strong>.</li>
<li>Les <strong>articulations métacarpo-phalangiennes</strong> (MP) : <strong>ellipsoïdes</strong> entre la tête du métacarpien et la base de P1 ; flexion 90° (plus pour le 5e), extension 20–30°, abduction-adduction (écartement des doigts, possible seulement en extension), légère rotation. La <strong>plaque palmaire</strong> (fibro-cartilage antérieur) et les <strong>ligaments collatéraux</strong>, tendus en flexion, les stabilisent ; d'où la position d'immobilisation en flexion des MP pour éviter leur rétraction. La MP du pouce est plutôt un ginglyme (flexion 50–60°).</li>
<li>Les <strong>articulations interphalangiennes</strong> proximales (IPP) et distales (IPD) : <strong>ginglymes</strong> ; flexion 100° pour l'IPP, 80° pour l'IPD, extension 0° (hyperextension possible à l'IPD). Même système de plaque palmaire et ligaments collatéraux.</li>
</ul>
<h4>La position de fonction de la main</h4>
<p>Poignet en extension de 20–30° et légère inclinaison ulnaire, MP fléchies à 60–70°, IPP à 30°, IPD à 10°, pouce en opposition (antépulsion-abduction). C'est la position d'immobilisation. La main présente trois <strong>arches</strong> : transversale carpienne, transversale métacarpienne (concavité palmaire) et longitudinales (une par rayon).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>entorse du ligament collatéral ulnaire de la MP du pouce</strong> (« pouce du skieur ») est fréquente ; l'arrachement avec interposition de l'aponévrose de l'adducteur (lésion de Stener) nécessite une chirurgie. La <strong>luxation péri-lunaire</strong> du carpe (chute violente) peut comprimer le nerf médian. La <strong>rhizarthrose</strong> (arthrose trapézo-métacarpienne) touche la femme après 50 ans.</div>`
            },
            {
              titre: "Les muscles intrinsèques : loges thénarienne et hypothénarienne",
              contenu: `<p>Les <strong>muscles intrinsèques</strong> (19 muscles) ont leur origine et leur terminaison dans la main. Les tendons des muscles extrinsèques (venus de l'avant-bras) traversent la main. On distingue trois loges palmaires : latérale (thénar), médiale (hypothénar) et moyenne (tendons fléchisseurs, lombricaux), plus les interosseux dans les espaces intermétacarpiens.</p>
<h4>Loge thénarienne (éminence thénar, 4 muscles du pouce)</h4>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action</th><th>Innervation</th></tr></thead>
<tbody>
<tr><td><strong>Court abducteur du pouce</strong> (superficiel, latéral)</td><td>Rétinaculum des fléchisseurs, tubercule du scaphoïde</td><td>Base de P1 du pouce (côté latéral) et dossière</td><td>Abduction (antépulsion) du pouce</td><td>Médian (branche thénarienne, C8–T1)</td></tr>
<tr><td><strong>Opposant du pouce</strong> (profond)</td><td>Rétinaculum des fléchisseurs, tubercule du trapèze</td><td>Bord latéral du 1er métacarpien</td><td>Opposition (antépulsion, adduction, rotation médiale du 1er métacarpien)</td><td>Médian</td></tr>
<tr><td><strong>Court fléchisseur du pouce</strong></td><td>Chef superficiel : rétinaculum et trapèze ; chef profond : trapézoïde et capitatum</td><td>Base de P1 (côté latéral), sésamoïde latéral</td><td>Flexion de P1, participe à l'opposition</td><td>Chef superficiel : médian ; chef profond : ulnaire</td></tr>
<tr><td><strong>Adducteur du pouce</strong> (le plus profond et médial)</td><td>Chef oblique : capitatum, bases des 2e et 3e métacarpiens ; chef transverse : face palmaire du 3e métacarpien</td><td>Base de P1 (côté médial), sésamoïde médial</td><td>Adduction (rétropulsion vers la paume), ferme la 1re commissure</td><td><strong>Ulnaire</strong> (branche profonde)</td></tr>
</tbody>
</table>
<h4>Loge hypothénarienne (éminence hypothénar, 4 muscles du 5e doigt)</h4>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action</th><th>Innervation</th></tr></thead>
<tbody>
<tr><td><strong>Court palmaire</strong> (peaucier)</td><td>Aponévrose palmaire</td><td>Peau du bord médial de la main</td><td>Plisse la peau de l'hypothénar</td><td>Ulnaire (branche superficielle)</td></tr>
<tr><td><strong>Abducteur du petit doigt</strong></td><td>Pisiforme, tendon du fléchisseur ulnaire du carpe</td><td>Base de P1 du 5e doigt (côté médial)</td><td>Abduction du 5e doigt</td><td>Ulnaire (branche profonde)</td></tr>
<tr><td><strong>Court fléchisseur du petit doigt</strong></td><td>Hamulus de l'hamatum, rétinaculum</td><td>Base de P1 du 5e doigt</td><td>Flexion de P1</td><td>Ulnaire</td></tr>
<tr><td><strong>Opposant du petit doigt</strong></td><td>Hamulus de l'hamatum, rétinaculum</td><td>Bord médial du 5e métacarpien</td><td>Opposition du 5e doigt (creuse la paume)</td><td>Ulnaire</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le nerf médian n'innerve dans la main que les muscles « LOAF » : <strong>L</strong>ombricaux 1 et 2, <strong>O</strong>pposant du pouce, court <strong>A</strong>bducteur du pouce, court <strong>F</strong>léchisseur du pouce (chef superficiel). Tout le reste (adducteur du pouce, hypothénar, interosseux, lombricaux 3 et 4, chef profond du court fléchisseur) dépend du nerf ulnaire : c'est le « nerf de la main ».</div>`
            },
            {
              titre: "Lombricaux, interosseux et appareil extenseur",
              contenu: `<h4>Les lombricaux (4)</h4>
<p>Petits muscles fusiformes nés des <strong>tendons du fléchisseur profond des doigts</strong> dans la paume : le 1<sup>er</sup> et le 2<sup>e</sup> sont unipennés (face latérale des tendons de l'index et du majeur), le 3<sup>e</sup> et le 4<sup>e</sup> bipennés (entre les tendons voisins). Ils se terminent sur le <strong>bord latéral (radial) de la dossière</strong> des extenseurs des doigts II à V, en passant <strong>en avant du ligament métacarpien transverse profond</strong>. Action : <strong>flexion des MP et extension des IPP et IPD</strong> (ils tendent la dossière). Innervation : lombricaux 1 et 2 par le nerf médian, 3 et 4 par le nerf ulnaire.</p>
<h4>Les interosseux (7)</h4>
<ul>
<li>Les <strong>interosseux palmaires</strong> (3, parfois 4 en comptant celui du pouce) : unipennés, nés de la face du métacarpien tournée vers l'axe de la main (II, IV, V), ils se terminent sur la dossière et la base de P1 du même doigt, du côté de l'axe. Action : <strong>adduction</strong> des doigts (rapprochement vers l'axe du 3<sup>e</sup> doigt : « PAD » pour palmaires adducteurs).</li>
<li>Les <strong>interosseux dorsaux</strong> (4) : bipennés, plus volumineux, nés des deux métacarpiens bordant l'espace, terminés sur la dossière et la base de P1 du côté opposé à l'axe (le 1<sup>er</sup> et le 2<sup>e</sup> sur le côté latéral de l'index et du majeur, le 3<sup>e</sup> et le 4<sup>e</sup> sur le côté médial du majeur et de l'annulaire). Action : <strong>abduction</strong> des doigts (« DAB » pour dorsaux abducteurs). Le 1<sup>er</sup> interosseux dorsal forme le relief de la 1<sup>re</sup> commissure.</li>
<li>Tous les interosseux sont en outre, comme les lombricaux, <strong>fléchisseurs des MP et extenseurs des IP</strong> ; tous sont innervés par la <strong>branche profonde du nerf ulnaire</strong> (C8–T1).</li>
</ul>
<h4>L'appareil extenseur des doigts</h4>
<p>À la face dorsale de chaque doigt long, le tendon de l'extenseur des doigts s'étale en une <strong>dossière</strong> (expansion aponévrotique) : une <strong>bandelette médiane</strong> se fixe sur la base de P2 et deux <strong>bandelettes latérales</strong>, renforcées par les tendons des lombricaux et des interosseux, se réunissent sur la base de P3. Ainsi l'extension des IP est assurée surtout par les intrinsèques (lombricaux et interosseux, nerf ulnaire pour la plupart), tandis que l'extenseur commun (nerf radial) agit surtout sur la MP.</p>
<h4>Les gaines des fléchisseurs et les poulies</h4>
<p>Au niveau des doigts, les tendons fléchisseurs cheminent dans un <strong>canal digital ostéo-fibreux</strong> fermé par des <strong>poulies annulaires</strong> (A1 à A5) et <strong>cruciformes</strong> (C1 à C3), qui les maintiennent contre les phalanges. Une gaine synoviale digitale les entoure : celles du pouce et du 5<sup>e</sup> doigt communiquent avec les gaines radiale et ulnaire du canal carpien (gaines digito-carpiennes), celles des doigts II, III et IV sont indépendantes. Le tendon du fléchisseur superficiel se divise en V au niveau de P1 pour laisser passer le tendon profond (chiasma de Camper).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>doigt à ressaut</strong> est le blocage d'un tendon fléchisseur nodulaire sous la poulie A1. Les <strong>plaies des tendons fléchisseurs</strong> sont classées en cinq zones ; la zone 2 (de la poulie A1 à l'insertion du superficiel, « no man's land ») a le plus mauvais pronostic. Le <strong>doigt en maillet</strong> correspond à la rupture de l'extenseur sur P3 ; la <strong>boutonnière</strong> à la rupture de la bandelette médiane sur P2.</div>`
            },
            {
              titre: "Vascularisation de la main",
              contenu: `<p>La main est vascularisée par les artères <strong>radiale</strong> et <strong>ulnaire</strong>, qui s'anastomosent en deux arcades palmaires et un réseau dorsal.</p>
<ul>
<li>L'<strong>artère ulnaire</strong>, la plus volumineuse pour la main, passe en avant du rétinaculum des fléchisseurs dans la loge de Guyon (latérale au nerf ulnaire) et forme l'<strong>arcade palmaire superficielle</strong>, convexe en bas, située sous l'aponévrose palmaire, en avant des tendons fléchisseurs, à hauteur d'une ligne passant par le bord inférieur du pouce en abduction. Elle est fermée latéralement par le rameau palmaire superficiel de la radiale. Elle donne les <strong>artères digitales palmaires communes</strong> (3), qui se divisent chacune en deux <strong>artères digitales palmaires propres</strong> pour les bords adjacents de deux doigts, et l'artère digitale propre du bord médial du 5<sup>e</sup> doigt.</li>
<li>L'<strong>artère radiale</strong> contourne le bord latéral du poignet, traverse la <strong>tabatière anatomique</strong>, puis le 1<sup>er</sup> espace interosseux entre les deux chefs du 1<sup>er</sup> interosseux dorsal, et forme l'<strong>arcade palmaire profonde</strong>, située 1 à 2 cm plus haut que la superficielle, contre les bases des métacarpiens, en arrière des tendons fléchisseurs, fermée par le rameau palmaire profond de l'ulnaire. Elle donne l'<strong>artère principale du pouce</strong>, l'artère radiale de l'index et les <strong>artères métacarpiennes palmaires</strong>, qui rejoignent les digitales communes.</li>
<li>Le <strong>réseau dorsal du carpe</strong> donne les artères métacarpiennes dorsales, grêles.</li>
</ul>
<p>Le drainage veineux est assuré par un riche <strong>réseau dorsal</strong> superficiel (origine des veines céphalique et basilique) et des veines profondes satellites. Les lymphatiques rejoignent les nœuds du coude (épitrochléens) puis axillaires.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>test d'Allen</strong> vérifie la perméabilité des deux artères et de l'arcade avant un prélèvement ou un cathétérisme radial : on comprime les deux artères, le patient ouvre la main pâle, on relâche une artère et la recoloration doit survenir en moins de 5 à 7 secondes. Les plaies de la paume saignent abondamment du fait des anastomoses ; les plaies digitales doivent faire rechercher une lésion des <strong>nerfs digitaux</strong> (collatéraux), qui accompagnent les artères digitales propres sur les faces latérales des doigts.</div>`
            },
            {
              titre: "Innervation de la main et paralysies tronculaires",
              contenu: `<h4>Innervation sensitive</h4>
<table>
<thead><tr><th>Nerf</th><th>Face palmaire</th><th>Face dorsale</th></tr></thead>
<tbody>
<tr><td><strong>Médian</strong></td><td>Moitié latérale de la paume (branche palmaire cutanée), pouce, index, majeur et moitié latérale de l'annulaire (3 doigts et demi)</td><td>Face dorsale de P2 et P3 des trois premiers doigts et demi (zone unguéale)</td></tr>
<tr><td><strong>Ulnaire</strong></td><td>Moitié médiale de la paume, 5e doigt et moitié médiale de l'annulaire (1 doigt et demi)</td><td>Moitié médiale du dos de la main (branche dorsale), 5e doigt, moitié médiale de l'annulaire</td></tr>
<tr><td><strong>Radial</strong> (branche superficielle)</td><td>—</td><td>Moitié latérale du dos de la main, face dorsale de P1 des trois premiers doigts et demi ; zone autonome : <strong>face dorsale de la 1re commissure</strong></td></tr>
</tbody>
</table>
<p>Zones autonomes (sans chevauchement) : pulpe de l'index (médian), pulpe du 5<sup>e</sup> doigt (ulnaire), 1<sup>re</sup> commissure dorsale (radial).</p>
<h4>Paralysies tronculaires</h4>
<table>
<thead><tr><th>Nerf lésé</th><th>Déficit moteur</th><th>Déformation</th><th>Déficit sensitif</th></tr></thead>
<tbody>
<tr><td><strong>Médian</strong> (au poignet)</td><td>Opposition et abduction du pouce (thénar), lombricaux 1–2</td><td>« Main de singe » : amyotrophie thénarienne, pouce dans le plan de la main ; si lésion haute (coude) : perte de la flexion des 3 premiers doigts, « main de prédicateur » en tentant de fermer le poing</td><td>3 doigts et demi latéraux, paume (si lésion haute)</td></tr>
<tr><td><strong>Ulnaire</strong></td><td>Interosseux, hypothénar, adducteur du pouce, lombricaux 3–4 (et fléchisseur ulnaire du carpe, FPD IV–V si lésion au coude)</td><td>« Griffe ulnaire » : hyperextension des MP et flexion des IP des 4e et 5e doigts (plus marquée si lésion basse : paradoxe de l'ulnaire) ; amyotrophie des interosseux et de l'hypothénar ; <strong>signe de Froment</strong> (flexion de P2 du pouce pour tenir une feuille, par substitution du long fléchisseur à l'adducteur déficient) ; signe de Wartenberg (5e doigt en abduction)</td><td>1 doigt et demi médial, bord médial de la main</td></tr>
<tr><td><strong>Radial</strong></td><td>Extenseurs du poignet et des doigts (MP), long abducteur et extenseurs du pouce, supinateur ; triceps si lésion haute</td><td>« Main tombante » (col de cygne) : chute du poignet et des doigts, impossibilité d'étendre les MP ; les IP s'étendent encore par les intrinsèques</td><td>Face dorsale de la 1re commissure</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> dans la paralysie radiale, l'extension des interphalangiennes reste possible (lombricaux et interosseux, nerfs médian et ulnaire) : seule l'extension des métacarpo-phalangiennes et du poignet est abolie. Dans la paralysie ulnaire, la griffe est paradoxalement <em>plus</em> marquée quand la lésion est basse (poignet), car le fléchisseur profond des 4<sup>e</sup> et 5<sup>e</sup> doigts, intact, accentue la flexion des IP.</div>`
            }
          ],
          points_cles: [
            "27 os : 8 os du carpe en deux rangées (scaphoïde, lunatum, triquetrum, pisiforme / trapèze, trapézoïde, capitatum, hamatum), 5 métacarpiens, 14 phalanges.",
            "Le scaphoïde chevauche les deux rangées et est le plus souvent fracturé ; le lunatum est le plus souvent luxé ; le pisiforme est un sésamoïde du fléchisseur ulnaire du carpe.",
            "La trapézo-métacarpienne est en selle (opposition du pouce, rhizarthrose) ; les MP sont ellipsoïdes (abduction possible en extension seulement), les IP sont des ginglymes.",
            "Position de fonction : poignet en extension de 20–30°, MP fléchies à 60–70°, IP légèrement fléchies, pouce en opposition.",
            "Thénar : court abducteur, opposant, court fléchisseur (médian) et adducteur du pouce (ulnaire). Hypothénar : court palmaire, abducteur, court fléchisseur et opposant du 5e doigt (ulnaire).",
            "Le médian n'innerve dans la main que les muscles LOAF (lombricaux 1–2, opposant, court abducteur, court fléchisseur superficiel) ; tout le reste dépend de l'ulnaire.",
            "Lombricaux et interosseux fléchissent les MP et étendent les IP ; interosseux palmaires adducteurs (PAD), dorsaux abducteurs (DAB), tous innervés par l'ulnaire.",
            "Arcade palmaire superficielle (ulnaire, sous l'aponévrose, donne les digitales communes) et arcade palmaire profonde (radiale, contre les métacarpiens) ; l'artère radiale traverse la tabatière anatomique.",
            "Sensibilité : médian 3 doigts et demi latéraux palmaires, ulnaire 1 doigt et demi médial, radial dos de la 1re commissure.",
            "Paralysies : médian = main de singe (perte de l'opposition) ; ulnaire = griffe des 4e et 5e doigts, signe de Froment ; radial = main tombante (extension des IP conservée)."
          ],
          lexique: [
            { terme: "Scaphoïde", def: "Os latéral de la première rangée du carpe, en forme de barque, fond de la tabatière anatomique, le plus souvent fracturé." },
            { terme: "Hamulus de l'hamatum", def: "Crochet antérieur de l'os hamatum, insertion médiale du rétinaculum des fléchisseurs, limite latérale de la loge de Guyon." },
            { terme: "Éminence thénar", def: "Saillie palmaire latérale formée par les muscles du pouce (court abducteur, opposant, court fléchisseur, adducteur)." },
            { terme: "Éminence hypothénar", def: "Saillie palmaire médiale formée par les muscles du 5e doigt." },
            { terme: "Lombricaux", def: "Quatre muscles nés des tendons du fléchisseur profond, fléchisseurs des MP et extenseurs des IP." },
            { terme: "Interosseux", def: "Sept muscles des espaces intermétacarpiens : trois palmaires adducteurs et quatre dorsaux abducteurs des doigts, innervés par le nerf ulnaire." },
            { terme: "Dossière des extenseurs", def: "Expansion aponévrotique dorsale du doigt réunissant les tendons extenseurs, lombricaux et interosseux." },
            { terme: "Plaque palmaire", def: "Fibrocartilage antérieur des articulations MP et IP limitant l'hyperextension." },
            { terme: "Arcade palmaire superficielle", def: "Anastomose à prédominance ulnaire située sous l'aponévrose palmaire, origine des artères digitales palmaires communes." },
            { terme: "Signe de Froment", def: "Flexion de la phalange distale du pouce pour retenir une feuille, traduisant une paralysie de l'adducteur du pouce (nerf ulnaire)." }
          ],
          qcm: [
            {
              q: "Concernant les os du carpe, quelles propositions sont exactes ?",
              options: [
                "A. La première rangée comprend, de latéral en médial, le scaphoïde, le lunatum, le triquetrum et le pisiforme.",
                "B. Le capitatum est le plus volumineux des os du carpe.",
                "C. Le pisiforme participe au condyle carpien articulé avec le radius.",
                "D. Le trapèze s'articule avec le premier métacarpien par une surface en selle.",
                "E. Le scaphoïde est l'os du carpe le plus souvent fracturé."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le pisiforme est un sésamoïde antérieur au triquetrum ; le condyle carpien est formé du scaphoïde, du lunatum et du triquetrum."
            },
            {
              q: "Concernant les articulations de la main, quelles propositions sont exactes ?",
              options: [
                "A. L'articulation trapézo-métacarpienne est une articulation en selle.",
                "B. Les articulations métacarpo-phalangiennes sont des ginglymes.",
                "C. L'abduction des doigts est possible métacarpo-phalangiennes fléchies.",
                "D. Les articulations interphalangiennes sont des ginglymes.",
                "E. La rhizarthrose est l'arthrose de l'articulation trapézo-métacarpienne."
              ],
              bonnes: [0, 3, 4],
              explication: "A, D et E sont vraies. B est fausse : les MP sont ellipsoïdes (flexion-extension et abduction-adduction). C est fausse : les ligaments collatéraux se tendent en flexion et bloquent l'écartement ; l'abduction n'est possible qu'en extension."
            },
            {
              q: "Concernant les muscles de la loge thénarienne, quelles propositions sont exactes ?",
              options: [
                "A. L'opposant du pouce est innervé par le nerf médian.",
                "B. L'adducteur du pouce est innervé par le nerf médian.",
                "C. Le court abducteur du pouce est le plus superficiel.",
                "D. Le court fléchisseur du pouce a une double innervation (médian et ulnaire).",
                "E. L'opposant du pouce se termine sur la base de la première phalange."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : l'adducteur du pouce est innervé par la branche profonde du nerf ulnaire (signe de Froment). E est fausse : l'opposant se termine sur le bord latéral du 1er métacarpien."
            },
            {
              q: "Concernant les lombricaux et les interosseux, quelles propositions sont exactes ?",
              options: [
                "A. Les lombricaux naissent des tendons du fléchisseur superficiel des doigts.",
                "B. Les lombricaux fléchissent les MP et étendent les IP.",
                "C. Les interosseux palmaires sont abducteurs des doigts.",
                "D. Tous les interosseux sont innervés par le nerf ulnaire.",
                "E. Les deux premiers lombricaux sont innervés par le nerf médian."
              ],
              bonnes: [1, 3, 4],
              explication: "A est fausse : ils naissent des tendons du fléchisseur profond. B est vraie. C est fausse : les palmaires sont adducteurs (PAD), les dorsaux abducteurs (DAB). D et E sont vraies."
            },
            {
              q: "Concernant la vascularisation de la main, quelles propositions sont exactes ?",
              options: [
                "A. L'arcade palmaire superficielle est principalement formée par l'artère ulnaire.",
                "B. L'arcade palmaire profonde est principalement formée par l'artère radiale.",
                "C. L'artère radiale traverse la tabatière anatomique.",
                "D. L'arcade palmaire superficielle est située en arrière des tendons fléchisseurs.",
                "E. Le test d'Allen évalue la perméabilité des artères radiale et ulnaire."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : l'arcade superficielle est en avant des tendons fléchisseurs, sous l'aponévrose palmaire ; c'est l'arcade profonde qui est en arrière des tendons, contre les métacarpiens."
            },
            {
              q: "Concernant l'innervation sensitive de la main, quelles propositions sont exactes ?",
              options: [
                "A. Le nerf médian innerve la face palmaire des trois premiers doigts et de la moitié latérale du quatrième.",
                "B. Le nerf ulnaire innerve la pulpe du petit doigt.",
                "C. Le nerf radial innerve la face dorsale de la première commissure.",
                "D. Le nerf radial innerve la pulpe de l'index.",
                "E. La paume médiale est innervée par le nerf ulnaire."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la pulpe de l'index est la zone autonome du nerf médian."
            },
            {
              q: "Concernant les paralysies des nerfs de la main, quelles propositions sont exactes ?",
              options: [
                "A. La paralysie du nerf médian au poignet entraîne une amyotrophie thénarienne et une perte de l'opposition du pouce.",
                "B. La griffe ulnaire associe hyperextension des MP et flexion des IP des 4e et 5e doigts.",
                "C. Le signe de Froment traduit une paralysie du nerf radial.",
                "D. Dans la paralysie radiale, l'extension des interphalangiennes est conservée.",
                "E. La paralysie radiale se traduit par une main tombante."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le signe de Froment traduit la paralysie de l'adducteur du pouce, donc une atteinte du nerf ulnaire."
            }
          ]
        },
        {
          id: "vaisseaux-nerfs-membre-superieur",
          titre: "Vaisseaux et nerfs du membre supérieur",
          duree: 45,
          objectifs: [
            "Décrire la constitution du plexus brachial : racines, troncs, divisions, faisceaux et branches collatérales.",
            "Décrire le trajet, les rapports, les territoires moteur et sensitif des cinq branches terminales (musculo-cutané, médian, ulnaire, radial, axillaire).",
            "Décrire les artères axillaire, brachiale, radiale et ulnaire et leurs branches, ainsi que les anastomoses.",
            "Décrire les réseaux veineux superficiel et profond et le drainage lymphatique du membre supérieur.",
            "Reconnaître les principaux syndromes de compression nerveuse et les paralysies du plexus brachial."
          ],
          sections: [
            {
              titre: "Le plexus brachial : constitution",
              contenu: `<p>Le <strong>plexus brachial</strong> est formé par l'anastomose des <strong>rameaux antérieurs des nerfs spinaux C5, C6, C7, C8 et T1</strong> (avec des contributions inconstantes de C4 et T2). Il innerve la totalité du membre supérieur, à l'exception de la peau de l'épaule (plexus cervical, nerfs supra-claviculaires) et de la face médiale du bras à sa racine (nerf intercosto-brachial, T2). Son organisation se mémorise par la séquence <strong>Racines – Troncs – Divisions – Faisceaux – Branches</strong>.</p>
<ul>
<li>Les cinq <strong>racines</strong> émergent entre les muscles scalènes antérieur et moyen (défilé interscalénique), avec l'artère subclavière (la veine passe en avant du scalène antérieur).</li>
<li>Trois <strong>troncs</strong> se forment dans le triangle postérieur du cou, au-dessus de la clavicule : le <strong>tronc supérieur</strong> (C5 + C6), le <strong>tronc moyen</strong> (C7) et le <strong>tronc inférieur</strong> (C8 + T1), qui repose sur la 1<sup>re</sup> côte derrière l'artère subclavière.</li>
<li>Chaque tronc se divise, derrière la clavicule, en une <strong>division antérieure</strong> (destinée aux muscles fléchisseurs, ventraux) et une <strong>division postérieure</strong> (extenseurs, dorsaux).</li>
<li>Trois <strong>faisceaux</strong> se constituent dans le creux axillaire, nommés d'après leur position par rapport à l'artère axillaire : le <strong>faisceau latéral</strong> (divisions antérieures des troncs supérieur et moyen : C5–C7), le <strong>faisceau médial</strong> (division antérieure du tronc inférieur : C8–T1) et le <strong>faisceau postérieur</strong> (les trois divisions postérieures : C5–T1).</li>
<li>Les <strong>branches terminales</strong> naissent derrière le petit pectoral : le faisceau latéral donne le <strong>nerf musculo-cutané</strong> et la racine latérale du <strong>nerf médian</strong> ; le faisceau médial donne la racine médiale du médian, le <strong>nerf ulnaire</strong> et les nerfs cutanés médiaux du bras et de l'avant-bras ; le faisceau postérieur donne le <strong>nerf radial</strong> et le <strong>nerf axillaire</strong>. Les deux racines du médian forment un « M » (ou un V) en avant de l'artère axillaire, repère chirurgical.</li>
</ul>
<h4>Branches collatérales</h4>
<table>
<thead><tr><th>Origine</th><th>Nerf</th><th>Muscle(s)</th></tr></thead>
<tbody>
<tr><td>Racines</td><td>Nerf dorsal de la scapula (C5)</td><td>Rhomboïdes, élévateur de la scapula</td></tr>
<tr><td>Racines</td><td>Nerf thoracique long (C5–C7)</td><td>Dentelé antérieur</td></tr>
<tr><td>Tronc supérieur</td><td>Nerf supra-scapulaire (C5–C6)</td><td>Supra-épineux, infra-épineux</td></tr>
<tr><td>Tronc supérieur</td><td>Nerf du subclavier</td><td>Subclavier</td></tr>
<tr><td>Faisceau latéral</td><td>Nerf pectoral latéral</td><td>Grand pectoral</td></tr>
<tr><td>Faisceau médial</td><td>Nerf pectoral médial</td><td>Grand et petit pectoraux</td></tr>
<tr><td>Faisceau postérieur</td><td>Nerfs subscapulaires supérieur et inférieur</td><td>Subscapulaire, grand rond</td></tr>
<tr><td>Faisceau postérieur</td><td>Nerf thoraco-dorsal</td><td>Grand dorsal</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>paralysie obstétricale</strong> ou traumatique du <strong>plexus supérieur</strong> (C5–C6, Erb-Duchenne, traction sur l'épaule) donne une épaule « en rotation médiale, coude en extension, avant-bras en pronation » (attitude du serveur de restaurant) : déficit du deltoïde, de la coiffe, du biceps et du brachial. La paralysie du <strong>plexus inférieur</strong> (C8–T1, Déjerine-Klumpke, traction sur le bras en abduction) donne une main en griffe avec déficit des intrinsèques, souvent associée à un signe de Claude Bernard-Horner (atteinte des fibres sympathiques de T1). Le <strong>syndrome du défilé thoraco-brachial</strong> comprime le tronc inférieur et les vaisseaux subclaviers entre la 1<sup>re</sup> côte, la clavicule et les scalènes (côte cervicale).</div>`
            },
            {
              titre: "Nerfs musculo-cutané et axillaire",
              contenu: `<h4>Le nerf musculo-cutané (C5–C7)</h4>
<p>Branche terminale du faisceau latéral. Il <strong>perfore le coraco-brachial</strong> (qu'il innerve), descend obliquement entre le <strong>biceps brachial</strong> et le <strong>brachial</strong>, les innerve tous deux, puis perfore le fascia brachial au pli du coude, latéralement au tendon du biceps, pour devenir le <strong>nerf cutané latéral de l'avant-bras</strong>, sensitif pour la face latérale de l'avant-bras jusqu'au poignet. Sa lésion isolée est rare (chirurgie de l'épaule) : déficit de flexion du coude (compensé partiellement par le brachio-radial) et de supination, hypoesthésie latérale de l'avant-bras.</p>
<h4>Le nerf axillaire (C5–C6)</h4>
<p>Branche terminale du faisceau postérieur. Il descend en arrière de l'artère axillaire, longe le bord inférieur du subscapulaire, traverse l'<strong>espace axillaire latéral</strong> (quadrilatère huméro-tricipital) avec l'<strong>artère circonflexe postérieure de l'humérus</strong>, et contourne le <strong>col chirurgical</strong> de l'humérus en arrière. Il innerve le <strong>deltoïde</strong> et le <strong>petit rond</strong>, l'articulation scapulo-humérale, et donne le <strong>nerf cutané latéral supérieur du bras</strong> pour la peau du moignon de l'épaule (région deltoïdienne).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la lésion du nerf axillaire (luxation antéro-interne de l'épaule, fracture du col chirurgical, injection intramusculaire mal placée) entraîne une paralysie du deltoïde avec impossibilité d'abduction au-delà des 15–20° fournis par le supra-épineux, une amyotrophie deltoïdienne (épaule « en épaulette ») et une hypoesthésie du moignon de l'épaule, qu'il faut rechercher systématiquement avant toute réduction.</div>`
            },
            {
              titre: "Le nerf médian",
              contenu: `<p>Le <strong>nerf médian</strong> (C6–T1) naît de la réunion d'une racine latérale (faisceau latéral) et d'une racine médiale (faisceau médial) en avant de l'artère axillaire.</p>
<h4>Trajet et rapports</h4>
<ul>
<li>Au <strong>bras</strong> : dans le canal brachial, avec l'artère brachiale, d'abord latéral puis croisant l'artère en avant pour devenir <strong>médial</strong> au pli du coude. <strong>Aucune branche au bras.</strong></li>
<li>Au <strong>coude</strong> : dans la fosse cubitale, médialement à l'artère brachiale, sous le lacertus fibrosus, puis <strong>entre les deux chefs du rond pronateur</strong>, puis sous l'arcade du fléchisseur superficiel des doigts.</li>
<li>À l'<strong>avant-bras</strong> : entre le fléchisseur superficiel (en avant) et le fléchisseur profond des doigts (en arrière), au milieu de la loge antérieure ; il donne le <strong>nerf interosseux antérieur</strong> (moteur pur : fléchisseur profond des doigts II–III, long fléchisseur du pouce, carré pronateur) et, 5 cm au-dessus du poignet, la <strong>branche palmaire cutanée</strong> (peau de la paume latérale).</li>
<li>Au <strong>poignet</strong> : il devient superficiel entre le fléchisseur radial du carpe (latéral) et le long palmaire (médial), puis traverse le <strong>canal carpien</strong> sous le rétinaculum des fléchisseurs, en avant des tendons.</li>
<li>À la <strong>main</strong> : il donne la <strong>branche thénarienne</strong> (motrice récurrente, pour le court abducteur, l'opposant et le chef superficiel du court fléchisseur du pouce) et les <strong>nerfs digitaux palmaires communs</strong> puis <strong>propres</strong> pour les trois premiers doigts et demi, ainsi que les lombricaux 1 et 2.</li>
</ul>
<h4>Territoires</h4>
<p><strong>Moteur</strong> : tous les muscles de la loge antérieure de l'avant-bras sauf le fléchisseur ulnaire du carpe et la moitié médiale du fléchisseur profond ; dans la main, les muscles LOAF. Il est donc le nerf de la <strong>pronation</strong>, de la <strong>flexion du poignet et des doigts</strong>, et de l'<strong>opposition du pouce</strong> (« nerf de la préhension fine »). <strong>Sensitif</strong> : face palmaire des trois premiers doigts et de la moitié latérale du 4<sup>e</sup>, moitié latérale de la paume, face dorsale des deux dernières phalanges des mêmes doigts.</p>
<h4>Sites de compression et lésions</h4>
<ul>
<li><strong>Canal carpien</strong> (le plus fréquent) : paresthésies nocturnes, amyotrophie thénarienne, paume épargnée.</li>
<li><strong>Rond pronateur</strong> : douleur de l'avant-bras à l'effort, paume atteinte.</li>
<li><strong>Nerf interosseux antérieur</strong> (syndrome de Kiloh-Nevin) : impossibilité de faire le signe du « O » entre pouce et index (perte de flexion de P2 du pouce et de P3 de l'index), sans trouble sensitif.</li>
<li>Lésion haute (plaie du coude, fracture supra-condylienne) : <strong>main de prédicateur</strong> (ou de bénédiction) lors de la tentative de fermeture du poing (les deux derniers doigts fléchissent seuls), main de singe au repos, perte de la pronation, anesthésie des trois doigts et demi latéraux.</li>
</ul>`
            },
            {
              titre: "Le nerf ulnaire",
              contenu: `<p>Le <strong>nerf ulnaire</strong> (C8–T1, parfois C7) est la branche terminale principale du faisceau médial.</p>
<h4>Trajet et rapports</h4>
<ul>
<li>Au <strong>bras</strong> : médial à l'artère brachiale dans la loge antérieure, puis au tiers moyen il <strong>traverse le septum intermusculaire médial</strong> (avec l'artère collatérale ulnaire supérieure) pour gagner la loge postérieure, en avant du chef médial du triceps. <strong>Aucune branche au bras.</strong></li>
<li>Au <strong>coude</strong> : dans le <strong>sillon du nerf ulnaire</strong>, en arrière de l'épicondyle médial, sous-cutané et palpable, puis dans le <strong>tunnel cubital</strong> entre les deux chefs du fléchisseur ulnaire du carpe.</li>
<li>À l'<strong>avant-bras</strong> : sous le fléchisseur ulnaire du carpe, sur le fléchisseur profond, rejoint par l'<strong>artère ulnaire</strong> (latérale au nerf) au tiers moyen. Il innerve le fléchisseur ulnaire du carpe et la moitié médiale du fléchisseur profond des doigts. Il donne au tiers inférieur la <strong>branche dorsale</strong> (sensitive pour le dos médial de la main) et une branche palmaire cutanée.</li>
<li>Au <strong>poignet</strong> : <strong>en avant du rétinaculum des fléchisseurs</strong>, latéralement au pisiforme, dans la <strong>loge de Guyon</strong>, où il se divise en branche superficielle (court palmaire, nerfs digitaux palmaires du 5<sup>e</sup> doigt et de la moitié médiale du 4<sup>e</sup>) et <strong>branche profonde</strong> (motrice : hypothénar, interosseux, lombricaux 3–4, adducteur du pouce, chef profond du court fléchisseur du pouce), qui contourne l'hamulus de l'hamatum et accompagne l'arcade palmaire profonde.</li>
</ul>
<h4>Territoires</h4>
<p><strong>Moteur</strong> : fléchisseur ulnaire du carpe, moitié médiale du fléchisseur profond, et presque tous les intrinsèques de la main (sauf LOAF) : c'est le nerf de la <strong>force de la main</strong> (poigne), de l'écartement et du rapprochement des doigts. <strong>Sensitif</strong> : 5<sup>e</sup> doigt, moitié médiale du 4<sup>e</sup>, bord médial de la main (palmaire et dorsal).</p>
<h4>Sites de compression et lésions</h4>
<ul>
<li><strong>Coude</strong> (tunnel cubital, sillon épicondylien) : 2<sup>e</sup> neuropathie compressive la plus fréquente ; paresthésies des deux derniers doigts, déficit des interosseux, griffe modérée (paradoxe : le fléchisseur profond IV–V est aussi atteint).</li>
<li><strong>Poignet</strong> (loge de Guyon, cyclistes, fracture de l'hamulus) : atteinte motrice prédominante, sensibilité dorsale épargnée (la branche dorsale naît au-dessus).</li>
<li>Signes : <strong>griffe ulnaire</strong> des 4<sup>e</sup> et 5<sup>e</sup> doigts, <strong>signe de Froment</strong>, <strong>signe de Wartenberg</strong>, amyotrophie du 1<sup>er</sup> espace interosseux et de l'hypothénar, perte de l'abduction-adduction des doigts.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le médian et l'ulnaire ne donnent aucune branche au bras ; le médian passe dans le canal carpien, l'ulnaire en avant du rétinaculum (loge de Guyon) ; le médian est le nerf de la pince pouce-index, l'ulnaire celui de la force de la main.</div>`
            },
            {
              titre: "Le nerf radial",
              contenu: `<p>Le <strong>nerf radial</strong> (C5–T1, surtout C7) est la branche terminale la plus volumineuse du plexus, issue du faisceau postérieur. C'est le nerf de l'<strong>extension</strong> (coude, poignet, doigts) et de la <strong>supination</strong>.</p>
<h4>Trajet et rapports</h4>
<ul>
<li>Dans le <strong>creux axillaire</strong> : en arrière de l'artère axillaire, devant le subscapulaire, le grand dorsal et le grand rond.</li>
<li>Au <strong>bras</strong> : il passe dans la loge postérieure par l'espace entre le chef long du triceps et l'humérus (fente huméro-tricipitale), avec l'<strong>artère brachiale profonde</strong>, et parcourt le <strong>sillon du nerf radial</strong>, de médial en latéral et de haut en bas, directement au contact de l'os entre les chefs latéral et médial du triceps. Il innerve le <strong>triceps</strong> (et l'anconé) et donne les nerfs cutanés postérieurs du bras et de l'avant-bras et le nerf cutané latéral inférieur du bras. Au tiers inférieur, il <strong>perfore le septum intermusculaire latéral</strong> et gagne la loge antérieure, entre le <strong>brachial</strong> (médialement) et le <strong>brachio-radial</strong> (latéralement), qu'il innerve, ainsi que le long extenseur radial du carpe.</li>
<li>Au <strong>coude</strong> : en avant de l'épicondyle latéral, sous le brachio-radial, il se divise en deux branches :
  <ul>
  <li>la <strong>branche superficielle</strong>, sensitive, descend sous le brachio-radial le long de l'artère radiale, puis passe en arrière au tiers inférieur de l'avant-bras pour innerver la moitié latérale du dos de la main et la face dorsale de P1 des trois premiers doigts et demi (zone autonome : première commissure) ;</li>
  <li>la <strong>branche profonde</strong>, motrice, traverse le <strong>supinateur</strong> (sous l'arcade de Frohse), contourne le col du radius et devient le <strong>nerf interosseux postérieur</strong> qui innerve tous les muscles de la loge postérieure de l'avant-bras (extenseurs des doigts et du poignet, muscles du pouce, extenseur de l'index) et le court extenseur radial du carpe.</li>
  </ul>
</li>
</ul>
<h4>Lésions selon le niveau</h4>
<table>
<thead><tr><th>Niveau</th><th>Cause</th><th>Déficit</th></tr></thead>
<tbody>
<tr><td>Creux axillaire</td><td>Béquilles, luxation</td><td>Paralysie du triceps + main tombante + anesthésie postérieure du bras et de l'avant-bras</td></tr>
<tr><td>Sillon du nerf radial</td><td>Fracture du tiers moyen de l'humérus, compression du « samedi soir » (sommeil le bras sur un dossier)</td><td><strong>Main tombante</strong> : déficit d'extension du poignet et des MP, du pouce, de la supination ; triceps épargné ; hypoesthésie de la 1re commissure</td></tr>
<tr><td>Arcade de Frohse (nerf interosseux postérieur)</td><td>Compression, fracture de la tête radiale</td><td>Déficit d'extension des doigts et du pouce, extension du poignet conservée avec déviation radiale (extenseurs radiaux épargnés), <strong>pas de trouble sensitif</strong></td></tr>
<tr><td>Branche superficielle au poignet</td><td>Bracelet, menottes (syndrome de Wartenberg)</td><td>Troubles sensitifs purs du dos de la main</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> dans la paralysie radiale, la force de préhension semble diminuée parce que le poignet tombe (les fléchisseurs travaillent en course interne) ; elle se normalise si l'on maintient passivement le poignet en extension. Les réflexes tricipital (C7) et stylo-radial (C6) sont abolis.</div>`
            },
            {
              titre: "Les artères du membre supérieur",
              contenu: `<h4>Artère subclavière et artère axillaire</h4>
<p>L'<strong>artère subclavière</strong> (droite née du tronc brachio-céphalique, gauche de l'arc aortique) passe entre les scalènes antérieur et moyen, sur la 1<sup>re</sup> côte, et donne l'artère vertébrale, l'artère thoracique interne, le tronc thyro-cervical, le tronc costo-cervical et l'artère dorsale de la scapula. Au bord latéral de la 1<sup>re</sup> côte, elle devient l'<strong>artère axillaire</strong>, qui se termine au bord inférieur du grand pectoral. Ses six branches (thoracique supérieure, thoraco-acromiale, thoracique latérale, subscapulaire, circonflexes antérieure et postérieure de l'humérus) vascularisent les parois de l'aisselle, le sein, la scapula et l'épaule. Le cercle anastomotique péri-scapulaire (artère dorsale de la scapula, supra-scapulaire, circonflexe de la scapula) permet une suppléance en cas d'obstruction axillaire.</p>
<h4>Artère brachiale</h4>
<p>Du bord inférieur du grand pectoral au pli du coude, le long du bord médial du biceps, avec le nerf médian. Branches : artère brachiale profonde (avec le nerf radial, donne les collatérales radiale et moyenne), artères collatérales ulnaires supérieure et inférieure, artère nourricière de l'humérus. Le <strong>réseau anastomotique du coude</strong> relie ces collatérales aux artères récurrentes radiale, ulnaire et interosseuse.</p>
<h4>Artère radiale</h4>
<p>Branche de division latérale, plus petite, elle suit le bord médial du brachio-radial (dont elle est le satellite) puis chemine au tiers inférieur de l'avant-bras entre le brachio-radial et le fléchisseur radial du carpe, dans la <strong>gouttière du pouls</strong>, superficielle sur le radius. Elle contourne la styloïde radiale, traverse la <strong>tabatière anatomique</strong>, perfore le 1<sup>er</sup> espace interosseux entre les chefs du 1<sup>er</sup> interosseux dorsal et forme l'<strong>arcade palmaire profonde</strong>. Branches : artère récurrente radiale, rameau carpien palmaire, rameau palmaire superficiel (ferme l'arcade superficielle), rameau carpien dorsal, artère principale du pouce, artère radiale de l'index.</p>
<h4>Artère ulnaire</h4>
<p>Branche de division médiale, plus volumineuse. Elle passe en profondeur sous le rond pronateur (croisée en avant par le nerf médian), puis sous le fléchisseur ulnaire du carpe, rejointe par le nerf ulnaire (médial à l'artère), devient superficielle au poignet, passe en avant du rétinaculum dans la <strong>loge de Guyon</strong> et forme l'<strong>arcade palmaire superficielle</strong>. Branches : artères récurrentes ulnaires antérieure et postérieure, <strong>artère interosseuse commune</strong> (qui se divise en interosseuses antérieure, sur la membrane interosseuse avec le nerf interosseux antérieur, et postérieure, dans la loge postérieure), rameaux carpiens, rameau palmaire profond.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le pouls radial se prend dans la gouttière du pouls ; l'artère radiale est la voie d'abord privilégiée de la coronarographie et des gaz du sang (après test d'Allen). L'<strong>ischémie aiguë</strong> du membre (embolie, souvent au niveau de la bifurcation brachiale) donne les « 6 P » : pain, pallor, pulselessness, paresthesia, paralysis, poikilothermia. La compression prolongée de l'artère brachiale (plâtre serré, fracture supra-condylienne) peut aboutir au <strong>syndrome de Volkmann</strong> (rétraction ischémique des fléchisseurs).</div>`
            },
            {
              titre: "Veines, lymphatiques et syndromes canalaires : synthèse",
              contenu: `<h4>Réseau veineux profond</h4>
<p>Veines satellites des artères, doubles à l'avant-bras et au bras (veines radiales, ulnaires, brachiales), se réunissant en une <strong>veine axillaire</strong> unique, médiale et antérieure à l'artère, qui devient la <strong>veine subclavière</strong> au bord latéral de la 1<sup>re</sup> côte (en avant du scalène antérieur) puis forme avec la jugulaire interne la veine brachio-céphalique.</p>
<h4>Réseau veineux superficiel</h4>
<p>Né du <strong>réseau veineux dorsal de la main</strong> :</p>
<ul>
<li>la <strong>veine céphalique</strong> : latérale, monte à la face latérale de l'avant-bras et du bras, dans le <strong>sillon delto-pectoral</strong>, perfore le fascia clavi-pectoral et se jette dans la <strong>veine axillaire</strong> ;</li>
<li>la <strong>veine basilique</strong> : médiale, monte à la face médiale de l'avant-bras et du bras, perfore le fascia brachial à mi-bras et rejoint les veines brachiales ou la veine axillaire ;</li>
<li>la <strong>veine médiane du coude</strong> relie obliquement la céphalique à la basilique dans la fosse cubitale (site de ponction veineuse), séparée de l'artère brachiale par le lacertus fibrosus ; la veine médiane de l'avant-bras s'y jette.</li>
</ul>
<h4>Lymphatiques</h4>
<p>Les collecteurs superficiels suivent les veines céphalique et basilique ; ceux de la basilique traversent les <strong>nœuds cubitaux</strong> (épitrochléens, 1 à 3) au-dessus de l'épicondyle médial. Tous rejoignent les <strong>nœuds axillaires</strong> (groupe latéral/brachial puis central et apical), puis le tronc subclavier, le conduit lymphatique droit ou le conduit thoracique à gauche. Le groupe delto-pectoral (nœuds infra-claviculaires) draine une partie du territoire céphalique.</p>
<h4>Synthèse des syndromes canalaires du membre supérieur</h4>
<table>
<thead><tr><th>Nerf</th><th>Site</th><th>Syndrome</th><th>Signes clés</th></tr></thead>
<tbody>
<tr><td>Plexus (tronc inférieur)</td><td>Défilé thoraco-brachial</td><td>Syndrome du défilé</td><td>Paresthésies C8–T1, signes vasculaires au bras levé</td></tr>
<tr><td>Supra-scapulaire</td><td>Incisure scapulaire</td><td>—</td><td>Amyotrophie supra- et infra-épineuse, douleur postérieure d'épaule</td></tr>
<tr><td>Médian</td><td>Rond pronateur</td><td>Syndrome du rond pronateur</td><td>Douleur de l'avant-bras, paume atteinte</td></tr>
<tr><td>Médian (interosseux antérieur)</td><td>Avant-bras</td><td>Kiloh-Nevin</td><td>Signe du O impossible, pas de trouble sensitif</td></tr>
<tr><td>Médian</td><td>Canal carpien</td><td>Syndrome du canal carpien</td><td>Paresthésies nocturnes 3 doigts et demi, Tinel, Phalen, thénar</td></tr>
<tr><td>Ulnaire</td><td>Tunnel cubital</td><td>Compression au coude</td><td>Paresthésies 4e–5e doigts, griffe, Froment</td></tr>
<tr><td>Ulnaire</td><td>Loge de Guyon</td><td>Compression au poignet</td><td>Déficit moteur des intrinsèques, dos de la main épargné</td></tr>
<tr><td>Radial (interosseux postérieur)</td><td>Arcade de Frohse</td><td>Syndrome du supinateur</td><td>Déficit d'extension des doigts, poignet en déviation radiale, pas de trouble sensitif</td></tr>
<tr><td>Radial (branche superficielle)</td><td>Poignet</td><td>Wartenberg (cheiralgie)</td><td>Paresthésies du dos de la main</td></tr>
</tbody>
</table>`
            }
          ],
          points_cles: [
            "Plexus brachial : rameaux antérieurs C5–T1 ; troncs supérieur (C5–C6), moyen (C7), inférieur (C8–T1) ; divisions antérieures et postérieures ; faisceaux latéral, médial et postérieur nommés par rapport à l'artère axillaire.",
            "Faisceau latéral : musculo-cutané et racine latérale du médian ; faisceau médial : ulnaire, racine médiale du médian, cutanés médiaux ; faisceau postérieur : radial et axillaire.",
            "Nerf musculo-cutané : perfore le coraco-brachial, innerve biceps et brachial, devient nerf cutané latéral de l'avant-bras.",
            "Nerf axillaire : espace axillaire latéral, col chirurgical, deltoïde et petit rond, peau du moignon de l'épaule ; lésé dans la luxation de l'épaule.",
            "Nerf médian : aucune branche au bras ; passe entre les chefs du rond pronateur, donne le nerf interosseux antérieur, traverse le canal carpien ; nerf de la pronation, de la flexion des doigts et de l'opposition.",
            "Nerf ulnaire : derrière l'épicondyle médial, sous le fléchisseur ulnaire du carpe, loge de Guyon ; innerve le fléchisseur ulnaire du carpe, le FPD IV–V et presque tous les intrinsèques ; griffe, Froment.",
            "Nerf radial : sillon du nerf radial, triceps, puis branches superficielle (sensitive) et profonde (interosseux postérieur, extenseurs) ; main tombante ; extension des IP conservée.",
            "Artères : subclavière → axillaire (1re côte à grand pectoral, 6 branches) → brachiale (pli du coude) → radiale (gouttière du pouls, tabatière, arcade profonde) et ulnaire (loge de Guyon, arcade superficielle, interosseuse commune).",
            "Veines superficielles : céphalique (latérale, sillon delto-pectoral, veine axillaire) et basilique (médiale), reliées par la veine médiane du coude ; nœuds cubitaux puis axillaires.",
            "Paralysie du plexus supérieur (Erb) : épaule et coude ; du plexus inférieur (Klumpke) : main en griffe et Claude Bernard-Horner."
          ],
          lexique: [
            { terme: "Plexus brachial", def: "Réseau formé par les rameaux antérieurs de C5 à T1, à l'origine de tous les nerfs du membre supérieur." },
            { terme: "Faisceaux du plexus brachial", def: "Trois cordons (latéral, médial, postérieur) nommés par rapport à l'artère axillaire, donnant les branches terminales." },
            { terme: "Nerf interosseux antérieur", def: "Branche motrice du nerf médian pour le fléchisseur profond (II–III), le long fléchisseur du pouce et le carré pronateur." },
            { terme: "Nerf interosseux postérieur", def: "Prolongement de la branche profonde du nerf radial après traversée du supinateur, moteur pour la loge postérieure de l'avant-bras." },
            { terme: "Tunnel cubital", def: "Passage du nerf ulnaire entre l'épicondyle médial et l'olécrâne puis entre les chefs du fléchisseur ulnaire du carpe." },
            { terme: "Gouttière du pouls", def: "Espace du tiers inférieur de l'avant-bras entre brachio-radial et fléchisseur radial du carpe où l'artère radiale est palpable." },
            { terme: "Veine céphalique", def: "Veine superficielle latérale du membre supérieur, montant dans le sillon delto-pectoral jusqu'à la veine axillaire." },
            { terme: "Veine basilique", def: "Veine superficielle médiale du membre supérieur, rejoignant les veines brachiales ou la veine axillaire." },
            { terme: "Paralysie d'Erb-Duchenne", def: "Atteinte du plexus brachial supérieur (C5–C6) : déficit de l'épaule et de la flexion du coude." },
            { terme: "Main tombante", def: "Chute du poignet et des doigts par paralysie du nerf radial." }
          ],
          qcm: [
            {
              q: "Concernant la constitution du plexus brachial, quelles propositions sont exactes ?",
              options: [
                "A. Il est formé par les rameaux antérieurs de C5 à T1.",
                "B. Le tronc supérieur est formé par C5 et C6.",
                "C. Le faisceau postérieur donne le nerf médian.",
                "D. Les faisceaux sont nommés d'après leur position par rapport à l'artère axillaire.",
                "E. Le nerf ulnaire naît du faisceau médial."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le faisceau postérieur donne les nerfs radial et axillaire ; le médian naît des faisceaux latéral et médial."
            },
            {
              q: "Concernant le nerf médian, quelles propositions sont exactes ?",
              options: [
                "A. Il donne des branches motrices aux muscles du bras.",
                "B. Il passe entre les deux chefs du rond pronateur.",
                "C. Le nerf interosseux antérieur innerve le long fléchisseur du pouce.",
                "D. Il traverse le canal carpien.",
                "E. Il innerve l'adducteur du pouce."
              ],
              bonnes: [1, 2, 3],
              explication: "A est fausse : aucune branche au bras. B, C et D sont vraies. E est fausse : l'adducteur du pouce dépend du nerf ulnaire."
            },
            {
              q: "Concernant le nerf ulnaire, quelles propositions sont exactes ?",
              options: [
                "A. Il traverse le septum intermusculaire médial au tiers moyen du bras.",
                "B. Il passe en avant de l'épicondyle médial.",
                "C. Il innerve le fléchisseur ulnaire du carpe.",
                "D. Il traverse le canal carpien.",
                "E. Sa branche profonde innerve les interosseux."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : il passe en arrière de l'épicondyle médial, dans son sillon. D est fausse : il passe en avant du rétinaculum des fléchisseurs, dans la loge de Guyon."
            },
            {
              q: "Concernant le nerf radial, quelles propositions sont exactes ?",
              options: [
                "A. Il chemine dans le sillon du nerf radial avec l'artère brachiale profonde.",
                "B. Il innerve le triceps brachial.",
                "C. Sa branche profonde traverse le muscle supinateur.",
                "D. Sa lésion au bras abolit l'extension des interphalangiennes.",
                "E. Sa branche superficielle innerve la face dorsale de la première commissure."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : l'extension des IP est assurée par les lombricaux et les interosseux (nerfs médian et ulnaire) ; seule l'extension des MP et du poignet est abolie."
            },
            {
              q: "Concernant le nerf axillaire et le nerf musculo-cutané, quelles propositions sont exactes ?",
              options: [
                "A. Le nerf axillaire traverse l'espace axillaire latéral.",
                "B. Le nerf axillaire innerve le deltoïde et le petit rond.",
                "C. Le nerf musculo-cutané perfore le coraco-brachial.",
                "D. Le nerf musculo-cutané devient le nerf cutané médial de l'avant-bras.",
                "E. Le nerf axillaire est menacé par la luxation antéro-interne de l'épaule."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : il devient le nerf cutané latéral de l'avant-bras ; le nerf cutané médial de l'avant-bras naît du faisceau médial."
            },
            {
              q: "Concernant les artères du membre supérieur, quelles propositions sont exactes ?",
              options: [
                "A. L'artère axillaire s'étend du bord latéral de la première côte au bord inférieur du grand pectoral.",
                "B. L'artère brachiale se divise en artères radiale et ulnaire au pli du coude.",
                "C. L'artère ulnaire donne l'artère interosseuse commune.",
                "D. L'artère radiale forme l'arcade palmaire superficielle.",
                "E. L'artère radiale est palpable dans la gouttière du pouls entre le brachio-radial et le fléchisseur radial du carpe."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : l'artère radiale forme l'arcade palmaire profonde ; la superficielle est ulnaire."
            },
            {
              q: "Concernant les veines et lymphatiques du membre supérieur, quelles propositions sont exactes ?",
              options: [
                "A. La veine céphalique chemine dans le sillon delto-pectoral.",
                "B. La veine basilique est latérale.",
                "C. La veine médiane du coude relie la céphalique et la basilique.",
                "D. Les nœuds cubitaux sont situés au-dessus de l'épicondyle médial.",
                "E. La veine axillaire est latérale à l'artère axillaire."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : la basilique est médiale. E est fausse : la veine axillaire est médiale et antérieure à l'artère."
            },
            {
              q: "Concernant les paralysies du membre supérieur, quelles propositions sont exactes ?",
              options: [
                "A. La paralysie d'Erb-Duchenne touche les racines C5–C6.",
                "B. La paralysie de Déjerine-Klumpke peut s'associer à un syndrome de Claude Bernard-Horner.",
                "C. Le syndrome de Kiloh-Nevin comporte des troubles sensitifs des trois premiers doigts.",
                "D. La compression du nerf interosseux postérieur conserve l'extension du poignet.",
                "E. La compression du nerf ulnaire dans la loge de Guyon épargne la sensibilité du dos de la main."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le nerf interosseux antérieur est purement moteur, le syndrome de Kiloh-Nevin ne comporte pas de trouble sensitif."
            }
          ]
        }
      ]
    },
    {
      titre: "Partie 3 — Appareil locomoteur : membre inférieur",
      chapitres: [
        {
          id: "ceinture-pelvienne-hanche",
          titre: "Ceinture pelvienne et hanche",
          duree: 40,
          objectifs: [
            "Décrire l'os coxal (ilium, ischium, pubis), l'acétabulum et le foramen obturé.",
            "Décrire les articulations sacro-iliaque et la symphyse pubienne.",
            "Décrire l'extrémité proximale du fémur (tête, col, trochanters) et ses angles.",
            "Décrire l'articulation coxo-fémorale : surfaces, labrum, capsule, ligaments, vascularisation de la tête, mouvements.",
            "Décrire les muscles de la région glutéale et pelvi-trochantériens, la région inguinale et le trigone fémoral."
          ],
          sections: [
            {
              titre: "L'os coxal",
              contenu: `<p>L'<strong>os coxal</strong> (os iliaque) est un os plat, pair, en forme d'hélice (deux lames : l'aile iliaque en haut, le cadre obturé en bas), formé par la fusion vers 15–16 ans de <strong>trois pièces</strong> réunies au centre de l'acétabulum par le <strong>cartilage en Y</strong> : l'<strong>ilium</strong> (en haut), l'<strong>ischium</strong> (en bas et en arrière) et le <strong>pubis</strong> (en bas et en avant). Les deux os coxaux et le sacrum forment la <strong>ceinture pelvienne</strong> (bassin osseux).</p>
<h4>L'ilium</h4>
<ul>
<li>L'<strong>aile iliaque</strong> : sa face externe (<strong>face glutéale</strong>) porte les lignes glutéales antérieure, postérieure et inférieure délimitant les insertions des trois muscles glutéaux ; sa face interne est creusée par la <strong>fosse iliaque</strong> (muscle iliaque) et porte en arrière la <strong>surface auriculaire</strong> (en forme d'oreille, pour le sacrum) et la <strong>tubérosité iliaque</strong> (ligaments sacro-iliaques).</li>
<li>La <strong>crête iliaque</strong> : bord supérieur en S, sous-cutanée (repère : son sommet est en regard de L4), tendue de l'<strong>épine iliaque antéro-supérieure</strong> (EIAS : ligament inguinal, sartorius) à l'<strong>épine iliaque postéro-supérieure</strong> (EIPS, en regard de S2). Sous elles, les épines iliaques antéro-inférieure (droit fémoral) et postéro-inférieure.</li>
<li>La <strong>ligne arquée</strong> (face interne) sépare le grand bassin du petit bassin et participe au détroit supérieur.</li>
</ul>
<h4>L'ischium</h4>
<p>Il comprend un <strong>corps</strong> (partie postéro-inférieure de l'acétabulum), l'<strong>épine ischiatique</strong> (séparant la grande incisure ischiatique en haut de la petite incisure ischiatique en bas ; insertion du ligament sacro-épineux), la <strong>tubérosité ischiatique</strong> (volumineuse, sur laquelle on s'assied ; insertion des ischio-jambiers et du ligament sacro-tubéral) et la <strong>branche de l'ischium</strong> qui rejoint le pubis.</p>
<h4>Le pubis</h4>
<p>Un <strong>corps</strong> portant la <strong>surface symphysaire</strong> médiale, la <strong>crête pubienne</strong> et le <strong>tubercule pubien</strong> (insertion du ligament inguinal), une <strong>branche supérieure</strong> (avec le pecten du pubis, prolongement de la ligne arquée, et le sillon obturateur) et une <strong>branche inférieure</strong> qui rejoint la branche de l'ischium pour former la branche ischio-pubienne.</p>
<h4>L'acétabulum et le foramen obturé</h4>
<p>L'<strong>acétabulum</strong> (cavité cotyloïde) est une cavité hémisphérique de 5 cm de diamètre, à la face latérale de l'os, regardant en bas, en avant et latéralement, limitée par un rebord saillant, le <strong>limbus acétabulaire</strong>, interrompu en bas par l'<strong>incisure acétabulaire</strong>. Il comprend une <strong>surface semi-lunaire</strong> articulaire (encroûtée de cartilage, en croissant) et une <strong>fosse acétabulaire</strong> centrale non articulaire (ligament de la tête fémorale, graisse). Le <strong>foramen obturé</strong>, large orifice ovalaire sous l'acétabulum, encadré par le pubis et l'ischium, est fermé par la membrane obturatrice, sauf en haut où le <strong>canal obturateur</strong> laisse passer le nerf et les vaisseaux obturateurs.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'acétabulum regarde en bas, en avant et latéralement ; la tête fémorale regarde en haut, en avant et médialement : les deux surfaces ne se recouvrent pas totalement en avant, d'où le rôle du labrum et du ligament ilio-fémoral. Les grande et petite incisures ischiatiques sont transformées en <strong>foramens ischiatiques</strong> (grand et petit) par les ligaments sacro-épineux et sacro-tubéral.</div>`
            },
            {
              titre: "Les articulations de la ceinture pelvienne",
              contenu: `<h4>L'articulation sacro-iliaque</h4>
<p>Articulation <strong>synoviale plane</strong> (avec une composante fibreuse postérieure, d'où le terme parfois de diarthro-amphiarthrose) entre les surfaces auriculaires du sacrum et de l'ilium, irrégulières et emboîtées. Capsule très serrée, renforcée par les <strong>ligaments sacro-iliaques antérieurs, interosseux</strong> (les plus solides de l'organisme, dans la fosse postérieure) <strong>et postérieurs</strong>, complétés à distance par les ligaments <strong>ilio-lombal</strong>, <strong>sacro-tubéral</strong> (du sacrum à la tubérosité ischiatique) et <strong>sacro-épineux</strong> (du sacrum à l'épine ischiatique). Mobilité très faible (quelques degrés de nutation/contre-nutation : bascule du sacrum autour d'un axe transversal, qui modifie les diamètres du bassin lors de l'accouchement). Elle transmet le poids du tronc aux membres inférieurs.</p>
<h4>La symphyse pubienne</h4>
<p>Articulation <strong>cartilagineuse</strong> (symphyse) médiane entre les surfaces symphysaires des deux pubis, recouvertes de cartilage hyalin et unies par un <strong>disque interpubien</strong> fibro-cartilagineux, renforcé par les ligaments pubiens supérieur et arqué (inférieur). Quasi immobile, elle s'assouplit en fin de grossesse (relaxine).</p>
<h4>Le bassin osseux</h4>
<p>Le <strong>détroit supérieur</strong> (promontoire du sacrum, lignes arquées, pecten du pubis, bord supérieur de la symphyse) sépare le <strong>grand bassin</strong> (fosses iliaques, contenant des viscères abdominaux) du <strong>petit bassin</strong> (cavité pelvienne proprement dite). Diamètres obstétricaux du détroit supérieur : <strong>promonto-rétro-pubien</strong> (conjugué vrai, 10,5–11 cm), transverse médian (12,5–13 cm), obliques (12 cm). Le <strong>détroit inférieur</strong> est limité par le coccyx, les ligaments sacro-tubéraux, les tubérosités ischiatiques et le bord inférieur de la symphyse. Le bassin féminin est plus large, plus bas, avec un détroit supérieur ovalaire transversal et un angle sous-pubien de 90–100° (70° chez l'homme).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les <strong>fractures du bassin</strong> (anneau pelvien) sont instables lorsqu'elles rompent l'anneau en deux points (disjonction pubienne et sacro-iliaque) et s'accompagnent d'hémorragies rétropéritonéales massives (plexus veineux présacré, artères iliaques internes), de lésions urétrales ou vésicales. La sacro-iliite est une atteinte inflammatoire caractéristique de la spondylarthrite ankylosante.</div>`
            },
            {
              titre: "L'extrémité proximale du fémur",
              contenu: `<p>Le <strong>fémur</strong> est l'os le plus long (environ 45 cm, un quart de la taille) et le plus solide du squelette. Son extrémité proximale comprend :</p>
<ul>
<li>La <strong>tête fémorale</strong> : deux tiers de sphère de 25 mm de rayon (diamètre 45–55 mm), recouverte de cartilage sauf au niveau de la <strong>fovéa capitis</strong> (fossette postéro-inférieure où s'insère le ligament de la tête fémorale). Elle regarde en haut, médialement et en avant.</li>
<li>Le <strong>col fémoral</strong> : cylindre aplati de 4 à 5 cm, oblique en haut et médialement, qui unit la tête au massif trochantérien. Il forme avec la diaphyse l'<strong>angle cervico-diaphysaire</strong> (angle d'inclinaison) de <strong>125 à 135°</strong> (coxa valga si supérieur, coxa vara si inférieur) et, dans le plan horizontal, un <strong>angle de déclinaison</strong> (antéversion) de <strong>10 à 20°</strong> par rapport à l'axe bicondylien. Sa face antérieure est intra-capsulaire en totalité ; sa face postérieure seulement dans ses deux tiers médiaux.</li>
<li>Le <strong>grand trochanter</strong> : volumineuse saillie quadrilatère, latérale, dans le prolongement de la diaphyse, sous-cutanée et palpable (repère : à hauteur du centre de la tête). Insertions : moyen glutéal (face latérale), petit glutéal (face antérieure), piriforme (sommet), obturateur interne et jumeaux (fosse trochantérique, face médiale), obturateur externe (fosse trochantérique), carré fémoral (crête intertrochantérique). Face latérale recouverte par le grand glutéal et la bourse trochantérique.</li>
<li>Le <strong>petit trochanter</strong> : saillie conique postéro-médiale à la jonction col-diaphyse, insertion du <strong>muscle ilio-psoas</strong>.</li>
<li>La <strong>ligne intertrochantérique</strong> (antérieure, insertion de la capsule et du ligament ilio-fémoral) et la <strong>crête intertrochantérique</strong> (postérieure, extra-capsulaire) relient les deux trochanters.</li>
</ul>
<h4>Architecture et vascularisation</h4>
<p>L'os spongieux du col est organisé en deux faisceaux de travées : l'<strong>éventail de sustentation</strong> (de la corticale médiale de la diaphyse à la partie supérieure de la tête, en compression) et le <strong>faisceau arciforme</strong> (de la corticale latérale au bas de la tête, en traction), laissant entre eux une zone de faiblesse (<strong>triangle de Ward</strong>). La tête est vascularisée surtout par les <strong>artères rétinaculaires</strong> issues de l'anneau formé autour du col par les <strong>artères circonflexes médiale</strong> (principale, postéro-supérieure) <strong>et latérale</strong> de la cuisse (branches de l'artère fémorale profonde), qui remontent sous la synoviale ; accessoirement par l'artère du ligament de la tête fémorale (branche de l'obturatrice, insuffisante chez l'adulte) et par les artères médullaires du col.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>fracture du col fémoral</strong> (sujet âgé ostéoporotique, chute simple) est <strong>intra-capsulaire</strong> : elle rompt les artères rétinaculaires et expose à la <strong>nécrose avasculaire de la tête</strong> et à la pseudarthrose (d'où la prothèse d'emblée chez le sujet âgé si le déplacement est important, classification de Garden). La <strong>fracture trochantérienne</strong> (pertrochantérienne) est <strong>extra-capsulaire</strong> et consolide bien (ostéosynthèse). Signes : membre raccourci, en adduction et <strong>rotation latérale</strong>.</div>`
            },
            {
              titre: "L'articulation coxo-fémorale",
              contenu: `<p>L'articulation <strong>coxo-fémorale</strong> (articulation de la hanche) est une <strong>sphéroïde</strong> à trois degrés de liberté, très emboîtée : elle allie une grande stabilité (station debout, marche) à une mobilité importante.</p>
<h4>Surfaces articulaires</h4>
<p>La tête fémorale et la surface semi-lunaire de l'acétabulum, agrandie et approfondie par le <strong>labrum acétabulaire</strong> (bourrelet), anneau fibro-cartilagineux de section triangulaire fixé sur le limbus, qui franchit l'incisure acétabulaire en formant le <strong>ligament transverse de l'acétabulum</strong>. Grâce au labrum, plus de la moitié de la tête est contenue dans la cavité (effet ventouse).</p>
<h4>Moyens d'union</h4>
<ul>
<li>La <strong>capsule</strong> : manchon fibreux épais inséré sur le limbus et le labrum, et sur le fémur au niveau de la <strong>ligne intertrochantérique</strong> en avant (tout le col est intra-capsulaire) et à l'union des deux tiers médiaux et du tiers latéral du col en arrière. Ses fibres profondes forment la <strong>zone orbiculaire</strong>, anneau qui enserre le col.</li>
<li>Le <strong>ligament ilio-fémoral</strong> (de Bertin) : le plus puissant de l'organisme (résiste à 350 kg), en éventail de l'épine iliaque antéro-inférieure à la ligne intertrochantérique, avec deux faisceaux (supérieur ilio-prétrochantérien, inférieur ilio-prétrochantinien) formant un Y ou un N avec le suivant. Il verrouille la hanche en <strong>extension</strong> (station debout sans effort musculaire) et limite la rotation latérale.</li>
<li>Le <strong>ligament pubo-fémoral</strong> : de la branche supérieure du pubis à la partie inférieure de la ligne intertrochantérique ; limite l'abduction et la rotation latérale.</li>
<li>Le <strong>ligament ischio-fémoral</strong> : postérieur, de l'ischium à la zone orbiculaire et à la fosse trochantérique ; limite la rotation médiale et l'adduction.</li>
<li>Le <strong>ligament de la tête fémorale</strong> (ligament rond) : intra-articulaire, de la fovéa capitis au fond de la fosse acétabulaire et au ligament transverse ; rôle mécanique faible, conduit une artère accessoire.</li>
</ul>
<p>Tous les ligaments sont tendus en <strong>extension</strong> (ils s'enroulent autour du col) et détendus en flexion : la position de luxation est la <strong>flexion-adduction-rotation médiale</strong> (choc du tableau de bord : luxation postérieure, 90 % des cas).</p>
<h4>Mouvements</h4>
<table>
<thead><tr><th>Mouvement</th><th>Amplitude</th><th>Muscles principaux</th></tr></thead>
<tbody>
<tr><td>Flexion</td><td>120° genou fléchi, 90° genou tendu (ischio-jambiers)</td><td>Ilio-psoas, droit fémoral, sartorius, tenseur du fascia lata</td></tr>
<tr><td>Extension</td><td>15–20°</td><td>Grand glutéal, ischio-jambiers</td></tr>
<tr><td>Abduction</td><td>45°</td><td>Moyen glutéal, petit glutéal, tenseur du fascia lata</td></tr>
<tr><td>Adduction</td><td>30°</td><td>Adducteurs (long, court, grand), gracile, pectiné</td></tr>
<tr><td>Rotation latérale</td><td>60°</td><td>Pelvi-trochantériens, grand glutéal</td></tr>
<tr><td>Rotation médiale</td><td>30–40°</td><td>Petit et moyen glutéaux (fibres antérieures), tenseur du fascia lata</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>coxarthrose</strong> est l'arthrose la plus invalidante ; elle donne une douleur inguinale irradiant à la face antérieure de la cuisse jusqu'au genou (nerf obturateur et fémoral), une limitation précoce de la rotation médiale et de l'extension. La <strong>luxation congénitale de hanche</strong> (dysplasie) est dépistée par la limitation de l'abduction, les manœuvres d'Ortolani et Barlow et l'échographie à 1 mois. La luxation traumatique postérieure menace le nerf sciatique.</div>`
            },
            {
              titre: "Les muscles de la région glutéale et pelvi-trochantériens",
              contenu: `<p>La <strong>région glutéale</strong> (fesse) est formée de trois plans musculaires.</p>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action</th><th>Innervation</th></tr></thead>
<tbody>
<tr><td><strong>Grand glutéal</strong> (grand fessier)</td><td>Face glutéale de l'ilium derrière la ligne glutéale postérieure, face postérieure du sacrum et du coccyx, ligament sacro-tubéral, fascia thoraco-lombal</td><td>Tubérosité glutéale du fémur (fibres profondes) et tractus ilio-tibial (fibres superficielles)</td><td><strong>Extenseur</strong> principal (relèvement du tronc, montée des escaliers) et rotateur latéral ; stabilisateur du bassin ; le plus volumineux muscle du corps</td><td>Nerf glutéal inférieur (L5–S2)</td></tr>
<tr><td><strong>Moyen glutéal</strong></td><td>Face glutéale entre les lignes glutéales antérieure et postérieure</td><td>Face latérale du grand trochanter</td><td><strong>Abducteur</strong> principal, <strong>stabilisateur du bassin en appui monopodal</strong> (fibres antérieures rotatrices médiales, postérieures rotatrices latérales)</td><td>Nerf glutéal supérieur (L4–S1)</td></tr>
<tr><td><strong>Petit glutéal</strong></td><td>Face glutéale entre les lignes glutéales antérieure et inférieure</td><td>Face antérieure du grand trochanter</td><td>Abducteur, rotateur médial</td><td>Nerf glutéal supérieur</td></tr>
<tr><td><strong>Tenseur du fascia lata</strong></td><td>EIAS, crête iliaque</td><td>Tractus ilio-tibial puis tubercule de Gerdy (tibia)</td><td>Fléchisseur, abducteur, rotateur médial ; tend le fascia lata, stabilise le genou en extension</td><td>Nerf glutéal supérieur</td></tr>
</tbody>
</table>
<h4>Les muscles pelvi-trochantériens (rotateurs latéraux)</h4>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Innervation</th></tr></thead>
<tbody>
<tr><td><strong>Piriforme</strong></td><td>Face antérieure du sacrum (S2–S4)</td><td>Sommet du grand trochanter, en passant par le grand foramen ischiatique qu'il divise en espaces supra- et infra-piriformes</td><td>Rameaux du plexus sacral (S1–S2)</td></tr>
<tr><td><strong>Obturateur interne</strong></td><td>Face interne de la membrane obturatrice et du pourtour du foramen obturé</td><td>Fosse trochantérique, après réflexion à angle droit sur la petite incisure ischiatique (petit foramen ischiatique)</td><td>Nerf de l'obturateur interne (L5–S2)</td></tr>
<tr><td><strong>Jumeaux supérieur et inférieur</strong></td><td>Épine ischiatique / tubérosité ischiatique</td><td>Tendon de l'obturateur interne</td><td>Nerf de l'obturateur interne / nerf du carré fémoral</td></tr>
<tr><td><strong>Obturateur externe</strong></td><td>Face externe de la membrane obturatrice</td><td>Fosse trochantérique (passe sous le col)</td><td><strong>Nerf obturateur</strong> (L3–L4)</td></tr>
<tr><td><strong>Carré fémoral</strong></td><td>Tubérosité ischiatique</td><td>Crête intertrochantérique (tubercule du carré fémoral)</td><td>Nerf du carré fémoral (L4–S1)</td></tr>
</tbody>
</table>
<p>Ces muscles sont tous <strong>rotateurs latéraux</strong> et coapteurs de la hanche. Le <strong>piriforme</strong> est le repère clé de la région : au-dessus de lui (espace supra-piriforme) sortent le <strong>nerf et les vaisseaux glutéaux supérieurs</strong> ; au-dessous (espace infra-piriforme) le <strong>nerf sciatique</strong>, le nerf glutéal inférieur et les vaisseaux glutéaux inférieurs, le nerf cutané postérieur de la cuisse, le <strong>nerf pudendal</strong> et les vaisseaux pudendaux internes (qui contournent l'épine ischiatique pour entrer dans le périnée par le petit foramen ischiatique).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la paralysie du <strong>moyen glutéal</strong> (nerf glutéal supérieur, luxation de hanche, chirurgie) donne le <strong>signe de Trendelenburg</strong> : en appui monopodal du côté atteint, le bassin bascule du côté opposé (démarche dandinante). L'injection intramusculaire se fait dans le <strong>quadrant supéro-latéral</strong> de la fesse pour éviter le nerf sciatique, qui émerge au milieu de la ligne reliant l'EIPS à la tubérosité ischiatique et descend à mi-distance entre la tubérosité ischiatique et le grand trochanter.</div>`
            },
            {
              titre: "Région inguinale, trigone fémoral et face antérieure de la hanche",
              contenu: `<h4>Les muscles antérieurs de la hanche</h4>
<p>L'<strong>ilio-psoas</strong> est le <strong>fléchisseur principal de la hanche</strong>. Il réunit le <strong>grand psoas</strong> (né des faces latérales des corps de T12 à L4, des disques et des processus costiformes ; innervé par le plexus lombal L1–L3) et le <strong>muscle iliaque</strong> (fosse iliaque ; nerf fémoral L2–L3). Les deux passent sous le ligament inguinal, en avant de la capsule (bourse ilio-pectinée) et se terminent par un tendon commun sur le <strong>petit trochanter</strong>. Il est aussi rotateur latéral et, à point fixe fémoral, fléchisseur du tronc (relevé de buste). Le <strong>petit psoas</strong> est inconstant.</p>
<h4>La région inguinale</h4>
<p>Le <strong>ligament inguinal</strong> (arcade crurale), tendu de l'EIAS au tubercule pubien, est le bord inférieur épaissi de l'aponévrose du muscle oblique externe. Il sépare l'abdomen de la cuisse. En dessous de lui, l'espace est divisé par la <strong>bandelette ilio-pectinée</strong> (arcade du psoas) en :</p>
<ul>
<li>une <strong>lacune musculaire</strong> latérale : muscle ilio-psoas, <strong>nerf fémoral</strong> (dans la gouttière entre psoas et iliaque) et nerf cutané latéral de la cuisse ;</li>
<li>une <strong>lacune vasculaire</strong> médiale : de latéral en médial, l'<strong>artère fémorale</strong>, la <strong>veine fémorale</strong> et, le plus médialement, l'<strong>anneau fémoral</strong> (canal fémoral, contenant du tissu lymphatique : nœud de Cloquet), fermé par le ligament lacunaire ; c'est le point faible où s'engage la <strong>hernie fémorale</strong> (crurale, surtout chez la femme, sous la ligne de Malgaigne, risque d'étranglement).</li>
</ul>
<h4>Le trigone fémoral (triangle de Scarpa)</h4>
<p>Région triangulaire à sommet inférieur de la face antérieure de la racine de la cuisse, limitée en haut par le <strong>ligament inguinal</strong>, latéralement par le bord médial du <strong>sartorius</strong>, médialement par le bord latéral du <strong>long adducteur</strong> ; son plancher est formé par l'ilio-psoas (latéralement) et le pectiné (médialement), creusant la fosse ilio-pectinée ; son toit est le fascia lata, perforé par la grande veine saphène au niveau du <strong>hiatus saphène</strong> (fascia criblé). Contenu, de latéral en médial (mnémotechnique <strong>NAVL</strong>, nerf–artère–veine–lymphatiques) : le <strong>nerf fémoral</strong> (qui se divise rapidement en ses branches), l'<strong>artère fémorale</strong> (pouls fémoral palpable au milieu du ligament inguinal, abord artériel), la <strong>veine fémorale</strong> (recevant la grande saphène et la veine fémorale profonde) et les <strong>nœuds lymphatiques inguinaux profonds</strong>. L'artère fémorale profonde naît 4 cm sous le ligament inguinal, en arrière de l'artère fémorale. Le trigone se prolonge en bas par le <strong>canal des adducteurs</strong> (canal de Hunter), entre vaste médial, long et grand adducteurs, sous le sartorius, où cheminent l'artère et la veine fémorales et le nerf saphène jusqu'au hiatus du grand adducteur.</p>
<p>Les <strong>nœuds inguinaux superficiels</strong> (10 à 20, sous la peau, le long du ligament inguinal et de la crosse de la saphène) drainent le membre inférieur, les organes génitaux externes, le périnée, l'anus et la paroi abdominale sous-ombilicale ; les profonds (1 à 3) reçoivent les superficiels et les lymphatiques profonds du membre, puis gagnent les nœuds iliaques externes.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> au trigone fémoral, de latéral en médial : <strong>N</strong>erf fémoral, <strong>A</strong>rtère fémorale, <strong>V</strong>eine fémorale, <strong>L</strong>ymphatiques (canal fémoral). Le nerf fémoral est en dehors de la gaine vasculaire ; une ponction de l'artère fémorale se fait 1 à 2 cm sous le ligament inguinal, latéralement à la veine. La hernie inguinale sort au-dessus du ligament inguinal, la hernie fémorale au-dessous.</div>`
            }
          ],
          points_cles: [
            "L'os coxal résulte de la fusion de l'ilium, de l'ischium et du pubis au niveau de l'acétabulum (cartilage en Y) ; l'acétabulum regarde en bas, en avant et latéralement.",
            "La sacro-iliaque est une articulation synoviale plane quasi immobile, aux ligaments les plus solides du corps ; la symphyse pubienne est une articulation cartilagineuse à disque interpubien.",
            "Détroit supérieur : promontoire, lignes arquées, pecten du pubis ; diamètre promonto-rétro-pubien 10,5–11 cm ; bassin féminin plus large, angle sous-pubien 90–100°.",
            "Fémur proximal : tête (deux tiers de sphère, fovéa), col (angle cervico-diaphysaire 125–135°, antéversion 10–20°), grand trochanter (glutéaux moyen et petit, pelvi-trochantériens), petit trochanter (ilio-psoas).",
            "La tête fémorale est vascularisée surtout par les artères rétinaculaires des circonflexes (médiale surtout) : les fractures du col, intra-capsulaires, exposent à la nécrose ; les fractures trochantériennes, extra-capsulaires, consolident.",
            "La coxo-fémorale est une sphéroïde très emboîtée (labrum) ; le ligament ilio-fémoral, le plus puissant du corps, verrouille l'extension ; les ligaments sont détendus en flexion-adduction-rotation médiale (luxation postérieure).",
            "Grand glutéal (nerf glutéal inférieur) : extenseur ; moyen et petit glutéaux (nerf glutéal supérieur) : abducteurs et stabilisateurs du bassin (signe de Trendelenburg).",
            "Pelvi-trochantériens (piriforme, obturateurs interne et externe, jumeaux, carré fémoral) : rotateurs latéraux ; le piriforme sépare les espaces supra-piriforme (nerf glutéal supérieur) et infra-piriforme (nerf sciatique, pudendal, glutéal inférieur).",
            "Trigone fémoral : ligament inguinal, sartorius, long adducteur ; contenu de latéral en médial NAVL : nerf, artère, veine fémorales, lymphatiques (canal fémoral, hernie fémorale)."
          ],
          lexique: [
            { terme: "Acétabulum", def: "Cavité articulaire hémisphérique de la face latérale de l'os coxal recevant la tête fémorale (cavité cotyloïde)." },
            { terme: "Cartilage en Y", def: "Cartilage de croissance triradié unissant l'ilium, l'ischium et le pubis au fond de l'acétabulum jusqu'à 15–16 ans." },
            { terme: "Angle cervico-diaphysaire", def: "Angle de 125 à 135° entre l'axe du col et celui de la diaphyse fémorale (coxa vara / coxa valga)." },
            { terme: "Artères rétinaculaires", def: "Branches des artères circonflexes remontant le long du col sous la synoviale pour vasculariser la tête fémorale." },
            { terme: "Labrum acétabulaire", def: "Anneau fibro-cartilagineux fixé sur le limbus, approfondissant l'acétabulum et retenant la tête (effet ventouse)." },
            { terme: "Ligament ilio-fémoral", def: "Ligament antérieur en Y de l'épine iliaque antéro-inférieure à la ligne intertrochantérique, le plus puissant de l'organisme." },
            { terme: "Espace infra-piriforme", def: "Partie du grand foramen ischiatique sous le piriforme, traversée par le nerf sciatique, le nerf glutéal inférieur et le nerf pudendal." },
            { terme: "Signe de Trendelenburg", def: "Bascule du bassin du côté opposé en appui monopodal, traduisant une insuffisance du moyen glutéal." },
            { terme: "Trigone fémoral", def: "Triangle de la racine de la cuisse (ligament inguinal, sartorius, long adducteur) contenant le pédicule fémoral." },
            { terme: "Anneau fémoral", def: "Partie la plus médiale de la lacune vasculaire, contenant des lymphatiques, point de sortie de la hernie fémorale." }
          ],
          qcm: [
            {
              q: "Concernant l'os coxal, quelles propositions sont exactes ?",
              options: [
                "A. Il résulte de la fusion de trois os : ilium, ischium et pubis.",
                "B. L'acétabulum regarde en haut, en arrière et médialement.",
                "C. La tubérosité ischiatique donne insertion aux ischio-jambiers.",
                "D. Le foramen obturé est entièrement fermé par la membrane obturatrice.",
                "E. L'épine iliaque antéro-supérieure donne insertion au ligament inguinal."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : l'acétabulum regarde en bas, en avant et latéralement. D est fausse : le canal obturateur reste ouvert en haut pour le nerf et les vaisseaux obturateurs."
            },
            {
              q: "Concernant l'extrémité proximale du fémur, quelles propositions sont exactes ?",
              options: [
                "A. L'angle cervico-diaphysaire normal est de 125 à 135°.",
                "B. Le petit trochanter reçoit le tendon de l'ilio-psoas.",
                "C. La tête fémorale est vascularisée principalement par l'artère du ligament de la tête fémorale chez l'adulte.",
                "D. La fracture du col fémoral est intra-capsulaire et expose à la nécrose de la tête.",
                "E. Le grand trochanter reçoit le moyen glutéal sur sa face latérale."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : l'artère du ligament de la tête est accessoire ; la vascularisation principale vient des artères rétinaculaires issues des circonflexes (surtout médiale)."
            },
            {
              q: "Concernant l'articulation coxo-fémorale, quelles propositions sont exactes ?",
              options: [
                "A. C'est une articulation sphéroïde.",
                "B. Le ligament ilio-fémoral est le plus puissant ligament de l'organisme.",
                "C. Les ligaments sont tendus en flexion.",
                "D. La luxation traumatique est le plus souvent postérieure.",
                "E. Le labrum acétabulaire est un anneau de cartilage hyalin."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : les ligaments sont tendus en extension et détendus en flexion. E est fausse : le labrum est un fibrocartilage."
            },
            {
              q: "Concernant les muscles glutéaux, quelles propositions sont exactes ?",
              options: [
                "A. Le grand glutéal est innervé par le nerf glutéal supérieur.",
                "B. Le moyen glutéal est le principal abducteur de la hanche.",
                "C. Le signe de Trendelenburg traduit une insuffisance du moyen glutéal.",
                "D. Le grand glutéal est le principal extenseur de la hanche.",
                "E. Le tenseur du fascia lata est innervé par le nerf fémoral."
              ],
              bonnes: [1, 2, 3],
              explication: "A est fausse : le grand glutéal est innervé par le nerf glutéal inférieur. B, C et D sont vraies. E est fausse : le tenseur du fascia lata dépend du nerf glutéal supérieur."
            },
            {
              q: "Concernant les muscles pelvi-trochantériens et le grand foramen ischiatique, quelles propositions sont exactes ?",
              options: [
                "A. Le piriforme naît de la face antérieure du sacrum.",
                "B. Le nerf sciatique sort par l'espace supra-piriforme.",
                "C. L'obturateur externe est innervé par le nerf obturateur.",
                "D. Les pelvi-trochantériens sont rotateurs latéraux de la hanche.",
                "E. L'obturateur interne se réfléchit sur la petite incisure ischiatique."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le nerf sciatique sort par l'espace infra-piriforme ; seul le pédicule glutéal supérieur passe au-dessus du piriforme."
            },
            {
              q: "Concernant le trigone fémoral et la région inguinale, quelles propositions sont exactes ?",
              options: [
                "A. Il est limité latéralement par le sartorius et médialement par le long adducteur.",
                "B. De latéral en médial, on trouve le nerf, l'artère puis la veine fémorale.",
                "C. La grande veine saphène se jette dans la veine fémorale au niveau du hiatus saphène.",
                "D. La hernie fémorale sort au-dessus du ligament inguinal.",
                "E. L'ilio-psoas est le principal fléchisseur de la hanche."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la hernie fémorale sort sous le ligament inguinal, par l'anneau fémoral ; la hernie inguinale sort au-dessus."
            },
            {
              q: "Concernant le bassin osseux, quelles propositions sont exactes ?",
              options: [
                "A. Le détroit supérieur passe par le promontoire et les lignes arquées.",
                "B. Le diamètre promonto-rétro-pubien mesure environ 10,5 à 11 cm.",
                "C. L'angle sous-pubien est plus ouvert chez l'homme que chez la femme.",
                "D. La symphyse pubienne est une articulation synoviale.",
                "E. La sacro-iliaque est quasi immobile."
              ],
              bonnes: [0, 1, 4],
              explication: "A, B et E sont vraies. C est fausse : l'angle sous-pubien est plus ouvert chez la femme (90–100°) que chez l'homme (70°). D est fausse : la symphyse pubienne est une articulation cartilagineuse."
            }
          ]
        },
        {
          id: "cuisse-genou",
          titre: "Cuisse et genou",
          duree: 45,
          objectifs: [
            "Décrire la diaphyse et l'extrémité distale du fémur, la patella et l'extrémité proximale du tibia.",
            "Décrire les trois loges de la cuisse et leurs muscles (quadriceps, adducteurs, ischio-jambiers) avec origine, terminaison, action, innervation.",
            "Décrire l'articulation du genou : surfaces, ménisques, ligaments croisés et collatéraux, capsule et bourses.",
            "Expliquer la biomécanique du genou (flexion-extension, rotation automatique, verrouillage) et les axes du membre inférieur.",
            "Relier l'anatomie aux lésions méniscales et ligamentaires et aux fractures du fémur."
          ],
          sections: [
            {
              titre: "Le fémur : diaphyse et extrémité distale",
              contenu: `<h4>La diaphyse</h4>
<p>Prismatique triangulaire, <strong>concave en arrière</strong> (convexe en avant), oblique en bas et médialement (les deux fémurs convergent vers les genoux, formant avec la verticale un angle de 7–9°). Faces antérieure, latérale et médiale lisses (insertion des vastes). Le <strong>bord postérieur</strong> est épais et rugueux : c'est la <strong>ligne âpre</strong>, formée de deux lèvres (médiale : vaste médial, adducteurs ; latérale : vaste latéral, grand glutéal via la tubérosité glutéale, court chef du biceps) encadrant une zone d'insertion du grand adducteur et du court adducteur. En haut, la ligne âpre se trifurque (tubérosité glutéale, ligne pectinée, ligne spirale) ; en bas, elle se bifurque en deux lignes supra-condylaires délimitant la <strong>surface poplitée</strong>, plancher de la fosse poplitée. Le foramen nourricier est sur la ligne âpre, dirigé vers le haut (« du genou je fuis »).</p>
<h4>L'extrémité distale</h4>
<p>Volumineuse, elle porte deux <strong>condyles</strong>, saillies articulaires convexes dans les deux sens, séparées en arrière et en bas par la <strong>fosse intercondylaire</strong> et réunies en avant par la <strong>surface patellaire</strong> (trochlée fémorale) en forme de poulie à joue latérale plus haute et plus saillante (stabilise la patella).</p>
<ul>
<li>Le <strong>condyle médial</strong> : plus étroit, plus long et descend plus bas (compense l'obliquité du fémur) ; porte l'<strong>épicondyle médial</strong> (ligament collatéral tibial) et le <strong>tubercule de l'adducteur</strong> (grand adducteur).</li>
<li>Le <strong>condyle latéral</strong> : plus large, plus court et plus sagittal ; porte l'<strong>épicondyle latéral</strong> (ligament collatéral fibulaire, poplité).</li>
<li>Le rayon de courbure des condyles diminue d'avant en arrière (spirale), ce qui explique la cinématique de roulement-glissement.</li>
<li>Dans la fosse intercondylaire : face latérale du condyle médial (insertion du <strong>ligament croisé postérieur</strong>), face médiale du condyle latéral (<strong>ligament croisé antérieur</strong>).</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>fracture de la diaphyse fémorale</strong> (traumatisme à haute énergie, adulte jeune) entraîne une hémorragie de 1 à 1,5 litre dans la cuisse (choc), un raccourcissement et une rotation latérale ; elle est traitée par enclouage centro-médullaire. Les fractures supra- et inter-condyliennes menacent l'artère poplitée et le nerf tibial.</div>`
            },
            {
              titre: "La patella et l'extrémité proximale du tibia",
              contenu: `<h4>La patella</h4>
<p>La <strong>patella</strong> (rotule) est le plus grand <strong>os sésamoïde</strong> du corps (4–5 cm de haut, 5 cm de large, 2 cm d'épaisseur), développé dans le tendon du quadriceps, en avant de la surface patellaire du fémur. Triangulaire à base supérieure (insertion du quadriceps) et <strong>apex inférieur</strong> (origine du ligament patellaire, qui se fixe sur la tubérosité tibiale). Sa <strong>face antérieure</strong> est rugueuse et sous-cutanée (bourse prépatellaire) ; sa <strong>face postérieure</strong> est articulaire dans ses trois quarts supérieurs, divisée par une crête verticale en une facette latérale plus large et une facette médiale, recouvertes du <strong>cartilage le plus épais de l'organisme</strong> (6–7 mm). Rôle : augmenter le bras de levier du quadriceps (de 30 à 50 %), centraliser ses forces, protéger le genou. Elle est maintenue latéralement par les rétinaculums patellaires (expansions des vastes) et attirée latéralement par le valgus physiologique (angle Q), d'où les luxations latérales.</p>
<h4>L'extrémité proximale du tibia</h4>
<p>Massive, elle forme le <strong>plateau tibial</strong>, constitué de deux <strong>condyles</strong> (médial et latéral) dont les faces supérieures sont les <strong>surfaces articulaires supérieures</strong> (cavités glénoïdes) : la <strong>médiale</strong> est ovalaire, concave dans les deux sens ; la <strong>latérale</strong> est circulaire, concave transversalement mais légèrement <strong>convexe</strong> sagittalement (d'où une moindre congruence et une plus grande mobilité du compartiment latéral). Elles sont séparées par l'<strong>éminence intercondylaire</strong> (épine tibiale, deux tubercules intercondylaires) et par les <strong>aires intercondylaires antérieure</strong> (insertion du LCA et des cornes antérieures des ménisques) <strong>et postérieure</strong> (LCP, cornes postérieures). Le plateau est incliné en arrière de 5 à 10° (pente tibiale). Face antérieure : la <strong>tubérosité tibiale</strong> (ligament patellaire) ; face latérale du condyle latéral : le <strong>tubercule de Gerdy</strong> (tractus ilio-tibial) et, en arrière, la <strong>facette articulaire fibulaire</strong> ; face médiale : insertion en « patte d'oie » du sartorius, du gracile et du semi-tendineux.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le condyle fémoral médial est le plus long et descend le plus bas ; le plateau tibial latéral est convexe d'avant en arrière. La fibula ne participe pas à l'articulation du genou : elle s'articule seulement avec le tibia (articulation tibio-fibulaire proximale, plane, indépendante de la cavité du genou).</div>`
            },
            {
              titre: "Les loges musculaires de la cuisse",
              contenu: `<p>Le <strong>fascia lata</strong> engaine la cuisse ; il est épaissi latéralement en <strong>tractus ilio-tibial</strong> (bandelette de Maissiat, du tenseur du fascia lata et du grand glutéal au tubercule de Gerdy) et envoie des septums intermusculaires latéral et médial à la ligne âpre, délimitant trois loges : <strong>antérieure</strong> (extenseurs du genou, nerf fémoral), <strong>médiale</strong> (adducteurs, nerf obturateur) et <strong>postérieure</strong> (fléchisseurs du genou, nerf sciatique).</p>
<h4>Loge antérieure (nerf fémoral, L2–L4)</h4>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action</th></tr></thead>
<tbody>
<tr><td><strong>Sartorius</strong></td><td>EIAS</td><td>Face médiale du tibia (patte d'oie, le plus antérieur)</td><td>Fléchisseur, abducteur, rotateur latéral de la hanche ; fléchisseur et rotateur médial du genou (position du tailleur) ; le plus long muscle du corps</td></tr>
<tr><td><strong>Droit fémoral</strong> (quadriceps)</td><td>Épine iliaque antéro-inférieure (tendon direct) et sillon supra-acétabulaire (tendon réfléchi)</td><td>Base de la patella via le tendon quadricipital</td><td>Extenseur du genou, <strong>fléchisseur de la hanche</strong> (bi-articulaire)</td></tr>
<tr><td><strong>Vaste latéral</strong> (quadriceps)</td><td>Ligne intertrochantérique, grand trochanter, lèvre latérale de la ligne âpre</td><td>Patella (bord latéral) et rétinaculum patellaire latéral</td><td>Extenseur du genou</td></tr>
<tr><td><strong>Vaste médial</strong> (quadriceps)</td><td>Ligne intertrochantérique, lèvre médiale de la ligne âpre</td><td>Patella (bord médial), rétinaculum médial ; fibres obliques basses stabilisant la patella</td><td>Extenseur du genou, stabilisateur médial de la patella (s'atrophie le premier)</td></tr>
<tr><td><strong>Vaste intermédiaire</strong> (quadriceps)</td><td>Faces antérieure et latérale de la diaphyse fémorale</td><td>Patella (plan profond du tendon)</td><td>Extenseur du genou</td></tr>
</tbody>
</table>
<p>Le <strong>quadriceps fémoral</strong>, le plus volumineux muscle du corps (2 kg), est le <strong>seul extenseur du genou</strong> ; son tendon se prolonge par la patella et le <strong>ligament patellaire</strong> (tendon rotulien, 5–6 cm) jusqu'à la tubérosité tibiale. Il est indispensable à la marche (verrouillage du genou en appui) et à la montée des escaliers. Réflexe patellaire : L4. Le <strong>muscle articulaire du genou</strong>, petit, tend la synoviale.</p>
<h4>Loge médiale (nerf obturateur, L2–L4)</h4>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action / innervation</th></tr></thead>
<tbody>
<tr><td><strong>Pectiné</strong></td><td>Pecten du pubis</td><td>Ligne pectinée du fémur (sous le petit trochanter)</td><td>Adducteur et fléchisseur ; nerf <strong>fémoral</strong> (± obturateur)</td></tr>
<tr><td><strong>Long adducteur</strong></td><td>Corps du pubis sous le tubercule pubien</td><td>Tiers moyen de la ligne âpre</td><td>Adducteur, fléchisseur ; nerf obturateur</td></tr>
<tr><td><strong>Court adducteur</strong></td><td>Branche inférieure du pubis</td><td>Tiers supérieur de la ligne âpre</td><td>Adducteur ; nerf obturateur</td></tr>
<tr><td><strong>Grand adducteur</strong></td><td>Branche ischio-pubienne, tubérosité ischiatique</td><td>Toute la ligne âpre (faisceau adducteur) et tubercule de l'adducteur (faisceau vertical) ; entre les deux, le <strong>hiatus du grand adducteur</strong> (passage des vaisseaux fémoraux vers la fosse poplitée)</td><td>Adducteur puissant ; extenseur (faisceau vertical) ; nerf obturateur <strong>et nerf sciatique (tibial)</strong> pour le faisceau vertical</td></tr>
<tr><td><strong>Gracile</strong></td><td>Branche inférieure du pubis, près de la symphyse</td><td>Face médiale du tibia (patte d'oie, entre sartorius et semi-tendineux)</td><td>Adducteur, fléchisseur et rotateur médial du genou ; nerf obturateur ; seul adducteur bi-articulaire</td></tr>
</tbody>
</table>
<h4>Loge postérieure : les ischio-jambiers (nerf sciatique, L5–S2)</h4>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action / innervation</th></tr></thead>
<tbody>
<tr><td><strong>Biceps fémoral</strong></td><td>Chef long : tubérosité ischiatique (tendon commun avec le semi-tendineux). Chef court : lèvre latérale de la ligne âpre (mono-articulaire)</td><td>Tête de la fibula (et condyle latéral du tibia)</td><td>Fléchisseur et <strong>rotateur latéral</strong> du genou, extenseur de la hanche (chef long) ; chef long : nerf tibial ; <strong>chef court : nerf fibulaire commun</strong></td></tr>
<tr><td><strong>Semi-tendineux</strong></td><td>Tubérosité ischiatique</td><td>Face médiale du tibia (patte d'oie, le plus postérieur) par un long tendon</td><td>Fléchisseur et rotateur médial du genou, extenseur de la hanche ; nerf tibial</td></tr>
<tr><td><strong>Semi-membraneux</strong></td><td>Tubérosité ischiatique (lame membraneuse)</td><td>Face postérieure du condyle médial du tibia (tendon direct, réfléchi et récurrent formant le ligament poplité oblique)</td><td>Fléchisseur et rotateur médial du genou, extenseur de la hanche ; nerf tibial</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la <strong>patte d'oie</strong> réunit, d'avant en arrière, le <strong>sartorius</strong> (nerf fémoral), le <strong>gracile</strong> (nerf obturateur) et le <strong>semi-tendineux</strong> (nerf tibial) : trois muscles, trois loges, trois nerfs, tous fléchisseurs et rotateurs médiaux du genou. Les ischio-jambiers limitent la flexion de la hanche genou tendu (90°) et sont déchirés chez le sprinter.</div>`
            },
            {
              titre: "L'articulation du genou : surfaces et ménisques",
              contenu: `<p>Le <strong>genou</strong> est l'articulation intermédiaire du membre inférieur, la plus volumineuse et la plus complexe du corps. C'est une articulation synoviale <strong>bicondylaire</strong> (à deux degrés de liberté : flexion-extension et rotation axiale genou fléchi), réunissant dans une cavité unique l'articulation <strong>fémoro-tibiale</strong> (deux compartiments, médial et latéral) et l'articulation <strong>fémoro-patellaire</strong> (ginglyme fonctionnel entre la surface patellaire du fémur et la face postérieure de la patella).</p>
<h4>Les ménisques</h4>
<p>Deux <strong>fibrocartilages</strong> en forme de croissant, de section triangulaire (bord périphérique épais adhérent à la capsule, bord central mince et libre), interposés entre condyles fémoraux et plateaux tibiaux pour <strong>améliorer la congruence</strong>, <strong>répartir les pressions</strong> (ils transmettent 50 à 70 % de la charge), amortir et participer à la lubrification. Leurs <strong>cornes</strong> antérieure et postérieure se fixent sur les aires intercondylaires ; ils sont unis en avant par le <strong>ligament transverse du genou</strong>. Seul le tiers périphérique est vascularisé (cicatrisation possible), le reste est nourri par la synovie.</p>
<table>
<thead><tr><th></th><th>Ménisque médial</th><th>Ménisque latéral</th></tr></thead>
<tbody>
<tr><td>Forme</td><td>En <strong>C</strong> ouvert (demi-lune), cornes éloignées</td><td>En <strong>O</strong> presque fermé, cornes proches</td></tr>
<tr><td>Fixité</td><td>Très fixe : adhérent au <strong>ligament collatéral tibial</strong> et à la capsule sur toute sa périphérie</td><td>Plus mobile : séparé du ligament collatéral fibulaire par le tendon du poplité (hiatus poplité)</td></tr>
<tr><td>Lésions</td><td>Les plus fréquentes (rotation latérale du tibia, genou fléchi) : anse de seau, languette</td><td>Moins fréquentes ; ménisque discoïde congénital</td></tr>
<tr><td>Rapports</td><td>Expansions du semi-membraneux</td><td>Ligaments ménisco-fémoraux (Humphrey et Wrisberg) vers le condyle médial, tendon du poplité</td></tr>
</tbody>
</table>
<p>En flexion, les ménisques reculent sur les plateaux tibiaux (tirés par le semi-membraneux et le poplité) ; en extension, ils avancent (poussés par les condyles, tirés par les ailerons ménisco-patellaires). Lors des rotations, ils suivent les condyles fémoraux. Un mouvement brusque en flexion-rotation les coince entre condyle et plateau : c'est la <strong>lésion méniscale</strong>, avec douleur de l'interligne, blocage en flexion (anse de seau luxée dans l'échancrure) et hydarthrose.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>triade malheureuse</strong> (d'O'Donoghue) associe rupture du ligament croisé antérieur, lésion du ménisque médial et rupture du ligament collatéral tibial (valgus-flexion-rotation latérale, ski, football). La méniscectomie totale conduit à l'arthrose : on privilégie la suture ou la méniscectomie partielle sous arthroscopie.</div>`
            },
            {
              titre: "Le genou : capsule, ligaments, synoviale et bourses",
              contenu: `<h4>La capsule</h4>
<p>Manchon fibreux inséré sur le fémur à distance du cartilage (en avant très haut dans le cul-de-sac supra-patellaire, en arrière au ras des condyles, englobant la fosse intercondylaire), sur la patella (dont elle fait un os capsulaire) et sur le tibia au pourtour des plateaux ; elle adhère aux bords périphériques des ménisques. Elle est fine en avant (ailerons patellaires), épaisse en arrière où elle forme les <strong>coques condyliennes</strong>, tendues en extension.</p>
<h4>Les ligaments</h4>
<ul>
<li>Le <strong>ligament patellaire</strong> (tendon rotulien) : de l'apex de la patella à la tubérosité tibiale ; en avant, les <strong>rétinaculums patellaires</strong> médial et latéral.</li>
<li>Le <strong>ligament collatéral tibial</strong> (LCT, ligament latéral interne) : large bande aplatie de 10 cm, de l'épicondyle médial à la face médiale du tibia, sous la patte d'oie ; adhérent à la capsule et au ménisque médial. Stabilisateur en <strong>valgus</strong>.</li>
<li>Le <strong>ligament collatéral fibulaire</strong> (LCF, ligament latéral externe) : cordon arrondi de 5 cm, de l'épicondyle latéral à la tête de la fibula ; <strong>indépendant de la capsule et du ménisque latéral</strong> (séparé par le tendon du poplité). Stabilisateur en <strong>varus</strong>. Les deux collatéraux sont tendus en extension, détendus en flexion (d'où la possibilité de rotation genou fléchi).</li>
<li>Le <strong>ligament croisé antérieur</strong> (LCA) : de l'<strong>aire intercondylaire antérieure</strong> du tibia à la face médiale du <strong>condyle latéral</strong> du fémur, oblique en haut, en arrière et latéralement (3–4 cm, deux faisceaux antéro-médial et postéro-latéral). Il s'oppose à la <strong>translation antérieure du tibia</strong> (tiroir antérieur) et à la rotation médiale.</li>
<li>Le <strong>ligament croisé postérieur</strong> (LCP) : de l'<strong>aire intercondylaire postérieure</strong> à la face latérale du <strong>condyle médial</strong>, oblique en haut, en avant et médialement ; plus épais et plus solide que le LCA. Il s'oppose à la <strong>translation postérieure du tibia</strong> (tiroir postérieur). Les deux croisés sont <strong>intra-capsulaires mais extra-synoviaux</strong>, se croisent dans les plans sagittal et frontal, et restent tendus dans toutes les positions (pivot central).</li>
<li>Ligaments postérieurs : <strong>ligament poplité oblique</strong> (expansion du semi-membraneux) et <strong>ligament poplité arqué</strong>.</li>
</ul>
<h4>La synoviale et les bourses</h4>
<p>La synoviale est la plus étendue de l'organisme. Elle tapisse la capsule, se réfléchit en avant des croisés (qui sont donc hors de la cavité synoviale), forme le <strong>cul-de-sac supra-patellaire</strong> (bourse supra-patellaire communicante, sous le quadriceps, 4–5 cm au-dessus de la patella, siège de l'épanchement et du choc patellaire) et les <strong>plis alaires</strong> entourant le <strong>corps adipeux infra-patellaire</strong> (paquet de Hoffa). Bourses non communicantes : <strong>prépatellaire</strong> (sous-cutanée, hygroma du carreleur), infra-patellaires superficielle et profonde, bourse de la patte d'oie ; bourses communicantes : bourse du poplité, du semi-membraneux et du gastrocnémien médial (dont la distension forme le <strong>kyste poplité</strong> de Baker).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> LCA : tibia antérieur → fémur condyle latéral ; LCP : tibia postérieur → fémur condyle médial (« les croisés vont du tibia au condyle opposé à leur nom tibial »). Rupture du LCA : tiroir antérieur, test de Lachman positif, instabilité en pivot. Rupture du LCP : tiroir postérieur (choc du tableau de bord sur le tibia).</div>`
            },
            {
              titre: "Biomécanique du genou et axes du membre inférieur",
              contenu: `<h4>Flexion-extension</h4>
<p>Amplitude : flexion active 140°, passive 160° ; extension 0° (recurvatum pathologique au-delà de 5°). Le mouvement associe un <strong>roulement</strong> des condyles sur les plateaux (prédominant en début de flexion) et un <strong>glissement</strong> (prédominant ensuite), rendus nécessaires par la longueur des condyles supérieure à celle des plateaux. Les ligaments croisés guident ce roulement-glissement.</p>
<h4>Rotation</h4>
<p>La <strong>rotation axiale</strong> n'est possible que genou fléchi (collatéraux détendus) : rotation latérale 30–40°, médiale 10–15°, autour d'un axe vertical passant par le condyle tibial médial (le compartiment latéral, plus mobile, décrit l'essentiel du mouvement). La <strong>rotation automatique</strong> accompagne la fin d'extension : le tibia tourne latéralement de 5 à 10° (le condyle latéral, plus court, achève sa course avant le médial) et <strong>verrouille</strong> le genou en extension (mise en tension des ligaments et des coques). Le début de la flexion s'accompagne d'un déverrouillage par rotation médiale, assuré par le <strong>muscle poplité</strong> (fosse poplitée, nerf tibial), seul rotateur médial mono-articulaire.</p>
<table>
<thead><tr><th>Mouvement</th><th>Muscles</th></tr></thead>
<tbody>
<tr><td>Extension</td><td>Quadriceps (seul extenseur), aidé par le tenseur du fascia lata en fin d'extension</td></tr>
<tr><td>Flexion</td><td>Ischio-jambiers (semi-membraneux, semi-tendineux, biceps fémoral), gracile, sartorius, poplité, gastrocnémiens (accessoire)</td></tr>
<tr><td>Rotation médiale (genou fléchi)</td><td>Semi-membraneux, semi-tendineux, gracile, sartorius, poplité</td></tr>
<tr><td>Rotation latérale (genou fléchi)</td><td>Biceps fémoral (seul rotateur latéral), tenseur du fascia lata</td></tr>
</tbody>
</table>
<h4>Les axes du membre inférieur</h4>
<p>L'<strong>axe mécanique</strong> (ligne de charge) va du centre de la tête fémorale au centre de la cheville et passe par le centre du genou. L'<strong>axe anatomique</strong> du fémur (diaphyse) fait avec l'axe mécanique un angle de 6–9°, et avec l'axe du tibia un angle fémoro-tibial de <strong>170–175°</strong> ouvert latéralement : c'est le <strong>valgus physiologique</strong> du genou (3 à 7° chez l'adulte, plus marqué chez la femme). Chez l'enfant, un genu varum est physiologique jusqu'à 2 ans puis un genu valgum jusqu'à 6–7 ans. Le <strong>genu varum</strong> (jambes arquées) surcharge le compartiment médial (gonarthrose fémoro-tibiale médiale, la plus fréquente) ; le <strong>genu valgum</strong> surcharge le compartiment latéral et favorise l'instabilité patellaire.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'examen du genou recherche un épanchement (choc patellaire), une laxité frontale (varus/valgus forcé à 0° et 30° pour les collatéraux), un tiroir antérieur ou postérieur à 90° de flexion et un test de Lachman à 20° de flexion (LCA), un ressaut rotatoire (pivot shift) et des signes méniscaux (douleur à la palpation de l'interligne, grinding test, test de McMurray). L'IRM est l'examen clé des lésions ligamentaires et méniscales.</div>`
            }
          ],
          points_cles: [
            "La diaphyse fémorale est concave en arrière avec la ligne âpre (insertions des vastes, adducteurs, grand glutéal, court biceps) ; sa fracture saigne 1 à 1,5 L.",
            "Extrémité distale : deux condyles (le médial plus long et plus bas, le latéral plus large), fosse intercondylaire (LCP sur le condyle médial, LCA sur le latéral), surface patellaire à joue latérale plus haute.",
            "La patella est le plus grand sésamoïde, avec le cartilage le plus épais (6–7 mm) ; elle augmente le bras de levier du quadriceps ; luxation latérale.",
            "Plateau tibial : surface médiale concave, latérale convexe sagittalement ; éminence intercondylaire ; tubérosité tibiale (ligament patellaire), tubercule de Gerdy (tractus ilio-tibial).",
            "Trois loges de la cuisse : antérieure (quadriceps et sartorius, nerf fémoral), médiale (adducteurs, gracile, pectiné ; nerf obturateur), postérieure (ischio-jambiers, nerf sciatique).",
            "Le quadriceps est le seul extenseur du genou (réflexe L4) ; le chef court du biceps fémoral est innervé par le fibulaire commun ; le grand adducteur a une double innervation (obturateur et tibial).",
            "Patte d'oie : sartorius, gracile, semi-tendineux (nerfs fémoral, obturateur, tibial).",
            "Ménisque médial en C, fixe, adhérent au LCT, le plus souvent lésé ; ménisque latéral en O, mobile, séparé du LCF par le tendon du poplité.",
            "LCA : aire intercondylaire antérieure → condyle latéral, s'oppose au tiroir antérieur (Lachman) ; LCP : aire postérieure → condyle médial, s'oppose au tiroir postérieur ; croisés intra-capsulaires et extra-synoviaux.",
            "Genou bicondylaire : flexion 140°, rotation seulement genou fléchi ; rotation automatique latérale verrouillant l'extension ; valgus physiologique de 3–7° (angle fémoro-tibial 170–175°)."
          ],
          lexique: [
            { terme: "Ligne âpre", def: "Crête rugueuse du bord postérieur de la diaphyse fémorale, à deux lèvres, insertion des vastes, des adducteurs et du grand glutéal." },
            { terme: "Surface patellaire", def: "Trochlée de la face antérieure de l'extrémité distale du fémur, articulée avec la patella (joue latérale plus haute)." },
            { terme: "Fosse intercondylaire", def: "Échancrure postérieure entre les condyles fémoraux où s'insèrent les ligaments croisés." },
            { terme: "Tractus ilio-tibial", def: "Épaississement latéral du fascia lata, du tenseur du fascia lata et du grand glutéal au tubercule de Gerdy." },
            { terme: "Patte d'oie", def: "Insertion commune sur la face médiale du tibia des tendons du sartorius, du gracile et du semi-tendineux." },
            { terme: "Hiatus du grand adducteur", def: "Orifice entre les faisceaux du grand adducteur par lequel les vaisseaux fémoraux gagnent la fosse poplitée." },
            { terme: "Ménisque", def: "Fibrocartilage semi-lunaire interposé entre condyle fémoral et plateau tibial, vascularisé seulement à sa périphérie." },
            { terme: "Ligament croisé antérieur", def: "Ligament du pivot central allant de l'aire intercondylaire antérieure du tibia au condyle latéral du fémur, s'opposant au tiroir antérieur." },
            { terme: "Rotation automatique", def: "Rotation latérale de 5 à 10° du tibia en fin d'extension, verrouillant le genou." },
            { terme: "Genu varum / genu valgum", def: "Déviation du genou en dehors (jambes arquées) / en dedans (genoux cagneux) par rapport à l'axe mécanique." }
          ],
          qcm: [
            {
              q: "Concernant le fémur et la patella, quelles propositions sont exactes ?",
              options: [
                "A. La ligne âpre est située sur le bord postérieur de la diaphyse.",
                "B. Le condyle fémoral latéral descend plus bas que le médial.",
                "C. La patella est un os sésamoïde développé dans le tendon du quadriceps.",
                "D. Le ligament croisé antérieur s'insère sur la face latérale du condyle médial.",
                "E. Le cartilage de la patella est le plus épais de l'organisme."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : c'est le condyle médial qui est plus long et descend plus bas. D est fausse : le LCA s'insère sur la face médiale du condyle latéral ; c'est le LCP qui s'insère sur le condyle médial."
            },
            {
              q: "Concernant les muscles de la cuisse, quelles propositions sont exactes ?",
              options: [
                "A. Le quadriceps est le seul extenseur du genou.",
                "B. Le droit fémoral est aussi fléchisseur de la hanche.",
                "C. Le gracile est innervé par le nerf fémoral.",
                "D. Le chef court du biceps fémoral est innervé par le nerf fibulaire commun.",
                "E. Le grand adducteur reçoit une double innervation, obturateur et tibial."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le gracile appartient à la loge médiale et dépend du nerf obturateur."
            },
            {
              q: "Concernant la patte d'oie et les ischio-jambiers, quelles propositions sont exactes ?",
              options: [
                "A. La patte d'oie réunit le sartorius, le gracile et le semi-tendineux.",
                "B. Les trois muscles de la patte d'oie dépendent du même nerf.",
                "C. Le semi-membraneux se termine sur la tête de la fibula.",
                "D. Les ischio-jambiers sont extenseurs de la hanche et fléchisseurs du genou.",
                "E. Le biceps fémoral est rotateur latéral du genou."
              ],
              bonnes: [0, 3, 4],
              explication: "A, D et E sont vraies. B est fausse : sartorius (fémoral), gracile (obturateur), semi-tendineux (tibial). C est fausse : le semi-membraneux se termine sur le condyle médial du tibia ; c'est le biceps fémoral qui se termine sur la tête de la fibula."
            },
            {
              q: "Concernant les ménisques du genou, quelles propositions sont exactes ?",
              options: [
                "A. Le ménisque médial a une forme de C ouvert.",
                "B. Le ménisque latéral est adhérent au ligament collatéral fibulaire.",
                "C. Le ménisque médial est le plus souvent lésé.",
                "D. Les ménisques sont entièrement vascularisés.",
                "E. Les ménisques reculent sur les plateaux tibiaux lors de la flexion."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : le ménisque latéral est séparé du LCF par le tendon du poplité (c'est le ménisque médial qui adhère au LCT). D est fausse : seul le tiers périphérique est vascularisé."
            },
            {
              q: "Concernant les ligaments du genou, quelles propositions sont exactes ?",
              options: [
                "A. Le ligament croisé antérieur s'oppose à la translation antérieure du tibia.",
                "B. Le ligament croisé postérieur va de l'aire intercondylaire postérieure au condyle médial du fémur.",
                "C. Les ligaments croisés sont intra-synoviaux.",
                "D. Le ligament collatéral tibial s'oppose au valgus forcé.",
                "E. Les ligaments collatéraux sont tendus en extension."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : les croisés sont intra-capsulaires mais extra-synoviaux, la synoviale se réfléchissant en avant d'eux."
            },
            {
              q: "Concernant la biomécanique du genou, quelles propositions sont exactes ?",
              options: [
                "A. La rotation axiale du genou n'est possible que genou fléchi.",
                "B. La rotation automatique de fin d'extension est une rotation médiale du tibia.",
                "C. Le poplité déverrouille le genou en début de flexion.",
                "D. Le valgus physiologique du genou correspond à un angle fémoro-tibial de 170 à 175°.",
                "E. Le genu varum surcharge le compartiment fémoro-tibial latéral."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : la rotation automatique de fin d'extension est une rotation latérale du tibia. E est fausse : le genu varum surcharge le compartiment médial."
            },
            {
              q: "Concernant l'extrémité proximale du tibia et la pathologie du genou, quelles propositions sont exactes ?",
              options: [
                "A. La surface articulaire tibiale latérale est convexe dans le sens sagittal.",
                "B. La fibula participe à l'articulation du genou.",
                "C. Le tubercule de Gerdy reçoit le tractus ilio-tibial.",
                "D. Le test de Lachman explore le ligament croisé antérieur.",
                "E. Le kyste poplité correspond à la distension d'une bourse communicante postérieure."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la fibula s'articule seulement avec le tibia (tibio-fibulaire proximale) et ne participe pas au genou."
            }
          ]
        },
        {
          id: "jambe-cheville",
          titre: "Jambe et cheville",
          duree: 35,
          objectifs: [
            "Décrire le tibia, la fibula, les articulations tibio-fibulaires et la membrane interosseuse crurale.",
            "Décrire les trois loges de la jambe et leurs muscles (origine, terminaison, action, innervation), en particulier le triceps sural.",
            "Décrire l'articulation talo-crurale : surfaces, ligaments, mouvements et stabilité.",
            "Décrire les rétinaculums de la cheville et le canal tarsien.",
            "Relier l'anatomie aux entorses de cheville, aux fractures bimalléolaires et au syndrome des loges."
          ],
          sections: [
            {
              titre: "Le tibia",
              contenu: `<p>Le <strong>tibia</strong> est l'os <strong>médial</strong> de la jambe, le deuxième os le plus long du corps (environ 36 cm), seul à transmettre le poids du corps au pied. Sa diaphyse est prismatique triangulaire avec :</p>
<ul>
<li>un <strong>bord antérieur</strong> saillant, en S, <strong>sous-cutané</strong> sur toute sa longueur (crête tibiale, « le tibia »), qui descend de la tubérosité tibiale vers la malléole médiale ; sa situation explique la fréquence des fractures ouvertes ;</li>
<li>un <strong>bord médial</strong> et un <strong>bord interosseux</strong> latéral (membrane interosseuse) ;</li>
<li>une <strong>face médiale</strong> sous-cutanée (patte d'oie en haut), une <strong>face latérale</strong> (tibial antérieur) et une <strong>face postérieure</strong> marquée en haut par la <strong>ligne du muscle soléaire</strong>, oblique, sous laquelle s'insèrent le long fléchisseur des orteils (médialement) et le tibial postérieur (latéralement). Le foramen nourricier est sur la face postérieure, dirigé vers le bas.</li>
</ul>
<h4>L'extrémité distale</h4>
<p>Moins volumineuse que la proximale, quadrangulaire. Sa <strong>face inférieure</strong> est la surface articulaire inférieure, concave d'avant en arrière, plus large en avant, qui coiffe la trochlée du talus ; elle se prolonge médialement par la <strong>malléole médiale</strong>, saillie verticale sous-cutanée dont la face latérale est articulaire (joue médiale du talus) et dont la face postérieure est creusée d'un sillon pour les tendons du tibial postérieur et du long fléchisseur des orteils. La face latérale présente l'<strong>incisure fibulaire</strong>, rugueuse, pour la syndesmose tibio-fibulaire distale. La malléole médiale est plus antérieure et plus haute (d'environ 1 cm) que la malléole latérale.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les <strong>fractures de la diaphyse tibiale</strong> sont les plus fréquentes des os longs ; leur caractère souvent ouvert (bord antérieur sous-cutané) et la vascularisation précaire du tiers inférieur expliquent les retards de consolidation et les pseudarthroses. Le <strong>syndrome des loges</strong> de la jambe (loge antérieure surtout) est une complication redoutée des fractures et des efforts intenses.</div>`
            },
            {
              titre: "La fibula et les articulations tibio-fibulaires",
              contenu: `<p>La <strong>fibula</strong> (péroné) est l'os <strong>latéral</strong> de la jambe, long et grêle (environ 35 cm), qui ne supporte pratiquement pas de poids (environ 10 % de la charge) mais sert à l'insertion des muscles et à la stabilité latérale de la cheville. Elle peut être prélevée pour des greffes osseuses vascularisées.</p>
<ul>
<li>La <strong>tête de la fibula</strong> : extrémité proximale renflée, portant une facette articulaire pour le condyle latéral du tibia et un <strong>apex</strong> (processus styloïde) où s'insèrent le biceps fémoral et le ligament collatéral fibulaire ; le <strong>nerf fibulaire commun</strong> contourne son <strong>col</strong> en arrière et latéralement, sous-cutané : il y est très exposé.</li>
<li>La <strong>diaphyse</strong> : grêle, torsadée, avec un bord interosseux médial, et trois faces donnant insertion aux muscles des trois loges (face latérale : longs et court fibulaires ; face médiale : extenseurs ; face postérieure : soléaire, long fléchisseur de l'hallux, tibial postérieur).</li>
<li>La <strong>malléole latérale</strong> : extrémité distale aplatie, plus longue, plus postérieure et plus basse que la médiale ; sa face médiale articulaire répond à la joue latérale du talus ; sa face postérieure présente un sillon pour les tendons des fibulaires ; en arrière et en bas, la fosse de la malléole latérale reçoit le ligament talo-fibulaire postérieur.</li>
</ul>
<h4>Les articulations tibio-fibulaires</h4>
<ul>
<li>L'<strong>articulation tibio-fibulaire proximale</strong> : synoviale <strong>plane</strong>, entre la tête de la fibula et la face postéro-latérale du condyle latéral du tibia ; capsule et ligaments antérieur et postérieur de la tête fibulaire ; mobilité faible (glissements accompagnant la cheville). Indépendante du genou.</li>
<li>La <strong>membrane interosseuse crurale</strong> : syndesmose à fibres obliques en bas et latéralement (du tibia vers la fibula), séparant les loges antérieure et postérieure ; orifice supérieur pour l'artère tibiale antérieure, inférieur pour la branche perforante de l'artère fibulaire.</li>
<li>La <strong>syndesmose tibio-fibulaire distale</strong> : articulation <strong>fibreuse</strong> entre l'incisure fibulaire du tibia et la malléole latérale, unie par les ligaments <strong>tibio-fibulaires antérieur et postérieur</strong> et le ligament interosseux, très solides. Elle maintient l'écartement des malléoles (la « pince bimalléolaire ») et autorise un léger écartement en flexion dorsale (la trochlée du talus étant plus large en avant).</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la malléole latérale (fibulaire) descend <strong>plus bas</strong> et est <strong>plus postérieure</strong> que la malléole médiale ; c'est l'inverse qu'au poignet (styloïde radiale, latérale, plus basse mais tibia et radius ne sont pas homologues de position). Le nerf fibulaire commun au col de la fibula est l'équivalent du nerf radial au sillon huméral : lésion par fracture, plâtre ou compression (jambes croisées).</div>`
            },
            {
              titre: "Les loges musculaires de la jambe",
              contenu: `<p>Le fascia crural, les septums intermusculaires antérieur et postérieur (vers la fibula) et la membrane interosseuse délimitent <strong>trois loges</strong> (la postérieure étant subdivisée en superficielle et profonde par le fascia transverse profond) : <strong>antérieure</strong> (extenseurs et fléchisseurs dorsaux, <strong>nerf fibulaire profond</strong>), <strong>latérale</strong> (fibulaires, éverseurs, <strong>nerf fibulaire superficiel</strong>), <strong>postérieure</strong> (fléchisseurs plantaires, <strong>nerf tibial</strong>).</p>
<h4>Loge antérieure (nerf fibulaire profond, L4–S1 ; artère tibiale antérieure)</h4>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action</th></tr></thead>
<tbody>
<tr><td><strong>Tibial antérieur</strong></td><td>Condyle latéral et moitié supérieure de la face latérale du tibia, membrane interosseuse</td><td>Os cunéiforme médial et base du 1er métatarsien (face plantaire et médiale)</td><td><strong>Flexion dorsale</strong> (principal), <strong>inversion</strong> (supination-adduction) ; soutien de l'arche médiale</td></tr>
<tr><td><strong>Long extenseur de l'hallux</strong></td><td>Face médiale de la fibula (tiers moyen), membrane interosseuse</td><td>Base de la phalange distale de l'hallux</td><td>Extension de l'hallux, flexion dorsale ; test moteur de <strong>L5</strong></td></tr>
<tr><td><strong>Long extenseur des orteils</strong></td><td>Condyle latéral du tibia, face médiale de la fibula (trois quarts supérieurs), membrane</td><td>Quatre tendons pour les phalanges moyenne et distale des orteils II à V (dossière)</td><td>Extension des orteils, flexion dorsale, éversion</td></tr>
<tr><td><strong>Troisième fibulaire</strong></td><td>Tiers inférieur de la fibula (dépendance du long extenseur des orteils, inconstant)</td><td>Base du 5e métatarsien (face dorsale)</td><td>Flexion dorsale, éversion</td></tr>
</tbody>
</table>
<h4>Loge latérale (nerf fibulaire superficiel, L5–S1 ; artère fibulaire par perforantes)</h4>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action</th></tr></thead>
<tbody>
<tr><td><strong>Long fibulaire</strong></td><td>Tête et deux tiers supérieurs de la face latérale de la fibula</td><td>Passe en arrière de la malléole latérale, sous le cuboïde (sillon du long fibulaire), traverse obliquement la plante et se fixe sur la base du 1er métatarsien et le cunéiforme médial</td><td><strong>Éversion</strong> (pronation-abduction), flexion plantaire ; soutien actif des arches transversale et latérale (« étrier » du pied avec le tibial antérieur)</td></tr>
<tr><td><strong>Court fibulaire</strong></td><td>Deux tiers inférieurs de la face latérale de la fibula</td><td>Tubérosité de la base du 5e métatarsien</td><td>Éversion, flexion plantaire</td></tr>
</tbody>
</table>
<h4>Loge postérieure (nerf tibial, L4–S3 ; artère tibiale postérieure et fibulaire)</h4>
<table>
<thead><tr><th>Plan</th><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Superficiel</td><td><strong>Gastrocnémien</strong> (chefs médial et latéral)</td><td>Faces postérieures des condyles fémoraux médial et latéral (au-dessus des épicondyles)</td><td>Tendon calcanéen</td><td>Flexion plantaire (course, saut), fléchisseur accessoire du genou ; bi-articulaire, fibres rapides</td></tr>
<tr><td>Superficiel</td><td><strong>Soléaire</strong></td><td>Tête et quart supérieur de la face postérieure de la fibula, ligne du soléaire et bord médial du tibia, arcade tendineuse du soléaire (passage du pédicule tibial postérieur)</td><td>Tendon calcanéen</td><td>Flexion plantaire (station debout, marche), muscle postural tonique ; mono-articulaire</td></tr>
<tr><td>Superficiel</td><td><strong>Plantaire</strong></td><td>Ligne supra-condylaire latérale</td><td>Bord médial du tendon calcanéen</td><td>Accessoire, inconstant (grêle)</td></tr>
<tr><td>Profond</td><td><strong>Poplité</strong></td><td>Épicondyle latéral du fémur (tendon intra-capsulaire)</td><td>Face postérieure du tibia au-dessus de la ligne du soléaire</td><td>Rotation médiale du tibia, déverrouillage du genou, recul du ménisque latéral</td></tr>
<tr><td>Profond</td><td><strong>Long fléchisseur des orteils</strong></td><td>Face postérieure du tibia (sous la ligne du soléaire, partie médiale)</td><td>Phalanges distales des orteils II à V (après croisement du tendon du long fléchisseur de l'hallux : chiasma plantaire)</td><td>Flexion des orteils, flexion plantaire, inversion</td></tr>
<tr><td>Profond</td><td><strong>Tibial postérieur</strong></td><td>Face postérieure du tibia (partie latérale), membrane interosseuse, face médiale de la fibula ; le plus profond</td><td>Tubérosité de l'os naviculaire, avec expansions vers les cunéiformes et les bases des métatarsiens II–IV</td><td><strong>Inversion</strong> (principal), flexion plantaire ; soutien de l'arche médiale</td></tr>
<tr><td>Profond</td><td><strong>Long fléchisseur de l'hallux</strong></td><td>Deux tiers inférieurs de la face postérieure de la fibula</td><td>Phalange distale de l'hallux (passe sous le sustentaculum tali)</td><td>Flexion de l'hallux, propulsion du pas, flexion plantaire</td></tr>
</tbody>
</table>
<p>Le <strong>triceps sural</strong> réunit les deux gastrocnémiens et le soléaire sur le <strong>tendon calcanéen</strong> (tendon d'Achille), le plus volumineux et le plus résistant du corps (15 cm, résiste à 400 kg), qui se termine sur la moitié inférieure de la face postérieure du calcanéus (bourse rétro-calcanéenne). C'est le <strong>fléchisseur plantaire principal</strong> (réflexe achilléen : S1), propulseur de la marche. Dans la fosse poplitée puis sous l'arcade du soléaire, les tendons des muscles profonds passent en arrière de la malléole médiale, d'avant en arrière : <strong>T</strong>ibial postérieur, long fléchisseur des <strong>D</strong>oigts (orteils), artère, veines et nerf tibiaux, long fléchisseur de l'<strong>H</strong>allux (« Tom, Dick ANd Harry »).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> flexion dorsale = loge antérieure (fibulaire profond, L4–L5) ; éversion = loge latérale (fibulaire superficiel) ; flexion plantaire et inversion = loge postérieure (tibial, S1–S2). La paralysie du nerf fibulaire commun donne un <strong>pied tombant</strong> (steppage) ; celle du tibial un pied en talus avec perte de la marche sur la pointe.</div>`
            },
            {
              titre: "L'articulation talo-crurale (cheville)",
              contenu: `<p>L'articulation <strong>talo-crurale</strong> (tibio-tarsienne) est un <strong>ginglyme</strong> (trochléenne) à un degré de liberté unissant la <strong>mortaise tibio-fibulaire</strong> au <strong>tenon talien</strong>.</p>
<h4>Surfaces articulaires</h4>
<ul>
<li>La <strong>mortaise</strong> : surface articulaire inférieure du tibia (plafond), face articulaire de la malléole médiale (joue médiale, petite) et face articulaire de la malléole latérale (joue latérale, grande, descendant plus bas). Elle est solidarisée par la syndesmose tibio-fibulaire distale.</li>
<li>Le <strong>tenon</strong> : la <strong>trochlée du talus</strong>, convexe d'avant en arrière (poulie), légèrement concave transversalement, <strong>plus large en avant qu'en arrière</strong> (de 5 mm), avec deux joues (facettes malléolaires médiale et latérale). En flexion dorsale, la partie large s'engage dans la mortaise : position de stabilité maximale (la pince s'écarte légèrement). En flexion plantaire, la partie étroite laisse du jeu : position d'instabilité, où surviennent les entorses.</li>
</ul>
<h4>Moyens d'union</h4>
<ul>
<li>La <strong>capsule</strong> : lâche en avant et en arrière, renforcée latéralement.</li>
<li>Le <strong>ligament collatéral latéral</strong> : trois faisceaux indépendants partant de la malléole latérale : <strong>talo-fibulaire antérieur</strong> (LTFA, horizontal, vers le col du talus ; le plus faible, le premier rompu dans l'entorse en inversion), <strong>calcanéo-fibulaire</strong> (oblique en bas et en arrière vers la face latérale du calcanéus ; croisé par les tendons des fibulaires) et <strong>talo-fibulaire postérieur</strong> (horizontal, le plus solide, vers le tubercule latéral du talus).</li>
<li>Le <strong>ligament collatéral médial</strong> (ligament deltoïdien) : en éventail de la malléole médiale, avec une couche superficielle (tibio-naviculaire, tibio-calcanéenne vers le sustentaculum tali, tibio-talaire postérieure) et une couche profonde (tibio-talaire antérieure et postérieure). Très solide ; l'entorse en éversion est rare, l'arrachement de la malléole médiale plus fréquent.</li>
<li>Les ligaments tibio-fibulaires antérieur et postérieur (syndesmose).</li>
</ul>
<h4>Mouvements</h4>
<p>Autour d'un axe transversal légèrement oblique passant par les deux malléoles : <strong>flexion dorsale</strong> 20–30° (limitée par le contact du col du talus avec le tibia et la tension du triceps sural ; mesurée genou fléchi pour relâcher les gastrocnémiens) et <strong>flexion plantaire</strong> 40–50°. Les mouvements d'inversion-éversion et d'abduction-adduction se font dans les articulations sous-jacentes (subtalaire et transverse du tarse) et non dans la talo-crurale.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>entorse latérale de cheville</strong> (mouvement d'inversion en flexion plantaire, 6 000 cas par jour en France) touche d'abord le ligament talo-fibulaire antérieur, puis le calcanéo-fibulaire (entorse grave avec bâillement talien) ; les <strong>critères d'Ottawa</strong> guident la radiographie (douleur osseuse malléolaire, base du 5<sup>e</sup> métatarsien, naviculaire, impossibilité de faire 4 pas). Les <strong>fractures bimalléolaires</strong> (classification de Danis-Weber selon le niveau de la fracture fibulaire par rapport à la syndesmose) sont des fractures articulaires qui exigent une réduction anatomique de la mortaise.</div>`
            },
            {
              titre: "Les rétinaculums de la cheville et le canal tarsien",
              contenu: `<p>Au cou-de-pied, le fascia crural s'épaissit en <strong>rétinaculums</strong> qui plaquent les tendons longs contre le squelette lors des changements de direction.</p>
<ul>
<li>Les <strong>rétinaculums des extenseurs</strong> : supérieur (transversal, entre tibia et fibula au-dessus des malléoles) et inférieur (en Y, du calcanéus vers la malléole médiale et le naviculaire), sous lesquels passent, de médial en latéral : le tibial antérieur, le long extenseur de l'hallux, l'<strong>artère dorsale du pied</strong> (pédieuse) et le <strong>nerf fibulaire profond</strong>, le long extenseur des orteils et le troisième fibulaire. Le pouls pédieux se palpe sur le dos du pied, juste latéralement au tendon du long extenseur de l'hallux.</li>
<li>Les <strong>rétinaculums des fibulaires</strong> : supérieur (malléole latérale–calcanéus) et inférieur, maintenant les tendons des long et court fibulaires en arrière puis sous la malléole latérale (luxation des fibulaires en cas de rupture).</li>
<li>Le <strong>rétinaculum des fléchisseurs</strong> (ligament annulaire médial) : tendu de la malléole médiale au calcanéus (tubérosité médiale), il ferme le <strong>canal tarsien</strong> (tunnel tarsien), homologue du canal carpien, qui contient, d'avant en arrière : le tendon du <strong>tibial postérieur</strong> (dans son sillon malléolaire), le tendon du <strong>long fléchisseur des orteils</strong>, le <strong>pédicule tibial postérieur</strong> (artère tibiale postérieure, veines, <strong>nerf tibial</strong>, qui s'y divise en nerfs plantaires médial et latéral) et le tendon du <strong>long fléchisseur de l'hallux</strong>. Le pouls tibial postérieur se palpe à mi-chemin entre la malléole médiale et le tendon calcanéen.</li>
</ul>
<h4>La fosse poplitée (rappel topographique)</h4>
<p>Région losangique postérieure du genou, limitée en haut par le biceps fémoral (latéralement) et les semi-membraneux et semi-tendineux (médialement), en bas par les deux chefs du gastrocnémien ; plancher : surface poplitée du fémur, capsule, poplité. Contenu, de la profondeur vers la superficie et de médial en latéral : l'<strong>artère poplitée</strong> (la plus profonde, contre l'os : fractures supra-condyliennes, luxations), la <strong>veine poplitée</strong>, le <strong>nerf tibial</strong> (médian, superficiel) ; latéralement, le <strong>nerf fibulaire commun</strong> longe le tendon du biceps ; nœuds lymphatiques poplités, graisse, et la terminaison de la petite veine saphène.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>syndrome du canal tarsien</strong> (compression du nerf tibial sous le rétinaculum des fléchisseurs) donne des douleurs et paresthésies de la plante du pied, nocturnes, avec signe de Tinel rétro-malléolaire médial. La <strong>rupture du tendon calcanéen</strong> (sportif de 30–50 ans, claquement, impossibilité de monter sur la pointe) se diagnostique par le signe de Thompson (absence de flexion plantaire à la pression du mollet) et l'encoche palpable 3 à 6 cm au-dessus du calcanéus, zone hypovasculaire.</div>`
            }
          ],
          points_cles: [
            "Le tibia, os médial porteur, a un bord antérieur sous-cutané (fractures ouvertes) et une malléole médiale plus haute et plus antérieure ; la fibula, latérale, non porteuse, a une malléole latérale plus basse et plus postérieure.",
            "Le nerf fibulaire commun contourne le col de la fibula : lésion par fracture, plâtre ou compression, donnant un pied tombant (steppage).",
            "Trois loges : antérieure (tibial antérieur, extenseurs ; nerf fibulaire profond ; flexion dorsale), latérale (long et court fibulaires ; nerf fibulaire superficiel ; éversion), postérieure (triceps sural, poplité, tibial postérieur, fléchisseurs ; nerf tibial ; flexion plantaire, inversion).",
            "Le triceps sural (gastrocnémiens + soléaire) se termine par le tendon calcanéen, le plus résistant du corps ; réflexe achilléen S1 ; rupture : signe de Thompson.",
            "Le tibial antérieur est le principal fléchisseur dorsal et inverseur ; le tibial postérieur le principal inverseur ; le long fibulaire le principal éverseur et soutien de l'arche.",
            "La talo-crurale est un ginglyme : mortaise tibio-fibulaire et trochlée du talus, plus large en avant (stable en flexion dorsale, instable en flexion plantaire).",
            "Ligament collatéral latéral à trois faisceaux (talo-fibulaire antérieur le plus faible et premier rompu, calcanéo-fibulaire, talo-fibulaire postérieur) ; ligament collatéral médial deltoïdien très solide.",
            "Derrière la malléole médiale, dans le canal tarsien (rétinaculum des fléchisseurs), d'avant en arrière : tibial postérieur, long fléchisseur des orteils, pédicule tibial postérieur, long fléchisseur de l'hallux.",
            "Fosse poplitée : artère poplitée la plus profonde, veine, nerf tibial superficiel et médial, nerf fibulaire commun latéral le long du biceps."
          ],
          lexique: [
            { terme: "Ligne du muscle soléaire", def: "Crête oblique de la face postérieure du tibia donnant insertion au soléaire et séparant les insertions du poplité et des fléchisseurs profonds." },
            { terme: "Syndesmose tibio-fibulaire distale", def: "Articulation fibreuse unissant l'incisure fibulaire du tibia à la malléole latérale par les ligaments tibio-fibulaires, maintenant la pince bimalléolaire." },
            { terme: "Triceps sural", def: "Ensemble des deux gastrocnémiens et du soléaire, fléchisseur plantaire principal, terminé par le tendon calcanéen." },
            { terme: "Tendon calcanéen", def: "Tendon d'Achille, le plus volumineux du corps, du triceps sural à la face postérieure du calcanéus." },
            { terme: "Mortaise tibio-fibulaire", def: "Cavité formée par le plafond tibial et les deux malléoles, recevant la trochlée du talus." },
            { terme: "Ligament talo-fibulaire antérieur", def: "Faisceau antérieur du ligament collatéral latéral de la cheville, premier lésé dans l'entorse en inversion." },
            { terme: "Ligament deltoïdien", def: "Ligament collatéral médial de la cheville, en éventail de la malléole médiale vers le talus, le calcanéus et le naviculaire." },
            { terme: "Canal tarsien", def: "Tunnel rétro-malléolaire médial fermé par le rétinaculum des fléchisseurs, contenant les tendons fléchisseurs et le pédicule tibial postérieur." },
            { terme: "Steppage", def: "Démarche avec chute du pied et élévation exagérée du genou, par paralysie des releveurs (nerf fibulaire commun)." }
          ],
          qcm: [
            {
              q: "Concernant le tibia et la fibula, quelles propositions sont exactes ?",
              options: [
                "A. Le tibia est l'os latéral de la jambe.",
                "B. Le bord antérieur du tibia est sous-cutané.",
                "C. La malléole latérale descend plus bas que la malléole médiale.",
                "D. Le nerf fibulaire commun contourne le col de la fibula.",
                "E. La fibula supporte la majorité du poids du corps."
              ],
              bonnes: [1, 2, 3],
              explication: "A est fausse : le tibia est médial. B, C et D sont vraies. E est fausse : la fibula ne transmet qu'environ 10 % de la charge ; le tibia est l'os porteur."
            },
            {
              q: "Concernant la loge antérieure de la jambe, quelles propositions sont exactes ?",
              options: [
                "A. Elle est innervée par le nerf fibulaire superficiel.",
                "B. Le tibial antérieur se termine sur le cunéiforme médial et la base du premier métatarsien.",
                "C. Le tibial antérieur est fléchisseur dorsal et inverseur.",
                "D. Le long extenseur de l'hallux teste la racine L5.",
                "E. Elle est vascularisée par l'artère tibiale antérieure."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "B, C, D et E sont vraies. A est fausse : la loge antérieure dépend du nerf fibulaire profond ; le fibulaire superficiel innerve la loge latérale."
            },
            {
              q: "Concernant la loge postérieure de la jambe, quelles propositions sont exactes ?",
              options: [
                "A. Le triceps sural comprend les deux gastrocnémiens et le soléaire.",
                "B. Le soléaire est un muscle bi-articulaire.",
                "C. Le tibial postérieur se termine sur la tubérosité de l'os naviculaire.",
                "D. Le réflexe achilléen explore la racine S1.",
                "E. Le poplité est innervé par le nerf fibulaire commun."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : le soléaire naît sur le tibia et la fibula, il est mono-articulaire ; ce sont les gastrocnémiens qui sont bi-articulaires. E est fausse : le poplité est innervé par le nerf tibial."
            },
            {
              q: "Concernant la loge latérale de la jambe, quelles propositions sont exactes ?",
              options: [
                "A. Elle contient les muscles long et court fibulaires.",
                "B. Ses muscles sont éverseurs du pied.",
                "C. Le long fibulaire se termine sur la base du 5e métatarsien.",
                "D. Elle est innervée par le nerf fibulaire superficiel.",
                "E. Ses tendons passent en arrière de la malléole latérale."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le long fibulaire traverse la plante et se termine sur la base du 1er métatarsien et le cunéiforme médial ; c'est le court fibulaire qui se termine sur le 5e métatarsien."
            },
            {
              q: "Concernant l'articulation talo-crurale, quelles propositions sont exactes ?",
              options: [
                "A. C'est un ginglyme à un degré de liberté.",
                "B. La trochlée du talus est plus large en arrière qu'en avant.",
                "C. La cheville est plus stable en flexion dorsale.",
                "D. Le ligament talo-fibulaire antérieur est le premier lésé dans l'entorse en inversion.",
                "E. L'inversion et l'éversion se font dans la talo-crurale."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : la trochlée est plus large en avant. E est fausse : inversion et éversion se font dans les articulations subtalaire et transverse du tarse."
            },
            {
              q: "Concernant les rétinaculums et le canal tarsien, quelles propositions sont exactes ?",
              options: [
                "A. Le canal tarsien est fermé par le rétinaculum des fléchisseurs tendu de la malléole médiale au calcanéus.",
                "B. Le nerf tibial se divise dans le canal tarsien en nerfs plantaires médial et latéral.",
                "C. Le tendon du long fléchisseur de l'hallux est l'élément le plus antérieur du canal tarsien.",
                "D. L'artère dorsale du pied passe sous le rétinaculum des extenseurs, latéralement au tendon du long extenseur de l'hallux.",
                "E. Les tendons des fibulaires sont maintenus par les rétinaculums des fibulaires."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : l'élément le plus antérieur est le tendon du tibial postérieur ; le long fléchisseur de l'hallux est le plus postérieur."
            },
            {
              q: "Concernant la fosse poplitée et la pathologie de la jambe, quelles propositions sont exactes ?",
              options: [
                "A. L'artère poplitée est l'élément le plus profond de la fosse poplitée.",
                "B. Le nerf fibulaire commun longe le tendon du biceps fémoral.",
                "C. La rupture du tendon calcanéen se recherche par le signe de Thompson.",
                "D. La paralysie du nerf fibulaire commun donne un steppage.",
                "E. Le syndrome des loges touche préférentiellement la loge postérieure superficielle."
              ],
              bonnes: [0, 1, 2, 3],
              explication: "A, B, C et D sont vraies. E est fausse : le syndrome des loges touche le plus souvent la loge antérieure de la jambe, la plus inextensible."
            }
          ]
        },
        {
          id: "pied",
          titre: "Le pied",
          duree: 35,
          objectifs: [
            "Citer et situer les sept os du tarse, les métatarsiens et les phalanges.",
            "Décrire les articulations subtalaire, transverse du tarse (Chopart) et tarso-métatarsienne (Lisfranc), et les mouvements d'inversion-éversion.",
            "Décrire les arches plantaires et leurs moyens de soutien passifs et actifs.",
            "Décrire les muscles intrinsèques du pied par plans et leur innervation.",
            "Décrire la vascularisation et l'innervation plantaires et leurs applications (pied plat, pied creux, hallux valgus)."
          ],
          sections: [
            {
              titre: "Le squelette du pied",
              contenu: `<p>Le pied comprend <strong>26 os</strong> (plus deux sésamoïdes constants sous la tête du 1<sup>er</sup> métatarsien) : 7 os du tarse, 5 métatarsiens et 14 phalanges. Il est divisé en <strong>arrière-pied</strong> (talus, calcanéus), <strong>médio-pied</strong> (naviculaire, cuboïde, cunéiformes) et <strong>avant-pied</strong> (métatarsiens, phalanges).</p>
<h4>Le tarse postérieur</h4>
<ul>
<li>Le <strong>talus</strong> (astragale) : os intermédiaire entre la jambe et le pied, <strong>sans aucune insertion musculaire</strong> (il est entièrement entouré de surfaces articulaires et de ligaments). Il comprend un <strong>corps</strong> portant la <strong>trochlée</strong> (face supérieure, pour le tibia) et deux facettes malléolaires, un <strong>col</strong> rétréci (siège des fractures) et une <strong>tête</strong> antérieure arrondie pour l'os naviculaire. Sa face inférieure porte trois facettes pour le calcanéus (postérieure, moyenne, antérieure) séparées par le <strong>sillon du talus</strong>. Sa vascularisation est précaire (artères du sinus du tarse et du canal tarsien) : nécrose après fracture du col.</li>
<li>Le <strong>calcanéus</strong> (calcanéum) : le plus volumineux os du tarse, allongé, formant le <strong>talon</strong>. Face supérieure : trois facettes pour le talus et le <strong>sillon du calcanéus</strong> qui, avec celui du talus, forme le <strong>sinus du tarse</strong> (ligament talo-calcanéen interosseux). Face postérieure : <strong>tubérosité calcanéenne</strong> (tendon calcanéen). Face inférieure : processus médial et latéral de la tubérosité (origine de l'aponévrose plantaire et des muscles plantaires de la 1<sup>re</sup> couche). Face médiale : le <strong>sustentaculum tali</strong>, console osseuse qui soutient la tête du talus et sous lequel passe le tendon du long fléchisseur de l'hallux. Face latérale : trochlée fibulaire (tendons des fibulaires). Face antérieure : facette pour le cuboïde.</li>
</ul>
<h4>Le tarse antérieur</h4>
<ul>
<li>L'<strong>os naviculaire</strong> (scaphoïde tarsien) : médial, en forme de nacelle, concave en arrière (tête du talus), convexe en avant (trois cunéiformes) ; sa <strong>tubérosité</strong> médiale, palpable, reçoit le tibial postérieur.</li>
<li>Le <strong>cuboïde</strong> : latéral, entre calcanéus et bases des 4<sup>e</sup> et 5<sup>e</sup> métatarsiens ; sa face plantaire est creusée du <strong>sillon du long fibulaire</strong>.</li>
<li>Les trois <strong>os cunéiformes</strong> : <strong>médial</strong> (le plus grand, pour le 1<sup>er</sup> métatarsien ; insertions du tibial antérieur et du long fibulaire), <strong>intermédiaire</strong> (le plus petit, en retrait : « mortaise » de Lisfranc pour la base du 2<sup>e</sup> métatarsien) et <strong>latéral</strong> (3<sup>e</sup> métatarsien). En coin, ils forment la voûte transversale.</li>
</ul>
<h4>Métatarse et phalanges</h4>
<p>Cinq <strong>métatarsiens</strong> (base, corps, tête), numérotés de I à V du médial au latéral. Le 1<sup>er</sup> est le plus court et le plus épais (il supporte un tiers de la charge de l'avant-pied avec ses deux sésamoïdes) ; le 2<sup>e</sup> est le plus long et le plus fixe (encastré entre les cunéiformes) ; le 5<sup>e</sup> porte une <strong>tubérosité</strong> à sa base (court fibulaire), siège de fractures. Quatorze <strong>phalanges</strong> : deux pour l'hallux, trois pour les orteils II à V (la phalange moyenne du 5<sup>e</sup> est souvent fusionnée avec la distale).</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le talus ne reçoit <strong>aucun muscle</strong> ; le calcanéus est le plus gros os du tarse ; l'os naviculaire est <strong>médial</strong> et le cuboïde <strong>latéral</strong>. La fracture du calcanéus (chute de hauteur sur les talons) et celle de la base du 5<sup>e</sup> métatarsien (arrachement par le court fibulaire lors d'une inversion : pseudo-Jones) sont des classiques.</div>`
            },
            {
              titre: "Les articulations du pied",
              contenu: `<h4>L'articulation subtalaire (talo-calcanéenne)</h4>
<p>Entre la face inférieure du corps du talus et la face supérieure du calcanéus (facettes postérieures), articulation synoviale de type <strong>trochoïde modifiée</strong>, séparée de l'articulation talo-calcanéo-naviculaire par le <strong>sinus du tarse</strong> occupé par le puissant <strong>ligament talo-calcanéen interosseux</strong> (ligament en haie), pivot des mouvements. Elle permet les mouvements d'<strong>inversion</strong> et d'<strong>éversion</strong> du talon (environ 20° d'inversion, 10° d'éversion) autour d'un axe oblique (axe de Henke), qui adaptent le pied aux terrains irréguliers.</p>
<h4>L'articulation transverse du tarse (interligne de Chopart)</h4>
<p>Interligne en S italique couché, séparant le tarse postérieur du tarse antérieur, formé de deux articulations distinctes :</p>
<ul>
<li>l'<strong>articulation talo-calcanéo-naviculaire</strong> (médiale) : sphéroïde où la tête du talus s'enfonce dans une cavité formée par le naviculaire, le sustentaculum tali et le <strong>ligament calcanéo-naviculaire plantaire</strong> (ligament « en ressort », <em>spring ligament</em>), fibro-cartilagineux, qui soutient la tête du talus et dont la distension favorise le pied plat ;</li>
<li>l'<strong>articulation calcanéo-cuboïdienne</strong> (latérale) : en selle, renforcée par le <strong>ligament bifurqué</strong> (en Y, calcanéo-naviculaire et calcanéo-cuboïdien, « clé de Chopart ») et le <strong>ligament plantaire long</strong> (le plus long du pied, du calcanéus au cuboïde et aux bases des métatarsiens, formant un tunnel pour le long fibulaire).</li>
</ul>
<p>La transverse du tarse participe à l'inversion-éversion et aux mouvements d'<strong>adduction-abduction</strong> de l'avant-pied ; c'est un ancien site d'amputation (Chopart).</p>
<h4>L'articulation tarso-métatarsienne (interligne de Lisfranc)</h4>
<p>Ligne brisée entre les trois cunéiformes et le cuboïde d'une part, les bases des cinq métatarsiens d'autre part. Articulations <strong>planes</strong> peu mobiles, en trois colonnes (médiale : cunéiforme médial–M1 ; moyenne : cunéiformes intermédiaire et latéral–M2 et M3 ; latérale : cuboïde–M4 et M5). Le 2<sup>e</sup> métatarsien, enchâssé en retrait, est la clé de voûte ; le <strong>ligament de Lisfranc</strong> (cunéiforme médial–base de M2, interosseux) verrouille l'ensemble : sa rupture donne une fracture-luxation de Lisfranc (chute à cheval, accident de voiture).</p>
<h4>Avant-pied</h4>
<p>Les <strong>articulations métatarso-phalangiennes</strong> sont ellipsoïdes (extension 50–60°, essentielle au déroulement du pas ; flexion 30–40°), avec plaque plantaire et ligament métatarsien transverse profond ; celle de l'hallux comprend les deux sésamoïdes dans le tendon du court fléchisseur. Les <strong>interphalangiennes</strong> sont des ginglymes.</p>
<table>
<thead><tr><th>Mouvement</th><th>Articulations principales</th><th>Muscles</th></tr></thead>
<tbody>
<tr><td>Flexion dorsale / plantaire</td><td>Talo-crurale</td><td>Loge antérieure / triceps sural</td></tr>
<tr><td>Inversion (supination + adduction + flexion plantaire)</td><td>Subtalaire + transverse du tarse</td><td>Tibial antérieur, tibial postérieur</td></tr>
<tr><td>Éversion (pronation + abduction + flexion dorsale)</td><td>Subtalaire + transverse du tarse</td><td>Long et court fibulaires, troisième fibulaire</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la cheville (talo-crurale) ne fait que flexion dorsale et plantaire ; l'inversion et l'éversion se font sous le talus (subtalaire et Chopart). Le ligament calcanéo-naviculaire plantaire (en ressort) soutient la tête du talus : il est la clé passive de l'arche médiale.</div>`
            },
            {
              titre: "Les arches plantaires et la statique du pied",
              contenu: `<p>Le pied est une <strong>voûte</strong> reposant sur trois points d'appui : la tubérosité du calcanéus en arrière, la tête du 1<sup>er</sup> métatarsien (et ses sésamoïdes) en avant et médialement, la tête du 5<sup>e</sup> métatarsien en avant et latéralement. Entre ces points se tendent trois arches.</p>
<ul>
<li>L'<strong>arche longitudinale médiale</strong> : la plus haute (15–20 mm sous le naviculaire), formée du calcanéus, du talus (clé de voûte), du naviculaire, des trois cunéiformes et des métatarsiens I à III. Élastique, c'est l'arche d'amortissement et de propulsion. Soutiens passifs : ligament calcanéo-naviculaire plantaire, aponévrose plantaire, ligament plantaire long. Soutiens actifs : <strong>tibial postérieur</strong>, long fléchisseur de l'hallux, abducteur de l'hallux, tibial antérieur, long fibulaire.</li>
<li>L'<strong>arche longitudinale latérale</strong> : basse (3–5 mm), rigide, formée du calcanéus, du cuboïde et des métatarsiens IV et V ; arche d'appui. Soutiens : ligament plantaire long, ligament calcanéo-cuboïdien plantaire, court et long fibulaires, abducteur du 5<sup>e</sup> orteil.</li>
<li>L'<strong>arche transversale</strong> : au niveau des cunéiformes et du cuboïde (clé de voûte : cunéiforme intermédiaire) et des bases des métatarsiens ; elle s'aplatit en avant, les têtes métatarsiennes reposant toutes au sol à l'appui. Soutiens : long fibulaire (sangle sous-plantaire), adducteur de l'hallux (chef transverse), ligaments interosseux.</li>
</ul>
<p>L'<strong>aponévrose plantaire</strong> (fascia plantaire), épaisse lame fibreuse tendue de la tubérosité du calcanéus aux têtes métatarsiennes et aux gaines des fléchisseurs, agit comme la corde d'un arc (mécanisme de treuil lors de l'extension des orteils) ; elle protège les plans profonds et délimite trois loges plantaires (médiale, moyenne, latérale).</p>
<h4>Le pas</h4>
<p>Le déroulement du pas comprend l'attaque du talon (freinage par les releveurs en contraction excentrique), le plein appui plantaire (le pied s'aplatit, pronation), la propulsion sur l'avant-pied et l'hallux (triceps sural, long fléchisseur de l'hallux), puis la phase oscillante (releveurs). L'empreinte plantaire normale montre l'isthme latéral (environ un tiers de la largeur de l'avant-pied).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>pied plat</strong> (affaissement de l'arche médiale, valgus du talon, empreinte élargie) est physiologique chez l'enfant jusqu'à 5–6 ans ; chez l'adulte il peut traduire une insuffisance du tibial postérieur. Le <strong>pied creux</strong> (arche médiale exagérée, orteils en griffe) doit faire rechercher une maladie neurologique (Charcot-Marie-Tooth). L'<strong>aponévrosite plantaire</strong> (épine calcanéenne) donne une talalgie matinale. L'<strong>hallux valgus</strong> (déviation latérale de l'hallux avec saillie médiale de la tête de M1, « oignon ») est favorisé par le chaussage étroit et le metatarsus varus.</div>`
            },
            {
              titre: "Les muscles intrinsèques du pied",
              contenu: `<h4>Face dorsale</h4>
<p>Le <strong>court extenseur des orteils</strong> et le <strong>court extenseur de l'hallux</strong> (muscle pédieux) : du calcanéus (face supérieure, devant le sinus du tarse) aux tendons extenseurs des orteils I à IV ; innervés par le <strong>nerf fibulaire profond</strong>. Leur relief est palpable en avant de la malléole latérale.</p>
<h4>Face plantaire : quatre couches (nerfs plantaires médial et latéral, branches du tibial)</h4>
<table>
<thead><tr><th>Couche</th><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Innervation</th></tr></thead>
<tbody>
<tr><td>1re (superficielle)</td><td><strong>Abducteur de l'hallux</strong></td><td>Processus médial de la tubérosité calcanéenne, aponévrose</td><td>Base de P1 de l'hallux (bord médial), sésamoïde médial</td><td>Plantaire médial</td></tr>
<tr><td>1re</td><td><strong>Court fléchisseur des orteils</strong></td><td>Processus médial de la tubérosité calcanéenne, aponévrose</td><td>P2 des orteils II à V (perforé par les tendons du long fléchisseur, comme le fléchisseur superficiel de la main)</td><td>Plantaire médial</td></tr>
<tr><td>1re</td><td><strong>Abducteur du 5e orteil</strong></td><td>Processus latéral et médial de la tubérosité calcanéenne</td><td>Base de P1 du 5e orteil (bord latéral)</td><td>Plantaire latéral</td></tr>
<tr><td>2e</td><td><strong>Carré plantaire</strong> (chair carrée)</td><td>Face plantaire du calcanéus</td><td>Tendon du long fléchisseur des orteils (en redresse la direction oblique)</td><td>Plantaire latéral</td></tr>
<tr><td>2e</td><td><strong>Lombricaux</strong> (4)</td><td>Tendons du long fléchisseur des orteils</td><td>Bord médial de la dossière des orteils II à V</td><td>1er : plantaire médial ; 2e–4e : plantaire latéral</td></tr>
<tr><td>3e</td><td><strong>Court fléchisseur de l'hallux</strong></td><td>Cuboïde, cunéiforme latéral, tendon du tibial postérieur</td><td>Deux chefs sur la base de P1 de l'hallux, via les deux sésamoïdes</td><td>Plantaire médial</td></tr>
<tr><td>3e</td><td><strong>Adducteur de l'hallux</strong></td><td>Chef oblique : bases de M2–M4, ligament plantaire long ; chef transverse : ligaments plantaires des MTP III–V</td><td>Base de P1 de l'hallux (bord latéral), sésamoïde latéral</td><td>Plantaire latéral (branche profonde)</td></tr>
<tr><td>3e</td><td><strong>Court fléchisseur du 5e orteil</strong></td><td>Base de M5, ligament plantaire long</td><td>Base de P1 du 5e orteil</td><td>Plantaire latéral</td></tr>
<tr><td>4e (profonde)</td><td><strong>Interosseux plantaires</strong> (3)</td><td>Faces médiales de M3, M4, M5</td><td>Base de P1 et dossière des orteils III–V, côté médial</td><td>Plantaire latéral</td></tr>
<tr><td>4e</td><td><strong>Interosseux dorsaux</strong> (4)</td><td>Deux métatarsiens adjacents (bipennés)</td><td>Base de P1 et dossière : 1er sur le bord médial du 2e orteil, 2e–4e sur le bord latéral des orteils II–IV</td><td>Plantaire latéral</td></tr>
</tbody>
</table>
<p>L'<strong>axe du pied</strong> passe par le <strong>2<sup>e</sup> orteil</strong> : les interosseux plantaires rapprochent (adduction), les dorsaux écartent (abduction) les orteils de cet axe. Dans la 4<sup>e</sup> couche cheminent aussi les tendons du <strong>long fibulaire</strong> (oblique vers M1) et du <strong>tibial postérieur</strong>. Les muscles intrinsèques sont surtout des stabilisateurs de la voûte et des orteils lors de la propulsion. Le <strong>nerf plantaire médial</strong> est l'homologue du nerf médian (abducteur de l'hallux, court fléchisseur des orteils, court fléchisseur de l'hallux, 1<sup>er</sup> lombrical), le <strong>nerf plantaire latéral</strong> l'homologue de l'ulnaire (tous les autres).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la perte des intrinsèques (neuropathie diabétique, Charcot-Marie-Tooth) entraîne des <strong>orteils en griffe</strong> (hyperextension des MTP et flexion des IP, par prédominance des extrinsèques) et des zones d'hyperappui sous les têtes métatarsiennes (mal perforant plantaire du diabétique). Le <strong>névrome de Morton</strong> est une irritation du nerf digital plantaire commun du 3<sup>e</sup> espace sous le ligament intermétatarsien.</div>`
            },
            {
              titre: "Vascularisation et innervation du pied",
              contenu: `<h4>Artères</h4>
<ul>
<li>L'<strong>artère dorsale du pied</strong> (pédieuse), continuation de la tibiale antérieure en avant de la cheville, chemine sur le dos du pied latéralement au tendon du long extenseur de l'hallux (pouls pédieux), donne les artères tarsiennes, l'<strong>artère arquée</strong> (d'où les artères métatarsiennes dorsales) et plonge dans le 1<sup>er</sup> espace (artère plantaire profonde) pour rejoindre l'arcade plantaire.</li>
<li>L'<strong>artère tibiale postérieure</strong> se divise dans le canal tarsien en <strong>artère plantaire médiale</strong> (grêle, bord médial du pied) et <strong>artère plantaire latérale</strong> (volumineuse, qui croise la plante en profondeur sous le carré plantaire et forme l'<strong>arcade plantaire profonde</strong>, d'où naissent les artères métatarsiennes plantaires puis les artères digitales plantaires). Le pied, comme la main, est donc richement anastomosé.</li>
</ul>
<h4>Veines et lymphatiques</h4>
<p>Le <strong>réseau veineux dorsal du pied</strong> (arcade veineuse dorsale) donne naissance médialement à la <strong>grande veine saphène</strong> (passe en avant de la malléole médiale, site de perfusion de l'enfant) et latéralement à la <strong>petite veine saphène</strong> (passe en arrière de la malléole latérale). La <strong>semelle veineuse plantaire</strong> (de Lejars) est chassée à chaque pas vers les veines profondes. Les lymphatiques suivent la grande saphène vers les nœuds inguinaux superficiels, et la petite saphène vers les nœuds poplités.</p>
<h4>Innervation sensitive</h4>
<table>
<thead><tr><th>Territoire</th><th>Nerf</th><th>Origine</th></tr></thead>
<tbody>
<tr><td>Dos du pied (la plus grande partie)</td><td>Nerf fibulaire superficiel (nerfs cutanés dorsaux médial et intermédiaire)</td><td>Fibulaire commun (L5–S1)</td></tr>
<tr><td>1er espace interdigital (entre hallux et 2e orteil)</td><td><strong>Nerf fibulaire profond</strong> (zone autonome)</td><td>Fibulaire commun (L5)</td></tr>
<tr><td>Bord latéral du pied, 5e orteil</td><td>Nerf sural (cutané dorsal latéral)</td><td>Tibial (+ fibulaire commun) (S1)</td></tr>
<tr><td>Bord médial du pied jusqu'à la tête de M1</td><td>Nerf saphène</td><td>Fémoral (L4)</td></tr>
<tr><td>Plante : partie médiale et 3 orteils et demi médiaux</td><td>Nerf plantaire médial</td><td>Tibial (S1–S2)</td></tr>
<tr><td>Plante : partie latérale et 1 orteil et demi latéral</td><td>Nerf plantaire latéral</td><td>Tibial (S1–S2)</td></tr>
<tr><td>Talon</td><td>Rameaux calcanéens médiaux du tibial et latéraux du sural</td><td>Tibial, sural (S1)</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le pouls pédieux (artère dorsale du pied) se palpe latéralement au tendon du long extenseur de l'hallux, le pouls tibial postérieur derrière la malléole médiale ; leur abolition signe une artériopathie oblitérante. Dermatomes : face médiale du pied L4 (saphène), dos du pied et hallux L5, bord latéral et petit orteil S1 (sural).</div>`
            }
          ],
          points_cles: [
            "26 os : 7 os du tarse (talus, calcanéus, naviculaire, cuboïde, trois cunéiformes), 5 métatarsiens, 14 phalanges, plus les deux sésamoïdes de l'hallux.",
            "Le talus ne reçoit aucune insertion musculaire et a une vascularisation précaire ; le calcanéus est le plus volumineux os du tarse, le sustentaculum tali soutient la tête du talus.",
            "L'os naviculaire est médial (tubérosité : tibial postérieur), le cuboïde latéral (sillon du long fibulaire) ; le cunéiforme intermédiaire est en retrait et encastre le 2e métatarsien (clé de Lisfranc).",
            "La subtalaire et la transverse du tarse (Chopart : talo-calcanéo-naviculaire + calcanéo-cuboïdienne) assurent l'inversion et l'éversion ; la Lisfranc (tarso-métatarsienne) est plane et peu mobile.",
            "Le ligament calcanéo-naviculaire plantaire (en ressort) soutient la tête du talus ; le ligament talo-calcanéen interosseux occupe le sinus du tarse ; le ligament bifurqué est la clé de Chopart.",
            "Trois arches : longitudinale médiale (haute, élastique, soutenue par le tibial postérieur), longitudinale latérale (basse, rigide), transversale (long fibulaire) ; l'aponévrose plantaire est la corde de l'arc.",
            "Muscles plantaires en quatre couches, innervés par les nerfs plantaires médial (homologue du médian) et latéral (homologue de l'ulnaire) ; muscles dorsaux (courts extenseurs) par le fibulaire profond.",
            "L'axe du pied passe par le 2e orteil ; interosseux plantaires adducteurs, dorsaux abducteurs.",
            "Artère dorsale du pied (pouls pédieux, latéral au long extenseur de l'hallux) et artères plantaires médiale et latérale (arcade plantaire) ; grande saphène devant la malléole médiale, petite saphène derrière la latérale.",
            "Sensibilité : fibulaire superficiel (dos du pied), fibulaire profond (1er espace), sural (bord latéral), saphène (bord médial), plantaires médial et latéral (plante)."
          ],
          lexique: [
            { terme: "Talus", def: "Os du tarse postérieur articulé avec la mortaise tibio-fibulaire, le calcanéus et le naviculaire, dépourvu d'insertion musculaire (astragale)." },
            { terme: "Sustentaculum tali", def: "Console de la face médiale du calcanéus soutenant la tête du talus, sous laquelle passe le long fléchisseur de l'hallux." },
            { terme: "Sinus du tarse", def: "Canal formé par les sillons du talus et du calcanéus, contenant le ligament talo-calcanéen interosseux." },
            { terme: "Interligne de Chopart", def: "Articulation transverse du tarse réunissant la talo-calcanéo-naviculaire et la calcanéo-cuboïdienne." },
            { terme: "Interligne de Lisfranc", def: "Articulation tarso-métatarsienne entre les cunéiformes, le cuboïde et les bases des métatarsiens." },
            { terme: "Ligament calcanéo-naviculaire plantaire", def: "Ligament en ressort soutenant la tête du talus et l'arche médiale (spring ligament)." },
            { terme: "Aponévrose plantaire", def: "Lame fibreuse tendue du calcanéus aux têtes métatarsiennes, corde de l'arc plantaire." },
            { terme: "Carré plantaire", def: "Muscle de la 2e couche plantaire redressant la direction du tendon du long fléchisseur des orteils (chair carrée de Sylvius)." },
            { terme: "Hallux valgus", def: "Déviation latérale de l'hallux avec saillie médiale de la tête du premier métatarsien." },
            { terme: "Névrome de Morton", def: "Irritation du nerf digital plantaire commun, le plus souvent du 3e espace intermétatarsien." }
          ],
          qcm: [
            {
              q: "Concernant les os du pied, quelles propositions sont exactes ?",
              options: [
                "A. Le talus ne reçoit aucune insertion musculaire.",
                "B. Le calcanéus est le plus volumineux os du tarse.",
                "C. L'os naviculaire est situé sur le bord latéral du pied.",
                "D. Le sustentaculum tali appartient au calcanéus.",
                "E. Le 2e métatarsien est le plus mobile."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : le naviculaire est médial, le cuboïde est latéral. E est fausse : le 2e métatarsien, encastré entre les cunéiformes, est le plus fixe ; c'est la clé de la Lisfranc."
            },
            {
              q: "Concernant les articulations du pied, quelles propositions sont exactes ?",
              options: [
                "A. L'inversion et l'éversion se font principalement dans l'articulation subtalaire et l'articulation transverse du tarse.",
                "B. L'interligne de Chopart sépare le tarse du métatarse.",
                "C. Le ligament calcanéo-naviculaire plantaire soutient la tête du talus.",
                "D. Le ligament bifurqué est la clé de l'interligne de Chopart.",
                "E. Les articulations tarso-métatarsiennes sont très mobiles."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : Chopart sépare le tarse postérieur du tarse antérieur ; c'est Lisfranc qui sépare le tarse du métatarse. E est fausse : les tarso-métatarsiennes sont planes et peu mobiles."
            },
            {
              q: "Concernant les arches plantaires, quelles propositions sont exactes ?",
              options: [
                "A. L'arche longitudinale médiale est plus haute que la latérale.",
                "B. Le tibial postérieur est un soutien actif majeur de l'arche médiale.",
                "C. L'aponévrose plantaire s'étend du calcanéus aux têtes métatarsiennes.",
                "D. Le pied plat est pathologique dès l'âge de 2 ans.",
                "E. Le long fibulaire soutient l'arche transversale."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : le pied plat est physiologique chez le jeune enfant jusqu'à 5–6 ans."
            },
            {
              q: "Concernant les muscles intrinsèques du pied, quelles propositions sont exactes ?",
              options: [
                "A. Les courts extenseurs des orteils sont innervés par le nerf fibulaire profond.",
                "B. L'abducteur de l'hallux est innervé par le nerf plantaire latéral.",
                "C. Le carré plantaire s'insère sur le tendon du long fléchisseur des orteils.",
                "D. L'axe du pied passe par le 2e orteil.",
                "E. Tous les interosseux du pied sont innervés par le nerf plantaire latéral."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : l'abducteur de l'hallux est innervé par le nerf plantaire médial (homologue du médian)."
            },
            {
              q: "Concernant la vascularisation et l'innervation du pied, quelles propositions sont exactes ?",
              options: [
                "A. L'artère dorsale du pied continue l'artère tibiale antérieure.",
                "B. Le pouls pédieux se palpe médialement au tendon du tibial antérieur.",
                "C. La grande veine saphène passe en avant de la malléole médiale.",
                "D. Le premier espace interdigital est innervé par le nerf fibulaire profond.",
                "E. Le bord latéral du pied est innervé par le nerf sural."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le pouls pédieux se palpe latéralement au tendon du long extenseur de l'hallux."
            },
            {
              q: "Concernant la pathologie du pied, quelles propositions sont exactes ?",
              options: [
                "A. La fracture du col du talus expose à la nécrose du corps du talus.",
                "B. La fracture de la base du 5e métatarsien est souvent un arrachement par le court fibulaire.",
                "C. L'hallux valgus est une déviation médiale de l'hallux.",
                "D. Le pied creux doit faire rechercher une maladie neurologique.",
                "E. Le névrome de Morton siège le plus souvent dans le 3e espace intermétatarsien."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : l'hallux valgus est une déviation latérale de l'hallux (vers les autres orteils) avec saillie médiale de la tête de M1."
            }
          ]
        },
        {
          id: "vaisseaux-nerfs-membre-inferieur",
          titre: "Vaisseaux et nerfs du membre inférieur",
          duree: 45,
          objectifs: [
            "Décrire la constitution des plexus lombal et sacral et leurs branches.",
            "Décrire le trajet, les rapports et les territoires des nerfs fémoral, obturateur, sciatique, tibial et fibulaire commun.",
            "Décrire les artères fémorale, poplitée, tibiales et dorsale du pied et leurs branches.",
            "Décrire les réseaux veineux superficiel (saphènes) et profond et le drainage lymphatique.",
            "Reconnaître les principales atteintes nerveuses et vasculaires du membre inférieur (sciatique, pied tombant, phlébite, artériopathie)."
          ],
          sections: [
            {
              titre: "Le plexus lombal",
              contenu: `<p>Le <strong>plexus lombal</strong> est formé par les <strong>rameaux antérieurs de L1 à L4</strong> (avec une contribution de T12 par le nerf subcostal), dans l'épaisseur du <strong>muscle grand psoas</strong>, en avant des processus costiformes. Ses branches émergent par les bords du psoas.</p>
<table>
<thead><tr><th>Nerf</th><th>Racines</th><th>Trajet</th><th>Territoire</th></tr></thead>
<tbody>
<tr><td><strong>Ilio-hypogastrique</strong></td><td>L1</td><td>Bord latéral du psoas, paroi abdominale entre transverse et oblique interne</td><td>Muscles larges de l'abdomen ; peau de la région inguinale et de la fesse (rameau latéral)</td></tr>
<tr><td><strong>Ilio-inguinal</strong></td><td>L1</td><td>Parallèle au précédent, traverse le canal inguinal</td><td>Peau de la racine de la cuisse, du scrotum ou des grandes lèvres</td></tr>
<tr><td><strong>Génito-fémoral</strong></td><td>L1–L2</td><td>Perfore le psoas et descend sur sa face antérieure</td><td>Rameau génital : crémaster, scrotum ; rameau fémoral : peau du trigone fémoral (réflexe crémastérien)</td></tr>
<tr><td><strong>Cutané latéral de la cuisse</strong></td><td>L2–L3</td><td>Bord latéral du psoas, croise la fosse iliaque, passe sous le ligament inguinal près de l'EIAS</td><td>Peau de la face latérale de la cuisse (méralgie paresthésique par compression à l'EIAS)</td></tr>
<tr><td><strong>Fémoral</strong></td><td>L2–L4</td><td>Bord latéral du psoas, lacune musculaire, trigone fémoral (latéral à l'artère)</td><td>Loge antérieure de la cuisse ; peau antérieure et médiale de la cuisse, jambe et pied médiaux (saphène)</td></tr>
<tr><td><strong>Obturateur</strong></td><td>L2–L4</td><td>Bord médial du psoas, paroi latérale du pelvis, canal obturateur</td><td>Loge médiale de la cuisse ; peau de la face médiale de la cuisse</td></tr>
<tr><td><strong>Tronc lombo-sacral</strong></td><td>L4–L5</td><td>Descend en avant de l'aile du sacrum pour rejoindre le plexus sacral</td><td>—</td></tr>
</tbody>
</table>
<h4>Le nerf fémoral (L2–L4)</h4>
<p>Le plus volumineux du plexus lombal. Il descend dans le sillon entre le psoas et l'iliaque, passe <strong>sous le ligament inguinal</strong> dans la lacune musculaire, <strong>latéralement à l'artère fémorale</strong> et en dehors de la gaine vasculaire, et se divise 3 à 4 cm plus bas dans le trigone fémoral en nombreuses branches : <strong>nerfs musculaires</strong> pour le quadriceps, le sartorius, le pectiné (et l'iliaque dans l'abdomen), <strong>nerfs cutanés antérieurs</strong> de la cuisse, et le <strong>nerf saphène</strong>, sa branche terminale sensitive la plus longue, qui descend dans le canal des adducteurs avec l'artère fémorale, émerge entre sartorius et gracile au genou (rameau infra-patellaire), puis accompagne la grande veine saphène le long de la face médiale de la jambe jusqu'au bord médial du pied. Fonctions : <strong>extension du genou</strong>, flexion de la hanche ; <strong>réflexe patellaire</strong> (L4). Lésion (hématome du psoas sous anticoagulants, chirurgie de hanche, diabète) : dérobement du genou, amyotrophie du quadriceps, abolition du réflexe patellaire, hypoesthésie antéro-médiale de la cuisse et de la jambe.</p>
<h4>Le nerf obturateur (L2–L4)</h4>
<p>Il descend le long de la paroi latérale du pelvis (sous les vaisseaux iliaques, au contact de l'ovaire chez la femme), traverse le <strong>canal obturateur</strong> avec l'artère obturatrice et se divise en une branche antérieure (long et court adducteurs, gracile, peau de la face médiale de la cuisse) et une branche postérieure (obturateur externe, grand adducteur). Fonction : <strong>adduction de la cuisse</strong>. Sa lésion (hernie obturatrice, tumeur pelvienne, accouchement) donne une faiblesse de l'adduction et des douleurs de la face médiale de la cuisse ; une douleur de hanche irradiant au genou passe par lui (innervation articulaire commune, loi de Hilton).</p>`
            },
            {
              titre: "Le plexus sacral et le nerf sciatique",
              contenu: `<p>Le <strong>plexus sacral</strong> est formé par le <strong>tronc lombo-sacral (L4–L5)</strong> et les rameaux antérieurs de <strong>S1, S2 et S3</strong> (avec une partie de S4), sur la face antérieure du <strong>muscle piriforme</strong>, en arrière du rectum et des vaisseaux iliaques internes. Ses branches sortent du pelvis par le <strong>grand foramen ischiatique</strong>.</p>
<table>
<thead><tr><th>Nerf</th><th>Racines</th><th>Sortie</th><th>Territoire</th></tr></thead>
<tbody>
<tr><td><strong>Glutéal supérieur</strong></td><td>L4–S1</td><td>Espace supra-piriforme</td><td>Moyen et petit glutéaux, tenseur du fascia lata</td></tr>
<tr><td><strong>Glutéal inférieur</strong></td><td>L5–S2</td><td>Espace infra-piriforme</td><td>Grand glutéal</td></tr>
<tr><td><strong>Sciatique</strong></td><td>L4–S3</td><td>Espace infra-piriforme</td><td>Loge postérieure de la cuisse, jambe et pied</td></tr>
<tr><td><strong>Cutané postérieur de la cuisse</strong></td><td>S1–S3</td><td>Espace infra-piriforme</td><td>Peau de la fesse (bas), de la face postérieure de la cuisse et du creux poplité</td></tr>
<tr><td><strong>Pudendal</strong></td><td>S2–S4</td><td>Espace infra-piriforme puis petit foramen ischiatique</td><td>Périnée (muscles et peau), organes génitaux externes, sphincters</td></tr>
<tr><td>Nerfs du piriforme, de l'obturateur interne, du carré fémoral</td><td>L4–S2</td><td>—</td><td>Pelvi-trochantériens</td></tr>
</tbody>
</table>
<h4>Le nerf sciatique (ischiatique, L4–S3)</h4>
<p>Le <strong>plus gros nerf de l'organisme</strong> (1,5 à 2 cm de large à son origine). Il sort du pelvis par l'espace infra-piriforme, descend dans la fesse sous le grand glutéal, à <strong>mi-distance entre la tubérosité ischiatique et le grand trochanter</strong>, en croisant la face postérieure des pelvi-trochantériens (jumeaux, obturateur interne, carré fémoral) ; puis dans la loge postérieure de la cuisse, sous le chef long du biceps fémoral, sur le grand adducteur. Il innerve les <strong>ischio-jambiers</strong> (semi-tendineux, semi-membraneux, chef long du biceps par sa composante tibiale ; chef court du biceps par sa composante fibulaire) et le faisceau vertical du grand adducteur. Il se divise, le plus souvent au <strong>sommet de la fosse poplitée</strong> (parfois dès le pelvis : nerf fibulaire commun traversant alors le piriforme), en <strong>nerf tibial</strong> et <strong>nerf fibulaire commun</strong>. Aucune branche cutanée propre à la cuisse.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>sciatique</strong> commune est une douleur radiculaire par conflit disco-radiculaire (hernie discale L4–L5 comprimant la racine <strong>L5</strong> : douleur de la face postéro-latérale de la cuisse, latérale de la jambe, dos du pied et gros orteil, déficit des releveurs ; hernie L5–S1 comprimant la racine <strong>S1</strong> : face postérieure de la cuisse et de la jambe, talon, bord latéral du pied et petit orteil, abolition du réflexe achilléen, déficit du triceps sural). Signe de Lasègue : douleur à l'élévation du membre tendu. La lésion tronculaire du sciatique (injection intra-fessière, luxation de hanche, chirurgie) paralyse tous les muscles sous le genou et les ischio-jambiers.</div>`
            },
            {
              titre: "Nerfs tibial et fibulaire commun",
              contenu: `<h4>Le nerf tibial (L4–S3)</h4>
<p>Branche de division médiale et principale du sciatique, il traverse verticalement la <strong>fosse poplitée</strong> (élément le plus superficiel et latéral du pédicule, puis médial), passe sous l'<strong>arcade du soléaire</strong> avec l'artère tibiale postérieure, descend dans la <strong>loge postérieure profonde</strong> entre le long fléchisseur des orteils et le long fléchisseur de l'hallux, sur le tibial postérieur, et gagne le <strong>canal tarsien</strong> derrière la malléole médiale, où il se divise en <strong>nerfs plantaires médial et latéral</strong>. Branches : nerfs des gastrocnémiens, du soléaire, du plantaire, du poplité (dans la fosse poplitée), des muscles profonds ; le <strong>nerf cutané sural médial</strong>, qui s'unit au rameau communicant fibulaire pour former le <strong>nerf sural</strong> (face postéro-latérale de la jambe, bord latéral du pied et 5<sup>e</sup> orteil, avec la petite veine saphène) ; rameaux calcanéens médiaux (talon). Fonctions : <strong>flexion plantaire</strong>, <strong>inversion</strong>, flexion des orteils, muscles intrinsèques plantaires ; sensibilité de la plante. Réflexe achilléen S1. Lésion : pied en talus (flexion dorsale, éversion), impossibilité de marcher sur la pointe, orteils en griffe par déséquilibre, anesthésie plantaire (plaies, causalgie).</p>
<h4>Le nerf fibulaire commun (L4–S2)</h4>
<p>Branche de division latérale, plus petite, il longe le bord médial du <strong>tendon du biceps fémoral</strong> dans la fosse poplitée, croise le chef latéral du gastrocnémien, contourne le <strong>col de la fibula</strong> (où il est <strong>sous-cutané</strong>, palpable et vulnérable), traverse le long fibulaire et se divise en :</p>
<ul>
<li>le <strong>nerf fibulaire superficiel</strong> : descend dans la loge latérale, innerve les <strong>long et court fibulaires</strong>, perfore le fascia au tiers inférieur de la jambe et donne les nerfs cutanés dorsaux médial et intermédiaire pour la face antéro-latérale de la jambe et la plus grande partie du <strong>dos du pied</strong> ;</li>
<li>le <strong>nerf fibulaire profond</strong> : perfore le septum antérieur, descend dans la <strong>loge antérieure</strong> avec l'artère tibiale antérieure (sur la membrane interosseuse), innerve le tibial antérieur, les longs extenseurs de l'hallux et des orteils et le troisième fibulaire, passe sous les rétinaculums des extenseurs, innerve les courts extenseurs et se termine par le nerf cutané du <strong>1<sup>er</sup> espace interdigital</strong>.</li>
</ul>
<p>Au genou, le nerf fibulaire commun donne aussi le nerf cutané sural latéral (face latérale de la jambe) et le rameau communicant fibulaire. Fonctions : <strong>flexion dorsale</strong> (releveurs), <strong>éversion</strong>, extension des orteils.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la paralysie du nerf fibulaire commun (compression au col de la fibula par un plâtre, une position jambes croisées prolongée, un alitement, une fracture de la tête fibulaire, un traumatisme du genou) est la mononeuropathie la plus fréquente du membre inférieur : <strong>pied tombant</strong> en équin-varus, <strong>steppage</strong> (le patient relève le genou pour ne pas accrocher la pointe du pied), impossibilité de marcher sur les talons, hypoesthésie du dos du pied et de la face latérale de la jambe. Elle se distingue d'une atteinte radiculaire L5 par l'intégrité du moyen glutéal et du tibial postérieur (inversion conservée).</div>`
            },
            {
              titre: "Les artères du membre inférieur",
              contenu: `<h4>L'artère fémorale</h4>
<p>Continuation de l'<strong>artère iliaque externe</strong> à partir du <strong>ligament inguinal</strong> (milieu de la ligne EIAS–tubercule pubien : pouls fémoral), elle descend dans le trigone fémoral (entre le nerf, latéral, et la veine, médiale) puis dans le <strong>canal des adducteurs</strong> sous le sartorius, et traverse le <strong>hiatus du grand adducteur</strong> pour devenir l'artère poplitée. Branches : artères épigastrique superficielle, circonflexe iliaque superficielle, pudendales externes, et surtout l'<strong>artère fémorale profonde</strong>, née 4 cm sous le ligament inguinal sur sa face postéro-latérale : elle donne les <strong>artères circonflexes médiale</strong> (vers le col fémoral et la tête : artères rétinaculaires) <strong>et latérale</strong> de la cuisse (quadriceps, anastomoses avec la fessière), puis trois ou quatre <strong>artères perforantes</strong> qui traversent le grand adducteur pour vasculariser la loge postérieure. La fémorale (superficielle) ne donne pratiquement pas de branches musculaires à la cuisse en dehors de l'<strong>artère descendante du genou</strong>. L'anastomose cruciforme de la fesse (circonflexes, 1<sup>re</sup> perforante, glutéale inférieure) permet une suppléance en cas d'occlusion fémorale.</p>
<h4>L'artère poplitée</h4>
<p>Du hiatus du grand adducteur à l'<strong>arcade du soléaire</strong>, au fond de la fosse poplitée, contre le plan osseux (surface poplitée du fémur, capsule, poplité) : c'est l'élément le plus profond, menacé par les fractures supra-condyliennes et les luxations du genou. Elle donne cinq <strong>artères du genou</strong> (supérieures médiale et latérale, moyenne, inférieures médiale et latérale, formant le réseau anastomotique péri-articulaire) et les artères surales (gastrocnémiens). Pouls poplité : genou fléchi, palpation profonde. Elle se divise en artères tibiale antérieure et tibiale postérieure (tronc tibio-fibulaire).</p>
<h4>Les artères de la jambe et du pied</h4>
<ul>
<li>L'<strong>artère tibiale antérieure</strong> : traverse l'orifice supérieur de la membrane interosseuse, descend sur sa face antérieure dans la loge antérieure avec le nerf fibulaire profond, entre tibial antérieur et long extenseur de l'hallux, puis devient l'<strong>artère dorsale du pied</strong> sous le rétinaculum des extenseurs (pouls pédieux). Branches : récurrentes tibiales, malléolaires.</li>
<li>L'<strong>artère tibiale postérieure</strong> : la plus volumineuse, descend dans la loge postérieure profonde avec le nerf tibial, entre long fléchisseur des orteils et long fléchisseur de l'hallux, passe dans le canal tarsien (pouls tibial postérieur) et se divise en <strong>artères plantaires médiale et latérale</strong>. Elle donne l'<strong>artère fibulaire</strong> (péronière), qui descend le long de la fibula sous le long fléchisseur de l'hallux, vascularise la loge latérale par des perforantes et la malléole latérale, et s'anastomose avec les tibiales (branche perforante traversant la membrane interosseuse). L'artère nourricière du tibia, la plus volumineuse du corps, naît de la tibiale postérieure.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>artériopathie oblitérante des membres inférieurs</strong> (athérome, tabac, diabète) donne une claudication intermittente (douleur du mollet à la marche cédant au repos, pour une sténose fémoro-poplitée ; de la fesse et de la cuisse pour une atteinte aorto-iliaque), une abolition des pouls distaux, puis des douleurs de décubitus et des troubles trophiques. L'index de pression systolique (cheville/bras) inférieur à 0,9 la confirme. L'artère fémorale est la voie d'abord des cathétérismes et des angioplasties.</div>`
            },
            {
              titre: "Veines et lymphatiques du membre inférieur",
              contenu: `<h4>Le réseau veineux profond</h4>
<p>Veines satellites des artères, <strong>doubles</strong> à la jambe (veines tibiales antérieures, tibiales postérieures, fibulaires), se réunissant en une <strong>veine poplitée</strong> (en arrière et latéralement par rapport à l'artère), puis <strong>veine fémorale</strong> (médiale à l'artère au trigone, postérieure dans le canal des adducteurs ; reçoit la veine fémorale profonde et la grande saphène), qui devient la <strong>veine iliaque externe</strong> sous le ligament inguinal. Les <strong>veines musculaires</strong> du mollet (soléaires, gastrocnémiennes) sont de vastes sinus veineux, siège de départ des thromboses. Le réseau profond draine 90 % du sang ; il est muni de nombreuses <strong>valvules</strong> et sa vidange dépend de la <strong>pompe musculaire du mollet</strong> et de la semelle plantaire.</p>
<h4>Le réseau veineux superficiel</h4>
<ul>
<li>La <strong>grande veine saphène</strong> (saphène interne) : la plus longue veine du corps (environ 1 m). Née de l'arcade veineuse dorsale du pied, elle passe <strong>en avant de la malléole médiale</strong>, monte à la face médiale de la jambe (avec le nerf saphène), passe en arrière du condyle médial (un travers de main en arrière de la patella), puis à la face antéro-médiale de la cuisse, et se jette dans la veine fémorale par sa <strong>crosse</strong>, 3 à 4 cm sous le ligament inguinal, en traversant le <strong>hiatus saphène</strong> du fascia lata. À la crosse elle reçoit les veines épigastrique superficielle, circonflexe iliaque superficielle et pudendales externes (« étoile de Scarpa »).</li>
<li>La <strong>petite veine saphène</strong> (saphène externe) : née du bord latéral de l'arcade dorsale, elle passe <strong>en arrière de la malléole latérale</strong>, monte à la face postérieure de la jambe (avec le nerf sural), perfore le fascia et se jette dans la <strong>veine poplitée</strong>.</li>
<li>Des <strong>veines perforantes</strong> (de Cockett à la jambe, de Dodd à la cuisse, de Boyd au genou) relient, du superficiel vers le profond, les deux réseaux à travers le fascia ; leurs valvules empêchent le reflux.</li>
</ul>
<h4>Les lymphatiques</h4>
<p>Les collecteurs superficiels suivent la grande saphène vers les <strong>nœuds inguinaux superficiels</strong> (qui drainent aussi le périnée, les organes génitaux externes, la paroi abdominale basse et la fesse) et la petite saphène vers les <strong>nœuds poplités</strong> ; les collecteurs profonds suivent les artères vers les nœuds poplités puis inguinaux profonds (nœud de Cloquet dans l'anneau fémoral), puis <strong>iliaques externes</strong>, iliaques communs et lombaux (lombo-aortiques).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>thrombose veineuse profonde</strong> (phlébite) siège d'abord dans les veines du mollet (immobilisation, chirurgie, cancer, grossesse) et peut s'étendre à la poplitée et à la fémorale ; signes : douleur du mollet, œdème, perte du ballottement ; diagnostic par écho-Doppler ; risque d'<strong>embolie pulmonaire</strong>. Les <strong>varices</strong> sont des dilatations du réseau superficiel par incontinence valvulaire (crosse de la grande saphène, perforantes) ; traitement par éveinage (stripping), laser ou sclérose. Le <strong>lymphœdème</strong> complique les curages inguinaux. La grande saphène sert de greffon pour les pontages coronaires.</div>`
            },
            {
              titre: "Synthèse : innervation segmentaire et tronculaire du membre inférieur",
              contenu: `<table>
<thead><tr><th>Racine</th><th>Mouvement clé</th><th>Réflexe</th><th>Dermatome</th></tr></thead>
<tbody>
<tr><td>L2</td><td>Flexion de la hanche</td><td>—</td><td>Face antérieure haute de la cuisse</td></tr>
<tr><td>L3</td><td>Extension du genou (avec L4)</td><td>Patellaire (avec L4)</td><td>Face antérieure basse de la cuisse, genou</td></tr>
<tr><td>L4</td><td>Extension du genou, flexion dorsale du pied, inversion</td><td><strong>Patellaire</strong></td><td>Face médiale de la jambe, malléole médiale</td></tr>
<tr><td>L5</td><td>Extension de l'hallux, flexion dorsale, abduction de hanche (moyen glutéal)</td><td>—</td><td>Face latérale de la jambe, dos du pied, hallux</td></tr>
<tr><td>S1</td><td>Flexion plantaire, éversion, extension de hanche</td><td><strong>Achilléen</strong></td><td>Face postérieure de la jambe, talon, bord latéral du pied, 5e orteil</td></tr>
<tr><td>S2–S4</td><td>Sphincters, périnée</td><td>Anal, bulbo-caverneux</td><td>Périnée, face postérieure de la cuisse (S2)</td></tr>
</tbody>
</table>
<table>
<thead><tr><th>Nerf</th><th>Racines</th><th>Muscles</th><th>Fonction clé</th><th>Sensibilité</th><th>Signe de lésion</th></tr></thead>
<tbody>
<tr><td>Fémoral</td><td>L2–L4</td><td>Quadriceps, sartorius, pectiné, iliaque</td><td>Extension du genou</td><td>Face antérieure de la cuisse, médiale de la jambe et du pied (saphène)</td><td>Dérobement du genou, aréflexie patellaire</td></tr>
<tr><td>Obturateur</td><td>L2–L4</td><td>Adducteurs, gracile, obturateur externe</td><td>Adduction de la cuisse</td><td>Face médiale de la cuisse</td><td>Faiblesse de l'adduction</td></tr>
<tr><td>Glutéal supérieur</td><td>L4–S1</td><td>Moyen et petit glutéaux, TFL</td><td>Abduction, stabilité du bassin</td><td>—</td><td>Trendelenburg</td></tr>
<tr><td>Glutéal inférieur</td><td>L5–S2</td><td>Grand glutéal</td><td>Extension de la hanche</td><td>—</td><td>Difficulté à monter les escaliers, à se lever</td></tr>
<tr><td>Sciatique</td><td>L4–S3</td><td>Ischio-jambiers + tout ce qui est sous le genou</td><td>Flexion du genou, pied</td><td>Toute la jambe sauf face médiale, tout le pied</td><td>Pied ballant, anesthésie</td></tr>
<tr><td>Tibial</td><td>L4–S3</td><td>Loge postérieure de la jambe, plante</td><td>Flexion plantaire, inversion</td><td>Plante, bord latéral (sural)</td><td>Pied en talus, pas de marche sur la pointe</td></tr>
<tr><td>Fibulaire commun</td><td>L4–S2</td><td>Loges antérieure et latérale</td><td>Flexion dorsale, éversion</td><td>Face latérale de la jambe, dos du pied</td><td>Steppage, pied tombant</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> une atteinte <strong>radiculaire L5</strong> et une atteinte <strong>tronculaire du fibulaire commun</strong> donnent toutes deux un déficit des releveurs ; mais la racine L5 innerve aussi le moyen glutéal (nerf glutéal supérieur) et le tibial postérieur (nerf tibial) : un déficit d'abduction de hanche ou d'inversion oriente vers la racine. De même, le réflexe achilléen est aboli dans une atteinte S1 et dans une lésion du nerf tibial, mais pas dans une lésion du fibulaire.</div>`
            }
          ],
          points_cles: [
            "Plexus lombal (L1–L4, dans le psoas) : nerfs ilio-hypogastrique, ilio-inguinal, génito-fémoral, cutané latéral de la cuisse, fémoral, obturateur et tronc lombo-sacral.",
            "Nerf fémoral (L2–L4) : lacune musculaire, latéral à l'artère fémorale ; quadriceps, sartorius, pectiné ; nerf saphène pour la face médiale de la jambe et du pied ; réflexe patellaire L4.",
            "Nerf obturateur (L2–L4) : canal obturateur ; adducteurs, gracile, obturateur externe ; peau de la face médiale de la cuisse.",
            "Plexus sacral (L4–S3, sur le piriforme) : nerfs glutéaux supérieur (supra-piriforme) et inférieur, sciatique, cutané postérieur de la cuisse, pudendal (S2–S4).",
            "Nerf sciatique : le plus gros du corps ; espace infra-piriforme, mi-distance tubérosité ischiatique–grand trochanter ; ischio-jambiers ; division au sommet de la fosse poplitée en tibial et fibulaire commun.",
            "Nerf tibial : fosse poplitée, arcade du soléaire, loge postérieure, canal tarsien → nerfs plantaires ; flexion plantaire et inversion ; réflexe achilléen S1 ; nerf sural.",
            "Nerf fibulaire commun : col de la fibula (vulnérable) → fibulaire superficiel (fibulaires, dos du pied) et fibulaire profond (loge antérieure, 1er espace) ; pied tombant, steppage.",
            "Artères : iliaque externe → fémorale (ligament inguinal, fémorale profonde avec circonflexes et perforantes, canal des adducteurs, hiatus du grand adducteur) → poplitée (la plus profonde) → tibiale antérieure (dorsale du pied) et tibiale postérieure (fibulaire, plantaires).",
            "Grande saphène : devant la malléole médiale, face médiale, crosse dans la veine fémorale 3–4 cm sous le ligament inguinal ; petite saphène : derrière la malléole latérale, veine poplitée ; veines profondes doubles à la jambe, pompe du mollet.",
            "Sciatique L5 (hernie L4–L5) : dos du pied, hallux, releveurs ; sciatique S1 (hernie L5–S1) : bord latéral du pied, triceps sural, réflexe achilléen aboli."
          ],
          lexique: [
            { terme: "Plexus lombal", def: "Réseau formé par les rameaux antérieurs de L1 à L4 dans le muscle grand psoas, donnant les nerfs fémoral et obturateur." },
            { terme: "Plexus sacral", def: "Réseau formé par le tronc lombo-sacral (L4–L5) et S1–S3 sur le piriforme, donnant le nerf sciatique et les nerfs glutéaux." },
            { terme: "Nerf saphène", def: "Branche sensitive terminale du nerf fémoral accompagnant la grande veine saphène jusqu'au bord médial du pied." },
            { terme: "Nerf sural", def: "Nerf sensitif de la face postéro-latérale de la jambe et du bord latéral du pied, formé par le cutané sural médial (tibial) et le rameau communicant fibulaire." },
            { terme: "Arcade du soléaire", def: "Arcade tendineuse du soléaire sous laquelle passent l'artère tibiale postérieure et le nerf tibial." },
            { terme: "Artère fémorale profonde", def: "Branche principale de l'artère fémorale née 4 cm sous le ligament inguinal, donnant les circonflexes et les perforantes." },
            { terme: "Canal des adducteurs", def: "Canal de Hunter, entre vaste médial et adducteurs sous le sartorius, parcouru par les vaisseaux fémoraux et le nerf saphène." },
            { terme: "Crosse de la grande veine saphène", def: "Terminaison de la grande saphène dans la veine fémorale à travers le hiatus saphène, 3 à 4 cm sous le ligament inguinal." },
            { terme: "Veines perforantes", def: "Veines valvulées traversant le fascia pour conduire le sang du réseau superficiel vers le réseau profond." },
            { terme: "Claudication intermittente", def: "Douleur musculaire d'effort cédant au repos, traduisant une ischémie artérielle du membre inférieur." }
          ],
          qcm: [
            {
              q: "Concernant le plexus lombal et le nerf fémoral, quelles propositions sont exactes ?",
              options: [
                "A. Le plexus lombal est formé par les rameaux antérieurs de L1 à L4.",
                "B. Le nerf fémoral passe sous le ligament inguinal dans la lacune vasculaire, médialement à l'artère.",
                "C. Le nerf fémoral innerve le quadriceps.",
                "D. Le nerf saphène est une branche du nerf fémoral.",
                "E. La lésion du nerf fémoral abolit le réflexe achilléen."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : le nerf fémoral passe dans la lacune musculaire, latéralement à l'artère fémorale. E est fausse : c'est le réflexe patellaire (L4) qui est aboli."
            },
            {
              q: "Concernant le nerf sciatique, quelles propositions sont exactes ?",
              options: [
                "A. Il naît du plexus sacral (L4–S3).",
                "B. Il sort du pelvis par l'espace supra-piriforme.",
                "C. Il descend à mi-distance entre la tubérosité ischiatique et le grand trochanter.",
                "D. Il innerve les ischio-jambiers.",
                "E. Il se divise habituellement au sommet de la fosse poplitée en nerfs tibial et fibulaire commun."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : il sort par l'espace infra-piriforme ; seul le pédicule glutéal supérieur emprunte l'espace supra-piriforme."
            },
            {
              q: "Concernant les nerfs tibial et fibulaire commun, quelles propositions sont exactes ?",
              options: [
                "A. Le nerf fibulaire commun contourne le col de la fibula.",
                "B. Le nerf fibulaire profond innerve les muscles long et court fibulaires.",
                "C. Le nerf tibial se divise dans le canal tarsien en nerfs plantaires médial et latéral.",
                "D. La paralysie du nerf fibulaire commun entraîne un steppage.",
                "E. Le nerf tibial assure la flexion dorsale du pied."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : les fibulaires sont innervés par le nerf fibulaire superficiel ; le profond innerve la loge antérieure. E est fausse : le nerf tibial assure la flexion plantaire ; la flexion dorsale dépend du fibulaire profond."
            },
            {
              q: "Concernant la sciatique par hernie discale, quelles propositions sont exactes ?",
              options: [
                "A. Une hernie discale L4–L5 comprime habituellement la racine L5.",
                "B. La sciatique S1 irradie vers le dos du pied et le gros orteil.",
                "C. La sciatique L5 s'accompagne d'un déficit des releveurs du pied.",
                "D. Le réflexe achilléen est aboli dans la sciatique S1.",
                "E. Le signe de Lasègue est une douleur provoquée par l'élévation du membre inférieur tendu."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la sciatique S1 irradie vers la face postérieure de la jambe, le talon, le bord latéral du pied et le 5e orteil ; le dos du pied et le gros orteil correspondent à L5."
            },
            {
              q: "Concernant les artères du membre inférieur, quelles propositions sont exactes ?",
              options: [
                "A. L'artère fémorale continue l'artère iliaque externe à partir du ligament inguinal.",
                "B. L'artère fémorale profonde donne les artères circonflexes et les perforantes.",
                "C. L'artère poplitée est l'élément le plus superficiel de la fosse poplitée.",
                "D. L'artère tibiale antérieure traverse la membrane interosseuse par son orifice supérieur.",
                "E. L'artère fibulaire est une branche de l'artère tibiale postérieure."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : l'artère poplitée est l'élément le plus profond de la fosse, contre le plan osseux ; le nerf tibial est le plus superficiel."
            },
            {
              q: "Concernant les veines du membre inférieur, quelles propositions sont exactes ?",
              options: [
                "A. La grande veine saphène passe en avant de la malléole médiale.",
                "B. La petite veine saphène se jette dans la veine fémorale.",
                "C. La crosse de la grande saphène se situe 3 à 4 cm sous le ligament inguinal.",
                "D. Les veines perforantes conduisent le sang du réseau profond vers le réseau superficiel.",
                "E. Les thromboses veineuses profondes débutent le plus souvent dans les veines du mollet."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : la petite saphène se jette dans la veine poplitée. D est fausse : les perforantes drainent du superficiel vers le profond."
            },
            {
              q: "Concernant l'innervation segmentaire du membre inférieur, quelles associations sont exactes ?",
              options: [
                "A. Réflexe patellaire : L4.",
                "B. Réflexe achilléen : L5.",
                "C. Extension de l'hallux : L5.",
                "D. Dermatome de la malléole médiale : L4.",
                "E. Flexion de la hanche : S1."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : le réflexe achilléen correspond à S1. E est fausse : la flexion de la hanche dépend de L2–L3."
            }
          ]
        }
      ]
    },
    {
      titre: "Partie 4 — Tronc",
      chapitres: [
        {
          id: "colonne-vertebrale",
          titre: "La colonne vertébrale",
          duree: 45,
          objectifs: [
            "Décrire la colonne vertébrale dans son ensemble : nombre de vertèbres, courbures, dimensions.",
            "Décrire la vertèbre type et les particularités des vertèbres cervicales (atlas, axis), thoraciques, lombales, du sacrum et du coccyx.",
            "Décrire le disque intervertébral, les ligaments et les articulations de la colonne.",
            "Décrire les muscles du dos et leur innervation, et le contenu du canal vertébral.",
            "Relier l'anatomie à la hernie discale, aux fractures vertébrales et aux ponctions lombaires."
          ],
          sections: [
            {
              titre: "Vue d'ensemble de la colonne vertébrale",
              contenu: `<p>La <strong>colonne vertébrale</strong> (rachis) est la tige osseuse axiale du tronc, qui soutient la tête, s'articule avec les côtes et la ceinture pelvienne et protège la moelle spinale. Elle mesure environ <strong>70 à 75 cm</strong> chez l'adulte (deux cinquièmes de la taille), dont un quart pour les disques intervertébraux. Elle comprend <strong>33 vertèbres</strong> :</p>
<ul>
<li><strong>7 cervicales</strong> (C1–C7), <strong>12 thoraciques</strong> (T1–T12) et <strong>5 lombales</strong> (L1–L5) : 24 vertèbres <strong>mobiles</strong>, séparées par 23 disques ;</li>
<li><strong>5 sacrales</strong> fusionnées en un seul os, le <strong>sacrum</strong>, et <strong>3 à 5 coccygiennes</strong> fusionnées en <strong>coccyx</strong> : vertèbres fixes.</li>
</ul>
<h4>Les courbures</h4>
<p>Dans le plan sagittal, la colonne présente quatre courbures alternées qui augmentent sa résistance (dix fois celle d'une colonne rectiligne) : <strong>lordose cervicale</strong> (concavité postérieure), <strong>cyphose thoracique</strong> (convexité postérieure), <strong>lordose lombale</strong> et <strong>cyphose sacro-coccygienne</strong>. Les cyphoses thoracique et sacrée sont <strong>primaires</strong> (présentes chez le fœtus) ; les lordoses cervicale et lombale sont <strong>secondaires</strong>, acquises avec le redressement de la tête (3–4 mois) puis la station debout (12–18 mois). Dans le plan frontal, la colonne est rectiligne ; toute déviation latérale avec rotation vertébrale est une <strong>scoliose</strong>.</p>
<h4>Dimensions et repères</h4>
<p>Le volume des corps vertébraux augmente de haut en bas (charge croissante), sauf à l'extrémité du sacrum. Repères cutanés : la saillie de C7 (vertèbre proéminente), l'épine de la scapula en T3, son angle inférieur en T7, la crête iliaque en L4, les épines iliaques postéro-supérieures en S2 (fin du sac dural). La ligne reliant les deux crêtes iliaques (ligne de Tuffier) passe par l'espace L4–L5 : repère de la <strong>ponction lombaire</strong>, pratiquée en L3–L4 ou L4–L5, sous la terminaison de la moelle (L1–L2 chez l'adulte).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 7 + 12 + 5 + 5 + 4 = 33 vertèbres, 24 mobiles, 23 disques (le premier entre C2 et C3, le dernier entre L5 et S1), 31 paires de nerfs spinaux. La moelle s'arrête en L1–L2 ; le sac dural en S2.</div>`
            },
            {
              titre: "La vertèbre type",
              contenu: `<p>Toute vertèbre mobile est construite sur le même plan : un <strong>corps</strong> en avant, un <strong>arc vertébral</strong> en arrière, délimitant le <strong>foramen vertébral</strong> ; la superposition des foramens forme le <strong>canal vertébral</strong>.</p>
<ul>
<li>Le <strong>corps vertébral</strong> : cylindre d'os spongieux (moelle rouge, hématopoïèse) entouré d'une mince corticale, avec deux faces (plateaux) supérieure et inférieure recouvertes d'un cartilage et bordées d'un anneau d'os compact (listel marginal) ; face postérieure percée des foramens des veines basi-vertébrales.</li>
<li>L'<strong>arc vertébral</strong> : deux <strong>pédicules</strong> (courts, épais, implantés sur la face postéro-latérale du corps, dont les bords supérieur et inférieur échancrés forment par superposition les <strong>foramens intervertébraux</strong>, sortie des nerfs spinaux) et deux <strong>lames</strong> (aplaties, réunies en arrière).</li>
<li>Les <strong>processus</strong> : un <strong>processus épineux</strong> (postérieur, médian, palpable), deux <strong>processus transverses</strong> (latéraux), quatre <strong>processus articulaires</strong> (deux supérieurs, deux inférieurs, à la jonction pédicule-lame, portant les surfaces des <strong>articulations zygapophysaires</strong>).</li>
</ul>
<table>
<thead><tr><th>Caractère</th><th>Cervicale (C3–C7)</th><th>Thoracique</th><th>Lombale</th></tr></thead>
<tbody>
<tr><td>Corps</td><td>Petit, allongé transversalement, plateaux en selle avec <strong>uncus</strong> (crochets latéraux) formant les articulations unco-vertébrales</td><td>Moyen, en cœur, <strong>facettes costales</strong> (deux demi-facettes pour les têtes des côtes, sauf T1, T10–T12 qui ont une facette entière)</td><td>Volumineux, réniforme (L5 cunéiforme)</td></tr>
<tr><td>Foramen vertébral</td><td>Grand, triangulaire (moelle cervicale renflée)</td><td>Petit, circulaire</td><td>Triangulaire, moyen</td></tr>
<tr><td>Processus transverse</td><td>Percé du <strong>foramen transversaire</strong> (artère vertébrale de C6 à C1), bifide (tubercules antérieur et postérieur ; tubercule antérieur de C6 = tubercule carotidien)</td><td>Long, dirigé en arrière et latéralement, avec une <strong>facette costale</strong> (tubercule de la côte) de T1 à T10</td><td>Long et mince (<strong>processus costiforme</strong>, vestige costal), avec un processus accessoire</td></tr>
<tr><td>Processus épineux</td><td>Court, <strong>bifide</strong> (C3–C6) ; C7 long et non bifide (vertèbre proéminente)</td><td>Long, oblique en bas (imbriqués en tuiles)</td><td>Épais, quadrilatère, horizontal</td></tr>
<tr><td>Processus articulaires</td><td>Surfaces planes obliques à 45° (regard en haut et en arrière pour les supérieures)</td><td>Surfaces frontales (regard en arrière pour les supérieures)</td><td>Surfaces sagittales, cylindriques (regard médial pour les supérieures, qui enserrent les inférieures de la vertèbre sus-jacente) ; processus mamillaire</td></tr>
<tr><td>Mobilité</td><td>Grande : flexion-extension, inclinaison, rotation</td><td>Faible (côtes) : rotation surtout</td><td>Flexion-extension surtout, rotation quasi nulle</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le foramen transversaire est propre aux vertèbres <strong>cervicales</strong> (y compris C7, mais l'artère vertébrale n'entre généralement qu'en C6). Les facettes costales du corps et du processus transverse sont propres aux vertèbres <strong>thoraciques</strong>. Le processus épineux bifide est cervical (C3 à C6).</div>`
            },
            {
              titre: "Les vertèbres particulières : atlas, axis, sacrum, coccyx",
              contenu: `<h4>L'atlas (C1)</h4>
<p>Anneau osseux <strong>sans corps ni processus épineux</strong>, formé de deux <strong>masses latérales</strong> réunies par un <strong>arc antérieur</strong> (tubercule antérieur ; face postérieure portant la fovéa pour la dent de l'axis) et un <strong>arc postérieur</strong> (tubercule postérieur ; sillon de l'artère vertébrale). Les masses latérales portent en haut les <strong>surfaces articulaires supérieures</strong> (cavités glénoïdes ovalaires, concaves, pour les condyles occipitaux : articulation atlanto-occipitale, ellipsoïde, flexion-extension « oui ») et en bas les surfaces inférieures pour l'axis ; leur face médiale porte un tubercule pour le <strong>ligament transverse</strong>. Les processus transverses, longs, sont palpables sous la mastoïde.</p>
<h4>L'axis (C2)</h4>
<p>Caractérisé par la <strong>dent</strong> (apophyse odontoïde), saillie verticale de 1,5 cm sur la face supérieure du corps (c'est embryologiquement le corps de l'atlas), qui s'articule en avant avec l'arc antérieur de l'atlas et en arrière avec le ligament transverse (<strong>articulation atlanto-axoïdienne médiane</strong>, trochoïde, pivot de la rotation « non » : 50 % de la rotation cervicale). Les articulations atlanto-axoïdiennes latérales sont planes. Les ligaments alaires (dent–condyles occipitaux) limitent la rotation ; le <strong>ligament cruciforme</strong> (transverse + faisceaux longitudinaux) maintient la dent et protège la moelle ; sa rupture ou la fracture de la dent est mortelle ou tétraplégisante (pendaison, traumatisme).</p>
<h4>Le sacrum</h4>
<p>Os triangulaire à base supérieure et apex inférieur, formé de la fusion des 5 vertèbres sacrales (vers 20–25 ans), concave en avant, enclavé entre les deux os coxaux (clé de voûte du bassin). La <strong>base</strong> porte le <strong>promontoire</strong> (bord antérieur saillant de S1, repère obstétrical) et les processus articulaires supérieurs pour L5. La <strong>face pelvienne</strong> (antérieure) lisse montre quatre <strong>lignes transverses</strong> (traces des disques) et quatre paires de <strong>foramens sacraux antérieurs</strong> (rameaux antérieurs des nerfs sacraux, plexus sacral). La <strong>face dorsale</strong> présente la <strong>crête sacrale médiane</strong> (processus épineux fusionnés), les crêtes intermédiaires et latérales, les <strong>foramens sacraux postérieurs</strong> et, en bas, le <strong>hiatus sacral</strong> (absence de lame de S5 et S4, encadré des cornes sacrales : voie d'anesthésie caudale). Les <strong>faces latérales</strong> portent la <strong>surface auriculaire</strong> (sacro-iliaque) et la tubérosité sacrale. Le <strong>canal sacral</strong> contient les racines de la queue de cheval et le filum terminal (le sac dural s'arrête en S2). L'angle lombo-sacral (entre L5 et S1) est d'environ 130–140°.</p>
<h4>Le coccyx</h4>
<p>Petit os triangulaire formé de 3 à 5 vertèbres atrophiques, articulé avec l'apex du sacrum (symphyse sacro-coccygienne) ; insertion du grand glutéal, du coccygien, de l'élévateur de l'anus et du ligament ano-coccygien. Il peut se fracturer ou se luxer lors d'une chute assise (coccygodynie).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>fracture de Jefferson</strong> est une fracture éclatement de l'atlas (chute sur la tête). Les <strong>fractures de la dent de l'axis</strong> (sujet âgé, chute) sont instables si elles passent par la base (type II). La fracture du pendu (<em>hangman</em>) est une fracture des pédicules de C2. Chez le nourrisson, le canal vertébral sacré est accessible pour l'anesthésie caudale par le hiatus sacral.</div>`
            },
            {
              titre: "Disques intervertébraux, ligaments et articulations",
              contenu: `<h4>Le disque intervertébral</h4>
<p>Fibrocartilage interposé entre deux corps vertébraux (symphyse), de 3 mm d'épaisseur en cervical, 5 mm en thoracique et <strong>9 à 10 mm en lombal</strong> ; les disques représentent un quart de la hauteur de la colonne et sont plus épais en avant dans les lordoses. Il comprend :</p>
<ul>
<li>le <strong>nucleus pulposus</strong> (noyau pulpeux) : gel central, riche en eau (80 %) et en protéoglycanes, incompressible, qui répartit les pressions comme une bille entre deux plateaux ; situé légèrement en arrière du centre en lombal ; il se déshydrate avec l'âge (perte de taille, discarthrose) ;</li>
<li>l'<strong>anulus fibrosus</strong> (anneau fibreux) : lamelles concentriques de fibres de collagène obliques en sens alterné, plus épaisses en avant qu'en arrière (point faible postéro-latéral), fixées aux listels marginaux ; seule sa partie périphérique est innervée (nerf sinu-vertébral) et vascularisée.</li>
</ul>
<h4>Les ligaments</h4>
<ul>
<li>Le <strong>ligament longitudinal antérieur</strong> : large bande de l'occiput au sacrum sur la face antérieure des corps et des disques ; limite l'extension.</li>
<li>Le <strong>ligament longitudinal postérieur</strong> : sur la face postérieure des corps, dans le canal vertébral, étroit sur les corps et élargi en losange sur les disques ; il laisse découvertes les faces postéro-latérales des disques, où se produisent les <strong>hernies discales</strong>. Il est innervé (douleur discale).</li>
<li>Les <strong>ligaments jaunes</strong> (<em>ligamenta flava</em>) : entre les lames, très élastiques, ferment le canal en arrière ; traversés lors de la ponction lombaire (ressaut) ; leur hypertrophie participe au canal lombal étroit.</li>
<li>Les <strong>ligaments interépineux</strong>, le <strong>ligament supra-épineux</strong> (prolongé au cou par le <strong>ligament nuchal</strong>, de C7 à la protubérance occipitale externe), les <strong>ligaments intertransversaires</strong>.</li>
<li>À la charnière cranio-cervicale : membranes atlanto-occipitales, ligament cruciforme, ligaments alaires, membrane tectoria (prolongement du longitudinal postérieur).</li>
</ul>
<h4>Les articulations</h4>
<ul>
<li>Les <strong>symphyses intervertébrales</strong> (disques) : articulations cartilagineuses secondaires.</li>
<li>Les <strong>articulations zygapophysaires</strong> (interapophysaires postérieures) : synoviales planes, à capsule lâche en cervical et serrée en lombal ; leur orientation détermine les mouvements possibles à chaque niveau ; richement innervées par les rameaux postérieurs (lombalgies d'origine facettaire, arthrose).</li>
<li>Les articulations unco-vertébrales (cervicales, de C3 à C7), atlanto-occipitales, atlanto-axoïdiennes, costo-vertébrales (thorax), lombo-sacrale et sacro-iliaques.</li>
</ul>
<p>Mobilité globale : flexion 110° (dont 40° cervicale, 60° lombale), extension 140°, inclinaison 75°, rotation 90° (dont 50° cervicale, 35° thoracique, 5° lombale).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>hernie discale</strong> est l'issue du nucleus à travers une fissure de l'anulus, le plus souvent <strong>postéro-latérale</strong>, au niveau <strong>L4–L5</strong> ou <strong>L5–S1</strong> (80 % des cas), comprimant la racine qui descend vers le foramen sous-jacent (L5 pour L4–L5, S1 pour L5–S1) : sciatique. Une hernie foraminale comprime la racine du même niveau (L4 pour L4–L5). Une volumineuse hernie médiane comprime la queue de cheval (urgence : troubles sphinctériens, anesthésie en selle). En cervical, les hernies C5–C6 et C6–C7 donnent des névralgies cervico-brachiales C6 et C7.</div>`
            },
            {
              titre: "Les muscles du dos",
              contenu: `<p>Les muscles du dos se disposent en plusieurs plans. Les plans superficiels (trapèze, grand dorsal, élévateur de la scapula, rhomboïdes) et intermédiaire (dentelés postérieurs) relient le tronc au membre supérieur ou aux côtes ; ils sont innervés par des <strong>rameaux antérieurs</strong> (plexus brachial, nerf accessoire pour le trapèze). Les <strong>muscles profonds</strong> (intrinsèques, « muscles propres du dos ») sont les seuls innervés par les <strong>rameaux postérieurs</strong> des nerfs spinaux ; ils sont contenus dans la gouttière vertébrale, sous le <strong>fascia thoraco-lombal</strong>.</p>
<table>
<thead><tr><th>Plan</th><th>Muscles</th><th>Trajet</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Superficiel (membre supérieur)</td><td><strong>Trapèze</strong> (nerf accessoire XI et C3–C4), <strong>grand dorsal</strong> (thoraco-dorsal), <strong>élévateur de la scapula</strong> et <strong>rhomboïdes</strong> (nerf dorsal de la scapula)</td><td>De la colonne vers la scapula et l'humérus</td><td>Mobilisation de la ceinture scapulaire</td></tr>
<tr><td>Intermédiaire (respiratoire)</td><td>Dentelés postérieurs supérieur et inférieur</td><td>Des processus épineux vers les côtes</td><td>Inspiration / expiration accessoires</td></tr>
<tr><td>Profond, couche superficielle</td><td><strong>Splénius</strong> de la tête et du cou</td><td>Des processus épineux C7–T6 vers la mastoïde et les transverses cervicales</td><td>Extension, rotation homolatérale de la tête</td></tr>
<tr><td>Profond, couche intermédiaire</td><td><strong>Érecteur du rachis</strong> (masse commune sacro-lombale se divisant en trois colonnes : <strong>ilio-costal</strong> latéral, <strong>longissimus</strong> intermédiaire, <strong>épineux</strong> médial)</td><td>Du sacrum, de la crête iliaque et du fascia thoraco-lombal vers les côtes, les processus transverses et épineux, jusqu'à l'occiput</td><td>Extension du rachis (redressement), inclinaison homolatérale ; muscles posturaux antigravitaires</td></tr>
<tr><td>Profond, couche profonde (transverso-épineux)</td><td><strong>Semi-épineux</strong>, <strong>multifides</strong> (très développés en lombal), <strong>rotateurs</strong></td><td>Des processus transverses vers les processus épineux des vertèbres sus-jacentes (1 à 6 niveaux)</td><td>Extension, rotation controlatérale, stabilisation segmentaire fine</td></tr>
<tr><td>Profond, segmentaires</td><td>Interépineux, intertransversaires, <strong>muscles sub-occipitaux</strong> (grand et petit droits postérieurs, obliques supérieur et inférieur de la tête ; nerf sub-occipital C1)</td><td>Entre vertèbres voisines ; de C1–C2 à l'occiput</td><td>Mouvements fins, extension et rotation de la tête (triangle sub-occipital : artère vertébrale)</td></tr>
</tbody>
</table>
<p>En avant de la colonne, les <strong>muscles prévertébraux</strong> (long du cou, long de la tête, droits antérieur et latéral de la tête) et les <strong>scalènes</strong> au cou, le <strong>grand psoas</strong> et le <strong>carré des lombes</strong> en lombal, sont fléchisseurs et inclinateurs ; les muscles abdominaux sont les principaux fléchisseurs du tronc. Le fascia thoraco-lombal (trois feuillets en lombal) est le point d'attache du grand dorsal, du transverse et de l'oblique interne : il participe à la stabilisation lombale (« corset » musculaire).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>lombalgie commune</strong> (80 % de la population au cours de la vie) est le plus souvent d'origine disco-ligamentaire ou facettaire, avec contracture des muscles paravertébraux ; le renforcement des multifides et du transverse est la base de la rééducation. Le <strong>torticolis</strong> est une contracture du sterno-cléido-mastoïdien ou des muscles de la nuque. Les muscles érecteurs du rachis sont les plus sollicités lors du soulèvement de charges : la pression intradiscale en L3 passe de 25 kg allongé à 275 kg penché en avant avec 20 kg dans les mains.</div>`
            },
            {
              titre: "Le canal vertébral et son contenu",
              contenu: `<p>Le <strong>canal vertébral</strong> est limité en avant par les corps vertébraux, les disques et le ligament longitudinal postérieur, latéralement par les pédicules (et les foramens intervertébraux), en arrière par les lames et les ligaments jaunes. Son diamètre antéro-postérieur est de 15 à 20 mm en lombal (canal étroit si inférieur à 12 mm) et de 17 à 18 mm en cervical. Il contient :</p>
<ul>
<li>la <strong>moelle spinale</strong>, de C1 au <strong>cône médullaire</strong> en <strong>L1–L2</strong> chez l'adulte (L3 chez le nouveau-né), prolongée par le <strong>filum terminal</strong> ; sous L2, le canal ne contient que les racines de la <strong>queue de cheval</strong> baignant dans le liquide cérébro-spinal ;</li>
<li>les <strong>méninges</strong> : la <strong>dure-mère</strong> (sac dural, de l'occiput à <strong>S2</strong>), l'<strong>arachnoïde</strong> et la <strong>pie-mère</strong> ; entre arachnoïde et pie-mère, l'<strong>espace subarachnoïdien</strong> contenant le <strong>liquide cérébro-spinal</strong> (ponction lombaire en L3–L4 ou L4–L5, sous le cône, au-dessus de S2) ; entre la dure-mère et la paroi osseuse, l'<strong>espace épidural</strong> (graisse, <strong>plexus veineux vertébraux internes</strong>, site de l'anesthésie péridurale, des hématomes et des abcès épiduraux) ;</li>
<li>les <strong>racines</strong> des nerfs spinaux, qui se dirigent vers leur foramen intervertébral de plus en plus obliquement de haut en bas (décalage croissant entre segment médullaire et vertèbre : la moelle est plus courte que la colonne) ;</li>
<li>les <strong>artères spinales</strong> (une antérieure, deux postérieures, alimentées par les artères radiculaires, dont l'artère d'Adamkiewicz vers T9–L2, dont la lésion donne une ischémie médullaire) et les <strong>plexus veineux</strong> vertébraux (sans valvules, voie de dissémination des métastases vers le rachis).</li>
</ul>
<p>Les <strong>foramens intervertébraux</strong> sont limités par les pédicules (haut et bas), le disque et le corps (avant), les articulations zygapophysaires (arrière) ; ils contiennent le nerf spinal et son ganglion, l'artère et les veines radiculaires, le rameau méningé. Leur rétrécissement (hernie foraminale, arthrose) comprime la racine.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>canal lombal étroit</strong> (arthrose, hypertrophie des ligaments jaunes, sujet âgé) donne une claudication neurogène (douleurs et faiblesse des jambes à la marche, soulagées par la flexion antérieure). Les <strong>fractures vertébrales</strong> par compression (tassement cunéiforme, ostéoporose) sont stables ; les fractures-éclatements (<em>burst</em>) et les fractures-luxations avec recul du mur postérieur sont instables et menacent la moelle (paraplégie si T, tétraplégie si C). L'<strong>épidurite</strong> métastatique comprime la moelle par l'espace épidural.</div>`
            }
          ],
          points_cles: [
            "33 vertèbres : 7 cervicales, 12 thoraciques, 5 lombales (24 mobiles, 23 disques), 5 sacrales fusionnées, 3–5 coccygiennes ; 70–75 cm chez l'adulte.",
            "Quatre courbures : lordoses cervicale et lombale (secondaires), cyphoses thoracique et sacrée (primaires) ; la scoliose est une déviation frontale avec rotation.",
            "Vertèbre type : corps + arc (pédicules, lames) délimitant le foramen vertébral ; processus épineux, transverses, articulaires ; foramens intervertébraux entre les pédicules.",
            "Cervicales : foramen transversaire (artère vertébrale de C6 à C1), uncus, épineuse bifide ; thoraciques : facettes costales ; lombales : corps volumineux, processus costiformes, articulaires sagittaux.",
            "Atlas sans corps ni épineuse, masses latérales ; axis avec la dent (rotation « non », ligament transverse) ; atlanto-occipitale = flexion-extension (« oui »).",
            "Sacrum : promontoire, foramens sacraux, hiatus sacral, surfaces auriculaires ; sac dural jusqu'en S2 ; coccyx de 3–5 pièces.",
            "Disque = nucleus pulposus (gel, 80 % d'eau) + anulus fibrosus (plus mince en arrière) ; hernie postéro-latérale en L4–L5 (racine L5) ou L5–S1 (racine S1).",
            "Ligaments longitudinaux antérieur et postérieur, ligaments jaunes (élastiques, entre les lames), inter- et supra-épineux, ligament nuchal.",
            "Muscles propres du dos (érecteur du rachis : ilio-costal, longissimus, épineux ; transverso-épineux : multifides) innervés par les rameaux postérieurs ; muscles superficiels par les rameaux antérieurs.",
            "Moelle jusqu'en L1–L2, queue de cheval au-dessous, sac dural jusqu'en S2 : ponction lombaire en L3–L4 ou L4–L5 (ligne des crêtes iliaques = L4)."
          ],
          lexique: [
            { terme: "Lordose / cyphose", def: "Courbure sagittale à concavité postérieure (cervicale, lombale) / à convexité postérieure (thoracique, sacrée)." },
            { terme: "Foramen transversaire", def: "Orifice du processus transverse des vertèbres cervicales traversé par l'artère vertébrale (de C6 à C1)." },
            { terme: "Uncus", def: "Crochet latéral du plateau supérieur des vertèbres cervicales formant les articulations unco-vertébrales." },
            { terme: "Dent de l'axis", def: "Saillie verticale du corps de C2 (apophyse odontoïde), pivot de la rotation atlanto-axoïdienne." },
            { terme: "Promontoire", def: "Bord antérieur saillant du plateau supérieur de S1, repère du détroit supérieur du bassin." },
            { terme: "Nucleus pulposus", def: "Noyau gélatineux central du disque intervertébral, riche en eau, répartiteur des pressions." },
            { terme: "Anulus fibrosus", def: "Anneau fibreux lamellaire périphérique du disque, plus mince en arrière, siège des fissures de la hernie discale." },
            { terme: "Ligaments jaunes", def: "Ligaments élastiques unissant les lames vertébrales, fermant le canal vertébral en arrière." },
            { terme: "Articulation zygapophysaire", def: "Articulation synoviale plane entre les processus articulaires de deux vertèbres voisines." },
            { terme: "Queue de cheval", def: "Ensemble des racines lombales, sacrales et coccygiennes descendant dans le canal vertébral sous le cône médullaire (L1–L2)." }
          ],
          qcm: [
            {
              q: "Concernant la colonne vertébrale dans son ensemble, quelles propositions sont exactes ?",
              options: [
                "A. Elle compte 24 vertèbres mobiles.",
                "B. Il existe 24 disques intervertébraux.",
                "C. La lordose lombale est une courbure primaire.",
                "D. La cyphose thoracique est présente dès la vie fœtale.",
                "E. La ligne joignant les crêtes iliaques passe par L4."
              ],
              bonnes: [0, 3, 4],
              explication: "A, D et E sont vraies. B est fausse : il y a 23 disques (le premier entre C2 et C3). C est fausse : les lordoses cervicale et lombale sont secondaires, acquises avec le redressement de la tête et la marche."
            },
            {
              q: "Concernant les caractères régionaux des vertèbres, quelles propositions sont exactes ?",
              options: [
                "A. Le foramen transversaire est propre aux vertèbres cervicales.",
                "B. Les facettes costales sont présentes sur les vertèbres lombales.",
                "C. Le processus épineux de C7 est bifide.",
                "D. Les processus articulaires lombaux ont des surfaces orientées sagittalement.",
                "E. Le corps vertébral augmente de volume de haut en bas."
              ],
              bonnes: [0, 3, 4],
              explication: "A, D et E sont vraies. B est fausse : les facettes costales caractérisent les vertèbres thoraciques. C est fausse : C7 (vertèbre proéminente) a un processus épineux long et non bifide ; les bifides sont C3 à C6."
            },
            {
              q: "Concernant l'atlas et l'axis, quelles propositions sont exactes ?",
              options: [
                "A. L'atlas n'a ni corps ni processus épineux.",
                "B. La dent de l'axis correspond embryologiquement au corps de l'atlas.",
                "C. L'articulation atlanto-occipitale assure principalement la rotation de la tête.",
                "D. Le ligament transverse maintient la dent contre l'arc antérieur de l'atlas.",
                "E. L'articulation atlanto-axoïdienne médiane est une trochoïde."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : l'atlanto-occipitale assure la flexion-extension (« oui ») ; la rotation (« non ») se fait surtout dans l'atlanto-axoïdienne."
            },
            {
              q: "Concernant le disque intervertébral et la hernie discale, quelles propositions sont exactes ?",
              options: [
                "A. Le nucleus pulposus est riche en eau.",
                "B. L'anulus fibrosus est plus épais en arrière qu'en avant.",
                "C. La hernie discale est le plus souvent postéro-latérale.",
                "D. Une hernie discale L4–L5 postéro-latérale comprime habituellement la racine L5.",
                "E. Les disques lombaux mesurent environ 3 mm d'épaisseur."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : l'anulus est plus mince en arrière, d'où la fréquence des hernies postérieures. E est fausse : les disques lombaux mesurent 9 à 10 mm ; 3 mm correspond aux disques cervicaux."
            },
            {
              q: "Concernant les ligaments et les muscles du dos, quelles propositions sont exactes ?",
              options: [
                "A. Le ligament longitudinal postérieur est situé dans le canal vertébral.",
                "B. Les ligaments jaunes unissent les lames vertébrales.",
                "C. L'érecteur du rachis est innervé par les rameaux antérieurs des nerfs spinaux.",
                "D. Le trapèze est innervé par le nerf accessoire.",
                "E. Les multifides sont des muscles transverso-épineux."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : les muscles propres du dos, dont l'érecteur du rachis, sont innervés par les rameaux postérieurs."
            },
            {
              q: "Concernant le canal vertébral et son contenu, quelles propositions sont exactes ?",
              options: [
                "A. La moelle spinale se termine en L1–L2 chez l'adulte.",
                "B. Le sac dural se termine en S2.",
                "C. La ponction lombaire se pratique habituellement en L1–L2.",
                "D. L'espace épidural contient des plexus veineux dépourvus de valvules.",
                "E. Le hiatus sacral permet l'anesthésie caudale."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la ponction se fait en L3–L4 ou L4–L5, sous la terminaison de la moelle, pour ne pas la blesser."
            },
            {
              q: "Concernant le sacrum et la pathologie vertébrale, quelles propositions sont exactes ?",
              options: [
                "A. Le sacrum résulte de la fusion de 5 vertèbres.",
                "B. Le promontoire est le bord antérieur de S1.",
                "C. Les foramens sacraux antérieurs laissent passer les rameaux antérieurs des nerfs sacraux.",
                "D. Une fracture vertébrale avec recul du mur postérieur est stable.",
                "E. Le canal lombal étroit donne une claudication neurogène soulagée par la flexion du tronc."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : le recul du mur postérieur signe une fracture instable menaçant la moelle ou la queue de cheval."
            }
          ]
        },
        {
          id: "thorax-paroi",
          titre: "Thorax : la paroi et la mécanique ventilatoire",
          duree: 35,
          objectifs: [
            "Décrire le sternum, les côtes (vraies, fausses, flottantes) et les cartilages costaux.",
            "Décrire les articulations costo-vertébrales, costo-transversaires et sterno-costales.",
            "Décrire les muscles intercostaux et les espaces intercostaux avec leur pédicule.",
            "Décrire le diaphragme : insertions, orifices, innervation, vascularisation.",
            "Expliquer la mécanique ventilatoire et ses applications (ponction pleurale, drainage)."
          ],
          sections: [
            {
              titre: "Le thorax : limites et conformation",
              contenu: `<p>Le <strong>thorax</strong> est la partie supérieure du tronc, entre le cou et l'abdomen. Sa cavité est limitée par la <strong>cage thoracique</strong> (12 vertèbres thoraciques, 12 paires de côtes et leurs cartilages, le sternum) et fermée en bas par le <strong>diaphragme</strong>. C'est un tronc de cône à sommet supérieur, aplati d'avant en arrière, dont le diamètre transversal (environ 30 cm) dépasse le diamètre antéro-postérieur (environ 20 cm).</p>
<ul>
<li>L'<strong>ouverture supérieure</strong> (orifice crânial) : réniforme, limitée par le corps de T1, les premières côtes et le bord supérieur du manubrium sternal ; oblique en bas et en avant (l'incisure jugulaire est en regard de T2–T3). Elle laisse passer la trachée, l'œsophage, les gros vaisseaux du cou et des membres supérieurs, les nerfs vagues et phréniques, le conduit thoracique ; les dômes pleuraux la dépassent.</li>
<li>L'<strong>ouverture inférieure</strong> : large et oblique en bas et en arrière, limitée par T12, les 12<sup>es</sup> côtes, les cartilages des côtes 7 à 10 (rebord costal) et le processus xiphoïde ; elle est fermée par le diaphragme, qui remonte haut dans le thorax (coupole droite au niveau du 4<sup>e</sup> espace intercostal, gauche du 5<sup>e</sup>).</li>
</ul>
<p>Les repères de surface : l'<strong>angle sternal</strong> (angle de Louis, jonction manubrium–corps, en regard du 2<sup>e</sup> cartilage costal, utile pour compter les côtes et correspondant à T4–T5, à la bifurcation trachéale et à la limite entre médiastins supérieur et inférieur) ; les lignes médio-claviculaire, axillaires antérieure, moyenne et postérieure ; le mamelon (4<sup>e</sup> espace chez l'homme).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'angle sternal est le repère clé du thorax : 2<sup>e</sup> côte, T4–T5, bifurcation trachéale, arc aortique, limite du médiastin supérieur.</div>`
            },
            {
              titre: "Le sternum",
              contenu: `<p>Le <strong>sternum</strong> est un os plat, médian et antérieur, de 15 à 20 cm de long, oblique en bas et en avant, formé de trois pièces :</p>
<ul>
<li>Le <strong>manubrium</strong> (poignée) : le plus large et le plus épais. Son bord supérieur porte l'<strong>incisure jugulaire</strong> (fourchette sternale), palpable, encadrée des <strong>incisures claviculaires</strong> (articulations sterno-claviculaires) ; ses bords latéraux reçoivent les 1<sup>ers</sup> cartilages costaux (synchondrose) et la moitié des 2<sup>es</sup>. Insertions du sterno-cléido-mastoïdien, des grands pectoraux, des sterno-hyoïdiens et sterno-thyroïdiens.</li>
<li>Le <strong>corps</strong> : allongé, formé de quatre sternèbres fusionnées, articulé avec le manubrium par la <strong>symphyse manubrio-sternale</strong> (angle sternal, saillie palpable) ; ses bords portent les incisures costales pour les cartilages 2 (moitié) à 7. Face antérieure : grand pectoral ; face postérieure : transverse du thorax.</li>
<li>Le <strong>processus xiphoïde</strong> : petite pièce cartilagineuse puis ossifiée (après 40 ans), insertion de la ligne blanche, du diaphragme et des droits de l'abdomen ; en regard de T10.</li>
</ul>
<p>Le sternum est fait d'os spongieux richement vascularisé entre deux fines corticales : c'est un site de <strong>ponction de moelle osseuse</strong> (myélogramme, 2<sup>e</sup> espace intercostal) et un os fragile en arrière duquel se trouvent le cœur et les gros vaisseaux (fractures par choc direct, volant). La <strong>sternotomie</strong> médiane est la voie d'abord de la chirurgie cardiaque.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la 1<sup>re</sup> côte s'articule avec le manubrium seul ; la 2<sup>e</sup> côte s'articule à cheval sur l'angle sternal (manubrium et corps) ; les côtes 3 à 7 s'articulent avec le corps ; les côtes 8, 9 et 10 ne touchent pas le sternum (elles rejoignent le cartilage de la 7<sup>e</sup>) ; les côtes 11 et 12 sont libres.</div>`
            },
            {
              titre: "Les côtes et les cartilages costaux",
              contenu: `<p>Les <strong>côtes</strong> sont 12 paires d'os plats, allongés, incurvés, qui vont des vertèbres thoraciques vers le sternum, obliques en bas et en avant (de plus en plus obliques de haut en bas). Leur longueur augmente de la 1<sup>re</sup> à la 7<sup>e</sup> puis diminue.</p>
<table>
<thead><tr><th>Groupe</th><th>Côtes</th><th>Caractère</th></tr></thead>
<tbody>
<tr><td><strong>Côtes vraies</strong> (sternales)</td><td>1 à 7</td><td>Cartilage costal articulé directement avec le sternum</td></tr>
<tr><td><strong>Fausses côtes</strong> (asternales)</td><td>8 à 10</td><td>Cartilage rejoignant le cartilage de la côte sus-jacente (rebord costal)</td></tr>
<tr><td><strong>Côtes flottantes</strong></td><td>11 et 12</td><td>Extrémité antérieure libre dans les muscles de la paroi ; pas de tubercule ni de col articulé</td></tr>
</tbody>
</table>
<h4>La côte type (3 à 9)</h4>
<ul>
<li>La <strong>tête</strong> : extrémité postérieure portant deux facettes articulaires séparées par une crête, pour les corps de la vertèbre de même numéro et de la vertèbre sus-jacente.</li>
<li>Le <strong>col</strong> : rétréci, en avant du processus transverse.</li>
<li>Le <strong>tubercule</strong> : saillie postérieure avec une facette pour le processus transverse de la vertèbre de même numéro.</li>
<li>Le <strong>corps</strong> : aplati, avec une face externe convexe, une face interne concave creusée dans sa partie inférieure par le <strong>sillon costal</strong> (où chemine le pédicule intercostal, protégé par le bord inférieur) ; un <strong>angle costal</strong> (changement de direction, insertion de l'ilio-costal) ; un bord supérieur mousse, un bord inférieur tranchant.</li>
<li>L'<strong>extrémité antérieure</strong> : cupule recevant le <strong>cartilage costal</strong> (cartilage hyalin, prolongeant la côte, de plus en plus long de la 1<sup>re</sup> à la 7<sup>e</sup> ; il donne à la cage son élasticité et se calcifie avec l'âge).</li>
</ul>
<h4>Côtes particulières</h4>
<ul>
<li>La <strong>1<sup>re</sup> côte</strong> : la plus courte, la plus large, la plus incurvée, horizontale, aplatie de haut en bas ; sa face supérieure porte le <strong>tubercule du scalène antérieur</strong> (de Lisfranc) séparant le <strong>sillon de la veine subclavière</strong> (en avant) du <strong>sillon de l'artère subclavière</strong> (en arrière, avec le tronc inférieur du plexus brachial) ; une seule facette sur la tête (T1).</li>
<li>La <strong>2<sup>e</sup> côte</strong> : tubérosité du dentelé antérieur.</li>
<li>Les <strong>10<sup>e</sup>, 11<sup>e</sup> et 12<sup>e</sup> côtes</strong> : une seule facette sur la tête ; les 11<sup>e</sup> et 12<sup>e</sup> n'ont ni tubercule articulaire ni sillon costal net.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les <strong>fractures de côtes</strong> (choc direct, sujet âgé) siègent surtout sur les côtes 4 à 9, au niveau de l'angle ou de la ligne axillaire ; elles peuvent blesser la plèvre et le poumon (pneumothorax, hémothorax), et pour les dernières côtes le foie ou la rate. Un <strong>volet costal</strong> (fractures bifocales de plusieurs côtes adjacentes) rend la paroi instable, avec respiration paradoxale. Une <strong>côte cervicale</strong> surnuméraire (C7) peut comprimer le plexus brachial et l'artère subclavière (syndrome du défilé).</div>`
            },
            {
              titre: "Les articulations de la cage thoracique",
              contenu: `<ul>
<li>Les <strong>articulations costo-vertébrales</strong> (de la tête costale) : synoviales planes entre les deux facettes de la tête et les corps de deux vertèbres adjacentes (et le disque, auquel la tête est unie par le ligament intra-articulaire) ; renforcées par le <strong>ligament radié</strong> de la tête costale. Pour les côtes 1, 10, 11 et 12, une seule vertèbre.</li>
<li>Les <strong>articulations costo-transversaires</strong> : synoviales planes entre le tubercule costal et le processus transverse (côtes 1 à 10), unies par les ligaments costo-transversaires (supérieur, latéral et interosseux). Les deux articulations (costo-vertébrale et costo-transversaire) forment un ensemble mécanique à un seul axe passant par le col de la côte : <strong>oblique en arrière et latéralement pour les côtes supérieures</strong> (mouvement en « anse de pompe » : élévation de l'extrémité antérieure, augmentation du diamètre antéro-postérieur) et <strong>proche du plan sagittal pour les côtes inférieures</strong> (mouvement en « anse de seau » : élévation de la partie latérale, augmentation du diamètre transversal).</li>
<li>Les <strong>articulations sterno-costales</strong> : la 1<sup>re</sup> est une <strong>synchondrose</strong> (immobile) ; les 2<sup>e</sup> à 7<sup>e</sup> sont des articulations <strong>synoviales planes</strong> (ligaments sterno-costaux radiés), peu mobiles.</li>
<li>Les <strong>articulations costo-chondrales</strong> (côte–cartilage) : synarthroses (emboîtement). Les <strong>articulations interchondrales</strong> entre les cartilages 6 à 10 : petites synoviales.</li>
<li>Les articulations du sternum : symphyse manubrio-sternale (angle sternal, peu mobile, s'ossifie tardivement) et synchondrose xipho-sternale.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>syndrome de Tietze</strong> est une inflammation douloureuse des articulations sterno-costales ou costo-chondrales (2<sup>e</sup>–3<sup>e</sup> côtes), cause fréquente de douleur thoracique bénigne reproduite à la palpation. L'<strong>arthrose costo-vertébrale</strong> ou l'enraidissement de la spondylarthrite ankylosante diminuent l'ampliation thoracique.</div>`
            },
            {
              titre: "Les espaces intercostaux et leurs muscles",
              contenu: `<p>Il existe <strong>11 espaces intercostaux</strong> de chaque côté, plus hauts en avant qu'en arrière, numérotés d'après la côte sus-jacente. Chaque espace est comblé par trois plans musculaires et parcouru par un pédicule vasculo-nerveux.</p>
<table>
<thead><tr><th>Muscle</th><th>Direction des fibres</th><th>Étendue</th><th>Action</th></tr></thead>
<tbody>
<tr><td><strong>Intercostal externe</strong></td><td>Obliques en bas et en avant (comme les mains dans les poches)</td><td>Du tubercule costal à la jonction costo-chondrale ; prolongé en avant par la membrane intercostale externe</td><td><strong>Inspirateur</strong> (élève les côtes)</td></tr>
<tr><td><strong>Intercostal interne</strong></td><td>Obliques en bas et en arrière (perpendiculaires aux externes)</td><td>Du sternum à l'angle costal ; prolongé en arrière par la membrane intercostale interne</td><td><strong>Expirateur</strong> (abaisse les côtes) ; sa partie interchondrale est inspiratrice</td></tr>
<tr><td><strong>Intercostal intime</strong></td><td>Comme l'interne, dont il est séparé par le pédicule</td><td>Partie moyenne de l'espace</td><td>Expirateur accessoire</td></tr>
<tr><td>Subcostaux, transverse du thorax</td><td>Face interne, en arrière et en avant</td><td>Inconstants</td><td>Expirateurs accessoires</td></tr>
</tbody>
</table>
<p>Le <strong>pédicule intercostal</strong> chemine dans le <strong>sillon costal</strong>, au bord inférieur de la côte sus-jacente, entre l'intercostal interne et l'intercostal intime, dans l'ordre de haut en bas : <strong>Veine, Artère, Nerf</strong> (« VAN »). L'<strong>artère intercostale postérieure</strong> (branche de l'aorte thoracique pour les espaces 3 à 11 ; du tronc costo-cervical pour les deux premiers) s'anastomose en avant avec les <strong>artères intercostales antérieures</strong>, branches de l'<strong>artère thoracique interne</strong> (née de la subclavière, descendant à 1 cm du bord du sternum, utilisée pour les pontages coronaires) et de la musculo-phrénique. Les veines rejoignent le système azygos en arrière et les veines thoraciques internes en avant. Le <strong>nerf intercostal</strong> (rameau antérieur du nerf thoracique T1 à T11 ; T12 est le nerf subcostal) innerve les muscles intercostaux, donne un rameau cutané latéral (ligne axillaire) et se termine en rameau cutané antérieur ; les nerfs T7 à T11 se prolongent dans la paroi abdominale (muscles larges, droit de l'abdomen, peau de l'abdomen : T10 pour l'ombilic).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les <strong>ponctions pleurales</strong> et les <strong>drains thoraciques</strong> sont introduits au <strong>bord supérieur de la côte inférieure</strong> de l'espace, loin du pédicule qui longe le bord inférieur de la côte sus-jacente ; l'exsufflation d'un pneumothorax compressif se fait au 2<sup>e</sup> espace intercostal sur la ligne médio-claviculaire, le drainage au 4<sup>e</sup>–5<sup>e</sup> espace sur la ligne axillaire moyenne (« triangle de sécurité »). Le <strong>zona intercostal</strong> dessine un dermatome en hémi-ceinture ; les névralgies intercostales et les douleurs projetées (infarctus, pleurésie) suivent ces nerfs.</div>`
            },
            {
              titre: "Le diaphragme",
              contenu: `<p>Le <strong>diaphragme</strong> est une cloison musculo-tendineuse en forme de double coupole qui sépare le thorax de l'abdomen. C'est le <strong>muscle inspirateur principal</strong> (il assure 60 à 75 % du volume courant au repos). Il comprend une partie centrale tendineuse, le <strong>centre tendineux</strong> (centre phrénique, en forme de trèfle à trois folioles, sur lequel repose le cœur) et une partie charnue périphérique à trois origines :</p>
<ul>
<li><strong>Partie sternale</strong> : deux faisceaux de la face postérieure du processus xiphoïde.</li>
<li><strong>Partie costale</strong> : faces internes des cartilages et des six dernières côtes (7 à 12), s'engrenant avec le transverse de l'abdomen.</li>
<li><strong>Partie lombale</strong> : les <strong>piliers</strong> (crus) droit (L1–L3, le plus long) et gauche (L1–L2), insérés sur les corps vertébraux et les disques, réunis en avant de l'aorte par le <strong>ligament arqué médian</strong> ; les <strong>ligaments arqués médiaux</strong> (arcades du psoas, de L1–L2 au processus costiforme de L1) et <strong>latéraux</strong> (arcades du carré des lombes, du processus costiforme de L1 à la 12<sup>e</sup> côte).</li>
</ul>
<p>La coupole droite monte jusqu'au 4<sup>e</sup> espace intercostal (foie), la gauche jusqu'au 5<sup>e</sup>. Entre les parties sternale et costale (trigone sterno-costal : passage des vaisseaux épigastriques supérieurs, hernie de Morgagni) et entre les parties costale et lombale (trigone lombo-costal, hernie de Bochdalek) existent des zones de faiblesse.</p>
<h4>Les orifices du diaphragme</h4>
<table>
<thead><tr><th>Orifice</th><th>Niveau</th><th>Contenu</th></tr></thead>
<tbody>
<tr><td><strong>Foramen de la veine cave</strong></td><td>T8, dans le centre tendineux (foliole droite)</td><td>Veine cave inférieure, rameaux du nerf phrénique droit</td></tr>
<tr><td><strong>Hiatus œsophagien</strong></td><td>T10, dans les fibres du pilier droit (musculaire, sphincter extrinsèque)</td><td>Œsophage, nerfs vagues (troncs vagaux antérieur et postérieur), rameaux de l'artère gastrique gauche</td></tr>
<tr><td><strong>Hiatus aortique</strong></td><td>T12, en arrière du ligament arqué médian (ostéo-fibreux, non musculaire : l'aorte n'est pas comprimée)</td><td>Aorte, conduit thoracique, (veine azygos)</td></tr>
<tr><td>Fentes des piliers</td><td>T12–L1</td><td>Nerfs splanchniques, veines azygos et hémi-azygos, tronc sympathique (en arrière du ligament arqué médial)</td></tr>
</tbody>
</table>
<p><strong>Innervation</strong> : motrice et sensitive (centre) par le <strong>nerf phrénique</strong> (C3–C4–C5, « C3, 4, 5 keep the diaphragm alive »), qui descend dans le médiastin en avant de la racine du poumon ; la périphérie est sensitive par les six derniers nerfs intercostaux (douleur projetée à l'épaule pour le centre via C4 ; douleur de la base thoracique pour la périphérie). <strong>Vascularisation</strong> : artères phréniques inférieures (aorte abdominale), phréniques supérieures, musculo-phréniques et péricardo-phréniques (thoracique interne).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>paralysie phrénique</strong> (lésion cervicale, chirurgie, tumeur médiastinale) donne une ascension de la coupole et une respiration paradoxale ; une lésion médullaire au-dessus de C3 impose la ventilation mécanique. La <strong>hernie hiatale</strong> est l'ascension de l'estomac par le hiatus œsophagien (par glissement ou par roulement), favorisant le reflux. L'irritation du diaphragme (péritonite, hémopéritoine) donne une douleur projetée à l'épaule (signe de Kehr). Le hoquet est une contraction réflexe du diaphragme.</div>`
            },
            {
              titre: "La mécanique ventilatoire",
              contenu: `<p>La ventilation résulte des variations de volume de la cage thoracique, transmises aux poumons par la plèvre (pression pleurale négative).</p>
<h4>Inspiration</h4>
<p>Toujours <strong>active</strong>. Au repos : contraction du <strong>diaphragme</strong> (sa descente de 1,5 cm augmente le diamètre vertical ; en prenant appui sur les viscères, il soulève les côtes inférieures), des <strong>intercostaux externes</strong> et des <strong>scalènes</strong> (fixation des deux premières côtes). Les côtes supérieures s'élèvent en « anse de pompe » (augmentation du diamètre antéro-postérieur, le sternum avance), les côtes inférieures en « anse de seau » (augmentation du diamètre transversal). Volume courant : environ 500 mL. À l'effort, les <strong>inspirateurs accessoires</strong> interviennent : sterno-cléido-mastoïdiens, grands et petits pectoraux, dentelés antérieurs (point fixe sur la scapula : le patient dyspnéique prend appui sur ses bras), dentelé postéro-supérieur, élévateurs des côtes, muscles du dos.</p>
<h4>Expiration</h4>
<p><strong>Passive</strong> au repos : relâchement des inspirateurs, rétraction élastique des poumons et de la cage, remontée du diaphragme (course totale 7 à 10 cm à l'effort). <strong>Active</strong> à l'effort, à la toux, lors de la parole : <strong>muscles abdominaux</strong> (transverse, obliques, droits : ils refoulent les viscères et le diaphragme vers le haut et abaissent les côtes), intercostaux internes, dentelé postéro-inférieur, carré des lombes, transverse du thorax.</p>
<h4>Compliance et travail</h4>
<p>Les cartilages costaux et l'orientation des côtes donnent à la cage son élasticité. Avec l'âge, la calcification des cartilages et la cyphose réduisent la compliance thoracique. Les pathologies obstructives (emphysème) distendent le thorax (thorax en tonneau, horizontalisation des côtes) ; les atteintes neuromusculaires (myopathies, lésions médullaires hautes) réduisent la force des muscles respiratoires ; les déformations (scoliose grave, cyphose) réduisent les volumes.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> inspiration de repos = diaphragme (C3–C5) + intercostaux externes + scalènes ; expiration de repos = passive ; expiration forcée = abdominaux + intercostaux internes. Côtes hautes : anse de pompe (diamètre antéro-postérieur) ; côtes basses : anse de seau (diamètre transversal).</div>`
            }
          ],
          points_cles: [
            "La cage thoracique comprend 12 vertèbres thoraciques, 12 paires de côtes et le sternum ; l'angle sternal (2e côte, T4–T5) est le repère clé.",
            "Sternum : manubrium (incisure jugulaire, clavicules, 1re côte), corps (côtes 2 à 7), processus xiphoïde (T10) ; site de myélogramme et de sternotomie.",
            "Côtes vraies 1 à 7, fausses 8 à 10 (rebord costal), flottantes 11 et 12 ; la côte type a une tête (deux facettes), un col, un tubercule, un corps avec sillon costal inférieur.",
            "La 1re côte porte le tubercule du scalène antérieur entre les sillons de la veine (avant) et de l'artère (arrière) subclavières.",
            "Articulations costo-vertébrales et costo-transversaires planes à axe commun : anse de pompe (côtes hautes) et anse de seau (côtes basses) ; 1re sterno-costale synchondrose, 2e à 7e synoviales.",
            "Onze espaces intercostaux : intercostaux externes (inspirateurs, fibres en bas et en avant), internes (expirateurs), intimes ; pédicule VAN (veine, artère, nerf) dans le sillon costal au bord inférieur de la côte sus-jacente.",
            "Ponction pleurale au bord supérieur de la côte inférieure ; drainage au 4e–5e espace, ligne axillaire moyenne ; artère thoracique interne à 1 cm du sternum.",
            "Diaphragme : centre tendineux, parties sternale, costale et lombale (piliers, ligaments arqués) ; orifices : veine cave T8, œsophage T10 (musculaire, nerfs vagues), aorte T12 (ostéo-fibreux, conduit thoracique).",
            "Nerf phrénique C3–C5 : moteur et sensitif du centre (douleur projetée à l'épaule) ; périphérie sensitive par les intercostaux.",
            "Inspiration active (diaphragme 60–75 %, intercostaux externes, scalènes ; accessoires : SCM, pectoraux, dentelés) ; expiration passive au repos, active à l'effort (abdominaux, intercostaux internes)."
          ],
          lexique: [
            { terme: "Angle sternal", def: "Angle de Louis, saillie de la symphyse manubrio-sternale en regard du 2e cartilage costal et de T4–T5." },
            { terme: "Incisure jugulaire", def: "Échancrure du bord supérieur du manubrium sternal (fourchette sternale), en regard de T2–T3." },
            { terme: "Côtes vraies / fausses / flottantes", def: "Côtes 1–7 articulées au sternum / 8–10 unies au cartilage sus-jacent / 11–12 libres." },
            { terme: "Sillon costal", def: "Gouttière de la face interne du bord inférieur de la côte où chemine le pédicule intercostal." },
            { terme: "Tubercule du scalène antérieur", def: "Saillie de la face supérieure de la 1re côte séparant les sillons de la veine et de l'artère subclavières." },
            { terme: "Centre tendineux", def: "Partie aponévrotique centrale du diaphragme, en trèfle à trois folioles, traversée par la veine cave inférieure." },
            { terme: "Piliers du diaphragme", def: "Faisceaux lombaux (crus) insérés sur L1–L3 à droite et L1–L2 à gauche, réunis par le ligament arqué médian." },
            { terme: "Hiatus œsophagien", def: "Orifice musculaire du diaphragme en T10, dans le pilier droit, traversé par l'œsophage et les nerfs vagues." },
            { terme: "Nerf phrénique", def: "Nerf du plexus cervical (C3–C5), moteur du diaphragme et sensitif de son centre, du péricarde et des plèvres médiastinale et diaphragmatique." },
            { terme: "Anse de pompe / anse de seau", def: "Mouvement des côtes supérieures augmentant le diamètre antéro-postérieur / des côtes inférieures augmentant le diamètre transversal." }
          ],
          qcm: [
            {
              q: "Concernant le sternum, quelles propositions sont exactes ?",
              options: [
                "A. Il est formé du manubrium, du corps et du processus xiphoïde.",
                "B. L'angle sternal est en regard du 2e cartilage costal.",
                "C. La 1re côte s'articule avec le corps du sternum.",
                "D. L'angle sternal se projette en regard de T4–T5.",
                "E. Le sternum est un site possible de ponction de moelle osseuse."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la 1re côte s'articule avec le manubrium par une synchondrose ; la 2e est à cheval sur l'angle sternal."
            },
            {
              q: "Concernant les côtes, quelles propositions sont exactes ?",
              options: [
                "A. Les côtes 8 à 10 sont des côtes flottantes.",
                "B. La tête d'une côte type s'articule avec deux vertèbres adjacentes.",
                "C. Le sillon costal longe le bord supérieur de la côte.",
                "D. La 1re côte porte le tubercule du scalène antérieur entre les sillons de la veine et de l'artère subclavières.",
                "E. Les côtes 11 et 12 n'ont pas de tubercule articulaire."
              ],
              bonnes: [1, 3, 4],
              explication: "B, D et E sont vraies. A est fausse : les côtes 8 à 10 sont des fausses côtes ; les flottantes sont 11 et 12. C est fausse : le sillon costal longe le bord inférieur, d'où la règle de ponction au bord supérieur de la côte sous-jacente."
            },
            {
              q: "Concernant les espaces intercostaux, quelles propositions sont exactes ?",
              options: [
                "A. Il existe 12 espaces intercostaux de chaque côté.",
                "B. Les intercostaux externes ont des fibres obliques en bas et en avant et sont inspirateurs.",
                "C. Le pédicule intercostal est disposé de haut en bas : veine, artère, nerf.",
                "D. Le pédicule chemine entre l'intercostal externe et l'intercostal interne.",
                "E. Les artères intercostales postérieures des espaces 3 à 11 naissent de l'aorte thoracique."
              ],
              bonnes: [1, 2, 4],
              explication: "B, C et E sont vraies. A est fausse : 11 espaces (12 côtes). D est fausse : le pédicule chemine entre l'intercostal interne et l'intercostal intime."
            },
            {
              q: "Concernant le diaphragme, quelles propositions sont exactes ?",
              options: [
                "A. Le foramen de la veine cave est situé dans le centre tendineux au niveau de T8.",
                "B. Le hiatus œsophagien est situé au niveau de T12.",
                "C. Le hiatus aortique est traversé par l'aorte et le conduit thoracique.",
                "D. Le diaphragme est innervé par le nerf phrénique (C3–C5).",
                "E. Le pilier droit est plus long que le pilier gauche."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le hiatus œsophagien est en T10 ; T12 correspond au hiatus aortique."
            },
            {
              q: "Concernant la mécanique ventilatoire, quelles propositions sont exactes ?",
              options: [
                "A. L'inspiration de repos est un phénomène actif.",
                "B. L'expiration de repos est assurée par la contraction des intercostaux internes.",
                "C. Le diaphragme assure la majorité du volume courant au repos.",
                "D. Les muscles abdominaux sont des expirateurs actifs.",
                "E. Les côtes inférieures se déplacent en anse de pompe."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : l'expiration de repos est passive (élasticité). E est fausse : les côtes inférieures se déplacent en anse de seau (diamètre transversal) ; l'anse de pompe concerne les côtes supérieures."
            },
            {
              q: "Concernant les applications cliniques de la paroi thoracique, quelles propositions sont exactes ?",
              options: [
                "A. Une ponction pleurale se fait au bord inférieur de la côte supérieure de l'espace.",
                "B. L'exsufflation d'un pneumothorax compressif se fait au 2e espace intercostal sur la ligne médio-claviculaire.",
                "C. L'irritation du centre du diaphragme peut donner une douleur projetée à l'épaule.",
                "D. L'artère thoracique interne descend à environ 1 cm du bord du sternum.",
                "E. Une lésion médullaire complète au-dessus de C3 est compatible avec une ventilation spontanée."
              ],
              bonnes: [1, 2, 3],
              explication: "B, C et D sont vraies. A est fausse : il faut ponctionner au bord supérieur de la côte inférieure pour éviter le pédicule. E est fausse : au-dessus de C3, le diaphragme est paralysé ; la ventilation mécanique est nécessaire."
            }
          ]
        },
        {
          id: "thorax-contenu-mediastin",
          titre: "Thorax : le médiastin, le cœur, les poumons et les plèvres",
          duree: 55,
          objectifs: [
            "Définir le médiastin, ses limites et ses subdivisions, et situer ses principaux éléments.",
            "Décrire le cœur : situation, configuration externe et interne, valves, vascularisation coronaire, tissu nodal, péricarde.",
            "Décrire les gros vaisseaux du médiastin (aorte, tronc pulmonaire, veines caves, azygos) et leurs rapports.",
            "Décrire la trachée, les bronches, les poumons (lobes, segments, hile) et les plèvres (feuillets, récessus).",
            "Décrire l'œsophage thoracique, les nerfs vagues et phréniques, la chaîne sympathique et le conduit thoracique."
          ],
          sections: [
            {
              titre: "Le médiastin et ses subdivisions",
              contenu: `<p>Le <strong>médiastin</strong> est la région médiane du thorax, comprise entre les deux cavités pleurales. Il est limité en avant par le sternum, en arrière par les corps des vertèbres thoraciques, latéralement par les plèvres médiastinales, en haut par l'ouverture supérieure du thorax (en continuité avec le cou), en bas par le diaphragme. Un plan horizontal passant par l'<strong>angle sternal</strong> et le disque <strong>T4–T5</strong> le divise en :</p>
<ul>
<li>le <strong>médiastin supérieur</strong> : contient, d'avant en arrière, le thymus (ou ses reliquats graisseux), les veines brachio-céphaliques et la veine cave supérieure, l'arc aortique et ses trois branches, la trachée, l'œsophage, le conduit thoracique, les nerfs vagues, phréniques et récurrent gauche ;</li>
<li>le <strong>médiastin inférieur</strong>, subdivisé par le péricarde en <strong>médiastin antérieur</strong> (mince, entre le sternum et le péricarde : graisse, nœuds lymphatiques, ligaments sterno-péricardiques), <strong>médiastin moyen</strong> (péricarde, cœur, racine des gros vaisseaux : aorte ascendante, tronc pulmonaire, portion terminale de la veine cave supérieure, bronches principales, nerfs phréniques) et <strong>médiastin postérieur</strong> (entre le péricarde et la colonne : aorte thoracique descendante, œsophage, nerfs vagues, veines azygos, conduit thoracique, chaînes sympathiques, nerfs splanchniques).</li>
</ul>
<p>Une autre division (classique en France) distingue un médiastin antérieur (cœur et gros vaisseaux), moyen (trachée, bronches, hiles) et postérieur (œsophage, aorte descendante, azygos).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les <strong>masses médiastinales</strong> ont une topographie évocatrice : médiastin antérieur (les « 4 T » : thymome, lymphome (« terrible lymphoma »), tératome, goitre thyroïdien plongeant) ; médiastin moyen (adénopathies, kystes bronchogéniques) ; médiastin postérieur (tumeurs nerveuses, neurinomes, hernie hiatale). Le <strong>syndrome cave supérieur</strong> (compression par une tumeur) donne un œdème en pelerine et une circulation collatérale thoracique.</div>`
            },
            {
              titre: "Le cœur : situation, configuration externe et péricarde",
              contenu: `<p>Le <strong>cœur</strong> est un muscle creux à quatre cavités, de la taille d'un poing fermé (12 cm de long, 9 cm de large, 250–300 g chez l'adulte), situé dans le médiastin moyen, enveloppé du péricarde, reposant sur le centre tendineux du diaphragme. Il a la forme d'une <strong>pyramide triangulaire</strong> couchée, dont l'axe est oblique en bas, en avant et <strong>à gauche</strong> ; <strong>deux tiers</strong> du cœur sont à gauche de la ligne médiane. La <strong>base</strong> est postérieure (atrium gauche), l'<strong>apex</strong> antéro-inférieur gauche se projette au <strong>5<sup>e</sup> espace intercostal gauche</strong> sur la ligne médio-claviculaire (choc de pointe).</p>
<h4>Faces et bords</h4>
<ul>
<li><strong>Face antérieure</strong> (sterno-costale) : formée surtout par le <strong>ventricule droit</strong> (deux tiers) et l'atrium droit, un peu du ventricule gauche à gauche ; parcourue par le <strong>sillon coronaire</strong> (atrio-ventriculaire, horizontal, contenant l'artère coronaire droite) et le <strong>sillon interventriculaire antérieur</strong> (artère interventriculaire antérieure et grande veine du cœur). En haut, les <strong>auricules</strong> droite et gauche coiffent les origines de l'aorte et du tronc pulmonaire.</li>
<li><strong>Face inférieure</strong> (diaphragmatique) : ventricules gauche (deux tiers) et droit, sillon interventriculaire postérieur (artère interventriculaire postérieure).</li>
<li><strong>Face gauche</strong> (pulmonaire) : ventricule gauche, en rapport avec le poumon gauche (empreinte cardiaque) et le nerf phrénique gauche.</li>
<li><strong>Base</strong> : atrium gauche (quatre veines pulmonaires) et atrium droit (veines caves) ; en rapport avec l'œsophage (échographie trans-œsophagienne), l'aorte descendante, T5 à T8.</li>
<li>Bords : droit (atrium droit), inférieur (ventricule droit), gauche (ventricule gauche).</li>
</ul>
<h4>La silhouette radiologique</h4>
<p>De face, le bord droit est formé par la veine cave supérieure puis l'atrium droit ; le bord gauche par l'arc aortique (bouton aortique), le tronc pulmonaire (arc moyen) et le ventricule gauche (arc inférieur). L'index cardio-thoracique normal est inférieur à 0,5.</p>
<h4>Le péricarde</h4>
<p>Sac fibro-séreux à deux couches : le <strong>péricarde fibreux</strong>, résistant, inextensible, fixé au centre tendineux, au sternum (ligaments sterno-péricardiques) et aux gros vaisseaux, et le <strong>péricarde séreux</strong>, à deux feuillets : <strong>pariétal</strong> (tapissant le fibreux) et <strong>viscéral</strong> (épicarde, adhérent au cœur), délimitant la <strong>cavité péricardique</strong> (15 à 50 mL de liquide). Les lignes de réflexion forment deux culs-de-sac : le <strong>sinus transverse</strong> (entre les artères, en avant, et les veines, en arrière : passage du doigt pour clamper l'aorte et le tronc pulmonaire) et le <strong>sinus oblique</strong> (derrière l'atrium gauche, entre les veines pulmonaires). Innervation sensitive par les <strong>nerfs phréniques</strong> (douleur péricardique projetée à l'épaule et au cou) ; les nerfs phréniques et les vaisseaux péricardo-phréniques descendent sur ses faces latérales.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>épanchement péricardique</strong> aigu, même modeste (200 mL), peut comprimer le cœur (<strong>tamponnade</strong> : hypotension, turgescence jugulaire, bruits assourdis : triade de Beck) car le péricarde fibreux est inextensible ; la ponction péricardique se fait par voie sous-xiphoïdienne. La <strong>péricardite</strong> donne une douleur thoracique augmentée en décubitus, soulagée penché en avant.</div>`
            },
            {
              titre: "Le cœur : configuration interne et valves",
              contenu: `<p>Le cœur comporte deux <strong>atriums</strong> (oreillettes) à parois minces, séparés par le <strong>septum interatrial</strong>, et deux <strong>ventricules</strong> à parois épaisses, séparés par le <strong>septum interventriculaire</strong> (partie musculaire épaisse et partie membraneuse, haute, siège des communications interventriculaires congénitales). Le cœur droit (sang désoxygéné, basse pression) et le cœur gauche (sang oxygéné, haute pression) sont totalement séparés après la naissance.</p>
<table>
<thead><tr><th>Cavité</th><th>Reçoit</th><th>Éjecte par</th><th>Caractères</th></tr></thead>
<tbody>
<tr><td><strong>Atrium droit</strong></td><td>Veine cave supérieure, veine cave inférieure, sinus coronaire, petites veines cardiaques</td><td>Orifice tricuspide</td><td>Paroi lisse (sinus des veines caves) et paroi trabéculée (muscles pectinés, auricule) séparées par la crête terminale ; <strong>fosse ovale</strong> sur le septum (vestige du foramen ovale) ; valvule de la veine cave inférieure, orifice du sinus coronaire</td></tr>
<tr><td><strong>Ventricule droit</strong></td><td>Orifice tricuspide</td><td>Orifice du tronc pulmonaire</td><td>Paroi de 3–5 mm ; chambre de remplissage trabéculée (trabécules charnues, <strong>trabécule septo-marginale</strong> contenant la branche droite du faisceau de His) et chambre de chasse lisse (<strong>infundibulum</strong> ou cône artériel) séparées par la crête supra-ventriculaire ; trois muscles papillaires</td></tr>
<tr><td><strong>Atrium gauche</strong></td><td>Quatre veines pulmonaires</td><td>Orifice mitral</td><td>Le plus postérieur ; paroi lisse ; auricule gauche (thrombus de la fibrillation atriale) ; valvule de la fosse ovale</td></tr>
<tr><td><strong>Ventricule gauche</strong></td><td>Orifice mitral</td><td>Orifice aortique</td><td>Paroi de 10–15 mm (trois fois le droit) ; forme conique, apex du cœur ; deux muscles papillaires (antérieur et postérieur) ; chambre de chasse (vestibule aortique)</td></tr>
</tbody>
</table>
<h4>Les valves</h4>
<p>Les quatre orifices sont dans un même plan (<strong>plan valvulaire</strong>, oblique), soutenus par le <strong>squelette fibreux</strong> du cœur (anneaux fibreux, trigones). Les valves atrio-ventriculaires sont formées de cuspides (valvules) fixées à l'anneau, reliées aux <strong>muscles papillaires</strong> par les <strong>cordages tendineux</strong>, qui empêchent leur éversion en systole.</p>
<table>
<thead><tr><th>Valve</th><th>Siège</th><th>Constitution</th><th>Foyer d'auscultation</th></tr></thead>
<tbody>
<tr><td><strong>Tricuspide</strong></td><td>Atrio-ventriculaire droite</td><td>Trois cuspides (antérieure, postérieure, septale), trois muscles papillaires</td><td>4e–5e espace intercostal, bord gauche du sternum (xiphoïde)</td></tr>
<tr><td><strong>Mitrale</strong></td><td>Atrio-ventriculaire gauche</td><td>Deux cuspides (antérieure ou grande valve, postérieure ou petite valve), deux muscles papillaires</td><td>Apex, 5e espace gauche, ligne médio-claviculaire</td></tr>
<tr><td><strong>Pulmonaire</strong></td><td>Orifice du tronc pulmonaire</td><td>Trois valvules semi-lunaires (sigmoïdes : antérieure, droite, gauche), sans cordages</td><td>2e espace intercostal gauche</td></tr>
<tr><td><strong>Aortique</strong></td><td>Orifice aortique</td><td>Trois valvules semi-lunaires (postérieure, droite, gauche) ; au-dessus, les sinus aortiques d'où naissent les coronaires (droite et gauche)</td><td>2e espace intercostal droit</td></tr>
</tbody>
</table>
<p>Les valves atrio-ventriculaires se ferment en début de systole (1<sup>er</sup> bruit B1), les valves semi-lunaires en début de diastole (2<sup>e</sup> bruit B2).</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la valve mitrale est <strong>bicuspide</strong> ; la tricuspide est à droite ; les valves semi-lunaires n'ont ni cordages ni muscles papillaires. Les foyers d'auscultation ne correspondent pas à la projection anatomique des valves (toutes situées derrière le sternum) mais à la direction de propagation du flux. La fosse ovale est sur le septum interatrial ; sa perméabilité persiste chez 25 % des adultes (foramen ovale perméable).</div>`
            },
            {
              titre: "Vascularisation et innervation du cœur",
              contenu: `<h4>Les artères coronaires</h4>
<p>Elles naissent des <strong>sinus aortiques</strong> (de Valsalva) juste au-dessus des valvules aortiques et cheminent dans les sillons, sous l'épicarde, remplies en diastole.</p>
<ul>
<li>L'<strong>artère coronaire gauche</strong> : tronc court (1 cm) qui passe entre le tronc pulmonaire et l'auricule gauche et se divise en <strong>artère interventriculaire antérieure</strong> (IVA, dans le sillon interventriculaire antérieur jusqu'à l'apex ; branches septales et diagonales ; vascularise les deux tiers antérieurs du septum, la face antérieure du ventricule gauche et l'apex) et <strong>artère circonflexe</strong> (dans le sillon coronaire gauche ; branches marginales gauches ; face latérale et postérieure du ventricule gauche).</li>
<li>L'<strong>artère coronaire droite</strong> : dans le sillon coronaire droit, contourne le bord droit, et se termine en <strong>artère interventriculaire postérieure</strong> (dans 85 % des cas : « dominance droite ») ; branches : artère du nœud sinusal (60 %), artères marginales droites, artère du nœud atrio-ventriculaire (90 %). Elle vascularise l'atrium droit, le ventricule droit, le tiers postérieur du septum, la face inférieure du ventricule gauche et le tissu nodal.</li>
</ul>
<p>Les coronaires sont des artères fonctionnellement <strong>terminales</strong> (anastomoses insuffisantes) : l'occlusion donne un <strong>infarctus</strong> du territoire : IVA → infarctus antérieur (V1–V4) ; circonflexe → latéral (V5–V6, D1, aVL) ; coronaire droite → inférieur (D2, D3, aVF) et ventricule droit, avec troubles conductifs.</p>
<h4>Les veines</h4>
<p>La <strong>grande veine du cœur</strong> (sillon interventriculaire antérieur puis coronaire gauche), la veine moyenne (sillon interventriculaire postérieur) et la petite veine se jettent dans le <strong>sinus coronaire</strong> (3 cm, dans le sillon coronaire postérieur, s'ouvrant dans l'atrium droit entre la veine cave inférieure et l'orifice tricuspide) ; les veines antérieures du ventricule droit et les petites veines (de Thébésius) s'ouvrent directement dans les cavités.</p>
<h4>Le tissu nodal (système cardionecteur)</h4>
<ul>
<li>Le <strong>nœud sinu-atrial</strong> (de Keith et Flack) : pacemaker physiologique (60–100/min), à la jonction de la veine cave supérieure et de l'atrium droit (crête terminale).</li>
<li>Le <strong>nœud atrio-ventriculaire</strong> (d'Aschoff-Tawara) : dans le septum interatrial, au sommet du <strong>triangle de Koch</strong> (orifice du sinus coronaire, cuspide septale de la tricuspide, tendon de Todaro) ; ralentit la conduction (40–60/min en cas de défaillance sinusale).</li>
<li>Le <strong>faisceau atrio-ventriculaire</strong> (de His) : traverse le trigone fibreux droit et la partie membraneuse du septum, se divise en <strong>branches droite</strong> (dans la trabécule septo-marginale) <strong>et gauche</strong> (hémibranches antérieure et postérieure), puis en <strong>réseau de Purkinje</strong> sous-endocardique (20–40/min).</li>
</ul>
<h4>Innervation</h4>
<p>Le <strong>plexus cardiaque</strong> (à la base du cœur, autour de l'arc aortique et de la bifurcation trachéale) reçoit les <strong>nerfs cardiaques sympathiques</strong> (ganglions cervicaux et thoraciques supérieurs T1–T4 : accélération, inotropie, dilatation coronaire) et les <strong>rameaux cardiaques des nerfs vagues</strong> (parasympathique : ralentissement, surtout du nœud sinusal). Les afférences douloureuses suivent les voies sympathiques vers T1–T4 : douleur projetée rétro-sternale, irradiant au bras gauche (T1–T2) et à la mâchoire (angor).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> coronaire gauche = IVA + circonflexe (face antérieure et latérale, deux tiers antérieurs du septum) ; coronaire droite = ventricule droit, face inférieure, tissu nodal (nœuds sinusal et AV), interventriculaire postérieure dans 85 % des cas. Nœud sinusal → nœud AV → faisceau de His → branches → Purkinje.</div>`
            },
            {
              titre: "Les gros vaisseaux du médiastin",
              contenu: `<ul>
<li>L'<strong>aorte ascendante</strong> (5–6 cm) : naît du ventricule gauche en arrière du tronc pulmonaire, dans le péricarde ; sinus aortiques (coronaires) ; monte en avant et à droite jusqu'au niveau de l'angle sternal.</li>
<li>L'<strong>arc aortique</strong> : dans le médiastin supérieur, de l'articulation sterno-costale droite à T4 à gauche ; concave en bas (sous lui : bronche principale gauche, bifurcation du tronc pulmonaire, ligament artériel, nerf laryngé récurrent gauche qui le contourne, plexus cardiaque) ; ses trois branches collatérales naissent de sa convexité : <strong>tronc brachio-céphalique</strong>, <strong>artère carotide commune gauche</strong>, <strong>artère subclavière gauche</strong>. En avant : nerfs phrénique et vague gauches, veine brachio-céphalique gauche, thymus.</li>
<li>L'<strong>aorte thoracique descendante</strong> : de T4 à T12, dans le médiastin postérieur, d'abord à gauche puis en avant de la colonne ; rapports : œsophage en avant (puis à droite), veine hémi-azygos et conduit thoracique à droite, plèvre gauche. Branches pariétales (intercostales postérieures 3 à 11, subcostales, phréniques supérieures) et viscérales (bronchiques, œsophagiennes, péricardiques, médiastinales).</li>
<li>Le <strong>tronc pulmonaire</strong> (5 cm, 3 cm de diamètre) : naît du ventricule droit en avant et à gauche de l'aorte, monte en arrière et à gauche, se divise sous l'arc aortique en artères pulmonaires droite (longue, passe derrière l'aorte ascendante et la veine cave supérieure) et gauche (courte, unie à l'arc aortique par le <strong>ligament artériel</strong>, vestige du canal artériel).</li>
<li>Les <strong>veines pulmonaires</strong> (quatre, deux par côté : supérieure et inférieure) : du hile vers l'atrium gauche ; elles n'ont pas de valvules.</li>
<li>La <strong>veine cave supérieure</strong> (7 cm) : formée par les deux <strong>veines brachio-céphaliques</strong> (la gauche, longue et oblique, croise l'arc aortique en avant), derrière le 1<sup>er</sup> cartilage costal droit ; reçoit la <strong>veine azygos</strong> au niveau de T4 (crosse de l'azygos contournant la bronche principale droite) ; se jette dans l'atrium droit (T6). À sa droite : nerf phrénique droit, plèvre.</li>
<li>Le <strong>système azygos</strong> : la <strong>veine azygos</strong> monte à droite de la colonne (du confluent des veines lombale ascendante et subcostale droites), reçoit les intercostales postérieures droites, les veines hémi-azygos et hémi-azygos accessoire (gauches, qui croisent la colonne en T8–T9 et T7), les veines œsophagiennes et bronchiques ; voie de dérivation cave-cave.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>dissection aortique</strong> (douleur thoracique migratrice, HTA, Marfan) atteint l'aorte ascendante (type A, chirurgicale) ou descendante (type B). La <strong>coarctation</strong> siège à l'isthme (après la subclavière gauche). Un <strong>anévrisme de l'arc</strong> peut comprimer le nerf laryngé récurrent gauche (dysphonie), la trachée (dyspnée) ou l'œsophage (dysphagie). La <strong>persistance du canal artériel</strong> crée un shunt gauche-droite (souffle continu).</div>`
            },
            {
              titre: "Trachée, bronches, poumons et plèvres",
              contenu: `<h4>La trachée et les bronches</h4>
<p>La <strong>trachée</strong> est un conduit fibro-cartilagineux de <strong>10 à 12 cm</strong> de long et 2 cm de diamètre, de C6 (sous le cartilage cricoïde) à T4–T5, formé de <strong>16 à 20 anneaux cartilagineux</strong> en C ouverts en arrière (membrane trachéale, muscle trachéal, au contact de l'œsophage). Rapports cervicaux : glande thyroïde (isthme sur les 2<sup>e</sup>–4<sup>e</sup> anneaux), nerfs laryngés récurrents dans les angles trachéo-œsophagiens, carotides. Rapports thoraciques : arc aortique à gauche, tronc brachio-céphalique en avant, veine cave supérieure et crosse de l'azygos à droite, œsophage en arrière. Elle se divise à la <strong>carène</strong> (T4–T5, angle sternal) en deux <strong>bronches principales</strong> : la <strong>droite</strong>, plus courte (2,5 cm), plus large et <strong>plus verticale</strong> (corps étrangers inhalés) ; la <strong>gauche</strong>, plus longue (5 cm), plus horizontale, passant sous l'arc aortique. Chaque bronche principale donne des <strong>bronches lobaires</strong> (3 à droite, 2 à gauche) puis <strong>segmentaires</strong> (10 à droite, 8 à 10 à gauche), chaque segment pulmonaire étant une unité anatomique et chirurgicale (bronche, artère propres ; veines intersegmentaires).</p>
<h4>Les poumons</h4>
<p>Organes spongieux, élastiques, roses chez l'enfant puis gris, de 1,1 kg au total (le droit plus lourd), en forme de demi-cône avec un <strong>apex</strong> (dépassant la 1<sup>re</sup> côte de 2–3 cm, au contact de l'artère subclavière et du plexus brachial), une <strong>base</strong> concave sur le diaphragme, une <strong>face costale</strong>, une <strong>face médiastinale</strong> creusée du <strong>hile</strong> (bronche, artère, veines pulmonaires, artères et veines bronchiques, lymphatiques, plexus nerveux ; au hile droit : bronche en arrière, artère en avant et en haut, veines en bas ; au hile gauche : artère au-dessus de la bronche).</p>
<table>
<thead><tr><th></th><th>Poumon droit</th><th>Poumon gauche</th></tr></thead>
<tbody>
<tr><td>Lobes</td><td><strong>3</strong> : supérieur, moyen, inférieur</td><td><strong>2</strong> : supérieur (avec la lingula), inférieur</td></tr>
<tr><td>Scissures</td><td>Oblique (T3 en arrière → 6e cartilage en avant) et horizontale (4e côte)</td><td>Oblique seulement</td></tr>
<tr><td>Segments</td><td>10 (3 + 2 + 5)</td><td>8 à 10 (4–5 + 4–5)</td></tr>
<tr><td>Caractères</td><td>Plus volumineux, plus court (foie), plus large</td><td>Plus long, plus étroit, incisure cardiaque et empreinte du cœur, lingula</td></tr>
<tr><td>Rapports médiastinaux</td><td>Veine cave supérieure, azygos, œsophage, atrium droit</td><td>Arc et aorte descendante, ventricule gauche, artère subclavière gauche</td></tr>
</tbody>
</table>
<p><strong>Vascularisation</strong> : fonctionnelle par les <strong>artères pulmonaires</strong> (sang désoxygéné) et les veines pulmonaires ; nutritive par les <strong>artères bronchiques</strong> (aorte) et les veines bronchiques (azygos). <strong>Innervation</strong> : plexus pulmonaire (vague : bronchoconstriction, sécrétion ; sympathique : bronchodilatation). <strong>Lymphatiques</strong> : nœuds intrapulmonaires, broncho-pulmonaires (hilaires), trachéo-bronchiques, para-trachéaux, puis troncs broncho-médiastinaux.</p>
<h4>Les plèvres</h4>
<p>Chaque poumon est enveloppé d'une séreuse à deux feuillets : la <strong>plèvre viscérale</strong> (adhérente au poumon, s'enfonçant dans les scissures, insensible) et la <strong>plèvre pariétale</strong> (costale, diaphragmatique, médiastinale et dôme pleural ; <strong>très sensible</strong>, innervée par les nerfs intercostaux et phréniques), unies au hile par le <strong>ligament pulmonaire</strong>. La <strong>cavité pleurale</strong>, virtuelle (quelques mL), à pression négative, permet le glissement. Les <strong>récessus pleuraux</strong> (culs-de-sac) sont les zones où la plèvre pariétale se réfléchit sans que le poumon les occupe à l'inspiration de repos : <strong>récessus costo-diaphragmatique</strong> (le plus profond, descend jusqu'à la 12<sup>e</sup> côte en arrière ; siège des épanchements, ponctionné au 8<sup>e</sup>–9<sup>e</sup> espace sur la ligne axillaire postérieure) et <strong>costo-médiastinal</strong>. La plèvre descend deux côtes plus bas que le poumon (poumon à la 6<sup>e</sup> côte en avant, 8<sup>e</sup> sur la ligne axillaire, 10<sup>e</sup> en arrière ; plèvre à la 8<sup>e</sup>, 10<sup>e</sup> et 12<sup>e</sup>).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>pneumothorax</strong> (air dans la cavité pleurale, rupture de bulle apicale chez le sujet jeune longiligne ou traumatisme) collapse le poumon ; l'<strong>épanchement pleural</strong> (pleurésie) se collecte dans le récessus costo-diaphragmatique (ligne de Damoiseau). Un <strong>cancer de l'apex</strong> (syndrome de Pancoast-Tobias) envahit le plexus brachial (C8–T1) et le ganglion stellaire (Claude Bernard-Horner). La <strong>pneumonie du lobe moyen</strong> droit est en rapport avec la face antérieure du thorax ; les corps étrangers tombent dans la bronche principale droite.</div>`
            },
            {
              titre: "Œsophage thoracique, nerfs et conduit thoracique",
              contenu: `<h4>L'œsophage thoracique</h4>
<p>L'<strong>œsophage</strong> est un conduit musculaire de <strong>25 cm</strong> (de C6 à T11, soit 15 cm des arcades dentaires au début et 40 cm au cardia), aplati, dont la portion thoracique (environ 16–18 cm) descend dans le médiastin supérieur puis postérieur, en arrière de la trachée, puis de la bronche principale gauche et de l'atrium gauche (péricarde), en avant de la colonne puis de l'aorte descendante qu'il croise en avant pour passer à sa gauche et traverser le hiatus œsophagien (T10). Il présente quatre <strong>rétrécissements</strong> (cricoïdien, aortique, bronchique gauche, diaphragmatique) où se bloquent les corps étrangers et où siègent les lésions caustiques. Vascularisation segmentaire (thyroïdienne inférieure, bronchiques, œsophagiennes de l'aorte, gastrique gauche) ; drainage veineux vers l'azygos et, en bas, vers la veine gastrique gauche (système porte) : <strong>anastomose porto-cave</strong>, siège des <strong>varices œsophagiennes</strong> de l'hypertension portale. Innervation par les nerfs vagues (plexus œsophagien, puis troncs vagaux antérieur, surtout gauche, et postérieur, surtout droit, qui traversent le hiatus) et le sympathique.</p>
<h4>Les nerfs du médiastin</h4>
<ul>
<li>Les <strong>nerfs vagues</strong> (X) : le <strong>droit</strong> descend le long de la trachée, donne le <strong>nerf laryngé récurrent droit</strong> qui contourne l'artère subclavière droite, passe en arrière de la racine du poumon droit et forme le plexus œsophagien ; le <strong>gauche</strong> croise la face gauche de l'arc aortique (entre l'artère carotide commune et subclavière gauches), donne le <strong>nerf laryngé récurrent gauche</strong> qui contourne l'arc aortique sous le ligament artériel (d'où sa compression par les anévrismes et les tumeurs du médiastin : voix bitonale), puis passe derrière la racine du poumon gauche. Les deux donnent les rameaux cardiaques, pulmonaires et œsophagiens.</li>
<li>Les <strong>nerfs phréniques</strong> (C3–C5) : descendent <strong>en avant de la racine du poumon</strong> (contrairement aux vagues), entre la plèvre médiastinale et le péricarde, avec les vaisseaux péricardo-phréniques ; le droit le long de la veine cave supérieure et de l'atrium droit, le gauche croisant l'arc aortique et le ventricule gauche (plus long). Ils innervent le diaphragme, le péricarde, les plèvres médiastinale et diaphragmatique et le péritoine diaphragmatique.</li>
<li>Les <strong>chaînes sympathiques thoraciques</strong> : de part et d'autre de la colonne, sur les têtes costales, avec 11 à 12 <strong>ganglions</strong> ; le 1<sup>er</sup> fusionne souvent avec le ganglion cervical inférieur en <strong>ganglion stellaire</strong> (cervico-thoracique) sur le col de la 1<sup>re</sup> côte. Elles donnent les nerfs cardiaques et pulmonaires, et les <strong>nerfs splanchniques</strong> : <strong>grand splanchnique</strong> (T5–T9), <strong>petit splanchnique</strong> (T10–T11) et <strong>splanchnique imus</strong> (T12), qui traversent le diaphragme vers les ganglions cœliaques et aortico-rénaux (innervation sympathique des viscères abdominaux).</li>
</ul>
<h4>Le conduit thoracique</h4>
<p>Il naît de la <strong>citerne du chyle</strong> (L1–L2), traverse le hiatus aortique à droite de l'aorte, monte dans le médiastin postérieur <strong>entre l'aorte (à gauche) et la veine azygos (à droite)</strong>, en arrière de l'œsophage, croise la ligne médiane de droite à gauche en <strong>T4–T5</strong>, monte à gauche de l'œsophage dans le médiastin supérieur et se termine au <strong>confluent jugulo-subclavier gauche</strong>. Sa lésion (chirurgie de l'œsophage) donne un chylothorax.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> dans le médiastin, le nerf phrénique passe <strong>en avant</strong> de la racine du poumon, le nerf vague <strong>en arrière</strong>. Le nerf laryngé récurrent gauche contourne l'arc aortique, le droit l'artère subclavière droite. L'œsophage a quatre rétrécissements et traverse le diaphragme en T10 avec les troncs vagaux.</div>`
            }
          ],
          points_cles: [
            "Le médiastin est divisé par le plan de l'angle sternal (T4–T5) en médiastin supérieur et inférieur (antérieur, moyen = cœur et péricarde, postérieur = aorte descendante, œsophage, azygos, conduit thoracique).",
            "Le cœur (250–300 g) est aux deux tiers à gauche, apex au 5e espace intercostal gauche ; face antérieure surtout ventricule droit, base = atrium gauche ; péricarde fibreux inextensible (tamponnade), séreux à deux feuillets, sinus transverse et oblique.",
            "Atrium droit (fosse ovale, trois veines : caves et sinus coronaire), ventricule droit (trabécule septo-marginale, infundibulum), atrium gauche (quatre veines pulmonaires), ventricule gauche (paroi trois fois plus épaisse).",
            "Valves : tricuspide (trois cuspides), mitrale (bicuspide), pulmonaire et aortique (trois valvules semi-lunaires sans cordages) ; foyers : mitral à l'apex, aortique 2e espace droit, pulmonaire 2e espace gauche, tricuspide xiphoïde.",
            "Coronaire gauche = IVA + circonflexe ; coronaire droite = ventricule droit, face inférieure, nœuds sinusal et AV, interventriculaire postérieure (85 %) ; veines → sinus coronaire → atrium droit.",
            "Tissu nodal : nœud sinu-atrial (jonction VCS–atrium droit) → nœud AV (triangle de Koch) → faisceau de His → branches → Purkinje ; innervation sympathique T1–T4 (douleur projetée au bras gauche) et vagale.",
            "Arc aortique : tronc brachio-céphalique, carotide commune gauche, subclavière gauche ; ligament artériel ; nerf récurrent gauche sous l'arc ; veine cave supérieure reçoit l'azygos en T4.",
            "Trachée 10–12 cm, 16–20 anneaux, carène T4–T5 ; bronche droite plus courte, large et verticale (corps étrangers) ; poumon droit 3 lobes/10 segments, gauche 2 lobes (lingula)/8–10 segments.",
            "Plèvre viscérale insensible, pariétale sensible (intercostaux, phrénique) ; récessus costo-diaphragmatique descendant deux côtes sous le poumon ; cavité virtuelle à pression négative.",
            "Œsophage 25 cm, quatre rétrécissements, hiatus T10 avec les troncs vagaux, varices porto-caves ; phrénique en avant du hile, vague en arrière ; nerfs splanchniques T5–T12 ; conduit thoracique entre aorte et azygos, croise en T4–T5."
          ],
          lexique: [
            { terme: "Médiastin", def: "Région médiane du thorax entre les deux cavités pleurales, du sternum à la colonne, de l'ouverture supérieure au diaphragme." },
            { terme: "Sinus transverse du péricarde", def: "Cul-de-sac péricardique situé entre les artères (aorte, tronc pulmonaire) en avant et les veines (caves, pulmonaires) en arrière." },
            { terme: "Fosse ovale", def: "Dépression du septum interatrial vue de l'atrium droit, vestige du foramen ovale fœtal." },
            { terme: "Trabécule septo-marginale", def: "Bande musculaire du ventricule droit reliant le septum au muscle papillaire antérieur et contenant la branche droite du faisceau de His." },
            { terme: "Sinus aortiques", def: "Dilatations de la racine aortique au-dessus des valvules semi-lunaires, d'où naissent les artères coronaires." },
            { terme: "Nœud sinu-atrial", def: "Pacemaker du cœur, situé à la jonction de la veine cave supérieure et de l'atrium droit." },
            { terme: "Carène", def: "Éperon de la bifurcation trachéale en T4–T5, séparant les bronches principales droite et gauche." },
            { terme: "Hile pulmonaire", def: "Zone de la face médiastinale du poumon où pénètrent la bronche, l'artère pulmonaire, les veines, les vaisseaux bronchiques et les nerfs." },
            { terme: "Récessus costo-diaphragmatique", def: "Cul-de-sac inférieur de la plèvre pariétale, non occupé par le poumon au repos, siège des épanchements pleuraux." },
            { terme: "Ligament artériel", def: "Vestige fibreux du canal artériel unissant l'artère pulmonaire gauche à l'arc aortique." }
          ],
          qcm: [
            {
              q: "Concernant le médiastin et le péricarde, quelles propositions sont exactes ?",
              options: [
                "A. Le médiastin supérieur et le médiastin inférieur sont séparés par le plan de l'angle sternal (T4–T5).",
                "B. Le médiastin moyen contient le cœur et le péricarde.",
                "C. L'œsophage est un élément du médiastin antérieur.",
                "D. Le péricarde fibreux est très extensible, ce qui prévient la tamponnade.",
                "E. Le péricarde est innervé par les nerfs phréniques."
              ],
              bonnes: [0, 1, 4],
              explication: "A, B et E sont vraies. C est fausse : l'œsophage appartient au médiastin postérieur (et supérieur). D est fausse : le péricarde fibreux est inextensible, d'où la tamponnade pour des épanchements rapides même modestes."
            },
            {
              q: "Concernant la configuration du cœur, quelles propositions sont exactes ?",
              options: [
                "A. La face antérieure du cœur est formée principalement par le ventricule droit.",
                "B. La base du cœur correspond à l'atrium gauche.",
                "C. L'apex se projette au 5e espace intercostal gauche.",
                "D. La valve mitrale possède trois cuspides.",
                "E. Les valves semi-lunaires sont dépourvues de cordages tendineux."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la valve mitrale est bicuspide (grande et petite valves) ; c'est la tricuspide qui a trois cuspides."
            },
            {
              q: "Concernant les artères coronaires et le tissu nodal, quelles propositions sont exactes ?",
              options: [
                "A. L'artère coronaire gauche se divise en artère interventriculaire antérieure et artère circonflexe.",
                "B. L'artère coronaire droite vascularise le nœud sinu-atrial dans la majorité des cas.",
                "C. L'artère interventriculaire postérieure naît le plus souvent de la coronaire gauche.",
                "D. Le nœud atrio-ventriculaire est situé dans le septum interatrial au sommet du triangle de Koch.",
                "E. Le nœud sinu-atrial est le pacemaker physiologique du cœur."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : l'interventriculaire postérieure naît de la coronaire droite dans 85 % des cas (dominance droite)."
            },
            {
              q: "Concernant les gros vaisseaux du médiastin, quelles propositions sont exactes ?",
              options: [
                "A. L'arc aortique donne trois branches : tronc brachio-céphalique, carotide commune gauche et subclavière gauche.",
                "B. Le ligament artériel unit l'artère pulmonaire gauche à l'arc aortique.",
                "C. La veine cave supérieure reçoit la veine azygos.",
                "D. Le nerf laryngé récurrent gauche contourne l'artère subclavière gauche.",
                "E. La bronche principale gauche passe sous l'arc aortique."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : le récurrent gauche contourne l'arc aortique sous le ligament artériel ; c'est le récurrent droit qui contourne l'artère subclavière droite."
            },
            {
              q: "Concernant la trachée et les poumons, quelles propositions sont exactes ?",
              options: [
                "A. La trachée se divise au niveau de T4–T5.",
                "B. La bronche principale droite est plus verticale et plus large que la gauche.",
                "C. Le poumon gauche possède trois lobes.",
                "D. Le poumon droit possède dix segments.",
                "E. Les artères bronchiques assurent la vascularisation nutritive du poumon."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le poumon gauche a deux lobes (supérieur avec la lingula, inférieur) ; c'est le droit qui en a trois."
            },
            {
              q: "Concernant les plèvres, quelles propositions sont exactes ?",
              options: [
                "A. La plèvre viscérale est richement innervée et très sensible.",
                "B. La plèvre pariétale est innervée par les nerfs intercostaux et phréniques.",
                "C. Le récessus costo-diaphragmatique est le siège habituel des épanchements pleuraux.",
                "D. La cavité pleurale est à pression négative.",
                "E. Le poumon occupe en permanence la totalité des récessus pleuraux."
              ],
              bonnes: [1, 2, 3],
              explication: "B, C et D sont vraies. A est fausse : la plèvre viscérale est insensible ; c'est la pariétale qui est sensible. E est fausse : les récessus ne sont occupés qu'en inspiration profonde."
            },
            {
              q: "Concernant l'œsophage et les nerfs du médiastin, quelles propositions sont exactes ?",
              options: [
                "A. L'œsophage mesure environ 25 cm de long.",
                "B. L'œsophage traverse le diaphragme en T10 accompagné des troncs vagaux.",
                "C. Le nerf phrénique passe en arrière de la racine du poumon.",
                "D. Les varices œsophagiennes sont dues à une anastomose porto-cave.",
                "E. Le grand nerf splanchnique naît des ganglions sympathiques T5 à T9."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le phrénique passe en avant de la racine du poumon ; c'est le vague qui passe en arrière."
            },
            {
              q: "Concernant le conduit thoracique et les applications cliniques, quelles propositions sont exactes ?",
              options: [
                "A. Le conduit thoracique monte entre l'aorte et la veine azygos.",
                "B. Le conduit thoracique se termine au confluent jugulo-subclavier droit.",
                "C. Un infarctus du territoire de l'interventriculaire antérieure touche la face antérieure du ventricule gauche.",
                "D. Les corps étrangers inhalés tombent préférentiellement dans la bronche principale droite.",
                "E. Une tumeur de l'apex pulmonaire peut donner un syndrome de Claude Bernard-Horner."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le conduit thoracique se termine au confluent jugulo-subclavier gauche."
            }
          ]
        },
        {
          id: "abdomen-paroi-peritoine",
          titre: "Abdomen : paroi et péritoine",
          duree: 40,
          objectifs: [
            "Décrire les muscles de la paroi abdominale antéro-latérale et postérieure, leurs insertions, actions et innervation.",
            "Décrire la gaine du muscle droit de l'abdomen et la ligne arquée.",
            "Décrire le canal inguinal (parois, orifices, contenu) et expliquer les hernies inguinales et fémorales.",
            "Décrire le péritoine, ses feuillets, les mésos, les épiploons (omentums) et les espaces de la cavité péritonéale.",
            "Situer les régions et les repères de l'abdomen et les projections des organes."
          ],
          sections: [
            {
              titre: "Limites, régions et repères de l'abdomen",
              contenu: `<p>L'<strong>abdomen</strong> est la partie du tronc située entre le thorax et le pelvis. La <strong>cavité abdominale</strong> est limitée en haut par le diaphragme (elle remonte donc sous les côtes jusqu'au 4<sup>e</sup>–5<sup>e</sup> espace intercostal : foie, rate, estomac sont en partie « thoraco-abdominaux »), en bas par le détroit supérieur du bassin (en continuité avec la cavité pelvienne), en arrière par la colonne lombale et les muscles du dos (psoas, carré des lombes), latéralement et en avant par les muscles larges et les droits de l'abdomen. Sa paroi musculaire, souple, permet les variations de volume (respiration, grossesse) et la pression abdominale (toux, défécation, accouchement).</p>
<h4>Repères osseux et cutanés</h4>
<p>Processus xiphoïde (T9–T10), rebord costal (10<sup>e</sup> côte au point le plus bas, L2–L3), crête iliaque (L4), épines iliaques antéro-supérieures, tubercules pubiens, symphyse pubienne ; l'<strong>ombilic</strong> (L3–L4 chez l'adulte, dermatome T10) ; le <strong>ligament inguinal</strong> (EIAS → tubercule pubien) ; la <strong>ligne blanche</strong> médiane.</p>
<h4>Les neuf régions</h4>
<p>Deux lignes verticales (médio-claviculaires, passant au milieu des ligaments inguinaux) et deux lignes horizontales (<strong>plan subcostal</strong>, bord inférieur des 10<sup>es</sup> côtes, L3 ; <strong>plan intertuberculaire</strong>, tubercules des crêtes iliaques, L5) délimitent : hypochondres droit et gauche, épigastre ; flancs droit et gauche, région ombilicale ; régions inguinales (fosses iliaques) droite et gauche, hypogastre (région pubienne).</p>
<table>
<thead><tr><th>Région</th><th>Principaux organes projetés</th></tr></thead>
<tbody>
<tr><td>Hypochondre droit</td><td>Foie (lobe droit), vésicule biliaire, angle colique droit, rein droit (partie supérieure)</td></tr>
<tr><td>Épigastre</td><td>Estomac (partie), lobe gauche du foie, pancréas, duodénum, aorte, tronc cœliaque</td></tr>
<tr><td>Hypochondre gauche</td><td>Rate, estomac (fundus), angle colique gauche, queue du pancréas, rein gauche</td></tr>
<tr><td>Flanc droit</td><td>Côlon ascendant, rein droit, anses grêles</td></tr>
<tr><td>Région ombilicale</td><td>Côlon transverse, duodénum (D3), anses grêles, aorte (bifurcation L4), mésentère</td></tr>
<tr><td>Flanc gauche</td><td>Côlon descendant, rein gauche, anses grêles</td></tr>
<tr><td>Fosse iliaque droite</td><td>Cæcum, appendice (point de McBurney), iléon terminal, ovaire droit</td></tr>
<tr><td>Hypogastre</td><td>Vessie (pleine), utérus, anses grêles, côlon sigmoïde</td></tr>
<tr><td>Fosse iliaque gauche</td><td>Côlon sigmoïde, ovaire gauche</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> plan transpylorique (L1, à mi-distance de l'incisure jugulaire et de la symphyse) : pylore, col du pancréas, hiles rénaux, origine de l'artère mésentérique supérieure, terminaison de la moelle. Ombilic : L3–L4, dermatome T10. Bifurcation aortique : L4.</div>`
            },
            {
              titre: "Les muscles de la paroi abdominale",
              contenu: `<h4>Paroi antéro-latérale</h4>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Direction / action</th><th>Innervation</th></tr></thead>
<tbody>
<tr><td><strong>Oblique externe</strong></td><td>Face externe des 8 dernières côtes (5 à 12), s'engrenant avec le dentelé antérieur et le grand dorsal</td><td>Crête iliaque (moitié antérieure), aponévrose vers la ligne blanche ; son bord inférieur épaissi forme le <strong>ligament inguinal</strong>, prolongé par les ligaments lacunaire et pectinéal</td><td>Fibres obliques en bas et en avant (« mains dans les poches ») ; flexion, rotation controlatérale, inclinaison homolatérale du tronc ; expiration, pression abdominale</td><td>Nerfs intercostaux T7–T11, subcostal T12</td></tr>
<tr><td><strong>Oblique interne</strong></td><td>Fascia thoraco-lombal, crête iliaque, deux tiers latéraux du ligament inguinal</td><td>Trois dernières côtes, aponévrose vers la ligne blanche (se dédoublant autour du droit), pubis via le <strong>tendon conjoint</strong> (falx inguinal) avec le transverse ; donne le <strong>muscle crémaster</strong></td><td>Fibres obliques en haut et en avant (perpendiculaires à l'oblique externe) ; rotation homolatérale, inclinaison, flexion</td><td>T7–T12, L1 (ilio-hypogastrique, ilio-inguinal)</td></tr>
<tr><td><strong>Transverse de l'abdomen</strong></td><td>Face interne des 6 dernières côtes (s'engrenant avec le diaphragme), fascia thoraco-lombal, crête iliaque, tiers latéral du ligament inguinal</td><td>Aponévrose vers la ligne blanche (en arrière du droit au-dessus de la ligne arquée, en avant au-dessous) ; tendon conjoint</td><td>Fibres horizontales ; « sangle » abdominale : pression abdominale, expiration, stabilisation lombale</td><td>T7–T12, L1</td></tr>
<tr><td><strong>Droit de l'abdomen</strong></td><td>Processus xiphoïde, cartilages costaux 5 à 7</td><td>Crête pubienne, symphyse</td><td>Vertical, polygastrique (3–4 intersections tendineuses adhérentes au feuillet antérieur de la gaine : « tablettes de chocolat ») ; fléchisseur du tronc, abaisseur des côtes, pression abdominale</td><td>T7–T12</td></tr>
<tr><td><strong>Pyramidal</strong></td><td>Pubis</td><td>Ligne blanche</td><td>Petit, inconstant, tenseur de la ligne blanche</td><td>T12</td></tr>
</tbody>
</table>
<h4>Paroi postérieure</h4>
<ul>
<li>Le <strong>carré des lombes</strong> : de la crête iliaque et du ligament ilio-lombal à la 12<sup>e</sup> côte et aux processus costiformes L1–L4 ; inclinaison homolatérale, abaisse la 12<sup>e</sup> côte (expiration, fixation du diaphragme) ; nerfs T12–L3.</li>
<li>Le <strong>grand psoas</strong> (T12–L5 → petit trochanter ; plexus lombal L1–L3) et le <strong>muscle iliaque</strong> (fosse iliaque ; nerf fémoral) : fléchisseurs de la hanche et du tronc. Le psoas est entouré d'un fascia (gaine du psoas) où peuvent se collecter des abcès (psoïtis). Le plexus lombal est dans son épaisseur.</li>
<li>Le <strong>diaphragme</strong> (partie lombale) et les muscles profonds du dos.</li>
</ul>
<h4>Vascularisation et innervation de la paroi</h4>
<p>Artères <strong>épigastriques supérieure</strong> (branche de la thoracique interne) <strong>et inférieure</strong> (branche de l'iliaque externe, montant en arrière du droit, en dedans de l'orifice inguinal profond ; repère de la hernie inguinale directe/indirecte), anastomosées dans la gaine du droit ; artères intercostales, lombales, circonflexe iliaque profonde. Veines superficielles : anastomoses cave-cave (thoraco-épigastrique) et porto-cave (péri-ombilicales, « tête de méduse » de l'hypertension portale). Innervation segmentaire par les nerfs <strong>T7 à T12 et L1</strong> (T7 au-dessous du xiphoïde, T10 à l'ombilic, L1 au pli inguinal), cheminant entre l'oblique interne et le transverse (bloc du plan transverse : TAP block).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les <strong>incisions abdominales</strong> respectent l'innervation (une incision verticale paramédiane large dénerve le droit) ; la <strong>laparotomie médiane</strong> passe par la ligne blanche, avasculaire et sans nerf. L'<strong>éventration</strong> est l'issue de viscères à travers une cicatrice de paroi affaiblie. La <strong>défense</strong> et la <strong>contracture</strong> abdominales (ventre de bois) sont des contractions réflexes de la paroi en cas de péritonite, par irritation du péritoine pariétal (même innervation segmentaire).</div>`
            },
            {
              titre: "La gaine du muscle droit et la ligne blanche",
              contenu: `<p>Le muscle droit de l'abdomen est enfermé dans une <strong>gaine aponévrotique</strong> formée par les aponévroses des trois muscles larges, dont la disposition change au niveau de la <strong>ligne arquée</strong> (arcade de Douglas), située à mi-distance entre l'ombilic et le pubis (environ un tiers de la distance ombilic–symphyse) :</p>
<table>
<thead><tr><th>Niveau</th><th>Feuillet antérieur</th><th>Feuillet postérieur</th></tr></thead>
<tbody>
<tr><td><strong>Au-dessus de la ligne arquée</strong> (deux tiers supérieurs)</td><td>Aponévrose de l'oblique externe + feuillet antérieur de l'oblique interne</td><td>Feuillet postérieur de l'oblique interne + aponévrose du transverse (+ fascia transversalis)</td></tr>
<tr><td><strong>Au-dessous de la ligne arquée</strong> (tiers inférieur)</td><td>Les trois aponévroses (oblique externe, oblique interne, transverse) passent toutes en avant</td><td>Seulement le <strong>fascia transversalis</strong> (et le péritoine) : zone de faiblesse relative</td></tr>
<tr><td>Au-dessus des cartilages costaux</td><td>Oblique externe seul</td><td>Cartilages costaux (pas de feuillet)</td></tr>
</tbody>
</table>
<p>La gaine contient le muscle droit, le pyramidal, les vaisseaux épigastriques supérieurs et inférieurs (anastomosés en arrière du muscle) et les terminaisons des nerfs intercostaux T7–T12 qui la perforent latéralement. La <strong>ligne blanche</strong> (<em>linea alba</em>) est le raphé médian d'entrecroisement des aponévroses, du xiphoïde à la symphyse, large de 1–2 cm au-dessus de l'ombilic et très étroite au-dessous ; elle contient l'<strong>anneau ombilical</strong>, zone de faiblesse (hernie ombilicale du nourrisson, du cirrhotique). Le <strong>fascia transversalis</strong> est la lame conjonctive tapissant la face profonde du transverse et de toute la paroi, doublée du tissu sous-péritonéal puis du péritoine pariétal.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> au-dessous de la ligne arquée, il n'y a <strong>pas</strong> de feuillet aponévrotique postérieur : le muscle droit repose directement sur le fascia transversalis. Les vaisseaux épigastriques inférieurs pénètrent dans la gaine en passant en avant de la ligne arquée. Le <strong>diastasis</strong> des droits (écartement de la ligne blanche, post-partum) n'est pas une hernie.</div>`
            },
            {
              titre: "Le canal inguinal et les hernies",
              contenu: `<p>Le <strong>canal inguinal</strong> est un trajet oblique de 4 à 5 cm à travers la paroi abdominale, au-dessus de la moitié médiale du ligament inguinal, dirigé en bas, en avant et médialement, emprunté par le <strong>cordon spermatique</strong> chez l'homme (migration testiculaire) et le <strong>ligament rond de l'utérus</strong> chez la femme, ainsi que par le nerf ilio-inguinal.</p>
<h4>Parois</h4>
<ul>
<li><strong>Paroi antérieure</strong> : aponévrose de l'oblique externe (renforcée latéralement par des fibres de l'oblique interne).</li>
<li><strong>Paroi postérieure</strong> : <strong>fascia transversalis</strong>, renforcé médialement par le tendon conjoint (falx inguinal) et le ligament réfléchi ; c'est la paroi faible, lieu des hernies directes.</li>
<li><strong>Toit</strong> : fibres arciformes de l'oblique interne et du transverse.</li>
<li><strong>Plancher</strong> : gouttière du ligament inguinal et ligament lacunaire.</li>
</ul>
<h4>Orifices</h4>
<ul>
<li>L'<strong>anneau inguinal profond</strong> : orifice du fascia transversalis, à mi-chemin entre l'EIAS et le tubercule pubien, 1–2 cm au-dessus du ligament inguinal, <strong>latéralement aux vaisseaux épigastriques inférieurs</strong>.</li>
<li>L'<strong>anneau inguinal superficiel</strong> : fente triangulaire de l'aponévrose de l'oblique externe, au-dessus et latéralement au tubercule pubien, entre les piliers médial et latéral unis par des fibres intercrurales.</li>
</ul>
<h4>Contenu : le cordon spermatique</h4>
<p>Le <strong>conduit déférent</strong>, l'<strong>artère testiculaire</strong> (de l'aorte), l'artère du conduit déférent et l'artère crémastérique, le <strong>plexus veineux pampiniforme</strong>, les lymphatiques (vers les nœuds lombo-aortiques), le rameau génital du génito-fémoral, le plexus sympathique testiculaire, le vestige du processus vaginal ; entourés de trois enveloppes acquises à la traversée : <strong>fascia spermatique interne</strong> (du fascia transversalis), <strong>fascia crémastérique et muscle crémaster</strong> (de l'oblique interne), <strong>fascia spermatique externe</strong> (de l'oblique externe). Le nerf ilio-inguinal chemine en avant du cordon.</p>
<h4>Les hernies de l'aine</h4>
<table>
<thead><tr><th>Hernie</th><th>Trajet</th><th>Rapport avec les vaisseaux épigastriques inférieurs</th><th>Terrain</th></tr></thead>
<tbody>
<tr><td><strong>Inguinale indirecte</strong> (oblique externe)</td><td>Par l'anneau inguinal profond, suit le cordon dans le canal, peut descendre dans le scrotum ; sac dans le processus vaginal persistant</td><td><strong>Latérale</strong></td><td>Congénitale, enfant et adulte jeune ; la plus fréquente</td></tr>
<tr><td><strong>Inguinale directe</strong></td><td>Pousse directement la paroi postérieure (fascia transversalis) dans le <strong>trigone inguinal</strong> (de Hesselbach : ligament inguinal, bord latéral du droit, vaisseaux épigastriques inférieurs)</td><td><strong>Médiale</strong></td><td>Acquise, homme âgé, effort</td></tr>
<tr><td><strong>Fémorale</strong> (crurale)</td><td><strong>Sous le ligament inguinal</strong>, par l'anneau fémoral (médialement à la veine fémorale)</td><td>—</td><td>Femme âgée ; collet étroit, étranglement fréquent</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la hernie inguinale se présente au-dessus de la ligne de Malgaigne (ligament inguinal), la hernie fémorale au-dessous. L'<strong>étranglement herniaire</strong> (hernie irréductible, douloureuse, avec occlusion) est une urgence chirurgicale (nécrose de l'anse). La cure chirurgicale renforce la paroi postérieure (prothèse). Au cours de la cure, le nerf ilio-inguinal peut être lésé (douleur de la racine de la cuisse et du scrotum). La <strong>cryptorchidie</strong> est l'arrêt de migration du testicule dans le canal inguinal.</div>`
            },
            {
              titre: "Le péritoine : feuillets, mésos et omentums",
              contenu: `<p>Le <strong>péritoine</strong> est la séreuse de la cavité abdomino-pelvienne, la plus vaste du corps (environ 2 m<sup>2</sup>). Il comprend un <strong>feuillet pariétal</strong>, qui tapisse la paroi (richement innervé par les nerfs de la paroi : douleur localisée, défense) et un <strong>feuillet viscéral</strong>, qui recouvre les organes (innervation végétative : douleur sourde, mal localisée, projetée). Entre eux, la <strong>cavité péritonéale</strong>, virtuelle (50 mL de liquide), entièrement close chez l'homme, ouverte chez la femme par les orifices abdominaux des trompes utérines.</p>
<h4>Organes intra- et rétropéritonéaux</h4>
<ul>
<li><strong>Intrapéritonéaux</strong> : entièrement entourés de péritoine viscéral et reliés à la paroi par un <strong>méso</strong> (mobiles) : estomac, jéjunum-iléon, côlon transverse, côlon sigmoïde, foie, rate, 1<sup>re</sup> partie du duodénum, cæcum et appendice, ovaires, trompes.</li>
<li><strong>Rétropéritonéaux</strong> : en arrière du péritoine pariétal postérieur, recouverts seulement sur leur face antérieure. <strong>Primitifs</strong> (jamais eu de méso) : reins, surrénales, uretères, aorte, veine cave inférieure. <strong>Secondaires</strong> (méso accolé au cours du développement) : duodénum (D2–D4), pancréas, côlons ascendant et descendant (<strong>fascias d'accolement</strong> de Treitz et de Toldt, plans de clivage chirurgicaux).</li>
<li><strong>Sous-péritonéaux</strong> (pelviens) : vessie, utérus, rectum (partie inférieure), prostate.</li>
</ul>
<h4>Les replis péritonéaux</h4>
<ul>
<li>Les <strong>mésos</strong> : double feuillet reliant un organe à la paroi et conduisant son pédicule vasculo-nerveux. Le <strong>mésentère</strong> (jéjunum-iléon : racine oblique de 15 cm de l'angle duodéno-jéjunal (L2 gauche) à la jonction iléo-cæcale, bord intestinal de 6 m, contient l'artère mésentérique supérieure et ses branches), le <strong>mésocôlon transverse</strong> (racine horizontale sur D2, le pancréas et le rein gauche ; divise la cavité en étages sus- et sous-mésocoliques), le <strong>mésocôlon sigmoïde</strong> (racine en V inversé, l'uretère gauche passe sous son sommet), le mésoappendice.</li>
<li>Les <strong>omentums</strong> (épiploons) : replis reliant deux organes. Le <strong>petit omentum</strong> (gastro-hépatique) : du foie à la petite courbure de l'estomac et à D1 ; son bord libre droit contient le <strong>pédicule hépatique</strong> (veine porte en arrière, artère hépatique propre à gauche, conduit cholédoque à droite) et limite en avant le <strong>foramen omental</strong> (hiatus de Winslow) qui fait communiquer la grande cavité avec la bourse omentale. Le <strong>grand omentum</strong> (gastro-colique) : tablier à quatre feuillets pendant de la grande courbure devant les anses grêles, remontant sur le côlon transverse ; riche en graisse et en lymphoïde (« gendarme de l'abdomen », il cloisonne les infections) ; contient les arcades gastro-omentales.</li>
<li>Les <strong>ligaments péritonéaux</strong> : falciforme (foie–paroi antérieure, contient le ligament rond, vestige de la veine ombilicale), coronaire et triangulaires du foie, gastro-splénique (vaisseaux gastriques courts et gastro-omentale gauche), spléno-rénal (queue du pancréas, vaisseaux spléniques), gastro-phrénique, phrénico-colique (soutient la rate), larges de l'utérus.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le bord libre du petit omentum contient le pédicule hépatique (VBC : Veine porte en arrière, Artère hépatique à gauche, Cholédoque à droite) et limite le foramen omental ; sa compression (manœuvre de Pringle) arrête un saignement hépatique.</div>`
            },
            {
              titre: "Les espaces de la cavité péritonéale",
              contenu: `<p>Le <strong>mésocôlon transverse</strong> divise la grande cavité péritonéale en deux étages :</p>
<h4>Étage sus-mésocolique</h4>
<ul>
<li>La <strong>loge sous-phrénique</strong> droite (entre le foie et le diaphragme, divisée par le ligament falciforme) et gauche (rate, fundus).</li>
<li>Le <strong>récessus sous-hépatique</strong> (hépato-rénal, poche de Morison), le point le plus déclive de l'étage en décubitus : siège des collections.</li>
<li>La <strong>bourse omentale</strong> (arrière-cavité des épiploons) : cavité en arrière de l'estomac et du petit omentum, en avant du pancréas, limitée à gauche par la rate et les ligaments gastro-splénique et spléno-rénal, communiquant avec la grande cavité par le <strong>foramen omental</strong> (limité en avant par le pédicule hépatique, en arrière par la veine cave inférieure, en haut par le lobe caudé, en bas par D1). Un ulcère perforé de la face postérieure de l'estomac s'y ouvre ; les pseudo-kystes du pancréas s'y développent.</li>
</ul>
<h4>Étage sous-mésocolique</h4>
<ul>
<li>Les <strong>espaces infra-coliques</strong> droit (triangulaire, fermé en bas par la jonction iléo-cæcale) et gauche (ouvert vers le pelvis), séparés par la racine du mésentère.</li>
<li>Les <strong>gouttières para-coliques</strong> droite (large, en continuité avec la poche de Morison et le pelvis : voie de diffusion des collections) et gauche (barrée en haut par le ligament phrénico-colique).</li>
<li>Les <strong>récessus</strong> : duodénaux (supérieur et inférieur, hernies internes), iléo-cæcaux, rétro-cæcal (appendice rétro-cæcal), intersigmoïdien (repère de l'uretère gauche).</li>
</ul>
<h4>Le pelvis</h4>
<p>Le péritoine descend dans le pelvis et forme, chez l'homme, le <strong>cul-de-sac recto-vésical</strong>, et chez la femme le cul-de-sac vésico-utérin et le <strong>cul-de-sac recto-utérin</strong> (de Douglas), point le plus déclive de toute la cavité péritonéale en position debout : les épanchements s'y collectent (exploré par le toucher rectal ou vaginal et l'échographie, ponctionné par culdocentèse).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>péritonite</strong> (perforation d'ulcère, d'appendicite, de diverticule) irrite le péritoine pariétal : douleur, défense, contracture, puis iléus. L'<strong>ascite</strong> (cirrhose) s'accumule dans la cavité ; sa ponction se fait dans la fosse iliaque gauche, en dehors des vaisseaux épigastriques inférieurs, à la jonction du tiers latéral et des deux tiers médiaux de la ligne ombilic–EIAS. Les <strong>adhérences</strong> post-opératoires sont la première cause d'occlusion du grêle. Le pneumopéritoine (air sous les coupoles sur un cliché debout) signe une perforation d'organe creux.</div>`
            }
          ],
          points_cles: [
            "Neuf régions abdominales délimitées par deux lignes médio-claviculaires et les plans subcostal (L3) et intertuberculaire (L5) ; plan transpylorique L1 ; ombilic L3–L4 (T10) ; bifurcation aortique L4.",
            "Trois muscles larges : oblique externe (fibres en bas et en avant, ligament inguinal), oblique interne (fibres en haut et en avant, crémaster), transverse (horizontal, sangle) ; muscle droit polygastrique dans sa gaine ; innervation T7–T12, L1.",
            "Gaine du droit : au-dessus de la ligne arquée, aponévroses de l'oblique externe et moitié de l'oblique interne en avant, moitié de l'oblique interne et transverse en arrière ; au-dessous, tout en avant, seul le fascia transversalis en arrière.",
            "Le canal inguinal (4–5 cm) va de l'anneau profond (fascia transversalis, latéral aux vaisseaux épigastriques inférieurs) à l'anneau superficiel (oblique externe) ; paroi postérieure faible = fascia transversalis.",
            "Cordon spermatique : conduit déférent, artère testiculaire, plexus pampiniforme, lymphatiques lombo-aortiques, trois fascias (interne, crémastérique, externe).",
            "Hernie inguinale indirecte : latérale aux épigastriques, par l'anneau profond, congénitale ; directe : médiale, trigone de Hesselbach, acquise ; fémorale : sous le ligament inguinal, femme, étranglement.",
            "Péritoine pariétal (douleur localisée, défense) et viscéral (douleur projetée) ; organes intrapéritonéaux (méso), rétropéritonéaux primitifs (reins, aorte) et secondaires (duodénum, pancréas, côlons ascendant et descendant).",
            "Mésentère (artère mésentérique supérieure), mésocôlon transverse (sépare les étages sus- et sous-mésocoliques), petit omentum (pédicule hépatique dans son bord libre, foramen omental), grand omentum (tablier gastro-colique).",
            "Bourse omentale en arrière de l'estomac, communiquant par le foramen omental ; poche de Morison (sous-hépatique) et cul-de-sac recto-utérin de Douglas sont les points déclives."
          ],
          lexique: [
            { terme: "Ligne blanche", def: "Raphé fibreux médian de la paroi abdominale antérieure, du xiphoïde à la symphyse, formé par l'entrecroisement des aponévroses des muscles larges." },
            { terme: "Ligne arquée", def: "Limite inférieure du feuillet postérieur aponévrotique de la gaine du droit, à mi-distance entre ombilic et pubis." },
            { terme: "Fascia transversalis", def: "Lame conjonctive tapissant la face profonde du transverse, formant la paroi postérieure du canal inguinal et l'anneau inguinal profond." },
            { terme: "Ligament inguinal", def: "Bord inférieur épaissi de l'aponévrose de l'oblique externe, tendu de l'EIAS au tubercule pubien (arcade crurale)." },
            { terme: "Tendon conjoint", def: "Falx inguinal, réunion des aponévroses de l'oblique interne et du transverse se fixant sur le pubis, renforçant la paroi postérieure du canal inguinal." },
            { terme: "Trigone inguinal", def: "Triangle de Hesselbach limité par le ligament inguinal, le bord latéral du droit et les vaisseaux épigastriques inférieurs, siège des hernies directes." },
            { terme: "Méso", def: "Double feuillet péritonéal reliant un organe à la paroi et contenant son pédicule vasculo-nerveux (mésentère, mésocôlons)." },
            { terme: "Omentum", def: "Épiploon, repli péritonéal reliant deux organes : petit omentum (foie–estomac) et grand omentum (estomac–côlon transverse)." },
            { terme: "Foramen omental", def: "Hiatus de Winslow, orifice faisant communiquer la grande cavité péritonéale et la bourse omentale, en arrière du pédicule hépatique." },
            { terme: "Cul-de-sac recto-utérin", def: "Cul-de-sac de Douglas, point le plus déclive de la cavité péritonéale chez la femme, entre rectum et utérus." }
          ],
          qcm: [
            {
              q: "Concernant les muscles de la paroi abdominale, quelles propositions sont exactes ?",
              options: [
                "A. Les fibres de l'oblique externe sont dirigées en bas et en avant.",
                "B. Le ligament inguinal est le bord inférieur de l'aponévrose de l'oblique interne.",
                "C. Le muscle crémaster dérive de l'oblique interne.",
                "D. Le muscle droit de l'abdomen présente des intersections tendineuses.",
                "E. La paroi abdominale est innervée par les nerfs T7 à T12 et L1."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le ligament inguinal est le bord inférieur de l'aponévrose de l'oblique externe."
            },
            {
              q: "Concernant la gaine du muscle droit, quelles propositions sont exactes ?",
              options: [
                "A. Au-dessus de la ligne arquée, l'aponévrose du transverse passe en arrière du muscle droit.",
                "B. Au-dessous de la ligne arquée, les trois aponévroses passent en avant du muscle droit.",
                "C. Au-dessous de la ligne arquée, le muscle droit repose sur le fascia transversalis.",
                "D. La ligne arquée se situe juste au-dessus de l'ombilic.",
                "E. Les vaisseaux épigastriques inférieurs cheminent dans la gaine du droit."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la ligne arquée est à mi-distance entre l'ombilic et le pubis."
            },
            {
              q: "Concernant le canal inguinal, quelles propositions sont exactes ?",
              options: [
                "A. Sa paroi antérieure est formée par l'aponévrose de l'oblique externe.",
                "B. Sa paroi postérieure est formée par le fascia transversalis.",
                "C. L'anneau inguinal profond est situé médialement aux vaisseaux épigastriques inférieurs.",
                "D. Il contient le cordon spermatique chez l'homme et le ligament rond de l'utérus chez la femme.",
                "E. Il mesure environ 4 à 5 cm de long."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : l'anneau inguinal profond est latéral aux vaisseaux épigastriques inférieurs."
            },
            {
              q: "Concernant les hernies de l'aine, quelles propositions sont exactes ?",
              options: [
                "A. La hernie inguinale indirecte passe par l'anneau inguinal profond, latéralement aux vaisseaux épigastriques inférieurs.",
                "B. La hernie inguinale directe traverse le trigone inguinal (de Hesselbach).",
                "C. La hernie fémorale sort au-dessus du ligament inguinal.",
                "D. La hernie fémorale est plus fréquente chez la femme.",
                "E. La hernie inguinale indirecte est d'origine congénitale (persistance du processus vaginal)."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la hernie fémorale sort sous le ligament inguinal, par l'anneau fémoral."
            },
            {
              q: "Concernant le péritoine, quelles propositions sont exactes ?",
              options: [
                "A. Le péritoine pariétal est innervé par les nerfs somatiques de la paroi.",
                "B. Les reins sont des organes intrapéritonéaux.",
                "C. Le pancréas est rétropéritonéal secondaire.",
                "D. La cavité péritonéale est close chez l'homme et ouverte chez la femme par les trompes.",
                "E. Le côlon transverse est rétropéritonéal."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : les reins sont rétropéritonéaux primitifs. E est fausse : le côlon transverse est intrapéritonéal, suspendu par le mésocôlon transverse."
            },
            {
              q: "Concernant les mésos et les omentums, quelles propositions sont exactes ?",
              options: [
                "A. Le bord libre du petit omentum contient le pédicule hépatique.",
                "B. Le foramen omental fait communiquer la grande cavité péritonéale et la bourse omentale.",
                "C. Le grand omentum relie le foie à l'estomac.",
                "D. Le mésocôlon transverse sépare les étages sus- et sous-mésocoliques.",
                "E. La racine du mésentère va de l'angle duodéno-jéjunal à la jonction iléo-cæcale."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le grand omentum relie la grande courbure de l'estomac au côlon transverse ; c'est le petit omentum qui relie le foie à l'estomac."
            },
            {
              q: "Concernant les espaces péritonéaux et la clinique, quelles propositions sont exactes ?",
              options: [
                "A. Le cul-de-sac recto-utérin est le point le plus déclive de la cavité péritonéale chez la femme debout.",
                "B. La poche de Morison est un récessus sous-hépatique.",
                "C. La bourse omentale est située en avant de l'estomac.",
                "D. L'ombilic correspond au dermatome T10.",
                "E. La ponction d'ascite se fait dans la fosse iliaque gauche."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la bourse omentale est en arrière de l'estomac et du petit omentum, en avant du pancréas."
            }
          ]
        },
        {
          id: "abdomen-organes-digestifs",
          titre: "Abdomen : les organes digestifs et leur vascularisation",
          duree: 55,
          objectifs: [
            "Décrire l'estomac, le duodénum, le jéjuno-iléon et le côlon : configuration, rapports, vascularisation, innervation.",
            "Décrire le foie (lobes, segments, pédicule), les voies biliaires et la vésicule.",
            "Décrire le pancréas et la rate et leurs rapports.",
            "Décrire le tronc cœliaque, les artères mésentériques supérieure et inférieure et leurs territoires.",
            "Décrire le système porte hépatique et les anastomoses porto-caves."
          ],
          sections: [
            {
              titre: "L'estomac",
              contenu: `<p>L'<strong>estomac</strong> est la portion dilatée du tube digestif entre l'œsophage (<strong>cardia</strong>, T11, à gauche de la ligne médiane) et le duodénum (<strong>pylore</strong>, L1, à droite). Organe intrapéritonéal de l'étage sus-mésocolique, dans l'hypochondre gauche et l'épigastre, en forme de J, d'une capacité de 1 à 1,5 L (jusqu'à 4 L), long de 25 cm. On lui décrit :</p>
<ul>
<li>le <strong>fundus</strong> (grosse tubérosité) : coupole sous le diaphragme, au-dessus d'une horizontale passant par le cardia (poche à air gastrique sur les radiographies) ;</li>
<li>le <strong>corps</strong> : vertical ;</li>
<li>la <strong>partie pylorique</strong> : antre pylorique puis canal pylorique, se terminant au <strong>pylore</strong>, sphincter épais ;</li>
<li>deux courbures : la <strong>petite courbure</strong>, droite, concave, avec l'<strong>incisure angulaire</strong>, où s'insère le petit omentum ; la <strong>grande courbure</strong>, gauche, convexe, où s'insèrent le ligament gastro-splénique et le grand omentum ;</li>
<li>deux faces : antérieure (foie, diaphragme, paroi : triangle de Labbé où l'estomac est directement sous la paroi) et postérieure (bourse omentale, pancréas, rate, rein et surrénale gauches, mésocôlon transverse : « lit de l'estomac »).</li>
</ul>
<p>La paroi comprend quatre tuniques : muqueuse (plis gastriques, glandes), sous-muqueuse, <strong>musculeuse à trois couches</strong> (oblique interne, circulaire moyenne, longitudinale externe), séreuse péritonéale. Les cellules pariétales du fundus et du corps sécrètent HCl et facteur intrinsèque.</p>
<h4>Vascularisation</h4>
<p>Entièrement issue du <strong>tronc cœliaque</strong> : sur la petite courbure, l'<strong>artère gastrique gauche</strong> (branche directe du tronc cœliaque, la plus volumineuse) s'anastomose avec l'<strong>artère gastrique droite</strong> (branche de l'hépatique propre) ; sur la grande courbure, les <strong>artères gastro-omentales droite</strong> (de la gastro-duodénale) <strong>et gauche</strong> (de la splénique) ; le fundus reçoit les <strong>artères gastriques courtes</strong> (de la splénique). Veines homonymes vers la veine porte (gastrique gauche : anastomose avec les veines œsophagiennes). Lymphatiques : chaînes gastrique gauche, splénique, hépatique, puis nœuds cœliaques. Innervation : <strong>nerfs vagues</strong> (tronc vagal antérieur = gauche, postérieur = droit ; sécrétion et motricité ; vagotomie historique de l'ulcère) et sympathique (plexus cœliaque, T6–T9 : douleur épigastrique).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>ulcère gastrique</strong> siège surtout sur la petite courbure (angle) ; sa perforation donne une péritonite (face antérieure) ou une ouverture dans la bourse omentale (face postérieure) ; l'hémorragie résulte de l'érosion de l'artère gastrique gauche. L'<strong>ulcère duodénal</strong> (plus fréquent) peut éroder l'artère gastro-duodénale en arrière de D1. La <strong>hernie hiatale</strong> et le reflux intéressent la jonction œso-gastrique ; le <strong>cancer gastrique</strong> se dissémine vers les nœuds cœliaques et, par le ligament gastro-colique, vers le côlon.</div>`
            },
            {
              titre: "Le duodénum, le jéjuno-iléon",
              contenu: `<h4>Le duodénum</h4>
<p>Première partie de l'intestin grêle, longue de <strong>25 cm</strong> (douze travers de doigt), en forme de <strong>cadre</strong> entourant la tête du pancréas, <strong>rétropéritonéal secondaire</strong> (sauf les 2 premiers cm, D1, mobiles) et fixé par le fascia de Treitz. Quatre parties :</p>
<ul>
<li><strong>D1</strong> (partie supérieure, L1) : horizontal, du pylore au <strong>genu superius</strong> ; son début dilaté est le bulbe duodénal ; rapports : foie et vésicule en avant, <strong>artère gastro-duodénale</strong>, cholédoque et veine porte en arrière.</li>
<li><strong>D2</strong> (partie descendante, L1–L3) : vertical, le long du bord droit de la tête du pancréas, en avant du rein droit et du hile rénal, croisé en avant par la racine du mésocôlon transverse ; reçoit sur sa face postéro-médiale la <strong>papille duodénale majeure</strong> (ampoule hépato-pancréatique : abouchement du cholédoque et du conduit pancréatique principal de Wirsung, sphincter d'Oddi) et, 2 cm plus haut, la papille mineure (conduit accessoire de Santorini).</li>
<li><strong>D3</strong> (partie horizontale, L3) : croise la colonne, la veine cave inférieure et l'aorte, en passant <strong>sous les vaisseaux mésentériques supérieurs</strong> (pince aorto-mésentérique).</li>
<li><strong>D4</strong> (partie ascendante) : remonte à gauche de l'aorte jusqu'à l'<strong>angle duodéno-jéjunal</strong> (L2), fixé par le muscle suspenseur du duodénum (de Treitz).</li>
</ul>
<p>Vascularisation double : <strong>artères pancréatico-duodénales supérieures</strong> (de la gastro-duodénale, tronc cœliaque) <strong>et inférieures</strong> (de la mésentérique supérieure), anastomosées en arcades autour de la tête du pancréas : zone frontière entre les deux territoires (correspondant à l'ampoule).</p>
<h4>Le jéjuno-iléon</h4>
<p>Portion mobile de l'intestin grêle, de l'angle duodéno-jéjunal à la <strong>valve iléo-cæcale</strong> (fosse iliaque droite), longue de <strong>6 à 7 m</strong> (3 m sur le vivant tonique), décrivant 15 à 16 <strong>anses</strong> horizontales en haut et à gauche (jéjunum, deux cinquièmes) puis verticales en bas et à droite (iléon, trois cinquièmes), suspendues au <strong>mésentère</strong> dont la racine, oblique de 15 cm, va de L2 gauche à l'articulation sacro-iliaque droite en croisant D3, l'aorte, la veine cave inférieure, l'uretère droit et les vaisseaux gonadiques droits. Le jéjunum est plus large (3 cm), à paroi plus épaisse, à plis circulaires nombreux, à vascularisation en arcades simples avec de longs vaisseaux droits ; l'iléon est plus étroit (2 cm), plus mince, à arcades multiples et courts vaisseaux droits, riche en plaques de Peyer. Le <strong>diverticule iléal</strong> (de Meckel, 2 % de la population) est un vestige du canal vitellin à 60–100 cm de la valve.</p>
<p>Vascularisation : <strong>artère mésentérique supérieure</strong> (12 à 15 artères jéjunales et iléales nées de son bord gauche, formant des arcades) ; veine mésentérique supérieure → veine porte. Innervation végétative par le plexus mésentérique supérieur (douleur péri-ombilicale, T10). Lymphatiques (chylifères) vers les nœuds mésentériques (100 à 200) puis cœliaques et la citerne du chyle.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le duodénum est le seul segment de l'intestin grêle rétropéritonéal (secondaire) et fixe ; le jéjuno-iléon est intrapéritonéal, mobile, suspendu au mésentère. D3 passe <strong>en arrière</strong> des vaisseaux mésentériques supérieurs et <strong>en avant</strong> de l'aorte ; la papille duodénale majeure est sur D2.</div>`
            },
            {
              titre: "Le côlon, le cæcum et l'appendice",
              contenu: `<p>Le <strong>gros intestin</strong> mesure environ <strong>1,5 m</strong>, de la valve iléo-cæcale à l'anus, et encadre les anses grêles. Il se distingue du grêle par son calibre (7–8 cm au cæcum, 3 cm au sigmoïde), les <strong>haustrations</strong> (bosselures), les <strong>bandelettes</strong> (tænias : trois bandes longitudinales de musculeuse condensée, absentes sur le rectum) et les <strong>appendices omentaux</strong> (franges graisseuses).</p>
<ul>
<li>Le <strong>cæcum</strong> : cul-de-sac initial de 6 cm, dans la fosse iliaque droite, intrapéritonéal mais fixe ; reçoit l'iléon par la <strong>valve iléo-cæcale</strong> (de Bauhin) et porte l'<strong>appendice vermiforme</strong> : diverticule de 8–10 cm (2 à 20 cm), naissant 2–3 cm sous la valve à la convergence des trois tænias, de position variable (rétro-cæcale 65 %, pelvienne 30 %, sous-cæcale, pré-iléale), suspendu par le méso-appendice contenant l'<strong>artère appendiculaire</strong> (branche de l'iléo-colique). Projection : <strong>point de McBurney</strong> (jonction du tiers latéral et des deux tiers médiaux de la ligne ombilic–EIAS).</li>
<li>Le <strong>côlon ascendant</strong> (15 cm) : rétropéritonéal secondaire (fascia de Toldt droit), en avant du rein droit, jusqu'à l'<strong>angle colique droit</strong> (hépatique, sous le foie, L2).</li>
<li>Le <strong>côlon transverse</strong> (50 cm) : intrapéritonéal, mobile, suspendu par le <strong>mésocôlon transverse</strong>, décrivant une courbe à concavité supérieure devant D2, le pancréas et l'estomac (ligament gastro-colique), jusqu'à l'<strong>angle colique gauche</strong> (splénique, plus haut et plus profond que le droit, sous la rate, T12–L1, fixé par le ligament phrénico-colique).</li>
<li>Le <strong>côlon descendant</strong> (25 cm) : rétropéritonéal secondaire (fascia de Toldt gauche), en avant du rein gauche, jusqu'à la crête iliaque.</li>
<li>Le <strong>côlon sigmoïde</strong> (40 cm, variable) : intrapéritonéal, mobile, en S dans la fosse iliaque gauche et le pelvis, suspendu par le <strong>mésocôlon sigmoïde</strong> (l'uretère gauche croise sa racine) ; se continue par le rectum en S3.</li>
</ul>
<h4>Vascularisation</h4>
<table>
<thead><tr><th>Segment</th><th>Artère</th><th>Origine</th></tr></thead>
<tbody>
<tr><td>Cæcum, appendice, iléon terminal, début du côlon ascendant</td><td>Artère iléo-colique (branche appendiculaire)</td><td>Mésentérique supérieure</td></tr>
<tr><td>Côlon ascendant, angle droit</td><td>Artère colique droite</td><td>Mésentérique supérieure</td></tr>
<tr><td>Côlon transverse (deux tiers droits)</td><td>Artère colique moyenne</td><td>Mésentérique supérieure</td></tr>
<tr><td>Tiers gauche du transverse, angle gauche, côlon descendant</td><td>Artère colique gauche</td><td>Mésentérique inférieure</td></tr>
<tr><td>Sigmoïde</td><td>Artères sigmoïdiennes (2 à 4)</td><td>Mésentérique inférieure</td></tr>
<tr><td>Rectum supérieur</td><td>Artère rectale supérieure</td><td>Mésentérique inférieure (terminale)</td></tr>
</tbody>
</table>
<p>Toutes ces artères s'anastomosent en une <strong>arcade para-colique</strong> (arcade marginale de Drummond), longeant le côlon à 2–3 cm, d'où partent les vaisseaux droits ; la jonction entre les territoires mésentériques supérieur et inférieur au niveau de l'angle gauche (<strong>point de Griffiths</strong>) est une zone de faiblesse (colite ischémique). L'<strong>arcade de Riolan</strong> relie les coliques moyenne et gauche. Les veines rejoignent les veines mésentériques et le système porte. L'innervation parasympathique est vagale jusqu'aux deux tiers droits du transverse, puis <strong>sacrale (S2–S4, nerfs splanchniques pelviens)</strong> au-delà ; cette limite embryologique (intestin moyen / intestin postérieur) explique la douleur péri-ombilicale (T10) du côlon droit et hypogastrique (L1–L2) du côlon gauche.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>appendicite</strong> débute par une douleur péri-ombilicale (viscérale, T10) puis se localise à la fosse iliaque droite (péritoine pariétal) ; l'appendice rétro-cæcal donne des signes atypiques (psoïtis). Les <strong>diverticules</strong> siègent surtout sur le sigmoïde (sigmoïdite). Le <strong>cancer colorectal</strong> touche surtout le sigmoïde et le rectum ; la chirurgie respecte les territoires vasculaires (hémicolectomie droite = iléo-colique + colique droite ; sigmoïdectomie = mésentérique inférieure). Le <strong>volvulus</strong> du sigmoïde ou du cæcum survient sur les segments mobiles.</div>`
            },
            {
              titre: "Le foie et les voies biliaires",
              contenu: `<p>Le <strong>foie</strong> est le plus volumineux viscère (1 500 g, 28 × 16 × 8 cm), rouge brun, dans l'hypochondre droit et l'épigastre, sous le diaphragme (coupole droite au 4<sup>e</sup> espace intercostal), protégé par les côtes 7 à 11. Son bord inférieur suit le rebord costal droit ; il déborde dans l'épigastre et le lobe gauche atteint le mamelon gauche. Il est intrapéritonéal, sauf l'<strong>area nuda</strong> (face postérieure, contre le diaphragme, limitée par les feuillets du ligament coronaire) et le lit vésiculaire.</p>
<h4>Configuration externe</h4>
<ul>
<li><strong>Face diaphragmatique</strong> : lisse, convexe, divisée par le <strong>ligament falciforme</strong> en lobes droit et gauche ; en haut l'empreinte cardiaque ; en arrière, la veine cave inférieure dans son sillon.</li>
<li><strong>Face viscérale</strong> : marquée par deux sillons sagittaux (à gauche, fissure du ligament rond en avant et du ligament veineux en arrière ; à droite, fossette de la vésicule en avant et sillon de la veine cave en arrière) et un sillon transversal, le <strong>hile</strong> (porte hépatique), dessinant un <strong>H</strong> qui délimite quatre lobes anatomiques : droit, gauche, <strong>carré</strong> (en avant du hile) et <strong>caudé</strong> (de Spiegel, en arrière du hile, entre la veine cave et le ligament veineux). Empreintes : gastrique, duodénale, colique, rénale, surrénalienne.</li>
</ul>
<h4>Segmentation fonctionnelle (Couinaud)</h4>
<p>Fondée sur la distribution de la veine porte et de l'artère hépatique, le foie est divisé en <strong>huit segments</strong> indépendants (chacun avec son pédicule porte), séparés par les trois <strong>veines hépatiques</strong> (scissures portales). La scissure principale (ligne vésicule–veine cave, veine hépatique moyenne) sépare le <strong>foie droit</strong> (segments V, VI, VII, VIII) du <strong>foie gauche</strong> (II, III, IV) ; le segment I (lobe caudé) est autonome. Le lobe gauche anatomique (II + III) est séparé du segment IV par le ligament falciforme. Cette segmentation permet les hépatectomies réglées.</p>
<h4>Le pédicule hépatique</h4>
<p>Il pénètre par le hile dans le bord libre du petit omentum : la <strong>veine porte</strong> (en arrière), l'<strong>artère hépatique propre</strong> (en avant et à gauche, branche de l'hépatique commune après la gastro-duodénale), le <strong>conduit hépatique commun</strong> puis <strong>cholédoque</strong> (en avant et à droite), avec les lymphatiques et le plexus nerveux. Le foie reçoit un double apport sanguin : <strong>75 % par la veine porte</strong> (sang veineux riche en nutriments) et 25 % par l'artère hépatique (oxygène). Le sang quitte le foie par les <strong>veines hépatiques</strong> (droite, moyenne, gauche), courtes, qui se jettent dans la veine cave inférieure juste sous le diaphragme. Le ligament rond (veine ombilicale) et le ligament veineux (canal d'Arantius) sont des vestiges fœtaux.</p>
<h4>Les voies biliaires</h4>
<ul>
<li><strong>Voies biliaires intra-hépatiques</strong> : canalicules → conduits segmentaires → <strong>conduits hépatiques droit et gauche</strong>.</li>
<li><strong>Voie biliaire principale</strong> : le <strong>conduit hépatique commun</strong> (3–4 cm, confluence biliaire au hile) reçoit le conduit cystique et devient le <strong>conduit cholédoque</strong> (6–8 cm, 5–6 mm de diamètre), qui descend dans le pédicule, passe en arrière de D1, puis en arrière de la tête du pancréas (ou dans son épaisseur) et s'abouche avec le conduit pancréatique dans l'<strong>ampoule hépato-pancréatique</strong> (de Vater) de la papille majeure de D2, entourée du <strong>sphincter d'Oddi</strong>.</li>
<li><strong>Voie biliaire accessoire</strong> : la <strong>vésicule biliaire</strong> (sac piriforme de 8–10 cm, 30–50 mL, sur la face viscérale du foie, fond débordant le bord inférieur au niveau du 9<sup>e</sup> cartilage costal droit : point de Murphy ; corps ; col) et le <strong>conduit cystique</strong> (3–4 cm, valvules spirales de Heister), qui rejoint la voie principale. Le <strong>triangle de Calot</strong> (conduit cystique, conduit hépatique commun, bord du foie) contient l'<strong>artère cystique</strong> (branche de l'hépatique droite) : repère de la cholécystectomie.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>lithiase vésiculaire</strong> (20 % de la population) peut donner une colique hépatique, une <strong>cholécystite</strong> (signe de Murphy), ou migrer dans le cholédoque (<strong>angiocholite</strong> : douleur, fièvre, ictère) ; un calcul enclavé dans l'ampoule provoque une <strong>pancréatite</strong>. Un cancer de la tête du pancréas comprime le cholédoque : ictère avec grosse vésicule indolore (loi de Courvoisier). L'<strong>hypertension portale</strong> de la cirrhose se traduit par ascite, splénomégalie et varices.</div>`
            },
            {
              titre: "Le pancréas et la rate",
              contenu: `<h4>Le pancréas</h4>
<p>Glande mixte (exocrine : enzymes ; endocrine : îlots de Langerhans, insuline, glucagon) de 15 cm, 80 g, rétropéritonéale secondaire, allongée transversalement en avant de L1–L2, de la concavité du duodénum au hile de la rate, en arrière de la bourse omentale et de l'estomac. Quatre parties :</p>
<ul>
<li>La <strong>tête</strong> : dans le cadre duodénal, prolongée en bas et à gauche par le <strong>processus uncinatus</strong> (crochet) qui passe <strong>en arrière des vaisseaux mésentériques supérieurs</strong> ; en arrière : cholédoque, veine cave inférieure, veine rénale gauche ; en avant : racine du mésocôlon transverse, artère gastro-duodénale.</li>
<li>Le <strong>col</strong> (isthme) : en avant de la <strong>veine porte</strong> (formée en arrière du col par la veine mésentérique supérieure et la veine splénique) et des vaisseaux mésentériques supérieurs.</li>
<li>Le <strong>corps</strong> : oblique en haut et à gauche, en avant de l'aorte, de l'artère mésentérique supérieure, du rein et de la surrénale gauches ; l'<strong>artère splénique</strong> court sur son bord supérieur, la <strong>veine splénique</strong> sur sa face postérieure.</li>
<li>La <strong>queue</strong> : atteint le hile de la rate dans le ligament spléno-rénal (seule partie intrapéritonéale).</li>
</ul>
<p>Le <strong>conduit pancréatique principal</strong> (de Wirsung) parcourt toute la glande et s'unit au cholédoque dans l'ampoule hépato-pancréatique (papille majeure, D2) ; le <strong>conduit accessoire</strong> (de Santorini) draine la partie supérieure de la tête vers la papille mineure. Vascularisation : arcades pancréatico-duodénales (tronc cœliaque et mésentérique supérieure) pour la tête, branches de l'<strong>artère splénique</strong> (pancréatique dorsale, grande pancréatique) pour le corps et la queue ; veines vers le système porte. Innervation : plexus cœliaque (douleur épigastrique transfixiante irradiant au dos, position en chien de fusil).</p>
<h4>La rate</h4>
<p>Organe lymphoïde (le plus volumineux : 150–200 g, 12 × 7 × 4 cm, règle du « 1-3-5-7-9-11 » : 1 pouce d'épaisseur, 3 de large, 5 de long, 7 onces, entre les 9<sup>e</sup> et 11<sup>e</sup> côtes), <strong>intrapéritonéal</strong>, dans l'hypochondre gauche, sous la coupole diaphragmatique, dont le grand axe suit la 10<sup>e</sup> côte ; normalement non palpable (elle doit doubler de volume pour déborder le rebord costal). Faces : <strong>diaphragmatique</strong> (convexe, lisse) et <strong>viscérale</strong> avec les faces gastrique, rénale et colique et le <strong>hile</strong> (ligament spléno-rénal : artère et veine spléniques, queue du pancréas ; ligament gastro-splénique : vaisseaux gastriques courts et gastro-omentale gauche). Bord supérieur crénelé (incisures). Vascularisation : <strong>artère splénique</strong> (la plus grosse branche du tronc cœliaque, sinueuse, sur le bord supérieur du pancréas), qui se divise en branches segmentaires terminales ; <strong>veine splénique</strong> (rejoint la mésentérique supérieure pour former la veine porte ; reçoit la mésentérique inférieure). Fonctions : filtration du sang, destruction des hématies âgées, immunité (réponse aux bactéries encapsulées), réserve plaquettaire.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>rupture de rate</strong> (traumatisme de l'hypochondre gauche, fractures des 9<sup>e</sup>–11<sup>e</sup> côtes) donne un hémopéritoine avec douleur projetée à l'épaule gauche (signe de Kehr) ; la splénectomie impose la vaccination (pneumocoque, méningocoque, Haemophilus). La <strong>splénomégalie</strong> (hypertension portale, hémopathies, infections) se palpe sous le rebord costal gauche. La <strong>pancréatite aiguë</strong> (lithiase, alcool) peut nécroser la glande ; le <strong>cancer de la tête du pancréas</strong> envahit le cholédoque et la veine porte.</div>`
            },
            {
              titre: "Le tronc cœliaque et les artères mésentériques",
              contenu: `<p>Le tube digestif abdominal et ses glandes annexes sont vascularisés par trois artères viscérales impaires de l'aorte abdominale, correspondant aux trois segments embryologiques de l'intestin.</p>
<h4>Le tronc cœliaque (intestin antérieur : estomac, D1–D2, foie, pancréas, rate)</h4>
<p>Né de la face antérieure de l'aorte en <strong>T12</strong>, juste sous le hiatus aortique, court (1–2 cm), entouré du <strong>plexus cœliaque</strong> et des ganglions cœliaques, il se divise en trois branches (<strong>trépied cœliaque</strong>) :</p>
<ul>
<li>l'<strong>artère gastrique gauche</strong> : monte vers le cardia (rameaux œsophagiens) et descend le long de la petite courbure ;</li>
<li>l'<strong>artère splénique</strong> : la plus volumineuse, sinueuse, sur le bord supérieur du pancréas ; branches pancréatiques, gastriques courtes, gastro-omentale gauche, puis branches spléniques ;</li>
<li>l'<strong>artère hépatique commune</strong> : vers la droite, au-dessus de la tête du pancréas ; donne l'<strong>artère gastro-duodénale</strong> (en arrière de D1 ; → pancréatico-duodénales supérieures, gastro-omentale droite) puis devient <strong>artère hépatique propre</strong> (→ gastrique droite, puis branches droite — artère cystique — et gauche dans le pédicule).</li>
</ul>
<h4>L'artère mésentérique supérieure (intestin moyen : D3–D4, grêle, côlon droit jusqu'aux deux tiers du transverse)</h4>
<p>Née de la face antérieure de l'aorte en <strong>L1</strong>, 1 cm sous le tronc cœliaque, elle passe <strong>en arrière du col du pancréas</strong> et de la veine splénique, <strong>en avant de la veine rénale gauche, du processus uncinatus et de D3</strong> (pince aorto-mésentérique), puis descend dans la racine du mésentère jusqu'à la fosse iliaque droite. Branches : du bord gauche, les <strong>artères jéjunales et iléales</strong> (12–15, en arcades) ; du bord droit, l'<strong>artère pancréatico-duodénale inférieure</strong>, la <strong>colique moyenne</strong>, la <strong>colique droite</strong> et l'<strong>iléo-colique</strong> (terminale : branches cæcales, appendiculaire, iléale). La veine mésentérique supérieure est à sa droite.</p>
<h4>L'artère mésentérique inférieure (intestin postérieur : tiers gauche du transverse, côlon gauche, sigmoïde, rectum supérieur)</h4>
<p>Née de la face antérieure de l'aorte en <strong>L3</strong>, 4 cm au-dessus de la bifurcation, plus petite, elle descend à gauche vers le pelvis en croisant l'artère iliaque commune gauche. Branches : <strong>artère colique gauche</strong> (ascendante vers l'angle gauche, anastomose de Riolan avec la colique moyenne), <strong>artères sigmoïdiennes</strong> (2 à 4), <strong>artère rectale supérieure</strong> (terminale, dans le mésorectum, anastomosée aux rectales moyennes et inférieures de l'iliaque interne). La veine mésentérique inférieure monte à gauche, passe sous le pancréas et rejoint la veine splénique.</p>
<table>
<thead><tr><th>Artère</th><th>Niveau</th><th>Territoire</th><th>Innervation parasympathique</th><th>Douleur projetée</th></tr></thead>
<tbody>
<tr><td>Tronc cœliaque</td><td>T12</td><td>Œsophage abdominal → D2 (ampoule), foie, voies biliaires, pancréas, rate</td><td>Vague</td><td>Épigastre (T5–T9)</td></tr>
<tr><td>Mésentérique supérieure</td><td>L1</td><td>D2 (ampoule) → deux tiers droits du transverse, pancréas (tête)</td><td>Vague</td><td>Péri-ombilicale (T10–T11)</td></tr>
<tr><td>Mésentérique inférieure</td><td>L3</td><td>Tiers gauche du transverse → rectum supérieur</td><td>Nerfs splanchniques pelviens S2–S4</td><td>Hypogastre (L1–L2)</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>infarctus mésentérique</strong> (embolie ou thrombose de l'artère mésentérique supérieure, sujet âgé en fibrillation atriale) nécrose le grêle et le côlon droit : douleur intense, contraste avec un examen pauvre, acidose ; mortalité élevée. L'<strong>angor mésentérique</strong> (sténose athéromateuse) donne des douleurs post-prandiales. La <strong>colite ischémique</strong> touche l'angle gauche et le sigmoïde (zones frontières). La <strong>compression du tronc cœliaque</strong> par le ligament arqué médian est une cause rare de douleurs.</div>`
            },
            {
              titre: "Le système porte hépatique",
              contenu: `<p>La <strong>veine porte</strong> conduit au foie le sang veineux de tout le tube digestif sous-diaphragmatique (de l'œsophage abdominal au rectum supérieur), de la rate et du pancréas : 1 200 à 1 500 mL/min, soit 75 % du débit hépatique. Longue de 8 cm, large de 1,5 cm, <strong>sans valvules</strong>, elle se forme <strong>en arrière du col du pancréas</strong>, en L1–L2, par la réunion de :</p>
<ul>
<li>la <strong>veine mésentérique supérieure</strong> (grêle, côlon droit, pancréas, estomac via la gastro-omentale droite) ;</li>
<li>le <strong>tronc spléno-mésaraïque</strong> : <strong>veine splénique</strong> (rate, pancréas, estomac via les gastriques courtes et la gastro-omentale gauche) ayant reçu la <strong>veine mésentérique inférieure</strong> (côlon gauche, rectum supérieur).</li>
</ul>
<p>Elle monte en arrière de D1 et de la gastro-duodénale, puis dans le <strong>bord libre du petit omentum</strong> (en arrière de l'artère hépatique et du cholédoque, en avant du foramen omental et de la veine cave inférieure), reçoit les veines <strong>gastriques gauche et droite</strong>, cystique, para-ombilicales, et se divise au hile en <strong>branches droite et gauche</strong>, puis en veines segmentaires et sinusoïdes. Le sang est ensuite collecté par les <strong>veines hépatiques</strong> vers la veine cave inférieure. Le système porte est donc interposé entre deux réseaux capillaires (digestif et hépatique).</p>
<h4>Les anastomoses porto-caves</h4>
<p>Normalement grêles, elles se dilatent en cas d'<strong>hypertension portale</strong> (cirrhose, thrombose porte, obstacle sus-hépatique) pour dériver le sang vers les veines caves :</p>
<table>
<thead><tr><th>Site</th><th>Système porte</th><th>Système cave</th><th>Conséquence clinique</th></tr></thead>
<tbody>
<tr><td><strong>Œsophage inférieur</strong></td><td>Veine gastrique gauche</td><td>Veines œsophagiennes → azygos → VCS</td><td><strong>Varices œsophagiennes</strong> (hémorragie digestive grave)</td></tr>
<tr><td><strong>Ombilic</strong></td><td>Veines para-ombilicales (ligament rond)</td><td>Veines épigastriques, thoraco-épigastriques → VCS et VCI</td><td>« Tête de méduse », circulation collatérale abdominale</td></tr>
<tr><td><strong>Rectum</strong></td><td>Veine rectale supérieure (mésentérique inférieure)</td><td>Veines rectales moyennes et inférieures → iliaque interne → VCI</td><td>Varices rectales (distinctes des hémorroïdes)</td></tr>
<tr><td><strong>Rétropéritoine</strong></td><td>Veines coliques, duodénales, spléniques</td><td>Veines lombales, rénales, phréniques (veines de Retzius)</td><td>Collatérales silencieuses</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> veine porte = veine mésentérique supérieure + veine splénique (ayant reçu la mésentérique inférieure), en arrière du col du pancréas ; elle apporte 75 % du sang du foie ; pas de valvule ; quatre sites d'anastomoses porto-caves (œsophage, ombilic, rectum, rétropéritoine). Les métastases hépatiques des cancers digestifs arrivent par la veine porte.</div>`
            }
          ],
          points_cles: [
            "Estomac : cardia T11, pylore L1 ; fundus, corps, antre, canal pylorique ; petite courbure (petit omentum, gastriques gauche et droite), grande courbure (grand omentum, gastro-omentales) ; musculeuse à trois couches ; innervation vagale.",
            "Duodénum : 25 cm, cadre rétropéritonéal autour de la tête du pancréas ; D1 (gastro-duodénale en arrière), D2 (papille majeure : cholédoque + Wirsung), D3 (sous les vaisseaux mésentériques supérieurs, devant l'aorte), D4 (angle duodéno-jéjunal L2).",
            "Jéjuno-iléon : 6–7 m, intrapéritonéal, mésentère à racine oblique de 15 cm ; jéjunum large à arcades simples, iléon étroit à plaques de Peyer ; artère mésentérique supérieure.",
            "Côlon : 1,5 m, haustrations, tænias, appendices omentaux ; cæcum et appendice (point de McBurney, artère appendiculaire de l'iléo-colique), ascendant et descendant rétropéritonéaux, transverse et sigmoïde mobiles ; arcade marginale, point de Griffiths à l'angle gauche.",
            "Foie : 1 500 g, lobes droit, gauche, carré et caudé (H de la face viscérale), huit segments de Couinaud séparés par les veines hépatiques ; 75 % du débit par la veine porte ; area nuda.",
            "Pédicule hépatique dans le petit omentum : veine porte en arrière, artère hépatique propre à gauche, cholédoque à droite ; voie biliaire : conduits hépatiques → hépatique commun + cystique → cholédoque (8 cm) → ampoule de Vater (D2, sphincter d'Oddi) ; artère cystique dans le triangle de Calot.",
            "Pancréas : 15 cm, rétropéritonéal, tête (processus uncinatus derrière les vaisseaux mésentériques), col (devant la veine porte), corps (artère splénique au bord supérieur), queue (hile splénique) ; Wirsung et Santorini.",
            "Rate : 150–200 g, intrapéritonéale, 9e–11e côtes gauches, hile dans le ligament spléno-rénal ; artère splénique (plus grosse branche du tronc cœliaque) ; rupture traumatique, splénomégalie.",
            "Tronc cœliaque T12 (gastrique gauche, splénique, hépatique commune → gastro-duodénale et hépatique propre) ; mésentérique supérieure L1 (jéjunales, iléales, iléo-colique, coliques droite et moyenne) ; mésentérique inférieure L3 (colique gauche, sigmoïdiennes, rectale supérieure).",
            "Veine porte (8 cm, sans valvule) = mésentérique supérieure + splénique (+ mésentérique inférieure) derrière le col du pancréas ; anastomoses porto-caves : œsophage (varices), ombilic (tête de méduse), rectum, rétropéritoine."
          ],
          lexique: [
            { terme: "Pylore", def: "Sphincter terminal de l'estomac, en L1, s'ouvrant dans le bulbe duodénal." },
            { terme: "Papille duodénale majeure", def: "Saillie de la face postéro-médiale de D2 où s'abouchent le cholédoque et le conduit pancréatique principal (ampoule de Vater, sphincter d'Oddi)." },
            { terme: "Pince aorto-mésentérique", def: "Espace entre l'aorte en arrière et l'artère mésentérique supérieure en avant, traversé par D3 et la veine rénale gauche." },
            { terme: "Tænias coli", def: "Trois bandelettes longitudinales de musculeuse condensée propres au côlon, convergeant à la base de l'appendice." },
            { terme: "Point de McBurney", def: "Projection cutanée de la base de l'appendice, à la jonction du tiers latéral et des deux tiers médiaux de la ligne ombilic–EIAS." },
            { terme: "Segmentation de Couinaud", def: "Division fonctionnelle du foie en huit segments selon les pédicules portes, séparés par les veines hépatiques." },
            { terme: "Triangle de Calot", def: "Triangle limité par le conduit cystique, le conduit hépatique commun et le foie, contenant l'artère cystique." },
            { terme: "Trépied cœliaque", def: "Division du tronc cœliaque en artères gastrique gauche, splénique et hépatique commune." },
            { terme: "Arcade marginale", def: "Arcade para-colique de Drummond anastomosant les branches coliques des deux artères mésentériques le long du côlon." },
            { terme: "Anastomose porto-cave", def: "Communication entre le système porte et les veines caves (œsophage, ombilic, rectum, rétropéritoine), dilatée en cas d'hypertension portale." }
          ],
          qcm: [
            {
              q: "Concernant l'estomac, quelles propositions sont exactes ?",
              options: [
                "A. Le cardia se projette en T11 et le pylore en L1.",
                "B. Le petit omentum s'insère sur la grande courbure.",
                "C. L'artère gastrique gauche est une branche directe du tronc cœliaque.",
                "D. La face postérieure de l'estomac répond à la bourse omentale et au pancréas.",
                "E. La musculeuse gastrique comporte trois couches."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le petit omentum s'insère sur la petite courbure ; la grande courbure reçoit le grand omentum et le ligament gastro-splénique."
            },
            {
              q: "Concernant le duodénum et le jéjuno-iléon, quelles propositions sont exactes ?",
              options: [
                "A. Le duodénum mesure environ 25 cm et est rétropéritonéal dans sa plus grande partie.",
                "B. La papille duodénale majeure s'ouvre dans D3.",
                "C. D3 passe en avant des vaisseaux mésentériques supérieurs.",
                "D. Le jéjuno-iléon est suspendu au mésentère dont la racine mesure environ 15 cm.",
                "E. L'iléon possède des plaques de Peyer plus nombreuses que le jéjunum."
              ],
              bonnes: [0, 3, 4],
              explication: "A, D et E sont vraies. B est fausse : la papille majeure s'ouvre dans D2. C est fausse : D3 passe en arrière des vaisseaux mésentériques supérieurs (pince aorto-mésentérique)."
            },
            {
              q: "Concernant le côlon et l'appendice, quelles propositions sont exactes ?",
              options: [
                "A. Le côlon transverse est intrapéritonéal et mobile.",
                "B. Le côlon ascendant est vascularisé par l'artère mésentérique inférieure.",
                "C. L'appendice naît à la convergence des trois tænias du cæcum.",
                "D. L'artère appendiculaire est une branche de l'artère iléo-colique.",
                "E. L'angle colique gauche est plus haut situé que l'angle colique droit."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le côlon ascendant dépend de la mésentérique supérieure (colique droite) ; la mésentérique inférieure commence au tiers gauche du transverse."
            },
            {
              q: "Concernant le foie et les voies biliaires, quelles propositions sont exactes ?",
              options: [
                "A. La veine porte apporte environ 75 % du sang du foie.",
                "B. Le foie est divisé en huit segments fonctionnels.",
                "C. Dans le pédicule hépatique, la veine porte est en avant de l'artère et du cholédoque.",
                "D. Le cholédoque se termine dans D2 avec le conduit pancréatique principal.",
                "E. L'artère cystique chemine dans le triangle de Calot."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la veine porte est en arrière ; l'artère hépatique propre est en avant à gauche, le cholédoque en avant à droite."
            },
            {
              q: "Concernant le pancréas et la rate, quelles propositions sont exactes ?",
              options: [
                "A. Le pancréas est un organe rétropéritonéal secondaire.",
                "B. La veine porte se forme en arrière du col du pancréas.",
                "C. L'artère splénique chemine le long du bord supérieur du pancréas.",
                "D. La rate est un organe rétropéritonéal.",
                "E. La rate se projette en regard des 9e à 11e côtes gauches."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la rate est intrapéritonéale, reliée par les ligaments gastro-splénique et spléno-rénal."
            },
            {
              q: "Concernant les artères digestives, quelles propositions sont exactes ?",
              options: [
                "A. Le tronc cœliaque naît de l'aorte en T12.",
                "B. L'artère mésentérique supérieure naît en L3.",
                "C. L'artère gastro-duodénale est une branche de l'artère hépatique commune.",
                "D. L'artère mésentérique inférieure donne l'artère colique gauche, les sigmoïdiennes et la rectale supérieure.",
                "E. Le territoire de l'artère mésentérique supérieure s'étend jusqu'au rectum."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : la mésentérique supérieure naît en L1, la mésentérique inférieure en L3. E est fausse : le territoire de la mésentérique supérieure s'arrête aux deux tiers droits du côlon transverse."
            },
            {
              q: "Concernant le système porte, quelles propositions sont exactes ?",
              options: [
                "A. La veine porte est formée par la réunion de la veine mésentérique supérieure et de la veine splénique.",
                "B. La veine mésentérique inférieure se jette habituellement dans la veine splénique.",
                "C. La veine porte possède de nombreuses valvules.",
                "D. Les varices œsophagiennes résultent d'une anastomose entre la veine gastrique gauche et les veines œsophagiennes du système azygos.",
                "E. La veine porte chemine dans le bord libre du petit omentum."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la veine porte est dépourvue de valvules, ce qui permet le reflux vers les anastomoses porto-caves en cas d'hypertension portale."
            }
          ]
        },
        {
          id: "retroperitoine-appareil-urinaire",
          titre: "Espace rétropéritonéal et appareil urinaire",
          duree: 45,
          objectifs: [
            "Définir l'espace rétropéritonéal, ses limites et son contenu.",
            "Décrire les reins : situation, configuration, loge rénale, rapports, hile, vascularisation et segmentation, innervation.",
            "Décrire les voies excrétrices supérieures : calices, pelvis rénal, uretères et leurs rétrécissements.",
            "Décrire les glandes surrénales et leurs rapports.",
            "Décrire l'aorte abdominale et ses branches, la veine cave inférieure et ses affluents, et les grands rapports vasculaires du rétropéritoine."
          ],
          sections: [
            {
              titre: "L'espace rétropéritonéal",
              contenu: `<p>L'<strong>espace rétropéritonéal</strong> est la région comprise entre le <strong>péritoine pariétal postérieur</strong> en avant et la <strong>paroi abdominale postérieure</strong> (colonne lombale, psoas, carré des lombes, partie lombale du diaphragme, muscles iliaques) en arrière. Il s'étend du diaphragme (en haut) au détroit supérieur du bassin (en bas, en continuité avec l'espace sous-péritonéal pelvien), et latéralement jusqu'aux fascias d'accolement des côlons. Il est comblé de tissu cellulo-graisseux dans lequel les organes sont fixés par des fascias.</p>
<h4>Contenu</h4>
<ul>
<li><strong>Organes rétropéritonéaux primitifs</strong> : les deux <strong>reins</strong> et les <strong>uretères</strong>, les <strong>glandes surrénales</strong>, l'<strong>aorte abdominale</strong> et ses branches, la <strong>veine cave inférieure</strong> et ses affluents, les <strong>chaînes sympathiques lombales</strong>, le <strong>plexus lombal</strong> (dans le psoas), les nœuds et troncs lymphatiques lombaux (lombo-aortiques) et la <strong>citerne du chyle</strong>.</li>
<li><strong>Organes rétropéritonéaux secondaires</strong> (accolés) : duodénum (D2–D4), pancréas, côlons ascendant et descendant (traités avec les organes digestifs).</li>
</ul>
<p>Les régions rétropéritonéales sont classiquement divisées en : <strong>espace para-rénal antérieur</strong> (entre le péritoine postérieur et le fascia rénal antérieur : pancréas, duodénum, côlons accolés), <strong>espace péri-rénal</strong> (dans la loge rénale, fermée par le fascia rénal : rein, surrénale, graisse péri-rénale), <strong>espace para-rénal postérieur</strong> (entre le fascia rénal postérieur et le fascia transversalis : graisse seulement) et l'<strong>espace vasculaire médian</strong> (aorte, veine cave, lymphatiques).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les <strong>hématomes rétropéritonéaux</strong> (fractures du bassin, rupture d'anévrisme de l'aorte, traumatisme rénal) peuvent contenir plusieurs litres de sang sans signe péritonéal ; les <strong>fibroses</strong> et les <strong>tumeurs rétropéritonéales</strong> (sarcomes, lymphomes) compriment les uretères et la veine cave. Une collection pancréatique diffuse dans l'espace para-rénal antérieur. L'abord chirurgical du rein par <strong>lombotomie</strong> est extra-péritonéal.</div>`
            },
            {
              titre: "Les reins : situation, configuration et loge rénale",
              contenu: `<p>Les <strong>reins</strong> sont deux organes pleins, en forme de haricot, rouge brun, de <strong>12 cm de haut, 6 cm de large, 3 cm d'épaisseur</strong> (« 12-6-3 »), pesant 130 à 150 g chacun. Ils sont situés de part et d'autre de la colonne, dans les fosses lombales, en avant des 11<sup>e</sup> et 12<sup>e</sup> côtes et du carré des lombes, obliques en bas et latéralement (leurs pôles supérieurs sont plus proches de l'axe), et en avant selon l'obliquité du psoas. Le <strong>rein droit</strong> est <strong>plus bas</strong> que le gauche d'environ 2 cm (une demi-vertèbre), refoulé par le foie : le rein droit s'étend de T12 à L3, le gauche de T11 à L2 ; le <strong>hile</strong> se projette en L1 (plan transpylorique) à gauche, L1–L2 à droite. Les reins se déplacent de 2 à 3 cm avec la respiration.</p>
<h4>Configuration externe</h4>
<ul>
<li>Deux <strong>faces</strong>, antérieure et postérieure, lisses ; deux <strong>pôles</strong>, supérieur (coiffé par la surrénale) et inférieur (à 3–4 cm de la crête iliaque) ; un <strong>bord latéral</strong> convexe ; un <strong>bord médial</strong> concave, échancré par le <strong>hile</strong> (fente verticale de 3 cm) qui s'ouvre dans le <strong>sinus rénal</strong>, cavité contenant les calices, le pelvis rénal, les vaisseaux et de la graisse.</li>
<li>Au hile, d'avant en arrière : la <strong>veine rénale</strong>, l'<strong>artère rénale</strong>, le <strong>pelvis rénal</strong> (bassinet) — mnémotechnique « VAP » (ou VAU).</li>
</ul>
<h4>Configuration interne</h4>
<p>Sur une coupe, de la périphérie vers le sinus : la <strong>capsule fibreuse</strong> (mince, se clivant facilement du parenchyme sain), le <strong>cortex</strong> (zone externe de 1 cm, pâle, granuleuse, contenant les corpuscules rénaux ; il envoie entre les pyramides les <strong>colonnes rénales</strong> de Bertin), la <strong>médullaire</strong>, formée de <strong>8 à 12 pyramides rénales</strong> (de Malpighi), striées, dont la base regarde le cortex et le sommet, la <strong>papille</strong>, s'ouvre dans un <strong>calice mineur</strong>. Un <strong>lobe rénal</strong> est une pyramide avec le cortex qui l'entoure (lobulation visible chez le fœtus).</p>
<h4>La loge rénale</h4>
<p>Le rein est entouré de la <strong>capsule adipeuse</strong> (graisse péri-rénale) et enfermé dans le <strong>fascia rénal</strong> (de Gerota), formé d'un feuillet antérieur (pré-rénal) et d'un feuillet postérieur (rétro-rénal, de Zuckerkandl) qui se réunissent au-dessus de la surrénale (et la séparent du rein par une cloison) et latéralement, mais restent <strong>ouverts en bas</strong> (le long de l'uretère) et médialement (vers les gros vaisseaux). En dehors du fascia : la <strong>graisse para-rénale</strong> (corps adipeux para-rénal), surtout postérieure. Moyens de fixité : pédicule rénal, fascia, graisse, pression abdominale ; leur insuffisance (amaigrissement) permet la ptose rénale.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le rein <strong>droit</strong> est plus <strong>bas</strong> (foie) ; la veine rénale <strong>gauche</strong> est plus <strong>longue</strong> (elle croise l'aorte en avant) ; l'artère rénale <strong>droite</strong> est plus <strong>longue</strong> (elle passe en arrière de la veine cave inférieure). La loge rénale est ouverte en bas : un abcès ou un hématome diffuse vers le pelvis ; la surrénale est dans la loge mais séparée du rein par une cloison (elle ne descend pas en cas de ptose).</div>`
            },
            {
              titre: "Les rapports des reins",
              contenu: `<h4>Rapports postérieurs (communs aux deux reins)</h4>
<p>En haut, le <strong>diaphragme</strong> (partie lombale et ligament arqué latéral), qui sépare le rein du <strong>récessus pleural costo-diaphragmatique</strong> et de la 12<sup>e</sup> côte (le pôle supérieur est en rapport avec la plèvre : risque de pneumothorax lors des ponctions hautes) ; en bas, de médial en latéral, le <strong>psoas</strong>, le <strong>carré des lombes</strong> et l'aponévrose du <strong>transverse</strong>, avec les <strong>nerfs subcostal (T12), ilio-hypogastrique et ilio-inguinal (L1)</strong> qui croisent la face postérieure (douleur projetée du rein vers l'aine et les organes génitaux externes).</p>
<h4>Rapports antérieurs</h4>
<table>
<thead><tr><th>Rein droit</th><th>Rein gauche</th></tr></thead>
<tbody>
<tr><td>Pôle supérieur : <strong>surrénale droite</strong></td><td>Pôle supérieur : <strong>surrénale gauche</strong> (plus médiale, en forme de virgule)</td></tr>
<tr><td>Face antérieure (deux tiers supérieurs) : <strong>foie</strong> (empreinte rénale, par le péritoine : récessus hépato-rénal)</td><td>Partie supérieure : <strong>rate</strong> (latéralement), <strong>estomac</strong> (par la bourse omentale), <strong>queue du pancréas</strong> et vaisseaux spléniques (sur le hile)</td></tr>
<tr><td>Bord médial et hile : <strong>D2</strong> (accolé)</td><td>Partie moyenne : angle duodéno-jéjunal</td></tr>
<tr><td>Pôle inférieur : <strong>angle colique droit</strong> et côlon ascendant (accolés), anses grêles</td><td>Pôle inférieur et bord latéral : <strong>angle colique gauche</strong> et côlon descendant (accolés), anses jéjunales</td></tr>
</tbody>
</table>
<p>La racine du mésocôlon transverse croise les deux reins ; au-dessus elle, les rapports sont sus-mésocoliques (foie, rate, estomac), en dessous sous-mésocoliques (grêle, côlons).</p>
<h4>Rapports médiaux</h4>
<p>Le <strong>pédicule rénal</strong>, le <strong>psoas</strong>, les gros vaisseaux : la <strong>veine cave inférieure</strong> à droite (au contact du hile), l'<strong>aorte</strong> à gauche (à 1–2 cm du hile), les chaînes sympathiques, les nœuds lymphatiques lombaux ; l'uretère descend sur le psoas.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>palpation</strong> d'un gros rein (contact lombaire, ballottement) se fait les mains en avant et en arrière du flanc. La <strong>ponction-biopsie rénale</strong> et la néphrostomie se font par voie postérieure, au pôle inférieur, sous la 12<sup>e</sup> côte, pour éviter la plèvre et le pédicule. Le cancer du rein peut envahir la veine rénale et la veine cave (thrombus tumoral). Une tumeur du pôle supérieur gauche peut être confondue avec une masse splénique.</div>`
            },
            {
              titre: "Vascularisation, segmentation et innervation du rein",
              contenu: `<h4>Les artères rénales</h4>
<p>Les <strong>artères rénales</strong> naissent des faces latérales de l'<strong>aorte abdominale en L1–L2</strong>, juste sous l'artère mésentérique supérieure ; elles sont volumineuses (6–7 mm) et conduisent ensemble 20 à 25 % du débit cardiaque (1,2 L/min). L'artère <strong>droite</strong> est plus longue et passe <strong>en arrière de la veine cave inférieure</strong> ; la gauche est plus courte, en arrière de la veine rénale gauche. Chacune donne l'<strong>artère surrénale inférieure</strong>, des rameaux urétéraux et capsulaires, puis se divise avant le hile en une <strong>branche antérieure</strong> (pré-pyélique, la plus volumineuse, donnant quatre artères segmentaires : apicale, antéro-supérieure, antéro-inférieure, inférieure) et une <strong>branche postérieure</strong> (rétro-pyélique, artère segmentaire postérieure). Il existe des <strong>artères polaires</strong> accessoires dans 25–30 % des cas (une polaire inférieure peut comprimer l'uretère).</p>
<p>Les artères segmentaires sont <strong>terminales</strong> : chaque <strong>segment rénal</strong> (cinq : supérieur, antéro-supérieur, antéro-inférieur, inférieur, postérieur) est indépendant, et l'occlusion d'une branche entraîne un infarctus segmentaire. Entre les territoires antérieur et postérieur passe un plan avasculaire (ligne de Brödel, sur le bord latéral, légèrement en arrière), voie de néphrotomie. Les artères segmentaires donnent les artères <strong>interlobaires</strong> (dans les colonnes rénales), puis <strong>arquées</strong> (à la base des pyramides), <strong>interlobulaires</strong> (dans le cortex), puis les <strong>artérioles glomérulaires afférentes</strong>.</p>
<h4>Les veines rénales</h4>
<p>Les veines (interlobulaires, arquées, interlobaires) convergent vers la <strong>veine rénale</strong>, unique, en avant de l'artère, qui se jette dans la <strong>veine cave inférieure</strong>. La <strong>veine rénale gauche</strong> (7–8 cm) est <strong>trois fois plus longue</strong> que la droite (2–3 cm) : elle croise la face antérieure de l'aorte, juste sous l'artère mésentérique supérieure (pince aorto-mésentérique, syndrome du casse-noisette) et reçoit la <strong>veine gonadique gauche</strong> (testiculaire ou ovarique), la <strong>veine surrénale gauche</strong> et souvent une veine lombale ; la veine rénale droite ne reçoit aucun affluent (les veines gonadique et surrénale droites vont directement à la veine cave).</p>
<h4>Lymphatiques et innervation</h4>
<p>Lymphatiques vers les <strong>nœuds lombaux</strong> (latéro-aortiques et latéro-caves), en L1–L2. Innervation par le <strong>plexus rénal</strong> (ganglion aortico-rénal), sympathique (T10–L1 : vasomotricité, douleur projetée en lombaire et dans le flanc, irradiant vers l'aine : colique néphrétique) et parasympathique vagal. Le rein transplanté, dénervé, fonctionne normalement.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> artères rénales en L1–L2, droite plus longue derrière la veine cave ; veine rénale gauche plus longue devant l'aorte, recevant la gonadique et la surrénale gauches ; cinq segments à vascularisation terminale ; ordre au hile d'avant en arrière : veine, artère, pelvis. Une varicocèle gauche isolée du sujet âgé doit faire rechercher un cancer du rein gauche (envahissement de la veine rénale).</div>`
            },
            {
              titre: "Les voies excrétrices supérieures : calices, pelvis rénal, uretères",
              contenu: `<h4>Calices et pelvis rénal</h4>
<p>Chaque papille s'ouvre dans un <strong>calice mineur</strong> (8 à 12, en entonnoir) ; les calices mineurs se réunissent en <strong>2 à 3 calices majeurs</strong> (supérieur, moyen, inférieur), qui confluent dans le <strong>pelvis rénal</strong> (bassinet), poche en entonnoir aplatie de 10–15 mL, en partie dans le sinus (en arrière des vaisseaux) et en partie extra-hilaire, qui se rétrécit en <strong>jonction pyélo-urétérale</strong> (en L2) pour donner l'uretère.</p>
<h4>L'uretère</h4>
<p>Conduit musculaire de <strong>25 à 30 cm</strong> de long et 3 à 5 mm de diamètre, rétropéritonéal, qui conduit l'urine du pelvis rénal à la vessie par des ondes péristaltiques (2 à 6 par minute). Il comprend :</p>
<ul>
<li>un <strong>segment abdominal</strong> (lombal, 12–14 cm) : descend verticalement <strong>en avant du psoas</strong> (et du nerf génito-fémoral), accolé au péritoine pariétal postérieur (il suit le péritoine quand on le décolle), croisé en avant par les <strong>vaisseaux gonadiques</strong> (« l'eau passe sous le pont ») ; à droite, il longe la veine cave inférieure et est croisé par la racine du mésentère, l'artère iléo-colique et D2 ; à gauche, il est croisé par les vaisseaux coliques gauches et sigmoïdiens et passe sous le mésocôlon sigmoïde (récessus intersigmoïdien) ;</li>
<li>un <strong>segment iliaque</strong> (3–4 cm) : il <strong>croise les vaisseaux iliaques</strong> au niveau de la bifurcation de l'iliaque commune (à droite : l'iliaque externe ; à gauche : l'iliaque commune), en avant de l'articulation sacro-iliaque — repère radiologique ;</li>
<li>un <strong>segment pelvien</strong> (12 cm) : descend le long de la paroi latérale du pelvis, en avant de l'artère iliaque interne, puis se coude en avant et médialement vers la vessie. Chez l'homme, il est croisé par le <strong>conduit déférent</strong> (qui passe au-dessus) et longe la vésicule séminale. Chez la femme, il passe dans la base du <strong>ligament large</strong>, <strong>sous l'artère utérine</strong> (« l'eau passe sous le pont »), à 1,5–2 cm du col utérin et du cul-de-sac vaginal latéral : site de lésion lors des hystérectomies ;</li>
<li>un <strong>segment intra-mural</strong> (1,5–2 cm) : traverse obliquement la paroi vésicale et s'ouvre par l'<strong>ostium urétéral</strong> à l'angle du trigone ; ce trajet oblique, comprimé par la contraction du détrusor, constitue un dispositif <strong>anti-reflux</strong>.</li>
</ul>
<h4>Les trois rétrécissements physiologiques</h4>
<p>Sites de blocage des calculs : la <strong>jonction pyélo-urétérale</strong> (L2), le <strong>croisement des vaisseaux iliaques</strong> (détroit supérieur), la <strong>jonction urétéro-vésicale</strong> (le plus étroit, 2–3 mm). Projection radiologique : l'uretère descend le long de l'extrémité des processus costiformes lombaux, croise l'articulation sacro-iliaque, décrit une courbe concave en dedans dans le pelvis et rejoint la vessie en regard de l'épine ischiatique.</p>
<p><strong>Vascularisation</strong> segmentaire : branches des artères rénale, gonadique, iliaque commune, iliaque interne, vésicales (et utérine) ; les anastomoses dans l'adventice sont fragiles : l'uretère ne doit pas être dénudé en chirurgie. <strong>Innervation</strong> végétative (plexus rénal, hypogastrique) ; douleur référée T11–L2 : la colique néphrétique irradie du flanc vers la fosse iliaque et les organes génitaux externes.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>colique néphrétique</strong> (calcul bloqué, dilatation brutale des voies excrétrices) donne une douleur lombaire violente irradiant vers l'aine, sans position antalgique ; les calculs de moins de 6 mm s'éliminent spontanément. Le <strong>reflux vésico-urétéral</strong> de l'enfant résulte d'un trajet intra-mural trop court. L'<strong>uretère rétro-cave</strong> et la <strong>duplicité urétérale</strong> sont des variations anatomiques. Le syndrome de la jonction pyélo-urétérale est la première cause d'hydronéphrose congénitale.</div>`
            },
            {
              titre: "Les glandes surrénales",
              contenu: `<p>Les <strong>glandes surrénales</strong> (adrénales) sont deux glandes endocrines rétropéritonéales de <strong>4 à 6 g</strong>, de 5 × 3 × 1 cm, jaune chamois, coiffant le pôle supérieur et le bord médial des reins en T11–T12, dans la loge rénale mais séparées du rein par une cloison du fascia rénal. La <strong>droite</strong>, pyramidale (en « chapeau »), est au-dessus du rein droit, en arrière de la <strong>veine cave inférieure</strong> (qu'elle déborde en avant : voie d'abord difficile), en dedans du foie (area nuda), en avant du pilier droit du diaphragme. La <strong>gauche</strong>, en virgule ou demi-lune, descend plus bas le long du bord médial du rein jusqu'au hile, en arrière de la bourse omentale, de l'estomac et du pancréas (vaisseaux spléniques), en dehors de l'aorte et du ganglion cœliaque.</p>
<p>Chaque glande comprend une <strong>corticale</strong> (mésoblastique, 90 % : zones glomérulée → aldostérone, fasciculée → cortisol, réticulée → androgènes) et une <strong>médullaire</strong> (neuro-ectodermique, cellules chromaffines → adrénaline et noradrénaline, innervée directement par des fibres sympathiques préganglionnaires des nerfs splanchniques : c'est un ganglion sympathique modifié).</p>
<h4>Vascularisation</h4>
<p>Très riche, par <strong>trois artères surrénales</strong> de chaque côté : <strong>supérieure</strong> (branches de l'artère phrénique inférieure), <strong>moyenne</strong> (directement de l'aorte, en L1) et <strong>inférieure</strong> (de l'artère rénale). Le retour veineux se fait par une <strong>veine surrénale unique</strong> (veine centrale) : la <strong>droite</strong>, très courte (5 mm), se jette directement dans la <strong>veine cave inférieure</strong> (sa déchirure lors d'une surrénalectomie est redoutable) ; la <strong>gauche</strong>, plus longue, se jette dans la <strong>veine rénale gauche</strong> (après avoir reçu la veine phrénique inférieure). Lymphatiques vers les nœuds lombaux ; innervation sympathique abondante (plexus cœliaque, nerfs splanchniques).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>phéochromocytome</strong> (tumeur de la médullaire) donne une HTA paroxystique ; l'<strong>adénome de Conn</strong> (glomérulée) une HTA avec hypokaliémie ; le <strong>syndrome de Cushing</strong> (fasciculée) ; l'<strong>insuffisance surrénale</strong> (maladie d'Addison). Les <strong>incidentalomes</strong> surrénaliens sont fréquents au scanner (4 %). Les métastases (poumon, sein, rein) sont fréquentes du fait de la richesse vasculaire. La surrénalectomie se fait aujourd'hui par cœlioscopie, la veine surrénale étant le temps critique.</div>`
            },
            {
              titre: "L'aorte abdominale, la veine cave inférieure et les lymphatiques lombaux",
              contenu: `<h4>L'aorte abdominale</h4>
<p>Elle commence au <strong>hiatus aortique</strong> du diaphragme (<strong>T12</strong>) et se termine en <strong>L4</strong> (un peu à gauche de la ligne médiane, en regard de l'ombilic) en se divisant en deux <strong>artères iliaques communes</strong> et une petite <strong>artère sacrale médiane</strong>. Longue de 15 cm, large de 2 cm (anévrisme si plus de 3 cm), elle descend légèrement à gauche de la colonne, en avant des corps vertébraux et du ligament longitudinal antérieur, entre les piliers du diaphragme et les psoas. Rapports : à droite, la veine cave inférieure et la citerne du chyle ; à gauche, le tronc sympathique gauche, la veine mésentérique inférieure ; en avant, de haut en bas : le plexus cœliaque, le pancréas (corps) et la veine splénique, la <strong>veine rénale gauche</strong>, D3, la racine du mésentère, le péritoine pariétal postérieur et les anses grêles.</p>
<table>
<thead><tr><th>Branches</th><th>Niveau</th><th>Détail</th></tr></thead>
<tbody>
<tr><td><strong>Viscérales impaires (antérieures)</strong></td><td>T12, L1, L3</td><td>Tronc cœliaque, artère mésentérique supérieure, artère mésentérique inférieure</td></tr>
<tr><td><strong>Viscérales paires (latérales)</strong></td><td>L1, L1–L2, L2</td><td>Artères surrénales moyennes, <strong>artères rénales</strong>, <strong>artères gonadiques</strong> (testiculaires ou ovariques, longues, descendant sur le psoas en croisant l'uretère)</td></tr>
<tr><td><strong>Pariétales</strong></td><td>T12 à L4</td><td>Artères phréniques inférieures (donnent les surrénales supérieures), <strong>quatre paires d'artères lombales</strong> (face postérieure, homologues des intercostales, pour la paroi et la moelle), artère sacrale médiane</td></tr>
<tr><td><strong>Terminales</strong></td><td>L4</td><td>Artères iliaques communes droite et gauche (se divisant en L5–S1, devant la sacro-iliaque, en iliaque externe pour le membre inférieur et iliaque interne pour le pelvis)</td></tr>
</tbody>
</table>
<h4>La veine cave inférieure</h4>
<p>Formée en <strong>L5</strong>, à droite de la bifurcation aortique, par la réunion des deux <strong>veines iliaques communes</strong> (la gauche, plus longue, passe en arrière de l'artère iliaque commune droite : site de compression, syndrome de Cockett), elle monte à <strong>droite de l'aorte</strong>, en avant de la colonne et du psoas droit, passe dans le sillon de la face postérieure du foie (en arrière de la surrénale droite, en avant du pilier droit), traverse le diaphragme en <strong>T8</strong> et se jette dans l'atrium droit. Longue de 22 cm, large de 3 cm, sans valvule (sauf à l'embouchure). Affluents : veines lombales (4 paires, reliées par les veines lombales ascendantes, origine des azygos), <strong>veine gonadique droite</strong> (la gauche va dans la rénale gauche), <strong>veines rénales</strong> (L1–L2), <strong>veine surrénale droite</strong>, veines phréniques inférieures, <strong>veines hépatiques</strong> (3, juste sous le diaphragme). Elle est croisée en avant par la racine du mésentère, D3, la tête du pancréas, D1 et le foramen omental. Rapports postérieurs : chaîne sympathique droite, artères lombales et rénale droite (qui passent derrière elle).</p>
<h4>Les lymphatiques lombaux</h4>
<p>Les <strong>nœuds lombaux</strong> (lombo-aortiques : pré-aortiques, latéro-aortiques droits et gauches, rétro-aortiques) reçoivent les lymphatiques des membres inférieurs et du pelvis (via les nœuds iliaques), des reins, des surrénales, de la paroi, et des <strong>gonades</strong> (testicules et ovaires : drainage lombo-aortique direct, et non inguinal). Ils donnent les <strong>troncs lombaux</strong> droit et gauche qui, avec le tronc intestinal (nœuds cœliaques), forment la <strong>citerne du chyle</strong> (L1–L2, à droite de l'aorte, derrière le pilier droit), origine du <strong>conduit thoracique</strong>.</p>
<h4>Le système nerveux autonome lombal</h4>
<p>Les <strong>troncs sympathiques lombaux</strong> (4 ganglions chacun) descendent sur les faces antéro-latérales des corps vertébraux, le long du bord médial du psoas (le droit derrière la veine cave) ; ils donnent les <strong>nerfs splanchniques lombaux</strong> vers les plexus pré-aortiques (<strong>plexus cœliaque</strong> autour du tronc cœliaque, <strong>plexus mésentériques</strong>, <strong>plexus hypogastrique supérieur</strong> en avant de L5 et du promontoire, qui se divise en nerfs hypogastriques droit et gauche vers le pelvis). Les <strong>nerfs splanchniques thoraciques</strong> (grand, petit, imus) traversent le diaphragme pour rejoindre les ganglions cœliaques et aortico-rénaux.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>anévrisme de l'aorte abdominale</strong> (homme de plus de 65 ans, tabac) est sous-rénal dans 90 % des cas ; sa rupture (douleur, choc, masse battante) est mortelle sans chirurgie ; dépistage échographique, chirurgie ou endoprothèse au-delà de 5–5,5 cm. Le <strong>syndrome de Leriche</strong> (thrombose de la bifurcation aortique) donne une claudication des fesses et une impuissance. La <strong>thrombose de la veine cave inférieure</strong> donne un œdème bilatéral des membres inférieurs ; un filtre cave prévient les embolies. Les cancers du testicule métastasent aux nœuds lombo-aortiques (et non inguinaux).</div>`
            }
          ],
          points_cles: [
            "L'espace rétropéritonéal, entre péritoine pariétal postérieur et paroi lombale, contient les reins, uretères, surrénales, aorte, veine cave inférieure, chaînes sympathiques, plexus lombal et lymphatiques lombaux (primitifs), plus duodénum, pancréas et côlons accolés (secondaires).",
            "Reins : 12 × 6 × 3 cm, 130–150 g, de T12 à L3 à droite (plus bas, foie) et T11 à L2 à gauche, hile en L1 ; au hile d'avant en arrière : veine, artère, pelvis.",
            "Loge rénale fermée par le fascia rénal (feuillets pré- et rétro-rénal), ouverte en bas ; graisse péri-rénale dedans, para-rénale dehors ; surrénale dans la loge mais séparée par une cloison.",
            "Rapports antérieurs : foie, D2, angle colique droit à droite ; rate, estomac, pancréas, angle colique gauche à gauche ; postérieurs : diaphragme et plèvre, 12e côte, psoas, carré des lombes, nerfs T12 et L1.",
            "Artères rénales en L1–L2 (droite plus longue, derrière la veine cave), cinq segments terminaux ; veine rénale gauche plus longue, devant l'aorte, reçoit les veines gonadique et surrénale gauches.",
            "Voies excrétrices : 8–12 calices mineurs, 2–3 majeurs, pelvis rénal, uretère de 25–30 cm (abdominal sur le psoas, iliaque, pelvien, intra-mural anti-reflux), trois rétrécissements : jonction pyélo-urétérale, vaisseaux iliaques, jonction urétéro-vésicale.",
            "L'uretère est croisé en avant par les vaisseaux gonadiques et passe sous l'artère utérine (femme) ou sous le conduit déférent (homme) : « l'eau passe sous le pont ».",
            "Surrénales : 4–6 g, corticale (aldostérone, cortisol, androgènes) et médullaire (catécholamines) ; trois artères (phrénique inférieure, aorte, rénale) ; veine unique : droite dans la veine cave, gauche dans la veine rénale gauche.",
            "Aorte abdominale de T12 à L4 : tronc cœliaque T12, mésentérique supérieure L1, rénales L1–L2, gonadiques L2, mésentérique inférieure L3, quatre paires de lombales, bifurcation L4 ; anévrisme sous-rénal au-delà de 3 cm.",
            "Veine cave inférieure formée en L5 par les iliaques communes, à droite de l'aorte, traverse le diaphragme en T8 ; affluents : lombales, gonadique droite, rénales, surrénale droite, hépatiques ; gonades drainées vers les nœuds lombo-aortiques."
          ],
          lexique: [
            { terme: "Fascia rénal", def: "Fascia de Gerota, à deux feuillets (pré- et rétro-rénal), délimitant la loge rénale, ouverte en bas." },
            { terme: "Sinus rénal", def: "Cavité du rein ouverte par le hile, contenant les calices, le pelvis rénal, les vaisseaux et de la graisse." },
            { terme: "Pyramide rénale", def: "Unité de la médullaire (8 à 12 par rein), dont le sommet, la papille, s'ouvre dans un calice mineur." },
            { terme: "Pelvis rénal", def: "Bassinet, confluent des calices majeurs, se continuant par l'uretère à la jonction pyélo-urétérale (L2)." },
            { terme: "Segment rénal", def: "Territoire parenchymateux vascularisé par une artère segmentaire terminale (cinq par rein)." },
            { terme: "Jonction urétéro-vésicale", def: "Rétrécissement le plus étroit de l'uretère, à l'entrée du trajet intra-mural oblique anti-reflux." },
            { terme: "Trajet intra-mural de l'uretère", def: "Segment oblique de 1,5–2 cm dans la paroi vésicale, constituant un dispositif anti-reflux." },
            { terme: "Veine surrénale", def: "Veine centrale unique de la surrénale : la droite se jette dans la veine cave inférieure, la gauche dans la veine rénale gauche." },
            { terme: "Citerne du chyle", def: "Confluent lymphatique des troncs lombaux et intestinal en L1–L2, origine du conduit thoracique." },
            { terme: "Plexus hypogastrique supérieur", def: "Plexus sympathique pré-aortique situé en avant de L5 et du promontoire, se divisant en nerfs hypogastriques." }
          ],
          qcm: [
            {
              q: "Concernant la situation des reins, quelles propositions sont exactes ?",
              options: [
                "A. Le rein droit est plus bas que le rein gauche.",
                "B. Le hile rénal se projette environ en L1.",
                "C. Les reins sont des organes intrapéritonéaux.",
                "D. Le pôle supérieur du rein est en rapport avec le récessus pleural costo-diaphragmatique.",
                "E. Au hile, d'avant en arrière, on trouve la veine, l'artère puis le pelvis rénal."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : les reins sont rétropéritonéaux primitifs, recouverts seulement en avant par le péritoine pariétal."
            },
            {
              q: "Concernant la vascularisation rénale, quelles propositions sont exactes ?",
              options: [
                "A. Les artères rénales naissent de l'aorte en L1–L2.",
                "B. L'artère rénale droite passe en avant de la veine cave inférieure.",
                "C. La veine rénale gauche est plus longue que la droite et croise l'aorte en avant.",
                "D. La veine gonadique gauche se jette dans la veine rénale gauche.",
                "E. Les artères segmentaires du rein sont richement anastomosées entre elles."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : l'artère rénale droite passe en arrière de la veine cave inférieure. E est fausse : les artères segmentaires sont terminales, d'où les infarctus segmentaires."
            },
            {
              q: "Concernant les rapports des reins, quelles propositions sont exactes ?",
              options: [
                "A. Le rein droit est en rapport en avant avec le foie et D2.",
                "B. Le rein gauche est en rapport en avant avec la rate et la queue du pancréas.",
                "C. La surrénale droite est située en arrière de la veine cave inférieure.",
                "D. La face postérieure des reins repose sur le psoas et le carré des lombes.",
                "E. La loge rénale est fermée en bas par le fascia rénal."
              ],
              bonnes: [0, 1, 2, 3],
              explication: "A, B, C et D sont vraies. E est fausse : la loge rénale est ouverte en bas, le long de l'uretère."
            },
            {
              q: "Concernant l'uretère, quelles propositions sont exactes ?",
              options: [
                "A. Il mesure 25 à 30 cm de long.",
                "B. Son segment abdominal descend en avant du muscle psoas.",
                "C. Il est croisé en avant par les vaisseaux gonadiques.",
                "D. Chez la femme, il passe au-dessus de l'artère utérine.",
                "E. La jonction urétéro-vésicale est son rétrécissement le plus étroit."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : l'uretère passe sous l'artère utérine dans la base du ligament large (« l'eau passe sous le pont »)."
            },
            {
              q: "Concernant les glandes surrénales, quelles propositions sont exactes ?",
              options: [
                "A. Chaque surrénale reçoit trois artères : supérieure, moyenne et inférieure.",
                "B. La veine surrénale droite se jette dans la veine rénale droite.",
                "C. La veine surrénale gauche se jette dans la veine rénale gauche.",
                "D. La médullaire surrénale dérive du neuro-ectoderme.",
                "E. La surrénale gauche est en rapport en avant avec la bourse omentale et le pancréas."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la veine surrénale droite, très courte, se jette directement dans la veine cave inférieure."
            },
            {
              q: "Concernant l'aorte abdominale, quelles propositions sont exactes ?",
              options: [
                "A. Elle traverse le diaphragme en T12.",
                "B. Elle se termine en L4 en deux artères iliaques communes.",
                "C. Les artères gonadiques naissent de l'aorte au niveau de L2.",
                "D. Elle donne quatre paires d'artères lombales.",
                "E. Un anévrisme de l'aorte abdominale est le plus souvent situé au-dessus des artères rénales."
              ],
              bonnes: [0, 1, 2, 3],
              explication: "A, B, C et D sont vraies. E est fausse : l'anévrisme est sous-rénal dans 90 % des cas."
            },
            {
              q: "Concernant la veine cave inférieure et les lymphatiques, quelles propositions sont exactes ?",
              options: [
                "A. La veine cave inférieure se forme en L5 par la réunion des veines iliaques communes.",
                "B. Elle monte à gauche de l'aorte.",
                "C. Elle traverse le diaphragme en T8.",
                "D. Les veines hépatiques se jettent dans la veine cave inférieure juste sous le diaphragme.",
                "E. Les lymphatiques du testicule se drainent en premier dans les nœuds inguinaux."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : la veine cave inférieure est à droite de l'aorte. E est fausse : le testicule se draine vers les nœuds lombo-aortiques, suivant sa migration embryonnaire."
            }
          ]
        },
        {
          id: "pelvis-perinee",
          titre: "Pelvis et périnée",
          duree: 55,
          objectifs: [
            "Décrire le bassin osseux, le diaphragme pelvien et les espaces du pelvis.",
            "Décrire la vessie, l'urètre masculin et féminin et le rectum avec leurs rapports.",
            "Décrire les organes génitaux masculins (testicule, voies spermatiques, prostate, vésicules séminales, pénis).",
            "Décrire les organes génitaux féminins (ovaires, trompes, utérus, vagin, vulve) et leurs moyens de fixité.",
            "Décrire la vascularisation par l'artère iliaque interne, le nerf pudendal, les plexus hypogastriques et le périnée."
          ],
          sections: [
            {
              titre: "Le pelvis : parois, diaphragme pelvien et espaces",
              contenu: `<p>Le <strong>pelvis</strong> (petit bassin) est la cavité située sous le détroit supérieur, limitée par le <strong>bassin osseux</strong> (sacrum, coccyx, os coxaux), les <strong>ligaments</strong> sacro-épineux et sacro-tubéral, et les <strong>muscles pariétaux</strong> : <strong>obturateur interne</strong> (paroi latérale, recouvert du fascia obturateur sur lequel se fixe l'arc tendineux de l'élévateur de l'anus) et <strong>piriforme</strong> (paroi postérieure). Il est fermé en bas par le <strong>diaphragme pelvien</strong>, qui sépare la cavité pelvienne du périnée.</p>
<h4>Le diaphragme pelvien</h4>
<p>Entonnoir musculaire formé par :</p>
<ul>
<li>le <strong>muscle élévateur de l'anus</strong> : large et mince, inséré sur la face postérieure du pubis, l'arc tendineux du fascia obturateur et l'épine ischiatique ; il comprend trois faisceaux : le <strong>pubo-rectal</strong> (le plus médial, formant une sangle en U autour de la jonction ano-rectale, essentiel à la continence), le <strong>pubo-coccygien</strong> et l'<strong>ilio-coccygien</strong> (vers le coccyx et le ligament ano-coccygien). Il laisse en avant un <strong>hiatus uro-génital</strong> (urètre, vagin) et un hiatus anal. Innervation : nerf de l'élévateur de l'anus (S3–S4) et nerf pudendal ;</li>
<li>le <strong>muscle coccygien</strong> (ischio-coccygien), en arrière, doublant le ligament sacro-épineux.</li>
</ul>
<p>Le diaphragme pelvien soutient les viscères, résiste à la pression abdominale et participe à la continence urinaire et fécale. Il est recouvert du fascia pelvien pariétal.</p>
<h4>Le péritoine pelvien et les espaces sous-péritonéaux</h4>
<p>Le péritoine descend du pelvis en tapissant la vessie puis le rectum (culs-de-sac recto-vésical chez l'homme ; vésico-utérin et <strong>recto-utérin de Douglas</strong> chez la femme, dont l'utérus et les ligaments larges soulèvent le péritoine). Sous le péritoine, l'<strong>espace sous-péritonéal</strong> contient les viscères (vessie, utérus, rectum, prostate), les vaisseaux et nerfs, dans un tissu cellulo-graisseux condensé en <strong>lames sacro-recto-génito-pubiennes</strong> (pilier de la vessie, paramètre, ligaments utéro-sacraux). On distingue l'<strong>espace rétro-pubien</strong> (de Retzius, en avant de la vessie), les espaces para-vésicaux, les <strong>paramètres</strong> (latéralement à l'utérus, traversés par l'artère utérine et l'uretère), l'espace recto-vaginal ou recto-prostatique (fascia de Denonvilliers) et l'<strong>espace rétro-rectal</strong> (présacré, plexus veineux présacré).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'affaiblissement du diaphragme pelvien (accouchements, âge) entraîne les <strong>prolapsus</strong> génitaux (cystocèle, hystéroptose, rectocèle) et l'<strong>incontinence urinaire d'effort</strong> ; la rééducation périnéale renforce l'élévateur de l'anus. Le cul-de-sac de Douglas, point déclive, est le siège des collections (hémopéritoine de grossesse extra-utérine, abcès) palpables au toucher. L'abord de la vessie par l'espace de Retzius est extra-péritonéal.</div>`
            },
            {
              titre: "La vessie et l'urètre",
              contenu: `<h4>La vessie</h4>
<p>Réservoir musculo-membraneux sous-péritonéal, situé en arrière de la symphyse pubienne (espace rétro-pubien), de capacité physiologique de <strong>300 à 500 mL</strong> (besoin d'uriner dès 150–300 mL, capacité maximale 1–2 L). Vide, elle est pyramidale, entièrement pelvienne ; pleine, elle devient ovoïde et déborde au-dessus de la symphyse (matité sus-pubienne, ponction sus-pubienne possible sans traverser le péritoine). On lui décrit : l'<strong>apex</strong> (antéro-supérieur, prolongé par le ligament ombilical médian, vestige de l'allantoïde/ouraque), la <strong>face supérieure</strong> (recouverte de péritoine : anses grêles, sigmoïde ; utérus chez la femme), les <strong>faces inféro-latérales</strong> (élévateur de l'anus, obturateur interne, plexus veineux), le <strong>fundus</strong> ou base (postéro-inférieur : chez l'homme vésicules séminales, conduits déférents et rectum ; chez la femme col utérin et vagin) et le <strong>col</strong> (orifice urétral interne, en rapport avec la prostate chez l'homme).</p>
<p>Configuration interne : muqueuse plissée sauf au <strong>trigone vésical</strong> (lisse, triangulaire, entre les deux ostiums urétéraux, reliés par le bourrelet interurétéral, et l'orifice urétral interne). La musculeuse plexiforme forme le <strong>détrusor</strong> (muscle lisse, parasympathique S2–S4 : contraction mictionnelle) ; au col, le <strong>sphincter lisse</strong> (interne, sympathique L1–L2, surtout chez l'homme). Vascularisation : <strong>artères vésicales supérieures</strong> (de l'ombilicale) <strong>et inférieures</strong> (iliaque interne ; vaginale chez la femme) ; plexus veineux vésical → veines iliaques internes ; lymphatiques → nœuds iliaques externes et internes. Innervation : plexus hypogastrique inférieur (parasympathique S2–S4 : miction ; sympathique : continence) ; le sphincter strié est volontaire (nerf pudendal).</p>
<h4>L'urètre</h4>
<table>
<thead><tr><th></th><th>Urètre masculin</th><th>Urètre féminin</th></tr></thead>
<tbody>
<tr><td>Longueur</td><td><strong>16 à 20 cm</strong></td><td><strong>3 à 4 cm</strong></td></tr>
<tr><td>Segments</td><td><strong>Prostatique</strong> (3 cm, traverse la prostate ; colliculus séminal avec abouchement des conduits éjaculateurs et de l'utricule), <strong>membraneux</strong> (1–1,5 cm, traverse le périnée et le sphincter strié ; le plus étroit et le plus fragile), <strong>spongieux</strong> (12–15 cm, dans le corps spongieux du pénis ; bulbe, puis fosse naviculaire dans le gland ; glandes bulbo-urétrales de Cowper s'y abouchent)</td><td>Trajet oblique en bas et en avant, du col vésical au <strong>méat urétral externe</strong> dans le vestibule, entre le clitoris et l'orifice vaginal ; accolé à la paroi antérieure du vagin</td></tr>
<tr><td>Courbures</td><td>Deux : sous-pubienne (fixe) et pré-pubienne (effacée pénis en érection ou tendu lors du sondage)</td><td>—</td></tr>
<tr><td>Sphincters</td><td>Lisse au col (sympathique), strié péri-membraneux (pudendal, volontaire)</td><td>Strié (sphincter urétro-vaginal) sur toute la longueur</td></tr>
<tr><td>Fonction</td><td>Urinaire et génitale (sperme)</td><td>Urinaire seule</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>sondage vésical</strong> masculin est difficile (longueur, courbures, prostate) ; les <strong>sténoses</strong> et les ruptures post-traumatiques siègent sur l'urètre membraneux (fracture du bassin) ou bulbaire (chute à cheval). La brièveté de l'urètre féminin explique la fréquence des <strong>cystites</strong>. L'<strong>incontinence d'effort</strong> féminine résulte de l'hypermobilité du col et de l'insuffisance du plancher ; chez l'homme, elle complique la prostatectomie (lésion du sphincter strié). La <strong>rétention aiguë</strong> (adénome prostatique) donne un globe vésical.</div>`
            },
            {
              titre: "Le rectum et le canal anal",
              contenu: `<p>Le <strong>rectum</strong> continue le sigmoïde au niveau de <strong>S3</strong> et se termine au canal anal au niveau du diaphragme pelvien ; il mesure <strong>12 à 15 cm</strong>. Il n'a ni tænias, ni haustrations, ni appendices omentaux. Il décrit une courbure sacrale (concave en avant, suivant le sacrum) puis une <strong>angulation périnéale</strong> (cap anal, 80–90°, maintenue par le pubo-rectal). Sa partie moyenne dilatée est l'<strong>ampoule rectale</strong> (réservoir), marquée de trois <strong>plis transverses</strong> (valves de Houston). Le péritoine recouvre le tiers supérieur en avant et sur les côtés, le tiers moyen en avant seulement (cul-de-sac de Douglas, à 7 cm de l'anus chez la femme), le tiers inférieur est sous-péritonéal. Rapports antérieurs : chez l'homme, la vessie, les vésicules séminales, les conduits déférents et la <strong>prostate</strong> (par le fascia recto-prostatique : toucher rectal) ; chez la femme, le col utérin et le <strong>vagin</strong> (septum recto-vaginal). En arrière : le sacrum, le coccyx, le plexus veineux présacré, l'artère rectale supérieure dans le <strong>mésorectum</strong> (graisse enveloppée du fascia rectal, contenant les lymphatiques : exérèse totale dans le cancer). Latéralement : les lames sacro-recto-génito-pubiennes avec les plexus hypogastriques inférieurs et l'uretère.</p>
<h4>Le canal anal</h4>
<p>Long de <strong>3 à 4 cm</strong>, du cap anal à l'<strong>anus</strong>, dirigé en bas et en arrière, traversant le périnée postérieur. La <strong>ligne pectinée</strong> (jonction des colonnes anales de Morgagni et des valvules anales, à mi-hauteur) marque la frontière embryologique (endoderme/ectoderme) et donc : au-dessus, muqueuse glandulaire insensible, artère rectale supérieure, veines vers le système porte, lymphatiques vers les nœuds mésentériques inférieurs et iliaques internes, innervation végétative ; au-dessous, épithélium malpighien <strong>très sensible</strong> (nerf pudendal), artère rectale inférieure, veines vers la cave inférieure, lymphatiques vers les <strong>nœuds inguinaux superficiels</strong>. L'appareil sphinctérien comprend le <strong>sphincter interne</strong> (lisse, involontaire, épaississement de la circulaire, 70 % du tonus de repos) et le <strong>sphincter externe</strong> (strié, volontaire, trois faisceaux, nerf pudendal et S4), renforcé par le pubo-rectal.</p>
<p>Vascularisation du rectum : <strong>artère rectale supérieure</strong> (terminaison de la mésentérique inférieure, principale), <strong>rectales moyennes</strong> (iliaques internes), <strong>rectales inférieures</strong> (pudendales internes) ; veines homonymes formant les plexus rectaux (anastomose porto-cave). Innervation : parasympathique S2–S4 (nerfs splanchniques pelviens : défécation), sympathique (plexus hypogastrique), pudendal (sphincter externe, sensibilité anale).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>toucher rectal</strong> explore l'ampoule, la prostate (ou le col utérin), le cul-de-sac de Douglas et le tonus sphinctérien. Les <strong>hémorroïdes</strong> internes (plexus hémorroïdal interne, au-dessus de la ligne pectinée, indolores, saignent) et externes (sous la ligne, douloureuses, thrombose) sont des dilatations des plexus veineux. La <strong>fissure anale</strong> (postérieure) et les <strong>abcès</strong> de la marge sont très douloureux (pudendal). Dans le cancer du rectum, la hauteur par rapport à la marge anale conditionne la conservation sphinctérienne.</div>`
            },
            {
              titre: "Les organes génitaux masculins",
              contenu: `<h4>Le testicule et l'épididyme</h4>
<p>Le <strong>testicule</strong> est une gonade ovoïde de 4–5 cm, 20 g, dans le <strong>scrotum</strong>, à grand axe oblique en bas et en arrière ; le gauche est généralement plus bas. Il est entouré de l'<strong>albuginée</strong> (capsule fibreuse épaisse) et de la <strong>tunique vaginale</strong> (séreuse à deux feuillets, vestige du processus vaginal péritonéal : hydrocèle). Il contient 200 à 300 lobules de tubes séminifères (spermatogenèse) et des cellules de Leydig (testostérone). L'<strong>épididyme</strong> (tête, corps, queue) coiffe son bord postéro-supérieur et se continue par le <strong>conduit déférent</strong>. Le testicule est descendu de la région lombale par le canal inguinal (7<sup>e</sup>–9<sup>e</sup> mois) : d'où son <strong>artère testiculaire</strong> issue directement de l'aorte (L2), sa veine (plexus pampiniforme → veine testiculaire → veine cave inférieure à droite, <strong>veine rénale gauche</strong> à gauche : varicocèle gauche), ses <strong>lymphatiques lombo-aortiques</strong> et son innervation T10–L1 (douleur projetée abdominale). Le scrotum, lui, se draine vers les nœuds inguinaux. Le <strong>cordon spermatique</strong> traverse le canal inguinal (voir paroi abdominale). Le <strong>muscle crémaster</strong> (réflexe crémastérien, L1–L2) et le dartos régulent la température (2 °C sous la température corporelle).</p>
<h4>Les voies spermatiques</h4>
<p>Le <strong>conduit déférent</strong> (40–45 cm, 2 mm, paroi musculaire épaisse, « corde » palpable dans le cordon) monte dans le cordon, traverse le canal inguinal, croise les vaisseaux iliaques externes, longe la paroi latérale du pelvis, <strong>croise l'uretère en passant au-dessus</strong>, et se dilate en <strong>ampoule</strong> sur la face postérieure de la vessie, médialement à la vésicule séminale. La <strong>vésicule séminale</strong> (5 cm, bosselée, sécrète 60 % du liquide séminal) est en arrière de la vessie, en avant du rectum (palpable au toucher rectal si distendue). Conduit déférent et vésicule s'unissent en <strong>conduit éjaculateur</strong> (2 cm), qui traverse la prostate et s'ouvre dans l'urètre prostatique sur le <strong>colliculus séminal</strong>.</p>
<h4>La prostate</h4>
<p>Glande exocrine (30 % du liquide séminal, PSA) en forme de châtaigne, de <strong>20 g</strong> et 3 × 4 × 2,5 cm, sous la vessie, en avant du rectum (palpable au toucher rectal : ferme, lisse, avec un sillon médian), en arrière de la symphyse (espace rétro-pubien, plexus veineux de Santorini), reposant sur le périnée (sphincter strié de l'urètre). Elle entoure l'<strong>urètre prostatique</strong> et est traversée par les conduits éjaculateurs. Anatomie zonale de McNeal : <strong>zone périphérique</strong> (70 %, postérieure, siège des cancers), <strong>zone centrale</strong> (25 %, autour des conduits éjaculateurs), <strong>zone de transition</strong> (5 %, péri-urétrale, siège de l'<strong>adénome</strong>). Vascularisation : artères vésicales inférieures et rectales moyennes ; plexus veineux prostatique → iliaques internes, anastomosé aux plexus vertébraux (métastases osseuses rachidiennes) ; lymphatiques → nœuds iliaques internes et obturateurs. Les <strong>bandelettes neuro-vasculaires</strong> postéro-latérales (nerfs caverneux, érection) doivent être préservées lors de la prostatectomie.</p>
<h4>Le pénis</h4>
<p>Organe érectile formé de deux <strong>corps caverneux</strong> (dorsaux, fixés aux branches ischio-pubiennes par les racines) et d'un <strong>corps spongieux</strong> (ventral, contenant l'urètre, renflé en <strong>bulbe</strong> en arrière et en <strong>gland</strong> en avant, recouvert du prépuce), entourés du fascia pénien profond (de Buck) et suspendus par le ligament suspenseur. Vascularisation par l'<strong>artère pudendale interne</strong> (artères profondes du pénis dans les corps caverneux : érection ; dorsales ; bulbo-urétrales) ; veine dorsale profonde → plexus prostatique. Innervation : <strong>nerf dorsal du pénis</strong> (pudendal, sensibilité du gland), <strong>nerfs caverneux</strong> (parasympathiques S2–S4 : érection), sympathique L1–L2 (éjaculation). « Point and shoot » : parasympathique pour l'érection, sympathique pour l'éjaculation.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>torsion du cordon spermatique</strong> (adolescent, douleur brutale, testicule ascensionné, abolition du réflexe crémastérien) est une urgence (6 heures). La <strong>cryptorchidie</strong> favorise le cancer et l'infertilité. Le <strong>cancer de la prostate</strong> naît en zone périphérique (nodule dur au toucher rectal) ; l'<strong>adénome</strong> (zone de transition) comprime l'urètre (dysurie, rétention). Le cancer du testicule métastase aux nœuds lombo-aortiques. La <strong>vasectomie</strong> sectionne le conduit déférent dans le scrotum.</div>`
            },
            {
              titre: "Les organes génitaux féminins",
              contenu: `<h4>L'ovaire</h4>
<p>Gonade ovoïde de 3 × 2 × 1 cm (6–8 g), blanc nacré, bosselée après la puberté, <strong>intrapéritonéale mais non recouverte de péritoine</strong> (épithélium germinatif), dans la <strong>fosse ovarique</strong> de la paroi latérale du pelvis, en arrière du ligament large, sous la bifurcation iliaque, en avant de l'uretère et de l'artère iliaque interne, au contact du nerf obturateur (douleur de la face médiale de la cuisse). Fixé par le <strong>mésovarium</strong> (au ligament large), le <strong>ligament propre de l'ovaire</strong> (à la corne utérine), le <strong>ligament suspenseur de l'ovaire</strong> (lombo-ovarien, conduit les vaisseaux ovariques depuis la région lombale) et le ligament tubo-ovarique. <strong>Artère ovarique</strong> (de l'aorte en L2, croise l'uretère) anastomosée avec la branche ovarique de l'utérine ; veines : plexus → veine ovarique → veine cave inférieure à droite, veine rénale gauche à gauche ; lymphatiques <strong>lombo-aortiques</strong>.</p>
<h4>La trompe utérine</h4>
<p>Conduit de <strong>10 à 12 cm</strong> dans le bord supérieur du ligament large (mésosalpinx), de la corne utérine vers l'ovaire : <strong>partie utérine</strong> (intra-murale, 1 cm), <strong>isthme</strong> (3–4 cm, étroit), <strong>ampoule</strong> (7 cm, large, siège de la fécondation et de la plupart des grossesses extra-utérines) et <strong>infundibulum</strong> (pavillon, à franges, avec l'ostium abdominal ouvrant la cavité péritonéale). Vascularisation par les arcades tubaires des artères utérine et ovarique.</p>
<h4>L'utérus</h4>
<p>Organe musculaire creux piriforme de <strong>7–8 cm</strong>, 50 g (nullipare), au centre du pelvis, entre vessie (en avant) et rectum (en arrière) : <strong>corps</strong> (fond au-dessus des cornes, faces vésicale et intestinale), <strong>isthme</strong> et <strong>col</strong> (3 cm, portion supra-vaginale et portion intra-vaginale « museau de tanche » avec l'orifice externe, visible au spéculum ; frottis à la jonction exo-endocol). Position normale : <strong>antéversé</strong> (angle de 90° entre l'axe du corps et celui du vagin) et <strong>antéfléchi</strong> (angle de 100–120° entre corps et col) ; la rétroversion est une variante. Paroi : périmétrium (péritoine, sauf en avant du col), <strong>myomètre</strong> (épais, fibromes), <strong>endomètre</strong> (cyclique). Moyens de fixité : <strong>ligaments larges</strong> (lames péritonéales latérales, contenant les paramètres, l'artère utérine et l'uretère à la base), <strong>ligaments ronds</strong> (de la corne au canal inguinal et aux grandes lèvres : antéversion), <strong>ligaments utéro-sacraux</strong> (du col au sacrum, autour du rectum), <strong>ligaments cardinaux</strong> (paramètres, de Mackenrodt) et le plancher pelvien. Vascularisation : <strong>artère utérine</strong> (iliaque interne), très sinueuse, qui croise <strong>au-dessus de l'uretère</strong> à 1,5–2 cm du col puis remonte le long du bord latéral (artères arquées, radiaires, spiralées) et s'anastomose avec l'ovarique ; veines → plexus utérin → iliaques internes ; lymphatiques du col → iliaques externes, internes et obturateurs ; du corps → aussi lombo-aortiques et inguinaux (ligament rond). Innervation : plexus hypogastrique inférieur (plexus utéro-vaginal de Lee-Frankenhäuser).</p>
<h4>Le vagin et la vulve</h4>
<p>Le <strong>vagin</strong> (8–10 cm, oblique en bas et en avant, aplati, parois antérieure et postérieure accolées) va du col (qu'il entoure en formant les <strong>culs-de-sac vaginaux</strong>, le postérieur étant le plus profond, en rapport avec le Douglas) au vestibule ; en avant : vessie et urètre ; en arrière : Douglas, rectum, puis centre tendineux du périnée ; latéralement : paramètres, uretère, élévateur de l'anus. Artères vaginales (iliaque interne), utérine, rectale moyenne, pudendale interne. La <strong>vulve</strong> comprend le mont du pubis, les <strong>grandes lèvres</strong> (homologues du scrotum), les <strong>petites lèvres</strong>, le <strong>clitoris</strong> (corps caverneux, gland), le <strong>vestibule</strong> (méat urétral, orifice vaginal avec l'hymen puis ses caroncules, <strong>glandes vestibulaires majeures</strong> de Bartholin) et les <strong>bulbes vestibulaires</strong>. Innervation : nerf pudendal (nerfs labiaux, nerf dorsal du clitoris), ilio-inguinal, génito-fémoral ; lymphatiques vers les nœuds <strong>inguinaux superficiels</strong>.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'uretère passe <strong>sous</strong> l'artère utérine, à 1,5–2 cm du col : il est menacé dans l'hystérectomie. Les ovaires et les testicules se drainent vers les nœuds lombo-aortiques (origine lombale), la vulve, le scrotum et le canal anal vers les nœuds inguinaux. Le fond du cul-de-sac vaginal postérieur répond au cul-de-sac de Douglas.</div>`
            },
            {
              titre: "Vascularisation et innervation du pelvis",
              contenu: `<h4>L'artère iliaque interne</h4>
<p>Branche de division médiale de l'iliaque commune (L5–S1, devant l'articulation sacro-iliaque), longue de 4 cm, elle descend dans le pelvis en avant du plexus sacral et de l'articulation sacro-iliaque, en arrière de l'uretère, et se divise en deux troncs :</p>
<table>
<thead><tr><th>Tronc</th><th>Branches pariétales</th><th>Branches viscérales</th></tr></thead>
<tbody>
<tr><td><strong>Postérieur</strong></td><td><strong>Ilio-lombale</strong>, <strong>sacrales latérales</strong>, <strong>glutéale supérieure</strong> (la plus volumineuse, espace supra-piriforme)</td><td>—</td></tr>
<tr><td><strong>Antérieur</strong></td><td><strong>Obturatrice</strong> (canal obturateur, loge médiale de la cuisse), <strong>glutéale inférieure</strong> (espace infra-piriforme), <strong>pudendale interne</strong> (espace infra-piriforme, contourne l'épine ischiatique, petit foramen ischiatique, canal pudendal d'Alcock sur l'obturateur interne : rectale inférieure, périnéale, artères du pénis ou du clitoris)</td><td><strong>Ombilicale</strong> (oblitérée en ligament ombilical médial, donne les <strong>vésicales supérieures</strong> et l'artère du conduit déférent), <strong>vésicale inférieure</strong> (homme) ou <strong>vaginale</strong> (femme), <strong>utérine</strong> (femme), <strong>rectale moyenne</strong></td></tr>
</tbody>
</table>
<p>Les <strong>veines iliaques internes</strong> drainent les plexus veineux viscéraux (vésical, prostatique, utérin, vaginal, rectal) et rejoignent les iliaques externes pour former les iliaques communes (L5). Le <strong>plexus veineux présacré</strong>, en avant du sacrum, saigne abondamment dans les fractures du bassin et la chirurgie rectale. Les <strong>lymphatiques</strong> suivent les artères : nœuds iliaques internes, externes, communs, obturateurs, sacraux, puis lombaux.</p>
<h4>Le nerf pudendal (honteux interne)</h4>
<p>Né du plexus sacral (<strong>S2–S3–S4</strong>), il sort du pelvis par l'espace infra-piriforme, contourne l'<strong>épine ischiatique</strong> (et le ligament sacro-épineux) avec les vaisseaux pudendaux internes, rentre dans le périnée par le <strong>petit foramen ischiatique</strong> et chemine dans le <strong>canal pudendal</strong> (d'Alcock), dédoublement du fascia de l'obturateur interne sur la paroi latérale de la fosse ischio-anale. Branches : <strong>nerf rectal inférieur</strong> (sphincter externe de l'anus, peau péri-anale), <strong>nerf périnéal</strong> (muscles du périnée, sphincter strié de l'urètre, scrotum ou grandes lèvres), <strong>nerf dorsal du pénis ou du clitoris</strong>. C'est le nerf somatique du périnée : <strong>continence volontaire</strong>, <strong>sensibilité des organes génitaux externes</strong>, orgasme. Le bloc pudendal (anesthésie obstétricale) se fait par voie trans-vaginale au contact de l'épine ischiatique.</p>
<h4>L'innervation végétative pelvienne</h4>
<p>Le <strong>plexus hypogastrique supérieur</strong> (sympathique, devant L5) donne les <strong>nerfs hypogastriques</strong> qui rejoignent, avec les <strong>nerfs splanchniques pelviens</strong> (parasympathiques, S2–S4, « nerfs érecteurs »), les <strong>plexus hypogastriques inférieurs</strong> (plexus pelviens), lames nerveuses situées de part et d'autre du rectum, de la vessie, de la prostate ou de l'utérus et du vagin, dans les lames sacro-recto-génito-pubiennes. Ils innervent les viscères pelviens : <strong>parasympathique</strong> = miction (détrusor), défécation, érection ; <strong>sympathique</strong> = continence (col vésical), éjaculation, vasoconstriction. Le <strong>centre de la miction</strong> est sacral (S2–S4), sous contrôle encéphalique (pont, cortex frontal).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>névralgie pudendale</strong> (compression dans le canal d'Alcock, cyclistes) donne des douleurs périnéales assises. La chirurgie du rectum, de la prostate ou de l'utérus peut léser les plexus hypogastriques inférieurs (troubles urinaires, sexuels). Un traumatisme médullaire au-dessus du centre sacral donne une vessie neurologique hyperactive ; une lésion de la queue de cheval une vessie flasque avec rétention et incontinence par regorgement, anesthésie en selle. L'<strong>embolisation</strong> des branches de l'iliaque interne traite les hémorragies du bassin et du post-partum.</div>`
            },
            {
              titre: "Le périnée",
              contenu: `<p>Le <strong>périnée</strong> est l'ensemble des parties molles qui ferment en bas le pelvis, sous le diaphragme pelvien. Il a la forme d'un <strong>losange</strong> limité par la symphyse pubienne (en avant), les branches ischio-pubiennes, les tubérosités ischiatiques et les ligaments sacro-tubéraux, et le coccyx (en arrière). La ligne bi-ischiatique le divise en deux triangles :</p>
<h4>Le périnée antérieur (uro-génital)</h4>
<p>Il est traversé par l'urètre (et le vagin). On y décrit, de la profondeur vers la surface :</p>
<ul>
<li>l'<strong>espace profond du périnée</strong> : sous le diaphragme pelvien, il contient le <strong>sphincter externe de l'urètre</strong> (strié), le <strong>muscle transverse profond</strong> (et les glandes bulbo-urétrales chez l'homme), formant le « diaphragme uro-génital » classique, limité en bas par la <strong>membrane périnéale</strong> (fascia inférieur) ;</li>
<li>l'<strong>espace superficiel du périnée</strong> : entre la membrane périnéale et le fascia superficiel (de Colles) ; il contient les organes érectiles (racines des corps caverneux, bulbe du pénis ou bulbes vestibulaires et glandes de Bartholin) et trois muscles : <strong>ischio-caverneux</strong> (sur les racines des corps caverneux), <strong>bulbo-spongieux</strong> (sur le bulbe ; chez la femme, encadre l'orifice vaginal : « constricteur de la vulve ») et <strong>transverse superficiel</strong> ; tous convergent vers le <strong>centre tendineux du périnée</strong> (corps périnéal), noyau fibreux entre l'anus et le vagin (ou le bulbe), point clé de la statique pelvienne, déchiré lors de l'accouchement (épisiotomie préventive).</li>
</ul>
<h4>Le périnée postérieur (anal)</h4>
<p>Il contient le <strong>canal anal</strong> et son <strong>sphincter externe</strong>, et, de part et d'autre, les <strong>fosses ischio-anales</strong> (ischio-rectales) : espaces pyramidaux remplis de graisse, limités latéralement par l'obturateur interne et son fascia (contenant le canal pudendal), médialement par l'élévateur de l'anus et le sphincter externe, en bas par la peau ; elles communiquent en arrière de l'anus (abcès en fer à cheval). Elles sont traversées par les vaisseaux et nerfs rectaux inférieurs.</p>
<h4>Vascularisation et innervation</h4>
<p>Tout le périnée dépend de l'<strong>artère pudendale interne</strong> et du <strong>nerf pudendal</strong> (S2–S4), avec une participation du nerf cutané postérieur de la cuisse et des nerfs ilio-inguinal et génito-fémoral en avant. Dermatome : S3–S4 (« selle »). Lymphatiques vers les nœuds inguinaux superficiels.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les <strong>déchirures périnéales</strong> obstétricales sont classées selon l'atteinte du centre tendineux et du sphincter anal (incontinence anale) ; l'<strong>épisiotomie</strong> est médio-latérale pour épargner le sphincter. L'<strong>abcès de la fosse ischio-anale</strong> et les <strong>fistules anales</strong> sont fréquents. La <strong>gangrène de Fournier</strong> (fasciite nécrosante du périnée) diffuse le long des fascias vers la paroi abdominale. L'anesthésie « en selle » (rachianesthésie basse) bloque S2–S5.</div>`
            }
          ],
          points_cles: [
            "Le pelvis est fermé en bas par le diaphragme pelvien (élévateur de l'anus : pubo-rectal, pubo-coccygien, ilio-coccygien ; coccygien), traversé par les hiatus uro-génital et anal ; les viscères sont sous-péritonéaux.",
            "Vessie : 300–500 mL, sous-péritonéale, espace rétro-pubien de Retzius ; trigone lisse entre les ostiums urétéraux et l'orifice urétral ; détrusor parasympathique S2–S4 ; artères vésicales supérieures et inférieures.",
            "Urètre masculin 16–20 cm (prostatique, membraneux le plus fragile, spongieux) ; féminin 3–4 cm (cystites) ; sphincter lisse sympathique, sphincter strié pudendal.",
            "Rectum 12–15 cm de S3 au canal anal (3–4 cm) ; ligne pectinée : au-dessus muqueuse insensible, drainage porte et mésentérique inférieur ; au-dessous épithélium sensible (pudendal), drainage cave et inguinal.",
            "Testicule : artère de l'aorte (L2), veine gauche dans la rénale gauche (varicocèle), lymphatiques lombo-aortiques ; conduit déférent croise au-dessus de l'uretère ; prostate 20 g (zone périphérique = cancer, zone de transition = adénome).",
            "Ovaire dans la fosse ovarique (nerf obturateur), ligament suspenseur (vaisseaux ovariques), lymphatiques lombo-aortiques ; trompe 10–12 cm (ampoule = fécondation, GEU) ; utérus antéversé-antéfléchi, ligaments larges, ronds, utéro-sacraux, cardinaux.",
            "L'artère utérine croise au-dessus de l'uretère à 1,5–2 cm du col (hystérectomie) ; cul-de-sac vaginal postérieur en rapport avec le Douglas.",
            "Artère iliaque interne : tronc postérieur (ilio-lombale, sacrales latérales, glutéale supérieure) et antérieur (obturatrice, glutéale inférieure, pudendale interne, ombilicale → vésicales supérieures, vésicale inférieure/vaginale, utérine, rectale moyenne).",
            "Nerf pudendal (S2–S4) : espace infra-piriforme, épine ischiatique, petit foramen ischiatique, canal d'Alcock ; nerfs rectal inférieur, périnéal, dorsal du pénis/clitoris ; continence volontaire et sensibilité génitale.",
            "Parasympathique S2–S4 (nerfs splanchniques pelviens) : miction, défécation, érection ; sympathique L1–L2 : continence, éjaculation ; plexus hypogastriques inférieurs dans les lames sacro-recto-génito-pubiennes.",
            "Périnée losangique : antérieur uro-génital (espaces profond et superficiel, ischio-caverneux, bulbo-spongieux, transverses, centre tendineux) et postérieur anal (sphincter externe, fosses ischio-anales)."
          ],
          lexique: [
            { terme: "Muscle élévateur de l'anus", def: "Muscle principal du diaphragme pelvien (faisceaux pubo-rectal, pubo-coccygien, ilio-coccygien), soutien des viscères et continence." },
            { terme: "Trigone vésical", def: "Zone lisse triangulaire de la base de la vessie entre les deux ostiums urétéraux et l'orifice urétral interne." },
            { terme: "Espace rétro-pubien", def: "Espace de Retzius, entre la symphyse pubienne et la face antérieure de la vessie, extra-péritonéal." },
            { terme: "Ligne pectinée", def: "Ligne du canal anal unissant les valvules anales, frontière embryologique séparant deux territoires vasculaires, lymphatiques et nerveux." },
            { terme: "Mésorectum", def: "Graisse péri-rectale enveloppée du fascia rectal, contenant l'artère rectale supérieure et les lymphatiques, exérèse dans le cancer du rectum." },
            { terme: "Zone périphérique de la prostate", def: "Zone postérieure (70 % de la glande), accessible au toucher rectal, siège des cancers." },
            { terme: "Ligament suspenseur de l'ovaire", def: "Repli péritonéal lombo-ovarien conduisant les vaisseaux ovariques de la région lombale à l'ovaire." },
            { terme: "Paramètre", def: "Tissu conjonctif de la base du ligament large, latéralement au col utérin, traversé par l'artère utérine et l'uretère." },
            { terme: "Canal pudendal", def: "Canal d'Alcock, dédoublement du fascia de l'obturateur interne sur la paroi latérale de la fosse ischio-anale, contenant le nerf et les vaisseaux pudendaux internes." },
            { terme: "Centre tendineux du périnée", def: "Corps périnéal, noyau fibro-musculaire entre l'anus et le vagin (ou le bulbe), point de convergence des muscles périnéaux." }
          ],
          qcm: [
            {
              q: "Concernant le diaphragme pelvien et la vessie, quelles propositions sont exactes ?",
              options: [
                "A. Le faisceau pubo-rectal de l'élévateur de l'anus forme une sangle autour de la jonction ano-rectale.",
                "B. La vessie est un organe intrapéritonéal.",
                "C. Le trigone vésical est limité par les deux ostiums urétéraux et l'orifice urétral interne.",
                "D. Le détrusor est innervé par le parasympathique sacral (S2–S4).",
                "E. Une vessie pleine peut être ponctionnée au-dessus de la symphyse sans traverser le péritoine."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la vessie est sous-péritonéale, seule sa face supérieure est recouverte de péritoine."
            },
            {
              q: "Concernant l'urètre et le rectum, quelles propositions sont exactes ?",
              options: [
                "A. L'urètre masculin mesure 16 à 20 cm.",
                "B. L'urètre membraneux est le segment le plus fragile.",
                "C. Le rectum possède des tænias et des haustrations.",
                "D. Au-dessous de la ligne pectinée, le canal anal est très sensible et drainé vers les nœuds inguinaux.",
                "E. L'artère rectale supérieure est la branche terminale de l'artère mésentérique inférieure."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le rectum n'a ni tænias, ni haustrations, ni appendices omentaux."
            },
            {
              q: "Concernant les organes génitaux masculins, quelles propositions sont exactes ?",
              options: [
                "A. L'artère testiculaire naît de l'aorte abdominale.",
                "B. La veine testiculaire gauche se jette dans la veine rénale gauche.",
                "C. Le conduit déférent croise l'uretère en passant au-dessous de lui.",
                "D. Le cancer de la prostate naît le plus souvent dans la zone de transition.",
                "E. Les lymphatiques du testicule se drainent vers les nœuds lombo-aortiques."
              ],
              bonnes: [0, 1, 4],
              explication: "A, B et E sont vraies. C est fausse : le conduit déférent passe au-dessus de l'uretère. D est fausse : le cancer naît dans la zone périphérique ; l'adénome dans la zone de transition."
            },
            {
              q: "Concernant les organes génitaux féminins, quelles propositions sont exactes ?",
              options: [
                "A. L'ovaire est situé dans la fosse ovarique, au contact du nerf obturateur.",
                "B. La fécondation a lieu habituellement dans l'ampoule tubaire.",
                "C. L'utérus est normalement antéversé et antéfléchi.",
                "D. L'artère utérine passe sous l'uretère.",
                "E. Le cul-de-sac vaginal postérieur est en rapport avec le cul-de-sac recto-utérin."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : l'artère utérine passe au-dessus de l'uretère (l'uretère passe sous le pont), à 1,5–2 cm du col."
            },
            {
              q: "Concernant l'artère iliaque interne, quelles propositions sont exactes ?",
              options: [
                "A. L'artère glutéale supérieure naît de son tronc postérieur.",
                "B. L'artère obturatrice quitte le pelvis par le canal obturateur.",
                "C. L'artère pudendale interne sort par l'espace supra-piriforme.",
                "D. L'artère ombilicale donne les artères vésicales supérieures.",
                "E. L'artère utérine est une branche de l'iliaque externe."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : la pudendale interne sort par l'espace infra-piriforme puis contourne l'épine ischiatique. E est fausse : l'utérine est une branche de l'iliaque interne."
            },
            {
              q: "Concernant le nerf pudendal et l'innervation pelvienne, quelles propositions sont exactes ?",
              options: [
                "A. Le nerf pudendal naît des racines S2 à S4.",
                "B. Il chemine dans le canal d'Alcock sur la paroi latérale de la fosse ischio-anale.",
                "C. Il innerve le sphincter externe de l'anus.",
                "D. L'érection dépend du sympathique lombal.",
                "E. Les nerfs splanchniques pelviens sont parasympathiques."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : l'érection dépend du parasympathique sacral (nerfs caverneux, S2–S4) ; le sympathique commande l'éjaculation."
            },
            {
              q: "Concernant le périnée, quelles propositions sont exactes ?",
              options: [
                "A. Le périnée a la forme d'un losange divisé par la ligne bi-ischiatique en un triangle uro-génital et un triangle anal.",
                "B. Le bulbo-spongieux et l'ischio-caverneux appartiennent à l'espace superficiel du périnée.",
                "C. Le centre tendineux du périnée est situé entre l'anus et le vagin.",
                "D. La fosse ischio-anale est limitée latéralement par l'élévateur de l'anus.",
                "E. L'épisiotomie médio-latérale vise à épargner le sphincter anal."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la fosse ischio-anale est limitée latéralement par l'obturateur interne et médialement par l'élévateur de l'anus et le sphincter externe."
            }
          ]
        }
      ]
    },
    {
      titre: "Partie 5 — Tête et cou",
      chapitres: [
        {
          id: "crane-face",
          titre: "Crâne et face",
          duree: 50,
          objectifs: [
            "Citer les os du neurocrâne et du viscérocrâne et décrire les sutures et les fontanelles.",
            "Décrire la base du crâne (fosses crâniennes antérieure, moyenne, postérieure) et le contenu de ses foramens.",
            "Décrire l'orbite et les cavités nasales (parois, sinus, communications).",
            "Décrire la mandibule et l'articulation temporo-mandibulaire.",
            "Relier l'anatomie aux fractures du crâne et de la face et aux hématomes intracrâniens."
          ],
          sections: [
            {
              titre: "Vue d'ensemble : neurocrâne et viscérocrâne",
              contenu: `<p>Le <strong>crâne</strong> (tête osseuse) comprend <strong>22 os</strong> (sans les osselets de l'ouïe ni l'os hyoïde), tous soudés par des sutures sauf la mandibule :</p>
<ul>
<li>le <strong>neurocrâne</strong> (crâne proprement dit, 8 os) qui contient l'encéphale : <strong>4 os impairs</strong> (frontal, ethmoïde, sphénoïde, occipital) et <strong>2 os pairs</strong> (temporaux, pariétaux). On le divise en <strong>calvaria</strong> (voûte, ossification membraneuse) et <strong>base</strong> (ossification endochondrale) ;</li>
<li>le <strong>viscérocrâne</strong> (face, 14 os) : <strong>6 os pairs</strong> (maxillaires, zygomatiques, nasaux, lacrymaux, palatins, cornets nasaux inférieurs) et <strong>2 os impairs</strong> (vomer, <strong>mandibule</strong>).</li>
</ul>
<h4>La calvaria</h4>
<p>Formée du frontal, des deux pariétaux, de l'occipital (écaille) et des écailles des temporaux, réunis par des <strong>sutures</strong> : <strong>coronale</strong> (frontal–pariétaux), <strong>sagittale</strong> (entre les pariétaux), <strong>lambdoïde</strong> (pariétaux–occipital), <strong>squameuses</strong> (temporo-pariétales). Points de repère : le <strong>bregma</strong> (jonction coronale–sagittale), le <strong>lambda</strong> (sagittale–lambdoïde), le <strong>ptérion</strong> (région latérale où se rejoignent frontal, pariétal, temporal et grande aile du sphénoïde : os mince, en regard de l'<strong>artère méningée moyenne</strong>), l'<strong>astérion</strong>, le <strong>vertex</strong> (point le plus haut), la <strong>glabelle</strong>, l'<strong>inion</strong> (protubérance occipitale externe). La paroi comprend deux tables compactes (externe épaisse, interne mince et cassante) et le <strong>diploé</strong> (os spongieux, veines diploïques). Épaisseur 5 à 10 mm, plus mince aux temporaux.</p>
<h4>Les fontanelles</h4>
<p>Chez le nouveau-né, les os de la voûte sont séparés par des espaces membraneux qui permettent le modelage de la tête lors de l'accouchement et la croissance cérébrale (le périmètre crânien passe de 35 cm à la naissance à 47 cm à 1 an) : la <strong>fontanelle antérieure</strong> (bregmatique, losangique, 2–3 cm, se ferme entre 12 et 18 mois, jusqu'à 24 mois ; sa tension renseigne sur la pression intracrânienne et la déshydratation), la <strong>fontanelle postérieure</strong> (lambdatique, triangulaire, fermée à 2–3 mois), et les fontanelles latérales (sphénoïdale et mastoïdienne, fermées dans les premiers mois). La fermeture prématurée d'une suture (<strong>craniosténose</strong>) déforme le crâne (scaphocéphalie si sagittale).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les <strong>fractures de la voûte</strong> sont linéaires, embarrées (enfoncement) ou ouvertes ; une fracture temporo-pariétale au ptérion peut déchirer l'artère méningée moyenne et provoquer un <strong>hématome extra-dural</strong> (intervalle libre puis coma : urgence). La <strong>palpation de la fontanelle antérieure</strong> fait partie de l'examen du nourrisson (bombée : hypertension intracrânienne, méningite ; déprimée : déshydratation).</div>`
            },
            {
              titre: "Les os du neurocrâne",
              contenu: `<ul>
<li>L'<strong>os frontal</strong> : impair, forme le front (écaille, bosses frontales, glabelle, arcades sourcilières), le toit des orbites (parties orbitaires, séparées par l'incisure ethmoïdale) et contient les <strong>sinus frontaux</strong> (pneumatisés à partir de 6–7 ans). Foramen ou incisure supra-orbitaire (nerf supra-orbitaire, V1).</li>
<li>Les <strong>os pariétaux</strong> : pairs, quadrilatères, forment la plus grande partie de la voûte ; face interne creusée des sillons des artères méningées et du sinus sagittal supérieur (fossettes granulaires).</li>
<li>L'<strong>os occipital</strong> : impair, postéro-inférieur, percé du <strong>foramen magnum</strong> (35 × 30 mm : moelle allongée, artères vertébrales, racines du XI, méninges, veines) ; quatre parties : la <strong>partie basilaire</strong> (en avant, unie au sphénoïde par la synchondrose sphéno-occipitale → clivus), les <strong>parties latérales</strong> (portant les <strong>condyles occipitaux</strong> pour l'atlas et le <strong>canal du nerf hypoglosse</strong> XII), et l'<strong>écaille</strong> (protubérances occipitales externe et interne, lignes nuchales, confluent des sinus).</li>
<li>Les <strong>os temporaux</strong> : pairs, complexes, en trois parties : l'<strong>écaille</strong> (partie squameuse, voûte, <strong>processus zygomatique</strong>, <strong>fosse mandibulaire</strong> et tubercule articulaire pour l'ATM), la <strong>partie tympanique</strong> (méat acoustique externe) et la <strong>partie pétreuse</strong> (rocher : pyramide à la base du crâne contenant l'<strong>oreille interne</strong> et l'<strong>oreille moyenne</strong>, le canal du nerf facial, le <strong>canal carotidien</strong> ; <strong>processus mastoïde</strong> avec les cellules mastoïdiennes et le foramen stylo-mastoïdien (sortie du VII) ; <strong>processus styloïde</strong>).</li>
<li>L'<strong>os sphénoïde</strong> : impair, médian, « clé de voûte » de la base, en forme de chauve-souris : un <strong>corps</strong> (contenant le <strong>sinus sphénoïdal</strong>, portant la <strong>selle turcique</strong> avec la fosse hypophysaire, limitée par le tubercule de la selle en avant et le dos de la selle en arrière, et flanquée des sillons carotidiens), deux <strong>petites ailes</strong> (canal optique, processus clinoïdes antérieurs), deux <strong>grandes ailes</strong> (fosse crânienne moyenne, paroi latérale de l'orbite, fosse temporale ; foramens rond, ovale, épineux ; <strong>fissure orbitaire supérieure</strong> entre petite et grande aile) et deux <strong>processus ptérygoïdes</strong> (lames médiale et latérale, insertions des ptérygoïdiens, canal ptérygoïdien).</li>
<li>L'<strong>os ethmoïde</strong> : impair, médian, léger, entre les deux orbites : la <strong>lame criblée</strong> (plancher de la fosse antérieure, perforée par les filets du nerf olfactif, surmontée de la <strong>crista galli</strong> où s'insère la faux du cerveau), la <strong>lame perpendiculaire</strong> (partie supérieure du septum nasal) et les deux <strong>labyrinthes ethmoïdaux</strong> (cellules ethmoïdales, <strong>cornets nasaux supérieur et moyen</strong>, lame orbitaire très mince : paroi médiale de l'orbite).</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le cornet nasal <strong>inférieur</strong> est un os indépendant de la face, alors que les cornets supérieur et moyen appartiennent à l'<strong>ethmoïde</strong>. Le sphénoïde et l'ethmoïde sont des os du neurocrâne bien qu'ils participent largement à l'orbite et aux cavités nasales. Le foramen magnum appartient à l'occipital ; le canal carotidien et le méat acoustique au temporal ; le canal optique au sphénoïde (petite aile).</div>`
            },
            {
              titre: "La base du crâne et ses foramens",
              contenu: `<p>La face interne de la base (base endocrânienne) est étagée en trois <strong>fosses crâniennes</strong>, de plus en plus profondes d'avant en arrière.</p>
<h4>Fosse crânienne antérieure</h4>
<p>Formée par les parties orbitaires du frontal, la lame criblée de l'ethmoïde et les petites ailes du sphénoïde ; elle supporte les <strong>lobes frontaux</strong> et les bulbes olfactifs. Limite postérieure : bord postérieur des petites ailes et tubercule de la selle. Foramens : <strong>lame criblée</strong> (filets du <strong>nerf olfactif I</strong>, artère et nerf ethmoïdaux antérieurs).</p>
<h4>Fosse crânienne moyenne</h4>
<p>Formée par le corps et les grandes ailes du sphénoïde et la face antérieure des rochers ; en forme de papillon : la partie médiane (selle turcique, <strong>hypophyse</strong>) et deux parties latérales profondes (<strong>lobes temporaux</strong>). Limite postérieure : dos de la selle et bords supérieurs des rochers.</p>
<table>
<thead><tr><th>Orifice</th><th>Os</th><th>Contenu</th></tr></thead>
<tbody>
<tr><td><strong>Canal optique</strong></td><td>Petite aile du sphénoïde</td><td><strong>Nerf optique (II)</strong>, artère ophtalmique</td></tr>
<tr><td><strong>Fissure orbitaire supérieure</strong></td><td>Entre petite et grande aile</td><td>Nerfs <strong>oculomoteur (III)</strong>, <strong>trochléaire (IV)</strong>, <strong>ophtalmique (V1)</strong> (branches frontale, lacrymale, naso-ciliaire), <strong>abducens (VI)</strong>, veines ophtalmiques</td></tr>
<tr><td><strong>Foramen rond</strong></td><td>Grande aile</td><td><strong>Nerf maxillaire (V2)</strong> → fosse ptérygo-palatine</td></tr>
<tr><td><strong>Foramen ovale</strong></td><td>Grande aile</td><td><strong>Nerf mandibulaire (V3)</strong>, artère méningée accessoire → fosse infra-temporale</td></tr>
<tr><td><strong>Foramen épineux</strong></td><td>Grande aile</td><td><strong>Artère méningée moyenne</strong>, rameau méningé du V3</td></tr>
<tr><td><strong>Foramen déchiré</strong></td><td>Entre sphénoïde, rocher et occipital</td><td>Obturé par du fibrocartilage ; l'artère carotide interne passe au-dessus (sortie du canal carotidien) ; nerf du canal ptérygoïdien</td></tr>
<tr><td><strong>Canal carotidien</strong></td><td>Rocher</td><td><strong>Artère carotide interne</strong>, plexus sympathique carotidien</td></tr>
<tr><td>Hiatus du canal du nerf grand pétreux</td><td>Rocher</td><td>Nerf grand pétreux (VII)</td></tr>
</tbody>
</table>
<h4>Fosse crânienne postérieure</h4>
<p>La plus vaste et la plus profonde, formée par l'occipital, la face postérieure des rochers et le dos de la selle (clivus) ; elle contient le <strong>cervelet</strong>, le <strong>pont</strong> et la <strong>moelle allongée</strong>, et est fermée en haut par la tente du cervelet.</p>
<table>
<thead><tr><th>Orifice</th><th>Os</th><th>Contenu</th></tr></thead>
<tbody>
<tr><td><strong>Méat acoustique interne</strong></td><td>Face postérieure du rocher</td><td><strong>Nerf facial (VII)</strong>, nerf intermédiaire, <strong>nerf vestibulo-cochléaire (VIII)</strong>, artère labyrinthique</td></tr>
<tr><td><strong>Foramen jugulaire</strong></td><td>Entre rocher et occipital</td><td>Partie antérieure : <strong>nerfs glosso-pharyngien (IX)</strong>, <strong>vague (X)</strong>, <strong>accessoire (XI)</strong>, sinus pétreux inférieur ; partie postérieure : <strong>sinus sigmoïde → veine jugulaire interne</strong></td></tr>
<tr><td><strong>Canal du nerf hypoglosse</strong></td><td>Occipital (au-dessus du condyle)</td><td><strong>Nerf hypoglosse (XII)</strong></td></tr>
<tr><td><strong>Foramen magnum</strong></td><td>Occipital</td><td><strong>Moelle allongée</strong> (jonction avec la moelle spinale), <strong>artères vertébrales</strong>, artères spinales, racines spinales du XI, méninges</td></tr>
<tr><td>Canal condylaire, foramen mastoïdien</td><td>Occipital, temporal</td><td>Veines émissaires</td></tr>
</tbody>
</table>
<h4>La base exocrânienne</h4>
<p>De l'avant vers l'arrière : le <strong>palais osseux</strong> (processus palatins des maxillaires et lames horizontales des palatins ; foramens incisif et grands palatins), les <strong>choanes</strong> (orifices postérieurs des cavités nasales), les processus ptérygoïdes, la face inférieure du corps du sphénoïde et de la partie basilaire de l'occipital (insertion du pharynx), les rochers (canal carotidien, foramen jugulaire, processus styloïde, foramen stylo-mastoïdien), les condyles occipitaux et le foramen magnum, la fosse mandibulaire et le processus mastoïde.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les <strong>fractures de la base du crâne</strong> se traduisent par des signes indirects : <strong>rhinorrhée</strong> de liquide cérébro-spinal et anosmie (étage antérieur, lame criblée), hématome péri-orbitaire en lunettes, <strong>otorrhée</strong>, hémotympan, ecchymose mastoïdienne (signe de Battle) et paralysie faciale (rocher), atteinte des nerfs crâniens. Un traumatisme de la fissure orbitaire supérieure paralyse les nerfs III, IV, VI et V1. Les méningiomes et les tumeurs de la base compriment les nerfs à leur passage dans les foramens.</div>`
            },
            {
              titre: "L'orbite",
              contenu: `<p>L'<strong>orbite</strong> est une cavité pyramidale quadrangulaire à base antérieure (ouverture orbitaire, 40 × 35 mm) et à sommet postérieur (canal optique), profonde de 4–5 cm (volume 30 mL), dont l'axe est oblique en arrière et médialement (les axes des deux orbites forment un angle de 45°). Elle contient le globe oculaire (7 mL), les muscles oculomoteurs, le nerf optique, les vaisseaux et nerfs, la glande lacrymale et le corps adipeux. <strong>Sept os</strong> la constituent :</p>
<table>
<thead><tr><th>Paroi</th><th>Os</th><th>Rapports / remarques</th></tr></thead>
<tbody>
<tr><td><strong>Toit</strong></td><td>Partie orbitaire du frontal, petite aile du sphénoïde</td><td>Fosse crânienne antérieure et lobe frontal ; sinus frontal ; fosse de la glande lacrymale (latérale), fossette trochléaire (médiale)</td></tr>
<tr><td><strong>Plancher</strong></td><td>Face orbitaire du maxillaire, zygomatique, processus orbitaire du palatin</td><td><strong>Sinus maxillaire</strong> ; sillon et canal infra-orbitaires (nerf V2) ; mince : fractures en « trappe » (blow-out) avec incarcération du droit inférieur</td></tr>
<tr><td><strong>Paroi médiale</strong></td><td>Processus frontal du maxillaire, os lacrymal, <strong>lame orbitaire de l'ethmoïde</strong>, corps du sphénoïde</td><td>La plus mince (lame papyracée) : cellules ethmoïdales (diffusion des ethmoïdites) ; fosse du sac lacrymal et canal naso-lacrymal ; foramens ethmoïdaux</td></tr>
<tr><td><strong>Paroi latérale</strong></td><td>Zygomatique, grande aile du sphénoïde</td><td>La plus épaisse ; fosse temporale ; sépare l'orbite du lobe temporal en arrière</td></tr>
</tbody>
</table>
<h4>Orifices</h4>
<ul>
<li>Le <strong>canal optique</strong> (sommet) : nerf optique et artère ophtalmique.</li>
<li>La <strong>fissure orbitaire supérieure</strong> (entre toit et paroi latérale) : nerfs III, IV, VI, V1, veines ophtalmiques (vers le sinus caverneux).</li>
<li>La <strong>fissure orbitaire inférieure</strong> (entre plancher et paroi latérale) : nerf infra-orbitaire et zygomatique (V2), vaisseaux infra-orbitaires, communication avec les fosses infra-temporale et ptérygo-palatine.</li>
<li>Le <strong>canal naso-lacrymal</strong> (vers le méat nasal inférieur), les foramens ethmoïdaux antérieur et postérieur, le foramen supra-orbitaire, le foramen infra-orbitaire (sous le rebord, nerf V2).</li>
</ul>
<p>L'<strong>anneau tendineux commun</strong> (de Zinn), au sommet, donne origine aux quatre muscles droits ; les nerfs II, III, VI et la branche naso-ciliaire du V1 passent dans l'anneau (cône musculaire), les nerfs IV, frontal et lacrymal au-dessus.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>fracture du plancher</strong> (coup de poing, balle de tennis) incarcère le muscle droit inférieur (diplopie verticale, énophtalmie, hypoesthésie infra-orbitaire). La <strong>cellulite orbitaire</strong> complique une ethmoïdite par la lame papyracée, et peut gagner le <strong>sinus caverneux</strong> par les veines ophtalmiques (thrombophlébite). L'<strong>exophtalmie</strong> traduit une augmentation du contenu orbitaire (Basedow, tumeur, hématome rétro-bulbaire : urgence de décompression).</div>`
            },
            {
              titre: "Les cavités nasales et les sinus paranasaux",
              contenu: `<p>Les <strong>cavités nasales</strong> (fosses nasales) sont deux couloirs séparés par le <strong>septum nasal</strong> (lame perpendiculaire de l'ethmoïde en haut, <strong>vomer</strong> en bas et en arrière, cartilage septal en avant), ouverts en avant par les <strong>narines</strong> (vestibule, poils) et en arrière par les <strong>choanes</strong> vers le <strong>nasopharynx</strong>. Hauteur 5 cm, longueur 7 cm, largeur 1–2 cm.</p>
<ul>
<li><strong>Toit</strong> : os nasaux, frontal, <strong>lame criblée</strong> (muqueuse olfactive, nerf I), corps du sphénoïde.</li>
<li><strong>Plancher</strong> : palais osseux (maxillaire, palatin) séparant le nez de la cavité buccale.</li>
<li><strong>Paroi médiale</strong> : septum (déviations fréquentes ; tache vasculaire de Kiesselbach en avant : épistaxis).</li>
<li><strong>Paroi latérale</strong> : la plus complexe, porte trois <strong>cornets</strong> (lames osseuses recourbées recouvertes d'une muqueuse très vascularisée) délimitant trois <strong>méats</strong> : le <strong>cornet supérieur</strong> et le <strong>cornet moyen</strong> (ethmoïde), le <strong>cornet inférieur</strong> (os indépendant). Au-dessus du cornet supérieur, le <strong>récessus sphéno-ethmoïdal</strong> reçoit le sinus sphénoïdal ; le <strong>méat supérieur</strong> reçoit les cellules ethmoïdales postérieures ; le <strong>méat moyen</strong> (avec le hiatus semi-lunaire, la bulle ethmoïdale et l'infundibulum) reçoit le <strong>sinus frontal</strong>, les <strong>cellules ethmoïdales antérieures</strong> et le <strong>sinus maxillaire</strong> ; le <strong>méat inférieur</strong> reçoit le <strong>conduit naso-lacrymal</strong>.</li>
</ul>
<h4>Les sinus paranasaux</h4>
<table>
<thead><tr><th>Sinus</th><th>Développement</th><th>Drainage</th><th>Rapports</th></tr></thead>
<tbody>
<tr><td><strong>Maxillaire</strong> (le plus grand, 15 mL)</td><td>Présent à la naissance, croît avec les dents</td><td>Méat moyen (ostium haut situé : mauvais drainage)</td><td>Orbite (toit), racines des molaires et prémolaires (plancher : sinusites dentaires), fosse ptérygo-palatine</td></tr>
<tr><td><strong>Frontal</strong></td><td>6–7 ans</td><td>Méat moyen (conduit fronto-nasal)</td><td>Fosse antérieure, orbite</td></tr>
<tr><td><strong>Ethmoïdal</strong> (cellules, 3–18)</td><td>Présent à la naissance (sinusite du nourrisson)</td><td>Antérieures : méat moyen ; postérieures : méat supérieur</td><td>Orbite (lame papyracée), lame criblée</td></tr>
<tr><td><strong>Sphénoïdal</strong></td><td>3–5 ans</td><td>Récessus sphéno-ethmoïdal</td><td>Hypophyse (voie trans-sphénoïdale), sinus caverneux, carotide interne, nerf optique</td></tr>
</tbody>
</table>
<p><strong>Vascularisation</strong> des cavités nasales : artères sphéno-palatine (de la maxillaire, principale), ethmoïdales antérieure et postérieure (de l'ophtalmique), faciale et labiale supérieure ; elles s'anastomosent sur la partie antérieure du septum (zone de Kiesselbach). <strong>Innervation</strong> : olfactive (I) pour le toit ; sensitive par le V1 (ethmoïdal antérieur, partie antérieure) et le V2 (nerfs nasaux via le ganglion ptérygo-palatin, partie postérieure) ; végétative par le ganglion ptérygo-palatin (sécrétion, vasomotricité).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le méat moyen draine le sinus frontal, les cellules ethmoïdales antérieures et le sinus maxillaire (« carrefour » des sinusites) ; le méat inférieur ne reçoit que le conduit naso-lacrymal ; le sinus sphénoïdal se draine dans le récessus sphéno-ethmoïdal. L'épistaxis siège le plus souvent à la tache vasculaire antérieure du septum.</div>`
            },
            {
              titre: "La mandibule et l'articulation temporo-mandibulaire",
              contenu: `<h4>Les maxillaires et les os de la face</h4>
<p>Les deux <strong>maxillaires</strong> forment la mâchoire supérieure : corps (contenant le sinus), processus frontal, zygomatique, palatin et <strong>processus alvéolaire</strong> (16 dents supérieures). Les <strong>os zygomatiques</strong> (pommettes) forment l'arcade zygomatique avec le temporal. Les <strong>os palatins</strong> complètent le palais et la paroi des cavités nasales. Les fractures de la face sont classées selon <strong>Le Fort</strong> : I (horizontale au-dessus des dents, palais mobile), II (pyramidale, par les orbites et le nez), III (disjonction cranio-faciale, par les orbites et les arcades zygomatiques).</p>
<h4>La mandibule</h4>
<p>Seul os mobile du crâne, impair, en fer à cheval, le plus solide de la face. Elle comprend un <strong>corps</strong> horizontal (face externe : symphyse mentonnière, protubérance mentale, <strong>foramen mentonnier</strong> sous la 2<sup>e</sup> prémolaire — sortie du nerf mentonnier, V3 — , ligne oblique ; face interne : épines mentales, ligne mylo-hyoïdienne séparant les fossettes sublinguale et submandibulaire ; <strong>bord alvéolaire</strong> portant 16 dents) et deux <strong>branches</strong> (rami) verticales, unies au corps par l'<strong>angle</strong> (gonion, 120–130°). Chaque branche porte en haut deux processus séparés par l'incisure mandibulaire : le <strong>processus coronoïde</strong> en avant (insertion du temporal) et le <strong>processus condylaire</strong> en arrière (<strong>tête</strong> ou condyle, articulaire, et <strong>col</strong>, insertion du ptérygoïdien latéral, siège des fractures). Face interne de la branche : <strong>foramen mandibulaire</strong> (entrée du nerf et des vaisseaux alvéolaires inférieurs dans le <strong>canal mandibulaire</strong>, qui parcourt le corps et se termine au foramen mentonnier), protégé par la lingula (épine de Spix : repère de l'anesthésie tronculaire) ; face externe : insertion du masséter ; face interne basse : ptérygoïdien médial.</p>
<h4>L'articulation temporo-mandibulaire (ATM)</h4>
<p>Articulation synoviale <strong>bicondylaire</strong> (les deux ATM fonctionnent toujours ensemble) entre la <strong>tête de la mandibule</strong> (condyle, ovoïde à grand axe transversal) et la <strong>fosse mandibulaire</strong> et le <strong>tubercule articulaire</strong> du temporal, avec un <strong>disque articulaire</strong> fibro-cartilagineux biconcave interposé, divisant la cavité en deux compartiments : <strong>disco-temporal</strong> (supérieur, glissement) et <strong>disco-mandibulaire</strong> (inférieur, rotation). Le cartilage articulaire est <strong>fibreux</strong> (non hyalin). Moyens d'union : capsule lâche (insérée sur le disque), <strong>ligament latéral</strong> (temporo-mandibulaire, principal), ligaments accessoires sphéno-mandibulaire et stylo-mandibulaire. Le disque est tiré en avant par le ptérygoïdien latéral.</p>
<p><strong>Mouvements</strong> : <strong>abaissement</strong> (ouverture, 40–50 mm : rotation dans le compartiment inférieur puis translation antérieure du condyle et du disque sur le tubercule articulaire ; muscles supra-hyoïdiens, ptérygoïdien latéral, gravité) et <strong>élévation</strong> (fermeture : temporal, masséter, ptérygoïdien médial) ; <strong>propulsion</strong> (ptérygoïdiens latéraux) et <strong>rétropulsion</strong> (fibres postérieures du temporal) ; <strong>diduction</strong> (latéralité : ptérygoïdiens d'un côté, mouvement de mastication). Innervation : nerf auriculo-temporal et nerf massétérique (V3) ; vascularisation : artères temporale superficielle et maxillaire.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>luxation de l'ATM</strong> est antérieure (bâillement, le condyle franchit le tubercule articulaire et se bloque en avant : bouche ouverte irréductible), réduite par la manœuvre de Nélaton. Les <strong>dysfonctions</strong> (SADAM : douleur, craquements, limitation) sont liées au disque et aux muscles. Les <strong>fractures de la mandibule</strong> sont souvent doubles (angle et col condylien opposé, région parasymphysaire) ; une fracture du col condylien chez l'enfant peut bloquer la croissance. L'<strong>anesthésie du nerf alvéolaire inférieur</strong> à l'épine de Spix insensibilise l'hémi-mandibule et la lèvre inférieure.</div>`
            }
          ],
          points_cles: [
            "22 os : neurocrâne de 8 os (frontal, ethmoïde, sphénoïde, occipital impairs ; temporaux et pariétaux pairs) ; viscérocrâne de 14 os (maxillaires, zygomatiques, nasaux, lacrymaux, palatins, cornets inférieurs pairs ; vomer et mandibule impairs).",
            "Sutures coronale, sagittale, lambdoïde, squameuses ; bregma, lambda, ptérion (artère méningée moyenne : hématome extra-dural) ; fontanelle antérieure fermée à 12–18 mois, postérieure à 2–3 mois.",
            "Fosse antérieure : lame criblée (I) ; fosse moyenne : canal optique (II, ophtalmique), fissure orbitaire supérieure (III, IV, V1, VI), foramen rond (V2), ovale (V3), épineux (méningée moyenne), canal carotidien.",
            "Fosse postérieure : méat acoustique interne (VII, VIII), foramen jugulaire (IX, X, XI, veine jugulaire interne), canal de l'hypoglosse (XII), foramen magnum (moelle allongée, artères vertébrales).",
            "Le sphénoïde (selle turcique, hypophyse, sinus sphénoïdal, ailes, ptérygoïdes) est la clé de voûte de la base ; l'ethmoïde donne la lame criblée, le septum supérieur et les cornets supérieur et moyen ; le cornet inférieur est un os propre.",
            "Orbite : sept os, toit frontal (sinus frontal), plancher maxillaire (sinus maxillaire, fractures blow-out), paroi médiale ethmoïdale papyracée (ethmoïdites), paroi latérale zygomato-sphénoïdale épaisse ; canal optique et fissures orbitaires.",
            "Cavités nasales : septum (lame perpendiculaire, vomer, cartilage), trois cornets, méat moyen drainant frontal, ethmoïde antérieur et maxillaire ; méat inférieur = conduit naso-lacrymal ; épistaxis de la tache de Kiesselbach.",
            "Mandibule : corps (foramen mentonnier, canal mandibulaire), branches (processus coronoïde = temporal, condyle, angle = masséter et ptérygoïdien médial), foramen mandibulaire (nerf alvéolaire inférieur, épine de Spix).",
            "ATM : bicondylaire à disque fibro-cartilagineux, cartilage fibreux, deux compartiments (rotation en bas, translation en haut) ; ouverture = ptérygoïdien latéral et supra-hyoïdiens ; fermeture = temporal, masséter, ptérygoïdien médial ; luxation antérieure.",
            "Fractures de la base : rhinorrhée, otorrhée, anosmie, paralysie faciale, signe de Battle ; fractures de la face classées selon Le Fort I, II, III."
          ],
          lexique: [
            { terme: "Calvaria", def: "Voûte du crâne, d'ossification membraneuse, formée du frontal, des pariétaux, de l'écaille de l'occipital et des écailles temporales." },
            { terme: "Ptérion", def: "Région latérale du crâne où se rejoignent frontal, pariétal, temporal et grande aile du sphénoïde, en regard de l'artère méningée moyenne." },
            { terme: "Fontanelle antérieure", def: "Espace membraneux losangique du bregma chez le nourrisson, fermé entre 12 et 18 mois." },
            { terme: "Selle turcique", def: "Dépression de la face supérieure du corps du sphénoïde contenant l'hypophyse (fosse hypophysaire)." },
            { terme: "Lame criblée", def: "Lame horizontale de l'ethmoïde, plancher de la fosse crânienne antérieure, perforée par les filets du nerf olfactif." },
            { terme: "Foramen jugulaire", def: "Orifice entre rocher et occipital traversé par les nerfs IX, X, XI et le sinus sigmoïde qui devient veine jugulaire interne." },
            { terme: "Anneau tendineux commun", def: "Anneau de Zinn au sommet de l'orbite, origine des quatre muscles droits, traversé par les nerfs II, III, VI et naso-ciliaire." },
            { terme: "Méat nasal moyen", def: "Espace sous le cornet moyen recevant le drainage du sinus frontal, des cellules ethmoïdales antérieures et du sinus maxillaire." },
            { terme: "Foramen mandibulaire", def: "Orifice de la face interne de la branche mandibulaire par lequel le nerf alvéolaire inférieur entre dans le canal mandibulaire." },
            { terme: "Disque de l'ATM", def: "Fibrocartilage biconcave interposé entre la tête de la mandibule et le temporal, divisant l'articulation en deux compartiments." }
          ],
          qcm: [
            {
              q: "Concernant les os du crâne, quelles propositions sont exactes ?",
              options: [
                "A. Le neurocrâne comprend huit os.",
                "B. L'ethmoïde est un os de la face.",
                "C. Le cornet nasal inférieur est un os indépendant.",
                "D. La mandibule est le seul os mobile du crâne.",
                "E. La fontanelle antérieure se ferme vers l'âge de 2 à 3 mois."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : l'ethmoïde appartient au neurocrâne. E est fausse : la fontanelle antérieure se ferme entre 12 et 18 mois ; c'est la postérieure qui se ferme à 2–3 mois."
            },
            {
              q: "Concernant les foramens de la base du crâne, quelles associations sont exactes ?",
              options: [
                "A. Canal optique : nerf optique et artère ophtalmique.",
                "B. Foramen ovale : nerf maxillaire (V2).",
                "C. Foramen épineux : artère méningée moyenne.",
                "D. Foramen jugulaire : nerfs IX, X et XI.",
                "E. Méat acoustique interne : nerfs VII et VIII."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le foramen ovale laisse passer le nerf mandibulaire (V3) ; le V2 passe par le foramen rond."
            },
            {
              q: "Concernant la fissure orbitaire supérieure et le foramen magnum, quelles propositions sont exactes ?",
              options: [
                "A. La fissure orbitaire supérieure est située entre la petite et la grande aile du sphénoïde.",
                "B. Elle laisse passer les nerfs III, IV, VI et V1.",
                "C. Le nerf optique traverse la fissure orbitaire supérieure.",
                "D. Le foramen magnum appartient à l'os occipital.",
                "E. Les artères vertébrales traversent le foramen magnum."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le nerf optique passe par le canal optique, dans la petite aile du sphénoïde."
            },
            {
              q: "Concernant l'orbite, quelles propositions sont exactes ?",
              options: [
                "A. Le plancher de l'orbite est en rapport avec le sinus maxillaire.",
                "B. La paroi médiale est la plus épaisse.",
                "C. La lame orbitaire de l'ethmoïde participe à la paroi médiale.",
                "D. La fracture du plancher peut incarcérer le muscle droit inférieur.",
                "E. Les veines ophtalmiques se drainent dans le sinus caverneux."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la paroi médiale (lame papyracée de l'ethmoïde) est la plus mince ; la paroi latérale est la plus épaisse."
            },
            {
              q: "Concernant les cavités nasales et les sinus, quelles propositions sont exactes ?",
              options: [
                "A. Le septum nasal est formé par la lame perpendiculaire de l'ethmoïde, le vomer et le cartilage septal.",
                "B. Le sinus maxillaire se draine dans le méat inférieur.",
                "C. Le conduit naso-lacrymal s'ouvre dans le méat inférieur.",
                "D. Le sinus sphénoïdal se draine dans le récessus sphéno-ethmoïdal.",
                "E. Le sinus frontal est présent dès la naissance."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : le sinus maxillaire se draine dans le méat moyen. E est fausse : le sinus frontal se développe vers 6–7 ans ; les sinus maxillaire et ethmoïdal sont présents à la naissance."
            },
            {
              q: "Concernant la mandibule et l'articulation temporo-mandibulaire, quelles propositions sont exactes ?",
              options: [
                "A. Le processus coronoïde donne insertion au muscle temporal.",
                "B. Le nerf alvéolaire inférieur pénètre dans la mandibule par le foramen mentonnier.",
                "C. L'ATM possède un disque articulaire fibro-cartilagineux.",
                "D. Le cartilage de l'ATM est de type hyalin.",
                "E. La luxation de l'ATM est le plus souvent antérieure."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : le nerf alvéolaire inférieur entre par le foramen mandibulaire (face interne de la branche) et sort par le foramen mentonnier. D est fausse : le cartilage de l'ATM est fibreux."
            },
            {
              q: "Concernant la pathologie cranio-faciale, quelles propositions sont exactes ?",
              options: [
                "A. Une fracture au niveau du ptérion expose à un hématome extra-dural par lésion de l'artère méningée moyenne.",
                "B. La rhinorrhée de liquide cérébro-spinal après traumatisme évoque une fracture de la lame criblée.",
                "C. Une fracture du rocher peut entraîner une paralysie faciale.",
                "D. La fracture de Le Fort III correspond à une fracture horizontale au-dessus des dents.",
                "E. Le bombement de la fontanelle antérieure évoque une hypertension intracrânienne."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : Le Fort III est une disjonction cranio-faciale haute ; la fracture horizontale au-dessus des dents est Le Fort I."
            }
          ]
        },
        {
          id: "muscles-tete-nerfs-craniens",
          titre: "Muscles de la tête et nerfs crâniens",
          duree: 55,
          objectifs: [
            "Décrire les quatre muscles masticateurs (insertions, actions, innervation) et les principaux muscles de la mimique.",
            "Classer les douze paires de nerfs crâniens selon leur nature (sensoriels, moteurs, mixtes) et leurs composantes.",
            "Décrire pour chaque nerf crânien l'origine, la sortie du crâne, le trajet, les territoires et l'exploration clinique.",
            "Détailler le nerf trijumeau (V) et le nerf facial (VII) et leurs atteintes.",
            "Reconnaître les syndromes d'atteinte des nerfs crâniens (paralysie faciale, paralysies oculomotrices, atteinte des nerfs mixtes)."
          ],
          sections: [
            {
              titre: "Les muscles masticateurs",
              contenu: `<p>Les <strong>quatre muscles masticateurs</strong> mobilisent la mandibule ; ils dérivent du 1<sup>er</sup> arc pharyngien et sont tous innervés par le <strong>nerf mandibulaire (V3)</strong>, branche motrice du trijumeau.</p>
<table>
<thead><tr><th>Muscle</th><th>Origine</th><th>Terminaison</th><th>Action</th></tr></thead>
<tbody>
<tr><td><strong>Temporal</strong></td><td>Fosse temporale (ligne temporale inférieure) et fascia temporal, en éventail</td><td>Processus coronoïde et bord antérieur de la branche mandibulaire, par un tendon passant en dedans de l'arcade zygomatique</td><td><strong>Élévateur</strong> puissant (fibres antérieures verticales) et <strong>rétropulseur</strong> (fibres postérieures horizontales) ; muscle de la position de repos</td></tr>
<tr><td><strong>Masséter</strong></td><td>Arcade zygomatique (deux tiers antérieurs du bord inférieur pour le faisceau superficiel, face profonde pour le faisceau profond)</td><td>Face latérale de la branche et de l'angle de la mandibule</td><td><strong>Élévateur</strong> le plus puissant (le muscle le plus fort du corps par unité de surface), légère propulsion ; palpable lors du serrage des dents</td></tr>
<tr><td><strong>Ptérygoïdien médial</strong></td><td>Face médiale de la lame latérale du processus ptérygoïde (fosse ptérygoïde), tubérosité maxillaire</td><td>Face médiale de l'angle de la mandibule (symétrique du masséter : « sangle ptérygo-massétérine »)</td><td><strong>Élévateur</strong>, propulseur, <strong>diduction</strong> controlatérale</td></tr>
<tr><td><strong>Ptérygoïdien latéral</strong></td><td>Chef supérieur : face infra-temporale de la grande aile du sphénoïde ; chef inférieur : face latérale de la lame latérale du processus ptérygoïde</td><td>Col du condyle mandibulaire (fossette ptérygoïdienne) et disque de l'ATM (chef supérieur)</td><td><strong>Propulseur</strong> et <strong>abaisseur</strong> (initie l'ouverture en tirant le condyle et le disque en avant), <strong>diduction</strong> controlatérale ; contraction alternée : mastication</td></tr>
</tbody>
</table>
<p>L'<strong>abaissement</strong> de la mandibule est surtout assuré par la gravité et les muscles <strong>supra-hyoïdiens</strong> (digastrique, mylo-hyoïdien, génio-hyoïdien ; os hyoïde fixé par les infra-hyoïdiens), aidés du ptérygoïdien latéral. La force de morsure atteint 70 à 100 kg sur les molaires. La <strong>fosse infra-temporale</strong>, sous la grande aile du sphénoïde, en dedans de la branche mandibulaire, contient les ptérygoïdiens, l'<strong>artère maxillaire</strong> et ses branches, le <strong>plexus veineux ptérygoïdien</strong>, le <strong>nerf mandibulaire</strong> et ses branches (alvéolaire inférieur, lingual, auriculo-temporal, buccal) et la corde du tympan.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>trismus</strong> est une contracture des masticateurs (tétanos, infection dentaire, péricoronarite de la dent de sagesse, tumeur). La paralysie unilatérale du V3 dévie la mandibule du côté paralysé à l'ouverture (ptérygoïdien latéral controlatéral) et atrophie le temporal et le masséter. Le réflexe massétérin (V–V) est pontique. Le bruxisme (grincement nocturne) hypertrophie les masséters.</div>`
            },
            {
              titre: "Les muscles de la mimique",
              contenu: `<p>Les <strong>muscles peauciers de la face</strong> (muscles de l'expression) dérivent du 2<sup>e</sup> arc pharyngien et sont tous innervés par le <strong>nerf facial (VII)</strong>. Ils sont sous-cutanés, sans fascia, s'insèrent sur l'os et sur la peau (ou sur la peau seulement) et se groupent autour des orifices (orbite, nez, bouche, oreille) qu'ils dilatent ou ferment. Une vingtaine de muscles de chaque côté ; les principaux :</p>
<table>
<thead><tr><th>Région</th><th>Muscle</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Crâne</td><td><strong>Occipito-frontal</strong> (épicrânien : ventre frontal et ventre occipital unis par la galéa aponévrotique)</td><td>Élève les sourcils, plisse le front (surprise) ; recule le cuir chevelu</td></tr>
<tr><td>Orbite</td><td><strong>Orbiculaire de l'œil</strong> (partie orbitaire, palpébrale, lacrymale)</td><td>Ferme les paupières (clignement, occlusion forcée), pompe lacrymale ; <strong>corrugateur du sourcil</strong> (froncement), <strong>abaisseur du sourcil</strong>, procérus</td></tr>
<tr><td>Nez</td><td>Nasal (partie transverse et alaire), abaisseur du septum</td><td>Dilate ou comprime les narines</td></tr>
<tr><td>Bouche</td><td><strong>Orbiculaire de la bouche</strong></td><td>Ferme et avance les lèvres (sifflement, succion, baiser)</td></tr>
<tr><td>Bouche</td><td><strong>Buccinateur</strong> (profond, de la ligne mylo-hyoïdienne et du raphé ptérygo-mandibulaire à la commissure ; traversé par le conduit parotidien)</td><td>Plaque les joues contre les dents (mastication), souffle (trompettiste) ; empêche l'accumulation des aliments dans le vestibule</td></tr>
<tr><td>Bouche</td><td><strong>Grand et petit zygomatiques</strong>, <strong>élévateur de la lèvre supérieure</strong>, <strong>élévateur de l'angle de la bouche</strong>, <strong>risorius</strong></td><td>Élèvent la lèvre et tirent la commissure en haut et en dehors (sourire, rire)</td></tr>
<tr><td>Bouche</td><td><strong>Abaisseur de l'angle de la bouche</strong>, <strong>abaisseur de la lèvre inférieure</strong>, <strong>mentonnier</strong></td><td>Tristesse, moue ; le mentonnier relève le menton</td></tr>
<tr><td>Cou</td><td><strong>Platysma</strong> (peaucier du cou)</td><td>Tend la peau du cou, abaisse la commissure et la mandibule</td></tr>
<tr><td>Oreille</td><td>Auriculaires antérieur, supérieur, postérieur</td><td>Vestigiaux</td></tr>
</tbody>
</table>
<p>Les muscles de la mimique assurent l'<strong>expression des émotions</strong>, la <strong>fermeture des orifices</strong> (protection de l'œil, continence labiale), l'<strong>articulation</strong> des phonèmes labiaux et participent à la mastication (buccinateur). Vascularisation par l'<strong>artère faciale</strong> (branche de la carotide externe, sinueuse, croisant la mandibule en avant du masséter : pouls facial), temporale superficielle et ophtalmique.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>paralysie faciale périphérique</strong> (lésion du VII) touche toute l'hémiface : effacement des rides du front, impossibilité de fermer l'œil (<strong>signe de Charles Bell</strong> : le globe se révulse), chute de la commissure, effacement du sillon naso-génien, joue flasque (aliments dans le vestibule), signe des cils de Souques. La <strong>paralysie faciale centrale</strong> (lésion cortico-nucléaire) épargne le front (le noyau du facial supérieur reçoit une commande bilatérale) et prédomine sur l'hémiface inférieure ; elle respecte souvent la mimique émotionnelle (dissociation automatico-volontaire).</div>`
            },
            {
              titre: "Les nerfs crâniens : vue d'ensemble",
              contenu: `<p>Les <strong>douze paires de nerfs crâniens</strong> naissent de l'encéphale (sauf le I et le II qui sont des expansions du cerveau et le XI qui a une racine spinale) et sortent par les foramens de la base. Numérotées de I à XII selon leur ordre d'émergence de haut en bas (rostro-caudal). Les nerfs III à XII ont leurs <strong>noyaux dans le tronc cérébral</strong> : III et IV dans le mésencéphale ; V, VI, VII, VIII dans le pont ; IX, X, XI, XII dans la moelle allongée.</p>
<table>
<thead><tr><th>N°</th><th>Nerf</th><th>Nature</th><th>Sortie du crâne</th><th>Fonctions principales</th><th>Exploration</th></tr></thead>
<tbody>
<tr><td>I</td><td><strong>Olfactif</strong></td><td>Sensoriel</td><td>Lame criblée</td><td>Olfaction</td><td>Reconnaissance d'odeurs (café, menthe), chaque narine</td></tr>
<tr><td>II</td><td><strong>Optique</strong></td><td>Sensoriel</td><td>Canal optique</td><td>Vision</td><td>Acuité, champ visuel, fond d'œil, réflexe photomoteur (afférence)</td></tr>
<tr><td>III</td><td><strong>Oculomoteur</strong></td><td>Moteur + parasympathique</td><td>Fissure orbitaire supérieure</td><td>Droits supérieur, inférieur, médial, oblique inférieur, élévateur de la paupière ; myosis, accommodation</td><td>Motilité oculaire, ptosis, réflexe photomoteur (efférence)</td></tr>
<tr><td>IV</td><td><strong>Trochléaire</strong></td><td>Moteur</td><td>Fissure orbitaire supérieure</td><td>Oblique supérieur (regard en bas et en dedans)</td><td>Diplopie verticale en descendant les escaliers</td></tr>
<tr><td>V</td><td><strong>Trijumeau</strong></td><td>Mixte</td><td>V1 fissure orbitaire supérieure, V2 foramen rond, V3 foramen ovale</td><td>Sensibilité de la face, masticateurs</td><td>Sensibilité des trois territoires, réflexe cornéen, force massétérine</td></tr>
<tr><td>VI</td><td><strong>Abducens</strong></td><td>Moteur</td><td>Fissure orbitaire supérieure</td><td>Droit latéral (abduction)</td><td>Diplopie horizontale, strabisme convergent</td></tr>
<tr><td>VII</td><td><strong>Facial</strong></td><td>Mixte + parasympathique</td><td>Méat acoustique interne → foramen stylo-mastoïdien</td><td>Muscles de la mimique, goût des deux tiers antérieurs de la langue, glandes lacrymale, submandibulaire, sublinguale</td><td>Mimique (front, yeux, bouche), goût, Schirmer</td></tr>
<tr><td>VIII</td><td><strong>Vestibulo-cochléaire</strong></td><td>Sensoriel</td><td>Méat acoustique interne</td><td>Audition, équilibre</td><td>Acoumétrie (Weber, Rinne), audiogramme, nystagmus, Romberg</td></tr>
<tr><td>IX</td><td><strong>Glosso-pharyngien</strong></td><td>Mixte + parasympathique</td><td>Foramen jugulaire</td><td>Sensibilité du pharynx et du tiers postérieur de la langue (goût), stylo-pharyngien, parotide, sinus carotidien</td><td>Réflexe nauséeux (afférence), goût postérieur</td></tr>
<tr><td>X</td><td><strong>Vague</strong></td><td>Mixte + parasympathique</td><td>Foramen jugulaire</td><td>Muscles du pharynx, du larynx (voix), du voile ; viscères thoraco-abdominaux</td><td>Voile (signe du rideau), voix, déglutition, réflexe nauséeux (efférence)</td></tr>
<tr><td>XI</td><td><strong>Accessoire</strong></td><td>Moteur</td><td>Foramen jugulaire</td><td>Sterno-cléido-mastoïdien, trapèze</td><td>Rotation de la tête, élévation de l'épaule contre résistance</td></tr>
<tr><td>XII</td><td><strong>Hypoglosse</strong></td><td>Moteur</td><td>Canal de l'hypoglosse</td><td>Muscles de la langue</td><td>Protraction de la langue (déviation vers le côté paralysé), amyotrophie, fasciculations</td></tr>
</tbody>
</table>
<p>Mnémotechnique de la nature : « <em>Some Say Marry Money But My Brother Says Big Brains Matter More</em> » (S = sensoriel, M = moteur, B = both/mixte). Les nerfs à composante <strong>parasympathique</strong> sont le <strong>III</strong> (ganglion ciliaire), le <strong>VII</strong> (ganglions ptérygo-palatin et submandibulaire), le <strong>IX</strong> (ganglion otique) et le <strong>X</strong> (ganglions viscéraux) : « 3, 7, 9, 10 ».</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> les quatre nerfs du foramen jugulaire et du canal de l'hypoglosse (IX, X, XI, XII) sont les « nerfs mixtes » du bulbe ; les trois nerfs oculomoteurs (III, IV, VI) passent tous par la fissure orbitaire supérieure et traversent le sinus caverneux ; le V est le plus volumineux ; le IV est le plus grêle et le seul à émerger de la face dorsale du tronc cérébral et à croiser la ligne médiane.</div>`
            },
            {
              titre: "Les nerfs sensoriels (I, II, VIII) et les nerfs oculomoteurs (III, IV, VI)",
              contenu: `<h4>Nerf olfactif (I)</h4>
<p>Une quinzaine de <strong>filets olfactifs</strong> nés des neurones de la muqueuse olfactive (toit des cavités nasales), traversent la lame criblée et gagnent le <strong>bulbe olfactif</strong> (face inférieure du lobe frontal), d'où le <strong>tractus olfactif</strong> rejoint le cortex olfactif (uncus, aire entorhinale) sans relais thalamique. Atteinte : <strong>anosmie</strong> (traumatisme de la lame criblée, méningiome olfactif, rhinite, COVID).</p>
<h4>Nerf optique (II)</h4>
<p>Formé des axones des cellules ganglionnaires de la rétine (1,2 million de fibres), c'est une expansion du diencéphale, entourée des trois méninges (la papille œdématisée en cas d'hypertension intracrânienne). Trajet : intra-oculaire (papille), intra-orbitaire (3 cm, dans le cône musculaire, en S pour permettre les mouvements), intra-canalaire (canal optique, avec l'artère ophtalmique) et intra-crânien (1 cm) jusqu'au <strong>chiasma optique</strong> (au-dessus de la selle turcique : hémianopsie bitemporale des adénomes hypophysaires), où les fibres nasales croisent ; puis <strong>tractus optiques</strong> → corps géniculé latéral → radiations optiques → cortex occipital (voir organes des sens).</p>
<h4>Nerf vestibulo-cochléaire (VIII)</h4>
<p>Deux nerfs accolés : le <strong>nerf cochléaire</strong> (ganglion spiral, audition) et le <strong>nerf vestibulaire</strong> (ganglion vestibulaire, équilibre), nés dans le rocher, traversant le <strong>méat acoustique interne</strong> avec le VII, et pénétrant le tronc cérébral à l'angle ponto-cérébelleux (noyaux cochléaires et vestibulaires de la jonction ponto-bulbaire). Atteinte : surdité de perception, acouphènes, vertiges, nystagmus (neurinome de l'acoustique, qui comprime aussi le VII et le V à l'angle ponto-cérébelleux).</p>
<h4>Les nerfs oculomoteurs</h4>
<ul>
<li>Le <strong>nerf oculomoteur (III)</strong> : noyau dans le mésencéphale (pédoncule, au niveau du colliculus supérieur), émerge de la fosse interpédonculaire, passe entre les artères cérébrale postérieure et cérébelleuse supérieure, longe l'artère communicante postérieure (anévrisme !), traverse la <strong>paroi latérale du sinus caverneux</strong> et la fissure orbitaire supérieure (dans l'anneau de Zinn). Il innerve l'<strong>élévateur de la paupière supérieure</strong>, les droits <strong>supérieur, inférieur, médial</strong> et l'<strong>oblique inférieur</strong>, et porte les fibres <strong>parasympathiques</strong> (noyau d'Edinger-Westphal → ganglion ciliaire → <strong>sphincter de la pupille</strong> et muscle ciliaire). Paralysie complète : <strong>ptosis</strong>, œil dévié en dehors et en bas (« regard en dehors »), <strong>mydriase</strong> aréactive, diplopie. Une mydriase isolée signe une compression extrinsèque (anévrisme, engagement temporal : les fibres parasympathiques sont périphériques) ; une paralysie sans mydriase évoque une cause ischémique (diabète).</li>
<li>Le <strong>nerf trochléaire (IV)</strong> : noyau mésencéphalique (colliculus inférieur), seul nerf émergeant de la <strong>face dorsale</strong> du tronc et <strong>croisant la ligne médiane</strong> ; le plus long trajet intracrânien et le plus grêle ; paroi latérale du sinus caverneux, fissure orbitaire supérieure (hors de l'anneau) ; innerve l'<strong>oblique supérieur</strong> (abaisse et porte l'œil en dedans, intorsion). Paralysie : diplopie verticale accentuée dans le regard en bas et en dedans (lecture, escaliers), tête inclinée du côté opposé.</li>
<li>Le <strong>nerf abducens (VI)</strong> : noyau pontique (sous le plancher du 4<sup>e</sup> ventricule, contourné par les fibres du VII : colliculus facial), émerge au sillon bulbo-pontique, long trajet sur le clivus (sensible à l'hypertension intracrânienne), traverse le sinus caverneux <strong>dans sa lumière</strong> (contre la carotide), fissure orbitaire supérieure (dans l'anneau) ; innerve le <strong>droit latéral</strong>. Paralysie : strabisme convergent, diplopie horizontale augmentée dans le regard vers le côté atteint ; paralysie la plus fréquente (HTIC, diabète).</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> « LR6 SO4 R3 » : le droit latéral dépend du VI, l'oblique supérieur du IV, tous les autres muscles du III. L'oblique supérieur <strong>abaisse</strong> l'œil (malgré son nom) et l'oblique inférieur l'<strong>élève</strong>. Le réflexe photomoteur emprunte le II (afférence) et le III (efférence parasympathique) : une pupille aréactive à l'éclairement direct mais réactive à l'éclairement de l'autre œil signe une atteinte du II homolatéral.</div>`
            },
            {
              titre: "Le nerf trijumeau (V)",
              contenu: `<p>Le <strong>trijumeau</strong> est le plus volumineux des nerfs crâniens, nerf du 1<sup>er</sup> arc pharyngien, <strong>sensitif</strong> pour la face, les cavités nasale et buccale, les dents, les méninges, et <strong>moteur</strong> pour les muscles masticateurs. Il émerge de la face latérale du <strong>pont</strong> par une grosse racine sensitive et une petite racine motrice. Ses noyaux s'étendent du mésencéphale à la moelle cervicale : noyau mésencéphalique (proprioception), noyau principal pontique (tact), noyau spinal (douleur et température, descendant jusqu'en C2–C3), noyau moteur pontique. La racine sensitive forme le <strong>ganglion trigéminal</strong> (de Gasser) dans une dépression de la face antéro-supérieure du rocher (cavum trigéminal de Meckel), d'où partent trois branches :</p>
<table>
<thead><tr><th>Branche</th><th>Sortie</th><th>Trajet et branches</th><th>Territoire</th></tr></thead>
<tbody>
<tr><td><strong>V1 Nerf ophtalmique</strong> (sensitif)</td><td>Fissure orbitaire supérieure</td><td>Paroi latérale du sinus caverneux ; se divise en nerfs <strong>frontal</strong> (supra-orbitaire, supra-trochléaire), <strong>lacrymal</strong> et <strong>naso-ciliaire</strong> (nerfs ciliaires longs : cornée ; ethmoïdaux ; infra-trochléaire)</td><td>Front et cuir chevelu jusqu'au vertex, paupière supérieure, dos du nez, <strong>cornée</strong>, conjonctive, sinus frontal, partie antérieure des cavités nasales, dure-mère (tente du cervelet)</td></tr>
<tr><td><strong>V2 Nerf maxillaire</strong> (sensitif)</td><td>Foramen rond</td><td>Fosse ptérygo-palatine (ganglion ptérygo-palatin annexé) ; branches : <strong>infra-orbitaire</strong> (par le canal infra-orbitaire, sort au foramen infra-orbitaire), <strong>zygomatique</strong>, <strong>alvéolaires supérieurs</strong>, <strong>palatins</strong>, nasaux</td><td>Paupière inférieure, joue, aile du nez, <strong>lèvre supérieure</strong>, <strong>dents supérieures</strong> et gencive, palais, partie postérieure des cavités nasales, sinus maxillaire, dure-mère</td></tr>
<tr><td><strong>V3 Nerf mandibulaire</strong> (mixte)</td><td>Foramen ovale</td><td>Fosse infra-temporale (ganglion otique annexé) ; branches motrices pour les <strong>masticateurs</strong>, le mylo-hyoïdien, le ventre antérieur du digastrique, le tenseur du voile et le tenseur du tympan ; branches sensitives : <strong>auriculo-temporal</strong> (tempe, ATM, parotide ; conduit les fibres parasympathiques du IX à la parotide), <strong>buccal</strong>, <strong>lingual</strong> (deux tiers antérieurs de la langue, rejoint par la corde du tympan du VII), <strong>alvéolaire inférieur</strong> (canal mandibulaire → dents inférieures → nerf mentonnier)</td><td>Tempe, région massétérine, joue, <strong>lèvre inférieure</strong>, menton, <strong>dents inférieures</strong>, deux tiers antérieurs de la langue (sensibilité générale), plancher buccal, dure-mère (nerf spinal)</td></tr>
</tbody>
</table>
<p>L'<strong>angle de la mandibule</strong> et la région parotidienne basse ne dépendent pas du V mais du plexus cervical (C2–C3, grand auriculaire) : repère d'une atteinte organique. Le <strong>réflexe cornéen</strong> (V1 afférent, VII efférent) est le test clé.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>névralgie du trijumeau</strong> (névralgie faciale essentielle) : décharges fulgurantes de quelques secondes dans le territoire du V2 ou du V3, déclenchées par une zone gâchette (mastication, parole), par conflit vasculo-nerveux à l'émergence pontique ; traitement par carbamazépine ou décompression. Le <strong>zona ophtalmique</strong> (V1) menace la cornée (kératite). L'anesthésie dentaire s'adresse aux nerfs alvéolaires (infiltration locale en haut, tronculaire à l'épine de Spix en bas). Une anesthésie cornéenne (V1) expose à la kératite neuroparalytique.</div>`
            },
            {
              titre: "Le nerf facial (VII)",
              contenu: `<p>Le <strong>nerf facial</strong> est le nerf du 2<sup>e</sup> arc pharyngien : <strong>moteur</strong> pour les muscles de la mimique (et le stapédien, le stylo-hyoïdien, le ventre postérieur du digastrique), <strong>sensoriel</strong> (gustatif) pour les deux tiers antérieurs de la langue, <strong>parasympathique</strong> pour les glandes lacrymale, submandibulaire, sublinguale et nasales, et <strong>sensitif</strong> pour la zone de Ramsay-Hunt (conque). Les composantes sensorielle et végétative constituent le <strong>nerf intermédiaire</strong> (VII bis, de Wrisberg). Noyaux : noyau moteur pontique (la partie supérieure, pour le front, reçoit une commande corticale bilatérale), noyau salivaire supérieur et lacrymal, noyau du tractus solitaire (goût).</p>
<h4>Trajet</h4>
<ol>
<li><strong>Intra-crânien</strong> : émerge du sillon bulbo-pontique (fossette latérale), traverse l'<strong>angle ponto-cérébelleux</strong> avec le VIII.</li>
<li><strong>Intra-pétreux</strong> (dans le canal facial du rocher, 3 cm, le plus long trajet osseux d'un nerf) : segment labyrinthique → <strong>ganglion géniculé</strong> (1<sup>er</sup> coude, genou ; donne le <strong>nerf grand pétreux</strong>, parasympathique → ganglion ptérygo-palatin → glande lacrymale et glandes nasales), segment tympanique (paroi médiale de la caisse, au-dessus de la fenêtre vestibulaire : déhiscences, otites), 2<sup>e</sup> coude, segment mastoïdien (donne le <strong>nerf du muscle stapédien</strong> — réflexe stapédien — et la <strong>corde du tympan</strong>, qui traverse la caisse, sort par la fissure pétro-tympanique et rejoint le nerf lingual : goût des deux tiers antérieurs de la langue et fibres parasympathiques → ganglion submandibulaire → glandes submandibulaire et sublinguale).</li>
<li><strong>Extra-crânien</strong> : sort par le <strong>foramen stylo-mastoïdien</strong>, donne le nerf auriculaire postérieur et les rameaux du digastrique et du stylo-hyoïdien, pénètre la <strong>glande parotide</strong> (qu'il divise en lobes superficiel et profond sans l'innerver) et forme le <strong>plexus parotidien</strong> d'où partent les branches terminales : temporale, zygomatique, buccale, marginale de la mandibule, cervicale (« patte d'oie »).</li>
</ol>
<h4>Diagnostic topographique d'une paralysie faciale périphérique</h4>
<table>
<thead><tr><th>Siège de la lésion</th><th>Signes associés à la paralysie de l'hémiface</th></tr></thead>
<tbody>
<tr><td>Angle ponto-cérébelleux (neurinome)</td><td>Surdité, vertiges (VIII), hypoesthésie faciale (V)</td></tr>
<tr><td>Au-dessus du ganglion géniculé</td><td>+ Sécheresse oculaire (grand pétreux), hyperacousie, agueusie</td></tr>
<tr><td>Segment tympanique ou mastoïdien haut (otite, cholestéatome)</td><td>Hyperacousie douloureuse (stapédien), agueusie des deux tiers antérieurs, diminution de la salivation</td></tr>
<tr><td>Sous l'émergence de la corde du tympan</td><td>Agueusie épargnée, larmes conservées</td></tr>
<tr><td>Extra-crânien (parotide : tumeur, chirurgie, plaie)</td><td>Paralysie motrice pure, parfois partielle (une branche)</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>paralysie faciale a frigore</strong> (de Bell, idiopathique, probablement virale) est la plus fréquente : œdème du nerf dans le canal facial inextensible. La protection de la cornée (occlusion impossible) est la priorité. Le <strong>zona du ganglion géniculé</strong> (syndrome de Ramsay-Hunt) associe éruption de la conque et paralysie faciale. En chirurgie parotidienne, le repérage du tronc du facial au foramen stylo-mastoïdien est le temps essentiel. Les spasmes de l'hémiface traduisent un conflit vasculo-nerveux à l'émergence.</div>`
            },
            {
              titre: "Les nerfs mixtes du bulbe : IX, X, XI, XII",
              contenu: `<h4>Nerf glosso-pharyngien (IX)</h4>
<p>Nerf du 3<sup>e</sup> arc, mixte, émerge du sillon rétro-olivaire (au-dessus du X), sort par le <strong>foramen jugulaire</strong> (ganglions supérieur et inférieur), descend entre la carotide interne et la jugulaire interne puis le long du <strong>stylo-pharyngien</strong> (seul muscle qu'il innerve), gagne la base de la langue et le pharynx. Fonctions : <strong>sensibilité</strong> du pharynx (oropharynx, amygdale), de l'oreille moyenne (nerf tympanique de Jacobson), du <strong>tiers postérieur de la langue</strong> (sensibilité générale et <strong>gustative</strong>, bourgeons du goût des papilles circumvallées) ; <strong>parasympathique</strong> pour la <strong>parotide</strong> (nerf tympanique → petit pétreux → ganglion otique → auriculo-temporal) ; <strong>viscéro-sensible</strong> pour le <strong>sinus et le glomus carotidiens</strong> (nerf de Hering : baroréflexe, chémoréflexe). Exploration : <strong>réflexe nauséeux</strong> (afférence IX, efférence X), goût du tiers postérieur. Névralgie du IX : douleur de l'amygdale et de l'oreille à la déglutition.</p>
<h4>Nerf vague (X)</h4>
<p>Nerf des 4<sup>e</sup> et 6<sup>e</sup> arcs, le plus long et le plus étendu des nerfs crâniens (« vagabond »), mixte et <strong>principal nerf parasympathique</strong> de l'organisme. Noyaux bulbaires : noyau ambigu (moteur : pharynx, larynx, voile), noyau dorsal du vague (parasympathique), noyau du tractus solitaire (viscéro-sensibilité), noyau spinal du V (sensibilité de l'oreille). Émerge du sillon rétro-olivaire, sort par le <strong>foramen jugulaire</strong> (ganglions supérieur et inférieur), descend dans la gaine carotidienne, <strong>en arrière et entre la carotide interne (puis commune) et la jugulaire interne</strong>, puis dans le thorax (voir médiastin) et l'abdomen (troncs vagaux). Branches cervicales : rameau méningé, <strong>rameau auriculaire</strong> (nerf d'Arnold : conque et conduit auditif ; toux réflexe à l'otoscopie), <strong>rameaux pharyngiens</strong> (plexus pharyngien avec le IX : constricteurs, muscles du voile sauf le tenseur), <strong>nerf laryngé supérieur</strong> (branche interne sensitive pour le larynx au-dessus des cordes vocales, branche externe motrice pour le crico-thyroïdien), <strong>nerf laryngé récurrent</strong> (inférieur : contourne la subclavière à droite, l'arc aortique à gauche ; remonte dans l'angle trachéo-œsophagien ; moteur pour tous les autres muscles intrinsèques du larynx, sensitif sous les cordes vocales), rameaux cardiaques. Fonctions : déglutition, phonation, parasympathique cardiaque (bradycardie), broncho-pulmonaire, digestif jusqu'à l'angle colique gauche. Atteinte unilatérale : <strong>signe du rideau</strong> (déviation du voile et de la paroi pharyngée vers le côté sain), voix nasonnée, fausses routes, <strong>dysphonie</strong> (voix bitonale par paralysie récurrentielle : thyroïdectomie, cancer de l'œsophage ou du poumon, anévrisme). Atteinte bilatérale des récurrents : dyspnée laryngée aiguë.</p>
<h4>Nerf accessoire (XI)</h4>
<p>Purement moteur, formé d'une racine crânienne (bulbaire, qui rejoint le X : muscles du larynx) et d'une <strong>racine spinale</strong> (C1–C5, remontant par le foramen magnum). Sort par le <strong>foramen jugulaire</strong>, descend obliquement dans le cou, traverse le <strong>sterno-cléido-mastoïdien</strong> (qu'il innerve) puis le triangle postérieur du cou (où il est superficiel, exposé lors des biopsies ganglionnaires) jusqu'au <strong>trapèze</strong>. Atteinte : chute de l'épaule, impossibilité d'élever l'épaule contre résistance et de tourner la tête du côté opposé, scapula décollée latéralement.</p>
<h4>Nerf hypoglosse (XII)</h4>
<p>Purement moteur, nerf des muscles de la <strong>langue</strong> (intrinsèques et extrinsèques : génio-glosse, hyo-glosse, stylo-glosse ; sauf le palato-glosse, innervé par le X). Noyau bulbaire (trigone de l'hypoglosse), émerge du sillon pré-olivaire par 10–15 racines, sort par le <strong>canal de l'hypoglosse</strong>, descend entre la carotide interne et la jugulaire interne, croise en avant la carotide externe et la linguale (repère chirurgical au-dessus de la grande corne de l'os hyoïde), et pénètre la langue. Il est accompagné par des fibres de C1 (anse cervicale pour les infra-hyoïdiens, nerf du génio-hyoïdien et du thyro-hyoïdien). Atteinte unilatérale : <strong>déviation de la langue vers le côté paralysé</strong> à la protraction (le génio-glosse sain pousse), hémiatrophie, fasciculations ; dysarthrie.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> réflexe nauséeux = IX afférent, X efférent ; voile dévié vers le côté sain (X) ; langue déviée vers le côté paralysé (XII) ; mandibule déviée vers le côté paralysé (V3). Dans la gaine carotidienne : artère carotide médiale, veine jugulaire interne latérale, nerf vague en arrière entre les deux. Les syndromes du foramen jugulaire (Vernet : IX, X, XI) et du trou déchiré postérieur étendu (Collet-Sicard : IX à XII) résultent de tumeurs de la base.</div>`
            }
          ],
          points_cles: [
            "Quatre muscles masticateurs innervés par le V3 : temporal (élévation, rétropulsion), masséter (élévation), ptérygoïdien médial (élévation, diduction), ptérygoïdien latéral (propulsion, ouverture, diduction) ; abaissement par les supra-hyoïdiens et la gravité.",
            "Les muscles de la mimique (orbiculaires, buccinateur, zygomatiques, frontal, platysma) sont tous innervés par le VII ; paralysie périphérique = toute l'hémiface avec signe de Charles Bell ; centrale = épargne le front.",
            "Douze paires : I, II, VIII sensoriels ; III, IV, VI, XI, XII moteurs ; V, VII, IX, X mixtes ; parasympathique dans III, VII, IX, X ; noyaux III–IV mésencéphale, V–VIII pont, IX–XII bulbe.",
            "Sorties : I lame criblée ; II canal optique ; III, IV, VI, V1 fissure orbitaire supérieure ; V2 foramen rond ; V3 foramen ovale ; VII et VIII méat acoustique interne ; IX, X, XI foramen jugulaire ; XII canal de l'hypoglosse.",
            "Oculomoteurs : III (élévateur de la paupière, droits supérieur, inférieur, médial, oblique inférieur, sphincter pupillaire : ptosis, mydriase, œil en dehors), IV (oblique supérieur, diplopie verticale), VI (droit latéral, strabisme convergent) : « LR6 SO4 R3 ».",
            "Trijumeau : ganglion trigéminal, V1 (front, cornée, nez : réflexe cornéen), V2 (joue, lèvre et dents supérieures, palais), V3 (mixte : masticateurs, lèvre et dents inférieures, deux tiers antérieurs de la langue) ; l'angle de la mandibule dépend de C2–C3.",
            "Facial : angle ponto-cérébelleux, canal facial du rocher (ganglion géniculé, grand pétreux → lacrymale ; stapédien ; corde du tympan → goût des deux tiers antérieurs et glandes submandibulaire/sublinguale), foramen stylo-mastoïdien, plexus parotidien.",
            "IX : stylo-pharyngien, sensibilité du pharynx et du tiers postérieur de la langue (goût), parotide, sinus carotidien ; réflexe nauséeux afférent.",
            "X : foramen jugulaire, gaine carotidienne, pharynx, voile (signe du rideau), larynx (laryngés supérieur et récurrent : dysphonie), parasympathique thoraco-abdominal jusqu'à l'angle colique gauche.",
            "XI : sterno-cléido-mastoïdien et trapèze (racine spinale C1–C5) ; XII : muscles de la langue sauf le palato-glosse, langue déviée vers le côté paralysé."
          ],
          lexique: [
            { terme: "Fosse infra-temporale", def: "Région sous la grande aile du sphénoïde, en dedans de la branche mandibulaire, contenant les ptérygoïdiens, l'artère maxillaire, le plexus ptérygoïdien et le nerf mandibulaire." },
            { terme: "Buccinateur", def: "Muscle profond de la joue, plaquant la joue contre les dents, traversé par le conduit parotidien, innervé par le VII." },
            { terme: "Signe de Charles Bell", def: "Révulsion du globe oculaire vers le haut lors de la tentative d'occlusion palpébrale dans la paralysie faciale périphérique." },
            { terme: "Ganglion trigéminal", def: "Ganglion de Gasser, renflement sensitif du trijumeau logé dans le cavum de Meckel sur la face antéro-supérieure du rocher." },
            { terme: "Nerf alvéolaire inférieur", def: "Branche du V3 parcourant le canal mandibulaire, innervant les dents inférieures et se terminant par le nerf mentonnier." },
            { terme: "Ganglion géniculé", def: "Ganglion sensitif du nerf facial situé au premier coude du canal facial, origine du nerf grand pétreux." },
            { terme: "Corde du tympan", def: "Branche du VII traversant la caisse du tympan et rejoignant le nerf lingual, portant le goût des deux tiers antérieurs de la langue et les fibres parasympathiques submandibulaires." },
            { terme: "Nerf laryngé récurrent", def: "Branche du X contournant l'artère subclavière droite ou l'arc aortique gauche, motrice pour les muscles intrinsèques du larynx (sauf le crico-thyroïdien)." },
            { terme: "Signe du rideau", def: "Déviation du voile du palais et de la paroi postérieure du pharynx vers le côté sain lors de la phonation, traduisant une paralysie unilatérale du X." },
            { terme: "Réflexe cornéen", def: "Clignement bilatéral à l'attouchement de la cornée : afférence V1, efférence VII." }
          ],
          qcm: [
            {
              q: "Concernant les muscles masticateurs, quelles propositions sont exactes ?",
              options: [
                "A. Ils sont tous innervés par le nerf mandibulaire (V3).",
                "B. Le temporal se termine sur le processus coronoïde.",
                "C. Le ptérygoïdien latéral est le principal élévateur de la mandibule.",
                "D. Le masséter s'insère sur l'arcade zygomatique et la face latérale de la branche mandibulaire.",
                "E. L'ouverture de la bouche est assurée principalement par le masséter."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : le ptérygoïdien latéral est propulseur et abaisseur ; les élévateurs sont le temporal, le masséter et le ptérygoïdien médial. E est fausse : l'ouverture dépend des supra-hyoïdiens, du ptérygoïdien latéral et de la gravité."
            },
            {
              q: "Concernant les muscles de la mimique et la paralysie faciale, quelles propositions sont exactes ?",
              options: [
                "A. Les muscles de la mimique sont innervés par le nerf facial.",
                "B. Le buccinateur est traversé par le conduit parotidien.",
                "C. La paralysie faciale centrale épargne la partie supérieure du visage.",
                "D. Le signe de Charles Bell est observé dans la paralysie faciale centrale.",
                "E. L'orbiculaire de l'œil est innervé par le nerf oculomoteur."
              ],
              bonnes: [0, 1, 2],
              explication: "A, B et C sont vraies. D est fausse : le signe de Charles Bell (occlusion impossible) caractérise la paralysie périphérique. E est fausse : l'orbiculaire de l'œil dépend du VII ; le III innerve l'élévateur de la paupière."
            },
            {
              q: "Concernant la classification et la sortie des nerfs crâniens, quelles propositions sont exactes ?",
              options: [
                "A. Les nerfs III, IV et VI traversent la fissure orbitaire supérieure.",
                "B. Le nerf maxillaire (V2) sort par le foramen ovale.",
                "C. Les nerfs IX, X et XI sortent par le foramen jugulaire.",
                "D. Les nerfs crâniens à composante parasympathique sont les III, VII, IX et X.",
                "E. Le nerf trochléaire est le plus volumineux des nerfs crâniens."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : le V2 sort par le foramen rond ; le foramen ovale laisse passer le V3. E est fausse : le IV est le plus grêle ; le V est le plus volumineux."
            },
            {
              q: "Concernant les nerfs oculomoteurs, quelles propositions sont exactes ?",
              options: [
                "A. Le nerf abducens innerve le muscle droit latéral.",
                "B. Le nerf trochléaire innerve le muscle oblique inférieur.",
                "C. La paralysie du III entraîne un ptosis et une mydriase.",
                "D. Le nerf abducens traverse la lumière du sinus caverneux.",
                "E. Le nerf trochléaire émerge de la face dorsale du tronc cérébral."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le IV innerve l'oblique supérieur ; l'oblique inférieur dépend du III."
            },
            {
              q: "Concernant le nerf trijumeau, quelles propositions sont exactes ?",
              options: [
                "A. Le ganglion trigéminal est situé sur la face antéro-supérieure du rocher.",
                "B. Le nerf ophtalmique (V1) assure la sensibilité de la cornée.",
                "C. Le nerf maxillaire (V2) innerve les dents inférieures.",
                "D. Le nerf mandibulaire (V3) est la seule branche motrice du trijumeau.",
                "E. L'angle de la mandibule est innervé par le trijumeau."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : les dents inférieures dépendent du nerf alvéolaire inférieur (V3) ; le V2 innerve les dents supérieures. E est fausse : l'angle de la mandibule dépend du plexus cervical (C2–C3)."
            },
            {
              q: "Concernant le nerf facial, quelles propositions sont exactes ?",
              options: [
                "A. Il traverse le rocher dans le canal facial.",
                "B. Le nerf grand pétreux conduit les fibres parasympathiques destinées à la glande lacrymale.",
                "C. La corde du tympan véhicule la sensibilité gustative des deux tiers antérieurs de la langue.",
                "D. Il sort du crâne par le foramen jugulaire.",
                "E. Il innerve la glande parotide qu'il traverse."
              ],
              bonnes: [0, 1, 2],
              explication: "A, B et C sont vraies. D est fausse : il sort par le foramen stylo-mastoïdien. E est fausse : il traverse la parotide sans l'innerver ; la parotide dépend du IX."
            },
            {
              q: "Concernant les nerfs IX, X, XI et XII, quelles propositions sont exactes ?",
              options: [
                "A. Le nerf glosso-pharyngien assure le goût du tiers postérieur de la langue.",
                "B. Le nerf laryngé récurrent est une branche du nerf vague.",
                "C. La paralysie unilatérale du X dévie le voile du palais vers le côté paralysé.",
                "D. Le nerf accessoire innerve le sterno-cléido-mastoïdien et le trapèze.",
                "E. La paralysie du XII dévie la langue vers le côté paralysé lors de la protraction."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le voile est dévié vers le côté sain (signe du rideau)."
            },
            {
              q: "Concernant les réflexes et l'exploration des nerfs crâniens, quelles propositions sont exactes ?",
              options: [
                "A. Le réflexe cornéen emprunte le V1 pour l'afférence et le VII pour l'efférence.",
                "B. Le réflexe photomoteur emprunte le II pour l'afférence et le III pour l'efférence.",
                "C. Le réflexe nauséeux emprunte le IX pour l'afférence et le X pour l'efférence.",
                "D. Une diplopie verticale en descendant les escaliers évoque une atteinte du VI.",
                "E. Un neurinome de l'acoustique peut comprimer le VII et le V à l'angle ponto-cérébelleux."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la diplopie verticale accentuée dans le regard en bas évoque une atteinte du IV (oblique supérieur) ; le VI donne une diplopie horizontale."
            }
          ]
        },
        {
          id: "cou",
          titre: "Le cou",
          duree: 50,
          objectifs: [
            "Décrire les régions et les triangles du cou, les fascias cervicaux et leurs espaces.",
            "Décrire les muscles du cou : sterno-cléido-mastoïdien, trapèze, supra- et infra-hyoïdiens, scalènes, prévertébraux.",
            "Décrire le larynx (cartilages, articulations, muscles, innervation) et le pharynx (trois étages, constricteurs).",
            "Décrire la glande thyroïde et les parathyroïdes, leurs rapports et leur vascularisation.",
            "Décrire les gros vaisseaux du cou (carotides, vertébrales, jugulaires), le plexus cervical et les nœuds lymphatiques cervicaux."
          ],
          sections: [
            {
              titre: "Régions, triangles et fascias du cou",
              contenu: `<p>Le <strong>cou</strong> relie la tête au thorax, de la base du crâne et de la mandibule (en haut) à l'ouverture supérieure du thorax et aux clavicules (en bas). Il contient la colonne cervicale, les voies aériennes et digestives supérieures, la thyroïde, les gros vaisseaux et nerfs à destinée céphalique. Le <strong>sterno-cléido-mastoïdien</strong> (SCM), oblique de la mastoïde au sternum et à la clavicule, divise chaque côté en deux triangles :</p>
<ul>
<li>Le <strong>triangle antérieur</strong> (région cervicale antérieure) : entre le bord antérieur du SCM, la ligne médiane et le bord inférieur de la mandibule ; subdivisé par les ventres du digastrique et de l'omo-hyoïdien en <strong>triangle submandibulaire</strong> (glande submandibulaire, artère faciale, nerf hypoglosse), <strong>triangle submental</strong>, <strong>triangle carotidien</strong> (bifurcation carotidienne, jugulaire interne, X, XII, anse cervicale : site de palpation du pouls carotidien) et <strong>triangle musculaire</strong> (infra-hyoïdiens, thyroïde, larynx, trachée).</li>
<li>Le <strong>triangle postérieur</strong> (région cervicale latérale) : entre le bord postérieur du SCM, le bord antérieur du trapèze et la clavicule ; divisé par l'omo-hyoïdien en <strong>triangle occipital</strong> (nerf accessoire XI, plexus cervical, nœuds lymphatiques) et <strong>triangle omo-claviculaire</strong> (fosse supra-claviculaire : artère et veine subclavières, plexus brachial, dôme pleural).</li>
<li>La <strong>région sterno-cléido-mastoïdienne</strong> elle-même recouvre le paquet vasculo-nerveux du cou.</li>
<li>En arrière, la <strong>région cervicale postérieure</strong> (nuque) : muscles du dos, sub-occipitaux, artère vertébrale.</li>
</ul>
<h4>Les fascias cervicaux</h4>
<p>Le <strong>fascia cervical</strong> comprend trois lames :</p>
<ul>
<li>la <strong>lame superficielle</strong> (fascia d'investissement) : engaine le cou comme un collier, se dédouble pour le SCM et le trapèze, s'attache à la mandibule, à l'os hyoïde, au sternum (espace supra-sternal) et aux clavicules ;</li>
<li>la <strong>lame prétrachéale</strong> (fascia moyen) : engaine les infra-hyoïdiens, la thyroïde (capsule péri-thyroïdienne), la trachée et l'œsophage ; elle descend dans le médiastin (voie de diffusion des infections et des goitres plongeants) ;</li>
<li>la <strong>lame prévertébrale</strong> : engaine la colonne et les muscles prévertébraux et scalènes, se prolonge en gaine axillaire autour du plexus brachial et de l'artère subclavière.</li>
</ul>
<p>La <strong>gaine carotidienne</strong>, condensation des trois lames, enveloppe l'artère carotide (commune puis interne, médiale), la veine jugulaire interne (latérale) et le nerf vague (en arrière, entre les deux) ; la chaîne sympathique est en arrière de la gaine. L'<strong>espace rétro-pharyngé</strong>, entre le pharynx et la lame prévertébrale, s'étend de la base du crâne au médiastin postérieur (« danger space ») : les abcès rétro-pharyngés peuvent y diffuser jusqu'au thorax (médiastinite).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> une <strong>masse cervicale</strong> s'analyse par sa topographie : médiane (kyste du tractus thyréoglosse, mobile à la déglutition et à la protraction de la langue ; thyroïde), latérale (adénopathie, kyste branchial du bord antérieur du SCM, tumeur du glomus carotidien, lipome). Le <strong>torticolis</strong> congénital est une rétraction du SCM. L'<strong>abord de la jugulaire interne</strong> pour voie centrale se fait au sommet du triangle formé par les deux chefs du SCM et la clavicule.</div>`
            },
            {
              titre: "Les muscles du cou",
              contenu: `<table>
<thead><tr><th>Groupe</th><th>Muscle</th><th>Insertions</th><th>Action</th><th>Innervation</th></tr></thead>
<tbody>
<tr><td>Superficiel</td><td><strong>Platysma</strong></td><td>Fascia pectoral → mandibule et peau de la face</td><td>Tend la peau du cou, abaisse la commissure</td><td>VII (rameau cervical)</td></tr>
<tr><td>Latéral</td><td><strong>Sterno-cléido-mastoïdien</strong></td><td>Manubrium (chef sternal) et tiers médial de la clavicule (chef claviculaire) → processus mastoïde et ligne nuchale supérieure</td><td>Unilatéral : inclinaison homolatérale, <strong>rotation controlatérale</strong> de la tête ; bilatéral : flexion du cou (extension de la tête si cou fixé) ; inspirateur accessoire</td><td><strong>XI</strong> (+ C2–C3 sensitifs)</td></tr>
<tr><td>Latéral</td><td><strong>Trapèze</strong> (partie descendante)</td><td>Occiput, ligament nuchal → clavicule, acromion</td><td>Élévation de l'épaule, extension de la tête</td><td><strong>XI</strong> (+ C3–C4)</td></tr>
<tr><td>Supra-hyoïdiens</td><td><strong>Digastrique</strong></td><td>Ventre postérieur : mastoïde ; ventre antérieur : mandibule ; tendon intermédiaire fixé à l'os hyoïde par une poulie</td><td>Élève l'os hyoïde, abaisse la mandibule</td><td>Ventre postérieur : VII ; ventre antérieur : V3</td></tr>
<tr><td>Supra-hyoïdiens</td><td><strong>Stylo-hyoïdien</strong></td><td>Processus styloïde → hyoïde</td><td>Élève et recule l'hyoïde</td><td>VII</td></tr>
<tr><td>Supra-hyoïdiens</td><td><strong>Mylo-hyoïdien</strong></td><td>Ligne mylo-hyoïdienne → hyoïde et raphé médian (plancher de la bouche)</td><td>Élève le plancher buccal et la langue (déglutition), abaisse la mandibule</td><td>V3</td></tr>
<tr><td>Supra-hyoïdiens</td><td><strong>Génio-hyoïdien</strong></td><td>Épine mentale → hyoïde</td><td>Avance et élève l'hyoïde</td><td>C1 (via XII)</td></tr>
<tr><td>Infra-hyoïdiens</td><td><strong>Sterno-hyoïdien</strong>, <strong>omo-hyoïdien</strong> (digastrique, du bord supérieur de la scapula ; tendon intermédiaire adhérent à la gaine carotidienne)</td><td>Plan superficiel</td><td>Abaissent l'os hyoïde (et le larynx) après la déglutition ; fixent l'hyoïde pour l'ouverture de la bouche</td><td><strong>Anse cervicale</strong> (C1–C3)</td></tr>
<tr><td>Infra-hyoïdiens</td><td><strong>Sterno-thyroïdien</strong>, <strong>thyro-hyoïdien</strong></td><td>Plan profond, sur le cartilage thyroïde</td><td>Abaissent le larynx / rapprochent hyoïde et larynx</td><td>Anse cervicale ; thyro-hyoïdien : C1 via XII</td></tr>
<tr><td>Profonds latéraux</td><td><strong>Scalènes antérieur, moyen, postérieur</strong></td><td>Processus transverses C3–C7 → 1re côte (antérieur et moyen), 2e côte (postérieur)</td><td>Inclinaison et flexion du cou, <strong>inspirateurs</strong> (élèvent les deux premières côtes)</td><td>Rameaux antérieurs C3–C8</td></tr>
<tr><td>Profonds médians (prévertébraux)</td><td><strong>Long du cou</strong>, <strong>long de la tête</strong>, droits antérieur et latéral de la tête</td><td>Face antérieure des vertèbres, base du crâne</td><td>Flexion du cou et de la tête</td><td>Rameaux antérieurs C1–C6</td></tr>
</tbody>
</table>
<h4>Repères des scalènes</h4>
<p>Le <strong>scalène antérieur</strong> est le repère clé de la base du cou : <strong>en avant</strong> de lui passent la veine subclavière et le nerf phrénique (qui descend sur sa face antérieure) ; <strong>en arrière</strong> (défilé interscalénique, entre scalènes antérieur et moyen) passent l'<strong>artère subclavière</strong> et les troncs du <strong>plexus brachial</strong>. La compression de ce défilé (côte cervicale, hypertrophie musculaire) constitue le syndrome du défilé thoraco-brachial. L'<strong>anse cervicale</strong>, formée par les racines C1 (descendant avec le XII) et C2–C3, innerve les infra-hyoïdiens.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le SCM tourne la tête du côté <strong>opposé</strong> ; sa contraction se teste en demandant au patient de tourner la tête contre résistance. Supra-hyoïdiens : élèvent l'hyoïde (déglutition) ou abaissent la mandibule ; infra-hyoïdiens : abaissent l'hyoïde (anse cervicale). Devant le scalène antérieur : veine et phrénique ; derrière : artère et plexus.</div>`
            },
            {
              titre: "Le larynx",
              contenu: `<p>Le <strong>larynx</strong> est l'organe de la <strong>phonation</strong> et un sphincter protecteur des voies aériennes (déglutition, toux, effort à glotte fermée). Il est situé en avant du laryngo-pharynx, sous l'os hyoïde, en regard de <strong>C3–C6</strong> chez l'adulte (plus haut chez l'enfant et la femme), et se continue par la trachée au bord inférieur du cartilage cricoïde (C6). Il mesure 4–5 cm chez l'homme (la saillie du cartilage thyroïde, « pomme d'Adam », apparaît à la puberté sous l'effet de la testostérone, les cordes vocales s'allongent et la voix descend d'une octave).</p>
<h4>Les cartilages</h4>
<ul>
<li><strong>Trois impairs</strong> : le <strong>cartilage thyroïde</strong> (le plus grand, deux lames réunies en avant en un angle de 90° chez l'homme et 120° chez la femme, formant la proéminence laryngée ; cornes supérieures vers l'hyoïde et inférieures articulées avec le cricoïde ; hyalin, s'ossifie avec l'âge) ; le <strong>cartilage cricoïde</strong> (en bague à chaton postérieur, seul anneau complet des voies aériennes, à la hauteur de C6 ; repère de la membrane crico-thyroïdienne entre thyroïde et cricoïde, lieu de la cricothyroïdotomie d'urgence) ; l'<strong>épiglotte</strong> (lame élastique en feuille, fixée à l'angle du thyroïde par son pied, libre en haut derrière la langue ; bascule en arrière lors de la déglutition pour couvrir l'entrée du larynx).</li>
<li><strong>Trois pairs</strong> : les <strong>cartilages aryténoïdes</strong> (pyramidaux, posés sur le bord supérieur du chaton cricoïdien ; apex, base avec le <strong>processus vocal</strong> (antérieur, insertion de la corde vocale) et le <strong>processus musculaire</strong> (latéral, insertion des muscles crico-aryténoïdiens) ; leurs mouvements de rotation et de glissement ouvrent et ferment la glotte) ; les petits cartilages <strong>corniculés</strong> (sommet des aryténoïdes) et <strong>cunéiformes</strong> (dans les plis ary-épiglottiques).</li>
</ul>
<p>Articulations : <strong>crico-thyroïdiennes</strong> (bascule du thyroïde sur le cricoïde : tension des cordes) et <strong>crico-aryténoïdiennes</strong> (synoviales : abduction-adduction des cordes). Membranes : thyro-hyoïdienne (traversée par le nerf laryngé supérieur et l'artère laryngée supérieure), crico-thyroïdienne (médiane), membrane quadrangulaire et <strong>cône élastique</strong> (dont le bord supérieur libre forme le <strong>ligament vocal</strong>).</p>
<h4>Configuration interne</h4>
<p>Trois étages : l'<strong>étage supra-glottique</strong> (vestibule, de l'entrée du larynx — épiglotte, plis ary-épiglottiques, aryténoïdes — aux plis vestibulaires ou « fausses cordes vocales »), la <strong>glotte</strong> (les deux <strong>plis vocaux</strong> ou cordes vocales — ligament vocal recouvert du muscle vocal et d'une muqueuse malpighienne blanche nacrée, 2 cm chez l'homme, 1,5 cm chez la femme — délimitant la <strong>fente glottique</strong>, partie la plus étroite du larynx adulte, triangulaire à l'inspiration, fermée à la phonation ; entre pli vestibulaire et pli vocal, le <strong>ventricule</strong> laryngé), et l'<strong>étage sous-glottique</strong> (jusqu'au cricoïde ; chez l'enfant, c'est la zone la plus étroite : laryngite sous-glottique).</p>
<h4>Les muscles intrinsèques</h4>
<table>
<thead><tr><th>Muscle</th><th>Action</th><th>Innervation</th></tr></thead>
<tbody>
<tr><td><strong>Crico-aryténoïdien postérieur</strong></td><td><strong>Seul abducteur</strong> des cordes vocales (ouvre la glotte : respiration)</td><td>Laryngé récurrent</td></tr>
<tr><td>Crico-aryténoïdien latéral</td><td>Adducteur (ferme la glotte)</td><td>Laryngé récurrent</td></tr>
<tr><td>Aryténoïdiens transverse et oblique</td><td>Adducteurs (rapprochent les aryténoïdes)</td><td>Laryngé récurrent</td></tr>
<tr><td>Thyro-aryténoïdien et <strong>muscle vocal</strong></td><td>Relâchent et épaississent la corde (graves), adduction</td><td>Laryngé récurrent</td></tr>
<tr><td><strong>Crico-thyroïdien</strong></td><td>Tenseur des cordes vocales (aigus) par bascule du thyroïde</td><td><strong>Laryngé supérieur</strong> (branche externe)</td></tr>
</tbody>
</table>
<p><strong>Innervation</strong> : tous les muscles par le <strong>nerf laryngé récurrent</strong> (X) sauf le crico-thyroïdien (laryngé supérieur, branche externe) ; sensibilité au-dessus des cordes par le laryngé supérieur (branche interne : réflexe de toux, fausses routes), au-dessous par le récurrent. <strong>Vascularisation</strong> : artères laryngées supérieure (thyroïdienne supérieure) et inférieure (thyroïdienne inférieure). <strong>Lymphatiques</strong> : la glotte en est presque dépourvue (cancer glottique de bon pronostic), l'étage supra-glottique est richement drainé vers les nœuds jugulaires.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>paralysie récurrentielle unilatérale</strong> (thyroïdectomie, cancer de l'œsophage ou de l'apex pulmonaire, anévrisme de l'arc) donne une <strong>dysphonie</strong> (voix bitonale, corde en position paramédiane) ; la paralysie <strong>bilatérale</strong> ferme la glotte (dyspnée aiguë, trachéotomie). L'<strong>intubation</strong> expose les cordes vocales et la fente glottique ; l'<strong>obstruction laryngée</strong> (œdème de Quincke, corps étranger, épiglottite) impose la cricothyroïdotomie par la membrane crico-thyroïdienne (sous-cutanée, avasculaire). La <strong>trachéotomie</strong> se fait sous l'isthme thyroïdien (2<sup>e</sup>–3<sup>e</sup> anneau).</div>`
            },
            {
              titre: "Le pharynx",
              contenu: `<p>Le <strong>pharynx</strong> est un conduit musculo-membraneux en entonnoir de <strong>12 à 14 cm</strong>, tendu de la base du crâne (tubercule pharyngien de l'occipital) à C6 (bord inférieur du cricoïde), où il se continue par l'<strong>œsophage</strong>. Il est ouvert en avant sur les cavités nasales, la bouche et le larynx, fermé en arrière (en avant de la colonne et des muscles prévertébraux, séparé par l'espace rétro-pharyngé). C'est le <strong>carrefour aéro-digestif</strong>.</p>
<table>
<thead><tr><th>Étage</th><th>Limites</th><th>Communications et contenu</th></tr></thead>
<tbody>
<tr><td><strong>Nasopharynx</strong> (rhinopharynx, cavum)</td><td>De la base du crâne au voile du palais ; purement respiratoire</td><td>En avant : <strong>choanes</strong> ; latéralement : <strong>ostium pharyngien de la trompe auditive</strong> (d'Eustache, en regard du cornet inférieur, entouré du torus tubaire et de l'amygdale tubaire) ; en haut et en arrière : <strong>amygdale pharyngienne</strong> (végétations adénoïdes, hypertrophiées chez l'enfant : obstruction nasale, otites séreuses) ; récessus pharyngien (fossette de Rosenmüller : cancer du cavum)</td></tr>
<tr><td><strong>Oropharynx</strong></td><td>Du voile du palais à l'os hyoïde (bord supérieur de l'épiglotte)</td><td>En avant : <strong>isthme du gosier</strong> (voile, arcs palato-glosse et palato-pharyngien, base de la langue) ; latéralement : <strong>amygdales palatines</strong> dans les fosses amygdaliennes entre les deux arcs (rapport avec la carotide externe et ses branches : hémorragie d'amygdalectomie) ; <strong>anneau lymphatique de Waldeyer</strong> (amygdales pharyngienne, tubaires, palatines, linguale) ; vallécules épiglottiques</td></tr>
<tr><td><strong>Laryngopharynx</strong> (hypopharynx)</td><td>De l'os hyoïde au cricoïde (C6)</td><td>En avant : <strong>entrée du larynx</strong> et face postérieure du larynx ; latéralement : <strong>récessus piriformes</strong> (sinus piriformes, de part et d'autre du larynx, où glisse le bol alimentaire ; nerf laryngé supérieur sous la muqueuse ; corps étrangers, cancers) ; en bas : bouche de l'œsophage (sphincter supérieur, muscle crico-pharyngien : « bouche de Killian », siège du diverticule de Zenker en arrière)</td></tr>
</tbody>
</table>
<h4>Les muscles du pharynx</h4>
<p>La paroi comprend une muqueuse, un fascia pharyngo-basilaire (fixant le pharynx à la base du crâne) et deux couches musculaires striées :</p>
<ul>
<li>Les trois <strong>muscles constricteurs</strong> (supérieur, moyen inséré sur l'hyoïde, inférieur inséré sur les cartilages thyroïde et cricoïde) : imbriqués en tuiles, se rejoignant sur le <strong>raphé pharyngien</strong> postérieur ; ils propulsent le bol alimentaire (péristaltisme pharyngé). Entre le constricteur inférieur et le crico-pharyngien, la zone de faiblesse de Killian.</li>
<li>Les trois <strong>muscles élévateurs</strong> longitudinaux : <strong>stylo-pharyngien</strong> (IX), <strong>palato-pharyngien</strong> et <strong>salpingo-pharyngien</strong> : élèvent le pharynx et le larynx lors de la déglutition.</li>
</ul>
<p><strong>Innervation</strong> : <strong>plexus pharyngien</strong> (X moteur pour tous les muscles sauf le stylo-pharyngien (IX) et le tenseur du voile (V3) ; IX sensitif pour l'oropharynx ; V2 pour le nasopharynx ; X pour le laryngopharynx). <strong>Vascularisation</strong> : artère pharyngienne ascendante, palatine ascendante, thyroïdienne supérieure. <strong>Lymphatiques</strong> : nœuds rétro-pharyngiens et jugulaires profonds.</p>
<h4>La déglutition</h4>
<p>Trois temps : <strong>buccal</strong> (volontaire : langue, XII), <strong>pharyngé</strong> (réflexe, 1 seconde : fermeture du voile — nasopharynx —, élévation du larynx et de l'hyoïde par les supra-hyoïdiens, bascule de l'épiglotte, fermeture de la glotte, apnée, contraction des constricteurs, ouverture du sphincter supérieur de l'œsophage) et <strong>œsophagien</strong> (péristaltisme). Centre bulbaire ; afférences IX et X ; efférences V3, VII, IX, X, XII.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les <strong>fausses routes</strong> (troubles de déglutition neurologiques, AVC bulbaire) résultent d'un défaut de protection laryngée (laryngé supérieur, X). Le <strong>phlegmon péri-amygdalien</strong> et l'<strong>abcès rétro-pharyngé</strong> menacent les voies aériennes et le médiastin. L'<strong>otite séreuse</strong> de l'enfant est liée à l'obstruction tubaire par les végétations. Le cancer du cavum se révèle souvent par une adénopathie cervicale haute ou une otite unilatérale.</div>`
            },
            {
              titre: "La glande thyroïde et les parathyroïdes",
              contenu: `<h4>La thyroïde</h4>
<p>Glande endocrine impaire de <strong>20 à 30 g</strong> (la plus volumineuse glande endocrine), brun rougeâtre, en forme de papillon ou de H, située dans la région infra-hyoïdienne, en avant de la trachée et du larynx, en regard de <strong>C5–T1</strong>. Elle comprend deux <strong>lobes</strong> latéraux (5 × 3 × 2 cm, pyramidaux à sommet supérieur, allant du milieu du cartilage thyroïde au 5<sup>e</sup>–6<sup>e</sup> anneau trachéal), réunis par l'<strong>isthme</strong> (en avant des 2<sup>e</sup> et 3<sup>e</sup> anneaux trachéaux, sous le cricoïde) d'où monte souvent un <strong>lobe pyramidal</strong> (vestige du tractus thyréoglosse). Elle est entourée de sa capsule propre et de la gaine viscérale (lame prétrachéale), qui la fixe à la trachée et au cricoïde (ligaments de Gruber) : elle <strong>monte à la déglutition</strong>, signe clinique différentiel des masses cervicales.</p>
<h4>Rapports</h4>
<ul>
<li><strong>En avant</strong> : muscles infra-hyoïdiens (sterno-thyroïdien au contact), lame superficielle, SCM, peau. Elle n'est palpable que si elle augmente de volume (goitre).</li>
<li><strong>Face médiale (postéro-médiale)</strong> : larynx (cartilage thyroïde, cricoïde), <strong>trachée</strong>, <strong>œsophage</strong> (à gauche surtout, dysphagie des gros goitres), <strong>nerf laryngé récurrent</strong> dans l'angle trachéo-œsophagien (étroitement lié à l'artère thyroïdienne inférieure et au ligament de Gruber : risque chirurgical), <strong>nerf laryngé supérieur</strong> (branche externe) au pôle supérieur.</li>
<li><strong>Face postéro-latérale</strong> : <strong>gaine carotidienne</strong> (carotide commune, jugulaire interne, X), chaîne sympathique.</li>
<li><strong>Face postérieure</strong> : les <strong>glandes parathyroïdes</strong>.</li>
</ul>
<h4>Vascularisation</h4>
<p>Très riche (débit de 5 mL/g/min) : <strong>artère thyroïdienne supérieure</strong> (première branche de la <strong>carotide externe</strong>, descend vers le pôle supérieur avec la branche externe du laryngé supérieur ; donne la laryngée supérieure) et <strong>artère thyroïdienne inférieure</strong> (branche du <strong>tronc thyro-cervical</strong> de la subclavière, monte en arrière de la gaine carotidienne, se coude et abord le pôle inférieur en croisant le <strong>nerf laryngé récurrent</strong>, en avant ou en arrière de lui ; vascularise aussi les parathyroïdes) ; artère thyroïdienne ima (de l'arc aortique ou du tronc brachio-céphalique, inconstante, 10 %, médiane). Veines : <strong>thyroïdiennes supérieures et moyennes</strong> → jugulaire interne ; <strong>thyroïdiennes inférieures</strong> → veines brachio-céphaliques (plexus prétrachéal). Lymphatiques : nœuds prélaryngés (delphien), prétrachéaux, paratrachéaux (chaîne récurrentielle), jugulaires profonds et médiastinaux supérieurs. Innervation sympathique (ganglions cervicaux) et vagale (vasomotrice ; la sécrétion dépend de la TSH).</p>
<h4>Les glandes parathyroïdes</h4>
<p>Quatre petites glandes (parfois 2 à 6) ovoïdes de 5 × 3 × 1 mm et <strong>30 à 40 mg</strong>, jaune chamois, sur la face postérieure des lobes thyroïdiens, dans ou hors la capsule : les <strong>supérieures</strong> (dérivées de la 4<sup>e</sup> poche pharyngienne, position constante à la jonction des tiers supérieur et moyen, au-dessus du croisement artère inférieure–récurrent) et les <strong>inférieures</strong> (3<sup>e</sup> poche, avec le thymus, position variable, au pôle inférieur ou ectopique jusque dans le médiastin). Vascularisées par l'artère thyroïdienne inférieure. Elles sécrètent la parathormone (calcémie).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>thyroïdectomie</strong> expose à trois complications anatomiques : la <strong>paralysie récurrentielle</strong> (dysphonie unilatérale, dyspnée si bilatérale), l'<strong>hypoparathyroïdie</strong> (hypocalcémie, tétanie, par ablation ou dévascularisation des parathyroïdes) et l'<strong>hématome compressif</strong> (asphyxie : urgence). Le <strong>goitre plongeant</strong> descend dans le médiastin par la lame prétrachéale (compression trachéale). Le <strong>kyste du tractus thyréoglosse</strong> est médian, entre la base de la langue (foramen cæcum) et l'isthme. Les nodules se ponctionnent sous échographie ; les cancers papillaires se drainent vers la chaîne récurrentielle et les jugulaires.</div>`
            },
            {
              titre: "Vaisseaux, nerfs et lymphatiques du cou",
              contenu: `<h4>Les artères</h4>
<ul>
<li>L'<strong>artère carotide commune</strong> : droite née du tronc brachio-céphalique, gauche de l'arc aortique ; monte dans la gaine carotidienne, sans branche collatérale, et se divise au niveau du <strong>bord supérieur du cartilage thyroïde (C4)</strong> en carotides externe et interne. La bifurcation est dilatée en <strong>sinus carotidien</strong> (barorécepteurs, nerf de Hering du IX : massage carotidien, syncope) et porte le <strong>glomus carotidien</strong> (chémorécepteur).</li>
<li>L'<strong>artère carotide interne</strong> : sans branche au cou, monte en arrière et médialement vers le canal carotidien, destinée à l'encéphale et à l'œil.</li>
<li>L'<strong>artère carotide externe</strong> : vascularise la face et le cou ; ses branches sont détaillées au chapitre suivant (thyroïdienne supérieure, linguale, faciale, pharyngienne ascendante, occipitale, auriculaire postérieure, temporale superficielle, maxillaire).</li>
<li>L'<strong>artère subclavière</strong> : passe sur la 1<sup>re</sup> côte entre les scalènes antérieur et moyen ; branches cervicales : <strong>artère vertébrale</strong> (monte dans les foramens transversaires de C6 à C1, contourne les masses latérales de l'atlas, traverse le foramen magnum : vascularisation du tronc cérébral, du cervelet et du lobe occipital), <strong>artère thoracique interne</strong>, <strong>tronc thyro-cervical</strong> (thyroïdienne inférieure, supra-scapulaire, cervicale ascendante, cervicale transverse), tronc costo-cervical (cervicale profonde, intercostale suprême), artère dorsale de la scapula.</li>
</ul>
<h4>Les veines</h4>
<ul>
<li>La <strong>veine jugulaire interne</strong> : née au foramen jugulaire (sinus sigmoïde), descend dans la gaine carotidienne, <strong>latéralement</strong> à la carotide, reçoit les veines faciale, linguale, pharyngiennes, thyroïdiennes supérieure et moyenne, et s'unit à la subclavière en arrière de l'articulation sterno-claviculaire pour former la <strong>veine brachio-céphalique</strong> (confluent jugulo-subclavier, terminaison des conduits lymphatiques). Sa turgescence traduit l'hyperpression veineuse centrale (insuffisance cardiaque droite).</li>
<li>La <strong>veine jugulaire externe</strong> : sous-cutanée, née derrière l'angle de la mandibule (veines rétro-mandibulaire et auriculaire postérieure), croise obliquement le SCM, perfore la lame superficielle et se jette dans la subclavière ; visible chez le sujet maigre.</li>
<li>La <strong>veine jugulaire antérieure</strong>, les plexus veineux thyroïdiens, la veine vertébrale.</li>
</ul>
<h4>Le plexus cervical</h4>
<p>Formé par les rameaux antérieurs de <strong>C1 à C4</strong>, en arrière de la gaine carotidienne, sur les scalènes et l'élévateur de la scapula, sous le SCM. Branches <strong>sensitives</strong> (émergeant au bord postérieur du SCM, <strong>point d'Erb</strong> : bloc du plexus cervical superficiel) : <strong>petit occipital</strong> (C2), <strong>grand auriculaire</strong> (C2–C3 : oreille, angle de la mandibule, parotide), <strong>transverse du cou</strong> (C2–C3 : région cervicale antérieure), <strong>supra-claviculaires</strong> (C3–C4 : épaule, peau de la région claviculaire et du 2<sup>e</sup> espace intercostal). Branches <strong>motrices</strong> : <strong>anse cervicale</strong> (infra-hyoïdiens), rameaux pour les prévertébraux, les scalènes, l'élévateur de la scapula, et surtout le <strong>nerf phrénique</strong> (C3–C4–C5), qui descend sur la face antérieure du scalène antérieur, entre la subclavière (en arrière) et la veine subclavière (en avant), vers le médiastin. Le plexus donne aussi des rameaux au XI (SCM, trapèze) et le <strong>grand occipital</strong> (rameau postérieur de C2 : nuque et cuir chevelu, névralgie d'Arnold).</p>
<h4>Les nœuds lymphatiques cervicaux</h4>
<p>Environ <strong>300 nœuds</strong> (un tiers des nœuds du corps). Groupes superficiels : <strong>submentaux</strong>, <strong>submandibulaires</strong> (lèvres, cavité buccale, face), <strong>parotidiens</strong>, <strong>mastoïdiens</strong>, <strong>occipitaux</strong>, <strong>jugulaires externes</strong>. Groupes profonds : la <strong>chaîne jugulaire interne</strong> (nœuds jugulo-digastrique sous l'angle de la mandibule, drainant l'amygdale et la langue ; jugulo-omo-hyoïdien), la <strong>chaîne du nerf accessoire</strong> (triangle postérieur), la <strong>chaîne cervicale transverse</strong> (supra-claviculaire : le nœud de Troisier, à gauche, est le relais des cancers digestifs via le conduit thoracique), les nœuds <strong>rétro-pharyngiens</strong>, <strong>prélaryngés, pré- et para-trachéaux</strong> (thyroïde). Les chirurgiens les classent en six <strong>secteurs</strong> (niveaux I à VI). Toute la lymphe aboutit au <strong>tronc jugulaire</strong> et au confluent jugulo-subclavier.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> bifurcation carotidienne en C4 (bord supérieur du cartilage thyroïde) ; la carotide interne ne donne aucune branche au cou ; l'artère vertébrale entre dans le foramen transversaire de C6 ; dans la gaine : artère médiale, veine latérale, X en arrière ; le phrénique descend devant le scalène antérieur ; le nœud de Troisier signe une métastase sus-claviculaire gauche.</div>`
            }
          ],
          points_cles: [
            "Le SCM divise le cou en triangle antérieur (submandibulaire, carotidien, musculaire) et triangle postérieur (occipital, omo-claviculaire) ; trois lames du fascia cervical (superficielle, prétrachéale, prévertébrale) ; gaine carotidienne ; espace rétro-pharyngé vers le médiastin.",
            "SCM (XI) : rotation controlatérale et inclinaison homolatérale ; supra-hyoïdiens (digastrique V3/VII, mylo-hyoïdien V3, génio-hyoïdien C1, stylo-hyoïdien VII) élèvent l'hyoïde ; infra-hyoïdiens (anse cervicale) l'abaissent ; scalènes inspirateurs.",
            "Devant le scalène antérieur : veine subclavière et nerf phrénique ; derrière : artère subclavière et plexus brachial (défilé interscalénique).",
            "Larynx (C3–C6) : cartilages thyroïde, cricoïde (seul anneau complet, C6), épiglotte, aryténoïdes (processus vocal et musculaire) ; trois étages ; cordes vocales ; cricothyroïdotomie par la membrane crico-thyroïdienne.",
            "Tous les muscles intrinsèques du larynx sont innervés par le laryngé récurrent sauf le crico-thyroïdien (laryngé supérieur) ; le crico-aryténoïdien postérieur est le seul abducteur ; paralysie récurrentielle bilatérale = dyspnée.",
            "Pharynx (12–14 cm, base du crâne à C6) : nasopharynx (choanes, trompe auditive, végétations), oropharynx (amygdales palatines, anneau de Waldeyer), laryngopharynx (récessus piriformes, bouche de Killian) ; trois constricteurs et trois élévateurs ; plexus pharyngien (X, IX).",
            "Thyroïde (20–30 g, C5–T1) : deux lobes et un isthme sur les 2e–3e anneaux, monte à la déglutition ; artères thyroïdiennes supérieure (carotide externe) et inférieure (tronc thyro-cervical, croise le récurrent) ; parathyroïdes (4, face postérieure, 30–40 mg).",
            "Complications de la thyroïdectomie : paralysie récurrentielle, hypoparathyroïdie, hématome compressif.",
            "Carotide commune bifurquée en C4 (sinus et glomus carotidiens) ; carotide interne sans branche cervicale ; artère vertébrale dans les foramens transversaires de C6 à C1 ; jugulaire interne latérale à la carotide, confluent jugulo-subclavier.",
            "Plexus cervical C1–C4 : branches sensitives au point d'Erb (petit occipital, grand auriculaire, transverse du cou, supra-claviculaires), anse cervicale, nerf phrénique (C3–C5) ; 300 nœuds cervicaux, nœud de Troisier sus-claviculaire gauche."
          ],
          lexique: [
            { terme: "Triangle carotidien", def: "Subdivision du triangle antérieur du cou (SCM, digastrique, omo-hyoïdien) contenant la bifurcation carotidienne, la jugulaire interne, les nerfs X et XII." },
            { terme: "Gaine carotidienne", def: "Gaine fasciale contenant l'artère carotide (médiale), la veine jugulaire interne (latérale) et le nerf vague (en arrière)." },
            { terme: "Anse cervicale", def: "Arc nerveux formé par C1 (via le XII) et C2–C3, innervant les muscles infra-hyoïdiens." },
            { terme: "Défilé interscalénique", def: "Espace entre scalènes antérieur et moyen, sur la 1re côte, traversé par l'artère subclavière et le plexus brachial." },
            { terme: "Cartilage cricoïde", def: "Cartilage en bague du larynx, seul anneau complet des voies aériennes, en regard de C6, repère de la trachée." },
            { terme: "Processus vocal", def: "Saillie antérieure de la base de l'aryténoïde où s'insère le ligament vocal." },
            { terme: "Récessus piriforme", def: "Gouttière du laryngopharynx de part et d'autre du larynx, où glissent les aliments et se bloquent les corps étrangers." },
            { terme: "Anneau de Waldeyer", def: "Ensemble du tissu lymphoïde pharyngé : amygdales pharyngienne, tubaires, palatines et linguale." },
            { terme: "Nerf laryngé supérieur", def: "Branche du X dont le rameau interne est sensitif pour le larynx sus-glottique et le rameau externe moteur pour le crico-thyroïdien." },
            { terme: "Nœud de Troisier", def: "Nœud lymphatique sus-claviculaire gauche, relais métastatique des cancers digestifs par le conduit thoracique." }
          ],
          qcm: [
            {
              q: "Concernant les régions et fascias du cou, quelles propositions sont exactes ?",
              options: [
                "A. Le triangle postérieur du cou est limité par le SCM, le trapèze et la clavicule.",
                "B. La gaine carotidienne contient la carotide, la jugulaire interne et le nerf vague.",
                "C. La veine jugulaire interne est médiale par rapport à la carotide dans la gaine.",
                "D. La lame prétrachéale du fascia cervical se prolonge dans le médiastin.",
                "E. L'espace rétro-pharyngé s'étend de la base du crâne au médiastin."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la jugulaire interne est latérale à la carotide."
            },
            {
              q: "Concernant les muscles du cou, quelles propositions sont exactes ?",
              options: [
                "A. Le SCM tourne la tête du côté opposé à sa contraction.",
                "B. Le SCM est innervé par le nerf accessoire.",
                "C. Les muscles infra-hyoïdiens sont innervés par l'anse cervicale.",
                "D. Le nerf phrénique descend en arrière du scalène antérieur.",
                "E. Le ventre antérieur du digastrique est innervé par le nerf facial."
              ],
              bonnes: [0, 1, 2],
              explication: "A, B et C sont vraies. D est fausse : le phrénique descend sur la face antérieure du scalène antérieur. E est fausse : le ventre antérieur dépend du V3 (nerf mylo-hyoïdien), le ventre postérieur du VII."
            },
            {
              q: "Concernant le larynx, quelles propositions sont exactes ?",
              options: [
                "A. Le cartilage cricoïde est le seul anneau complet des voies aériennes.",
                "B. Les cordes vocales s'insèrent sur le processus vocal des aryténoïdes.",
                "C. Le crico-aryténoïdien postérieur est le seul muscle abducteur des cordes vocales.",
                "D. Le crico-thyroïdien est innervé par le nerf laryngé récurrent.",
                "E. La sensibilité du larynx au-dessus des cordes vocales dépend du nerf laryngé supérieur."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : le crico-thyroïdien est le seul muscle intrinsèque innervé par le laryngé supérieur (branche externe)."
            },
            {
              q: "Concernant le pharynx, quelles propositions sont exactes ?",
              options: [
                "A. Le pharynx s'étend de la base du crâne à C6.",
                "B. La trompe auditive s'ouvre dans l'oropharynx.",
                "C. Les amygdales palatines sont situées entre les arcs palato-glosse et palato-pharyngien.",
                "D. Les récessus piriformes appartiennent au laryngopharynx.",
                "E. Le stylo-pharyngien est innervé par le nerf glosso-pharyngien."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : l'ostium pharyngien de la trompe auditive s'ouvre dans le nasopharynx."
            },
            {
              q: "Concernant la glande thyroïde, quelles propositions sont exactes ?",
              options: [
                "A. L'isthme thyroïdien est situé en avant des 2e et 3e anneaux trachéaux.",
                "B. L'artère thyroïdienne supérieure naît de la carotide interne.",
                "C. L'artère thyroïdienne inférieure croise le nerf laryngé récurrent.",
                "D. La thyroïde monte lors de la déglutition.",
                "E. Les veines thyroïdiennes inférieures se jettent dans les veines brachio-céphaliques."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la thyroïdienne supérieure est la première branche de la carotide externe ; la carotide interne n'a pas de branche au cou."
            },
            {
              q: "Concernant les parathyroïdes et la chirurgie thyroïdienne, quelles propositions sont exactes ?",
              options: [
                "A. Il existe habituellement quatre glandes parathyroïdes.",
                "B. Les parathyroïdes sont situées sur la face antérieure des lobes thyroïdiens.",
                "C. Les parathyroïdes inférieures ont une position plus variable que les supérieures.",
                "D. La thyroïdectomie expose à une hypocalcémie.",
                "E. La paralysie récurrentielle bilatérale entraîne une dysphonie isolée sans dyspnée."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : les parathyroïdes sont sur la face postérieure des lobes. E est fausse : la paralysie bilatérale ferme la glotte et provoque une dyspnée aiguë."
            },
            {
              q: "Concernant les vaisseaux et nerfs du cou, quelles propositions sont exactes ?",
              options: [
                "A. La carotide commune se divise au niveau du bord supérieur du cartilage thyroïde (C4).",
                "B. La carotide interne donne plusieurs branches au cou.",
                "C. L'artère vertébrale pénètre dans le foramen transversaire de C6.",
                "D. Le plexus cervical est formé par les rameaux antérieurs de C1 à C4.",
                "E. Le nœud de Troisier est un nœud sus-claviculaire gauche."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la carotide interne ne donne aucune branche collatérale au cou."
            }
          ]
        },
        {
          id: "vascularisation-tete-cou",
          titre: "Vascularisation de la tête et du cou",
          duree: 45,
          objectifs: [
            "Décrire l'artère carotide externe et ses huit branches avec leurs territoires.",
            "Décrire le trajet de l'artère carotide interne (segments) et ses branches, et l'artère vertébrale.",
            "Décrire le cercle artériel du cerveau (polygone de Willis) et les territoires des artères cérébrales.",
            "Décrire les sinus veineux de la dure-mère et le drainage veineux de la face et du cou.",
            "Décrire le drainage lymphatique de la tête et du cou et ses applications."
          ],
          sections: [
            {
              titre: "L'artère carotide externe",
              contenu: `<p>L'<strong>artère carotide externe</strong> naît de la bifurcation carotidienne en <strong>C4</strong>, d'abord antéro-médiale à la carotide interne, puis elle la croise en avant pour devenir latérale, monte dans le triangle carotidien, passe en profondeur du ventre postérieur du digastrique et du stylo-hyoïdien, pénètre la <strong>glande parotide</strong> et se termine en arrière du col de la mandibule en deux branches terminales. Elle vascularise le cou, la face, le cuir chevelu, les cavités nasale et buccale, et les méninges. Ses <strong>huit branches</strong> :</p>
<table>
<thead><tr><th>Branche</th><th>Origine / trajet</th><th>Territoire</th></tr></thead>
<tbody>
<tr><td><strong>Thyroïdienne supérieure</strong> (antérieure)</td><td>Première branche, descend vers le pôle supérieur de la thyroïde</td><td>Thyroïde, larynx (artère laryngée supérieure), infra-hyoïdiens, SCM</td></tr>
<tr><td><strong>Linguale</strong> (antérieure)</td><td>Au niveau de la grande corne de l'hyoïde, passe sous l'hyo-glosse (croisée par le XII), dans le plancher buccal</td><td>Langue (artère profonde de la langue), plancher, glande sublinguale ; hémorragie des plaies de la langue</td></tr>
<tr><td><strong>Faciale</strong> (antérieure)</td><td>Au-dessus de la linguale, passe sous le digastrique, dans une gouttière de la glande submandibulaire, croise le bord inférieur de la mandibule en avant du masséter (pouls facial), monte sinueuse vers l'angle de l'œil (artère angulaire)</td><td>Palais (palatine ascendante), amygdale, glande submandibulaire, lèvres (labiales supérieure et inférieure), nez, joue ; anastomose avec l'ophtalmique (angulaire : voie de thrombophlébite vers le sinus caverneux)</td></tr>
<tr><td><strong>Pharyngienne ascendante</strong> (médiale)</td><td>Grêle, monte entre carotide interne et pharynx</td><td>Pharynx, méninges (postérieures), oreille moyenne</td></tr>
<tr><td><strong>Occipitale</strong> (postérieure)</td><td>Passe sous le digastrique, longe le rocher, croise le XI</td><td>Cuir chevelu occipital, muscles de la nuque, méninges</td></tr>
<tr><td><strong>Auriculaire postérieure</strong> (postérieure)</td><td>Entre mastoïde et conque</td><td>Pavillon, cuir chevelu rétro-auriculaire, oreille moyenne (artère stylo-mastoïdienne)</td></tr>
<tr><td><strong>Temporale superficielle</strong> (terminale)</td><td>Monte en avant du tragus (pouls temporal, biopsie de l'artérite de Horton), au-dessus de l'arcade zygomatique, se divise en rameaux frontal et pariétal</td><td>Cuir chevelu temporal et frontal, parotide, ATM, muscle temporal (temporales profondes via la maxillaire), face (transverse de la face)</td></tr>
<tr><td><strong>Maxillaire</strong> (terminale, la plus volumineuse)</td><td>Horizontale dans la fosse infra-temporale (segments mandibulaire, ptérygoïdien, ptérygo-palatin), se termine dans la fosse ptérygo-palatine</td><td>1er segment : <strong>artère méningée moyenne</strong> (foramen épineux, dure-mère), alvéolaire inférieure (dents inférieures), tympanique ; 2e segment : masticateurs, buccale ; 3e segment : alvéolaires supérieures, infra-orbitaire, palatine descendante, <strong>sphéno-palatine</strong> (artère principale des cavités nasales : épistaxis)</td></tr>
</tbody>
</table>
<p>Mnémotechnique des branches, de bas en haut : « <em>Thierry Lance Face Pharyngée Occipitale Au Temps Maximal</em> ». Les anastomoses entre les deux carotides externes (lèvres, nez, cuir chevelu) et avec la carotide interne (ophtalmique via l'angulaire et la faciale) sont riches : la ligature d'une carotide externe est bien tolérée.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>épistaxis grave</strong> est traitée par embolisation ou ligature de l'artère sphéno-palatine (maxillaire). L'<strong>artérite à cellules géantes</strong> (Horton) se diagnostique par biopsie de l'artère temporale superficielle (céphalées temporales, risque de cécité par atteinte de l'ophtalmique). L'<strong>hématome extra-dural</strong> résulte de la rupture de l'artère méningée moyenne au ptérion. Les plaies du cuir chevelu saignent abondamment (riches anastomoses, vaisseaux maintenus ouverts par la galéa).</div>`
            },
            {
              titre: "L'artère carotide interne et l'artère vertébrale",
              contenu: `<h4>L'artère carotide interne</h4>
<p>Née de la bifurcation en C4 par un renflement (sinus carotidien), elle ne donne <strong>aucune branche au cou</strong>. On lui décrit quatre segments :</p>
<ol>
<li><strong>Segment cervical</strong> : monte en arrière et médialement à la carotide externe, dans la gaine carotidienne, en avant des processus transverses, en arrière du pharynx (paroi latérale, en dehors de l'amygdale), avec le X, le IX, le XI et le XII qui la croisent, et le sympathique cervical en arrière, jusqu'au canal carotidien.</li>
<li><strong>Segment pétreux</strong> : dans le <strong>canal carotidien</strong> du rocher (vertical puis horizontal, en avant de l'oreille moyenne et de la cochlée), sort au-dessus du foramen déchiré ; donne de petites artères carotico-tympaniques.</li>
<li><strong>Segment caverneux</strong> : traverse le <strong>sinus caverneux</strong> en S (siphon carotidien), en dedans du nerf VI, sous les nerfs III, IV, V1 et V2 de la paroi latérale ; donne des branches hypophysaires et méningées.</li>
<li><strong>Segment cérébral</strong> (supra-clinoïdien) : perfore la dure-mère en dedans du processus clinoïde antérieur, sous le nerf optique, et donne : l'<strong>artère ophtalmique</strong> (canal optique, sous le nerf II : artère centrale de la rétine, ciliaires, lacrymale, ethmoïdales, supra-orbitaire ; anastomoses avec la carotide externe), l'<strong>artère communicante postérieure</strong> (vers la cérébrale postérieure ; anévrisme comprimant le III), l'<strong>artère choroïdienne antérieure</strong> (plexus choroïdes, capsule interne), puis se termine en <strong>artère cérébrale antérieure</strong> et <strong>artère cérébrale moyenne</strong> (sa branche la plus volumineuse, continuation directe).</li>
</ol>
<h4>L'artère vertébrale</h4>
<p>Première branche de l'<strong>artère subclavière</strong>, elle monte en arrière de la carotide commune, pénètre le <strong>foramen transversaire de C6</strong>, traverse ceux de C6 à C1 (segment transversaire, entourée du plexus veineux et sympathique vertébral), contourne la masse latérale de l'atlas dans le sillon de l'arc postérieur (triangle sub-occipital), perfore la membrane atlanto-occipitale postérieure et la dure-mère, traverse le <strong>foramen magnum</strong> et, sur la face antérieure de la moelle allongée, s'unit à son homologue au bord inférieur du pont pour former le <strong>tronc basilaire</strong>. Branches : spinales, méningées, <strong>artère spinale antérieure</strong> (unique, formée par deux racines), <strong>artères spinales postérieures</strong>, <strong>artère cérébelleuse inférieure postérieure</strong> (PICA : cervelet inférieur, moelle allongée latérale — syndrome de Wallenberg). Le <strong>tronc basilaire</strong> (3 cm, dans le sillon basilaire du pont) donne l'artère cérébelleuse inférieure antérieure (AICA, avec l'artère labyrinthique), les artères pontiques, l'artère cérébelleuse supérieure et se termine en deux <strong>artères cérébrales postérieures</strong>. Le système vertébro-basilaire assure 20 % du débit cérébral (tronc, cervelet, lobes occipitaux, face inférieure des lobes temporaux, thalamus).</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> l'artère vertébrale n'emprunte pas le foramen transversaire de C7 (elle entre en C6) ; la carotide interne n'a pas de branche cervicale mais donne l'ophtalmique dans le crâne (l'œil est vascularisé par la carotide interne, la face par l'externe) ; l'artère cérébrale moyenne est la branche terminale la plus volumineuse de la carotide interne et la plus souvent touchée par les AVC ischémiques.</div>`
            },
            {
              titre: "Le cercle artériel du cerveau (polygone de Willis) et les artères cérébrales",
              contenu: `<p>Le <strong>cercle artériel du cerveau</strong> est une anastomose heptagonale située à la base de l'encéphale, dans l'espace subarachnoïdien de la citerne interpédonculaire, autour du chiasma optique, de la tige pituitaire et des corps mamillaires. Il unit les deux systèmes carotidiens et le système vertébro-basilaire et permet des suppléances en cas d'occlusion d'un axe (il est complet et symétrique dans seulement 20–30 % des cas). Il est formé :</p>
<ul>
<li>en avant, par les deux <strong>artères cérébrales antérieures</strong> (segments A1) unies par l'<strong>artère communicante antérieure</strong> (site le plus fréquent des anévrismes intracrâniens, 30–35 %) ;</li>
<li>latéralement, par les <strong>carotides internes</strong> et les <strong>artères communicantes postérieures</strong> ;</li>
<li>en arrière, par les deux <strong>artères cérébrales postérieures</strong> (segments P1) issues du tronc basilaire.</li>
</ul>
<p>Les artères cérébrales moyennes ne font pas partie du cercle mais en partent. De la face profonde du cercle naissent de nombreuses <strong>artères perforantes</strong> (centrales) pour les noyaux gris, le thalamus et la capsule interne.</p>
<table>
<thead><tr><th>Artère</th><th>Trajet</th><th>Territoire cortical</th><th>Territoire profond</th><th>Syndrome d'occlusion</th></tr></thead>
<tbody>
<tr><td><strong>Cérébrale antérieure</strong></td><td>Au-dessus du nerf optique, dans la fissure longitudinale, contourne le corps calleux (péricalleuse)</td><td>Face médiale des lobes frontal et pariétal (lobule paracentral : aire motrice et sensitive du membre inférieur), bord supérieur de la convexité, corps calleux</td><td>Tête du noyau caudé, partie antérieure de la capsule interne (artère récurrente de Heubner)</td><td>Hémiplégie et hypoesthésie controlatérales à prédominance <strong>crurale</strong>, syndrome frontal, mutisme, incontinence</td></tr>
<tr><td><strong>Cérébrale moyenne</strong> (sylvienne)</td><td>Latéralement dans la fosse latérale, puis dans le sillon latéral (sylvien), sur l'insula</td><td>La plus grande partie de la face latérale de l'hémisphère : aires motrice et sensitive de la face et du membre supérieur, aires du langage (Broca, Wernicke, à gauche), lobe temporal latéral, radiations optiques</td><td>Artères lenticulo-striées : noyau lenticulaire, capsule interne (faisceau pyramidal)</td><td>Hémiplégie et hypoesthésie controlatérales à prédominance <strong>brachio-faciale</strong>, <strong>aphasie</strong> (hémisphère gauche) ou héminégligence (droit), hémianopsie latérale homonyme, déviation de la tête et des yeux vers la lésion ; infarctus profond : hémiplégie proportionnelle</td></tr>
<tr><td><strong>Cérébrale postérieure</strong></td><td>Contourne le mésencéphale (au-dessus du III et de la tente), vers la face médiale du lobe occipital</td><td>Lobe occipital (cortex visuel), face inférieure et médiale du lobe temporal (hippocampe)</td><td>Thalamus, mésencéphale, plexus choroïdes</td><td><strong>Hémianopsie latérale homonyme</strong> controlatérale (épargne maculaire), alexie, troubles mnésiques ; syndrome thalamique</td></tr>
</tbody>
</table>
<p>Le <strong>débit sanguin cérébral</strong> est d'environ 750 mL/min (15 % du débit cardiaque, 50 mL/100 g/min), autorégulé entre 60 et 150 mmHg de pression artérielle moyenne. L'encéphale ne supporte pas plus de quelques minutes d'anoxie. Les <strong>artères méningées</strong> (méningée moyenne surtout) vascularisent la dure-mère et l'os, non le cerveau.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>AVC ischémique</strong> (80 % des AVC) touche le plus souvent le territoire de la cérébrale moyenne (hémiplégie brachio-faciale, aphasie) : thrombolyse et thrombectomie dans les premières heures. L'<strong>hémorragie méningée</strong> (céphalée en coup de tonnerre, syndrome méningé) résulte de la rupture d'un anévrisme du cercle artériel (communicante antérieure, carotide interne/communicante postérieure, bifurcation sylvienne). Les <strong>lacunes</strong> (petits infarctus profonds) touchent les perforantes des hypertendus. L'<strong>infarctus du tronc basilaire</strong> est gravissime (locked-in syndrome, coma).</div>`
            },
            {
              titre: "Les sinus veineux de la dure-mère",
              contenu: `<p>Le sang veineux de l'encéphale est collecté par des <strong>veines cérébrales</strong> (superficielles et profondes, sans valvules ni paroi musculaire) qui se jettent dans les <strong>sinus veineux de la dure-mère</strong> : canaux à paroi dure-mérienne, tapissés d'endothélium, situés entre les deux feuillets de la dure-mère, incompressibles et sans valvules, drainant aussi les méninges et l'os (veines diploïques, veines émissaires reliées au cuir chevelu).</p>
<table>
<thead><tr><th>Sinus</th><th>Situation</th><th>Reçoit</th><th>Se draine dans</th></tr></thead>
<tbody>
<tr><td><strong>Sagittal supérieur</strong></td><td>Bord convexe de la faux du cerveau, du foramen cæcum au confluent</td><td>Veines cérébrales supérieures, granulations arachnoïdiennes (résorption du LCS dans les lacunes latérales)</td><td>Confluent des sinus (pressoir d'Hérophile, sur la protubérance occipitale interne)</td></tr>
<tr><td><strong>Sagittal inférieur</strong></td><td>Bord libre de la faux</td><td>Veines de la faux et du corps calleux</td><td>Sinus droit</td></tr>
<tr><td><strong>Droit</strong></td><td>Jonction faux–tente du cervelet</td><td>Sinus sagittal inférieur, <strong>grande veine cérébrale</strong> (de Galien, drainage profond : thalamus, noyaux gris, plexus choroïdes)</td><td>Confluent des sinus</td></tr>
<tr><td><strong>Transverses</strong> (droit et gauche)</td><td>Insertion de la tente sur l'occipital (sillon du sinus transverse)</td><td>Confluent des sinus (le droit reçoit surtout le sagittal supérieur, le gauche le sinus droit), veines cérébelleuses et temporales inférieures</td><td>Sinus sigmoïdes</td></tr>
<tr><td><strong>Sigmoïdes</strong></td><td>En S sur la face interne du rocher (mastoïde) et de l'occipital</td><td>Sinus transverses, veines émissaires mastoïdiennes</td><td><strong>Foramen jugulaire → veine jugulaire interne</strong></td></tr>
<tr><td><strong>Caverneux</strong> (pairs)</td><td>De part et d'autre du corps du sphénoïde (selle turcique), de la fissure orbitaire supérieure au rocher ; traversés par la <strong>carotide interne</strong> et le <strong>VI</strong> ; paroi latérale : <strong>III, IV, V1, V2</strong></td><td><strong>Veines ophtalmiques</strong> (orbite, face via l'angulaire), sinus sphéno-pariétal, veines cérébrales moyennes superficielles, plexus ptérygoïdien (via foramens ovale et de Vésale), unis entre eux par les sinus intercaverneux (autour de l'hypophyse)</td><td>Sinus pétreux supérieur (→ transverse) et inférieur (→ jugulaire interne)</td></tr>
<tr><td><strong>Occipital, pétreux supérieur et inférieur, sphéno-pariétal</strong></td><td>Faux du cervelet, bords du rocher, petite aile</td><td>—</td><td>Confluent, transverse, jugulaire interne</td></tr>
</tbody>
</table>
<p>Le drainage est donc essentiellement <strong>jugulaire interne</strong> (sinus sigmoïde), avec des voies accessoires par les plexus veineux vertébraux (debout) et les veines émissaires. La <strong>grande veine cérébrale</strong> draine les structures profondes ; les veines superficielles (de Trolard, de Labbé) relient les sinus.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>thrombophlébite cérébrale</strong> (sinus sagittal supérieur, transverse : post-partum, contraception, infection) donne céphalées, crises convulsives, déficits ; celle du <strong>sinus caverneux</strong> (infection de la face, de l'orbite ou des sinus, par les veines ophtalmiques et angulaire) associe exophtalmie, chémosis et paralysie des III, IV, VI. L'<strong>hématome sous-dural</strong> résulte de la rupture des veines ponts entre cortex et sinus (sujet âgé, anticoagulants). La <strong>fistule carotido-caverneuse</strong> (traumatisme) donne une exophtalmie pulsatile. Les otites et mastoïdites peuvent thromboser le sinus sigmoïde.</div>`
            },
            {
              titre: "Le drainage veineux de la face et du cou",
              contenu: `<ul>
<li>La <strong>veine faciale</strong> : naît à l'angle médial de l'œil (<strong>veine angulaire</strong>, anastomosée avec les veines ophtalmiques → sinus caverneux : les furoncles de la lèvre supérieure et de l'aile du nez ne doivent pas être manipulés), descend obliquement en arrière de l'artère faciale, reçoit les veines labiales, la veine faciale profonde (du plexus ptérygoïdien), croise la mandibule et la glande submandibulaire, reçoit la veine rétro-mandibulaire (tronc thyro-linguo-facial) et se jette dans la <strong>veine jugulaire interne</strong>.</li>
<li>La <strong>veine rétro-mandibulaire</strong> : formée dans la parotide par les veines temporale superficielle et maxillaires (<strong>plexus ptérygoïdien</strong> de la fosse infra-temporale, qui draine les masticateurs, les dents, le palais, les cavités nasales, et communique avec le sinus caverneux et la veine faciale), descend en arrière de la branche mandibulaire et se divise en une branche antérieure (vers la faciale) et une branche postérieure (vers la jugulaire externe avec l'auriculaire postérieure).</li>
<li>La <strong>veine jugulaire externe</strong> : sous le platysma, croise le SCM, se jette dans la subclavière ; draine le cuir chevelu et la face latérale.</li>
<li>La <strong>veine jugulaire interne</strong> : du foramen jugulaire (bulbe supérieur) à la veine brachio-céphalique (bulbe inférieur, valvule), latérale à la carotide ; reçoit le sinus pétreux inférieur, les veines pharyngiennes, linguale, faciale, thyroïdiennes supérieure et moyenne ; principal collecteur de l'encéphale et de la face. Voie d'abord des cathéters centraux et de la mesure de la pression veineuse centrale.</li>
<li>La <strong>veine jugulaire antérieure</strong> (médiane, vers la subclavière), les <strong>veines vertébrales</strong> (plexus autour de l'artère → veine brachio-céphalique), les <strong>plexus veineux vertébraux</strong> (internes épiduraux et externes, sans valvules, reliés aux sinus et aux veines azygos : voie de métastases vers le rachis et le crâne — prostate, sein).</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> les veines de la face et de l'orbite n'ont pas de valvules et communiquent avec le sinus caverneux par la veine angulaire–ophtalmique et par le plexus ptérygoïdien : toute infection de la région centro-faciale (« triangle dangereux » lèvre–nez–angle de l'œil) peut se compliquer de thrombophlébite caverneuse.</div>`
            },
            {
              titre: "Le drainage lymphatique de la tête et du cou",
              contenu: `<p>La tête et le cou possèdent environ <strong>300 nœuds lymphatiques</strong>, organisés en un <strong>cercle péricervical</strong> superficiel à la jonction tête–cou et en <strong>chaînes verticales</strong> profondes qui convergent vers le confluent jugulo-subclavier (tronc jugulaire → conduit lymphatique droit ou conduit thoracique à gauche). Le drainage est en règle homolatéral, mais les structures médianes (lèvres, langue, plancher, voile) se drainent de façon bilatérale.</p>
<h4>Le cercle péricervical (relais de premier niveau)</h4>
<table>
<thead><tr><th>Groupe</th><th>Territoire drainé</th></tr></thead>
<tbody>
<tr><td><strong>Occipitaux</strong></td><td>Cuir chevelu occipital, nuque</td></tr>
<tr><td><strong>Mastoïdiens</strong> (rétro-auriculaires)</td><td>Cuir chevelu temporo-pariétal, face postérieure du pavillon, conduit auditif</td></tr>
<tr><td><strong>Parotidiens</strong> (superficiels et profonds)</td><td>Front, tempe, paupières, racine du nez, pavillon, oreille moyenne, parotide, joue</td></tr>
<tr><td><strong>Submandibulaires</strong></td><td>Nez, joue, lèvre supérieure, partie latérale de la lèvre inférieure, gencives, dents, bord latéral de la langue, plancher, glande submandibulaire</td></tr>
<tr><td><strong>Submentaux</strong></td><td>Menton, partie médiane de la lèvre inférieure, pointe de la langue, incisives, plancher antérieur (drainage bilatéral)</td></tr>
<tr><td><strong>Rétro-pharyngiens</strong></td><td>Nasopharynx, cavités nasales, trompe auditive, sinus</td></tr>
</tbody>
</table>
<h4>Les chaînes profondes (relais de second niveau)</h4>
<ul>
<li>La <strong>chaîne jugulaire interne</strong> (le long de la veine) : nœuds <strong>jugulo-digastriques</strong> (sous l'angle de la mandibule : amygdale palatine, base de la langue, oropharynx ; adénopathie des angines), <strong>jugulo-omo-hyoïdiens</strong> (langue), nœuds jugulaires inférieurs (larynx, thyroïde).</li>
<li>La <strong>chaîne du nerf accessoire</strong> (spinale, dans le triangle postérieur : cuir chevelu, nuque, nasopharynx).</li>
<li>La <strong>chaîne cervicale transverse</strong> (supra-claviculaire), reliant les deux précédentes : reçoit aussi la lymphe du thorax et de l'abdomen par reflux (<strong>nœud de Troisier</strong> à gauche).</li>
<li>Les nœuds <strong>prélaryngés, prétrachéaux et paratrachéaux</strong> (chaîne récurrentielle : thyroïde, larynx sous-glottique, trachée).</li>
</ul>
<p>Classification chirurgicale en <strong>six secteurs</strong> (<em>levels</em>) : I submental et submandibulaire ; II, III, IV chaîne jugulaire supérieure, moyenne, inférieure ; V triangle postérieur ; VI compartiment central (viscéral). Les <strong>curages ganglionnaires</strong> des cancers ORL s'adressent à ces secteurs selon la localisation tumorale.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> une <strong>adénopathie cervicale</strong> impose un examen complet de la cavité buccale, du pharynx, du larynx, de la thyroïde, du cuir chevelu et de la peau : chez l'adulte fumeur, une adénopathie jugulo-carotidienne dure et fixée est un cancer des voies aéro-digestives supérieures jusqu'à preuve du contraire. Les adénopathies <strong>sous-digastriques</strong> évoquent l'amygdale et la base de langue, les <strong>submandibulaires</strong> la cavité buccale, les <strong>sus-claviculaires</strong> un cancer thoracique ou digestif, les <strong>occipitales</strong> une infection du cuir chevelu ou une rubéole. Le drainage bilatéral des structures médianes impose un curage bilatéral pour les cancers de la langue mobile et du plancher antérieur.</div>`
            }
          ],
          points_cles: [
            "Carotide externe (de C4 à la parotide) : huit branches — thyroïdienne supérieure, linguale, faciale, pharyngienne ascendante, occipitale, auriculaire postérieure, temporale superficielle et maxillaire (méningée moyenne, sphéno-palatine).",
            "L'artère faciale croise la mandibule en avant du masséter et s'anastomose avec l'ophtalmique (angulaire) ; la temporale superficielle est biopsiée dans la maladie de Horton ; la sphéno-palatine est l'artère de l'épistaxis.",
            "Carotide interne : aucune branche au cou ; segments cervical, pétreux (canal carotidien), caverneux (siphon, avec le VI), cérébral (ophtalmique, communicante postérieure, choroïdienne antérieure, cérébrales antérieure et moyenne).",
            "Artère vertébrale : foramens transversaires de C6 à C1, foramen magnum, tronc basilaire (PICA, AICA, cérébelleuse supérieure, cérébrales postérieures) ; 20 % du débit cérébral.",
            "Cercle de Willis : cérébrales antérieures + communicante antérieure (anévrismes), carotides internes + communicantes postérieures, cérébrales postérieures ; complet dans 20–30 % des cas ; perforantes pour les noyaux gris.",
            "Cérébrale antérieure : face médiale, déficit crural ; cérébrale moyenne : convexité, déficit brachio-facial, aphasie, la plus touchée ; cérébrale postérieure : occipital, hémianopsie latérale homonyme.",
            "Sinus de la dure-mère : sagittal supérieur (granulations arachnoïdiennes) et droit (grande veine cérébrale) → confluent → transverses → sigmoïdes → foramen jugulaire → jugulaire interne.",
            "Sinus caverneux : traversé par la carotide interne et le VI, paroi latérale III, IV, V1, V2 ; reçoit les veines ophtalmiques et le plexus ptérygoïdien ; thrombophlébite à partir des infections de la face (triangle dangereux).",
            "Veine faciale → jugulaire interne ; rétro-mandibulaire (plexus ptérygoïdien) ; jugulaire externe → subclavière ; jugulaire interne, principal collecteur, latérale à la carotide.",
            "300 nœuds cervicaux : cercle péricervical (occipitaux, mastoïdiens, parotidiens, submandibulaires, submentaux, rétro-pharyngiens) puis chaînes jugulaire interne (jugulo-digastrique : amygdale), spinale, cervicale transverse (Troisier) ; six secteurs chirurgicaux."
          ],
          lexique: [
            { terme: "Artère maxillaire", def: "Branche terminale la plus volumineuse de la carotide externe, dans la fosse infra-temporale, donnant la méningée moyenne et la sphéno-palatine." },
            { terme: "Artère sphéno-palatine", def: "Branche terminale de la maxillaire, artère principale des cavités nasales, responsable des épistaxis postérieures." },
            { terme: "Siphon carotidien", def: "Trajet en S de la carotide interne dans le sinus caverneux." },
            { terme: "Tronc basilaire", def: "Artère formée par la réunion des deux vertébrales au bord inférieur du pont, se terminant en artères cérébrales postérieures." },
            { terme: "Cercle artériel du cerveau", def: "Polygone de Willis, anastomose entre carotides internes et tronc basilaire à la base du cerveau (communicantes antérieure et postérieures)." },
            { terme: "Artères lenticulo-striées", def: "Branches perforantes de la cérébrale moyenne vascularisant le noyau lenticulaire et la capsule interne (lacunes, hémorragies profondes)." },
            { terme: "Confluent des sinus", def: "Pressoir d'Hérophile, réunion des sinus sagittal supérieur, droit et occipital à la protubérance occipitale interne, origine des sinus transverses." },
            { terme: "Sinus caverneux", def: "Sinus veineux pair de part et d'autre de la selle turcique, traversé par la carotide interne et le VI, longé par III, IV, V1, V2." },
            { terme: "Grande veine cérébrale", def: "Veine de Galien, collecteur du système veineux profond du cerveau, se jetant dans le sinus droit." },
            { terme: "Nœud jugulo-digastrique", def: "Nœud de la chaîne jugulaire interne sous l'angle de la mandibule, relais de l'amygdale palatine et de la base de la langue." }
          ],
          qcm: [
            {
              q: "Concernant l'artère carotide externe, quelles propositions sont exactes ?",
              options: [
                "A. Elle naît de la bifurcation carotidienne au niveau de C4.",
                "B. Sa première branche est l'artère linguale.",
                "C. L'artère faciale croise le bord inférieur de la mandibule en avant du masséter.",
                "D. L'artère maxillaire donne l'artère méningée moyenne.",
                "E. L'artère temporale superficielle est une de ses branches terminales."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la première branche est la thyroïdienne supérieure ; la linguale est la deuxième."
            },
            {
              q: "Concernant la carotide interne et l'artère vertébrale, quelles propositions sont exactes ?",
              options: [
                "A. La carotide interne donne l'artère thyroïdienne supérieure.",
                "B. La carotide interne traverse le sinus caverneux.",
                "C. L'artère ophtalmique est une branche de la carotide interne.",
                "D. L'artère vertébrale pénètre dans le foramen transversaire de C7.",
                "E. Les deux artères vertébrales s'unissent pour former le tronc basilaire."
              ],
              bonnes: [1, 2, 4],
              explication: "B, C et E sont vraies. A est fausse : la carotide interne n'a pas de branche cervicale ; la thyroïdienne supérieure vient de l'externe. D est fausse : elle entre en C6."
            },
            {
              q: "Concernant le cercle artériel du cerveau, quelles propositions sont exactes ?",
              options: [
                "A. Il est formé en avant par les artères cérébrales antérieures et l'artère communicante antérieure.",
                "B. Les artères cérébrales moyennes font partie du cercle.",
                "C. Les artères communicantes postérieures relient la carotide interne à la cérébrale postérieure.",
                "D. Il est complet et symétrique chez la grande majorité des sujets.",
                "E. L'artère communicante antérieure est le siège le plus fréquent des anévrismes intracrâniens."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : les cérébrales moyennes naissent du cercle sans en faire partie. D est fausse : il n'est complet que dans 20 à 30 % des cas."
            },
            {
              q: "Concernant les territoires des artères cérébrales, quelles propositions sont exactes ?",
              options: [
                "A. L'occlusion de l'artère cérébrale moyenne gauche entraîne une hémiplégie droite à prédominance brachio-faciale avec aphasie.",
                "B. L'artère cérébrale antérieure vascularise la face médiale de l'hémisphère.",
                "C. L'occlusion de l'artère cérébrale postérieure entraîne une hémianopsie latérale homonyme.",
                "D. Les artères lenticulo-striées sont des branches de l'artère cérébrale antérieure.",
                "E. Le système vertébro-basilaire vascularise le tronc cérébral et le cervelet."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : les lenticulo-striées sont des perforantes de la cérébrale moyenne."
            },
            {
              q: "Concernant les sinus veineux de la dure-mère, quelles propositions sont exactes ?",
              options: [
                "A. Le sinus sagittal supérieur chemine le long du bord convexe de la faux du cerveau.",
                "B. Le sinus sigmoïde se continue par la veine jugulaire interne au foramen jugulaire.",
                "C. Le sinus caverneux est traversé par la carotide interne et le nerf abducens.",
                "D. La grande veine cérébrale se jette dans le sinus sagittal supérieur.",
                "E. Les sinus de la dure-mère possèdent des valvules."
              ],
              bonnes: [0, 1, 2],
              explication: "A, B et C sont vraies. D est fausse : la grande veine cérébrale se jette dans le sinus droit. E est fausse : les sinus sont dépourvus de valvules."
            },
            {
              q: "Concernant le drainage veineux de la face, quelles propositions sont exactes ?",
              options: [
                "A. La veine angulaire communique avec les veines ophtalmiques.",
                "B. Une infection de la lèvre supérieure peut se compliquer de thrombophlébite du sinus caverneux.",
                "C. La veine faciale se jette dans la veine jugulaire externe.",
                "D. Le plexus ptérygoïdien est situé dans la fosse infra-temporale.",
                "E. La veine jugulaire interne est le principal collecteur veineux de l'encéphale."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la veine faciale se jette dans la veine jugulaire interne."
            },
            {
              q: "Concernant le drainage lymphatique de la tête et du cou, quelles propositions sont exactes ?",
              options: [
                "A. Les nœuds submentaux drainent la pointe de la langue et la partie médiane de la lèvre inférieure.",
                "B. Le nœud jugulo-digastrique est le relais de l'amygdale palatine.",
                "C. Les structures médianes (langue, plancher) ont un drainage strictement unilatéral.",
                "D. Une adénopathie sus-claviculaire gauche peut traduire un cancer digestif.",
                "E. Toute la lymphe de la tête et du cou aboutit au confluent jugulo-subclavier."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : les structures médianes se drainent de façon bilatérale, ce qui impose des curages bilatéraux."
            }
          ]
        }
      ]
    },
    {
      titre: "Partie 6 — Système nerveux et organes des sens",
      chapitres: [
        {
          id: "encephale",
          titre: "Système nerveux central : l'encéphale",
          duree: 60,
          objectifs: [
            "Décrire l'organisation générale du système nerveux central et les subdivisions de l'encéphale.",
            "Décrire le télencéphale : hémisphères, lobes, sillons, aires fonctionnelles, substance blanche, noyaux gris centraux.",
            "Décrire le diencéphale (thalamus, hypothalamus, hypophyse), le tronc cérébral et le cervelet.",
            "Décrire le système ventriculaire, la circulation du liquide cérébro-spinal et les méninges.",
            "Relier l'anatomie aux grands syndromes (hypertension intracrânienne, engagements, hydrocéphalie, hématomes)."
          ],
          sections: [
            {
              titre: "Organisation générale du système nerveux central",
              contenu: `<p>Le <strong>système nerveux central</strong> (SNC) comprend l'<strong>encéphale</strong>, contenu dans la cavité crânienne, et la <strong>moelle spinale</strong>, contenue dans le canal vertébral. Il est protégé par les os, les <strong>méninges</strong> et le <strong>liquide cérébro-spinal</strong> (LCS). L'encéphale pèse environ <strong>1 300 à 1 400 g</strong> chez l'adulte (2 % du poids du corps mais 20 % de la consommation d'oxygène et 15 % du débit cardiaque) et contient près de 100 milliards de neurones.</p>
<p>Il dérive des trois vésicules cérébrales primitives, d'où sa subdivision :</p>
<table>
<thead><tr><th>Vésicule primitive</th><th>Vésicule secondaire</th><th>Dérivés adultes</th><th>Cavité</th></tr></thead>
<tbody>
<tr><td><strong>Prosencéphale</strong></td><td>Télencéphale</td><td><strong>Hémisphères cérébraux</strong> (cortex, substance blanche, noyaux gris centraux)</td><td>Ventricules latéraux</td></tr>
<tr><td></td><td>Diencéphale</td><td><strong>Thalamus, hypothalamus</strong>, épithalamus (épiphyse), subthalamus, rétine et nerf optique</td><td>3e ventricule</td></tr>
<tr><td><strong>Mésencéphale</strong></td><td>Mésencéphale</td><td><strong>Mésencéphale</strong> (pédoncules cérébraux, tectum)</td><td>Aqueduc du mésencéphale</td></tr>
<tr><td><strong>Rhombencéphale</strong></td><td>Métencéphale</td><td><strong>Pont</strong> et <strong>cervelet</strong></td><td>4e ventricule</td></tr>
<tr><td></td><td>Myélencéphale</td><td><strong>Moelle allongée</strong> (bulbe)</td><td>4e ventricule, canal central</td></tr>
</tbody>
</table>
<p>On regroupe souvent : le <strong>cerveau</strong> (télencéphale + diencéphale), le <strong>tronc cérébral</strong> (mésencéphale + pont + moelle allongée) et le <strong>cervelet</strong>. La <strong>substance grise</strong> (corps cellulaires) forme le cortex en périphérie des hémisphères et du cervelet et des noyaux en profondeur ; la <strong>substance blanche</strong> (axones myélinisés) occupe le centre des hémisphères et la périphérie de la moelle (disposition inverse).</p>
<p>La <strong>tente du cervelet</strong>, cloison de dure-mère, sépare l'étage <strong>supra-tentoriel</strong> (hémisphères cérébraux, diencéphale) de l'étage <strong>infra-tentoriel</strong> ou fosse postérieure (tronc cérébral, cervelet). Le mésencéphale passe par l'<strong>incisure de la tente</strong> (foramen ovale de Pacchioni).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le neuraxe (axe cérébro-spinal) est centré sur une cavité continue remplie de LCS : ventricules latéraux → 3<sup>e</sup> ventricule → aqueduc → 4<sup>e</sup> ventricule → canal central et espaces subarachnoïdiens. Chaque étage de cette cavité correspond à une subdivision de l'encéphale.</div>`
            },
            {
              titre: "Le télencéphale : hémisphères, lobes et sillons",
              contenu: `<p>Les deux <strong>hémisphères cérébraux</strong>, ovoïdes, séparés par la <strong>fissure longitudinale</strong> (occupée par la faux du cerveau) et unis par les <strong>commissures</strong> (surtout le <strong>corps calleux</strong>, 200 millions de fibres, et les commissures antérieure et du fornix), représentent 85 % du poids de l'encéphale. Chaque hémisphère a trois faces (latérale ou convexe, médiale, inférieure ou basale) et trois pôles (frontal, occipital, temporal). Le <strong>cortex</strong> (2 à 4 mm, six couches dans le néocortex, environ 2 200 cm<sup>2</sup> grâce aux plissements) est plissé en <strong>gyrus</strong> (circonvolutions) séparés par des <strong>sillons</strong> (sulci) ; les sillons les plus profonds délimitent les <strong>lobes</strong>.</p>
<h4>Les sillons principaux</h4>
<ul>
<li>Le <strong>sillon central</strong> (de Rolando) : oblique sur la face latérale, du bord supérieur vers le sillon latéral, séparant le lobe frontal du lobe pariétal ; en avant, le <strong>gyrus précentral</strong> (aire motrice primaire), en arrière le <strong>gyrus postcentral</strong> (aire somesthésique primaire).</li>
<li>Le <strong>sillon latéral</strong> (de Sylvius) : profond, horizontal, séparant le lobe temporal (en bas) des lobes frontal et pariétal (en haut) ; au fond, l'<strong>insula</strong> (5<sup>e</sup> lobe caché, cortex gustatif et viscéral), recouverte par les opercules.</li>
<li>Le <strong>sillon pariéto-occipital</strong> : face médiale, séparant pariétal et occipital ; le <strong>sillon calcarin</strong> (face médiale occipitale, cortex visuel primaire sur ses lèvres).</li>
<li>Le <strong>sillon du cingulum</strong> : face médiale, au-dessus du gyrus du cingulum qui entoure le corps calleux.</li>
</ul>
<h4>Les lobes et leurs fonctions</h4>
<table>
<thead><tr><th>Lobe</th><th>Limites</th><th>Principaux gyrus et aires</th><th>Fonctions / lésion</th></tr></thead>
<tbody>
<tr><td><strong>Frontal</strong> (le plus grand, 40 %)</td><td>En avant du sillon central, au-dessus du sillon latéral</td><td>Gyrus précentral (<strong>aire motrice primaire</strong>, aire 4, homonculus moteur : membre inférieur sur la face médiale, main et face sur la convexité), aire prémotrice (6), aire motrice supplémentaire, <strong>aire de Broca</strong> (44–45, gyrus frontal inférieur gauche : production du langage), champ oculomoteur frontal (8), cortex préfrontal (fonctions exécutives, personnalité), cortex orbito-frontal</td><td>Hémiplégie controlatérale, aphasie motrice (Broca), syndrome frontal (désinhibition, apathie, persévérations), déviation oculaire</td></tr>
<tr><td><strong>Pariétal</strong></td><td>Entre sillon central, sillon pariéto-occipital et sillon latéral</td><td>Gyrus postcentral (<strong>aire somesthésique primaire</strong>, 3-1-2, homonculus sensitif), cortex pariétal associatif (5, 7 : schéma corporel, espace ; 39–40 : gyrus angulaire et supramarginal, lecture, calcul)</td><td>Hémianesthésie controlatérale, astéréognosie, héminégligence (droit), apraxie, syndrome de Gerstmann (gauche : agraphie, acalculie, agnosie digitale)</td></tr>
<tr><td><strong>Temporal</strong></td><td>Sous le sillon latéral</td><td>Gyrus temporal supérieur (<strong>aire auditive primaire</strong>, 41–42, gyrus de Heschl ; <strong>aire de Wernicke</strong>, 22, à gauche : compréhension du langage), gyrus temporaux moyen et inférieur (reconnaissance visuelle des objets et des visages : gyrus fusiforme), face médiale : <strong>hippocampe</strong> et <strong>uncus</strong> (mémoire, olfaction), amygdale (émotions)</td><td>Aphasie de Wernicke (compréhension), surdité corticale, amnésie, quadranopsie supérieure, épilepsie temporale</td></tr>
<tr><td><strong>Occipital</strong></td><td>En arrière du sillon pariéto-occipital</td><td><strong>Aire visuelle primaire</strong> (17, lèvres du sillon calcarin, cunéus et gyrus lingual), aires visuelles associatives (18, 19)</td><td>Hémianopsie latérale homonyme controlatérale, cécité corticale, agnosie visuelle, alexie</td></tr>
<tr><td><strong>Insulaire</strong></td><td>Fond du sillon latéral</td><td>Cortex gustatif, viscéro-sensitif, interoception</td><td>Troubles végétatifs, gustatifs</td></tr>
<tr><td><strong>Limbique</strong> (fonctionnel)</td><td>Face médiale : gyrus du cingulum, gyrus parahippocampique, hippocampe, amygdale, fornix, corps mamillaires</td><td>Circuit de Papez (hippocampe → fornix → corps mamillaires → thalamus antérieur → cingulum)</td><td>Mémoire, émotions, comportement ; amnésie (Korsakoff, Alzheimer)</td></tr>
</tbody>
</table>
<h4>Dominance hémisphérique</h4>
<p>Chaque hémisphère commande la moitié <strong>controlatérale</strong> du corps (décussation des voies). L'<strong>hémisphère gauche</strong> est dominant pour le <strong>langage</strong> chez 95 % des droitiers et 70 % des gauchers (Broca, Wernicke, reliés par le faisceau arqué) ; l'hémisphère droit pour l'attention spatiale, la reconnaissance des visages, la prosodie et la musique.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> l'<strong>homonculus</strong> est inversé (pied en haut sur la face médiale, face en bas près du sillon latéral) et disproportionné (main et face sur-représentées). Une lésion de l'artère cérébrale antérieure (face médiale) donne un déficit crural, une lésion sylvienne un déficit brachio-facial. L'aphasie de Broca est non fluente avec compréhension conservée ; celle de Wernicke est fluente avec jargon et compréhension altérée.</div>`
            },
            {
              titre: "Substance blanche et noyaux gris centraux",
              contenu: `<h4>La substance blanche hémisphérique</h4>
<p>Trois types de fibres :</p>
<ul>
<li>Les <strong>fibres d'association</strong> : relient des aires d'un même hémisphère (fibres courtes en U, faisceaux longs : <strong>faisceau arqué</strong> ou longitudinal supérieur (Broca–Wernicke : aphasie de conduction), faisceau longitudinal inférieur, cingulum, faisceau unciné).</li>
<li>Les <strong>fibres commissurales</strong> : relient les deux hémisphères : <strong>corps calleux</strong> (rostre, genou, tronc, splénium ; sa section donne un syndrome de déconnexion), <strong>commissure antérieure</strong> (lobes temporaux), commissure du fornix.</li>
<li>Les <strong>fibres de projection</strong> : relient le cortex aux structures sous-jacentes (thalamus, tronc, moelle) et convergent en éventail (<strong>corona radiata</strong>) vers la <strong>capsule interne</strong>, lame de substance blanche en V ouvert latéralement, entre le noyau caudé et le thalamus (médialement) et le noyau lenticulaire (latéralement) : <strong>bras antérieur</strong> (fibres fronto-pontiques, thalamo-frontales), <strong>genou</strong> (faisceau cortico-nucléaire : nerfs crâniens), <strong>bras postérieur</strong> (<strong>faisceau cortico-spinal</strong> ou pyramidal, disposé de l'avant vers l'arrière : bras, tronc, jambe ; puis fibres thalamo-corticales sensitives, radiations auditives et optiques dans les parties rétro- et sous-lenticulaires). Toute lésion de la capsule interne (lacune, hémorragie des lenticulo-striées) donne une <strong>hémiplégie massive et proportionnelle</strong> controlatérale, sans aphasie. La <strong>capsule externe</strong> et la <strong>capsule extrême</strong> séparent le lenticulaire du claustrum et de l'insula.</li>
</ul>
<h4>Les noyaux gris centraux (noyaux de la base)</h4>
<p>Masses de substance grise enfouies dans la substance blanche, à la base des hémisphères, impliquées dans le <strong>contrôle du mouvement</strong> (initiation, automatismes, tonus), la cognition et l'émotion :</p>
<ul>
<li>Le <strong>noyau caudé</strong> : en C, tête (paroi latérale de la corne frontale du ventricule latéral), corps et queue (toit de la corne temporale, jusqu'à l'amygdale).</li>
<li>Le <strong>noyau lenticulaire</strong> : latéral à la capsule interne, en forme de lentille à trois segments sur coupe : le <strong>putamen</strong> (latéral, uni au caudé par des ponts gris à travers la capsule interne : <strong>striatum</strong>) et le <strong>pallidum</strong> (globus pallidus, médial, segments externe et interne).</li>
<li>Le <strong>claustrum</strong> (avant-mur), lame fine sous l'insula.</li>
<li>Le <strong>corps amygdaloïde</strong> (amygdale), dans le lobe temporal (système limbique).</li>
<li>Fonctionnellement associés : le <strong>noyau subthalamique</strong> (de Luys, diencéphale) et la <strong>substance noire</strong> (mésencéphale, neurones dopaminergiques).</li>
</ul>
<p>Le <strong>striatum</strong> (caudé + putamen) reçoit les afférences corticales et dopaminergiques de la substance noire ; le <strong>pallidum interne</strong> est la sortie vers le thalamus (voie directe facilitatrice, voie indirecte inhibitrice via le noyau subthalamique). Les boucles cortico-striato-pallido-thalamo-corticales modulent le mouvement.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>maladie de Parkinson</strong> (dégénérescence dopaminergique de la substance noire) associe tremblement de repos, rigidité et akinésie (syndrome extrapyramidal) ; la <strong>chorée de Huntington</strong> (atrophie du striatum) donne des mouvements anormaux ; une lésion du noyau subthalamique donne un hémiballisme. La stimulation cérébrale profonde cible le noyau subthalamique. Les <strong>hémorragies capsulo-lenticulaires</strong> hypertensives (artères lenticulo-striées) sont la forme la plus fréquente d'hématome intracérébral.</div>`
            },
            {
              titre: "Le diencéphale : thalamus, hypothalamus, hypophyse",
              contenu: `<p>Le <strong>diencéphale</strong>, enfoui entre les hémisphères, entoure le <strong>3<sup>e</sup> ventricule</strong> dont il forme les parois latérales.</p>
<h4>Le thalamus</h4>
<p>Deux masses ovoïdes de substance grise (3 × 1,5 cm), unies par l'adhérence interthalamique, formant le plancher des ventricules latéraux et la paroi latérale du 3<sup>e</sup> ventricule, en dedans de la capsule interne. C'est le <strong>grand relais sensitif</strong> : toutes les voies sensitives (sauf l'olfaction) y font synapse avant de se projeter sur le cortex. Il est divisé par la lame médullaire interne (en Y) en groupes de noyaux : <strong>antérieur</strong> (circuit de Papez, mémoire), <strong>médial</strong> (dorso-médian : cortex préfrontal, émotion), <strong>latéral</strong> (étage dorsal associatif ; étage ventral : noyaux <strong>ventral antérieur et latéral</strong> (relais moteur du pallidum et du cervelet vers le cortex moteur), <strong>ventral postéro-latéral</strong> (sensibilité du corps : lemnisque médial et voies spino-thalamiques), <strong>ventral postéro-médial</strong> (sensibilité de la face : trijumeau, goût)), les <strong>corps géniculés</strong> : <strong>latéral</strong> (relais visuel : tractus optique → radiations optiques) et <strong>médial</strong> (relais auditif : → radiations auditives), le pulvinar (postérieur, associatif), les noyaux intralaminaires et réticulaires (éveil). Le <strong>syndrome thalamique</strong> (Déjerine-Roussy, artère cérébrale postérieure) associe hémianesthésie controlatérale et douleurs centrales intolérables.</p>
<h4>L'hypothalamus</h4>
<p>Petite région (4 g) formant le plancher et la partie basse des parois du 3<sup>e</sup> ventricule, sous le thalamus (sillon hypothalamique), limitée en avant par le chiasma optique et la lame terminale, en arrière par les <strong>corps mamillaires</strong> ; sa face inférieure (visible à la base) montre le <strong>tuber cinereum</strong> et l'<strong>infundibulum</strong> (tige pituitaire). Noyaux : supra-optique et paraventriculaire (ocytocine, ADH → neurohypophyse), arqué et périventriculaires (facteurs de libération → adénohypophyse par le système porte hypophysaire), supra-chiasmatique (rythmes circadiens), ventro-médian et latéral (faim, satiété), préoptique (thermorégulation), mamillaires (mémoire). Fonctions : <strong>centre de l'homéostasie</strong> (température, soif, faim, sommeil, comportement sexuel), contrôle du <strong>système nerveux autonome</strong> et du <strong>système endocrinien</strong> (hypophyse), émotions (système limbique).</p>
<h4>L'hypophyse</h4>
<p>Glande endocrine de 0,6 g (1 cm), suspendue à l'hypothalamus par la <strong>tige pituitaire</strong>, logée dans la <strong>fosse hypophysaire de la selle turcique</strong>, recouverte du diaphragme sellaire (dure-mère) traversé par la tige. Rapports : <strong>chiasma optique</strong> au-dessus et en avant (hémianopsie bitemporale des adénomes), <strong>sinus caverneux</strong> latéralement (carotide interne, III, IV, VI, V1, V2), <strong>sinus sphénoïdal</strong> en dessous (voie chirurgicale trans-sphénoïdale). Elle comprend l'<strong>adénohypophyse</strong> (lobe antérieur, origine ectodermique buccale (poche de Rathke) : GH, PRL, ACTH, TSH, FSH, LH) et la <strong>neurohypophyse</strong> (lobe postérieur, prolongement de l'hypothalamus : stockage d'ADH et d'ocytocine). Vascularisation : artères hypophysaires supérieures (système porte hypothalamo-hypophysaire) et inférieures (carotide interne).</p>
<h4>L'épithalamus</h4>
<p>Toit du 3<sup>e</sup> ventricule : <strong>glande pinéale</strong> (épiphyse, mélatonine, rythmes circadiens ; souvent calcifiée après 20 ans, repère radiologique de la ligne médiane), habénula, commissure postérieure.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>adénome hypophysaire</strong> (prolactinome, acromégalie, Cushing, ou non sécrétant) comprime le chiasma (hémianopsie bitemporale), les sinus caverneux (diplopie) et l'hypophyse saine (insuffisance antéhypophysaire) ; IRM hypophysaire et chirurgie trans-sphénoïdale. Les lésions hypothalamiques donnent diabète insipide, troubles thermiques, obésité, hypersomnie. Le craniopharyngiome (reliquat de la poche de Rathke) touche l'enfant.</div>`
            },
            {
              titre: "Le tronc cérébral et le cervelet",
              contenu: `<h4>Le tronc cérébral</h4>
<p>Segment du névraxe entre le diencéphale et la moelle spinale, long de 7–8 cm, dans la fosse crânienne postérieure, en avant du cervelet (auquel il est relié par les trois paires de pédoncules cérébelleux) et du 4<sup>e</sup> ventricule, en arrière du clivus. Il contient les <strong>noyaux des nerfs crâniens III à XII</strong>, les <strong>voies ascendantes et descendantes</strong> (dont le faisceau pyramidal, qui décusse à sa partie inférieure), la <strong>formation réticulaire</strong> (vigilance, tonus, centres cardio-respiratoires, déglutition, vomissement) et des noyaux propres.</p>
<table>
<thead><tr><th>Étage</th><th>Face antérieure</th><th>Face postérieure</th><th>Noyaux de nerfs crâniens</th><th>Structures remarquables</th></tr></thead>
<tbody>
<tr><td><strong>Mésencéphale</strong> (2 cm)</td><td><strong>Pédoncules cérébraux</strong> (faisceaux pyramidaux) encadrant la fosse interpédonculaire (émergence du <strong>III</strong>)</td><td><strong>Tectum</strong> : lame quadrijumelle avec les <strong>colliculus supérieurs</strong> (réflexes visuels) et <strong>inférieurs</strong> (relais auditif) ; émergence du <strong>IV</strong></td><td>III, IV (+ noyau mésencéphalique du V)</td><td><strong>Substance noire</strong> (dopamine), <strong>noyau rouge</strong>, aqueduc, substance grise périaqueducale, noyau d'Edinger-Westphal</td></tr>
<tr><td><strong>Pont</strong> (2,5 cm)</td><td>Saillie transversale striée (fibres ponto-cérébelleuses vers les pédoncules cérébelleux moyens), <strong>sillon basilaire</strong> ; émergence du <strong>V</strong> (face latérale), du <strong>VI</strong>, du <strong>VII</strong> et du <strong>VIII</strong> au sillon bulbo-pontique</td><td>Partie supérieure du <strong>plancher du 4e ventricule</strong> (colliculus facial)</td><td>V (moteur et principal), VI, VII, VIII (cochléaires, vestibulaires), noyau salivaire supérieur</td><td>Noyaux du pont (relais cortico-cérébelleux), <strong>lemnisque médial</strong>, formation réticulaire pontique (centre pneumotaxique), locus coeruleus</td></tr>
<tr><td><strong>Moelle allongée</strong> (bulbe, 3 cm)</td><td><strong>Pyramides</strong> (faisceaux cortico-spinaux, <strong>décussation</strong> à la jonction bulbo-spinale), <strong>olives</strong> (noyau olivaire inférieur, relais cérébelleux) ; émergence du <strong>XII</strong> (sillon pré-olivaire), des <strong>IX, X, XI</strong> (sillon rétro-olivaire)</td><td>Partie inférieure du plancher du 4e ventricule (trigones du XII et du X, aire vestibulaire), <strong>obex</strong> ; pédoncules cérébelleux inférieurs ; tubercules graciles et cunéiformes</td><td>IX, X, XI, XII, noyau ambigu, noyau dorsal du X, noyau du tractus solitaire, noyau spinal du V</td><td><strong>Noyaux graciles et cunéiformes</strong> (relais des cordons postérieurs → lemnisque médial), centres <strong>respiratoires</strong> et <strong>cardio-vasculaires</strong>, centre du vomissement, formation réticulaire</td></tr>
</tbody>
</table>
<p>Règle d'organisation : les noyaux <strong>moteurs</strong> sont médians, les noyaux <strong>sensitifs</strong> latéraux ; les voies longues sont ventrales. Une lésion du tronc donne un <strong>syndrome alterne</strong> : atteinte d'un nerf crânien du côté de la lésion et des voies longues du côté opposé (ex. syndrome de Wallenberg : lésion latérale du bulbe par occlusion de la PICA ; syndrome de Weber : III homolatéral et hémiplégie controlatérale).</p>
<h4>Le cervelet</h4>
<p>Situé dans la fosse postérieure, sous la tente, en arrière du tronc cérébral et du 4<sup>e</sup> ventricule ; 10 % du volume de l'encéphale mais plus de la moitié de ses neurones (140 g). Il comprend deux <strong>hémisphères</strong> et une partie médiane, le <strong>vermis</strong>, divisés en trois lobes par les fissures primaire et postéro-latérale : lobe antérieur, lobe postérieur et <strong>lobe flocculo-nodulaire</strong>. Le cortex cérébelleux (trois couches, cellules de Purkinje) est plissé en folia ; la substance blanche (« arbre de vie ») contient les <strong>noyaux cérébelleux</strong> : fastigial, globuleux, emboliforme et <strong>dentelé</strong> (le plus grand, sortie vers le thalamus et le cortex moteur). Trois pédoncules le relient au tronc : <strong>inférieur</strong> (moelle allongée : afférences spino-cérébelleuses, vestibulaires, olivaires), <strong>moyen</strong> (pont : afférences cortico-ponto-cérébelleuses, le plus volumineux), <strong>supérieur</strong> (mésencéphale : efférences dentato-thalamiques, décussées).</p>
<table>
<thead><tr><th>Division fonctionnelle</th><th>Structures</th><th>Afférences</th><th>Fonction</th><th>Syndrome lésionnel</th></tr></thead>
<tbody>
<tr><td><strong>Vestibulo-cervelet</strong> (archéocervelet)</td><td>Lobe flocculo-nodulaire</td><td>Noyaux vestibulaires</td><td>Équilibre, mouvements oculaires</td><td>Ataxie du tronc, nystagmus, déséquilibre</td></tr>
<tr><td><strong>Spino-cervelet</strong> (paléocervelet)</td><td>Vermis et zone paravermienne</td><td>Faisceaux spino-cérébelleux (proprioception)</td><td>Tonus, posture, marche, ajustement en cours de mouvement</td><td>Ataxie statique et de la marche (élargissement du polygone, danse des tendons), hypotonie</td></tr>
<tr><td><strong>Cérébro-cervelet</strong> (néocervelet)</td><td>Hémisphères latéraux, noyau dentelé</td><td>Cortex cérébral via le pont</td><td>Planification, coordination des mouvements fins, apprentissage moteur</td><td>Ataxie cinétique <strong>homolatérale</strong> : dysmétrie, asynergie, dyschronométrie, adiadococinésie, tremblement d'action, dysarthrie (voix scandée)</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le cervelet agit sur le <strong>même côté</strong> du corps (double décussation : pédoncule supérieur puis voie pyramidale), alors que le cortex cérébral commande le côté <strong>opposé</strong>. Le syndrome cérébelleux ne comporte ni paralysie ni trouble sensitif. Une lésion du vermis donne surtout une ataxie de la marche, une lésion hémisphérique une ataxie des membres homolatéraux.</div>`
            },
            {
              titre: "Les ventricules et le liquide cérébro-spinal",
              contenu: `<h4>Le système ventriculaire</h4>
<ul>
<li>Les deux <strong>ventricules latéraux</strong> (un par hémisphère) : cavités en C avec une <strong>corne frontale</strong> (lobe frontal, en avant du foramen interventriculaire ; paroi latérale : tête du noyau caudé ; toit : corps calleux ; paroi médiale : septum pellucidum), une <strong>partie centrale</strong> (lobe pariétal, plancher : thalamus), un <strong>carrefour</strong> (atrium), une <strong>corne occipitale</strong> et une <strong>corne temporale</strong> (plancher : hippocampe). Ils communiquent avec le 3<sup>e</sup> ventricule par les <strong>foramens interventriculaires</strong> (de Monro).</li>
<li>Le <strong>3<sup>e</sup> ventricule</strong> : fente médiane entre les deux thalamus et hypothalamus ; récessus optique, infundibulaire, pinéal.</li>
<li>L'<strong>aqueduc du mésencéphale</strong> (de Sylvius) : canal étroit de 15 mm (site d'obstruction : hydrocéphalie).</li>
<li>Le <strong>4<sup>e</sup> ventricule</strong> : losangique, entre le pont et la moelle allongée (plancher) et le cervelet (toit) ; il communique avec les espaces subarachnoïdiens par l'<strong>ouverture médiane</strong> (de Magendie) vers la citerne cérébello-médullaire (grande citerne) et les deux <strong>ouvertures latérales</strong> (de Luschka) vers les citernes ponto-cérébelleuses, et se continue par le canal central de la moelle.</li>
</ul>
<h4>Le liquide cérébro-spinal</h4>
<p>Liquide clair, « eau de roche », de <strong>150 mL</strong> au total (dont 25 mL dans les ventricules, le reste dans les espaces subarachnoïdiens crâniens et spinaux), produit à raison de <strong>500 mL/jour</strong> (renouvelé 3 à 4 fois par jour), essentiellement par les <strong>plexus choroïdes</strong> des ventricules latéraux, du 3<sup>e</sup> et du 4<sup>e</sup> ventricule (épendyme sécrétoire autour de pelotons capillaires). Composition : protéines 0,2–0,4 g/L, glucose 0,6 × glycémie, moins de 5 éléments/mm<sup>3</sup> ; pression de 10–15 cmH<sub>2</sub>O en décubitus. Circulation : ventricules latéraux → foramens interventriculaires → 3<sup>e</sup> ventricule → aqueduc → 4<sup>e</sup> ventricule → ouvertures de Magendie et Luschka → <strong>espaces subarachnoïdiens</strong> (citernes de la base, convexité, canal vertébral) → <strong>résorption</strong> par les <strong>granulations arachnoïdiennes</strong> (de Pacchioni) dans le <strong>sinus sagittal supérieur</strong> et ses lacunes latérales (et accessoirement par les gaines des nerfs et les lymphatiques méningés). Rôles : protection mécanique (flottabilité : le cerveau de 1 400 g ne pèse que 50 g dans le LCS), homéostasie, élimination des déchets, transport hormonal.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>hydrocéphalie</strong> résulte d'un obstacle à la circulation (hydrocéphalie <strong>non communicante</strong> ou obstructive : sténose de l'aqueduc, tumeur de la fosse postérieure) ou à la résorption (hydrocéphalie <strong>communicante</strong> : hémorragie méningée, méningite ; hydrocéphalie à pression normale du sujet âgé : triade troubles de la marche, incontinence, démence) ; traitement par dérivation ventriculo-péritonéale ou ventriculocisternostomie. La <strong>ponction lombaire</strong> analyse le LCS (méningite : cellules, protéines, glucose ; hémorragie méningée). Elle est contre-indiquée en cas d'hypertension intracrânienne avec risque d'engagement.</div>`
            },
            {
              titre: "Les méninges",
              contenu: `<p>Trois membranes concentriques enveloppent le SNC, de la superficie vers la profondeur :</p>
<h4>La dure-mère</h4>
<p>Membrane fibreuse épaisse et résistante, <strong>pachyméninge</strong>. Au niveau crânien, elle est formée de deux feuillets : le feuillet <strong>périosté</strong> (adhérent à l'os, surtout à la base et aux sutures) et le feuillet <strong>méningé</strong> ; leur dédoublement forme les <strong>sinus veineux</strong>. Le feuillet méningé émet des <strong>cloisons</strong> : la <strong>faux du cerveau</strong> (sagittale, entre les hémisphères, de la crista galli à la tente ; sinus sagittaux dans ses bords), la <strong>tente du cervelet</strong> (horizontale, entre les hémisphères et le cervelet, fixée aux rochers et à l'occipital ; incisure tentorielle pour le mésencéphale ; sinus transverses et droit dans ses insertions), la <strong>faux du cervelet</strong> et le <strong>diaphragme sellaire</strong>. Elle est innervée (V, X, C1–C3 : céphalées) et vascularisée par les <strong>artères méningées</strong> (moyenne surtout). Au niveau spinal, un seul feuillet forme le sac dural (jusqu'à S2), séparé de l'os par l'<strong>espace épidural</strong> (graisse, plexus veineux : anesthésie péridurale) ; au niveau crânien, l'espace extra-dural est virtuel (hématome extra-dural décollant la dure-mère de l'os).</p>
<h4>L'arachnoïde</h4>
<p>Membrane fine, avasculaire, appliquée contre la dure-mère (séparée par l'<strong>espace subdural</strong>, virtuel, traversé par les veines ponts : hématome sous-dural), reliée à la pie-mère par des trabécules. Elle envoie les <strong>granulations arachnoïdiennes</strong> dans les sinus (résorption du LCS).</p>
<h4>La pie-mère</h4>
<p>Membrane très fine, vascularisée, adhérant intimement à la surface du SNC, dont elle suit tous les sillons ; elle forme les tela choroidea des plexus choroïdes et, au niveau spinal, les ligaments dentelés et le filum terminal. Arachnoïde et pie-mère constituent la <strong>leptoméninge</strong>. Entre elles, l'<strong>espace subarachnoïdien</strong>, réel, contient le <strong>LCS</strong>, les artères cérébrales (hémorragie méningée anévrismale) et les veines ; il s'élargit en <strong>citernes</strong> à la base (cérébello-médullaire, pontique, interpédonculaire, chiasmatique, de la grande veine cérébrale, de la fosse latérale) et en citerne lombale (queue de cheval, ponction lombaire).</p>
<table>
<thead><tr><th>Hématome</th><th>Espace</th><th>Vaisseau</th><th>Clinique et imagerie</th></tr></thead>
<tbody>
<tr><td><strong>Extra-dural</strong></td><td>Entre os et dure-mère</td><td>Artère méningée moyenne (fracture temporale)</td><td>Intervalle libre puis coma rapide ; lentille biconvexe au scanner, limitée par les sutures ; urgence chirurgicale</td></tr>
<tr><td><strong>Sous-dural</strong></td><td>Entre dure-mère et arachnoïde</td><td>Veines ponts (traumatisme, sujet âgé, anticoagulants)</td><td>Aigu : coma ; chronique : céphalées, confusion progressive ; croissant concave, franchit les sutures</td></tr>
<tr><td><strong>Hémorragie subarachnoïdienne</strong> (méningée)</td><td>Espace subarachnoïdien</td><td>Anévrisme artériel (cercle de Willis), traumatisme</td><td>Céphalée brutale, syndrome méningé ; sang dans les citernes et les sillons</td></tr>
<tr><td><strong>Intra-parenchymateux</strong></td><td>Dans le cerveau</td><td>Lenticulo-striées (HTA), malformations</td><td>Déficit brutal, HTIC</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la boîte crânienne étant inextensible, toute augmentation de volume (hématome, tumeur, œdème, hydrocéphalie) élève la <strong>pression intracrânienne</strong> (céphalées, vomissements, œdème papillaire, troubles de la vigilance) et provoque des <strong>engagements</strong> : <strong>temporal</strong> (uncus sous la tente → compression du III (mydriase homolatérale) et du pédoncule (hémiplégie), puis du tronc), <strong>amygdalien</strong> (amygdales cérébelleuses dans le foramen magnum → compression bulbaire, arrêt cardio-respiratoire), sous-falcoriel (gyrus du cingulum sous la faux). La <strong>méningite</strong> est l'infection de la leptoméninge et du LCS (syndrome méningé : raideur de nuque, signes de Kernig et Brudzinski).</div>`
            }
          ],
          points_cles: [
            "L'encéphale (1 300–1 400 g) comprend le cerveau (télencéphale : hémisphères ; diencéphale : thalamus, hypothalamus), le tronc cérébral (mésencéphale, pont, moelle allongée) et le cervelet ; la tente du cervelet sépare les étages supra- et infra-tentoriels.",
            "Lobes : frontal (aire motrice 4, Broca, préfrontal), pariétal (somesthésie 3-1-2, espace), temporal (audition 41–42, Wernicke, hippocampe), occipital (vision 17), insula ; sillons central et latéral ; homonculus inversé ; hémisphère gauche dominant pour le langage.",
            "Capsule interne (entre caudé/thalamus et lenticulaire) : faisceau pyramidal dans le bras postérieur, cortico-nucléaire au genou ; lésion = hémiplégie proportionnelle ; corps calleux = commissure principale.",
            "Noyaux gris : caudé + putamen = striatum ; pallidum ; noyau subthalamique ; substance noire (dopamine, Parkinson) ; boucles cortico-striato-pallido-thalamo-corticales.",
            "Thalamus : relais de toutes les sensibilités sauf l'olfaction (VPL corps, VPM face, corps géniculés latéral = vision, médial = audition), relais moteur VA/VL ; hypothalamus : homéostasie, SNA, hypophyse ; hypophyse dans la selle turcique sous le chiasma (hémianopsie bitemporale).",
            "Tronc cérébral : noyaux III–IV (mésencéphale), V–VIII (pont), IX–XII (bulbe) ; pyramides et décussation, olives, colliculus, substance noire, noyau rouge, formation réticulaire ; syndromes alternes.",
            "Cervelet : vermis et hémisphères, lobe flocculo-nodulaire, noyau dentelé, trois pédoncules ; action homolatérale ; syndrome cérébelleux statique (vermis) et cinétique (hémisphères) sans paralysie.",
            "Ventricules latéraux → foramens interventriculaires → 3e ventricule → aqueduc → 4e ventricule → ouvertures de Magendie et Luschka → espaces subarachnoïdiens → granulations arachnoïdiennes → sinus sagittal supérieur.",
            "LCS : 150 mL, 500 mL/jour par les plexus choroïdes, 10–15 cmH2O ; hydrocéphalie obstructive (aqueduc) ou communicante (résorption).",
            "Méninges : dure-mère (faux, tente, sinus, artères méningées), arachnoïde (granulations), pie-mère ; espace subarachnoïdien réel (LCS, artères : hémorragie méningée) ; hématome extra-dural (artère méningée moyenne, lentille) et sous-dural (veines ponts, croissant) ; engagements temporal et amygdalien."
          ],
          lexique: [
            { terme: "Télencéphale", def: "Partie la plus antérieure de l'encéphale formant les deux hémisphères cérébraux (cortex, substance blanche, noyaux gris)." },
            { terme: "Sillon central", def: "Sillon de Rolando séparant le lobe frontal (gyrus précentral moteur) du lobe pariétal (gyrus postcentral sensitif)." },
            { terme: "Capsule interne", def: "Lame de substance blanche de projection entre le noyau lenticulaire et le thalamus/noyau caudé, contenant le faisceau pyramidal." },
            { terme: "Striatum", def: "Ensemble du noyau caudé et du putamen, entrée des noyaux gris centraux recevant les afférences corticales et dopaminergiques." },
            { terme: "Thalamus", def: "Masse de substance grise diencéphalique, relais de toutes les voies sensitives (sauf l'olfaction) vers le cortex." },
            { terme: "Formation réticulaire", def: "Réseau de neurones du tronc cérébral contrôlant la vigilance, le tonus et les fonctions vitales (respiration, circulation)." },
            { terme: "Pédoncules cérébelleux", def: "Trois paires de faisceaux reliant le cervelet au tronc : inférieur (bulbe), moyen (pont), supérieur (mésencéphale)." },
            { terme: "Aqueduc du mésencéphale", def: "Canal étroit reliant le 3e et le 4e ventricule, site fréquent d'obstruction (hydrocéphalie)." },
            { terme: "Granulations arachnoïdiennes", def: "Villosités de l'arachnoïde faisant saillie dans le sinus sagittal supérieur et résorbant le liquide cérébro-spinal." },
            { terme: "Engagement temporal", def: "Hernie de l'uncus temporal sous la tente du cervelet comprimant le nerf III et le mésencéphale (mydriase, hémiplégie, coma)." }
          ],
          qcm: [
            {
              q: "Concernant l'organisation de l'encéphale, quelles propositions sont exactes ?",
              options: [
                "A. Le diencéphale comprend le thalamus et l'hypothalamus.",
                "B. Le tronc cérébral est formé du mésencéphale, du pont et de la moelle allongée.",
                "C. Le cervelet est situé dans l'étage supra-tentoriel.",
                "D. La substance grise des hémisphères forme le cortex en périphérie et des noyaux en profondeur.",
                "E. L'encéphale adulte pèse environ 500 g."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : le cervelet est infra-tentoriel (fosse postérieure). E est fausse : l'encéphale pèse 1 300 à 1 400 g."
            },
            {
              q: "Concernant les lobes et les aires corticales, quelles propositions sont exactes ?",
              options: [
                "A. Le gyrus précentral correspond à l'aire motrice primaire.",
                "B. L'aire de Broca est située dans le lobe temporal.",
                "C. L'aire visuelle primaire est située sur les lèvres du sillon calcarin.",
                "D. Dans l'homonculus moteur, le membre inférieur est représenté sur la face médiale de l'hémisphère.",
                "E. L'hémisphère gauche est dominant pour le langage chez la majorité des droitiers."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : l'aire de Broca est dans le gyrus frontal inférieur ; l'aire de Wernicke est temporale."
            },
            {
              q: "Concernant la substance blanche et les noyaux gris centraux, quelles propositions sont exactes ?",
              options: [
                "A. Le faisceau pyramidal chemine dans le bras postérieur de la capsule interne.",
                "B. Le striatum est formé du noyau caudé et du putamen.",
                "C. Le pallidum est la partie latérale du noyau lenticulaire.",
                "D. La substance noire est située dans le mésencéphale.",
                "E. Une lésion de la capsule interne entraîne une hémiplégie controlatérale proportionnelle."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le pallidum est médial ; le putamen est la partie latérale du lenticulaire."
            },
            {
              q: "Concernant le diencéphale et l'hypophyse, quelles propositions sont exactes ?",
              options: [
                "A. Le thalamus est le relais de toutes les voies sensitives, y compris l'olfaction.",
                "B. Le corps géniculé latéral est le relais de la voie visuelle.",
                "C. L'hypothalamus contrôle l'hypophyse et le système nerveux autonome.",
                "D. L'hypophyse est logée dans la selle turcique, sous le chiasma optique.",
                "E. Un adénome hypophysaire comprimant le chiasma donne une hémianopsie bitemporale."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "B, C, D et E sont vraies. A est fausse : l'olfaction est la seule sensibilité qui gagne le cortex sans relais thalamique."
            },
            {
              q: "Concernant le tronc cérébral et le cervelet, quelles propositions sont exactes ?",
              options: [
                "A. Les noyaux des nerfs IX à XII sont situés dans la moelle allongée.",
                "B. La décussation des pyramides se fait dans le mésencéphale.",
                "C. Les centres respiratoires sont situés dans la moelle allongée et le pont.",
                "D. Le cervelet contrôle la coordination des mouvements du côté opposé du corps.",
                "E. Le pédoncule cérébelleux moyen relie le cervelet au pont."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : la décussation des pyramides se fait à la partie inférieure de la moelle allongée. D est fausse : le cervelet agit sur le même côté du corps (syndrome cérébelleux homolatéral)."
            },
            {
              q: "Concernant les ventricules et le liquide cérébro-spinal, quelles propositions sont exactes ?",
              options: [
                "A. Les ventricules latéraux communiquent avec le 3e ventricule par les foramens interventriculaires.",
                "B. L'aqueduc du mésencéphale relie le 3e et le 4e ventricule.",
                "C. Le LCS est produit principalement par les granulations arachnoïdiennes.",
                "D. Le volume total de LCS est d'environ 150 mL, renouvelé 3 à 4 fois par jour.",
                "E. Le 4e ventricule communique avec les espaces subarachnoïdiens par les ouvertures de Magendie et de Luschka."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le LCS est produit par les plexus choroïdes et résorbé par les granulations arachnoïdiennes."
            },
            {
              q: "Concernant les méninges et les hématomes intracrâniens, quelles propositions sont exactes ?",
              options: [
                "A. La dure-mère crânienne forme la faux du cerveau et la tente du cervelet.",
                "B. L'espace subarachnoïdien contient le LCS et les artères cérébrales.",
                "C. L'hématome extra-dural résulte le plus souvent de la rupture des veines ponts.",
                "D. L'hématome sous-dural a une forme de croissant au scanner.",
                "E. L'engagement temporal comprime le nerf oculomoteur (mydriase homolatérale)."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : l'hématome extra-dural résulte d'une lésion artérielle (méningée moyenne) ; les veines ponts sont en cause dans l'hématome sous-dural."
            }
          ]
        },
        {
          id: "moelle-spinale-voies",
          titre: "Moelle spinale et grandes voies",
          duree: 50,
          objectifs: [
            "Décrire la configuration externe de la moelle spinale : limites, renflements, sillons, segments, cône, queue de cheval.",
            "Décrire la configuration interne : substance grise (cornes, lames), substance blanche (cordons, faisceaux).",
            "Décrire les grandes voies sensitives (lemniscale, extra-lemniscale) et motrices (pyramidale, extra-pyramidales) et leurs décussations.",
            "Expliquer l'arc réflexe et les réflexes myotatiques.",
            "Décrire la vascularisation de la moelle et reconnaître les syndromes médullaires (section complète, Brown-Séquard, syringomyélie, cordonal postérieur)."
          ],
          sections: [
            {
              titre: "Configuration externe de la moelle spinale",
              contenu: `<p>La <strong>moelle spinale</strong> (moelle épinière) est la partie du SNC contenue dans le canal vertébral. Cordon cylindrique blanc, aplati d'avant en arrière, de <strong>42 à 45 cm</strong> de long et 1 cm de diamètre (30 g), elle s'étend du <strong>foramen magnum</strong> (où elle fait suite à la moelle allongée, au niveau de l'émergence de la 1<sup>re</sup> racine cervicale) au <strong>cône médullaire</strong>, dont la pointe se situe en regard du <strong>disque L1–L2</strong> chez l'adulte (L3 chez le nouveau-né, car la colonne croît plus vite que la moelle). Le cône se prolonge par le <strong>filum terminal</strong> (fil pie-mérien, 20 cm) jusqu'au coccyx.</p>
<h4>Renflements et sillons</h4>
<ul>
<li>Deux <strong>renflements</strong> (intumescences) correspondant aux plexus des membres : <strong>cervical</strong> (C4–T1, plexus brachial) et <strong>lombo-sacral</strong> (L1–S3, plexus lombal et sacral).</li>
<li>Des sillons longitudinaux : la <strong>fissure médiane antérieure</strong> (profonde, contenant l'artère spinale antérieure), le <strong>sillon médian postérieur</strong> (peu profond, prolongé par le septum médian postérieur), les <strong>sillons latéraux antérieurs</strong> (émergence des racines antérieures) et <strong>postérieurs</strong> (entrée des racines postérieures). En cervical et thoracique haut, un sillon intermédiaire postérieur sépare les faisceaux gracile et cunéiforme.</li>
</ul>
<h4>Segments médullaires et racines</h4>
<p>La moelle est divisée en <strong>31 segments</strong> (myélomères), chacun donnant une paire de <strong>nerfs spinaux</strong> (8 C, 12 T, 5 L, 5 S, 1 Co). Chaque racine est formée de plusieurs radicelles. Du fait de la différence de longueur entre moelle et colonne, le <strong>décalage</strong> entre segment médullaire et vertèbre augmente de haut en bas : le segment C8 est en regard de C7, les segments thoraciques inférieurs sont décalés de deux vertèbres, les segments lombaux sont en regard de T10–T12, les segments sacrés en regard de L1. Les racines descendent donc de plus en plus obliquement vers leur foramen intervertébral, et sous le cône elles forment la <strong>queue de cheval</strong> (racines L2 à Co, baignant dans le LCS de la citerne lombale : ponction lombaire sans danger pour la moelle en L3–L4 ou L4–L5).</p>
<h4>Enveloppes</h4>
<p>La moelle est entourée de la <strong>pie-mère</strong> (qui émet latéralement les <strong>ligaments dentelés</strong>, 21 paires de languettes fixant la moelle à la dure-mère entre les racines, et le filum terminal), de l'<strong>arachnoïde</strong> (espace subarachnoïdien contenant le LCS jusqu'en S2) et de la <strong>dure-mère</strong> (sac dural de C1 à S2, prolongé en gaines autour des racines jusqu'au foramen intervertébral) ; l'<strong>espace épidural</strong>, entre dure-mère et canal osseux, contient de la graisse et les plexus veineux vertébraux internes.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> moelle de 45 cm, du foramen magnum à L1–L2 ; sac dural jusqu'à S2 ; queue de cheval sous le cône ; un traumatisme vertébral en T12–L1 lèse le cône médullaire (segments sacrés : troubles sphinctériens et périnéaux) ; un traumatisme sous L2 lèse la queue de cheval (racines, nerf périphérique : paralysie flasque, aréflexie).</div>`
            },
            {
              titre: "Configuration interne : substance grise",
              contenu: `<p>Sur une coupe transversale, la moelle montre une <strong>substance grise centrale</strong> en forme de <strong>H</strong> (ou de papillon), entourée de <strong>substance blanche</strong> (disposition inverse du cerveau), et percée au centre du <strong>canal central</strong> (épendymaire), vestige de la lumière du tube neural, contenant du LCS, souvent oblitéré chez l'adulte.</p>
<h4>Les cornes de la substance grise</h4>
<ul>
<li>La <strong>corne antérieure</strong> (ventrale) : large, courte, <strong>motrice</strong>. Elle contient les <strong>motoneurones alpha</strong> (grands neurones multipolaires dont l'axone sort par la racine antérieure vers les muscles squelettiques : « voie finale commune ») et <strong>gamma</strong> (fuseaux neuromusculaires), organisés somatotopiquement : les noyaux <strong>médiaux</strong> pour les muscles axiaux (tronc), les noyaux <strong>latéraux</strong> pour les membres (fléchisseurs en arrière, extenseurs en avant) ; elle est développée dans les renflements. Elle contient aussi les <strong>interneurones</strong> (cellules de Renshaw inhibitrices).</li>
<li>La <strong>corne postérieure</strong> (dorsale) : étroite, longue, atteignant presque la surface, <strong>sensitive</strong> : elle reçoit les fibres des racines postérieures (dont les corps cellulaires sont dans le <strong>ganglion spinal</strong>) et contient les neurones de second ordre des voies de la douleur et de la température (couches I–II : substance gélatineuse, couche V) et les interneurones. Son sommet est coiffé par la zone marginale et la substance gélatineuse (de Rolando).</li>
<li>La <strong>corne latérale</strong> : présente seulement de <strong>T1 à L2</strong>, elle contient les <strong>neurones préganglionnaires sympathiques</strong> (colonne intermédio-latérale) dont les axones sortent par la racine antérieure et les rameaux communicants blancs. En <strong>S2–S4</strong>, une zone homologue (noyau parasympathique sacral) contient les neurones préganglionnaires parasympathiques (nerfs splanchniques pelviens).</li>
<li>La <strong>zone intermédiaire</strong> et la <strong>commissure grise</strong> (autour du canal central) : interneurones, noyau thoracique (de Clarke, C8–L2 : origine du faisceau spino-cérébelleux postérieur).</li>
</ul>
<h4>Les lames de Rexed</h4>
<p>La substance grise est divisée en <strong>dix lames</strong> cytoarchitectoniques : I à VI dans la corne postérieure (I–II : nociception ; III–IV : tact ; V–VI : proprioception et convergence), VII dans la zone intermédiaire (corne latérale, noyau de Clarke), VIII et IX dans la corne antérieure (IX : noyaux moteurs), X autour du canal central.</p>
<p>La proportion de substance grise varie : elle est maximale dans les renflements (membres), minimale en thoracique (où la substance blanche est proportionnellement plus abondante, car toutes les fibres longues y passent). La quantité de substance blanche diminue de haut en bas (les fibres ascendantes s'ajoutent et les descendantes se terminent progressivement).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les maladies du motoneurone (<strong>sclérose latérale amyotrophique</strong>, poliomyélite, amyotrophie spinale) détruisent les motoneurones de la corne antérieure : paralysie flasque, amyotrophie, fasciculations, aréflexie, sans trouble sensitif. La <strong>syringomyélie</strong> (cavité autour du canal central) détruit d'abord les fibres de la douleur qui croisent dans la commissure : anesthésie thermo-algique suspendue et bilatérale avec tact conservé (dissociation syringomyélique), aux membres supérieurs.</div>`
            },
            {
              titre: "Configuration interne : substance blanche et cordons",
              contenu: `<p>La substance blanche est divisée par les cornes en trois <strong>cordons</strong> (funicules) de chaque côté, formés de faisceaux ascendants, descendants et d'association (faisceaux propres, intersegmentaires, contre la substance grise).</p>
<table>
<thead><tr><th>Cordon</th><th>Limites</th><th>Principaux faisceaux</th></tr></thead>
<tbody>
<tr><td><strong>Postérieur</strong> (dorsal)</td><td>Entre le sillon médian postérieur et la corne postérieure</td><td><strong>Faisceau gracile</strong> (de Goll, médial, membre inférieur et tronc inférieur) et <strong>faisceau cunéiforme</strong> (de Burdach, latéral, au-dessus de T6 : membre supérieur et tronc supérieur) : <strong>sensibilité proprioceptive consciente, tact épicritique, vibrations</strong> (voie lemniscale)</td></tr>
<tr><td><strong>Latéral</strong></td><td>Entre les cornes postérieure et antérieure</td><td><strong>Faisceau cortico-spinal latéral</strong> (pyramidal croisé, 80–90 % des fibres pyramidales), <strong>faisceaux spino-cérébelleux</strong> postérieur (direct) et antérieur (croisé) en périphérie, <strong>faisceau spino-thalamique latéral</strong> (douleur, température), faisceau rubro-spinal, réticulo-spinal latéral</td></tr>
<tr><td><strong>Antérieur</strong> (ventral)</td><td>Entre la fissure médiane antérieure et la corne antérieure</td><td><strong>Faisceau cortico-spinal antérieur</strong> (pyramidal direct, 10–20 %, croise au niveau segmentaire), <strong>faisceau spino-thalamique antérieur</strong> (tact protopathique, pression), faisceaux vestibulo-spinal, tecto-spinal, réticulo-spinal médial, olivo-spinal</td></tr>
</tbody>
</table>
<p>La <strong>commissure blanche antérieure</strong>, en avant de la substance grise, est le lieu de croisement des fibres spino-thalamiques et du faisceau pyramidal antérieur. Les faisceaux ont une organisation <strong>somatotopique</strong> : dans les cordons postérieurs, les fibres des segments inférieurs sont médiales (gracile) et celles des segments supérieurs latérales (cunéiforme) ; dans le faisceau pyramidal latéral, les fibres cervicales sont médiales et les fibres sacrées latérales ; dans le spino-thalamique, les fibres sacrées sont postéro-latérales.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la voie lemniscale (cordons postérieurs) monte <strong>du même côté</strong> et croise dans le bulbe ; la voie spino-thalamique (douleur, température) croise <strong>dès son entrée</strong> dans la moelle (1 à 2 segments au-dessus) et monte du côté opposé. Une hémisection médullaire donne donc une perte de la proprioception du côté de la lésion et de la douleur du côté opposé (syndrome de Brown-Séquard).</div>`
            },
            {
              titre: "Les voies sensitives ascendantes",
              contenu: `<p>Toute voie sensitive consciente comprend <strong>trois neurones</strong> : le <strong>1<sup>er</sup> neurone</strong> (protoneurone) dans le <strong>ganglion spinal</strong> (ou le ganglion d'un nerf crânien), le <strong>2<sup>e</sup> neurone</strong> (deutoneurone) dans la moelle ou le tronc cérébral, dont l'axone <strong>croise</strong> la ligne médiane, et le <strong>3<sup>e</sup> neurone</strong> dans le <strong>thalamus</strong> (noyau ventral postéro-latéral pour le corps, postéro-médial pour la face), qui se projette sur le <strong>cortex somesthésique primaire</strong> (gyrus postcentral, aires 3-1-2, homonculus sensitif).</p>
<table>
<thead><tr><th></th><th>Voie lemniscale (cordons postérieurs – lemnisque médial)</th><th>Voie extra-lemniscale (spino-thalamique)</th></tr></thead>
<tbody>
<tr><td>Sensibilités</td><td><strong>Tact épicritique</strong> (discriminatif, fin), <strong>proprioception consciente</strong> (sens de position et de mouvement), <strong>sensibilité vibratoire</strong> (pallesthésie), stéréognosie</td><td><strong>Douleur</strong>, <strong>température</strong> (faisceau latéral), <strong>tact protopathique</strong> grossier et pression (faisceau antérieur)</td></tr>
<tr><td>Récepteurs et fibres</td><td>Mécanorécepteurs encapsulés (Meissner, Pacini, Merkel, Ruffini), fuseaux, organes de Golgi ; fibres myélinisées rapides (Aβ, Aα)</td><td>Terminaisons libres, nocicepteurs, thermorécepteurs ; fibres fines Aδ (douleur rapide) et C amyéliniques (douleur lente)</td></tr>
<tr><td>1er neurone</td><td>Ganglion spinal ; l'axone monte <strong>sans synapse</strong> dans le cordon postérieur <strong>homolatéral</strong> (gracile en dedans, cunéiforme en dehors)</td><td>Ganglion spinal ; l'axone fait synapse dès son entrée dans la <strong>corne postérieure</strong> (lames I, II, V)</td></tr>
<tr><td>2e neurone</td><td><strong>Noyaux gracile et cunéiforme</strong> de la moelle allongée ; les axones <strong>décussent</strong> (fibres arquées internes) et forment le <strong>lemnisque médial</strong> qui monte dans le tronc cérébral</td><td>Corne postérieure ; l'axone croise dans la <strong>commissure blanche antérieure</strong> (1–2 segments au-dessus) et monte dans le <strong>faisceau spino-thalamique</strong> du cordon antéro-latéral opposé, puis dans le lemnisque spinal du tronc</td></tr>
<tr><td>3e neurone</td><td>Thalamus (VPL) → cortex pariétal (3-1-2)</td><td>Thalamus (VPL, noyaux intralaminaires) → cortex pariétal, insulaire, cingulaire (composante affective) ; collatérales vers la formation réticulaire (éveil)</td></tr>
<tr><td>Niveau de croisement</td><td><strong>Moelle allongée</strong></td><td><strong>Moelle spinale</strong> (segmentaire)</td></tr>
<tr><td>Examen clinique</td><td>Sens de position des orteils, diapason, discrimination de deux points, graphesthésie ; signe de Romberg, ataxie proprioceptive</td><td>Piqûre, tubes chaud et froid</td></tr>
</tbody>
</table>
<h4>Les autres voies ascendantes</h4>
<ul>
<li>Les <strong>faisceaux spino-cérébelleux</strong> postérieur (direct, noyau de Clarke, pédoncule cérébelleux inférieur) et antérieur (croisé puis recroisé, pédoncule supérieur) : <strong>proprioception inconsciente</strong> (muscles, tendons, articulations) vers le cervelet, pour l'ajustement du tonus et de la coordination ; pas de relais thalamique.</li>
<li>Les voies <strong>spino-réticulaires</strong> et <strong>spino-tectales</strong> (douleur diffuse, éveil, réflexes d'orientation).</li>
<li>La <strong>sensibilité de la face</strong> emprunte le <strong>trijumeau</strong> : ganglion trigéminal → noyau principal (tact) et noyau spinal (douleur, température, descendant jusqu'en C2) → lemnisque trigéminal croisé → thalamus VPM → cortex (partie inférieure du gyrus postcentral).</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>syndrome cordonal postérieur</strong> (carence en vitamine B12, tabès, compression postérieure, sclérose en plaques) donne une ataxie proprioceptive (marche talonnante, Romberg positif, aggravée les yeux fermés), une perte du sens vibratoire et de position, des paresthésies, avec tact grossier et douleur conservés. La <strong>douleur projetée</strong> viscérale (convergence sur les mêmes neurones de la corne postérieure) explique la douleur du bras gauche dans l'infarctus. Le <strong>signe de Lhermitte</strong> (décharge à la flexion du cou) traduit une atteinte des cordons postérieurs cervicaux.</div>`
            },
            {
              titre: "Les voies motrices descendantes",
              contenu: `<h4>La voie pyramidale (cortico-spinale et cortico-nucléaire)</h4>
<p>Voie de la <strong>motricité volontaire</strong>, à <strong>deux neurones</strong> : le <strong>motoneurone central</strong> (1<sup>er</sup> neurone, cellule pyramidale de la couche V du cortex : aire motrice primaire (gyrus précentral, 30 %), aires prémotrice et motrice supplémentaire (30 %), cortex somesthésique (40 %)) et le <strong>motoneurone périphérique</strong> (2<sup>e</sup> neurone, corne antérieure ou noyau moteur d'un nerf crânien). Un million de fibres par côté.</p>
<p><strong>Trajet</strong> : cortex → <strong>corona radiata</strong> → <strong>capsule interne</strong> (genou pour les fibres cortico-nucléaires, bras postérieur pour les cortico-spinales, de l'avant vers l'arrière : membre supérieur, tronc, membre inférieur) → <strong>pédoncule cérébral</strong> (partie moyenne du pied du mésencéphale) → <strong>pont</strong> (fibres dissociées en faisceaux entre les noyaux du pont) → <strong>pyramide</strong> de la moelle allongée → <strong>décussation des pyramides</strong> à la jonction bulbo-spinale : <strong>80 à 90 % des fibres croisent</strong> et forment le <strong>faisceau cortico-spinal latéral</strong> (cordon latéral), <strong>10 à 20 %</strong> restent directes dans le <strong>faisceau cortico-spinal antérieur</strong> (cordon antérieur, croisant au niveau de leur segment dans la commissure blanche antérieure : muscles axiaux, à commande bilatérale). Les fibres se terminent sur les motoneurones (directement pour la main) ou sur des interneurones. Le <strong>faisceau cortico-nucléaire</strong> (géniculé) se détache dans le tronc vers les noyaux moteurs des nerfs crâniens, en général de façon <strong>bilatérale</strong>, sauf pour la partie inférieure du noyau du VII et le XII (commande surtout controlatérale : paralysie faciale centrale épargnant le front).</p>
<h4>Les voies extra-pyramidales</h4>
<p>Voies descendantes issues du tronc cérébral, contrôlées par le cortex, les noyaux gris et le cervelet, assurant la <strong>motricité automatique</strong>, le <strong>tonus</strong> et la <strong>posture</strong> :</p>
<ul>
<li><strong>Faisceau réticulo-spinal</strong> (formation réticulaire pontique et bulbaire) : tonus musculaire, posture, modulation des réflexes.</li>
<li><strong>Faisceau vestibulo-spinal</strong> (noyaux vestibulaires, direct) : équilibre, tonus des extenseurs antigravitaires.</li>
<li><strong>Faisceau rubro-spinal</strong> (noyau rouge, croisé) : tonus des fléchisseurs (peu développé chez l'homme).</li>
<li><strong>Faisceau tecto-spinal</strong> (colliculus supérieur) : orientation de la tête vers un stimulus visuel.</li>
</ul>
<table>
<thead><tr><th>Syndrome</th><th>Lésion</th><th>Signes</th></tr></thead>
<tbody>
<tr><td><strong>Syndrome pyramidal</strong> (motoneurone central)</td><td>Cortex, capsule interne, tronc, cordon latéral (AVC, SEP, compression médullaire)</td><td>Déficit moteur prédominant sur les extenseurs du membre supérieur et les fléchisseurs du membre inférieur, <strong>hypertonie spastique</strong> (élastique, en lame de canif), <strong>réflexes ostéo-tendineux vifs, diffusés, polycinétiques</strong>, clonus, <strong>signe de Babinski</strong> (extension lente de l'hallux), abolition des réflexes cutanés abdominaux, syncinésies ; pas d'amyotrophie, pas de fasciculation ; <strong>controlatéral</strong> si la lésion est au-dessus de la décussation, <strong>homolatéral</strong> si médullaire. Phase initiale flasque (sidération) dans les lésions aiguës</td></tr>
<tr><td><strong>Syndrome neurogène périphérique</strong> (motoneurone périphérique)</td><td>Corne antérieure, racine, plexus, nerf</td><td>Paralysie <strong>flasque</strong>, <strong>hypotonie</strong>, <strong>aréflexie</strong>, <strong>amyotrophie</strong> précoce, fasciculations, crampes ; troubles sensitifs si le nerf est mixte ; distribution radiculaire ou tronculaire</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'atteinte du motoneurone central donne un syndrome pyramidal (spasticité, hyperréflexie, Babinski) ; l'atteinte du motoneurone périphérique une paralysie flasque amyotrophiante avec aréflexie. La décussation bulbaire explique la controlatéralité des hémiplégies cérébrales ; une compression médullaire donne un syndrome pyramidal <strong>sous-lésionnel</strong> bilatéral, un syndrome lésionnel radiculaire au niveau de la compression et un syndrome rachidien.</div>`
            },
            {
              titre: "Les réflexes médullaires",
              contenu: `<p>Un <strong>réflexe</strong> est une réponse motrice involontaire, stéréotypée et rapide à un stimulus, dont le circuit (<strong>arc réflexe</strong>) comprend : un <strong>récepteur</strong>, une <strong>voie afférente</strong> (neurone sensitif du ganglion spinal), un <strong>centre</strong> (moelle : synapse directe ou via des interneurones), une <strong>voie efférente</strong> (motoneurone) et un <strong>effecteur</strong> (muscle).</p>
<h4>Le réflexe myotatique (réflexe d'étirement)</h4>
<p>Réflexe <strong>monosynaptique</strong> : l'étirement brusque d'un muscle (percussion du tendon) stimule les <strong>fuseaux neuromusculaires</strong> ; les fibres Ia font synapse directement sur les <strong>motoneurones alpha</strong> du même muscle (contraction) et, via un interneurone inhibiteur, sur ceux des antagonistes (inhibition réciproque). Il est la base du <strong>tonus musculaire</strong> et de la posture, et il est modulé par les voies descendantes (le syndrome pyramidal, en supprimant l'inhibition descendante, l'exagère). Les <strong>réflexes ostéo-tendineux</strong> explorent un segment médullaire précis :</p>
<table>
<thead><tr><th>Réflexe</th><th>Muscle / nerf</th><th>Segment</th></tr></thead>
<tbody>
<tr><td>Bicipital</td><td>Biceps brachial / musculo-cutané</td><td><strong>C5</strong>–C6</td></tr>
<tr><td>Stylo-radial</td><td>Brachio-radial / radial</td><td><strong>C6</strong></td></tr>
<tr><td>Tricipital</td><td>Triceps brachial / radial</td><td><strong>C7</strong></td></tr>
<tr><td>Cubito-pronateur</td><td>Pronateurs / médian</td><td><strong>C8</strong></td></tr>
<tr><td>Patellaire (rotulien)</td><td>Quadriceps / fémoral</td><td>L3–<strong>L4</strong></td></tr>
<tr><td>Achilléen</td><td>Triceps sural / tibial</td><td><strong>S1</strong></td></tr>
<tr><td>Massétérin</td><td>Masticateurs / V</td><td>Pont</td></tr>
</tbody>
</table>
<h4>Les autres réflexes</h4>
<ul>
<li>Le <strong>réflexe myotatique inverse</strong> : les organes tendineux de Golgi, sensibles à la tension, inhibent le motoneurone (protection).</li>
<li>Les <strong>réflexes de flexion</strong> (nociceptifs, de retrait) : polysynaptiques, un stimulus douloureux cutané entraîne la flexion du membre et l'extension croisée du membre opposé.</li>
<li>Les <strong>réflexes cutanés</strong> : cutané plantaire (S1 : flexion des orteils ; son inversion en extension lente de l'hallux est le <strong>signe de Babinski</strong>, pathologique après 2 ans, signant une atteinte pyramidale), cutanés abdominaux (T7–T12, abolis dans les lésions pyramidales), crémastérien (L1–L2), anal (S4–S5), bulbo-caverneux (S2–S4).</li>
<li>Les <strong>réflexes végétatifs</strong> médullaires : miction (S2–S4), défécation, érection, vasomoteurs (T1–L2) ; ils deviennent automatiques après une section médullaire (vessie automatique).</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'abolition d'un réflexe ostéo-tendineux localise une lésion radiculaire (achilléen aboli dans la sciatique S1, patellaire dans la cruralgie L4) ou périphérique (polyneuropathie : aréflexie diffuse). L'exagération, la diffusion et le clonus signent le syndrome pyramidal. Le <strong>choc spinal</strong> après section médullaire aiguë associe pendant 1 à 6 semaines paralysie flasque, aréflexie et rétention ; puis les réflexes réapparaissent exagérés (automatisme médullaire, spasticité, vessie automatique).</div>`
            },
            {
              titre: "Vascularisation et syndromes médullaires",
              contenu: `<h4>Vascularisation</h4>
<p>Trois axes longitudinaux parcourent la moelle : l'<strong>artère spinale antérieure</strong> (unique, dans la fissure médiane antérieure, née de la réunion de deux branches des artères vertébrales ; elle vascularise les <strong>deux tiers antérieurs</strong> de la moelle : cornes antérieures, cordons antérieurs et latéraux, voies pyramidales et spino-thalamiques) et les deux <strong>artères spinales postérieures</strong> (branches des vertébrales ou des PICA, le long des sillons latéraux postérieurs ; <strong>tiers postérieur</strong> : cordons postérieurs). Ces axes sont insuffisants seuls et sont réalimentés par les <strong>artères radiculo-médullaires</strong> (6 à 10), branches des artères vertébrales, cervicales, intercostales postérieures et lombales, qui pénètrent avec les racines ; la plus importante est l'<strong>artère radiculaire magna</strong> (d'Adamkiewicz), née d'une intercostale ou lombale gauche entre T9 et L2, vascularisant le renflement lombo-sacral. Les zones de jonction entre territoires radiculaires (T4–T8) sont vulnérables à l'ischémie. Les veines spinales se drainent dans les plexus veineux vertébraux internes (épiduraux) puis les veines intervertébrales, azygos et lombales.</p>
<h4>Les grands syndromes médullaires</h4>
<table>
<thead><tr><th>Syndrome</th><th>Lésion</th><th>Tableau</th></tr></thead>
<tbody>
<tr><td><strong>Section complète</strong></td><td>Traumatisme, myélite transverse</td><td>Au-dessous de la lésion : paralysie bilatérale (<strong>paraplégie</strong> si thoracique, <strong>tétraplégie</strong> si cervicale au-dessus de T1, détresse respiratoire si au-dessus de C4), anesthésie à tous les modes, troubles sphinctériens et sexuels, troubles végétatifs ; choc spinal puis automatisme. Niveau sensitif = dernier dermatome normal</td></tr>
<tr><td><strong>Hémisection</strong> (Brown-Séquard)</td><td>Plaie, compression latérale, SEP</td><td>Du côté de la lésion : syndrome pyramidal et perte de la proprioception et du tact épicritique (cordons postérieurs non croisés) ; du côté opposé : anesthésie thermo-algique (spino-thalamique croisé), 1–2 segments sous la lésion ; bande d'anesthésie radiculaire au niveau lésionnel</td></tr>
<tr><td><strong>Syndrome centro-médullaire</strong> (syringomyélie, traumatisme cervical en hyperextension)</td><td>Région péri-épendymaire</td><td>Anesthésie thermo-algique <strong>suspendue</strong> et bilatérale (fibres croisant dans la commissure) avec tact et proprioception conservés (dissociation syringomyélique), amyotrophie des mains, déficit prédominant aux membres supérieurs</td></tr>
<tr><td><strong>Syndrome cordonal postérieur</strong></td><td>Carence en B12, tabès, compression postérieure</td><td>Ataxie proprioceptive, perte du sens vibratoire et de position, paresthésies, Romberg positif, sensibilité thermo-algique conservée</td></tr>
<tr><td><strong>Syndrome de l'artère spinale antérieure</strong></td><td>Ischémie (chirurgie aortique, dissection, athérome)</td><td>Paraplégie flasque puis spastique, anesthésie thermo-algique bilatérale, troubles sphinctériens, avec <strong>conservation de la proprioception et du tact épicritique</strong> (cordons postérieurs épargnés)</td></tr>
<tr><td><strong>Syndrome de la corne antérieure</strong></td><td>SLA, poliomyélite</td><td>Paralysie flasque, amyotrophie, fasciculations, sans trouble sensitif</td></tr>
<tr><td><strong>Syndrome du cône médullaire</strong></td><td>Traumatisme T12–L1, tumeur</td><td>Troubles sphinctériens précoces (rétention, incontinence), anesthésie en selle (S3–S5), impuissance, réflexes achilléens conservés ou abolis selon l'extension</td></tr>
<tr><td><strong>Syndrome de la queue de cheval</strong></td><td>Hernie discale médiane volumineuse, tumeur, sténose</td><td>Atteinte radiculaire pluri-étagée : douleurs radiculaires, paralysie <strong>flasque</strong> asymétrique des membres inférieurs, anesthésie en selle, aréflexie achilléenne, troubles sphinctériens (urgence chirurgicale)</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>compression médullaire lente</strong> (tumeur, hernie cervicale, spondylodiscite, épidurite métastatique) associe un <strong>syndrome lésionnel</strong> (douleur et déficit radiculaires au niveau de la compression), un <strong>syndrome sous-lésionnel</strong> (paraparésie spastique, troubles sensitifs à niveau, troubles sphinctériens) et un <strong>syndrome rachidien</strong> (douleur et raideur vertébrales) : urgence diagnostique (IRM) et thérapeutique. Chez le traumatisé, l'immobilisation du rachis jusqu'à la preuve de l'absence de lésion instable est la règle.</div>`
            }
          ],
          points_cles: [
            "Moelle spinale de 42–45 cm, du foramen magnum au cône médullaire (L1–L2 chez l'adulte, L3 chez le nouveau-né), prolongée par le filum terminal ; renflements cervical (C4–T1) et lombo-sacral (L1–S3) ; 31 segments et paires de nerfs spinaux.",
            "Décalage croissant entre segments et vertèbres ; sous le cône, la queue de cheval (racines L2–Co) dans la citerne lombale ; sac dural jusqu'à S2 ; ligaments dentelés.",
            "Substance grise en H : corne antérieure motrice (motoneurones alpha et gamma, somatotopie médial = axial, latéral = membres), corne postérieure sensitive (lames I–VI de Rexed), corne latérale sympathique T1–L2 et noyau parasympathique S2–S4.",
            "Cordon postérieur : faisceaux gracile (médial, membre inférieur) et cunéiforme (latéral, membre supérieur) ; cordon latéral : pyramidal croisé, spino-thalamique latéral, spino-cérébelleux ; cordon antérieur : pyramidal direct, spino-thalamique antérieur, vestibulo-spinal.",
            "Voie lemniscale (tact épicritique, proprioception, vibration) : monte homolatérale, croise dans la moelle allongée (noyaux gracile et cunéiforme → lemnisque médial) ; voie spino-thalamique (douleur, température, tact grossier) : croise dès l'entrée dans la commissure blanche antérieure.",
            "Trois neurones sensitifs : ganglion spinal → relais (bulbe ou moelle) → thalamus VPL (VPM pour la face) → cortex pariétal 3-1-2.",
            "Voie pyramidale à deux neurones : cortex (aire 4, 6, pariétal) → capsule interne (bras postérieur) → pédoncule → pont → pyramide → décussation bulbaire (80–90 % → faisceau latéral croisé, 10–20 % → faisceau antérieur direct) → motoneurone de la corne antérieure.",
            "Syndrome pyramidal : spasticité, hyperréflexie, Babinski, pas d'amyotrophie ; syndrome neurogène périphérique : paralysie flasque, aréflexie, amyotrophie, fasciculations.",
            "Réflexe myotatique monosynaptique (fuseau → Ia → motoneurone alpha) : bicipital C5, stylo-radial C6, tricipital C7, patellaire L4, achilléen S1 ; réflexe cutané plantaire S1 (Babinski si extension).",
            "Vascularisation : artère spinale antérieure (deux tiers antérieurs), deux spinales postérieures (cordons postérieurs), artères radiculo-médullaires dont celle d'Adamkiewicz (T9–L2) ; Brown-Séquard = syndrome pyramidal et proprioceptif homolatéral, thermo-algique controlatéral ; syringomyélie = anesthésie thermo-algique suspendue dissociée."
          ],
          lexique: [
            { terme: "Cône médullaire", def: "Extrémité inférieure effilée de la moelle spinale, en regard de L1–L2 chez l'adulte, prolongée par le filum terminal." },
            { terme: "Myélomère", def: "Segment médullaire donnant naissance à une paire de nerfs spinaux (31 au total)." },
            { terme: "Ligaments dentelés", def: "Languettes pie-mériennes latérales (21 paires) fixant la moelle à la dure-mère entre les racines antérieures et postérieures." },
            { terme: "Corne latérale", def: "Saillie de la substance grise de T1 à L2 contenant les neurones préganglionnaires sympathiques." },
            { terme: "Faisceaux gracile et cunéiforme", def: "Faisceaux du cordon postérieur (Goll et Burdach) conduisant le tact épicritique et la proprioception consciente vers les noyaux homonymes du bulbe." },
            { terme: "Lemnisque médial", def: "Faisceau du tronc cérébral formé par les axones croisés des noyaux gracile et cunéiforme, montant vers le thalamus (VPL)." },
            { terme: "Faisceau spino-thalamique", def: "Voie croisée de la douleur, de la température et du tact grossier, dans le cordon antéro-latéral." },
            { terme: "Décussation des pyramides", def: "Croisement de 80 à 90 % des fibres cortico-spinales à la jonction bulbo-spinale, à l'origine du faisceau pyramidal latéral." },
            { terme: "Signe de Babinski", def: "Extension lente de l'hallux à la stimulation du bord latéral de la plante, traduisant une atteinte du faisceau pyramidal." },
            { terme: "Syndrome de Brown-Séquard", def: "Hémisection médullaire : déficit pyramidal et proprioceptif du côté de la lésion, anesthésie thermo-algique du côté opposé." }
          ],
          qcm: [
            {
              q: "Concernant la configuration externe de la moelle spinale, quelles propositions sont exactes ?",
              options: [
                "A. La moelle spinale s'étend du foramen magnum au disque L1–L2 chez l'adulte.",
                "B. Elle présente un renflement cervical et un renflement lombo-sacral.",
                "C. Les segments médullaires sacrés sont situés en regard des vertèbres sacrées.",
                "D. La queue de cheval est formée des racines lombales, sacrées et coccygienne sous le cône médullaire.",
                "E. Le sac dural se termine en S2."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : du fait du décalage, les segments sacrés sont en regard de L1 ; la moelle s'arrête en L1–L2."
            },
            {
              q: "Concernant la substance grise de la moelle, quelles propositions sont exactes ?",
              options: [
                "A. La corne antérieure contient les motoneurones alpha.",
                "B. La corne postérieure reçoit les fibres des racines postérieures.",
                "C. La corne latérale est présente sur toute la hauteur de la moelle.",
                "D. Les corps cellulaires des neurones sensitifs de premier ordre sont situés dans la corne postérieure.",
                "E. La substance grise est proportionnellement plus abondante dans les renflements."
              ],
              bonnes: [0, 1, 4],
              explication: "A, B et E sont vraies. C est fausse : la corne latérale (sympathique) n'existe que de T1 à L2. D est fausse : les corps cellulaires des neurones sensitifs de premier ordre sont dans le ganglion spinal."
            },
            {
              q: "Concernant les voies sensitives, quelles propositions sont exactes ?",
              options: [
                "A. La voie lemniscale conduit le tact épicritique, la proprioception consciente et la sensibilité vibratoire.",
                "B. Les fibres de la voie lemniscale croisent la ligne médiane dès leur entrée dans la moelle.",
                "C. La voie spino-thalamique conduit la douleur et la température.",
                "D. Les fibres spino-thalamiques croisent dans la commissure blanche antérieure de la moelle.",
                "E. Le troisième neurone des voies sensitives est situé dans le thalamus."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la voie lemniscale monte du même côté dans les cordons postérieurs et ne croise que dans la moelle allongée (noyaux gracile et cunéiforme)."
            },
            {
              q: "Concernant la voie pyramidale, quelles propositions sont exactes ?",
              options: [
                "A. Elle comprend deux neurones : le motoneurone central et le motoneurone périphérique.",
                "B. Elle traverse le bras postérieur de la capsule interne.",
                "C. La majorité de ses fibres croisent au niveau de la décussation des pyramides dans la moelle allongée.",
                "D. Le faisceau cortico-spinal antérieur est formé par les fibres croisées.",
                "E. Sa lésion entraîne une paralysie flasque avec amyotrophie précoce."
              ],
              bonnes: [0, 1, 2],
              explication: "A, B et C sont vraies. D est fausse : le faisceau cortico-spinal antérieur est formé des fibres directes (10–20 %) ; le latéral est croisé. E est fausse : la lésion pyramidale donne une paralysie spastique sans amyotrophie ; la paralysie flasque amyotrophiante est périphérique."
            },
            {
              q: "Concernant les réflexes, quelles propositions sont exactes ?",
              options: [
                "A. Le réflexe myotatique est monosynaptique.",
                "B. Le réflexe achilléen explore le segment S1.",
                "C. Le réflexe tricipital explore le segment C5.",
                "D. Le signe de Babinski traduit une atteinte du faisceau pyramidal.",
                "E. Dans le syndrome pyramidal, les réflexes ostéo-tendineux sont abolis."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : le tricipital explore C7 ; C5 correspond au bicipital. E est fausse : dans le syndrome pyramidal, les réflexes sont vifs, diffusés et polycinétiques."
            },
            {
              q: "Concernant la vascularisation de la moelle, quelles propositions sont exactes ?",
              options: [
                "A. L'artère spinale antérieure est unique et vascularise les deux tiers antérieurs de la moelle.",
                "B. Il existe deux artères spinales postérieures.",
                "C. L'artère d'Adamkiewicz naît habituellement d'une artère intercostale ou lombale entre T9 et L2.",
                "D. L'infarctus de l'artère spinale antérieure abolit la proprioception.",
                "E. Les artères radiculo-médullaires renforcent les axes spinaux."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : l'infarctus spinal antérieur épargne les cordons postérieurs, la proprioception et le tact épicritique sont conservés."
            },
            {
              q: "Concernant les syndromes médullaires, quelles propositions sont exactes ?",
              options: [
                "A. Le syndrome de Brown-Séquard associe un déficit moteur homolatéral et une anesthésie thermo-algique controlatérale.",
                "B. La syringomyélie donne une anesthésie thermo-algique suspendue avec conservation du tact.",
                "C. Le syndrome cordonal postérieur donne une ataxie proprioceptive avec Romberg positif.",
                "D. Le syndrome de la queue de cheval donne une paraplégie spastique avec signe de Babinski.",
                "E. Une section médullaire complète au-dessus de C4 entraîne une détresse respiratoire."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la queue de cheval est faite de racines (nerf périphérique) : paralysie flasque, aréflexie, sans Babinski."
            }
          ]
        },
        {
          id: "systeme-nerveux-autonome",
          titre: "Le système nerveux autonome",
          duree: 40,
          objectifs: [
            "Définir le système nerveux autonome et le distinguer du système nerveux somatique (organisation à deux neurones, ganglions).",
            "Décrire l'organisation anatomique du système sympathique : centres thoraco-lombaux, chaîne paravertébrale, ganglions prévertébraux, nerfs splanchniques, rameaux communicants.",
            "Décrire l'organisation du système parasympathique : centres crânio-sacrés, nerfs III, VII, IX, X, nerfs splanchniques pelviens, ganglions.",
            "Connaître les neurotransmetteurs et les récepteurs de chaque système.",
            "Décrire les effets du sympathique et du parasympathique sur les principaux organes et leurs applications cliniques (Claude Bernard-Horner, pharmacologie)."
          ],
          sections: [
            {
              titre: "Définition et organisation générale",
              contenu: `<p>Le <strong>système nerveux autonome</strong> (SNA, végétatif, viscéral) est la partie du système nerveux qui innerve les <strong>muscles lisses</strong>, le <strong>myocarde</strong> et les <strong>glandes</strong>, et règle de façon <strong>involontaire</strong> les fonctions vitales (circulation, respiration, digestion, excrétion, thermorégulation, reproduction) pour maintenir l'<strong>homéostasie</strong>. Il comprend des voies afférentes viscérales (sensibilité viscérale, réflexes) et des voies efférentes, divisées en deux systèmes anatomiquement et fonctionnellement distincts, le plus souvent antagonistes et complémentaires : le <strong>sympathique</strong> (orthosympathique, « combat ou fuite », dépense d'énergie) et le <strong>parasympathique</strong> (« repos et digestion », économie et restauration). On y ajoute le <strong>système nerveux entérique</strong> (plexus myentérique d'Auerbach et sous-muqueux de Meissner, 100 millions de neurones, autonome dans la paroi digestive).</p>
<h4>La voie efférente à deux neurones</h4>
<p>Contrairement au système somatique (un seul motoneurone du SNC au muscle strié), la voie végétative comprend <strong>deux neurones</strong> en série :</p>
<ul>
<li>le <strong>neurone préganglionnaire</strong> : corps cellulaire dans le SNC (tronc cérébral ou moelle), axone myélinisé (fibre B) sortant par un nerf crânien ou une racine antérieure, faisant synapse dans un <strong>ganglion végétatif</strong> ;</li>
<li>le <strong>neurone postganglionnaire</strong> : corps cellulaire dans le ganglion, axone amyélinique (fibre C) se terminant sur l'effecteur par des varicosités (synapses « en passant »).</li>
</ul>
<table>
<thead><tr><th></th><th>Sympathique</th><th>Parasympathique</th></tr></thead>
<tbody>
<tr><td><strong>Centres (neurones préganglionnaires)</strong></td><td><strong>Thoraco-lombaux</strong> : corne latérale de la moelle de <strong>T1 à L2</strong></td><td><strong>Crânio-sacrés</strong> : noyaux du tronc cérébral des nerfs <strong>III, VII, IX, X</strong> ; moelle sacrée <strong>S2–S4</strong></td></tr>
<tr><td><strong>Ganglions</strong></td><td><strong>Près du SNC</strong> : chaîne paravertébrale (tronc sympathique) et ganglions prévertébraux (cœliaque, mésentériques)</td><td><strong>Près ou dans l'organe</strong> : ganglions céphaliques (ciliaire, ptérygo-palatin, submandibulaire, otique) et ganglions intra-muraux (plexus)</td></tr>
<tr><td><strong>Fibre préganglionnaire</strong></td><td>Courte</td><td>Longue</td></tr>
<tr><td><strong>Fibre postganglionnaire</strong></td><td>Longue</td><td>Courte</td></tr>
<tr><td><strong>Divergence</strong></td><td>Forte (1 préganglionnaire → 10 à 20 postganglionnaires) : réponse diffuse, généralisée</td><td>Faible (1 → 1 à 3) : réponse localisée</td></tr>
<tr><td><strong>Distribution</strong></td><td>Tout le corps, y compris la peau (vaisseaux, glandes sudoripares, muscles arrecteurs) et les membres</td><td>Viscères de la tête, du thorax, de l'abdomen et du pelvis ; pas de distribution aux membres ni à la paroi</td></tr>
<tr><td><strong>Neurotransmetteur ganglionnaire</strong></td><td>Acétylcholine (récepteurs nicotiniques)</td><td>Acétylcholine (nicotiniques)</td></tr>
<tr><td><strong>Neurotransmetteur terminal</strong></td><td><strong>Noradrénaline</strong> (récepteurs alpha et bêta), sauf glandes sudoripares (acétylcholine, muscariniques) ; médullosurrénale = adrénaline dans le sang</td><td><strong>Acétylcholine</strong> (récepteurs muscariniques)</td></tr>
</tbody>
</table>
<p>Le contrôle central est assuré par l'<strong>hypothalamus</strong> (chef d'orchestre végétatif), la <strong>formation réticulaire</strong> du tronc cérébral (centres cardio-vasculaires, respiratoires, de la déglutition, du vomissement), le système limbique (émotions) et le cortex (insula, cingulaire).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> sympathique = thoraco-lombal (T1–L2), ganglions proches de la colonne, fibre postganglionnaire longue et noradrénergique, réponse diffuse ; parasympathique = crânio-sacré (III, VII, IX, X, S2–S4), ganglions près de l'organe, fibre postganglionnaire courte et cholinergique, réponse localisée. Tous les neurones préganglionnaires sont cholinergiques (nicotiniques).</div>`
            },
            {
              titre: "Le système sympathique : organisation anatomique",
              contenu: `<h4>Les neurones préganglionnaires</h4>
<p>Situés dans la <strong>colonne intermédio-latérale</strong> (corne latérale) de la moelle de <strong>T1 à L2</strong> (parfois C8 à L3), leurs axones sortent par la <strong>racine antérieure</strong>, le nerf spinal, puis le <strong>rameau communicant blanc</strong> (myélinisé) vers le ganglion paravertébral correspondant. Il n'y a de rameaux communicants blancs qu'en T1–L2 ; les ganglions cervicaux, lombaux bas et sacrés reçoivent leurs fibres par la chaîne.</p>
<h4>Les troncs sympathiques (chaînes paravertébrales)</h4>
<p>Deux chaînes de <strong>ganglions</strong> reliées par des cordons interganglionnaires, de part et d'autre de la colonne, de la base du crâne au coccyx (où elles se réunissent en ganglion impair) : <strong>3 ganglions cervicaux</strong> (supérieur, très volumineux, en regard de C2–C3 derrière la carotide interne ; moyen, inconstant, C6 ; inférieur, souvent fusionné avec le 1<sup>er</sup> thoracique en <strong>ganglion cervico-thoracique</strong> ou <strong>stellaire</strong>, sur le col de la 1<sup>re</sup> côte), <strong>11–12 thoraciques</strong> (sur les têtes costales), <strong>4 lombaux</strong> (bord médial du psoas), <strong>4–5 sacrés</strong> (face antérieure du sacrum, en dedans des foramens). Dans la chaîne, la fibre préganglionnaire peut : faire synapse dans le ganglion de son niveau ; monter ou descendre pour faire synapse dans un autre ganglion (c'est ainsi que les ganglions cervicaux reçoivent les fibres de T1–T4) ; traverser la chaîne sans synapse (nerfs splanchniques) vers un ganglion prévertébral.</p>
<p>Les fibres <strong>postganglionnaires</strong> quittent la chaîne par : les <strong>rameaux communicants gris</strong> (amyéliniques, vers <strong>tous</strong> les nerfs spinaux, pour les vaisseaux, les glandes sudoripares et les muscles arrecteurs de la peau et des membres) ; les <strong>nerfs vasculaires</strong> (plexus carotidiens pour la tête : nerf carotidien interne du ganglion cervical supérieur → pupille, paupière, glandes, vaisseaux ; plexus vertébral, subclavier) ; les <strong>nerfs viscéraux</strong> (nerfs cardiaques cervicaux et thoraciques, nerfs pulmonaires, œsophagiens → plexus cardiaque et pulmonaire).</p>
<h4>Les ganglions prévertébraux et les nerfs splanchniques</h4>
<p>Pour les viscères abdominaux et pelviens, les fibres préganglionnaires traversent la chaîne et forment les <strong>nerfs splanchniques</strong> : <strong>grand splanchnique</strong> (T5–T9), <strong>petit splanchnique</strong> (T10–T11), <strong>splanchnique imus</strong> (T12), qui traversent le diaphragme (piliers) et font synapse dans les <strong>ganglions prévertébraux</strong> situés autour des branches de l'aorte : <strong>ganglions cœliaques</strong> (semi-lunaires, plexus cœliaque ou solaire autour du tronc cœliaque : estomac, foie, pancréas, rate, grêle, surrénale), <strong>aortico-rénaux</strong> (reins), <strong>mésentérique supérieur</strong> (grêle, côlon droit), <strong>mésentérique inférieur</strong> (côlon gauche, rectum) ; les <strong>nerfs splanchniques lombaux</strong> (L1–L2) rejoignent les plexus mésentérique inférieur et <strong>hypogastrique supérieur</strong> (devant L5), d'où les nerfs hypogastriques descendent vers les <strong>plexus hypogastriques inférieurs</strong> (pelviens : vessie, organes génitaux, rectum). Les fibres postganglionnaires suivent les artères jusqu'aux organes (plexus périartériels).</p>
<p>La <strong>médullosurrénale</strong> est un ganglion sympathique modifié : les cellules chromaffines, innervées directement par des fibres préganglionnaires (nerf grand splanchnique), libèrent dans le sang <strong>adrénaline</strong> (80 %) et noradrénaline (réponse hormonale généralisée au stress).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>syndrome de Claude Bernard-Horner</strong> (lésion de la voie sympathique céphalique : ganglion stellaire, apex pulmonaire (Pancoast), dissection carotidienne, lésion du tronc cérébral ou de la moelle cervicale, bloc du plexus brachial) associe <strong>ptosis</strong> (muscle tarsal de Müller), <strong>myosis</strong> (dilatateur de la pupille) et <strong>énophtalmie</strong> apparente, avec anhidrose de l'hémiface. La <strong>sympathectomie thoracique</strong> (T2–T3) traite l'hyperhidrose palmaire ; le <strong>bloc du ganglion stellaire</strong> traite certaines douleurs du membre supérieur. La <strong>douleur viscérale référée</strong> suit les afférences sympathiques vers le segment médullaire (cœur T1–T4, estomac T6–T9, appendice T10, rein T10–L1).</div>`
            },
            {
              titre: "Le système parasympathique : organisation anatomique",
              contenu: `<h4>Le contingent crânien</h4>
<p>Les neurones préganglionnaires sont dans quatre noyaux du tronc cérébral et leurs axones empruntent quatre nerfs crâniens vers quatre ganglions céphaliques (pour le III, VII, IX) ou vers les ganglions intra-muraux (X) :</p>
<table>
<thead><tr><th>Nerf</th><th>Noyau</th><th>Trajet des fibres préganglionnaires</th><th>Ganglion</th><th>Effecteurs</th></tr></thead>
<tbody>
<tr><td><strong>III</strong> oculomoteur</td><td>Noyau accessoire du III (Edinger-Westphal, mésencéphale)</td><td>Nerf III → branche inférieure → racine parasympathique</td><td><strong>Ganglion ciliaire</strong> (orbite, latéral au nerf optique)</td><td>Nerfs ciliaires courts → <strong>sphincter de la pupille</strong> (myosis), <strong>muscle ciliaire</strong> (accommodation)</td></tr>
<tr><td><strong>VII</strong> facial</td><td>Noyau salivaire supérieur et noyau lacrymal (pont)</td><td>Nerf intermédiaire → nerf grand pétreux (via le ganglion géniculé) → nerf du canal ptérygoïdien</td><td><strong>Ganglion ptérygo-palatin</strong> (fosse ptérygo-palatine)</td><td>Via le V2 : <strong>glande lacrymale</strong>, glandes nasales et palatines</td></tr>
<tr><td><strong>VII</strong> facial</td><td>Noyau salivaire supérieur</td><td>Corde du tympan → nerf lingual</td><td><strong>Ganglion submandibulaire</strong></td><td><strong>Glandes submandibulaire et sublinguale</strong></td></tr>
<tr><td><strong>IX</strong> glosso-pharyngien</td><td>Noyau salivaire inférieur (bulbe)</td><td>Nerf tympanique → plexus tympanique → nerf petit pétreux</td><td><strong>Ganglion otique</strong> (sous le foramen ovale)</td><td>Via le nerf auriculo-temporal (V3) : <strong>glande parotide</strong></td></tr>
<tr><td><strong>X</strong> vague</td><td>Noyau dorsal du vague et noyau ambigu (bulbe)</td><td>Tronc du X et ses branches (cardiaques, pulmonaires, œsophagiennes, troncs vagaux abdominaux)</td><td>Ganglions <strong>intra-muraux</strong> ou juxta-viscéraux (plexus cardiaque, pulmonaire, œsophagien, plexus entériques)</td><td><strong>Cœur</strong> (bradycardie), <strong>bronches</strong> (constriction, sécrétion), <strong>tube digestif</strong> de l'œsophage à l'angle colique gauche (motricité, sécrétion), foie, pancréas, reins</td></tr>
</tbody>
</table>
<p>Le <strong>nerf vague</strong> véhicule à lui seul 75 % des fibres parasympathiques de l'organisme. Les ganglions céphaliques sont traversés sans synapse par des fibres sympathiques (venues du plexus carotidien) et sensitives (du V) : ce sont des « carrefours » dont seules les fibres parasympathiques relaient.</p>
<h4>Le contingent sacré</h4>
<p>Les neurones préganglionnaires occupent la <strong>moelle sacrée S2–S4</strong> (noyau parasympathique sacral, zone intermédio-latérale). Leurs axones sortent par les racines antérieures S2–S4 et forment les <strong>nerfs splanchniques pelviens</strong> (nerfs érecteurs d'Eckhardt), qui rejoignent les <strong>plexus hypogastriques inférieurs</strong> (plexus pelviens, de part et d'autre du rectum et de la vessie), où ils se mêlent aux fibres sympathiques des nerfs hypogastriques ; les synapses se font dans les plexus et dans les parois des organes. Effecteurs : <strong>vessie</strong> (contraction du détrusor : miction), <strong>côlon gauche et rectum</strong> (motricité, défécation), <strong>organes génitaux</strong> (vasodilatation : érection ; sécrétions). Des fibres remontent le long de l'artère mésentérique inférieure vers le côlon descendant et sigmoïde (la limite vague/sacré est l'angle colique gauche, point de Cannon-Böhm).</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le parasympathique n'a <strong>aucune distribution</strong> aux membres, à la paroi du tronc ni à la peau (vaisseaux et glandes sudoripares sont sous contrôle sympathique exclusif). Le ganglion ciliaire relaie le III, le ptérygo-palatin et le submandibulaire relaient le VII, l'otique relaie le IX : la parotide dépend du IX (bien que le VII la traverse), les glandes submandibulaire, sublinguale et lacrymale du VII. Les nerfs splanchniques thoraciques et lombaux sont <strong>sympathiques</strong>, les nerfs splanchniques pelviens sont <strong>parasympathiques</strong>.</div>`
            },
            {
              titre: "Médiateurs et récepteurs",
              contenu: `<ul>
<li>L'<strong>acétylcholine</strong> (ACh) est libérée par <strong>tous les neurones préganglionnaires</strong> (sympathiques et parasympathiques), agissant sur des <strong>récepteurs nicotiniques</strong> ganglionnaires (canaux ioniques, bloqués par les ganglioplégiques), par <strong>tous les neurones postganglionnaires parasympathiques</strong>, agissant sur des <strong>récepteurs muscariniques</strong> (M1 à M5, couplés aux protéines G ; M2 cardiaques, M3 muscles lisses et glandes ; bloqués par l'atropine), et par les neurones postganglionnaires <strong>sympathiques des glandes sudoripares</strong> (muscariniques) ; c'est aussi le médiateur de la jonction neuromusculaire somatique (nicotinique).</li>
<li>La <strong>noradrénaline</strong> (NA) est libérée par les neurones <strong>postganglionnaires sympathiques</strong>, agissant sur des <strong>récepteurs adrénergiques</strong> : <strong>alpha-1</strong> (vasoconstriction, contraction du dilatateur de la pupille, des sphincters digestifs et vésical, du muscle tarsal, de la prostate), <strong>alpha-2</strong> (présynaptiques, rétrocontrôle), <strong>bêta-1</strong> (cœur : accélération, inotropisme, conduction ; rein : rénine), <strong>bêta-2</strong> (bronchodilatation, vasodilatation des muscles squelettiques et coronaires, relâchement utérin et du détrusor, glycogénolyse), <strong>bêta-3</strong> (lipolyse, détrusor).</li>
<li>L'<strong>adrénaline</strong> de la médullosurrénale agit sur tous les récepteurs adrénergiques (hormone circulante).</li>
<li>Co-transmetteurs : ATP, neuropeptide Y (sympathique), VIP, NO (parasympathique : vasodilatation, érection ; cible des inhibiteurs de la phosphodiestérase 5).</li>
</ul>
<table>
<thead><tr><th>Site</th><th>Médiateur</th><th>Récepteur</th><th>Pharmacologie</th></tr></thead>
<tbody>
<tr><td>Ganglions végétatifs (S et PS)</td><td>Acétylcholine</td><td>Nicotinique (NN)</td><td>Nicotine (stimule), ganglioplégiques</td></tr>
<tr><td>Terminaison parasympathique</td><td>Acétylcholine</td><td>Muscarinique (M1–M5)</td><td>Agonistes : pilocarpine ; antagonistes : <strong>atropine</strong>, scopolamine, anticholinergiques ; anticholinestérasiques (prolongent l'action)</td></tr>
<tr><td>Terminaison sympathique</td><td>Noradrénaline</td><td>Alpha-1, alpha-2, bêta-1, bêta-2, bêta-3</td><td>Agonistes : adrénaline, noradrénaline, salbutamol (bêta-2), phényléphrine (alpha-1) ; antagonistes : <strong>bêta-bloquants</strong>, alpha-bloquants</td></tr>
<tr><td>Glandes sudoripares (sympathique)</td><td>Acétylcholine</td><td>Muscarinique</td><td>Anhidrose sous atropine</td></tr>
<tr><td>Médullosurrénale</td><td>Acétylcholine (préganglionnaire) → adrénaline (hormone)</td><td>Nicotinique → récepteurs adrénergiques</td><td>Phéochromocytome</td></tr>
<tr><td>Jonction neuromusculaire somatique</td><td>Acétylcholine</td><td>Nicotinique (NM)</td><td>Curares, myasthénie</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>atropine</strong> (parasympatholytique) accélère le cœur (bradycardie vagale), dilate la pupille, assèche les sécrétions, relâche les bronches et le tube digestif, entraîne une rétention urinaire ; les <strong>bêta-bloquants</strong> ralentissent le cœur et abaissent la tension (mais peuvent provoquer un bronchospasme) ; le <strong>salbutamol</strong> (bêta-2 agoniste) dilate les bronches ; l'<strong>adrénaline</strong> est le traitement du choc anaphylactique et de l'arrêt cardiaque. L'intoxication par les organophosphorés (anticholinestérasiques) donne un syndrome muscarinique (myosis, hypersécrétions, bradycardie, bronchospasme) traité par l'atropine.</div>`
            },
            {
              titre: "Effets sur les organes",
              contenu: `<p>La plupart des organes reçoivent une <strong>double innervation</strong> antagoniste ; quelques effecteurs n'ont qu'une innervation sympathique (vaisseaux de la peau et des muscles, glandes sudoripares, muscles arrecteurs, médullosurrénale, rate, dilatateur de la pupille) et le tonus de base résulte d'un équilibre (prédominance vagale au repos sur le cœur : fréquence intrinsèque de 100/min ramenée à 70).</p>
<table>
<thead><tr><th>Organe</th><th>Sympathique (noradrénaline)</th><th>Parasympathique (acétylcholine)</th></tr></thead>
<tbody>
<tr><td><strong>Pupille</strong></td><td><strong>Mydriase</strong> (dilatateur, alpha-1)</td><td><strong>Myosis</strong> (sphincter, M3)</td></tr>
<tr><td>Muscle ciliaire</td><td>Relâchement (vision de loin)</td><td>Contraction : <strong>accommodation</strong> (vision de près)</td></tr>
<tr><td>Paupière</td><td>Élévation (muscle tarsal supérieur, alpha-1)</td><td>—</td></tr>
<tr><td><strong>Glandes lacrymales et salivaires</strong></td><td>Sécrétion faible, visqueuse (vasoconstriction)</td><td><strong>Sécrétion abondante</strong>, aqueuse</td></tr>
<tr><td><strong>Cœur</strong></td><td><strong>Tachycardie</strong>, augmentation de la contractilité et de la conduction (bêta-1), dilatation coronaire (bêta-2)</td><td><strong>Bradycardie</strong>, ralentissement de la conduction AV, faible effet sur la contractilité ventriculaire (M2)</td></tr>
<tr><td><strong>Vaisseaux</strong></td><td><strong>Vasoconstriction</strong> (alpha-1 : peau, viscères, reins) ; vasodilatation des muscles squelettiques et des coronaires (bêta-2) ; maintien de la pression artérielle</td><td>Vasodilatation limitée (organes génitaux : érection via NO ; glandes)</td></tr>
<tr><td><strong>Bronches</strong></td><td><strong>Bronchodilatation</strong> (bêta-2), diminution des sécrétions</td><td><strong>Bronchoconstriction</strong>, hypersécrétion (M3)</td></tr>
<tr><td><strong>Tube digestif</strong></td><td>Diminution du péristaltisme et des sécrétions, <strong>contraction des sphincters</strong>, vasoconstriction</td><td><strong>Augmentation du péristaltisme et des sécrétions</strong>, relâchement des sphincters</td></tr>
<tr><td><strong>Foie, pancréas</strong></td><td>Glycogénolyse, néoglucogenèse, diminution de l'insuline (alpha-2)</td><td>Sécrétion exocrine et d'insuline</td></tr>
<tr><td><strong>Vessie</strong></td><td>Relâchement du détrusor (bêta-3), <strong>contraction du sphincter interne</strong> (alpha-1) : <strong>continence</strong></td><td><strong>Contraction du détrusor</strong>, relâchement du sphincter interne : <strong>miction</strong></td></tr>
<tr><td><strong>Organes génitaux</strong></td><td><strong>Éjaculation</strong>, contraction des voies spermatiques et de l'utérus (alpha-1), vasoconstriction</td><td><strong>Érection</strong> (vasodilatation des corps érectiles, NO), sécrétions glandulaires</td></tr>
<tr><td><strong>Peau</strong></td><td><strong>Sudation</strong> (cholinergique), piloérection, vasoconstriction (pâleur)</td><td>—</td></tr>
<tr><td><strong>Médullosurrénale</strong></td><td>Libération d'adrénaline</td><td>—</td></tr>
<tr><td><strong>Rein</strong></td><td>Sécrétion de rénine (bêta-1), vasoconstriction, rétention sodée</td><td>—</td></tr>
<tr><td><strong>Métabolisme</strong></td><td>Lipolyse (bêta-3), hyperglycémie, thermogenèse</td><td>Anabolisme</td></tr>
</tbody>
</table>
<h4>Les afférences viscérales et les réflexes végétatifs</h4>
<p>Les fibres sensitives viscérales (corps cellulaires dans les ganglions spinaux et les ganglions du IX et du X) suivent les nerfs végétatifs : les afférences <strong>vagales et glosso-pharyngiennes</strong> (barorécepteurs du sinus carotidien et de l'arc aortique, chémorécepteurs, récepteurs pulmonaires, digestifs) gagnent le <strong>noyau du tractus solitaire</strong> (réflexes cardio-vasculaires, respiratoires, vomissement, inconscients) ; les afférences <strong>sympathiques</strong> conduisent surtout la <strong>douleur viscérale</strong> (distension, ischémie, inflammation) vers les segments T1–L2, où leur convergence avec les afférences cutanées explique la <strong>douleur référée</strong> (projetée) : cœur → T1–T4 (rétrosternale, bras gauche, mâchoire) ; estomac et voies biliaires → T6–T9 (épigastre, épaule droite via le phrénique pour la vésicule) ; grêle et appendice → T10 (péri-ombilicale) ; côlon → T11–L1 (hypogastre) ; rein et uretère → T10–L1 (lombes, fosse iliaque, testicule) ; vessie, utérus, rectum → S2–S4 (périnée, sacrum) et T11–L1.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>syncope vaso-vagale</strong> (émotion, douleur, station debout) résulte d'une hyperactivité parasympathique et d'une inhibition sympathique (bradycardie et vasodilatation). L'<strong>hypotension orthostatique</strong> traduit une défaillance du baroréflexe sympathique (dysautonomie diabétique, maladie de Parkinson, médicaments). La <strong>vessie neurologique</strong> dépend du niveau lésionnel : hyperactive (lésion suprasacrée : miction réflexe automatique) ou flasque (lésion sacrée : rétention). Le <strong>massage du sinus carotidien</strong> (IX → X) ralentit le cœur. La <strong>dysréflexie autonome</strong> du blessé médullaire haut est une poussée hypertensive réflexe déclenchée par une distension vésicale ou rectale.</div>`
            }
          ],
          points_cles: [
            "Le SNA innerve muscles lisses, myocarde et glandes de façon involontaire ; voie efférente à deux neurones (préganglionnaire myélinisé, postganglionnaire amyélinique) avec un ganglion ; deux systèmes antagonistes : sympathique et parasympathique ; système entérique autonome.",
            "Sympathique : centres thoraco-lombaux T1–L2 (corne latérale), rameaux communicants blancs, chaînes paravertébrales (3 ganglions cervicaux dont le stellaire, 11–12 thoraciques, 4 lombaux, 4–5 sacrés), rameaux communicants gris vers tous les nerfs spinaux.",
            "Nerfs splanchniques sympathiques (grand T5–T9, petit T10–T11, imus T12, lombaux) → ganglions prévertébraux (cœliaques, aortico-rénaux, mésentériques, plexus hypogastrique supérieur) ; médullosurrénale = ganglion modifié libérant l'adrénaline.",
            "Parasympathique crânien : III (ganglion ciliaire : myosis, accommodation), VII (ptérygo-palatin : larmes, nez ; submandibulaire : glandes submandibulaire et sublinguale), IX (otique : parotide), X (ganglions intra-muraux : cœur, bronches, tube digestif jusqu'à l'angle colique gauche ; 75 % des fibres).",
            "Parasympathique sacré S2–S4 : nerfs splanchniques pelviens → plexus hypogastriques inférieurs → vessie (miction), rectum (défécation), organes génitaux (érection) ; pas de parasympathique pour les membres et la peau.",
            "Tous les préganglionnaires et les postganglionnaires parasympathiques sont cholinergiques (nicotinique au ganglion, muscarinique à l'effecteur) ; les postganglionnaires sympathiques sont noradrénergiques (alpha-1, alpha-2, bêta-1, bêta-2, bêta-3), sauf glandes sudoripares (cholinergiques).",
            "Sympathique : mydriase, tachycardie, vasoconstriction, bronchodilatation, inhibition digestive, continence, éjaculation, sudation, hyperglycémie ; parasympathique : myosis, accommodation, bradycardie, bronchoconstriction, sécrétions, péristaltisme, miction, érection.",
            "Syndrome de Claude Bernard-Horner (lésion sympathique céphalique) : ptosis, myosis, énophtalmie, anhidrose ; causes : ganglion stellaire, apex pulmonaire, dissection carotidienne, lésion médullaire cervicale.",
            "La douleur viscérale référée suit les afférences sympathiques vers T1–L2 : cœur T1–T4 (bras gauche), estomac T6–T9, appendice T10 (ombilic), rein T10–L1 ; les afférences vagales (barorécepteurs) gagnent le noyau du tractus solitaire.",
            "Pharmacologie : atropine (antimuscarinique), bêta-bloquants, bêta-2 agonistes, adrénaline ; intoxication aux anticholinestérasiques = syndrome muscarinique."
          ],
          lexique: [
            { terme: "Neurone préganglionnaire", def: "Premier neurone de la voie végétative, dont le corps est dans le SNC et l'axone myélinisé fait synapse dans un ganglion végétatif." },
            { terme: "Rameau communicant blanc", def: "Fibres sympathiques préganglionnaires myélinisées allant du nerf spinal (T1–L2) au ganglion paravertébral." },
            { terme: "Rameau communicant gris", def: "Fibres sympathiques postganglionnaires amyéliniques revenant du ganglion paravertébral vers chaque nerf spinal (vaisseaux, sueur, poils)." },
            { terme: "Ganglion stellaire", def: "Ganglion cervico-thoracique, fusion du ganglion cervical inférieur et du 1er thoracique, sur le col de la 1re côte ; sa lésion donne un Claude Bernard-Horner." },
            { terme: "Nerf grand splanchnique", def: "Nerf sympathique préganglionnaire (T5–T9) traversant le diaphragme vers les ganglions cœliaques." },
            { terme: "Ganglion cœliaque", def: "Ganglion prévertébral du plexus cœliaque (solaire), autour du tronc cœliaque, relais sympathique des viscères abdominaux sus-mésocoliques." },
            { terme: "Nerfs splanchniques pelviens", def: "Fibres parasympathiques préganglionnaires S2–S4 (nerfs érecteurs) destinées aux plexus hypogastriques inférieurs et aux viscères pelviens." },
            { terme: "Ganglion ciliaire", def: "Ganglion parasympathique de l'orbite relayant les fibres du III vers le sphincter de la pupille et le muscle ciliaire." },
            { terme: "Récepteur muscarinique", def: "Récepteur cholinergique couplé aux protéines G des effecteurs parasympathiques (et des glandes sudoripares), bloqué par l'atropine." },
            { terme: "Syndrome de Claude Bernard-Horner", def: "Ptosis, myosis, énophtalmie et anhidrose par interruption de la voie sympathique oculo-faciale." }
          ],
          qcm: [
            {
              q: "Concernant l'organisation générale du système nerveux autonome, quelles propositions sont exactes ?",
              options: [
                "A. La voie efférente végétative comprend deux neurones successifs.",
                "B. Les centres sympathiques sont situés dans la moelle de T1 à L2.",
                "C. Les centres parasympathiques sont thoraco-lombaux.",
                "D. Les ganglions parasympathiques sont situés près ou dans les organes cibles.",
                "E. La fibre postganglionnaire sympathique est courte."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : les centres parasympathiques sont crânio-sacrés (III, VII, IX, X et S2–S4). E est fausse : la fibre postganglionnaire sympathique est longue (ganglions près de la colonne) ; c'est la parasympathique qui est courte."
            },
            {
              q: "Concernant le système sympathique, quelles propositions sont exactes ?",
              options: [
                "A. Les rameaux communicants blancs n'existent qu'aux niveaux T1 à L2.",
                "B. Le ganglion stellaire résulte de la fusion du ganglion cervical inférieur et du premier ganglion thoracique.",
                "C. Le nerf grand splanchnique est formé de fibres postganglionnaires.",
                "D. Les ganglions cœliaques sont des ganglions prévertébraux.",
                "E. La médullosurrénale est innervée directement par des fibres préganglionnaires."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : les nerfs splanchniques sont formés de fibres préganglionnaires qui traversent la chaîne sans synapse et relaient dans les ganglions prévertébraux."
            },
            {
              q: "Concernant le système parasympathique, quelles associations sont exactes ?",
              options: [
                "A. Nerf III – ganglion ciliaire – sphincter de la pupille.",
                "B. Nerf VII – ganglion otique – glande parotide.",
                "C. Nerf IX – ganglion otique – glande parotide.",
                "D. Nerf VII – ganglion ptérygo-palatin – glande lacrymale.",
                "E. Nerfs splanchniques pelviens – S2–S4 – vessie et organes génitaux."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la parotide dépend du IX via le ganglion otique ; le VII relaie dans les ganglions ptérygo-palatin et submandibulaire."
            },
            {
              q: "Concernant les médiateurs et récepteurs, quelles propositions sont exactes ?",
              options: [
                "A. Tous les neurones préganglionnaires libèrent de l'acétylcholine.",
                "B. Les récepteurs ganglionnaires sont de type muscarinique.",
                "C. Les neurones postganglionnaires sympathiques des glandes sudoripares sont cholinergiques.",
                "D. L'atropine bloque les récepteurs muscariniques.",
                "E. Les récepteurs bêta-2 provoquent une bronchoconstriction."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : les récepteurs ganglionnaires sont nicotiniques. E est fausse : la stimulation bêta-2 provoque une bronchodilatation (salbutamol)."
            },
            {
              q: "Concernant les effets sur les organes, quelles propositions sont exactes ?",
              options: [
                "A. Le sympathique provoque une mydriase.",
                "B. Le parasympathique provoque une tachycardie.",
                "C. Le parasympathique contracte le détrusor et permet la miction.",
                "D. Le sympathique augmente le péristaltisme intestinal.",
                "E. L'érection dépend du parasympathique et l'éjaculation du sympathique."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : le parasympathique (vague) ralentit le cœur. D est fausse : le sympathique inhibe le péristaltisme et contracte les sphincters."
            },
            {
              q: "Concernant le syndrome de Claude Bernard-Horner et les afférences viscérales, quelles propositions sont exactes ?",
              options: [
                "A. Le syndrome de Claude Bernard-Horner associe ptosis, myosis et énophtalmie.",
                "B. Il traduit une lésion de la voie parasympathique.",
                "C. Une tumeur de l'apex pulmonaire peut le provoquer.",
                "D. La douleur de l'infarctus du myocarde est référée dans les dermatomes T1–T4.",
                "E. Les afférences des barorécepteurs carotidiens gagnent le noyau du tractus solitaire."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : il traduit une lésion de la voie sympathique oculo-faciale (ganglion stellaire, plexus carotidien)."
            },
            {
              q: "Concernant la pharmacologie et la clinique du système nerveux autonome, quelles propositions sont exactes ?",
              options: [
                "A. L'atropine accélère la fréquence cardiaque.",
                "B. Les bêta-bloquants peuvent provoquer un bronchospasme.",
                "C. Le nerf vague véhicule environ 75 % des fibres parasympathiques de l'organisme.",
                "D. Le parasympathique innerve les vaisseaux et les glandes sudoripares des membres.",
                "E. Une lésion médullaire sacrée entraîne une vessie flasque avec rétention."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la peau et les vaisseaux des membres ne reçoivent qu'une innervation sympathique."
            }
          ]
        },
        {
          id: "organes-des-sens",
          titre: "Les organes des sens",
          duree: 55,
          objectifs: [
            "Décrire le globe oculaire (tuniques, milieux transparents, chambres) et ses annexes (paupières, appareil lacrymal, muscles oculomoteurs).",
            "Décrire les voies visuelles du nerf optique au cortex occipital et interpréter les déficits du champ visuel.",
            "Décrire l'oreille externe, moyenne (tympan, osselets, trompe) et interne (cochlée, vestibule, canaux semi-circulaires).",
            "Décrire les voies auditives et vestibulaires et les grands types de surdité.",
            "Décrire les organes de l'olfaction et de la gustation et leurs voies."
          ],
          sections: [
            {
              titre: "Le globe oculaire",
              contenu: `<p>Le <strong>globe oculaire</strong> (bulbe de l'œil) est une sphère d'environ <strong>24 mm</strong> de diamètre (7 mL, 7 g), logée dans la partie antérieure de l'orbite, entourée de graisse et des muscles oculomoteurs. Il est formé de <strong>trois tuniques</strong> concentriques et de <strong>trois milieux transparents</strong>.</p>
<h4>Les trois tuniques</h4>
<table>
<thead><tr><th>Tunique</th><th>Partie antérieure</th><th>Partie postérieure</th></tr></thead>
<tbody>
<tr><td><strong>Externe, fibreuse</strong></td><td><strong>Cornée</strong> : transparente, avasculaire, très innervée (V1 : réflexe cornéen), 11–12 mm de diamètre, 0,5 mm d'épaisseur, bombée (principal élément réfractif : 40 dioptries sur 60) ; cinq couches (épithélium, Bowman, stroma, Descemet, endothélium) ; jonction avec la sclère au <strong>limbe</strong></td><td><strong>Sclère</strong> : blanche, opaque, résistante (0,5–1 mm), insertion des muscles oculomoteurs, traversée en arrière par le nerf optique (lame criblée) et les vaisseaux ciliaires</td></tr>
<tr><td><strong>Moyenne, vasculaire (uvée)</strong></td><td><strong>Iris</strong> : diaphragme pigmenté percé de la <strong>pupille</strong> (2 à 8 mm), avec le sphincter (parasympathique, myosis) et le dilatateur (sympathique, mydriase). <strong>Corps ciliaire</strong> : muscle ciliaire (accommodation, parasympathique III), procès ciliaires (sécrétion de l'humeur aqueuse), zonule (ligament suspenseur du cristallin)</td><td><strong>Choroïde</strong> : couche vasculaire nourricière de la rétine externe (artères ciliaires), pigmentée (chambre noire)</td></tr>
<tr><td><strong>Interne, nerveuse</strong></td><td>Partie aveugle (irienne et ciliaire), limitée par l'<strong>ora serrata</strong></td><td><strong>Rétine</strong> : dix couches, du dehors en dedans : épithélium pigmentaire, <strong>photorécepteurs</strong> (120 millions de <strong>bâtonnets</strong> : vision nocturne et périphérique ; 6 millions de <strong>cônes</strong> : vision diurne, couleurs, acuité), cellules bipolaires, <strong>cellules ganglionnaires</strong> (dont les axones forment le nerf optique). Points remarquables : la <strong>macula</strong> (tache jaune, 5 mm, au pôle postérieur, avec la <strong>fovéa</strong> centrale, 1,5 mm, cônes exclusifs, acuité maximale, dans l'axe visuel) et la <strong>papille</strong> (disque du nerf optique, 1,5 mm, 3–4 mm en dedans de la macula, tache aveugle, sans photorécepteur, d'où émergent l'artère et la veine centrales de la rétine)</td></tr>
</tbody>
</table>
<h4>Les milieux transparents et les chambres</h4>
<ul>
<li>L'<strong>humeur aqueuse</strong> : sécrétée par les procès ciliaires dans la <strong>chambre postérieure</strong> (entre iris et cristallin), passe par la pupille dans la <strong>chambre antérieure</strong> (entre cornée et iris, 3 mm de profondeur) et est résorbée dans l'<strong>angle irido-cornéen</strong> par le trabéculum et le <strong>canal de Schlemm</strong> (sinus veineux de la sclère) ; elle détermine la <strong>pression intra-oculaire</strong> (10–21 mmHg) ; renouvelée en 2–3 heures.</li>
<li>Le <strong>cristallin</strong> : lentille biconvexe transparente de 10 mm de diamètre et 4 mm d'épaisseur, avasculaire, suspendue au corps ciliaire par la <strong>zonule</strong> ; sa déformation (bombement par relâchement de la zonule lors de la contraction du muscle ciliaire) assure l'<strong>accommodation</strong> (20 dioptries ; perte avec l'âge : presbytie) ; son opacification est la <strong>cataracte</strong>.</li>
<li>Le <strong>corps vitré</strong> : gel transparent (99 % d'eau, acide hyaluronique) remplissant les quatre cinquièmes du globe en arrière du cristallin (<strong>chambre vitrée</strong>) ; maintient la rétine appliquée.</li>
</ul>
<h4>Vascularisation et innervation</h4>
<p>L'<strong>artère ophtalmique</strong> (carotide interne) donne l'<strong>artère centrale de la rétine</strong> (dans le nerf optique ; vascularise les couches internes de la rétine ; artère terminale : son occlusion donne une cécité brutale) et les <strong>artères ciliaires</strong> (courtes postérieures → choroïde ; longues postérieures → iris et corps ciliaire ; antérieures). Veines : vortiqueuses et centrale de la rétine → veines ophtalmiques → sinus caverneux. Innervation : sensitive par le V1 (nerfs ciliaires), motrice par le III (sphincter, muscle ciliaire, via le ganglion ciliaire), sympathique (dilatateur, via le plexus carotidien et les nerfs ciliaires longs).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>glaucome</strong> est une neuropathie optique par hyperpression intra-oculaire (obstacle à la résorption de l'humeur aqueuse : chronique à angle ouvert ; aigu par fermeture de l'angle, douleur et mydriase aréactive : urgence). Le <strong>décollement de rétine</strong> sépare la rétine neurosensorielle de l'épithélium pigmentaire (myope, traumatisme). La <strong>DMLA</strong> détruit la macula (vision centrale). Le fond d'œil visualise la papille (œdème papillaire de l'HTIC, atrophie optique), la macula et les vaisseaux (rétinopathie diabétique, hypertensive).</div>`
            },
            {
              titre: "Les annexes de l'œil",
              contenu: `<h4>Les muscles oculomoteurs</h4>
<p>Six muscles striés mobilisent le globe autour de son centre : quatre <strong>muscles droits</strong> (supérieur, inférieur, médial, latéral) nés de l'<strong>anneau tendineux commun</strong> (de Zinn) au sommet de l'orbite et insérés sur la sclère à 6–8 mm du limbe, et deux <strong>muscles obliques</strong> : l'<strong>oblique supérieur</strong> (né au sommet, se réfléchit sur la <strong>trochlée</strong> à l'angle supéro-médial de l'orbite et s'insère en arrière et en dehors sur le quadrant supéro-latéral) et l'<strong>oblique inférieur</strong> (né du plancher près du sac lacrymal, inséré sur le quadrant inféro-latéral postérieur). L'<strong>élévateur de la paupière supérieure</strong> (III) accompagne le droit supérieur.</p>
<table>
<thead><tr><th>Muscle</th><th>Action principale</th><th>Actions secondaires</th><th>Nerf</th></tr></thead>
<tbody>
<tr><td>Droit médial</td><td>Adduction</td><td>—</td><td>III</td></tr>
<tr><td>Droit latéral</td><td>Abduction</td><td>—</td><td><strong>VI</strong></td></tr>
<tr><td>Droit supérieur</td><td>Élévation</td><td>Adduction, intorsion</td><td>III</td></tr>
<tr><td>Droit inférieur</td><td>Abaissement</td><td>Adduction, extorsion</td><td>III</td></tr>
<tr><td>Oblique supérieur</td><td>Intorsion</td><td><strong>Abaissement</strong> (surtout en adduction), abduction</td><td><strong>IV</strong></td></tr>
<tr><td>Oblique inférieur</td><td>Extorsion</td><td><strong>Élévation</strong> (surtout en adduction), abduction</td><td>III</td></tr>
</tbody>
</table>
<p>Les mouvements conjugués des deux yeux (versions) sont coordonnés par les centres du regard (frontal, pontique paramédian pour l'horizontalité, mésencéphalique pour la verticalité) et le faisceau longitudinal médial reliant les noyaux III, IV, VI et vestibulaires. Un déséquilibre donne un <strong>strabisme</strong> et une <strong>diplopie</strong>.</p>
<h4>Les paupières et la conjonctive</h4>
<p>Les <strong>paupières</strong> (supérieure, plus mobile, et inférieure) protègent le globe ; elles comprennent la peau, l'<strong>orbiculaire de l'œil</strong> (VII : fermeture), le <strong>tarse</strong> (lame fibreuse contenant les glandes de Meibomius, sébacées), l'<strong>élévateur de la paupière supérieure</strong> (III) et le <strong>muscle tarsal supérieur</strong> (de Müller, lisse, sympathique : ptosis du Claude Bernard-Horner), et la <strong>conjonctive</strong> (muqueuse tapissant la face postérieure des paupières — conjonctive palpébrale — et la face antérieure de la sclère jusqu'au limbe — conjonctive bulbaire —, formant les culs-de-sac conjonctivaux). Les cils portent les glandes de Zeis et de Moll (orgelet). La fente palpébrale est limitée par les angles (canthus) médial (caroncule lacrymale) et latéral.</p>
<h4>L'appareil lacrymal</h4>
<p>La <strong>glande lacrymale</strong> (angle supéro-latéral de l'orbite, fosse lacrymale du frontal, parasympathique VII via le ganglion ptérygo-palatin, 1 mL/jour) sécrète les larmes qui balaient la cornée (clignement) vers l'angle médial, pénètrent par les <strong>points lacrymaux</strong> dans les <strong>canalicules lacrymaux</strong>, le <strong>sac lacrymal</strong> (fosse du sac, entre maxillaire et os lacrymal) puis le <strong>conduit naso-lacrymal</strong> (12 mm) qui s'ouvre dans le <strong>méat nasal inférieur</strong> (d'où le nez qui coule quand on pleure). Le film lacrymal (couches lipidique, aqueuse, muqueuse) nourrit et protège la cornée.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>ptosis</strong> peut être lié au III (complet, avec mydriase), au sympathique (discret, avec myosis : Claude Bernard-Horner), à la myasthénie ou à l'âge (désinsertion de l'élévateur). La <strong>paralysie faciale</strong> empêche l'occlusion palpébrale (kératite d'exposition). L'<strong>obstruction du conduit naso-lacrymal</strong> (nourrisson, âge) donne un larmoiement et des dacryocystites ; le sondage ou la dacryo-cysto-rhinostomie rétablissent le drainage. Le test de Schirmer mesure la sécrétion lacrymale (syndrome sec).</div>`
            },
            {
              titre: "Les voies visuelles",
              contenu: `<p>La <strong>rétine</strong> contient les trois premiers neurones de la voie visuelle (photorécepteurs, cellules bipolaires, cellules ganglionnaires). Les axones des <strong>cellules ganglionnaires</strong> (1,2 million) convergent vers la papille et forment le <strong>nerf optique (II)</strong> (4–5 cm : segments intra-oculaire, intra-orbitaire, intra-canalaire, intra-crânien), entouré des trois méninges et du LCS (œdème papillaire en cas d'HTIC).</p>
<h4>Le chiasma et les tractus optiques</h4>
<p>Au <strong>chiasma optique</strong> (au-dessus de la selle turcique et de l'hypophyse, en avant de la tige pituitaire, sous le 3<sup>e</sup> ventricule), les fibres issues des <strong>hémirétines nasales</strong> (qui voient les hémichamps temporaux) <strong>croisent</strong> la ligne médiane, tandis que les fibres des hémirétines temporales (hémichamps nasaux) restent directes. Chaque <strong>tractus optique</strong> (bandelette) conduit donc les informations de l'<strong>hémichamp visuel controlatéral</strong> (hémirétine temporale homolatérale + hémirétine nasale controlatérale) et contourne le pédoncule cérébral pour atteindre le <strong>corps géniculé latéral</strong> du thalamus (relais, 4<sup>e</sup> neurone). Quelques fibres gagnent le colliculus supérieur (réflexes d'orientation), la région prétectale (réflexe photomoteur, bilatéral via le noyau d'Edinger-Westphal) et le noyau supra-chiasmatique (rythmes circadiens).</p>
<h4>Les radiations optiques et le cortex visuel</h4>
<p>Du corps géniculé latéral, les <strong>radiations optiques</strong> (faisceau géniculo-calcarin) traversent la partie rétro-lenticulaire de la capsule interne et la substance blanche temporo-pariéto-occipitale : les fibres du <strong>quadrant inférieur de la rétine</strong> (champ visuel supérieur) font une boucle en avant dans le lobe temporal (<strong>boucle de Meyer</strong>, autour de la corne temporale du ventricule) ; les fibres du quadrant supérieur (champ inférieur) passent par le lobe pariétal. Elles se terminent sur le <strong>cortex visuel primaire</strong> (aire 17, striée, sur les deux lèvres du <strong>sillon calcarin</strong>, face médiale du lobe occipital) : la lèvre supérieure (cunéus) reçoit le champ inférieur, la lèvre inférieure (gyrus lingual) le champ supérieur ; la <strong>macula</strong> se projette au pôle occipital (large représentation, double vascularisation cérébrale moyenne et postérieure : épargne maculaire). Les aires associatives (18, 19, voie ventrale temporale « quoi », voie dorsale pariétale « où ») analysent formes, couleurs, mouvements.</p>
<table>
<thead><tr><th>Siège de la lésion</th><th>Déficit du champ visuel</th><th>Cause typique</th></tr></thead>
<tbody>
<tr><td>Nerf optique</td><td><strong>Cécité monoculaire</strong> (ou scotome central), abolition du réflexe photomoteur direct avec conservation du consensuel</td><td>Névrite optique (SEP), traumatisme, ischémie (Horton)</td></tr>
<tr><td>Chiasma (partie médiane)</td><td><strong>Hémianopsie bitemporale</strong> (fibres nasales croisées)</td><td>Adénome hypophysaire, craniopharyngiome</td></tr>
<tr><td>Tractus optique</td><td><strong>Hémianopsie latérale homonyme</strong> controlatérale, incongruente</td><td>Tumeur, AVC</td></tr>
<tr><td>Radiations temporales (boucle de Meyer)</td><td><strong>Quadranopsie supérieure</strong> homonyme controlatérale</td><td>Lésion temporale</td></tr>
<tr><td>Radiations pariétales</td><td><strong>Quadranopsie inférieure</strong> homonyme controlatérale</td><td>Lésion pariétale</td></tr>
<tr><td>Cortex occipital</td><td><strong>Hémianopsie latérale homonyme</strong> congruente avec <strong>épargne maculaire</strong></td><td>AVC de la cérébrale postérieure</td></tr>
<tr><td>Cortex occipital bilatéral</td><td>Cécité corticale (réflexes pupillaires conservés)</td><td>Infarctus bilatéral</td></tr>
</tbody>
</table>
<h4>Les réflexes pupillaires</h4>
<p>Le <strong>réflexe photomoteur</strong> : rétine → nerf optique → tractus (fibres quittant le tractus avant le corps géniculé) → noyaux prétectaux (bilatéraux) → noyaux d'Edinger-Westphal des deux côtés → nerfs III → ganglions ciliaires → sphincters pupillaires : l'éclairement d'un œil contracte les deux pupilles (réflexe direct et consensuel). Le <strong>réflexe d'accommodation-convergence</strong> (vision de près) associe myosis, accommodation et convergence (droits médiaux). Une pupille dilatée fixe signe une atteinte du III (engagement) ; une pupille en myosis une atteinte sympathique ou une lésion pontique ; la pupille d'Argyll Robertson (réflexe photomoteur aboli, accommodation conservée) la syphilis ; le signe de Marcus Gunn une neuropathie optique.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> chaque hémisphère « voit » l'hémichamp visuel opposé ; les fibres nasales croisent au chiasma (hémianopsie bitemporale des tumeurs hypophysaires) ; toute lésion rétro-chiasmatique donne une hémianopsie latérale homonyme controlatérale, d'autant plus congruente et avec épargne maculaire qu'elle est postérieure ; le lobe temporal véhicule le champ supérieur, le pariétal le champ inférieur.</div>`
            },
            {
              titre: "L'oreille externe et l'oreille moyenne",
              contenu: `<h4>L'oreille externe</h4>
<p>L'<strong>auricule</strong> (pavillon) est une lame de cartilage élastique recouverte de peau (hélix, anthélix, tragus, antitragus, conque ; <strong>lobule</strong> sans cartilage), qui capte et localise les sons. Le <strong>méat acoustique externe</strong> (conduit auditif externe, 2,5 cm, en S, dirigé en avant et médialement) est cartilagineux dans son tiers latéral (poils, glandes cérumineuses) et osseux (partie tympanique du temporal) dans ses deux tiers médiaux ; pour l'otoscopie, on tire le pavillon en haut et en arrière. Innervation sensitive : V3 (auriculo-temporal), <strong>rameau auriculaire du X</strong> (toux réflexe à l'otoscopie), VII (zone de Ramsay-Hunt), C2–C3 (grand auriculaire) ; sa paroi antérieure est en rapport avec l'ATM et la parotide.</p>
<h4>La membrane du tympan</h4>
<p>Membrane fibro-élastique ovalaire de <strong>9–10 mm</strong>, gris nacré, translucide, inclinée (oblique en bas et en dedans), séparant l'oreille externe de la caisse. Trois couches (peau, fibreuse, muqueuse). Elle comprend la <strong>pars tensa</strong> (grande, inférieure, insérée dans le sillon tympanique par l'anneau fibro-cartilagineux) et la <strong>pars flaccida</strong> (petite, supérieure, membrane de Shrapnell : siège du cholestéatome). Repères otoscopiques : le <strong>manche du malléus</strong> (strie malléaire) se terminant à l'<strong>ombo</strong> (umbo, centre déprimé), le <strong>triangle lumineux</strong> antéro-inférieur (reflet), le processus latéral du malléus. Quatre quadrants ; la paracentèse se fait dans le quadrant antéro-inférieur. Innervation : V3 et X (face externe), IX (face interne : douleur des otites).</p>
<h4>L'oreille moyenne : la caisse du tympan</h4>
<p>Cavité aérienne de 1 cm<sup>3</sup> creusée dans le rocher, tapissée de muqueuse, en forme de lentille biconcave, à six parois :</p>
<ul>
<li><strong>Paroi latérale</strong> : membrane du tympan et, au-dessus, le mur osseux du <strong>récessus épitympanique</strong> (attique, contenant la tête du malléus et le corps de l'incus).</li>
<li><strong>Paroi médiale</strong> (labyrinthique) : le <strong>promontoire</strong> (saillie du tour basal de la cochlée, parcouru par le nerf tympanique du IX), la <strong>fenêtre vestibulaire</strong> (ovale, fermée par la base du stapès, en haut et en arrière), la <strong>fenêtre cochléaire</strong> (ronde, fermée par la membrane tympanique secondaire, en bas et en arrière), la saillie du <strong>canal facial</strong> (au-dessus de la fenêtre vestibulaire : le VII n'y est séparé de la caisse que par une mince lamelle, parfois déhiscente) et celle du canal semi-circulaire latéral.</li>
<li><strong>Paroi antérieure</strong> (carotidienne) : orifice de la <strong>trompe auditive</strong> (d'Eustache, 3,5–4 cm, tiers osseux puis deux tiers cartilagineux, oblique vers le nasopharynx ; équilibre les pressions, s'ouvre à la déglutition grâce au tenseur du voile ; plus courte et horizontale chez l'enfant : otites) et du canal du muscle tenseur du tympan ; au-dessous, la carotide interne.</li>
<li><strong>Paroi postérieure</strong> (mastoïdienne) : l'<strong>aditus ad antrum</strong> (vers l'antre mastoïdien et les <strong>cellules mastoïdiennes</strong> : mastoïdite), l'éminence pyramidale (muscle stapédien), la 3<sup>e</sup> portion du canal facial.</li>
<li><strong>Toit</strong> (tegmen tympani) : lame osseuse mince séparant la caisse de la fosse crânienne moyenne et du lobe temporal (méningite, abcès).</li>
<li><strong>Plancher</strong> (jugulaire) : en rapport avec le golfe de la veine jugulaire interne.</li>
</ul>
<h4>Les osselets et les muscles</h4>
<p>Trois osselets articulés (synoviales) transmettent et amplifient (× 20, par le rapport des surfaces tympan/fenêtre vestibulaire de 17 et le bras de levier) les vibrations du tympan au liquide de l'oreille interne : le <strong>malléus</strong> (marteau : manche fixé au tympan, tête dans l'attique), l'<strong>incus</strong> (enclume : corps, branche courte, branche longue) et le <strong>stapès</strong> (étrier, le plus petit os du corps, 3 mm : tête, deux branches, <strong>base</strong> ou platine fixée dans la fenêtre vestibulaire par le ligament annulaire). Deux muscles protègent l'oreille interne des sons forts : le <strong>tenseur du tympan</strong> (V3, tire le malléus en dedans) et le <strong>stapédien</strong> (VII, bascule le stapès : réflexe stapédien, hyperacousie dans les paralysies faciales hautes). La <strong>corde du tympan</strong> (VII) traverse la caisse entre le malléus et l'incus.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>otite moyenne aiguë</strong> (enfant, trompe courte, végétations) donne un tympan rouge bombé ; l'<strong>otite séreuse</strong> un épanchement rétro-tympanique (surdité de transmission). Les complications des otites chroniques et du <strong>cholestéatome</strong> (poche de rétraction de la pars flaccida) sont la mastoïdite, la paralysie faciale, la labyrinthite, la méningite et la thrombose du sinus sigmoïde. L'<strong>otospongiose</strong> (ankylose de la platine du stapès) donne une surdité de transmission bilatérale progressive de la femme jeune (stapédectomie). La fracture du rocher peut luxer la chaîne des osselets.</div>`
            },
            {
              titre: "L'oreille interne et les voies auditives et vestibulaires",
              contenu: `<h4>Le labyrinthe</h4>
<p>L'oreille interne, dans le <strong>rocher</strong>, comprend le <strong>labyrinthe osseux</strong> (cavités creusées dans l'os compact du rocher, contenant la <strong>périlymphe</strong>, proche du LCS, communiquant avec l'espace subarachnoïdien par l'aqueduc de la cochlée) et, à l'intérieur, le <strong>labyrinthe membraneux</strong> (contenant l'<strong>endolymphe</strong>, riche en potassium, sécrétée par la strie vasculaire, résorbée dans le sac endolymphatique). Il comprend :</p>
<ul>
<li>Le <strong>vestibule</strong> : cavité centrale, ouverte latéralement par la fenêtre vestibulaire, contenant deux organes de l'équilibre statique : l'<strong>utricule</strong> (horizontal) et le <strong>saccule</strong> (vertical), dont les <strong>macules</strong> (épithélium sensoriel à cellules ciliées recouvert de la membrane otolithique chargée d'otolithes) détectent les <strong>accélérations linéaires</strong> et la gravité (position de la tête).</li>
<li>Les trois <strong>canaux semi-circulaires</strong> (latéral ou horizontal, antérieur, postérieur), perpendiculaires entre eux, s'ouvrant dans l'utricule par cinq orifices ; chacun présente une <strong>ampoule</strong> contenant la <strong>crête ampullaire</strong> (cellules ciliées coiffées de la cupule) qui détecte les <strong>accélérations angulaires</strong> (rotations de la tête) par le déplacement de l'endolymphe. Les canaux des deux côtés fonctionnent par paires.</li>
<li>La <strong>cochlée</strong> (limaçon) : tube osseux enroulé en spirale de deux tours et demi (35 mm déroulé) autour du <strong>modiolus</strong> (axe contenant le ganglion spiral et les fibres du nerf cochléaire), dont le tour basal fait saillie dans la caisse (promontoire). La <strong>lame spirale</strong> osseuse et la membrane basilaire divisent le canal en <strong>rampe vestibulaire</strong> (en haut, partant de la fenêtre vestibulaire) et <strong>rampe tympanique</strong> (en bas, se terminant à la fenêtre cochléaire), toutes deux périlymphatiques et communiquant à l'apex par l'<strong>hélicotréma</strong> ; entre elles, le <strong>conduit cochléaire</strong> (canal cochléaire, endolymphatique, limité par la membrane vestibulaire de Reissner et la <strong>membrane basilaire</strong>) porte l'<strong>organe spiral</strong> (de Corti) : cellules ciliées internes (3 500, une rangée, véritables récepteurs) et externes (12 000, trois rangées, amplificateurs), recouvertes par la membrane tectoria. La membrane basilaire, étroite et rigide à la base, large et souple à l'apex, réalise une <strong>tonotopie</strong> : les sons aigus sont codés à la base, les graves à l'apex.</li>
</ul>
<h4>La transmission et les voies auditives</h4>
<p>Onde sonore → tympan → osselets → base du stapès → périlymphe de la rampe vestibulaire → déplacement de la membrane basilaire → cisaillement des cils des cellules ciliées → dépolarisation → <strong>nerf cochléaire</strong> (ganglion spiral, 1<sup>er</sup> neurone) → <strong>noyaux cochléaires</strong> (jonction ponto-bulbaire, 2<sup>e</sup> neurone) → projection <strong>bilatérale</strong> (surtout croisée, via le corps trapézoïde) vers le complexe olivaire supérieur (localisation du son) → <strong>lemnisque latéral</strong> → <strong>colliculus inférieur</strong> → <strong>corps géniculé médial</strong> (thalamus) → <strong>radiations auditives</strong> → <strong>cortex auditif primaire</strong> (aires 41–42, gyrus de Heschl, face supérieure du gyrus temporal supérieur, enfoui dans le sillon latéral), tonotopique, puis aire de Wernicke (compréhension) à gauche. Du fait de la bilatéralité des voies, une lésion unilatérale centrale ne donne pas de surdité ; les surdités sont périphériques.</p>
<h4>Les voies vestibulaires</h4>
<p>Cellules ciliées des macules et des crêtes → <strong>nerf vestibulaire</strong> (ganglion vestibulaire de Scarpa, dans le méat acoustique interne) → <strong>noyaux vestibulaires</strong> (quatre, plancher du 4<sup>e</sup> ventricule, jonction ponto-bulbaire) → projections vers : le <strong>cervelet</strong> (vestibulo-cervelet, lobe flocculo-nodulaire), la <strong>moelle</strong> (faisceau vestibulo-spinal : tonus des extenseurs, posture), les <strong>noyaux oculomoteurs</strong> (faisceau longitudinal médial : réflexe vestibulo-oculaire stabilisant le regard lors des mouvements de la tête ; nystagmus), le <strong>thalamus et le cortex</strong> (pariéto-insulaire : perception consciente de la position), la formation réticulaire et le noyau du X (nausées, vomissements du vertige).</p>
<table>
<thead><tr><th>Surdité</th><th>Siège</th><th>Causes</th><th>Acoumétrie</th></tr></thead>
<tbody>
<tr><td><strong>De transmission</strong></td><td>Oreille externe ou moyenne (conduit, tympan, osselets)</td><td>Bouchon de cérumen, otite séreuse, perforation, otospongiose, cholestéatome</td><td><strong>Rinne négatif</strong> (conduction osseuse supérieure à l'aérienne), <strong>Weber latéralisé du côté sourd</strong></td></tr>
<tr><td><strong>De perception</strong> (neurosensorielle)</td><td>Cochlée (endocochléaire) ou nerf cochléaire et voies (rétrocochléaire)</td><td>Presbyacousie, traumatisme sonore, ototoxiques, maladie de Ménière, surdité brusque, <strong>neurinome de l'acoustique</strong> (schwannome vestibulaire de l'angle ponto-cérébelleux)</td><td>Rinne positif (aérienne supérieure à l'osseuse, mais toutes deux diminuées), <strong>Weber latéralisé du côté sain</strong></td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le <strong>vertige</strong> (illusion de mouvement) périphérique s'accompagne d'un nystagmus horizonto-rotatoire, de nausées et parfois de signes auditifs : vertige positionnel paroxystique bénin (otolithes déplacés dans le canal postérieur, manœuvre de Dix-Hallpike et de libération), névrite vestibulaire, <strong>maladie de Ménière</strong> (hydrops endolymphatique : vertiges, surdité fluctuante, acouphènes). Le <strong>neurinome de l'acoustique</strong> donne une surdité de perception unilatérale progressive, puis une atteinte du VII et du V (IRM). Les ototoxiques (aminosides) détruisent les cellules ciliées. L'implant cochléaire stimule directement le nerf cochléaire.</div>`
            },
            {
              titre: "L'olfaction et la gustation",
              contenu: `<h4>L'olfaction</h4>
<p>La <strong>muqueuse olfactive</strong> (2–5 cm<sup>2</sup>, jaunâtre) tapisse le toit des cavités nasales (lame criblée, partie haute du septum et du cornet supérieur). Elle contient 10 à 20 millions de <strong>neurones olfactifs</strong> bipolaires (seuls neurones en contact direct avec l'extérieur, renouvelés tous les 30 à 60 jours à partir de cellules basales), dont les dendrites portent des cils munis de récepteurs (environ 400 types chez l'homme) baignant dans le mucus (glandes de Bowman), et dont les axones amyéliniques se groupent en <strong>filets olfactifs</strong> (15 à 20 de chaque côté, formant le nerf olfactif, I) qui traversent la <strong>lame criblée</strong> de l'ethmoïde (entourés de méninges : brèche et méningite en cas de fracture) pour atteindre le <strong>bulbe olfactif</strong>, sur la face inférieure du lobe frontal. Dans le bulbe, ils font synapse dans les <strong>glomérules</strong> avec les <strong>cellules mitrales</strong> (2<sup>e</sup> neurone), dont les axones forment le <strong>tractus olfactif</strong> qui se divise en stries olfactives médiale et latérale vers le <strong>cortex olfactif primaire</strong> : <strong>cortex piriforme</strong>, <strong>uncus</strong> (amygdale), aire entorhinale du lobe temporal médial — <strong>sans relais thalamique</strong> (seule sensibilité dans ce cas) —, puis cortex orbito-frontal (reconnaissance consciente), hypothalamus et système limbique (émotion, mémoire olfactive). Le nerf trijumeau (V1, V2) assure la sensibilité générale de la muqueuse (irritants : ammoniaque, menthol).</p>
<p>Troubles : <strong>anosmie</strong> (traumatisme crânien avec cisaillement des filets, rhinite, polypose, COVID-19, méningiome de la gouttière olfactive, Parkinson débutant), hyposmie, parosmie, hallucinations olfactives (crises temporales uncinées).</p>
<h4>La gustation</h4>
<p>Les <strong>bourgeons du goût</strong> (2 000 à 5 000, de 50 à 100 cellules chacun, renouvelés en 10 jours) sont situés dans les <strong>papilles linguales</strong> (<strong>fongiformes</strong> sur la pointe et les bords ; <strong>foliées</strong> sur les bords postérieurs ; <strong>circumvallées</strong> ou caliciformes, 8 à 12, en V ouvert en avant devant le sillon terminal ; les papilles filiformes n'ont pas de bourgeons), ainsi que sur le voile, l'épiglotte et le pharynx. Cinq saveurs : sucré, salé, acide, amer, umami (toute la langue perçoit toutes les saveurs, avec des sensibilités variables). Les cellules gustatives, épithéliales, font synapse avec les fibres de trois nerfs crâniens :</p>
<table>
<thead><tr><th>Territoire</th><th>Nerf gustatif</th><th>Trajet</th><th>Sensibilité générale</th></tr></thead>
<tbody>
<tr><td><strong>Deux tiers antérieurs de la langue</strong></td><td><strong>VII</strong> (nerf intermédiaire) via la <strong>corde du tympan</strong></td><td>Nerf lingual → corde du tympan → caisse du tympan → ganglion géniculé → nerf intermédiaire</td><td>V3 (nerf lingual)</td></tr>
<tr><td><strong>Tiers postérieur</strong> (papilles circumvallées, foliées)</td><td><strong>IX</strong></td><td>Branches linguales du IX, ganglion inférieur</td><td>IX</td></tr>
<tr><td>Épiglotte, pharynx, larynx</td><td><strong>X</strong> (laryngé supérieur)</td><td>Ganglion inférieur du X</td><td>X</td></tr>
</tbody>
</table>
<p>Les fibres gustatives des trois nerfs convergent vers la partie rostrale du <strong>noyau du tractus solitaire</strong> (moelle allongée, noyau gustatif, 2<sup>e</sup> neurone), puis, par le tractus tegmental central <strong>homolatéral</strong>, vers le <strong>thalamus</strong> (noyau ventral postéro-médial, 3<sup>e</sup> neurone) et le <strong>cortex gustatif primaire</strong> (partie inférieure du gyrus postcentral, opercule frontal et <strong>insula</strong>), puis le cortex orbito-frontal (intégration avec l'olfaction : flaveur) et l'hypothalamus et l'amygdale (plaisir, aversion). Le goût est largement dépendant de l'olfaction (rétro-olfaction) : la plupart des « agueusies » sont des anosmies.</p>
<p>La langue elle-même est un organe musculaire (muscles intrinsèques et extrinsèques : génio-glosse, hyo-glosse, stylo-glosse — XII — et palato-glosse — X), recouvert d'une muqueuse, divisé par le <strong>sillon terminal</strong> (en V, avec le foramen cæcum au sommet : origine du tractus thyréoglosse) en une partie orale (deux tiers antérieurs) et une partie pharyngienne (tiers postérieur, amygdale linguale). Vascularisation par l'<strong>artère linguale</strong> ; drainage lymphatique vers les nœuds submentaux, submandibulaires et jugulaires, souvent bilatéral.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> deux tiers antérieurs de la langue = <strong>sensibilité générale par le V3</strong> (lingual) et <strong>goût par le VII</strong> (corde du tympan) ; tiers postérieur = sensibilité générale et goût par le <strong>IX</strong> ; motricité par le <strong>XII</strong> (sauf le palato-glosse, X). Une paralysie faciale avec agueusie est une lésion du VII au-dessus de l'émergence de la corde du tympan. L'olfaction est la seule modalité sensorielle sans relais thalamique obligatoire.</div>`
            }
          ],
          points_cles: [
            "Globe oculaire (24 mm) : tunique fibreuse (cornée avasculaire, principal élément réfractif, innervée par le V1 ; sclère), uvée (iris avec sphincter parasympathique et dilatateur sympathique ; corps ciliaire : accommodation et humeur aqueuse ; choroïde), rétine (bâtonnets, cônes, fovéa, papille).",
            "Humeur aqueuse : procès ciliaires → chambre postérieure → pupille → chambre antérieure → angle irido-cornéen (trabéculum, canal de Schlemm) ; pression 10–21 mmHg ; glaucome ; cristallin (zonule, accommodation, cataracte) ; vitré.",
            "Artère centrale de la rétine (ophtalmique, carotide interne) terminale ; veines ophtalmiques → sinus caverneux.",
            "Six muscles oculomoteurs : droit latéral VI, oblique supérieur IV (abaisse et intorsion), les autres III ; élévateur de la paupière III, muscle tarsal sympathique, orbiculaire VII ; larmes : glande lacrymale (VII) → points et canalicules → sac → conduit naso-lacrymal → méat inférieur.",
            "Voies visuelles : rétine (3 neurones) → nerf optique → chiasma (croisement des fibres nasales) → tractus (hémichamp controlatéral) → corps géniculé latéral → radiations (boucle de Meyer temporale = champ supérieur) → cortex calcarin (aire 17), macula au pôle occipital.",
            "Nerf optique = cécité monoculaire ; chiasma = hémianopsie bitemporale (hypophyse) ; rétro-chiasmatique = hémianopsie latérale homonyme controlatérale (quadranopsie supérieure si temporale, épargne maculaire si occipitale) ; réflexe photomoteur II → prétectum → III bilatéral.",
            "Oreille externe : pavillon, méat de 2,5 cm (V3, X, VII, C2–C3), tympan de 9–10 mm (pars tensa, pars flaccida, umbo, triangle lumineux) ; oreille moyenne : caisse à six parois (promontoire, fenêtres vestibulaire et cochléaire, canal facial, trompe auditive, aditus, tegmen, golfe jugulaire), malléus, incus, stapès (× 20), tenseur du tympan (V3), stapédien (VII), corde du tympan.",
            "Oreille interne : vestibule (utricule et saccule : accélérations linéaires), trois canaux semi-circulaires (crêtes ampullaires : accélérations angulaires), cochlée (2,5 tours, rampes vestibulaire et tympanique périlymphatiques, conduit cochléaire endolymphatique, organe de Corti, tonotopie : aigus à la base).",
            "Voies auditives : nerf cochléaire → noyaux cochléaires → voies bilatérales → colliculus inférieur → corps géniculé médial → gyrus de Heschl (41–42) ; voies vestibulaires → noyaux vestibulaires → cervelet, moelle, noyaux oculomoteurs ; surdité de transmission (Rinne négatif, Weber côté sourd) et de perception (Weber côté sain, neurinome).",
            "Olfaction : neurones olfactifs → lame criblée → bulbe (cellules mitrales) → tractus → cortex piriforme et uncus sans relais thalamique ; gustation : deux tiers antérieurs VII (corde du tympan), tiers postérieur IX, épiglotte X → noyau du tractus solitaire → thalamus VPM → insula et opercule."
          ],
          lexique: [
            { terme: "Fovéa", def: "Dépression centrale de la macula, formée exclusivement de cônes, zone d'acuité visuelle maximale dans l'axe optique." },
            { terme: "Papille optique", def: "Disque du nerf optique, point d'émergence des axones des cellules ganglionnaires et des vaisseaux centraux de la rétine, dépourvu de photorécepteurs (tache aveugle)." },
            { terme: "Angle irido-cornéen", def: "Angle de la chambre antérieure où l'humeur aqueuse est résorbée par le trabéculum et le canal de Schlemm." },
            { terme: "Chiasma optique", def: "Croisement des fibres des hémirétines nasales au-dessus de la selle turcique, siège de l'hémianopsie bitemporale." },
            { terme: "Boucle de Meyer", def: "Détour temporal antérieur des radiations optiques inférieures (champ visuel supérieur), lésé dans les quadranopsies supérieures." },
            { terme: "Pars flaccida", def: "Partie supérieure, mince et lâche de la membrane du tympan (membrane de Shrapnell), siège des poches de rétraction et du cholestéatome." },
            { terme: "Fenêtre vestibulaire", def: "Fenêtre ovale de la paroi médiale de la caisse, fermée par la base du stapès, transmettant les vibrations à la périlymphe." },
            { terme: "Organe spiral", def: "Organe de Corti, épithélium sensoriel de l'audition posé sur la membrane basilaire du conduit cochléaire, à cellules ciliées internes et externes." },
            { terme: "Crête ampullaire", def: "Récepteur des accélérations angulaires situé dans l'ampoule de chaque canal semi-circulaire, surmonté de la cupule." },
            { terme: "Noyau du tractus solitaire", def: "Noyau viscéro-sensitif de la moelle allongée recevant les fibres gustatives des nerfs VII, IX et X et les afférences viscérales vagales." }
          ],
          qcm: [
            {
              q: "Concernant le globe oculaire, quelles propositions sont exactes ?",
              options: [
                "A. La cornée est avasculaire et innervée par le nerf ophtalmique (V1).",
                "B. L'humeur aqueuse est sécrétée par les procès ciliaires dans la chambre postérieure.",
                "C. La fovéa est constituée exclusivement de bâtonnets.",
                "D. La papille optique est dépourvue de photorécepteurs.",
                "E. Le sphincter de la pupille est innervé par le sympathique."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : la fovéa ne contient que des cônes. E est fausse : le sphincter dépend du parasympathique (III) ; le dilatateur du sympathique."
            },
            {
              q: "Concernant les annexes de l'œil, quelles propositions sont exactes ?",
              options: [
                "A. Le muscle droit latéral est innervé par le nerf abducens.",
                "B. L'oblique supérieur élève le globe oculaire.",
                "C. L'élévateur de la paupière supérieure est innervé par le nerf oculomoteur.",
                "D. Le conduit naso-lacrymal s'ouvre dans le méat nasal moyen.",
                "E. La glande lacrymale reçoit son innervation parasympathique du nerf facial."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : l'oblique supérieur abaisse le globe (et le porte en intorsion) ; c'est l'oblique inférieur qui l'élève. D est fausse : il s'ouvre dans le méat nasal inférieur."
            },
            {
              q: "Concernant les voies visuelles, quelles propositions sont exactes ?",
              options: [
                "A. Les fibres issues des hémirétines nasales croisent au chiasma.",
                "B. Une lésion du chiasma entraîne une hémianopsie bitemporale.",
                "C. Le tractus optique droit conduit les informations de l'hémichamp visuel droit.",
                "D. Le corps géniculé latéral est le relais thalamique de la voie visuelle.",
                "E. Une lésion du cortex occipital donne une hémianopsie latérale homonyme avec épargne maculaire."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le tractus optique droit conduit l'hémichamp visuel gauche (controlatéral)."
            },
            {
              q: "Concernant l'oreille moyenne, quelles propositions sont exactes ?",
              options: [
                "A. La base du stapès ferme la fenêtre vestibulaire.",
                "B. Le muscle stapédien est innervé par le nerf facial.",
                "C. La trompe auditive relie la caisse du tympan à l'oropharynx.",
                "D. Le toit de la caisse (tegmen tympani) est en rapport avec la fosse crânienne moyenne.",
                "E. Le nerf facial chemine dans la paroi médiale et postérieure de la caisse."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la trompe auditive s'ouvre dans le nasopharynx."
            },
            {
              q: "Concernant l'oreille interne et les voies auditives, quelles propositions sont exactes ?",
              options: [
                "A. Les canaux semi-circulaires détectent les accélérations angulaires.",
                "B. L'utricule et le saccule détectent les accélérations linéaires et la gravité.",
                "C. Les sons aigus sont codés à l'apex de la cochlée.",
                "D. Le conduit cochléaire contient de l'endolymphe.",
                "E. Une lésion unilatérale du cortex auditif entraîne une surdité complète de l'oreille opposée."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : les aigus sont codés à la base, les graves à l'apex. E est fausse : les voies auditives sont bilatérales, une lésion centrale unilatérale ne donne pas de surdité."
            },
            {
              q: "Concernant les surdités et les vertiges, quelles propositions sont exactes ?",
              options: [
                "A. Dans la surdité de transmission, le Weber est latéralisé du côté sourd.",
                "B. L'otospongiose est une surdité de perception.",
                "C. Le neurinome de l'acoustique donne une surdité de perception unilatérale.",
                "D. La maladie de Ménière associe vertiges, surdité et acouphènes.",
                "E. Le réflexe vestibulo-oculaire emprunte le faisceau longitudinal médial."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : l'otospongiose (ankylose du stapès) est une surdité de transmission."
            },
            {
              q: "Concernant l'olfaction et la gustation, quelles propositions sont exactes ?",
              options: [
                "A. Les filets du nerf olfactif traversent la lame criblée de l'ethmoïde.",
                "B. La voie olfactive fait relais dans le thalamus avant d'atteindre le cortex.",
                "C. Le goût des deux tiers antérieurs de la langue est véhiculé par la corde du tympan (VII).",
                "D. Le goût du tiers postérieur de la langue dépend du nerf glosso-pharyngien.",
                "E. Les fibres gustatives convergent vers le noyau du tractus solitaire."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : l'olfaction est la seule modalité sensorielle sans relais thalamique obligatoire ; elle gagne directement le cortex piriforme."
            }
          ]
        }
      ]
    }
  ]
};
