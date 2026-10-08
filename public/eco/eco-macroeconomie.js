/* Polymates — Économie — Macroéconomie (licence, L1 à L3) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["macroeconomie"] = {
 "id": "macroeconomie",
 "nom": "Macroéconomie",
 "icone": "🌐",
 "couleur": "#7ab4c8",
 "intro": "Un cours complet de macroéconomie de licence (L1 à L3) : mesure de l'activité, grands courants de pensée, croissance et monnaie à long terme, fluctuations et économie ouverte à court terme, puis microfondements, politiques économiques et crises. Les modèles sont formalisés et résolus pas à pas ; chaque chapitre indique son niveau et se termine par un QCM d'entraînement.",
 "parties": [
  {
   "titre": "Partie 1 — Fondements : objet, mesure et grands courants",
   "chapitres": [
    {
     "id": "mac1-objet-methode",
     "titre": "Objet et méthode de la macroéconomie",
     "duree": 40,
     "niveau": "L1",
     "objectifs": [
      "Définir la macroéconomie, ses agrégats et la distinguer de la microéconomie",
      "Distinguer court terme, moyen terme et long terme et savoir quelles forces dominent à chaque horizon",
      "Comprendre ce qu'est un modèle : hypothèses, variables endogènes et exogènes, paramètres, forme réduite, statique comparative",
      "Distinguer rigoureusement flux et stocks et écrire une équation d'accumulation",
      "Connaître les grands faits stylisés : croissance de long terme, cycles, chômage, inflation, avec leurs ordres de grandeur",
      "Savoir où trouver et comment lire les données macroéconomiques (Insee, Eurostat, BEA, FMI)"
     ],
     "sections": [
      {
       "titre": "Qu'est-ce que la macroéconomie ?",
       "contenu": "<p>La <strong>macroéconomie</strong> étudie le fonctionnement de l'économie prise comme un tout. Elle s'intéresse à des <strong>agrégats</strong>, c'est-à-dire à des grandeurs obtenues en additionnant (ou en faisant la moyenne) des décisions d'un très grand nombre d'agents : la production totale (le produit intérieur brut, PIB), la consommation totale des ménages, l'investissement total, le niveau général des prix, l'emploi et le chômage, le taux d'intérêt, le solde extérieur, la dette publique. La <strong>microéconomie</strong>, à l'inverse, étudie les choix d'un agent (un ménage, une entreprise) ou le fonctionnement d'un marché particulier.</p>\n<p>Les questions que pose la macroéconomie sont d'abord des questions collectives : pourquoi certains pays sont-ils beaucoup plus riches que d'autres ? Pourquoi la production connaît-elle des récessions, c'est-à-dire des phases de recul ? Pourquoi existe-t-il un chômage durable alors qu'il y a des besoins non satisfaits ? Qu'est-ce qui détermine l'inflation ? Que peuvent faire la banque centrale et l'État ? Ces questions renvoient aux quatre grands objectifs de la politique économique que Nicholas Kaldor résumait dans son <strong>carré magique</strong> (1971) : croissance forte, plein emploi, stabilité des prix, équilibre extérieur.</p>\n<h4>Pourquoi un niveau d'analyse spécifique ?</h4>\n<p>On pourrait penser qu'il suffit d'additionner les comportements individuels. Mais l'agrégation fait apparaître des effets que l'analyse partielle ne voit pas, parce qu'en macroéconomie les dépenses des uns sont les revenus des autres. L'exemple classique est le <strong>paradoxe de l'épargne</strong> (ou paradoxe de la frugalité), popularisé par Keynes : si un ménage isolé épargne davantage, sa richesse augmente ; mais si tous les ménages décident simultanément d'épargner davantage, la consommation baisse, les entreprises vendent moins, la production et donc les revenus diminuent, si bien que l'épargne totale peut ne pas augmenter du tout. Ce qui est vrai pour un individu n'est pas forcément vrai pour l'ensemble : c'est le <strong>sophisme de composition</strong>.</p>\n<p>Inversement, la macroéconomie moderne cherche à fonder ses relations agrégées sur des comportements individuels explicites (les <strong>fondements microéconomiques</strong>) : un ménage qui arbitre entre consommer aujourd'hui et demain, une entreprise qui maximise son profit sous contrainte de technologie. Depuis les années 1970, ce souci de cohérence entre micro et macro est au cœur des débats entre écoles de pensée.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la macroéconomie raisonne sur des agrégats et tient compte des <em>bouclages</em> : la dépense d'un agent est le revenu d'un autre. Un comportement individuellement rationnel peut produire un résultat collectif indésirable (paradoxe de l'épargne).</div>"
      },
      {
       "titre": "Court terme, moyen terme, long terme",
       "contenu": "<p>La macroéconomie distingue trois horizons, non pas par un nombre d'années fixe, mais selon les variables qui ont le temps de s'ajuster. Cette distinction structure tous les manuels de licence (Blanchard-Cohen, Mankiw).</p>\n<table>\n<thead><tr><th>Horizon</th><th>Ordre de grandeur</th><th>Ce qui est fixe</th><th>Ce qui détermine la production</th><th>Modèles typiques</th></tr></thead>\n<tbody>\n<tr><td>Court terme</td><td>quelques trimestres à 1-2 ans</td><td>prix et salaires nominaux (rigides), capital, technologie</td><td>la <strong>demande</strong> globale</td><td>modèle keynésien simple, IS-LM, IS-LM-BP</td></tr>\n<tr><td>Moyen terme</td><td>quelques années à une décennie</td><td>capital, technologie</td><td>l'<strong>offre</strong> : marché du travail, chômage structurel, prix ajustés</td><td>offre globale-demande globale, WS-PS, courbe de Phillips</td></tr>\n<tr><td>Long terme</td><td>plusieurs décennies</td><td>rien : capital, population et technologie évoluent</td><td>l'<strong>accumulation</strong> du capital et le <strong>progrès technique</strong></td><td>modèle de Solow, croissance endogène</td></tr>\n</tbody>\n</table>\n<p>À <strong>court terme</strong>, les prix et les salaires nominaux s'ajustent lentement : une baisse de la demande se traduit d'abord par une baisse des quantités produites, donc de l'emploi. C'est le domaine où la politique monétaire et budgétaire peut stabiliser l'activité. À <strong>moyen terme</strong>, prix et salaires ont le temps de s'ajuster : la production tend vers son niveau <strong>potentiel</strong> (ou naturel), déterminé par les conditions d'offre (institutions du marché du travail, concurrence sur le marché des biens). Le chômage tend alors vers son taux <strong>structurel</strong>. À <strong>long terme</strong>, ce qui compte est la croissance du potentiel lui-même : la quantité de capital par travailleur, le capital humain et surtout le progrès technique.</p>\n<p>On décompose souvent la production observée en une <strong>tendance</strong> (le potentiel) et une <strong>composante cyclique</strong> : l'<strong>écart de production</strong> (output gap) est la différence relative entre le PIB effectif et le PIB potentiel.</p>\n<p class=\"eq\"><em>écart de production</em> = (<em>Y</em> − <em>Y</em><sup>*</sup>) / <em>Y</em><sup>*</sup></p>\n<p>Un écart positif signale une économie en surchauffe (tensions inflationnistes), un écart négatif une économie en sous-régime (chômage conjoncturel). Le potentiel n'est pas observable : il est estimé (filtres statistiques, fonction de production), ce qui rend l'écart de production très incertain et souvent révisé.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> « court terme » ne veut pas dire « moins d'un an » et « long terme » ne veut pas dire « plus de dix ans ». La définition est analytique : le court terme est l'horizon où les prix sont rigides, le moyen terme celui où ils se sont ajustés mais où le capital est donné, le long terme celui où le capital et la technologie évoluent.</div>"
      },
      {
       "titre": "Les modèles : hypothèses, variables endogènes et exogènes",
       "contenu": "<p>Un <strong>modèle</strong> est une représentation simplifiée de l'économie, formée d'un ensemble d'hypothèses et de relations (équations) entre des variables. Il ne cherche pas à être réaliste dans tous ses détails mais à isoler un mécanisme. Un bon modèle est cohérent logiquement, donne des prédictions testables et rend compte des faits pertinents pour la question posée.</p>\n<h4>Les ingrédients d'un modèle</h4>\n<ul>\n<li>Les <strong>variables endogènes</strong> sont déterminées par le modèle (ce que l'on cherche à expliquer) : par exemple la production et la consommation.</li>\n<li>Les <strong>variables exogènes</strong> sont données de l'extérieur du modèle : par exemple les dépenses publiques, l'offre de monnaie, le prix du pétrole.</li>\n<li>Les <strong>paramètres</strong> décrivent les comportements et la technologie et sont supposés constants : la propension marginale à consommer, le taux de dépréciation du capital, l'élasticité de la production au capital.</li>\n<li>Les relations sont de trois types : des <strong>identités comptables</strong> (vraies par définition, comme <em>Y</em> = <em>C</em> + <em>I</em> + <em>G</em> en économie fermée), des <strong>équations de comportement</strong> (la fonction de consommation) et des <strong>conditions d'équilibre</strong> (l'offre égale la demande).</li>\n</ul>\n<p>Résoudre un modèle, c'est exprimer chaque variable endogène en fonction des seules variables exogènes et des paramètres : on obtient la <strong>forme réduite</strong>. La <strong>statique comparative</strong> consiste ensuite à comparer deux équilibres lorsque l'on modifie une variable exogène ou un paramètre (« toutes choses égales par ailleurs »). L'analyse <strong>dynamique</strong>, elle, étudie le chemin suivi d'un équilibre à l'autre.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> résoudre un petit modèle et faire de la statique comparative.<br>Soit une économie fermée sans État : <em>Y</em> = <em>C</em> + <em>I</em> (condition d'équilibre), <em>C</em> = 100 + 0,8 <em>Y</em> (comportement), <em>I</em> = 200 (exogène).<br>1) Endogènes : <em>Y</em>, <em>C</em>. Exogène : <em>I</em>. Paramètres : 100 (consommation autonome) et 0,8 (propension marginale à consommer).<br>2) Forme réduite : <em>Y</em> = 100 + 0,8 <em>Y</em> + <em>I</em>, donc 0,2 <em>Y</em> = 100 + <em>I</em>, soit <em>Y</em> = (100 + <em>I</em>) / 0,2 = 5 × (100 + <em>I</em>).<br>3) Équilibre : <em>Y</em> = 5 × 300 = 1 500 ; <em>C</em> = 100 + 0,8 × 1 500 = 1 300 ; on vérifie 1 300 + 200 = 1 500.<br>4) Statique comparative : si <em>I</em> passe à 220 (+20), <em>Y</em> = 5 × 320 = 1 600, soit +100. Le rapport ΔY / ΔI = 5 = 1 / (1 − 0,8) est le <strong>multiplicateur</strong>.</div>\n<h4>Comment juge-t-on un modèle ?</h4>\n<p>Milton Friedman (1953) soutenait qu'un modèle doit être jugé sur la qualité de ses prédictions et non sur le réalisme de ses hypothèses. Cette position est contestée : un modèle dont les hypothèses sont fausses peut bien prédire dans un environnement stable mais échouer lorsque l'environnement change. C'est le sens de la <strong>critique de Lucas</strong> (1976) : des relations estimées sur le passé ne sont pas stables si la politique économique change, car les agents modifient leurs anticipations. En pratique, l'économiste confronte les modèles aux données par l'<strong>économétrie</strong> (estimation, tests), par l'étude d'épisodes historiques (« expériences naturelles ») et par la calibration.</p>\n<p>Enfin, la macroéconomie ne peut presque jamais faire d'expériences contrôlées : on ne peut pas provoquer une récession pour voir ce qui se passe. D'où l'importance de la distinction entre <strong>corrélation</strong> et <strong>causalité</strong> : que le chômage baisse quand l'inflation monte ne dit pas lequel cause l'autre, ni si une troisième variable (un choc de demande) les fait bouger ensemble.</p>"
      },
      {
       "titre": "Flux et stocks",
       "contenu": "<p>Une distinction fondamentale, source de nombreuses erreurs, oppose les flux et les stocks.</p>\n<ul>\n<li>Un <strong>flux</strong> est une grandeur mesurée <strong>par unité de temps</strong> : le PIB (euros par an), l'investissement, l'épargne, le déficit public, les embauches, les importations.</li>\n<li>Un <strong>stock</strong> est une grandeur mesurée <strong>à une date donnée</strong> : le capital, la dette publique, la richesse (le patrimoine), la masse monétaire, le nombre de chômeurs, la population.</li>\n</ul>\n<p>Les flux font varier les stocks. L'exemple central est l'<strong>équation d'accumulation du capital</strong> : le stock de capital de l'année suivante est égal au stock actuel, diminué de la dépréciation (usure, obsolescence) au taux δ, augmenté de l'investissement brut de l'année.</p>\n<p class=\"eq\"><em>K</em><sub><em>t</em>+1</sub> = (1 − δ) <em>K</em><sub><em>t</em></sub> + <em>I</em><sub><em>t</em></sub></p>\n<p>Ce qui s'écrit aussi Δ<em>K</em> = <em>I</em><sub><em>t</em></sub> − δ<em>K</em><sub><em>t</em></sub> : l'<strong>investissement net</strong> (investissement brut moins dépréciation) est la variation du stock de capital. De même, la dette publique (stock) varie du déficit public (flux) : <em>B</em><sub><em>t</em></sub> = <em>B</em><sub><em>t</em>−1</sub> + déficit<sub><em>t</em></sub>. Le nombre de chômeurs (stock) varie de la différence entre les entrées et les sorties du chômage (flux). Le patrimoine des ménages varie de leur épargne et des plus-values sur les actifs détenus.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un exercice flux-stock sur le capital.<br>Une économie dispose en début d'année 1 d'un stock de capital <em>K</em><sub>1</sub> = 1 000, avec δ = 5 % et un investissement brut constant <em>I</em> = 60.<br>Année 1 : <em>K</em><sub>2</sub> = 0,95 × 1 000 + 60 = 1 010. Investissement net = 60 − 50 = 10.<br>Année 2 : <em>K</em><sub>3</sub> = 0,95 × 1 010 + 60 = 1 019,5.<br>Le capital continue d'augmenter tant que <em>I</em> &gt; δ<em>K</em>. Il se stabilise lorsque <em>I</em> = δ<em>K</em>, soit <em>K</em> = 60 / 0,05 = 1 200 : c'est un <strong>état stationnaire</strong>, idée que le modèle de Solow généralise en rendant l'investissement proportionnel à la production.</div>\n<p>Comparer un stock et un flux impose de préciser la période : une dette publique de 115 % du PIB signifie que la dette (stock au 31 décembre) représente 1,15 année de production (flux annuel). Ce ratio n'est pas un « pourcentage de quelque chose qui serait dépensé », c'est un nombre d'années de production.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> « l'épargne » (flux, une partie du revenu de l'année non consommée) et « le patrimoine » (stock accumulé) ne sont pas la même chose ; de même, « le déficit » (flux) et « la dette » (stock). Réduire le déficit ne réduit pas la dette : la dette continue d'augmenter tant que le déficit est positif, seul son ratio au PIB peut baisser si la croissance nominale est suffisante.</div>"
      },
      {
       "titre": "Les faits stylisés de la macroéconomie",
       "contenu": "<p>Un <strong>fait stylisé</strong> est une régularité empirique robuste, observée dans de nombreux pays et sur de longues périodes, que les modèles doivent pouvoir expliquer. L'expression vient de Nicholas Kaldor (1961), qui avait résumé les régularités de la croissance de long terme.</p>\n<h4>La croissance de long terme</h4>\n<p>Depuis la révolution industrielle, le PIB par habitant des pays aujourd'hui développés croît de façon soutenue : de l'ordre de 2 % par an en moyenne de long terme aux États-Unis depuis la fin du XIX<sup>e</sup> siècle, ce qui suffit à multiplier le niveau de vie par sept environ en un siècle. En France, la croissance a été très forte pendant les « Trente Glorieuses » (environ 5 % par an pour le PIB entre 1950 et 1973), puis elle a ralenti par paliers ; elle est d'environ 1 % par an en moyenne depuis la crise de 2008. Les faits de Kaldor (1961) sont : une croissance régulière de la production par travailleur ; une croissance du capital par travailleur ; un rapport capital/production à peu près stable ; un rendement du capital à peu près stable ; des parts du capital et du travail dans le revenu à peu près stables (environ un tiers et deux tiers). Ces faits ont guidé la construction du modèle de Solow (1956). Les écarts de niveau de vie entre pays restent considérables, ce qui pose la question de la <strong>convergence</strong>.</p>\n<h4>Les cycles</h4>\n<p>Autour de sa tendance, la production fluctue : ce sont les <strong>fluctuations conjoncturelles</strong> ou cycles. Une <strong>récession</strong> est souvent définie, en pratique, par deux trimestres consécutifs de baisse du PIB ; aux États-Unis, le NBER date les cycles selon un ensemble plus large d'indicateurs. Les cycles ne sont pas périodiques (on parle de fluctuations plutôt que de cycles réguliers). Les faits stylisés sont :</p>\n<ul>\n<li>l'<strong>investissement</strong> est beaucoup plus volatil que le PIB (environ deux à trois fois plus), la consommation l'est moins ;</li>\n<li>la consommation, l'investissement, l'emploi et la productivité apparente du travail sont <strong>procycliques</strong> (ils évoluent dans le même sens que le PIB) ;</li>\n<li>le <strong>chômage est contracyclique</strong> et réagit à la production avec retard et moins que proportionnellement (loi d'Okun) ;</li>\n<li>les variables sont persistantes : une récession n'est pas un choc d'une seule période.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> deux récessions majeures. En 2009, sous l'effet de la crise financière, le PIB a reculé d'environ 3 % en France, 4,5 % dans la zone euro et 2,5 % aux États-Unis. En 2020, la crise sanitaire a provoqué une chute d'une ampleur inédite en temps de paix : de l'ordre de −7,5 % en France, −6 % dans la zone euro et −2 % aux États-Unis, suivie d'un fort rebond en 2021. Le taux de chômage américain est passé de 3,5 % en février 2020 à près de 15 % en avril 2020, alors qu'en France le chômage partiel a absorbé l'essentiel du choc. Le même choc produit donc des effets très différents selon les institutions.</div>\n<h4>Le chômage et l'inflation</h4>\n<p>Le <strong>chômage</strong> est durable dans la plupart des pays européens. En France, le taux de chômage au sens du Bureau international du travail (BIT) est resté la plupart du temps compris entre 7 % et 10 % depuis le milieu des années 1980 ; il a culminé autour de 10,5 % en 2015, est revenu vers 7 % en 2022-2023 puis est remonté : 8,3 % au deuxième trimestre 2026 selon l'Insee. Aux États-Unis, il est plus bas et beaucoup plus réactif à la conjoncture.</p>\n<p>L'<strong>inflation</strong> (hausse du niveau général des prix) a été forte dans les années 1970 (plus de 13 % en France en 1974 et en 1980), a été ramenée à de faibles niveaux à partir des années 1980-1990, est restée sous la cible de 2 % dans la zone euro durant les années 2010, puis a brutalement resurgi en 2021-2023 : en glissement annuel, elle a culminé à 10,6 % dans la zone euro en octobre 2022 et à 9,1 % aux États-Unis en juin 2022. Les grandes banques centrales visent aujourd'hui une inflation de 2 % à moyen terme.</p>"
      },
      {
       "titre": "Les sources des données macroéconomiques",
       "contenu": "<p>La macroéconomie repose sur un appareil statistique considérable, construit pour l'essentiel après 1945 autour de la <strong>comptabilité nationale</strong>. Connaître les producteurs de données fait partie de la culture attendue en licence.</p>\n<table>\n<thead><tr><th>Institution</th><th>Champ</th><th>Principales données</th></tr></thead>\n<tbody>\n<tr><td>Insee (Institut national de la statistique et des études économiques)</td><td>France</td><td>comptes nationaux trimestriels et annuels, indice des prix à la consommation, enquête Emploi (chômage BIT), notes de conjoncture</td></tr>\n<tr><td>Banque de France, Dares, DGFiP</td><td>France</td><td>statistiques monétaires et financières, balance des paiements ; emploi et marché du travail ; finances publiques</td></tr>\n<tr><td>Eurostat</td><td>Union européenne</td><td>comptes nationaux harmonisés (SEC 2010), IPCH, chômage harmonisé, dette et déficit au sens de Maastricht</td></tr>\n<tr><td>BCE (Banque centrale européenne)</td><td>zone euro</td><td>agrégats monétaires, taux d'intérêt, crédit, projections macroéconomiques</td></tr>\n<tr><td>BEA (Bureau of Economic Analysis), BLS (Bureau of Labor Statistics), Réserve fédérale</td><td>États-Unis</td><td>comptes nationaux (NIPA), PCE ; emploi, chômage, CPI ; données monétaires</td></tr>\n<tr><td>FMI, OCDE, Banque mondiale</td><td>monde</td><td>bases comparatives (World Economic Outlook, Perspectives économiques, World Development Indicators)</td></tr>\n</tbody>\n</table>\n<p>Les comptes nationaux suivent des normes internationales : le <strong>Système de comptabilité nationale</strong> des Nations unies (SCN 2008) et sa déclinaison européenne, le <strong>SEC 2010</strong>, ce qui permet les comparaisons. En France, les comptes sont établis dans une « base » (actuellement la base 2020) qui fixe les méthodes et l'année de référence des prix.</p>\n<h4>Bien lire une donnée</h4>\n<ul>\n<li><strong>Valeur ou volume</strong> : une donnée « en valeur » (ou nominale, à prix courants) inclut l'effet des prix ; « en volume » (ou réelle) elle en est corrigée. En 2025, le PIB français s'élevait à environ 2 991 milliards d'euros en valeur, en hausse de 1,9 %, mais de 0,8 % seulement en volume, le prix du PIB ayant augmenté d'environ 1,1 % (Insee, comptes annuels publiés en mai 2026).</li>\n<li><strong>Données corrigées des variations saisonnières et des jours ouvrables</strong> (CVS-CJO) : indispensables pour comparer deux trimestres successifs.</li>\n<li><strong>Glissement ou moyenne annuelle</strong> : le glissement annuel compare un mois (ou trimestre) au même mois de l'année précédente ; la moyenne annuelle compare la moyenne d'une année à celle de l'année précédente. Les deux peuvent différer fortement.</li>\n<li><strong>Révisions</strong> : les premières estimations (estimation « flash » du PIB trimestriel environ 30 jours après la fin du trimestre) sont révisées à mesure que l'information s'accumule, parfois de plusieurs dixièmes de point.</li>\n<li><strong>Rythme trimestriel ou annualisé</strong> : les États-Unis publient la croissance trimestrielle en rythme annualisé (environ quatre fois le taux trimestriel), l'Europe en taux trimestriel non annualisé. Une croissance de 0,5 % sur un trimestre correspond à environ 2 % en rythme annualisé.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> comparer une croissance américaine « de 2 % » et une croissance française « de 0,5 % » pour un même trimestre sans vérifier la convention : le chiffre américain est annualisé, le français ne l'est pas. Ici, les deux économies croissent au même rythme.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une démarche macroéconomique rigoureuse combine trois éléments : des concepts mesurés de façon normalisée (comptabilité nationale), des modèles explicites (endogènes, exogènes, paramètres) et une confrontation aux faits stylisés.</div>"
      }
     ],
     "points_cles": [
      "La macroéconomie étudie des agrégats (PIB, emploi, niveau des prix, taux d'intérêt, solde extérieur) et tient compte des bouclages : la dépense de l'un est le revenu de l'autre.",
      "Le sophisme de composition (paradoxe de l'épargne) montre qu'un comportement individuellement rationnel peut avoir un effet collectif contraire.",
      "Court terme : prix rigides, la demande détermine la production. Moyen terme : prix ajustés, l'offre détermine la production et le chômage structurel. Long terme : accumulation et progrès technique.",
      "L'écart de production (Y − Y*) / Y* mesure la position dans le cycle ; le potentiel Y* n'est pas observable mais estimé.",
      "Un modèle relie des variables endogènes à des variables exogènes au moyen de paramètres ; la forme réduite exprime les endogènes en fonction des exogènes ; la statique comparative compare deux équilibres.",
      "On distingue identités comptables, équations de comportement et conditions d'équilibre.",
      "Flux (par unité de temps) et stocks (à une date) sont liés : K(t+1) = (1 − δ) K(t) + I(t) ; le déficit fait varier la dette, l'épargne fait varier le patrimoine.",
      "Faits de Kaldor (1961) : croissance régulière de la production et du capital par tête, rapport capital/production, rendement du capital et partage du revenu à peu près stables.",
      "Faits stylisés du cycle : investissement deux à trois fois plus volatil que le PIB, consommation moins volatile, emploi procyclique, chômage contracyclique et retardé.",
      "Ordres de grandeur : PIB français d'environ 2 991 milliards d'euros en 2025 (+0,8 % en volume) ; chômage BIT de 8,3 % au deuxième trimestre 2026 ; pic d'inflation à 10,6 % dans la zone euro (octobre 2022) et 9,1 % aux États-Unis (juin 2022).",
      "Principales sources : Insee, Banque de France, Eurostat, BCE, BEA, BLS, FMI, OCDE ; normes SCN 2008 et SEC 2010.",
      "Toujours vérifier : valeur ou volume, CVS-CJO, glissement ou moyenne annuelle, taux trimestriel ou annualisé, estimation provisoire ou définitive."
     ],
     "lexique": [
      {
       "terme": "Agrégat",
       "def": "Grandeur synthétique obtenue en additionnant les opérations d'un ensemble d'agents (PIB, consommation totale, investissement total)."
      },
      {
       "terme": "Variable endogène",
       "def": "Variable dont la valeur est déterminée par le modèle."
      },
      {
       "terme": "Variable exogène",
       "def": "Variable dont la valeur est donnée de l'extérieur du modèle et que celui-ci ne cherche pas à expliquer."
      },
      {
       "terme": "Paramètre",
       "def": "Coefficient supposé constant qui décrit un comportement ou une technologie (propension à consommer, taux de dépréciation)."
      },
      {
       "terme": "Forme réduite",
       "def": "Expression de chaque variable endogène en fonction des seules variables exogènes et des paramètres."
      },
      {
       "terme": "Statique comparative",
       "def": "Comparaison de deux équilibres obtenus pour deux valeurs différentes d'une variable exogène ou d'un paramètre."
      },
      {
       "terme": "Flux",
       "def": "Grandeur mesurée par unité de temps (PIB, investissement, déficit)."
      },
      {
       "terme": "Stock",
       "def": "Grandeur mesurée à une date donnée (capital, dette, patrimoine, nombre de chômeurs)."
      },
      {
       "terme": "Fait stylisé",
       "def": "Régularité empirique robuste, observée dans de nombreux pays et périodes, que les modèles doivent expliquer."
      },
      {
       "terme": "Écart de production",
       "def": "Différence relative entre le PIB effectif et le PIB potentiel ; positif en surchauffe, négatif en sous-régime."
      },
      {
       "terme": "PIB potentiel",
       "def": "Niveau de production compatible avec une utilisation normale des facteurs et une inflation stable."
      },
      {
       "terme": "Sophisme de composition",
       "def": "Erreur consistant à croire que ce qui est vrai pour un agent isolé l'est pour l'ensemble des agents."
      },
      {
       "terme": "CVS-CJO",
       "def": "Corrigé des variations saisonnières et des effets de jours ouvrables : traitement permettant de comparer des périodes successives."
      }
     ],
     "qcm": [
      {
       "q": "Dans le modèle Y = C + I, C = 50 + 0,75 Y, avec I = 100 exogène, quel est le niveau d'équilibre de la production ?",
       "options": [
        "200",
        "600",
        "450",
        "150"
       ],
       "bonnes": [
        1
       ],
       "explication": "Y = 50 + 0,75 Y + 100, donc 0,25 Y = 150 et Y = 150 / 0,25 = 600. On vérifie : C = 50 + 450 = 500 et 500 + 100 = 600."
      },
      {
       "q": "Quelles grandeurs sont des stocks ? (deux réponses)",
       "options": [
        "La dette publique au 31 décembre",
        "Le déficit public de l'année",
        "L'investissement des entreprises en 2025",
        "Le nombre de chômeurs en juin"
       ],
       "bonnes": [
        0,
        3
       ],
       "explication": "Un stock se mesure à une date : la dette publique et le nombre de chômeurs à un moment donné. Le déficit et l'investissement sont des flux mesurés sur une période."
      },
      {
       "q": "Avec K(t) = 2 000, un taux de dépréciation de 4 % et un investissement brut de 100, que vaut le stock de capital à la période suivante ?",
       "options": [
        "2 100",
        "2 020",
        "1 920",
        "2 096"
       ],
       "bonnes": [
        1
       ],
       "explication": "K(t+1) = (1 − 0,04) × 2 000 + 100 = 1 920 + 100 = 2 020. L'investissement net vaut 100 − 80 = 20."
      },
      {
       "q": "Quelle proposition caractérise le court terme en macroéconomie ?",
       "options": [
        "Le stock de capital et la technologie évoluent librement",
        "La production est déterminée par l'offre de travail",
        "Le chômage est toujours égal à son niveau structurel",
        "Les prix et salaires nominaux s'ajustent lentement, si bien que la demande détermine la production"
       ],
       "bonnes": [
        3
       ],
       "explication": "Le court terme se définit par la rigidité des prix et salaires nominaux : un choc de demande se traduit par une variation des quantités. L'ajustement des prix caractérise le moyen terme, l'évolution du capital et de la technologie le long terme."
      },
      {
       "q": "Dans le modèle Y = C + I, C = 100 + 0,8 Y, l'investissement augmente de 10. De combien varie la production d'équilibre ?",
       "options": [
        "50",
        "10",
        "8",
        "12,5"
       ],
       "bonnes": [
        0
       ],
       "explication": "Le multiplicateur vaut 1 / (1 − 0,8) = 5. La production augmente de 5 × 10 = 50."
      },
      {
       "q": "Quelles propositions font partie des faits stylisés des cycles économiques ? (deux réponses)",
       "options": [
        "La consommation est plus volatile que le PIB",
        "L'investissement est nettement plus volatil que le PIB",
        "Le chômage évolue en sens inverse de la production",
        "Les cycles ont une période fixe d'environ sept ans"
       ],
       "bonnes": [
        1,
        2
       ],
       "explication": "L'investissement est deux à trois fois plus volatil que le PIB et le chômage est contracyclique. La consommation est moins volatile que le PIB, et les fluctuations ne sont pas périodiques."
      },
      {
       "q": "Le paradoxe de l'épargne illustre :",
       "options": [
        "le fait que l'épargne est toujours égale à l'investissement ex ante",
        "le fait que l'épargne individuelle réduit la richesse individuelle",
        "un sophisme de composition : une hausse simultanée de l'épargne de tous peut réduire le revenu sans accroître l'épargne totale",
        "la neutralité de la monnaie"
       ],
       "bonnes": [
        2
       ],
       "explication": "Si tous épargnent davantage, la consommation et donc les revenus baissent ; l'épargne totale peut ne pas augmenter. Ce qui est vrai pour un individu ne l'est pas pour l'ensemble."
      },
      {
       "q": "Une économie croît de 0,5 % sur un trimestre (taux non annualisé). Quel est approximativement le rythme annualisé, convention utilisée par le BEA américain ?",
       "options": [
        "0,5 %",
        "1 %",
        "0,125 %",
        "2 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "Le rythme annualisé vaut (1,005)^4 − 1, soit environ 2,02 %, c'est-à-dire environ quatre fois le taux trimestriel."
      },
      {
       "q": "Dans le modèle IS-LM d'une économie fermée, quelle variable est usuellement traitée comme exogène ?",
       "options": [
        "L'offre de monnaie fixée par la banque centrale",
        "La production",
        "Le taux d'intérêt",
        "La consommation"
       ],
       "bonnes": [
        0
       ],
       "explication": "Dans IS-LM, la production et le taux d'intérêt sont endogènes (et donc la consommation qui dépend du revenu) ; l'offre de monnaie et les dépenses publiques sont des instruments exogènes."
      },
      {
       "q": "Quelles propositions sur la lecture des données sont exactes ? (deux réponses)",
       "options": [
        "Une croissance en valeur est toujours inférieure à la croissance en volume",
        "En 2025, le PIB français a crû d'environ 1,9 % en valeur mais de 0,8 % en volume",
        "Le glissement annuel compare une période au même mois ou trimestre de l'année précédente",
        "Les estimations flash du PIB ne sont jamais révisées"
       ],
       "bonnes": [
        1,
        2
       ],
       "explication": "La croissance en valeur inclut la hausse des prix : avec un prix du PIB en hausse d'environ 1,1 %, 1,9 % en valeur correspond à 0,8 % en volume. Le glissement annuel compare à la même période de l'année précédente. Les premières estimations sont régulièrement révisées."
      },
      {
       "q": "Un écart de production positif signifie que :",
       "options": [
        "le PIB potentiel est supérieur au PIB effectif",
        "le PIB effectif est supérieur au potentiel, ce qui crée des tensions inflationnistes",
        "le chômage est au-dessus de son niveau structurel",
        "la croissance est négative"
       ],
       "bonnes": [
        1
       ],
       "explication": "L'écart (Y − Y*) / Y* est positif lorsque la production dépasse son potentiel : l'économie est en surchauffe, le chômage est plutôt sous son niveau structurel et l'inflation tend à accélérer."
      }
     ]
    },
    {
     "id": "mac1-comptabilite-nationale",
     "titre": "La comptabilité nationale",
     "duree": 50,
     "niveau": "L1",
     "objectifs": [
      "Définir la valeur ajoutée et calculer le PIB selon les trois optiques (production, revenu, dépense)",
      "Distinguer PIB, PNB, RNB, revenu disponible et épargne, en brut et en net",
      "Écrire l'égalité emplois-ressources et identifier les composantes de la demande finale",
      "Connaître les secteurs institutionnels et les principes du TEE et du TES",
      "Démontrer l'identité épargne-investissement en économie fermée puis ouverte (S − I = X − M) et interpréter un besoin ou une capacité de financement",
      "Discuter les limites du PIB et les indicateurs alternatifs"
     ],
     "sections": [
      {
       "titre": "Le cadre : production, valeur ajoutée et consommations intermédiaires",
       "contenu": "<p>La <strong>comptabilité nationale</strong> est une représentation chiffrée, cohérente et normalisée de l'ensemble de l'économie d'un pays sur une période. Ses premiers développements datent des années 1930-1940 (Simon Kuznets aux États-Unis, Richard Stone au Royaume-Uni, ce dernier recevant le prix Nobel en 1984) ; elle est aujourd'hui régie par le <strong>SCN 2008</strong> des Nations unies et, en Europe, par le <strong>SEC 2010</strong>. Son ancêtre intellectuel est le <em>Tableau économique</em> de François Quesnay (1758), première représentation du circuit des richesses.</p>\n<p>La <strong>production</strong> est l'activité socialement organisée qui crée des biens et des services à partir de facteurs de production. On distingue la production <strong>marchande</strong> (vendue à un prix économiquement significatif, c'est-à-dire couvrant plus de la moitié des coûts) et la production <strong>non marchande</strong> (fournie gratuitement ou à un prix faible, surtout par les administrations publiques), évaluée par convention <strong>à ses coûts de production</strong> (rémunérations, consommations intermédiaires, consommation de capital fixe).</p>\n<p>Pour produire, une entreprise utilise des <strong>consommations intermédiaires</strong> (CI) : biens et services détruits ou transformés au cours du processus de production (énergie, matières premières, services achetés). Elle crée donc une richesse égale à la différence entre la valeur de sa production et celle de ses consommations intermédiaires : c'est la <strong>valeur ajoutée</strong> (VA).</p>\n<p class=\"eq\"><em>VA</em> = <em>production</em> − <em>consommations intermédiaires</em></p>\n<p>Additionner les chiffres d'affaires de toutes les entreprises conduirait à des <strong>doubles comptes</strong> : la farine serait comptée une fois chez le meunier et une seconde fois dans le prix du pain. La valeur ajoutée élimine ces doubles comptes. Il ne faut pas confondre consommations intermédiaires et <strong>capital fixe</strong> : les machines et bâtiments, utilisés pendant plus d'un an, ne sont pas consommés dans l'année ; leur achat est un investissement et leur usure annuelle est la <strong>consommation de capital fixe</strong> (CCF), ou amortissement économique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> « brut » et « net » se distinguent par la consommation de capital fixe (net = brut − CCF). « Intérieur » et « national » se distinguent par le critère retenu : le territoire (intérieur) ou la résidence des agents (national).</div>"
      },
      {
       "titre": "Le PIB selon les trois optiques",
       "contenu": "<p>Le <strong>produit intérieur brut</strong> (PIB) mesure la richesse produite pendant une période par les unités résidentes sur le territoire. Il peut être calculé de trois façons, qui donnent le même résultat par construction : la production crée des revenus qui sont dépensés.</p>\n<h4>Optique de la production</h4>\n<p class=\"eq\"><em>PIB</em> = Σ <em>VA</em> + <em>impôts sur les produits</em> − <em>subventions sur les produits</em></p>\n<p>Les valeurs ajoutées sont évaluées aux prix de base (hors TVA notamment). Pour obtenir le PIB aux prix du marché, payé par les acheteurs, on ajoute les impôts sur les produits (TVA, droits d'accise, droits de douane) nets des subventions sur les produits.</p>\n<h4>Optique du revenu</h4>\n<p class=\"eq\"><em>PIB</em> = <em>rémunération des salariés</em> + <em>EBE</em> + <em>revenu mixte</em> + <em>impôts sur la production et les importations</em> − <em>subventions</em></p>\n<p>La valeur ajoutée se partage entre les salariés (salaires bruts et cotisations sociales employeurs), l'État (impôts sur la production) et les entreprises : l'<strong>excédent brut d'exploitation</strong> (EBE) pour les sociétés, le <strong>revenu mixte</strong> pour les entrepreneurs individuels (qui rémunère à la fois leur travail et leur capital). Pour les sociétés non financières françaises, la part des salaires dans la valeur ajoutée est d'environ deux tiers et le <strong>taux de marge</strong> (EBE / VA) d'environ un tiers.</p>\n<h4>Optique de la dépense</h4>\n<p class=\"eq\"><em>PIB</em> = <em>CF</em> + <em>FBCF</em> + Δ<em>S</em> + <em>X</em> − <em>M</em></p>\n<p>Le PIB est égal à la somme des emplois finals intérieurs (dépense de consommation finale <em>CF</em> des ménages, des administrations publiques et des institutions sans but lucratif, formation brute de capital fixe <em>FBCF</em>, variations de stocks Δ<em>S</em>) et des exportations <em>X</em>, diminuée des importations <em>M</em>. Dans les manuels, on écrit de façon simplifiée <em>Y</em> = <em>C</em> + <em>I</em> + <em>G</em> + <em>X</em> − <em>M</em>, où <em>G</em> désigne les dépenses publiques en biens et services (et non les transferts, qui ne rémunèrent aucune production).</p>\n<p>La <strong>FBCF</strong> est la valeur des biens durables acquis par les unités résidentes pour être utilisés plus d'un an dans la production : machines, bâtiments, logiciels, dépenses de recherche-développement (incluses depuis le SEC 2010) et, pour les ménages, l'achat de logements neufs. Les <strong>variations de stocks</strong> enregistrent la production non vendue de l'année (ou le déstockage) : elles assurent l'égalité comptable entre production et dépense et sont très cycliques.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le PIB de trois façons (sans impôts ni subventions, économie fermée).<br>Un agriculteur produit du blé pour 200 sans consommation intermédiaire et le vend à un meunier. Le meunier en fait de la farine vendue 350 à un boulanger. Le boulanger produit du pain vendu 600 aux ménages. Les salaires versés sont de 120 (agriculteur), 90 (meunier) et 150 (boulanger).<br>1) Production : VA = 200 + (350 − 200) + (600 − 350) = 200 + 150 + 250 = 600. La somme des chiffres d'affaires (1 150) compterait deux fois le blé et la farine.<br>2) Revenu : salaires = 120 + 90 + 150 = 360 ; EBE = (200 − 120) + (150 − 90) + (250 − 150) = 80 + 60 + 100 = 240 ; total = 600.<br>3) Dépense : seule la consommation finale de pain est une dépense finale, soit 600.<br>Les trois optiques donnent 600.</div>\n<p>Ordres de grandeur : en 2025, le PIB de la France s'élevait à environ 2 991 milliards d'euros. La dépense de consommation des ménages représentait environ 1 546 milliards (un peu plus de la moitié du PIB) et la FBCF de l'ensemble des secteurs environ 664 milliards (22 % du PIB) selon l'Insee. Les exportations et les importations représentent chacune de l'ordre d'un tiers du PIB. Le PIB de la zone euro est de l'ordre de 15 000 milliards d'euros et celui des États-Unis de l'ordre de 30 000 milliards de dollars (ordres de grandeur pour le milieu des années 2020).</p>"
      },
      {
       "titre": "Du PIB au revenu disponible et à l'épargne",
       "contenu": "<p>Le PIB est un concept <strong>intérieur</strong> : il inclut la production réalisée en France par une filiale d'un groupe étranger, mais pas celle d'une filiale française à l'étranger. Les revenus perçus par les résidents dépendent, eux, de leur résidence. On passe du PIB au <strong>revenu national brut</strong> (RNB) en ajoutant les revenus primaires (salaires, intérêts, dividendes, bénéfices réinvestis) reçus du reste du monde et en retranchant ceux qui lui sont versés.</p>\n<p class=\"eq\"><em>RNB</em> = <em>PIB</em> + <em>revenus primaires reçus du reste du monde</em> − <em>revenus primaires versés au reste du monde</em></p>\n<p>Le RNB correspond à l'ancien <strong>produit national brut</strong> (PNB) : le SCN a remplacé la notion de produit national par celle de revenu national, plus exacte, car il s'agit bien de revenus et non d'une production. Pour la France l'écart entre PIB et RNB est faible (de l'ordre de 1 à 2 % du PIB) ; il est très important pour des pays comme l'Irlande ou le Luxembourg, où des multinationales ou des travailleurs frontaliers transfèrent à l'étranger une part importante des revenus créés sur le territoire.</p>\n<p>En ajoutant les transferts courants nets reçus du reste du monde, on obtient le <strong>revenu national disponible brut</strong>. En retranchant la consommation de capital fixe, on passe aux grandeurs nettes (revenu national net).</p>\n<h4>Le revenu disponible et l'épargne des ménages</h4>\n<p>Pour un secteur, le <strong>revenu disponible brut</strong> (RDB) est le revenu qui reste après les opérations de répartition primaire et secondaire. Pour les ménages :</p>\n<p class=\"eq\"><em>RDB</em> = <em>revenus primaires</em> + <em>prestations sociales reçues</em> − <em>impôts courants</em> − <em>cotisations sociales versées</em> + <em>autres transferts nets</em></p>\n<p>Les revenus primaires comprennent les revenus d'activité (salaires, revenu mixte) et les revenus de la propriété (intérêts, dividendes, loyers, y compris les <strong>loyers imputés</strong> des propriétaires occupants, qui sont réputés se louer leur logement à eux-mêmes). Le RDB est ensuite consommé ou épargné :</p>\n<p class=\"eq\"><em>S</em><sub>ménages</sub> = <em>RDB</em> − <em>C</em> ;   taux d'épargne = <em>S</em> / <em>RDB</em></p>\n<p>Le taux d'épargne des ménages français est élevé en comparaison internationale : autour de 14 à 15 % du RDB avant la crise sanitaire, il a bondi pendant les confinements (épargne « forcée ») et reste depuis proche de 18 %. Le <strong>taux d'épargne financière</strong> retranche de l'épargne l'investissement des ménages (essentiellement en logement) : il mesure leur capacité de financement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> pour les ménages, l'achat d'un logement neuf est un investissement (FBCF), pas une consommation ; l'achat d'une voiture ou d'un réfrigérateur est en revanche une consommation finale, même s'il s'agit d'un bien durable. Quant à l'achat d'actions, c'est une opération financière : ce n'est ni une FBCF ni un investissement au sens de la comptabilité nationale.</div>"
      },
      {
       "titre": "Secteurs institutionnels, égalité emplois-ressources, TEE et TES",
       "contenu": "<p>La comptabilité nationale regroupe les unités résidentes en <strong>secteurs institutionnels</strong> selon leur fonction principale et l'origine de leurs ressources :</p>\n<table>\n<thead><tr><th>Secteur</th><th>Fonction principale</th><th>Ressources principales</th></tr></thead>\n<tbody>\n<tr><td>Sociétés non financières (SNF)</td><td>produire des biens et services marchands non financiers</td><td>ventes</td></tr>\n<tr><td>Sociétés financières (SF)</td><td>intermédiation financière, assurance</td><td>intérêts, commissions, primes</td></tr>\n<tr><td>Administrations publiques (APU)</td><td>produire des services non marchands, redistribuer</td><td>prélèvements obligatoires</td></tr>\n<tr><td>Ménages (y compris entrepreneurs individuels)</td><td>consommer ; produire pour les entreprises individuelles</td><td>revenus d'activité, de la propriété, transferts</td></tr>\n<tr><td>Institutions sans but lucratif au service des ménages (ISBLSM)</td><td>services non marchands aux ménages (associations)</td><td>cotisations, dons, subventions</td></tr>\n</tbody>\n</table>\n<p>Les relations avec les non-résidents sont regroupées dans un compte du <strong>reste du monde</strong> (RDM).</p>\n<h4>L'égalité emplois-ressources</h4>\n<p>Pour l'ensemble de l'économie (et pour chaque produit), les biens et services disponibles (les <strong>ressources</strong> : production et importations, plus impôts nets sur les produits) sont nécessairement utilisés (les <strong>emplois</strong>) :</p>\n<p class=\"eq\"><em>P</em> + <em>M</em> + <em>impôts nets sur les produits</em> = <em>CI</em> + <em>CF</em> + <em>FBCF</em> + Δ<em>S</em> + <em>X</em></p>\n<p>En retranchant les consommations intermédiaires des deux côtés, on retrouve l'optique de la dépense : <em>PIB</em> + <em>M</em> = <em>CF</em> + <em>FBCF</em> + Δ<em>S</em> + <em>X</em>.</p>\n<h4>Le tableau économique d'ensemble (TEE)</h4>\n<p>Le <strong>TEE</strong> croise en lignes les <strong>opérations</strong> (sur biens et services, de répartition, financières) et en colonnes les <strong>secteurs institutionnels</strong>, avec pour chacun des emplois et des ressources. Il est organisé en une séquence de comptes, chacun dégageant un <strong>solde</strong> qui est reporté en ressource du compte suivant : compte de production (solde : valeur ajoutée), compte d'exploitation (EBE), compte d'affectation des revenus primaires (solde des revenus primaires), compte de distribution secondaire du revenu (revenu disponible), compte d'utilisation du revenu (épargne), compte de capital (<strong>capacité ou besoin de financement</strong>). Le compte financier montre comment ce solde se traduit en variations de créances et de dettes. Traditionnellement, les ménages dégagent une capacité de financement, les sociétés non financières et les administrations publiques un besoin de financement.</p>\n<h4>Le tableau des entrées-sorties (TES)</h4>\n<p>Le <strong>TES</strong> raisonne par <strong>branches</strong> (regroupements d'unités de production homogènes produisant un même produit) et non par secteurs. Il décrit, pour chaque produit, l'équilibre ressources-emplois, et sa partie centrale (le tableau des entrées intermédiaires) indique ce que chaque branche achète aux autres. Il repose sur les travaux de Wassily Leontief (années 1930, prix Nobel 1973). En notant <em>a</em><sub><em>ij</em></sub> la quantité de produit <em>i</em> nécessaire pour produire une unité de produit <em>j</em> (coefficient technique), la production <em>x</em> doit couvrir les besoins intermédiaires <em>Ax</em> et la demande finale <em>d</em> : <em>x</em> = <em>Ax</em> + <em>d</em>, d'où <em>x</em> = (<em>I</em> − <em>A</em>)<sup>−1</sup> <em>d</em>. La matrice (<em>I</em> − <em>A</em>)<sup>−1</sup> donne l'effet total, direct et indirect, d'une hausse de la demande finale d'un produit sur la production de toutes les branches.</p>"
      },
      {
       "titre": "Le circuit et l'identité épargne-investissement",
       "contenu": "<p>La représentation en <strong>circuit</strong> montre que la production engendre des revenus qui financent des dépenses, lesquelles rémunèrent la production. Dans une économie fermée sans État, les entreprises versent des revenus <em>Y</em> aux ménages ; ceux-ci en consomment une partie <em>C</em> et épargnent le reste <em>S</em> ; l'épargne est une <strong>fuite</strong> hors du circuit de la dépense, l'investissement <em>I</em> une <strong>injection</strong>. Le circuit est bouclé lorsque les injections compensent les fuites.</p>\n<h4>Économie fermée</h4>\n<p>Côté emplois, <em>Y</em> = <em>C</em> + <em>I</em> + <em>G</em>. Côté revenu, les ménages répartissent leur revenu entre consommation, épargne privée et impôts nets des transferts <em>T</em> : <em>Y</em> = <em>C</em> + <em>S</em><sub>p</sub> + <em>T</em>. En égalisant :</p>\n<p class=\"eq\"><em>S</em><sub>p</sub> + (<em>T</em> − <em>G</em>) = <em>I</em>,   soit   <em>S</em><sub>nationale</sub> = <em>I</em></p>\n<p>L'épargne nationale (épargne privée plus épargne publique <em>T</em> − <em>G</em>) est égale à l'investissement. C'est une <strong>identité ex post</strong> : elle est toujours vérifiée dans les comptes. Elle ne dit pas que l'épargne « cause » l'investissement. Ex ante, les plans d'épargne des ménages et d'investissement des entreprises peuvent différer ; c'est l'ajustement de la production (chez Keynes) ou du taux d'intérêt (chez les classiques) qui les rend égaux. Cette distinction ex ante / ex post, due à l'école suédoise (Myrdal) et à Keynes, est fondamentale.</p>\n<h4>Économie ouverte</h4>\n<p>Avec <em>Y</em> = <em>C</em> + <em>I</em> + <em>G</em> + <em>X</em> − <em>M</em> et <em>S</em> = <em>Y</em> − <em>C</em> − <em>G</em> (en négligeant les revenus et transferts nets avec l'extérieur), on obtient :</p>\n<p class=\"eq\"><em>S</em> − <em>I</em> = <em>X</em> − <em>M</em></p>\n<p>Ou, en séparant épargne privée et publique : (<em>S</em><sub>p</sub> − <em>I</em>) + (<em>T</em> − <em>G</em>) = <em>X</em> − <em>M</em>. Un pays dont l'épargne nationale dépasse l'investissement dégage un excédent extérieur et une <strong>capacité de financement</strong> : il prête au reste du monde (il accumule des créances sur l'étranger). Un pays qui investit plus qu'il n'épargne a un <strong>besoin de financement</strong> : il s'endette auprès du reste du monde ou lui cède des actifs. Plus précisément, c'est le solde des transactions courantes (qui inclut aussi les revenus primaires et secondaires) qui égale <em>S</em> − <em>I</em>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire les soldes sectoriels.<br>Données : <em>Y</em> = 2 000 ; <em>C</em> = 1 200 ; <em>I</em> = 400 ; <em>G</em> = 350 ; <em>X</em> = 600 ; <em>T</em> = 300.<br>1) Importations : <em>M</em> = <em>C</em> + <em>I</em> + <em>G</em> + <em>X</em> − <em>Y</em> = 2 550 − 2 000 = 550 ; solde extérieur <em>X</em> − <em>M</em> = 50.<br>2) Épargne privée : <em>S</em><sub>p</sub> = <em>Y</em> − <em>T</em> − <em>C</em> = 500 ; épargne publique : <em>T</em> − <em>G</em> = −50 (déficit public de 50).<br>3) Épargne nationale : 500 − 50 = 450 ; <em>S</em> − <em>I</em> = 50 = <em>X</em> − <em>M</em>.<br>Interprétation : le secteur privé dégage une capacité de financement de 100, qui finance le déficit public (50) et des prêts au reste du monde (50). Le pays a une capacité de financement de 50.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> les « déficits jumeaux » et les déséquilibres mondiaux. Aux États-Unis, l'épargne nationale est durablement inférieure à l'investissement : le pays affiche un déficit courant de l'ordre de 3 à 4 % du PIB au cours des dernières années, financé par le reste du monde. Le creusement du déficit public y a souvent coïncidé avec celui du déficit extérieur (« déficits jumeaux » des années 1980 et 2000). À l'inverse, l'Allemagne a dégagé au milieu des années 2010 des excédents courants proches de 8 % du PIB, reflet d'une épargne nationale très supérieure à l'investissement. L'identité <em>S</em> − <em>I</em> = <em>X</em> − <em>M</em> montre qu'un déficit extérieur n'est pas seulement un problème de « compétitivité » : c'est aussi le miroir d'un déficit d'épargne.</div>"
      },
      {
       "titre": "Les limites du PIB et les indicateurs alternatifs",
       "contenu": "<p>Simon Kuznets, l'un des pères de la comptabilité nationale, avertissait dès 1934 que le bien-être d'une nation pouvait difficilement être déduit d'une mesure du revenu national. Le PIB mesure une production, pas un bien-être.</p>\n<h4>Les limites</h4>\n<ul>\n<li><strong>Ce qu'il ignore</strong> : la production domestique (tâches ménagères, soins aux proches) et le bénévolat, qui ne sont pas comptabilisés alors qu'ils créent de l'utilité ; le loisir ; une partie de l'économie souterraine, malgré les corrections (le SEC 2010 impose d'inclure les activités illégales consensuelles, comme le trafic de stupéfiants, intégré par l'Insee en 2018).</li>\n<li><strong>Ce qu'il compte mal</strong> : la production non marchande est évaluée à ses coûts, si bien que les gains de productivité des services publics n'apparaissent pas ; la qualité des produits et les services gratuits du numérique sont difficiles à mesurer.</li>\n<li><strong>Ce qu'il compte « à tort »</strong> : les dépenses dites <strong>défensives</strong> (réparer les dégâts d'une catastrophe, d'un accident ou de la pollution) augmentent le PIB sans améliorer la situation de départ.</li>\n<li><strong>La répartition</strong> : un PIB par habitant moyen ne dit rien des inégalités ; le revenu médian peut stagner alors que le PIB par habitant augmente.</li>\n<li><strong>La soutenabilité</strong> : le PIB est un flux ; il n'enregistre ni l'épuisement des ressources naturelles ni la dégradation du climat et de la biodiversité. Même le produit intérieur net ne retranche que l'usure du capital produit.</li>\n</ul>\n<p>Le <strong>paradoxe d'Easterlin</strong> (1974) a ajouté un argument : au-delà d'un certain niveau, la hausse du revenu moyen d'un pays ne s'accompagne pas d'une hausse durable du bonheur déclaré, ce qui suggère l'importance du revenu relatif. Ce résultat reste débattu.</p>\n<h4>Les indicateurs alternatifs</h4>\n<ul>\n<li>L'<strong>indice de développement humain</strong> (IDH, PNUD, 1990, inspiré par Amartya Sen) combine revenu par habitant, espérance de vie et éducation.</li>\n<li>Le rapport <strong>Stiglitz-Sen-Fitoussi</strong> (2009) recommande de privilégier le revenu et la consommation des ménages plutôt que la production, de tenir compte de la répartition, d'intégrer les activités non marchandes, de mesurer la qualité de vie (santé, éducation, liens sociaux, insécurité) et de suivre séparément la soutenabilité par des indicateurs de stocks (capital économique, humain, naturel).</li>\n<li>Des mesures « vertes » : l'<strong>épargne nette ajustée</strong> de la Banque mondiale (épargne nette corrigée des dépenses d'éducation, de l'épuisement des ressources et des dommages de la pollution), l'empreinte carbone, l'empreinte écologique.</li>\n<li>En France, la loi de 2015 (dite loi Sas) impose au gouvernement de présenter chaque année au Parlement de <strong>nouveaux indicateurs de richesse</strong> (taux d'emploi, espérance de vie en bonne santé, inégalités de revenus, empreinte carbone, artificialisation des sols, etc.).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le PIB reste l'indicateur central de l'activité et du cycle ; il n'a pas été conçu pour mesurer le bien-être ou la soutenabilité. Les approches modernes ne cherchent pas un indicateur unique mais un tableau de bord combinant revenu des ménages, inégalités, qualité de vie et stocks de capital naturel.</div>"
      }
     ],
     "points_cles": [
      "Valeur ajoutée = production − consommations intermédiaires ; elle évite les doubles comptes.",
      "Optique production : PIB = Σ VA + impôts sur les produits − subventions sur les produits.",
      "Optique revenu : PIB = rémunération des salariés + EBE + revenu mixte + impôts sur la production nets des subventions.",
      "Optique dépense : PIB = CF + FBCF + variations de stocks + X − M ; simplifié Y = C + I + G + X − M, G excluant les transferts.",
      "La production non marchande est évaluée à ses coûts de production.",
      "RNB = PIB + revenus primaires nets reçus du reste du monde (l'ancien PNB) ; net = brut − consommation de capital fixe.",
      "RDB des ménages = revenus primaires + prestations − impôts courants − cotisations ; épargne = RDB − C ; taux d'épargne = S / RDB (environ 18 % en France ces dernières années).",
      "Égalité emplois-ressources : P + M + impôts nets sur les produits = CI + CF + FBCF + ΔS + X.",
      "Secteurs institutionnels : SNF, SF, APU, ménages, ISBLSM, plus le reste du monde ; le TEE croise opérations et secteurs, le TES décrit les échanges entre branches (Leontief).",
      "En économie fermée, S = I ex post : c'est une identité comptable, pas une relation causale ; ex ante, plans d'épargne et d'investissement peuvent différer.",
      "En économie ouverte, S − I = X − M ; (Sp − I) + (T − G) = X − M ; un excédent d'épargne correspond à une capacité de financement vis-à-vis du reste du monde.",
      "Le PIB ignore le travail domestique, la répartition, la soutenabilité et compte les dépenses défensives ; alternatives : IDH, rapport Stiglitz-Sen-Fitoussi (2009), épargne nette ajustée, nouveaux indicateurs de richesse."
     ],
     "lexique": [
      {
       "terme": "Valeur ajoutée",
       "def": "Différence entre la valeur de la production et celle des consommations intermédiaires ; mesure la richesse créée par une unité de production."
      },
      {
       "terme": "Consommations intermédiaires",
       "def": "Biens et services détruits ou transformés au cours du processus de production."
      },
      {
       "terme": "FBCF",
       "def": "Formation brute de capital fixe : acquisitions de biens de production durables (plus d'un an), y compris logiciels, R&D et logements neufs des ménages."
      },
      {
       "terme": "Consommation de capital fixe",
       "def": "Dépréciation du capital fixe au cours de la période ; elle sépare les grandeurs brutes des grandeurs nettes."
      },
      {
       "terme": "Excédent brut d'exploitation",
       "def": "Part de la valeur ajoutée qui revient aux sociétés après rémunération des salariés et impôts sur la production nets des subventions."
      },
      {
       "terme": "Revenu national brut",
       "def": "PIB augmenté des revenus primaires nets reçus du reste du monde ; ancien PNB."
      },
      {
       "terme": "Revenu disponible brut",
       "def": "Revenu dont dispose un secteur après redistribution (impôts, cotisations, prestations), pour consommer ou épargner."
      },
      {
       "terme": "Taux d'épargne",
       "def": "Rapport de l'épargne au revenu disponible brut."
      },
      {
       "terme": "Secteur institutionnel",
       "def": "Regroupement d'unités résidentes ayant une même fonction principale et des ressources de même nature."
      },
      {
       "terme": "Branche",
       "def": "Regroupement d'unités de production homogènes fabriquant un même produit ; unité d'analyse du TES."
      },
      {
       "terme": "TEE",
       "def": "Tableau économique d'ensemble : croisement des opérations et des secteurs institutionnels, avec la séquence des comptes et leurs soldes."
      },
      {
       "terme": "Capacité de financement",
       "def": "Solde positif du compte de capital : l'épargne excède l'investissement, l'agent ou le pays prête au reste de l'économie."
      },
      {
       "terme": "Dépenses défensives",
       "def": "Dépenses visant à réparer ou prévenir des dommages ; elles accroissent le PIB sans améliorer le bien-être de départ."
      }
     ],
     "qcm": [
      {
       "q": "Une entreprise produit pour 800 en utilisant 300 de consommations intermédiaires et en versant 350 de salaires. Que vaut sa valeur ajoutée (sans impôts ni subventions) ?",
       "options": [
        "450",
        "500",
        "150",
        "1 100"
       ],
       "bonnes": [
        1
       ],
       "explication": "VA = 800 − 300 = 500. Les salaires ne se retranchent pas : ils sont une part de la valeur ajoutée (l'EBE vaut 500 − 350 = 150)."
      },
      {
       "q": "Quelles opérations sont comptabilisées dans la FBCF ? (deux réponses)",
       "options": [
        "L'achat d'un logement neuf par un ménage",
        "L'achat d'actions d'une entreprise cotée",
        "L'achat d'une voiture par un ménage",
        "L'acquisition d'un logiciel par une entreprise"
       ],
       "bonnes": [
        0,
        3
       ],
       "explication": "Le logement neuf des ménages et les logiciels des entreprises sont de la FBCF. L'achat d'actions est une opération financière ; la voiture d'un ménage est une consommation finale."
      },
      {
       "q": "Le PIB d'un pays vaut 1 000 ; ses résidents reçoivent 60 de revenus primaires du reste du monde et en versent 90. Que vaut le RNB ?",
       "options": [
        "1 030",
        "970",
        "1 060",
        "1 150"
       ],
       "bonnes": [
        1
       ],
       "explication": "RNB = PIB + revenus primaires reçus − revenus primaires versés = 1 000 + 60 − 90 = 970."
      },
      {
       "q": "Comment la production non marchande des administrations publiques est-elle évaluée en comptabilité nationale ?",
       "options": [
        "À la valeur déclarée par les usagers",
        "Elle n'est pas comptabilisée",
        "Au prix de services privés comparables",
        "À ses coûts de production"
       ],
       "bonnes": [
        3
       ],
       "explication": "Faute de prix de marché, la production non marchande est évaluée par convention à la somme de ses coûts : rémunérations, consommations intermédiaires et consommation de capital fixe."
      },
      {
       "q": "Dans une économie ouverte, l'épargne nationale vaut 500 et l'investissement 560. Que peut-on en déduire ?",
       "options": [
        "Le pays a un besoin de financement de 60 et un solde extérieur de −60",
        "Le pays a une capacité de financement de 60",
        "Le déficit public vaut 60",
        "Les importations valent 60"
       ],
       "bonnes": [
        0
       ],
       "explication": "S − I = X − M = 500 − 560 = −60 : le pays importe plus qu'il n'exporte et doit emprunter 60 au reste du monde. On ne peut rien dire du déficit public sans connaître la décomposition entre épargne privée et publique."
      },
      {
       "q": "Quelles propositions sur l'identité épargne-investissement sont exactes ? (deux réponses)",
       "options": [
        "Elle est toujours vérifiée ex post dans les comptes",
        "Elle prouve que l'épargne cause l'investissement",
        "En économie fermée avec État, elle s'écrit Sp + (T − G) = I",
        "Elle n'est vraie que lorsque l'économie est au plein emploi"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "L'égalité S = I est une identité comptable ex post, qui s'écrit Sp + (T − G) = I avec un État. Elle ne dit rien du sens de la causalité ni du niveau d'emploi : c'est l'objet des théories (ajustement par le revenu chez Keynes, par le taux d'intérêt chez les classiques)."
      },
      {
       "q": "Y = 1 000, C = 600, I = 200, G = 250, T = 220. Que vaut le solde extérieur X − M ?",
       "options": [
        "−30",
        "50",
        "30",
        "−50"
       ],
       "bonnes": [
        3
       ],
       "explication": "X − M = Y − C − I − G = 1 000 − 600 − 200 − 250 = −50. On vérifie avec S − I : épargne privée 1 000 − 220 − 600 = 180, épargne publique 220 − 250 = −30, S = 150, S − I = −50."
      },
      {
       "q": "Les ménages ont un revenu disponible brut de 1 500 et consomment 1 230. Quel est leur taux d'épargne ?",
       "options": [
        "22 %",
        "82 %",
        "27 %",
        "18 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "Épargne = 1 500 − 1 230 = 270 ; taux d'épargne = 270 / 1 500 = 0,18, soit 18 %, ordre de grandeur actuel en France."
      },
      {
       "q": "Quelles propositions sur le TEE et le TES sont exactes ? (deux réponses)",
       "options": [
        "Le TES raisonne par secteurs institutionnels",
        "Le TEE croise les opérations et les secteurs institutionnels",
        "Le TES décrit les échanges de consommations intermédiaires entre branches",
        "Le TEE ne contient aucune opération financière"
       ],
       "bonnes": [
        1,
        2
       ],
       "explication": "Le TEE croise opérations et secteurs, et comporte un compte financier. Le TES, issu des travaux de Leontief, raisonne par branches et décrit les échanges intermédiaires entre elles."
      },
      {
       "q": "Une catastrophe naturelle détruit des logements, que l'on reconstruit dans l'année. Quel est l'effet sur le PIB de l'année ?",
       "options": [
        "Les dépenses de reconstruction augmentent le PIB, bien que le bien-être ne soit pas supérieur à la situation initiale",
        "Le PIB baisse de la valeur des logements détruits",
        "Le PIB n'est pas affecté",
        "La destruction est enregistrée comme consommation intermédiaire"
       ],
       "bonnes": [
        0
       ],
       "explication": "Le PIB est un flux de production : la destruction d'un stock n'y est pas retranchée, et la reconstruction est comptée comme FBCF. C'est un exemple de dépense défensive."
      },
      {
       "q": "Quel est l'apport central du rapport Stiglitz-Sen-Fitoussi (2009) ?",
       "options": [
        "Remplacer le PIB par l'IDH",
        "Supprimer la comptabilité nationale",
        "Privilégier le revenu et la consommation des ménages, la répartition, la qualité de vie et suivre la soutenabilité par des indicateurs de stocks",
        "Mesurer le bonheur par un indicateur unique"
       ],
       "bonnes": [
        2
       ],
       "explication": "Le rapport ne propose pas d'indicateur unique : il recommande un tableau de bord centré sur les ménages, la répartition, la qualité de vie et la soutenabilité (capital économique, humain et naturel)."
      }
     ]
    },
    {
     "id": "mac1-prix-inflation-emploi",
     "titre": "Prix, inflation et emploi",
     "duree": 50,
     "niveau": "L1",
     "objectifs": [
      "Passer d'une grandeur nominale à une grandeur réelle et calculer un taux d'intérêt réel",
      "Calculer et comparer les indices de Laspeyres, Paasche et Fisher",
      "Distinguer IPC, IPCH et déflateur du PIB et connaître les biais de mesure de l'inflation",
      "Manier les taux de croissance et leurs approximations logarithmiques",
      "Définir le chômage au sens du BIT, le halo, les taux d'emploi et d'activité, et les calculer",
      "Écrire et utiliser la loi d'Okun",
      "Analyser les coûts de l'inflation, de la déflation et du chômage"
     ],
     "sections": [
      {
       "titre": "Grandeurs nominales et grandeurs réelles",
       "contenu": "<p>Une grandeur <strong>nominale</strong> (en valeur, à prix courants) est mesurée en unités monétaires de la période considérée. Une grandeur <strong>réelle</strong> (en volume, à prix constants) est corrigée de l'évolution des prix : elle mesure des quantités. Le PIB nominal peut augmenter parce que l'on produit davantage ou simplement parce que les prix augmentent ; seul le PIB réel mesure la croissance de la production.</p>\n<p>Pour passer de l'un à l'autre, on <strong>déflate</strong> la grandeur nominale par un indice de prix (base 100 ou 1 à l'année de référence) :</p>\n<p class=\"eq\"><em>grandeur réelle</em> = <em>grandeur nominale</em> / <em>indice de prix</em></p>\n<p>En taux de croissance : (1 + <em>g</em><sub>nominal</sub>) = (1 + <em>g</em><sub>réel</sub>)(1 + π), où π est la variation du prix. Pour des taux faibles, <em>g</em><sub>nominal</sub> ≈ <em>g</em><sub>réel</sub> + π. En 2025, le PIB français a augmenté d'environ 1,9 % en valeur et 0,8 % en volume, le prix du PIB ayant progressé d'environ 1,1 % (Insee).</p>\n<h4>Le taux d'intérêt réel</h4>\n<p>Un prêteur qui place 100 euros au taux nominal <em>i</em> reçoit 100(1 + <em>i</em>) euros dans un an ; si les prix augmentent de π, son pouvoir d'achat augmente de (1 + <em>i</em>) / (1 + π) − 1. On définit le <strong>taux d'intérêt réel</strong> <em>r</em> par la relation de Fisher (Irving Fisher, 1930) :</p>\n<p class=\"eq\">1 + <em>r</em> = (1 + <em>i</em>) / (1 + π<sup><em>e</em></sup>)   d'où   <em>r</em> ≈ <em>i</em> − π<sup><em>e</em></sup></p>\n<p>Le taux réel <em>ex ante</em> utilise l'inflation anticipée π<sup><em>e</em></sup>, qui guide les décisions d'investissement et d'épargne ; le taux réel <em>ex post</em> utilise l'inflation effectivement réalisée. En 2022, avec des taux nominaux encore proches de zéro et une inflation supérieure à 5 % en France, les taux réels étaient fortement négatifs : les débiteurs ont gagné, les épargnants ont perdu.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> une hausse du salaire nominal de 3 % avec une inflation de 4 % est une <em>baisse</em> du salaire réel d'environ 1 % (exactement 1,03 / 1,04 − 1 = −0,96 %). Ne jamais conclure à une hausse du pouvoir d'achat sans comparer à l'inflation.</div>"
      },
      {
       "titre": "Les indices de prix : Laspeyres, Paasche, Fisher",
       "contenu": "<p>Un <strong>indice de prix</strong> synthétise l'évolution des prix d'un ensemble de biens. Comme les biens n'évoluent pas tous de la même façon, il faut les pondérer, et le choix des pondérations définit l'indice. Notons <em>p</em><sub>0</sub>, <em>q</em><sub>0</sub> les prix et quantités de la période de base et <em>p</em><sub>1</sub>, <em>q</em><sub>1</sub> ceux de la période courante.</p>\n<ul>\n<li>L'<strong>indice de Laspeyres</strong> (1871) pondère par les quantités de la période de base : il mesure le coût, aux prix d'aujourd'hui, du panier d'hier.</li>\n</ul>\n<p class=\"eq\"><em>L</em> = Σ <em>p</em><sub>1</sub><em>q</em><sub>0</sub> / Σ <em>p</em><sub>0</sub><em>q</em><sub>0</sub></p>\n<ul>\n<li>L'<strong>indice de Paasche</strong> (1874) pondère par les quantités de la période courante.</li>\n</ul>\n<p class=\"eq\"><em>P</em> = Σ <em>p</em><sub>1</sub><em>q</em><sub>1</sub> / Σ <em>p</em><sub>0</sub><em>q</em><sub>1</sub></p>\n<ul>\n<li>L'<strong>indice de Fisher</strong> est la moyenne géométrique des deux : <em>F</em> = (<em>L</em> × <em>P</em>)<sup>1/2</sup>. Il possède de bonnes propriétés (Irving Fisher, 1922, le qualifiait d'« idéal ») ; le BEA l'utilise pour les comptes nationaux américains.</li>\n</ul>\n<p>Lorsque les consommateurs <strong>substituent</strong> les biens devenus relativement plus chers par des biens relativement moins chers, l'indice de Laspeyres surestime la hausse du coût de la vie (il ignore cette substitution) et l'indice de Paasche la sous-estime : en général <em>L</em> &gt; <em>F</em> &gt; <em>P</em>. On montre aussi que le produit d'un indice de prix de Laspeyres et d'un indice de volume de Paasche (ou l'inverse) redonne exactement l'indice de valeur Σ <em>p</em><sub>1</sub><em>q</em><sub>1</sub> / Σ <em>p</em><sub>0</sub><em>q</em><sub>0</sub>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer les trois indices.<br>\n<table>\n<thead><tr><th>Bien</th><th><em>p</em><sub>0</sub></th><th><em>q</em><sub>0</sub></th><th><em>p</em><sub>1</sub></th><th><em>q</em><sub>1</sub></th></tr></thead>\n<tbody>\n<tr><td>Pain</td><td>1</td><td>100</td><td>1,1</td><td>110</td></tr>\n<tr><td>Essence</td><td>2</td><td>50</td><td>3</td><td>40</td></tr>\n</tbody>\n</table>\nLaspeyres : Σ <em>p</em><sub>1</sub><em>q</em><sub>0</sub> = 1,1 × 100 + 3 × 50 = 260 ; Σ <em>p</em><sub>0</sub><em>q</em><sub>0</sub> = 100 + 100 = 200 ; <em>L</em> = 1,30 (hausse de 30 %).<br>\nPaasche : Σ <em>p</em><sub>1</sub><em>q</em><sub>1</sub> = 121 + 120 = 241 ; Σ <em>p</em><sub>0</sub><em>q</em><sub>1</sub> = 110 + 80 = 190 ; <em>P</em> = 241 / 190 ≈ 1,268 (hausse de 26,8 %).<br>\nFisher : <em>F</em> = (1,30 × 1,268)<sup>1/2</sup> ≈ 1,284.<br>\nInterprétation : le prix de l'essence a augmenté plus vite et les ménages en ont réduit leur consommation ; le Laspeyres, qui garde l'ancien panier riche en essence, donne la plus forte hausse.</div>\n<p>Pour limiter le vieillissement des pondérations, les instituts utilisent des <strong>indices chaînés</strong> : on calcule chaque année un indice entre l'année <em>t</em> − 1 et l'année <em>t</em> avec les pondérations de <em>t</em> − 1, puis on multiplie ces indices successifs. L'IPC français est un Laspeyres chaîné annuellement ; les volumes des comptes nationaux sont aux « prix de l'année précédente chaînés ».</p>"
      },
      {
       "titre": "IPC, IPCH, déflateur du PIB et biais de mesure",
       "contenu": "<h4>Les principaux indices</h4>\n<ul>\n<li>L'<strong>indice des prix à la consommation</strong> (IPC), publié chaque mois par l'Insee, mesure l'évolution moyenne des prix des biens et services consommés par les ménages, à qualité constante. Il sert à indexer le SMIC, les pensions, le livret A et de nombreux contrats.</li>\n<li>L'<strong>indice des prix à la consommation harmonisé</strong> (IPCH) est calculé selon une méthode commune aux pays de l'Union européenne pour permettre les comparaisons ; c'est l'indicateur de la cible d'inflation de la BCE (« inférieure à mais proche de 2 % » jusqu'en 2021, puis cible symétrique de 2 % à moyen terme). Ses pondérations diffèrent un peu de celles de l'IPC, notamment pour la santé (comptée nette des remboursements). En 2022-2023, l'IPCH français a dépassé l'IPC d'environ un point, l'énergie et l'alimentation y pesant davantage.</li>\n<li>Le <strong>déflateur du PIB</strong> est le rapport du PIB nominal au PIB réel : <em>P</em><sub>PIB</sub> = <em>PIB</em><sub>nominal</sub> / <em>PIB</em><sub>réel</sub> (× 100). Il couvre tous les biens et services produits sur le territoire (y compris l'investissement et les exportations) mais pas les importations ; il est implicitement un indice de type Paasche (pondérations courantes).</li>\n<li>L'<strong>inflation sous-jacente</strong> exclut les composantes les plus volatiles (énergie, alimentation, tarifs publics) pour isoler la tendance de fond.</li>\n</ul>\n<p>Ces indices peuvent diverger. Un renchérissement du pétrole importé augmente l'IPC mais pas directement le déflateur du PIB, puisque le pétrole n'est pas produit en France ; il réduit même la valeur ajoutée des branches qui l'utilisent. Le choc énergétique de 2022 a ainsi fait monter l'IPC bien plus que le déflateur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> la vague d'inflation de 2021-2023. En moyenne annuelle, l'IPC français a augmenté de 5,2 % en 2022 et 4,9 % en 2023, puis de 2,0 % en 2024 ; l'inflation est revenue vers 1 % en 2025 (0,8 % en glissement annuel en décembre 2025 selon l'Insee). Dans la zone euro, l'IPCH a culminé à 10,6 % en glissement annuel en octobre 2022 et aux États-Unis l'indice CPI à 9,1 % en juin 2022. La France a connu un pic plus bas que la moyenne de la zone, en partie grâce au « bouclier tarifaire » sur l'électricité et le gaz, qui a plafonné les prix réglementés et transféré une partie du coût sur le budget public.</div>\n<h4>Les biais de mesure</h4>\n<p>Le rapport de la commission <strong>Boskin</strong> (1996) estimait que l'IPC américain surestimait l'inflation d'environ 1,1 point par an, pour quatre raisons :</p>\n<ol>\n<li>le <strong>biais de substitution</strong> entre produits (un Laspeyres ignore la substitution) ;</li>\n<li>le biais de substitution entre <strong>points de vente</strong> (passage vers les enseignes à bas prix) ;</li>\n<li>le biais de <strong>qualité</strong> : une partie de la hausse de prix d'un ordinateur rémunère une meilleure qualité ; les instituts corrigent par des méthodes « hédoniques » ;</li>\n<li>le biais des <strong>nouveaux produits</strong>, introduits tardivement dans le panier alors que leur prix baisse vite au début.</li>\n</ol>\n<p>Les méthodes ont depuis été améliorées (chaînage, corrections de qualité, données de caisse). À l'inverse, l'inflation <strong>perçue</strong> par les ménages est souvent supérieure à l'inflation mesurée : les achats fréquents (alimentation, carburant) marquent davantage, chaque ménage a un panier propre, et l'IPC n'inclut pas l'achat de logement (traité comme investissement), seulement les loyers.</p>"
      },
      {
       "titre": "Taux de croissance et approximations logarithmiques",
       "contenu": "<p>Le <strong>taux de croissance</strong> d'une variable <em>X</em> entre <em>t</em> − 1 et <em>t</em> est <em>g</em> = (<em>X</em><sub><em>t</em></sub> − <em>X</em><sub><em>t</em>−1</sub>) / <em>X</em><sub><em>t</em>−1</sub>. Pour des taux faibles, il est très proche de la variation du logarithme, car ln(1 + <em>g</em>) ≈ <em>g</em> :</p>\n<p class=\"eq\"><em>g</em> ≈ ln <em>X</em><sub><em>t</em></sub> − ln <em>X</em><sub><em>t</em>−1</sub> = Δ ln <em>X</em></p>\n<p>D'où trois règles de calcul très utiles, qui découlent de ln(<em>XY</em>) = ln <em>X</em> + ln <em>Y</em>, ln(<em>X</em> / <em>Y</em>) = ln <em>X</em> − ln <em>Y</em> et ln(<em>X</em><sup>α</sup>) = α ln <em>X</em> :</p>\n<ul>\n<li>le taux de croissance d'un <strong>produit</strong> est approximativement la <strong>somme</strong> des taux : <em>g</em><sub><em>XY</em></sub> ≈ <em>g</em><sub><em>X</em></sub> + <em>g</em><sub><em>Y</em></sub> (valeur = prix × volume) ;</li>\n<li>le taux de croissance d'un <strong>rapport</strong> est approximativement la <strong>différence</strong> des taux : <em>g</em><sub><em>X</em>/<em>Y</em></sub> ≈ <em>g</em><sub><em>X</em></sub> − <em>g</em><sub><em>Y</em></sub> (PIB par habitant, salaire réel, productivité) ;</li>\n<li>le taux de croissance d'une <strong>puissance</strong> est multiplié par l'exposant : si <em>Y</em> = <em>K</em><sup>α</sup><em>L</em><sup>1−α</sup>, alors <em>g</em><sub><em>Y</em></sub> ≈ α<em>g</em><sub><em>K</em></sub> + (1 − α)<em>g</em><sub><em>L</em></sub>. C'est la base de la comptabilité de la croissance.</li>\n</ul>\n<p>Sur plusieurs années, le <strong>taux de croissance annuel moyen</strong> est une moyenne géométrique : (<em>X</em><sub><em>T</em></sub> / <em>X</em><sub>0</sub>)<sup>1/<em>T</em></sup> − 1, et non la moyenne arithmétique des taux annuels. Un taux constant <em>g</em> fait doubler une variable en ln 2 / ln(1 + <em>g</em>) ≈ 0,70 / <em>g</em> années : c'est la <strong>règle de 70</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exercices d'approximation.<br>1) Le PIB nominal augmente de 5 % et le déflateur de 2 %. Croissance réelle ≈ 5 − 2 = 3 % ; exactement 1,05 / 1,02 − 1 = 2,94 %.<br>2) Le PIB réel augmente de 1,5 % et la population de 0,4 %. PIB par habitant ≈ +1,1 %.<br>3) Avec <em>Y</em> = <em>A</em><em>K</em><sup>0,3</sup><em>L</em><sup>0,7</sup>, <em>g</em><sub><em>A</em></sub> = 1 %, <em>g</em><sub><em>K</em></sub> = 3 %, <em>g</em><sub><em>L</em></sub> = 0,5 % : <em>g</em><sub><em>Y</em></sub> ≈ 1 + 0,3 × 3 + 0,7 × 0,5 = 2,25 %.<br>4) À 2 % par an, le niveau de vie double en environ 70 / 2 = 35 ans ; à 1 %, en 70 ans.<br>5) Une hausse de 50 % suivie d'une baisse de 50 % ne ramène pas au point de départ : 1,5 × 0,5 = 0,75, soit −25 %. En log : ln 1,5 + ln 0,5 = 0,405 − 0,693 = −0,288.</div>"
      },
      {
       "titre": "Mesurer l'emploi et le chômage",
       "contenu": "<p>La population en âge de travailler (en France, on retient souvent les 15-64 ans) se répartit en trois groupes : les <strong>personnes en emploi</strong>, les <strong>chômeurs</strong> et les <strong>inactifs</strong>. La <strong>population active</strong> est la somme des actifs occupés et des chômeurs.</p>\n<h4>La définition du BIT</h4>\n<p>Est <strong>chômeur au sens du Bureau international du travail</strong> (BIT) une personne en âge de travailler qui remplit simultanément trois conditions :</p>\n<ul>\n<li>être <strong>sans emploi</strong> durant la semaine de référence (ne pas avoir travaillé, ne serait-ce qu'une heure) ;</li>\n<li>être <strong>disponible</strong> pour prendre un emploi dans les deux semaines ;</li>\n<li>avoir <strong>recherché activement</strong> un emploi au cours des quatre dernières semaines, ou en avoir trouvé un qui commence dans les trois mois.</li>\n</ul>\n<p>En France, le chômage BIT est mesuré par l'<strong>enquête Emploi</strong> de l'Insee, menée en continu auprès des ménages. Il ne faut pas le confondre avec le nombre de <strong>demandeurs d'emploi inscrits à France Travail</strong> (ex-Pôle emploi), donnée administrative répartie en catégories (A : sans aucune activité ; B et C : en activité réduite) : un inscrit peut ne pas être chômeur BIT (il a travaillé quelques heures) et inversement.</p>\n<h4>Les indicateurs</h4>\n<p class=\"eq\"><em>taux de chômage</em> = <em>chômeurs</em> / <em>population active</em></p>\n<p class=\"eq\"><em>taux d'activité</em> = <em>population active</em> / <em>population en âge de travailler</em></p>\n<p class=\"eq\"><em>taux d'emploi</em> = <em>personnes en emploi</em> / <em>population en âge de travailler</em></p>\n<p>Ces indicateurs sont liés : <em>taux d'emploi</em> = <em>taux d'activité</em> × (1 − <em>taux de chômage</em>). Le <strong>halo autour du chômage</strong> regroupe des inactifs proches du marché du travail : ils souhaitent travailler mais ne remplissent pas l'une des conditions (ils ne recherchent pas activement, découragés, ou ne sont pas disponibles rapidement). Le <strong>sous-emploi</strong> concerne des actifs occupés à temps partiel qui souhaitent travailler davantage. Le <strong>chômage de longue durée</strong> concerne les chômeurs depuis plus d'un an.</p>\n<p>Au deuxième trimestre 2026, selon l'Insee : taux de chômage BIT de 8,3 % (le plus haut niveau depuis plusieurs années), taux d'emploi des 15-64 ans de 69,0 %, taux d'activité de 75,4 %, et environ 1,9 million de personnes dans le halo. Pour comparaison, le taux de chômage de la zone euro était de l'ordre de 6,3 % en 2025 et celui des États-Unis de l'ordre de 4 à 4,5 %.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer les taux.<br>Population de 15-64 ans : 40 millions ; en emploi : 27,6 millions ; chômeurs : 2,4 millions.<br>Population active = 27,6 + 2,4 = 30 millions. Taux de chômage = 2,4 / 30 = 8 %. Taux d'activité = 30 / 40 = 75 %. Taux d'emploi = 27,6 / 40 = 69 %, et l'on vérifie 0,75 × (1 − 0,08) = 0,69.<br>Si 0,3 million de chômeurs découragés cessent de chercher, ils deviennent inactifs (halo) : chômage = 2,1 / 29,7 ≈ 7,1 %. Le taux de chômage baisse alors que l'emploi n'a pas augmenté : il faut toujours regarder aussi le taux d'emploi.</div>\n<h4>Une approche en flux</h4>\n<p>Le chômage est un stock alimenté par des flux. Si une fraction <em>s</em> des personnes en emploi perd son emploi chaque mois et une fraction <em>f</em> des chômeurs en retrouve un, le chômage est stable lorsque les entrées égalent les sorties, <em>s</em>(<em>L</em> − <em>U</em>) = <em>f</em><em>U</em>, soit <em>u</em> = <em>s</em> / (<em>s</em> + <em>f</em>). Avec <em>s</em> = 1 % et <em>f</em> = 11 %, <em>u</em> = 1 / 12 ≈ 8,3 %. Le chômage européen se caractérise par des taux de sortie plus faibles qu'aux États-Unis (marché moins fluide) et donc par une durée plus longue.</p>"
      },
      {
       "titre": "La loi d'Okun",
       "contenu": "<p>Arthur Okun (1962) a mis en évidence une relation empirique entre la croissance de la production et la variation du chômage. Dans la formulation de Blanchard :</p>\n<p class=\"eq\"><em>u</em><sub><em>t</em></sub> − <em>u</em><sub><em>t</em>−1</sub> = −β (<em>g</em><sub><em>t</em></sub> − <em>ḡ</em>)</p>\n<p>où <em>ḡ</em> est le taux de croissance « normal » (proche de la croissance potentielle) nécessaire pour maintenir le chômage constant, et β le coefficient d'Okun. Pour les États-Unis, Blanchard estime <em>ḡ</em> ≈ 3 % et β ≈ 0,4 sur longue période : une croissance supérieure d'un point à la normale réduit le chômage de 0,4 point. Okun lui-même formulait la relation en niveaux : chaque point de chômage au-dessus de son niveau de plein emploi correspondait à environ 3 % de production en moins par rapport au potentiel.</p>\n<h4>Pourquoi β est-il inférieur à 1 ?</h4>\n<p>Une hausse de 1 % de la production n'entraîne pas une hausse de 1 % de l'emploi et encore moins une baisse d'un point du chômage, pour trois raisons : les entreprises ajustent d'abord la durée du travail et l'intensité de l'effort (<strong>rétention de main-d'œuvre</strong>), d'où une productivité procyclique ; les nouveaux emplois sont en partie pourvus par des inactifs qui entrent dans la population active (le taux d'activité est procyclique) ; enfin, la croissance normale inclut celle de la productivité et de la population active. Le coefficient β varie selon les institutions : il est plus faible là où la protection de l'emploi est forte ou le chômage partiel développé, ce qui fut spectaculaire en 2020.</p>\n<p>Pour la France, les estimations donnent généralement une croissance « seuil » de l'ordre de 1 à 1,5 % par an au cours des dernières décennies et un coefficient inférieur à celui des États-Unis : le chômage français réagit plus lentement à la conjoncture.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> utiliser la loi d'Okun.<br>Données : <em>u</em><sub><em>t</em>−1</sub> = 7,5 %, β = 0,5, <em>ḡ</em> = 1,2 %. Si la croissance est de 0,4 % : Δ<em>u</em> = −0,5 × (0,4 − 1,2) = +0,4 point, d'où <em>u</em><sub><em>t</em></sub> = 7,9 %.<br>Quelle croissance faut-il pour ramener le chômage à 7 % en un an ? Δ<em>u</em> = −0,5 = −0,5 (<em>g</em> − 1,2), d'où <em>g</em> = 2,2 %.</div>"
      },
      {
       "titre": "Les coûts de l'inflation et du chômage",
       "contenu": "<h4>Les coûts de l'inflation</h4>\n<p>Il faut distinguer l'inflation <strong>anticipée</strong> (prévue, intégrée dans les contrats) et l'inflation <strong>non anticipée</strong>.</p>\n<ul>\n<li>Coûts d'<strong>usure des chaussures</strong> (shoe-leather costs) : l'inflation est une taxe sur la détention de monnaie, les agents réduisent leurs encaisses et multiplient les transactions financières.</li>\n<li>Coûts de <strong>menu</strong> : changer les prix affichés est coûteux ; les entreprises ne le font pas en continu, ce qui fausse les <strong>prix relatifs</strong> et brouille le signal-prix.</li>\n<li><strong>Distorsions fiscales</strong> : un impôt assis sur des grandeurs nominales (plus-values, intérêts) taxe des gains purement inflationnistes ; des barèmes non indexés alourdissent l'impôt réel.</li>\n<li><strong>Illusion monétaire</strong> : les agents confondent variations nominales et réelles.</li>\n<li><strong>Redistribution arbitraire</strong> lorsque l'inflation n'est pas anticipée : elle transfère du pouvoir d'achat des créanciers vers les débiteurs (dont l'État) et pénalise les revenus non indexés.</li>\n<li><strong>Incertitude</strong> : une inflation élevée est aussi plus variable, ce qui décourage les contrats de long terme et l'investissement.</li>\n</ul>\n<p>À l'extrême, l'<strong>hyperinflation</strong> (définie par Phillip Cagan, 1956, comme une inflation supérieure à 50 % par mois) détruit la fonction monétaire : Allemagne 1923, Hongrie 1946, Zimbabwe 2008, Venezuela à la fin des années 2010.</p>\n<p>Une inflation faible mais positive présente toutefois des avantages : elle « graisse les rouages » du marché du travail en permettant des baisses de salaires réels sans baisse des salaires nominaux, auxquelles les salariés résistent (Akerlof, Dickens et Perry, 1996) ; elle maintient les taux nominaux au-dessus de zéro et laisse une marge à la politique monétaire. La <strong>déflation</strong> (baisse durable du niveau des prix) est dangereuse : elle accroît le poids réel des dettes (déflation par la dette, Irving Fisher, 1933), incite à reporter les achats et rend la contrainte du taux plancher plus sévère. D'où le choix d'une cible de 2 % plutôt que 0 %.</p>\n<h4>Les coûts du chômage</h4>\n<ul>\n<li>La <strong>production perdue</strong>, mesurée par l'écart de production (loi d'Okun), qui ne sera jamais récupérée.</li>\n<li>Des coûts pour les finances publiques : indemnisation, moindres recettes fiscales et sociales.</li>\n<li>Des coûts individuels et sociaux : perte de revenu, dégradation de la santé, perte de capital humain, exclusion, inégalités.</li>\n<li>L'<strong>hystérésis</strong> (Blanchard et Summers, 1986) : un chômage conjoncturel prolongé peut devenir structurel, les chômeurs de longue durée perdant compétences et employabilité.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> Okun a proposé un « indice de misère » égal à la somme du taux d'inflation et du taux de chômage. Il est rudimentaire, mais rappelle que les deux maux sont liés par la courbe de Phillips et que la politique économique arbitre entre eux, au moins à court terme.</div>"
      }
     ],
     "points_cles": [
      "Grandeur réelle = grandeur nominale / indice de prix ; g nominal ≈ g réel + inflation.",
      "Relation de Fisher : 1 + r = (1 + i) / (1 + πe), soit r ≈ i − πe ; le taux réel ex ante utilise l'inflation anticipée.",
      "Laspeyres : Σ p1q0 / Σ p0q0 (panier de base) ; Paasche : Σ p1q1 / Σ p0q1 (panier courant) ; Fisher : moyenne géométrique des deux.",
      "Avec substitution vers les biens relativement moins chers, Laspeyres > Fisher > Paasche : le Laspeyres surestime la hausse du coût de la vie.",
      "Le déflateur du PIB (PIB nominal / PIB réel) couvre la production intérieure et exclut les importations ; l'IPC inclut les biens importés consommés.",
      "L'IPCH est l'indice harmonisé européen, cible de la BCE (2 % à moyen terme) ; biais de mesure (Boskin, 1996) : substitution, points de vente, qualité, nouveaux produits.",
      "Approximations : taux d'un produit ≈ somme des taux ; d'un rapport ≈ différence ; d'une puissance ≈ exposant × taux ; doublement en 70 / g années.",
      "Chômeur BIT : sans emploi, disponible sous deux semaines, recherche active dans les quatre dernières semaines ; mesuré par l'enquête Emploi de l'Insee.",
      "Taux d'emploi = taux d'activité × (1 − taux de chômage) ; le halo regroupe des inactifs souhaitant travailler.",
      "France, deuxième trimestre 2026 : chômage BIT 8,3 %, taux d'emploi des 15-64 ans 69,0 %, taux d'activité 75,4 % (Insee).",
      "Loi d'Okun : u(t) − u(t−1) = −β (g − ḡ) ; β < 1 à cause de la rétention de main-d'œuvre et des variations du taux d'activité.",
      "Coûts de l'inflation : usure des chaussures, coûts de menu, distorsions fiscales, redistribution, incertitude ; déflation dangereuse (Fisher, 1933) ; coûts du chômage : production perdue, coûts humains, hystérésis."
     ],
     "lexique": [
      {
       "terme": "Déflateur du PIB",
       "def": "Rapport du PIB nominal au PIB réel ; indice implicite des prix de la production intérieure."
      },
      {
       "terme": "Indice de Laspeyres",
       "def": "Indice pondéré par les quantités (ou parts) de la période de base."
      },
      {
       "terme": "Indice de Paasche",
       "def": "Indice pondéré par les quantités de la période courante."
      },
      {
       "terme": "Indice de Fisher",
       "def": "Moyenne géométrique des indices de Laspeyres et de Paasche."
      },
      {
       "terme": "IPCH",
       "def": "Indice des prix à la consommation harmonisé, calculé selon une méthode commune à l'Union européenne."
      },
      {
       "terme": "Inflation sous-jacente",
       "def": "Inflation hors composantes volatiles (énergie, alimentation, tarifs publics), mesurant la tendance de fond."
      },
      {
       "terme": "Taux d'intérêt réel",
       "def": "Taux nominal corrigé de l'inflation : r ≈ i − π."
      },
      {
       "terme": "Chômeur au sens du BIT",
       "def": "Personne sans emploi, disponible sous deux semaines et ayant recherché activement un emploi dans les quatre dernières semaines."
      },
      {
       "terme": "Halo autour du chômage",
       "def": "Inactifs qui souhaitent travailler mais ne remplissent pas tous les critères du chômage BIT."
      },
      {
       "terme": "Taux d'emploi",
       "def": "Part des personnes en emploi dans la population en âge de travailler."
      },
      {
       "terme": "Taux d'activité",
       "def": "Part des actifs (en emploi ou au chômage) dans la population en âge de travailler."
      },
      {
       "terme": "Loi d'Okun",
       "def": "Relation empirique entre l'écart de la croissance à sa valeur normale et la variation du taux de chômage."
      },
      {
       "terme": "Hystérésis",
       "def": "Persistance des effets d'un choc temporaire : un chômage conjoncturel prolongé devient structurel."
      },
      {
       "terme": "Hyperinflation",
       "def": "Inflation extrême, supérieure à 50 % par mois selon la définition de Cagan (1956)."
      }
     ],
     "qcm": [
      {
       "q": "Le taux d'intérêt nominal est de 4 % et l'inflation anticipée de 6 %. Quel est approximativement le taux d'intérêt réel ex ante ?",
       "options": [
        "10 %",
        "−2 %",
        "2 %",
        "0,67 %"
       ],
       "bonnes": [
        1
       ],
       "explication": "r ≈ i − πe = 4 − 6 = −2 %. Exactement : 1,04 / 1,06 − 1 ≈ −1,9 %."
      },
      {
       "q": "Avec p0 = (2 ; 4), q0 = (10 ; 5), p1 = (3 ; 4), que vaut l'indice de prix de Laspeyres ?",
       "options": [
        "1,50",
        "1,20",
        "1,00",
        "1,25"
       ],
       "bonnes": [
        3
       ],
       "explication": "Σ p1q0 = 3 × 10 + 4 × 5 = 50 ; Σ p0q0 = 2 × 10 + 4 × 5 = 40 ; L = 50 / 40 = 1,25."
      },
      {
       "q": "Quelles propositions sur les indices de prix sont exactes ? (deux réponses)",
       "options": [
        "Le déflateur du PIB inclut le prix des biens importés",
        "En présence de substitution, l'indice de Laspeyres tend à surestimer la hausse du coût de la vie",
        "L'indice de Fisher est la moyenne arithmétique des indices de Laspeyres et de Paasche",
        "Une hausse du prix du pétrole importé augmente davantage l'IPC que le déflateur du PIB"
       ],
       "bonnes": [
        1,
        3
       ],
       "explication": "Le Laspeyres garde l'ancien panier et ignore la substitution. Le déflateur porte sur la production intérieure et exclut les importations, si bien que le pétrole importé pèse sur l'IPC et non directement sur le déflateur. Le Fisher est une moyenne géométrique."
      },
      {
       "q": "Le PIB réel croît de 2 % et la population de 0,5 %. Quelle est approximativement la croissance du PIB par habitant ?",
       "options": [
        "1,5 %",
        "2,5 %",
        "4 %",
        "1 %"
       ],
       "bonnes": [
        0
       ],
       "explication": "Taux de croissance d'un rapport ≈ différence des taux : 2 − 0,5 = 1,5 %."
      },
      {
       "q": "À un taux de croissance annuel constant de 3,5 %, en combien de temps environ une variable double-t-elle ?",
       "options": [
        "35 ans",
        "20 ans",
        "10 ans",
        "28 ans"
       ],
       "bonnes": [
        1
       ],
       "explication": "Règle de 70 : 70 / 3,5 = 20 ans. Exactement ln 2 / ln 1,035 ≈ 20,1 ans."
      },
      {
       "q": "Quelles personnes sont comptées comme chômeurs au sens du BIT ? (deux réponses)",
       "options": [
        "Une personne sans emploi, disponible, qui a envoyé des candidatures la semaine dernière",
        "Une personne ayant travaillé 3 heures la semaine de référence et cherchant un temps plein",
        "Une personne sans emploi qui a trouvé un poste commençant dans deux mois, disponible",
        "Une personne sans emploi qui souhaite travailler mais a cessé de chercher, découragée"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "La première remplit les trois critères ; la troisième est comptée car elle a trouvé un emploi commençant dans les trois mois. Avoir travaillé une heure suffit à être en emploi (sous-emploi), et le découragé est inactif, dans le halo."
      },
      {
       "q": "Population de 15-64 ans : 50 millions ; actifs occupés : 34 millions ; chômeurs : 3 millions. Que vaut le taux de chômage ?",
       "options": [
        "6,0 %",
        "8,8 %",
        "8,1 %",
        "74 %"
       ],
       "bonnes": [
        2
       ],
       "explication": "Population active = 34 + 3 = 37 millions ; taux de chômage = 3 / 37 ≈ 8,1 %. Diviser par la population totale (6 %) ou par l'emploi (8,8 %) sont des erreurs classiques ; 74 % est le taux d'activité."
      },
      {
       "q": "Selon la loi d'Okun avec β = 0,4 et une croissance normale de 3 %, que devient le chômage si la croissance est de 1 % ?",
       "options": [
        "Il baisse de 0,8 point",
        "Il augmente de 2 points",
        "Il augmente de 0,4 point",
        "Il augmente de 0,8 point"
       ],
       "bonnes": [
        3
       ],
       "explication": "Δu = −0,4 × (1 − 3) = +0,8 point : une croissance inférieure à la normale fait monter le chômage."
      },
      {
       "q": "Pourquoi le coefficient d'Okun est-il inférieur à 1 ? (deux réponses)",
       "options": [
        "Les entreprises retiennent la main-d'œuvre et ajustent d'abord la durée et l'intensité du travail",
        "Les salaires nominaux sont parfaitement flexibles",
        "Une partie des emplois créés est occupée par des personnes auparavant inactives",
        "Le chômage est mesuré par les inscriptions à France Travail"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "La rétention de main-d'œuvre rend la productivité procyclique, et le taux d'activité augmente en reprise : l'emploi et surtout le chômage réagissent moins que proportionnellement à la production."
      },
      {
       "q": "Quel effet a une inflation plus forte que prévu ?",
       "options": [
        "Elle transfère du pouvoir d'achat des créanciers vers les débiteurs",
        "Elle avantage les créanciers à taux fixe",
        "Elle n'a aucun effet redistributif",
        "Elle réduit le poids réel des créances des prêteurs à taux variable seulement"
       ],
       "bonnes": [
        0
       ],
       "explication": "Une inflation non anticipée réduit le taux réel ex post et la valeur réelle des dettes à taux fixe : les débiteurs gagnent, les créanciers perdent."
      },
      {
       "q": "Quel est le principal argument en faveur d'une cible d'inflation de 2 % plutôt que 0 % ?",
       "options": [
        "L'inflation stimule durablement la croissance potentielle",
        "Elle réduit les coûts de menu",
        "Elle supprime les biais de mesure de l'IPC",
        "Elle permet des baisses de salaires réels sans baisse des salaires nominaux et éloigne les taux nominaux de la borne zéro"
       ],
       "bonnes": [
        3
       ],
       "explication": "Une inflation faible mais positive « graisse les rouages » du marché du travail (rigidité nominale à la baisse) et laisse une marge de baisse des taux nominaux ; elle couvre aussi les biais de mesure, sans les supprimer."
      }
     ]
    },
    {
     "id": "mac1-classiques-keynes",
     "titre": "Les grands courants : des classiques à la synthèse néoclassique",
     "duree": 50,
     "niveau": "L1",
     "objectifs": [
      "Exposer la loi de Say et le modèle classique d'équilibre général de plein emploi",
      "Définir la dichotomie classique et la neutralité de la monnaie",
      "Écrire la théorie quantitative de la monnaie et en déduire l'inflation en taux de croissance",
      "Expliquer la révolution keynésienne : demande effective, équilibre de sous-emploi, préférence pour la liquidité",
      "Dériver le multiplicateur keynésien (dépenses, impôts, budget équilibré)",
      "Présenter la synthèse néoclassique (Hicks, Modigliani, Samuelson) et la courbe de Phillips des années 1960"
     ],
     "sections": [
      {
       "titre": "L'économie classique et la loi de Say",
       "contenu": "<p>On appelle <strong>classiques</strong> les économistes de la fin du XVIII<sup>e</sup> et du XIX<sup>e</sup> siècle (Adam Smith, 1776 ; Jean-Baptiste Say, 1803 ; David Ricardo, 1817 ; John Stuart Mill, 1848). Keynes a élargi l'étiquette à leurs successeurs néoclassiques (Marshall, Pigou), qui partageaient selon lui la même vision macroéconomique : une économie de marché tend spontanément vers le plein emploi des ressources.</p>\n<h4>La loi des débouchés</h4>\n<p>Dans son <em>Traité d'économie politique</em> (1803), Say énonce que « les produits s'échangent contre des produits » : la monnaie n'est qu'un intermédiaire des échanges. Produire, c'est distribuer des revenus d'un montant égal à la valeur produite ; ces revenus sont dépensés, soit en consommation, soit en épargne qui finance l'investissement. Il ne peut donc pas y avoir de <strong>surproduction générale</strong> durable : l'offre crée sa propre demande (formule que l'on doit en fait à Keynes, qui la résumait ainsi pour la critiquer). Des déséquilibres sectoriels sont possibles (trop de drap, pas assez de blé) mais ils se corrigent par les prix relatifs.</p>\n<h4>Le modèle classique formalisé</h4>\n<p>La version néoclassique enseignée en licence comporte trois marchés.</p>\n<ul>\n<li><strong>Marché du travail</strong> : les entreprises embauchent jusqu'à ce que la productivité marginale du travail égale le salaire réel, <em>F</em><sub><em>N</em></sub>(<em>K</em>, <em>N</em>) = <em>W</em> / <em>P</em> (demande de travail décroissante) ; les ménages offrent du travail en arbitrant entre loisir et consommation, <em>N</em><sup><em>s</em></sup>(<em>W</em> / <em>P</em>) croissante. Le salaire réel flexible égalise offre et demande et détermine l'emploi d'équilibre <em>N</em><sup>*</sup>. Le chômage ne peut être que <strong>volontaire</strong> (ou frictionnel).</li>\n<li><strong>Production</strong> : <em>Y</em><sup>*</sup> = <em>F</em>(<em>K</em>, <em>N</em><sup>*</sup>). La production dépend uniquement de l'offre : capital, technologie et préférences.</li>\n<li><strong>Marché des fonds prêtables</strong> : l'épargne <em>S</em>(<em>r</em>), croissante du taux d'intérêt réel (rémunération de l'abstinence), finance l'investissement <em>I</em>(<em>r</em>), décroissant. Le taux d'intérêt s'ajuste pour que <em>S</em>(<em>r</em>) = <em>I</em>(<em>r</em>). Une hausse de l'épargne fait baisser <em>r</em> et augmente l'investissement : la demande globale ne fait pas défaut.</li>\n</ul>\n<p>Dans ce cadre, une hausse des dépenses publiques financée par emprunt fait monter le taux d'intérêt et réduit l'investissement privé d'un montant exactement égal : c'est l'<strong>effet d'éviction</strong> total. La politique budgétaire modifie la composition de la production, pas son niveau.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chez les classiques, l'offre détermine la production (loi de Say), le salaire réel flexible assure le plein emploi, le taux d'intérêt réel égalise épargne et investissement. La politique de demande est inutile.</div>"
      },
      {
       "titre": "Dichotomie classique et neutralité de la monnaie",
       "contenu": "<p>La <strong>dichotomie classique</strong> est la séparation de l'économie en deux sphères : la sphère <strong>réelle</strong>, où se déterminent les quantités et les prix relatifs (production, emploi, salaire réel, taux d'intérêt réel), et la sphère <strong>monétaire</strong>, où se détermine le niveau général des prix. Les variables réelles sont déterminées sans référence à la monnaie ; la monnaie est un « voile » posé sur les échanges réels.</p>\n<p>Il en découle la <strong>neutralité de la monnaie</strong> : une variation de la quantité de monnaie modifie les grandeurs nominales (prix, salaires nominaux, PIB nominal) dans la même proportion, sans effet sur les grandeurs réelles. Si la quantité de monnaie double, tous les prix doublent, le salaire réel et la production sont inchangés. On parle de <strong>superneutralité</strong> lorsque même le taux de croissance de la monnaie est sans effet réel.</p>\n<p>La neutralité est une propriété de <strong>long terme</strong> que la plupart des économistes acceptent aujourd'hui. David Hume (1752) l'admettait déjà, tout en remarquant qu'à court terme un afflux de monnaie stimule l'activité avant que les prix ne s'ajustent. Le débat porte donc sur le court terme : les rigidités nominales font-elles que la monnaie a des effets réels transitoires ? C'est toute la question qui sépare les écoles depuis Keynes.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> la dichotomie ne dit pas que « la monnaie ne sert à rien » : elle dit que la quantité de monnaie ne détermine que le niveau des prix. Par ailleurs, neutralité ne signifie pas absence d'effet : l'inflation qui résulte d'une croissance monétaire excessive a des coûts réels (usure des chaussures, distorsions fiscales).</div>"
      },
      {
       "titre": "La théorie quantitative de la monnaie",
       "contenu": "<p>La <strong>théorie quantitative de la monnaie</strong> (TQM) est la théorie classique du niveau des prix. Formulée dès Jean Bodin (1568) à propos de l'afflux d'or d'Amérique, elle a reçu sa forme moderne d'Irving Fisher (1911) avec l'<strong>équation des échanges</strong> :</p>\n<p class=\"eq\"><em>M</em> <em>V</em> = <em>P</em> <em>T</em>   ou, en termes de production,   <em>M</em> <em>V</em> = <em>P</em> <em>Y</em></p>\n<p>où <em>M</em> est la masse monétaire, <em>V</em> la <strong>vitesse de circulation</strong> de la monnaie (nombre de fois qu'une unité monétaire est utilisée dans l'année), <em>P</em> le niveau des prix et <em>Y</em> la production réelle. Telle quelle, l'équation est une <strong>identité</strong> (elle définit <em>V</em> = <em>PY</em> / <em>M</em>). Elle devient une <strong>théorie</strong> sous trois hypothèses : <em>V</em> est stable (déterminée par les habitudes de paiement), <em>Y</em> est déterminé par l'offre au plein emploi (loi de Say), et la causalité va de <em>M</em> vers <em>P</em> (la monnaie est exogène).</p>\n<p>L'approche de <strong>Cambridge</strong> (Marshall, Pigou) écrit la demande de monnaie comme une fraction <em>k</em> du revenu nominal que les agents souhaitent détenir sous forme d'encaisses : <em>M</em><sup><em>d</em></sup> = <em>k</em> <em>P</em> <em>Y</em>, avec <em>k</em> = 1 / <em>V</em>. L'équilibre du marché monétaire donne <em>P</em> = <em>M</em> / (<em>k</em><em>Y</em>). C'est le germe d'une théorie de la demande de monnaie.</p>\n<h4>En taux de croissance</h4>\n<p>En passant aux logarithmes et en différenciant (taux d'un produit ≈ somme des taux) :</p>\n<p class=\"eq\"><em>g</em><sub><em>M</em></sub> + <em>g</em><sub><em>V</em></sub> = π + <em>g</em><sub><em>Y</em></sub>   d'où   π = <em>g</em><sub><em>M</em></sub> + <em>g</em><sub><em>V</em></sub> − <em>g</em><sub><em>Y</em></sub></p>\n<p>Si la vitesse est stable (<em>g</em><sub><em>V</em></sub> = 0), l'inflation est égale à l'excès de la croissance monétaire sur la croissance réelle. C'est le fondement de la formule de Friedman : « l'inflation est toujours et partout un phénomène monétaire », et de l'ancien « pilier monétaire » de la BCE, qui retenait une valeur de référence de 4,5 % pour la croissance de M3 (2 % d'inflation, 2 à 2,5 % de croissance potentielle, une baisse tendancielle de la vitesse de 0,5 à 1 % par an).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> utiliser la TQM.<br>1) <em>M</em> = 500, <em>V</em> = 4, <em>Y</em> = 1 000. Niveau des prix : <em>P</em> = <em>MV</em> / <em>Y</em> = 2 000 / 1 000 = 2.<br>2) La masse monétaire croît de 7 % par an, la production réelle de 2 %, la vitesse est stable : π ≈ 7 − 2 = 5 %.<br>3) Même données, mais la vitesse baisse de 1 % par an (les agents détiennent davantage d'encaisses) : π ≈ 7 − 1 − 2 = 4 %.<br>4) Quelle croissance monétaire est compatible avec une inflation de 2 %, une croissance de 1,5 % et une vitesse stable ? <em>g</em><sub><em>M</em></sub> = 2 + 1,5 = 3,5 %.</div>\n<p>Empiriquement, la relation entre croissance monétaire et inflation est très forte <strong>sur longue période et entre pays</strong> (les pays à forte création monétaire ont une forte inflation, de façon spectaculaire en hyperinflation). Elle est beaucoup plus lâche à court terme et à faible inflation, car la vitesse de circulation est instable : après 2008, la masse monétaire a fortement augmenté sans inflation, parce que la demande de monnaie a explosé (vitesse en chute) dans un contexte de taux nuls.</p>"
      },
      {
       "titre": "Keynes et la révolution keynésienne",
       "contenu": "<p>La <strong>Grande Dépression</strong> des années 1930 a mis la théorie classique en échec : aux États-Unis, entre 1929 et 1933, la production réelle a chuté d'environ un quart, les prix d'environ un quart, et le taux de chômage a atteint environ 25 %. Un chômage de masse aussi durable pouvait difficilement être qualifié de volontaire. John Maynard Keynes publie en 1936 la <em>Théorie générale de l'emploi, de l'intérêt et de la monnaie</em>, qui fonde la macroéconomie moderne.</p>\n<h4>Les idées centrales</h4>\n<ul>\n<li><strong>Le principe de la demande effective</strong> : les entreprises produisent et embauchent en fonction de la demande qu'elles anticipent. Le niveau de production et d'emploi est déterminé par la demande globale (consommation et investissement), et non par l'offre. La loi de Say est rejetée : une partie du revenu épargné peut ne pas être dépensée.</li>\n<li><strong>La fonction de consommation</strong> : la consommation dépend principalement du revenu courant, selon une « loi psychologique fondamentale » : quand le revenu augmente, la consommation augmente, mais moins que le revenu. La propension marginale à consommer <em>c</em><sub>1</sub> est comprise entre 0 et 1. L'épargne dépend du revenu, pas du taux d'intérêt.</li>\n<li><strong>L'investissement</strong> dépend de l'<strong>efficacité marginale du capital</strong> (rendement anticipé) comparée au taux d'intérêt ; il est instable car soumis à l'incertitude radicale et aux « esprits animaux » des entrepreneurs.</li>\n<li><strong>La préférence pour la liquidité</strong> : le taux d'intérêt n'est pas le prix de l'épargne mais le prix de la renonciation à la liquidité. Il se détermine sur le marché de la monnaie. La demande de monnaie a trois motifs : transaction, précaution et <strong>spéculation</strong> (détenir de la monnaie quand on anticipe une hausse des taux, donc une baisse du prix des obligations). À taux très bas, la demande de monnaie peut devenir infinie : la <strong>trappe à liquidité</strong>.</li>\n<li><strong>L'équilibre de sous-emploi</strong> : l'économie peut se fixer durablement à un niveau de production inférieur au plein emploi, avec un chômage <strong>involontaire</strong>. La baisse des salaires nominaux n'est pas un remède : elle réduit le revenu et la demande des salariés, et une déflation générale accroît le poids réel des dettes.</li>\n</ul>\n<h4>Le multiplicateur</h4>\n<p>Le concept, introduit par Richard Kahn (1931) pour l'emploi, devient chez Keynes l'instrument central. Soit une économie fermée avec État : <em>Y</em> = <em>C</em> + <em>I</em> + <em>G</em>, <em>C</em> = <em>c</em><sub>0</sub> + <em>c</em><sub>1</sub>(<em>Y</em> − <em>T</em>), <em>I</em> et <em>G</em> exogènes, impôts forfaitaires <em>T</em>. En remplaçant :</p>\n<p class=\"eq\"><em>Y</em> = <em>c</em><sub>0</sub> + <em>c</em><sub>1</sub><em>Y</em> − <em>c</em><sub>1</sub><em>T</em> + <em>I</em> + <em>G</em></p>\n<p class=\"eq\"><em>Y</em> = [1 / (1 − <em>c</em><sub>1</sub>)] × (<em>c</em><sub>0</sub> − <em>c</em><sub>1</sub><em>T</em> + <em>I</em> + <em>G</em>)</p>\n<p>Le <strong>multiplicateur des dépenses</strong> est Δ<em>Y</em> / Δ<em>G</em> = 1 / (1 − <em>c</em><sub>1</sub>) &gt; 1. Le mécanisme : 1 euro de dépense publique est un revenu pour quelqu'un, qui en dépense <em>c</em><sub>1</sub>, ce qui crée un nouveau revenu, dont <em>c</em><sub>1</sub><sup>2</sup> est dépensé, etc. La somme 1 + <em>c</em><sub>1</sub> + <em>c</em><sub>1</sub><sup>2</sup> + … est une série géométrique de raison <em>c</em><sub>1</sub> &lt; 1, égale à 1 / (1 − <em>c</em><sub>1</sub>). Le <strong>multiplicateur fiscal</strong> est Δ<em>Y</em> / Δ<em>T</em> = −<em>c</em><sub>1</sub> / (1 − <em>c</em><sub>1</sub>), plus faible en valeur absolue car une baisse d'impôt est en partie épargnée dès le premier tour. Une hausse de <em>G</em> financée par une hausse égale de <em>T</em> a donc un effet net : 1 / (1 − <em>c</em><sub>1</sub>) − <em>c</em><sub>1</sub> / (1 − <em>c</em><sub>1</sub>) = 1. C'est le <strong>théorème de Haavelmo</strong> (1945) : le multiplicateur d'un budget équilibré vaut 1.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> multiplicateurs keynésiens.<br>Données : <em>c</em><sub>0</sub> = 200, <em>c</em><sub>1</sub> = 0,75, <em>I</em> = 300, <em>G</em> = 400, <em>T</em> = 400.<br>1) Équilibre : <em>Y</em> = 4 × (200 − 0,75 × 400 + 300 + 400) = 4 × 600 = 2 400. Solde budgétaire : <em>T</em> − <em>G</em> = 0.<br>2) Le plein emploi correspond à <em>Y</em><sub>pe</sub> = 2 600. Hausse de <em>G</em> nécessaire : Δ<em>G</em> = 200 / 4 = 50 (déficit de 50).<br>3) Baisse d'impôt nécessaire : Δ<em>T</em> = 200 / (−3) ≈ −66,7, plus coûteuse pour le budget.<br>4) Avec un budget équilibré : Δ<em>G</em> = Δ<em>T</em> = 200, puisque le multiplicateur vaut 1.</div>\n<p>Le multiplicateur simple surestime l'effet réel : il ignore les impôts proportionnels au revenu (multiplicateur 1 / [1 − <em>c</em><sub>1</sub>(1 − <em>t</em>)]), les importations (1 / [1 − <em>c</em><sub>1</sub> + <em>m</em>]), la hausse du taux d'intérêt (effet d'éviction, intégré par IS-LM) et la réaction des prix. Les estimations empiriques des multiplicateurs budgétaires se situent le plus souvent entre 0,5 et 1,5, plus élevées en récession et lorsque les taux sont bloqués à zéro.</p>"
      },
      {
       "titre": "La synthèse néoclassique",
       "contenu": "<p>Dès 1937, John Hicks propose dans « Mr. Keynes and the Classics » une formalisation qui deviendra le modèle <strong>IS-LM</strong> (complété par Alvin Hansen, d'où le nom de modèle de Hicks-Hansen). Il réduit la <em>Théorie générale</em> à deux relations entre production <em>Y</em> et taux d'intérêt <em>i</em> :</p>\n<p class=\"eq\">IS : <em>Y</em> = <em>C</em>(<em>Y</em> − <em>T</em>) + <em>I</em>(<em>i</em>) + <em>G</em></p>\n<p class=\"eq\">LM : <em>M</em> / <em>P</em> = <em>L</em>(<em>Y</em>, <em>i</em>)</p>\n<p>La courbe <strong>IS</strong> (équilibre du marché des biens) est décroissante dans le plan (<em>Y</em>, <em>i</em>) : une baisse du taux d'intérêt stimule l'investissement, donc la production via le multiplicateur. La courbe <strong>LM</strong> (équilibre du marché de la monnaie) est croissante : une hausse de la production accroît la demande de monnaie de transaction, ce qui, à offre de monnaie donnée, exige une hausse du taux d'intérêt. Une politique budgétaire expansionniste déplace IS vers la droite (hausse de <em>Y</em> et de <em>i</em>, éviction partielle de l'investissement) ; une politique monétaire expansionniste déplace LM vers la droite (hausse de <em>Y</em>, baisse de <em>i</em>). Dans la trappe à liquidité, LM est horizontale et la politique monétaire est inefficace.</p>\n<h4>Keynes à court terme, les classiques à long terme</h4>\n<p>Franco Modigliani (1944) montre que l'équilibre de sous-emploi repose sur l'hypothèse de <strong>rigidité des salaires nominaux</strong> : si les salaires et les prix sont flexibles, la baisse des prix augmente les encaisses réelles <em>M</em> / <em>P</em>, déplace LM vers la droite et ramène l'économie au plein emploi (effet Keynes), sauf en trappe à liquidité. Même dans ce cas, Arthur Pigou et Don Patinkin invoquent l'<strong>effet d'encaisses réelles</strong> (effet Pigou) : la baisse des prix enrichit les détenteurs de monnaie, qui consomment davantage.</p>\n<p>Paul Samuelson, dans son manuel <em>Economics</em> (1948), popularise la <strong>synthèse néoclassique</strong> : l'économie est keynésienne à court terme, parce que les prix et les salaires sont rigides, et classique à long terme, lorsque les prix se sont ajustés et que la croissance est gouvernée par l'offre (le modèle de Solow, 1956, en fournit la partie de long terme). Cette synthèse domine des années 1950 aux années 1970 et inspire les grands modèles macroéconométriques (Klein, prix Nobel 1980) et les politiques de <strong>réglage fin</strong> (fine tuning) de la conjoncture.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> IS-LM n'est pas « le modèle de Keynes » : c'est une interprétation de Hicks, qui laisse de côté l'incertitude radicale et l'instabilité des anticipations. Les post-keynésiens (Joan Robinson parlait de « keynésianisme bâtard ») y voient une trahison ; à l'inverse, c'est sous cette forme que Keynes est enseigné et appliqué.</div>"
      },
      {
       "titre": "La courbe de Phillips des années 1960",
       "contenu": "<p>En 1958, l'économiste néo-zélandais Alban W. Phillips publie une étude portant sur le Royaume-Uni de 1861 à 1957 : il observe une <strong>relation décroissante entre le taux de croissance des salaires nominaux et le taux de chômage</strong>. Quand le chômage est bas, les salaires augmentent vite ; quand il est élevé, ils augmentent lentement, voire baissent. La relation est convexe : la hausse des salaires s'emballe à faible chômage.</p>\n<p>En 1960, Paul Samuelson et Robert Solow transposent cette relation aux États-Unis en remplaçant la hausse des salaires par l'<strong>inflation des prix</strong> (via un taux de marge stable et la croissance de la productivité). Ils la présentent comme un <strong>menu</strong> offert aux décideurs : on peut « acheter » moins de chômage au prix d'un peu plus d'inflation. Sous sa forme simple :</p>\n<p class=\"eq\">π<sub><em>t</em></sub> = <em>a</em> − <em>b</em> <em>u</em><sub><em>t</em></sub>,   <em>b</em> &gt; 0</p>\n<p>La courbe de Phillips comble un vide de la synthèse : IS-LM détermine la production à prix donnés, la courbe de Phillips décrit comment les prix évoluent. Le mécanisme sous-jacent est celui d'un marché du travail tendu : quand le chômage est faible, le pouvoir de négociation des salariés augmente, les salaires montent, et les entreprises répercutent les coûts dans leurs prix.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> utiliser une courbe de Phillips simple.<br>Soit π = 10 − 1,5 <em>u</em> (en %).<br>1) Avec <em>u</em> = 5 %, π = 10 − 7,5 = 2,5 %.<br>2) Pour une inflation nulle, il faut <em>u</em> = 10 / 1,5 ≈ 6,7 %.<br>3) Faire baisser le chômage de 5 % à 4 % « coûte » 1,5 point d'inflation (π = 4 %). Le gouvernement choisit le point du menu qui minimise sa fonction de perte.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> l'expérience américaine des années 1960. Sous les présidences Kennedy et Johnson, les conseillers keynésiens (Walter Heller, Arthur Okun, James Tobin) mènent une politique de demande active (baisse d'impôts de 1964, puis dépenses de la guerre du Vietnam et de la « Grande Société »). Le chômage descend autour de 3,5 % en 1969 et l'inflation, voisine de 1 % au début de la décennie, dépasse 5 % à la fin. Les points de la décennie se placent remarquablement bien le long d'une courbe de Phillips. Mais à partir de 1970, la relation se déplace vers le haut : chômage et inflation augmentent ensemble (stagflation), ce qui ouvrira la voie à la critique monétariste.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la courbe de Phillips originale (1958) relie hausse des salaires nominaux et chômage ; la version de Samuelson et Solow (1960) relie inflation et chômage et suggère un arbitrage permanent. Cet arbitrage permanent est précisément ce que Friedman (1968) et Phelps (1967) vont contester.</div>"
      }
     ],
     "points_cles": [
      "Loi de Say (1803) : les produits s'échangent contre des produits ; pas de surproduction générale durable ; l'offre détermine la production.",
      "Modèle classique : salaire réel flexible et plein emploi (chômage volontaire), taux d'intérêt réel égalisant S(r) et I(r), éviction totale de la dépense publique.",
      "Dichotomie classique : les variables réelles se déterminent dans la sphère réelle, la monnaie ne détermine que le niveau des prix.",
      "Neutralité de la monnaie : une variation de M change les grandeurs nominales proportionnellement, sans effet réel ; propriété de long terme largement acceptée.",
      "Théorie quantitative : MV = PY (Fisher, 1911) ; Cambridge : Md = kPY ; en taux : π = gM + gV − gY.",
      "Keynes (1936) : principe de la demande effective, équilibre de sous-emploi, chômage involontaire, préférence pour la liquidité, trappe à liquidité, rôle de l'incertitude.",
      "Multiplicateur des dépenses : 1 / (1 − c1) ; multiplicateur fiscal : −c1 / (1 − c1) ; budget équilibré : 1 (Haavelmo, 1945).",
      "Le multiplicateur est réduit par les impôts proportionnels, les importations, l'effet d'éviction et l'ajustement des prix.",
      "IS-LM (Hicks, 1937) : IS décroissante (marché des biens), LM croissante (marché de la monnaie) ; trappe à liquidité : LM horizontale.",
      "Modigliani (1944) : le sous-emploi keynésien repose sur la rigidité des salaires nominaux ; effet Pigou (encaisses réelles).",
      "Synthèse néoclassique (Samuelson, 1948) : Keynes à court terme, classiques à long terme ; politiques de réglage fin.",
      "Phillips (1958) : salaires nominaux et chômage au Royaume-Uni ; Samuelson et Solow (1960) : inflation et chômage, menu de politique économique ; la relation se déplace à partir de 1970."
     ],
     "lexique": [
      {
       "terme": "Loi de Say",
       "def": "Principe selon lequel la production crée les revenus nécessaires à son écoulement, excluant toute surproduction générale durable."
      },
      {
       "terme": "Dichotomie classique",
       "def": "Séparation entre la sphère réelle (quantités, prix relatifs) et la sphère monétaire (niveau général des prix)."
      },
      {
       "terme": "Neutralité de la monnaie",
       "def": "Absence d'effet de la quantité de monnaie sur les variables réelles."
      },
      {
       "terme": "Vitesse de circulation",
       "def": "Nombre moyen de fois qu'une unité monétaire sert à régler des transactions sur une période : V = PY / M."
      },
      {
       "terme": "Demande effective",
       "def": "Demande anticipée par les entrepreneurs, qui détermine le niveau de production et d'emploi chez Keynes."
      },
      {
       "terme": "Propension marginale à consommer",
       "def": "Part d'un supplément de revenu consacrée à la consommation (entre 0 et 1)."
      },
      {
       "terme": "Préférence pour la liquidité",
       "def": "Désir de détenir de la monnaie (transaction, précaution, spéculation) ; le taux d'intérêt en est le prix."
      },
      {
       "terme": "Trappe à liquidité",
       "def": "Situation où, à taux d'intérêt très bas, la demande de monnaie devient infinie et la politique monétaire perd son efficacité."
      },
      {
       "terme": "Multiplicateur",
       "def": "Rapport entre la variation de la production d'équilibre et la variation d'une dépense autonome qui l'a provoquée."
      },
      {
       "terme": "Chômage involontaire",
       "def": "Chômage de personnes prêtes à travailler au salaire courant, qui ne trouvent pas d'emploi faute de demande."
      },
      {
       "terme": "Effet d'éviction",
       "def": "Réduction de la dépense privée (investissement) provoquée par la hausse du taux d'intérêt consécutive à une hausse de la dépense publique."
      },
      {
       "terme": "Effet Pigou",
       "def": "Hausse de la consommation provoquée par l'augmentation des encaisses réelles lorsque les prix baissent."
      },
      {
       "terme": "Synthèse néoclassique",
       "def": "Courant combinant analyse keynésienne de court terme (prix rigides) et analyse classique de long terme."
      },
      {
       "terme": "Courbe de Phillips",
       "def": "Relation décroissante entre la hausse des salaires (ou l'inflation) et le taux de chômage."
      }
     ],
     "qcm": [
      {
       "q": "Avec M = 400, V = 5 et Y = 1 000, que vaut le niveau des prix selon l'équation quantitative ?",
       "options": [
        "2",
        "0,5",
        "8",
        "1,25"
       ],
       "bonnes": [
        0
       ],
       "explication": "P = MV / Y = 400 × 5 / 1 000 = 2."
      },
      {
       "q": "La masse monétaire croît de 6 %, la vitesse de circulation de 1 % et la production réelle de 2 %. Quelle est l'inflation selon la théorie quantitative ?",
       "options": [
        "3 %",
        "7 %",
        "9 %",
        "5 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "π = gM + gV − gY = 6 + 1 − 2 = 5 %."
      },
      {
       "q": "Quelles propositions caractérisent le modèle classique ? (deux réponses)",
       "options": [
        "Le taux d'intérêt réel égalise l'épargne et l'investissement",
        "L'épargne dépend essentiellement du revenu courant",
        "Le chômage ne peut être que volontaire ou frictionnel",
        "La demande effective détermine le niveau de l'emploi"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Chez les classiques, le marché des fonds prêtables est équilibré par le taux d'intérêt et le salaire réel flexible assure le plein emploi. L'épargne fonction du revenu et la demande effective sont des idées keynésiennes."
      },
      {
       "q": "Avec C = 100 + 0,8 (Y − T), I et G exogènes, de combien varie Y si G augmente de 50 ?",
       "options": [
        "40",
        "250",
        "50",
        "200"
       ],
       "bonnes": [
        1
       ],
       "explication": "Multiplicateur des dépenses = 1 / (1 − 0,8) = 5 ; ΔY = 5 × 50 = 250."
      },
      {
       "q": "Même modèle (c1 = 0,8). De combien varie Y si les impôts forfaitaires baissent de 50 ?",
       "options": [
        "250",
        "200",
        "40",
        "−200"
       ],
       "bonnes": [
        1
       ],
       "explication": "Multiplicateur fiscal = −c1 / (1 − c1) = −4 ; ΔY = −4 × (−50) = +200, moins que pour une hausse de G car une partie de la baisse d'impôt est épargnée dès le premier tour."
      },
      {
       "q": "Quelle proposition sur le théorème de Haavelmo est exacte ?",
       "options": [
        "Une hausse de G financée par emprunt n'a aucun effet",
        "Le multiplicateur d'un budget équilibré vaut 1 / (1 − c1)",
        "Une baisse d'impôt a plus d'effet qu'une hausse de dépenses",
        "Une hausse de G financée par une hausse égale des impôts forfaitaires accroît Y du même montant"
       ],
       "bonnes": [
        3
       ],
       "explication": "1 / (1 − c1) − c1 / (1 − c1) = 1 : le multiplicateur du budget équilibré vaut 1, donc ΔY = ΔG."
      },
      {
       "q": "Quelles propositions correspondent à la pensée de Keynes dans la Théorie générale (1936) ? (deux réponses)",
       "options": [
        "Une baisse générale des salaires nominaux est le meilleur remède au chômage",
        "Le taux d'intérêt est le prix de la renonciation à la liquidité",
        "L'économie peut se fixer durablement dans un équilibre de sous-emploi",
        "La monnaie est un voile sans effet sur l'activité"
       ],
       "bonnes": [
        1,
        2
       ],
       "explication": "Keynes définit le taux d'intérêt par la préférence pour la liquidité et admet un équilibre de sous-emploi avec chômage involontaire. Il rejette la baisse des salaires comme remède (elle réduit la demande) et la neutralité de la monnaie à court terme."
      },
      {
       "q": "Dans le modèle IS-LM, une politique monétaire expansionniste a pour effet :",
       "options": [
        "de déplacer LM vers la droite : la production augmente et le taux d'intérêt baisse",
        "de déplacer IS vers la droite : la production et le taux d'intérêt augmentent",
        "aucun effet, sauf en trappe à liquidité",
        "une baisse de la production par effet d'éviction"
       ],
       "bonnes": [
        0
       ],
       "explication": "La hausse de M / P déplace LM vers la droite : le taux d'intérêt baisse, l'investissement augmente et la production croît. C'est en trappe à liquidité que la politique monétaire devient inefficace, non l'inverse."
      },
      {
       "q": "Quelles propositions sur la synthèse néoclassique sont exactes ? (deux réponses)",
       "options": [
        "Modigliani (1944) montre que l'équilibre de sous-emploi repose sur la rigidité des salaires nominaux",
        "Elle rejette toute idée d'ajustement des prix à long terme",
        "Elle combine une analyse keynésienne de court terme et une analyse classique de long terme",
        "Elle a été fondée par Friedman en 1968"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "La synthèse (Hicks, Modigliani, Samuelson) considère que les rigidités nominales expliquent le court terme keynésien, tandis qu'à long terme les prix s'ajustent et l'économie est classique. Friedman en est un critique."
      },
      {
       "q": "La courbe de Phillips publiée en 1958 relie :",
       "options": [
        "l'inflation des prix et le chômage aux États-Unis",
        "la croissance du PIB et la variation du chômage",
        "l'inflation et la croissance monétaire",
        "le taux de croissance des salaires nominaux et le taux de chômage au Royaume-Uni"
       ],
       "bonnes": [
        3
       ],
       "explication": "Phillips étudie les salaires nominaux britanniques de 1861 à 1957. La version en termes d'inflation des prix, appliquée aux États-Unis, est celle de Samuelson et Solow (1960) ; la relation entre croissance et chômage est la loi d'Okun."
      },
      {
       "q": "Avec la courbe de Phillips π = 8 − 2u (en %), quel taux de chômage correspond à une inflation de 2 % ?",
       "options": [
        "4 %",
        "2 %",
        "5 %",
        "3 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "2 = 8 − 2u, donc 2u = 6 et u = 3 %."
      }
     ]
    },
    {
     "id": "mac1-monetarisme-dsge",
     "titre": "Les grands courants : du monétarisme aux débats actuels",
     "duree": 55,
     "niveau": "L2",
     "objectifs": [
      "Expliquer la critique monétariste : taux de chômage naturel, courbe de Phillips augmentée, verticalité de long terme",
      "Présenter les anticipations rationnelles, la proposition d'inefficacité et la critique de Lucas",
      "Exposer la théorie des cycles réels et ses limites",
      "Distinguer rigidités nominales et réelles dans l'approche nouvelle keynésienne",
      "Écrire le modèle nouveau keynésien à trois équations et appliquer la règle de Taylor",
      "Identifier les apports de la macroéconomie d'après 2008 (frictions financières, hétérogénéité, HANK)",
      "Discuter la stagnation séculaire et l'épisode d'inflation de 2021-2023"
     ],
     "sections": [
      {
       "titre": "Le monétarisme de Friedman",
       "contenu": "<p>Le <strong>monétarisme</strong>, dont Milton Friedman (prix Nobel 1976) est la figure centrale, s'oppose dès les années 1950 à la synthèse keynésienne. Ses piliers sont : la théorie quantitative reformulée comme une théorie de la demande de monnaie stable (1956) ; l'interprétation de la Grande Dépression comme un échec de la Réserve fédérale, qui a laissé la masse monétaire chuter d'environ un tiers entre 1929 et 1933 (Friedman et Schwartz, <em>A Monetary History of the United States</em>, 1963) ; la théorie du <strong>revenu permanent</strong> (1957), selon laquelle la consommation dépend du revenu de long terme, ce qui réduit l'effet des relances temporaires ; et la méfiance envers les politiques discrétionnaires, dont les délais d'action sont longs et variables.</p>\n<h4>Le taux de chômage naturel et la courbe de Phillips augmentée</h4>\n<p>Dans son discours présidentiel à l'American Economic Association (1968), Friedman, comme Edmund Phelps (1967), soutient que l'arbitrage inflation-chômage ne peut être que temporaire. Les salariés négocient des salaires <strong>réels</strong> : ils intègrent l'inflation qu'ils anticipent. La courbe de Phillips doit donc être <strong>augmentée des anticipations</strong> :</p>\n<p class=\"eq\">π<sub><em>t</em></sub> = π<sup><em>e</em></sup><sub><em>t</em></sub> − α (<em>u</em><sub><em>t</em></sub> − <em>u</em><sub><em>n</em></sub>)</p>\n<p>où <em>u</em><sub><em>n</em></sub> est le <strong>taux de chômage naturel</strong>, celui qui prévaudrait compte tenu des caractéristiques structurelles du marché du travail (frictions, institutions, salaire minimum, indemnisation). Le chômage ne peut rester sous <em>u</em><sub><em>n</em></sub> que si l'inflation dépasse l'inflation anticipée, c'est-à-dire si les agents se trompent.</p>\n<p>Avec des <strong>anticipations adaptatives</strong>, les agents révisent leurs prévisions en fonction des erreurs passées ; dans le cas le plus simple, π<sup><em>e</em></sup><sub><em>t</em></sub> = π<sub><em>t</em>−1</sub>, d'où :</p>\n<p class=\"eq\">π<sub><em>t</em></sub> − π<sub><em>t</em>−1</sub> = −α (<em>u</em><sub><em>t</em></sub> − <em>u</em><sub><em>n</em></sub>)</p>\n<p>Maintenir le chômage sous son niveau naturel exige une inflation <strong>toujours croissante</strong> : c'est l'hypothèse <strong>accélérationniste</strong>. Le taux de chômage qui stabilise l'inflation est le <strong>NAIRU</strong> (Non-Accelerating Inflation Rate of Unemployment, Modigliani et Papademos, 1975). À long terme, lorsque π = π<sup><em>e</em></sup>, <em>u</em> = <em>u</em><sub><em>n</em></sub> quel que soit le niveau de l'inflation : la <strong>courbe de Phillips de long terme est verticale</strong>. Une politique de demande ne peut pas réduire durablement le chômage ; seules des politiques structurelles peuvent abaisser <em>u</em><sub><em>n</em></sub>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> simuler la courbe de Phillips accélérationniste.<br><em>u</em><sub><em>n</em></sub> = 6 %, α = 0,5, π<sub>0</sub> = 2 %, π<sup><em>e</em></sup><sub><em>t</em></sub> = π<sub><em>t</em>−1</sub>. Le gouvernement maintient <em>u</em> = 4 % à partir de l'année 1.<br>\n<table>\n<thead><tr><th>Année</th><th><em>u</em></th><th>π<sup><em>e</em></sup></th><th>π = π<sup><em>e</em></sup> − 0,5 (<em>u</em> − 6)</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>4 %</td><td>2 %</td><td>3 %</td></tr>\n<tr><td>2</td><td>4 %</td><td>3 %</td><td>4 %</td></tr>\n<tr><td>3</td><td>4 %</td><td>4 %</td><td>5 %</td></tr>\n<tr><td>4</td><td>4 %</td><td>5 %</td><td>6 %</td></tr>\n</tbody>\n</table>\nL'inflation augmente d'un point par an. Pour la ramener ensuite de 6 % à 2 %, il faut cumuler 4 / 0,5 = 8 points-années de chômage au-dessus de 6 % (par exemple 8 % pendant quatre ans) : c'est le coût de la désinflation.</div>\n<p>Friedman en déduit une <strong>règle</strong> : faire croître la masse monétaire à un taux constant de <em>k</em> % par an, égal à la croissance potentielle. La <strong>stagflation</strong> des années 1970 (chômage et inflation élevés simultanément après les chocs pétroliers de 1973 et 1979) a semblé confirmer la critique monétariste et provoqué un tournant des politiques.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> la désinflation Volcker. Nommé à la tête de la Réserve fédérale en 1979, Paul Volcker restreint la croissance monétaire ; le taux des fonds fédéraux approche 20 % en 1981. L'inflation américaine passe d'environ 13,5 % en 1980 à environ 3 % en 1983, au prix d'une récession sévère : le chômage dépasse 10 % fin 1982. La désinflation a été plus rapide que ne le prévoyaient les modèles adaptatifs, mais beaucoup plus coûteuse que ne le promettaient les tenants d'une crédibilité immédiate. Le ciblage strict des agrégats monétaires a ensuite été abandonné en raison de l'instabilité de la demande de monnaie.</div>"
      },
      {
       "titre": "La nouvelle économie classique : anticipations rationnelles et critique de Lucas",
       "contenu": "<p>Dans les années 1970, Robert Lucas (prix Nobel 1995), Thomas Sargent et Neil Wallace radicalisent la critique. L'hypothèse d'<strong>anticipations rationnelles</strong>, proposée par John Muth (1961), stipule que les agents utilisent au mieux toute l'information disponible, y compris la connaissance du fonctionnement de l'économie : leurs anticipations sont égales à l'espérance mathématique conditionnelle donnée par le vrai modèle, π<sup><em>e</em></sup><sub><em>t</em></sub> = <em>E</em>[π<sub><em>t</em></sub> | <em>I</em><sub><em>t</em>−1</sub>]. Les agents peuvent se tromper, mais pas de façon systématique : les erreurs sont imprévisibles et de moyenne nulle.</p>\n<h4>La proposition d'inefficacité</h4>\n<p>Combinée à des prix flexibles et à l'équilibre permanent des marchés, cette hypothèse conduit à la <strong>proposition d'inefficacité</strong> de la politique économique (Sargent et Wallace, 1975) : une politique monétaire systématique (une règle connue) est anticipée, intégrée dans les prix et n'a aucun effet réel, même à court terme. Seule une politique <strong>surprise</strong> a des effets, transitoires et aléatoires, donc inutiles pour stabiliser. Dans le modèle des « îles » de Lucas (1972), les producteurs observent le prix de leur bien mais pas le niveau général des prix ; face à une hausse de prix, ils ne savent pas s'il s'agit d'un changement de prix relatif ou d'inflation (problème d'<strong>extraction de signal</strong>) et augmentent un peu leur production. La courbe d'offre de Lucas en découle : <em>Y</em> − <em>Y</em><sub><em>n</em></sub> = β (<em>P</em> − <em>P</em><sup><em>e</em></sup>).</p>\n<h4>La critique de Lucas (1976)</h4>\n<p>Les grands modèles macroéconométriques keynésiens reposaient sur des équations estimées sur le passé (consommation, salaires). Lucas montre que les paramètres de ces équations dépendent des règles de politique économique en vigueur, car les agents anticipent cette politique. Si la politique change, les comportements changent : on ne peut pas utiliser un modèle estimé sous un régime pour simuler les effets d'un autre régime. Ainsi, une courbe de Phillips estimée dans les années 1960 ne permettait pas de prévoir les effets d'une politique d'inflation systématique. La conséquence méthodologique est majeure : il faut construire des modèles fondés sur des <strong>paramètres structurels</strong> (préférences, technologie) invariants aux politiques, c'est-à-dire des modèles microfondés.</p>\n<h4>Crédibilité et incohérence temporelle</h4>\n<p>Finn Kydland et Edward Prescott (1977) montrent qu'une politique optimale aujourd'hui peut ne plus l'être demain : un gouvernement qui promet une inflation basse a intérêt, une fois les salaires fixés, à créer une inflation surprise pour réduire le chômage. Les agents rationnels l'anticipent : on aboutit à une inflation élevée sans gain sur le chômage (<strong>biais inflationniste</strong>, formalisé par Barro et Gordon, 1983). La solution est de se lier les mains : règles, délégation à une <strong>banque centrale indépendante</strong> et conservatrice (Rogoff, 1985). Ces travaux ont fondé l'indépendance des banques centrales dans les années 1990 (Banque de France en 1993, BCE en 1998). Sargent (1982) a montré que la fin de quatre hyperinflations européennes des années 1920 avait été rapide et peu coûteuse lorsqu'elle s'accompagnait d'un changement crédible de régime budgétaire et monétaire.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> anticipations rationnelles ne veut pas dire « prévisions parfaites ». Et anticipations rationnelles seules ne suffisent pas à l'inefficacité de la politique : il faut aussi des prix flexibles. Les nouveaux keynésiens gardent les anticipations rationnelles mais introduisent des rigidités, ce qui restaure l'efficacité de la politique monétaire.</div>"
      },
      {
       "titre": "La théorie des cycles réels",
       "contenu": "<p>La <strong>théorie des cycles réels</strong> (Real Business Cycles, RBC) prolonge la nouvelle économie classique. Dans leur article fondateur, Kydland et Prescott (1982) (prix Nobel 2004) construisent un modèle d'équilibre général dynamique stochastique dans lequel un ménage représentatif rationnel maximise son utilité intertemporelle, les marchés sont parfaitement concurrentiels et les prix flexibles. Les fluctuations sont provoquées par des <strong>chocs réels</strong>, principalement des <strong>chocs de productivité</strong> aléatoires et persistants, mesurés par le <strong>résidu de Solow</strong> (la part de la croissance non expliquée par celle du capital et du travail).</p>\n<p>Le mécanisme de propagation : une hausse temporaire de la productivité augmente le salaire réel et le rendement du capital ; les ménages travaillent davantage aujourd'hui (<strong>substitution intertemporelle du loisir</strong>, puisque travailler est temporairement plus rémunérateur) et épargnent pour lisser leur consommation, d'où une forte hausse de l'investissement. Le modèle reproduit plusieurs faits stylisés : investissement plus volatil que la production, consommation moins volatile, emploi et productivité procycliques.</p>\n<p>Les implications sont radicales : les fluctuations sont la réponse <strong>optimale</strong> des agents à des chocs ; le chômage est un choix de travail moindre ; la monnaie est neutre ; il n'y a donc pas lieu de stabiliser l'activité. La méthode est elle aussi nouvelle : plutôt que d'estimer le modèle, on le <strong>calibre</strong> (on fixe les paramètres à partir d'études micro et de moyennes de long terme) puis on compare les moments simulés (volatilités, corrélations) aux données.</p>\n<h4>Les critiques</h4>\n<ul>\n<li>Quels sont ces chocs technologiques capables de provoquer des récessions, c'est-à-dire de faire régresser la technologie (Summers, 1986) ?</li>\n<li>Le résidu de Solow est procyclique en partie à cause de la rétention de main-d'œuvre et de l'utilisation variable des capacités : il ne mesure pas seulement la technologie.</li>\n<li>L'élasticité de l'offre de travail requise est bien supérieure à celle estimée en microéconomie.</li>\n<li>Les données montrent des effets réels de la politique monétaire (Friedman et Schwartz ; Romer et Romer, 1989 ; épisode Volcker).</li>\n</ul>\n<p>Malgré ces critiques, l'apport méthodologique des RBC a été durable : le cadre d'équilibre général dynamique, microfondé et stochastique, est devenu l'ossature de la macroéconomie moderne.</p>"
      },
      {
       "titre": "Les nouveaux keynésiens : rigidités nominales et réelles",
       "contenu": "<p>À partir des années 1980, les <strong>nouveaux keynésiens</strong> (Gregory Mankiw, George Akerlof, Janet Yellen, Olivier Blanchard, Joseph Stiglitz, John Taylor, Stanley Fischer) acceptent la discipline méthodologique de leurs adversaires (agents rationnels, anticipations rationnelles) mais montrent que des <strong>imperfections de marché</strong> justifiées par la microéconomie suffisent à rendre la monnaie non neutre à court terme et le chômage involontaire. Le cadre typique est celui de la <strong>concurrence monopolistique</strong> (Blanchard et Kiyotaki, 1987) : les entreprises fixent leurs prix, ce qui rend la question de leur rigidité pertinente.</p>\n<h4>Les rigidités nominales</h4>\n<ul>\n<li><strong>Coûts de menu</strong> (Mankiw, 1985) : changer un prix coûte peu, mais pour une entreprise qui fixe son prix, la perte de profit due à un prix légèrement non optimal est du second ordre (le profit est maximal, donc plat, au voisinage de l'optimum), alors que la perte de bien-être collectif due à la rigidité des prix est du premier ordre. De petits coûts suffisent donc à justifier de grandes fluctuations.</li>\n<li><strong>Quasi-rationalité</strong> (Akerlof et Yellen, 1985) : des agents qui ne réajustent pas leurs prix ou salaires, par routine, ne perdent presque rien individuellement mais provoquent des effets agrégés importants.</li>\n<li><strong>Contrats échelonnés</strong> (Fischer, 1977 ; Taylor, 1980) : les salaires sont fixés pour plusieurs périodes et renégociés à des dates différentes ; même avec des anticipations rationnelles, la politique monétaire a des effets réels tant que tous les contrats n'ont pas été révisés. Guillermo Calvo (1983) formalise cette idée : chaque période, une entreprise a une probabilité constante de pouvoir changer son prix.</li>\n</ul>\n<h4>Les rigidités réelles</h4>\n<p>Les rigidités réelles rendent les prix relatifs et le salaire réel peu sensibles à la conjoncture et amplifient les rigidités nominales.</p>\n<ul>\n<li><strong>Salaire d'efficience</strong> : la productivité dépend du salaire ; l'entreprise a intérêt à payer plus que le salaire d'équilibre pour motiver ses salariés, limiter le turnover et attirer les meilleurs. Shapiro et Stiglitz (1984) : le salaire élevé et le risque de chômage dissuadent de « tirer au flanc » ; Akerlof (1982) : échange de don réciproque. Il en résulte un chômage involontaire d'équilibre.</li>\n<li><strong>Insiders-outsiders</strong> (Lindbeck et Snower, 1988) : les salariés en place, protégés par les coûts de rotation, négocient des salaires élevés sans tenir compte des chômeurs ; cela contribue à l'hystérésis.</li>\n<li><strong>Défauts de coordination</strong> (Cooper et John, 1988) : en présence de complémentarités stratégiques, l'économie peut se bloquer sur un équilibre inférieur.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les nouveaux classiques et les nouveaux keynésiens partagent la méthode (rationalité, anticipations rationnelles, microfondements). Ils divergent sur la flexibilité des prix : flexibles chez les premiers (la politique monétaire est inefficace), rigides chez les seconds (elle est efficace à court terme et la stabilisation est justifiée).</div>"
      },
      {
       "titre": "La nouvelle synthèse et les modèles DSGE",
       "contenu": "<p>À la fin des années 1990, une <strong>nouvelle synthèse néoclassique</strong> (Goodfriend et King, 1997) unifie les deux courants : l'ossature des cycles réels (ménages et entreprises optimisateurs, équilibre général dynamique stochastique) est combinée à la concurrence monopolistique et aux rigidités nominales nouvelles keynésiennes. On parle de <strong>modèles DSGE</strong> (Dynamic Stochastic General Equilibrium). Le modèle de base, présenté par Clarida, Galí et Gertler (1999) et Woodford (2003), tient en trois équations, avec <em>x</em> l'écart de production :</p>\n<p class=\"eq\">IS dynamique : <em>x</em><sub><em>t</em></sub> = <em>E</em><sub><em>t</em></sub><em>x</em><sub><em>t</em>+1</sub> − σ (<em>i</em><sub><em>t</em></sub> − <em>E</em><sub><em>t</em></sub>π<sub><em>t</em>+1</sub> − <em>r</em><sup><em>n</em></sup>)</p>\n<p class=\"eq\">Courbe de Phillips nouvelle keynésienne : π<sub><em>t</em></sub> = β <em>E</em><sub><em>t</em></sub>π<sub><em>t</em>+1</sub> + κ <em>x</em><sub><em>t</em></sub></p>\n<p class=\"eq\">Règle de politique monétaire : <em>i</em><sub><em>t</em></sub> = <em>r</em><sup>*</sup> + π<sub><em>t</em></sub> + φ<sub>π</sub> (π<sub><em>t</em></sub> − π<sup>*</sup>) + φ<sub><em>x</em></sub> <em>x</em><sub><em>t</em></sub></p>\n<p>La première équation vient de la <strong>condition d'Euler</strong> du ménage : il consomme davantage aujourd'hui (et la demande augmente) lorsque le taux d'intérêt réel est inférieur au <strong>taux naturel</strong> <em>r</em><sup><em>n</em></sup>. La deuxième, issue du modèle de Calvo, fait dépendre l'inflation de l'inflation <strong>anticipée</strong> (et non passée) et de l'écart de production : elle est tournée vers l'avenir. La troisième est la <strong>règle de Taylor</strong> (1993), qui décrit la réaction de la banque centrale ; Taylor proposait <em>r</em><sup>*</sup> = 2 %, π<sup>*</sup> = 2 % et φ<sub>π</sub> = φ<sub><em>x</em></sub> = 0,5.</p>\n<p>Le <strong>principe de Taylor</strong> exige que le taux nominal augmente plus que l'inflation (coefficient total sur π égal à 1 + φ<sub>π</sub> &gt; 1) : ainsi le taux réel augmente quand l'inflation monte, ce qui freine la demande et stabilise l'inflation. Si la banque centrale réagit trop peu, le taux réel baisse quand l'inflation monte et les anticipations peuvent se désancrer, comme dans les années 1970 selon Clarida, Galí et Gertler (2000).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> appliquer la règle de Taylor (1993).<br><em>i</em> = <em>r</em><sup>*</sup> + π + 0,5 (π − π<sup>*</sup>) + 0,5 <em>x</em>, avec <em>r</em><sup>*</sup> = 2 %, π<sup>*</sup> = 2 %.<br>1) π = 4 %, <em>x</em> = −1 % : <em>i</em> = 2 + 4 + 0,5 × 2 + 0,5 × (−1) = 6,5 %. Taux réel ≈ 6,5 − 4 = 2,5 %, supérieur à <em>r</em><sup>*</sup> : la politique est restrictive.<br>2) Si l'inflation passe de 4 % à 5 % (toutes choses égales par ailleurs), <em>i</em> augmente de 1,5 point : le taux réel augmente de 0,5 point, conformément au principe de Taylor.<br>3) π = 0 %, <em>x</em> = −4 % : <em>i</em> = 2 + 0 − 1 − 2 = −1 %. Le taux recommandé est négatif : la contrainte de plancher des taux est atteinte et la banque centrale doit recourir à des instruments non conventionnels.</div>\n<p>Les DSGE de taille moyenne, enrichis de nombreuses frictions (habitudes de consommation, coûts d'ajustement de l'investissement, indexation), comme celui de Smets et Wouters (2003, 2007), ont été adoptés par les banques centrales pour la prévision et l'analyse des politiques. La période 1985-2007 de faible volatilité (la « Grande Modération ») et d'inflation maîtrisée a semblé consacrer ce consensus.</p>"
      },
      {
       "titre": "La macroéconomie après 2008",
       "contenu": "<p>La crise financière de 2007-2009 a révélé les angles morts du consensus : la plupart des DSGE ne comportaient pas de secteur financier digne de ce nom, supposaient un agent représentatif et ignoraient la contrainte du taux plancher. Trois chantiers se sont ouverts.</p>\n<h4>Les frictions financières</h4>\n<p>L'idée existait avant la crise : l'<strong>accélérateur financier</strong> (Bernanke et Gertler, 1989 ; Bernanke, Gertler et Gilchrist, 1999) montre que lorsque la valeur nette des emprunteurs baisse, la prime de financement externe augmente, ce qui réduit l'investissement et amplifie le choc initial. Kiyotaki et Moore (1997) montrent que la baisse du prix des actifs servant de garantie réduit la capacité d'emprunt, provoquant ventes forcées et nouvelles baisses de prix. Après 2008, ces mécanismes sont intégrés aux modèles, avec des banques soumises à des contraintes de bilan (Gertler et Kiyotaki, 2010), et justifient une <strong>politique macroprudentielle</strong> visant la stabilité financière. On redécouvre aussi Hyman Minsky (hypothèse d'instabilité financière) et Irving Fisher (déflation par la dette).</p>\n<h4>La borne zéro et les politiques non conventionnelles</h4>\n<p>Avec des taux directeurs ramenés près de zéro (et même négatifs dans la zone euro de 2014 à 2022), les banques centrales ont recouru à l'<strong>assouplissement quantitatif</strong> (achats massifs de titres) et au <strong>guidage des anticipations</strong> (forward guidance). Les modèles ont dû intégrer la contrainte de plancher, qui accroît l'efficacité de la politique budgétaire : lorsque le taux ne réagit pas, il n'y a plus d'éviction et les multiplicateurs sont plus élevés.</p>\n<h4>L'hétérogénéité : les modèles HANK</h4>\n<p>Les modèles HANK (Heterogeneous Agent New Keynesian ; Kaplan, Moll et Violante, 2018) remplacent l'agent représentatif par une population de ménages différant par leur revenu et leur richesse, soumis à des chocs idiosyncrasiques et à des contraintes d'emprunt. Une partie importante des ménages vit « au jour le jour » (hand-to-mouth) et a une propension marginale à consommer élevée. Conséquences : la politique monétaire agit surtout par ses effets indirects (emploi, revenus) plutôt que par la substitution intertemporelle ; l'équivalence ricardienne ne tient plus ; la politique budgétaire est plus puissante si elle cible les ménages contraints ; et les inégalités deviennent une variable macroéconomique.</p>"
      },
      {
       "titre": "Les débats actuels : stagnation séculaire et inflation 2021-2023",
       "contenu": "<h4>La stagnation séculaire</h4>\n<p>L'expression est d'Alvin Hansen (1938), qui craignait une insuffisance chronique de la demande. Lawrence Summers l'a relancée en 2013-2014 pour expliquer la reprise atone après 2008 malgré des taux nuls. L'idée : le <strong>taux d'intérêt naturel</strong> <em>r</em><sup>*</sup>, qui égalise épargne et investissement au plein emploi, a fortement baissé (les estimations de Holston, Laubach et Williams le situent proche de zéro, voire négatif, dans les années 2010) en raison d'un excès d'épargne (vieillissement, inégalités, épargne des pays émergents) et d'un manque d'investissement (baisse du prix des biens d'équipement, ralentissement démographique). Si <em>r</em><sup>*</sup> est inférieur au taux réel minimal atteignable, l'économie reste durablement sous le plein emploi, ce qui plaide pour un rôle accru de la politique budgétaire. Une lecture concurrente, du côté de l'offre, met l'accent sur l'essoufflement du progrès technique (Robert Gordon, 2016).</p>\n<h4>L'inflation de 2021-2023</h4>\n<p>Après une décennie d'inflation inférieure à la cible, l'inflation a brutalement accéléré : 9,1 % aux États-Unis en juin 2022, 10,6 % dans la zone euro en octobre 2022 (en glissement annuel). Les explications se combinent :</p>\n<ul>\n<li><strong>chocs d'offre</strong> : goulets d'étranglement des chaînes d'approvisionnement à la réouverture post-Covid, flambée des prix de l'énergie et de l'alimentation amplifiée par la guerre en Ukraine (2022), particulièrement en Europe ;</li>\n<li><strong>chocs de demande</strong> : réouverture, épargne accumulée, plans de relance massifs, notamment l'American Rescue Plan de 1 900 milliards de dollars (2021) ;</li>\n<li><strong>marché du travail tendu</strong>, surtout aux États-Unis (rapport élevé entre emplois vacants et chômeurs), ce qui suggère une courbe de Phillips <strong>non linéaire</strong>, plus pentue lorsque le marché est très tendu ;</li>\n<li><strong>marges des entreprises</strong>, qui ont contribué à la hausse des prix en 2022 selon plusieurs travaux (BCE, FMI), avant un rattrapage des salaires.</li>\n</ul>\n<p>Bernanke et Blanchard (2023) concluent que l'essentiel de la hausse initiale venait des chocs de prix sectoriels (énergie, alimentation, pénuries), tandis que la tension du marché du travail jouait un rôle croissant et plus persistant. Les banques centrales, qui ont d'abord jugé le choc « transitoire », ont ensuite resserré très vite : la Réserve fédérale a porté sa fourchette de 0-0,25 % à 5,25-5,50 % entre mars 2022 et juillet 2023, et la BCE son taux de dépôt de −0,5 % à 4 % entre juillet 2022 et septembre 2023. L'inflation a reflué en 2023-2024 sans récession majeure ni hausse importante du chômage, ce que l'on explique par la résorption des chocs d'offre et par l'<strong>ancrage des anticipations</strong> à long terme, acquis précieux des décennies de crédibilité.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> l'épisode 2021-2023 illustre la plupart des courants : la courbe de Phillips augmentée (rôle des anticipations), la critique de Lucas et la crédibilité (anticipations restées ancrées), les nouveaux keynésiens (rigidités et répercussion progressive des coûts), la théorie quantitative (forte croissance monétaire en 2020-2021, débattue), et les modèles HANK (effets inégaux de l'inflation selon les ménages). Aucune école ne l'avait anticipé dans toute son ampleur.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la macroéconomie a progressé par critiques successives : Keynes contre les classiques, Friedman contre l'arbitrage permanent, Lucas contre les modèles non microfondés, les nouveaux keynésiens contre la flexibilité des prix, la crise de 2008 contre l'oubli de la finance et de l'hétérogénéité. Le consensus actuel est celui de modèles microfondés à rigidités nominales, enrichis de frictions financières et d'agents hétérogènes.</div>"
      }
     ],
     "points_cles": [
      "Friedman (1968) et Phelps (1967) : courbe de Phillips augmentée π = πe − α(u − un) ; l'arbitrage n'est que temporaire.",
      "Avec anticipations adaptatives πe = π(t−1), maintenir u < un fait accélérer l'inflation (NAIRU) ; la courbe de Phillips de long terme est verticale.",
      "Monétarisme : demande de monnaie stable, Grande Dépression due à la contraction monétaire (Friedman et Schwartz, 1963), règle de croissance monétaire à k %.",
      "Anticipations rationnelles (Muth, 1961) : pas d'erreurs systématiques ; avec prix flexibles, seule une politique surprise a des effets (Sargent et Wallace, 1975).",
      "Critique de Lucas (1976) : les paramètres des modèles estimés dépendent du régime de politique économique ; il faut des paramètres structurels microfondés.",
      "Incohérence temporelle (Kydland et Prescott, 1977 ; Barro et Gordon, 1983) : biais inflationniste ; d'où règles et banques centrales indépendantes.",
      "Cycles réels (Kydland et Prescott, 1982) : chocs de productivité, prix flexibles, fluctuations optimales, calibration ; critiques sur la nature des chocs et la neutralité monétaire.",
      "Nouveaux keynésiens : rigidités nominales (coûts de menu de Mankiw, quasi-rationalité d'Akerlof-Yellen, contrats de Fischer et Taylor, Calvo) et réelles (salaire d'efficience, insiders-outsiders).",
      "Nouvelle synthèse : IS dynamique (condition d'Euler), courbe de Phillips nouvelle keynésienne π = β E(π) + κx, règle de Taylor.",
      "Règle de Taylor (1993) : i = r* + π + 0,5(π − π*) + 0,5x ; principe de Taylor : le taux nominal doit augmenter plus que l'inflation.",
      "Après 2008 : accélérateur financier (Bernanke-Gertler-Gilchrist, 1999), Kiyotaki-Moore (1997), borne zéro et politiques non conventionnelles, modèles HANK (Kaplan, Moll, Violante, 2018).",
      "Stagnation séculaire (Hansen, 1938 ; Summers, 2013) : baisse du taux naturel r* sous l'effet d'un excès d'épargne et d'un manque d'investissement.",
      "Inflation 2021-2023 : chocs d'offre (énergie, pénuries), relance de la demande, marché du travail tendu, marges ; pics à 9,1 % (États-Unis, juin 2022) et 10,6 % (zone euro, octobre 2022) ; reflux sans récession majeure grâce à l'ancrage des anticipations."
     ],
     "lexique": [
      {
       "terme": "Taux de chômage naturel",
       "def": "Taux de chômage d'équilibre de moyen terme, déterminé par les caractéristiques structurelles du marché du travail (Friedman, 1968)."
      },
      {
       "terme": "NAIRU",
       "def": "Taux de chômage qui n'accélère pas l'inflation ; en dessous, l'inflation augmente avec des anticipations adaptatives."
      },
      {
       "terme": "Anticipations adaptatives",
       "def": "Anticipations révisées en fonction des erreurs passées, dans le cas simple égales à l'inflation de la période précédente."
      },
      {
       "terme": "Anticipations rationnelles",
       "def": "Anticipations égales à l'espérance conditionnelle donnée par le vrai modèle et toute l'information disponible ; erreurs non systématiques."
      },
      {
       "terme": "Critique de Lucas",
       "def": "Les paramètres des relations macroéconomiques estimées varient avec les règles de politique, ce qui invalide l'évaluation des politiques par des modèles non structurels."
      },
      {
       "terme": "Incohérence temporelle",
       "def": "Situation où une politique optimale annoncée cesse de l'être une fois les anticipations formées, incitant à ne pas tenir l'engagement."
      },
      {
       "terme": "Choc de productivité",
       "def": "Variation exogène de la productivité globale des facteurs, source des fluctuations dans la théorie des cycles réels."
      },
      {
       "terme": "Coûts de menu",
       "def": "Coûts de changement des prix ; faibles individuellement, ils peuvent avoir des effets agrégés importants (Mankiw, 1985)."
      },
      {
       "terme": "Salaire d'efficience",
       "def": "Salaire supérieur au salaire d'équilibre versé pour accroître la productivité des salariés, source de chômage involontaire."
      },
      {
       "terme": "Modèle DSGE",
       "def": "Modèle d'équilibre général dynamique stochastique, microfondé, utilisé par les banques centrales."
      },
      {
       "terme": "Règle de Taylor",
       "def": "Règle fixant le taux directeur en fonction de l'écart d'inflation à la cible et de l'écart de production (Taylor, 1993)."
      },
      {
       "terme": "Accélérateur financier",
       "def": "Amplification des chocs par la dégradation de la situation financière des emprunteurs, qui renchérit leur financement externe."
      },
      {
       "terme": "Modèle HANK",
       "def": "Modèle nouveau keynésien à agents hétérogènes, où les ménages diffèrent par leur revenu, leur richesse et leur propension à consommer."
      },
      {
       "terme": "Stagnation séculaire",
       "def": "Situation durable d'insuffisance de la demande liée à un taux d'intérêt naturel très bas (Hansen, 1938 ; Summers, 2013)."
      }
     ],
     "qcm": [
      {
       "q": "Avec π = πe − 0,5 (u − 5) et πe = π(t−1) = 3 %, quelle est l'inflation si le chômage est maintenu à 3 % ?",
       "options": [
        "2 %",
        "4 %",
        "3 %",
        "1 %"
       ],
       "bonnes": [
        1
       ],
       "explication": "π = 3 − 0,5 × (3 − 5) = 3 + 1 = 4 %. L'inflation accélère tant que le chômage reste sous son niveau naturel."
      },
      {
       "q": "Quelles propositions découlent de la courbe de Phillips augmentée avec anticipations adaptatives ? (deux réponses)",
       "options": [
        "Il existe un arbitrage permanent entre inflation et chômage",
        "Maintenir le chômage sous son taux naturel provoque une inflation croissante",
        "À long terme, la courbe de Phillips est verticale au taux de chômage naturel",
        "Le chômage naturel est déterminé par la politique monétaire"
       ],
       "bonnes": [
        1,
        2
       ],
       "explication": "Avec πe = π(t−1), u < un entraîne une accélération de l'inflation ; à long terme, π = πe et u = un : la courbe est verticale. Le chômage naturel dépend de facteurs structurels, non de la politique monétaire."
      },
      {
       "q": "Quelle est la proposition d'inefficacité de Sargent et Wallace (1975) ?",
       "options": [
        "Une politique monétaire systématique et anticipée n'a pas d'effet réel lorsque les prix sont flexibles et les anticipations rationnelles",
        "La politique budgétaire est toujours inefficace à cause de l'éviction",
        "La politique monétaire est inefficace en trappe à liquidité",
        "Les règles monétaires sont inefficaces, seule la discrétion fonctionne"
       ],
       "bonnes": [
        0
       ],
       "explication": "Avec anticipations rationnelles et prix flexibles, une règle connue est intégrée dans les prix ; seules les surprises monétaires ont des effets réels, transitoires et aléatoires."
      },
      {
       "q": "Quel est le message central de la critique de Lucas (1976) ?",
       "options": [
        "Les agents ne sont pas rationnels",
        "Les paramètres des équations estimées changent quand la politique économique change, ce qui invalide les simulations de politiques nouvelles",
        "La monnaie n'est jamais neutre",
        "Les chocs de productivité ne peuvent pas expliquer les cycles"
       ],
       "bonnes": [
        1
       ],
       "explication": "Les comportements estimés intègrent les anticipations de politique ; si le régime change, ces paramètres changent. Il faut des modèles fondés sur des paramètres structurels invariants (préférences, technologie)."
      },
      {
       "q": "Selon la règle de Taylor (1993) avec r* = 2 %, π* = 2 %, coefficients 0,5 et 0,5, quel taux nominal pour π = 3 % et un écart de production de +2 % ?",
       "options": [
        "5 %",
        "6,5 %",
        "4,5 %",
        "7 %"
       ],
       "bonnes": [
        1
       ],
       "explication": "i = 2 + 3 + 0,5 × (3 − 2) + 0,5 × 2 = 2 + 3 + 0,5 + 1 = 6,5 %."
      },
      {
       "q": "Le principe de Taylor exige que :",
       "options": [
        "le taux nominal soit toujours supérieur à l'inflation",
        "la banque centrale ne réagisse qu'à l'inflation",
        "le taux d'intérêt reste égal au taux naturel",
        "le taux nominal augmente de plus d'un point quand l'inflation augmente d'un point"
       ],
       "bonnes": [
        3
       ],
       "explication": "Il faut que le taux réel augmente lorsque l'inflation monte ; le coefficient total sur l'inflation (1 + 0,5 dans la règle de 1993) doit donc dépasser 1."
      },
      {
       "q": "Quelles propositions caractérisent la théorie des cycles réels ? (deux réponses)",
       "options": [
        "Les fluctuations résultent principalement de chocs de productivité",
        "Les prix sont rigides à court terme",
        "Les fluctuations sont une réponse optimale des agents, ce qui rend la stabilisation inutile",
        "La politique monétaire est le principal moteur des cycles"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Dans les modèles de Kydland et Prescott (1982), les prix sont flexibles, la monnaie est neutre et les fluctuations sont des réponses optimales à des chocs réels, surtout technologiques."
      },
      {
       "q": "Quelles propositions sont des rigidités réelles au sens des nouveaux keynésiens ? (deux réponses)",
       "options": [
        "Les coûts de menu",
        "Les contrats salariaux échelonnés de Taylor",
        "Le salaire d'efficience",
        "Le pouvoir de négociation des insiders"
       ],
       "bonnes": [
        2,
        3
       ],
       "explication": "Le salaire d'efficience et les insiders-outsiders rendent le salaire réel peu sensible au chômage : ce sont des rigidités réelles. Coûts de menu et contrats échelonnés sont des rigidités nominales."
      },
      {
       "q": "Pourquoi, selon Mankiw (1985), de petits coûts de menu peuvent-ils provoquer d'importantes fluctuations ?",
       "options": [
        "Parce que la perte de profit d'un prix non ajusté est du second ordre pour l'entreprise, alors que la perte de bien-être collectif est du premier ordre",
        "Parce que les coûts de menu sont en réalité très élevés",
        "Parce que les entreprises ont des anticipations adaptatives",
        "Parce que la monnaie est neutre"
       ],
       "bonnes": [
        0
       ],
       "explication": "Au voisinage de son optimum, le profit est plat : ne pas ajuster coûte peu à l'entreprise. Mais l'absence d'ajustement de tous les prix fait varier la production agrégée, avec un coût social important."
      },
      {
       "q": "Quelle proposition sur la courbe de Phillips nouvelle keynésienne π(t) = β E(π(t+1)) + κ x(t) est exacte ?",
       "options": [
        "L'inflation dépend de l'inflation passée",
        "L'inflation dépend de l'inflation anticipée pour la période suivante et de l'écart de production",
        "Elle est verticale à court terme",
        "Elle repose sur des anticipations adaptatives"
       ],
       "bonnes": [
        1
       ],
       "explication": "Issue du modèle de Calvo avec anticipations rationnelles, elle est tournée vers l'avenir : l'inflation courante dépend de l'inflation anticipée et de l'écart de production."
      },
      {
       "q": "Quelles propositions sur la macroéconomie d'après 2008 sont exactes ? (deux réponses)",
       "options": [
        "Dans les modèles HANK, les ménages contraints ont une propension marginale à consommer élevée",
        "L'accélérateur financier atténue les chocs",
        "À la borne zéro, l'éviction disparaît et les multiplicateurs budgétaires sont plus élevés",
        "L'hétérogénéité des ménages renforce l'équivalence ricardienne"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Les ménages au jour le jour consomment presque tout supplément de revenu ; et quand le taux ne réagit pas, la relance budgétaire n'est pas freinée par la hausse des taux. L'accélérateur financier amplifie les chocs et l'hétérogénéité fait échouer l'équivalence ricardienne."
      },
      {
       "q": "Selon l'hypothèse de stagnation séculaire relancée par Summers (2013) :",
       "options": [
        "la croissance potentielle est limitée par l'épuisement des ressources naturelles",
        "l'inflation est durablement trop élevée",
        "les politiques budgétaires sont inutiles",
        "le taux d'intérêt naturel a baissé au point que la politique monétaire peine à rétablir le plein emploi"
       ],
       "bonnes": [
        3
       ],
       "explication": "L'excès d'épargne et le manque d'investissement ont fait baisser r* ; s'il est inférieur au taux réel minimal atteignable, la demande reste insuffisante, d'où un rôle accru de la politique budgétaire."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Le long terme : monnaie, croissance et chômage",
   "chapitres": [
    {
     "id": "mac2-classique",
     "titre": "L'économie classique à prix flexibles",
     "duree": 45,
     "niveau": "L1",
     "objectifs": [
      "Décrire une fonction de production néoclassique et ses propriétés (rendements d'échelle, productivités marginales décroissantes).",
      "Dériver la demande de travail de l'entreprise concurrentielle et l'équilibre du marché du travail à prix flexibles.",
      "Calculer la répartition du revenu entre facteurs avec une fonction Cobb-Douglas et interpréter les parts constantes.",
      "Construire le marché des fonds prêtables et déterminer le taux d'intérêt réel d'équilibre.",
      "Démontrer l'effet d'éviction total d'une hausse des dépenses publiques en économie classique fermée.",
      "Énoncer la dichotomie classique et expliquer pourquoi la monnaie ne détermine pas les variables réelles à long terme."
     ],
     "sections": [
      {
       "titre": "Le cadre classique : pourquoi raisonner à prix flexibles ?",
       "contenu": "<p>Le <strong>long terme</strong>, en macroéconomie, désigne l'horizon sur lequel les prix et les salaires nominaux ont eu le temps de s'ajuster complètement aux chocs. À cet horizon, les marchés sont soldés : l'offre égale la demande sur le marché des biens, sur le marché du travail et sur le marché des fonds prêtables. Ce cadre est dit <strong>classique</strong> en référence aux économistes qui, de Smith (1776) et Ricardo (1817) à Say (1803) puis aux néoclassiques (Walras 1874, Marshall 1890), supposaient que les prix flexibles ramènent spontanément l'économie vers le plein emploi des ressources. Keynes (1936) appelle « classique » toute cette tradition pour mieux s'en démarquer : son analyse porte sur le court terme, où les prix sont rigides.</p>\n<p>Le modèle classique d'une économie fermée répond à trois questions : qu'est-ce qui détermine la <strong>quantité produite</strong> ? comment le revenu est-il <strong>réparti</strong> entre les facteurs ? qu'est-ce qui détermine l'<strong>affectation</strong> de la production entre consommation, investissement et dépenses publiques ? La réponse classique est que l'offre (la technologie et les quantités de facteurs) détermine la production ; les prix relatifs des facteurs (salaire réel, coût réel du capital) déterminent la répartition ; le taux d'intérêt réel ajuste l'épargne et l'investissement.</p>\n<p>Ce cadre est la référence de long terme de tous les manuels (Mankiw, Burda-Wyplosz, Blanchard-Cohen). Il ne prétend pas décrire chaque trimestre : il décrit le niveau autour duquel l'économie fluctue, le <strong>produit potentiel</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans le modèle classique, la production est déterminée par l'offre, Y = F(K, L) avec K et L donnés ; la demande n'agit que sur la composition de la production (C, I, G), pas sur son niveau. C'est la version macroéconomique de la « loi de Say ».</div>"
      },
      {
       "titre": "La fonction de production et ses propriétés",
       "contenu": "<p>Une <strong>fonction de production</strong> associe à des quantités de facteurs la quantité maximale de bien produite, compte tenu de la technologie. Au niveau agrégé :</p>\n<p class=\"eq\"><em>Y</em> = <em>A</em> <em>F</em>(<em>K</em>, <em>L</em>)</p>\n<p>où <em>Y</em> est la production (le PIB réel), <em>K</em> le stock de capital physique (machines, bâtiments, infrastructures), <em>L</em> la quantité de travail (heures ou emplois) et <em>A</em> la <strong>productivité globale des facteurs</strong> (PGF), qui résume la technologie et l'efficacité de l'organisation. À court et long terme classique, <em>K</em> et <em>L</em> sont supposés donnés (le capital résulte de l'investissement passé, la population active est fixée).</p>\n<h4>Rendements d'échelle</h4>\n<p>On multiplie tous les facteurs par λ &gt; 1. Les rendements d'échelle sont <strong>constants</strong> si <em>F</em>(λ<em>K</em>, λ<em>L</em>) = λ<em>F</em>(<em>K</em>, <em>L</em>) (la fonction est homogène de degré 1), <strong>croissants</strong> si la production fait plus que multiplier par λ, <strong>décroissants</strong> si elle fait moins. L'hypothèse standard est celle de rendements constants : dupliquer une usine à l'identique double la production. Elle a une conséquence technique importante : on peut écrire la production par travailleur comme fonction du capital par travailleur, <em>y</em> = <em>Y</em> / <em>L</em> = <em>F</em>(<em>K</em> / <em>L</em>, 1) = <em>f</em>(<em>k</em>).</p>\n<h4>Productivités marginales</h4>\n<p>La <strong>productivité marginale du travail</strong> (PmL) est la production supplémentaire obtenue avec une unité de travail en plus, le capital étant fixe : PmL = ∂<em>Y</em> / ∂<em>L</em>. De même PmK = ∂<em>Y</em> / ∂<em>K</em>. On suppose qu'elles sont positives mais <strong>décroissantes</strong> : avec un capital fixe, chaque travailleur supplémentaire dispose de moins de machines et ajoute moins que le précédent. Graphiquement, la fonction de production tracée en fonction de <em>L</em> (à <em>K</em> fixé) est croissante et concave ; sa pente, la PmL, diminue quand on se déplace vers la droite.</p>\n<h4>La fonction Cobb-Douglas</h4>\n<p>La forme de référence, proposée par Cobb et Douglas (1928) pour l'industrie américaine, est :</p>\n<p class=\"eq\"><em>Y</em> = <em>A</em> <em>K</em><sup>α</sup> <em>L</em><sup>1−α</sup>, avec 0 &lt; α &lt; 1</p>\n<p>Elle est à rendements constants (les exposants somment à 1). Ses productivités marginales sont :</p>\n<p class=\"eq\">PmK = α <em>A</em> <em>K</em><sup>α−1</sup> <em>L</em><sup>1−α</sup> = α <em>Y</em> / <em>K</em></p>\n<p class=\"eq\">PmL = (1 − α) <em>A</em> <em>K</em><sup>α</sup> <em>L</em><sup>−α</sup> = (1 − α) <em>Y</em> / <em>L</em></p>\n<p>Elles sont proportionnelles aux productivités <strong>moyennes</strong> (<em>Y</em> / <em>K</em> et <em>Y</em> / <em>L</em>). La PmL augmente avec le capital (les travailleurs mieux équipés sont plus productifs) et avec <em>A</em>.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> ne pas confondre rendements d'échelle (on augmente TOUS les facteurs) et productivité marginale décroissante (on augmente UN facteur, les autres étant fixes). Une Cobb-Douglas a des rendements d'échelle constants ET des productivités marginales décroissantes de chaque facteur.</div>"
      },
      {
       "titre": "Le marché du travail à prix flexibles",
       "contenu": "<h4>La demande de travail</h4>\n<p>Une entreprise concurrentielle prend le prix <em>P</em> du bien, le salaire nominal <em>W</em> et le coût de location du capital <em>R</em> comme donnés. Son profit est Π = <em>P</em> <em>F</em>(<em>K</em>, <em>L</em>) − <em>W</em> <em>L</em> − <em>R</em> <em>K</em>. La condition du premier ordre par rapport à <em>L</em> donne :</p>\n<p class=\"eq\"><em>P</em> × PmL = <em>W</em> &nbsp;⇔&nbsp; PmL = <em>W</em> / <em>P</em></p>\n<p>L'entreprise embauche jusqu'au point où la productivité marginale du travail égale le <strong>salaire réel</strong> <em>W</em> / <em>P</em> (le salaire exprimé en unités de bien). Comme la PmL décroît avec <em>L</em>, la demande de travail est une fonction <strong>décroissante</strong> du salaire réel : c'est la courbe de PmL elle-même. Elle se déplace vers la droite si <em>K</em> ou <em>A</em> augmente. De même, PmK = <em>R</em> / <em>P</em> détermine la demande de capital.</p>\n<h4>L'offre de travail</h4>\n<p>Le ménage arbitre entre consommation et loisir. Une hausse du salaire réel a deux effets : un <strong>effet de substitution</strong> (le loisir devient plus coûteux, on travaille plus) et un <strong>effet revenu</strong> (on est plus riche, on « achète » plus de loisir, on travaille moins). Dans le modèle classique de base, on retient une offre de travail croissante du salaire réel, ou même parfaitement inélastique (offre égale à la population active <em>L̄</em>).</p>\n<h4>L'équilibre</h4>\n<p>Le salaire réel s'ajuste jusqu'à égaliser offre et demande. Graphiquement : salaire réel en ordonnée, emploi en abscisse ; demande décroissante, offre croissante (ou verticale en <em>L̄</em>). À l'intersection, il n'y a pas de chômage involontaire : toute personne qui souhaite travailler au salaire d'équilibre trouve un emploi. Le chômage ne peut exister que si le salaire réel est maintenu au-dessus de l'équilibre (salaire minimum, syndicats, salaire d'efficience) : c'est l'origine de l'analyse du chômage structurel.</p>\n<p>Point important : seul le salaire <strong>réel</strong> compte. Si <em>P</em> et <em>W</em> doublent, <em>W</em> / <em>P</em> est inchangé et l'emploi aussi. L'emploi d'équilibre et donc la production <em>Y</em> = <em>F</em>(<em>K</em>, <em>L</em>*) sont indépendants du niveau des prix.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en concurrence, chaque facteur est rémunéré à sa productivité marginale : <em>W</em> / <em>P</em> = PmL et <em>R</em> / <em>P</em> = PmK. Une hausse du capital ou de la PGF augmente le salaire réel d'équilibre.</div>"
      },
      {
       "titre": "La répartition du revenu : le théorème d'Euler et les parts constantes",
       "contenu": "<p>Si chaque facteur est payé à sa productivité marginale, le revenu distribué vaut PmL × <em>L</em> + PmK × <em>K</em>. Reste-t-il un profit économique ? Le <strong>théorème d'Euler</strong> sur les fonctions homogènes de degré 1 répond : avec des rendements constants,</p>\n<p class=\"eq\"><em>F</em>(<em>K</em>, <em>L</em>) = PmK × <em>K</em> + PmL × <em>L</em></p>\n<p>Le produit est exactement épuisé par les rémunérations des facteurs : le <strong>profit économique</strong> est nul (le « profit comptable » correspond à la rémunération du capital). Avec une Cobb-Douglas, on obtient en plus :</p>\n<p class=\"eq\">(<em>W</em> / <em>P</em>) × <em>L</em> / <em>Y</em> = 1 − α &nbsp;&nbsp;et&nbsp;&nbsp; (<em>R</em> / <em>P</em>) × <em>K</em> / <em>Y</em> = α</p>\n<p>Les <strong>parts des facteurs</strong> dans le revenu sont constantes, quelles que soient les quantités de capital et de travail ou le niveau de la technologie. C'est précisément ce qui rend la Cobb-Douglas attrayante : Douglas observait une part du travail à peu près stable aux États-Unis, et Kaldor (1961) en fait l'un de ses « faits stylisés ». On estime α à environ 1/3 dans les pays développés : la part du travail dans la valeur ajoutée est de l'ordre de deux tiers.</p>\n<h4>Quelques nuances empiriques</h4>\n<p>La stabilité n'est qu'approximative. En France, la part des salaires dans la valeur ajoutée des sociétés non financières a nettement augmenté au cours des années 1970 puis baissé fortement dans les années 1980 (désinflation, modération salariale), avant de se stabiliser à un niveau proche de celui des années 1960. Aux États-Unis, plusieurs travaux (Karabarbounis et Neiman 2014, Autor et al. 2020 sur les « entreprises superstars ») documentent une baisse de la part du travail depuis les années 1980. La mesure est délicate : il faut imputer un revenu du travail aux non-salariés, et traiter la rente immobilière à part.</p>\n<p>Une autre limite : la Cobb-Douglas impose une <strong>élasticité de substitution</strong> unitaire entre capital et travail. Avec une fonction CES (élasticité constante σ ≠ 1), la part du capital augmente avec <em>K</em> / <em>L</em> si σ &gt; 1 et diminue si σ &lt; 1. Le débat sur la baisse de la part du travail porte en partie sur la valeur de σ.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> soit <em>Y</em> = 3 <em>K</em><sup>1/3</sup> <em>L</em><sup>2/3</sup>, avec <em>K</em> = 1 000 et <em>L</em> = 8 000. (1) Calculer <em>Y</em>, le salaire réel et le coût réel du capital. (2) Vérifier l'épuisement du produit. (3) Que devient le salaire réel si le capital passe à 1 331 ?<br><br>(1) <em>K</em><sup>1/3</sup> = 10 et <em>L</em><sup>2/3</sup> = 8 000<sup>2/3</sup> = 20<sup>2</sup> = 400, donc <em>Y</em> = 3 × 10 × 400 = 12 000. Salaire réel = PmL = (2/3) × 12 000 / 8 000 = 1. Coût réel du capital = PmK = (1/3) × 12 000 / 1 000 = 4.<br>(2) Revenus du travail : 1 × 8 000 = 8 000, soit 2/3 de <em>Y</em> ; revenus du capital : 4 × 1 000 = 4 000, soit 1/3. Total 12 000 = <em>Y</em> : le produit est épuisé.<br>(3) 1 331<sup>1/3</sup> = 11, donc <em>Y</em> = 3 × 11 × 400 = 13 200 et PmL = (2/3) × 13 200 / 8 000 = 1,1. Le capital a augmenté de 33,1 % et le salaire réel de 10 % ; la PmK baisse à (1/3) × 13 200 / 1 331 ≈ 3,31 (rendements décroissants du capital). Les parts restent 2/3 et 1/3.</div>"
      },
      {
       "titre": "Demande de biens et marché des fonds prêtables",
       "contenu": "<p>La production étant fixée par l'offre (<em>Y</em> = <em>Ȳ</em>), il reste à expliquer sa répartition entre les emplois. En économie fermée :</p>\n<p class=\"eq\"><em>Ȳ</em> = <em>C</em> + <em>I</em> + <em>G</em></p>\n<p><strong>Consommation.</strong> Elle dépend du revenu disponible : <em>C</em> = <em>C</em>(<em>Y</em> − <em>T</em>), avec une propension marginale à consommer <em>c</em> comprise entre 0 et 1 (Keynes 1936). <strong>Investissement.</strong> Il dépend négativement du <strong>taux d'intérêt réel</strong> <em>r</em> : un projet n'est rentable que si son rendement dépasse le coût réel de l'emprunt (ou le rendement d'un placement alternatif pour un projet autofinancé) ; <em>I</em> = <em>I</em>(<em>r</em>), décroissante. <strong>Dépenses publiques et impôts.</strong> <em>G</em> et <em>T</em> sont des variables de politique économique, exogènes.</p>\n<h4>Épargne et investissement</h4>\n<p>On définit l'<strong>épargne nationale</strong> comme la partie du revenu qui n'est consommée ni par les ménages ni par l'État :</p>\n<p class=\"eq\"><em>S</em> = <em>Ȳ</em> − <em>C</em>(<em>Ȳ</em> − <em>T</em>) − <em>G</em> = [<em>Ȳ</em> − <em>T</em> − <em>C</em>] + [<em>T</em> − <em>G</em>]</p>\n<p>soit la somme de l'<strong>épargne privée</strong> et de l'<strong>épargne publique</strong> (le solde budgétaire). L'équilibre emplois-ressources se réécrit alors <em>S</em> = <em>I</em>(<em>r</em>). C'est l'équilibre du <strong>marché des fonds prêtables</strong> : l'offre de fonds est l'épargne nationale, la demande de fonds est l'investissement, et le prix est le taux d'intérêt réel.</p>\n<p>Graphiquement : <em>r</em> en ordonnée, quantité de fonds en abscisse. L'épargne est une droite <strong>verticale</strong> (elle ne dépend pas de <em>r</em> dans la version de base ; dans des versions plus riches, elle croît légèrement avec <em>r</em>). L'investissement est une courbe décroissante. Le taux d'intérêt réel d'équilibre <em>r</em>* est à leur intersection. Si <em>r</em> &gt; <em>r</em>*, l'offre de fonds excède la demande et le taux baisse ; si <em>r</em> &lt; <em>r</em>*, l'inverse.</p>\n<h4>Statique comparative</h4>\n<ul>\n<li>Une <strong>hausse de l'épargne privée</strong> (baisse de la propension à consommer) déplace <em>S</em> vers la droite : <em>r</em>* baisse, <em>I</em> augmente. C'est le « paradoxe de l'épargne » à l'envers : à long terme, l'épargne finance l'investissement et la croissance.</li>\n<li>Une <strong>hausse de la demande d'investissement</strong> (innovation, crédit d'impôt) déplace <em>I</em>(<em>r</em>) vers la droite : avec une épargne verticale, <em>r</em>* augmente mais la quantité investie ne change pas.</li>\n<li>Une <strong>baisse d'impôts</strong> Δ<em>T</em> &lt; 0 augmente la consommation de <em>c</em> × |Δ<em>T</em>| et réduit l'épargne nationale d'autant : <em>r</em>* augmente et l'investissement baisse de <em>c</em> × |Δ<em>T</em>|.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> les taux d'intérêt réels de long terme ont fortement baissé dans les économies avancées entre les années 1980 et la fin des années 2010, au point d'être négatifs sur les titres d'État indexés vers 2020. Le cadre des fonds prêtables suggère des explications : hausse de l'épargne désirée (vieillissement, inégalités, « surabondance d'épargne » des pays émergents selon Bernanke 2005) et baisse de la demande d'investissement (ralentissement de la croissance potentielle, biens d'équipement moins chers). C'est l'hypothèse de « stagnation séculaire » remise au goût du jour par Summers (2014). La remontée des taux réels depuis 2022 relance le débat sur le niveau du taux d'intérêt naturel.</div>"
      },
      {
       "titre": "La politique budgétaire à long terme : l'effet d'éviction total",
       "contenu": "<p>Considérons une hausse des dépenses publiques Δ<em>G</em> &gt; 0, financée par emprunt (<em>T</em> inchangé). La production <em>Ȳ</em> ne change pas, puisqu'elle est fixée par l'offre. La consommation ne change pas non plus (le revenu disponible <em>Ȳ</em> − <em>T</em> est le même). L'épargne nationale baisse de Δ<em>G</em> (l'épargne publique diminue). Sur le marché des fonds prêtables, la droite <em>S</em> se déplace vers la gauche ; <em>r</em>* augmente jusqu'à ce que l'investissement baisse exactement de Δ<em>G</em> :</p>\n<p class=\"eq\">Δ<em>I</em> = −Δ<em>G</em></p>\n<p>C'est l'<strong>effet d'éviction total</strong> : chaque euro de dépense publique supplémentaire chasse un euro d'investissement privé. Le multiplicateur budgétaire est nul. La raison est simple : les ressources sont pleinement employées, l'État ne peut obtenir plus de biens qu'en les retirant à quelqu'un, ici à l'investissement, via la hausse du taux d'intérêt.</p>\n<p>Le contraste avec le modèle keynésien est fondamental : à court terme, avec des ressources inemployées et des prix rigides, une hausse de <em>G</em> augmente la production (multiplicateur supérieur à zéro, éviction partielle dans IS-LM). Les deux analyses ne se contredisent pas : elles portent sur des horizons différents.</p>\n<p>Si la dépense est financée par impôt (Δ<em>T</em> = Δ<em>G</em>), l'épargne publique est inchangée mais l'épargne privée baisse de (1 − <em>c</em>) Δ<em>G</em> (le ménage réduit sa consommation de <em>c</em> Δ<em>G</em> et son épargne du reste). L'épargne nationale baisse donc de (1 − <em>c</em>) Δ<em>G</em> : <em>r</em>* augmente moins, et l'investissement baisse de (1 − <em>c</em>) Δ<em>G</em>. La consommation baisse de <em>c</em> Δ<em>G</em> : l'éviction porte cette fois à la fois sur <em>C</em> et sur <em>I</em>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> économie fermée avec <em>Ȳ</em> = 5 000, <em>C</em> = 250 + 0,75 (<em>Y</em> − <em>T</em>), <em>I</em> = 1 000 − 50 <em>r</em> (<em>r</em> en %), <em>G</em> = <em>T</em> = 1 000. (1) Calculer l'épargne publique, privée et nationale, puis <em>r</em>*. (2) <em>G</em> passe à 1 250 sans hausse d'impôt. (3) <em>G</em> et <em>T</em> passent à 1 250.<br><br>(1) <em>C</em> = 250 + 0,75 × 4 000 = 3 250. Épargne privée = 5 000 − 1 000 − 3 250 = 750 ; épargne publique = 0 ; <em>S</em> = 750. Équilibre : 1 000 − 50 <em>r</em> = 750, donc <em>r</em>* = 5 % et <em>I</em> = 750.<br>(2) <em>S</em> = 5 000 − 3 250 − 1 250 = 500 ; 1 000 − 50 <em>r</em> = 500 ⇒ <em>r</em>* = 10 %, <em>I</em> = 500. L'investissement baisse de 250 = Δ<em>G</em> : éviction totale.<br>(3) <em>C</em> = 250 + 0,75 × 3 750 = 3 062,5 ; <em>S</em> = 5 000 − 3 062,5 − 1 250 = 687,5 ; <em>r</em>* = (1 000 − 687,5) / 50 = 6,25 %. <em>I</em> baisse de 62,5 = (1 − 0,75) × 250 et <em>C</em> de 187,5 = 0,75 × 250 ; au total 250 = Δ<em>G</em>.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> en économie classique fermée, l'éviction est TOTALE (Δ<em>I</em> + Δ<em>C</em> = −Δ<em>G</em>) mais elle ne porte pas toujours uniquement sur l'investissement : avec un financement par impôt, une partie passe par la consommation. Ce qui est toujours vrai : Δ<em>Y</em> = 0.</div>"
      },
      {
       "titre": "La dichotomie classique et la neutralité de la monnaie",
       "contenu": "<p>Récapitulons. Les variables <strong>réelles</strong> (production, emploi, salaire réel, taux d'intérêt réel, consommation, investissement) sont toutes déterminées par trois blocs : la technologie (<em>A</em>, <em>F</em>), les dotations (<em>K</em>, <em>L̄</em>) et les préférences et politiques réelles (<em>C</em>(.), <em>I</em>(.), <em>G</em>, <em>T</em>). La monnaie n'apparaît nulle part. Les variables <strong>nominales</strong> (niveau des prix <em>P</em>, salaire nominal <em>W</em>, taux d'intérêt nominal) sont ensuite déterminées par la quantité de monnaie, par exemple via la théorie quantitative <em>M</em> <em>V</em> = <em>P</em> <em>Y</em>.</p>\n<p>Cette séparation est la <strong>dichotomie classique</strong> (l'expression est de Patinkin 1956, qui en a critiqué les versions incohérentes). Elle implique la <strong>neutralité de la monnaie</strong> : une variation de l'offre de monnaie ne modifie que les variables nominales, proportionnellement, sans effet sur les grandeurs réelles. Hume (1752) l'exprimait déjà : doubler la quantité de métal en circulation double les prix, sans rendre le pays plus riche. La monnaie est un « voile » (Say) posé sur les échanges réels.</p>\n<p>La dichotomie est une approximation acceptable du <strong>long terme</strong>. À court terme, de nombreuses preuves empiriques (Friedman et Schwartz 1963 sur l'histoire monétaire américaine, épisodes de désinflation Volcker 1979-1982) montrent que la politique monétaire affecte la production et l'emploi, parce que les prix et salaires nominaux s'ajustent lentement. C'est tout l'objet de la macroéconomie de court terme.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> à long terme, l'économie classique se résout « en cascade » : technologie et facteurs ⇒ <em>Y</em> et salaire réel ; marché des fonds prêtables ⇒ <em>r</em>, <em>C</em>, <em>I</em> ; monnaie ⇒ <em>P</em>. La monnaie est neutre.</div>\n<h4>Limites du cadre</h4>\n<ul>\n<li>Il n'explique pas le chômage involontaire : il faut introduire des imperfections (salaire d'efficience, négociation, frictions d'appariement).</li>\n<li>Il suppose <em>K</em> et <em>A</em> donnés : leur évolution est l'objet des modèles de croissance (Solow 1956, croissance endogène).</li>\n<li>Il ignore les anticipations et l'ouverture : en économie ouverte, l'épargne nationale peut financer l'investissement à l'étranger et le taux d'intérêt est en partie mondial.</li>\n<li>La concurrence parfaite est une hypothèse forte : avec un pouvoir de marché, les facteurs sont payés en deçà de leur productivité marginale et apparaît une rente.</li>\n</ul>"
      }
     ],
     "points_cles": [
      "À long terme, prix et salaires sont flexibles et la production est déterminée par l'offre : Y = A F(K, L).",
      "Rendements d'échelle constants : F(λK, λL) = λF(K, L) ; productivités marginales positives et décroissantes.",
      "Cobb-Douglas Y = A K^α L^(1−α) : PmK = αY/K et PmL = (1−α)Y/L.",
      "L'entreprise concurrentielle égalise la PmL au salaire réel W/P : la demande de travail est décroissante du salaire réel.",
      "Théorème d'Euler : avec des rendements constants, la rémunération des facteurs à leur productivité marginale épuise le produit (profit économique nul).",
      "Avec une Cobb-Douglas, les parts des facteurs sont constantes : 1−α pour le travail (environ 2/3), α pour le capital (environ 1/3).",
      "Épargne nationale S = Y − C − G = épargne privée + épargne publique ; l'équilibre S = I(r) détermine le taux d'intérêt réel.",
      "Une hausse de G financée par emprunt réduit l'épargne nationale, élève r et réduit I d'autant : éviction totale, multiplicateur nul.",
      "Financée par impôt, une hausse de G réduit C de cΔG et I de (1−c)ΔG.",
      "Dichotomie classique : variables réelles déterminées indépendamment de la monnaie ; la monnaie ne détermine que les variables nominales.",
      "Neutralité de la monnaie : bonne approximation du long terme, réfutée à court terme par les rigidités nominales.",
      "Le chômage involontaire n'existe dans le modèle classique que si le salaire réel est bloqué au-dessus de l'équilibre."
     ],
     "lexique": [
      {
       "terme": "Fonction de production",
       "def": "Relation qui associe aux quantités de facteurs (capital, travail) la production maximale compte tenu de la technologie."
      },
      {
       "terme": "Rendements d'échelle constants",
       "def": "Propriété d'une fonction de production telle que multiplier tous les facteurs par λ multiplie la production par λ (homogénéité de degré 1)."
      },
      {
       "terme": "Productivité marginale",
       "def": "Supplément de production obtenu avec une unité supplémentaire d'un facteur, les autres facteurs étant fixés."
      },
      {
       "terme": "Productivité globale des facteurs (PGF)",
       "def": "Terme A de la fonction de production, qui mesure l'efficacité avec laquelle les facteurs sont combinés (technologie, organisation)."
      },
      {
       "terme": "Salaire réel",
       "def": "Salaire nominal divisé par le niveau des prix, W/P : pouvoir d'achat du salaire en unités de bien."
      },
      {
       "terme": "Théorème d'Euler",
       "def": "Pour une fonction homogène de degré 1, la somme des facteurs pondérés par leurs productivités marginales égale la production."
      },
      {
       "terme": "Épargne nationale",
       "def": "Partie du revenu national qui n'est pas consommée par les ménages ni par l'État : S = Y − C − G."
      },
      {
       "terme": "Marché des fonds prêtables",
       "def": "Marché fictif où l'épargne (offre de fonds) rencontre l'investissement (demande de fonds), le prix étant le taux d'intérêt réel."
      },
      {
       "terme": "Effet d'éviction",
       "def": "Réduction de la dépense privée (investissement, consommation) provoquée par une hausse de la dépense publique, via la hausse du taux d'intérêt."
      },
      {
       "terme": "Dichotomie classique",
       "def": "Séparation entre la détermination des variables réelles (par les facteurs réels) et celle des variables nominales (par la monnaie)."
      },
      {
       "terme": "Neutralité de la monnaie",
       "def": "Propriété selon laquelle une variation de la masse monétaire ne modifie que les grandeurs nominales, pas les grandeurs réelles."
      },
      {
       "terme": "Élasticité de substitution",
       "def": "Variation en pourcentage du rapport K/L en réponse à une variation de 1 % du rapport des prix des facteurs ; elle vaut 1 pour une Cobb-Douglas."
      }
     ],
     "qcm": [
      {
       "q": "Pour la fonction Y = A K^0,3 L^0,7, quelle proposition est exacte ?",
       "options": [
        "Les rendements d'échelle sont croissants car A > 1 peut augmenter la production.",
        "La productivité marginale du travail vaut 0,7 Y/L.",
        "La productivité marginale du capital est croissante en K.",
        "La part du capital dans le revenu dépend du niveau de A."
       ],
       "bonnes": [
        1
       ],
       "explication": "En dérivant par rapport à L : 0,7 A K^0,3 L^(−0,3) = 0,7 Y/L. Les exposants somment à 1, donc les rendements sont constants quelle que soit la valeur de A, et la part du capital vaut toujours 0,3."
      },
      {
       "q": "Une entreprise concurrentielle a une PmL égale à 30 − 0,5 L. Le salaire réel est de 20. Combien de travailleurs embauche-t-elle ?",
       "options": [
        "10",
        "40",
        "20",
        "60"
       ],
       "bonnes": [
        2
       ],
       "explication": "Elle égalise PmL et salaire réel : 30 − 0,5 L = 20, soit 0,5 L = 10 et L = 20."
      },
      {
       "q": "Quelles propositions sont exactes à propos du modèle classique ? (deux réponses)",
       "options": [
        "La production est déterminée par la quantité de facteurs et la technologie.",
        "Une hausse de la demande de consommation augmente durablement la production.",
        "Le niveau général des prix n'influence pas l'emploi d'équilibre.",
        "Le taux d'intérêt réel est déterminé par l'offre et la demande de monnaie."
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Y = F(K, L) avec des facteurs donnés ; seul le salaire réel compte pour l'emploi, donc P n'influence pas l'emploi. Une hausse de la demande ne modifie que la composition de la production, et r est déterminé sur le marché des fonds prêtables, pas sur le marché monétaire."
      },
      {
       "q": "Avec une fonction Cobb-Douglas où α = 1/3, le PIB vaut 1 500 et la masse salariale réelle 1 000. Une hausse de 10 % du stock de capital entraîne, toutes choses égales par ailleurs :",
       "options": [
        "une hausse de la part des salaires dans le revenu.",
        "une baisse de la part des salaires car le capital se substitue au travail.",
        "une hausse de 10 % du salaire réel.",
        "une part des salaires inchangée à 2/3."
       ],
       "bonnes": [
        3
       ],
       "explication": "Avec une Cobb-Douglas, la part du travail vaut toujours 1 − α = 2/3, ici 1 000/1 500. Le salaire réel augmente (d'environ 3,2 %, car 1,1^(1/3) ≈ 1,032), mais pas de 10 %, et la répartition ne change pas."
      },
      {
       "q": "Dans le modèle classique, l'État augmente G de 100 sans modifier les impôts. Quel est l'effet sur l'investissement ?",
       "options": [
        "Il baisse de 100.",
        "Il augmente de 100 grâce au multiplicateur.",
        "Il baisse de 100 multiplié par la propension marginale à consommer.",
        "Il reste inchangé car la production s'ajuste."
       ],
       "bonnes": [
        0
       ],
       "explication": "Y et C sont inchangés, donc l'épargne nationale baisse de 100. Le taux d'intérêt réel monte jusqu'à ce que I baisse de 100 : éviction totale."
      },
      {
       "q": "Y = 4 000, T = 800, G = 1 000, C = 200 + 0,8 (Y − T). Quelle est l'épargne nationale ?",
       "options": [
        "560",
        "240",
        "440",
        "760"
       ],
       "bonnes": [
        1
       ],
       "explication": "C = 200 + 0,8 × 3 200 = 2 760. S = Y − C − G = 4 000 − 2 760 − 1 000 = 240. L'épargne privée vaut 440 et l'épargne publique −200."
      },
      {
       "q": "Quelles propositions sont exactes concernant le marché des fonds prêtables dans sa version de base ? (deux réponses)",
       "options": [
        "Une hausse de la demande d'investissement à épargne inélastique augmente r sans modifier la quantité investie.",
        "Une baisse d'impôts augmente l'épargne nationale.",
        "Une hausse de l'épargne privée fait baisser le taux d'intérêt réel et augmente l'investissement.",
        "Le taux d'intérêt réel est fixé par la banque centrale à long terme."
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Avec S vertical, un déplacement de I(r) ne change que le prix r ; un déplacement de S vers la droite fait baisser r et augmenter I. Une baisse d'impôts réduit l'épargne nationale de c fois la baisse d'impôts, et la banque centrale ne contrôle pas r à long terme."
      },
      {
       "q": "Que signifie le théorème d'Euler appliqué à une fonction de production à rendements constants ?",
       "options": [
        "Le profit économique est maximal lorsque les rendements sont constants.",
        "Les productivités marginales sont constantes.",
        "La production croît au même rythme que le capital.",
        "La rémunération de chaque facteur à sa productivité marginale épuise exactement la production."
       ],
       "bonnes": [
        3
       ],
       "explication": "Pour F homogène de degré 1, F(K, L) = K × PmK + L × PmL : il ne reste aucun profit économique. Les productivités marginales restent décroissantes."
      },
      {
       "q": "La masse monétaire double de façon permanente dans une économie classique. Quelle est la conséquence de long terme ?",
       "options": [
        "Le salaire réel double.",
        "Le niveau des prix et le salaire nominal doublent, l'emploi est inchangé.",
        "Le taux d'intérêt réel baisse durablement.",
        "La production augmente car les ménages se sentent plus riches."
       ],
       "bonnes": [
        1
       ],
       "explication": "C'est la neutralité de la monnaie : les variables nominales sont multipliées par 2, W/P et les variables réelles sont inchangées."
      },
      {
       "q": "Dans une économie classique (C = 100 + 0,6 (Y − T)), G et T augmentent simultanément de 50. Quelles propositions sont exactes ? (deux réponses)",
       "options": [
        "L'investissement baisse de 20.",
        "La production augmente de 50 (multiplicateur du budget équilibré).",
        "La consommation baisse de 30.",
        "Le taux d'intérêt réel est inchangé car le budget reste équilibré."
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "C baisse de 0,6 × 50 = 30 ; l'épargne privée baisse de 0,4 × 50 = 20, l'épargne publique est inchangée, donc S baisse de 20, r monte et I baisse de 20. Y est fixé par l'offre : le multiplicateur du budget équilibré est un résultat keynésien."
      },
      {
       "q": "Pourquoi la fonction Cobb-Douglas est-elle compatible avec le fait stylisé d'une part du travail à peu près stable ?",
       "options": [
        "Parce qu'elle a des rendements d'échelle croissants.",
        "Parce que le salaire réel y est constant.",
        "Parce que son élasticité de substitution entre K et L vaut 1, de sorte que les parts ne dépendent pas de K/L.",
        "Parce qu'elle suppose une offre de travail parfaitement inélastique."
       ],
       "bonnes": [
        2
       ],
       "explication": "Avec une élasticité de substitution unitaire, une hausse de K/L est exactement compensée par une baisse du prix relatif du capital : la part αY reste constante. Le salaire réel, lui, augmente avec K."
      }
     ]
    },
    {
     "id": "mac2-monnaie-inflation",
     "titre": "Monnaie et inflation",
     "duree": 50,
     "niveau": "L1",
     "objectifs": [
      "Définir la monnaie par ses fonctions et distinguer ses formes et les agrégats monétaires M1, M2, M3.",
      "Expliquer la création monétaire par les banques commerciales et le rôle de la banque centrale (multiplicateur, diviseur, refinancement).",
      "Utiliser la théorie quantitative MV = PY pour relier croissance monétaire et inflation à long terme.",
      "Appliquer l'équation de Fisher et distinguer taux réel ex ante et ex post.",
      "Analyser le seigneuriage, la taxe inflationniste et la dynamique des hyperinflations (Cagan 1956).",
      "Distinguer neutralité et superneutralité de la monnaie et discuter les coûts de l'inflation."
     ],
     "sections": [
      {
       "titre": "Qu'est-ce que la monnaie ? Fonctions et formes",
       "contenu": "<p>La <strong>monnaie</strong> est l'ensemble des actifs généralement acceptés en paiement des biens, des services et des dettes. Elle se définit par ses trois fonctions, déjà distinguées par Aristote et systématisées par les économistes classiques :</p>\n<ul>\n<li><strong>Intermédiaire des échanges</strong> : elle supprime l'exigence de la « double coïncidence des besoins » propre au troc (Jevons 1875). C'est la fonction qui la distingue des autres actifs.</li>\n<li><strong>Unité de compte</strong> : elle sert d'étalon pour exprimer tous les prix. Avec <em>n</em> biens, le troc nécessite <em>n</em>(<em>n</em> − 1) / 2 prix relatifs ; une unité de compte réduit ce nombre à <em>n</em> − 1 (ou <em>n</em> prix monétaires).</li>\n<li><strong>Réserve de valeur</strong> : elle permet de transférer du pouvoir d'achat dans le temps. Elle partage cette fonction avec d'autres actifs (obligations, actions, immobilier), souvent plus rémunérateurs, mais elle est le plus <strong>liquide</strong> de tous : elle peut être échangée immédiatement, sans coût ni perte de valeur nominale.</li>\n</ul>\n<p>Les <strong>formes</strong> de la monnaie ont évolué. La <strong>monnaie-marchandise</strong> a une valeur intrinsèque (bétail, métaux précieux). La <strong>monnaie fiduciaire</strong> (billets, pièces) repose sur la confiance (<em>fiducia</em>) dans l'émetteur ; depuis la fin de la convertibilité-or du dollar (1971), les monnaies sont inconvertibles et doivent leur valeur au cours légal et à la crédibilité de la banque centrale. La <strong>monnaie scripturale</strong> est constituée des dépôts à vue inscrits en compte dans les banques, mobilisables par chèque, carte, virement ou prélèvement. Elle représente l'essentiel de la masse monétaire. La <strong>monnaie électronique</strong> désigne au sens strict des unités stockées sur un support (porte-monnaie électronique) ; les crypto-actifs comme le bitcoin, en revanche, remplissent mal les fonctions de la monnaie (volatilité extrême, faible acceptation) et ne sont pas comptés dans la masse monétaire. Plusieurs banques centrales, dont la BCE, préparent une <strong>monnaie numérique de banque centrale</strong> (euro numérique).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> les moyens de paiement (chèque, carte bancaire, virement) ne sont PAS de la monnaie : ce sont des instruments qui font circuler la monnaie scripturale (le dépôt). De même, la « richesse » d'un ménage n'est pas sa « monnaie » : seule la fraction la plus liquide de son patrimoine est de la monnaie.</div>"
      },
      {
       "titre": "Les agrégats monétaires",
       "contenu": "<p>Où s'arrête la monnaie ? Les banques centrales mesurent la <strong>masse monétaire</strong> par des <strong>agrégats</strong> emboîtés, classés par liquidité décroissante. Pour la zone euro (définitions harmonisées de la BCE) :</p>\n<table>\n<thead><tr><th>Agrégat</th><th>Composition</th><th>Logique</th></tr></thead>\n<tbody>\n<tr><td>M1</td><td>Billets et pièces en circulation + dépôts à vue</td><td>Moyens de paiement immédiats</td></tr>\n<tr><td>M2</td><td>M1 + dépôts à terme d'une durée inférieure ou égale à 2 ans + dépôts remboursables avec préavis inférieur ou égal à 3 mois (livrets d'épargne en France : livret A, LDDS, etc.)</td><td>Quasi-monnaie, convertible rapidement et sans perte</td></tr>\n<tr><td>M3</td><td>M2 + pensions (accords de rachat), parts de fonds monétaires, titres de créance d'une durée inférieure ou égale à 2 ans</td><td>Placements monétaires négociables</td></tr>\n</tbody>\n</table>\n<p>On distingue aussi la <strong>base monétaire</strong> (ou monnaie centrale), notée <em>H</em> ou <em>M0</em> : billets en circulation et réserves des banques sur leurs comptes à la banque centrale. C'est la seule monnaie que la banque centrale émet directement. La masse monétaire au sens large est bien plus grande que la base : en zone euro, les billets ne représentent qu'environ un dixième de M3 (ordre de grandeur des années 2020).</p>\n<p>La BCE a longtemps affiché une valeur de référence de 4,5 % pour la croissance annuelle de M3 (le « premier pilier » de sa stratégie de 1998), fondée sur une croissance potentielle de 2 à 2,5 %, un objectif d'inflation inférieur à 2 % et une baisse tendancielle de la vitesse de circulation. Son importance a été réduite dès 2003 puis dans la revue stratégique de 2021, faute de relation stable entre M3 et l'inflation à court et moyen terme.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> M1 ⊂ M2 ⊂ M3. La frontière entre monnaie et placement est conventionnelle ; plus l'agrégat est large, plus il contient des actifs rémunérés et moins il correspond à des moyens de paiement.</div>"
      },
      {
       "titre": "La création monétaire : les crédits font les dépôts",
       "contenu": "<p>La monnaie scripturale est créée par les <strong>banques commerciales</strong> lorsqu'elles accordent un crédit : la banque inscrit simultanément une créance à son actif (le prêt) et un dépôt à vue du même montant à son passif. Elle crée ce dépôt « d'un jeu d'écriture », sans prélever sur des fonds préexistants. D'où l'adage : <strong>les crédits font les dépôts</strong>. Symétriquement, le remboursement d'un crédit <strong>détruit</strong> de la monnaie. Les banques créent aussi de la monnaie en achetant des titres ou des devises (contreparties de la masse monétaire : crédits à l'économie, créances sur l'État, créances sur l'extérieur).</p>\n<p>Cette création est limitée : (1) par la demande de crédit solvable et la rentabilité des prêts, (2) par les <strong>fuites</strong> en monnaie centrale : quand un client retire des billets ou paie un client d'une autre banque, la banque doit lui céder des réserves ; (3) par les <strong>réserves obligatoires</strong> (1 % des dépôts dans la zone euro depuis janvier 2012) ; (4) par la réglementation prudentielle (ratios de fonds propres et de liquidité de Bâle III).</p>\n<h4>Le multiplicateur de crédit</h4>\n<p>La vision traditionnelle des manuels part de la base monétaire. Soit <em>c</em> le rapport billets / dépôts souhaité par le public et θ le rapport réserves / dépôts des banques. On a <em>M</em> = <em>BB</em> + <em>D</em> (billets + dépôts) et <em>H</em> = <em>BB</em> + <em>R</em> (billets + réserves). Avec <em>BB</em> = <em>c</em> <em>D</em> et <em>R</em> = θ <em>D</em> :</p>\n<p class=\"eq\"><em>M</em> / <em>H</em> = (<em>c</em> + 1) <em>D</em> / ((<em>c</em> + θ) <em>D</em>) &nbsp;⇒&nbsp; <em>M</em> = [(1 + <em>c</em>) / (<em>c</em> + θ)] × <em>H</em></p>\n<p>Le coefficient <em>m</em> = (1 + <em>c</em>) / (<em>c</em> + θ) &gt; 1 est le <strong>multiplicateur monétaire</strong> (ou de crédit). Sans billets (<em>c</em> = 0), <em>m</em> = 1 / θ. Dans cette lecture, la banque centrale fixe la base, et la masse monétaire en découle mécaniquement.</p>\n<h4>Le diviseur de crédit</h4>\n<p>La lecture contemporaine renverse la causalité : les banques accordent d'abord des crédits, puis se procurent la monnaie centrale nécessaire (réserves, billets) auprès de la banque centrale, qui la fournit au taux qu'elle fixe. La même relation se lit alors <em>H</em> = <em>M</em> / <em>m</em> : c'est le <strong>diviseur de crédit</strong>. La banque centrale ne contrôle pas la quantité de monnaie mais son <strong>prix</strong> (le taux directeur), et agit sur la demande de crédit par ce prix. La Banque d'Angleterre (McLeay, Radia et Thomas, 2014) a explicitement défendu cette vision « endogène » de la monnaie, ancienne chez les post-keynésiens.</p>\n<h4>La banque centrale et le refinancement</h4>\n<p>L'Eurosystème (BCE et banques centrales nationales, dont la Banque de France) fournit la monnaie centrale par les <strong>opérations de refinancement</strong> (prêts aux banques contre garanties, au taux des opérations principales de refinancement) et, depuis 2015, par des <strong>achats de titres</strong> massifs (assouplissement quantitatif). Les réserves excédentaires ont alors explosé et le taux pertinent est devenu le <strong>taux de la facilité de dépôt</strong>, qui rémunère ces réserves (système de « plancher »). L'épisode a montré les limites du multiplicateur : la base monétaire de la zone euro a été multipliée par plus de quatre entre 2014 et 2022, sans que M3 ou l'inflation ne suivent dans la même proportion, car <em>m</em> a chuté.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> le public détient des billets égaux à 20 % de ses dépôts (<em>c</em> = 0,2) et les banques gardent des réserves égales à 5 % des dépôts (θ = 0,05). La base monétaire vaut 100. (1) Calculer le multiplicateur, la masse monétaire, les dépôts et les billets. (2) θ passe à 10 %. (3) Interpréter en termes de diviseur.<br><br>(1) <em>m</em> = 1,2 / 0,25 = 4,8 ; <em>M</em> = 480. <em>D</em> = <em>M</em> / (1 + <em>c</em>) = 400 ; billets = 80 ; réserves = 0,05 × 400 = 20 ; vérification : 80 + 20 = 100 = <em>H</em>.<br>(2) <em>m</em> = 1,2 / 0,3 = 4 ; <em>M</em> = 400 : la masse monétaire baisse de 1/6 à base inchangée.<br>(3) Si les banques veulent accorder des crédits portant <em>M</em> à 480 avec θ = 0,1, elles ont besoin d'une base de 480 / 4 = 120 : elles devront se refinancer pour 20 de plus auprès de la banque centrale, au taux directeur.</div>"
      },
      {
       "titre": "La théorie quantitative de la monnaie",
       "contenu": "<p>L'<strong>équation des échanges</strong>, formalisée par Fisher (1911), est une identité comptable :</p>\n<p class=\"eq\"><em>M</em> <em>V</em> = <em>P</em> <em>Y</em></p>\n<p>où <em>M</em> est la masse monétaire, <em>P</em> <em>Y</em> le PIB nominal et <em>V</em> la <strong>vitesse de circulation</strong> de la monnaie, définie par <em>V</em> = <em>P</em> <em>Y</em> / <em>M</em> : nombre moyen de fois où une unité monétaire sert à acheter la production finale au cours d'une année. L'école de Cambridge (Marshall, Pigou) en propose une version en termes de <strong>demande de monnaie</strong> : (<em>M</em> / <em>P</em>)<sup>d</sup> = <em>k</em> <em>Y</em>, avec <em>k</em> = 1 / <em>V</em>.</p>\n<p>L'identité devient une <strong>théorie</strong> avec deux hypothèses : (1) <em>V</em> est stable (déterminée par les techniques de paiement, qui évoluent lentement) ; (2) <em>Y</em> est déterminé par les facteurs réels (dichotomie classique). Alors <em>M</em> détermine <em>P</em>. En taux de croissance (dérivée logarithmique) :</p>\n<p class=\"eq\">g<sub><em>M</em></sub> + g<sub><em>V</em></sub> = π + g<sub><em>Y</em></sub> &nbsp;⇒&nbsp; π = g<sub><em>M</em></sub> − g<sub><em>Y</em></sub> (si g<sub><em>V</em></sub> = 0)</p>\n<p>L'inflation de long terme est égale à l'excès de la croissance monétaire sur la croissance réelle. D'où la formule célèbre de Friedman (1963) : « l'inflation est toujours et partout un phénomène monétaire ».</p>\n<p><strong>Validation empirique.</strong> Sur longue période et en coupe internationale, la corrélation entre croissance monétaire et inflation est très forte et proche de la pente unitaire (McCandless et Weber 1995 sur 110 pays et 30 ans), surtout lorsque l'inflation est élevée. En revanche, à court terme et à faible inflation, la vitesse de circulation est instable (innovations financières, variations du taux d'intérêt) et la relation se brouille. C'est pourquoi les banques centrales ont abandonné les objectifs de masse monétaire au profit du ciblage d'inflation par le taux d'intérêt.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> après 2020, la masse monétaire a fortement accéléré aux États-Unis (M2 a augmenté d'environ un quart en 2020) et dans la zone euro, puis l'inflation a atteint 9,1 % sur un an aux États-Unis en juin 2022 (indice CPI) et 10,6 % dans la zone euro en octobre 2022 (IPCH). Les monétaristes y ont vu une validation de la théorie quantitative ; d'autres économistes soulignent le rôle des chocs d'offre (énergie, chaînes d'approvisionnement) et de la demande publique. Le débat illustre que la relation monnaie-prix est robuste à long terme mais difficile à exploiter à court terme.</div>"
      },
      {
       "titre": "Taux d'intérêt nominal et réel : l'effet Fisher",
       "contenu": "<p>Le <strong>taux d'intérêt nominal</strong> <em>i</em> est le rendement d'un prêt exprimé en monnaie. Le <strong>taux d'intérêt réel</strong> <em>r</em> est ce rendement exprimé en biens. Un euro prêté rapporte 1 + <em>i</em> euros, qui permettent d'acheter (1 + <em>i</em>) / (1 + π) unités de bien si les prix augmentent de π. Donc :</p>\n<p class=\"eq\">1 + <em>r</em> = (1 + <em>i</em>) / (1 + π) &nbsp;⇒&nbsp; <em>r</em> ≈ <em>i</em> − π</p>\n<p>l'approximation étant valable pour des taux faibles (on néglige le produit <em>r</em> π).</p>\n<h4>Ex ante et ex post</h4>\n<p>Au moment du contrat, l'inflation n'est pas connue. Le <strong>taux réel ex ante</strong> est <em>r</em><sup>e</sup> = <em>i</em> − π<sup>e</sup>, fondé sur l'inflation anticipée ; c'est lui qui guide les décisions d'épargne et d'investissement. Le <strong>taux réel ex post</strong> est <em>i</em> − π, calculé avec l'inflation effective. Une inflation supérieure aux anticipations transfère de la richesse des créanciers vers les débiteurs : les années 1970 ont ainsi vu des taux réels ex post négatifs qui ont allégé les dettes des ménages et des États ; le retour de l'inflation en 2022 a joué le même rôle.</p>\n<h4>L'effet Fisher</h4>\n<p>On peut écrire l'<strong>équation de Fisher</strong> (1896, 1930) :</p>\n<p class=\"eq\"><em>i</em> = <em>r</em> + π<sup>e</sup></p>\n<p>À long terme, le taux réel <em>r</em> est déterminé par le marché des fonds prêtables, indépendamment de la monnaie. Une hausse permanente de la croissance monétaire de 1 point élève l'inflation de 1 point (théorie quantitative), donc les anticipations, donc le taux nominal de 1 point : c'est l'<strong>effet Fisher</strong>. Empiriquement, il est bien vérifié à long terme (les pays à forte inflation ont des taux nominaux élevés) mais moins à court terme, où la politique monétaire modifie le taux réel.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> la masse monétaire croît de 6 % par an, la production de 2 %, la vitesse est stable et le taux réel d'équilibre vaut 2 %. (1) Inflation et taux nominal de long terme ? (2) Un épargnant a placé à 5 % nominal en anticipant 3 % d'inflation ; l'inflation effective est de 7 %. Taux réel ex ante et ex post ?<br><br>(1) π = 6 − 2 = 4 % ; <em>i</em> = 2 + 4 = 6 %.<br>(2) Ex ante : 5 − 3 = 2 %. Ex post : approximativement 5 − 7 = −2 % ; exactement 1,05 / 1,07 − 1 ≈ −1,87 %. L'épargnant a perdu du pouvoir d'achat ; l'emprunteur a gagné.</div>"
      },
      {
       "titre": "Demande de monnaie, seigneuriage et taxe inflationniste",
       "contenu": "<p>Détenir de la monnaie (non rémunérée) plutôt qu'une obligation fait perdre le taux nominal <em>i</em> : c'est le <strong>coût d'opportunité</strong> de la monnaie. Il dépend du taux <strong>nominal</strong> et non du taux réel, car la monnaie perd en plus π de pouvoir d'achat par rapport aux biens, alors que l'obligation rapporte <em>r</em> + π. La demande de encaisses réelles s'écrit donc :</p>\n<p class=\"eq\"><em>M</em> / <em>P</em> = <em>L</em>(<em>i</em>, <em>Y</em>), décroissante de <em>i</em> et croissante de <em>Y</em></p>\n<p>Le modèle de Baumol (1952) et Tobin (1956) en donne un fondement : un agent qui arbitre entre le coût de transaction des retraits et l'intérêt perdu détient une encaisse moyenne proportionnelle à la racine carrée de <em>Y</em> / <em>i</em>. Par l'effet Fisher, une inflation plus élevée augmente <em>i</em> et réduit la demande d'encaisses réelles, ce qui augmente la vitesse de circulation.</p>\n<h4>Seigneuriage</h4>\n<p>Le <strong>seigneuriage</strong> est le revenu que l'État tire de l'émission de monnaie (le terme vient du droit du seigneur de frapper monnaie). En termes réels :</p>\n<p class=\"eq\">Seigneuriage = Δ<em>M</em> / <em>P</em> = (Δ<em>M</em> / <em>M</em>) × (<em>M</em> / <em>P</em>)</p>\n<p>soit le produit du taux de croissance monétaire et des encaisses réelles. À l'état stationnaire (encaisses réelles constantes), g<sub><em>M</em></sub> = π et le seigneuriage égale π × <em>M</em> / <em>P</em> : c'est la <strong>taxe inflationniste</strong>, dont l'assiette est l'encaisse réelle et le taux, l'inflation. Les détenteurs de monnaie la paient par la perte de pouvoir d'achat de leurs encaisses. Dans les pays avancés, le seigneuriage est faible (de l'ordre de quelques dixièmes de point de PIB) ; il est une ressource importante des États qui n'ont pas accès aux marchés financiers ni à un système fiscal efficace.</p>\n<h4>La courbe de Laffer de l'inflation</h4>\n<p>Augmenter le taux de la taxe réduit l'assiette : quand π monte, les agents fuient la monnaie. Avec la demande de monnaie de Cagan, <em>M</em> / <em>P</em> = <em>Y</em> e<sup>−a π</sup> (a &gt; 0), la taxe inflationniste vaut π <em>Y</em> e<sup>−a π</sup>. Elle est maximale lorsque sa dérivée s'annule : e<sup>−a π</sup>(1 − a π) = 0, soit π = 1 / a. Au-delà, plus d'inflation rapporte moins de recettes réelles.</p>"
      },
      {
       "titre": "Les hyperinflations",
       "contenu": "<p>Cagan (1956) définit une <strong>hyperinflation</strong> comme une période où la hausse des prix dépasse 50 % par mois (soit environ 13 000 % par an) ; elle prend fin quand l'inflation repasse sous ce seuil pendant au moins un an. Les épisodes historiques les plus extrêmes sont l'Allemagne en 1922-1923, la Hongrie en 1945-1946 (record absolu, les prix doublant environ toutes les quinze heures au pic de juillet 1946) et le Zimbabwe en 2007-2008 ; plus récemment le Venezuela à partir de 2016.</p>\n<h4>Le mécanisme</h4>\n<ol>\n<li>Un État fait face à un déficit important qu'il ne peut financer ni par l'impôt (guerre, réparations, effondrement de l'appareil fiscal) ni par l'emprunt : il le monétise.</li>\n<li>La croissance monétaire élève l'inflation et l'inflation anticipée ; les agents réduisent leurs encaisses réelles (dépensent leur monnaie au plus vite, recourent aux devises étrangères).</li>\n<li>L'assiette de la taxe inflationniste se réduit, ce qui oblige à accélérer encore l'émission pour obtenir le même seigneuriage réel. De plus, l'<strong>effet Olivera-Tanzi</strong> érode les recettes fiscales réelles, perçues avec retard.</li>\n<li>Si le déficit à financer dépasse le seigneuriage maximal (le sommet de la courbe de Laffer), il n'existe plus d'équilibre stationnaire : l'inflation explose.</li>\n</ol>\n<p>Cagan a estimé, pour sept hyperinflations, la demande de monnaie ln(<em>M</em> / <em>P</em>) = −a π<sup>e</sup> + constante, avec des anticipations <strong>adaptatives</strong>. Il trouve que les taux d'inflation effectifs ont généralement dépassé le taux qui maximise le seigneuriage, un paradoxe qui s'explique en partie par le retard d'ajustement des anticipations.</p>\n<h4>La sortie</h4>\n<p>Sargent (1982), dans « The End of Four Big Inflations » (Autriche, Hongrie, Pologne, Allemagne après 1918), montre que les hyperinflations ont cessé brutalement, sans récession massive, lorsqu'un <strong>changement de régime</strong> crédible a été mis en place : réforme fiscale assurant l'équilibre budgétaire, banque centrale indépendante interdite de financer l'État, nouvelle monnaie (le Rentenmark allemand de novembre 1923). La crédibilité, en modifiant immédiatement les anticipations, est la clé.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> en Allemagne, le dollar valait environ 4,2 marks en 1914 et 4 200 milliards de marks en novembre 1923 ; le Rentenmark, introduit ce même mois, a été échangé contre 1 000 milliards de marks-papier, et la stabilisation a été quasi immédiate. L'épisode a durablement marqué la culture monétaire allemande et explique en partie l'insistance sur l'indépendance de la banque centrale et l'interdiction du financement monétaire des États (article 123 du traité sur le fonctionnement de l'Union européenne).</div>"
      },
      {
       "titre": "Neutralité, superneutralité et coûts de l'inflation",
       "contenu": "<p>La <strong>neutralité</strong> de la monnaie signifie qu'un changement ponctuel du <strong>niveau</strong> de la masse monétaire ne modifie pas les variables réelles à long terme. La <strong>superneutralité</strong> est plus exigeante : un changement du <strong>taux de croissance</strong> de la masse monétaire (donc de l'inflation) n'affecte pas non plus les variables réelles d'état stationnaire. La superneutralité est en réalité difficile à défendre : une inflation plus forte élève le taux nominal, réduit les encaisses réelles et modifie le comportement des agents. L'<strong>effet Mundell-Tobin</strong> (1963, 1965) va jusqu'à suggérer qu'une inflation plus élevée, en rendant la monnaie moins attractive, pousse les ménages vers le capital et accroît l'investissement ; à l'inverse, Stockman (1981) montre que si la monnaie sert à acheter des biens d'investissement (contrainte d'encaisse préalable), l'inflation réduit le capital.</p>\n<h4>Les coûts de l'inflation anticipée</h4>\n<ul>\n<li><strong>Coûts d'usure</strong> (« shoe-leather costs ») : les agents réduisent leurs encaisses et multiplient les opérations de retrait.</li>\n<li><strong>Coûts de catalogue</strong> (« menu costs ») : il faut changer les prix plus souvent.</li>\n<li><strong>Dispersion des prix relatifs</strong> : les prix étant révisés à des dates différentes, les prix relatifs s'écartent de leurs valeurs efficaces.</li>\n<li><strong>Distorsions fiscales</strong> : la fiscalité étant largement nominale, l'inflation taxe des plus-values purement nominales et alourdit l'imposition effective de l'épargne.</li>\n<li><strong>Brouillage de l'unité de compte</strong> : calculs économiques et contrats à long terme plus difficiles.</li>\n</ul>\n<h4>Les coûts de l'inflation non anticipée</h4>\n<p>Elle redistribue arbitrairement la richesse des créanciers vers les débiteurs et des titulaires de revenus fixes vers les autres ; une inflation élevée est aussi plus <strong>variable</strong>, ce qui accroît l'incertitude et la prime de risque. Ces coûts justifient l'objectif de stabilité des prix (2 % à moyen terme pour la BCE depuis 2021, objectif symétrique). Pourquoi pas zéro ? Parce que les indices surestiment légèrement l'inflation (biais de qualité), qu'une inflation modérée facilite la baisse des salaires réels lorsque les salaires nominaux sont rigides à la baisse, et qu'elle éloigne le taux nominal de sa borne inférieure. Le coût de la <strong>déflation</strong> est aussi pris au sérieux : dette réelle alourdie (Fisher 1933, « debt deflation ») et report des achats.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> à long terme, π = g<sub>M</sub> − g<sub>Y</sub> (à vitesse constante) et <em>i</em> = <em>r</em> + π<sup>e</sup>. La monnaie est neutre à long terme, mais pas superneutre au sens strict : l'inflation a des coûts réels même lorsqu'elle est anticipée.</div>"
      }
     ],
     "points_cles": [
      "La monnaie remplit trois fonctions : intermédiaire des échanges, unité de compte, réserve de valeur ; sa spécificité est la liquidité parfaite.",
      "Agrégats emboîtés de la BCE : M1 (billets, pièces, dépôts à vue) ⊂ M2 (+ dépôts à terme ≤ 2 ans et livrets) ⊂ M3 (+ titres négociables à court terme).",
      "Les crédits font les dépôts : une banque crée de la monnaie scripturale en accordant un prêt ; le remboursement la détruit.",
      "Multiplicateur : M = [(1 + c) / (c + θ)] H ; dans la vision du diviseur, la banque centrale fournit la base demandée au prix qu'elle fixe.",
      "Théorie quantitative : MV = PY ; à vitesse constante et production fixée par l'offre, π = gM − gY.",
      "La relation monnaie-inflation est forte à long terme et en coupe internationale, faible à court terme à basse inflation.",
      "Taux réel : 1 + r = (1 + i)/(1 + π), soit r ≈ i − π ; ex ante avec l'inflation anticipée, ex post avec l'inflation réalisée.",
      "Effet Fisher : à long terme, une hausse d'un point de l'inflation anticipée élève le taux nominal d'un point.",
      "Le coût d'opportunité de la monnaie est le taux nominal i ; la demande d'encaisses réelles décroît avec i.",
      "Seigneuriage = ΔM/P ; à l'état stationnaire, il égale la taxe inflationniste π × M/P, maximale pour π = 1/a avec la demande de Cagan.",
      "Hyperinflation (Cagan 1956) : plus de 50 % par mois ; origine budgétaire, sortie par un changement de régime crédible (Sargent 1982).",
      "Neutralité : le niveau de M n'affecte pas les variables réelles ; superneutralité : son taux de croissance non plus (hypothèse plus fragile)."
     ],
     "lexique": [
      {
       "terme": "Liquidité",
       "def": "Facilité avec laquelle un actif peut être échangé contre des biens ou d'autres actifs, rapidement et sans perte de valeur."
      },
      {
       "terme": "Monnaie scripturale",
       "def": "Monnaie constituée des dépôts à vue inscrits en compte dans les banques ; elle représente l'essentiel de la masse monétaire."
      },
      {
       "terme": "Base monétaire",
       "def": "Monnaie émise par la banque centrale : billets en circulation et réserves des banques en compte à la banque centrale."
      },
      {
       "terme": "Multiplicateur monétaire",
       "def": "Rapport entre la masse monétaire et la base monétaire, égal à (1 + c)/(c + θ)."
      },
      {
       "terme": "Refinancement",
       "def": "Fourniture de monnaie centrale par la banque centrale aux banques, par des prêts garantis à un taux directeur."
      },
      {
       "terme": "Vitesse de circulation",
       "def": "Rapport du PIB nominal à la masse monétaire, V = PY/M."
      },
      {
       "terme": "Effet Fisher",
       "def": "Ajustement un pour un du taux d'intérêt nominal à l'inflation anticipée, le taux réel étant inchangé."
      },
      {
       "terme": "Taux réel ex ante",
       "def": "Taux nominal diminué de l'inflation anticipée au moment de la décision."
      },
      {
       "terme": "Seigneuriage",
       "def": "Revenu réel que l'émetteur tire de la création de monnaie, ΔM/P."
      },
      {
       "terme": "Taxe inflationniste",
       "def": "Perte de pouvoir d'achat subie par les détenteurs de monnaie, égale à l'inflation multipliée par les encaisses réelles."
      },
      {
       "terme": "Hyperinflation",
       "def": "Selon Cagan (1956), période où les prix augmentent de plus de 50 % par mois."
      },
      {
       "terme": "Superneutralité",
       "def": "Propriété selon laquelle le taux de croissance de la masse monétaire n'affecte pas les variables réelles d'état stationnaire."
      },
      {
       "terme": "Effet Olivera-Tanzi",
       "def": "Érosion des recettes fiscales réelles par l'inflation, du fait du délai entre fait générateur et paiement de l'impôt."
      }
     ],
     "qcm": [
      {
       "q": "Quelle proposition est exacte à propos de la monnaie ?",
       "options": [
        "La carte bancaire fait partie de M1.",
        "Les livrets d'épargne réglementés sont inclus dans M1.",
        "Les actions cotées sont incluses dans M3 car elles sont liquides.",
        "La fonction d'intermédiaire des échanges est celle qui distingue la monnaie des autres actifs."
       ],
       "bonnes": [
        3
       ],
       "explication": "Les autres actifs peuvent servir de réserve de valeur, mais seule la monnaie est acceptée en paiement. La carte est un instrument de paiement, les livrets sont dans M2 et les actions ne sont dans aucun agrégat."
      },
      {
       "q": "Une banque accorde un crédit de 10 000 euros à une entreprise, créditée sur son compte à vue. Quel est l'effet immédiat ?",
       "options": [
        "La masse monétaire est inchangée car la banque prête l'épargne de ses déposants.",
        "La masse monétaire augmente de 10 000 euros.",
        "La base monétaire augmente de 10 000 euros.",
        "La masse monétaire augmente de 10 000 euros multipliés par le multiplicateur."
       ],
       "bonnes": [
        1
       ],
       "explication": "La banque inscrit une créance à l'actif et un dépôt de 10 000 au passif : de la monnaie scripturale est créée. La base n'augmente que si la banque se refinance ensuite auprès de la banque centrale."
      },
      {
       "q": "Le public détient des billets à hauteur de 25 % de ses dépôts et les banques des réserves de 5 % des dépôts. La base vaut 300. Quelle est la masse monétaire ?",
       "options": [
        "1 250",
        "1 500",
        "6 000",
        "1 200"
       ],
       "bonnes": [
        0
       ],
       "explication": "m = (1 + 0,25)/(0,25 + 0,05) = 1,25/0,3 ≈ 4,17 ; M = 4,17 × 300 = 1 250."
      },
      {
       "q": "La masse monétaire croît de 8 %, la production de 3 %, et la vitesse de circulation augmente de 1 % par an. Quel est le taux d'inflation selon la théorie quantitative ?",
       "options": [
        "4 %",
        "5 %",
        "11 %",
        "6 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "gM + gV = π + gY, donc π = 8 + 1 − 3 = 6 %. Oublier la vitesse donne 5 %."
      },
      {
       "q": "Quelles propositions sont exactes concernant la théorie quantitative ? (deux réponses)",
       "options": [
        "MV = PY est une identité comptable qui ne devient une théorie qu'avec des hypothèses sur V et Y.",
        "Elle implique qu'une hausse de la masse monétaire augmente la production à long terme.",
        "La relation entre croissance monétaire et inflation est plus nette à long terme et pour des inflations élevées.",
        "Elle a conduit les banques centrales actuelles à cibler la croissance de M3 plutôt que les taux d'intérêt."
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "L'identité devient une théorie avec V stable et Y déterminé par l'offre ; la corrélation est très forte sur longue période et en inflation élevée. La monnaie y est neutre, et les banques centrales ciblent aujourd'hui l'inflation via les taux, faute de vitesse stable."
      },
      {
       "q": "Un prêt est consenti à 4 % nominal. L'inflation anticipée était de 2 %, l'inflation réalisée est de 6 %. Quelles propositions sont exactes ? (deux réponses)",
       "options": [
        "Le taux réel ex ante était d'environ 2 %.",
        "Le taux réel ex post est d'environ +2 %.",
        "Le prêteur a été avantagé par la surprise d'inflation.",
        "Le taux réel ex post est d'environ −2 %."
       ],
       "bonnes": [
        0,
        3
       ],
       "explication": "Ex ante : 4 − 2 = 2 %. Ex post : 4 − 6 = −2 % (exactement 1,04/1,06 − 1 ≈ −1,9 %). L'inflation surprise transfère de la richesse du prêteur vers l'emprunteur."
      },
      {
       "q": "Selon l'effet Fisher, si la banque centrale relève durablement la croissance monétaire de 3 points, à long terme :",
       "options": [
        "le taux d'intérêt réel baisse de 3 points.",
        "le taux nominal augmente de 3 points, le taux réel est inchangé.",
        "le taux nominal est inchangé et le taux réel baisse de 3 points.",
        "le taux nominal augmente plus que l'inflation à cause de la prime de risque."
       ],
       "bonnes": [
        1
       ],
       "explication": "À long terme, l'inflation augmente de 3 points (théorie quantitative) ; r est déterminé par les fonds prêtables, donc i = r + π augmente de 3 points."
      },
      {
       "q": "Pourquoi le coût d'opportunité de la détention de monnaie est-il le taux d'intérêt nominal et non le taux réel ?",
       "options": [
        "Parce que la monnaie est rémunérée au taux réel.",
        "Parce que la banque centrale fixe le taux nominal.",
        "Parce que la monnaie perd π de pouvoir d'achat alors que l'obligation rapporte r + π : l'écart est i.",
        "Parce que les ménages souffrent d'illusion monétaire."
       ],
       "bonnes": [
        2
       ],
       "explication": "Rendement réel de la monnaie : −π ; rendement réel de l'obligation : r. L'écart vaut r + π = i. C'est pourquoi la demande d'encaisses réelles dépend de i."
      },
      {
       "q": "Avec la demande de monnaie M/P = Y e^(−4π) (π en fraction annuelle), quel taux d'inflation maximise la taxe inflationniste ?",
       "options": [
        "4 %",
        "25 %",
        "50 %",
        "Il n'y a pas de maximum : plus d'inflation rapporte toujours plus."
       ],
       "bonnes": [
        1
       ],
       "explication": "Recette = π Y e^(−aπ) ; la dérivée s'annule pour π = 1/a = 1/4 = 25 %. Au-delà, la baisse des encaisses réelles l'emporte sur la hausse du taux de la taxe."
      },
      {
       "q": "Quelles propositions sont exactes à propos des hyperinflations ? (deux réponses)",
       "options": [
        "Elles ont pour origine principale la monétisation de déficits publics importants.",
        "Elles se terminent généralement par une lente désinflation de plusieurs décennies.",
        "Leur fin passe par un changement de régime budgétaire et monétaire crédible (Sargent 1982).",
        "Elles s'accompagnent d'une hausse des encaisses réelles détenues par le public."
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "L'État monétise un déficit qu'il ne peut financer autrement ; la sortie est souvent brutale lorsqu'une réforme crédible change les anticipations. Les agents fuient la monnaie : les encaisses réelles s'effondrent."
      },
      {
       "q": "Quelle distinction est correcte ?",
       "options": [
        "La neutralité concerne le niveau de la masse monétaire, la superneutralité son taux de croissance.",
        "La superneutralité signifie que la monnaie est neutre aussi à court terme.",
        "La neutralité implique que l'inflation n'a aucun coût.",
        "La superneutralité est mieux vérifiée empiriquement que la neutralité."
       ],
       "bonnes": [
        0
       ],
       "explication": "Neutralité : un changement de niveau de M n'a pas d'effet réel à long terme. Superneutralité : un changement de son taux de croissance non plus, ce qui est une hypothèse plus forte et plus fragile (effets Mundell-Tobin, coûts d'usure)."
      }
     ]
    },
    {
     "id": "mac2-croissance-faits",
     "titre": "Croissance : faits stylisés et comptabilité de la croissance",
     "duree": 40,
     "niveau": "L2",
     "objectifs": [
      "Distinguer croissance du PIB, du PIB par habitant et de la productivité, et manipuler les taux de croissance composés.",
      "Utiliser la règle de 70 pour calculer des temps de doublement.",
      "Énoncer les faits stylisés de Kaldor (1961) et les principaux faits de la croissance de long terme.",
      "Décrire les trajectoires de la France, des États-Unis et de la Chine, et les notions de convergence et de divergence.",
      "Dériver la décomposition de Solow (1957) et calculer le résidu (PGF).",
      "Interpréter les résultats de la comptabilité de la croissance et en connaître les limites."
     ],
     "sections": [
      {
       "titre": "Mesurer la croissance : définitions et calculs",
       "contenu": "<p>La <strong>croissance économique</strong> désigne l'augmentation soutenue, sur longue période, de la production d'un pays, mesurée par le PIB en volume (à prix constants). On la distingue de l'<strong>expansion</strong>, hausse conjoncturelle de la production sur quelques trimestres. Pour le niveau de vie, l'indicateur pertinent est le <strong>PIB par habitant</strong> ; pour l'efficacité productive, c'est la <strong>productivité du travail</strong>, PIB par emploi ou, mieux, par heure travaillée. Les comparaisons internationales de niveaux se font en <strong>parités de pouvoir d'achat</strong> (PPA), qui corrigent les différences de prix entre pays.</p>\n<p>Ces grandeurs sont liées par une identité. En notant <em>N</em> la population, <em>E</em> l'emploi et <em>H</em> les heures :</p>\n<p class=\"eq\"><em>Y</em> / <em>N</em> = (<em>Y</em> / <em>H</em>) × (<em>H</em> / <em>E</em>) × (<em>E</em> / <em>N</em>)</p>\n<p>Le PIB par habitant est le produit de la productivité horaire, de la durée du travail par emploi et du taux d'emploi de la population. En taux de croissance, les trois termes s'additionnent (approximation logarithmique). Cette décomposition explique par exemple que la France ait une productivité horaire proche de celle des États-Unis mais un PIB par habitant nettement inférieur : on y travaille moins d'heures par an et le taux d'emploi y est plus faible.</p>\n<h4>Taux de croissance composés</h4>\n<p>Si une grandeur croît au taux constant <em>g</em>, après <em>t</em> années : <em>Y</em><sub><em>t</em></sub> = <em>Y</em><sub>0</sub> (1 + <em>g</em>)<sup><em>t</em></sup>. Le taux de croissance annuel moyen entre deux dates est donc <em>g</em> = (<em>Y</em><sub><em>t</em></sub> / <em>Y</em><sub>0</sub>)<sup>1/<em>t</em></sup> − 1, et non la variation totale divisée par <em>t</em>. En temps continu, <em>Y</em>(<em>t</em>) = <em>Y</em>(0) e<sup><em>g</em><em>t</em></sup> et <em>g</em> = (ln <em>Y</em><sub><em>t</em></sub> − ln <em>Y</em><sub>0</sub>) / <em>t</em>. Deux propriétés servent constamment : le taux de croissance d'un produit est la somme des taux de croissance ; celui d'un quotient est la différence. Ainsi g<sub><em>Y</em>/<em>N</em></sub> = g<sub><em>Y</em></sub> − g<sub><em>N</em></sub>.</p>\n<h4>La règle de 70</h4>\n<p>Combien de temps faut-il pour doubler ? On résout (1 + <em>g</em>)<sup><em>T</em></sup> = 2, soit <em>T</em> = ln 2 / ln(1 + <em>g</em>). Comme ln 2 ≈ 0,693 et ln(1 + <em>g</em>) ≈ <em>g</em> pour <em>g</em> petit :</p>\n<p class=\"eq\"><em>T</em> ≈ 70 / (<em>g</em> en %)</p>\n<table>\n<thead><tr><th>Taux de croissance annuel</th><th>Temps de doublement</th><th>Multiplication en 100 ans</th></tr></thead>\n<tbody>\n<tr><td>1 %</td><td>70 ans</td><td>× 2,7</td></tr>\n<tr><td>2 %</td><td>35 ans</td><td>× 7,2</td></tr>\n<tr><td>3 %</td><td>23 ans</td><td>× 19,2</td></tr>\n<tr><td>5 %</td><td>14 ans</td><td>× 131,5</td></tr>\n<tr><td>7 %</td><td>10 ans</td><td>× 868</td></tr>\n</tbody>\n</table>\n<p>Les petites différences de taux produisent de très grandes différences de niveaux : c'est pourquoi Lucas (1988) écrivait qu'une fois qu'on commence à penser à la croissance, « il est difficile de penser à autre chose ».</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> un PIB passé de 100 à 150 en 10 ans n'a pas crû de 5 % par an mais de 1,5<sup>1/10</sup> − 1 ≈ 4,1 % par an. Et si le PIB croît de 1,5 % et la population de 0,5 %, le PIB par habitant croît d'environ 1 %, pas de 3 %.</div>"
      },
      {
       "titre": "Les faits stylisés de Kaldor",
       "contenu": "<p>Kaldor (1961) a résumé l'expérience des pays industrialisés au XX<sup>e</sup> siècle par six <strong>faits stylisés</strong>, régularités empiriques qu'une théorie de la croissance doit pouvoir reproduire :</p>\n<ol>\n<li>La production par travailleur croît à un taux à peu près constant sur longue période.</li>\n<li>Le capital par travailleur croît aussi de façon continue.</li>\n<li>Le taux de rendement du capital (et le taux d'intérêt réel) ne présente pas de tendance.</li>\n<li>Le rapport capital / production, <em>K</em> / <em>Y</em>, est à peu près constant.</li>\n<li>Les parts du travail et du capital dans le revenu national sont à peu près constantes.</li>\n<li>Les taux de croissance de la productivité diffèrent sensiblement entre pays.</li>\n</ol>\n<p>Les faits 1, 2 et 4 impliquent que <em>Y</em> / <em>L</em> et <em>K</em> / <em>L</em> croissent au même taux : l'économie suit un <strong>sentier de croissance équilibrée</strong>. Combinés aux faits 3 et 5, ils sont exactement reproduits par le modèle de Solow avec progrès technique augmentant le travail, ce qui a fait le succès de ce modèle.</p>\n<p>Le fait 2 montre au passage que l'accumulation de capital ne peut, à elle seule, expliquer la croissance : si le capital par tête augmentait sans progrès technique, les rendements décroissants feraient baisser le rendement du capital et augmenter <em>K</em> / <em>Y</em>, ce qui contredit les faits 3 et 4.</p>\n<h4>Faits complémentaires</h4>\n<p>Jones et Romer (2010) ont proposé de « nouveaux faits de Kaldor » adaptés à la croissance endogène : intensification des flux d'idées et d'échanges avec la mondialisation, accélération de la croissance de la population et du PIB par habitant à l'échelle de l'histoire longue, écarts de PGF expliquant la majeure partie des écarts de revenu, hausse du capital humain par travailleur, stabilité des salaires relatifs malgré la hausse de l'offre de diplômés.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les faits de Kaldor décrivent une croissance équilibrée : <em>Y</em>/<em>L</em> et <em>K</em>/<em>L</em> croissent au même taux constant, <em>K</em>/<em>Y</em>, le rendement du capital et les parts des facteurs sont stables. Ils impliquent un progrès technique continu.</div>"
      },
      {
       "titre": "La croissance de long terme : un phénomène récent",
       "contenu": "<p>Pendant la plus grande partie de l'histoire, le revenu par habitant a très peu progressé : les gains de productivité se traduisaient par une hausse de la population plutôt que du niveau de vie (le « piège malthusien », Malthus 1798). Les estimations rassemblées par Maddison (2001, prolongées par le Maddison Project) suggèrent une croissance mondiale du PIB par habitant quasi nulle avant 1820. La <strong>révolution industrielle</strong>, partie de Grande-Bretagne à la fin du XVIII<sup>e</sup> siècle, marque le début de la <strong>croissance économique moderne</strong> (Kuznets 1966) : une hausse continue du produit par tête, en même temps que la population.</p>\n<h4>Les États-Unis</h4>\n<p>Le cas américain illustre le premier fait de Kaldor : depuis la fin du XIX<sup>e</sup> siècle, le PIB par habitant y croît en moyenne d'environ 2 % par an, de façon remarquablement régulière malgré la Grande Dépression et les guerres (Jones 2016). Ce taux signifie un doublement tous les 35 ans. Gordon (2016) souligne cependant que le siècle 1870-1970 a été exceptionnel (électricité, moteur à combustion, chimie, télécommunications) et que la croissance de la productivité a ralenti après 1973, avec un rebond lié aux technologies de l'information entre 1995 et 2005, puis un nouveau ralentissement.</p>\n<h4>La France</h4>\n<p>La France a connu une croissance lente et régulière au XIX<sup>e</sup> siècle, puis une période exceptionnelle, les <strong>Trente Glorieuses</strong> (Fourastié 1979) : de 1950 à 1973, le PIB a crû d'environ 5 % par an, porté par la reconstruction, l'exode rural (réallocation de la main-d'œuvre vers des secteurs plus productifs), l'imitation des technologies américaines et l'intégration européenne (Carré, Dubois et Malinvaud 1972). La croissance est ensuite tombée à 2-3 % par an dans les années 1970-1980, puis autour de 1,5 % par an en moyenne dans les années 2000-2010. Le ralentissement des gains de productivité horaire, d'environ 5 % par an dans les années 1960 à moins de 1 % par an après 2010, est un fait commun à la plupart des pays avancés.</p>\n<h4>La Chine</h4>\n<p>Depuis les réformes de Deng Xiaoping (1978), la Chine a connu une croissance du PIB proche de 10 % par an pendant trois décennies, soit un doublement environ tous les 7 ans, puis un ralentissement progressif (autour de 5 % par an au milieu des années 2020, selon les chiffres officiels). Cette croissance s'explique par un taux d'investissement très élevé (plus de 40 % du PIB), la réallocation de centaines de millions de travailleurs de l'agriculture vers l'industrie, l'ouverture aux échanges et aux investissements étrangers, et le rattrapage technologique. Malgré ce rattrapage, son PIB par habitant en PPA reste inférieur au tiers de celui des États-Unis au milieu des années 2020.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> le « miracle est-asiatique » a nourri un débat célèbre. Young (1995) et Krugman (1994, « The Myth of Asia's Miracle ») ont montré, par la comptabilité de la croissance, que la croissance de Singapour ou de la Corée du Sud entre 1966 et 1990 s'expliquait surtout par l'accumulation de facteurs (hausse de l'investissement, de l'emploi, de l'éducation) plutôt que par la PGF. Conséquence prévue : un ralentissement inévitable lorsque ces sources s'épuisent, comme pour l'URSS. D'autres travaux, mesurant autrement le capital, trouvent une contribution plus forte de la PGF. Le débat se transpose aujourd'hui à la Chine.</div>"
      },
      {
       "titre": "Convergence et divergence entre pays",
       "contenu": "<p>La <strong>convergence</strong> désigne la réduction des écarts de revenu par habitant entre pays. Elle se produit si les pays pauvres croissent plus vite que les pays riches. On distingue :</p>\n<ul>\n<li>la <strong>β-convergence</strong> : relation négative entre le niveau initial de revenu et le taux de croissance ultérieur ; elle peut être <strong>absolue</strong> (tous les pays tendent vers le même niveau) ou <strong>conditionnelle</strong> (chaque pays tend vers son propre niveau d'état stationnaire, qui dépend de son épargne, de sa démographie, de ses institutions) ;</li>\n<li>la <strong>σ-convergence</strong> : baisse de la dispersion (écart-type des logarithmes) des revenus par habitant dans un groupe de pays. La β-convergence est nécessaire mais pas suffisante pour la σ-convergence (des chocs peuvent maintenir la dispersion).</li>\n</ul>\n<h4>Les faits</h4>\n<p>Au sein des pays de l'OCDE, la convergence absolue est nette après 1950 : les pays européens et le Japon, plus pauvres et détruits par la guerre, ont crû plus vite que les États-Unis (Baumol 1986). La France a vu son PIB par habitant passer d'environ la moitié du niveau américain en 1950 à un niveau de l'ordre de 70 à 80 % dans les décennies suivantes, l'écart se maintenant depuis. Le même phénomène s'observe entre les États américains ou les régions européennes (Barro et Sala-i-Martin 1991, 1992) : environ 2 % de l'écart à l'état stationnaire se résorbe chaque année.</p>\n<p>À l'échelle mondiale en revanche, il n'y a pas de convergence absolue sur longue période. Pritchett (1997) parle de « divergence, big time » : le rapport entre les revenus par habitant des pays les plus riches et des plus pauvres a fortement augmenté depuis 1870. Hall et Jones (1999) estiment que la production par travailleur des cinq pays les plus riches était, en 1988, plus de trente fois celle des cinq plus pauvres. Certains pays ont « décroché » (Argentine au XX<sup>e</sup> siècle), d'autres ont rattrapé (Japon, Corée du Sud, Taïwan, puis Chine). Depuis les années 2000, la croissance plus rapide de nombreux pays émergents a fait réapparaître une convergence absolue modeste (Patel, Sandefur et Subramanian 2021).</p>\n<p>Plutôt qu'une convergence universelle, on observe des <strong>clubs de convergence</strong> : des groupes de pays aux caractéristiques proches convergent entre eux, tandis que certains pays pauvres restent bloqués, ce qui évoque des <strong>trappes à pauvreté</strong>.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> l'absence de convergence absolue au niveau mondial ne réfute pas le modèle de Solow, qui prédit seulement une convergence conditionnelle : chaque pays converge vers SON état stationnaire. Il faut donc contrôler les déterminants de cet état (épargne, croissance démographique, capital humain).</div>"
      },
      {
       "titre": "La comptabilité de la croissance : la décomposition de Solow",
       "contenu": "<p>La <strong>comptabilité de la croissance</strong> (growth accounting) cherche à attribuer la croissance de la production à ses sources : accumulation du capital, hausse du travail et progrès technique. Elle a été formalisée par Solow (1957), à partir de la fonction de production :</p>\n<p class=\"eq\"><em>Y</em> = <em>A</em> <em>F</em>(<em>K</em>, <em>L</em>)</p>\n<h4>Dérivation pas à pas</h4>\n<p>Différencions totalement par rapport au temps (le point désigne la dérivée temporelle) :</p>\n<p class=\"eq\"><em>Ẏ</em> = <em>Ȧ</em> <em>F</em> + <em>A</em> <em>F</em><sub><em>K</em></sub> <em>K̇</em> + <em>A</em> <em>F</em><sub><em>L</em></sub> <em>L̇</em></p>\n<p>Divisons par <em>Y</em> = <em>A</em> <em>F</em> et faisons apparaître les taux de croissance :</p>\n<p class=\"eq\"><em>Ẏ</em> / <em>Y</em> = <em>Ȧ</em> / <em>A</em> + (<em>A</em> <em>F</em><sub><em>K</em></sub> <em>K</em> / <em>Y</em>) × <em>K̇</em> / <em>K</em> + (<em>A</em> <em>F</em><sub><em>L</em></sub> <em>L</em> / <em>Y</em>) × <em>L̇</em> / <em>L</em></p>\n<p>En concurrence, chaque facteur est payé à sa productivité marginale : <em>A</em> <em>F</em><sub><em>K</em></sub> = <em>R</em> / <em>P</em> et <em>A</em> <em>F</em><sub><em>L</em></sub> = <em>W</em> / <em>P</em>. Les coefficients sont donc les <strong>parts des facteurs</strong> dans le revenu, observables dans la comptabilité nationale : α = <em>R</em> <em>K</em> / <em>P</em> <em>Y</em> et, avec des rendements constants, 1 − α = <em>W</em> <em>L</em> / <em>P</em> <em>Y</em>. D'où :</p>\n<p class=\"eq\">g<sub><em>Y</em></sub> = g<sub><em>A</em></sub> + α g<sub><em>K</em></sub> + (1 − α) g<sub><em>L</em></sub></p>\n<p>Toutes les grandeurs sont observables sauf g<sub><em>A</em></sub>, que l'on calcule par différence : c'est le <strong>résidu de Solow</strong>, ou croissance de la <strong>productivité globale des facteurs</strong> (PGF) :</p>\n<p class=\"eq\">g<sub><em>A</em></sub> = g<sub><em>Y</em></sub> − α g<sub><em>K</em></sub> − (1 − α) g<sub><em>L</em></sub></p>\n<p>En termes <strong>par travailleur</strong> (<em>y</em> = <em>Y</em> / <em>L</em>, <em>k</em> = <em>K</em> / <em>L</em>), on soustrait g<sub><em>L</em></sub> des deux côtés : g<sub><em>y</em></sub> = g<sub><em>A</em></sub> + α g<sub><em>k</em></sub>. La croissance de la productivité du travail provient de l'<strong>approfondissement du capital</strong> (hausse de <em>K</em> / <em>L</em>) et de la PGF.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> sur une période, le PIB croît de 3 % par an, le capital de 4 % et l'emploi de 1 %. La part du capital dans le revenu est de 0,3. (1) Calculer la contribution de chaque facteur et la croissance de la PGF. (2) Décomposer la croissance de la productivité du travail. (3) Quelle part de la croissance du PIB est expliquée par la PGF ?<br><br>(1) Contribution du capital : 0,3 × 4 = 1,2 point ; du travail : 0,7 × 1 = 0,7 point. PGF : 3 − 1,2 − 0,7 = 1,1 % par an.<br>(2) g<sub><em>y</em></sub> = 3 − 1 = 2 % ; g<sub><em>k</em></sub> = 4 − 1 = 3 % ; approfondissement du capital : 0,3 × 3 = 0,9 point ; PGF : 1,1 point. Vérification : 0,9 + 1,1 = 2.<br>(3) 1,1 / 3 ≈ 37 % de la croissance du PIB et 1,1 / 2 = 55 % de la croissance de la productivité du travail.</div>"
      },
      {
       "titre": "Les sources de la croissance : résultats et limites",
       "contenu": "<h4>Les résultats</h4>\n<p>Solow (1957) applique la méthode à l'économie américaine de 1909 à 1949 et trouve que la PGF explique environ <strong>sept huitièmes</strong> (87,5 %) de la hausse de la production par heure travaillée, l'accumulation de capital seulement un huitième. Ce résultat spectaculaire signifie que la croissance vient surtout du progrès technique, que la théorie traite alors comme exogène : Abramovitz (1956) parlait du résidu comme d'une « mesure de notre ignorance ».</p>\n<p>Les travaux ultérieurs (Denison 1962, Jorgenson et Griliches 1967) ont réduit le résidu en mesurant mieux les facteurs : prise en compte de la <strong>qualité du travail</strong> (éducation, expérience), de la composition du capital, des heures. Pour les pays avancés, on retient aujourd'hui que, sur longue période, la PGF explique de l'ordre de la moitié de la croissance de la productivité du travail, le reste venant de l'approfondissement du capital (physique et, de plus en plus, immatériel) et de l'amélioration de la qualification. La croissance de la PGF a fortement ralenti dans la plupart des pays avancés depuis le milieu des années 2000.</p>\n<p>Les comptes de productivité par branche (bases EU KLEMS, OCDE) montrent que le rebond américain de 1995-2005 venait des secteurs producteurs et surtout utilisateurs des technologies de l'information (commerce de détail, finance), un phénomène moins marqué en Europe. C'est la résolution partielle du <strong>paradoxe de Solow</strong> (1987) : « on voit des ordinateurs partout, sauf dans les statistiques de productivité ».</p>\n<h4>Les limites</h4>\n<ul>\n<li><strong>Le résidu n'est pas que du progrès technique</strong> : il capte toutes les erreurs de mesure des facteurs, les variations du taux d'utilisation des capacités (d'où sa procyclicité), les effets de la réallocation entre secteurs et entreprises, les rendements d'échelle et la concurrence imparfaite (qui faussent l'égalité entre parts et élasticités).</li>\n<li><strong>Comptabilité n'est pas causalité</strong> : le progrès technique augmente la rentabilité du capital et suscite de l'investissement. Une partie de l'accumulation de capital est donc causée par la PGF ; la décomposition sous-estime le rôle ultime du progrès technique.</li>\n<li><strong>Mesure du capital et des prix</strong> : capital immatériel (logiciels, R&amp;D, organisation), effets qualité et nouveaux biens gratuits (services numériques) sont mal mesurés.</li>\n<li>La méthode suppose concurrence parfaite et rendements constants, hypothèses que la croissance endogène remet en cause.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> g<sub>Y</sub> = g<sub>A</sub> + α g<sub>K</sub> + (1 − α) g<sub>L</sub>, avec α la part du capital (environ 0,3). Le résidu de Solow (PGF) se calcule par différence ; il représente une part majeure de la croissance du produit par tête mais mélange progrès technique, erreurs de mesure et effets d'organisation.</div>"
      }
     ],
     "points_cles": [
      "Le PIB par habitant est le produit de la productivité horaire, des heures par emploi et du taux d'emploi.",
      "Taux annuel moyen : g = (Yt/Y0)^(1/t) − 1 ; le taux de croissance d'un produit est la somme, celui d'un quotient la différence.",
      "Règle de 70 : le temps de doublement est d'environ 70 divisé par le taux de croissance en pourcentage.",
      "Faits de Kaldor (1961) : Y/L et K/L croissent à taux constant, K/Y, rendement du capital et parts des facteurs sont stables, les taux de croissance diffèrent entre pays.",
      "La croissance moderne commence avec la révolution industrielle ; avant 1820, le revenu par tête mondial stagne.",
      "États-Unis : environ 2 % par an de croissance du PIB par habitant depuis la fin du XIXe siècle.",
      "France : environ 5 % de croissance du PIB par an pendant les Trente Glorieuses, puis ralentissement durable de la productivité.",
      "Chine : environ 10 % par an pendant trente ans après 1978, grâce à l'investissement, à la réallocation sectorielle et au rattrapage.",
      "β-convergence absolue ou conditionnelle ; σ-convergence = baisse de la dispersion des revenus.",
      "Convergence nette au sein de l'OCDE et entre régions (environ 2 % par an), pas de convergence absolue mondiale sur longue période (Pritchett 1997).",
      "Décomposition de Solow : gY = gA + α gK + (1 − α) gL ; par tête : gy = gA + α gk.",
      "Solow (1957) : environ 7/8 de la croissance de la production horaire américaine 1909-1949 attribués au résidu.",
      "Le résidu mélange progrès technique, erreurs de mesure, utilisation des capacités et réallocation ; comptabilité n'est pas causalité."
     ],
     "lexique": [
      {
       "terme": "Croissance économique",
       "def": "Augmentation soutenue et durable de la production en volume d'un pays."
      },
      {
       "terme": "Parité de pouvoir d'achat (PPA)",
       "def": "Taux de conversion qui égalise le pouvoir d'achat des monnaies, utilisé pour comparer des niveaux de PIB entre pays."
      },
      {
       "terme": "Règle de 70",
       "def": "Approximation selon laquelle une grandeur croissant à g % par an double en environ 70/g années."
      },
      {
       "terme": "Faits stylisés",
       "def": "Régularités empiriques simplifiées qu'une théorie doit pouvoir reproduire, comme les six faits de Kaldor (1961)."
      },
      {
       "terme": "Sentier de croissance équilibrée",
       "def": "Trajectoire où toutes les grandeurs croissent à des taux constants, avec K/Y constant."
      },
      {
       "terme": "β-convergence",
       "def": "Relation négative entre le revenu initial et la croissance ultérieure ; absolue ou conditionnelle aux déterminants de l'état stationnaire."
      },
      {
       "terme": "σ-convergence",
       "def": "Réduction au cours du temps de la dispersion des revenus par habitant entre pays ou régions."
      },
      {
       "terme": "Comptabilité de la croissance",
       "def": "Méthode qui décompose la croissance de la production en contributions du capital, du travail et de la PGF."
      },
      {
       "terme": "Résidu de Solow",
       "def": "Part de la croissance non expliquée par la croissance pondérée des facteurs, assimilée à la croissance de la PGF."
      },
      {
       "terme": "Approfondissement du capital",
       "def": "Hausse du capital par travailleur, qui accroît la productivité du travail."
      },
      {
       "terme": "Paradoxe de Solow",
       "def": "Constat (1987) de la faible contribution apparente de l'informatique aux gains de productivité mesurés."
      },
      {
       "terme": "Club de convergence",
       "def": "Groupe de pays aux caractéristiques proches qui convergent entre eux sans converger vers les autres."
      }
     ],
     "qcm": [
      {
       "q": "Une économie voit son PIB par habitant croître de 3,5 % par an. Selon la règle de 70, en combien de temps double-t-il ?",
       "options": [
        "35 ans",
        "7 ans",
        "10 ans",
        "20 ans"
       ],
       "bonnes": [
        3
       ],
       "explication": "70 / 3,5 = 20 ans. 35 ans correspondrait à une croissance de 2 %."
      },
      {
       "q": "Le PIB réel croît de 2 % par an, la population de 0,5 % et l'emploi de 1 %. Quelles propositions sont exactes ? (deux réponses)",
       "options": [
        "Le PIB par habitant croît d'environ 1,5 % par an.",
        "La productivité par emploi croît d'environ 1 % par an.",
        "Le taux d'emploi de la population baisse.",
        "La productivité par emploi croît d'environ 3 % par an."
       ],
       "bonnes": [
        0,
        1
       ],
       "explication": "g(Y/N) = 2 − 0,5 = 1,5 % ; g(Y/E) = 2 − 1 = 1 %. Le taux d'emploi E/N croît de 1 − 0,5 = 0,5 %, il augmente."
      },
      {
       "q": "Lequel de ces énoncés n'est PAS un fait stylisé de Kaldor ?",
       "options": [
        "Le rapport capital/production est à peu près constant.",
        "Le rendement du capital ne présente pas de tendance.",
        "Le revenu par habitant des pays pauvres converge vers celui des pays riches.",
        "Les parts du travail et du capital dans le revenu sont à peu près stables."
       ],
       "bonnes": [
        2
       ],
       "explication": "Kaldor note au contraire que les taux de croissance diffèrent entre pays ; il n'affirme pas de convergence. Les trois autres énoncés font partie de ses six faits."
      },
      {
       "q": "Le PIB croît de 2,5 %, le capital de 3 %, le travail de 0,5 %, et la part du capital est de 1/3. Quelle est la croissance de la PGF ?",
       "options": [
        "1,17 %",
        "2 %",
        "0,5 %",
        "1,5 %"
       ],
       "bonnes": [
        0
       ],
       "explication": "gA = 2,5 − (1/3) × 3 − (2/3) × 0,5 = 2,5 − 1 − 0,33 ≈ 1,17 %."
      },
      {
       "q": "Dans la décomposition de Solow, pourquoi les coefficients de pondération des taux de croissance des facteurs sont-ils les parts des facteurs dans le revenu ?",
       "options": [
        "Parce que les parts sont des élasticités de long terme estimées par régression.",
        "Parce que, en concurrence, chaque facteur est rémunéré à sa productivité marginale, de sorte que l'élasticité de la production à chaque facteur égale sa part dans le revenu.",
        "Parce que la fonction de production est nécessairement de type Cobb-Douglas.",
        "Parce que la PGF est supposée nulle."
       ],
       "bonnes": [
        1
       ],
       "explication": "Le coefficient de gK est A FK K/Y ; avec A FK = R/P, il vaut RK/PY, la part du capital. Cela ne suppose pas de Cobb-Douglas, seulement la concurrence et les rendements constants pour la somme à 1."
      },
      {
       "q": "Quelles propositions sont exactes à propos du résidu de Solow ? (deux réponses)",
       "options": [
        "Il est directement observé dans la comptabilité nationale.",
        "Il est sous-estimé quand le taux d'utilisation des capacités augmente en expansion.",
        "Il peut refléter des erreurs de mesure de la qualité du travail ou du capital.",
        "Il tend à augmenter en expansion et à baisser en récession."
       ],
       "bonnes": [
        2,
        3
       ],
       "explication": "Le résidu est calculé par différence ; il absorbe les erreurs de mesure des facteurs et la variation de l'utilisation des capacités, ce qui le rend procyclique (il est alors surestimé en expansion, non sous-estimé)."
      },
      {
       "q": "Le PIB par travailleur croît de 1,8 %, le capital par travailleur de 2,4 %, avec α = 0,25. Quelle part de la croissance de la productivité du travail est due à la PGF ?",
       "options": [
        "0,6 point, soit un tiers",
        "1,8 point, soit la totalité",
        "1,2 point, soit deux tiers",
        "2,4 points"
       ],
       "bonnes": [
        2
       ],
       "explication": "gy = gA + α gk, donc gA = 1,8 − 0,25 × 2,4 = 1,8 − 0,6 = 1,2 point, soit 1,2/1,8 = 2/3."
      },
      {
       "q": "Quelles propositions sur la convergence sont exactes ? (deux réponses)",
       "options": [
        "La convergence absolue est bien vérifiée entre pays de l'OCDE après 1950.",
        "La β-convergence implique nécessairement la σ-convergence.",
        "Le modèle de Solow prédit une convergence absolue entre tous les pays du monde.",
        "Pritchett (1997) documente une divergence des revenus entre pays riches et pauvres depuis 1870."
       ],
       "bonnes": [
        0,
        3
       ],
       "explication": "Les pays de l'OCDE, de structures proches, ont convergé (Baumol 1986), mais l'écart mondial s'est creusé sur longue période. La β-convergence est nécessaire mais pas suffisante pour la σ-convergence, et Solow prédit une convergence conditionnelle."
      },
      {
       "q": "Quelle conclusion Young (1995) et Krugman (1994) tirent-ils de la comptabilité de la croissance des « dragons » asiatiques ?",
       "options": [
        "Leur croissance s'explique surtout par une PGF exceptionnellement élevée.",
        "Leur croissance s'explique surtout par l'accumulation de facteurs, ce qui annonce un ralentissement.",
        "Leur croissance est due à la dépréciation de leurs monnaies.",
        "Leur croissance contredit le modèle de Solow."
       ],
       "bonnes": [
        1
       ],
       "explication": "Hausse de l'investissement, de l'emploi et de l'éducation expliquent l'essentiel de la croissance ; les rendements décroissants doivent donc la freiner, comme pour l'URSS. C'est conforme au modèle de Solow."
      },
      {
       "q": "Pourquoi dit-on que « comptabilité n'est pas causalité » en matière de croissance ?",
       "options": [
        "Parce que la comptabilité nationale est trop imprécise.",
        "Parce que les parts des facteurs changent chaque année.",
        "Parce que le PIB ne mesure pas le bien-être.",
        "Parce que le progrès technique, en augmentant la rentabilité du capital, provoque une partie de l'accumulation attribuée au capital."
       ],
       "bonnes": [
        3
       ],
       "explication": "Dans le modèle de Solow, à l'état stationnaire, k croît au taux du progrès technique : toute la croissance par tête est causée par la technologie, même si la décomposition attribue α gk au capital."
      },
      {
       "q": "Un PIB passe de 200 à 400 en 20 ans. Quel est son taux de croissance annuel moyen ?",
       "options": [
        "Environ 3,5 %",
        "5 %",
        "10 %",
        "Environ 2 %"
       ],
       "bonnes": [
        0
       ],
       "explication": "2^(1/20) − 1 ≈ 3,5 %, conforme à la règle de 70 (70/20 = 3,5). Diviser +100 % par 20 donnerait 5 %, ce qui ignore la capitalisation."
      }
     ]
    },
    {
     "id": "mac2-solow",
     "titre": "Le modèle de Solow",
     "duree": 55,
     "niveau": "L2",
     "objectifs": [
      "Poser les hypothèses du modèle de Solow (1956) et dériver pas à pas l'équation fondamentale k̇ = s f(k) − (n + δ) k.",
      "Déterminer l'état stationnaire, l'étudier graphiquement et en faire la statique comparative (s, n, δ, A).",
      "Établir la règle d'or de l'accumulation du capital et discuter la dynamique de transition.",
      "Introduire le progrès technique en unités efficaces et caractériser le sentier de croissance équilibrée.",
      "Distinguer convergence absolue et conditionnelle, calculer la vitesse de convergence et présenter Mankiw-Romer-Weil (1992).",
      "Identifier les apports et les limites du modèle."
     ],
     "sections": [
      {
       "titre": "Hypothèses du modèle",
       "contenu": "<p>Le modèle de <strong>Solow</strong> (1956), développé simultanément par Swan (1956), est le modèle de référence de la croissance. Solow cherchait à dépasser le modèle de Harrod (1939) et Domar (1946), dans lequel la croissance équilibrée de plein emploi n'était possible que par une coïncidence (« le fil du rasoir ») entre le taux d'épargne, le coefficient de capital et la croissance de la population, faute de substituabilité entre capital et travail. Solow lui doit son prix Nobel (1987).</p>\n<p>Hypothèses :</p>\n<ol>\n<li><strong>Économie fermée, un seul bien</strong>, utilisé pour la consommation et l'investissement. Pas d'État dans la version de base.</li>\n<li><strong>Fonction de production néoclassique</strong> <em>Y</em> = <em>F</em>(<em>K</em>, <em>L</em>), à rendements d'échelle constants, productivités marginales positives et décroissantes, et satisfaisant les <strong>conditions d'Inada</strong> : la PmK tend vers l'infini quand <em>K</em> tend vers 0 et vers 0 quand <em>K</em> tend vers l'infini.</li>\n<li><strong>Taux d'épargne constant et exogène</strong> <em>s</em> : <em>S</em> = <em>s</em> <em>Y</em>, avec 0 &lt; <em>s</em> &lt; 1. L'épargne est intégralement investie : <em>I</em> = <em>S</em>.</li>\n<li><strong>Dépréciation</strong> au taux constant δ : chaque année, une fraction δ du capital s'use.</li>\n<li><strong>Population active</strong> croissant au taux exogène <em>n</em>, entièrement employée (prix flexibles, plein emploi).</li>\n</ol>\n<p>Les rendements constants permettent d'écrire le modèle <strong>en termes par travailleur</strong>. Avec <em>k</em> = <em>K</em> / <em>L</em> et <em>y</em> = <em>Y</em> / <em>L</em> :</p>\n<p class=\"eq\"><em>y</em> = <em>F</em>(<em>K</em> / <em>L</em>, 1) = <em>f</em>(<em>k</em>), avec <em>f</em>′(<em>k</em>) &gt; 0 et <em>f</em>″(<em>k</em>) &lt; 0</p>\n<p>Pour la Cobb-Douglas <em>Y</em> = <em>K</em><sup>α</sup> <em>L</em><sup>1−α</sup>, <em>f</em>(<em>k</em>) = <em>k</em><sup>α</sup>. La fonction <em>f</em> est croissante et concave : tracée avec <em>k</em> en abscisse, elle part de l'origine avec une pente infinie et s'aplatit.</p>"
      },
      {
       "titre": "L'équation fondamentale de Solow",
       "contenu": "<p>Le stock de capital évolue selon l'investissement brut moins la dépréciation :</p>\n<p class=\"eq\"><em>K̇</em> = <em>s</em> <em>Y</em> − δ <em>K</em></p>\n<p>Pour obtenir la dynamique de <em>k</em> = <em>K</em> / <em>L</em>, on utilise la règle du taux de croissance d'un quotient : <em>k̇</em> / <em>k</em> = <em>K̇</em> / <em>K</em> − <em>L̇</em> / <em>L</em> = <em>K̇</em> / <em>K</em> − <em>n</em>. Donc :</p>\n<p class=\"eq\"><em>k̇</em> / <em>k</em> = (<em>s</em> <em>Y</em> − δ <em>K</em>) / <em>K</em> − <em>n</em> = <em>s</em> <em>Y</em> / <em>K</em> − δ − <em>n</em></p>\n<p>En multipliant par <em>k</em> et en notant que <em>Y</em> / <em>K</em> × <em>k</em> = <em>Y</em> / <em>L</em> = <em>f</em>(<em>k</em>) :</p>\n<p class=\"eq\"><em>k̇</em> = <em>s</em> <em>f</em>(<em>k</em>) − (<em>n</em> + δ) <em>k</em></p>\n<p>C'est l'<strong>équation fondamentale</strong> du modèle. Interprétation : la variation du capital par travailleur est égale à l'<strong>investissement effectif par travailleur</strong>, <em>s</em> <em>f</em>(<em>k</em>), moins l'<strong>investissement de maintien</strong> (break-even investment), (<em>n</em> + δ) <em>k</em>, nécessaire pour remplacer le capital usé (δ <em>k</em>) et pour équiper les nouveaux travailleurs au même niveau que les anciens (<em>n</em> <em>k</em>) ; ce dernier terme est l'effet de « dilution » du capital par la croissance démographique.</p>\n<h4>Le graphique de Solow</h4>\n<p>On trace, avec <em>k</em> en abscisse : la courbe de production <em>f</em>(<em>k</em>) ; en dessous, la courbe d'investissement <em>s</em> <em>f</em>(<em>k</em>), de même forme concave ; et la droite (<em>n</em> + δ) <em>k</em>, issue de l'origine. Grâce aux conditions d'Inada, la courbe <em>s</em> <em>f</em>(<em>k</em>) est d'abord au-dessus de la droite, puis la coupe en un unique point <em>k</em>* &gt; 0. À gauche de <em>k</em>*, l'investissement dépasse l'investissement de maintien : <em>k</em> augmente. À droite, il est inférieur : <em>k</em> diminue. L'état stationnaire est donc <strong>globalement stable</strong>. À tout <em>k</em>, l'écart vertical entre <em>f</em>(<em>k</em>) et <em>s</em> <em>f</em>(<em>k</em>) représente la consommation par travailleur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> la droite de maintien a pour pente <em>n</em> + δ (et <em>n</em> + δ + <em>g</em> avec progrès technique), pas δ seul. Oublier <em>n</em> revient à oublier la dilution du capital par la croissance de la population active.</div>"
      },
      {
       "titre": "L'état stationnaire et sa statique comparative",
       "contenu": "<p>L'<strong>état stationnaire</strong> (steady state) est la situation où le capital par travailleur est constant : <em>k̇</em> = 0, soit :</p>\n<p class=\"eq\"><em>s</em> <em>f</em>(<em>k</em>*) = (<em>n</em> + δ) <em>k</em>*</p>\n<p>Avec <em>f</em>(<em>k</em>) = <em>k</em><sup>α</sup> : <em>s</em> <em>k</em><sup>α</sup> = (<em>n</em> + δ) <em>k</em>, donc <em>k</em><sup>1−α</sup> = <em>s</em> / (<em>n</em> + δ) et :</p>\n<p class=\"eq\"><em>k</em>* = [<em>s</em> / (<em>n</em> + δ)]<sup>1/(1−α)</sup> &nbsp;&nbsp;&nbsp; <em>y</em>* = [<em>s</em> / (<em>n</em> + δ)]<sup>α/(1−α)</sup></p>\n<p>À l'état stationnaire, <em>k</em> et <em>y</em> sont constants : <em>K</em> et <em>Y</em> croissent au taux <em>n</em>, comme la population. <strong>Il n'y a pas de croissance du revenu par tête à long terme sans progrès technique.</strong></p>\n<h4>Statique comparative</h4>\n<ul>\n<li><strong>Hausse du taux d'épargne</strong> <em>s</em> : la courbe <em>s</em> <em>f</em>(<em>k</em>) se déplace vers le haut, <em>k</em>* et <em>y</em>* augmentent. Pendant la transition, la croissance de <em>y</em> est temporairement plus forte ; à long terme, elle revient à zéro. L'épargne a un <strong>effet de niveau</strong>, pas un <strong>effet de croissance</strong>.</li>\n<li><strong>Hausse de la croissance démographique</strong> <em>n</em> : la droite de maintien pivote vers le haut, <em>k</em>* et <em>y</em>* baissent. Les pays à forte natalité sont, toutes choses égales par ailleurs, plus pauvres.</li>\n<li><strong>Hausse de δ</strong> : même effet qu'une hausse de <em>n</em>.</li>\n<li><strong>Hausse ponctuelle de la productivité</strong> <em>A</em> (avec <em>f</em>(<em>k</em>) = <em>A</em> <em>k</em><sup>α</sup>) : <em>k</em>* et <em>y</em>* augmentent, mais là encore sans croissance permanente.</li>\n</ul>\n<p>Avec α = 1/3, l'élasticité de <em>y</em>* à <em>s</em> vaut α / (1 − α) = 1/2 : doubler le taux d'épargne n'augmente le revenu par tête de long terme que d'environ 41 % (2<sup>0,5</sup> ≈ 1,41). Les différences de taux d'épargne observées entre pays ne peuvent donc expliquer, dans ce modèle simple, des écarts de revenu de 1 à 30.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> <em>y</em> = <em>k</em><sup>1/2</sup>, <em>s</em> = 0,2, <em>n</em> = 0,01, δ = 0,04. (1) Calculer <em>k</em>*, <em>y</em>*, <em>c</em>*. (2) Partant de <em>k</em><sub>0</sub> = 4, décrire la transition (en temps discret, <em>k</em><sub><em>t</em>+1</sub> = <em>k</em><sub><em>t</em></sub> + <em>s</em> <em>y</em><sub><em>t</em></sub> − (<em>n</em> + δ) <em>k</em><sub><em>t</em></sub>). (3) Effet d'une hausse de <em>s</em> à 0,3.<br><br>(1) <em>k</em><sup>1/2</sup> = <em>s</em> / (<em>n</em> + δ) = 0,2 / 0,05 = 4, donc <em>k</em>* = 16, <em>y</em>* = 4, <em>c</em>* = (1 − 0,2) × 4 = 3,2.<br>(2) Trajectoire :<br><table><thead><tr><th><em>t</em></th><th><em>k</em></th><th><em>y</em></th><th>Investissement <em>s</em><em>y</em></th><th>Maintien 0,05<em>k</em></th><th>Δ<em>k</em></th></tr></thead><tbody><tr><td>0</td><td>4,00</td><td>2,00</td><td>0,400</td><td>0,200</td><td>0,200</td></tr><tr><td>1</td><td>4,20</td><td>2,05</td><td>0,410</td><td>0,210</td><td>0,200</td></tr><tr><td>5</td><td>5,00</td><td>2,24</td><td>0,447</td><td>0,250</td><td>0,197</td></tr><tr><td>10</td><td>5,97</td><td>2,44</td><td>0,489</td><td>0,298</td><td>0,190</td></tr><tr><td>20</td><td>7,78</td><td>2,79</td><td>0,558</td><td>0,389</td><td>0,169</td></tr><tr><td>40</td><td>10,69</td><td>3,27</td><td>0,654</td><td>0,534</td><td>0,119</td></tr><tr><td>80</td><td>13,94</td><td>3,73</td><td>0,747</td><td>0,697</td><td>0,050</td></tr></tbody></table>L'écart entre investissement et maintien se réduit : la croissance de <em>k</em> ralentit à mesure qu'on approche de 16 (rendements décroissants).<br>(3) <em>k</em><sup>1/2</sup> = 0,3 / 0,05 = 6, <em>k</em>* = 36, <em>y</em>* = 6, <em>c</em>* = 0,7 × 6 = 4,2. Le revenu de long terme augmente de 50 %, autant que le taux d'épargne : avec α = 1/2, l'élasticité de <em>y</em>* à <em>s</em> vaut α / (1 − α) = 1 (ici <em>y</em>* = <em>s</em> / (<em>n</em> + δ)). La consommation de long terme augmente aussi, car <em>s</em> = 0,3 reste inférieur au taux de la règle d'or (α = 0,5). Le taux de croissance de long terme reste nul.</div>"
      },
      {
       "titre": "La règle d'or de l'accumulation du capital",
       "contenu": "<p>Un taux d'épargne plus élevé donne plus de capital et de production, mais pas nécessairement plus de <strong>consommation</strong>, qui est l'objectif ultime. Phelps (1961) a posé la question : quel état stationnaire maximise la consommation par travailleur ? À l'état stationnaire, l'investissement égale l'investissement de maintien, donc :</p>\n<p class=\"eq\"><em>c</em>* = <em>f</em>(<em>k</em>*) − (<em>n</em> + δ) <em>k</em>*</p>\n<p>On maximise par rapport à <em>k</em>* (en choisissant le <em>s</em> correspondant). Condition du premier ordre :</p>\n<p class=\"eq\"><em>f</em>′(<em>k</em><sub>or</sub>) = <em>n</em> + δ</p>\n<p>C'est la <strong>règle d'or</strong> : à l'état stationnaire optimal, la productivité marginale nette du capital, <em>f</em>′(<em>k</em>) − δ, est égale au taux de croissance de l'économie <em>n</em>. Graphiquement, c'est le point où la tangente à <em>f</em>(<em>k</em>) est parallèle à la droite de maintien : l'écart vertical entre la production et l'investissement de maintien y est maximal.</p>\n<p>Avec une Cobb-Douglas : α <em>k</em><sup>α−1</sup> = <em>n</em> + δ. Or à l'état stationnaire <em>s</em> = (<em>n</em> + δ) <em>k</em> / <em>f</em>(<em>k</em>) = (<em>n</em> + δ) <em>k</em><sup>1−α</sup>. En remplaçant <em>k</em><sup>1−α</sup> = α / (<em>n</em> + δ), on obtient :</p>\n<p class=\"eq\"><em>s</em><sub>or</sub> = α</p>\n<p>Le taux d'épargne de la règle d'or est égal à la part du capital dans le revenu. Interprétation équivalente : à la règle d'or, l'investissement (<em>s</em> <em>Y</em>) égale la rémunération du capital (α <em>Y</em>).</p>\n<h4>Inefficacité dynamique et transition</h4>\n<p>Si <em>k</em>* &gt; <em>k</em><sub>or</sub> (<em>s</em> &gt; α), l'économie est en <strong>inefficacité dynamique</strong> : en réduisant l'épargne, on augmente la consommation immédiatement ET à toutes les dates futures ; tout le monde gagne. Si <em>k</em>* &lt; <em>k</em><sub>or</sub>, augmenter l'épargne accroît la consommation de long terme, mais au prix d'une baisse initiale de la consommation : les générations présentes perdent au profit des générations futures. Le choix dépend alors de la préférence pour le présent, que le modèle de Solow, avec son <em>s</em> exogène, ne permet pas de traiter (c'est l'objet du modèle de Ramsey-Cass-Koopmans, où l'optimum est la « règle d'or modifiée » <em>f</em>′(<em>k</em>) = δ + ρ + θ<em>g</em>).</p>\n<p>Empiriquement, Abel, Mankiw, Summers et Zeckhauser (1989) montrent que les profits bruts du capital excèdent durablement l'investissement dans les pays du G7 : ces économies sont dynamiquement efficaces, avec un capital <strong>inférieur</strong> à la règle d'or. Le taux d'investissement (environ 20 à 25 % du PIB) est en effet inférieur à α (environ 30 à 35 %).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> règle d'or : <em>f</em>′(<em>k</em>) = <em>n</em> + δ (+ <em>g</em> avec progrès technique) ; avec Cobb-Douglas, <em>s</em><sub>or</sub> = α. Au-dessus, l'économie sur-accumule (inefficacité dynamique) ; en dessous, se rapprocher de la règle d'or exige un sacrifice transitoire.</div>"
      },
      {
       "titre": "Progrès technique et sentier de croissance équilibrée",
       "contenu": "<p>Pour rendre compte d'une croissance permanente du revenu par tête, Solow introduit un progrès technique exogène. On le suppose <strong>neutre au sens de Harrod</strong> (augmentant le travail) :</p>\n<p class=\"eq\"><em>Y</em> = <em>F</em>(<em>K</em>, <em>A</em> <em>L</em>), avec <em>Ȧ</em> / <em>A</em> = <em>g</em></p>\n<p><em>A</em> <em>L</em> est le travail en <strong>unités efficaces</strong> : un travailleur de demain vaut (1 + <em>g</em>) travailleurs d'aujourd'hui. Seul ce type de progrès technique est compatible avec un sentier de croissance équilibrée pour une fonction quelconque (théorème d'Uzawa 1961) ; avec une Cobb-Douglas, les neutralités de Harrod, Hicks et Solow sont équivalentes.</p>\n<p>On raisonne en grandeurs par unité efficace de travail : <em>k̃</em> = <em>K</em> / (<em>A</em> <em>L</em>) et <em>ỹ</em> = <em>Y</em> / (<em>A</em> <em>L</em>) = <em>f</em>(<em>k̃</em>). La même démarche que précédemment, avec cette fois <em>AL</em> qui croît au taux <em>n</em> + <em>g</em>, donne :</p>\n<p class=\"eq\"><em>k̃̇</em> = <em>s</em> <em>f</em>(<em>k̃</em>) − (<em>n</em> + <em>g</em> + δ) <em>k̃</em></p>\n<p>L'analyse graphique est identique, avec une droite de maintien de pente <em>n</em> + <em>g</em> + δ. À l'état stationnaire, <em>k̃</em> et <em>ỹ</em> sont constants. Il en découle :</p>\n<table>\n<thead><tr><th>Variable</th><th>Taux de croissance sur le sentier équilibré</th></tr></thead>\n<tbody>\n<tr><td><em>k̃</em> = <em>K</em> / <em>AL</em>, <em>ỹ</em> = <em>Y</em> / <em>AL</em></td><td>0</td></tr>\n<tr><td><em>k</em> = <em>K</em> / <em>L</em>, <em>y</em> = <em>Y</em> / <em>L</em>, salaire réel</td><td><em>g</em></td></tr>\n<tr><td><em>K</em>, <em>Y</em></td><td><em>n</em> + <em>g</em></td></tr>\n<tr><td><em>K</em> / <em>Y</em>, rendement du capital <em>f</em>′(<em>k̃</em>), parts des facteurs</td><td>0</td></tr>\n</tbody>\n</table>\n<p>Le modèle reproduit ainsi <strong>tous les faits de Kaldor</strong>. Mais le taux de croissance de long terme du revenu par tête est égal à <em>g</em>, un paramètre exogène : le modèle explique la croissance par ce qu'il n'explique pas. La règle d'or devient <em>f</em>′(<em>k̃</em>) = <em>n</em> + <em>g</em> + δ.</p>"
      },
      {
       "titre": "Convergence : théorie, vitesse et test de Mankiw-Romer-Weil",
       "contenu": "<h4>La propriété de convergence</h4>\n<p>Le taux de croissance de <em>k</em> s'écrit <em>k̇</em> / <em>k</em> = <em>s</em> <em>f</em>(<em>k</em>) / <em>k</em> − (<em>n</em> + δ). Comme <em>f</em>(<em>k</em>) / <em>k</em> (la productivité moyenne du capital) décroît avec <em>k</em>, une économie croît d'autant plus vite qu'elle est loin en dessous de son état stationnaire. Graphiquement, l'écart entre la courbe <em>s</em> <em>f</em>(<em>k</em>) / <em>k</em>, décroissante, et la droite horizontale <em>n</em> + δ mesure le taux de croissance. Cela implique la <strong>convergence conditionnelle</strong> : les pays convergent vers leur propre état stationnaire, à une vitesse d'autant plus grande qu'ils en sont éloignés. La <strong>convergence absolue</strong> n'est prédite que pour des pays ayant les mêmes paramètres (<em>s</em>, <em>n</em>, δ, <em>A</em>, <em>g</em>).</p>\n<h4>La vitesse de convergence</h4>\n<p>Une approximation linéaire de la dynamique au voisinage de l'état stationnaire, avec une Cobb-Douglas, donne :</p>\n<p class=\"eq\">d ln <em>ỹ</em> / d<em>t</em> ≈ −λ (ln <em>ỹ</em> − ln <em>ỹ</em>*), avec λ = (1 − α)(<em>n</em> + <em>g</em> + δ)</p>\n<p>Chaque année, une fraction λ de l'écart (en logarithme) à l'état stationnaire est comblée ; la <strong>demi-vie</strong> de l'écart est ln 2 / λ ≈ 0,69 / λ. Avec α = 1/3, <em>n</em> = 1 %, <em>g</em> = 2 % et δ = 3 %, λ = (2/3) × 0,06 = 4 % : la moitié de l'écart serait comblée en 17 ans environ. Or les estimations empiriques (Barro et Sala-i-Martin 1992) donnent λ ≈ 2 % par an, soit une demi-vie d'environ 35 ans. Pour rendre le modèle compatible avec cette lenteur, il faut une part du capital proche de 2/3 ou plus, bien supérieure à la part observée de 1/3, ce qui suggère d'élargir la notion de capital.</p>\n<h4>Le modèle de Solow augmenté (Mankiw, Romer et Weil 1992)</h4>\n<p>Mankiw, Romer et Weil (MRW) testent le modèle sur 98 pays (1960-1985). En version simple, en prenant les logarithmes de <em>y</em>* :</p>\n<p class=\"eq\">ln <em>y</em>* = ln <em>A</em> + [α / (1 − α)] ln <em>s</em> − [α / (1 − α)] ln(<em>n</em> + <em>g</em> + δ)</p>\n<p>Les signes sont conformes à la théorie, mais le coefficient estimé de ln <em>s</em> implique une part du capital d'environ 0,6, trop élevée. Ils introduisent alors le <strong>capital humain</strong> <em>H</em>, accumulé avec un taux d'investissement <em>s</em><sub><em>h</em></sub> :</p>\n<p class=\"eq\"><em>Y</em> = <em>K</em><sup>α</sup> <em>H</em><sup>β</sup> (<em>A</em> <em>L</em>)<sup>1−α−β</sup></p>\n<p>Avec α ≈ β ≈ 1/3, le modèle augmenté explique environ 80 % de la variance internationale du revenu par travailleur (R² ≈ 0,78), et il prédit une convergence conditionnelle à une vitesse d'environ 2 % par an, conforme aux données : avec λ = (1 − α − β)(<em>n</em> + <em>g</em> + δ), les rendements décroissants du capital au sens large sont plus lents. Conclusion de MRW : le modèle de Solow, augmenté du capital humain, rend bien compte des écarts de revenu entre pays. Cette conclusion a été contestée par Klenow et Rodríguez-Clare (1997) et Hall et Jones (1999), pour qui l'essentiel des écarts tient à la PGF, donc aux institutions et à la technologie.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> l'Allemagne de l'Ouest et le Japon, dont le capital avait été largement détruit pendant la Seconde Guerre mondiale, ont connu après 1945 une croissance très rapide qui les a ramenés vers les niveaux d'avant-guerre puis vers les États-Unis. C'est l'illustration classique de la dynamique de transition : un pays dont le capital est bien en dessous de son état stationnaire (mais dont les institutions, le capital humain et le taux d'épargne sont intacts) croît très vite.</div>"
      },
      {
       "titre": "Apports et limites du modèle de Solow",
       "contenu": "<p><strong>Apports.</strong> Le modèle explique pourquoi l'accumulation du capital ne peut être le moteur de la croissance de long terme (rendements décroissants), pourquoi les taux d'épargne et de croissance démographique déterminent les niveaux de revenu, pourquoi des pays semblables convergent, et il reproduit les faits de Kaldor. Il fournit le cadre de la comptabilité de la croissance et de la règle d'or. Il est le point de départ de tous les modèles ultérieurs.</p>\n<p><strong>Limites.</strong></p>\n<ul>\n<li>Le progrès technique, seul moteur de la croissance par tête, est <strong>exogène</strong> (« la manne tombée du ciel ») : le modèle ne dit pas d'où il vient ni comment les politiques peuvent l'influencer.</li>\n<li>Le taux d'épargne est exogène : pas de choix intertemporel ni d'analyse du bien-être ; c'est ce que corrige le modèle de Ramsey-Cass-Koopmans (Cass 1965, Koopmans 1965).</li>\n<li>Avec une part du capital réaliste, il prédit une convergence trop rapide et des écarts de revenu trop faibles ; il prévoit aussi un rendement du capital beaucoup plus élevé dans les pays pauvres, ce qui devrait y attirer les capitaux. Or les capitaux circulent peu des pays riches vers les pays pauvres : c'est le <strong>paradoxe de Lucas</strong> (1990).</li>\n<li>Il ignore les institutions, la géographie, la répartition et les ressources naturelles, de même que le chômage (plein emploi supposé).</li>\n</ul>\n<p>Ces limites ont motivé deux programmes de recherche : la <strong>croissance endogène</strong>, qui explique le progrès technique par des décisions économiques, et l'économie des <strong>institutions</strong>, qui cherche les causes profondes des différences de PGF.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans le modèle de Solow, le taux d'épargne et la démographie déterminent le NIVEAU du revenu par tête de long terme ; seul le progrès technique exogène <em>g</em> détermine son TAUX de croissance. Convergence conditionnelle à environ 2 % par an dans les données.</div>"
      }
     ],
     "points_cles": [
      "Hypothèses : rendements constants, productivités marginales décroissantes, conditions d'Inada, s, n et δ exogènes et constants, plein emploi.",
      "Équation fondamentale : k̇ = s f(k) − (n + δ) k ; investissement effectif moins investissement de maintien.",
      "État stationnaire : s f(k*) = (n + δ) k* ; il est unique et globalement stable.",
      "Avec y = k^α : k* = [s/(n + δ)]^(1/(1−α)) et y* = [s/(n + δ)]^(α/(1−α)).",
      "Une hausse de s augmente k* et y* (effet de niveau) mais pas la croissance de long terme ; une hausse de n ou δ les réduit.",
      "Règle d'or : f′(k) = n + δ ; avec Cobb-Douglas, s_or = α (part du capital).",
      "Au-dessus de la règle d'or, l'économie est dynamiquement inefficace ; les pays du G7 sont en dessous (Abel et al. 1989).",
      "Progrès technique neutre au sens de Harrod : Y = F(K, AL) ; droite de maintien de pente n + g + δ.",
      "Sur le sentier de croissance équilibrée, Y/L et K/L croissent au taux g, K et Y à n + g ; K/Y et les parts sont constants.",
      "Le modèle prédit une convergence conditionnelle, pas absolue.",
      "Vitesse de convergence λ = (1 − α)(n + g + δ) ; demi-vie = ln 2/λ ; empiriquement λ ≈ 2 %.",
      "MRW (1992) : en ajoutant le capital humain (α ≈ β ≈ 1/3), le modèle explique environ 80 % des écarts internationaux de revenu.",
      "Limite majeure : le moteur de la croissance par tête, g, est exogène."
     ],
     "lexique": [
      {
       "terme": "Conditions d'Inada",
       "def": "Hypothèses selon lesquelles la productivité marginale du capital tend vers l'infini en 0 et vers 0 à l'infini ; elles garantissent un état stationnaire unique strictement positif."
      },
      {
       "terme": "Investissement de maintien",
       "def": "Investissement par travailleur nécessaire pour garder k constant : (n + δ) k, ou (n + g + δ) k̃ avec progrès technique."
      },
      {
       "terme": "État stationnaire",
       "def": "Situation où le capital par travailleur (ou par unité efficace) est constant."
      },
      {
       "terme": "Effet de niveau",
       "def": "Effet d'un paramètre sur le niveau du revenu par tête de long terme, sans modifier son taux de croissance de long terme."
      },
      {
       "terme": "Règle d'or",
       "def": "État stationnaire qui maximise la consommation par travailleur, caractérisé par f′(k) = n + δ."
      },
      {
       "terme": "Inefficacité dynamique",
       "def": "Situation de sur-accumulation (k > k_or) où une baisse de l'épargne augmente la consommation à toutes les dates."
      },
      {
       "terme": "Unités efficaces de travail",
       "def": "Quantité de travail corrigée de la technologie, AL."
      },
      {
       "terme": "Progrès technique neutre au sens de Harrod",
       "def": "Progrès technique qui augmente l'efficacité du travail, Y = F(K, AL)."
      },
      {
       "terme": "Convergence conditionnelle",
       "def": "Tendance de chaque économie à converger vers son propre état stationnaire, déterminé par ses paramètres."
      },
      {
       "terme": "Demi-vie",
       "def": "Temps nécessaire pour combler la moitié de l'écart à l'état stationnaire, égal à ln 2/λ."
      },
      {
       "terme": "Capital humain",
       "def": "Stock de connaissances, compétences et santé incorporé aux travailleurs, qui augmente leur productivité."
      },
      {
       "terme": "Paradoxe de Lucas",
       "def": "Constat (1990) que les capitaux circulent peu des pays riches vers les pays pauvres malgré le rendement théoriquement plus élevé du capital dans ces derniers."
      }
     ],
     "qcm": [
      {
       "q": "Dans le modèle de Solow sans progrès technique, que représente le terme (n + δ)k ?",
       "options": [
        "L'épargne par travailleur.",
        "La consommation par travailleur à l'état stationnaire.",
        "La productivité marginale du capital.",
        "L'investissement nécessaire pour maintenir constant le capital par travailleur."
       ],
       "bonnes": [
        3
       ],
       "explication": "Il faut remplacer le capital usé (δk) et équiper les nouveaux travailleurs (nk) : c'est l'investissement de maintien."
      },
      {
       "q": "Avec y = k^0,5, s = 0,3, n = 0,02 et δ = 0,08, quel est le capital par travailleur d'état stationnaire ?",
       "options": [
        "3",
        "9",
        "0,3",
        "30"
       ],
       "bonnes": [
        1
       ],
       "explication": "k^0,5 = s/(n + δ) = 0,3/0,1 = 3, donc k* = 9 et y* = 3."
      },
      {
       "q": "Quelles propositions sont exactes sur l'effet d'une hausse permanente du taux d'épargne dans le modèle de Solow ? (deux réponses)",
       "options": [
        "Le revenu par tête de long terme augmente.",
        "Le taux de croissance du revenu par tête augmente de façon permanente.",
        "Le taux de croissance du revenu par tête augmente pendant la transition.",
        "La consommation par tête augmente toujours à long terme."
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "L'effet est de niveau : y* augmente et la croissance est temporairement plus forte. La consommation de long terme n'augmente que si l'on était en dessous de la règle d'or."
      },
      {
       "q": "Avec une Cobb-Douglas où la part du capital vaut 0,3, quel est le taux d'épargne de la règle d'or ?",
       "options": [
        "0,7",
        "Il dépend de n et de δ.",
        "0,3",
        "0,5"
       ],
       "bonnes": [
        2
       ],
       "explication": "s_or = α = 0,3 : à la règle d'or, l'investissement égale la rémunération du capital. Le niveau de k_or dépend de n et δ, mais pas le taux d'épargne."
      },
      {
       "q": "Une économie a un taux d'épargne de 40 % alors que la part du capital est de 30 %. Quelles propositions sont exactes ? (deux réponses)",
       "options": [
        "Elle est en inefficacité dynamique.",
        "Elle devrait augmenter son épargne pour atteindre la règle d'or.",
        "Une baisse de l'épargne augmenterait la consommation immédiatement et à long terme.",
        "Son capital par travailleur est inférieur à celui de la règle d'or."
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "s > α implique k* > k_or : sur-accumulation. Réduire s augmente la consommation tout de suite (moins d'investissement) et à long terme (on se rapproche de la règle d'or) : amélioration au sens de Pareto."
      },
      {
       "q": "Sur le sentier de croissance équilibrée du modèle avec progrès technique Y = F(K, AL), à quel taux croît le salaire réel ?",
       "options": [
        "n + g",
        "0",
        "n",
        "g"
       ],
       "bonnes": [
        3
       ],
       "explication": "Le salaire réel est la PmL, égale à A fois une fonction de k̃, constant à l'état stationnaire ; il croît donc au taux de A, soit g."
      },
      {
       "q": "Pourquoi le modèle de Solow prédit-il qu'une économie pauvre croît plus vite qu'une économie riche ayant les mêmes paramètres ?",
       "options": [
        "Parce que les pays pauvres épargnent davantage.",
        "Parce que la productivité moyenne du capital, f(k)/k, décroît avec k : l'investissement par unité de capital est plus élevé quand k est faible.",
        "Parce que le progrès technique est plus rapide dans les pays pauvres.",
        "Parce que la dépréciation est plus faible dans les pays pauvres."
       ],
       "bonnes": [
        1
       ],
       "explication": "k̇/k = s f(k)/k − (n + δ), décroissant en k du fait des rendements décroissants. C'est la base de la convergence conditionnelle."
      },
      {
       "q": "Avec α = 1/3, n = 1 %, g = 2 % et δ = 4,5 %, quelle est la vitesse de convergence prédite et la demi-vie de l'écart ?",
       "options": [
        "7,5 % et environ 9 ans",
        "2,5 % et environ 28 ans",
        "5 % et environ 14 ans",
        "2 % et environ 35 ans"
       ],
       "bonnes": [
        2
       ],
       "explication": "λ = (1 − 1/3) × (0,01 + 0,02 + 0,045) = (2/3) × 0,075 = 5 % ; demi-vie = 0,69/0,05 ≈ 14 ans. C'est plus rapide que les 2 % estimés empiriquement."
      },
      {
       "q": "Quelle est la principale conclusion de Mankiw, Romer et Weil (1992) ?",
       "options": [
        "Le modèle de Solow augmenté du capital humain explique environ 80 % des différences internationales de revenu par travailleur.",
        "La convergence absolue est vérifiée entre tous les pays.",
        "Le progrès technique est endogène et dépend de la R&D.",
        "Le taux d'épargne n'a aucun effet sur le revenu par tête."
       ],
       "bonnes": [
        0
       ],
       "explication": "Avec K et H (α ≈ β ≈ 1/3), le modèle explique environ 80 % de la variance et prédit une convergence conditionnelle d'environ 2 % par an, proche des données."
      },
      {
       "q": "Dans le modèle de Solow, une hausse du taux de croissance de la population n :",
       "options": [
        "augmente le revenu par tête de long terme car il y a plus de travailleurs.",
        "réduit le capital et le revenu par tête d'état stationnaire.",
        "augmente le taux de croissance de long terme du revenu par tête.",
        "n'a aucun effet car les rendements sont constants."
       ],
       "bonnes": [
        1
       ],
       "explication": "La droite de maintien (n + δ)k pivote vers le haut, k* et y* baissent. Le PIB total croît plus vite (au taux n + g), mais pas le revenu par tête de long terme."
      },
      {
       "q": "Quelles propositions sont des limites reconnues du modèle de Solow ? (deux réponses)",
       "options": [
        "Il ne reproduit pas la constance du rapport K/Y.",
        "Le taux de croissance de long terme du revenu par tête est exogène.",
        "Il ne permet pas de calculer un état stationnaire.",
        "Avec une part du capital de 1/3, il prédit une convergence trop rapide par rapport aux données."
       ],
       "bonnes": [
        1,
        3
       ],
       "explication": "g est un paramètre non expliqué, et λ = (1 − α)(n + g + δ) est d'environ 4 à 5 % avec α = 1/3, contre 2 % observé. Le modèle reproduit en revanche les faits de Kaldor et admet un état stationnaire unique."
      }
     ]
    },
    {
     "id": "mac2-croissance-endogene",
     "titre": "Croissance endogène et institutions",
     "duree": 50,
     "niveau": "L3",
     "objectifs": [
      "Expliquer pourquoi la croissance endogène exige des rendements non décroissants des facteurs accumulables.",
      "Résoudre le modèle AK et comparer ses implications à celles du modèle de Solow.",
      "Présenter les modèles d'externalités (Romer 1986), de capital humain (Lucas 1988) et de R&D (Romer 1990, Aghion-Howitt 1992).",
      "Analyser la destruction créatrice et ses implications pour les politiques publiques (concurrence, brevets, subventions à la R&D).",
      "Présenter les causes profondes de la croissance : institutions (Acemoglu-Johnson-Robinson) et géographie.",
      "Discuter les liens entre croissance et environnement."
     ],
     "sections": [
      {
       "titre": "Pourquoi endogénéiser la croissance ?",
       "contenu": "<p>Dans le modèle de Solow, le taux de croissance de long terme du revenu par tête est égal au taux de progrès technique <em>g</em>, exogène. Les politiques économiques (fiscalité, éducation, recherche) n'ont que des effets de niveau. Au milieu des années 1980, la <strong>théorie de la croissance endogène</strong> (ou « nouvelle théorie de la croissance ») cherche à expliquer le taux de croissance de long terme par les décisions des agents : investir, se former, innover.</p>\n<p>La clé est technique. Dans Solow, la croissance par tête s'arrête parce que la productivité marginale du capital décroît vers zéro. Pour obtenir une croissance perpétuelle sans progrès technique exogène, il faut que les facteurs que l'on peut accumuler (capital physique, capital humain, connaissances) aient des <strong>rendements non décroissants</strong> au niveau agrégé. Trois voies ont été explorées :</p>\n<ol>\n<li>des <strong>externalités</strong> liées à l'accumulation du capital (apprentissage par la pratique, diffusion des connaissances) ;</li>\n<li>l'accumulation de <strong>capital humain</strong>, dont la production ne subit pas de rendements décroissants ;</li>\n<li>la production d'<strong>idées</strong> par une activité de recherche intentionnelle, motivée par des profits de monopole.</li>\n</ol>\n<p>Une difficulté conceptuelle apparaît : si la production est à rendements croissants, la concurrence parfaite ne peut pas rémunérer tous les facteurs à leur productivité marginale (le théorème d'Euler montre que le produit serait insuffisant). D'où le recours soit à des externalités (non rémunérées), soit à la <strong>concurrence monopolistique</strong> (Dixit-Stiglitz 1977), qui crée les rentes finançant l'innovation.</p>"
      },
      {
       "titre": "Le modèle AK",
       "contenu": "<p>Le modèle le plus simple (Rebelo 1991) suppose que la production est linéaire dans le capital, interprété au sens large (physique, humain, connaissances) :</p>\n<p class=\"eq\"><em>Y</em> = <em>A</em> <em>K</em>, avec <em>A</em> &gt; 0 constant</p>\n<p>La productivité marginale du capital est constante et égale à <em>A</em> : il n'y a pas de rendements décroissants. Avec un taux d'épargne <em>s</em>, une dépréciation δ et une population croissant au taux <em>n</em>, la dynamique du capital par travailleur s'obtient comme dans le modèle de Solow :</p>\n<p class=\"eq\"><em>k̇</em> = <em>s</em> <em>A</em> <em>k</em> − (<em>n</em> + δ) <em>k</em> &nbsp;⇒&nbsp; <em>k̇</em> / <em>k</em> = <em>s</em> <em>A</em> − (<em>n</em> + δ)</p>\n<p>Puisque <em>y</em> = <em>A</em> <em>k</em>, le revenu par tête croît au même taux :</p>\n<p class=\"eq\"><em>g</em><sub><em>y</em></sub> = <em>s</em> <em>A</em> − <em>n</em> − δ</p>\n<p>Graphiquement, la « courbe » d'investissement <em>s</em> <em>A</em> <em>k</em> est une droite issue de l'origine ; si sa pente <em>s</em> <em>A</em> dépasse celle de la droite de maintien (<em>n</em> + δ), l'écart entre les deux s'accroît indéfiniment : il n'y a pas d'état stationnaire.</p>\n<h4>Implications</h4>\n<ul>\n<li>Le taux d'épargne a un <strong>effet de croissance</strong> et non plus seulement de niveau : une politique qui relève durablement <em>s</em> accroît durablement la croissance.</li>\n<li>Il n'y a <strong>pas de convergence</strong> : le taux de croissance ne dépend pas du niveau de <em>k</em>. Deux pays aux paramètres identiques mais aux niveaux initiaux différents gardent un écart constant en proportion ; des pays aux paramètres différents divergent.</li>\n<li>Les chocs ont des effets <strong>permanents</strong> sur le niveau du revenu : une destruction de capital n'est jamais rattrapée.</li>\n</ul>\n<p>Limite : interpréter <em>K</em> comme du capital physique seul suppose une part du capital égale à 1, incompatible avec la part observée d'environ 1/3. Le modèle AK n'est convaincant que comme forme réduite de modèles plus riches.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> modèle AK avec <em>A</em> = 0,5, <em>s</em> = 0,2, δ = 0,05, <em>n</em> = 0,01. (1) Taux de croissance du revenu par tête ? (2) Le taux d'épargne passe à 0,24 : nouveau taux et écart de revenu au bout de 35 ans par rapport au scénario initial ? (3) Comparer avec un modèle de Solow où α = 1/3.<br><br>(1) <em>g</em> = 0,2 × 0,5 − 0,01 − 0,05 = 0,10 − 0,06 = 4 % par an.<br>(2) <em>g</em> = 0,24 × 0,5 − 0,06 = 6 %. Le différentiel de 2 points cumulé sur 35 ans donne un revenu e<sup>0,02 × 35</sup> = e<sup>0,7</sup> ≈ 2 fois plus élevé (règle de 70), et l'écart continue de se creuser.<br>(3) Dans le modèle de Solow, <em>y</em>* est proportionnel à <em>s</em><sup>α/(1−α)</sup> = <em>s</em><sup>1/2</sup> : une hausse de 20 % de <em>s</em> augmente le revenu de long terme de 1,2<sup>0,5</sup> − 1 ≈ 9,5 %, une fois pour toutes ; le taux de croissance de long terme est inchangé.</div>"
      },
      {
       "titre": "Externalités et capital humain : Romer (1986) et Lucas (1988)",
       "contenu": "<h4>Romer (1986) : l'apprentissage par la pratique</h4>\n<p>Romer reprend l'idée d'Arrow (1962) selon laquelle la connaissance est un sous-produit de l'investissement : en investissant, les entreprises apprennent (« learning by doing »), et ces connaissances se diffusent à toute l'économie. La production de l'entreprise <em>i</em> s'écrit :</p>\n<p class=\"eq\"><em>Y</em><sub><em>i</em></sub> = <em>B</em> <em>K</em><sub><em>i</em></sub><sup>α</sup> (<em>E</em> <em>L</em><sub><em>i</em></sub>)<sup>1−α</sup>, avec <em>E</em> = <em>K</em> / <em>L</em> (capital moyen de l'économie)</p>\n<p>Au niveau de l'entreprise, les rendements sont constants et décroissants pour le capital : la concurrence parfaite est possible. Mais l'efficacité du travail <em>E</em> dépend du capital agrégé, que chaque entreprise considère comme donné. En agrégeant (toutes les entreprises identiques), <em>Y</em> = <em>B</em> <em>K</em><sup>α</sup> (<em>K</em>)<sup>1−α</sup> = <em>B</em> <em>K</em> : on retrouve une forme AK. La croissance est endogène, mais elle est <strong>sous-optimale</strong> : les entreprises ne tiennent pas compte du fait que leur investissement augmente la productivité des autres. Le rendement privé du capital (α <em>B</em>) est inférieur à son rendement social (<em>B</em>). Une <strong>subvention à l'investissement</strong> peut alors augmenter le bien-être.</p>\n<h4>Lucas (1988) : le capital humain</h4>\n<p>Lucas distingue capital physique et <strong>capital humain</strong> <em>h</em> (qualification moyenne). Chaque individu consacre une fraction <em>u</em> de son temps à produire et 1 − <em>u</em> à se former :</p>\n<p class=\"eq\"><em>Y</em> = <em>K</em><sup>α</sup> (<em>u</em> <em>h</em> <em>L</em>)<sup>1−α</sup> &nbsp;&nbsp;&nbsp; <em>ḣ</em> / <em>h</em> = <em>B</em> (1 − <em>u</em>)</p>\n<p>La production de capital humain ne subit pas de rendements décroissants : la croissance de <em>h</em> est proportionnelle au temps de formation, quel que soit le niveau atteint. Sur le sentier de croissance équilibrée, <em>K</em> / <em>L</em> et <em>Y</em> / <em>L</em> croissent au même taux que <em>h</em>, soit <em>B</em> (1 − <em>u</em>) : la croissance dépend des efforts d'éducation. Lucas ajoute une externalité (le capital humain moyen accroît la productivité de chacun), qui explique la concentration des travailleurs qualifiés dans les villes et le fait que les migrations vont des pays pauvres vers les pays riches.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> dans le modèle de Solow augmenté de Mankiw-Romer-Weil, le capital humain a des rendements décroissants (α + β &lt; 1) et n'a qu'un effet de niveau. Dans le modèle de Lucas, son accumulation est le moteur de la croissance de long terme. La différence tient à la technologie de production du capital humain.</div>"
      },
      {
       "titre": "R&D et innovation : Romer (1990)",
       "contenu": "<p>Le modèle de Romer (1990) fait de la technologie le produit d'une activité économique intentionnelle, la <strong>recherche et développement</strong> (R&amp;D). Son apport central est de caractériser les <strong>idées</strong> comme des biens <strong>non rivaux</strong> : une même formule, un même plan ou un même logiciel peuvent être utilisés simultanément par un nombre illimité de personnes, sans coût supplémentaire. Elles sont en revanche partiellement <strong>excluables</strong> (brevets, secret). La non-rivalité implique des rendements croissants : pour doubler la production, il suffit de doubler les facteurs rivaux (capital, travail), sans « doubler » les idées.</p>\n<h4>Structure du modèle (version simplifiée)</h4>\n<p>La population active <em>L</em> se répartit entre production (<em>L</em><sub><em>Y</em></sub>) et recherche (<em>L</em><sub><em>A</em></sub>). Le stock d'idées <em>A</em> (le nombre de variétés de biens intermédiaires) évolue selon :</p>\n<p class=\"eq\"><em>Ȧ</em> = θ <em>L</em><sub><em>A</em></sub> <em>A</em> &nbsp;⇒&nbsp; <em>g</em><sub><em>A</em></sub> = θ <em>L</em><sub><em>A</em></sub></p>\n<p>La productivité des chercheurs est proportionnelle au stock de connaissances existantes : on « monte sur les épaules des géants ». Chaque nouvelle idée est brevetée et donne à son inventeur un monopole sur la production d'un bien intermédiaire ; ce profit de monopole rémunère la recherche. À l'équilibre, la répartition du travail entre production et recherche égalise le salaire offert dans les deux secteurs, et le taux de croissance dépend positivement de la taille de la population active et de la productivité de la recherche, négativement du taux d'intérêt (qui déprécie les profits futurs).</p>\n<h4>Inefficacités</h4>\n<ul>\n<li>Le pouvoir de monopole réduit l'usage des biens intermédiaires sous l'optimum.</li>\n<li>Les chercheurs ne tiennent pas compte de l'effet de leurs découvertes sur la productivité des chercheurs futurs (externalité intertemporelle positive).</li>\n</ul>\n<p>Ces deux effets conduisent à une croissance d'équilibre inférieure à l'optimum : il y a trop peu de recherche. Romer a reçu le prix Nobel 2018 (avec Nordhaus) pour avoir intégré l'innovation technologique à l'analyse macroéconomique de long terme.</p>\n<h4>La critique de Jones (1995) et les effets d'échelle</h4>\n<p>Le modèle prédit un <strong>effet d'échelle</strong> : la croissance augmente avec le nombre de chercheurs. Or le nombre de chercheurs aux États-Unis a été multiplié par plusieurs depuis 1950 sans que la croissance de la productivité n'accélère. Jones (1995) propose des modèles <strong>semi-endogènes</strong>, avec <em>Ȧ</em> = θ <em>L</em><sub><em>A</em></sub> <em>A</em><sup>φ</sup> et φ &lt; 1 : les idées deviennent plus difficiles à trouver. La croissance de long terme vaut alors <em>g</em><sub><em>A</em></sub> = <em>n</em> / (1 − φ) et dépend de la croissance démographique, non des politiques. Bloom, Jones, Van Reenen et Webb (2020, « Are Ideas Getting Harder to Find? ») estiment que la productivité de la recherche baisse d'environ 5 % par an aux États-Unis.</p>"
      },
      {
       "titre": "La destruction créatrice : Aghion et Howitt (1992)",
       "contenu": "<p>Schumpeter (1942, <em>Capitalisme, socialisme et démocratie</em>) décrit la croissance comme un processus de <strong>destruction créatrice</strong> : les innovations rendent obsolètes les produits, techniques et entreprises existants. Aghion et Howitt (1992) formalisent cette intuition dans un modèle de croissance à <strong>échelle de qualité</strong> (voir aussi Grossman et Helpman 1991).</p>\n<h4>Le mécanisme</h4>\n<p>Chaque innovation améliore la qualité (la productivité) du bien intermédiaire d'un facteur γ &gt; 1. L'innovateur obtient un monopole jusqu'à ce qu'il soit lui-même remplacé par l'innovateur suivant : la rente de monopole est temporaire. Les innovations arrivent selon un processus aléatoire, avec un taux d'arrivée μ = λ <em>n</em>, où <em>n</em> est l'effort de recherche et λ la productivité de la recherche. Après chaque innovation, la productivité est multipliée par γ ; en moyenne, le taux de croissance est donc :</p>\n<p class=\"eq\"><em>g</em> = λ <em>n</em> ln γ</p>\n<p>L'effort de recherche <em>n</em> est déterminé par une condition d'<strong>arbitrage</strong> : le coût marginal de la recherche (le salaire) égale la valeur espérée d'une innovation, c'est-à-dire la rente de monopole actualisée au taux <em>r</em> + λ<em>n</em> (le taux d'intérêt plus la probabilité d'être détrôné). La recherche, donc la croissance, augmente avec la taille des innovations γ, la productivité de la recherche λ, la taille du marché et la protection des rentes ; elle diminue avec le taux d'intérêt.</p>\n<h4>Croissance trop forte ou trop faible ?</h4>\n<p>Deux effets s'opposent. L'innovateur ignore que son innovation profite aux innovateurs futurs (externalité de connaissance : trop peu de recherche). Mais il ignore aussi qu'il détruit la rente de son prédécesseur (<strong>effet de vol de marché</strong>, business stealing : trop de recherche). La croissance d'équilibre peut donc être supérieure ou inférieure à l'optimum.</p>\n<h4>Prolongements empiriques</h4>\n<ul>\n<li><strong>Concurrence et innovation</strong> : Aghion, Bloom, Blundell, Griffith et Howitt (2005) trouvent une relation en <strong>U inversé</strong> : une concurrence accrue stimule l'innovation dans les secteurs où les entreprises sont au coude à coude (effet « échapper à la concurrence »), mais la décourage dans les secteurs où un leader domine (baisse de la rente).</li>\n<li><strong>Distance à la frontière</strong> (Acemoglu, Aghion et Zilibotti 2006) : loin de la frontière technologique, un pays croît par imitation et investissement ; près de la frontière, il doit innover, ce qui exige concurrence, enseignement supérieur et marchés financiers développés. Des institutions adaptées au rattrapage (comme celles de la France des Trente Glorieuses) peuvent devenir un frein.</li>\n<li><strong>Réallocation</strong> : une part importante des gains de productivité provient de l'entrée de nouvelles entreprises et de la sortie des moins productives.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> le prix Nobel d'économie 2025 a été attribué pour moitié à Joel Mokyr, « pour avoir identifié les conditions préalables à une croissance soutenue par le progrès technique », et pour l'autre moitié conjointement à Philippe Aghion et Peter Howitt, « pour la théorie de la croissance soutenue par la destruction créatrice ». Mokyr, historien économique, montre que la croissance continue depuis la révolution industrielle repose sur l'accumulation de connaissances utiles, la combinaison du savoir scientifique et du savoir-faire pratique, et une culture ouverte au changement. Aghion et Howitt soulignent que la destruction créatrice suscite des résistances des entreprises en place et que la société doit gérer ces conflits pour que la croissance se poursuive.</div>"
      },
      {
       "titre": "Politiques publiques de croissance",
       "contenu": "<p>La croissance endogène donne aux politiques publiques un rôle sur le <strong>taux</strong> de croissance de long terme, et non plus seulement sur le niveau du revenu. Les principaux leviers :</p>\n<ul>\n<li><strong>Soutien à la R&amp;D</strong> : subventions, crédits d'impôt (en France, le crédit d'impôt recherche, CIR), financement de la recherche fondamentale, dont les retombées sont les plus difficiles à approprier. L'intensité de R&amp;D (dépense intérieure de R&amp;D rapportée au PIB) était en 2022 de 2,2 % en France, 2,1 % dans l'Union européenne, 3,1 % en Allemagne et 3,6 % aux États-Unis (Insee, d'après OCDE et Eurostat), loin de l'objectif européen de 3 % fixé à Lisbonne en 2000.</li>\n<li><strong>Propriété intellectuelle</strong> : les brevets créent la rente qui incite à innover, mais retardent la diffusion. La durée optimale de protection résulte d'un arbitrage entre incitation et diffusion.</li>\n<li><strong>Éducation</strong> : investissement en capital humain (Lucas), avec un accent sur l'enseignement supérieur et la recherche pour les pays proches de la frontière.</li>\n<li><strong>Politique de concurrence</strong> : favoriser l'entrée et la contestabilité des marchés, en tenant compte de l'U inversé.</li>\n<li><strong>Infrastructures et investissement public</strong> : Barro (1990) modélise les dépenses publiques productives comme un facteur de production ; il existe une taille optimale de l'État (au-delà, la fiscalité freine l'accumulation).</li>\n<li><strong>Politique industrielle</strong> et innovation « orientée » vers des objectifs (transition énergétique, défense, santé), qui fait l'objet d'un regain d'intérêt.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> croissance endogène = rendements non décroissants des facteurs accumulables. AK : <em>g</em> = <em>sA</em> − <em>n</em> − δ. Romer (1990) : les idées sont non rivales, <em>g</em> = θ <em>L</em><sub><em>A</em></sub>. Aghion-Howitt (1992) : <em>g</em> = λ<em>n</em> ln γ, destruction créatrice. Les politiques publiques affectent le taux de croissance, mais l'équilibre de marché n'est pas optimal.</div>"
      },
      {
       "titre": "Les causes profondes : institutions et géographie",
       "contenu": "<p>Accumulation, capital humain et innovation sont des causes <strong>immédiates</strong> de la croissance. Pourquoi certaines sociétés accumulent-elles et innovent-elles plus que d'autres ? La recherche des causes <strong>profondes</strong> oppose principalement institutions et géographie (la culture constituant une troisième piste).</p>\n<h4>Les institutions</h4>\n<p>North (1990, prix Nobel 1993) définit les <strong>institutions</strong> comme « les règles du jeu dans une société », formelles (constitution, droit de propriété, système judiciaire) et informelles (normes, conventions). Acemoglu, Johnson et Robinson distinguent les institutions <strong>inclusives</strong>, qui protègent les droits de propriété d'une large partie de la population, garantissent l'égalité devant la loi et ouvrent l'accès aux marchés, et les institutions <strong>extractives</strong>, conçues pour qu'une élite capte les ressources. Seules les premières incitent durablement à investir et innover (Acemoglu et Robinson 2012, <em>Why Nations Fail</em>).</p>\n<p>Le problème empirique est la causalité inverse : les pays riches peuvent se payer de meilleures institutions. Dans « The Colonial Origins of Comparative Development » (2001), AJR utilisent une <strong>variable instrumentale</strong> : la <strong>mortalité des colons</strong> européens. Là où elle était faible (Amérique du Nord, Australie), les Européens se sont installés et ont importé des institutions protectrices ; là où elle était élevée (Afrique équatoriale), ils ont mis en place des institutions extractives, qui ont persisté après l'indépendance. L'instrument prédit les institutions actuelles, et les institutions ainsi prédites expliquent une grande partie des écarts de revenu. Dans « Reversal of Fortune » (2002), ils montrent que parmi les anciennes colonies, les régions les plus prospères vers 1500 sont devenues relativement pauvres : un renversement incompatible avec une explication purement géographique.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> le prix Nobel d'économie 2024 a été attribué à Daron Acemoglu, Simon Johnson et James Robinson « pour leurs études sur la façon dont les institutions se forment et affectent la prospérité ». Un exemple emblématique est la Corée : partageant en 1945 géographie, culture et niveau de développement, le Nord et le Sud ont adopté des institutions opposées ; le revenu par habitant du Sud est aujourd'hui sans commune mesure avec celui du Nord. De même, la ville de Nogales, coupée par la frontière entre l'Arizona et le Sonora, présente de fortes différences de revenu, de santé et de services publics entre ses deux moitiés.</div>\n<h4>La géographie</h4>\n<p>Sachs (2001) et Gallup, Sachs et Mellinger (1999) insistent sur le climat (maladies tropicales comme le paludisme, productivité agricole), l'enclavement (coûts de transport) et les ressources naturelles. Diamond (1997, <em>De l'inégalité parmi les sociétés</em>) explique les avantages de l'Eurasie par l'orientation est-ouest du continent et la disponibilité d'espèces domesticables. Les partisans des institutions répondent que la géographie agit surtout à travers les institutions qu'elle a façonnées (Engerman et Sokoloff 2002 sur les dotations factorielles des Amériques). Le débat reste ouvert ; la plupart des chercheurs admettent un rôle des deux, ainsi que de la culture (confiance, valeurs), que Mokyr place au cœur de la révolution industrielle.</p>"
      },
      {
       "titre": "Croissance et environnement",
       "contenu": "<p>La croissance peut-elle être durable sur une planète finie ? Le rapport Meadows au Club de Rome (1972, <em>Les limites à la croissance</em>) prévoyait un effondrement si la croissance démographique et industrielle se poursuivait. Les économistes ont répondu avec plusieurs outils.</p>\n<ul>\n<li><strong>Ressources épuisables</strong> : Solow (1974) et Stiglitz (1974) montrent qu'une consommation par tête constante, voire croissante, est possible avec une ressource épuisable si le progrès technique est suffisant ou si le capital produit peut se substituer à la ressource. La <strong>règle de Hartwick</strong> (1977) prescrit de réinvestir les rentes tirées de la ressource en capital reproductible. C'est la conception de la <strong>soutenabilité faible</strong> ; la <strong>soutenabilité forte</strong> considère au contraire que certains capitaux naturels sont irremplaçables.</li>\n<li><strong>Courbe de Kuznets environnementale</strong> : Grossman et Krueger (1995) trouvent que certaines pollutions locales (dioxyde de soufre) augmentent puis diminuent avec le revenu par tête (U inversé). La relation est beaucoup moins nette pour les émissions de CO<sub>2</sub>, dont les effets sont globaux et différés ; elle peut aussi refléter la délocalisation des industries polluantes.</li>\n<li><strong>Externalités et tarification du carbone</strong> : Nordhaus (prix Nobel 2018) intègre le climat aux modèles de croissance (modèle DICE) : les émissions sont une externalité négative qu'une taxe carbone doit corriger.</li>\n<li><strong>Progrès technique dirigé</strong> : Acemoglu, Aghion, Bursztyn et Hémous (2012) montrent que l'innovation se dirige vers les technologies « sales » ou « propres » selon la taille de leur marché et le stock de connaissances accumulé (dépendance au sentier). Une combinaison temporaire de taxe carbone et de subventions à la recherche verte peut réorienter durablement l'innovation sans arrêter la croissance. Aghion et ses coauteurs (2016) le vérifient sur les brevets de l'industrie automobile.</li>\n</ul>\n<p>Le débat entre <strong>croissance verte</strong> (découplage entre PIB et émissions) et <strong>décroissance</strong> porte sur l'ampleur et la vitesse du découplage. Plusieurs pays avancés, dont la France, ont réduit leurs émissions territoriales tout en augmentant leur PIB depuis les années 1990 (découplage absolu), mais à un rythme jugé insuffisant au regard des objectifs climatiques, et en partie compensé par les émissions importées.</p>"
      }
     ],
     "points_cles": [
      "La croissance endogène exige des rendements non décroissants des facteurs accumulables au niveau agrégé.",
      "Modèle AK : g = sA − n − δ ; l'épargne a un effet de croissance, il n'y a ni convergence ni état stationnaire.",
      "Romer (1986) : externalités d'apprentissage ; rendements constants pour l'entreprise, AK au niveau agrégé ; croissance sous-optimale.",
      "Lucas (1988) : la croissance est tirée par l'accumulation de capital humain, ḣ/h = B(1 − u).",
      "Romer (1990) : les idées sont non rivales et partiellement excluables ; la R&D motivée par des rentes de monopole détermine g = θ L_A.",
      "Effet d'échelle critiqué par Jones (1995) : modèles semi-endogènes où g dépend de la croissance démographique.",
      "Aghion-Howitt (1992) : destruction créatrice, g = λ n ln γ ; la croissance d'équilibre peut être trop forte (vol de marché) ou trop faible (externalité de connaissance).",
      "Relation en U inversé entre concurrence et innovation (Aghion et al. 2005).",
      "Prix Nobel 2025 : Mokyr (conditions de la croissance soutenue par le progrès technique), Aghion et Howitt (destruction créatrice).",
      "Institutions inclusives contre extractives ; AJR (2001) instrumentent les institutions par la mortalité des colons ; prix Nobel 2024.",
      "La géographie (climat, maladies, enclavement) est une cause profonde concurrente, qui agit en partie via les institutions.",
      "Soutenabilité faible (règle de Hartwick) contre soutenabilité forte ; courbe de Kuznets environnementale peu vérifiée pour le CO2.",
      "Le progrès technique dirigé justifie une combinaison taxe carbone et subventions à la recherche verte."
     ],
     "lexique": [
      {
       "terme": "Croissance endogène",
       "def": "Théorie qui explique le taux de croissance de long terme par les décisions des agents (épargne, éducation, recherche) plutôt que par un progrès technique exogène."
      },
      {
       "terme": "Modèle AK",
       "def": "Modèle où la production est proportionnelle au capital au sens large, Y = AK, sans rendements décroissants."
      },
      {
       "terme": "Externalité de connaissance",
       "def": "Effet positif non rémunéré des connaissances produites par un agent sur la productivité des autres."
      },
      {
       "terme": "Bien non rival",
       "def": "Bien dont l'usage par une personne ne réduit pas sa disponibilité pour les autres, comme une idée."
      },
      {
       "terme": "Excluabilité",
       "def": "Possibilité d'empêcher quelqu'un d'utiliser un bien, par exemple par un brevet."
      },
      {
       "terme": "Effet d'échelle",
       "def": "Prédiction selon laquelle la croissance augmente avec la taille de la population ou le nombre de chercheurs."
      },
      {
       "terme": "Destruction créatrice",
       "def": "Processus par lequel les innovations remplacent les produits, techniques et entreprises existants (Schumpeter 1942)."
      },
      {
       "terme": "Effet de vol de marché",
       "def": "Destruction de la rente de l'innovateur précédent par le nouvel innovateur, non prise en compte dans sa décision."
      },
      {
       "terme": "Institutions inclusives",
       "def": "Règles qui protègent les droits de propriété d'une large population, garantissent l'égalité devant la loi et l'accès aux marchés."
      },
      {
       "terme": "Institutions extractives",
       "def": "Règles qui permettent à une élite de capter les ressources au détriment du reste de la société."
      },
      {
       "terme": "Variable instrumentale",
       "def": "Variable corrélée à la variable explicative mais sans effet direct sur la variable expliquée, utilisée pour identifier un effet causal."
      },
      {
       "terme": "Règle de Hartwick",
       "def": "Principe selon lequel les rentes tirées d'une ressource épuisable doivent être réinvesties en capital reproductible pour maintenir la consommation."
      },
      {
       "terme": "Courbe de Kuznets environnementale",
       "def": "Relation en U inversé entre le revenu par tête et certaines pollutions."
      }
     ],
     "qcm": [
      {
       "q": "Dans un modèle AK avec A = 0,4, s = 0,25, n = 1 % et δ = 5 %, quel est le taux de croissance du revenu par tête ?",
       "options": [
        "10 %",
        "0 %, car l'économie atteint un état stationnaire",
        "6 %",
        "4 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "g = sA − n − δ = 0,25 × 0,4 − 0,01 − 0,05 = 0,10 − 0,06 = 4 %."
      },
      {
       "q": "Quelles propositions distinguent le modèle AK du modèle de Solow ? (deux réponses)",
       "options": [
        "Dans le modèle AK, une hausse du taux d'épargne augmente durablement le taux de croissance.",
        "Dans le modèle AK, les pays pauvres croissent plus vite que les pays riches.",
        "Dans le modèle AK, la productivité marginale du capital est décroissante.",
        "Dans le modèle AK, il n'y a pas d'état stationnaire pour le capital par tête."
       ],
       "bonnes": [
        0,
        3
       ],
       "explication": "La productivité marginale du capital est constante et égale à A, donc l'épargne a un effet de croissance et k croît indéfiniment. Le taux de croissance ne dépend pas de k : pas de convergence."
      },
      {
       "q": "Dans le modèle de Romer (1986), pourquoi la croissance d'équilibre est-elle inférieure à l'optimum ?",
       "options": [
        "Parce que les entreprises ont un pouvoir de monopole.",
        "Parce que chaque entreprise ignore l'effet de son investissement sur la productivité des autres.",
        "Parce que l'épargne est exogène.",
        "Parce que le capital humain a des rendements décroissants."
       ],
       "bonnes": [
        1
       ],
       "explication": "Le rendement privé du capital, αB, est inférieur à son rendement social, égal à B, à cause de l'externalité d'apprentissage : on investit trop peu. Une subvention à l'investissement peut améliorer le bien-être."
      },
      {
       "q": "Quelle propriété des idées, mise en avant par Romer (1990), est à l'origine des rendements croissants ?",
       "options": [
        "Leur excluabilité totale.",
        "Leur rivalité.",
        "Leur non-rivalité.",
        "Leur dépréciation rapide."
       ],
       "bonnes": [
        2
       ],
       "explication": "Une idée peut être utilisée simultanément par tous sans être épuisée : pour doubler la production, il suffit de doubler les facteurs rivaux, d'où des rendements croissants si l'on compte aussi les idées."
      },
      {
       "q": "Dans le modèle d'Aghion-Howitt, l'arrivée des innovations a un taux λn = 0,5 par an et chaque innovation multiplie la productivité par 1,04. Quel est le taux de croissance moyen ?",
       "options": [
        "0,5 %",
        "4 %",
        "2 %",
        "Environ 1,96 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "g = λn ln γ = 0,5 × ln 1,04 ≈ 0,5 × 0,0392 ≈ 1,96 %. L'approximation ln γ ≈ 0,04 donne 2 %."
      },
      {
       "q": "Quelles propositions sont exactes à propos du modèle d'Aghion et Howitt (1992) ? (deux réponses)",
       "options": [
        "Les rentes de monopole sont permanentes.",
        "L'effet de vol de marché tend à produire trop de recherche par rapport à l'optimum.",
        "Une hausse du taux d'intérêt réduit l'effort de recherche.",
        "La croissance d'équilibre est toujours inférieure à l'optimum."
       ],
       "bonnes": [
        1,
        2
       ],
       "explication": "L'innovateur ne tient pas compte de la rente qu'il détruit, ce qui pousse à trop de recherche ; et les profits futurs, actualisés à r + λn, valent moins quand r augmente. Les rentes sont temporaires et l'écart à l'optimum est de signe ambigu."
      },
      {
       "q": "Quelle critique Jones (1995) adresse-t-il aux premiers modèles de R&D ?",
       "options": [
        "Ils prédisent un effet d'échelle démenti par la hausse du nombre de chercheurs sans accélération de la croissance.",
        "Ils ignorent le capital humain.",
        "Ils supposent des rendements décroissants des idées.",
        "Ils ne prennent pas en compte les brevets."
       ],
       "bonnes": [
        0
       ],
       "explication": "Avec g = θ L_A, la croissance devrait augmenter avec le nombre de chercheurs, ce qui n'est pas observé. Jones propose des modèles semi-endogènes où les idées deviennent plus difficiles à trouver (φ < 1)."
      },
      {
       "q": "Comment Acemoglu, Johnson et Robinson (2001) identifient-ils l'effet causal des institutions sur le revenu ?",
       "options": [
        "En comparant les taux d'épargne des anciennes colonies.",
        "En mesurant la distance à l'équateur.",
        "En utilisant la mortalité des colons européens comme variable instrumentale des institutions.",
        "En régressant le revenu sur la durée de la colonisation."
       ],
       "bonnes": [
        2
       ],
       "explication": "La mortalité des colons a déterminé le type d'institutions mis en place, qui ont persisté ; elle permet d'isoler la part des institutions non causée par le revenu lui-même."
      },
      {
       "q": "Quelles propositions sur les prix Nobel 2024 et 2025 sont exactes ? (deux réponses)",
       "options": [
        "Le prix 2024 a récompensé Acemoglu, Johnson et Robinson pour leurs études sur la formation des institutions et leurs effets sur la prospérité.",
        "Le prix 2025 a récompensé Romer et Nordhaus pour la croissance endogène et le climat.",
        "Le prix 2024 a récompensé Aghion et Howitt pour la destruction créatrice.",
        "Le prix 2025 a été partagé entre Mokyr d'une part et Aghion et Howitt d'autre part."
       ],
       "bonnes": [
        0,
        3
       ],
       "explication": "AJR ont reçu le prix 2024 ; le prix 2025 est allé pour moitié à Mokyr et pour moitié à Aghion et Howitt. Romer et Nordhaus ont été récompensés en 2018."
      },
      {
       "q": "Selon la relation en U inversé d'Aghion et al. (2005), une hausse de la concurrence :",
       "options": [
        "réduit toujours l'innovation car elle diminue les rentes.",
        "stimule l'innovation lorsque la concurrence est initialement faible et que les entreprises sont au coude à coude, la décourage lorsqu'elle est déjà forte.",
        "augmente toujours l'innovation.",
        "n'a aucun effet sur l'innovation."
       ],
       "bonnes": [
        1
       ],
       "explication": "L'effet « échapper à la concurrence » domine quand les entreprises sont proches ; l'effet de réduction de la rente domine quand un leader est loin devant ou que la concurrence est déjà intense."
      },
      {
       "q": "Quelle proposition est exacte à propos de la croissance et de l'environnement ?",
       "options": [
        "La courbe de Kuznets environnementale est solidement vérifiée pour les émissions de CO2.",
        "La soutenabilité forte suppose que le capital produit peut remplacer tout capital naturel.",
        "La règle de Hartwick recommande de réinvestir les rentes des ressources épuisables en capital reproductible.",
        "Le progrès technique dirigé implique qu'une taxe carbone est inutile."
       ],
       "bonnes": [
        2
       ],
       "explication": "C'est la condition de la soutenabilité faible. La courbe en U inversé est surtout vérifiée pour des pollutions locales, la soutenabilité forte nie la substituabilité, et le progrès technique dirigé justifie une combinaison taxe carbone et subventions."
      },
      {
       "q": "Dans le modèle de Lucas (1988), les individus consacrent 85 % de leur temps à produire et la productivité de la formation B vaut 0,1. Quel est le taux de croissance de long terme du revenu par tête ?",
       "options": [
        "8,5 %",
        "15 %",
        "10 %",
        "1,5 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "ḣ/h = B(1 − u) = 0,1 × 0,15 = 1,5 %, et sur le sentier équilibré le revenu par tête croît au même taux que h."
      }
     ]
    },
    {
     "id": "mac2-chomage-structurel",
     "titre": "Le chômage structurel",
     "duree": 55,
     "niveau": "L2",
     "objectifs": [
      "Définir le chômage au sens du BIT et raisonner en stocks et en flux sur le marché du travail.",
      "Dériver le taux de chômage d'équilibre u = s / (s + f) et l'utiliser en exercice.",
      "Expliquer le chômage frictionnel par l'appariement : fonction d'appariement, courbe de Beveridge, intuition du modèle DMP.",
      "Présenter le salaire d'efficience (Shapiro-Stiglitz 1984) et le modèle WS-PS de détermination du chômage d'équilibre.",
      "Relier taux de chômage naturel et NAIRU, et expliquer l'hystérèse.",
      "Analyser les effets des institutions du marché du travail (assurance chômage, salaire minimum, protection de l'emploi) et les comparaisons internationales."
     ],
     "sections": [
      {
       "titre": "Définitions et mesure du chômage",
       "contenu": "<p>Selon le <strong>Bureau international du travail</strong> (BIT), est chômeur une personne en âge de travailler (15 ans ou plus) qui remplit trois conditions : elle n'a pas travaillé, ne serait-ce qu'une heure, pendant la semaine de référence ; elle est disponible pour travailler dans les deux semaines ; elle a recherché activement un emploi au cours des quatre semaines précédentes (ou a trouvé un emploi qui commence dans moins de trois mois). En France, l'Insee mesure ce chômage par l'enquête Emploi ; il ne faut pas le confondre avec le nombre d'inscrits à France Travail (ex-Pôle emploi), qui relève d'une logique administrative.</p>\n<p>La <strong>population active</strong> <em>L</em> est la somme des personnes en emploi <em>E</em> et des chômeurs <em>U</em>. Le <strong>taux de chômage</strong> est <em>u</em> = <em>U</em> / <em>L</em> ; le <strong>taux d'emploi</strong> est <em>E</em> / population en âge de travailler ; le <strong>taux d'activité</strong> est <em>L</em> / population en âge de travailler. Entre l'emploi, le chômage et l'inactivité existe un <strong>halo</strong> : personnes souhaitant travailler mais non comptées comme chômeuses (non disponibles, ou ne recherchant pas activement, notamment les travailleurs découragés). Le <strong>sous-emploi</strong> désigne les personnes à temps partiel souhaitant travailler davantage.</p>\n<p>Ordres de grandeur récents : au deuxième trimestre 2026, le taux de chômage au sens du BIT était de 8,3 % en France (Insee, champ France y compris Mayotte), en hausse depuis le point bas d'environ 7 % atteint au début de 2023 ; il atteignait 21,6 % pour les 15-24 ans ; le halo représentait environ 1,9 million de personnes. Il était d'environ 6,4 % dans la zone euro à l'été 2026 (Eurostat) et d'environ 4 % aux États-Unis.</p>\n<h4>Chômage conjoncturel et structurel</h4>\n<p>Le <strong>chômage conjoncturel</strong> (ou keynésien) résulte d'une insuffisance de la demande agrégée : il augmente en récession et diminue en expansion. Le <strong>chômage structurel</strong> est le niveau de chômage autour duquel l'économie fluctue, même lorsque la production est à son niveau potentiel. Il comprend le <strong>chômage frictionnel</strong> (temps nécessaire pour qu'un chômeur et un emploi vacant se trouvent), le chômage d'<strong>inadéquation</strong> (compétences ou localisation des chômeurs différentes de celles requises par les emplois vacants) et le chômage dû à un salaire réel durablement supérieur au niveau d'équilibre concurrentiel (<strong>chômage classique</strong> ou de salaire). Ce chapitre porte sur le chômage structurel, qui ne peut être réduit durablement par la politique de demande.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> une baisse du taux de chômage ne signifie pas forcément une hausse de l'emploi : elle peut venir d'un retrait de la population active (découragement). Il faut toujours regarder aussi le taux d'emploi et le halo.</div>"
      },
      {
       "titre": "Stocks et flux : le taux de chômage d'équilibre",
       "contenu": "<p>Le marché du travail est le siège de flux bruts considérables : chaque mois, des millions de personnes trouvent ou perdent un emploi, alors que le stock de chômeurs varie peu. Cette vision dynamique, développée notamment par Hall (1979) et Pissarides (2000), est indispensable pour comprendre le chômage d'équilibre.</p>\n<p>Simplifions en ignorant l'inactivité et en supposant la population active <em>L</em> constante. Soit <em>s</em> le <strong>taux de séparation</strong> (probabilité mensuelle qu'un salarié perde son emploi) et <em>f</em> le <strong>taux de retour à l'emploi</strong> (probabilité mensuelle qu'un chômeur trouve un emploi). La variation du nombre de chômeurs est :</p>\n<p class=\"eq\">Δ<em>U</em> = <em>s</em> <em>E</em> − <em>f</em> <em>U</em></p>\n<p>À l'état stationnaire, Δ<em>U</em> = 0 : les entrées égalent les sorties, <em>s</em> <em>E</em> = <em>f</em> <em>U</em>. En remplaçant <em>E</em> = <em>L</em> − <em>U</em> : <em>s</em> (<em>L</em> − <em>U</em>) = <em>f</em> <em>U</em>, donc <em>s</em> <em>L</em> = (<em>s</em> + <em>f</em>) <em>U</em> et :</p>\n<p class=\"eq\"><em>u</em>* = <em>U</em> / <em>L</em> = <em>s</em> / (<em>s</em> + <em>f</em>)</p>\n<p>Le taux de chômage d'équilibre augmente avec le taux de séparation et diminue avec le taux de retour à l'emploi. Toute politique visant à réduire durablement le chômage doit agir sur l'un de ces flux. La durée moyenne d'un épisode de chômage est 1 / <em>f</em> (en mois).</p>\n<p>Les pays diffèrent fortement par leurs flux. Aux États-Unis, les taux de séparation et de retour à l'emploi sont élevés : le chômage y est un état fréquent mais bref. Dans plusieurs pays d'Europe continentale, dont la France, les deux taux sont beaucoup plus faibles (Elsby, Hobijn et Şahin 2013) : on perd moins souvent son emploi, mais on reste plus longtemps au chômage, et la part du <strong>chômage de longue durée</strong> (plus d'un an) est élevée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> chaque mois, 1,5 % des personnes en emploi perdent leur emploi et 20 % des chômeurs en retrouvent un. (1) Taux de chômage d'équilibre et durée moyenne du chômage. (2) Le taux de chômage est actuellement de 10 % : comment évolue-t-il ? (3) Une réforme porte <em>f</em> à 25 %.<br><br>(1) <em>u</em>* = 0,015 / (0,015 + 0,20) = 0,015 / 0,215 ≈ 7,0 %. Durée moyenne : 1 / 0,20 = 5 mois.<br>(2) Δ<em>u</em> = <em>s</em> (1 − <em>u</em>) − <em>f</em> <em>u</em> = 0,015 × 0,9 − 0,20 × 0,1 = 0,0135 − 0,020 = −0,0065 : le chômage baisse de 0,65 point le premier mois et converge vers 7 %.<br>(3) <em>u</em>* = 0,015 / 0,265 ≈ 5,7 % et la durée moyenne tombe à 4 mois. Une baisse de <em>s</em> de 1,5 % à 1,2 % aurait donné 0,012 / 0,212 ≈ 5,7 % également.</div>"
      },
      {
       "titre": "Chômage frictionnel et appariement : courbe de Beveridge et modèle DMP",
       "contenu": "<p>Le marché du travail n'est pas un marché walrasien centralisé : chercher un emploi ou un candidat prend du temps et coûte. Ces <strong>frictions d'appariement</strong> expliquent la coexistence de chômeurs et d'emplois vacants. Elles sont au cœur des travaux de Diamond (1982), Mortensen et Pissarides (1994), récompensés par le prix Nobel 2010 : le modèle <strong>DMP</strong>.</p>\n<h4>La fonction d'appariement</h4>\n<p>Le nombre d'embauches par période <em>M</em> dépend du nombre de chômeurs <em>U</em> et d'emplois vacants <em>V</em> :</p>\n<p class=\"eq\"><em>M</em> = <em>m</em> <em>U</em><sup>η</sup> <em>V</em><sup>1−η</sup></p>\n<p>avec <em>m</em> l'<strong>efficacité de l'appariement</strong> (qualité du service public de l'emploi, mobilité géographique, adéquation des qualifications). On définit la <strong>tension</strong> du marché du travail θ = <em>V</em> / <em>U</em>. Le taux de retour à l'emploi est <em>f</em> = <em>M</em> / <em>U</em> = <em>m</em> θ<sup>1−η</sup>, croissant avec θ ; le taux de pourvoi des postes est <em>q</em> = <em>M</em> / <em>V</em> = <em>m</em> θ<sup>−η</sup>, décroissant avec θ. Plus le marché est tendu, plus il est facile pour les chômeurs de trouver un emploi et difficile pour les entreprises de recruter.</p>\n<h4>La courbe de Beveridge</h4>\n<p>À l'état stationnaire, <em>u</em> = <em>s</em> / (<em>s</em> + <em>f</em>(θ)). Pour des valeurs données de <em>s</em> et de <em>m</em>, plus il y a de vacances, plus <em>f</em> est élevé et plus le chômage est faible. Dans un graphique avec le taux de chômage en abscisse et le taux de vacance en ordonnée, on obtient une courbe décroissante et convexe : la <strong>courbe de Beveridge</strong> (du nom de l'économiste britannique, auteur de <em>Full Employment in a Free Society</em>, 1944).</p>\n<ul>\n<li>Un <strong>mouvement le long</strong> de la courbe traduit la conjoncture : en expansion, les vacances augmentent et le chômage baisse (on remonte vers la gauche).</li>\n<li>Un <strong>déplacement de la courbe</strong> vers l'extérieur (nord-est) traduit une détérioration de l'appariement (baisse de <em>m</em>, inadéquation sectorielle ou géographique, hausse des séparations) : pour un même taux de vacance, le chômage est plus élevé. C'est un signe de hausse du chômage structurel.</li>\n</ul>\n<h4>L'intuition du modèle DMP</h4>\n<p>Les entreprises ouvrent des postes vacants tant que le coût de la vacance (un coût <em>c</em> par période, pendant une durée moyenne 1 / <em>q</em>(θ)) est inférieur à la valeur actualisée du profit d'un poste pourvu, (<em>y</em> − <em>w</em>) / (<em>r</em> + <em>s</em>). Cette condition de <strong>libre entrée</strong> définit une relation de <strong>création d'emplois</strong> : plus le salaire est élevé, moins les entreprises ouvrent de postes, et plus θ est faible. Le salaire résulte d'une <strong>négociation de Nash</strong> entre l'entreprise et le travailleur qui se partagent le surplus de l'appariement : il est d'autant plus élevé que le pouvoir de négociation des travailleurs, la tension du marché et le revenu du chômeur (indemnités <em>b</em>) sont élevés. L'équilibre détermine θ, donc <em>f</em>(θ), donc <em>u</em> par la courbe de Beveridge.</p>\n<p>Statique comparative : une hausse des indemnités de chômage <em>b</em> ou du pouvoir de négociation des salariés augmente le salaire, réduit la création d'emplois et élève le chômage ; une hausse de la productivité <em>y</em> l'abaisse ; une hausse du taux de séparation <em>s</em> l'élève. Le modèle montre aussi que le chômage n'est pas forcément inefficace : un certain chômage frictionnel est le prix d'appariements de qualité.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> aux États-Unis, après la crise de 2008-2009, la courbe de Beveridge s'est déplacée vers l'extérieur : le taux de vacance a remonté rapidement alors que le chômage restait élevé, ce qui a alimenté le débat sur un « chômage d'inadéquation » (travailleurs de la construction, effondrement immobilier). Un phénomène comparable, mais plus bref, a été observé après la pandémie de 2020, avec des tensions de recrutement record en 2021-2022 malgré un chômage encore supérieur à son niveau d'avant-crise.</div>"
      },
      {
       "titre": "Le salaire d'efficience : Shapiro et Stiglitz (1984)",
       "contenu": "<p>Pourquoi les entreprises ne baissent-elles pas les salaires en présence de chômeurs prêts à travailler pour moins ? La théorie du <strong>salaire d'efficience</strong> répond que la productivité des salariés dépend du salaire qu'ils perçoivent. Une entreprise peut donc avoir intérêt à payer plus que le salaire concurrentiel. Plusieurs justifications existent : nutrition (Leibenstein 1957, pertinente dans les pays pauvres), réduction du turnover et des coûts de recrutement (Salop 1979), sélection des meilleurs candidats (Weiss 1980), réciprocité et équité (Akerlof 1982, « échange de dons »), et incitation à l'effort.</p>\n<h4>La condition de Solow</h4>\n<p>Si la production dépend de l'effort <em>e</em>(<em>w</em>), l'entreprise minimise le coût par unité d'efficacité, <em>w</em> / <em>e</em>(<em>w</em>). La condition du premier ordre donne <em>e</em>′(<em>w</em>) <em>w</em> / <em>e</em>(<em>w</em>) = 1 : le salaire d'efficience est tel que l'élasticité de l'effort au salaire vaut 1 (Solow 1979). Il ne dépend pas des conditions du marché du travail : il n'y a pas de raison qu'il égalise offre et demande.</p>\n<h4>Le modèle de Shapiro et Stiglitz</h4>\n<p>Les salariés peuvent tirer au flanc (ne pas faire d'effort). L'entreprise ne les surveille qu'imparfaitement : un tire-au-flanc est détecté avec une probabilité <em>q</em> par unité de temps et licencié. Pour que le travailleur préfère faire l'effort (de coût <em>e</em>), il faut que la perte en cas de licenciement soit suffisante. Shapiro et Stiglitz montrent que cela exige un salaire satisfaisant la <strong>condition de non-tire-au-flanc</strong> :</p>\n<p class=\"eq\"><em>w</em> ≥ <em>e</em> + (<em>e</em> / <em>q</em>) × (ρ + <em>b</em> / <em>u</em>)</p>\n<p>où ρ est le taux d'actualisation et <em>b</em> le taux de séparation exogène. Le salaire requis est d'autant plus élevé que la surveillance est faible (<em>q</em> petit) et que le chômage est faible : si <em>u</em> tend vers 0, un licencié retrouve immédiatement un emploi et la menace de licenciement ne dissuade plus. Dans un graphique (emploi en abscisse, salaire en ordonnée), la courbe NSC est croissante et tend vers l'infini lorsque l'emploi approche de la population active ; elle coupe la demande de travail décroissante en un point où il subsiste du chômage.</p>\n<p>Conclusion célèbre : <strong>le chômage d'équilibre est un « dispositif disciplinaire »</strong>. Il est involontaire (les chômeurs voudraient travailler au salaire courant, voire à un salaire inférieur), mais les entreprises n'ont pas intérêt à baisser le salaire, car elles réduiraient l'effort. Une hausse des allocations chômage, en réduisant le coût de la perte d'emploi, déplace la courbe NSC vers le haut et augmente le chômage d'équilibre.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> en janvier 1914, Henry Ford double approximativement le salaire journalier de ses ouvriers (le « five dollar day »). Raff et Summers (1987) montrent que la hausse a fortement réduit le turnover et l'absentéisme et accru la productivité, au point que la mesure semble avoir été en grande partie autofinancée : une illustration du salaire d'efficience.</div>"
      },
      {
       "titre": "Négociation salariale et modèle WS-PS",
       "contenu": "<p>Le modèle WS-PS (wage setting, price setting), développé par Layard, Nickell et Jackman (1991) et popularisé par Blanchard, détermine le chômage d'équilibre par la confrontation de deux relations, l'une issue de la fixation des salaires, l'autre de la fixation des prix.</p>\n<h4>La relation WS (fixation des salaires)</h4>\n<p>Les salaires résultent d'une négociation (collective ou individuelle) ou d'une logique de salaire d'efficience. Dans les deux cas, le salaire négocié dépend positivement du niveau des prix anticipé, négativement du chômage (qui affaiblit le pouvoir de négociation des salariés) et positivement d'un ensemble de facteurs institutionnels <em>z</em> (indemnisation du chômage, protection de l'emploi, salaire minimum, pouvoir syndical) :</p>\n<p class=\"eq\"><em>W</em> = <em>P</em><sup>e</sup> <em>F</em>(<em>u</em>, <em>z</em>), avec <em>F</em> décroissante en <em>u</em> et croissante en <em>z</em></p>\n<h4>La relation PS (fixation des prix)</h4>\n<p>Les entreprises, en concurrence imparfaite, fixent leur prix en appliquant un taux de marge μ au coût unitaire du travail (avec une productivité normalisée à 1) :</p>\n<p class=\"eq\"><em>P</em> = (1 + μ) <em>W</em> &nbsp;⇒&nbsp; <em>W</em> / <em>P</em> = 1 / (1 + μ)</p>\n<p>Le salaire réel « compatible » avec la fixation des prix est constant et d'autant plus faible que la marge est élevée.</p>\n<h4>L'équilibre</h4>\n<p>À moyen terme, les anticipations de prix sont réalisées (<em>P</em><sup>e</sup> = <em>P</em>). Le taux de chômage d'équilibre <em>u</em><sub><em>n</em></sub> égalise le salaire réel revendiqué et le salaire réel concédé :</p>\n<p class=\"eq\"><em>F</em>(<em>u</em><sub><em>n</em></sub>, <em>z</em>) = 1 / (1 + μ)</p>\n<p>Graphique : taux de chômage en abscisse, salaire réel en ordonnée ; WS est décroissante, PS est une droite horizontale ; leur intersection donne <em>u</em><sub><em>n</em></sub>. Le chômage est le mécanisme qui rend compatibles les prétentions des salariés et celles des entreprises sur le partage de la valeur ajoutée. Statique comparative : une hausse de <em>z</em> (allocations plus généreuses) déplace WS vers le haut et augmente <em>u</em><sub><em>n</em></sub> ; une hausse de la marge μ (moins de concurrence sur le marché des biens) abaisse PS et augmente <em>u</em><sub><em>n</em></sub>. Les réformes de la concurrence sur les marchés de biens peuvent donc réduire le chômage. Une hausse de la productivité déplace PS vers le haut et réduit <em>u</em><sub><em>n</em></sub> si les salaires s'y ajustent avec retard ; elle est neutre à long terme si WS est indexée sur la productivité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> la relation WS s'écrit <em>W</em> / <em>P</em> = 0,95 − 2<em>u</em> + 0,1<em>z</em>, avec <em>z</em> = 0, et le taux de marge est μ = 0,25. (1) Chômage d'équilibre ? (2) La concurrence réduit la marge à 0,2. (3) Partant de (1), une réforme fait passer <em>z</em> à 0,2.<br><br>(1) PS : <em>W</em> / <em>P</em> = 1 / 1,25 = 0,8. 0,95 − 2<em>u</em> = 0,8 ⇒ <em>u</em><sub><em>n</em></sub> = 0,15 / 2 = 7,5 %.<br>(2) <em>W</em> / <em>P</em> = 1 / 1,2 ≈ 0,833 ; 0,95 − 2<em>u</em> = 0,833 ⇒ <em>u</em><sub><em>n</em></sub> ≈ 0,117 / 2 ≈ 5,8 %. Le salaire réel d'équilibre augmente et le chômage baisse.<br>(3) WS : 0,97 − 2<em>u</em> = 0,8 ⇒ <em>u</em><sub><em>n</em></sub> = 8,5 %. Le salaire réel d'équilibre reste 0,8 (fixé par PS) : seul le chômage s'ajuste.</div>"
      },
      {
       "titre": "Chômage naturel, NAIRU et hystérèse",
       "contenu": "<p>Friedman (1968) et Phelps (1967) définissent le <strong>taux de chômage naturel</strong> comme le taux vers lequel l'économie tend à long terme, déterminé par les caractéristiques structurelles du marché du travail et des biens, et non par la demande. Friedman insiste sur le fait que « naturel » ne veut pas dire « immuable » ni « souhaitable » : il dépend des institutions.</p>\n<p>Le lien avec l'inflation passe par la courbe de Phillips augmentée des anticipations. Si les salaires sont fixés sur la base de l'inflation anticipée et que les anticipations sont adaptatives (π<sup>e</sup><sub><em>t</em></sub> = π<sub><em>t</em>−1</sub>), on obtient :</p>\n<p class=\"eq\">π<sub><em>t</em></sub> − π<sub><em>t</em>−1</sub> = −α (<em>u</em><sub><em>t</em></sub> − <em>u</em><sub><em>n</em></sub>)</p>\n<p>Lorsque le chômage est inférieur à <em>u</em><sub><em>n</em></sub>, l'inflation accélère ; lorsqu'il est supérieur, elle ralentit. D'où le terme de <strong>NAIRU</strong> (Non-Accelerating Inflation Rate of Unemployment ; le concept est introduit par Modigliani et Papademos en 1975 sous le nom de NIRU) : le taux de chômage compatible avec une inflation stable. Dans le modèle WS-PS, le NAIRU et le chômage d'équilibre coïncident. On ne peut maintenir durablement le chômage sous le NAIRU qu'au prix d'une inflation toujours croissante.</p>\n<p>Le NAIRU n'est pas observable : il est estimé, avec une grande incertitude (Staiger, Stock et Watson 1997 obtiennent des intervalles de confiance de plusieurs points pour les États-Unis), et il évolue dans le temps. En Europe, il a fortement augmenté des années 1970 aux années 1990.</p>\n<h4>L'hystérèse</h4>\n<p>Le chômage européen est resté élevé après les chocs des années 1970-1980 bien après leur disparition. Blanchard et Summers (1986) proposent l'hypothèse d'<strong>hystérèse</strong> : le chômage d'équilibre dépend du chômage passé. Mécanismes :</p>\n<ul>\n<li><strong>Dépréciation du capital humain</strong> : les chômeurs de longue durée perdent des compétences et sont moins employables ;</li>\n<li><strong>Découragement et stigmatisation</strong> : les chômeurs de longue durée cherchent moins, les employeurs s'en méfient ;</li>\n<li><strong>Insiders-outsiders</strong> (Lindbeck et Snower 1988) : les salariés en place (insiders) négocient des salaires sans tenir compte des chômeurs (outsiders) ; après un choc, les licenciés ne pèsent plus sur la négociation, et le salaire est fixé pour maintenir l'emploi des insiders restants.</li>\n</ul>\n<p>Implication majeure : une récession prolongée peut accroître durablement le chômage structurel, ce qui renforce l'intérêt d'une politique macroéconomique de stabilisation et des politiques actives de l'emploi (formation, accompagnement). Ball (2009) trouve que les pays ayant connu les désinflations les plus longues ont subi les plus fortes hausses du NAIRU.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> <em>u</em>* = <em>s</em> / (<em>s</em> + <em>f</em>) ; WS : <em>W</em> = <em>P</em><sup>e</sup> <em>F</em>(<em>u</em>, <em>z</em>) ; PS : <em>W</em> / <em>P</em> = 1 / (1 + μ) ; le chômage d'équilibre égalise salaire revendiqué et salaire concédé. Il coïncide avec le NAIRU, qui peut être affecté par le chômage passé (hystérèse).</div>"
      },
      {
       "titre": "Institutions du marché du travail et comparaisons internationales",
       "contenu": "<h4>L'assurance chômage</h4>\n<p>L'indemnisation du chômage protège contre la perte de revenu et améliore l'appariement en permettant de chercher un emploi adapté. Mais en augmentant le revenu du chômeur <em>b</em>, elle élève le salaire de réserve et le salaire négocié (WS se déplace vers le haut), et elle réduit l'intensité de recherche : c'est l'aléa moral. Empiriquement, la durée de chômage augmente avec la durée et la générosité des indemnités, et le taux de sortie vers l'emploi augmente fortement à l'approche de la fin des droits (Katz et Meyer 1990 ; Le Barbanchon et ses coauteurs pour la France). La conception compte : indemnités dégressives, conditionnalité à la recherche, accompagnement.</p>\n<h4>Le salaire minimum</h4>\n<p>Dans le modèle concurrentiel, un salaire minimum supérieur au salaire d'équilibre crée du chômage parmi les moins qualifiés. Mais en situation de <strong>monopsone</strong> (employeur unique ou dominant fixant un salaire inférieur à la productivité marginale), un salaire minimum modéré peut accroître l'emploi. Card et Krueger (1994), comparant les fast-foods du New Jersey (hausse du salaire minimum) et de la Pennsylvanie voisine, ne trouvent pas de baisse de l'emploi ; Card a reçu le prix Nobel 2021 pour ses travaux empiriques. L'effet dépend du niveau du salaire minimum relativement au salaire médian : en France, le SMIC représente plus de 60 % du salaire médian, l'un des niveaux les plus élevés de l'OCDE, ce qui a motivé depuis les années 1990 les allègements de cotisations sociales sur les bas salaires pour réduire le coût du travail peu qualifié.</p>\n<h4>La protection de l'emploi</h4>\n<p>Les règles encadrant les licenciements (préavis, indemnités, procédures) réduisent les séparations <em>s</em>, mais aussi les embauches, car les entreprises anticipent le coût d'une rupture : <em>f</em> baisse. Dans <em>u</em> = <em>s</em> / (<em>s</em> + <em>f</em>), l'effet sur le niveau du chômage est théoriquement ambigu ; l'effet le plus robuste est un marché plus « sclérosé » : chômage plus long, rotation plus faible, difficultés d'insertion des jeunes. Une protection forte des contrats permanents coexistant avec des contrats temporaires flexibles crée un <strong>marché du travail dual</strong> (Espagne, France, Italie), où l'ajustement repose sur les jeunes et les moins qualifiés.</p>\n<h4>Comparaisons internationales</h4>\n<p>Le contraste entre l'Europe et les États-Unis a longtemps été central : de taux de chômage plus faibles en Europe dans les années 1960, on est passé à des taux nettement plus élevés à partir des années 1980. Blanchard et Wolfers (2000) l'expliquent par l'<strong>interaction</strong> entre des chocs communs (ralentissement de la productivité, hausse des taux d'intérêt réels) et des institutions différentes : les mêmes chocs ont eu des effets plus durables là où les institutions amplifiaient leur persistance. Plusieurs trajectoires sont instructives :</p>\n<ul>\n<li><strong>Danemark</strong> : la <strong>flexicurité</strong> associe faible protection de l'emploi, indemnisation généreuse et politiques actives intenses avec obligations de recherche.</li>\n<li><strong>Allemagne</strong> : après les réformes Hartz (2003-2005), qui ont durci l'indemnisation et réorganisé le service public de l'emploi, le chômage a fortement baissé au cours des années 2000 et 2010, même si la part des réformes et celle de la modération salariale ou de la décentralisation des négociations restent discutées (Dustmann et al. 2014).</li>\n<li><strong>Espagne</strong> : marché dual, chômage extrêmement sensible au cycle (plus de 25 % en 2013).</li>\n<li><strong>France</strong> : chômage structurel élevé et persistant depuis les années 1980, faible taux d'emploi des jeunes et des seniors, chômage de longue durée important ; nombreuses réformes (allègements de charges, ordonnances de 2017 plafonnant les indemnités prud'homales, réformes de l'assurance chômage de 2019-2023 modulant la durée d'indemnisation selon la conjoncture).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> l'effet de la protection de l'emploi sur le NIVEAU du chômage est ambigu (elle réduit à la fois les entrées et les sorties) ; son effet sur la DURÉE du chômage et sur la rotation est en revanche clairement positif. Ne pas affirmer qu'elle « crée du chômage » sans nuance.</div>"
      }
     ],
     "points_cles": [
      "Chômeur au sens du BIT : sans emploi, disponible sous deux semaines, en recherche active ; taux de chômage u = U/L.",
      "Chômage structurel : niveau autour duquel l'économie fluctue, insensible à la politique de demande ; il comprend frictionnel, inadéquation et chômage de salaire.",
      "Dynamique : ΔU = sE − fU ; à l'état stationnaire u* = s/(s + f) ; durée moyenne de chômage = 1/f.",
      "Fonction d'appariement M = m U^η V^(1−η) ; tension θ = V/U ; f croissant en θ.",
      "Courbe de Beveridge : relation décroissante vacances-chômage ; mouvement le long = conjoncture, déplacement vers l'extérieur = moins bon appariement.",
      "Modèle DMP (Nobel 2010) : création d'emplois par libre entrée et salaire négocié ; b, le pouvoir de négociation et s élèvent le chômage.",
      "Salaire d'efficience : condition de Solow (élasticité de l'effort au salaire = 1) ; le salaire n'égalise pas offre et demande.",
      "Shapiro-Stiglitz (1984) : le chômage est un dispositif disciplinaire ; NSC w ≥ e + (e/q)(ρ + b/u).",
      "WS : W = Pe F(u, z) ; PS : W/P = 1/(1 + μ) ; u_n tel que F(u_n, z) = 1/(1 + μ).",
      "Hausse de z ou de la marge μ ⇒ hausse du chômage d'équilibre ; le salaire réel d'équilibre est fixé par PS.",
      "NAIRU : π(t) − π(t−1) = −α(u(t) − u_n) ; maintenir u sous le NAIRU accélère l'inflation (Friedman 1968, Phelps 1967).",
      "Hystérèse (Blanchard-Summers 1986) : capital humain, découragement, insiders-outsiders ; le chômage passé élève le chômage d'équilibre.",
      "Assurance chômage : protection et meilleur appariement contre aléa moral ; salaire minimum : effet négatif en concurrence, potentiellement positif en monopsone (Card-Krueger 1994).",
      "Protection de l'emploi : effet ambigu sur le niveau du chômage, positif sur sa durée ; Blanchard-Wolfers (2000) : interaction chocs-institutions."
     ],
     "lexique": [
      {
       "terme": "Chômeur au sens du BIT",
       "def": "Personne de 15 ans ou plus sans emploi durant la semaine de référence, disponible sous deux semaines et ayant recherché activement un emploi."
      },
      {
       "terme": "Halo autour du chômage",
       "def": "Personnes inactives souhaitant travailler mais non comptées comme chômeuses (non disponibles ou sans recherche active)."
      },
      {
       "terme": "Taux de séparation",
       "def": "Probabilité par période qu'une personne en emploi perde ou quitte son emploi."
      },
      {
       "terme": "Taux de retour à l'emploi",
       "def": "Probabilité par période qu'un chômeur trouve un emploi."
      },
      {
       "terme": "Chômage frictionnel",
       "def": "Chômage lié au temps nécessaire pour que chômeurs et emplois vacants se rencontrent."
      },
      {
       "terme": "Fonction d'appariement",
       "def": "Relation qui donne le nombre d'embauches en fonction du nombre de chômeurs et d'emplois vacants."
      },
      {
       "terme": "Courbe de Beveridge",
       "def": "Relation décroissante entre taux de vacance et taux de chômage."
      },
      {
       "terme": "Salaire d'efficience",
       "def": "Salaire supérieur au salaire concurrentiel, fixé par l'entreprise parce qu'il accroît la productivité des salariés."
      },
      {
       "terme": "Condition de non-tire-au-flanc",
       "def": "Salaire minimal qui incite le salarié à fournir l'effort, compte tenu du risque d'être détecté et licencié."
      },
      {
       "terme": "Taux de marge",
       "def": "Écart proportionnel μ entre le prix et le coût unitaire du travail, reflet du pouvoir de marché des entreprises."
      },
      {
       "terme": "NAIRU",
       "def": "Taux de chômage compatible avec une inflation stable."
      },
      {
       "terme": "Hystérèse",
       "def": "Dépendance du chômage d'équilibre à l'égard du chômage passé."
      },
      {
       "terme": "Insiders-outsiders",
       "def": "Théorie selon laquelle les salariés en place négocient les salaires sans tenir compte des chômeurs."
      },
      {
       "terme": "Flexicurité",
       "def": "Modèle combinant faible protection de l'emploi, indemnisation généreuse et politiques actives de l'emploi."
      }
     ],
     "qcm": [
      {
       "q": "Quelle personne est comptée comme chômeuse au sens du BIT ?",
       "options": [
        "Une personne inscrite à France Travail qui a travaillé 20 heures dans la semaine de référence.",
        "Une personne sans emploi, disponible sous deux semaines, ayant envoyé des candidatures le mois dernier.",
        "Une personne sans emploi qui souhaite travailler mais a cessé de chercher.",
        "Une étudiante sans emploi qui ne cherche pas de travail."
       ],
       "bonnes": [
        1
       ],
       "explication": "Les trois critères sont remplis. Avoir travaillé ne serait-ce qu'une heure exclut du chômage ; ne pas chercher place la personne dans le halo ou l'inactivité."
      },
      {
       "q": "Chaque mois, 2 % des actifs occupés perdent leur emploi et 18 % des chômeurs en retrouvent un. Quel est le taux de chômage d'équilibre ?",
       "options": [
        "2 %",
        "11,1 %",
        "18 %",
        "10 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "u* = s/(s + f) = 0,02/(0,02 + 0,18) = 0,02/0,20 = 10 %. Diviser s par f donnerait 11,1 %."
      },
      {
       "q": "Quelles propositions sont exactes à propos de la courbe de Beveridge ? (deux réponses)",
       "options": [
        "Une récession se traduit par un mouvement le long de la courbe vers plus de chômage et moins de vacances.",
        "Une baisse de l'efficacité de l'appariement la déplace vers l'origine.",
        "Elle relie positivement le taux de chômage et le taux de vacance.",
        "Un déplacement vers l'extérieur signale une hausse du chômage structurel."
       ],
       "bonnes": [
        0,
        3
       ],
       "explication": "La conjoncture fait glisser l'économie le long de la courbe décroissante ; une détérioration de l'appariement la déplace vers l'extérieur (plus de chômage à vacances données), ce qui traduit une hausse du chômage structurel."
      },
      {
       "q": "Avec la fonction d'appariement M = U^0,5 V^0,5 et une tension V/U = 0,04, quel est le taux mensuel de retour à l'emploi ?",
       "options": [
        "4 %",
        "20 %",
        "2 %",
        "40 %"
       ],
       "bonnes": [
        1
       ],
       "explication": "f = M/U = (V/U)^0,5 = 0,04^0,5 = 0,2, soit 20 % par mois."
      },
      {
       "q": "Dans le modèle de Shapiro et Stiglitz, que se passe-t-il si les allocations chômage augmentent ?",
       "options": [
        "Le salaire nécessaire pour éviter le tire-au-flanc baisse et l'emploi augmente.",
        "Le chômage disparaît car les chômeurs sont mieux protégés.",
        "Le salaire nécessaire pour éviter le tire-au-flanc augmente et le chômage d'équilibre s'élève.",
        "Rien, car le salaire d'efficience ne dépend que de la productivité."
       ],
       "bonnes": [
        2
       ],
       "explication": "Être licencié coûte moins cher : la menace de licenciement discipline moins, la courbe NSC se déplace vers le haut et l'intersection avec la demande de travail se fait à un emploi plus faible."
      },
      {
       "q": "WS : W/P = 1 − 2,5u ; la marge des entreprises est de 25 %. Quel est le chômage d'équilibre ?",
       "options": [
        "10 %",
        "8 %",
        "25 %",
        "5 %"
       ],
       "bonnes": [
        1
       ],
       "explication": "PS : W/P = 1/1,25 = 0,8. 1 − 2,5u = 0,8 donc u = 0,2/2,5 = 8 %."
      },
      {
       "q": "Quelles propositions sont exactes dans le modèle WS-PS ? (deux réponses)",
       "options": [
        "Une baisse du taux de marge des entreprises réduit le chômage d'équilibre.",
        "Une hausse des allocations chômage augmente le salaire réel d'équilibre.",
        "Une politique de relance de la demande réduit durablement le chômage d'équilibre.",
        "Le chômage d'équilibre est le niveau qui rend compatibles le salaire réel revendiqué et le salaire réel concédé par la fixation des prix."
       ],
       "bonnes": [
        0,
        3
       ],
       "explication": "Une baisse de μ relève PS et réduit u_n ; l'équilibre égalise WS et PS. Le salaire réel d'équilibre est fixé par PS, donc une hausse de z n'augmente que le chômage, et la demande n'affecte pas u_n à moyen terme."
      },
      {
       "q": "Le NAIRU est estimé à 7 %. Le chômage est maintenu à 6 % et le coefficient α de la courbe de Phillips vaut 0,5. Si l'inflation était de 2 % l'an dernier, quelle est-elle cette année ?",
       "options": [
        "1,5 %",
        "2 %",
        "3 %",
        "2,5 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "π(t) − π(t−1) = −0,5 × (6 − 7) = +0,5 point, donc π = 2,5 %. L'inflation continuera d'accélérer chaque année tant que u reste sous le NAIRU."
      },
      {
       "q": "Quelle proposition décrit correctement l'hystérèse du chômage ?",
       "options": [
        "Le chômage d'équilibre dépend de l'historique du chômage effectif.",
        "Le chômage revient toujours rapidement à son niveau naturel après un choc.",
        "Le chômage est entièrement déterminé par la demande agrégée courante.",
        "Le NAIRU est une constante indépendante des institutions."
       ],
       "bonnes": [
        0
       ],
       "explication": "Avec l'hystérèse, une période de chômage élevé (perte de capital humain, découragement, effets insiders-outsiders) relève durablement le chômage d'équilibre."
      },
      {
       "q": "Quelles propositions sont exactes à propos des institutions du marché du travail ? (deux réponses)",
       "options": [
        "La protection de l'emploi réduit à la fois les licenciements et les embauches, d'où un effet ambigu sur le niveau du chômage.",
        "En monopsone, un salaire minimum modéré peut augmenter l'emploi.",
        "Card et Krueger (1994) ont montré qu'une hausse du salaire minimum détruit massivement l'emploi dans la restauration rapide.",
        "Une assurance chômage plus généreuse réduit toujours la durée du chômage."
       ],
       "bonnes": [
        0,
        1
       ],
       "explication": "Dans u = s/(s + f), la protection de l'emploi fait baisser s et f ; en monopsone, le salaire est inférieur à la productivité marginale et un plancher peut accroître l'emploi. Card et Krueger ne trouvent pas de baisse d'emploi, et l'assurance chômage tend à allonger les durées."
      },
      {
       "q": "Selon Blanchard et Wolfers (2000), comment expliquer la hausse du chômage européen depuis les années 1970 ?",
       "options": [
        "Par les seuls chocs macroéconomiques, communs à tous les pays.",
        "Par les seules institutions, qui se seraient brutalement dégradées.",
        "Par la hausse de la population active féminine.",
        "Par l'interaction entre des chocs communs et des institutions qui en ont amplifié la persistance."
       ],
       "bonnes": [
        3
       ],
       "explication": "Les institutions européennes existaient déjà dans les années 1960 avec un chômage faible ; ce sont les chocs (ralentissement de la productivité, hausse des taux réels) qui, combinés à ces institutions, ont produit un chômage durable."
      },
      {
       "q": "Dans le modèle DMP, une hausse de la productivité du travail y, toutes choses égales par ailleurs :",
       "options": [
        "augmente le chômage car les entreprises ont besoin de moins de travailleurs.",
        "augmente la valeur d'un poste pourvu, donc la création de vacances, la tension et le taux de retour à l'emploi.",
        "n'a aucun effet car le salaire augmente du même montant.",
        "réduit le taux de séparation."
       ],
       "bonnes": [
        1
       ],
       "explication": "La valeur d'un poste pourvu (y − w)/(r + s) augmente, car le salaire négocié n'absorbe qu'une partie de la hausse ; les entreprises ouvrent plus de postes, θ et f augmentent, u baisse."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Le court terme : demande, fluctuations et économie ouverte",
   "chapitres": [
    {
     "id": "mac3-multiplicateur",
     "titre": "La demande effective et le multiplicateur keynésien",
     "duree": 40,
     "niveau": "L1",
     "objectifs": [
      "Définir la demande effective et expliquer pourquoi l'équilibre keynésien peut être un équilibre de sous-emploi",
      "Écrire la fonction de consommation keynésienne et distinguer propension moyenne et propension marginale à consommer",
      "Construire la croix keynésienne et résoudre algébriquement le revenu d'équilibre",
      "Dériver pas à pas les multiplicateurs de dépenses, d'impôt, de budget équilibré et le multiplicateur en économie ouverte",
      "Expliquer le rôle des stabilisateurs automatiques et le paradoxe de l'épargne",
      "Discuter la portée empirique des multiplicateurs et les limites du modèle à prix fixes"
     ],
     "sections": [
      {
       "titre": "Le principe de la demande effective",
       "contenu": "<p>Dans la <strong>Théorie générale de l'emploi, de l'intérêt et de la monnaie</strong> (1936), John Maynard Keynes rompt avec la <strong>loi des débouchés</strong> attribuée à Jean-Baptiste Say (1803), selon laquelle « l'offre crée sa propre demande » : toute production distribuant un revenu équivalent, il ne pourrait y avoir d'insuffisance générale de la demande. Pour les classiques, le chômage durable ne peut provenir que d'un salaire réel trop élevé, et la flexibilité des prix et des salaires suffit à ramener l'économie au plein emploi.</p>\n<p>Keynes soutient au contraire que le niveau de la production, et donc de l'emploi, est fixé par la <strong>demande effective</strong> : c'est la demande globale (consommation plus investissement, auxquels on ajoute les dépenses publiques et la demande étrangère) que les entrepreneurs <em>anticipent</em> au moment de décider de leur production. Si la demande anticipée est faible, la production et l'emploi le sont aussi, même si des travailleurs sont prêts à travailler au salaire courant : c'est le <strong>chômage involontaire</strong>.</p>\n<p>Deux ruptures sont essentielles. D'une part, l'épargne n'est pas automatiquement transformée en investissement : l'épargne dépend du revenu, l'investissement dépend des anticipations de rentabilité des entrepreneurs (les « esprits animaux ») et du taux d'intérêt. D'autre part, une baisse des salaires nominaux ne résorbe pas forcément le chômage, car le salaire est aussi un revenu : sa baisse réduit la consommation et donc la demande effective.</p>\n<p>Le modèle présenté ici, souvent appelé <strong>modèle keynésien simple</strong> ou <strong>croix keynésienne</strong>, est une formalisation d'après-guerre (Samuelson 1948, manuels de première année). Il repose sur trois hypothèses : (1) le niveau général des prix est fixe à court terme ; (2) les entreprises produisent toute quantité demandée à ce prix, car il existe des capacités inutilisées ; (3) l'investissement est exogène (le taux d'intérêt n'apparaît pas encore).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans le modèle keynésien de court terme, la causalité va de la demande vers la production : <em>Y</em> s'ajuste à la demande agrégée, au contraire du modèle classique où la production est déterminée par l'offre (facteurs de production et technologie) et la demande s'y adapte via les prix.</div>"
      },
      {
       "titre": "La fonction de consommation keynésienne",
       "contenu": "<p>Keynes énonce une « loi psychologique fondamentale » : lorsque le revenu augmente, la consommation augmente, mais moins que le revenu. On la formalise par une <strong>fonction de consommation linéaire</strong> du revenu disponible <em>Y<sub>d</sub></em> = <em>Y</em> − <em>T</em> (revenu moins impôts nets des transferts) :</p>\n<p class=\"eq\"><em>C</em> = <em>c</em><sub>0</sub> + <em>c</em> · <em>Y<sub>d</sub></em>, avec <em>c</em><sub>0</sub> &gt; 0 et 0 &lt; <em>c</em> &lt; 1</p>\n<p><em>c</em><sub>0</sub> est la <strong>consommation autonome</strong>, indépendante du revenu courant (consommation incompressible financée par l'épargne passée ou l'emprunt ; elle traduit aussi la confiance des ménages). <em>c</em> est la <strong>propension marginale à consommer</strong> (PmC) : la part d'un euro de revenu supplémentaire qui est consommée.</p>\n<p class=\"eq\">PmC = Δ<em>C</em> / Δ<em>Y<sub>d</sub></em> = <em>c</em> &nbsp;&nbsp;&nbsp; PMC = <em>C</em> / <em>Y<sub>d</sub></em> = <em>c</em><sub>0</sub> / <em>Y<sub>d</sub></em> + <em>c</em></p>\n<p>La <strong>propension moyenne à consommer</strong> (PMC) est la part du revenu total consommée. Avec une consommation autonome positive, la PMC est toujours supérieure à la PmC et <strong>décroît</strong> avec le revenu : les ménages riches consomment une plus faible proportion de leur revenu. Symétriquement, l'épargne s'écrit <em>S</em> = <em>Y<sub>d</sub></em> − <em>C</em> = −<em>c</em><sub>0</sub> + (1 − <em>c</em>) <em>Y<sub>d</sub></em> ; la <strong>propension marginale à épargner</strong> vaut <em>s</em> = 1 − <em>c</em>, et l'on a toujours PmC + PmS = 1 et PMC + PMS = 1.</p>\n<table><thead><tr><th>Revenu disponible</th><th>Consommation (<em>c</em><sub>0</sub> = 100, <em>c</em> = 0,8)</th><th>Épargne</th><th>PMC</th><th>PmC</th></tr></thead><tbody>\n<tr><td>500</td><td>500</td><td>0</td><td>1,00</td><td>0,8</td></tr>\n<tr><td>1 000</td><td>900</td><td>100</td><td>0,90</td><td>0,8</td></tr>\n<tr><td>2 000</td><td>1 700</td><td>300</td><td>0,85</td><td>0,8</td></tr>\n<tr><td>4 000</td><td>3 300</td><td>700</td><td>0,825</td><td>0,8</td></tr>\n</tbody></table>\n<p>Graphiquement, dans un repère avec <em>Y<sub>d</sub></em> en abscisse et <em>C</em> en ordonnée, la fonction de consommation est une droite d'ordonnée à l'origine <em>c</em><sub>0</sub> et de pente <em>c</em>, moins pentue que la bissectrice (pente 1). Le point d'intersection avec la bissectrice est le « seuil » où l'épargne est nulle (ici <em>Y<sub>d</sub></em> = 500).</p>\n<p><strong>Limites empiriques.</strong> Simon Kuznets (1946) montre que, sur longue période, la PMC américaine est à peu près constante, contrairement à la prédiction keynésienne d'une PMC décroissante. Ce « paradoxe de Kuznets » a conduit aux théories de la <strong>consommation intertemporelle</strong> : le revenu permanent de Milton Friedman (1957) et le cycle de vie de Franco Modigliani (années 1950). Dans ces théories, les ménages lissent leur consommation : la propension à consommer un revenu <em>transitoire</em> est faible, ce qui réduit l'efficacité d'une relance temporaire. La fonction keynésienne reste toutefois une bonne approximation à court terme pour les ménages contraints en liquidité (sans épargne ni accès au crédit), dont la PmC est proche de 1.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> ne confondez pas PMC et PmC. Une PMC décroissante n'implique pas une PmC décroissante : avec une fonction linéaire, la PmC est constante (<em>c</em>) alors que la PMC baisse avec le revenu. Et c'est la PmC, non la PMC, qui détermine le multiplicateur.</div>"
      },
      {
       "titre": "La croix keynésienne et l'équilibre de sous-emploi",
       "contenu": "<p>En économie fermée, la <strong>demande agrégée</strong> de biens (notée <em>Z</em> chez Blanchard) est la somme de la consommation, de l'investissement et des dépenses publiques :</p>\n<p class=\"eq\"><em>Z</em> = <em>C</em> + <em>I</em> + <em>G</em> = <em>c</em><sub>0</sub> + <em>c</em> (<em>Y</em> − <em>T</em>) + <em>Ī</em> + <em>G</em></p>\n<p>avec un investissement <em>Ī</em>, des dépenses publiques <em>G</em> et des impôts <em>T</em> exogènes. L'<strong>équilibre du marché des biens</strong> impose que la production égale la demande : <em>Y</em> = <em>Z</em>. On résout pas à pas :</p>\n<ol><li><em>Y</em> = <em>c</em><sub>0</sub> + <em>cY</em> − <em>cT</em> + <em>Ī</em> + <em>G</em></li>\n<li><em>Y</em> − <em>cY</em> = <em>c</em><sub>0</sub> − <em>cT</em> + <em>Ī</em> + <em>G</em></li>\n<li><em>Y</em> (1 − <em>c</em>) = <em>c</em><sub>0</sub> − <em>cT</em> + <em>Ī</em> + <em>G</em></li></ol>\n<p class=\"eq\"><em>Y</em>* = [1 / (1 − <em>c</em>)] · (<em>c</em><sub>0</sub> + <em>Ī</em> + <em>G</em> − <em>cT</em>)</p>\n<p>Le revenu d'équilibre est le produit d'un <strong>multiplicateur</strong> 1 / (1 − <em>c</em>) &gt; 1 et de la <strong>dépense autonome</strong> (tout ce qui ne dépend pas de <em>Y</em>).</p>\n<p><strong>Représentation graphique.</strong> On porte <em>Y</em> en abscisse et la demande <em>Z</em> en ordonnée. La droite de demande a pour ordonnée à l'origine la dépense autonome et pour pente <em>c</em> &lt; 1. La bissectrice (droite à 45°) représente <em>Y</em> = <em>Z</em>. L'équilibre est à l'intersection : c'est la « croix ». Une hausse de la dépense autonome déplace la droite de demande vers le haut, parallèlement ; le nouvel équilibre se situe plus à droite, d'une distance horizontale supérieure au déplacement vertical, d'autant plus que la droite de demande est pentue (<em>c</em> élevé).</p>\n<p><strong>Stabilité et ajustement par les stocks.</strong> Si <em>Y</em> &gt; <em>Z</em>, les entreprises accumulent des stocks invendus (investissement en stocks non désiré) et réduisent leur production ; si <em>Y</em> &lt; <em>Z</em>, les stocks diminuent et elles accroissent la production. L'ajustement se fait par les <strong>quantités</strong>, non par les prix. L'équilibre est stable car <em>c</em> &lt; 1.</p>\n<p><strong>Équilibre épargne-investissement.</strong> En retranchant <em>C</em> + <em>T</em> des deux membres de <em>Y</em> = <em>C</em> + <em>I</em> + <em>G</em>, on obtient l'écriture équivalente de l'équilibre :</p>\n<p class=\"eq\"><em>I</em> = <em>S</em> + (<em>T</em> − <em>G</em>)</p>\n<p>L'investissement est égal à l'épargne privée plus l'épargne publique. Mais la causalité est keynésienne : c'est le revenu qui s'ajuste pour que l'épargne désirée égalise l'investissement décidé.</p>\n<p><strong>Équilibre de sous-emploi.</strong> Rien ne garantit que <em>Y</em>* soit égal au <strong>PIB potentiel</strong> <em>Y<sub>p</sub></em> (production de plein emploi des facteurs sans tensions inflationnistes). Si <em>Y</em>* &lt; <em>Y<sub>p</sub></em>, l'économie est durablement en sous-emploi : c'est un équilibre, car aucun mécanisme interne au modèle (prix fixes) ne pousse vers <em>Y<sub>p</sub></em>. L'écart (<em>Y</em>* − <em>Y<sub>p</sub></em>) / <em>Y<sub>p</sub></em> est l'<strong>écart de production</strong> (output gap). Keynes en tire la justification d'une intervention de l'État pour combler l'insuffisance de demande.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'équilibre keynésien est un équilibre de quantités, à prix fixes. Il peut être un équilibre de sous-emploi stable. L'égalité <em>I</em> = <em>S</em> + (<em>T</em> − <em>G</em>) est une condition d'équilibre et non un mécanisme : c'est le revenu qui s'ajuste.</div>"
      },
      {
       "titre": "Les multiplicateurs de dépenses, d'impôt et de budget équilibré",
       "contenu": "<h4>Le multiplicateur de dépenses</h4>\n<p>L'idée du multiplicateur est due à Richard Kahn (1931), reprise par Keynes. Une hausse Δ<em>G</em> des dépenses publiques accroît d'abord la production de Δ<em>G</em> ; ce revenu supplémentaire est consommé à hauteur de <em>c</em>Δ<em>G</em>, ce qui accroît à nouveau la production, puis <em>c</em><sup>2</sup>Δ<em>G</em>, etc. L'effet total est la somme d'une série géométrique de raison <em>c</em> :</p>\n<p class=\"eq\">Δ<em>Y</em> = Δ<em>G</em> (1 + <em>c</em> + <em>c</em><sup>2</sup> + <em>c</em><sup>3</sup> + …) = Δ<em>G</em> / (1 − <em>c</em>)</p>\n<p>On retrouve le résultat en différenciant <em>Y</em>* : Δ<em>Y</em> / Δ<em>G</em> = Δ<em>Y</em> / Δ<em>Ī</em> = Δ<em>Y</em> / Δ<em>c</em><sub>0</sub> = 1 / (1 − <em>c</em>) = 1 / <em>s</em>. Le multiplicateur est l'inverse de la propension marginale à épargner : plus les ménages épargnent, plus les « fuites » hors du circuit des dépenses sont fortes et plus le multiplicateur est faible. Avec <em>c</em> = 0,8, il vaut 5 ; avec <em>c</em> = 0,6, il vaut 2,5.</p>\n<h4>Le multiplicateur d'impôt</h4>\n<p>Une baisse d'impôts forfaitaires ΔT &lt; 0 n'injecte pas directement de dépense : elle accroît le revenu disponible, dont seule la fraction <em>c</em> est consommée au premier tour. D'où :</p>\n<p class=\"eq\">Δ<em>Y</em> / Δ<em>T</em> = −<em>c</em> / (1 − <em>c</em>)</p>\n<p>En valeur absolue, le multiplicateur d'impôt est inférieur d'une unité au multiplicateur de dépenses (avec <em>c</em> = 0,8 : −4 contre 5). Le même raisonnement s'applique aux <strong>transferts</strong> (prestations sociales), qui sont des impôts négatifs : leur multiplicateur est <em>c</em> / (1 − <em>c</em>).</p>\n<h4>Le théorème de Haavelmo (1945)</h4>\n<p>Trygve Haavelmo montre qu'une hausse des dépenses publiques <strong>intégralement financée</strong> par une hausse égale des impôts forfaitaires (Δ<em>G</em> = Δ<em>T</em>) est expansionniste :</p>\n<p class=\"eq\">Δ<em>Y</em> = Δ<em>G</em> / (1 − <em>c</em>) − <em>c</em>Δ<em>G</em> / (1 − <em>c</em>) = Δ<em>G</em> (1 − <em>c</em>) / (1 − <em>c</em>) = Δ<em>G</em></p>\n<p>Le <strong>multiplicateur de budget équilibré</strong> vaut exactement 1, quelle que soit la valeur de <em>c</em>. L'intuition : l'État dépense la totalité de l'impôt prélevé, alors que les ménages n'en auraient dépensé qu'une fraction <em>c</em>. Ce résultat ne tient qu'avec des impôts forfaitaires et dans le modèle simple ; avec un impôt proportionnel ou une économie ouverte, il est inférieur à 1.</p>\n<h4>Impôt proportionnel au revenu</h4>\n<p>Si l'impôt dépend du revenu, <em>T</em> = <em>T</em><sub>0</sub> + <em>tY</em> (0 &lt; <em>t</em> &lt; 1), le revenu disponible devient (1 − <em>t</em>)<em>Y</em> − <em>T</em><sub>0</sub> et la résolution donne :</p>\n<p class=\"eq\"><em>Y</em>* = [1 / (1 − <em>c</em>(1 − <em>t</em>))] · (<em>c</em><sub>0</sub> + <em>Ī</em> + <em>G</em> − <em>cT</em><sub>0</sub>)</p>\n<p>Le multiplicateur est plus faible : l'impôt constitue une fuite supplémentaire, car chaque euro de revenu en plus n'accroît le revenu disponible que de (1 − <em>t</em>).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> soit <em>C</em> = 200 + 0,75 (<em>Y</em> − <em>T</em>), <em>I</em> = 300, <em>G</em> = 400, <em>T</em> = 400.<br>1) Revenu d'équilibre : <em>Y</em> = 200 + 0,75<em>Y</em> − 300 + 300 + 400, soit 0,25<em>Y</em> = 600 et <em>Y</em>* = 2 400.<br>2) Multiplicateurs : dépenses 1 / 0,25 = 4 ; impôt −0,75 / 0,25 = −3 ; budget équilibré 1.<br>3) Le PIB potentiel est 2 800. Hausse de <em>G</em> nécessaire pour l'atteindre : Δ<em>G</em> = 400 / 4 = 100. Baisse d'impôt nécessaire : Δ<em>T</em> = 400 / (−3) ≈ −133,3. Hausse de <em>G</em> financée par l'impôt (budget équilibré) : Δ<em>G</em> = Δ<em>T</em> = 400.<br>4) Solde budgétaire initial <em>T</em> − <em>G</em> = 0. Après la hausse de <em>G</em> de 100, il devient −100 (impôts forfaitaires). Conclusion : la relance par la dépense est la moins coûteuse pour le budget, la relance par budget équilibré la plus coûteuse en volume de dépenses mais neutre pour le solde.</div>"
      },
      {
       "titre": "Le multiplicateur en économie ouverte et les stabilisateurs automatiques",
       "contenu": "<h4>Les fuites par les importations</h4>\n<p>En économie ouverte, la demande adressée aux producteurs nationaux inclut les exportations <em>X</em> et exclut les importations <em>M</em> : <em>Z</em> = <em>C</em> + <em>I</em> + <em>G</em> + <em>X</em> − <em>M</em>. On suppose les exportations exogènes (elles dépendent du revenu étranger) et les importations proportionnelles au revenu : <em>M</em> = <em>mY</em>, où <em>m</em> est la <strong>propension marginale à importer</strong>. Avec impôt proportionnel :</p>\n<p class=\"eq\"><em>Y</em> = <em>c</em><sub>0</sub> + <em>c</em>(1 − <em>t</em>)<em>Y</em> + <em>Ī</em> + <em>G</em> + <em>X</em> − <em>mY</em></p>\n<p class=\"eq\"><em>Y</em>* = [1 / (1 − <em>c</em>(1 − <em>t</em>) + <em>m</em>)] · (<em>c</em><sub>0</sub> + <em>Ī</em> + <em>G</em> + <em>X</em>)</p>\n<p>Chaque euro de revenu supplémentaire « fuit » du circuit national par trois canaux : l'épargne, l'impôt et les importations. Une partie de la relance profite donc aux producteurs étrangers. Exemple : avec <em>c</em> = 0,8, <em>t</em> = 0,4 et <em>m</em> = 0,3, le multiplicateur vaut 1 / (1 − 0,48 + 0,3) = 1 / 0,82 ≈ 1,22, très loin du multiplicateur 5 de l'économie fermée sans impôt. C'est un ordre de grandeur réaliste pour une économie européenne très ouverte, où les importations représentent environ un tiers du PIB.</p>\n<p>Deux conséquences importantes. D'abord, une relance isolée dégrade le <strong>solde commercial</strong> : Δ(<em>X</em> − <em>M</em>) = −<em>m</em>Δ<em>Y</em>. C'est l'enseignement de la relance française de 1981-1982 (gouvernement Mauroy), menée à contre-courant de pays partenaires en politique restrictive : le déficit extérieur s'est creusé et le franc a été dévalué à plusieurs reprises avant le « tournant de la rigueur » de 1983. Ensuite, une relance profite aux partenaires (via leurs exportations) : d'où l'argument en faveur de relances <strong>coordonnées</strong> au sein d'une zone économiquement intégrée.</p>\n<h4>Les stabilisateurs automatiques</h4>\n<p>Les <strong>stabilisateurs automatiques</strong> sont les composantes du budget qui varient spontanément avec la conjoncture, sans décision discrétionnaire : impôts progressifs ou proportionnels (impôt sur le revenu, TVA, impôt sur les sociétés) et dépenses sociales liées au cycle (allocations chômage). En récession, les recettes baissent et les transferts augmentent, ce qui soutient le revenu disponible et amortit la chute de la demande ; en expansion, l'effet joue en sens inverse.</p>\n<p>Dans le modèle, le taux d'imposition <em>t</em> réduit le multiplicateur : un choc de demande autonome (chute de l'investissement par exemple) a donc un effet plus faible sur <em>Y</em>. Les stabilisateurs ne <em>suppriment</em> pas les fluctuations, ils les <em>atténuent</em>. Ils sont réputés puissants en France et en zone euro, où le poids des prélèvements et des dépenses sociales est élevé : la Commission européenne retient une semi-élasticité du solde budgétaire à l'écart de production de l'ordre de 0,5 pour la moyenne de la zone euro (un écart de production de −1 % dégrade le solde public d'environ 0,5 point de PIB).</p>\n<p>Cette sensibilité explique la distinction entre <strong>solde effectif</strong> et <strong>solde structurel</strong> (corrigé des effets du cycle) : seul le second mesure l'orientation discrétionnaire de la politique budgétaire.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> en 2020, face au choc du Covid, les stabilisateurs automatiques ont joué à plein en zone euro, complétés par des mesures discrétionnaires massives (activité partielle, prêts garantis par l'État en France). Le déficit public français a atteint environ 9 % du PIB en 2020, contre 2 à 3 % avant la crise, dont une part importante relevait des stabilisateurs liés à la chute du PIB d'environ 7,5 %. L'activité partielle, en maintenant le revenu des salariés, peut être lue comme un stabilisateur renforcé : elle limite la baisse du revenu disponible et donc l'effet multiplicateur négatif du choc.</div>"
      },
      {
       "titre": "Le paradoxe de l'épargne",
       "contenu": "<p>Le <strong>paradoxe de l'épargne</strong> (paradox of thrift), popularisé par Keynes, énonce que si tous les ménages cherchent simultanément à épargner davantage, l'épargne totale n'augmente pas, et le revenu diminue. Ce qui est vertueux pour un ménage (épargner pour l'avenir) peut être nuisible pour l'économie dans son ensemble : c'est un exemple de <strong>sophisme de composition</strong>.</p>\n<p><strong>Démonstration.</strong> Supposons une hausse de la volonté d'épargner, prenant la forme d'une baisse de la consommation autonome Δ<em>c</em><sub>0</sub> &lt; 0. Dans l'économie fermée sans État :</p>\n<p class=\"eq\">Δ<em>Y</em> = Δ<em>c</em><sub>0</sub> / (1 − <em>c</em>) &lt; 0</p>\n<p>À l'équilibre, <em>S</em> = <em>I</em>. Comme l'investissement est exogène, l'épargne d'équilibre est inchangée : Δ<em>S</em> = Δ<em>I</em> = 0. La tentative d'épargner plus se traduit uniquement par une baisse du revenu, juste suffisante pour que l'épargne revienne à son niveau initial. Vérification : Δ<em>S</em> = −Δ<em>c</em><sub>0</sub> + (1 − <em>c</em>)Δ<em>Y</em> = −Δ<em>c</em><sub>0</sub> + Δ<em>c</em><sub>0</sub> = 0.</p>\n<p>Si l'investissement dépend positivement du revenu (effet accélérateur : <em>I</em> = <em>I</em><sub>0</sub> + <em>bY</em>), le résultat est encore plus frappant : la baisse du revenu réduit l'investissement, et l'épargne d'équilibre <strong>diminue</strong>. Le paradoxe peut aussi se produire si la hausse de l'épargne vient d'une hausse de la propension marginale à épargner (baisse de <em>c</em>).</p>\n<table><thead><tr><th>Situation</th><th>Revenu d'équilibre</th><th>Épargne d'équilibre</th></tr></thead><tbody>\n<tr><td>Initiale : <em>c</em><sub>0</sub> = 100, <em>c</em> = 0,8, <em>I</em> = 200</td><td>1 500</td><td>200</td></tr>\n<tr><td>Hausse de l'épargne désirée : <em>c</em><sub>0</sub> = 80</td><td>1 400</td><td>200</td></tr>\n<tr><td>Avec <em>I</em> = 100 + 0,1<em>Y</em> : <em>c</em><sub>0</sub> passe de 100 à 80</td><td>2 000 → 1 800</td><td>300 → 280</td></tr>\n</tbody></table>\n<p>Dans le troisième cas, le revenu initial est (100 + 100) / (1 − 0,8 − 0,1) = 2 000, l'épargne initiale −100 + 0,2 × 2 000 = 300 ; après le choc, <em>Y</em> = 180 / 0,1 = 1 800 et <em>S</em> = −80 + 0,2 × 1 800 = 280. L'épargne baisse donc de 300 à 280 : vouloir épargner plus fait épargner moins.</p>\n<p><strong>Portée et limites.</strong> Le paradoxe vaut à court terme, quand la production est déterminée par la demande et que le taux d'intérêt ne baisse pas pour stimuler l'investissement (situation de trappe à liquidité ou de taux plancher). À long terme, dans le modèle de croissance de Solow, une hausse du taux d'épargne accroît au contraire le capital par tête et le revenu. Le paradoxe éclaire les épisodes de <strong>désendettement simultané</strong> des agents (Japon des années 1990, zone euro après 2010) et la hausse de l'épargne de précaution des ménages durant les crises.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> le paradoxe de l'épargne ne dit pas que l'épargne est nuisible en général. Il s'agit d'un résultat de court terme, en situation de sous-emploi, avec un investissement qui ne réagit pas (ou réagit positivement) au revenu. En plein emploi, ou si la banque centrale baisse le taux d'intérêt, une hausse de l'épargne peut financer davantage d'investissement.</div>"
      },
      {
       "titre": "Portée empirique et limites du modèle",
       "contenu": "<p>Le multiplicateur théorique de la croix keynésienne (5 avec <em>c</em> = 0,8) est sans rapport avec les ordres de grandeur estimés. La littérature empirique, fondée sur des modèles VAR ou des épisodes de dépenses militaires, trouve pour les États-Unis des multiplicateurs de dépenses publiques plutôt compris entre 0,6 et 1,5 selon les méthodes et l'horizon (synthèse de Valerie Ramey, 2011 et 2019). Plusieurs raisons expliquent l'écart :</p>\n<ul><li><strong>Les fuites</strong> par l'impôt et les importations, déjà intégrées dans le multiplicateur en économie ouverte.</li>\n<li><strong>L'effet d'éviction</strong> : la hausse de la production accroît la demande de monnaie et le taux d'intérêt, ce qui réduit l'investissement privé ; c'est l'objet du modèle IS-LM.</li>\n<li><strong>Les prix</strong> : si l'économie est proche du plein emploi, la relance se traduit par de l'inflation plutôt que par de la production ; c'est l'objet du modèle offre agrégée - demande agrégée.</li>\n<li><strong>Les anticipations</strong> : les ménages ricardiens (Barro 1974) anticipent les hausses d'impôts futures nécessaires pour rembourser la dette et épargnent la baisse d'impôt présente (<strong>équivalence ricardienne</strong>), ce qui réduit le multiplicateur d'impôt.</li>\n<li><strong>La politique monétaire</strong> : une banque centrale qui vise l'inflation peut relever ses taux en réaction à la relance et en neutraliser une partie.</li></ul>\n<p>Le multiplicateur n'est donc pas une constante : il dépend de l'état de l'économie. Il est plus élevé en récession (capacités inutilisées, ménages contraints en liquidité) et lorsque les taux sont bloqués à leur plancher, car la banque centrale ne compense pas la relance par une hausse de taux.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> en 2013, Olivier Blanchard et Daniel Leigh (FMI) ont montré que les prévisions de croissance pour 2010-2011 avaient sous-estimé l'impact négatif des consolidations budgétaires en Europe. Les prévisions supposaient implicitement des multiplicateurs d'environ 0,5, alors que les multiplicateurs effectifs étaient, selon leurs estimations, plutôt compris entre 0,9 et 1,7. En période de crise, avec des taux directeurs au plancher et des économies en sous-emploi, l'austérité a donc coûté plus de croissance que prévu, ce qui a alimenté le débat sur le rythme d'ajustement budgétaire en zone euro.</div>\n<p>Le principal défaut du modèle simple, l'absence de taux d'intérêt et de monnaie, est corrigé par le modèle IS-LM de John Hicks (1937).</p>"
      }
     ],
     "points_cles": [
      "La demande effective (Keynes 1936) est la demande anticipée par les entrepreneurs ; elle détermine la production et l'emploi à court terme.",
      "La fonction de consommation keynésienne s'écrit C = c0 + c(Y − T), avec 0 < c < 1 ; la PMC est décroissante et supérieure à la PmC si c0 > 0.",
      "L'équilibre du marché des biens Y = C + I + G donne Y* = (c0 + I + G − cT) / (1 − c) ; l'ajustement se fait par les quantités et les stocks.",
      "L'équilibre keynésien peut être un équilibre de sous-emploi stable : aucun mécanisme automatique ne ramène Y vers le PIB potentiel.",
      "Le multiplicateur de dépenses vaut 1 / (1 − c) = 1 / s ; il est la somme d'une série géométrique de raison c (Kahn 1931).",
      "Le multiplicateur d'impôt forfaitaire vaut −c / (1 − c), inférieur d'une unité en valeur absolue au multiplicateur de dépenses.",
      "Théorème de Haavelmo (1945) : une hausse de G financée par une hausse égale d'impôts forfaitaires accroît Y d'autant ; le multiplicateur de budget équilibré vaut 1.",
      "Avec impôt proportionnel et importations, le multiplicateur devient 1 / (1 − c(1 − t) + m) : les fuites réduisent l'effet d'une relance.",
      "Une relance isolée en économie ouverte détériore le solde commercial de m·ΔY et profite aux partenaires (relance française de 1981-1982).",
      "Les stabilisateurs automatiques (impôts, allocations chômage) réduisent le multiplicateur et donc l'amplitude des fluctuations, sans décision discrétionnaire.",
      "Paradoxe de l'épargne : une hausse de l'épargne désirée réduit le revenu sans accroître l'épargne d'équilibre (I exogène), voire la réduit (I dépendant de Y).",
      "Les multiplicateurs empiriques sont proches de 1, plus élevés en récession et quand les taux sont au plancher (Blanchard-Leigh 2013)."
     ],
     "lexique": [
      {
       "terme": "Demande effective",
       "def": "Niveau de la demande globale anticipé par les entrepreneurs, qui détermine leur production et leur niveau d'emploi (Keynes 1936)."
      },
      {
       "terme": "Propension marginale à consommer",
       "def": "Part d'un supplément de revenu disponible consacrée à la consommation : ΔC / ΔYd, comprise entre 0 et 1."
      },
      {
       "terme": "Propension moyenne à consommer",
       "def": "Part du revenu disponible total consacrée à la consommation : C / Yd ; décroissante dans la fonction keynésienne."
      },
      {
       "terme": "Dépense autonome",
       "def": "Composante de la demande indépendante du revenu courant (consommation autonome, investissement exogène, dépenses publiques, exportations)."
      },
      {
       "terme": "Multiplicateur",
       "def": "Rapport entre la variation du revenu d'équilibre et la variation de la dépense autonome qui l'a provoquée."
      },
      {
       "terme": "Équilibre de sous-emploi",
       "def": "Équilibre du marché des biens où la production est inférieure au PIB potentiel, sans force interne ramenant au plein emploi."
      },
      {
       "terme": "Théorème de Haavelmo",
       "def": "Résultat selon lequel une hausse des dépenses publiques financée par une hausse égale des impôts forfaitaires a un multiplicateur égal à 1."
      },
      {
       "terme": "Propension marginale à importer",
       "def": "Part d'un supplément de revenu dépensée en biens importés : ΔM / ΔY."
      },
      {
       "terme": "Stabilisateurs automatiques",
       "def": "Recettes et dépenses publiques qui varient spontanément avec le cycle (impôts, allocations chômage) et amortissent les fluctuations."
      },
      {
       "terme": "Paradoxe de l'épargne",
       "def": "Une hausse générale de l'épargne désirée fait baisser le revenu sans accroître l'épargne totale à l'équilibre."
      },
      {
       "terme": "Écart de production",
       "def": "Différence relative entre le PIB effectif et le PIB potentiel ; négatif en situation de sous-emploi."
      },
      {
       "terme": "Fuites",
       "def": "Usages du revenu qui ne se traduisent pas en demande de biens nationaux : épargne, impôts, importations."
      }
     ],
     "qcm": [
      {
       "q": "Avec C = 50 + 0,6 Yd, quelle est la propension moyenne à consommer pour un revenu disponible de 500 ?",
       "options": [
        "0,6",
        "0,5",
        "0,7",
        "1,0"
       ],
       "bonnes": [
        2
       ],
       "explication": "C = 50 + 0,6 × 500 = 350, donc PMC = 350 / 500 = 0,7. La PmC vaut 0,6 ; la PMC lui est supérieure car la consommation autonome est positive."
      },
      {
       "q": "Dans une économie fermée sans impôt proportionnel, la propension marginale à consommer vaut 0,75. Quel est le multiplicateur de dépenses publiques ?",
       "options": [
        "1,33",
        "4",
        "3",
        "0,75"
       ],
       "bonnes": [
        1
       ],
       "explication": "Le multiplicateur vaut 1 / (1 − c) = 1 / 0,25 = 4. La valeur 1,33 correspond à 1 / 0,75, erreur fréquente qui confond propension à consommer et à épargner ; 3 est le multiplicateur d'impôt en valeur absolue."
      },
      {
       "q": "Quelles propositions sont exactes à propos du multiplicateur d'impôt forfaitaire ? (deux réponses)",
       "options": [
        "Il vaut −c / (1 − c)",
        "Il est égal en valeur absolue au multiplicateur de dépenses",
        "Il est inférieur d'une unité en valeur absolue au multiplicateur de dépenses",
        "Il est nul si les ménages sont keynésiens"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Une baisse d'impôt n'est consommée qu'à hauteur de c au premier tour, d'où −c / (1 − c). Or 1 / (1 − c) − c / (1 − c) = 1 : l'écart en valeur absolue est d'une unité."
      },
      {
       "q": "Le gouvernement augmente G de 100 et finance intégralement cette dépense par une hausse des impôts forfaitaires de 100. Avec c = 0,8, de combien varie le revenu d'équilibre dans le modèle keynésien simple ?",
       "options": [
        "0",
        "+400",
        "+500",
        "+100"
       ],
       "bonnes": [
        3
       ],
       "explication": "ΔY = 100 × 5 − 0,8 × 100 × 5 = 500 − 400 = 100. C'est le théorème de Haavelmo : le multiplicateur de budget équilibré vaut 1 quelle que soit c."
      },
      {
       "q": "Avec c = 0,8, un taux d'imposition proportionnel t = 0,25 et une propension marginale à importer m = 0,2, quel est le multiplicateur de dépenses ?",
       "options": [
        "5",
        "1,25",
        "2,5",
        "1,67"
       ],
       "bonnes": [
        3
       ],
       "explication": "Multiplicateur = 1 / (1 − c(1 − t) + m). Ici c(1 − t) = 0,8 × 0,75 = 0,6, donc le dénominateur vaut 1 − 0,6 + 0,2 = 0,6 et le multiplicateur 1 / 0,6 ≈ 1,67. La valeur 5 ignore les fuites par l'impôt et les importations."
      },
      {
       "q": "Dans la croix keynésienne, que se passe-t-il si la production est supérieure à la demande agrégée ?",
       "options": [
        "Les prix baissent jusqu'à ce que la demande rattrape la production",
        "Les stocks invendus augmentent et les entreprises réduisent leur production",
        "Le taux d'intérêt baisse et relance l'investissement",
        "Les ménages épargnent moins pour absorber la production"
       ],
       "bonnes": [
        1
       ],
       "explication": "Dans ce modèle à prix fixes, l'ajustement se fait par les quantités : l'accumulation involontaire de stocks conduit les entreprises à réduire la production jusqu'à Y = Z. Le taux d'intérêt n'existe pas dans ce modèle."
      },
      {
       "q": "Quelles propositions sont exactes à propos du paradoxe de l'épargne ? (deux réponses)",
       "options": [
        "Avec un investissement exogène, une hausse de l'épargne désirée laisse l'épargne d'équilibre inchangée",
        "Il implique qu'une hausse du taux d'épargne réduit le revenu à long terme dans le modèle de Solow",
        "Si l'investissement augmente avec le revenu, l'épargne d'équilibre peut diminuer",
        "Il repose sur l'hypothèse que le taux d'intérêt s'ajuste pour égaliser épargne et investissement"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "À l'équilibre S = I : si I est exogène, S ne change pas et seul Y baisse ; si I dépend de Y, la baisse de Y réduit I et donc S. Le paradoxe est un résultat de court terme qui suppose justement que le taux d'intérêt ne rééquilibre pas épargne et investissement."
      },
      {
       "q": "Quel est le rôle des stabilisateurs automatiques dans le modèle keynésien ?",
       "options": [
        "Ils augmentent le multiplicateur et amplifient les chocs",
        "Ils supposent une décision du Parlement à chaque récession",
        "Ils maintiennent le solde budgétaire constant au cours du cycle",
        "Ils réduisent le multiplicateur et amortissent l'effet des chocs de demande"
       ],
       "bonnes": [
        3
       ],
       "explication": "Un impôt proportionnel au revenu ou des allocations chômage introduisent une fuite qui dépend de Y : le multiplicateur 1 / (1 − c(1 − t)) est plus faible et un choc de demande a un effet atténué. Le solde budgétaire varie précisément avec le cycle."
      },
      {
       "q": "Quelle proposition sur la fonction de consommation keynésienne C = c0 + cYd est exacte ?",
       "options": [
        "La propension moyenne à consommer est constante et égale à c",
        "La propension marginale à consommer est décroissante avec le revenu",
        "La propension moyenne à consommer est supérieure à la propension marginale si c0 > 0",
        "La somme de la PmC et de la PMS est inférieure à 1"
       ],
       "bonnes": [
        2
       ],
       "explication": "PMC = c0 / Yd + c, donc PMC > c dès que c0 > 0, et elle décroît avec Yd. La PmC est constante (fonction linéaire) et PmC + PmS = 1."
      },
      {
       "q": "Une économie a un multiplicateur de 2,5 et un écart de production négatif de 50. Quelle hausse des dépenses publiques permet de combler cet écart, toutes choses égales par ailleurs ?",
       "options": [
        "125",
        "20",
        "50",
        "12,5"
       ],
       "bonnes": [
        1
       ],
       "explication": "ΔY = 2,5 × ΔG = 50 donc ΔG = 50 / 2,5 = 20. Le chiffre 125 provient d'une multiplication au lieu d'une division."
      },
      {
       "q": "Quelles propositions expliquent que les multiplicateurs estimés empiriquement soient bien inférieurs au multiplicateur théorique de la croix keynésienne ? (deux réponses)",
       "options": [
        "Les fuites par les importations et les impôts",
        "La rigidité des prix à court terme",
        "L'existence de capacités de production inutilisées",
        "L'effet d'éviction par la hausse du taux d'intérêt"
       ],
       "bonnes": [
        0,
        3
       ],
       "explication": "Les fuites (impôts, importations) et l'éviction de l'investissement privé par le taux d'intérêt réduisent l'effet d'une relance. La rigidité des prix et les capacités inutilisées sont au contraire les conditions qui rendent le multiplicateur élevé."
      }
     ]
    },
    {
     "id": "mac3-is-lm",
     "titre": "Le modèle IS-LM",
     "duree": 45,
     "niveau": "L2",
     "objectifs": [
      "Construire la courbe IS à partir de l'équilibre du marché des biens et la courbe LM à partir de l'équilibre du marché de la monnaie",
      "Calculer les pentes de IS et LM et identifier les facteurs de déplacement de chaque courbe",
      "Résoudre algébriquement l'équilibre IS-LM et calculer les multiplicateurs budgétaire et monétaire",
      "Analyser les politiques budgétaire et monétaire, l'effet d'éviction partiel et le policy mix",
      "Étudier les cas limites : trappe à liquidité, investissement insensible au taux, cas classique",
      "Dériver la courbe de demande agrégée à partir du modèle IS-LM"
     ],
     "sections": [
      {
       "titre": "De la croix keynésienne au modèle IS-LM",
       "contenu": "<p>Le modèle IS-LM est proposé par John Hicks en 1937 dans l'article « Mr. Keynes and the Classics », puis popularisé par Alvin Hansen (1953). Il formalise une partie de la <em>Théorie générale</em> de Keynes (1936) en étudiant <strong>simultanément</strong> deux marchés : le marché des biens et services (courbe IS, pour <em>Investment-Saving</em>) et le marché de la monnaie (courbe LM, pour <em>Liquidity preference-Money supply</em>). Il complète la croix keynésienne en endogénéisant le <strong>taux d'intérêt</strong>, absent du modèle simple.</p>\n<p>Les hypothèses du modèle de base sont les suivantes :</p>\n<ul><li>économie fermée, court terme ;</li>\n<li>niveau général des prix <em>P</em> fixe (il deviendra variable dans le modèle offre agrégée - demande agrégée) ;</li>\n<li>l'offre de monnaie nominale <em>M</em> est contrôlée par la banque centrale ;</li>\n<li>les anticipations d'inflation sont nulles, de sorte que le taux d'intérêt nominal <em>i</em> et le taux réel <em>r</em> se confondent ;</li>\n<li>deux actifs financiers : la monnaie (liquide, non rémunérée) et les obligations (rémunérées au taux <em>i</em>).</li></ul>\n<p>Le lien entre les deux marchés passe par deux canaux. Le taux d'intérêt, déterminé sur le marché monétaire, influence l'investissement et donc la demande de biens. Le revenu, déterminé sur le marché des biens, influence la demande de monnaie et donc le taux d'intérêt. L'équilibre général de court terme est le couple (<em>Y</em>*, <em>i</em>*) qui équilibre les deux marchés à la fois.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> IS représente l'ensemble des couples (<em>Y</em>, <em>i</em>) qui équilibrent le marché des biens ; LM l'ensemble des couples (<em>Y</em>, <em>i</em>) qui équilibrent le marché de la monnaie. L'équilibre IS-LM est leur intersection. Par la loi de Walras, le marché des obligations est alors aussi équilibré.</div>"
      },
      {
       "titre": "La courbe IS : l'équilibre du marché des biens",
       "contenu": "<p>L'investissement dépend désormais négativement du taux d'intérêt : un taux plus élevé renchérit le coût du financement et augmente le rendement exigé des projets (comparaison avec l'efficacité marginale du capital chez Keynes). On retient la forme linéaire :</p>\n<p class=\"eq\"><em>I</em> = <em>I</em><sub>0</sub> − <em>b</em> · <em>i</em>, avec <em>b</em> &gt; 0</p>\n<p>où <em>b</em> mesure la sensibilité de l'investissement au taux d'intérêt. Avec <em>C</em> = <em>c</em><sub>0</sub> + <em>c</em>(<em>Y</em> − <em>T</em>), l'équilibre <em>Y</em> = <em>C</em> + <em>I</em> + <em>G</em> donne :</p>\n<p class=\"eq\"><em>Y</em> = <em>c</em><sub>0</sub> + <em>c</em>(<em>Y</em> − <em>T</em>) + <em>I</em><sub>0</sub> − <em>bi</em> + <em>G</em></p>\n<p>Notons <em>A</em> = <em>c</em><sub>0</sub> − <em>cT</em> + <em>I</em><sub>0</sub> + <em>G</em> la dépense autonome. On obtient l'équation de IS sous deux formes équivalentes :</p>\n<p class=\"eq\"><em>Y</em> = (<em>A</em> − <em>bi</em>) / (1 − <em>c</em>) &nbsp;&nbsp; ou &nbsp;&nbsp; <em>i</em> = <em>A</em> / <em>b</em> − [(1 − <em>c</em>) / <em>b</em>] · <em>Y</em></p>\n<p><strong>Pente.</strong> Dans le plan (<em>Y</em> en abscisse, <em>i</em> en ordonnée), IS est décroissante de pente −(1 − <em>c</em>) / <em>b</em>. Interprétation : une baisse du taux d'intérêt accroît l'investissement, puis, par le multiplicateur, la production d'équilibre. IS est d'autant plus <strong>plate</strong> que l'investissement est sensible au taux (<em>b</em> élevé) et que le multiplicateur est fort (<em>c</em> élevé) : une petite baisse du taux suffit alors à accroître fortement <em>Y</em>.</p>\n<p><strong>Déplacements.</strong> Toute variation de la dépense autonome <em>A</em> déplace IS horizontalement de Δ<em>A</em> / (1 − <em>c</em>), c'est-à-dire du montant donné par le multiplicateur de la croix keynésienne à taux d'intérêt inchangé :</p>\n<ul><li>vers la droite : hausse de <em>G</em>, baisse de <em>T</em>, hausse de la confiance des ménages (<em>c</em><sub>0</sub>) ou des entreprises (<em>I</em><sub>0</sub>), hausse des exportations en économie ouverte ;</li>\n<li>vers la gauche : politique budgétaire restrictive, choc de pessimisme, durcissement des conditions de crédit (crise de 2008).</li></ul>\n<p>Un point situé à droite de IS correspond à une offre de biens excédentaire (pour ce taux, la demande est inférieure à la production) ; un point à gauche, à une demande excédentaire.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> une variation du taux d'intérêt fait se <em>déplacer le long</em> de IS ; elle ne déplace pas IS. Seules les variations des variables exogènes du marché des biens (<em>G</em>, <em>T</em>, <em>c</em><sub>0</sub>, <em>I</em><sub>0</sub>) déplacent la courbe. De même, la politique monétaire ne déplace jamais IS.</div>"
      },
      {
       "titre": "La courbe LM : préférence pour la liquidité et équilibre monétaire",
       "contenu": "<p>Keynes distingue trois motifs de détention de monnaie. Le <strong>motif de transaction</strong> : les agents détiennent de la monnaie pour régler leurs achats courants, proportionnellement à leur revenu. Le <strong>motif de précaution</strong> : faire face à des dépenses imprévues, également lié au revenu. Le <strong>motif de spéculation</strong> : détenir de la monnaie plutôt que des obligations quand on anticipe une hausse des taux (donc une baisse du prix des obligations). Le coût d'opportunité de la monnaie est le taux d'intérêt auquel on renonce : la demande de monnaie est une fonction décroissante de <em>i</em>. C'est la <strong>préférence pour la liquidité</strong>.</p>\n<p>La demande de monnaie en termes réels (encaisses réelles) s'écrit :</p>\n<p class=\"eq\"><em>L</em> = <em>kY</em> − <em>hi</em>, avec <em>k</em> &gt; 0, <em>h</em> &gt; 0</p>\n<p>L'offre de monnaie réelle est <em>M</em> / <em>P</em>, exogène. L'équilibre <em>M</em> / <em>P</em> = <em>kY</em> − <em>hi</em> donne l'équation de LM :</p>\n<p class=\"eq\"><em>i</em> = (<em>k</em> / <em>h</em>) · <em>Y</em> − (1 / <em>h</em>) · (<em>M</em> / <em>P</em>)</p>\n<p><strong>Pente.</strong> LM est croissante de pente <em>k</em> / <em>h</em>. Interprétation : quand le revenu augmente, la demande de monnaie de transaction augmente ; l'offre étant fixe, l'équilibre exige une hausse du taux d'intérêt, qui réduit la demande de monnaie spéculative. LM est d'autant plus <strong>plate</strong> que la demande de monnaie est sensible au taux (<em>h</em> élevé) et d'autant plus <strong>pentue</strong> que la demande de transaction est forte (<em>k</em> élevé).</p>\n<p><strong>Déplacements.</strong> Une hausse de l'offre de monnaie nominale <em>M</em> ou une baisse du niveau des prix <em>P</em> accroît les encaisses réelles et déplace LM vers le bas et la droite : pour un même revenu, le taux d'équilibre est plus bas. Une hausse exogène de la demande de monnaie (préférence accrue pour la liquidité en période d'incertitude) déplace LM vers le haut et la gauche.</p>\n<p><strong>Variante moderne.</strong> Les banques centrales ne pilotent plus une quantité de monnaie mais un <strong>taux directeur</strong>. Depuis David Romer (2000) et dans les éditions récentes de Blanchard, on remplace souvent LM par une droite horizontale au niveau du taux fixé par la banque centrale (courbe parfois notée LM ou MP). La logique reste la même : la banque centrale fournit la liquidité nécessaire pour que le marché monétaire s'équilibre au taux choisi. Le résultat qualitatif d'une politique monétaire expansionniste (baisse de taux, hausse de <em>Y</em>) est identique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pente de IS = −(1 − <em>c</em>) / <em>b</em> ; pente de LM = <em>k</em> / <em>h</em>. La politique budgétaire déplace IS, la politique monétaire déplace LM. Une hausse de <em>P</em> déplace LM vers la gauche, ce qui fonde la pente négative de la demande agrégée.</div>"
      },
      {
       "titre": "Résolution algébrique et multiplicateurs",
       "contenu": "<p>On substitue l'équation de LM dans celle de IS. De LM : <em>i</em> = (<em>kY</em> − <em>M</em>/<em>P</em>) / <em>h</em>. Dans IS : (1 − <em>c</em>)<em>Y</em> = <em>A</em> − <em>b</em>(<em>kY</em> − <em>M</em>/<em>P</em>) / <em>h</em>. En multipliant par <em>h</em> et en regroupant les termes en <em>Y</em> :</p>\n<p class=\"eq\"><em>Y</em>* = [<em>h</em> · <em>A</em> + <em>b</em> · (<em>M</em> / <em>P</em>)] / [<em>h</em>(1 − <em>c</em>) + <em>bk</em>]</p>\n<p>On en déduit les multiplicateurs de la politique budgétaire et de la politique monétaire :</p>\n<p class=\"eq\">Δ<em>Y</em> / Δ<em>G</em> = <em>h</em> / [<em>h</em>(1 − <em>c</em>) + <em>bk</em>] = 1 / [(1 − <em>c</em>) + <em>bk</em> / <em>h</em>]</p>\n<p class=\"eq\">Δ<em>Y</em> / Δ(<em>M</em>/<em>P</em>) = <em>b</em> / [<em>h</em>(1 − <em>c</em>) + <em>bk</em>]</p>\n<p>Le multiplicateur budgétaire de IS-LM est <strong>inférieur</strong> au multiplicateur keynésien 1 / (1 − <em>c</em>), à cause du terme <em>bk</em> / <em>h</em> au dénominateur : c'est l'<strong>effet d'éviction</strong>. Il est d'autant plus faible que l'investissement est sensible au taux (<em>b</em> élevé), que la demande de monnaie de transaction est forte (<em>k</em> élevé) et que la demande de monnaie est peu sensible au taux (<em>h</em> faible, LM pentue).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> économie fermée avec <em>C</em> = 100 + 0,8(<em>Y</em> − <em>T</em>), <em>I</em> = 300 − 20<em>i</em> (<em>i</em> en points de pourcentage), <em>G</em> = 200, <em>T</em> = 200, <em>M</em>/<em>P</em> = 800, <em>L</em> = 0,4<em>Y</em> − 40<em>i</em>.<br>1) IS : <em>Y</em> = 100 + 0,8<em>Y</em> − 160 + 300 − 20<em>i</em> + 200, soit 0,2<em>Y</em> = 440 − 20<em>i</em>, donc <em>Y</em> = 2 200 − 100<em>i</em>.<br>2) LM : 800 = 0,4<em>Y</em> − 40<em>i</em>, donc <em>i</em> = 0,01<em>Y</em> − 20.<br>3) Équilibre : <em>Y</em> = 2 200 − 100(0,01<em>Y</em> − 20) = 4 200 − <em>Y</em>, d'où <em>Y</em>* = 2 100 et <em>i</em>* = 1 %. Investissement : <em>I</em> = 280.<br>4) Hausse de <em>G</em> de 100 : IS devient <em>Y</em> = 2 700 − 100<em>i</em> ; nouvel équilibre <em>Y</em> = 4 700 − <em>Y</em>, soit <em>Y</em> = 2 350 et <em>i</em> = 3,5 %. Δ<em>Y</em> = 250 (multiplicateur 2,5 contre 5 dans la croix keynésienne). L'investissement tombe à 230 : 50 d'investissement privé ont été évincés.<br>5) Vérification par la formule : 1 / [0,2 + 20 × 0,4 / 40] = 1 / (0,2 + 0,2) = 2,5.</div>\n<table><thead><tr><th>Grandeur</th><th>Avant</th><th>Après Δ<em>G</em> = +100</th><th>Croix keynésienne (taux fixe)</th></tr></thead><tbody>\n<tr><td>Revenu <em>Y</em></td><td>2 100</td><td>2 350</td><td>2 600</td></tr>\n<tr><td>Taux <em>i</em></td><td>1 %</td><td>3,5 %</td><td>1 %</td></tr>\n<tr><td>Investissement <em>I</em></td><td>280</td><td>230</td><td>280</td></tr>\n<tr><td>Consommation <em>C</em></td><td>1 620</td><td>1 820</td><td>2 020</td></tr></tbody></table>"
      },
      {
       "titre": "Politiques budgétaire et monétaire, éviction et policy mix",
       "contenu": "<h4>La politique budgétaire</h4>\n<p>Une hausse de <em>G</em> (ou une baisse de <em>T</em>) déplace IS vers la droite. À taux inchangé, la production augmenterait du plein effet multiplicateur (point situé sur la nouvelle IS, à l'horizontale de l'ancien équilibre). Mais la hausse du revenu accroît la demande de monnaie de transaction ; l'offre de monnaie étant fixe, le taux d'intérêt monte, ce qui réduit l'investissement. Le nouvel équilibre se situe le long de LM : <em>Y</em> et <em>i</em> augmentent, l'investissement baisse. L'<strong>effet d'éviction</strong> est <strong>partiel</strong> : la production augmente, mais moins que dans la croix keynésienne.</p>\n<h4>La politique monétaire</h4>\n<p>Une hausse de <em>M</em> déplace LM vers le bas et la droite. À revenu donné, l'excès d'offre de monnaie pousse les agents à acheter des obligations, dont le prix monte et le rendement baisse. La baisse du taux stimule l'investissement, la production augmente par le multiplicateur. Le nouvel équilibre se situe le long de IS : <em>Y</em> augmente, <em>i</em> baisse. La consommation augmente aussi (effet revenu). C'est le <strong>canal du taux d'intérêt</strong> de la transmission monétaire.</p>\n<table><thead><tr><th>Politique</th><th>Courbe déplacée</th><th><em>Y</em></th><th><em>i</em></th><th><em>I</em></th><th><em>C</em></th></tr></thead><tbody>\n<tr><td>Budgétaire expansionniste</td><td>IS à droite</td><td>hausse</td><td>hausse</td><td>baisse</td><td>hausse</td></tr>\n<tr><td>Monétaire expansionniste</td><td>LM à droite</td><td>hausse</td><td>baisse</td><td>hausse</td><td>hausse</td></tr>\n<tr><td>Budgétaire restrictive</td><td>IS à gauche</td><td>baisse</td><td>baisse</td><td>hausse</td><td>baisse</td></tr>\n<tr><td>Monétaire restrictive</td><td>LM à gauche</td><td>baisse</td><td>hausse</td><td>baisse</td><td>baisse</td></tr></tbody></table>\n<h4>Le policy mix</h4>\n<p>Le <strong>policy mix</strong> désigne la combinaison des politiques budgétaire et monétaire. Les deux instruments permettant d'agir sur deux variables (<em>Y</em> et <em>i</em>), on peut atteindre une cible de production avec une composition différente de la demande :</p>\n<ul><li>relance budgétaire accompagnée d'une politique monétaire accommodante : <em>Y</em> augmente fortement et le taux peut rester stable, ce qui supprime l'éviction (la banque centrale « accompagne » la relance) ;</li>\n<li>consolidation budgétaire compensée par une baisse des taux : <em>Y</em> stable mais une composition plus favorable à l'investissement, souhaitable pour la croissance de long terme ;</li>\n<li>relance budgétaire et politique monétaire restrictive : <em>Y</em> peut rester stable, mais le taux d'intérêt monte fortement.</li></ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> au début des années 1980, les États-Unis ont combiné une politique budgétaire expansionniste (baisses d'impôts et hausse des dépenses militaires sous Reagan) et une politique monétaire très restrictive menée par Paul Volcker à la Réserve fédérale pour casser l'inflation. Conformément à IS-LM, les taux d'intérêt réels ont atteint des niveaux exceptionnellement élevés (de l'ordre de 5 % ou plus en 1982-1984) et le dollar s'est fortement apprécié. À l'inverse, en 2008-2009 et en 2020, budgets et banques centrales ont été simultanément expansionnistes : déficits publics élevés et taux directeurs proches de zéro.</div>"
      },
      {
       "titre": "Les cas limites : trappe à liquidité, investissement insensible, cas classique",
       "contenu": "<p>L'efficacité relative des deux politiques dépend des pentes de IS et LM, donc des paramètres <em>b</em> et <em>h</em>. Hicks (1937) présentait IS-LM comme une synthèse : le cas « keynésien » et le cas « classique » sont deux zones d'une même courbe LM.</p>\n<h4>La trappe à liquidité (h → ∞)</h4>\n<p>Lorsque le taux d'intérêt est très bas, tous les agents anticipent sa remontée (donc une baisse du prix des obligations) et préfèrent détenir toute monnaie supplémentaire. La demande de monnaie devient infiniment élastique au taux : LM est <strong>horizontale</strong>. Une hausse de <em>M</em> ne fait pas baisser le taux : la politique monétaire est <strong>inefficace</strong>. Le multiplicateur budgétaire tend vers 1 / (1 − <em>c</em>) : il n'y a plus d'éviction, la politique budgétaire a son <strong>efficacité maximale</strong>. Dans la version moderne, la trappe correspond à la <strong>borne inférieure</strong> des taux nominaux (zero lower bound) : la banque centrale ne peut pas abaisser son taux bien en dessous de zéro, car les agents détiendraient alors des billets à rendement nul.</p>\n<h4>L'investissement insensible au taux (b = 0)</h4>\n<p>Si l'investissement ne dépend pas du taux (entrepreneurs très pessimistes, capacités inutilisées, contraintes de crédit), IS est <strong>verticale</strong>. La politique monétaire, même si elle fait baisser le taux, n'a pas d'effet sur <em>Y</em> : elle est inefficace. La politique budgétaire est pleinement efficace, sans éviction (Δ<em>Y</em> / Δ<em>G</em> = 1 / (1 − <em>c</em>)). Keynes y voyait une raison du pessimisme sur la politique monétaire en dépression (« on peut mener un cheval à l'abreuvoir, mais on ne peut pas le forcer à boire »).</p>\n<h4>Le cas classique (h = 0)</h4>\n<p>Si la demande de monnaie ne dépend pas du taux (théorie quantitative : <em>M</em>/<em>P</em> = <em>kY</em>), LM est <strong>verticale</strong> en <em>Y</em> = (<em>M</em>/<em>P</em>) / <em>k</em>. Une relance budgétaire fait seulement monter le taux d'intérêt : l'éviction est <strong>totale</strong>, la politique budgétaire est inefficace. La politique monétaire est au contraire pleinement efficace. C'est la position monétariste de Milton Friedman.</p>\n<table><thead><tr><th>Cas</th><th>Forme des courbes</th><th>Politique budgétaire</th><th>Politique monétaire</th></tr></thead><tbody>\n<tr><td>Trappe à liquidité</td><td>LM horizontale</td><td>efficacité maximale</td><td>inefficace</td></tr>\n<tr><td>Investissement insensible</td><td>IS verticale</td><td>efficacité maximale</td><td>inefficace</td></tr>\n<tr><td>Cas classique</td><td>LM verticale</td><td>inefficace (éviction totale)</td><td>efficacité maximale</td></tr>\n<tr><td>Cas intermédiaire</td><td>IS décroissante, LM croissante</td><td>efficace, éviction partielle</td><td>efficace</td></tr></tbody></table>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> le Japon après l'éclatement de sa bulle financière et immobilière du début des années 1990 (taux directeur quasi nul à partir de 1999), puis les États-Unis et la zone euro après 2008, ont connu une situation proche de la trappe à liquidité. La BCE a porté son taux de dépôt en territoire négatif en juin 2014 (jusqu'à −0,5 % en 2019) et a lancé des achats massifs de titres (assouplissement quantitatif, à partir de 2015) pour agir sur les taux longs et les anticipations. Ces politiques dites non conventionnelles visent précisément à contourner l'impuissance de la baisse du taux court décrite par IS-LM.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> dans la trappe à liquidité, c'est LM qui est horizontale, pas IS. Une IS horizontale correspondrait à un investissement infiniment sensible au taux, cas où la politique budgétaire serait au contraire totalement évincée.</div>"
      },
      {
       "titre": "De IS-LM à la demande agrégée, et les limites du modèle",
       "contenu": "<p>IS-LM suppose le niveau des prix fixe. En faisant varier <em>P</em>, on obtient la <strong>courbe de demande agrégée</strong> (AD), qui relie le niveau des prix et la production d'équilibre du marché des biens et de la monnaie.</p>\n<p><strong>Dérivation.</strong> Une hausse de <em>P</em> réduit les encaisses réelles <em>M</em>/<em>P</em>. LM se déplace vers le haut et la gauche, le taux d'intérêt monte, l'investissement baisse et la production d'équilibre diminue. À chaque niveau de prix correspond donc un niveau de production : dans le plan (<em>Y</em>, <em>P</em>), la demande agrégée est <strong>décroissante</strong>. Algébriquement, c'est l'expression de <em>Y</em>* en fonction de <em>P</em> :</p>\n<p class=\"eq\"><em>Y</em> = [<em>h</em> · <em>A</em> + <em>b</em> · <em>M</em> / <em>P</em>] / [<em>h</em>(1 − <em>c</em>) + <em>bk</em>]</p>\n<p>Le mécanisme qui passe par le taux d'intérêt est appelé <strong>effet Keynes</strong>. Arthur Pigou (1943) y ajoute un <strong>effet d'encaisses réelles</strong> : une baisse des prix accroît la richesse réelle des ménages détenteurs de monnaie et donc leur consommation, même en trappe à liquidité. La pente de AD est d'autant plus faible (AD plate) que l'investissement est sensible au taux.</p>\n<p><strong>Déplacements de AD.</strong> Tout ce qui déplace IS ou LM à prix donné déplace AD : une politique budgétaire ou monétaire expansionniste, une hausse de la confiance, déplacent AD vers la droite.</p>\n<h4>Limites du modèle IS-LM</h4>\n<ul><li><strong>Prix fixes</strong> : le modèle ignore l'inflation et l'ajustement de moyen terme ; d'où le modèle offre agrégée - demande agrégée.</li>\n<li><strong>Taux nominal et taux réel</strong> : l'investissement dépend du taux réel <em>r</em> = <em>i</em> − π<sup>a</sup>, la demande de monnaie du taux nominal. Avec des anticipations de déflation, une baisse des prix peut <em>accroître</em> le taux réel et déprimer la demande (Irving Fisher 1933, déflation par la dette).</li>\n<li><strong>Anticipations et dynamique</strong> : le modèle est statique ; il ne traite pas des anticipations de revenu futur ni de la crédibilité des politiques (critique de Lucas 1976).</li>\n<li><strong>Système financier</strong> : il existe un seul taux ; les primes de risque, l'écart entre taux directeur et taux des crédits, ou le rationnement du crédit sont absents. Blanchard intègre une prime de risque : <em>I</em> dépend de <em>r</em> + <em>x</em>.</li>\n<li><strong>Économie fermée</strong> : l'extension en économie ouverte est le modèle de Mundell-Fleming.</li></ul>\n<p>Malgré ces limites, IS-LM reste l'outil de base de l'analyse conjoncturelle. La macroéconomie néo-keynésienne moderne en conserve l'architecture sous la forme d'une courbe IS dynamique et d'une règle de taux de la banque centrale (modèle à trois équations).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la demande agrégée est décroissante parce qu'une hausse des prix réduit les encaisses réelles, fait monter le taux d'intérêt et baisser l'investissement (effet Keynes), et réduit la richesse réelle (effet Pigou). Elle n'est pas une simple courbe de demande microéconomique : sa pente provient de l'équilibre du marché monétaire.</div>"
      }
     ],
     "points_cles": [
      "IS-LM (Hicks 1937) représente l'équilibre simultané du marché des biens (IS) et du marché de la monnaie (LM) à prix fixes.",
      "Avec I = I0 − bi, la courbe IS s'écrit Y = (A − bi) / (1 − c) ; elle est décroissante, de pente −(1 − c) / b dans le plan (Y, i).",
      "La demande de monnaie L = kY − hi traduit les motifs de transaction, de précaution et de spéculation (préférence pour la liquidité).",
      "LM s'écrit i = (k / h)Y − (M / P) / h ; elle est croissante, de pente k / h.",
      "La politique budgétaire déplace IS ; la politique monétaire et le niveau des prix déplacent LM.",
      "Le revenu d'équilibre vaut Y* = [hA + b(M/P)] / [h(1 − c) + bk] ; le multiplicateur budgétaire 1 / [(1 − c) + bk/h] est inférieur au multiplicateur keynésien.",
      "Une relance budgétaire accroît Y et i et réduit l'investissement : l'éviction est partielle dans le cas général.",
      "Une relance monétaire réduit i, accroît l'investissement et la production.",
      "En trappe à liquidité (LM horizontale) ou avec IS verticale, la politique monétaire est inefficace et la politique budgétaire a son efficacité maximale.",
      "Dans le cas classique (LM verticale), l'éviction est totale et seule la politique monétaire agit sur Y.",
      "Le policy mix combine les deux politiques : une relance budgétaire accompagnée par la banque centrale évite l'éviction.",
      "La demande agrégée, décroissante dans le plan (Y, P), se déduit de IS-LM : une hausse de P réduit M/P, déplace LM à gauche et réduit Y."
     ],
     "lexique": [
      {
       "terme": "Courbe IS",
       "def": "Ensemble des combinaisons de revenu et de taux d'intérêt pour lesquelles le marché des biens et services est en équilibre."
      },
      {
       "terme": "Courbe LM",
       "def": "Ensemble des combinaisons de revenu et de taux d'intérêt pour lesquelles l'offre et la demande de monnaie sont égales."
      },
      {
       "terme": "Préférence pour la liquidité",
       "def": "Chez Keynes, désir de détenir de la monnaie plutôt que des titres, pour motifs de transaction, de précaution et de spéculation ; décroissante avec le taux d'intérêt."
      },
      {
       "terme": "Encaisses réelles",
       "def": "Quantité de monnaie exprimée en pouvoir d'achat, M / P."
      },
      {
       "terme": "Effet d'éviction",
       "def": "Réduction de la dépense privée (surtout l'investissement) provoquée par la hausse du taux d'intérêt consécutive à une relance budgétaire."
      },
      {
       "terme": "Policy mix",
       "def": "Combinaison des politiques budgétaire et monétaire pour atteindre des objectifs de production et de taux d'intérêt."
      },
      {
       "terme": "Trappe à liquidité",
       "def": "Situation où le taux d'intérêt est si bas que toute monnaie supplémentaire est thésaurisée : LM horizontale et politique monétaire inefficace."
      },
      {
       "terme": "Borne inférieure des taux",
       "def": "Limite (proche de zéro) en dessous de laquelle la banque centrale ne peut guère abaisser son taux nominal, les agents pouvant détenir des billets."
      },
      {
       "terme": "Effet Keynes",
       "def": "Mécanisme par lequel une baisse des prix accroît les encaisses réelles, fait baisser le taux d'intérêt et stimule l'investissement."
      },
      {
       "terme": "Effet Pigou",
       "def": "Effet de richesse par lequel une baisse des prix accroît la valeur réelle des encaisses et donc la consommation."
      },
      {
       "terme": "Demande agrégée",
       "def": "Relation décroissante entre le niveau général des prix et la production d'équilibre des marchés des biens et de la monnaie."
      }
     ],
     "qcm": [
      {
       "q": "Dans le plan (Y, i), quelle est la pente de la courbe IS si I = I0 − bi et C = c0 + cY ?",
       "options": [
        "k / h",
        "−(1 − c) / b",
        "−b / (1 − c)",
        "1 / (1 − c)"
       ],
       "bonnes": [
        1
       ],
       "explication": "IS s'écrit i = A / b − [(1 − c) / b] Y. La pente −b / (1 − c) est celle de Y en fonction de i, erreur fréquente d'inversion des axes ; k / h est la pente de LM."
      },
      {
       "q": "Quelles variations déplacent la courbe LM vers la droite ? (deux réponses)",
       "options": [
        "Une hausse de l'offre de monnaie nominale",
        "Une hausse des dépenses publiques",
        "Une baisse du niveau général des prix",
        "Une hausse de la préférence pour la liquidité"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "LM dépend de M / P : une hausse de M ou une baisse de P accroît les encaisses réelles et abaisse le taux d'équilibre à revenu donné. Les dépenses publiques déplacent IS ; une hausse de la demande de monnaie déplace LM vers la gauche."
      },
      {
       "q": "Dans le cas général, quel est l'effet d'une politique budgétaire expansionniste dans IS-LM ?",
       "options": [
        "Y augmente, i baisse, I augmente",
        "Y inchangé, i augmente, I baisse",
        "Y augmente, i inchangé, I inchangé",
        "Y augmente, i augmente, I baisse"
       ],
       "bonnes": [
        3
       ],
       "explication": "IS se déplace à droite le long de LM croissante : la production et le taux d'intérêt augmentent, l'investissement est partiellement évincé. La production inchangée correspond au cas classique, le taux inchangé à la trappe à liquidité."
      },
      {
       "q": "On a IS : Y = 2 000 − 100i et LM : i = 0,01Y − 10. Quel est le revenu d'équilibre ?",
       "options": [
        "2 000",
        "1 500",
        "1 000",
        "2 500"
       ],
       "bonnes": [
        1
       ],
       "explication": "Y = 2 000 − 100(0,01Y − 10) = 3 000 − Y, donc 2Y = 3 000 et Y = 1 500 ; le taux vaut alors i = 15 − 10 = 5."
      },
      {
       "q": "Avec c = 0,8, b = 50, k = 0,5 et h = 125, quel est le multiplicateur budgétaire dans IS-LM ?",
       "options": [
        "5",
        "2",
        "2,5",
        "1,67"
       ],
       "bonnes": [
        2
       ],
       "explication": "Multiplicateur = 1 / [(1 − c) + bk / h] = 1 / [0,2 + 50 × 0,5 / 125] = 1 / (0,2 + 0,2) = 2,5. La valeur 5 est le multiplicateur de la croix keynésienne sans éviction."
      },
      {
       "q": "Quelles propositions sont exactes dans une situation de trappe à liquidité ? (deux réponses)",
       "options": [
        "La courbe LM est horizontale",
        "La politique budgétaire est totalement évincée",
        "Une hausse de l'offre de monnaie ne fait pas baisser le taux d'intérêt",
        "La courbe IS est verticale"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "En trappe à liquidité, la demande de monnaie est infiniment élastique au taux : LM est horizontale et la monnaie supplémentaire est thésaurisée. La politique budgétaire n'y subit au contraire aucune éviction ; IS verticale correspond à un investissement insensible au taux."
      },
      {
       "q": "Dans le cas classique où la demande de monnaie ne dépend pas du taux d'intérêt, quelle proposition est exacte ?",
       "options": [
        "La politique monétaire est inefficace",
        "La courbe LM est verticale et l'éviction budgétaire est totale",
        "La courbe IS est horizontale",
        "Le multiplicateur budgétaire vaut 1 / (1 − c)"
       ],
       "bonnes": [
        1
       ],
       "explication": "Si h = 0, LM s'écrit Y = (M / P) / k : verticale. Une relance budgétaire fait seulement monter le taux, ce qui évince un montant égal de dépense privée. La politique monétaire y est au contraire pleinement efficace."
      },
      {
       "q": "Pourquoi la courbe de demande agrégée dérivée de IS-LM est-elle décroissante ?",
       "options": [
        "Parce qu'une hausse des prix réduit le revenu nominal des ménages",
        "Parce que chaque bien voit sa demande baisser quand son prix augmente",
        "Parce qu'une hausse des prix déplace IS vers la gauche",
        "Parce qu'une hausse des prix réduit les encaisses réelles, fait monter le taux d'intérêt et baisser l'investissement"
       ],
       "bonnes": [
        3
       ],
       "explication": "La pente de AD vient du marché monétaire (effet Keynes) : M / P baisse, LM se déplace vers la gauche, i monte, I et Y baissent. Ce n'est pas l'agrégation de demandes microéconomiques, et P ne figure pas dans IS dans le modèle de base."
      },
      {
       "q": "Un gouvernement veut réduire son déficit sans réduire la production. Quel policy mix est cohérent avec IS-LM ?",
       "options": [
        "Hausse des impôts et réduction de l'offre de monnaie",
        "Hausse des dépenses publiques et hausse des taux",
        "Baisse des impôts et politique monétaire restrictive",
        "Baisse des dépenses publiques et politique monétaire expansionniste"
       ],
       "bonnes": [
        3
       ],
       "explication": "La consolidation budgétaire déplace IS à gauche ; une baisse des taux (LM à droite) compense l'effet sur Y. La composition de la demande se déplace vers l'investissement privé."
      },
      {
       "q": "Quelles propositions sur l'efficacité relative des politiques dans IS-LM sont exactes ? (deux réponses)",
       "options": [
        "Plus l'investissement est sensible au taux, plus la politique monétaire est efficace",
        "Plus la demande de monnaie est sensible au taux, plus l'éviction budgétaire est forte",
        "Plus l'investissement est sensible au taux, plus l'éviction budgétaire est forte",
        "La politique monétaire est d'autant plus efficace que LM est plate"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Un b élevé rend IS plate : une baisse de taux accroît fortement Y, mais une hausse de taux consécutive à une relance évince beaucoup d'investissement. Un h élevé rend LM plate, ce qui réduit l'éviction et l'efficacité monétaire."
      },
      {
       "q": "Dans le modèle IS-LM, une hausse soudaine de la préférence pour la liquidité (les ménages veulent détenir plus de monnaie à revenu et taux donnés) entraîne :",
       "options": [
        "un déplacement de IS vers la droite et une hausse de Y",
        "une baisse du taux d'intérêt et une hausse de l'investissement",
        "aucun effet, car l'offre de monnaie est inchangée",
        "un déplacement de LM vers la gauche, une hausse de i et une baisse de Y"
       ],
       "bonnes": [
        3
       ],
       "explication": "À offre de monnaie donnée, une demande de monnaie plus forte exige un taux plus élevé pour chaque revenu : LM se déplace vers le haut et la gauche. L'investissement et la production baissent."
      }
     ]
    },
    {
     "id": "mac3-economie-ouverte",
     "titre": "Économie ouverte : balance des paiements, change et parités",
     "duree": 45,
     "niveau": "L2",
     "objectifs": [
      "Décrire la structure de la balance des paiements et établir l'identité entre solde courant, épargne et investissement",
      "Distinguer taux de change nominal, réel et effectif, et maîtriser les conventions de cotation",
      "Présenter les principaux régimes de change et leurs exemples historiques",
      "Énoncer et tester la parité des pouvoirs d'achat absolue et relative",
      "Écrire la parité des taux d'intérêt couverte et non couverte et en tirer des prévisions de change",
      "Démontrer la condition de Marshall-Lerner et expliquer la courbe en J"
     ],
     "sections": [
      {
       "titre": "La balance des paiements",
       "contenu": "<p>La <strong>balance des paiements</strong> est le document statistique qui recense, pour une période donnée, l'ensemble des transactions économiques et financières entre les résidents d'un pays et les non-résidents. Elle est établie en France par la Banque de France selon le sixième manuel du FMI (BPM6, 2009). Elle comprend trois comptes :</p>\n<ul><li>le <strong>compte des transactions courantes</strong> : échanges de biens (balance commerciale), de services (tourisme, transports, services aux entreprises), revenus primaires (revenus du travail et des investissements : intérêts, dividendes) et revenus secondaires (transferts courants sans contrepartie : envois de fonds des travailleurs, contributions au budget européen) ;</li>\n<li>le <strong>compte de capital</strong> : transferts en capital (remises de dette, aides à l'investissement), d'un montant généralement faible ;</li>\n<li>le <strong>compte financier</strong> : variations des créances et engagements vis-à-vis de l'extérieur, réparties en investissements directs (prise de contrôle d'au moins 10 % du capital), investissements de portefeuille (actions et obligations), produits dérivés, autres investissements (prêts, dépôts) et avoirs de réserve de la banque centrale.</li></ul>\n<p>Par construction (enregistrement en partie double), la balance est toujours équilibrée :</p>\n<p class=\"eq\">solde courant + solde du compte de capital − solde du compte financier + erreurs et omissions = 0</p>\n<p>Un pays en <strong>déficit courant</strong> doit financer ce déficit par des entrées nettes de capitaux : il s'endette vis-à-vis de l'extérieur ou cède des actifs. Le cumul des flux financiers donne la <strong>position extérieure nette</strong> (stock de créances moins stock d'engagements).</p>\n<h4>Le lien avec l'épargne et l'investissement</h4>\n<p>En économie ouverte, <em>Y</em> = <em>C</em> + <em>I</em> + <em>G</em> + <em>NX</em>, où <em>NX</em> = <em>X</em> − <em>M</em> désigne les exportations nettes. En ajoutant les revenus nets de l'extérieur, on passe au revenu national et l'on obtient l'identité fondamentale :</p>\n<p class=\"eq\"><em>CA</em> = <em>S</em><sub>nat</sub> − <em>I</em> = (<em>S</em><sub>privée</sub> − <em>I</em>) + (<em>T</em> − <em>G</em>)</p>\n<p>Le solde courant <em>CA</em> est égal à l'excédent de l'épargne nationale sur l'investissement intérieur. Un pays qui investit plus qu'il n'épargne importe de l'épargne étrangère : il est en déficit courant. Si l'épargne privée est égale à l'investissement privé, un déficit public se traduit par un déficit courant : ce sont les <strong>déficits jumeaux</strong>, observés aux États-Unis dans les années 1980 et 2000.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> selon la Banque de France (rapport annuel de la balance des paiements publié en 2025), le solde des transactions courantes de la France est redevenu légèrement excédentaire en 2024 (+2,7 milliards d'euros, soit un quasi-équilibre), après un déficit en 2022-2023 lié au renchérissement de la facture énergétique. Il combine un déficit des échanges de biens (environ −60 milliards d'euros en 2024) et un excédent des services (environ +56 milliards, porté par le tourisme et le transport maritime). L'Allemagne a, à l'inverse, dégagé des excédents courants de l'ordre de 7 à 8 % du PIB dans la seconde moitié des années 2010, et les États-Unis des déficits durables de l'ordre de 2 à 4 % du PIB.</div>"
      },
      {
       "titre": "Taux de change nominal, réel et effectif",
       "contenu": "<p>Le <strong>taux de change nominal</strong> est le prix d'une monnaie exprimé dans une autre. Deux conventions coexistent :</p>\n<ul><li><strong>cotation à l'incertain</strong> : nombre d'unités de monnaie nationale pour une unité de devise étrangère (1 $ = 0,90 €) ; une hausse du taux signifie une <em>dépréciation</em> de la monnaie nationale ;</li>\n<li><strong>cotation au certain</strong> : nombre d'unités de devise pour une unité de monnaie nationale (1 € = 1,10 $), convention utilisée pour l'euro ; une hausse signifie une <em>appréciation</em>.</li></ul>\n<p>Dans la suite, comme dans le manuel de Blanchard, on note <em>E</em> le prix de la monnaie nationale en devise (cotation au certain) : une hausse de <em>E</em> est une <strong>appréciation</strong> nominale. En change flexible, on parle d'appréciation et de dépréciation ; en change fixe, d'une <strong>réévaluation</strong> ou d'une <strong>dévaluation</strong> décidée par les autorités.</p>\n<p>Le <strong>taux de change réel</strong> mesure le prix relatif des biens nationaux en termes de biens étrangers. Si <em>P</em> est le niveau des prix national et <em>P</em>* le niveau des prix étranger :</p>\n<p class=\"eq\">ε = <em>E</em> · <em>P</em> / <em>P</em>*</p>\n<p>Une hausse de ε est une <strong>appréciation réelle</strong> : les biens nationaux deviennent plus chers que les biens étrangers, ce qui dégrade la <strong>compétitivité-prix</strong>. Elle peut résulter d'une appréciation nominale ou d'une inflation nationale plus forte qu'à l'étranger. En taux de variation (approximation) :</p>\n<p class=\"eq\">Δε / ε ≈ Δ<em>E</em> / <em>E</em> + π − π*</p>\n<p>Exemple : si l'euro s'apprécie de 2 % face au dollar et que l'inflation est de 3 % en zone euro contre 1 % aux États-Unis, l'euro s'apprécie en termes réels d'environ 2 + 3 − 1 = 4 %.</p>\n<p>Un pays commerçant avec de nombreux partenaires, on calcule un <strong>taux de change effectif</strong> : moyenne pondérée des taux de change bilatéraux, avec des poids reflétant la part de chaque partenaire dans le commerce. La BCE publie un taux de change effectif nominal et réel de l'euro face à un panier de partenaires (déflaté par les prix à la consommation ou par les coûts salariaux unitaires).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> vérifiez toujours la convention de cotation. Avec la convention au certain (1 € = <em>E</em> $), une <em>hausse</em> de <em>E</em> est une appréciation de l'euro ; avec la convention à l'incertain (1 $ = <em>e</em> €), une hausse de <em>e</em> est une <em>dépréciation</em> de l'euro. Beaucoup de manuels (Krugman-Obstfeld, Mankiw selon les éditions) n'utilisent pas la même convention que Blanchard.</div>"
      },
      {
       "titre": "Les régimes de change",
       "contenu": "<p>Le <strong>régime de change</strong> est l'ensemble des règles qui déterminent la formation du taux de change. On distingue :</p>\n<ul><li>le <strong>change flexible</strong> (ou flottant) : le taux est déterminé par l'offre et la demande sur le marché des changes, sans intervention systématique de la banque centrale. C'est le cas de l'euro, du dollar, du yen ou de la livre sterling ;</li>\n<li>le <strong>change fixe</strong> : la banque centrale s'engage à maintenir une parité avec une monnaie d'ancrage ou un panier, en achetant ou vendant sa monnaie contre des devises. Elle doit disposer de réserves de change et perd la maîtrise de sa politique monétaire si les capitaux sont mobiles ;</li>\n<li>les <strong>régimes intermédiaires</strong> : flottement géré, bande de fluctuation autour d'une parité centrale, parité glissante (crawling peg) ;</li>\n<li>les <strong>régimes de fixité dure</strong> : caisse d'émission (currency board : chaque unité de monnaie émise est couverte par des réserves en devise, comme à Hong Kong depuis 1983 ou en Argentine de 1991 à 2002), dollarisation ou euroïsation unilatérale, et union monétaire (abandon de la monnaie nationale).</li></ul>\n<table><thead><tr><th>Période</th><th>Système</th><th>Caractéristiques</th></tr></thead><tbody>\n<tr><td>vers 1870-1914</td><td>Étalon-or</td><td>parités fixes définies en or, libre circulation des capitaux</td></tr>\n<tr><td>1944-1971/1973</td><td>Bretton Woods</td><td>parités fixes mais ajustables face au dollar, dollar convertible en or (35 $ l'once) ; contrôle des capitaux</td></tr>\n<tr><td>1971-1973</td><td>Fin de Bretton Woods</td><td>suspension de la convertibilité du dollar (août 1971), généralisation du flottement en 1973</td></tr>\n<tr><td>1979-1998</td><td>Système monétaire européen</td><td>bandes de fluctuation autour de parités centrales ; crises de 1992-1993</td></tr>\n<tr><td>depuis 1999</td><td>Union monétaire européenne</td><td>euro, politique monétaire unique de la BCE ; flottement de l'euro vis-à-vis du reste du monde</td></tr></tbody></table>\n<p>Le choix du régime repose sur un arbitrage entre <strong>crédibilité</strong> (le change fixe importe la discipline anti-inflationniste du pays d'ancrage et réduit l'incertitude pour le commerce) et <strong>flexibilité</strong> (le change flexible permet d'absorber les chocs asymétriques et de garder une politique monétaire autonome). Les changes fixes sont exposés aux <strong>attaques spéculatives</strong> lorsque la parité paraît incompatible avec la situation économique, comme lors de la sortie de la livre sterling du SME en septembre 1992 ou de la crise asiatique de 1997.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en change fixe, la banque centrale intervient sur le marché des changes et son offre de monnaie devient endogène ; en change flexible, elle conserve la maîtrise de sa politique monétaire mais le taux de change fluctue. L'euro est une monnaie unique pour ses membres et une monnaie flottante vis-à-vis du reste du monde.</div>"
      },
      {
       "titre": "La parité des pouvoirs d'achat",
       "contenu": "<p>La <strong>parité des pouvoirs d'achat</strong> (PPA), formulée par Gustav Cassel (1918) à partir d'idées plus anciennes, repose sur la <strong>loi du prix unique</strong> : en l'absence de coûts de transport et d'obstacles aux échanges, un même bien doit avoir le même prix exprimé dans une monnaie commune, sinon l'arbitrage (acheter là où c'est moins cher, revendre là où c'est plus cher) fait disparaître l'écart.</p>\n<h4>PPA absolue</h4>\n<p>Appliquée à un panier de biens, la PPA absolue affirme que le taux de change égalise les niveaux de prix. Avec la cotation au certain :</p>\n<p class=\"eq\"><em>E</em> = <em>P</em>* / <em>P</em> &nbsp;&nbsp; soit &nbsp;&nbsp; ε = <em>EP</em> / <em>P</em>* = 1</p>\n<p>La PPA absolue implique donc un taux de change réel constant et égal à 1.</p>\n<h4>PPA relative</h4>\n<p>Plus faible, la PPA relative affirme que les variations du change compensent les écarts d'inflation : le taux de change réel est constant (mais pas nécessairement égal à 1). En taux de variation :</p>\n<p class=\"eq\">Δ<em>E</em> / <em>E</em> ≈ π* − π</p>\n<p>La monnaie du pays dont l'inflation est la plus forte se déprécie d'un montant égal à l'écart d'inflation.</p>\n<h4>L'indice Big Mac</h4>\n<p>Depuis 1986, l'hebdomadaire <em>The Economist</em> publie un indice ludique de la PPA fondé sur le prix du hamburger Big Mac dans différents pays. Le taux de change « implicite » est le rapport des prix locaux du Big Mac. Si le Big Mac coûte 5,50 $ aux États-Unis et 5,00 € en zone euro, le change PPA est 1 € = 1,10 $. Si le change effectif est 1 € = 1,20 $, l'euro est surévalué de (1,20 − 1,10) / 1,10 ≈ 9 % selon cet indice.</p>\n<h4>Validité empirique</h4>\n<ul><li>À court terme, la PPA est massivement rejetée : les taux de change réels fluctuent fortement, au rythme des changes nominaux, car les prix sont rigides.</li>\n<li>À long terme, la PPA relative est mieux vérifiée, surtout pour les pays à forte inflation. Mais les écarts se résorbent lentement : la littérature (synthèse de Kenneth Rogoff, 1996, « l'énigme de la PPA ») retient une demi-vie des écarts de l'ordre de 3 à 5 ans.</li>\n<li>Les biens non échangeables (services locaux, loyers), les coûts de transport, les droits de douane et la différenciation des produits limitent l'arbitrage.</li>\n<li><strong>Effet Balassa-Samuelson</strong> (1964) : dans les pays riches, la productivité est plus élevée dans le secteur des biens échangeables ; les salaires, égalisés entre secteurs, y sont plus élevés, ce qui renchérit les services non échangeables. Le niveau général des prix est donc plus élevé dans les pays riches : la PPA absolue n'y est pas vérifiée et les monnaies des pays pauvres paraissent « sous-évaluées ».</li></ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> le panier de référence coûte 120 € en zone euro et 150 $ aux États-Unis. Le taux de change de marché est 1 € = 1,10 $.<br>1) Change de PPA absolue : <em>E</em><sub>PPA</sub> = <em>P</em>* / <em>P</em> = 150 / 120 = 1,25 $ par euro.<br>2) Taux de change réel : ε = <em>EP</em> / <em>P</em>* = 1,10 × 120 / 150 = 0,88. Les biens de la zone euro sont 12 % moins chers que les biens américains : l'euro est sous-évalué de 12 % au regard de la PPA (1,10 / 1,25 = 0,88).<br>3) L'année suivante, l'inflation est de 2 % en zone euro et de 4 % aux États-Unis. Selon la PPA relative, l'euro doit s'apprécier d'environ 4 − 2 = 2 %, soit 1 € ≈ 1,122 $, le change réel restant à 0,88.</div>"
      },
      {
       "titre": "La parité des taux d'intérêt",
       "contenu": "<p>Avec une parfaite mobilité des capitaux, les investisseurs comparent les rendements des placements dans différentes monnaies. Soit <em>i</em> le taux d'intérêt national (zone euro), <em>i</em>* le taux étranger (États-Unis), <em>E<sub>t</sub></em> le change au comptant (dollars par euro) et <em>F<sub>t</sub></em> le change à terme à un an (cours fixé aujourd'hui pour une opération dans un an).</p>\n<h4>Parité couverte</h4>\n<p>Un euro placé en zone euro rapporte 1 + <em>i</em>. Converti en dollars, placé au taux américain, puis reconverti en euros au cours à terme fixé aujourd'hui, il rapporte <em>E<sub>t</sub></em>(1 + <em>i</em>*) / <em>F<sub>t</sub></em>, sans risque de change. L'arbitrage impose l'égalité :</p>\n<p class=\"eq\">1 + <em>i</em> = (1 + <em>i</em>*) · <em>E<sub>t</sub></em> / <em>F<sub>t</sub></em></p>\n<p>La <strong>parité des taux d'intérêt couverte</strong> (PTIC) est une relation d'arbitrage sans risque : elle est très bien vérifiée sur les marchés développés, même si des écarts persistants sont apparus après 2008 (contraintes réglementaires sur les bilans bancaires). Elle détermine le cours à terme : la monnaie dont le taux d'intérêt est le plus bas cote avec un <strong>report</strong> (elle vaut plus cher à terme qu'au comptant).</p>\n<h4>Parité non couverte</h4>\n<p>Si l'investisseur ne se couvre pas, il compare 1 + <em>i</em> au rendement anticipé du placement étranger, qui dépend du change anticipé <em>E</em><sup>a</sup><sub>t+1</sub>. Si les investisseurs sont neutres au risque :</p>\n<p class=\"eq\">1 + <em>i</em> = (1 + <em>i</em>*) · <em>E<sub>t</sub></em> / <em>E</em><sup>a</sup><sub>t+1</sub> &nbsp;&nbsp; d'où &nbsp;&nbsp; <em>i</em> ≈ <em>i</em>* − (<em>E</em><sup>a</sup><sub>t+1</sub> − <em>E<sub>t</sub></em>) / <em>E<sub>t</sub></em></p>\n<p>La <strong>parité des taux d'intérêt non couverte</strong> (PTINC) dit que l'écart de taux est compensé par la dépréciation anticipée : si le taux national dépasse le taux étranger de 2 points, les marchés anticipent une dépréciation de la monnaie nationale d'environ 2 %. On peut aussi l'écrire <em>E<sub>t</sub></em> = <em>E</em><sup>a</sup><sub>t+1</sub> · (1 + <em>i</em>) / (1 + <em>i</em>*) : à change anticipé donné, une hausse du taux national <strong>apprécie</strong> immédiatement la monnaie. C'est la relation clé du modèle de Mundell-Fleming.</p>\n<p><strong>Validité.</strong> La PTINC est mal vérifiée empiriquement : les monnaies à taux élevé tendent à s'apprécier ou à se déprécier moins que prévu (énigme de la prime à terme, Eugene Fama, 1984). C'est le fondement des stratégies de <strong>carry trade</strong> (s'endetter en yens à taux quasi nul pour placer en devises à taux élevé), rentables en moyenne mais exposées à de brutales pertes en cas de crise. On réintroduit alors une <strong>prime de risque</strong> : <em>i</em> = <em>i</em>* + dépréciation anticipée + prime de risque.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> taux à un an : 3 % en zone euro, 5 % aux États-Unis ; change au comptant 1 € = 1,10 $.<br>1) Cours à terme selon la PTIC : <em>F</em> = <em>E</em>(1 + <em>i</em>*) / (1 + <em>i</em>) = 1,10 × 1,05 / 1,03 ≈ 1,1214 $. L'euro cote avec un report d'environ 1,9 %.<br>2) Selon la PTINC, les marchés anticipent une appréciation de l'euro d'environ 5 − 3 = 2 % : <em>E</em><sup>a</sup> ≈ 1,122 $.<br>3) Si la BCE relève son taux à 4 % sans que le change anticipé change (1,122), le change au comptant devient <em>E</em> = 1,122 × 1,04 / 1,05 ≈ 1,111 $ : l'euro s'apprécie immédiatement d'environ 1 %.</div>"
      },
      {
       "titre": "Les déterminants de la balance courante",
       "contenu": "<p>À court terme, les exportations nettes dépendent de trois variables principales. On les écrit, en unités de biens nationaux :</p>\n<p class=\"eq\"><em>NX</em> = <em>X</em>(<em>Y</em>*, ε) − <em>IM</em>(<em>Y</em>, ε) / ε</p>\n<ul><li><strong>Le revenu étranger <em>Y</em>*</strong> : une hausse de la demande étrangère accroît les exportations (effet positif sur <em>NX</em>).</li>\n<li><strong>Le revenu national <em>Y</em></strong> : une hausse du revenu accroît les importations par la propension marginale à importer (effet négatif). D'où la tendance des pays en croissance rapide à creuser leur déficit commercial.</li>\n<li><strong>Le change réel ε</strong> : une appréciation réelle réduit les exportations (biens nationaux plus chers à l'étranger) et accroît les volumes importés (biens étrangers moins chers) ; mais elle réduit aussi le prix des importations en biens nationaux (terme 1 / ε). L'effet total est ambigu : c'est l'objet de la condition de Marshall-Lerner.</li></ul>\n<p>À moyen et long terme, l'approche par l'épargne et l'investissement (<em>CA</em> = <em>S</em> − <em>I</em>) met en avant des déterminants structurels : la démographie (une population vieillissante qui épargne pour la retraite, comme en Allemagne ou au Japon, tend à dégager des excédents), le solde budgétaire (déficits jumeaux), le développement financier et l'attractivité pour l'investissement. La <strong>compétitivité hors-prix</strong> (qualité, innovation, gamme, réseaux de distribution) joue aussi un rôle majeur, souvent invoqué pour expliquer la divergence entre les soldes allemand et français dans les années 2000.</p>\n<p>Ces deux approches sont complémentaires : l'identité <em>CA</em> = <em>S</em> − <em>I</em> est toujours vérifiée, mais elle ne dit pas quelle variable s'ajuste. Une baisse du change réel améliore le solde extérieur parce qu'elle modifie aussi le revenu, l'épargne et l'investissement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> un déficit courant n'est pas en soi un signe de mauvaise santé économique. Il peut refléter un investissement élevé et rentable financé par l'épargne étrangère (pays en rattrapage). Il devient préoccupant lorsqu'il finance la consommation ou des investissements peu productifs, ou lorsque la position extérieure nette se dégrade durablement.</div>"
      },
      {
       "titre": "La condition de Marshall-Lerner et la courbe en J",
       "contenu": "<p>Une dépréciation réelle améliore-t-elle le solde commercial ? Elle produit deux effets de sens opposés : un <strong>effet volume</strong> favorable (les exportations augmentent, les quantités importées diminuent) et un <strong>effet prix</strong> (ou effet termes de l'échange) défavorable (chaque unité importée coûte plus cher en biens nationaux).</p>\n<p><strong>Démonstration.</strong> Pour simplifier, notons <em>q</em> = 1 / ε le prix des biens étrangers en biens nationaux (une hausse de <em>q</em> est une dépréciation réelle). Le solde s'écrit <em>NX</em> = <em>X</em>(<em>q</em>) − <em>q</em> · <em>IM</em>(<em>q</em>), avec <em>X</em>' &gt; 0 et <em>IM</em>' &lt; 0. On définit les élasticités-prix en valeur absolue : η<sub>X</sub> = (<em>q</em> / <em>X</em>) · d<em>X</em>/d<em>q</em> et η<sub>M</sub> = −(<em>q</em> / <em>IM</em>) · d<em>IM</em>/d<em>q</em>. En dérivant :</p>\n<p class=\"eq\">d<em>NX</em> / d<em>q</em> = <em>X</em>' − <em>IM</em> − <em>q</em> · <em>IM</em>'</p>\n<p>On part d'une balance équilibrée, <em>X</em> = <em>q</em> · <em>IM</em>. En multipliant par <em>q</em> / <em>X</em> = 1 / <em>IM</em> :</p>\n<p class=\"eq\">(<em>q</em> / <em>X</em>) · d<em>NX</em> / d<em>q</em> = η<sub>X</sub> − 1 + η<sub>M</sub></p>\n<p>La dépréciation réelle améliore le solde si et seulement si :</p>\n<p class=\"eq\">η<sub>X</sub> + η<sub>M</sub> &gt; 1</p>\n<p>C'est la <strong>condition de Marshall-Lerner</strong> (Alfred Marshall 1923, Abba Lerner 1944, Joan Robinson). Elle exige que les volumes échangés soient suffisamment sensibles aux prix pour que l'effet volume l'emporte sur l'effet prix.</p>\n<h4>La courbe en J</h4>\n<p>À court terme, les volumes réagissent lentement : les contrats sont signés à l'avance, les consommateurs et les entreprises mettent du temps à changer de fournisseur. Les élasticités de court terme sont faibles et la condition n'est pas remplie : l'effet prix domine et le solde se <strong>détériore</strong> d'abord. Puis les volumes s'ajustent, les élasticités de long terme sont plus élevées et le solde s'<strong>améliore</strong>. Dans un graphique avec le temps en abscisse et le solde commercial en ordonnée, la trajectoire après la dépréciation dessine un <strong>J</strong> : chute initiale, puis remontée au-dessus du niveau de départ, au bout de un à deux ans environ selon les études.</p>\n<table><thead><tr><th>Horizon</th><th>η<sub>X</sub></th><th>η<sub>M</sub></th><th>η<sub>X</sub> + η<sub>M</sub></th><th>Effet d'une dépréciation de 10 % sur le solde</th></tr></thead><tbody>\n<tr><td>Court terme (quelques mois)</td><td>0,2</td><td>0,3</td><td>0,5</td><td>détérioration</td></tr>\n<tr><td>Moyen terme (un an)</td><td>0,5</td><td>0,6</td><td>1,1</td><td>légère amélioration</td></tr>\n<tr><td>Long terme (deux ans et plus)</td><td>1,0</td><td>0,9</td><td>1,9</td><td>amélioration nette</td></tr></tbody></table>\n<p><em>Valeurs illustratives, d'ordre de grandeur cohérent avec les estimations usuelles.</em> Avec une balance initialement équilibrée de 100 en exportations, une dépréciation réelle de 10 % modifie le solde d'environ 100 × 10 % × (η<sub>X</sub> + η<sub>M</sub> − 1) : −5 à court terme, +1 à un an, +9 à long terme.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> après l'accord du Plaza (septembre 1985), par lequel les grandes économies ont organisé la baisse du dollar, le déficit commercial américain a continué de se creuser jusqu'en 1987 avant de se réduire nettement à la fin de la décennie, illustration classique de la courbe en J et des délais d'ajustement des volumes. La dévaluation de la livre sterling de 1967 avait de même été suivie d'une dégradation transitoire du solde britannique.</div>"
      }
     ],
     "points_cles": [
      "La balance des paiements comprend le compte des transactions courantes, le compte de capital et le compte financier ; elle est équilibrée par construction.",
      "Le solde courant est égal à l'épargne nationale moins l'investissement : CA = (S privée − I) + (T − G).",
      "Les déficits jumeaux associent déficit public et déficit courant lorsque l'épargne privée nette varie peu.",
      "Avec la cotation au certain (1 € = E $), une hausse de E est une appréciation de l'euro ; il faut toujours préciser la convention.",
      "Le taux de change réel ε = EP / P* mesure le prix relatif des biens nationaux ; sa hausse dégrade la compétitivité-prix.",
      "En variation, Δε / ε ≈ ΔE / E + π − π*.",
      "La PPA absolue implique ε = 1 ; la PPA relative implique que la variation du change compense l'écart d'inflation.",
      "La PPA est rejetée à court terme et vérifiée lentement à long terme (demi-vie de 3 à 5 ans) ; l'effet Balassa-Samuelson explique des écarts durables.",
      "La parité couverte 1 + i = (1 + i*) E / F est une relation d'arbitrage sans risque, bien vérifiée.",
      "La parité non couverte i ≈ i* + dépréciation anticipée implique qu'une hausse du taux national apprécie immédiatement la monnaie, à anticipations données.",
      "Le régime de change arbitre entre crédibilité (change fixe) et autonomie monétaire et absorption des chocs (change flexible).",
      "Condition de Marshall-Lerner : une dépréciation réelle améliore le solde commercial si la somme des élasticités-prix des exportations et des importations dépasse 1.",
      "La courbe en J décrit la détérioration initiale du solde après une dépréciation, puis son amélioration lorsque les volumes s'ajustent."
     ],
     "lexique": [
      {
       "terme": "Balance des paiements",
       "def": "Document statistique recensant toutes les transactions entre résidents et non-résidents sur une période."
      },
      {
       "terme": "Solde des transactions courantes",
       "def": "Somme des soldes des biens, des services, des revenus primaires et des revenus secondaires ; égal à l'épargne nationale moins l'investissement."
      },
      {
       "terme": "Position extérieure nette",
       "def": "Stock des créances d'un pays sur l'extérieur moins le stock de ses engagements envers l'extérieur."
      },
      {
       "terme": "Taux de change réel",
       "def": "Prix relatif des biens nationaux en biens étrangers : ε = EP / P* avec la cotation au certain."
      },
      {
       "terme": "Taux de change effectif",
       "def": "Moyenne pondérée par le commerce des taux de change bilatéraux d'une monnaie."
      },
      {
       "terme": "Caisse d'émission",
       "def": "Régime de change fixe dur où toute la monnaie émise est couverte par des réserves dans la devise d'ancrage."
      },
      {
       "terme": "Parité des pouvoirs d'achat",
       "def": "Théorie selon laquelle le taux de change égalise (absolue) ou fait évoluer en compensant l'inflation (relative) les niveaux de prix entre pays."
      },
      {
       "terme": "Effet Balassa-Samuelson",
       "def": "Les pays à forte productivité dans les biens échangeables ont des prix plus élevés des services non échangeables, d'où un niveau de prix plus élevé."
      },
      {
       "terme": "Parité des taux d'intérêt couverte",
       "def": "Égalité des rendements d'un placement national et d'un placement étranger couvert par une opération à terme."
      },
      {
       "terme": "Parité des taux d'intérêt non couverte",
       "def": "Égalité entre l'écart de taux d'intérêt et la dépréciation anticipée de la monnaie à taux élevé, pour des investisseurs neutres au risque."
      },
      {
       "terme": "Condition de Marshall-Lerner",
       "def": "Condition selon laquelle une dépréciation réelle améliore le solde commercial : somme des élasticités-prix supérieure à 1."
      },
      {
       "terme": "Courbe en J",
       "def": "Profil temporel du solde commercial après une dépréciation : détérioration initiale puis amélioration."
      },
      {
       "terme": "Carry trade",
       "def": "Stratégie consistant à emprunter dans une monnaie à taux bas pour placer dans une monnaie à taux élevé, sans couverture de change."
      }
     ],
     "qcm": [
      {
       "q": "Un pays a une épargne privée de 20 % du PIB, un investissement de 22 % du PIB et un déficit public de 3 % du PIB. Quel est son solde courant ?",
       "options": [
        "−5 % du PIB",
        "+1 % du PIB",
        "−1 % du PIB",
        "−2 % du PIB"
       ],
       "bonnes": [
        0
       ],
       "explication": "CA = (S privée − I) + (T − G) = (20 − 22) + (−3) = −5 % du PIB. L'erreur fréquente consiste à oublier l'épargne publique négative (−2 %)."
      },
      {
       "q": "L'euro passe de 1 € = 1,10 $ à 1 € = 1,05 $. Quelle proposition est exacte ?",
       "options": [
        "L'euro s'est apprécié d'environ 4,5 %",
        "L'euro s'est déprécié d'environ 4,5 % face au dollar",
        "Le dollar s'est déprécié face à l'euro",
        "Le taux de change réel de l'euro s'est forcément apprécié"
       ],
       "bonnes": [
        1
       ],
       "explication": "En cotation au certain, une baisse du cours est une dépréciation de l'euro : (1,05 − 1,10) / 1,10 ≈ −4,5 %. Le dollar s'est donc apprécié. L'effet sur le change réel dépend aussi de l'écart d'inflation."
      },
      {
       "q": "L'euro s'apprécie de 3 % en nominal face au dollar ; l'inflation est de 2 % en zone euro et de 4 % aux États-Unis. Quelle est l'évolution approximative du taux de change réel de l'euro ?",
       "options": [
        "Appréciation réelle de 5 %",
        "Appréciation réelle de 9 %",
        "Appréciation réelle de 1 %",
        "Dépréciation réelle de 1 %"
       ],
       "bonnes": [
        2
       ],
       "explication": "Δε / ε ≈ ΔE / E + π − π* = 3 + 2 − 4 = 1 %. L'inflation plus faible en zone euro compense en partie l'appréciation nominale."
      },
      {
       "q": "Quelles propositions sur la parité des pouvoirs d'achat sont exactes ? (deux réponses)",
       "options": [
        "La PPA absolue implique un taux de change réel égal à 1",
        "La PPA est bien vérifiée à court terme sur les grandes devises",
        "Selon la PPA relative, la monnaie du pays le plus inflationniste se déprécie",
        "L'effet Balassa-Samuelson prédit des niveaux de prix plus faibles dans les pays riches"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "La PPA absolue égalise les niveaux de prix en monnaie commune, donc ε = 1 ; la PPA relative fait compenser l'écart d'inflation par la dépréciation. À court terme, les changes réels fluctuent fortement, et Balassa-Samuelson prédit des prix plus élevés dans les pays riches."
      },
      {
       "q": "Un Big Mac coûte 5,00 € en zone euro et 6,00 $ aux États-Unis. Le change de marché est 1 € = 1,10 $. Selon l'indice Big Mac, l'euro est :",
       "options": [
        "surévalué d'environ 9 %",
        "sous-évalué d'environ 17 %",
        "à sa parité de pouvoir d'achat",
        "sous-évalué d'environ 8 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "Change PPA = 6,00 / 5,00 = 1,20 $ par euro. Avec 1,10 $, l'euro vaut (1,10 − 1,20) / 1,20 ≈ −8 % de moins que sa parité : il est sous-évalué d'environ 8 %."
      },
      {
       "q": "Taux à un an : 2 % en zone euro, 4 % aux États-Unis ; change au comptant 1 € = 1,10 $. Quel cours à terme à un an est compatible avec la parité couverte ?",
       "options": [
        "1 € ≈ 1,078 $",
        "1 € ≈ 1,122 $",
        "1 € = 1,10 $",
        "1 € ≈ 1,144 $"
       ],
       "bonnes": [
        1
       ],
       "explication": "F = E(1 + i*) / (1 + i) = 1,10 × 1,04 / 1,02 ≈ 1,122 $. La monnaie à taux bas (l'euro) cote avec un report : elle vaut plus cher à terme qu'au comptant."
      },
      {
       "q": "Selon la parité des taux d'intérêt non couverte, à change anticipé donné, que provoque une hausse du taux directeur national ?",
       "options": [
        "Une dépréciation immédiate de la monnaie nationale",
        "Aucun effet sur le change au comptant",
        "Une appréciation immédiate de la monnaie nationale",
        "Une baisse du taux étranger"
       ],
       "bonnes": [
        2
       ],
       "explication": "Et = E(a) × (1 + i) / (1 + i*) : à E(a) et i* donnés, une hausse de i accroît le prix de la monnaie nationale aujourd'hui. Les placements nationaux deviennent plus attractifs jusqu'à ce que la dépréciation anticipée compense l'écart de taux."
      },
      {
       "q": "Quelles propositions sur la condition de Marshall-Lerner sont exactes ? (deux réponses)",
       "options": [
        "Elle exige que la somme des élasticités-prix des exportations et des importations soit supérieure à 1",
        "Elle garantit qu'une dépréciation améliore immédiatement le solde commercial",
        "Elle compare l'effet volume et l'effet prix d'une variation du change réel",
        "Elle porte sur les élasticités-revenu des échanges"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Partant de l'équilibre, (q / X) dNX/dq = ηX + ηM − 1 : l'effet volume doit l'emporter sur l'effet prix. Elle porte sur les élasticités-prix, et les élasticités de court terme sont souvent trop faibles pour la satisfaire, d'où la courbe en J."
      },
      {
       "q": "Que décrit la courbe en J ?",
       "options": [
        "L'amélioration immédiate puis la détérioration du solde après une appréciation",
        "La relation entre inflation et chômage en économie ouverte",
        "L'évolution du taux de change après une hausse du taux d'intérêt",
        "La détérioration initiale puis l'amélioration du solde commercial après une dépréciation réelle"
       ],
       "bonnes": [
        3
       ],
       "explication": "À court terme, les volumes réagissent peu et l'effet prix renchérit les importations : le solde se dégrade. Lorsque les élasticités deviennent plus fortes, l'effet volume l'emporte et le solde s'améliore."
      },
      {
       "q": "Quelle proposition sur les régimes de change est exacte ?",
       "options": [
        "En change fixe avec mobilité des capitaux, la banque centrale conserve une politique monétaire autonome",
        "Le système de Bretton Woods reposait sur des parités fixes ajustables face au dollar, lui-même convertible en or",
        "L'euro est en change fixe vis-à-vis du dollar",
        "Une caisse d'émission autorise la banque centrale à émettre de la monnaie sans contrepartie en devises"
       ],
       "bonnes": [
        1
       ],
       "explication": "Bretton Woods (1944) fixait les monnaies au dollar, convertible en or à 35 $ l'once jusqu'en 1971. L'euro flotte face au dollar ; une caisse d'émission impose une couverture intégrale en devises ; le change fixe avec capitaux mobiles prive la banque centrale de son autonomie."
      },
      {
       "q": "Quelles propositions sur la parité des taux d'intérêt sont exactes ? (deux réponses)",
       "options": [
        "La parité non couverte est en général bien vérifiée empiriquement",
        "La parité couverte est une relation d'arbitrage sans risque de change",
        "La parité couverte implique que la monnaie à taux élevé cote avec un report",
        "Le carry trade exploite les écarts à la parité non couverte"
       ],
       "bonnes": [
        1,
        3
       ],
       "explication": "Le placement couvert à terme élimine le risque de change. La parité non couverte est mal vérifiée (énigme de la prime à terme, Fama 1984), ce qui rend le carry trade rentable en moyenne. La monnaie à taux élevé cote avec un déport, non un report."
      }
     ]
    },
    {
     "id": "mac3-mundell-fleming",
     "titre": "Le modèle de Mundell-Fleming",
     "duree": 45,
     "niveau": "L2",
     "objectifs": [
      "Construire le modèle IS-LM-BP et interpréter la pente de la courbe BP selon la mobilité des capitaux",
      "Analyser l'efficacité des politiques budgétaire et monétaire en change flexible et en change fixe avec mobilité parfaite des capitaux",
      "Étendre l'analyse au cas d'une mobilité imparfaite des capitaux",
      "Énoncer et illustrer le triangle d'incompatibilité de Mundell",
      "Présenter la théorie des zones monétaires optimales et ses critères",
      "Appliquer ces outils au fonctionnement et aux crises de la zone euro"
     ],
     "sections": [
      {
       "titre": "Hypothèses et construction du modèle IS-LM-BP",
       "contenu": "<p>Le modèle de <strong>Mundell-Fleming</strong>, développé indépendamment par Robert Mundell (articles de 1962 et 1963) et Marcus Fleming (1962), étend IS-LM à une économie ouverte aux échanges de biens et de capitaux. Mundell a reçu le prix Nobel en 1999 en partie pour ces travaux. Hypothèses :</p>\n<ul><li><strong>petite économie ouverte</strong> : le pays ne peut influencer ni le taux d'intérêt mondial <em>i</em>*, ni le revenu étranger <em>Y</em>* ;</li>\n<li>prix nationaux et étrangers fixes à court terme, donc change réel et change nominal évoluent ensemble ;</li>\n<li>anticipations de change <strong>statiques</strong> : les agents n'anticipent pas de variation du change, de sorte que la parité non couverte se réduit à <em>i</em> = <em>i</em>* en mobilité parfaite.</li></ul>\n<p>Le modèle comporte trois relations.</p>\n<p><strong>IS en économie ouverte</strong> : <em>Y</em> = <em>C</em>(<em>Y</em> − <em>T</em>) + <em>I</em>(<em>i</em>) + <em>G</em> + <em>NX</em>(<em>Y</em>, <em>Y</em>*, ε). Une appréciation réelle (hausse de ε) réduit les exportations nettes (sous la condition de Marshall-Lerner) et déplace IS vers la gauche ; une dépréciation la déplace vers la droite.</p>\n<p><strong>LM</strong> : <em>M</em> / <em>P</em> = <em>L</em>(<em>Y</em>, <em>i</em>), inchangée par rapport à l'économie fermée.</p>\n<p><strong>BP</strong> : équilibre de la balance des paiements, somme du solde courant et des entrées nettes de capitaux, qui dépendent de l'écart de taux :</p>\n<p class=\"eq\"><em>BP</em> = <em>NX</em>(<em>Y</em>, ε) + κ · (<em>i</em> − <em>i</em>*) = 0</p>\n<p>où κ mesure la <strong>mobilité des capitaux</strong>. Avec <em>NX</em> = <em>NX</em><sub>0</sub> − <em>mY</em>, la différentiation donne la pente de BP dans le plan (<em>Y</em>, <em>i</em>) :</p>\n<p class=\"eq\">d<em>i</em> / d<em>Y</em> = <em>m</em> / κ</p>\n<p>Une hausse du revenu accroît les importations et dégrade le solde courant ; il faut une hausse du taux d'intérêt pour attirer les capitaux qui financent ce déficit. BP est donc croissante, d'autant plus plate que les capitaux sont mobiles. Trois cas : <strong>mobilité nulle</strong> (κ = 0, BP verticale), <strong>mobilité imparfaite</strong> (BP croissante), <strong>mobilité parfaite</strong> (κ infini, BP horizontale au niveau <em>i</em> = <em>i</em>*). Au-dessus de BP, la balance est excédentaire (entrées de capitaux) ; au-dessous, déficitaire.</p>\n<p>Le fonctionnement dépend du <strong>régime de change</strong>. En change flexible, un déséquilibre de la balance modifie le change, ce qui déplace IS (et BP) jusqu'au retour à l'équilibre. En change fixe, la banque centrale intervient en achetant ou vendant des devises, ce qui modifie l'offre de monnaie et déplace LM.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en mobilité parfaite des capitaux, le taux d'intérêt national est contraint d'égaler le taux mondial. La variable d'ajustement est le change en régime flexible, l'offre de monnaie en régime fixe.</div>"
      },
      {
       "titre": "Mobilité parfaite et change flexible",
       "contenu": "<h4>Politique monétaire expansionniste</h4>\n<p>La banque centrale accroît <em>M</em> : LM se déplace vers la droite, le taux d'intérêt tend à passer sous <em>i</em>*. Les capitaux sortent, la demande de monnaie nationale baisse sur le marché des changes et la monnaie se <strong>déprécie</strong>. La dépréciation accroît les exportations nettes et déplace IS vers la droite, jusqu'à ce que le taux revienne à <em>i</em>*. Au nouvel équilibre, le revenu est plus élevé et le taux d'intérêt inchangé : la politique monétaire est <strong>pleinement efficace</strong>, et même plus efficace qu'en économie fermée, car elle agit par le canal du change.</p>\n<p>Algébriquement, avec <em>i</em> = <em>i</em>*, LM détermine seule le revenu :</p>\n<p class=\"eq\"><em>Y</em> = (<em>M</em> / <em>P</em> + <em>hi</em>*) / <em>k</em> &nbsp;&nbsp; donc &nbsp;&nbsp; Δ<em>Y</em> = Δ(<em>M</em> / <em>P</em>) / <em>k</em></p>\n<p>Ce multiplicateur monétaire 1 / <em>k</em> est supérieur à celui de l'économie fermée, puisque le taux ne baisse pas et que tout l'ajustement passe par les quantités.</p>\n<h4>Politique budgétaire expansionniste</h4>\n<p>Une hausse de <em>G</em> déplace IS vers la droite ; le taux d'intérêt tend à monter au-dessus de <em>i</em>*. Les capitaux affluent, la monnaie s'<strong>apprécie</strong>, les exportations nettes baissent et IS revient vers la gauche. Comme LM n'a pas bougé et que le taux doit revenir à <em>i</em>*, le revenu revient exactement à son niveau initial. La politique budgétaire est <strong>totalement inefficace</strong> : la hausse des dépenses publiques est intégralement compensée par une baisse des exportations nettes, Δ<em>NX</em> = −Δ<em>G</em>. C'est une <strong>éviction par le change</strong>, et non plus par le taux d'intérêt.</p>\n<p>Le même raisonnement montre qu'un choc de demande extérieure (récession chez les partenaires) est partiellement absorbé par une dépréciation : le change flexible joue un rôle d'amortisseur des chocs réels, mais il transmet les chocs financiers (variations de <em>i</em>* ou de la prime de risque).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> la combinaison observée aux États-Unis au début des années 1980 (relance budgétaire sous Reagan, politique monétaire restrictive sous Volcker) s'est traduite, conformément au modèle, par une forte appréciation du dollar (de l'ordre de 50 % en termes effectifs entre 1980 et 1985) et par un creusement du déficit commercial : la relance budgétaire a été largement « exportée » par le canal du change.</div>"
      },
      {
       "titre": "Mobilité parfaite et change fixe",
       "contenu": "<h4>Politique monétaire expansionniste</h4>\n<p>La banque centrale accroît <em>M</em> ; le taux tend à baisser sous <em>i</em>* et les capitaux sortent. La monnaie nationale subit une pression à la dépréciation. Pour défendre la parité, la banque centrale doit <strong>vendre des devises</strong> et racheter sa propre monnaie, ce qui réduit l'offre de monnaie. Le processus continue jusqu'à ce que <em>M</em> revienne à son niveau initial. Résultat : la politique monétaire est <strong>totalement inefficace</strong> ; seule la composition de l'actif de la banque centrale a changé (plus de titres domestiques, moins de réserves de change). L'offre de monnaie est <strong>endogène</strong> : le pays importe la politique monétaire du pays d'ancrage.</p>\n<h4>Politique budgétaire expansionniste</h4>\n<p>Une hausse de <em>G</em> déplace IS vers la droite, le taux tend à monter, les capitaux affluent. Pour empêcher l'appréciation, la banque centrale <strong>achète des devises</strong> en émettant de la monnaie : LM se déplace vers la droite, jusqu'à ce que le taux revienne à <em>i</em>*. Le revenu augmente du plein effet du multiplicateur en économie ouverte, 1 / (1 − <em>c</em>(1 − <em>t</em>) + <em>m</em>) : la politique budgétaire est <strong>pleinement efficace</strong>, car la politique monétaire l'accompagne automatiquement.</p>\n<h4>Dévaluation</h4>\n<p>En change fixe, les autorités peuvent modifier la parité. Une <strong>dévaluation</strong> déprécie la monnaie, accroît les exportations nettes et déplace IS vers la droite ; le taux tend à monter, la banque centrale achète des devises et LM se déplace aussi. Le revenu augmente : la dévaluation a le même effet qu'une expansion monétaire en change flexible. Elle est cependant pénalisée par la perte de crédibilité du régime de change et peut susciter des anticipations de nouvelles dévaluations.</p>\n<table><thead><tr><th>Mobilité parfaite des capitaux</th><th>Change flexible</th><th>Change fixe</th></tr></thead><tbody>\n<tr><td>Politique monétaire</td><td>efficace (dépréciation, hausse de <em>NX</em>)</td><td>inefficace (offre de monnaie endogène)</td></tr>\n<tr><td>Politique budgétaire</td><td>inefficace (appréciation, éviction de <em>NX</em>)</td><td>efficace (accompagnement monétaire automatique)</td></tr>\n<tr><td>Variable d'ajustement</td><td>taux de change</td><td>offre de monnaie et réserves de change</td></tr></tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> ne confondez pas les deux évictions. En économie fermée, la relance budgétaire évince l'investissement par la hausse du taux d'intérêt. En change flexible avec mobilité parfaite, le taux d'intérêt ne change pas : ce sont les exportations nettes qui sont évincées par l'appréciation du change. Et retenez la symétrie : chaque régime rend efficace une seule des deux politiques.</div>"
      },
      {
       "titre": "Mobilité imparfaite des capitaux",
       "contenu": "<p>Lorsque les capitaux sont imparfaitement mobiles (contrôles, coûts de transaction, primes de risque), BP est croissante et le taux national peut s'écarter durablement du taux mondial. Les résultats deviennent intermédiaires.</p>\n<p><strong>Change fixe.</strong> La politique monétaire garde un effet transitoire mais tend à être annulée par la perte de réserves ; la politique budgétaire est efficace, d'autant plus que les capitaux sont mobiles (les entrées de capitaux obligent la banque centrale à accroître <em>M</em>). Si les capitaux sont peu mobiles (BP plus pentue que LM), la relance crée un déficit de la balance (hausse des importations non compensée par les capitaux), la banque centrale perd des réserves et <em>M</em> baisse : l'effet est réduit.</p>\n<p><strong>Change flexible.</strong> La politique monétaire est efficace (baisse du taux et dépréciation se cumulent). L'effet d'une relance budgétaire dépend des pentes relatives de LM et BP :</p>\n<ul><li>si BP est <strong>plus plate</strong> que LM (capitaux assez mobiles), l'équilibre IS-LM après relance se situe au-dessus de BP : excédent, appréciation, IS recule en partie ; la relance reste efficace mais affaiblie ;</li>\n<li>si BP est <strong>plus pentue</strong> que LM (capitaux peu mobiles), la relance crée un déficit (effet importations dominant) : dépréciation, ce qui renforce la relance.</li></ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> petite économie ouverte en mobilité parfaite, <em>i</em>* = 2 (en points). IS : <em>Y</em> = 1 000 + 2<em>G</em> − 50<em>i</em> + 100<em>q</em>, où <em>q</em> est un indice du prix des biens étrangers (une hausse de <em>q</em> est une dépréciation réelle). LM : <em>M</em>/<em>P</em> = 0,5<em>Y</em> − 50<em>i</em>. Initialement <em>G</em> = 200, <em>M</em>/<em>P</em> = 600.<br>1) Équilibre en change flexible : <em>i</em> = 2 dans LM donne 600 = 0,5<em>Y</em> − 100, soit <em>Y</em> = 1 400. IS : 1 400 = 1 000 + 400 − 100 + 100<em>q</em>, donc <em>q</em> = 1.<br>2) Hausse de <em>G</em> à 250 en change flexible : LM impose toujours <em>Y</em> = 1 400. IS : 1 400 = 1 000 + 500 − 100 + 100<em>q</em>, donc <em>q</em> = 0. L'appréciation (<em>q</em> passe de 1 à 0) évince exactement 100 de demande : Δ<em>Y</em> = 0.<br>3) Même hausse de <em>G</em> en change fixe (<em>q</em> = 1) : IS donne <em>Y</em> = 1 000 + 500 − 100 + 100 = 1 500. LM impose alors <em>M</em>/<em>P</em> = 0,5 × 1 500 − 100 = 650 : la banque centrale achète des devises et émet 50 de monnaie. Δ<em>Y</em> = 100.<br>4) Hausse de <em>M</em>/<em>P</em> à 650 en change flexible : <em>Y</em> = 1 500 ; IS : 1 500 = 1 300 + 100<em>q</em>, donc <em>q</em> = 2 (dépréciation). En change fixe, la même hausse serait annulée par les ventes de devises.</div>"
      },
      {
       "titre": "Le triangle d'incompatibilité",
       "contenu": "<p>Le modèle de Mundell-Fleming débouche sur le <strong>triangle d'incompatibilité</strong> (ou trilemme), formalisé par Mundell et popularisé par Tommaso Padoa-Schioppa (1982) et Maurice Obstfeld. Un pays ne peut pas avoir simultanément :</p>\n<ol><li>un <strong>taux de change fixe</strong> ;</li>\n<li>la <strong>libre circulation des capitaux</strong> ;</li>\n<li>une <strong>politique monétaire autonome</strong>.</li></ol>\n<p>Il doit en sacrifier un. La démonstration est contenue dans la parité des taux non couverte : avec des capitaux parfaitement mobiles, <em>i</em> = <em>i</em>* + dépréciation anticipée ; si le change est fixe et crédible, la dépréciation anticipée est nulle et <em>i</em> = <em>i</em>* : la banque centrale ne choisit plus son taux.</p>\n<table><thead><tr><th>Choix</th><th>Objectif abandonné</th><th>Exemples</th></tr></thead><tbody>\n<tr><td>Change fixe + autonomie monétaire</td><td>libre circulation des capitaux</td><td>Bretton Woods (1944-1971) ; Chine (contrôles des capitaux)</td></tr>\n<tr><td>Change fixe + capitaux libres</td><td>autonomie monétaire</td><td>étalon-or ; Hong Kong ; Danemark (couronne ancrée à l'euro) ; pays membres de la zone euro</td></tr>\n<tr><td>Capitaux libres + autonomie monétaire</td><td>change fixe</td><td>États-Unis, Royaume-Uni, Japon, zone euro vis-à-vis du reste du monde</td></tr></tbody></table>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> la crise du Système monétaire européen de 1992-1993 illustre le trilemme. Après la réunification allemande de 1990, la relance budgétaire allemande a conduit la Bundesbank à relever fortement ses taux pour contenir l'inflation. Les autres pays du SME, en change fixe avec des capitaux libéralisés depuis 1990, devaient suivre ces taux élevés alors que leur conjoncture se dégradait. Les marchés ont jugé ces parités intenables : la livre sterling et la lire italienne ont quitté le mécanisme de change en septembre 1992, et les marges de fluctuation ont été élargies à ±15 % en août 1993.</div>\n<p>Hélène Rey (2013) a nuancé le trilemme : en présence d'un <strong>cycle financier mondial</strong> piloté par la politique monétaire américaine, même les pays en change flexible subissent les variations des flux de capitaux et des primes de risque. Le trilemme deviendrait un <strong>dilemme</strong> : sans contrôle des capitaux, l'autonomie monétaire serait limitée quel que soit le régime de change.</p>"
      },
      {
       "titre": "La théorie des zones monétaires optimales",
       "contenu": "<p>Une <strong>zone monétaire optimale</strong> (ZMO) est un espace géographique pour lequel il est avantageux de partager une monnaie unique ou des changes fixes irrévocables. Le concept est dû à Robert Mundell (1961, « A Theory of Optimum Currency Areas »).</p>\n<h4>Coûts et avantages d'une union monétaire</h4>\n<p>Les <strong>avantages</strong> sont microéconomiques : suppression des coûts de change et de couverture, transparence des prix et concurrence accrue, disparition de l'incertitude de change qui favorise le commerce et l'investissement, éventuellement crédibilité importée de la banque centrale commune. Le <strong>coût</strong> principal est macroéconomique : la perte de deux instruments d'ajustement, la politique monétaire nationale et le taux de change, face aux <strong>chocs asymétriques</strong> (chocs touchant différemment les pays membres).</p>\n<p>Exemple de Mundell : deux régions A et B ; la demande se déplace des biens de A vers ceux de B. A connaît du chômage, B des tensions inflationnistes. Avec des monnaies séparées, une dépréciation de A rétablit l'équilibre. Dans une union, il faut un autre mécanisme d'ajustement.</p>\n<h4>Les critères</h4>\n<ul><li><strong>Mobilité du travail</strong> (Mundell 1961) : si les travailleurs de A peuvent migrer vers B, le chômage de A se résorbe sans variation du change.</li>\n<li><strong>Flexibilité des prix et des salaires</strong> : une baisse des salaires dans A (dévaluation interne) restaure la compétitivité.</li>\n<li><strong>Degré d'ouverture</strong> (Ronald McKinnon 1963) : plus les pays commercent entre eux, plus les gains de la monnaie unique sont élevés et moins le change est efficace (il se répercute vite sur les prix).</li>\n<li><strong>Diversification de la production</strong> (Peter Kenen 1969) : des économies diversifiées sont moins exposées aux chocs spécifiques à un secteur.</li>\n<li><strong>Fédéralisme budgétaire</strong> (Kenen) : un budget commun opérant des transferts vers les régions en difficulté (assurance chômage fédérale, impôt fédéral) amortit les chocs asymétriques.</li>\n<li><strong>Synchronisation des cycles</strong> et similitude des préférences en matière d'inflation : si les chocs sont symétriques, la politique monétaire commune convient à tous.</li></ul>\n<p><strong>Endogénéité des critères.</strong> Jeffrey Frankel et Andrew Rose (1998) soutiennent que l'union monétaire, en intensifiant le commerce, rend les cycles plus synchrones : une zone pourrait devenir optimale <em>ex post</em>. Paul Krugman (1993) objecte que l'intégration peut favoriser la spécialisation régionale et donc accroître l'asymétrie des chocs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une union monétaire est d'autant plus souhaitable que les chocs sont symétriques et que d'autres mécanismes d'ajustement (mobilité du travail, flexibilité salariale, transferts budgétaires) remplacent le taux de change.</div>"
      },
      {
       "titre": "Application à la zone euro",
       "contenu": "<p>La zone euro, créée en 1999 avec 11 pays et qui compte 21 membres depuis l'entrée de la Bulgarie le 1er janvier 2026, remplit imparfaitement les critères de Mundell. La mobilité du travail entre pays membres reste faible (barrières linguistiques, reconnaissance des qualifications, systèmes sociaux nationaux), bien plus qu'entre États américains. Le budget de l'Union européenne représente environ 1 % du revenu national brut de l'Union et ne joue pas de rôle de stabilisation, alors que le budget fédéral américain amortit une part significative des chocs régionaux.</p>\n<p><strong>Années 2000 : divergences.</strong> Avec une politique monétaire unique, le taux réel était plus bas dans les pays à inflation élevée (Espagne, Irlande, Grèce), ce qui a alimenté des booms du crédit et de l'immobilier (effet parfois appelé critique de Walters). Les coûts salariaux unitaires y ont augmenté plus vite qu'en Allemagne, qui menait au contraire une politique de modération salariale. Il en est résulté de larges déficits courants au Sud et des excédents au Nord, financés par des flux de capitaux privés.</p>\n<p><strong>2010-2012 : crise des dettes souveraines.</strong> L'arrêt brutal de ces flux de capitaux a révélé l'absence d'instrument d'ajustement. Faute de pouvoir dévaluer, les pays en difficulté ont dû procéder à une <strong>dévaluation interne</strong> (baisse des salaires et des prix relatifs), au prix d'un chômage très élevé : il a dépassé 25 % en Grèce et en Espagne en 2013. Paul De Grauwe (2011) souligne la fragilité spécifique de pays qui s'endettent dans une monnaie qu'ils n'émettent pas : ils peuvent subir des crises de liquidité autoréalisatrices.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> les réponses institutionnelles ont visé à combler les lacunes identifiées par la théorie des ZMO : création du Mécanisme européen de stabilité (2012), annonce par Mario Draghi en juillet 2012 que la BCE ferait « tout ce qu'il faudra » pour préserver l'euro, suivie du programme OMT de rachat conditionnel de titres souverains, union bancaire (supervision unique à partir de 2014), puis, face au Covid, le plan de relance NextGenerationEU (2020), financé par un endettement commun de l'Union, de l'ordre de 750 milliards d'euros aux prix de 2018. En 2022, la BCE s'est dotée d'un instrument anti-fragmentation (TPI) pour limiter les écarts de taux souverains non justifiés lors de la remontée de ses taux.</div>\n<p>Le débat reste ouvert entre ceux qui jugent la zone euro trop hétérogène et ceux qui soulignent son endogénéité et les progrès de son architecture. Le modèle de Mundell-Fleming rappelle que, pour un pays membre, seule la politique budgétaire nationale reste disponible pour répondre à un choc asymétrique, ce qui justifie à la fois des marges de manœuvre budgétaires en temps normal et des règles de coordination.</p>"
      }
     ],
     "points_cles": [
      "Le modèle de Mundell-Fleming (1962-1963) étend IS-LM à une petite économie ouverte à prix fixes, avec une courbe BP d'équilibre de la balance des paiements.",
      "La pente de BP vaut m / κ : BP est verticale sans mobilité des capitaux, croissante en mobilité imparfaite, horizontale en i = i* en mobilité parfaite.",
      "En change flexible et mobilité parfaite, la politique monétaire est efficace grâce à la dépréciation, et la politique budgétaire est inefficace (ΔNX = −ΔG).",
      "En change fixe et mobilité parfaite, la politique monétaire est inefficace (offre de monnaie endogène) et la politique budgétaire est pleinement efficace.",
      "En change flexible, l'éviction de la relance budgétaire passe par l'appréciation et les exportations nettes, non par le taux d'intérêt.",
      "Une dévaluation en change fixe a des effets analogues à une expansion monétaire en change flexible.",
      "En mobilité imparfaite, l'efficacité de la relance budgétaire en change flexible dépend des pentes relatives de LM et BP.",
      "Triangle d'incompatibilité : impossible de combiner change fixe, libre circulation des capitaux et autonomie monétaire.",
      "La crise du SME de 1992-1993 illustre le trilemme après la hausse des taux allemands consécutive à la réunification.",
      "Zone monétaire optimale (Mundell 1961) : critères de mobilité du travail, flexibilité des prix, ouverture (McKinnon), diversification et fédéralisme budgétaire (Kenen).",
      "Le coût d'une union monétaire est la perte du change et de la politique monétaire nationale face aux chocs asymétriques.",
      "La zone euro remplit imparfaitement les critères ; la crise de 2010-2012 a imposé des dévaluations internes coûteuses et des réformes (MES, OMT, union bancaire, NextGenerationEU)."
     ],
     "lexique": [
      {
       "terme": "Courbe BP",
       "def": "Ensemble des couples (Y, i) pour lesquels la balance des paiements est équilibrée (solde courant plus flux nets de capitaux nul)."
      },
      {
       "terme": "Mobilité parfaite des capitaux",
       "def": "Situation où les capitaux circulent sans coût ni restriction, de sorte que le taux national égale le taux mondial (à change anticipé constant)."
      },
      {
       "terme": "Petite économie ouverte",
       "def": "Économie trop petite pour influencer le taux d'intérêt mondial et le revenu étranger."
      },
      {
       "terme": "Offre de monnaie endogène",
       "def": "En change fixe, offre de monnaie déterminée par les interventions de la banque centrale sur le marché des changes et non par sa décision."
      },
      {
       "terme": "Dévaluation",
       "def": "Baisse de la parité officielle d'une monnaie décidée par les autorités dans un régime de change fixe."
      },
      {
       "terme": "Triangle d'incompatibilité",
       "def": "Impossibilité de combiner change fixe, libre circulation des capitaux et politique monétaire autonome."
      },
      {
       "terme": "Zone monétaire optimale",
       "def": "Espace pour lequel les gains d'une monnaie commune excèdent les coûts liés à la perte de l'ajustement par le change."
      },
      {
       "terme": "Choc asymétrique",
       "def": "Choc qui affecte différemment les pays ou régions d'une union monétaire."
      },
      {
       "terme": "Dévaluation interne",
       "def": "Restauration de la compétitivité par la baisse relative des salaires et des prix, sans modification du taux de change nominal."
      },
      {
       "terme": "Fédéralisme budgétaire",
       "def": "Existence d'un budget central opérant des transferts entre régions, qui amortit les chocs asymétriques."
      },
      {
       "terme": "Éviction par le change",
       "def": "Réduction des exportations nettes due à l'appréciation provoquée par une relance budgétaire en change flexible."
      }
     ],
     "qcm": [
      {
       "q": "Dans une petite économie ouverte en change flexible avec mobilité parfaite des capitaux, quel est l'effet d'une hausse des dépenses publiques ?",
       "options": [
        "Le revenu augmente du plein effet multiplicateur",
        "Le taux d'intérêt augmente durablement",
        "La monnaie se déprécie et le revenu augmente",
        "La monnaie s'apprécie et le revenu reste inchangé"
       ],
       "bonnes": [
        3
       ],
       "explication": "La relance pousse le taux au-dessus de i*, les capitaux affluent, la monnaie s'apprécie et les exportations nettes baissent d'un montant égal à la hausse de G. LM n'ayant pas bougé et i restant égal à i*, Y est inchangé."
      },
      {
       "q": "Quelles propositions sont exactes en change fixe avec mobilité parfaite des capitaux ? (deux réponses)",
       "options": [
        "La politique budgétaire est pleinement efficace",
        "La politique monétaire est pleinement efficace",
        "L'offre de monnaie devient endogène",
        "Le taux d'intérêt national peut s'écarter durablement du taux mondial"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Pour défendre la parité, la banque centrale achète ou vend des devises, ce qui fait varier M : elle accompagne automatiquement une relance budgétaire et annule toute initiative monétaire. Le taux reste égal à i*."
      },
      {
       "q": "Quelle est la pente de la courbe BP si la propension marginale à importer vaut 0,2 et la sensibilité des flux de capitaux à l'écart de taux κ vaut 400 ?",
       "options": [
        "2 000",
        "80",
        "0,2",
        "0,0005"
       ],
       "bonnes": [
        3
       ],
       "explication": "Sur BP, −m dY + κ di = 0, donc di / dY = m / κ = 0,2 / 400 = 0,0005. BP est presque horizontale : les capitaux sont très mobiles."
      },
      {
       "q": "En change flexible avec mobilité parfaite, une baisse du taux directeur produit :",
       "options": [
        "une appréciation et une baisse des exportations nettes",
        "une dépréciation et une hausse du revenu",
        "une perte de réserves de change qui annule l'effet",
        "une hausse du taux d'intérêt mondial"
       ],
       "bonnes": [
        1
       ],
       "explication": "La baisse du taux fait sortir les capitaux, la monnaie se déprécie, les exportations nettes augmentent et IS se déplace vers la droite. La perte de réserves correspond au change fixe."
      },
      {
       "q": "Le triangle d'incompatibilité implique qu'un pays qui laisse circuler librement les capitaux et ancre sa monnaie de façon crédible :",
       "options": [
        "peut fixer librement son taux directeur",
        "doit instaurer un contrôle des changes",
        "doit aligner son taux d'intérêt sur celui du pays d'ancrage",
        "voit sa politique budgétaire devenir inefficace"
       ],
       "bonnes": [
        2
       ],
       "explication": "Avec capitaux libres et change fixe crédible, la parité non couverte impose i = i* : l'autonomie monétaire est perdue. La politique budgétaire est au contraire efficace dans ce régime."
      },
      {
       "q": "Quelles propositions sur la théorie des zones monétaires optimales sont exactes ? (deux réponses)",
       "options": [
        "Mundell (1961) insiste sur la mobilité du travail comme substitut au taux de change",
        "Plus les pays sont ouverts entre eux, moins une monnaie commune est avantageuse selon McKinnon",
        "Un budget fédéral opérant des transferts facilite l'absorption des chocs asymétriques",
        "Des chocs symétriques rendent la politique monétaire commune inadaptée"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "La mobilité du travail et le fédéralisme budgétaire (Kenen) sont des mécanismes d'ajustement alternatifs au change. McKinnon montre au contraire qu'une forte ouverture rend la monnaie commune plus avantageuse ; des chocs symétriques peuvent être traités par une politique commune."
      },
      {
       "q": "Dans le modèle de Mundell-Fleming en change fixe, quel est l'effet d'une dévaluation ?",
       "options": [
        "Aucun effet, car l'offre de monnaie est endogène",
        "Une baisse du revenu par l'effet prix des importations",
        "Une hausse du taux d'intérêt national au-dessus du taux mondial",
        "Une hausse des exportations nettes et du revenu, accompagnée d'une hausse de l'offre de monnaie"
       ],
       "bonnes": [
        3
       ],
       "explication": "La dévaluation déplace IS à droite ; le taux tend à monter, la banque centrale achète des devises et M augmente, de sorte que Y augmente à i = i*. L'effet est analogue à une expansion monétaire en change flexible."
      },
      {
       "q": "Quel épisode illustre le plus directement le triangle d'incompatibilité ?",
       "options": [
        "L'accord du Plaza de 1985",
        "La crise du SME de 1992-1993 après la réunification allemande",
        "Le choc pétrolier de 1973",
        "La création du FMI en 1944"
       ],
       "bonnes": [
        1
       ],
       "explication": "Les pays du SME, en change fixe et avec des capitaux libéralisés, devaient suivre les taux élevés de la Bundesbank malgré une conjoncture dégradée ; la spéculation a forcé la sortie de la livre et de la lire en 1992 et l'élargissement des marges en 1993."
      },
      {
       "q": "Quelles propositions sur la zone euro sont exactes ? (deux réponses)",
       "options": [
        "La mobilité du travail entre pays membres est forte, comparable à celle entre États américains",
        "Faute de change national, les pays du Sud ont dû procéder à des dévaluations internes après 2010",
        "Le budget de l'UE, d'environ 1 % du RNB, joue un rôle limité de stabilisation",
        "La politique monétaire unique fixe des taux réels identiques dans tous les pays membres"
       ],
       "bonnes": [
        1,
        2
       ],
       "explication": "La baisse relative des salaires et des prix a remplacé la dévaluation, au prix d'un chômage élevé, et le budget commun est trop petit pour stabiliser. La mobilité du travail est faible, et le taux nominal unique donne des taux réels plus bas dans les pays à inflation plus forte."
      },
      {
       "q": "En change flexible avec mobilité imparfaite des capitaux, si la courbe BP est plus pentue que la courbe LM, une relance budgétaire :",
       "options": [
        "entraîne un déficit de la balance, une dépréciation et un effet renforcé sur le revenu",
        "entraîne un excédent de la balance et une appréciation qui annule totalement l'effet",
        "n'a aucun effet sur le change",
        "fait baisser le taux d'intérêt national"
       ],
       "bonnes": [
        0
       ],
       "explication": "Avec des capitaux peu mobiles, l'effet importations l'emporte sur les entrées de capitaux : la balance devient déficitaire, la monnaie se déprécie, ce qui déplace IS encore vers la droite."
      },
      {
       "q": "Selon Frankel et Rose (1998), les critères d'une zone monétaire optimale sont endogènes. Quelle proposition traduit cette idée ?",
       "options": [
        "L'union monétaire rend les chocs plus asymétriques par la spécialisation",
        "L'union monétaire, en intensifiant le commerce, rend les cycles plus synchrones",
        "Les critères doivent être remplis avant l'entrée dans l'union",
        "La mobilité du travail est déterminée par la politique monétaire commune"
       ],
       "bonnes": [
        1
       ],
       "explication": "L'intégration commerciale induite par la monnaie commune synchroniserait les cycles, rendant la zone optimale ex post. L'argument inverse de la spécialisation est celui de Krugman (1993)."
      }
     ]
    },
    {
     "id": "mac3-offre-demande-agregees",
     "titre": "Offre agrégée et demande agrégée",
     "duree": 45,
     "niveau": "L2",
     "objectifs": [
      "Rappeler la dérivation de la demande agrégée et identifier ses facteurs de déplacement",
      "Construire l'offre agrégée à partir des relations WS et PS et expliquer le rôle des rigidités nominales",
      "Distinguer offre agrégée de court terme et de long terme et décrire l'ajustement vers le moyen terme",
      "Analyser les effets de court et de moyen terme des chocs de demande et des chocs d'offre",
      "Expliquer la stagflation et les dilemmes de politique économique qu'elle pose",
      "Appliquer le modèle aux chocs pétroliers, au Covid et au choc énergétique de 2022"
     ],
     "sections": [
      {
       "titre": "La demande agrégée",
       "contenu": "<p>La <strong>demande agrégée</strong> (AD, <em>aggregate demand</em>) est la relation entre le niveau général des prix <em>P</em> et la production qui équilibre simultanément le marché des biens et le marché de la monnaie. Elle se déduit du modèle IS-LM : une hausse de <em>P</em> réduit les encaisses réelles <em>M</em>/<em>P</em>, déplace LM vers la gauche, fait monter le taux d'intérêt et baisser l'investissement et la production. On l'écrit sous forme générale :</p>\n<p class=\"eq\"><em>Y</em> = <em>Y</em>(<em>M</em> / <em>P</em>, <em>G</em>, <em>T</em>, <em>c</em><sub>0</sub>, <em>I</em><sub>0</sub>) &nbsp;&nbsp; avec ∂<em>Y</em> / ∂<em>P</em> &lt; 0</p>\n<p>Dans le plan (<em>Y</em> en abscisse, <em>P</em> en ordonnée), AD est <strong>décroissante</strong>. Les mouvements de <em>P</em> font se déplacer le long de la courbe ; toute variation des autres variables la déplace :</p>\n<ul><li>vers la droite : hausse de <em>M</em>, hausse de <em>G</em>, baisse de <em>T</em>, hausse de la confiance des ménages et des entreprises, hausse de la demande étrangère ;</li>\n<li>vers la gauche : politique monétaire ou budgétaire restrictive, choc de pessimisme, resserrement du crédit.</li></ul>\n<p>Pour les exercices, on utilise souvent une version log-linéaire simple inspirée de la théorie quantitative de la monnaie : en notant en minuscules les logarithmes (<em>y</em> = ln <em>Y</em>, <em>p</em> = ln <em>P</em>, <em>m</em> = ln <em>M</em>) et <em>v</em> un terme regroupant les autres facteurs de demande :</p>\n<p class=\"eq\"><em>y</em> = <em>m</em> − <em>p</em> + <em>v</em></p>\n<p>Dans les manuels récents (Carlin-Soskice, Blanchard), la demande agrégée est aussi dérivée en supposant que la banque centrale fixe le taux d'intérêt selon une règle réagissant à l'inflation : on obtient alors une relation décroissante entre inflation et production. La logique est la même : plus d'inflation conduit à des taux plus élevés et à une demande plus faible.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la pente négative de AD ne résulte pas d'un effet de substitution entre biens, mais de l'effet des prix sur les encaisses réelles et le taux d'intérêt (effet Keynes), complété par l'effet de richesse (Pigou) et, en économie ouverte, par la perte de compétitivité-prix.</div>"
      },
      {
       "titre": "L'offre agrégée : formation des salaires et des prix",
       "contenu": "<p>L'<strong>offre agrégée</strong> (AS) décrit comment les prix sont fixés en fonction de la production. Dans le cadre de Blanchard, elle se déduit de deux relations.</p>\n<h4>La relation WS (fixation des salaires)</h4>\n<p>Les salaires nominaux sont négociés ou fixés par les entreprises en fonction du niveau des prix <strong>anticipé</strong> <em>P</em><sup>a</sup> (les salariés se soucient de leur pouvoir d'achat), du taux de chômage <em>u</em> (un chômage élevé affaiblit le pouvoir de négociation des salariés) et d'un ensemble de facteurs institutionnels <em>z</em> (indemnisation du chômage, salaire minimum, protection de l'emploi, pouvoir syndical) :</p>\n<p class=\"eq\"><em>W</em> = <em>P</em><sup>a</sup> · <em>F</em>(<em>u</em>, <em>z</em>), avec ∂<em>F</em>/∂<em>u</em> &lt; 0 et ∂<em>F</em>/∂<em>z</em> &gt; 0</p>\n<p>Cette relation est fondée sur la négociation collective ou sur les <strong>salaires d'efficience</strong> (Shapiro-Stiglitz 1984) : les entreprises paient un salaire supérieur au salaire de réservation pour motiver les salariés et réduire le turnover.</p>\n<h4>La relation PS (fixation des prix)</h4>\n<p>Avec une fonction de production <em>Y</em> = <em>A</em> · <em>N</em> où la productivité <em>A</em> est normalisée à 1, le coût marginal est égal au salaire. Les entreprises, en concurrence imparfaite, fixent leur prix avec un <strong>taux de marge</strong> μ sur le coût :</p>\n<p class=\"eq\"><em>P</em> = (1 + μ) · <em>W</em></p>\n<h4>Le chômage naturel</h4>\n<p>À moyen terme, les anticipations sont réalisées (<em>P</em><sup>a</sup> = <em>P</em>). En combinant WS et PS, le salaire réel doit satisfaire à la fois <em>W</em>/<em>P</em> = <em>F</em>(<em>u</em>, <em>z</em>) et <em>W</em>/<em>P</em> = 1 / (1 + μ). Le <strong>taux de chômage naturel</strong> <em>u<sub>n</sub></em> est défini par :</p>\n<p class=\"eq\"><em>F</em>(<em>u<sub>n</sub></em>, <em>z</em>) = 1 / (1 + μ)</p>\n<p>Graphiquement, avec <em>u</em> en abscisse et le salaire réel en ordonnée, WS est décroissante et PS est une droite horizontale ; leur intersection donne <em>u<sub>n</sub></em>. Une hausse de <em>z</em> (WS vers le haut) ou du taux de marge μ (PS vers le bas) accroît <em>u<sub>n</sub></em>. Le chômage naturel n'a rien de « naturel » au sens d'immuable : il dépend des institutions et de la concurrence. Il correspond à la notion de NAIRU (taux de chômage n'accélérant pas l'inflation). À <em>u<sub>n</sub></em> correspond le <strong>niveau naturel de production</strong> <em>Y<sub>n</sub></em> = <em>L</em>(1 − <em>u<sub>n</sub></em>), où <em>L</em> est la population active.</p>\n<h4>La courbe d'offre agrégée</h4>\n<p>En remplaçant <em>W</em> dans PS et en exprimant le chômage en fonction de la production, <em>u</em> = 1 − <em>Y</em>/<em>L</em> :</p>\n<p class=\"eq\"><em>P</em> = <em>P</em><sup>a</sup> · (1 + μ) · <em>F</em>(1 − <em>Y</em> / <em>L</em>, <em>z</em>)</p>\n<p>L'offre agrégée est <strong>croissante</strong> : une production plus forte réduit le chômage, ce qui accroît les salaires nominaux, donc les coûts et les prix. Elle passe par le point (<em>Y<sub>n</sub></em>, <em>P</em><sup>a</sup>) : lorsque la production est à son niveau naturel, le niveau des prix est égal au niveau anticipé. Une hausse de <em>P</em><sup>a</sup> déplace AS vers le haut, d'un montant égal. Version log-linéaire usuelle :</p>\n<p class=\"eq\"><em>p</em> = <em>p</em><sup>a</sup> + λ · (<em>y</em> − <em>y<sub>n</sub></em>), λ &gt; 0</p>"
      },
      {
       "titre": "Rigidités nominales, court terme et long terme",
       "contenu": "<p>Pourquoi l'offre agrégée n'est-elle pas verticale à court terme ? Parce que les salaires et les prix ne s'ajustent pas instantanément. Les <strong>rigidités nominales</strong> ont plusieurs sources :</p>\n<ul><li><strong>contrats salariaux</strong> pluriannuels ou annuels, signés sur la base de l'inflation anticipée et échelonnés dans le temps (Stanley Fischer 1977, John Taylor 1980) ;</li>\n<li><strong>coûts de catalogue</strong> (menu costs) : modifier les prix a un coût, faible pour une entreprise mais aux effets macroéconomiques importants (Gregory Mankiw 1985, Akerlof-Yellen 1985) ;</li>\n<li><strong>information imparfaite</strong> : les producteurs confondent une hausse générale des prix avec une hausse de leur prix relatif et accroissent leur production (Robert Lucas 1972, modèle des îles) ;</li>\n<li><strong>fixation échelonnée des prix</strong> à la Calvo (1983) : à chaque période, seule une fraction des entreprises révise ses prix.</li></ul>\n<p>Les enquêtes de la BCE et de la Banque de France sur les prix montrent qu'en période d'inflation faible les entreprises modifiaient leurs prix en moyenne environ une fois par an, avec de fortes différences selon les secteurs. En période d'inflation forte, la fréquence des changements augmente, ce qui rend la courbe d'offre plus pentue.</p>\n<p><strong>Court terme et long terme.</strong> On distingue :</p>\n<ul><li>l'<strong>offre agrégée de court terme</strong> (OACT), croissante, tracée pour un niveau de prix anticipé donné ;</li>\n<li>l'<strong>offre agrégée de long terme</strong> (OALT), verticale au niveau naturel <em>Y<sub>n</sub></em>, lorsque les anticipations se sont ajustées (<em>P</em><sup>a</sup> = <em>P</em>). Sur cette courbe, le niveau des prix n'a pas d'influence sur la production : la monnaie est <strong>neutre</strong>.</li></ul>\n<p>Deux cas polaires encadrent l'analyse : l'offre agrégée <strong>horizontale</strong> (cas keynésien extrême, prix totalement rigides : la production est déterminée par la demande, comme dans IS-LM) et l'offre agrégée <strong>verticale</strong> (cas classique, prix parfaitement flexibles : la demande ne détermine que le niveau des prix).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> l'offre agrégée de court terme n'est pas une courbe d'offre microéconomique agrégée. Elle est croissante non parce que les prix relatifs incitent à produire plus, mais parce que, à prix anticipés donnés, une production plus élevée réduit le chômage et pousse les salaires nominaux et donc les prix à la hausse.</div>"
      },
      {
       "titre": "Équilibre et ajustement vers le moyen terme : les chocs de demande",
       "contenu": "<p>L'équilibre de court terme est à l'intersection de AD et de l'OACT. Si la production est supérieure à <em>Y<sub>n</sub></em>, le niveau des prix est supérieur au niveau anticipé. Les salariés révisent leurs anticipations à la période suivante (hypothèse simple : <em>P</em><sup>a</sup><sub>t</sub> = <em>P</em><sub>t−1</sub>), l'OACT se déplace vers le haut, les prix montent, les encaisses réelles baissent et la production diminue le long de AD. Le processus continue jusqu'à ce que <em>Y</em> = <em>Y<sub>n</sub></em> et <em>P</em> = <em>P</em><sup>a</sup> : c'est l'<strong>équilibre de moyen terme</strong>.</p>\n<h4>Politique monétaire expansionniste</h4>\n<p>Une hausse de <em>M</em> déplace AD vers la droite. À court terme, la production et les prix augmentent ; le taux d'intérêt baisse. À moyen terme, l'OACT se déplace vers le haut jusqu'au retour à <em>Y<sub>n</sub></em> ; le niveau des prix a augmenté dans la même proportion que <em>M</em>, de sorte que <em>M</em>/<em>P</em>, le taux d'intérêt et la production retrouvent leurs valeurs initiales. La monnaie est <strong>neutre à moyen terme</strong> mais pas à court terme.</p>\n<h4>Consolidation budgétaire</h4>\n<p>Une baisse de <em>G</em> déplace AD vers la gauche : récession et baisse des prix à court terme. À moyen terme, la production revient à <em>Y<sub>n</sub></em>, avec un niveau des prix plus bas, des encaisses réelles plus élevées et un <strong>taux d'intérêt plus bas</strong> : l'investissement a remplacé les dépenses publiques. La composition de la production change, ce qui peut accroître la croissance de long terme.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> en logarithmes (×100), AD : <em>y</em> = <em>m</em> − <em>p</em> + 50 ; AS : <em>p</em> = <em>p</em><sup>a</sup> + 0,5(<em>y</em> − <em>y<sub>n</sub></em>), avec <em>y<sub>n</sub></em> = 100 et <em>p</em><sup>a</sup><sub>t</sub> = <em>p</em><sub>t−1</sub>. Initialement <em>m</em> = 150, <em>p</em> = 100, <em>y</em> = 100 (vérification : 150 − 100 + 50 = 100).<br>La masse monétaire passe à <em>m</em> = 165 (hausse de 15 %). Période 1 (<em>p</em><sup>a</sup> = 100) : <em>y</em> = 215 − <em>p</em> et <em>p</em> = 100 + 0,5(<em>y</em> − 100). En substituant : <em>y</em> = 215 − 100 − 0,5<em>y</em> + 50, soit 1,5<em>y</em> = 165, <em>y</em> = 110 et <em>p</em> = 105.<br>Période 2 (<em>p</em><sup>a</sup> = 105) : 1,5<em>y</em> = 160, <em>y</em> ≈ 106,7 et <em>p</em> ≈ 108,3.<br>Formule générale : l'écart <em>y</em> − 100 est multiplié par 2/3 à chaque période. À moyen terme, <em>y</em> = 100 et <em>p</em> = 115 : les prix ont augmenté de 15 %, comme la monnaie.</div>\n<table><thead><tr><th>Période</th><th>Prix anticipé <em>p</em><sup>a</sup></th><th>Production <em>y</em></th><th>Prix <em>p</em></th><th>Écart de production</th></tr></thead><tbody>\n<tr><td>0</td><td>100</td><td>100</td><td>100</td><td>0</td></tr>\n<tr><td>1</td><td>100</td><td>110,0</td><td>105,0</td><td>+10,0</td></tr>\n<tr><td>2</td><td>105,0</td><td>106,7</td><td>108,3</td><td>+6,7</td></tr>\n<tr><td>3</td><td>108,3</td><td>104,4</td><td>110,6</td><td>+4,4</td></tr>\n<tr><td>4</td><td>110,6</td><td>103,0</td><td>112,0</td><td>+3,0</td></tr>\n<tr><td>Moyen terme</td><td>115</td><td>100</td><td>115</td><td>0</td></tr></tbody></table>"
      },
      {
       "titre": "Les chocs d'offre et la stagflation",
       "contenu": "<p>Un <strong>choc d'offre</strong> modifie les conditions de production : prix des matières premières, productivité, taux de marge, institutions du marché du travail. Dans le modèle WS-PS, une hausse du prix réel du pétrole équivaut à une hausse du taux de marge μ : pour un même salaire, les entreprises doivent fixer des prix plus élevés pour couvrir le coût de l'énergie. PS se déplace vers le bas (salaire réel compatible plus faible), le chômage naturel augmente et la production naturelle <em>Y<sub>n</sub></em> diminue.</p>\n<p>Dans le plan (<em>Y</em>, <em>P</em>) :</p>\n<ul><li>l'OACT se déplace vers le <strong>haut</strong> (à production donnée, prix plus élevés) ;</li>\n<li>l'OALT se déplace vers la <strong>gauche</strong> (baisse de <em>Y<sub>n</sub></em>).</li></ul>\n<p>À court terme, la production baisse et les prix montent : c'est la <strong>stagflation</strong> (stagnation + inflation), combinaison que la courbe de Phillips des années 1960 jugeait improbable. À moyen terme, la production converge vers le nouveau niveau naturel, plus bas, avec un niveau des prix plus élevé.</p>\n<h4>Le dilemme de politique économique</h4>\n<p>Face à un choc d'offre négatif, la politique de demande ne peut pas stabiliser à la fois la production et les prix :</p>\n<ul><li>une politique <strong>accommodante</strong> (expansion monétaire) limite la baisse de la production, mais amplifie l'inflation et risque de désancrer les anticipations, ce qui déclenche une spirale prix-salaires ;</li>\n<li>une politique <strong>non accommodante</strong> (maintien ou resserrement monétaire) limite l'inflation mais aggrave la récession.</li></ul>\n<p>Et la politique de demande ne peut rien contre la baisse de <em>Y<sub>n</sub></em> elle-même : chercher à maintenir la production au niveau antérieur ne produit que de l'inflation.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> lors du premier choc pétrolier (1973-1974), le prix du baril a environ quadruplé ; lors du second (1979-1980), il a encore été multiplié par deux à trois. Dans les pays de l'OCDE, la croissance a ralenti et l'inflation a dépassé 10 % : en France, elle a atteint environ 13,7 % en 1974 et 13,6 % en 1980 ; aux États-Unis, environ 13,5 % en 1980. Les réponses accommodantes des années 1970, avec des salaires souvent indexés sur les prix, ont prolongé l'inflation. Le tournant restrictif de la Réserve fédérale sous Paul Volcker (1979-1982) a ramené l'inflation américaine autour de 3-4 % en 1983, au prix d'une récession sévère (chômage proche de 11 % fin 1982). À l'inverse, le contre-choc pétrolier de 1986 a été un choc d'offre positif.</div>"
      },
      {
       "titre": "Chocs récents : le Covid et le choc énergétique de 2022",
       "contenu": "<h4>Le Covid (2020-2021)</h4>\n<p>La pandémie a combiné un <strong>choc d'offre</strong> (fermetures administratives, confinements, désorganisation des chaînes d'approvisionnement) et un <strong>choc de demande</strong> (baisse de la consommation de services, épargne forcée, incertitude). En 2020, le PIB s'est contracté d'environ 6 % dans la zone euro et d'environ 7,5 % en France, recul sans précédent depuis la Seconde Guerre mondiale. Dans le modèle, AD et OACT se déplacent toutes deux vers la gauche : la production chute fortement, l'effet sur les prix est ambigu ; il a été faiblement désinflationniste en 2020. La réponse massive des politiques budgétaires (activité partielle, prêts garantis) et monétaires (achats d'actifs de la BCE dans le cadre du programme PEPP) visait à préserver le potentiel productif, c'est-à-dire à éviter que la baisse de la demande ne se transforme en baisse durable de <em>Y<sub>n</sub></em> (hystérèse).</p>\n<h4>La réouverture et le choc énergétique (2021-2023)</h4>\n<p>En 2021, la reprise rapide de la demande s'est heurtée à des goulets d'étranglement (semi-conducteurs, fret maritime). En 2022, l'invasion de l'Ukraine par la Russie a provoqué un choc énergétique majeur en Europe. Le prix du gaz naturel sur le marché de référence européen (TTF) a culminé autour de 340 € par mégawattheure fin août 2022, alors qu'il évoluait typiquement entre 5 et 35 € au cours de la décennie précédente (source : Conseil de l'UE, ICE Endex).</p>\n<table><thead><tr><th>Indicateur (source : Eurostat, Insee, BLS)</th><th>Valeur</th></tr></thead><tbody>\n<tr><td>Inflation de la zone euro (IPCH), pic sur un an</td><td>10,6 % en octobre 2022</td></tr>\n<tr><td>Inflation de la zone euro, moyenne annuelle</td><td>8,4 % en 2022 ; 5,4 % en 2023</td></tr>\n<tr><td>Inflation sous-jacente de la zone euro (hors énergie et alimentation), pic</td><td>5,7 % en mars 2023</td></tr>\n<tr><td>Inflation en France (IPC Insee), moyenne annuelle</td><td>5,2 % en 2022 ; 4,9 % en 2023</td></tr>\n<tr><td>Inflation aux États-Unis (CPI), pic sur un an</td><td>9,1 % en juin 2022</td></tr></tbody></table>\n<p>Dans le modèle, le choc énergétique déplace l'OACT vers le haut (hausse du coût de production) et réduit le revenu réel des pays importateurs d'énergie, ce qui pèse aussi sur la demande. La zone euro a connu une forte hausse des prix avec une croissance ralentie mais sans récession profonde, et un chômage resté historiquement bas (autour de 6,5 % en 2023), ce qui distingue cet épisode des stagflations des années 1970. En France, le « bouclier tarifaire » sur l'électricité et le gaz a limité la hausse des prix à la consommation, d'où une inflation plus faible que la moyenne de la zone euro.</p>\n<p>La BCE a relevé ses taux à partir de juillet 2022, portant son taux de la facilité de dépôt de −0,5 % à 4 % en septembre 2023, avant une première baisse en juin 2024. Le choix entre accommodation et resserrement face à un choc d'offre se pose ici exactement comme dans le modèle : la BCE a d'abord jugé le choc transitoire, puis a resserré fortement lorsque l'inflation s'est diffusée aux prix sous-jacents et que le risque de désancrage des anticipations est apparu.</p>"
      },
      {
       "titre": "Le modèle WS-PS-AD-AS : synthèse et politiques d'offre",
       "contenu": "<p>Le modèle complet articule trois horizons :</p>\n<table><thead><tr><th>Horizon</th><th>Ce qui est fixe</th><th>Ce qui détermine la production</th><th>Rôle de la demande</th></tr></thead><tbody>\n<tr><td>Très court terme</td><td>prix (AS horizontale)</td><td>la demande (IS-LM)</td><td>total</td></tr>\n<tr><td>Court terme</td><td>prix anticipés (OACT croissante)</td><td>l'intersection AD-OACT</td><td>important, en partie absorbé par les prix</td></tr>\n<tr><td>Moyen terme</td><td>rien (anticipations réalisées)</td><td>WS-PS : <em>Y<sub>n</sub></em></td><td>n'affecte que le niveau des prix</td></tr>\n<tr><td>Long terme</td><td>—</td><td>accumulation du capital et progrès technique (Solow)</td><td>nul</td></tr></tbody></table>\n<p><strong>Politiques d'offre.</strong> Puisque, à moyen terme, la production est déterminée par <em>Y<sub>n</sub></em>, seules les politiques qui modifient WS ou PS peuvent l'élever durablement : intensification de la concurrence sur les marchés de biens (baisse de μ, PS vers le haut), réformes du marché du travail (baisse de <em>z</em> : durée ou montant de l'indemnisation, conditionnalité, formation), réduction du coin fiscalo-social. Ces politiques déplacent l'OALT vers la droite et réduisent le chômage naturel, mais leurs effets sont lents et leur coût social fait débat. Les estimations empiriques du rôle des institutions dans le chômage européen (Blanchard-Wolfers 2000) soulignent l'interaction entre chocs et institutions.</p>\n<p><strong>Hystérèse.</strong> Olivier Blanchard et Lawrence Summers (1986) ont montré que le chômage effectif peut influencer le chômage naturel : les chômeurs de longue durée perdent en qualifications et en employabilité, les salariés en place (insiders) négocient sans tenir compte des chômeurs (outsiders). Dans ce cas, une récession prolongée élève durablement <em>u<sub>n</sub></em>, et la distinction entre court et moyen terme s'estompe : une politique de demande active retrouve une justification de moyen terme. La forte hausse du chômage européen dans les années 1980, qui ne s'est pas résorbée ensuite, a été interprétée en ce sens.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les chocs de demande ont des effets réels à court terme et purement nominaux à moyen terme ; les chocs d'offre déplacent à la fois l'OACT et l'OALT et créent un dilemme entre stabilisation de la production et des prix. Seules les politiques d'offre, ou l'hystérèse, modifient le niveau naturel de production.</div>"
      }
     ],
     "points_cles": [
      "La demande agrégée est décroissante dans le plan (Y, P) : une hausse des prix réduit M/P, fait monter le taux d'intérêt et baisser la demande.",
      "La relation WS s'écrit W = P(a) F(u, z) : le salaire nominal augmente avec les prix anticipés et les facteurs institutionnels, et baisse avec le chômage.",
      "La relation PS s'écrit P = (1 + μ)W : les prix sont fixés avec une marge sur le coût salarial.",
      "Le chômage naturel est défini par F(un, z) = 1 / (1 + μ) ; il augmente avec z et avec le taux de marge.",
      "L'offre agrégée P = P(a)(1 + μ)F(1 − Y/L, z) est croissante et passe par (Yn, P(a)).",
      "Les rigidités nominales (contrats échelonnés, coûts de catalogue, information imparfaite) expliquent la pente de l'offre agrégée de court terme.",
      "L'offre agrégée de long terme est verticale au niveau naturel Yn : la monnaie est neutre à moyen terme.",
      "Après un choc de demande, la révision des anticipations déplace l'OACT jusqu'au retour à Yn ; une expansion monétaire n'accroît à terme que les prix.",
      "Une consolidation budgétaire réduit la production à court terme mais, à moyen terme, baisse le taux d'intérêt et accroît l'investissement.",
      "Un choc d'offre négatif (hausse du prix du pétrole assimilée à une hausse de μ) déplace l'OACT vers le haut et l'OALT vers la gauche : stagflation.",
      "Face à un choc d'offre, la politique de demande doit arbitrer entre production et inflation ; elle ne peut pas restaurer Yn.",
      "En 2022, l'inflation de la zone euro a culminé à 10,6 % (octobre) sous l'effet du choc énergétique, avant un resserrement monétaire porté jusqu'à 4 % de taux de dépôt en 2023.",
      "L'hystérèse (Blanchard-Summers 1986) rend le chômage naturel dépendant du chômage passé."
     ],
     "lexique": [
      {
       "terme": "Offre agrégée de court terme",
       "def": "Relation croissante entre production et niveau des prix, pour des prix anticipés donnés."
      },
      {
       "terme": "Offre agrégée de long terme",
       "def": "Droite verticale au niveau naturel de production, lorsque les anticipations de prix sont réalisées."
      },
      {
       "terme": "Relation WS",
       "def": "Relation de fixation des salaires : le salaire nominal dépend des prix anticipés, du chômage et des institutions du marché du travail."
      },
      {
       "terme": "Relation PS",
       "def": "Relation de fixation des prix : les entreprises appliquent un taux de marge sur leur coût salarial."
      },
      {
       "terme": "Taux de chômage naturel",
       "def": "Taux de chômage pour lequel les salaires réels fixés par WS et PS sont compatibles et les anticipations de prix réalisées."
      },
      {
       "terme": "Taux de marge",
       "def": "Écart relatif entre le prix et le coût marginal, reflétant le pouvoir de marché des entreprises."
      },
      {
       "terme": "Rigidités nominales",
       "def": "Lenteur d'ajustement des salaires et prix nominaux, due aux contrats, aux coûts de catalogue ou à l'information imparfaite."
      },
      {
       "terme": "Coûts de catalogue",
       "def": "Coûts liés à la modification des prix (menu costs), qui incitent les entreprises à les modifier peu souvent."
      },
      {
       "terme": "Neutralité de la monnaie",
       "def": "Absence d'effet de la quantité de monnaie sur les variables réelles ; vérifiée à moyen terme dans le modèle AD-AS."
      },
      {
       "terme": "Choc d'offre",
       "def": "Choc affectant les coûts ou les capacités de production : prix des matières premières, productivité, marges."
      },
      {
       "terme": "Stagflation",
       "def": "Combinaison d'une stagnation ou d'une baisse de la production et d'une inflation élevée."
      },
      {
       "terme": "Hystérèse",
       "def": "Dépendance du chômage naturel à l'égard du chômage passé, de sorte que les chocs temporaires ont des effets durables."
      }
     ],
     "qcm": [
      {
       "q": "Dans le modèle WS-PS, quel est l'effet d'une hausse du taux de marge des entreprises ?",
       "options": [
        "Une baisse du chômage naturel",
        "Aucun effet sur le chômage naturel, seulement sur les prix",
        "Une hausse du salaire réel d'équilibre",
        "Une hausse du chômage naturel et une baisse du salaire réel"
       ],
       "bonnes": [
        3
       ],
       "explication": "PS donne W/P = 1 / (1 + μ) : une hausse de μ abaisse le salaire réel compatible avec la fixation des prix. Il faut un chômage plus élevé pour que WS fournisse ce salaire réel plus bas."
      },
      {
       "q": "Quelles propositions sur l'offre agrégée de court terme sont exactes ? (deux réponses)",
       "options": [
        "Elle passe par le point où la production est à son niveau naturel et le niveau des prix égal au niveau anticipé",
        "Elle est verticale car les prix sont flexibles",
        "Une hausse des prix anticipés la déplace vers le haut",
        "Sa pente provient d'un effet de substitution entre biens"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "P = P(a)(1 + μ)F(1 − Y/L, z) donne P = P(a) pour Y = Yn, et une hausse de P(a) déplace la courbe d'autant vers le haut. Sa pente vient de la baisse du chômage qui pousse les salaires, non d'une substitution."
      },
      {
       "q": "Une banque centrale accroît la masse monétaire de 10 %. Quel est l'effet à moyen terme dans le modèle AD-AS ?",
       "options": [
        "La production augmente de 10 %",
        "Les prix augmentent de 10 %, la production et le taux d'intérêt reviennent à leur niveau initial",
        "Le taux d'intérêt baisse durablement",
        "Les prix augmentent de moins de 10 % car une partie de l'effet est réelle"
       ],
       "bonnes": [
        1
       ],
       "explication": "À moyen terme, Y = Yn et M/P doit retrouver sa valeur initiale pour que IS-LM donne Yn : P augmente de 10 %. La monnaie est neutre à moyen terme."
      },
      {
       "q": "Avec AD : y = m − p + 50, AS : p = p(a) + 0,5(y − 100), m = 160 et p(a) = 100, quelle est la production de court terme ?",
       "options": [
        "100",
        "110",
        "106,7",
        "120"
       ],
       "bonnes": [
        2
       ],
       "explication": "y = 210 − p et p = 100 + 0,5(y − 100), donc y = 210 − 100 − 0,5y + 50, soit 1,5y = 160 et y ≈ 106,7 ; p ≈ 103,3."
      },
      {
       "q": "Quel est l'effet de court terme d'une forte hausse du prix de l'énergie importée dans le modèle AD-AS ?",
       "options": [
        "La production et les prix augmentent",
        "La production baisse et les prix augmentent",
        "La production augmente et les prix baissent",
        "La demande agrégée se déplace vers la droite"
       ],
       "bonnes": [
        1
       ],
       "explication": "Le choc équivaut à une hausse du taux de marge : l'OACT se déplace vers le haut le long d'une AD inchangée, d'où une hausse des prix et une baisse de la production (stagflation)."
      },
      {
       "q": "Quelles propositions sur la réponse de politique monétaire à un choc d'offre négatif sont exactes ? (deux réponses)",
       "options": [
        "Une politique accommodante limite la baisse de la production mais accroît l'inflation",
        "Une politique monétaire expansionniste peut ramener la production au niveau naturel antérieur au choc",
        "Une politique non accommodante limite l'inflation mais aggrave la récession à court terme",
        "Le choc d'offre ne modifie pas le niveau naturel de production"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Le choc crée un dilemme entre production et prix. Il réduit aussi Yn (hausse du chômage naturel) : aucune politique de demande ne peut ramener durablement la production au niveau antérieur."
      },
      {
       "q": "Quel était le pic sur un an de l'inflation de la zone euro (IPCH) lors du choc énergétique, selon Eurostat ?",
       "options": [
        "9,1 % en juin 2022",
        "5,7 % en mars 2023",
        "8,4 % en décembre 2022",
        "10,6 % en octobre 2022"
       ],
       "bonnes": [
        3
       ],
       "explication": "L'IPCH de la zone euro a culminé à 10,6 % en octobre 2022. Le chiffre de 9,1 % est le pic américain (juin 2022), 5,7 % le pic de l'inflation sous-jacente (mars 2023) et 8,4 % la moyenne annuelle 2022."
      },
      {
       "q": "À moyen terme, quel est l'effet d'une consolidation budgétaire (baisse de G) dans le modèle AD-AS ?",
       "options": [
        "La production reste durablement inférieure à son niveau naturel",
        "La production revient à Yn avec un taux d'intérêt plus bas et plus d'investissement",
        "Le niveau des prix augmente",
        "Le chômage naturel augmente"
       ],
       "bonnes": [
        1
       ],
       "explication": "À moyen terme, Y = Yn ; les prix sont plus bas, M/P plus élevé, donc le taux d'intérêt plus bas : l'investissement remplace la dépense publique. G n'intervient pas dans WS-PS."
      },
      {
       "q": "Quelles propositions relèvent des fondements des rigidités nominales ? (deux réponses)",
       "options": [
        "Les coûts de catalogue (Mankiw 1985)",
        "L'équivalence ricardienne (Barro 1974)",
        "Les contrats salariaux échelonnés (Fischer 1977, Taylor 1980)",
        "La parité des pouvoirs d'achat"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Les coûts de modification des prix et les contrats échelonnés empêchent les prix et salaires nominaux de s'ajuster immédiatement. L'équivalence ricardienne concerne le financement de la dépense publique et la PPA le change."
      },
      {
       "q": "Que désigne l'hystérèse du chômage (Blanchard-Summers 1986) ?",
       "options": [
        "La tendance du chômage à revenir rapidement à son niveau naturel",
        "L'insensibilité des salaires au chômage",
        "La dépendance du chômage naturel à l'égard du chômage passé",
        "La hausse du chômage provoquée par l'inflation"
       ],
       "bonnes": [
        2
       ],
       "explication": "Une récession prolongée accroît le chômage de longue durée, dégrade l'employabilité et renforce le pouvoir des insiders, ce qui élève durablement le chômage naturel."
      },
      {
       "q": "Quelle politique peut accroître durablement le niveau naturel de production dans le modèle WS-PS-AD-AS ?",
       "options": [
        "Une baisse des taux d'intérêt",
        "Une hausse des dépenses publiques",
        "Une dépréciation de la monnaie",
        "Un renforcement de la concurrence sur les marchés de biens réduisant les marges"
       ],
       "bonnes": [
        3
       ],
       "explication": "Une baisse de μ relève PS, augmente le salaire réel compatible et réduit le chômage naturel, ce qui déplace l'offre agrégée de long terme vers la droite. Les politiques de demande n'affectent pas Yn à moyen terme."
      }
     ]
    },
    {
     "id": "mac3-phillips-trois-equations",
     "titre": "Courbe de Phillips, anticipations et modèle à trois équations",
     "duree": 50,
     "niveau": "L3",
     "objectifs": [
      "Retracer l'histoire de la courbe de Phillips, de Phillips (1958) à Friedman-Phelps (1968)",
      "Dériver la courbe de Phillips augmentée des anticipations à partir des relations WS et PS",
      "Comparer anticipations adaptatives et rationnelles et calculer un ratio de sacrifice",
      "Expliquer la critique de Lucas et ses conséquences pour la conduite de la politique monétaire",
      "Analyser l'aplatissement de la courbe de Phillips et l'épisode inflationniste de 2021-2023",
      "Résoudre le modèle néo-keynésien à trois équations IS-PC-MR et en déduire une règle de Taylor"
     ],
     "sections": [
      {
       "titre": "De Phillips (1958) à Samuelson et Solow (1960)",
       "contenu": "<p>En 1958, l'économiste néo-zélandais Alban William Phillips publie une étude statistique sur le Royaume-Uni de 1861 à 1957 : il observe une relation <strong>décroissante et non linéaire</strong> entre le taux de croissance des salaires nominaux et le taux de chômage. Quand le chômage est faible, les salaires augmentent vite ; quand il est élevé, ils stagnent. L'interprétation est celle d'un marché du travail où l'excès de demande de travail pousse les salaires.</p>\n<p>En 1960, Paul Samuelson et Robert Solow transposent la relation aux États-Unis et l'expriment en termes d'<strong>inflation des prix</strong> (les prix suivant les salaires avec une marge). Ils la présentent comme un <strong>menu de choix</strong> pour la politique économique : on pourrait obtenir durablement moins de chômage au prix de plus d'inflation. Dans un graphique avec le chômage en abscisse et l'inflation en ordonnée, la courbe est décroissante et convexe. Les données américaines des années 1960 suivent remarquablement cette relation : le chômage baisse progressivement de près de 7 % à environ 3,5 % tandis que l'inflation monte de 1 % à environ 5 %.</p>\n<p>Sous forme linéaire simple :</p>\n<p class=\"eq\">π<sub>t</sub> = (μ + <em>z</em>) − α · <em>u<sub>t</sub></em></p>\n<p>où α &gt; 0 mesure la sensibilité de l'inflation au chômage. Cette relation suppose implicitement que les anticipations d'inflation sont constantes (et nulles en moyenne), ce qui était à peu près le cas dans une période d'inflation faible et peu persistante.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> la courbe originale de Phillips (1958) relie le chômage à la croissance des <em>salaires nominaux</em>, non à l'inflation des prix. C'est Samuelson et Solow (1960) qui la reformulent en termes d'inflation et en font un arbitrage pour la politique économique.</div>"
      },
      {
       "titre": "Friedman, Phelps et la courbe de Phillips augmentée des anticipations",
       "contenu": "<p>Dans son discours présidentiel à l'American Economic Association (publié en 1968), Milton Friedman, et parallèlement Edmund Phelps (1967, 1968), critiquent l'idée d'un arbitrage permanent. Les salariés négocient des salaires <strong>réels</strong> : si l'inflation est durablement plus élevée, ils l'intègrent dans leurs anticipations et dans leurs revendications. L'arbitrage ne peut donc exister que tant que l'inflation effective diffère de l'inflation anticipée.</p>\n<p><strong>Dérivation à partir de WS-PS.</strong> En combinant <em>W</em> = <em>P</em><sup>a</sup><em>F</em>(<em>u</em>, <em>z</em>) et <em>P</em> = (1 + μ)<em>W</em>, on obtient <em>P</em> = <em>P</em><sup>a</sup>(1 + μ)<em>F</em>(<em>u</em>, <em>z</em>). Avec la forme <em>F</em>(<em>u</em>, <em>z</em>) = 1 − α<em>u</em> + <em>z</em>, en divisant par <em>P</em><sub>t−1</sub> et en utilisant les approximations logarithmiques, on aboutit à :</p>\n<p class=\"eq\">π<sub>t</sub> = π<sup>a</sup><sub>t</sub> + (μ + <em>z</em>) − α · <em>u<sub>t</sub></em></p>\n<p>Lorsque l'inflation est égale à l'inflation anticipée, le chômage est à son <strong>taux naturel</strong> <em>u<sub>n</sub></em> = (μ + <em>z</em>) / α. D'où la forme canonique :</p>\n<p class=\"eq\">π<sub>t</sub> = π<sup>a</sup><sub>t</sub> − α · (<em>u<sub>t</sub></em> − <em>u<sub>n</sub></em>)</p>\n<p>Le chômage ne peut être inférieur au taux naturel que si l'inflation dépasse l'inflation anticipée, c'est-à-dire si les salariés se trompent. Or ils ne peuvent pas se tromper systématiquement et durablement. À long terme, π = π<sup>a</sup> et <em>u</em> = <em>u<sub>n</sub></em> quel que soit le taux d'inflation : la <strong>courbe de Phillips de long terme est verticale</strong>. Il existe une famille de courbes de court terme, une par niveau d'inflation anticipée ; une hausse de π<sup>a</sup> déplace la courbe de court terme vers le haut.</p>\n<p>La prédiction a été confirmée par la <strong>stagflation</strong> des années 1970 : la combinaison d'une inflation et d'un chômage élevés, impossible sur une courbe de Phillips stable, s'explique par la hausse des anticipations d'inflation et par les chocs d'offre (hausse de μ).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> π = π<sup>a</sup> − α(<em>u</em> − <em>u<sub>n</sub></em>). Il n'y a pas d'arbitrage durable entre inflation et chômage : à long terme, le chômage est à son taux naturel, indépendant du taux d'inflation (Friedman 1968, Phelps 1968).</div>"
      },
      {
       "titre": "Anticipations adaptatives, rationnelles et ancrées",
       "contenu": "<h4>Anticipations adaptatives</h4>\n<p>Selon les <strong>anticipations adaptatives</strong> (Phillip Cagan 1956, Friedman), les agents forment leurs prévisions à partir de l'inflation passée. Dans la forme la plus simple, π<sup>a</sup><sub>t</sub> = π<sub>t−1</sub>, et la courbe de Phillips devient <strong>accélérationniste</strong> :</p>\n<p class=\"eq\">π<sub>t</sub> − π<sub>t−1</sub> = −α · (<em>u<sub>t</sub></em> − <em>u<sub>n</sub></em>)</p>\n<p>Maintenir le chômage en dessous du taux naturel provoque une <strong>accélération</strong> continue de l'inflation, d'où le terme de NAIRU (Non-Accelerating Inflation Rate of Unemployment, Modigliani et Papademos 1975). Blanchard propose une forme générale π<sup>a</sup><sub>t</sub> = θπ<sub>t−1</sub> + (1 − θ)π̄ : le paramètre θ, proche de 0 dans les années 1960 aux États-Unis, s'est rapproché de 1 dans les années 1970, puis est redevenu faible depuis les années 1990, lorsque les anticipations se sont <strong>ancrées</strong> sur la cible de la banque centrale π̄.</p>\n<h4>Anticipations rationnelles</h4>\n<p>John Muth (1961), puis Robert Lucas et Thomas Sargent dans les années 1970, introduisent les <strong>anticipations rationnelles</strong> : les agents utilisent toute l'information disponible, y compris la connaissance du modèle et de la politique suivie. Ils ne commettent pas d'erreur systématique : leur erreur de prévision est d'espérance nulle et non corrélée à l'information disponible. Conséquence (proposition d'inefficacité de Sargent et Wallace, 1975) : une politique monétaire <strong>anticipée</strong> n'a pas d'effet réel, même à court terme ; seules les surprises monétaires affectent la production. La courbe de Phillips est alors verticale même à court terme pour les politiques systématiques.</p>\n<p>La nouvelle économie keynésienne (Fischer 1977, Taylor 1980, Calvo 1983) réconcilie anticipations rationnelles et efficacité de la politique monétaire grâce aux <strong>rigidités nominales</strong> : même parfaitement anticipée, une politique peut avoir des effets réels si les salaires et les prix ont été fixés avant qu'elle soit mise en œuvre.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> anticipations rationnelles ne signifie pas prévision parfaite. Les agents peuvent se tromper face à des chocs imprévisibles ; ils ne se trompent simplement pas de façon systématique. La politique monétaire peut donc avoir des effets réels par surprise, ou si les prix sont rigides.</div>"
      },
      {
       "titre": "Désinflation, ratio de sacrifice et critique de Lucas",
       "contenu": "<p>Réduire une inflation installée a un coût en chômage. Le <strong>ratio de sacrifice</strong> mesure le nombre de points-années de chômage au-dessus du taux naturel (ou de pertes de production) nécessaires pour réduire l'inflation d'un point. Avec la courbe accélérationniste, en sommant sur les périodes de la désinflation :</p>\n<p class=\"eq\">Σ (<em>u<sub>t</sub></em> − <em>u<sub>n</sub></em>) = −(π<sub>fin</sub> − π<sub>début</sub>) / α &nbsp;&nbsp; d'où &nbsp;&nbsp; ratio de sacrifice = 1 / α</p>\n<p>Dans ce cadre, le chômage cumulé ne dépend que de l'ampleur de la désinflation, et non de son rythme : on peut choisir entre une désinflation rapide et douloureuse (« thérapie de choc ») et une désinflation lente (« gradualisme »).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> π<sub>t</sub> − π<sub>t−1</sub> = −0,5(<em>u<sub>t</sub></em> − 6 %). L'inflation est de 10 % et la banque centrale veut la ramener à 4 %.<br>1) Ratio de sacrifice : 1 / 0,5 = 2 points-années de chômage par point de désinflation.<br>2) Chômage cumulé excédentaire : 6 × 2 = 12 points-années.<br>3) Stratégie rapide : 12 points en deux ans, soit un chômage de 12 % pendant deux ans (l'inflation passe de 10 à 7 puis à 4 %). Stratégie graduelle : 4 points sur trois ans, soit 10 % de chômage pendant trois ans (inflation 8, 6, 4 %). Le coût cumulé est identique.<br>4) Avec des anticipations ancrées sur une cible crédible, le coût serait plus faible : c'est l'argument de la crédibilité.</div>\n<p>Les estimations empiriques des ratios de sacrifice (Laurence Ball, 1994) sont plus faibles pour les désinflations rapides et dans les pays où les salaires s'ajustent vite. La désinflation américaine de Volcker (1979-1983), qui a fait passer l'inflation d'environ 13 % à environ 3 % avec un chômage proche de 11 % fin 1982, est généralement associée à un ratio de sacrifice inférieur à celui que prévoyaient les modèles traditionnels, mais loin de nul. Sargent (1982) souligne qu'à la fin des hyperinflations européennes des années 1920, des changements de régime crédibles ont arrêté l'inflation avec un coût faible.</p>\n<h4>La critique de Lucas (1976)</h4>\n<p>Robert Lucas montre que les paramètres des relations macroéconométriques estimées (comme la pente de la courbe de Phillips) ne sont pas <strong>structurels</strong> : ils dépendent des anticipations des agents, qui dépendent elles-mêmes de la politique suivie. Si la politique change, les comportements et donc les paramètres changent. Utiliser une courbe de Phillips estimée sur les années 1960 pour exploiter un arbitrage était voué à l'échec : la tentative même modifiait les anticipations. La critique a conduit à fonder les modèles sur des paramètres « profonds » (préférences, technologie) et à analyser les politiques comme des <strong>règles</strong>.</p>\n<p>Finn Kydland et Edward Prescott (1977), puis Robert Barro et David Gordon (1983), y ajoutent l'<strong>incohérence temporelle</strong> : une banque centrale discrétionnaire a intérêt, une fois les anticipations formées, à créer une inflation surprise, ce que les agents anticipent ; il en résulte un <strong>biais inflationniste</strong> sans gain de chômage. D'où les solutions institutionnelles : indépendance des banques centrales, délégation à un banquier central « conservateur » (Rogoff 1985), ciblage d'inflation (Nouvelle-Zélande 1990). La BCE vise depuis la revue de stratégie de 2021 une inflation de 2 % à moyen terme, avec un objectif symétrique.</p>"
      },
      {
       "titre": "L'aplatissement de la courbe et l'inflation de 2021-2023",
       "contenu": "<p>Entre les années 1990 et 2019, la courbe de Phillips semble s'être fortement <strong>aplatie</strong> dans les pays avancés : le chômage a beaucoup varié (forte hausse après 2008, puis baisse continue jusqu'à 2019) sans effet marqué sur l'inflation, restée proche ou en dessous de 2 %. On parle de « désinflation manquante » après 2008, puis d'« inflation manquante » à la fin des années 2010. Explications avancées :</p>\n<ul><li>l'<strong>ancrage des anticipations</strong> sur la cible des banques centrales crédibles, qui rend l'inflation moins réactive aux chocs ;</li>\n<li>la mondialisation et la concurrence des pays émergents, qui limitent les hausses de prix ;</li>\n<li>la baisse du pouvoir de négociation des salariés et la non-linéarité de la relation : la courbe serait plate en zone de chômage élevé ou moyen, plus pentue en marché du travail très tendu ;</li>\n<li>la difficulté d'estimer <em>u<sub>n</sub></em>, qui varie dans le temps.</li></ul>\n<h4>Le retour de l'inflation (2021-2023)</h4>\n<p>L'épisode de 2021-2023 a remis la courbe de Phillips au centre du débat. Aux États-Unis, l'inflation a atteint 9,1 % sur un an en juin 2022 (indice CPI) ; dans la zone euro, elle a culminé à 10,6 % en octobre 2022 (IPCH, Eurostat), pour une moyenne annuelle de 8,4 % en 2022 et de 5,4 % en 2023 ; l'inflation sous-jacente a culminé à 5,7 % en mars 2023.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> Olivier Blanchard et Ben Bernanke (2023) décomposent l'inflation américaine de 2021-2023. Ils concluent que la poussée initiale provient surtout de chocs de prix (énergie, alimentation, pénuries sectorielles comme les semi-conducteurs), donc de déplacements de la courbe de Phillips, et non d'un mouvement le long de la courbe ; la tension du marché du travail (rapport postes vacants / chômeurs historiquement élevé) joue un rôle croissant mais plus persistant. En zone euro, où le marché du travail était moins tendu et le choc énergétique plus fort, la part des chocs d'offre est encore plus importante. La désinflation de 2023-2024 s'est produite sans forte hausse du chômage, ce qui est cohérent avec des anticipations de long terme restées globalement ancrées autour de 2 % et avec une courbe plus pentue en zone de tension (non-linéarité).</div>\n<p>Dans le modèle, cet épisode s'interprète comme une hausse du terme d'offre (μ + <em>z</em>, avec μ incluant le coût de l'énergie) combinée à un marché du travail tendu. Le risque principal pour les banques centrales était un désancrage (θ croissant), qui aurait transformé un choc transitoire en inflation durable, comme dans les années 1970.</p>"
      },
      {
       "titre": "Le modèle à trois équations IS-PC-MR",
       "contenu": "<p>Le modèle néo-keynésien à trois équations, sous la forme pédagogique de Wendy Carlin et David Soskice (2006, 2015), remplace LM par une banque centrale qui fixe le taux d'intérêt réel. Il comporte trois relations, en notant <em>y<sub>e</sub></em> la production d'équilibre (naturelle), π<sup>T</sup> la cible d'inflation et <em>r<sub>s</sub></em> le <strong>taux d'intérêt stabilisateur</strong> (ou taux neutre), qui maintient la production à <em>y<sub>e</sub></em>.</p>\n<p><strong>1. IS</strong> : la demande réagit au taux réel avec un retard d'une période :</p>\n<p class=\"eq\"><em>y<sub>t</sub></em> − <em>y<sub>e</sub></em> = −<em>a</em> · (<em>r</em><sub>t−1</sub> − <em>r<sub>s</sub></em>)</p>\n<p><strong>2. PC</strong> (courbe de Phillips, anticipations adaptatives, exprimée avec l'écart de production par la loi d'Okun) :</p>\n<p class=\"eq\">π<sub>t</sub> = π<sub>t−1</sub> + α · (<em>y<sub>t</sub></em> − <em>y<sub>e</sub></em>)</p>\n<p><strong>3. MR</strong> (règle monétaire optimale) : la banque centrale minimise une fonction de perte quadratique, où β &gt; 0 traduit le poids de l'inflation par rapport à l'écart de production :</p>\n<p class=\"eq\"><em>L</em> = (<em>y<sub>t</sub></em> − <em>y<sub>e</sub></em>)<sup>2</sup> + β · (π<sub>t</sub> − π<sup>T</sup>)<sup>2</sup></p>\n<p>sous la contrainte de PC (elle prend π<sub>t−1</sub> comme donnée). En substituant PC dans <em>L</em> et en dérivant par rapport à <em>y<sub>t</sub></em> :</p>\n<p class=\"eq\">2(<em>y<sub>t</sub></em> − <em>y<sub>e</sub></em>) + 2βα(π<sub>t</sub> − π<sup>T</sup>) = 0 &nbsp;&nbsp; soit &nbsp;&nbsp; <em>y<sub>t</sub></em> − <em>y<sub>e</sub></em> = −αβ · (π<sub>t</sub> − π<sup>T</sup>)</p>\n<p>La droite MR est décroissante dans le plan (<em>y</em>, π) : si l'inflation est au-dessus de la cible, la banque centrale choisit une production inférieure à <em>y<sub>e</sub></em> pour la faire baisser. MR est d'autant plus plate que β est élevé (banque centrale « conservatrice », très averse à l'inflation) et que α est élevé (courbe de Phillips pentue : désinflation peu coûteuse).</p>\n<p><strong>Déroulement après un choc.</strong> Supposons un choc d'inflation : π monte au-dessus de la cible. La banque centrale prévoit la courbe de Phillips de la période suivante (qui dépend de l'inflation actuelle), choisit sur cette courbe le point de MR, en déduit l'écart de production souhaité, puis, via IS, le taux réel nécessaire. L'économie converge ensuite le long de MR : production remontant vers <em>y<sub>e</sub></em>, inflation redescendant vers π<sup>T</sup>, taux revenant vers <em>r<sub>s</sub></em>. Un choc de demande permanent modifie <em>r<sub>s</sub></em> lui-même : la banque centrale doit ajuster durablement son taux.</p>"
      },
      {
       "titre": "La règle de Taylor et le principe de Taylor",
       "contenu": "<p>En combinant les trois équations, on obtient une règle d'intérêt de la forme <em>r</em><sub>t</sub> − <em>r<sub>s</sub></em> = <em>k</em><sub>1</sub>(π<sub>t</sub> − π<sup>T</sup>) + <em>k</em><sub>2</sub>(<em>y<sub>t</sub></em> − <em>y<sub>e</sub></em>). Dans le cas particulier simple <em>a</em> = α = β = 1, Carlin et Soskice obtiennent des coefficients de 0,5 : c'est exactement la forme de la règle proposée par John Taylor en 1993 pour décrire la politique de la Réserve fédérale de 1987 à 1992.</p>\n<p class=\"eq\"><em>i<sub>t</sub></em> = <em>r</em>* + π<sub>t</sub> + 0,5 · (π<sub>t</sub> − π*) + 0,5 · (<em>y<sub>t</sub></em> − <em>y<sub>p</sub></em>) / <em>y<sub>p</sub></em></p>\n<p>avec, chez Taylor, un taux réel neutre <em>r</em>* = 2 % et une cible π* = 2 %. Le taux nominal augmente avec l'inflation et l'écart de production.</p>\n<h4>Le principe de Taylor</h4>\n<p>On réécrit la règle : <em>i</em> = <em>r</em>* − 0,5π* + 1,5π + 0,5 × écart. Le coefficient sur l'inflation est <strong>1,5 &gt; 1</strong>. C'est le <strong>principe de Taylor</strong> : la banque centrale doit relever le taux nominal <em>plus</em> que la hausse de l'inflation, de façon à accroître le taux <strong>réel</strong> <em>r</em> = <em>i</em> − π et à freiner la demande. Si le coefficient était inférieur à 1, une hausse de l'inflation ferait baisser le taux réel, stimulerait la demande et accroîtrait encore l'inflation : la dynamique serait instable (ou les anticipations indéterminées). Richard Clarida, Jordi Galí et Mark Gertler (2000) ont estimé que la Fed avait violé ce principe avant 1979 et l'avait respecté sous Volcker et Greenspan.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> règle de Taylor avec <em>r</em>* = 2 % et π* = 2 %.<br>1) Inflation 5 %, écart de production +1 % : <em>i</em> = 2 + 5 + 0,5 × 3 + 0,5 × 1 = 9 %. Taux réel : 9 − 5 = 4 %, supérieur au taux neutre : politique restrictive.<br>2) Inflation 1 %, écart de production −4 % : <em>i</em> = 2 + 1 + 0,5 × (−1) + 0,5 × (−4) = 0,5 %.<br>3) Inflation 0 %, écart −6 % : <em>i</em> = 2 + 0 − 1 − 3 = −2 %. La règle prescrit un taux négatif, inaccessible au-delà d'un certain point : c'est la borne inférieure, qui justifie les politiques non conventionnelles.<br>4) Si l'inflation passe de 5 % à 6 % (écart inchangé), le taux nominal augmente de 1,5 point et le taux réel de 0,5 point : principe de Taylor respecté.</div>\n<p><strong>Usages et limites.</strong> La règle de Taylor sert de référence pour évaluer l'orientation de la politique monétaire. En 2009-2015, elle prescrivait des taux nettement négatifs aux États-Unis et en zone euro, ce qui a justifié l'assouplissement quantitatif. En 2021-2022, elle indiquait des taux bien supérieurs aux taux directeurs effectifs : les banques centrales ont été jugées « en retard sur la courbe » avant de relever fortement leurs taux (de mars 2022 à juillet 2023 pour la Fed ; de juillet 2022 à septembre 2023 pour la BCE, dont le taux de dépôt est passé de −0,5 % à 4 %). Ses limites : le taux neutre <em>r</em>* et l'écart de production ne sont pas observables et sont révisés a posteriori ; le taux neutre semble avoir fortement baissé depuis les années 1990 (Laubach-Williams) ; et la règle ignore la stabilité financière.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> règle de Taylor (1993) : <em>i</em> = <em>r</em>* + π + 0,5(π − π*) + 0,5 × écart de production. Principe de Taylor : le taux nominal doit réagir plus que un pour un à l'inflation, pour que le taux réel augmente quand l'inflation augmente.</div>"
      }
     ],
     "points_cles": [
      "Phillips (1958) relie chômage et croissance des salaires nominaux au Royaume-Uni ; Samuelson et Solow (1960) en font un arbitrage inflation-chômage.",
      "Friedman (1968) et Phelps (1968) introduisent les anticipations : π = π(a) − α(u − un).",
      "À partir de WS-PS, le taux de chômage naturel vaut un = (μ + z) / α ; il augmente avec les marges et les facteurs institutionnels.",
      "La courbe de Phillips de long terme est verticale au taux de chômage naturel : pas d'arbitrage durable.",
      "Avec des anticipations adaptatives π(a) = π(t−1), maintenir u < un accélère l'inflation (NAIRU).",
      "Avec des anticipations rationnelles (Muth 1961, Lucas, Sargent-Wallace 1975), seule une politique non anticipée a des effets réels, sauf rigidités nominales.",
      "Le ratio de sacrifice vaut 1/α points-années de chômage par point de désinflation dans le modèle accélérationniste ; il est réduit par la crédibilité.",
      "La critique de Lucas (1976) : les paramètres estimés changent avec la politique suivie ; l'incohérence temporelle (Kydland-Prescott 1977) justifie des banques centrales indépendantes.",
      "La courbe de Phillips s'est aplatie entre 1990 et 2019, en particulier grâce à l'ancrage des anticipations.",
      "L'inflation de 2021-2023 (10,6 % en zone euro en octobre 2022, 9,1 % aux États-Unis en juin 2022) provient surtout de chocs d'offre, avec un rôle de la tension sur le marché du travail.",
      "Le modèle à trois équations de Carlin-Soskice combine IS (avec retard), PC et MR : y − ye = −αβ(π − πT).",
      "La règle de Taylor (1993) s'écrit i = r* + π + 0,5(π − π*) + 0,5 × écart de production, avec r* = π* = 2 %.",
      "Principe de Taylor : le taux nominal doit réagir plus que proportionnellement à l'inflation (coefficient 1,5) pour accroître le taux réel."
     ],
     "lexique": [
      {
       "terme": "Courbe de Phillips",
       "def": "Relation décroissante entre chômage et inflation (à l'origine, croissance des salaires nominaux)."
      },
      {
       "terme": "Courbe de Phillips augmentée des anticipations",
       "def": "π = π(a) − α(u − un) : l'inflation dépend des anticipations et de l'écart du chômage à son taux naturel."
      },
      {
       "terme": "NAIRU",
       "def": "Taux de chômage n'accélérant pas l'inflation ; correspond au taux naturel avec anticipations adaptatives."
      },
      {
       "terme": "Anticipations adaptatives",
       "def": "Anticipations formées à partir des valeurs passées de la variable, par exemple π(a)t = πt−1."
      },
      {
       "terme": "Anticipations rationnelles",
       "def": "Anticipations utilisant toute l'information disponible et le modèle pertinent, sans erreur systématique."
      },
      {
       "terme": "Ancrage des anticipations",
       "def": "Stabilité des anticipations d'inflation autour de la cible de la banque centrale, malgré les chocs."
      },
      {
       "terme": "Ratio de sacrifice",
       "def": "Nombre de points-années de chômage excédentaire (ou de pertes de production) nécessaires pour réduire l'inflation d'un point."
      },
      {
       "terme": "Critique de Lucas",
       "def": "Les relations économétriques ne sont pas invariantes aux changements de politique, car elles dépendent des anticipations."
      },
      {
       "terme": "Incohérence temporelle",
       "def": "Incitation d'un décideur à dévier ex post d'une politique annoncée ex ante, ce qui nuit à sa crédibilité."
      },
      {
       "terme": "Taux d'intérêt stabilisateur",
       "def": "Taux réel qui maintient la production à son niveau d'équilibre ; appelé aussi taux neutre ou naturel."
      },
      {
       "terme": "Règle de Taylor",
       "def": "Règle de taux directeur réagissant à l'écart d'inflation à la cible et à l'écart de production (Taylor 1993)."
      },
      {
       "terme": "Principe de Taylor",
       "def": "Le taux nominal doit augmenter plus que l'inflation pour que le taux réel augmente et stabilise l'économie."
      },
      {
       "terme": "Règle monétaire (MR)",
       "def": "Relation entre écart de production et écart d'inflation choisie par une banque centrale minimisant sa fonction de perte."
      }
     ],
     "qcm": [
      {
       "q": "Quelle relation la courbe originale de Phillips (1958) met-elle en évidence ?",
       "options": [
        "Une relation décroissante entre chômage et croissance des salaires nominaux au Royaume-Uni",
        "Une relation décroissante entre chômage et inflation des prix aux États-Unis",
        "Une relation verticale entre inflation et chômage",
        "Une relation croissante entre inflation et croissance du PIB"
       ],
       "bonnes": [
        0
       ],
       "explication": "Phillips étudie le Royaume-Uni de 1861 à 1957 et la croissance des salaires nominaux. La reformulation en inflation des prix, pour les États-Unis, est due à Samuelson et Solow (1960)."
      },
      {
       "q": "Avec π(t) = π(a) − 0,5(u(t) − 5 %) et π(a) = 3 %, quelle est l'inflation si le chômage est de 3 % ?",
       "options": [
        "2 %",
        "4 %",
        "4,5 %",
        "1 %"
       ],
       "bonnes": [
        1
       ],
       "explication": "π = 3 − 0,5 × (3 − 5) = 3 + 1 = 4 %. Un chômage inférieur au taux naturel porte l'inflation au-dessus de l'inflation anticipée."
      },
      {
       "q": "Quelles propositions sont exactes selon Friedman (1968) et Phelps (1968) ? (deux réponses)",
       "options": [
        "À long terme, la courbe de Phillips est verticale au taux de chômage naturel",
        "Il existe un arbitrage permanent entre inflation et chômage",
        "Le chômage ne peut rester sous son taux naturel que si l'inflation dépasse durablement l'inflation anticipée",
        "Le taux de chômage naturel dépend du taux d'inflation"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "π = π(a) − α(u − un) : u < un exige π > π(a), ce qui ne peut durer car les anticipations s'ajustent. À long terme u = un quel que soit π ; un dépend des institutions et des marges, pas de l'inflation."
      },
      {
       "q": "Dans le modèle WS-PS sous-jacent à π = π(a) + (μ + z) − αu, avec μ = 0,1, z = 0,05 et α = 2, quel est le taux de chômage naturel ?",
       "options": [
        "15 %",
        "7,5 %",
        "30 %",
        "5 %"
       ],
       "bonnes": [
        1
       ],
       "explication": "un = (μ + z) / α = 0,15 / 2 = 0,075, soit 7,5 %. Une hausse des marges ou de z accroît le chômage naturel."
      },
      {
       "q": "Avec π(t) − π(t−1) = −0,25(u(t) − un), combien de points-années de chômage excédentaire faut-il pour réduire l'inflation de 8 % à 2 % ?",
       "options": [
        "6",
        "1,5",
        "12",
        "24"
       ],
       "bonnes": [
        3
       ],
       "explication": "Le ratio de sacrifice vaut 1 / α = 1 / 0,25 = 4 points-années par point d'inflation ; pour 6 points de désinflation : 6 × 4 = 24 points-années, quel que soit le rythme choisi."
      },
      {
       "q": "Que dit la critique de Lucas (1976) ?",
       "options": [
        "Les paramètres des relations macroéconométriques changent quand la politique économique change",
        "La politique monétaire est toujours sans effet sur la production",
        "La courbe de Phillips n'a jamais existé empiriquement",
        "Les banques centrales doivent viser une croissance constante de la masse monétaire"
       ],
       "bonnes": [
        0
       ],
       "explication": "Les comportements estimés dépendent des anticipations, qui dépendent de la politique suivie : on ne peut pas utiliser une relation estimée sous un régime pour prévoir les effets d'un autre régime."
      },
      {
       "q": "Quelles propositions sur les anticipations rationnelles sont exactes ? (deux réponses)",
       "options": [
        "Les agents ne commettent pas d'erreurs de prévision",
        "Les agents ne commettent pas d'erreurs systématiques",
        "Une politique monétaire parfaitement anticipée n'a pas d'effet réel en l'absence de rigidités nominales",
        "Elles impliquent que l'inflation anticipée est égale à l'inflation passée"
       ],
       "bonnes": [
        1,
        2
       ],
       "explication": "Les erreurs sont possibles mais imprévisibles. Sans rigidités, seule la surprise monétaire agit (Sargent-Wallace 1975). L'égalité à l'inflation passée correspond aux anticipations adaptatives."
      },
      {
       "q": "Avec la règle de Taylor (r* = 2 %, π* = 2 %), quel taux directeur correspond à une inflation de 4 % et un écart de production de −2 % ?",
       "options": [
        "6 %",
        "7 %",
        "5 %",
        "4 %"
       ],
       "bonnes": [
        0
       ],
       "explication": "i = 2 + 4 + 0,5 × (4 − 2) + 0,5 × (−2) = 2 + 4 + 1 − 1 = 6 %. Le taux réel vaut 2 %, égal au taux neutre : l'excès d'inflation et l'écart de production négatif se compensent."
      },
      {
       "q": "Que prescrit le principe de Taylor ?",
       "options": [
        "Le taux directeur doit être égal au taux d'inflation",
        "Le taux directeur doit réagir davantage à l'écart de production qu'à l'inflation",
        "Le taux réel doit rester constant",
        "Le taux nominal doit augmenter de plus d'un point quand l'inflation augmente d'un point"
       ],
       "bonnes": [
        3
       ],
       "explication": "Avec un coefficient supérieur à 1 (1,5 dans la règle de 1993), le taux réel augmente quand l'inflation monte, ce qui freine la demande et stabilise l'inflation. Un coefficient inférieur à 1 rendrait la dynamique instable."
      },
      {
       "q": "Dans le modèle à trois équations, la règle MR s'écrit y − ye = −αβ(π − πT). Quelles propositions sont exactes ? (deux réponses)",
       "options": [
        "MR est d'autant plus plate que la banque centrale accorde de poids à l'inflation",
        "Une banque centrale plus averse à l'inflation tolère une plus forte inflation pour soutenir la production",
        "Si π dépasse la cible, la banque centrale vise une production inférieure à ye",
        "MR est horizontale si β = 0"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Dans le plan (y, π), la pente de MR vaut −1 / (αβ) : un β élevé la rend plus plate, la banque centrale acceptant une forte baisse de production pour réduire l'inflation. Si π > πT, elle vise y < ye. Avec β = 0, elle ne se soucie que de la production : y = ye et MR est verticale, non horizontale."
      },
      {
       "q": "Quelle proposition sur l'épisode inflationniste de 2021-2023 est exacte ?",
       "options": [
        "Il s'explique uniquement par une politique monétaire trop expansionniste",
        "L'inflation de la zone euro a dépassé 15 % en 2022",
        "La BCE a abaissé ses taux en 2022 pour soutenir l'activité",
        "Selon Blanchard et Bernanke (2023), la poussée initiale provient surtout de chocs de prix (énergie, alimentation, pénuries)"
       ],
       "bonnes": [
        3
       ],
       "explication": "La décomposition de Blanchard et Bernanke attribue l'essentiel de la poussée initiale aux chocs d'offre, la tension du marché du travail jouant un rôle plus persistant. L'inflation de la zone euro a culminé à 10,6 % et la BCE a relevé ses taux à partir de juillet 2022."
      },
      {
       "q": "Avec des anticipations π(a)t = θπ(t−1) + (1 − θ)π̄, que signifie un θ proche de 0 ?",
       "options": [
        "Les anticipations sont ancrées sur la cible de la banque centrale",
        "La courbe de Phillips est accélérationniste",
        "Les anticipations sont rationnelles",
        "L'inflation est très persistante"
       ],
       "bonnes": [
        0
       ],
       "explication": "Avec θ = 0, l'inflation anticipée est égale à π̄ quel que soit le passé : les anticipations sont ancrées, et un choc d'inflation n'est pas reconduit. Un θ proche de 1 correspond au cas accélérationniste des années 1970."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Microfondements, politiques économiques et crises",
   "chapitres": [
    {
     "id": "mac4-consommation-epargne",
     "titre": "Consommation et épargne",
     "duree": 50,
     "niveau": "L2",
     "objectifs": [
      "Distinguer propension marginale et propension moyenne à consommer et expliquer l'énigme de Kuznets",
      "Écrire la contrainte budgétaire intertemporelle et dériver la condition d'Euler dans le modèle de Fisher",
      "Expliquer les théories du revenu permanent (Friedman) et du cycle de vie (Modigliani) et leurs prédictions",
      "Comprendre le résultat de marche aléatoire de Hall (1978) et les raisons de son rejet partiel : contraintes de liquidité et épargne de précaution",
      "Démontrer l'équivalence ricardienne (Barro 1974) et discuter ses limites",
      "Connaître les ordres de grandeur des taux d'épargne en France et aux États-Unis"
     ],
     "sections": [
      {
       "titre": "La fonction de consommation keynésienne et l'énigme de Kuznets",
       "contenu": "<p>La consommation des ménages représente un peu plus de la moitié du PIB en France et environ deux tiers aux États-Unis : c'est la plus grande composante de la demande. Dans la <em>Théorie générale</em> (Keynes 1936), elle dépend avant tout du <strong>revenu disponible courant</strong> <em>Y<sub>D</sub></em> = <em>Y</em> − <em>T</em>, selon une « loi psychologique fondamentale » : quand le revenu augmente, la consommation augmente, mais moins que le revenu. La forme la plus simple est la fonction linéaire :</p>\n<p class=\"eq\"><em>C</em> = <em>c</em><sub>0</sub> + <em>c</em><sub>1</sub> <em>Y<sub>D</sub></em>, avec <em>c</em><sub>0</sub> &gt; 0 et 0 &lt; <em>c</em><sub>1</sub> &lt; 1</p>\n<p>Le paramètre <em>c</em><sub>1</sub> est la <strong>propension marginale à consommer</strong> (PmC) : la part d'un euro supplémentaire de revenu qui est consommée, soit Δ<em>C</em> / Δ<em>Y<sub>D</sub></em>. Le terme <em>c</em><sub>0</sub> est la consommation autonome. La <strong>propension moyenne à consommer</strong> (PMC) est le rapport <em>C</em> / <em>Y<sub>D</sub></em> = <em>c</em><sub>0</sub> / <em>Y<sub>D</sub></em> + <em>c</em><sub>1</sub> : elle est supérieure à la PmC et <strong>décroît avec le revenu</strong>. Symétriquement, le taux d'épargne 1 − PMC augmente avec le revenu. Graphiquement, la PMC est la pente du rayon joignant l'origine à un point de la droite de consommation ; ce rayon s'aplatit quand le revenu augmente.</p>\n<p>Cette fonction fonctionne bien en <strong>coupe transversale</strong> (les ménages riches épargnent une plus grande part de leur revenu) et sur des <strong>séries courtes</strong>. Mais elle prédit qu'avec la croissance le taux d'épargne augmenterait sans cesse (d'où la crainte d'une « stagnation séculaire » chez Hansen à la fin des années 1930). Or Simon Kuznets (1946), en reconstituant les séries américaines de 1869 à 1938, montre que le rapport <em>C</em> / <em>Y</em> est resté <strong>remarquablement stable</strong> (autour de 0,85 à 0,9 par décennie) alors que le revenu par tête a fortement augmenté.</p>\n<p>C'est l'<strong>énigme de Kuznets</strong> : à court terme et en coupe, la PMC décroît avec le revenu ; à long terme, elle est constante, ce qui signifie que la fonction de consommation de long terme est proportionnelle (<em>c</em><sub>0</sub> = 0). Les théories du revenu permanent et du cycle de vie sont nées pour réconcilier ces deux constats en fondant la consommation sur un choix <strong>intertemporel</strong> rationnel : c'est le programme des microfondements.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> ne pas confondre PmC et PMC. Avec <em>C</em> = 100 + 0,6 <em>Y<sub>D</sub></em> et <em>Y<sub>D</sub></em> = 1 000, la PmC vaut 0,6 mais la PMC vaut 700 / 1 000 = 0,7. C'est la PmC qui intervient dans le multiplicateur keynésien, et c'est la PMC (ou le taux d'épargne) qu'observent les statisticiens.</div>"
      },
      {
       "titre": "Le choix intertemporel de Fisher et la condition d'Euler",
       "contenu": "<p>Irving Fisher (<em>The Theory of Interest</em>, 1930) fournit le cadre de base. Un ménage vit deux périodes, perçoit des revenus <em>Y</em><sub>1</sub> et <em>Y</em><sub>2</sub>, peut prêter ou emprunter au taux d'intérêt réel <em>r</em> et choisit ses consommations <em>C</em><sub>1</sub> et <em>C</em><sub>2</sub>. En première période, son épargne est <em>S</em> = <em>Y</em><sub>1</sub> − <em>C</em><sub>1</sub> (négative s'il emprunte) ; en seconde période, il consomme son revenu plus son épargne capitalisée : <em>C</em><sub>2</sub> = <em>Y</em><sub>2</sub> + (1 + <em>r</em>) <em>S</em>. En éliminant <em>S</em>, on obtient la <strong>contrainte budgétaire intertemporelle</strong> (CBI) :</p>\n<p class=\"eq\"><em>C</em><sub>1</sub> + <em>C</em><sub>2</sub> / (1 + <em>r</em>) = <em>Y</em><sub>1</sub> + <em>Y</em><sub>2</sub> / (1 + <em>r</em>) ≡ <em>W</em></p>\n<p>La valeur actualisée des consommations égale la valeur actualisée des revenus, appelée <strong>richesse humaine</strong> ou richesse intertemporelle <em>W</em>. Dans le plan (<em>C</em><sub>1</sub>, <em>C</em><sub>2</sub>), c'est une droite de pente −(1 + <em>r</em>) passant par le point de dotation (<em>Y</em><sub>1</sub>, <em>Y</em><sub>2</sub>) : renoncer à un euro aujourd'hui permet de consommer 1 + <em>r</em> euros demain.</p>\n<h4>Résolution</h4>\n<p>Le ménage maximise une utilité intertemporelle séparable <em>U</em> = <em>u</em>(<em>C</em><sub>1</sub>) + β <em>u</em>(<em>C</em><sub>2</sub>), où <em>u</em> est croissante et concave et β ∈ ]0, 1] le facteur d'escompte psychologique (β = 1 / (1 + ρ), ρ étant le taux de préférence pour le présent). Le lagrangien s'écrit :</p>\n<p class=\"eq\">ℒ = <em>u</em>(<em>C</em><sub>1</sub>) + β <em>u</em>(<em>C</em><sub>2</sub>) + λ [<em>W</em> − <em>C</em><sub>1</sub> − <em>C</em><sub>2</sub> / (1 + <em>r</em>)]</p>\n<p>Les conditions du premier ordre sont <em>u</em>′(<em>C</em><sub>1</sub>) = λ et β <em>u</em>′(<em>C</em><sub>2</sub>) = λ / (1 + <em>r</em>). En éliminant λ, on obtient la <strong>condition d'Euler</strong> :</p>\n<p class=\"eq\"><em>u</em>′(<em>C</em><sub>1</sub>) = β (1 + <em>r</em>) <em>u</em>′(<em>C</em><sub>2</sub>)</p>\n<p>Interprétation : à l'optimum, réduire la consommation d'une unité aujourd'hui (coût <em>u</em>′(<em>C</em><sub>1</sub>)) pour la placer et consommer 1 + <em>r</em> unités demain (gain actualisé β (1 + <em>r</em>) <em>u</em>′(<em>C</em><sub>2</sub>)) ne doit rien rapporter. Graphiquement, la courbe d'indifférence la plus haute est tangente à la droite budgétaire : le taux marginal de substitution <em>u</em>′(<em>C</em><sub>1</sub>) / [β <em>u</em>′(<em>C</em><sub>2</sub>)] égale 1 + <em>r</em>.</p>\n<p>Avec une utilité à aversion relative pour le risque constante, <em>u</em>(<em>C</em>) = <em>C</em><sup>1−θ</sup> / (1 − θ), on a <em>u</em>′(<em>C</em>) = <em>C</em><sup>−θ</sup>, et la condition d'Euler donne :</p>\n<p class=\"eq\"><em>C</em><sub>2</sub> / <em>C</em><sub>1</sub> = [β (1 + <em>r</em>)]<sup>1/θ</sup>, soit approximativement Δln <em>C</em> ≈ (1/θ)(<em>r</em> − ρ)</p>\n<p>La consommation croît si le taux d'intérêt dépasse le taux de préférence pour le présent. Le paramètre σ = 1/θ est l'<strong>élasticité de substitution intertemporelle</strong> : il mesure la sensibilité de la pente du profil de consommation au taux d'intérêt. Dans le cas logarithmique (θ = 1), <em>C</em><sub>2</sub> = β (1 + <em>r</em>) <em>C</em><sub>1</sub> et, en reportant dans la CBI, <em>C</em><sub>1</sub> = <em>W</em> / (1 + β).</p>\n<h4>Effets d'une hausse du taux d'intérêt</h4>\n<p>Une hausse de <em>r</em> fait pivoter la droite budgétaire autour du point de dotation. Elle produit un <strong>effet de substitution</strong> (la consommation présente devient plus chère : <em>C</em><sub>1</sub> baisse, l'épargne monte), un <strong>effet revenu</strong> dont le signe dépend de la position du ménage (positif pour un prêteur, qui s'enrichit ; négatif pour un emprunteur) et un <strong>effet de richesse humaine</strong> (la valeur actualisée des revenus futurs baisse). Pour un épargnant, effet revenu et effet de substitution sont de sens opposés : l'effet total de <em>r</em> sur l'épargne est <strong>théoriquement ambigu</strong>, et empiriquement faible.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un ménage a une utilité ln <em>C</em><sub>1</sub> + β ln <em>C</em><sub>2</sub> avec β = 1/1,1, des revenus <em>Y</em><sub>1</sub> = 100 et <em>Y</em><sub>2</sub> = 110, et <em>r</em> = 10 %.<br>1) Richesse : <em>W</em> = 100 + 110/1,1 = 200.<br>2) Euler : <em>C</em><sub>2</sub> = β (1 + <em>r</em>) <em>C</em><sub>1</sub> = <em>C</em><sub>1</sub> car β (1 + <em>r</em>) = 1 : le ménage lisse parfaitement sa consommation.<br>3) CBI : <em>C</em><sub>1</sub> (1 + 1/1,1) = 200, d'où <em>C</em><sub>1</sub> = <em>C</em><sub>2</sub> ≈ 104,8 ; l'épargne est <em>S</em> = 100 − 104,8 = −4,8 (le ménage emprunte). Vérification : 110 − 1,1 × 4,8 ≈ 104,8.<br>4) Si le ménage ne peut pas emprunter (contrainte de liquidité), il consomme <em>C</em><sub>1</sub> = 100 et <em>C</em><sub>2</sub> = 110 : sa consommation suit alors son revenu courant, comme dans la fonction keynésienne.<br>5) Une baisse d'impôt de 10 en période 1 financée par une hausse de 11 en période 2 laisse <em>W</em> inchangée : sans contrainte, <em>C</em><sub>1</sub> ne bouge pas ; avec contrainte, <em>C</em><sub>1</sub> passe à 104,8 (la contrainte est relâchée de 10 mais le ménage n'en consomme que 4,8 et épargne le reste).</div>"
      },
      {
       "titre": "L'hypothèse du revenu permanent (Friedman 1957)",
       "contenu": "<p>Dans <em>A Theory of the Consumption Function</em> (1957), Milton Friedman généralise le raisonnement de Fisher à un horizon long. Le revenu mesuré <em>Y</em> se décompose en un <strong>revenu permanent</strong> <em>Y<sup>P</sup></em>, que le ménage anticipe comme durable (assimilable au rendement de sa richesse totale, humaine et financière), et un <strong>revenu transitoire</strong> <em>Y<sup>T</sup></em>, d'espérance nulle :</p>\n<p class=\"eq\"><em>Y</em> = <em>Y<sup>P</sup></em> + <em>Y<sup>T</sup></em>, &nbsp; <em>C</em> = <em>k</em> <em>Y<sup>P</sup></em></p>\n<p>La consommation est proportionnelle au seul revenu permanent ; le revenu transitoire est épargné. Avec un horizon infini et un taux <em>r</em>, consommer le revenu permanent revient à consommer l'annuité de la richesse : un gain exceptionnel de 1 euro n'accroît la consommation annuelle que de <em>r</em> / (1 + <em>r</em>), soit moins de 4 centimes pour <em>r</em> = 4 %. En revanche, une hausse durable de revenu de 1 euro par an accroît la consommation d'environ 1 euro.</p>\n<h4>Résolution de l'énigme de Kuznets</h4>\n<p>Supposons que l'on régresse <em>C</em> sur le revenu mesuré <em>Y</em>. Si <em>Y<sup>P</sup></em> et <em>Y<sup>T</sup></em> sont indépendants, le coefficient estimé vaut :</p>\n<p class=\"eq\"><em>b</em> = <em>k</em> × Var(<em>Y<sup>P</sup></em>) / [Var(<em>Y<sup>P</sup></em>) + Var(<em>Y<sup>T</sup></em>)] &lt; <em>k</em></p>\n<p>En coupe transversale ou sur données de court terme, une part importante des écarts de revenu est transitoire (une prime, une année de chômage) : la pente estimée est faible et la PMC paraît décroissante, car les ménages à revenu exceptionnellement élevé ce jour-là épargnent beaucoup. Sur longue période, les variations de revenu sont essentiellement permanentes (croissance) : la pente tend vers <em>k</em> et la PMC est stable. Les deux faits de Kuznets sont donc compatibles avec une même fonction proportionnelle.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> selon le revenu permanent, la propension à consommer un revenu <strong>transitoire</strong> est faible, celle d'un revenu <strong>permanent</strong> est proche de 1. Une politique de relance par un chèque ponctuel aura donc peu d'effet sur la consommation, alors qu'une baisse d'impôt perçue comme durable en aura davantage.</div>"
      },
      {
       "titre": "L'hypothèse du cycle de vie (Modigliani)",
       "contenu": "<p>Franco Modigliani, avec Richard Brumberg (1954) puis Albert Ando (1963), met l'accent sur l'évolution prévisible du revenu au cours de l'existence : faible au début de la vie active, maximal en milieu de carrière, fortement réduit à la retraite. Un individu rationnel épargne pendant la vie active pour financer sa retraite et lisse ainsi sa consommation.</p>\n<h4>Le modèle simple</h4>\n<p>Un individu vit encore <em>T</em> années, dont <em>R</em> années de travail avec un revenu annuel <em>Y</em> ; il dispose d'une richesse initiale <em>A</em> ; le taux d'intérêt et le taux de préférence pour le présent sont nuls. Ses ressources totales sont <em>A</em> + <em>R</em> <em>Y</em>, qu'il répartit également sur <em>T</em> années :</p>\n<p class=\"eq\"><em>C</em> = (1/<em>T</em>) <em>A</em> + (<em>R</em>/<em>T</em>) <em>Y</em> = α <em>A</em> + β <em>Y</em></p>\n<p>La consommation dépend du revenu <strong>et du patrimoine</strong>. La PMC vaut <em>C</em>/<em>Y</em> = α (<em>A</em>/<em>Y</em>) + β : en coupe ou à court terme, quand le revenu varie à patrimoine donné, elle décroît avec le revenu ; à long terme, le patrimoine croît au même rythme que le revenu, le ratio <em>A</em>/<em>Y</em> est stable et la PMC aussi. L'énigme de Kuznets est encore résolue.</p>\n<p>Exemple : un individu entre dans la vie active à 20 ans, part en retraite à 60 ans et vit jusqu'à 80 ans (<em>R</em> = 40, <em>T</em> = 60, <em>A</em> = 0). Il consomme 40/60 = 2/3 de son revenu, épargne 1/3 de <em>Y</em> chaque année et accumule un patrimoine maximal de 40 × <em>Y</em>/3 ≈ 13,3 <em>Y</em> à la retraite, qu'il désépargne ensuite à raison de 2/3 de <em>Y</em> par an. Le profil du patrimoine est « en bosse » (en dôme).</p>\n<table><thead><tr><th>Âge</th><th>Revenu</th><th>Consommation</th><th>Épargne</th><th>Patrimoine en fin de période</th></tr></thead>\n<tbody><tr><td>20 à 60 ans</td><td><em>Y</em></td><td>2<em>Y</em>/3</td><td>+<em>Y</em>/3</td><td>croît de 0 à 13,3 <em>Y</em></td></tr>\n<tr><td>60 à 80 ans</td><td>0</td><td>2<em>Y</em>/3</td><td>−2<em>Y</em>/3</td><td>décroît de 13,3 <em>Y</em> à 0</td></tr></tbody></table>\n<h4>Implications macroéconomiques</h4>\n<ul><li>Le taux d'épargne agrégé dépend de la <strong>structure par âge</strong> : une population vieillissante (plus de retraités qui désépargnent) devrait épargner moins.</li>\n<li>Il dépend de la <strong>croissance</strong> : quand le revenu croît, les actifs (qui épargnent) sont plus riches que les retraités (qui désépargnent), l'épargne nette agrégée est positive et d'autant plus forte que la croissance est rapide.</li>\n<li>Les systèmes de <strong>retraite par répartition</strong> réduisent le besoin d'épargne individuelle (Feldstein 1974 ; l'ampleur de l'effet est débattue).</li>\n<li>Les variations de patrimoine (immobilier, actions) ont un <strong>effet richesse</strong> sur la consommation, généralement estimé à quelques centimes par euro de patrimoine supplémentaire, plus faible en France qu'aux États-Unis.</li></ul>\n<p><strong>Limites empiriques</strong> : les personnes âgées désépargnent beaucoup moins que prévu, en raison du motif de transmission (legs), de l'incertitude sur la durée de vie et les dépenses de santé, et de la détention du logement.</p>"
      },
      {
       "titre": "Hall (1978) : la consommation comme marche aléatoire",
       "contenu": "<p>Robert Hall (1978) combine le revenu permanent et les <strong>anticipations rationnelles</strong>. Dans un environnement incertain, la condition d'Euler devient :</p>\n<p class=\"eq\"><em>u</em>′(<em>C<sub>t</sub></em>) = β (1 + <em>r</em>) <em>E<sub>t</sub></em>[<em>u</em>′(<em>C</em><sub><em>t</em>+1</sub>)]</p>\n<p>Si l'utilité est quadratique (utilité marginale linéaire) et β (1 + <em>r</em>) = 1, il vient <em>E<sub>t</sub></em>[<em>C</em><sub><em>t</em>+1</sub>] = <em>C<sub>t</sub></em>, c'est-à-dire :</p>\n<p class=\"eq\"><em>C</em><sub><em>t</em>+1</sub> = <em>C<sub>t</sub></em> + ε<sub><em>t</em>+1</sub>, avec <em>E<sub>t</sub></em>[ε<sub><em>t</em>+1</sub>] = 0</p>\n<p>La consommation suit une <strong>marche aléatoire</strong> : la meilleure prévision de la consommation de demain est la consommation d'aujourd'hui. Les variations de consommation ne sont dues qu'aux <strong>nouvelles</strong> (informations imprévisibles) sur le revenu permanent. Conséquence testable : aucune variable connue en <em>t</em> (revenu passé, variation anticipée du revenu) ne doit prédire Δ<em>C</em><sub><em>t</em>+1</sub>. Conséquence de politique économique : seules les mesures <strong>non anticipées</strong> modifient la consommation ; une baisse d'impôt annoncée longtemps à l'avance est déjà intégrée lors de son entrée en vigueur. On retrouve l'esprit de la critique de Lucas (1976) : une fonction de consommation estimée n'est pas invariante aux politiques.</p>\n<h4>Les résultats empiriques</h4>\n<p>Hall trouve que le revenu passé ne prédit guère la consommation, mais que les cours boursiers passés la prédisent un peu. Flavin (1981) met en évidence une <strong>sensibilité excessive</strong> de la consommation aux variations anticipées du revenu. Campbell et Mankiw (1989) proposent un modèle mixte : une fraction λ des ménages consomme son revenu courant (règle empirique), le reste suit le revenu permanent ; ils estiment λ autour de 0,5 aux États-Unis. Deaton a souligné à l'inverse une <strong>douceur excessive</strong> : si les chocs de revenu sont persistants, la consommation devrait réagir davantage qu'elle ne le fait.</p>\n<h4>Contraintes de liquidité</h4>\n<p>Un ménage est <strong>contraint en liquidité</strong> lorsqu'il ne peut pas emprunter autant qu'il le souhaiterait sur ses revenus futurs (asymétries d'information, absence de garanties, taux débiteurs supérieurs aux taux créditeurs). Il consomme alors son revenu courant, et sa propension marginale à consommer le revenu courant est proche de 1. Les ménages jeunes, peu dotés en patrimoine liquide, sont les plus concernés (Zeldes 1989). Les contraintes de liquidité expliquent la sensibilité excessive et redonnent de l'efficacité aux transferts ponctuels.</p>\n<h4>Épargne de précaution</h4>\n<p>Même sans contrainte de crédit, l'incertitude sur les revenus futurs modifie le comportement si l'utilité marginale est convexe (<em>u</em>‴ &gt; 0, propriété appelée <strong>prudence</strong> par Kimball 1990). Par l'inégalité de Jensen, <em>E</em>[<em>u</em>′(<em>C</em><sub>2</sub>)] &gt; <em>u</em>′(<em>E</em>[<em>C</em><sub>2</sub>]) : le risque augmente l'utilité marginale espérée future, ce qui, d'après la condition d'Euler, réduit <em>C</em><sub>1</sub> et accroît l'épargne (Leland 1968). Carroll (1997) montre que les ménages impatients mais prudents se constituent un <strong>stock tampon</strong> d'épargne et se comportent, pour les petits chocs, comme des consommateurs à forte propension marginale. L'utilité quadratique de Hall exclut ce motif (<em>u</em>‴ = 0) : c'est l'équivalence certaine.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> en 2008, l'administration américaine a versé des chèques fiscaux ponctuels (entre 300 et 600 dollars par adulte), dont le calendrier d'envoi dépendait du numéro de sécurité sociale, ce qui fournit une quasi-expérience. Parker, Souleles, Johnson et McClelland (2013) estiment que les ménages en ont dépensé une part significative dans les trois mois suivant la réception (de l'ordre de 12 à 30 % en biens non durables, davantage en incluant l'achat de véhicules), bien plus que ne le prévoit le revenu permanent pur : c'est la signature des contraintes de liquidité et de comportements de « stock tampon ».</div>"
      },
      {
       "titre": "L'équivalence ricardienne (Barro 1974) et ses limites",
       "contenu": "<p>La question est la suivante : pour un montant de dépenses publiques donné, le choix entre financement par l'impôt et par l'emprunt modifie-t-il la consommation ? David Ricardo l'avait évoquée (et jugée peu réaliste) au début du XIX<sup>e</sup> siècle ; Robert Barro (« Are Government Bonds Net Wealth? », 1974) en a donné la formulation moderne.</p>\n<h4>Démonstration dans le modèle à deux périodes</h4>\n<p>L'État dépense <em>G</em><sub>1</sub> et <em>G</em><sub>2</sub>, lève des impôts forfaitaires <em>T</em><sub>1</sub> et <em>T</em><sub>2</sub> et peut emprunter au même taux <em>r</em> que les ménages. Sa contrainte budgétaire intertemporelle (il doit rembourser sa dette en fin d'horizon) s'écrit :</p>\n<p class=\"eq\"><em>G</em><sub>1</sub> + <em>G</em><sub>2</sub> / (1 + <em>r</em>) = <em>T</em><sub>1</sub> + <em>T</em><sub>2</sub> / (1 + <em>r</em>)</p>\n<p>La CBI du ménage représentatif, qui vit les deux périodes, est :</p>\n<p class=\"eq\"><em>C</em><sub>1</sub> + <em>C</em><sub>2</sub> / (1 + <em>r</em>) = (<em>Y</em><sub>1</sub> − <em>T</em><sub>1</sub>) + (<em>Y</em><sub>2</sub> − <em>T</em><sub>2</sub>) / (1 + <em>r</em>)</p>\n<p>En substituant la contrainte de l'État :</p>\n<p class=\"eq\"><em>C</em><sub>1</sub> + <em>C</em><sub>2</sub> / (1 + <em>r</em>) = <em>Y</em><sub>1</sub> + <em>Y</em><sub>2</sub> / (1 + <em>r</em>) − [<em>G</em><sub>1</sub> + <em>G</em><sub>2</sub> / (1 + <em>r</em>)]</p>\n<p>Seule la valeur actualisée des <strong>dépenses</strong> publiques compte ; le calendrier des impôts n'apparaît plus. Une baisse d'impôt Δ<em>T</em><sub>1</sub> = −1 financée par emprunt implique Δ<em>T</em><sub>2</sub> = +(1 + <em>r</em>) : la richesse des ménages est inchangée, la consommation aussi, et l'épargne privée augmente exactement du montant de la désépargne publique. L'épargne nationale ne bouge pas : les titres publics ne sont pas une richesse nette pour le secteur privé. Barro étend le résultat aux générations successives grâce à l'<strong>altruisme intergénérationnel</strong> : les parents, qui se soucient de leurs enfants, augmentent leurs legs pour compenser les impôts futurs.</p>\n<h4>Limites</h4>\n<ul><li><strong>Contraintes de liquidité</strong> : un ménage contraint consomme une baisse d'impôt présente (voir l'exercice de méthode plus haut).</li>\n<li><strong>Horizon fini</strong> sans altruisme : si une partie de la charge future retombe sur des générations non encore nées, la génération actuelle s'enrichit (modèle de générations imbriquées de Diamond 1965, modèle de jeunesse perpétuelle de Blanchard 1985).</li>\n<li><strong>Impôts distorsifs</strong> : avec des impôts proportionnels au revenu plutôt que forfaitaires, le calendrier fiscal modifie les incitations (lissage des taux d'imposition, Barro 1979).</li>\n<li><strong>Myopie</strong> ou rationalité limitée ; <strong>incertitude</strong> sur qui paiera les impôts futurs.</li>\n<li><strong>Taux d'intérêt différents</strong> pour l'État et les ménages, qui empruntent plus cher.</li></ul>\n<p>Empiriquement, la plupart des études trouvent une compensation <strong>partielle</strong> : l'épargne privée augmente quand le déficit public se creuse, mais moins qu'un pour un. L'équivalence ricardienne reste une référence théorique essentielle (elle montre que le multiplicateur d'une baisse d'impôt temporaire peut être faible) plutôt qu'une description exacte.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> l'équivalence ricardienne ne dit pas que la politique budgétaire est sans effet. Une hausse des <strong>dépenses</strong> publiques réduit la richesse des ménages (ils devront la payer) et a des effets réels ; c'est seulement le <strong>mode de financement</strong> (impôt présent ou dette) d'un sentier de dépenses donné qui est neutre.</div>"
      },
      {
       "titre": "Les taux d'épargne en France et aux États-Unis",
       "contenu": "<p>Le <strong>taux d'épargne des ménages</strong> rapporte l'épargne (revenu disponible moins consommation) au revenu disponible. Les ordres de grandeur diffèrent nettement des deux côtés de l'Atlantique.</p>\n<table><thead><tr><th>Période</th><th>France (épargne brute, % du RDB, Insee)</th><th>États-Unis (personal saving rate, BEA)</th></tr></thead>\n<tbody><tr><td>Avant la crise sanitaire (2019)</td><td>environ 15 %</td><td>environ 7 %</td></tr>\n<tr><td>Pic de la crise sanitaire (2020)</td><td>environ 21 % en moyenne annuelle</td><td>plus de 30 % en avril 2020 (donnée mensuelle)</td></tr>\n<tr><td>2024</td><td>18,5 %</td><td>de l'ordre de 5 %</td></tr>\n<tr><td>2025</td><td>17,9 %</td><td>de l'ordre de 4 à 5 %</td></tr></tbody></table>\n<p>Sources : Insee, comptes nationaux annuels publiés en mai 2026 pour 2024 et 2025 ; ordres de grandeur pour les autres cellules. Les définitions ne sont pas identiques (la mesure française est brute, celle du BEA est nette de la consommation de capital fixe sur certains revenus, et la consommation américaine inclut davantage de dépenses de santé), si bien qu'une partie de l'écart est comptable.</p>\n<p>Les théories précédentes éclairent ces faits :</p>\n<ul><li>L'<strong>épargne de précaution</strong> explique en partie le haut niveau de l'épargne française depuis 2022 (incertitude sur l'inflation, la situation budgétaire et politique) ; l'épargne « forcée » de 2020 (commerces fermés) relève, elle, d'une contrainte d'offre.</li>\n<li>Le <strong>cycle de vie</strong> prédit une baisse de l'épargne avec le vieillissement, effet peu visible en France, où les retraités ont des revenus relativement élevés et transmettent leur patrimoine.</li>\n<li>L'accès large au <strong>crédit</strong> et les effets richesse boursiers contribuent au faible taux d'épargne américain.</li></ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en 2025, le taux d'épargne des ménages français était d'environ 18 % de leur revenu disponible (Insee), soit plus du triple du taux américain mesuré par le BEA. Toujours dater les chiffres et préciser la définition (brute ou nette, épargne totale ou financière).</div>"
      }
     ],
     "points_cles": [
      "Keynes (1936) : C = c0 + c1·YD ; la propension moyenne à consommer décroît avec le revenu, la propension marginale c1 est comprise entre 0 et 1.",
      "Kuznets (1946) : sur longue période, C/Y est stable aux États-Unis ; c'est l'énigme que résolvent les théories intertemporelles.",
      "Contrainte budgétaire intertemporelle : C1 + C2/(1 + r) = Y1 + Y2/(1 + r) ; pente −(1 + r) dans le plan (C1, C2).",
      "Condition d'Euler : u'(C1) = β(1 + r)u'(C2) ; avec une utilité CRRA, la croissance de la consommation vaut approximativement (r − ρ)/θ.",
      "L'effet d'une hausse de r sur l'épargne est ambigu pour un prêteur (effets de substitution et de revenu opposés).",
      "Friedman (1957) : C = k·Y^P ; la propension à consommer un revenu transitoire est faible ; la régression de C sur Y en coupe donne une pente inférieure à k.",
      "Modigliani : C = αA + βY ; épargne pendant la vie active, désépargne à la retraite ; l'épargne agrégée dépend de la démographie et de la croissance.",
      "Hall (1978) : sous anticipations rationnelles et utilité quadratique, la consommation suit une marche aléatoire ; seules les nouvelles la modifient.",
      "Sensibilité excessive (Flavin 1981) et fraction de consommateurs « règle empirique » proche de 0,5 (Campbell-Mankiw 1989) : contraintes de liquidité.",
      "Épargne de précaution : prudence u''' > 0 (Kimball 1990) ; l'incertitude accroît l'épargne ; stock tampon (Carroll 1997).",
      "Équivalence ricardienne (Barro 1974) : à dépenses publiques données, substituer la dette à l'impôt ne change ni la consommation ni l'épargne nationale.",
      "Limites de l'équivalence ricardienne : contraintes de liquidité, horizon fini, impôts distorsifs, myopie ; compensation empirique partielle.",
      "Taux d'épargne des ménages : 17,9 % du revenu disponible en France en 2025 (Insee), de l'ordre de 4 à 5 % aux États-Unis."
     ],
     "lexique": [
      {
       "terme": "Propension marginale à consommer",
       "def": "Part d'une unité supplémentaire de revenu disponible qui est consommée : ΔC / ΔYD."
      },
      {
       "terme": "Propension moyenne à consommer",
       "def": "Rapport de la consommation au revenu disponible : C / YD ; son complément à 1 est le taux d'épargne."
      },
      {
       "terme": "Contrainte budgétaire intertemporelle",
       "def": "Égalité entre la valeur actualisée des consommations et la valeur actualisée des ressources (revenus et patrimoine initial)."
      },
      {
       "terme": "Condition d'Euler",
       "def": "Condition d'optimalité intertemporelle u'(Ct) = β(1 + r)E[u'(Ct+1)] : on ne peut pas accroître l'utilité en déplaçant de la consommation entre deux dates."
      },
      {
       "terme": "Élasticité de substitution intertemporelle",
       "def": "Sensibilité de la croissance de la consommation au taux d'intérêt réel ; égale à 1/θ avec une utilité CRRA."
      },
      {
       "terme": "Revenu permanent",
       "def": "Revenu que le ménage anticipe comme durable, égal à l'annuité de sa richesse totale actualisée (Friedman 1957)."
      },
      {
       "terme": "Revenu transitoire",
       "def": "Écart, d'espérance nulle, entre le revenu mesuré et le revenu permanent ; il est en grande partie épargné."
      },
      {
       "terme": "Cycle de vie",
       "def": "Théorie (Modigliani) selon laquelle les individus épargnent pendant la vie active et désépargnent à la retraite pour lisser leur consommation."
      },
      {
       "terme": "Marche aléatoire",
       "def": "Processus dont la meilleure prévision de la valeur future est la valeur présente : Ct+1 = Ct + εt+1 (Hall 1978)."
      },
      {
       "terme": "Contrainte de liquidité",
       "def": "Impossibilité d'emprunter autant que souhaité sur ses revenus futurs, qui lie la consommation au revenu courant."
      },
      {
       "terme": "Épargne de précaution",
       "def": "Épargne supplémentaire motivée par l'incertitude sur les revenus futurs lorsque l'utilité marginale est convexe (prudence)."
      },
      {
       "terme": "Équivalence ricardienne",
       "def": "Proposition (Barro 1974) selon laquelle, à dépenses publiques données, le financement par dette ou par impôt est neutre pour la consommation."
      }
     ],
     "qcm": [
      {
       "q": "Avec C = 200 + 0,75 YD et YD = 2 000, que valent la propension marginale et la propension moyenne à consommer ?",
       "options": [
        "PmC = 0,75 et PMC = 0,75",
        "PmC = 0,85 et PMC = 0,75",
        "PmC = 0,75 et PMC = 0,85",
        "PmC = 0,25 et PMC = 0,15"
       ],
       "bonnes": [
        2
       ],
       "explication": "La PmC est la pente, 0,75. La PMC vaut C / YD = (200 + 1 500) / 2 000 = 1 700 / 2 000 = 0,85, supérieure à la PmC du fait de la consommation autonome."
      },
      {
       "q": "Qu'a établi Simon Kuznets (1946) sur les données américaines de longue période ?",
       "options": [
        "Le rapport consommation / revenu est resté à peu près stable malgré la hausse du revenu",
        "Le taux d'épargne a augmenté continûment avec le revenu, comme le prévoyait Keynes",
        "La consommation suit une marche aléatoire",
        "Les ménages âgés désépargnent moins que prévu"
       ],
       "bonnes": [
        0
       ],
       "explication": "Kuznets montre que C/Y est stable sur plusieurs décennies, ce qui contredit la décroissance de la propension moyenne à consommer prévue par la fonction keynésienne. La marche aléatoire est un résultat de Hall (1978)."
      },
      {
       "q": "Dans le modèle de Fisher, un ménage a Y1 = 50, Y2 = 66 et r = 10 %. Quelle est la valeur actualisée de ses ressources ?",
       "options": [
        "116",
        "110",
        "122,6",
        "105,6"
       ],
       "bonnes": [
        1
       ],
       "explication": "W = Y1 + Y2 / (1 + r) = 50 + 66 / 1,1 = 50 + 60 = 110. Additionner simplement les revenus (116) oublie l'actualisation."
      },
      {
       "q": "Quelles propositions sur la condition d'Euler u'(C1) = β(1 + r)u'(C2) sont exactes ? (deux réponses)",
       "options": [
        "Si β(1 + r) = 1, le ménage choisit C1 = C2",
        "Elle implique toujours que l'épargne augmente avec r",
        "Elle traduit l'égalité du taux marginal de substitution et de 1 + r",
        "Elle n'est valable que pour les ménages contraints en liquidité"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Si β(1 + r) = 1, les utilités marginales sont égales, donc C1 = C2 avec u strictement concave. La condition exprime la tangence entre courbe d'indifférence et droite budgétaire. Elle ne tient justement pas pour un ménage contraint, et l'effet de r sur l'épargne est ambigu."
      },
      {
       "q": "Avec u(C) = C^(1−θ)/(1−θ), θ = 2, un taux de préférence pour le présent de 1 % et un taux d'intérêt réel de 5 %, quel est approximativement le taux de croissance de la consommation ?",
       "options": [
        "4 %",
        "8 %",
        "1 %",
        "2 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "Δln C ≈ (r − ρ)/θ = (5 % − 1 %) / 2 = 2 %. L'élasticité de substitution intertemporelle vaut 1/θ = 0,5."
      },
      {
       "q": "Selon l'hypothèse du revenu permanent, pourquoi la régression de la consommation sur le revenu courant en coupe transversale donne-t-elle une pente faible ?",
       "options": [
        "Parce que les ménages pauvres sont tous contraints en liquidité",
        "Parce qu'une partie des écarts de revenu observés est transitoire et largement épargnée",
        "Parce que la propension marginale à consommer le revenu permanent est faible",
        "Parce que les ménages riches ont un taux de préférence pour le présent plus élevé"
       ],
       "bonnes": [
        1
       ],
       "explication": "La pente estimée vaut k × Var(YP) / Var(Y), inférieure à k car la variance du revenu mesuré inclut celle du revenu transitoire, qui n'est pas consommé. La propension à consommer le revenu permanent est au contraire élevée."
      },
      {
       "q": "Dans le modèle du cycle de vie sans intérêt, un individu travaille 40 ans et vit 50 ans à partir de son entrée dans la vie active, sans patrimoine initial. Quelle part de son revenu d'activité épargne-t-il chaque année de travail ?",
       "options": [
        "10 %",
        "25 %",
        "80 %",
        "20 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "Il consomme R/T = 40/50 = 0,8 de son revenu, donc épargne 20 %. Il accumule 40 × 0,2Y = 8Y, qui finance 10 années de consommation à 0,8Y."
      },
      {
       "q": "Quelles propositions découlent de la marche aléatoire de Hall (1978) ? (deux réponses)",
       "options": [
        "Le revenu des trimestres passés ne doit pas aider à prévoir la variation de consommation",
        "La consommation réagit fortement aux hausses de revenu annoncées longtemps à l'avance, au moment où elles se produisent",
        "Les variations de consommation reflètent les nouvelles sur le revenu permanent",
        "La consommation doit suivre le revenu courant"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Sous anticipations rationnelles, toute l'information disponible en t est déjà intégrée dans Ct : seules les nouvelles modifient la consommation. Une hausse anticipée de revenu est déjà prise en compte lorsqu'elle survient."
      },
      {
       "q": "Quel phénomène l'hypothèse de prudence (u''' > 0) permet-elle d'expliquer ?",
       "options": [
        "La marche aléatoire de la consommation",
        "L'équivalence ricardienne",
        "La hausse de l'épargne quand l'incertitude sur les revenus futurs augmente",
        "La stabilité de long terme de C/Y"
       ],
       "bonnes": [
        2
       ],
       "explication": "Avec une utilité marginale convexe, E[u'(C2)] dépasse u'(E[C2]) : le risque accroît l'utilité marginale future espérée, ce qui conduit à réduire C1 et à épargner davantage. L'utilité quadratique de Hall exclut ce motif."
      },
      {
       "q": "L'État baisse les impôts forfaitaires de 100 aujourd'hui et les relève de 105 l'an prochain, avec r = 5 %, sans changer ses dépenses. Sous équivalence ricardienne, quelles propositions sont exactes ? (deux réponses)",
       "options": [
        "La consommation présente augmente de 100",
        "L'épargne privée augmente de 100",
        "L'épargne nationale diminue de 100",
        "La richesse intertemporelle des ménages est inchangée"
       ],
       "bonnes": [
        1,
        3
       ],
       "explication": "La valeur actualisée des impôts est inchangée (−100 + 105/1,05 = 0), donc la richesse et la consommation aussi. Les ménages épargnent la totalité de la baisse d'impôt pour payer l'impôt futur : l'épargne privée compense exactement la désépargne publique et l'épargne nationale est stable."
      },
      {
       "q": "Lequel de ces éléments n'est PAS une limite classique de l'équivalence ricardienne ?",
       "options": [
        "L'existence de contraintes de liquidité",
        "Le caractère distorsif des impôts proportionnels",
        "L'horizon fini des agents sans altruisme intergénérationnel",
        "Le fait que les ménages ont des anticipations rationnelles"
       ],
       "bonnes": [
        3
       ],
       "explication": "Les anticipations rationnelles font partie des hypothèses qui soutiennent l'équivalence ricardienne ; ce n'est pas une limite. Les trois autres éléments la mettent en défaut."
      },
      {
       "q": "Quelle proposition sur les taux d'épargne des ménages est exacte ?",
       "options": [
        "En 2025, le taux d'épargne des ménages français était proche de 18 % du revenu disponible, nettement au-dessus du taux américain",
        "Le taux d'épargne américain dépasse durablement 15 % depuis 2020",
        "Le taux d'épargne français est retombé sous 10 % en 2025",
        "Les taux français et américain sont mesurés selon des définitions identiques"
       ],
       "bonnes": [
        0
       ],
       "explication": "L'Insee mesure 17,9 % en 2025 (18,5 % en 2024) ; le taux américain du BEA est de l'ordre de 4 à 5 %. Le pic américain de plus de 30 % n'a duré que quelques mois en 2020, et les définitions diffèrent (brute ou nette)."
      }
     ]
    },
    {
     "id": "mac4-investissement",
     "titre": "L'investissement",
     "duree": 45,
     "niveau": "L2",
     "objectifs": [
      "Connaître les composantes de l'investissement et sa forte volatilité conjoncturelle",
      "Formaliser le principe d'accélérateur et en montrer l'effet d'amplification",
      "Dériver le coût d'usage du capital (Jorgenson) et le stock de capital désiré",
      "Relier le q de Tobin aux coûts d'ajustement et distinguer q moyen et q marginal",
      "Expliquer la valeur d'option liée à l'irréversibilité de l'investissement en incertitude",
      "Analyser l'investissement en logement, les stocks et le rôle des conditions de financement (accélérateur financier)"
     ],
     "sections": [
      {
       "titre": "Définition, composantes et faits stylisés",
       "contenu": "<p>En comptabilité nationale, l'<strong>investissement</strong> est la formation brute de capital : la <strong>formation brute de capital fixe</strong> (FBCF), c'est-à-dire l'acquisition de biens durables utilisés pendant plus d'un an dans la production, augmentée de la <strong>variation des stocks</strong>. La FBCF se décompose selon les agents : investissement des entreprises (machines, bâtiments, matériel de transport, et depuis les révisions comptables des années 1990 et 2000, logiciels et recherche-développement), investissement des ménages (essentiellement le <strong>logement neuf</strong> et les gros travaux, les ménages étant traités comme producteurs de services de logement) et investissement des administrations publiques (infrastructures, bâtiments, équipements militaires).</p>\n<p>L'investissement <strong>brut</strong> inclut le remplacement du capital usé ; l'investissement <strong>net</strong> en est diminué de la dépréciation δ<em>K</em> (consommation de capital fixe). La dynamique du capital s'écrit :</p>\n<p class=\"eq\"><em>K</em><sub><em>t</em>+1</sub> = (1 − δ) <em>K<sub>t</sub></em> + <em>I<sub>t</sub></em></p>\n<p>Quelques ordres de grandeur : en France, la FBCF totale représente un peu moins du quart du PIB ces dernières années (Insee), dont environ la moitié pour les entreprises non financières ; aux États-Unis, l'investissement fixe privé et public avoisine 20 % du PIB. Les deux faits stylisés majeurs sont :</p>\n<ul><li>l'investissement est <strong>très volatil</strong> : ses fluctuations en pourcentage sont deux à trois fois plus amples que celles du PIB, et il contribue à une part disproportionnée des récessions ;</li>\n<li>il est <strong>procyclique</strong> et souvent <strong>avancé</strong> (l'investissement en logement en particulier).</li></ul>\n<p>Keynes (1936) attribuait cette instabilité aux « esprits animaux » des entrepreneurs et à l'efficacité marginale du capital, comparée au taux d'intérêt. Les théories modernes cherchent à formaliser la décision d'investir comme un problème d'optimisation dynamique de la firme.</p>"
      },
      {
       "titre": "Le principe d'accélérateur",
       "contenu": "<p>Le principe d'accélérateur (Aftalion 1909, Clark 1917) suppose que les entreprises veulent maintenir un rapport fixe <em>v</em> entre capital et production, le <strong>coefficient de capital</strong> : <em>K</em>* = <em>v</em> <em>Y</em>. Si le capital s'ajuste immédiatement, l'investissement net est proportionnel à la <strong>variation</strong> de la production :</p>\n<p class=\"eq\"><em>I<sub>t</sub></em> = <em>v</em> (<em>Y<sub>t</sub></em> − <em>Y</em><sub><em>t</em>−1</sub>) + δ <em>K</em><sub><em>t</em>−1</sub></p>\n<p>Le résultat important est l'<strong>amplification</strong> : un simple ralentissement de la croissance de la demande suffit à faire chuter l'investissement. Exemple avec <em>v</em> = 2 et un investissement de remplacement fixé à 20 :</p>\n<table><thead><tr><th>Année</th><th>Production <em>Y</em></th><th>Δ<em>Y</em></th><th>Investissement net 2Δ<em>Y</em></th><th>Investissement brut</th></tr></thead>\n<tbody><tr><td>1</td><td>100</td><td>—</td><td>—</td><td>—</td></tr>\n<tr><td>2</td><td>110</td><td>10</td><td>20</td><td>40</td></tr>\n<tr><td>3</td><td>115</td><td>5</td><td>10</td><td>30</td></tr>\n<tr><td>4</td><td>115</td><td>0</td><td>0</td><td>20</td></tr>\n<tr><td>5</td><td>112</td><td>−3</td><td>−6</td><td>14</td></tr></tbody></table>\n<p>Entre les années 2 et 3, la production continue d'augmenter mais l'investissement brut baisse de 25 %. Combiné au multiplicateur keynésien, l'accélérateur engendre des cycles endogènes : c'est le modèle <strong>multiplicateur-accélérateur</strong> de Samuelson (1939), où <em>Y<sub>t</sub></em> = <em>C<sub>t</sub></em> + <em>I<sub>t</sub></em> + <em>G</em>, <em>C<sub>t</sub></em> = <em>c</em> <em>Y</em><sub><em>t</em>−1</sub> et <em>I<sub>t</sub></em> = <em>v</em> (<em>C<sub>t</sub></em> − <em>C</em><sub><em>t</em>−1</sub>) ; selon les valeurs de <em>c</em> et <em>v</em>, la production converge de façon monotone, oscille de façon amortie ou explosive.</p>\n<p>Comme les ajustements du capital sont lents, on utilise plutôt l'<strong>accélérateur flexible</strong> (Koyck 1954) : seule une fraction λ de l'écart entre capital désiré et capital existant est comblée chaque période, <em>I</em><sup>net</sup><sub><em>t</em></sub> = λ (<em>K</em>*<sub><em>t</em></sub> − <em>K</em><sub><em>t</em>−1</sub>). Limites : le coefficient <em>v</em> est supposé fixe, alors qu'il dépend du coût relatif des facteurs ; le modèle ignore le coût du capital et les anticipations ; il suppose que les entreprises sont à pleine capacité (en sous-utilisation des capacités, une hausse de la demande ne déclenche pas d'investissement).</p>"
      },
      {
       "titre": "Le coût d'usage du capital et le stock désiré (Jorgenson)",
       "contenu": "<p>Dale Jorgenson (1963) fonde l'investissement sur la maximisation du profit. Imaginons une entreprise qui loue son capital à elle-même. Détenir une unité de capital pendant une période, achetée au prix <em>p<sub>K</sub></em>, coûte :</p>\n<ul><li>le coût d'opportunité financier <em>r</em> <em>p<sub>K</sub></em> (intérêts payés ou non perçus, avec <em>r</em> le taux nominal) ;</li>\n<li>la dépréciation δ <em>p<sub>K</sub></em> ;</li>\n<li>moins la plus-value Δ<em>p<sub>K</sub></em> sur le bien (une moins-value s'ajoute au coût).</li></ul>\n<p>Le <strong>coût d'usage du capital</strong> (ou coût de location implicite) est donc :</p>\n<p class=\"eq\"><em>c</em> = <em>p<sub>K</sub></em> (<em>r</em> + δ − Δ<em>p<sub>K</sub></em> / <em>p<sub>K</sub></em>)</p>\n<p>Si le prix du capital évolue comme le niveau général des prix, <em>r</em> − Δ<em>p<sub>K</sub></em> / <em>p<sub>K</sub></em> est le taux d'intérêt réel et le coût d'usage réel s'écrit <em>c</em> / <em>P</em> = (<em>p<sub>K</sub></em> / <em>P</em>) (<em>r</em> − π + δ). L'entreprise accumule du capital jusqu'à ce que la productivité marginale du capital égale ce coût réel :</p>\n<p class=\"eq\"><em>PmK</em>(<em>K</em>*) = (<em>p<sub>K</sub></em> / <em>P</em>) (<em>r</em> − π + δ)</p>\n<p>Avec une fonction de Cobb-Douglas <em>Y</em> = <em>A K</em><sup>α</sup> <em>L</em><sup>1−α</sup>, la productivité marginale est <em>PmK</em> = α <em>Y</em> / <em>K</em>, d'où le <strong>stock de capital désiré</strong> :</p>\n<p class=\"eq\"><em>K</em>* = α <em>Y</em> / (<em>c</em> / <em>P</em>)</p>\n<p>Le capital désiré augmente avec la production (on retrouve l'accélérateur, mais avec un coefficient de capital variable) et diminue avec le coût d'usage. Hall et Jorgenson (1967) y intègrent la fiscalité : un crédit d'impôt à l'investissement de taux τ<sub>c</sub> ou un amortissement fiscal accéléré réduisent le coût d'usage ; l'impôt sur les sociétés l'augmente s'il frappe le rendement sans déduction intégrale des coûts. La politique monétaire agit sur l'investissement par ce canal : une hausse du taux réel accroît <em>c</em> et réduit <em>K</em>*.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> une entreprise a une technologie Cobb-Douglas avec α = 0,3 ; sa production anticipée est <em>Y</em> = 1 000 ; <em>p<sub>K</sub></em> / <em>P</em> = 1 ; δ = 7 % ; taux d'intérêt réel 3 %.<br>1) Coût d'usage réel : <em>c</em> / <em>P</em> = 0,03 + 0,07 = 0,10.<br>2) Capital désiré : <em>K</em>* = 0,3 × 1 000 / 0,10 = 3 000.<br>3) Le taux réel passe à 5 % : <em>c</em> / <em>P</em> = 0,12 et <em>K</em>* = 300 / 0,12 = 2 500, soit −16,7 %.<br>4) Si le capital initial est de 3 000 et que l'entreprise comble chaque année la moitié de l'écart (λ = 0,5), l'investissement net de l'année suivante est 0,5 × (2 500 − 3 000) = −250 : l'investissement brut tombe de 210 (= 0,07 × 3 000, simple remplacement) à −40, ramené à 0 en pratique, faute de pouvoir revendre le capital (irréversibilité).<br>5) Élasticité : le capital désiré est inversement proportionnel au coût d'usage ; une hausse de 2 points du taux réel, qui augmente le coût d'usage de 20 %, réduit <em>K</em>* d'un sixième.</div>\n<p>Limites : le modèle détermine un <strong>stock</strong> désiré, pas un <strong>flux</strong> d'investissement ; sans hypothèse supplémentaire, le capital s'ajusterait instantanément (investissement infini ou nul). Il faut introduire des délais ou des coûts d'ajustement. Par ailleurs, les estimations trouvent souvent une élasticité au coût d'usage plus faible que prévu.</p>"
      },
      {
       "titre": "Le q de Tobin et les coûts d'ajustement",
       "contenu": "<p>James Tobin (1969) propose de comparer deux évaluations du capital installé :</p>\n<p class=\"eq\"><em>q</em> = valeur de marché des entreprises / coût de remplacement du capital</p>\n<p>Si <em>q</em> &gt; 1, le marché valorise une unité de capital installé plus que son coût d'achat : investir crée de la valeur pour les actionnaires. Si <em>q</em> &lt; 1, il est plus avantageux d'acheter des entreprises existantes que d'investir. Le q de Tobin relie l'investissement à la Bourse : un krach réduit <em>q</em> et donc l'investissement.</p>\n<h4>Fondement : les coûts d'ajustement convexes</h4>\n<p>Supposons qu'installer <em>I</em> unités de capital coûte, en plus de leur prix (normalisé à 1), un coût d'ajustement convexe <em>C</em>(<em>I</em>, <em>K</em>) = (φ / 2) <em>I</em><sup>2</sup> / <em>K</em> : réorganiser la production, former le personnel coûte d'autant plus que l'on investit vite (Eisner et Strotz 1963, Lucas 1967). La firme maximise la valeur actualisée de ses profits sous la contrainte d'accumulation du capital. Notons <em>q</em> le multiplicateur associé à cette contrainte : c'est la <strong>valeur marginale</strong> (prix fictif) d'une unité de capital installé, égale à la valeur actualisée des productivités marginales futures nettes. La condition du premier ordre par rapport à <em>I</em> égalise le coût marginal d'une unité installée et sa valeur :</p>\n<p class=\"eq\">1 + φ <em>I</em> / <em>K</em> = <em>q</em> &nbsp; ⇔ &nbsp; <em>I</em> / <em>K</em> = (<em>q</em> − 1) / φ</p>\n<p>Le taux d'investissement est une fonction croissante de <em>q</em> ; il est nul quand <em>q</em> = 1 (à l'état stationnaire, il faut ajouter le remplacement δ). Plus les coûts d'ajustement φ sont élevés, plus l'investissement est lissé. Ce modèle résout le problème du modèle de Jorgenson : il détermine un <strong>flux</strong> d'investissement fini, et les anticipations y jouent un rôle central puisque <em>q</em> intègre les profits futurs.</p>\n<h4>q marginal et q moyen</h4>\n<p>La théorie fait intervenir le <strong>q marginal</strong> (valeur d'une unité de capital supplémentaire), inobservable ; les données boursières donnent le <strong>q moyen</strong> (valeur totale / capital total). Hayashi (1982) montre qu'ils sont égaux si l'entreprise est preneuse de prix et si la production et les coûts d'ajustement sont à rendements d'échelle constants. Empiriquement, le q moyen explique mal l'investissement : les coefficients sont faibles, et les flux de trésorerie (cash-flow) restent significatifs. Explications : bulles et erreurs de valorisation boursière, pouvoir de marché, actifs incorporels, et surtout contraintes de financement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> q = 1 ne signifie pas que l'investissement brut est nul, mais que l'investissement net de remplacement l'est (dans la version où le coût d'ajustement porte sur l'investissement net). Et un q élevé ne déclenche pas un investissement immédiat et massif : les coûts d'ajustement étalent la réponse dans le temps.</div>"
      },
      {
       "titre": "Irréversibilité, incertitude et valeur d'option",
       "contenu": "<p>Beaucoup d'investissements sont <strong>irréversibles</strong> : un équipement spécifique ne peut être revendu qu'à perte, car il est mal adapté à d'autres usages et l'acheteur se méfie de sa qualité. L'entreprise qui investit renonce alors à la possibilité d'attendre de l'information nouvelle. Dixit et Pindyck (<em>Investment under Uncertainty</em>, 1994), après Bernanke (1983) et McDonald et Siegel (1986), montrent que l'opportunité d'investir est une <strong>option réelle</strong>, analogue à une option d'achat financière : l'exercer (investir) détruit sa valeur d'attente. La règle de la valeur actuelle nette (investir si VAN &gt; 0) est alors erronée : il faut que la VAN dépasse la <strong>valeur de l'option d'attendre</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> une usine coûte 1 600, irrécupérables. Elle produit une unité par an à perpétuité. Le prix est aujourd'hui de 200 ; dès l'an prochain, il passera de façon permanente à 300 ou à 100 avec une probabilité 1/2 chacun. Taux d'actualisation 10 %.<br>1) Investir aujourd'hui : le prix espéré reste 200, la valeur des recettes est 200 + 200 / 0,1 = 2 200. VAN = 2 200 − 1 600 = 600 &gt; 0.<br>2) Attendre un an et n'investir que si le prix monte à 300 : valeur en <em>t</em> = 1 des recettes = 300 + 300 / 0,1 = 3 300 ; VAN actualisée = 0,5 × (3 300 − 1 600) / 1,1 ≈ 773.<br>3) 773 &gt; 600 : il vaut mieux attendre, bien que la VAN immédiate soit positive. La valeur de l'option de flexibilité est 773 − 600 = 173.<br>4) Interprétation : attendre permet d'éviter le mauvais scénario (prix 100, où l'usine vaudrait 1 100 &lt; 1 600).</div>\n<p>Conséquences macroéconomiques :</p>\n<ul><li>une <strong>hausse de l'incertitude</strong> accroît la valeur d'attendre et freine l'investissement, même si les rendements espérés sont inchangés ; Bloom (2009) montre que les chocs d'incertitude (mesurée par la volatilité boursière) provoquent un recul rapide de l'investissement et de l'embauche ;</li>\n<li>l'investissement réagit peu aux variations faibles des conditions (zone d'inaction) et de façon brutale quand un seuil est franchi : les décisions sont <strong>discontinues</strong>, en grappes ;</li>\n<li>une politique de baisse des taux est moins efficace en période d'incertitude élevée ; la <strong>stabilité</strong> et la prévisibilité des politiques publiques (fiscalité, réglementation) favorisent l'investissement.</li></ul>"
      },
      {
       "titre": "Investissement en logement et investissement en stocks",
       "contenu": "<h4>Le logement</h4>\n<p>L'investissement résidentiel se modélise comme un marché à deux temps. À court terme, le <strong>stock</strong> de logements est fixe ; la demande de logements (fonction décroissante du prix relatif, croissante du revenu et de la population, décroissante du coût du crédit hypothécaire) détermine le prix d'équilibre <em>P<sub>H</sub></em> / <em>P</em>. Le <strong>flux</strong> de construction neuve est ensuite une fonction croissante de ce prix relatif rapporté au coût de construction : c'est un raisonnement en q de Tobin appliqué au logement. Une hausse des taux hypothécaires réduit la demande, fait baisser les prix (avec retard, car les prix immobiliers sont rigides à la baisse) et contracte la construction. L'investissement en logement est le canal le plus rapide et le plus puissant de la politique monétaire ; il précède souvent les retournements de cycle (Leamer 2007, « Housing is the business cycle »).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> en France, les taux des crédits immobiliers aux particuliers sont passés d'environ 1 % début 2022 à plus de 4 % fin 2023 sous l'effet du resserrement monétaire de la BCE. Le nombre de transactions et de mises en chantier a fortement reculé et l'investissement des ménages en logement a baissé pendant plusieurs trimestres consécutifs en 2023 et 2024, pesant sur la croissance. Aux États-Unis, la crise de 2007-2009 a commencé par l'effondrement de la construction résidentielle dès 2006, avant le reste de l'économie.</div>\n<h4>Les stocks</h4>\n<p>Les entreprises détiennent des stocks pour lisser la production quand les coûts marginaux sont croissants (motif de <strong>lissage de la production</strong>), éviter les ruptures, et parce que certains biens sont en cours de fabrication. Le modèle de lissage prédit que la production est moins volatile que les ventes et que les stocks sont contracycliques (ils absorbent les chocs de demande). Les données montrent l'inverse : la production est <strong>plus</strong> volatile que les ventes et l'investissement en stocks est <strong>procyclique</strong> (Blinder et Maccini 1991). Explications : chocs de coût plutôt que de demande, coûts fixes de commande menant à des règles de type (<em>S</em>, <em>s</em>), et ajustement des stocks à un ratio cible stock / ventes (accélérateur des stocks). Bien que les stocks soient petits (moins de 1 % du PIB en flux annuel), leur variation explique une part importante des baisses du PIB pendant les récessions : quand la demande ralentit, les entreprises déstockent et réduisent leurs commandes, amplifiant le recul.</p>"
      },
      {
       "titre": "Financement et accélérateur financier",
       "contenu": "<p>Le théorème de <strong>Modigliani-Miller</strong> (1958) établit que, sur des marchés parfaits, la structure financière de l'entreprise (dette, actions, autofinancement) n'affecte ni sa valeur ni ses décisions d'investissement : seul compte le coût d'usage. Les asymétries d'information remettent ce résultat en cause. Le prêteur connaît mal la qualité des projets (sélection adverse) et ne peut pas contrôler sans coût l'usage des fonds (aléa moral, vérification coûteuse des résultats selon Townsend 1979). Il en résulte une <strong>prime de financement externe</strong> : le financement externe coûte plus cher que l'autofinancement, et d'autant plus que l'emprunteur dispose de peu de fonds propres et de garanties. D'où une hiérarchie des financements (Myers et Majluf 1984) et une sensibilité de l'investissement aux flux de trésorerie, mise en évidence par Fazzari, Hubbard et Petersen (1988) pour les entreprises qui distribuent peu de dividendes.</p>\n<h4>L'accélérateur financier</h4>\n<p>Bernanke et Gertler (1989), puis Bernanke, Gertler et Gilchrist (1999), montrent que la prime de financement externe dépend inversement de la <strong>valeur nette</strong> (fonds propres) des emprunteurs :</p>\n<p class=\"eq\">prime = <em>f</em>(valeur nette / besoin de financement), avec <em>f</em> décroissante</p>\n<p>Or la valeur nette est <strong>procyclique</strong> : en récession, les profits et les prix des actifs baissent. Un choc négatif réduit la valeur nette, accroît la prime, réduit l'investissement, ce qui réduit encore la production et les prix d'actifs : le choc initial est amplifié et rendu plus persistant. Kiyotaki et Moore (1997) ajoutent le rôle des <strong>garanties</strong> : si l'emprunt est limité par la valeur du collatéral (terrains, immeubles), une baisse du prix de l'actif réduit la capacité d'emprunt et donc la demande de l'actif, d'où une nouvelle baisse de prix. Ces mécanismes donnent un rôle macroéconomique aux bilans et justifient le canal du crédit de la politique monétaire.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'investissement dépend de la demande anticipée (accélérateur), du coût d'usage (taux réel, fiscalité, dépréciation), des anticipations de profit (q de Tobin), de l'incertitude (valeur d'option) et de la situation financière des entreprises (accélérateur financier). En crise, ces cinq déterminants se dégradent simultanément, ce qui explique l'ampleur des chutes d'investissement.</div>"
      }
     ],
     "points_cles": [
      "Investissement = FBCF (entreprises, ménages pour le logement, administrations) + variation des stocks ; il est deux à trois fois plus volatil que le PIB.",
      "Accumulation : K(t+1) = (1 − δ)K(t) + I(t) ; l'investissement net exclut le remplacement δK.",
      "Accélérateur : l'investissement net est proportionnel à la variation de la production, I = vΔY ; un ralentissement de la demande suffit à faire baisser l'investissement.",
      "Samuelson (1939) : l'interaction du multiplicateur et de l'accélérateur peut engendrer des cycles.",
      "Coût d'usage du capital (Jorgenson 1963) : c = pK(r + δ − ΔpK/pK) ; en termes réels, (pK/P)(r − π + δ).",
      "Stock désiré avec Cobb-Douglas : K* = αY / (c/P) ; il baisse quand le taux réel ou la fiscalité du capital augmentent.",
      "q de Tobin (1969) = valeur de marché / coût de remplacement ; on investit si q > 1.",
      "Avec des coûts d'ajustement convexes (φ/2)I²/K, I/K = (q − 1)/φ : l'investissement est un flux lissé et tourné vers l'avenir.",
      "Hayashi (1982) : q marginal = q moyen sous concurrence parfaite et rendements constants.",
      "Irréversibilité + incertitude : l'option d'attendre a une valeur ; il faut une VAN supérieure à cette valeur pour investir (Dixit-Pindyck 1994).",
      "Le logement est le canal le plus rapide de la politique monétaire ; les stocks sont procycliques et amplifient les récessions.",
      "Modigliani-Miller (1958) : neutralité de la structure financière sur marchés parfaits ; les asymétries d'information créent une prime de financement externe.",
      "Accélérateur financier (Bernanke-Gertler 1989, BGG 1999) : la prime dépend inversement de la valeur nette, procyclique, ce qui amplifie les chocs."
     ],
     "lexique": [
      {
       "terme": "FBCF",
       "def": "Formation brute de capital fixe : acquisitions de biens durables destinés à être utilisés plus d'un an dans la production, y compris logements neufs, logiciels et R&D."
      },
      {
       "terme": "Coefficient de capital",
       "def": "Rapport v = K/Y entre le stock de capital et la production, supposé fixe dans le modèle d'accélérateur."
      },
      {
       "terme": "Accélérateur",
       "def": "Mécanisme par lequel l'investissement dépend de la variation de la production, ce qui amplifie les fluctuations de la demande."
      },
      {
       "terme": "Coût d'usage du capital",
       "def": "Coût de détention d'une unité de capital pendant une période : intérêt, dépréciation et moins-value éventuelle."
      },
      {
       "terme": "q de Tobin",
       "def": "Rapport entre la valeur de marché du capital installé et son coût de remplacement ; l'investissement croît avec q."
      },
      {
       "terme": "Coûts d'ajustement",
       "def": "Coûts supplémentaires, croissants et convexes, liés à la vitesse d'installation du nouveau capital ; ils lissent l'investissement."
      },
      {
       "terme": "Option réelle",
       "def": "Droit, sans obligation, de réaliser un investissement plus tard ; sa valeur augmente avec l'incertitude et l'irréversibilité."
      },
      {
       "terme": "Irréversibilité",
       "def": "Impossibilité de revendre un capital installé sans perte importante, faute d'usage alternatif."
      },
      {
       "terme": "Prime de financement externe",
       "def": "Surcoût du financement externe par rapport à l'autofinancement, dû aux asymétries d'information entre prêteurs et emprunteurs."
      },
      {
       "terme": "Valeur nette",
       "def": "Fonds propres d'un emprunteur (actif moins dettes), qui conditionne sa capacité à se financer et le coût de ce financement."
      },
      {
       "terme": "Accélérateur financier",
       "def": "Amplification des chocs par la dégradation des bilans, qui accroît la prime de financement externe et réduit l'investissement."
      }
     ],
     "qcm": [
      {
       "q": "Avec un coefficient de capital v = 3, une production qui passe de 200 à 204 et un investissement de remplacement de 15, quel est l'investissement brut selon l'accélérateur simple ?",
       "options": [
        "612",
        "12",
        "15",
        "27"
       ],
       "bonnes": [
        3
       ],
       "explication": "Investissement net = v × ΔY = 3 × 4 = 12 ; investissement brut = 12 + 15 = 27."
      },
      {
       "q": "Selon le principe d'accélérateur, que se passe-t-il si la croissance de la production passe de 5 % à 2 % ?",
       "options": [
        "L'investissement augmente moins vite mais augmente",
        "L'investissement net baisse alors que la production continue d'augmenter",
        "L'investissement est inchangé tant que la production croît",
        "L'investissement net devient négatif"
       ],
       "bonnes": [
        1
       ],
       "explication": "L'investissement net est proportionnel à ΔY : si ΔY diminue, l'investissement net diminue, même avec une croissance positive. Il ne devient négatif que si la production baisse."
      },
      {
       "q": "Avec un taux d'intérêt nominal de 6 %, une inflation de 2 %, un taux de dépréciation de 8 % et pK/P = 1, quel est le coût d'usage réel du capital ?",
       "options": [
        "12 %",
        "14 %",
        "16 %",
        "10 %"
       ],
       "bonnes": [
        0
       ],
       "explication": "Coût d'usage réel = r − π + δ = 6 % − 2 % + 8 % = 12 %. Oublier la plus-value sur le capital conduit à 14 %."
      },
      {
       "q": "Avec Y = K^0,4 L^0,6, une production de 500 et un coût d'usage réel de 0,08, quel est le stock de capital désiré ?",
       "options": [
        "6 250",
        "3 750",
        "40",
        "2 500"
       ],
       "bonnes": [
        3
       ],
       "explication": "PmK = αY/K = coût d'usage, donc K* = αY / (c/P) = 0,4 × 500 / 0,08 = 200 / 0,08 = 2 500."
      },
      {
       "q": "Quelles propositions sur le q de Tobin sont exactes ? (deux réponses)",
       "options": [
        "Une hausse du cours des actions des entreprises, à coût du capital inchangé, accroît q et l'investissement",
        "Si q est inférieur à 1, l'entreprise a intérêt à investir massivement",
        "Avec des coûts d'ajustement convexes, le taux d'investissement net est une fonction croissante de q",
        "Le q moyen est toujours égal au q marginal"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "q rapporte la valeur de marché au coût de remplacement : une hausse boursière l'accroît. La condition 1 + φI/K = q donne I/K = (q − 1)/φ, croissante en q. L'égalité q moyen = q marginal n'est vraie que sous les conditions de Hayashi (1982)."
      },
      {
       "q": "Avec un coût d'ajustement (φ/2)I²/K, φ = 10 et q = 1,3, quel est le taux d'investissement net I/K ?",
       "options": [
        "13 %",
        "30 %",
        "3 %",
        "0,3 %"
       ],
       "bonnes": [
        2
       ],
       "explication": "I/K = (q − 1)/φ = 0,3 / 10 = 0,03, soit 3 % du stock de capital."
      },
      {
       "q": "Pourquoi une hausse de l'incertitude peut-elle réduire l'investissement même si le rendement espéré est inchangé ?",
       "options": [
        "Parce que les entreprises sont neutres au risque",
        "Parce que, l'investissement étant irréversible, la valeur de l'option d'attendre augmente",
        "Parce que le coût d'usage du capital augmente mécaniquement avec l'incertitude",
        "Parce que le q de Tobin devient supérieur à 1"
       ],
       "bonnes": [
        1
       ],
       "explication": "L'opportunité d'investir est une option réelle : quand l'incertitude augmente, attendre l'information nouvelle a plus de valeur, et le seuil de rentabilité exigé s'élève (Dixit-Pindyck 1994, Bloom 2009). Le raisonnement vaut même pour une entreprise neutre au risque."
      },
      {
       "q": "Quelles propositions sur l'investissement en stocks sont exactes ? (deux réponses)",
       "options": [
        "Le modèle de lissage de la production prévoit que la production est moins volatile que les ventes",
        "Dans les données, les stocks sont contracycliques et stabilisent la production",
        "Le déstockage contribue fortement à la baisse du PIB en récession",
        "Les stocks représentent en flux annuel plus de 10 % du PIB"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Le lissage prévoit une production plus stable que les ventes, mais les données montrent l'inverse : les stocks sont procycliques et leur réduction amplifie les récessions. Leur variation annuelle est petite en proportion du PIB."
      },
      {
       "q": "Selon le théorème de Modigliani-Miller (1958), sur des marchés financiers parfaits :",
       "options": [
        "L'investissement dépend des flux de trésorerie de l'entreprise",
        "L'endettement réduit le coût du capital",
        "Les entreprises doivent privilégier l'autofinancement",
        "La structure du financement n'affecte pas la valeur ni l'investissement de l'entreprise"
       ],
       "bonnes": [
        3
       ],
       "explication": "Le théorème établit la neutralité de la structure financière en l'absence d'impôts, de coûts de faillite et d'asymétries d'information. La sensibilité de l'investissement au cash-flow est au contraire une preuve d'imperfections."
      },
      {
       "q": "Quel est le mécanisme central de l'accélérateur financier (Bernanke-Gertler) ?",
       "options": [
        "Une baisse de la valeur nette des emprunteurs accroît la prime de financement externe, ce qui réduit l'investissement et amplifie le choc",
        "Une hausse de la demande accroît l'investissement proportionnellement à la variation de la production",
        "Une baisse des taux directeurs accroît mécaniquement les réserves des banques",
        "Une hausse du q de Tobin accroît la valeur nette, ce qui réduit l'investissement"
       ],
       "bonnes": [
        0
       ],
       "explication": "La prime de financement externe dépend inversement de la valeur nette, qui est procyclique : un choc négatif dégrade les bilans, renchérit le crédit et réduit l'investissement, ce qui dégrade encore les bilans. L'accélérateur simple, lui, porte sur la demande."
      },
      {
       "q": "Quelles propositions sur l'investissement en logement sont exactes ? (deux réponses)",
       "options": [
        "Il est peu sensible aux taux d'intérêt car les ménages achètent pour habiter",
        "Le flux de construction dépend du prix des logements rapporté au coût de construction",
        "C'est l'un des canaux les plus rapides de la transmission de la politique monétaire",
        "En France, il a progressé en 2023 grâce à la baisse des taux"
       ],
       "bonnes": [
        1,
        2
       ],
       "explication": "Le modèle de stock-flux fait dépendre la construction du prix relatif, comme un q de Tobin. Le logement réagit vite aux taux hypothécaires : en France, leur hausse à plus de 4 % fin 2023 a fait reculer l'investissement des ménages."
      }
     ]
    },
    {
     "id": "mac4-politique-monetaire",
     "titre": "La politique monétaire",
     "duree": 55,
     "niveau": "L2",
     "objectifs": [
      "Connaître les objectifs de la politique monétaire et comparer les mandats de la BCE et de la Fed",
      "Décrire les instruments : taux directeurs, corridor, opérations d'open market, réserves obligatoires",
      "Analyser les canaux de transmission (taux, crédit, change, prix d'actifs, anticipations)",
      "Comprendre la borne à zéro et les politiques non conventionnelles (QE, forward guidance, taux négatifs)",
      "Démontrer le biais inflationniste de la discrétion (Kydland-Prescott, Barro-Gordon) et ses remèdes",
      "Appliquer la règle de Taylor et analyser l'épisode de resserrement 2022-2025 et ses suites"
     ],
     "sections": [
      {
       "titre": "Objectifs : stabilité des prix et mandat dual",
       "contenu": "<p>La politique monétaire est l'action de la banque centrale sur les conditions monétaires et financières (taux d'intérêt, liquidité, quantité de monnaie de banque centrale) afin d'atteindre des objectifs macroéconomiques. Depuis les années 1990, un consensus s'est formé autour de trois idées : à long terme, la monnaie est neutre et l'inflation est un phénomène monétaire ; une inflation basse et stable est le meilleur service que la banque centrale puisse rendre à la croissance ; à court terme, du fait des rigidités nominales, la politique monétaire influence l'activité et peut stabiliser les chocs de demande.</p>\n<p>Deux types de mandats coexistent :</p>\n<ul><li>Un <strong>mandat hiérarchique</strong> : l'article 127 du Traité sur le fonctionnement de l'Union européenne assigne à l'Eurosystème l'objectif principal de <strong>stabilité des prix</strong> ; « sans préjudice » de cet objectif, il soutient les politiques économiques générales de l'Union (croissance, emploi).</li>\n<li>Un <strong>mandat dual</strong> : la Réserve fédérale américaine doit promouvoir le plein emploi (« maximum employment ») et la stabilité des prix (Federal Reserve Reform Act de 1977, qui mentionne aussi des taux d'intérêt de long terme modérés).</li></ul>\n<p>La quasi-totalité des grandes banques centrales ont adopté une <strong>cible d'inflation</strong> chiffrée, depuis la Nouvelle-Zélande en 1990. La BCE vise <strong>2 % à moyen terme</strong>, de façon <strong>symétrique</strong> depuis la revue stratégique de juillet 2021 (auparavant : « inférieur à, mais proche de 2 % »), mesurés par l'indice des prix à la consommation harmonisé (IPCH). La Fed vise 2 % mesurés par le déflateur des dépenses de consommation personnelle (PCE), cible explicite depuis janvier 2012.</p>\n<p>Pourquoi 2 % et pas 0 % ? Les indices surestiment légèrement l'inflation (effets qualité), une inflation faiblement positive facilite l'ajustement des salaires réels en présence de rigidité à la baisse des salaires nominaux, et elle maintient les taux nominaux suffisamment au-dessus de zéro pour laisser une marge de baisse en cas de récession.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> un mandat hiérarchique ne signifie pas que la BCE ignore l'activité. Dans le cadre de nouveaux keynésiens, stabiliser l'inflation stabilise aussi l'écart de production face aux chocs de demande (« divine coïncidence », Blanchard et Galí 2007). Le dilemme n'apparaît que face aux chocs d'offre, qui poussent inflation et chômage dans le même sens.</div>"
      },
      {
       "titre": "Organisation de la BCE et de la Fed",
       "contenu": "<p>L'<strong>Eurosystème</strong> regroupe la BCE et les banques centrales nationales des pays de la zone euro (vingt et un pays depuis l'entrée de la Bulgarie le 1<sup>er</sup> janvier 2026). Le <strong>Conseil des gouverneurs</strong>, qui décide de la politique monétaire, réunit les six membres du <strong>directoire</strong> (président, vice-président et quatre membres nommés pour huit ans non renouvelables) et les gouverneurs des banques centrales nationales, avec une rotation des droits de vote des gouverneurs depuis 2015. Il se réunit toutes les six semaines pour les décisions de politique monétaire. Christine Lagarde préside la BCE depuis novembre 2019. L'indépendance est garantie par le Traité (article 130 TFUE) : interdiction de solliciter ou de recevoir des instructions, et interdiction du financement monétaire des États (article 123 TFUE), qui exclut l'achat de titres publics sur le marché primaire.</p>\n<p>Le <strong>Système de réserve fédérale</strong> (créé en 1913) comprend le <strong>Conseil des gouverneurs</strong> à Washington (sept membres nommés par le président des États-Unis et confirmés par le Sénat, pour quatorze ans) et douze banques fédérales régionales. Le <strong>Federal Open Market Committee</strong> (FOMC), qui fixe la politique monétaire, compte douze votants : les sept gouverneurs, le président de la Fed de New York et quatre présidents de banques régionales par rotation ; il se réunit huit fois par an. Kevin Warsh a succédé à Jerome Powell à la présidence en mai 2026.</p>\n<table><thead><tr><th></th><th>BCE</th><th>Fed</th></tr></thead>\n<tbody><tr><td>Mandat</td><td>Hiérarchique : stabilité des prix</td><td>Dual : emploi et prix</td></tr>\n<tr><td>Cible</td><td>2 % symétrique, IPCH, moyen terme</td><td>2 %, déflateur PCE</td></tr>\n<tr><td>Taux directeur pilote</td><td>Taux de la facilité de dépôt</td><td>Fourchette cible du taux des fonds fédéraux</td></tr>\n<tr><td>Organe de décision</td><td>Conseil des gouverneurs</td><td>FOMC</td></tr>\n<tr><td>Fondement de l'indépendance</td><td>Traité européen (révision à l'unanimité)</td><td>Loi fédérale (modifiable par le Congrès)</td></tr></tbody></table>"
      },
      {
       "titre": "Les instruments : taux directeurs, corridor, open market et réserves",
       "contenu": "<p>Les banques commerciales ont besoin de <strong>monnaie de banque centrale</strong> (billets et réserves sur leur compte à la banque centrale) pour faire face aux retraits, aux paiements interbancaires et aux réserves obligatoires. La banque centrale, monopoleur de cette monnaie, en fixe le prix : c'est le principe des taux directeurs.</p>\n<h4>Le corridor de la BCE</h4>\n<p>La BCE fixe trois taux :</p>\n<ul><li>le taux de la <strong>facilité de dépôt</strong> (rémunération des dépôts au jour le jour des banques), plancher du corridor ;</li>\n<li>le taux des <strong>opérations principales de refinancement</strong> (prêts hebdomadaires contre garanties) ;</li>\n<li>le taux de la <strong>facilité de prêt marginal</strong> (prêt au jour le jour à la demande, contre garanties), plafond du corridor.</li></ul>\n<p>Aucune banque n'empruntera sur le marché interbancaire au-dessus du taux de prêt marginal ni ne prêtera en dessous du taux de dépôt : le taux du marché monétaire au jour le jour (l'€STR) reste dans le corridor. En <strong>système de corridor</strong> (liquidité rare), il se situe près du taux de refinancement. Depuis la crise financière et surtout les achats massifs de titres, l'excédent de liquidité est considérable : on est en <strong>système de plancher</strong>, où l'€STR se fixe juste sous le taux de la facilité de dépôt, qui est devenu le véritable taux directeur. Depuis septembre 2024, l'écart entre refinancement et dépôt est réduit à 0,15 point. Depuis le 16 septembre 2026, les trois taux sont de 2,50 %, 2,65 % et 2,90 % (décision du 10 septembre 2026).</p>\n<h4>Les opérations d'open market</h4>\n<p>Ce sont des opérations à l'initiative de la banque centrale : prêts à court ou long terme contre garanties (pensions, opérations de refinancement à plus long terme), achats fermes de titres (programmes d'achats d'actifs), émission de certificats de dette. La Fed pilote historiquement le taux des fonds fédéraux par des achats et ventes de titres du Trésor ; elle aussi opère désormais en système de plancher, avec la rémunération des réserves (IORB) et la facilité de prise en pension inversée au jour le jour.</p>\n<h4>Les réserves obligatoires</h4>\n<p>Les banques doivent détenir sur leur compte un pourcentage minimum de certains dépôts. Hausser le taux de réserve accroît le besoin de monnaie de banque centrale et peut freiner le crédit (c'est le multiplicateur monétaire des manuels). En pratique, cet instrument est devenu secondaire : le coefficient de la zone euro est de 1 % depuis 2012 et ces réserves ne sont plus rémunérées depuis septembre 2023 ; la Fed a fixé le sien à zéro en mars 2020. Dans un système de plancher, les réserves détenues dépassent largement le minimum requis.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la banque centrale contrôle un taux très court (taux au jour le jour). Tout l'enjeu de la transmission est de faire passer ce signal aux taux longs, aux taux des crédits, aux prix d'actifs et au change, qui déterminent la demande.</div>"
      },
      {
       "titre": "Les canaux de transmission",
       "contenu": "<p>Une baisse des taux directeurs agit sur l'économie par plusieurs canaux, avec des délais longs et variables (Friedman parlait de « long and variable lags ») : l'effet maximal sur l'activité est souvent estimé autour d'un an, et sur l'inflation entre un et deux ans.</p>\n<ol><li><strong>Canal des taux d'intérêt</strong> : avec des prix rigides, une baisse du taux nominal court réduit le taux réel (<em>r</em> = <em>i</em> − π<sup>e</sup>, relation de Fisher) ; via la structure par terme (théorie des anticipations), les taux longs baissent aussi. Le coût d'usage du capital diminue, l'investissement et la consommation de biens durables augmentent. C'est le canal de la courbe IS.</li>\n<li><strong>Canal du crédit</strong> (Bernanke et Blinder 1988, Bernanke et Gertler 1995) : le canal du <strong>prêt bancaire</strong> (plus de liquidités et de marges permettent aux banques de prêter davantage, ce qui compte pour les PME qui dépendent des banques) et le canal du <strong>bilan</strong> (la baisse des taux améliore la valeur nette des emprunteurs et réduit la prime de financement externe). Le canal de la <strong>prise de risque</strong> (Borio et Zhu 2012) y ajoute la recherche de rendement des intermédiaires.</li>\n<li><strong>Canal du change</strong> : selon la parité des taux d'intérêt non couverte, une baisse des taux domestiques déprécie la monnaie, ce qui stimule les exportations nettes et accroît directement les prix des importations. Ce canal est plus puissant dans les petites économies ouvertes.</li>\n<li><strong>Canal du prix des actifs</strong> : la baisse des taux élève la valeur actualisée des dividendes et des loyers. La hausse des cours boursiers stimule l'investissement (q de Tobin) et la hausse du patrimoine des ménages stimule la consommation (effet richesse, cycle de vie).</li>\n<li><strong>Canal des anticipations</strong> : si la banque centrale est crédible, l'annonce de la trajectoire future des taux suffit à faire bouger les taux longs et à ancrer les anticipations d'inflation, qui alimentent la formation des prix et des salaires (courbe de Phillips augmentée des anticipations).</li></ol>\n<p>Dans la zone euro, où le financement des entreprises est majoritairement bancaire et où les crédits immobiliers sont souvent à taux fixe (France), la transmission passe par le canal du crédit et touche surtout la <strong>nouvelle</strong> production de crédits ; aux États-Unis, le rôle des marchés financiers et des taux hypothécaires de long terme est plus important.</p>\n<h4>La règle de Taylor</h4>\n<p>Taylor (1993) a montré que le taux des fonds fédéraux entre 1987 et 1992 était bien décrit par :</p>\n<p class=\"eq\"><em>i</em> = <em>r</em>* + π + 0,5 (π − π*) + 0,5 (<em>y</em> − <em>y<sub>n</sub></em>)</p>\n<p>où <em>r</em>* est le taux réel neutre (2 % chez Taylor), π* la cible d'inflation et <em>y</em> − <em>y<sub>n</sub></em> l'écart de production en pourcentage. Le coefficient total sur l'inflation vaut 1,5 &gt; 1 : c'est le <strong>principe de Taylor</strong>. Quand l'inflation augmente d'un point, le taux nominal augmente de 1,5 point, donc le taux réel augmente, ce qui freine la demande et stabilise l'inflation. Avec un coefficient inférieur à 1, une hausse de l'inflation ferait baisser le taux réel, relancerait la demande et entretiendrait l'inflation (et les anticipations pourraient devenir auto-réalisatrices).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> une banque centrale suit la règle de Taylor avec <em>r</em>* = 1 %, π* = 2 %, coefficients 0,5 et 0,5.<br>1) Si π = 4 % et un écart de production de −1 % : <em>i</em> = 1 + 4 + 0,5 × 2 + 0,5 × (−1) = 5,5 %. Le taux réel ex post vaut 5,5 − 4 = 1,5 %, supérieur au taux neutre : la politique est restrictive.<br>2) Si π = 2 % et l'écart de production −4 % : <em>i</em> = 1 + 2 + 0 − 2 = 1 %.<br>3) Si π = 0 % et l'écart −6 % : <em>i</em> = 1 + 0 − 1 − 3 = −3 %. La règle prescrit un taux négatif inaccessible au-delà d'une limite proche de zéro : c'est la borne à zéro, qui justifie le recours à des instruments non conventionnels.<br>4) Si l'inflation passe de 2 % à 3 % à écart nul, le taux passe de 3 % à 4,5 % : +1,5 point, conforme au principe de Taylor.</div>"
      },
      {
       "titre": "Borne à zéro et politiques non conventionnelles",
       "contenu": "<p>Le taux nominal ne peut pas descendre beaucoup sous zéro, car les agents peuvent détenir des billets, de rendement nul : c'est la <strong>borne à zéro</strong> (ou borne inférieure effective, légèrement négative compte tenu des coûts de stockage des billets). Quand le taux recommandé par la règle de Taylor est négatif, comme en 2009 ou en 2020, la politique conventionnelle est épuisée et l'économie risque la <strong>trappe à liquidité</strong> de Keynes, voire une spirale déflationniste : la baisse des prix accroît le taux réel <em>r</em> = <em>i</em> − π<sup>e</sup> à taux nominal bloqué, ce qui déprime encore la demande (Fisher 1933 y ajoute l'alourdissement réel des dettes).</p>\n<h4>Les instruments non conventionnels</h4>\n<ul><li><strong>Assouplissement quantitatif</strong> (QE) : achats massifs de titres publics et privés de long terme, financés par création de réserves. Il agit par le canal du <strong>rééquilibrage de portefeuille</strong> (en retirant des titres longs, la banque centrale réduit la prime de terme et pousse les investisseurs vers d'autres actifs), par le signal sur les taux futurs et par le change. La Fed lance son premier programme en novembre 2008 ; la BCE lance son programme d'achats d'actifs (APP) à grande échelle en mars 2015, puis le programme d'urgence pandémique (PEPP, enveloppe finale de 1 850 milliards d'euros) en 2020. Le bilan de l'Eurosystème a culminé autour de 8 800 milliards d'euros en 2022.</li>\n<li><strong>Indications sur la trajectoire future des taux</strong> (forward guidance) : la banque centrale s'engage à maintenir les taux bas longtemps, ce qui abaisse les taux longs (BCE à partir de juillet 2013). Elle peut être qualitative, liée à une date ou conditionnée à des seuils (taux de chômage, inflation).</li>\n<li><strong>Taux négatifs</strong> : la BCE a porté son taux de dépôt à −0,10 % en juin 2014 et jusqu'à −0,50 % en 2019, avant d'en sortir en juillet 2022. Ils pèsent sur les marges bancaires, ce qui a conduit à un système d'exemption partielle (le « tiering » en 2019).</li>\n<li><strong>Prêts ciblés de long terme</strong> aux banques (TLTRO de la BCE à partir de 2014), conditionnés au crédit accordé aux entreprises et aux ménages.</li></ul>\n<p>Les études concluent que ces instruments ont réduit les taux longs et soutenu l'activité, avec des effets décroissants. Leurs coûts sont discutés : risques pour la stabilité financière (bulles), effets redistributifs (hausse des prix d'actifs détenus par les plus aisés), pertes des banques centrales quand les taux remontent, et accusation de financement monétaire déguisé des États.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> le QE ne consiste pas à « imprimer des billets » : il crée des <strong>réserves</strong> bancaires, qui ne circulent pas dans l'économie réelle. Son effet sur l'inflation dépend de la transmission aux taux et aux anticipations, pas d'un multiplicateur monétaire mécanique, d'ailleurs effondré pendant les années 2010.</div>"
      },
      {
       "titre": "Incohérence temporelle, crédibilité et indépendance",
       "contenu": "<p>Kydland et Prescott (« Rules rather than discretion », 1977) montrent qu'une politique optimale annoncée aujourd'hui peut ne plus l'être demain, une fois que les agents ont formé leurs anticipations : c'est l'<strong>incohérence temporelle</strong>. Barro et Gordon (1983) l'appliquent à la politique monétaire.</p>\n<h4>Le modèle de Barro-Gordon</h4>\n<p>L'offre est donnée par une courbe de Phillips augmentée des anticipations (Lucas) : <em>y</em> = <em>y<sub>n</sub></em> + <em>b</em> (π − π<sup>e</sup>), <em>b</em> &gt; 0. La banque centrale minimise la perte :</p>\n<p class=\"eq\"><em>L</em> = (1/2) π<sup>2</sup> + (λ/2) (<em>y</em> − <em>y<sub>n</sub></em> − <em>k</em>)<sup>2</sup>, avec <em>k</em> &gt; 0</p>\n<p>Elle vise une production supérieure à son niveau naturel (<em>k</em> &gt; 0), par exemple parce que les distorsions (impôts, pouvoir de marché) rendent ce niveau inefficacement bas. Les agents fixent π<sup>e</sup> rationnellement, puis la banque centrale choisit π.</p>\n<p><strong>Discrétion</strong> : la banque centrale prend π<sup>e</sup> comme donné et minimise <em>L</em>. En substituant <em>y</em> : <em>L</em> = (1/2) π<sup>2</sup> + (λ/2) [<em>b</em> (π − π<sup>e</sup>) − <em>k</em>]<sup>2</sup>. La condition du premier ordre est :</p>\n<p class=\"eq\">π + λ <em>b</em> [<em>b</em> (π − π<sup>e</sup>) − <em>k</em>] = 0</p>\n<p>Les agents l'anticipent : à l'équilibre, π = π<sup>e</sup>, d'où :</p>\n<p class=\"eq\">π<sup>D</sup> = λ <em>b</em> <em>k</em> &gt; 0 et <em>y</em> = <em>y<sub>n</sub></em></p>\n<p>C'est le <strong>biais inflationniste</strong> : l'inflation est positive sans aucun gain de production, car les agents ne sont pas dupes. <strong>Engagement</strong> : si la banque centrale peut s'engager de façon crédible sur π = 0, alors π<sup>e</sup> = 0 et <em>y</em> = <em>y<sub>n</sub></em> ; la perte est plus faible (le terme (λ/2) <em>k</em><sup>2</sup> est commun aux deux situations, le terme (1/2) π<sup>2</sup> disparaît). Mais l'engagement n'est pas cohérent temporellement : une fois π<sup>e</sup> = 0 fixé, la banque centrale a intérêt à surprendre avec π = λ <em>b k</em> / (1 + λ <em>b</em><sup>2</sup>) pour obtenir un supplément de production. Exemple chiffré : avec λ = 1, <em>b</em> = 1 et <em>k</em> = 2, l'inflation de discrétion est de 2 %, contre 0 % sous engagement, pour la même production.</p>\n<h4>Les remèdes</h4>\n<ul><li><strong>Règles</strong> inscrites dans des institutions difficiles à modifier ;</li>\n<li><strong>Réputation</strong> : dans un jeu répété, la banque centrale renonce à surprendre pour préserver sa crédibilité (Barro et Gordon 1983) ;</li>\n<li><strong>Banquier central conservateur</strong> (Rogoff 1985) : déléguer à un dirigeant qui accorde moins de poids à la production (λ plus faible) réduit le biais λ<em>bk</em>, au prix d'une moindre stabilisation des chocs ;</li>\n<li><strong>Contrats incitatifs</strong> (Walsh 1995) et <strong>ciblage d'inflation</strong> transparent ;</li>\n<li><strong>Indépendance</strong> de la banque centrale vis-à-vis du pouvoir politique, qui a des incitations électorales à surprendre.</li></ul>\n<p>Alesina et Summers (1993) trouvent, sur les pays de l'OCDE, une corrélation négative entre indépendance de la banque centrale et inflation moyenne, sans coût apparent en croissance. La vague d'indépendance des années 1990 (Banque de France en 1993, Banque d'Angleterre en 1997, BCE en 1998) s'appuie sur ces travaux. Les critiques portent sur le déficit démocratique et sur la coordination avec la politique budgétaire, ravivées en 2025-2026 par les pressions politiques exercées sur la Fed.</p>"
      },
      {
       "titre": "Le resserrement de 2022-2025 et ses suites",
       "contenu": "<p>À partir de 2021, l'inflation remonte fortement : réouverture post-Covid et goulets d'étranglement, soutien budgétaire massif aux États-Unis, puis choc énergétique et alimentaire lié à l'invasion de l'Ukraine en février 2022. L'inflation atteint 9,1 % sur un an aux États-Unis en juin 2022 (indice des prix à la consommation) et 10,6 % dans la zone euro en octobre 2022 (IPCH). Les banques centrales, qui avaient d'abord jugé l'inflation « transitoire », réagissent tardivement mais vigoureusement.</p>\n<table><thead><tr><th>Étape</th><th>Fed (fourchette des fonds fédéraux)</th><th>BCE (taux de la facilité de dépôt)</th></tr></thead>\n<tbody><tr><td>Point de départ</td><td>0 à 0,25 % ; première hausse en mars 2022</td><td>−0,50 % ; première hausse en juillet 2022</td></tr>\n<tr><td>Sommet</td><td>5,25 à 5,50 % (juillet 2023)</td><td>4,00 % (septembre 2023)</td></tr>\n<tr><td>Assouplissement</td><td>baisses à partir de septembre 2024, jusqu'à 3,50 à 3,75 % (décembre 2025)</td><td>baisses à partir de juin 2024, jusqu'à 2,00 % (juin 2025)</td></tr>\n<tr><td>2026</td><td>hausse à 3,75 à 4,00 % le 16 septembre 2026</td><td>hausses en juin et septembre 2026 : 2,50 % depuis le 16 septembre 2026</td></tr></tbody></table>\n<p>Le resserrement de 2022-2023 est le plus rapide depuis les années 1980 : +4,5 points en quatorze mois pour la BCE, +5,25 points en seize mois pour la Fed. Il s'est accompagné d'une réduction des bilans (fin des réinvestissements, remboursement des TLTRO) et, dans la zone euro, d'un nouvel instrument de protection de la transmission (TPI, juillet 2022) destiné à éviter un écartement injustifié des taux souverains. L'inflation est revenue près de 2 % en 2025 sans récession majeure aux États-Unis, ce qui a été attribué à l'<strong>ancrage des anticipations</strong> d'inflation de long terme, resté solide grâce à la crédibilité acquise depuis les années 1990, et au reflux des chocs d'offre.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> en 2026, un nouveau choc énergétique lié aux tensions au Moyen-Orient (pétrole repassé au-dessus de 100 dollars le baril selon la presse financière) a fait remonter l'inflation de la zone euro au-dessus de 3 % pendant l'été. La BCE a relevé ses taux de 0,25 point le 11 juin puis le 10 septembre 2026, en invoquant le risque d'effets de second tour (indexation des salaires et des prix) ; ses projections de septembre 2026 prévoyaient une inflation de 3,0 % en 2026 et un retour vers 2 % en 2028. C'est le dilemme typique d'un <strong>choc d'offre</strong> : la hausse des taux freine une activité déjà affaiblie, mais laisser filer l'inflation risquerait de désancrer les anticipations, ce que la leçon des années 1970 incite à éviter.</div>"
      }
     ],
     "points_cles": [
      "BCE : mandat hiérarchique, stabilité des prix, cible symétrique de 2 % à moyen terme (IPCH) depuis 2021 ; Fed : mandat dual emploi-prix, 2 % mesuré par le déflateur PCE.",
      "Corridor de la BCE : facilité de dépôt (plancher), refinancement principal, prêt marginal (plafond) ; en excès de liquidité, le taux de dépôt est le taux directeur effectif.",
      "Taux BCE depuis le 16 septembre 2026 : dépôt 2,50 %, refinancement 2,65 %, prêt marginal 2,90 %.",
      "Réserves obligatoires : instrument devenu secondaire (1 % dans la zone euro, 0 % aux États-Unis depuis 2020).",
      "Cinq canaux de transmission : taux d'intérêt, crédit (prêt bancaire et bilan), change, prix d'actifs, anticipations ; délais longs et variables.",
      "Règle de Taylor (1993) : i = r* + π + 0,5(π − π*) + 0,5(y − yn) ; principe de Taylor : le taux nominal réagit plus qu'un pour un à l'inflation.",
      "Borne à zéro : quand la règle prescrit un taux négatif, la politique conventionnelle est épuisée ; risque de spirale déflationniste.",
      "Non conventionnel : QE (rééquilibrage de portefeuille, baisse de la prime de terme), forward guidance, taux négatifs (BCE 2014-2022), prêts ciblés.",
      "Kydland-Prescott (1977) : incohérence temporelle ; Barro-Gordon (1983) : biais inflationniste de discrétion π = λbk sans gain de production.",
      "Remèdes : règles, réputation, banquier central conservateur (Rogoff 1985), contrats (Walsh 1995), indépendance ; corrélation négative indépendance-inflation (Alesina-Summers 1993).",
      "Resserrement 2022-2023 : Fed de 0-0,25 % à 5,25-5,50 % ; BCE de −0,50 % à 4 % ; retour de l'inflation vers 2 % en 2025 grâce à l'ancrage des anticipations.",
      "2026 : nouveau choc énergétique ; BCE (juin et septembre) et Fed (septembre) relèvent à nouveau leurs taux."
     ],
     "lexique": [
      {
       "terme": "Mandat dual",
       "def": "Mandat confiant à la banque centrale deux objectifs de même rang, l'emploi maximal et la stabilité des prix (Fed)."
      },
      {
       "terme": "Cible d'inflation",
       "def": "Taux d'inflation chiffré que la banque centrale s'engage à atteindre à moyen terme, 2 % pour la BCE et la Fed."
      },
      {
       "terme": "Facilité de dépôt",
       "def": "Possibilité pour les banques de déposer leurs liquidités au jour le jour à la BCE à un taux fixé, plancher du corridor."
      },
      {
       "terme": "Corridor",
       "def": "Intervalle entre le taux de la facilité de dépôt et celui de la facilité de prêt marginal, dans lequel évolue le taux interbancaire au jour le jour."
      },
      {
       "terme": "Opération d'open market",
       "def": "Opération à l'initiative de la banque centrale (prêt contre garanties ou achat de titres) qui modifie la liquidité des banques."
      },
      {
       "terme": "Règle de Taylor",
       "def": "Règle de fixation du taux directeur en fonction de l'écart d'inflation à la cible et de l'écart de production (Taylor 1993)."
      },
      {
       "terme": "Borne à zéro",
       "def": "Limite inférieure des taux nominaux, proche de zéro, due à la possibilité de détenir des billets de rendement nul."
      },
      {
       "terme": "Assouplissement quantitatif",
       "def": "Achat massif de titres de long terme par la banque centrale, financé par création de réserves, pour réduire les taux longs."
      },
      {
       "terme": "Forward guidance",
       "def": "Communication de la banque centrale sur la trajectoire future de ses taux, destinée à influencer les taux longs et les anticipations."
      },
      {
       "terme": "Incohérence temporelle",
       "def": "Situation où une politique optimale annoncée cesse d'être optimale une fois les anticipations des agents formées (Kydland-Prescott 1977)."
      },
      {
       "terme": "Biais inflationniste",
       "def": "Inflation excessive, sans gain de production, résultant d'une politique discrétionnaire anticipée par les agents (Barro-Gordon 1983)."
      },
      {
       "terme": "Banquier central conservateur",
       "def": "Dirigeant plus averse à l'inflation que la société, dont la nomination réduit le biais inflationniste (Rogoff 1985)."
      },
      {
       "terme": "Effets de second tour",
       "def": "Propagation d'un choc de prix initial (énergie) aux salaires et aux autres prix, qui rend l'inflation persistante."
      }
     ],
     "qcm": [
      {
       "q": "Quelle proposition sur les mandats des banques centrales est exacte ?",
       "options": [
        "La BCE a un mandat dual identique à celui de la Fed",
        "La Fed doit poursuivre l'emploi maximal et la stabilité des prix, sans hiérarchie entre les deux",
        "La BCE ne peut pas tenir compte de l'activité économique",
        "La Fed vise une inflation de 2 % mesurée par l'indice des prix à la consommation harmonisé"
       ],
       "bonnes": [
        1
       ],
       "explication": "La Fed a un mandat dual depuis 1977. La BCE a un mandat hiérarchique : la stabilité des prix d'abord, puis, sans préjudice de celle-ci, le soutien aux politiques économiques. La cible de la Fed porte sur le déflateur PCE."
      },
      {
       "q": "Dans un système de plancher avec excédent de liquidité, quel taux le taux interbancaire au jour le jour (€STR) suit-il de près ?",
       "options": [
        "Le taux de la facilité de prêt marginal",
        "Le taux des opérations principales de refinancement",
        "Le taux de la facilité de dépôt",
        "Le taux de réserve obligatoire"
       ],
       "bonnes": [
        2
       ],
       "explication": "Quand les banques ont des liquidités excédentaires, elles les prêtent au jour le jour à un taux proche de ce qu'elles obtiendraient en les déposant à la BCE : l'€STR se fixe juste sous le taux de la facilité de dépôt."
      },
      {
       "q": "Quelles propositions sur les taux directeurs de la BCE sont exactes ? (deux réponses)",
       "options": [
        "Depuis le 16 septembre 2026, le taux de la facilité de dépôt est de 2,50 %",
        "Le taux de dépôt a été négatif de 2014 à 2022",
        "Le taux de la facilité de prêt marginal est le plancher du corridor",
        "La BCE n'a pas modifié ses taux en 2026"
       ],
       "bonnes": [
        0,
        1
       ],
       "explication": "La BCE a relevé ses taux en juin puis en septembre 2026, portant le taux de dépôt à 2,50 %. Il avait été négatif de juin 2014 (−0,10 %) à juillet 2022. Le prêt marginal est le plafond, non le plancher."
      },
      {
       "q": "Avec la règle i = 2 % + π + 0,5(π − 2 %) + 0,5 × écart de production, quel taux est prescrit si π = 3 % et l'écart de production vaut +1 % ?",
       "options": [
        "5 %",
        "4,5 %",
        "5,5 %",
        "6 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "i = 2 + 3 + 0,5 × 1 + 0,5 × 1 = 6 %. Le taux réel correspondant (6 − 3 = 3 %) dépasse le taux neutre de 2 % : la politique est restrictive."
      },
      {
       "q": "Que signifie le principe de Taylor ?",
       "options": [
        "Le taux réel doit toujours être égal au taux neutre",
        "Le taux nominal doit augmenter de plus d'un point quand l'inflation augmente d'un point",
        "La banque centrale doit réagir davantage à l'écart de production qu'à l'inflation",
        "Le taux nominal ne peut pas être négatif"
       ],
       "bonnes": [
        1
       ],
       "explication": "Un coefficient total supérieur à 1 sur l'inflation garantit que le taux réel augmente quand l'inflation monte, ce qui freine la demande et stabilise l'inflation. Avec un coefficient inférieur à 1, le taux réel baisserait et l'inflation s'auto-entretiendrait."
      },
      {
       "q": "Quelles propositions sur les canaux de transmission d'une hausse des taux directeurs sont exactes ? (deux réponses)",
       "options": [
        "Elle tend à apprécier la monnaie nationale, ce qui réduit l'inflation importée",
        "Elle accroît la valeur des actions par la baisse du taux d'actualisation",
        "Elle dégrade la valeur nette des emprunteurs et accroît la prime de financement externe",
        "Elle n'a d'effet qu'au moment où les crédits en cours sont renégociés"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Par la parité des taux d'intérêt, la hausse des taux apprécie la monnaie. Par le canal du bilan, elle réduit la valeur nette et renchérit le financement externe. Elle fait baisser, et non monter, la valeur actualisée des actifs ; et elle agit aussi sur les nouveaux crédits et les anticipations."
      },
      {
       "q": "Pourquoi la borne à zéro pose-t-elle problème en cas de déflation ?",
       "options": [
        "Parce que les banques centrales ne peuvent plus acheter de titres",
        "Parce que le taux réel i − π^e augmente quand l'inflation anticipée baisse, à taux nominal bloqué",
        "Parce que la monnaie perd sa valeur",
        "Parce que l'équivalence ricardienne cesse de s'appliquer"
       ],
       "bonnes": [
        1
       ],
       "explication": "Si i est bloqué à zéro et que π^e devient négative, le taux réel r = i − π^e monte, ce qui freine encore la demande et peut alimenter une spirale déflationniste. Les achats de titres (QE) restent au contraire possibles."
      },
      {
       "q": "Dans le modèle de Barro-Gordon avec y = yn + b(π − π^e) et L = π²/2 + (λ/2)(y − yn − k)², quelle est l'inflation de discrétion si λ = 0,5, b = 2 et k = 3 ?",
       "options": [
        "1,5 %",
        "0 %",
        "6 %",
        "3 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "π = λbk = 0,5 × 2 × 3 = 3 %, avec y = yn : l'inflation est positive sans aucun gain de production, car les agents l'anticipent."
      },
      {
       "q": "Quelles propositions sur l'incohérence temporelle sont exactes ? (deux réponses)",
       "options": [
        "Sous engagement crédible, l'inflation est nulle et la production est égale à son niveau naturel",
        "Sous discrétion, la banque centrale obtient durablement une production supérieure à son niveau naturel",
        "Nommer un banquier central plus conservateur que la société réduit le biais inflationniste",
        "Une fois les anticipations fixées à zéro, la banque centrale n'a aucune incitation à s'écarter de π = 0"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Sous engagement, π = π^e = 0 et y = yn. Un λ plus faible (Rogoff 1985) réduit le biais λbk. Sous discrétion, la production reste égale à yn car les agents anticipent l'inflation ; et une fois π^e = 0, la banque centrale a intérêt à surprendre, d'où l'incohérence temporelle."
      },
      {
       "q": "Quel est le principal canal d'action de l'assouplissement quantitatif selon la théorie du rééquilibrage de portefeuille ?",
       "options": [
        "La hausse du multiplicateur monétaire",
        "La distribution directe de monnaie aux ménages",
        "La hausse des réserves obligatoires",
        "La baisse de la prime de terme et des rendements des titres longs"
       ],
       "bonnes": [
        3
       ],
       "explication": "En retirant des titres longs du marché, la banque centrale fait monter leur prix et baisser leur rendement ; les investisseurs se reportent vers d'autres actifs, ce qui baisse le coût du financement de l'économie."
      },
      {
       "q": "De combien la BCE a-t-elle relevé son taux de dépôt entre juillet 2022 et septembre 2023 ?",
       "options": [
        "4,5 points, de −0,50 % à 4,00 %",
        "4 points, de 0 % à 4 %",
        "5,25 points, de 0,25 % à 5,50 %",
        "2,5 points, de 0 % à 2,50 %"
       ],
       "bonnes": [
        0
       ],
       "explication": "Le taux de dépôt est passé de −0,50 % à 4,00 %, soit +4,5 points en quatorze mois. La hausse de 5,25 points concerne la Fed, dont la fourchette est passée de 0-0,25 % à 5,25-5,50 %."
      }
     ]
    },
    {
     "id": "mac4-politique-budgetaire-dette",
     "titre": "La politique budgétaire et la dette publique",
     "duree": 55,
     "niveau": "L2",
     "objectifs": [
      "Distinguer solde public, solde primaire, solde conjoncturel et solde structurel, et calculer l'un à partir des autres",
      "Expliquer le rôle des stabilisateurs automatiques et le débat empirique sur les multiplicateurs (Blanchard-Leigh 2013)",
      "Dériver l'équation de dynamique de la dette et le solde primaire stabilisant",
      "Interpréter la contrainte budgétaire intertemporelle de l'État et les critères de soutenabilité",
      "Connaître les règles budgétaires européennes, de Maastricht à la réforme de 2024",
      "Situer la France : déficit, dette, prélèvements obligatoires en 2025"
     ],
     "sections": [
      {
       "titre": "Le solde public et ses décompositions",
       "contenu": "<p>Les <strong>administrations publiques</strong> (APU) regroupent l'État, les organismes divers d'administration centrale, les administrations locales et les administrations de sécurité sociale. Leur <strong>solde public</strong> (capacité ou besoin de financement, au sens de Maastricht) est la différence entre leurs recettes et leurs dépenses :</p>\n<p class=\"eq\">Solde = <em>T</em> − <em>G</em> − <em>i B</em><sub>−1</sub></p>\n<p>où <em>T</em> désigne les recettes (impôts, cotisations sociales, autres recettes), <em>G</em> les dépenses hors intérêts (fonctionnement, transferts, investissement) et <em>i B</em><sub>−1</sub> la charge d'intérêts de la dette héritée. Un solde négatif est un <strong>déficit</strong>. Trois décompositions sont essentielles.</p>\n<h4>Solde primaire</h4>\n<p>Le <strong>solde primaire</strong> exclut la charge d'intérêts : <em>s</em> = <em>T</em> − <em>G</em>. Il mesure l'effort propre de l'année, indépendamment du poids de la dette passée. Un pays peut avoir un excédent primaire et un déficit total si la charge d'intérêts est lourde (l'Italie pendant de longues années).</p>\n<h4>Solde conjoncturel et solde structurel</h4>\n<p>Une partie du solde dépend de la position de l'économie dans le cycle. Le <strong>solde conjoncturel</strong> est la composante due à l'écart de production (<em>Y</em> − <em>Y</em>*)/<em>Y</em>* ; le <strong>solde structurel</strong> est le solde qu'on observerait si la production était à son niveau potentiel, hors mesures ponctuelles et temporaires :</p>\n<p class=\"eq\">Solde structurel = Solde − ε × écart de production − mesures ponctuelles</p>\n<p>La semi-élasticité ε du solde à l'écart de production est estimée autour de 0,5 pour la France et la zone euro (Commission européenne, OCDE) : un écart de production de −2 % dégrade le solde d'environ 1 point de PIB. La variation du solde structurel mesure l'<strong>orientation</strong> de la politique budgétaire : sa hausse traduit une consolidation (politique restrictive), sa baisse une impulsion expansionniste. La variation du solde structurel primaire est appelée <strong>effort</strong> ou impulsion budgétaire.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> le solde structurel n'est pas observable. Il dépend de l'estimation de la production potentielle, très incertaine et souvent révisée. En 2008-2009, les écarts de production estimés ont été largement révisés après coup, ce qui changeait du tout au tout le diagnostic sur l'effort structurel. Ne jamais présenter un solde structurel comme une donnée certaine.</div>"
      },
      {
       "titre": "Stabilisateurs automatiques et multiplicateurs",
       "contenu": "<p>Les <strong>stabilisateurs automatiques</strong> sont les composantes du budget qui varient spontanément avec la conjoncture, sans décision nouvelle : les recettes fiscales (surtout l'impôt progressif sur le revenu et l'impôt sur les sociétés, très cyclique) baissent en récession, tandis que certaines dépenses (indemnisation du chômage, minima sociaux) augmentent. Ils amortissent les fluctuations du revenu disponible. Dans le modèle keynésien avec impôt proportionnel <em>T</em> = <em>t Y</em>, le multiplicateur des dépenses passe de 1 / (1 − <em>c</em>) à 1 / [1 − <em>c</em> (1 − <em>t</em>)] : avec <em>c</em> = 0,8 et <em>t</em> = 0,4, il tombe de 5 à 1 / 0,52 ≈ 1,9. Leur importance est proportionnelle à la taille de l'État et à la progressivité du système : ils sont plus puissants en France (dépenses publiques autour de 57 % du PIB) qu'aux États-Unis.</p>\n<h4>Le débat empirique sur les multiplicateurs</h4>\n<p>Le <strong>multiplicateur budgétaire</strong> est la variation du PIB provoquée par une variation d'un euro des dépenses publiques (ou des impôts). En théorie, sa valeur va de 0 (néoclassique avec équivalence ricardienne et éviction totale) à plus de 2 (keynésien en économie fermée sans réaction monétaire). Sa valeur effective dépend :</p>\n<ul><li>de la <strong>réaction de la politique monétaire</strong> : si la banque centrale relève ses taux pour contrer l'expansion, le multiplicateur est faible ; à la <strong>borne à zéro</strong>, il est élevé (Christiano, Eichenbaum et Rebelo 2011) ;</li>\n<li>de la <strong>position dans le cycle</strong> : plus élevé en récession, quand les capacités sont sous-utilisées (Auerbach et Gorodnichenko 2012) ;</li>\n<li>de l'<strong>ouverture</strong> (fuites par les importations) et du <strong>régime de change</strong> (élevé en change fixe selon Mundell-Fleming) ;</li>\n<li>de la proportion de ménages contraints en liquidité, de l'état des finances publiques (une dette jugée insoutenable peut provoquer une hausse des primes de risque) et de l'instrument (investissement public, transferts ciblés, baisse d'impôts).</li></ul>\n<p>Les estimations sur données américaines en temps normal se situent souvent entre 0,5 et 1 pour les dépenses (synthèse de Ramey 2019), avec des valeurs plus élevées en récession ou à la borne à zéro.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> Blanchard et Leigh (2013), économistes du FMI, comparent pour les pays européens les prévisions de croissance de 2010-2011 et les réalisations. Ils constatent que les erreurs de prévision sont d'autant plus négatives que la consolidation budgétaire prévue était forte. Leur interprétation : les prévisionnistes supposaient un multiplicateur d'environ 0,5 alors qu'il était, dans le contexte de la crise (borne à zéro, synchronisation des consolidations, système financier fragile), supérieur d'environ 1, soit entre 0,9 et 1,7. Ce travail a nourri la critique des austérités simultanées de la zone euro et le débat sur l'« austérité expansionniste » (Alesina et Ardagna), dont les effets positifs supposés reposent sur la confiance et sur une baisse des taux d'intérêt.</div>"
      },
      {
       "titre": "La dynamique de la dette publique",
       "contenu": "<p>Soit <em>B<sub>t</sub></em> la dette nominale en fin d'année <em>t</em>, <em>i</em> le taux d'intérêt nominal apparent, <em>S<sub>t</sub></em> le solde primaire nominal. La dette de fin d'année est la dette héritée augmentée des intérêts et diminuée de l'excédent primaire :</p>\n<p class=\"eq\"><em>B<sub>t</sub></em> = (1 + <em>i</em>) <em>B</em><sub><em>t</em>−1</sub> − <em>S<sub>t</sub></em></p>\n<h4>Dérivation pas à pas en ratio du PIB</h4>\n<p>Notons <em>Y<sub>t</sub></em> le PIB nominal, qui croît au taux γ : <em>Y<sub>t</sub></em> = (1 + γ) <em>Y</em><sub><em>t</em>−1</sub>, et <em>b<sub>t</sub></em> = <em>B<sub>t</sub></em> / <em>Y<sub>t</sub></em>, <em>s<sub>t</sub></em> = <em>S<sub>t</sub></em> / <em>Y<sub>t</sub></em>. En divisant par <em>Y<sub>t</sub></em> :</p>\n<p class=\"eq\"><em>b<sub>t</sub></em> = [(1 + <em>i</em>) / (1 + γ)] <em>b</em><sub><em>t</em>−1</sub> − <em>s<sub>t</sub></em></p>\n<p>En retranchant <em>b</em><sub><em>t</em>−1</sub> des deux côtés :</p>\n<p class=\"eq\"><em>b<sub>t</sub></em> − <em>b</em><sub><em>t</em>−1</sub> = [(<em>i</em> − γ) / (1 + γ)] <em>b</em><sub><em>t</em>−1</sub> − <em>s<sub>t</sub></em></p>\n<p>Comme <em>i</em> − γ = (<em>r</em> + π) − (<em>g</em> + π) approximativement (relation de Fisher, avec <em>g</em> la croissance réelle), et en négligeant le dénominateur proche de 1 :</p>\n<p class=\"eq\">Δ<em>b</em> ≈ (<em>r</em> − <em>g</em>) <em>b</em> − <em>s</em></p>\n<p>Le ratio de dette augmente sous l'effet de l'<strong>effet boule de neige</strong> (<em>r</em> − <em>g</em>) <em>b</em> si le taux d'intérêt réel dépasse la croissance réelle, et diminue avec l'excédent primaire. L'inflation réduit le ratio de dette quand elle n'est pas anticipée au moment de l'émission (elle accroît γ sans accroître le taux apparent, qui porte sur un stock de titres émis dans le passé).</p>\n<h4>Le solde primaire stabilisant</h4>\n<p>Le ratio est stable (Δ<em>b</em> = 0) si :</p>\n<p class=\"eq\"><em>s</em>* = (<em>r</em> − <em>g</em>) <em>b</em></p>\n<p>Si <em>r</em> &gt; <em>g</em>, il faut dégager un excédent primaire d'autant plus grand que la dette est élevée ; si <em>r</em> &lt; <em>g</em>, un déficit primaire est compatible avec une dette stable. De même, le <strong>déficit total stabilisant</strong> vaut approximativement γ <em>b</em> : avec une croissance nominale de 3 % et une dette de 60 % du PIB, il est de 1,8 % ; avec une croissance nominale de 5 % (3 % réel et 2 % d'inflation), il vaut 3 %, ce qui est l'origine arithmétique du couple 3 % - 60 % de Maastricht. Graphiquement, dans le plan (<em>b</em><sub><em>t</em>−1</sub>, <em>b<sub>t</sub></em>), la relation est une droite de pente (1 + <em>i</em>) / (1 + γ) : si cette pente est supérieure à 1, l'état stationnaire est instable (la dette diverge dès qu'on s'en écarte) ; si elle est inférieure à 1, la dette converge vers <em>b</em>* = −<em>s</em> (1 + γ) / (γ − <em>i</em>).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> données simplifiées proches de la France (Insee, premiers résultats de mars 2026) : dette fin 2024 de 112,6 % du PIB, charge d'intérêts de 64,7 Md€ pour une dette initiale de 3 306 Md€, soit un taux apparent <em>i</em> ≈ 2,0 % ; croissance du PIB nominal en 2025 d'environ 2 % ; déficit total 5,1 % du PIB et charge d'intérêts de 2,2 % du PIB.<br>1) Solde primaire : −5,1 + 2,2 = −2,9 % du PIB.<br>2) Effet boule de neige : (<em>i</em> − γ) <em>b</em> ≈ (2,0 − 2,0) × 1,126 ≈ 0.<br>3) Variation prévue : Δ<em>b</em> ≈ 0 + 2,9 = +2,9 points, d'où une dette d'environ 115,5 % ; le ratio publié est 115,6 %, l'écart venant des ajustements stock-flux (trésorerie, opérations financières) et des arrondis.<br>4) Solde primaire stabilisant : <em>s</em>* = (<em>i</em> − γ) <em>b</em> ≈ 0 ; il faudrait donc réduire le déficit primaire d'environ 3 points de PIB pour stabiliser la dette, ou un déficit total ramené vers γ <em>b</em> ≈ 2 % × 1,156 ≈ 2,3 % du PIB.<br>5) Si le taux apparent montait à 3 % avec γ = 2 %, l'effet boule de neige ajouterait 0,01 × 1,156 ≈ 1,2 point de PIB par an : il faudrait un excédent primaire de 1,2 % pour stabiliser la dette.</div>"
      },
      {
       "titre": "Contrainte budgétaire intertemporelle et soutenabilité",
       "contenu": "<p>En itérant l'équation de la dette vers le futur (avec <em>r</em> et <em>g</em> constants, <em>r</em> &gt; <em>g</em>) :</p>\n<p class=\"eq\"><em>b</em><sub>0</sub> = Σ<sub><em>t</em>=1 à <em>N</em></sub> <em>s<sub>t</sub></em> / [(1 + <em>r</em>)/(1 + <em>g</em>)]<sup><em>t</em></sup> + <em>b<sub>N</sub></em> / [(1 + <em>r</em>)/(1 + <em>g</em>)]<sup><em>N</em></sup></p>\n<p>La <strong>condition de non-Ponzi</strong> (ou de transversalité) impose que le dernier terme tende vers zéro quand <em>N</em> tend vers l'infini : l'État ne peut pas rembourser indéfiniment sa dette par de nouveaux emprunts dont le ratio croîtrait plus vite que le facteur d'actualisation. On obtient la <strong>contrainte budgétaire intertemporelle de l'État</strong> :</p>\n<p class=\"eq\"><em>b</em><sub>0</sub> = Σ<sub><em>t</em>≥1</sub> <em>s<sub>t</sub></em> / [(1 + <em>r</em>)/(1 + <em>g</em>)]<sup><em>t</em></sup></p>\n<p>La dette actuelle doit être égale à la valeur actualisée des excédents primaires futurs. Un déficit aujourd'hui implique des excédents demain : c'est la base de l'équivalence ricardienne. La politique budgétaire est dite <strong>soutenable</strong> si elle respecte cette contrainte sans ajustement irréaliste. En pratique, on évalue la soutenabilité par l'<strong>écart de soutenabilité</strong> (différence entre le solde primaire stabilisant et le solde primaire prévu), par la réaction du solde primaire à la dette (test de Bohn 1998 : la dette est soutenable si les excédents primaires augmentent quand la dette augmente), par les besoins de financement annuels et par la structure de la dette (maturité, détenteurs, monnaie d'émission).</p>\n<h4>Le débat r &lt; g</h4>\n<p>Depuis les années 1990, le taux d'intérêt des dettes souveraines des grands pays avancés a souvent été inférieur à leur croissance nominale. Blanchard (discours à l'American Economic Association, 2019) en tire que le coût budgétaire de la dette peut être faible : avec <em>r</em> &lt; <em>g</em>, un déficit primaire temporaire laisse un ratio de dette qui finit par se stabiliser sans hausse d'impôts. Mais il souligne trois réserves : <em>r</em> peut remonter (ce qui s'est produit en 2022-2023), <em>r</em> dépend du niveau de dette lui-même (prime de risque), et des équilibres multiples sont possibles : si les marchés doutent, ils exigent un taux élevé qui rend la dette effectivement insoutenable (crise autoréalisatrice, Calvo 1988, De Grauwe 2011 pour la zone euro). L'avantage d'une banque centrale nationale prête à intervenir réduit ce risque, ce qui explique que le Japon s'endette plus que la Grèce à des taux bien inférieurs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> Δ<em>b</em> ≈ (<em>r</em> − <em>g</em>) <em>b</em> − <em>s</em>. Trois leviers font baisser le ratio de dette : un excédent primaire, une croissance forte, des taux bas (et l'inflation surprise). Un ratio élevé rend la dette très sensible à toute hausse de <em>r</em> − <em>g</em>.</div>"
      },
      {
       "titre": "Les règles budgétaires européennes",
       "contenu": "<p>Pourquoi des règles dans une union monétaire ? Un État très endetté fait peser sur les autres un risque d'externalité : pression sur la BCE pour monétiser, contagion financière, demandes d'aide. Le Traité de Maastricht (1992) institue la <strong>procédure de déficit excessif</strong> (PDE) avec deux valeurs de référence : un déficit public inférieur à <strong>3 % du PIB</strong> et une dette inférieure à <strong>60 % du PIB</strong> (ou diminuant à un rythme satisfaisant), et interdit le renflouement d'un État par les autres (clause de « no bail-out », article 125 TFUE).</p>\n<h4>Du Pacte de stabilité à la réforme de 2024</h4>\n<ul><li><strong>1997</strong> : Pacte de stabilité et de croissance (PSC), avec un volet préventif (objectif de moyen terme proche de l'équilibre) et un volet correctif (PDE, sanctions possibles jusqu'à 0,5 % du PIB).</li>\n<li><strong>2003-2005</strong> : la France et l'Allemagne, en déficit excessif, obtiennent la suspension de la procédure ; la réforme de 2005 assouplit le pacte (objectifs structurels, circonstances exceptionnelles).</li>\n<li><strong>2011-2013</strong> : après la crise des dettes souveraines, durcissement (« six-pack », « two-pack », Traité sur la stabilité, la coordination et la gouvernance de 2012 avec une règle de déficit structurel de 0,5 % du PIB, règle de réduction d'un vingtième par an de l'excès de dette au-dessus de 60 %).</li>\n<li><strong>2020-2023</strong> : activation de la clause dérogatoire générale pendant la crise sanitaire et la crise énergétique.</li></ul>\n<p>Les règles anciennes étaient critiquées : complexité, procyclicité (elles imposaient des consolidations en récession), dépendance au solde structurel inobservable, crédibilité faible (sanctions jamais appliquées). La <strong>réforme de 2024</strong> (entrée en vigueur le 30 avril 2024) conserve les références de 3 % et 60 % mais change l'architecture :</p>\n<ul><li>chaque État présente un <strong>plan budgétaire et structurel à moyen terme</strong> (PSMT) de quatre ans, extensible à sept ans en échange de réformes et d'investissements ;</li>\n<li>l'indicateur opérationnel unique est une <strong>trajectoire de dépenses primaires nettes</strong> (hors intérêts, hors mesures conjoncturelles de chômage, hors cofinancement de programmes européens, nettes des mesures discrétionnaires de recettes), établie à partir d'une analyse de soutenabilité de la dette, ce qui laisse jouer les stabilisateurs automatiques ;</li>\n<li>des <strong>clauses de sauvegarde</strong> : la dette doit baisser en moyenne d'au moins 1 point de PIB par an si elle dépasse 90 % du PIB, 0,5 point entre 60 % et 90 % ; l'ajustement continue jusqu'à un déficit structurel de 1,5 % du PIB (marge de résilience) ;</li>\n<li>en PDE, un ajustement structurel primaire minimal de 0,5 point de PIB par an.</li></ul>\n<p>En 2025, une clause dérogatoire nationale a été ouverte pour permettre une hausse des dépenses de défense (jusqu'à 1,5 point de PIB) sans violer la trajectoire.</p>"
      },
      {
       "titre": "La situation des finances publiques françaises",
       "contenu": "<p>La France n'a plus présenté d'excédent public depuis 1974. Son déficit a dépassé 3 % du PIB la plupart des années depuis 2008 ; la dette, d'environ 20 % du PIB en 1980, a franchi 60 % au début des années 2000 puis 100 % pendant la crise sanitaire.</p>\n<table><thead><tr><th>Indicateur (Insee, premiers résultats de mars 2026)</th><th>2024</th><th>2025</th></tr></thead>\n<tbody><tr><td>Déficit public</td><td>5,8 % du PIB (169 Md€)</td><td>5,1 % du PIB (152,5 Md€)</td></tr>\n<tr><td>Dette publique au sens de Maastricht</td><td>112,6 % du PIB</td><td>115,6 % du PIB (environ 3 460 Md€)</td></tr>\n<tr><td>Dépenses publiques</td><td>57,0 % du PIB</td><td>57,2 % du PIB</td></tr>\n<tr><td>Recettes publiques</td><td>51,2 % du PIB</td><td>52,1 % du PIB</td></tr>\n<tr><td>Taux de prélèvements obligatoires</td><td>42,8 % du PIB</td><td>43,6 % du PIB</td></tr>\n<tr><td>Charge d'intérêts</td><td>58,1 Md€</td><td>64,7 Md€ (2,2 % du PIB)</td></tr></tbody></table>\n<p>Plusieurs constats en découlent :</p>\n<ul><li>le déficit français est l'un des plus élevés de la zone euro et la dette la troisième en proportion du PIB après la Grèce et l'Italie ;</li>\n<li>le déficit primaire (environ 2,9 % du PIB en 2025) reste très éloigné du solde primaire stabilisant, proche de zéro avec un taux apparent et une croissance nominale tous deux voisins de 2 % ;</li>\n<li>la charge d'intérêts augmente rapidement (+11 % en 2025) à mesure que la dette émise à taux bas avant 2022 est refinancée à des taux plus élevés : l'effet boule de neige, longtemps favorable, devient défavorable ;</li>\n<li>l'écart de taux à dix ans avec l'Allemagne s'est élargi depuis la dissolution de l'Assemblée nationale en juin 2024, et les agences de notation ont abaissé la note de la France en 2024-2025.</li></ul>\n<p>La France fait l'objet d'une <strong>procédure de déficit excessif</strong> ouverte par le Conseil de l'Union européenne en juillet 2024. Son plan budgétaire et structurel à moyen terme, présenté en octobre 2024 sur sept ans, prévoit de ramener le déficit sous 3 % du PIB en 2029. L'ampleur de l'ajustement nécessaire (un effort structurel de l'ordre d'un demi-point de PIB par an pendant plusieurs années) dans un pays où les dépenses et les prélèvements sont déjà parmi les plus élevés de l'OCDE alimente le débat sur le partage entre baisse des dépenses et hausse des impôts, et sur l'effet récessif de la consolidation à la lumière des travaux sur les multiplicateurs.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> le Royaume-Uni de septembre 2022 illustre la sensibilité des marchés aux annonces budgétaires : le « mini-budget » du gouvernement Truss, qui annonçait des baisses d'impôts non financées, a provoqué une hausse brutale des taux longs britanniques et une crise des fonds de pension, obligeant la Banque d'Angleterre à intervenir et le gouvernement à revenir sur ses mesures. La crédibilité budgétaire conditionne le taux <em>r</em> dans l'équation de la dette.</div>"
      }
     ],
     "points_cles": [
      "Solde public = recettes − dépenses (y compris intérêts) ; solde primaire = solde hors charge d'intérêts.",
      "Solde structurel = solde − ε × écart de production − mesures ponctuelles, avec ε ≈ 0,5 en France ; sa variation mesure l'orientation de la politique budgétaire.",
      "Les stabilisateurs automatiques (impôts progressifs, assurance chômage) réduisent le multiplicateur mais amortissent les chocs : 1/[1 − c(1 − t)].",
      "Le multiplicateur est plus élevé en récession, à la borne à zéro, en change fixe et en économie peu ouverte ; plus faible si la banque centrale réagit.",
      "Blanchard-Leigh (2013) : en 2010-2011, les multiplicateurs ont été sous-estimés d'environ 1 ; ils étaient compris entre 0,9 et 1,7 au lieu de 0,5.",
      "Dynamique de la dette : b(t) − b(t−1) = [(i − γ)/(1 + γ)]b(t−1) − s(t), soit Δb ≈ (r − g)b − s.",
      "Solde primaire stabilisant : s* = (r − g)b ; déficit total stabilisant ≈ γb (5 % × 60 % = 3 %, d'où le couple de Maastricht).",
      "Contrainte budgétaire intertemporelle : la dette égale la valeur actualisée des excédents primaires futurs, sous condition de non-Ponzi.",
      "Si r < g, un déficit primaire peut être compatible avec une dette stable (Blanchard 2019) ; mais r peut remonter et dépendre de la dette (équilibres multiples).",
      "Maastricht (1992) : 3 % et 60 % ; PSC (1997), réformes 2005, 2011-2013 (six-pack, TSCG), clause dérogatoire 2020-2023.",
      "Réforme de 2024 : plans à moyen terme de 4 à 7 ans, trajectoire de dépenses nettes, sauvegarde de dette (−1 point par an au-dessus de 90 %), marge de résilience de 1,5 %.",
      "France 2025 (Insee, mars 2026) : déficit 5,1 % du PIB, dette 115,6 % (environ 3 460 Md€), prélèvements obligatoires 43,6 %, charge d'intérêts 2,2 % du PIB.",
      "France en procédure de déficit excessif depuis juillet 2024 ; objectif de déficit sous 3 % en 2029."
     ],
     "lexique": [
      {
       "terme": "Solde primaire",
       "def": "Solde public hors charge d'intérêts de la dette ; il mesure l'effort budgétaire courant."
      },
      {
       "terme": "Solde structurel",
       "def": "Solde public corrigé des effets du cycle économique et des mesures ponctuelles ; il dépend de l'estimation de la production potentielle."
      },
      {
       "terme": "Solde conjoncturel",
       "def": "Composante du solde public due à l'écart entre la production effective et la production potentielle."
      },
      {
       "terme": "Stabilisateurs automatiques",
       "def": "Recettes et dépenses publiques qui varient spontanément avec la conjoncture et atténuent les fluctuations du revenu."
      },
      {
       "terme": "Multiplicateur budgétaire",
       "def": "Variation du PIB induite par une variation d'une unité des dépenses publiques ou des impôts."
      },
      {
       "terme": "Effet boule de neige",
       "def": "Hausse du ratio de dette due à un taux d'intérêt supérieur au taux de croissance : (r − g)b."
      },
      {
       "terme": "Solde primaire stabilisant",
       "def": "Solde primaire qui maintient constant le ratio dette / PIB : s* = (r − g)b."
      },
      {
       "terme": "Condition de non-Ponzi",
       "def": "Condition interdisant de financer indéfiniment la dette par de nouveaux emprunts : la valeur actualisée de la dette à l'infini est nulle."
      },
      {
       "terme": "Soutenabilité",
       "def": "Capacité d'un État à respecter sa contrainte budgétaire intertemporelle sans ajustement irréaliste ni défaut."
      },
      {
       "terme": "Procédure de déficit excessif",
       "def": "Procédure européenne de surveillance et de correction ouverte quand le déficit dépasse 3 % du PIB ou que la dette dépasse 60 % sans baisser suffisamment."
      },
      {
       "terme": "Trajectoire de dépenses nettes",
       "def": "Indicateur central des règles européennes depuis 2024 : évolution des dépenses primaires hors éléments conjoncturels et nettes des mesures de recettes."
      },
      {
       "terme": "Prélèvements obligatoires",
       "def": "Impôts et cotisations sociales effectives perçus par les administrations publiques et l'Union européenne ; 43,6 % du PIB en France en 2025."
      }
     ],
     "qcm": [
      {
       "q": "Un pays a un déficit public de 4 % du PIB et une charge d'intérêts de 2,5 % du PIB. Quel est son solde primaire ?",
       "options": [
        "−6,5 % du PIB",
        "−4 % du PIB",
        "+1,5 % du PIB",
        "−1,5 % du PIB"
       ],
       "bonnes": [
        3
       ],
       "explication": "Solde primaire = solde total + charge d'intérêts = −4 + 2,5 = −1,5 % du PIB. Ajouter la charge au déficit est une erreur de signe fréquente."
      },
      {
       "q": "Le déficit public est de 5 % du PIB, l'écart de production de −2 % et la semi-élasticité du solde à l'écart de production de 0,5. Quel est le solde structurel (sans mesure ponctuelle) ?",
       "options": [
        "−6 % du PIB",
        "−5 % du PIB",
        "−3 % du PIB",
        "−4 % du PIB"
       ],
       "bonnes": [
        3
       ],
       "explication": "Solde conjoncturel = 0,5 × (−2) = −1 point. Solde structurel = −5 − (−1) = −4 % du PIB : une partie du déficit s'explique par la mauvaise conjoncture."
      },
      {
       "q": "Quelles propositions sur les stabilisateurs automatiques sont exactes ? (deux réponses)",
       "options": [
        "Ils résultent de décisions discrétionnaires prises en cours de récession",
        "Ils dégradent le solde public en récession sans modifier le solde structurel",
        "Ils sont plus puissants quand les dépenses publiques et la progressivité de l'impôt sont élevées",
        "Ils augmentent le multiplicateur keynésien des dépenses publiques"
       ],
       "bonnes": [
        1,
        2
       ],
       "explication": "Les stabilisateurs jouent spontanément : ils dégradent le solde conjoncturel, pas le structurel. Leur ampleur dépend de la taille de l'État et de la progressivité. Ils réduisent le multiplicateur, qui passe de 1/(1 − c) à 1/[1 − c(1 − t)]."
      },
      {
       "q": "Quelle est la conclusion principale de Blanchard et Leigh (2013) ?",
       "options": [
        "Les multiplicateurs budgétaires ont été sous-estimés dans les prévisions de 2010-2011, de sorte que les consolidations ont davantage pesé sur la croissance que prévu",
        "Les consolidations budgétaires de 2010-2011 ont été expansionnistes grâce aux effets de confiance",
        "Le multiplicateur budgétaire est nul en zone euro du fait de l'équivalence ricardienne",
        "Les multiplicateurs ont été surestimés, ce qui a conduit à des relances excessives"
       ],
       "bonnes": [
        0
       ],
       "explication": "Les erreurs de prévision de croissance étaient d'autant plus négatives que la consolidation prévue était forte, ce qui indique un multiplicateur effectif supérieur d'environ 1 à l'hypothèse de 0,5 utilisée par les prévisionnistes."
      },
      {
       "q": "Dette = 100 % du PIB, taux d'intérêt réel 3 %, croissance réelle 1 %, solde primaire +1 % du PIB. Quelle est la variation approximative du ratio de dette ?",
       "options": [
        "+3 points",
        "−1 point",
        "+1 point",
        "+2 points"
       ],
       "bonnes": [
        2
       ],
       "explication": "Δb ≈ (r − g)b − s = (0,03 − 0,01) × 100 − 1 = 2 − 1 = +1 point de PIB : l'excédent primaire ne compense que la moitié de l'effet boule de neige."
      },
      {
       "q": "Avec une dette de 120 % du PIB, r = 2,5 % et g = 1 %, quel solde primaire stabilise le ratio de dette ?",
       "options": [
        "+1,8 % du PIB",
        "+3 % du PIB",
        "−1,8 % du PIB",
        "+1,5 % du PIB"
       ],
       "bonnes": [
        0
       ],
       "explication": "s* = (r − g)b = 0,015 × 120 = 1,8 % du PIB d'excédent primaire. Oublier de multiplier par la dette donne 1,5 %."
      },
      {
       "q": "Quelles propositions sur la dynamique de la dette sont exactes ? (deux réponses)",
       "options": [
        "Si r < g, un déficit primaire permanent est compatible avec un ratio de dette stable",
        "Une inflation plus forte que prévu tend à réduire le ratio de dette, à taux apparent inchangé",
        "Un excédent primaire suffit toujours à faire baisser le ratio de dette",
        "Le ratio de dette ne dépend pas de la croissance du PIB"
       ],
       "bonnes": [
        0,
        1
       ],
       "explication": "Avec r < g, s* = (r − g)b est négatif : un déficit primaire est soutenable. L'inflation surprise accroît la croissance nominale sans relever le taux apparent sur la dette déjà émise. Un excédent primaire peut être insuffisant si (r − g)b est plus grand."
      },
      {
       "q": "Que dit la contrainte budgétaire intertemporelle de l'État (avec r > g) ?",
       "options": [
        "Le déficit public ne doit jamais dépasser 3 % du PIB",
        "La dette doit être remboursée intégralement à une date fixée",
        "La dette actuelle doit être égale à la valeur actualisée des excédents primaires futurs",
        "Le solde public doit être équilibré chaque année"
       ],
       "bonnes": [
        2
       ],
       "explication": "En itérant l'équation de la dette et en imposant la condition de non-Ponzi, on obtient b0 = somme actualisée des excédents primaires futurs. La dette n'a pas à être remboursée, mais doit être couverte par des excédents futurs en valeur actualisée."
      },
      {
       "q": "Pourquoi le couple « 3 % de déficit, 60 % de dette » de Maastricht est-il arithmétiquement cohérent ?",
       "options": [
        "Parce qu'un déficit de 3 % rapporte 60 % de recettes",
        "Parce qu'avec une croissance nominale de 5 %, un déficit total de 3 % stabilise la dette à 60 % du PIB",
        "Parce que le taux d'intérêt était de 3 % en 1992",
        "Parce que 60 % est le niveau de dette qui maximise la croissance"
       ],
       "bonnes": [
        1
       ],
       "explication": "Le déficit total stabilisant vaut approximativement γb : 5 % × 60 % = 3 %. La croissance nominale de 5 % correspondait à 3 % de croissance réelle et 2 % d'inflation."
      },
      {
       "q": "Quelles propositions sur la réforme des règles budgétaires européennes de 2024 sont exactes ? (deux réponses)",
       "options": [
        "Elle supprime les valeurs de référence de 3 % et 60 %",
        "Elle fait de la trajectoire de dépenses primaires nettes l'indicateur opérationnel central",
        "Elle impose une baisse moyenne de la dette d'au moins 1 point de PIB par an pour les pays au-dessus de 90 %",
        "Elle impose l'équilibre budgétaire chaque année"
       ],
       "bonnes": [
        1,
        2
       ],
       "explication": "La réforme conserve 3 % et 60 % mais pilote les États par une trajectoire de dépenses nettes, dans des plans à moyen terme de 4 à 7 ans, avec une clause de sauvegarde de baisse de la dette d'au moins 1 point par an au-dessus de 90 %."
      },
      {
       "q": "Selon l'Insee (premiers résultats de mars 2026), quelle proposition décrit la France en 2025 ?",
       "options": [
        "Déficit 3,1 % du PIB et dette 98 % du PIB",
        "Déficit 5,8 % du PIB et dette 112,6 % du PIB",
        "Déficit 4,1 % du PIB et dette 125 % du PIB",
        "Déficit 5,1 % du PIB et dette 115,6 % du PIB"
       ],
       "bonnes": [
        3
       ],
       "explication": "En 2025, le déficit est de 5,1 % du PIB (152,5 Md€) et la dette de 115,6 % du PIB (environ 3 460 Md€). Les valeurs 5,8 % et 112,6 % correspondent à 2024."
      },
      {
       "q": "Avec un taux apparent de 2 % et une croissance nominale de 2 %, une dette de 115 % du PIB et un déficit primaire de 3 % du PIB, que devient approximativement le ratio de dette l'année suivante ?",
       "options": [
        "Il augmente d'environ 3 points",
        "Il est stable",
        "Il augmente d'environ 5,3 points",
        "Il baisse d'environ 3 points"
       ],
       "bonnes": [
        0
       ],
       "explication": "Δb ≈ (i − γ)b − s = 0 × 115 − (−3) = +3 points : quand le taux d'intérêt égale la croissance, la dette augmente du montant du déficit primaire."
      }
     ]
    },
    {
     "id": "mac4-cycles-economiques",
     "titre": "Cycles économiques",
     "duree": 50,
     "niveau": "L3",
     "objectifs": [
      "Définir et mesurer le cycle économique (tendance, composante cyclique, datation) et connaître ses faits stylisés",
      "Connaître les méthodes de datation du NBER et du CEPR et les principales récessions récentes",
      "Formaliser le modèle des cycles réels (RBC) et la substitution intertemporelle du travail",
      "Discuter les critiques adressées à la théorie des cycles réels",
      "Décrire la structure d'un modèle DSGE néo-keynésien (IS dynamique, courbe de Phillips néo-keynésienne, règle de taux)",
      "Expliquer les cycles financiers et du crédit selon Minsky et Kindleberger"
     ],
     "sections": [
      {
       "titre": "Définir et mesurer le cycle",
       "contenu": "<p>Selon la définition classique de Burns et Mitchell (<em>Measuring Business Cycles</em>, 1946), les cycles sont des fluctuations de l'activité agrégée qui se composent d'expansions survenant à peu près en même temps dans de nombreux secteurs, suivies de récessions, de contractions et de reprises de même ampleur générale ; leur durée varie de plus d'un an à dix ou douze ans et ils ne sont <strong>pas périodiques</strong>. Le terme de « cycle » est donc trompeur : il ne s'agit pas d'une oscillation régulière mais d'une succession de phases d'expansion et de contraction de durée et d'amplitude variables.</p>\n<p>Deux conceptions coexistent :</p>\n<ul><li>le <strong>cycle classique</strong> porte sur le <em>niveau</em> de l'activité : un <strong>pic</strong> marque le début d'une récession (baisse absolue du PIB), un <strong>creux</strong> son terme ;</li>\n<li>le <strong>cycle de croissance</strong> porte sur l'<em>écart</em> à la tendance : on décompose ln <em>Y<sub>t</sub></em> = τ<sub><em>t</em></sub> + <em>c<sub>t</sub></em>, où τ est la tendance et <em>c</em> la composante cyclique. Un ralentissement de la croissance sous son rythme tendanciel est une phase basse, même sans recul du PIB.</li></ul>\n<p>La tendance n'est pas observable. Le <strong>filtre de Hodrick-Prescott</strong> (1997) la définit comme la série τ qui minimise Σ (ln <em>Y<sub>t</sub></em> − τ<sub><em>t</em></sub>)<sup>2</sup> + λ Σ [(τ<sub><em>t</em>+1</sub> − τ<sub><em>t</em></sub>) − (τ<sub><em>t</em></sub> − τ<sub><em>t</em>−1</sub>)]<sup>2</sup> : le premier terme rapproche la tendance des données, le second pénalise les variations de sa pente. Avec λ = 1 600 en données trimestrielles, on isole des fluctuations de durée inférieure à environ huit ans. Ce filtre est critiqué (Hamilton 2018) : il crée des cycles artificiels et ses estimations en fin d'échantillon sont révisées. Pour les politiques publiques, on lui préfère l'<strong>écart de production</strong> estimé à partir d'une fonction de production (production potentielle), lui aussi incertain.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> la règle des « deux trimestres consécutifs de baisse du PIB » est une convention journalistique, pas la définition officielle d'une récession. Le NBER retient une baisse significative, généralisée et durable de l'activité, appréciée à partir de nombreuses séries (emploi, revenu réel, production industrielle, consommation). Ainsi, la récession américaine de 2001 n'a pas comporté deux trimestres consécutifs de baisse du PIB dans les premières estimations, et le premier semestre 2022 a affiché, selon les premières estimations, deux trimestres de baisse sans être daté comme récession.</div>"
      },
      {
       "titre": "Les faits stylisés des cycles",
       "contenu": "<p>Depuis Lucas (1977) et les travaux de Kydland et Prescott (1990), on résume les cycles par les écarts types et les corrélations des composantes cycliques de différentes variables avec celle du PIB. Les ordres de grandeur ci-dessous, pour les États-Unis d'après-guerre en données trimestrielles filtrées, sont classiques (Cooley et Prescott 1995, Stock et Watson 1999) :</p>\n<table><thead><tr><th>Variable</th><th>Volatilité relative au PIB</th><th>Corrélation avec le PIB</th><th>Calendrier</th></tr></thead>\n<tbody><tr><td>PIB (écart type absolu environ 1,5 à 2 %)</td><td>1</td><td>1</td><td>—</td></tr>\n<tr><td>Consommation (non durables et services)</td><td>environ 0,5 à 0,8</td><td>forte, positive</td><td>coïncidente</td></tr>\n<tr><td>Investissement fixe</td><td>environ 3</td><td>forte, positive</td><td>coïncident (logement : avancé)</td></tr>\n<tr><td>Heures travaillées</td><td>environ 1</td><td>forte, positive</td><td>légèrement retardées</td></tr>\n<tr><td>Productivité apparente du travail</td><td>environ 0,5</td><td>positive (faiblement depuis les années 1980)</td><td>avancée</td></tr>\n<tr><td>Salaire réel</td><td>faible</td><td>faible, légèrement positive</td><td>—</td></tr>\n<tr><td>Chômage</td><td>forte</td><td>négative (loi d'Okun)</td><td>retardé</td></tr></tbody></table>\n<p>Faits à retenir :</p>\n<ol><li>les grandeurs réelles <strong>co-varient</strong> : production, consommation, investissement, emploi évoluent ensemble (comouvement), et les fluctuations sont <strong>persistantes</strong> (forte autocorrélation) ;</li>\n<li>l'<strong>investissement</strong> est beaucoup plus volatil que la production et la consommation plus lisse, conformément aux théories intertemporelles ;</li>\n<li>l'emploi fluctue presque autant que la production, mais le <strong>salaire réel</strong> est peu cyclique : c'est un défi pour les modèles où l'emploi est déterminé par l'offre de travail le long d'une courbe d'offre ;</li>\n<li>la <strong>productivité</strong> est procyclique, ce qui peut refléter des chocs technologiques ou la rétention de main-d'œuvre ;</li>\n<li>l'<strong>inflation</strong> tend à être procyclique avec retard ; la <strong>monnaie</strong> et les taux courts sont corrélés au cycle et avancés ;</li>\n<li>la volatilité du PIB américain a nettement baissé du milieu des années 1980 à 2007 (la « Grande Modération »), avant la Grande Récession.</li></ol>"
      },
      {
       "titre": "La chronologie des cycles : NBER et CEPR",
       "contenu": "<p>Aux États-Unis, le <strong>Business Cycle Dating Committee</strong> du National Bureau of Economic Research (NBER), créé en 1978, date les pics et creux mensuels de l'activité, rétrospectivement (souvent plus d'un an après les faits) ; la chronologie remonte à 1854. Depuis 1945, les récessions américaines ont duré en moyenne une dizaine de mois et les expansions environ cinq ans, ces dernières s'allongeant au fil du temps.</p>\n<table><thead><tr><th>Récession (NBER)</th><th>Pic</th><th>Creux</th><th>Durée</th></tr></thead>\n<tbody><tr><td>Choc pétrolier</td><td>novembre 1973</td><td>mars 1975</td><td>16 mois</td></tr>\n<tr><td>Désinflation Volcker</td><td>juillet 1981</td><td>novembre 1982</td><td>16 mois</td></tr>\n<tr><td>Éclatement de la bulle internet</td><td>mars 2001</td><td>novembre 2001</td><td>8 mois</td></tr>\n<tr><td>Grande Récession</td><td>décembre 2007</td><td>juin 2009</td><td>18 mois</td></tr>\n<tr><td>Crise sanitaire</td><td>février 2020</td><td>avril 2020</td><td>2 mois</td></tr></tbody></table>\n<p>Pour la zone euro, le <strong>Euro Area Business Cycle Dating Committee</strong> du Centre for Economic Policy Research (CEPR), créé en 2002, date les cycles trimestriels. Il identifie notamment une récession du premier trimestre 2008 au deuxième trimestre 2009, une récession liée à la crise des dettes souveraines du troisième trimestre 2011 au premier trimestre 2013 (absente aux États-Unis), et la récession de la crise sanitaire (fin 2019 au deuxième trimestre 2020). La France a connu en 2009 une baisse du PIB de près de 3 % et en 2020 d'environ 8 %, la plus forte depuis la Seconde Guerre mondiale.</p>\n<p>Les comités utilisent un faisceau d'indicateurs plutôt que le seul PIB, révisé et publié avec retard. Les instituts de conjoncture suivent en temps réel des <strong>indicateurs avancés</strong> (enquêtes de climat des affaires de l'Insee, indices des directeurs d'achat, courbe des taux : une inversion entre taux longs et courts a précédé la plupart des récessions américaines).</p>"
      },
      {
       "titre": "La théorie des cycles réels (RBC)",
       "contenu": "<p>Kydland et Prescott (« Time to Build and Aggregate Fluctuations », 1982) et Long et Plosser (1983) proposent d'expliquer les cycles sans imperfection de marché ni monnaie : les fluctuations sont la réponse <strong>optimale</strong> d'agents rationnels à des <strong>chocs réels</strong>, principalement de productivité. Le cycle n'est pas un écart à l'équilibre mais une succession d'équilibres ; la tendance et le cycle sont produits par les mêmes forces. Conséquence normative radicale : il n'y a pas lieu de stabiliser.</p>\n<h4>Le modèle de base</h4>\n<p>C'est un modèle de croissance optimale (Ramsey-Cass-Koopmans) avec choix du travail et chocs. Le ménage représentatif maximise <em>E</em><sub>0</sub> Σ β<sup><em>t</em></sup> [ln <em>C<sub>t</sub></em> + <em>b</em> ln (1 − <em>N<sub>t</sub></em>)], où 1 − <em>N</em> est le loisir. La production est <em>Y<sub>t</sub></em> = <em>A<sub>t</sub></em> <em>K<sub>t</sub></em><sup>α</sup> <em>N<sub>t</sub></em><sup>1−α</sup>, le capital s'accumule selon <em>K</em><sub><em>t</em>+1</sub> = (1 − δ) <em>K<sub>t</sub></em> + <em>Y<sub>t</sub></em> − <em>C<sub>t</sub></em>, et la productivité globale des facteurs suit un processus autorégressif persistant :</p>\n<p class=\"eq\">ln <em>A<sub>t</sub></em> = ρ ln <em>A</em><sub><em>t</em>−1</sub> + ε<sub><em>t</em></sub>, avec ρ proche de 0,95</p>\n<p>Les chocs ε sont mesurés par le <strong>résidu de Solow</strong>. Les paramètres sont <strong>calibrés</strong> (α ≈ 1/3 d'après la part des profits, β tel que le taux d'intérêt réel annuel soit d'environ 4 %, δ d'après les données de capital), puis on simule le modèle et compare ses moments aux faits stylisés.</p>\n<h4>Le mécanisme : substitution intertemporelle du travail</h4>\n<p>Un choc positif de productivité accroît la production et la productivité marginale du travail (donc le salaire réel) et du capital (donc le taux d'intérêt réel). Comme il est temporaire, les ménages : épargnent une grande partie du revenu supplémentaire (lissage de la consommation, d'où un investissement très volatil) ; et travaillent davantage <strong>maintenant</strong>, pendant que le travail est bien payé (Lucas et Rapping 1969). Dans un modèle à deux périodes avec utilité ln <em>C</em><sub>1</sub> + <em>b</em> ln (1 − <em>N</em><sub>1</sub>) + β [ln <em>C</em><sub>2</sub> + <em>b</em> ln (1 − <em>N</em><sub>2</sub>)] et la contrainte <em>C</em><sub>1</sub> + <em>C</em><sub>2</sub> / (1 + <em>r</em>) = <em>w</em><sub>1</sub> <em>N</em><sub>1</sub> + <em>w</em><sub>2</sub> <em>N</em><sub>2</sub> / (1 + <em>r</em>), les conditions du premier ordre pour le loisir (<em>b</em> / (1 − <em>N</em><sub>1</sub>) = λ <em>w</em><sub>1</sub> et β<em>b</em> / (1 − <em>N</em><sub>2</sub>) = λ <em>w</em><sub>2</sub> / (1 + <em>r</em>)) donnent :</p>\n<p class=\"eq\">(1 − <em>N</em><sub>1</sub>) / (1 − <em>N</em><sub>2</sub>) = <em>w</em><sub>2</sub> / [β (1 + <em>r</em>) <em>w</em><sub>1</sub>]</p>\n<p>Le loisir présent diminue relativement au loisir futur quand le salaire présent augmente relativement au salaire futur actualisé, ou quand le taux d'intérêt augmente.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> avec <em>b</em> = 1, β = 1 et <em>r</em> = 0, la condition d'Euler donne <em>C</em><sub>1</sub> = <em>C</em><sub>2</sub> = <em>C</em>, et 1 − <em>N<sub>t</sub></em> = <em>C</em> / <em>w<sub>t</sub></em>. La contrainte budgétaire 2<em>C</em> = <em>w</em><sub>1</sub> + <em>w</em><sub>2</sub> − 2<em>C</em> donne <em>C</em> = (<em>w</em><sub>1</sub> + <em>w</em><sub>2</sub>) / 4.<br>1) Référence <em>w</em><sub>1</sub> = <em>w</em><sub>2</sub> = 10 : <em>C</em> = 5, 1 − <em>N</em> = 0,5, <em>N</em><sub>1</sub> = <em>N</em><sub>2</sub> = 0,5.<br>2) Hausse <strong>temporaire</strong> <em>w</em><sub>1</sub> = 11 : <em>C</em> = 21/4 = 5,25 ; 1 − <em>N</em><sub>1</sub> = 5,25/11 ≈ 0,477, donc <em>N</em><sub>1</sub> ≈ 0,523 (+4,5 %) ; 1 − <em>N</em><sub>2</sub> = 0,525, donc <em>N</em><sub>2</sub> = 0,475.<br>3) Hausse <strong>permanente</strong> <em>w</em><sub>1</sub> = <em>w</em><sub>2</sub> = 11 : <em>C</em> = 5,5 et <em>N</em> = 0,5 inchangé, car effets revenu et substitution se compensent.<br>4) Conclusion : seuls les chocs temporaires provoquent une forte réponse de l'emploi ; c'est pourquoi les RBC exigent des chocs persistants mais non permanents, et une forte élasticité de substitution intertemporelle du travail.</div>\n<p>Prescott (1986) affirmait que ce modèle reproduisait environ 70 % de la variance du PIB américain d'après-guerre, avec une consommation lisse, un investissement volatil et des heures procycliques.</p>"
      },
      {
       "titre": "Les critiques de la théorie des cycles réels",
       "contenu": "<ul><li><strong>Quels chocs ?</strong> Summers (1986) demande quels chocs technologiques auraient provoqué les récessions : une récession serait une régression technologique, ce qui est peu plausible (hormis pour des chocs pétroliers ou réglementaires).</li>\n<li><strong>Le résidu de Solow n'est pas exogène</strong> : il est procyclique en partie à cause de la <strong>rétention de main-d'œuvre</strong> et de la variation du taux d'utilisation des capacités (Burnside, Eichenbaum et Rebelo 1993). Corrigé de ces effets, il fluctue beaucoup moins. Il réagit même à des chocs de demande (dépenses militaires, selon Hall 1988).</li>\n<li><strong>Élasticité de l'offre de travail</strong> : les estimations microéconomiques de l'élasticité de substitution intertemporelle du travail sont faibles (MaCurdy 1981), alors que le modèle a besoin d'élasticités élevées. Les extensions avec indivisibilité du travail (Hansen 1985, Rogerson 1988) et marges extensives atténuent la critique.</li>\n<li><strong>Chômage</strong> : le modèle ne connaît que des variations volontaires des heures ; le chômage involontaire n'existe pas.</li>\n<li><strong>Prédictions démenties</strong> : le salaire réel devrait être fortement procyclique ; Galí (1999), à l'aide de vecteurs autorégressifs structurels, trouve qu'un choc technologique positif <strong>réduit</strong> les heures à court terme, comme dans un modèle à prix rigides.</li>\n<li><strong>Neutralité de la monnaie</strong> : les épisodes de désinflation (Volcker 1979-1982) et le travail de Romer et Romer (1989) sur les décisions de la Fed montrent que des chocs monétaires ont des effets réels importants, contrairement à l'hypothèse des RBC.</li></ul>\n<p>L'héritage des RBC est pourtant considérable : la <strong>méthode</strong> (modèles d'équilibre général dynamique et stochastique fondés sur l'optimisation, calibration, comparaison des moments simulés et observés) est devenue la norme de la macroéconomie. Kydland et Prescott ont reçu le prix Nobel en 2004, pour ce travail et celui sur l'incohérence temporelle.</p>"
      },
      {
       "titre": "Les modèles DSGE néo-keynésiens",
       "contenu": "<p>Les modèles néo-keynésiens greffent sur l'ossature des RBC deux ingrédients : la <strong>concurrence monopolistique</strong> (les entreprises fixent leurs prix) et les <strong>rigidités nominales</strong>. Dans le modèle de Calvo (1983), chaque entreprise ne peut réviser son prix qu'avec une probabilité 1 − θ par période ; elle fixe donc un prix tenant compte des coûts marginaux futurs. Le modèle canonique (Woodford 2003, Galí 2008) se réduit, en écarts log-linéaires à l'état stationnaire, à trois équations :</p>\n<p class=\"eq\"><em>x<sub>t</sub></em> = <em>E<sub>t</sub></em> <em>x</em><sub><em>t</em>+1</sub> − σ (<em>i<sub>t</sub></em> − <em>E<sub>t</sub></em> π<sub><em>t</em>+1</sub> − <em>r<sup>n</sup><sub>t</sub></em>)</p>\n<p class=\"eq\">π<sub><em>t</em></sub> = β <em>E<sub>t</sub></em> π<sub><em>t</em>+1</sub> + κ <em>x<sub>t</sub></em></p>\n<p class=\"eq\"><em>i<sub>t</sub></em> = <em>r</em>* + φ<sub>π</sub> π<sub><em>t</em></sub> + φ<sub><em>x</em></sub> <em>x<sub>t</sub></em></p>\n<ul><li>La première est la <strong>courbe IS dynamique</strong>, issue de la condition d'Euler du ménage : l'écart de production <em>x</em> baisse quand le taux réel dépasse le taux naturel <em>r<sup>n</sup></em>, et dépend de l'écart attendu.</li>\n<li>La deuxième est la <strong>courbe de Phillips néo-keynésienne</strong> : l'inflation dépend de l'inflation anticipée et de l'écart de production (κ est d'autant plus faible que les prix sont rigides). En itérant vers l'avant, π<sub><em>t</em></sub> = κ Σ β<sup><em>j</em></sup> <em>E<sub>t</sub></em> <em>x</em><sub><em>t</em>+<em>j</em></sub> : l'inflation présente reflète les tensions futures anticipées. Exemple : avec κ = 0,1 et un écart de production attendu de −2 % pendant une seule période, l'inflation baisse de 0,2 point.</li>\n<li>La troisième est une <strong>règle de Taylor</strong> ; φ<sub>π</sub> &gt; 1 assure l'unicité de l'équilibre (principe de Taylor).</li></ul>\n<p>Les chocs (de productivité, de demande via <em>r<sup>n</sup></em>, de coût, monétaires) se propagent par ces équations. Les modèles de taille moyenne (Christiano, Eichenbaum et Evans 2005 ; Smets et Wouters 2003 et 2007) ajoutent des rigidités salariales, l'indexation, des coûts d'ajustement de l'investissement et l'habitude de consommation ; estimés par des méthodes bayésiennes, ils sont utilisés par les banques centrales pour la prévision et l'analyse des politiques. Ils intègrent la critique de Lucas (1976), puisque leurs paramètres sont structurels.</p>\n<p>Après 2008, on leur a reproché d'ignorer le système financier, l'hétérogénéité des ménages et la borne à zéro. Les développements récents intègrent des frictions financières (accélérateur financier, banques), des agents hétérogènes (modèles HANK, Kaplan, Moll et Violante 2018) où la propension marginale à consommer est élevée pour les ménages à faible épargne liquide, et des non-linéarités.</p>"
      },
      {
       "titre": "Cycles financiers et cycles du crédit : Minsky et Kindleberger",
       "contenu": "<p>Une tradition plus ancienne, qui remonte à Irving Fisher (théorie de la <strong>déflation par la dette</strong>, 1933), voit dans le crédit une source endogène d'instabilité. Hyman Minsky (<em>Stabilizing an Unstable Economy</em>, 1986) formule l'<strong>hypothèse d'instabilité financière</strong> : la stabilité est déstabilisante. Pendant une expansion prolongée, les agents deviennent optimistes, les prêteurs relâchent leurs exigences et les structures de financement se fragilisent selon trois stades :</p>\n<ol><li><strong>financement couvert</strong> (hedge) : les revenus attendus couvrent intérêts et principal ;</li>\n<li><strong>financement spéculatif</strong> : ils couvrent les intérêts mais le principal doit être refinancé ;</li>\n<li><strong>financement Ponzi</strong> : ils ne couvrent même pas les intérêts ; l'emprunteur compte sur la hausse du prix des actifs pour rembourser.</li></ol>\n<p>Quand la part des unités spéculatives et Ponzi est élevée, un choc modeste (hausse des taux, baisse des prix d'actifs) provoque des ventes forcées, une chute des prix et une contraction du crédit : c'est le « moment Minsky ».</p>\n<p>Charles Kindleberger (<em>Manias, Panics, and Crashes</em>, 1978) en tire une séquence historique type des crises : <strong>déplacement</strong> (innovation, déréglementation, choc qui ouvre des perspectives de profit), <strong>essor</strong> alimenté par le crédit, <strong>euphorie</strong> (spéculation, entrée d'investisseurs naïfs), <strong>détresse</strong> (initiés qui vendent), <strong>révulsion</strong> et <strong>panique</strong>, jusqu'à l'intervention d'un prêteur en dernier ressort. Il l'illustre de la bulle des tulipes (1637) à la crise de 1929.</p>\n<h4>La mesure moderne du cycle financier</h4>\n<p>Borio (2014) et la Banque des règlements internationaux définissent le <strong>cycle financier</strong> par les mouvements conjoints du crédit au secteur privé et des prix immobiliers. Il est plus long que le cycle économique (environ 15 à 20 ans contre 1 à 8 ans) et ses pics coïncident souvent avec des crises bancaires. Schularick et Taylor (2012), sur 14 pays depuis 1870, montrent que la croissance passée du crédit est le meilleur prédicteur des crises financières ; Jordà, Schularick et Taylor (2013) que les récessions précédées d'un boom du crédit sont plus profondes et plus longues. Ces travaux justifient la surveillance de l'<strong>écart du ratio crédit / PIB</strong> à sa tendance, qui sert de référence au coussin de fonds propres contracyclique de Bâle III.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> l'Espagne des années 2000 suit la séquence de Kindleberger : déplacement (entrée dans l'euro, chute des taux), boom du crédit immobilier et de la construction (le secteur de la construction atteint une part exceptionnelle de l'emploi), euphorie des prix, puis retournement en 2008, faillites de caisses d'épargne et chômage dépassant 25 % en 2013. Le Japon, après l'éclatement de sa bulle immobilière et boursière de 1990, offre l'exemple d'une « décennie perdue » marquée par les créances douteuses et la déflation.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> trois lectures du cycle coexistent. Pour les RBC, il est la réponse optimale à des chocs réels ; pour les néo-keynésiens, il résulte de chocs amplifiés par les rigidités nominales, ce qui justifie la stabilisation monétaire ; pour Minsky et Kindleberger, il naît endogènement de la dynamique du crédit, ce qui justifie une régulation financière contracyclique.</div>"
      }
     ],
     "points_cles": [
      "Burns et Mitchell (1946) : les cycles sont des comouvements récurrents mais non périodiques de nombreuses variables.",
      "Cycle classique (niveau du PIB, pics et creux) et cycle de croissance (écart à la tendance) ; filtre HP avec λ = 1 600 en trimestriel.",
      "La règle des deux trimestres de baisse du PIB n'est pas la définition du NBER, qui juge la profondeur, la diffusion et la durée de la baisse.",
      "Faits stylisés : comouvement et persistance ; investissement environ trois fois plus volatil que le PIB ; consommation plus lisse ; heures aussi volatiles que le PIB ; salaire réel peu cyclique.",
      "NBER : Grande Récession de décembre 2007 à juin 2009 (18 mois), récession Covid de février à avril 2020 ; CEPR : récession de la zone euro de 2011 à 2013 absente aux États-Unis.",
      "RBC (Kydland-Prescott 1982, Long-Plosser 1983) : cycles = réponses optimales à des chocs de productivité persistants (ln A(t) = ρ ln A(t−1) + ε) ; pas de raison de stabiliser.",
      "Substitution intertemporelle du travail : (1 − N1)/(1 − N2) = w2 / [β(1 + r)w1] ; un choc temporaire accroît fortement l'emploi, un choc permanent peu.",
      "Critiques des RBC : nature des chocs (Summers 1986), résidu de Solow endogène, faible élasticité de l'offre de travail, absence de chômage, Galí (1999), non-neutralité de la monnaie.",
      "Modèle néo-keynésien : IS dynamique, courbe de Phillips néo-keynésienne π = βEπ(+1) + κx, règle de Taylor avec φπ > 1.",
      "DSGE de taille moyenne (Smets-Wouters 2007) utilisés par les banques centrales ; extensions après 2008 : frictions financières, agents hétérogènes (HANK).",
      "Minsky (1986) : la stabilité est déstabilisante ; financement couvert, spéculatif, Ponzi.",
      "Kindleberger (1978) : déplacement, essor, euphorie, détresse, révulsion-panique, prêteur en dernier ressort.",
      "Cycle financier (Borio 2014) : crédit et prix immobiliers, 15 à 20 ans ; les booms du crédit prédisent les crises (Schularick-Taylor 2012)."
     ],
     "lexique": [
      {
       "terme": "Cycle économique",
       "def": "Succession non périodique de phases d'expansion et de contraction de l'activité agrégée, affectant simultanément de nombreux secteurs."
      },
      {
       "terme": "Récession",
       "def": "Baisse significative, généralisée et durable de l'activité économique, datée entre un pic et un creux."
      },
      {
       "terme": "Filtre de Hodrick-Prescott",
       "def": "Méthode statistique qui extrait une tendance lisse d'une série en arbitrant entre ajustement aux données et régularité de la pente."
      },
      {
       "terme": "Comouvement",
       "def": "Évolution simultanée et de même sens de nombreuses variables macroéconomiques au cours du cycle."
      },
      {
       "terme": "Choc de productivité",
       "def": "Variation exogène de la productivité globale des facteurs, mesurée par le résidu de Solow dans les modèles RBC."
      },
      {
       "terme": "Substitution intertemporelle du travail",
       "def": "Report de l'effort de travail vers les périodes où le salaire réel ou le taux d'intérêt sont temporairement élevés."
      },
      {
       "terme": "Calibration",
       "def": "Méthode consistant à fixer les paramètres d'un modèle à partir d'études microéconomiques ou de moyennes de long terme, puis à comparer ses simulations aux données."
      },
      {
       "terme": "Rétention de main-d'œuvre",
       "def": "Conservation par les entreprises de salariés sous-employés en récession, qui rend la productivité mesurée procyclique."
      },
      {
       "terme": "Modèle DSGE",
       "def": "Modèle d'équilibre général dynamique et stochastique fondé sur le comportement optimisateur d'agents et soumis à des chocs."
      },
      {
       "terme": "Courbe de Phillips néo-keynésienne",
       "def": "Relation π(t) = βEπ(t+1) + κx(t) issue de la fixation des prix à la Calvo."
      },
      {
       "terme": "Hypothèse d'instabilité financière",
       "def": "Thèse de Minsky selon laquelle les expansions prolongées fragilisent les structures de financement et préparent les crises."
      },
      {
       "terme": "Financement Ponzi",
       "def": "Situation où les revenus d'un emprunteur ne couvrent même pas les intérêts, le remboursement dépendant de la hausse du prix des actifs."
      },
      {
       "terme": "Cycle financier",
       "def": "Fluctuations conjointes et longues du crédit et des prix immobiliers, dont les pics précèdent souvent les crises bancaires."
      }
     ],
     "qcm": [
      {
       "q": "Quelle proposition sur la définition des récessions est exacte ?",
       "options": [
        "Une récession est définie officiellement aux États-Unis par deux trimestres consécutifs de baisse du PIB",
        "Le NBER date les récessions à partir d'un ensemble d'indicateurs selon la profondeur, la diffusion et la durée de la baisse d'activité",
        "Les cycles économiques sont périodiques, d'une durée d'environ sept ans",
        "Une baisse de la croissance sous sa tendance est toujours une récession au sens du NBER"
       ],
       "bonnes": [
        1
       ],
       "explication": "La règle des deux trimestres est une convention de presse. Le NBER utilise de nombreuses séries mensuelles (emploi, revenu réel, production). Les cycles ne sont pas périodiques, et un ralentissement sous la tendance concerne le cycle de croissance, pas le cycle classique."
      },
      {
       "q": "Dans le filtre de Hodrick-Prescott, que se passe-t-il quand le paramètre λ tend vers l'infini ?",
       "options": [
        "La tendance se confond avec la série observée",
        "La tendance devient une droite (pente constante)",
        "La composante cyclique devient nulle",
        "Le filtre ne peut plus être calculé"
       ],
       "bonnes": [
        1
       ],
       "explication": "λ pénalise les variations de la pente de la tendance : quand λ est infini, la pente doit être constante et la tendance est une droite (tendance linéaire). Avec λ = 0, la tendance se confond avec la série."
      },
      {
       "q": "Quelles propositions font partie des faits stylisés des cycles ? (deux réponses)",
       "options": [
        "L'investissement est environ trois fois plus volatil que le PIB",
        "La consommation est plus volatile que le PIB",
        "Les heures travaillées fluctuent à peu près autant que le PIB alors que le salaire réel est peu cyclique",
        "Le chômage est procyclique"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "L'investissement est très volatil et la consommation plus lisse que le PIB, conformément au lissage intertemporel. Les heures fluctuent fortement alors que le salaire réel varie peu, ce qui est un défi pour les modèles d'offre de travail. Le chômage est contracyclique (loi d'Okun)."
      },
      {
       "q": "Selon la chronologie du NBER, quelle a été la durée de la Grande Récession américaine ?",
       "options": [
        "8 mois, de mars à novembre 2008",
        "2 mois, de février à avril 2009",
        "36 mois, de 2007 à 2010",
        "18 mois, de décembre 2007 à juin 2009"
       ],
       "bonnes": [
        3
       ],
       "explication": "Le NBER date le pic en décembre 2007 et le creux en juin 2009, soit 18 mois, la plus longue récession américaine depuis la Seconde Guerre mondiale. La récession de deux mois est celle de 2020."
      },
      {
       "q": "Dans un modèle RBC, comment un choc positif et temporaire de productivité affecte-t-il les variables ?",
       "options": [
        "La production augmente, les heures baissent et l'investissement reste stable",
        "La production, les heures et l'investissement augmentent, la consommation augmente moins que la production",
        "Seule la consommation augmente, car les ménages consomment tout le revenu supplémentaire",
        "La production augmente uniquement si la banque centrale baisse ses taux"
       ],
       "bonnes": [
        1
       ],
       "explication": "Le salaire réel et le taux d'intérêt augmentent temporairement : les ménages travaillent plus (substitution intertemporelle) et épargnent une grande partie du revenu supplémentaire, d'où un investissement très réactif et une consommation lissée. La monnaie ne joue aucun rôle."
      },
      {
       "q": "Dans un modèle à deux périodes, (1 − N1)/(1 − N2) = w2 / [β(1 + r)w1]. Avec β = 1, quelles variations accroissent le travail présent N1 relativement au travail futur N2 ? (deux réponses)",
       "options": [
        "Une hausse temporaire du salaire présent w1",
        "Une hausse du salaire futur w2",
        "Une hausse du taux d'intérêt réel r",
        "Une baisse du taux d'intérêt réel r"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Le ratio du loisir présent au loisir futur baisse quand w1 ou r augmentent : il est alors avantageux de travailler aujourd'hui et d'épargner le revenu. Une hausse de w2 incite au contraire à reporter le travail."
      },
      {
       "q": "Quelle critique adresse Galí (1999) à la théorie des cycles réels ?",
       "options": [
        "Les chocs monétaires n'ont aucun effet réel",
        "Les ménages ne lissent pas leur consommation",
        "Un choc technologique positif réduit les heures travaillées à court terme, ce que prédit un modèle à prix rigides",
        "Le résidu de Solow est trop peu volatil pour expliquer les cycles"
       ],
       "bonnes": [
        2
       ],
       "explication": "Par des VAR structurels, Galí identifie les chocs technologiques et trouve qu'ils réduisent les heures à court terme, contrairement à la prédiction des RBC et conformément aux modèles où la demande est contrainte par des prix rigides."
      },
      {
       "q": "Quelles propositions sur le modèle néo-keynésien canonique sont exactes ? (deux réponses)",
       "options": [
        "La courbe IS dynamique découle de la condition d'Euler des ménages",
        "La courbe de Phillips néo-keynésienne fait dépendre l'inflation de l'inflation passée uniquement",
        "Le coefficient κ est d'autant plus élevé que les prix sont rigides",
        "Un coefficient de réaction à l'inflation supérieur à 1 dans la règle de taux assure l'unicité de l'équilibre"
       ],
       "bonnes": [
        0,
        3
       ],
       "explication": "La courbe IS est la condition d'Euler log-linéarisée et le principe de Taylor (φπ > 1) garantit un équilibre unique. La courbe de Phillips néo-keynésienne est tournée vers l'avant (inflation anticipée), et κ diminue quand les prix sont plus rigides."
      },
      {
       "q": "Avec π(t) = 0,99 E π(t+1) + 0,1 x(t), un écart de production attendu de −3 % à la date t et nul ensuite (inflation future anticipée nulle), quelle est l'inflation en t ?",
       "options": [
        "−3 points",
        "−0,03 point",
        "−2,97 points",
        "−0,3 point"
       ],
       "bonnes": [
        3
       ],
       "explication": "En itérant vers l'avant, π(t) = κ Σ β^j E x(t+j) = 0,1 × (−3) = −0,3 point, les écarts futurs étant nuls."
      },
      {
       "q": "Dans la typologie de Minsky, comment qualifier un emprunteur dont les revenus couvrent les intérêts mais pas le remboursement du principal, qu'il doit refinancer ?",
       "options": [
        "Financement spéculatif",
        "Financement couvert",
        "Financement Ponzi",
        "Financement par fonds propres"
       ],
       "bonnes": [
        0
       ],
       "explication": "En financement spéculatif, les intérêts sont couverts mais le principal doit être refinancé. En financement Ponzi, même les intérêts ne sont pas couverts ; en financement couvert, les deux le sont."
      },
      {
       "q": "Quelle proposition sur le cycle financier est exacte ?",
       "options": [
        "Il a la même durée que le cycle économique",
        "Il est mesuré par les fluctuations de l'inflation et des taux directeurs",
        "Les booms du crédit ne permettent pas de prévoir les crises",
        "Il est plus long que le cycle économique et ses pics coïncident souvent avec des crises bancaires"
       ],
       "bonnes": [
        3
       ],
       "explication": "Borio (2014) mesure le cycle financier par le crédit et les prix immobiliers ; il dure environ 15 à 20 ans. Schularick et Taylor (2012) montrent que la croissance du crédit est un bon prédicteur des crises."
      }
     ]
    },
    {
     "id": "mac4-crises-financieres-zone-euro",
     "titre": "Crises financières et zone euro",
     "duree": 55,
     "niveau": "L2",
     "objectifs": [
      "Distinguer crises bancaires, crises de change et crises de dette et en connaître les modèles de référence (Diamond-Dybvig, modèles de crise de change)",
      "Expliquer les causes et la propagation de la crise de 1929 et de la crise des subprimes de 2007-2009",
      "Analyser le levier, la titrisation et les paniques bancaires, et calculer l'effet d'une perte sur les fonds propres",
      "Comprendre la crise des dettes souveraines de la zone euro et le rôle de la BCE en 2012 (OMT)",
      "Présenter l'union bancaire et la régulation macroprudentielle (Bâle III)",
      "Analyser la réponse à la crise Covid (NGEU) et les causes de l'inflation de 2021-2023"
     ],
     "sections": [
      {
       "titre": "Typologie des crises : bancaires, de change, de dette",
       "contenu": "<p>Reinhart et Rogoff (<em>This Time Is Different</em>, 2009), sur huit siècles de données, montrent que les crises financières sont récurrentes, qu'elles suivent souvent des booms du crédit et des entrées de capitaux, et que chaque génération croit à tort que « cette fois, c'est différent ». On distingue trois grandes familles, souvent liées entre elles.</p>\n<h4>Les crises bancaires</h4>\n<p>Une banque transforme des dépôts liquides et de court terme en prêts illiquides et de long terme : c'est la <strong>transformation de maturité</strong>. Le modèle de Diamond et Dybvig (1983) montre qu'elle crée un risque de <strong>panique</strong> : si chaque déposant pense que les autres vont retirer leurs fonds, il a intérêt à retirer les siens avant que la banque ne soit contrainte de liquider ses actifs à perte. Il existe deux équilibres : un équilibre efficace sans panique et un équilibre de <strong>ruée</strong> (bank run) où la banque, pourtant solvable, fait faillite. La panique est autoréalisatrice. Remèdes : l'<strong>assurance des dépôts</strong> (100 000 euros par déposant et par banque dans l'Union européenne) et le <strong>prêteur en dernier ressort</strong>, qui, selon la règle de Bagehot (1873), prête sans limite aux banques solvables, contre de bonnes garanties, à un taux pénalisant. Ces protections créent en retour un <strong>aléa moral</strong> (prise de risque excessive), d'où la réglementation prudentielle.</p>\n<h4>Les crises de change</h4>\n<ul><li><strong>Première génération</strong> (Krugman 1979) : un pays en change fixe finance un déficit budgétaire par création monétaire ; ses réserves s'épuisent et une attaque spéculative, prévisible, survient avant leur épuisement complet (Amérique latine, années 1970-1980).</li>\n<li><strong>Deuxième génération</strong> (Obstfeld 1994) : le gouvernement arbitre entre maintien de la parité et coût du chômage ; si les marchés anticipent un abandon, la hausse des taux nécessaire rend l'abandon optimal. Crise autoréalisatrice, comme celle du Système monétaire européen en 1992-1993 (sortie de la livre sterling).</li>\n<li><strong>Troisième génération</strong> : les crises asiatiques de 1997-1998 combinent fragilité bancaire, endettement en devises et retournement des flux de capitaux. Kaminsky et Reinhart (1999) parlent de <strong>crises jumelles</strong>, bancaires et de change.</li></ul>\n<h4>Les crises de dette souveraine</h4>\n<p>Elles surviennent quand un État ne peut plus se refinancer à un taux soutenable : défaut, restructuration ou programme d'aide (Argentine 2001, Grèce 2012). Le risque est aggravé par l'endettement en devises étrangères ou dans une monnaie que l'État ne contrôle pas.</p>"
      },
      {
       "titre": "La crise de 1929 et la Grande Dépression",
       "contenu": "<p>Après une forte expansion et une bulle boursière à crédit, Wall Street s'effondre en octobre 1929 (« jeudi noir » du 24 octobre). Entre 1929 et 1933, aux États-Unis, la production réelle recule d'environ un quart, les prix d'environ un quart, le chômage atteint environ 25 % de la population active en 1933, et environ 9 000 banques font faillite au cours de vagues de paniques successives (1930, 1931, 1933). La dépression se propage au monde entier par l'étalon-or et le commerce.</p>\n<p>Plusieurs explications se complètent :</p>\n<ul><li><strong>Keynes (1936)</strong> : effondrement de la demande effective, notamment de l'investissement, sans mécanisme de retour automatique au plein emploi.</li>\n<li><strong>Friedman et Schwartz</strong> (<em>A Monetary History of the United States</em>, 1963) : la Réserve fédérale a laissé la masse monétaire chuter d'environ un tiers en ne secourant pas les banques ; c'est la « Grande Contraction ». Bernanke, en 2002, reconnaîtra au nom de la Fed : « Vous avez raison, nous l'avons fait ».</li>\n<li><strong>Fisher (1933)</strong> : la <strong>déflation par la dette</strong>. Les débiteurs surendettés vendent leurs actifs pour rembourser, ce qui fait baisser les prix, alourdit la dette réelle et provoque de nouvelles ventes : « plus les débiteurs remboursent, plus ils doivent ».</li>\n<li><strong>Bernanke (1983)</strong> : les faillites bancaires détruisent l'information accumulée sur les emprunteurs et le capital relationnel ; le coût de l'intermédiation augmente et le crédit se contracte durablement (canal non monétaire).</li>\n<li><strong>Eichengreen</strong> (<em>Golden Fetters</em>, 1992) : l'<strong>étalon-or</strong> a transmis la déflation et empêché les politiques monétaires expansionnistes ; les pays qui en sont sortis tôt (Royaume-Uni en 1931) se sont redressés plus vite que ceux restés attachés à l'or (France, jusqu'en 1936).</li>\n<li>Le <strong>protectionnisme</strong> (tarif Smoot-Hawley de 1930 et représailles) a contracté le commerce mondial.</li></ul>\n<p>Les leçons de 1929 ont structuré la réponse à 2008 : éviter l'effondrement du système bancaire et de la masse monétaire, recourir à des politiques budgétaires expansionnistes, éviter le protectionnisme. Bernanke, spécialiste de la Grande Dépression, présidait alors la Fed ; il a reçu le prix Nobel en 2022 avec Diamond et Dybvig.</p>"
      },
      {
       "titre": "La crise des subprimes (2007-2009)",
       "contenu": "<h4>Les ingrédients</h4>\n<ul><li><strong>Une bulle immobilière</strong> : les prix des logements américains ont fortement augmenté entre la fin des années 1990 et 2006, nourris par des taux bas après 2001, l'abondance d'épargne mondiale et l'anticipation d'une hausse perpétuelle des prix.</li>\n<li><strong>Les crédits subprime</strong> : prêts hypothécaires à des ménages peu solvables, souvent à taux variable après une période initiale à taux bas, accordés en comptant sur la revente du bien.</li>\n<li><strong>La titrisation</strong> : les prêts sont regroupés et transformés en titres (MBS), découpés en <strong>tranches</strong> de risque (la tranche senior étant payée en priorité), puis reconditionnés en CDO. Ce modèle « octroyer pour céder » réduit l'incitation des prêteurs à évaluer les emprunteurs ; les agences de notation attribuent la note maximale à des tranches dont le risque est mal mesuré, car corrélé au marché immobilier national.</li>\n<li><strong>Le levier et le système bancaire parallèle</strong> : banques d'investissement, véhicules hors bilan et fonds monétaires financent des actifs longs par des ressources très courtes (pensions livrées, papier commercial), sans assurance des dépôts ni accès au prêteur en dernier ressort.</li></ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> une banque détient 100 d'actifs financés par 96 de dettes et 4 de fonds propres.<br>1) Levier = actifs / fonds propres = 100 / 4 = 25.<br>2) Si la valeur des actifs baisse de 3 %, les fonds propres tombent à 4 − 3 = 1 : une baisse de 3 % des actifs détruit 75 % des fonds propres (3 × 25 = 75 %). Le levier passe à 97 / 1 = 97.<br>3) Pour revenir à un levier de 25 sans lever de capital, il faut ramener l'actif à 25 × 1 = 25, donc vendre 72 d'actifs : ces <strong>ventes forcées</strong> font baisser les prix et infligent des pertes aux autres banques (Adrian et Shin 2010, levier procyclique).<br>4) Ruée sur les pensions : si la décote exigée par les prêteurs sur les titres en garantie passe de 2 % à 20 %, une institution qui finance 100 de titres doit trouver 18 de fonds propres supplémentaires ou vendre. C'est la ruée sur le marché des pensions décrite par Gorton et Metrick (2012).</div>\n<h4>Le déroulement</h4>\n<p>Les prix immobiliers se retournent en 2006 ; les défauts sur les crédits subprime se multiplient. En août 2007, BNP Paribas gèle trois fonds exposés et le marché interbancaire se tend brutalement : les banques ne savent plus qui détient les actifs toxiques. En mars 2008, Bear Stearns est racheté avec l'aide de la Fed. Le <strong>15 septembre 2008</strong>, <strong>Lehman Brothers</strong> fait faillite, sans sauvetage public ; l'assureur AIG est sauvé le lendemain ; un fonds monétaire « casse le buck » (sa part tombe sous 1 dollar), ce qui déclenche des retraits massifs. La crise devient systémique : gel des marchés de financement, effondrement des cours, contraction du crédit, chute du commerce mondial. Le PIB des pays avancés recule en 2009 (environ −3 % en France, autour de −4,5 % dans la zone euro, −2,5 % aux États-Unis).</p>"
      },
      {
       "titre": "Les politiques de réponse à la crise de 2008",
       "contenu": "<ul><li><strong>Prêteur en dernier ressort</strong> : les banques centrales fournissent massivement de la liquidité ; la BCE passe en octobre 2008 à l'allocation illimitée à taux fixe ; la Fed crée de nombreuses facilités pour les marchés monétaires et ouvre des lignes de swap en dollars aux autres banques centrales.</li>\n<li><strong>Politique monétaire</strong> : la Fed ramène son taux à 0-0,25 % en décembre 2008 et lance son premier programme d'achats d'actifs ; la BCE abaisse son taux de refinancement de 4,25 % à 1 % entre octobre 2008 et mai 2009.</li>\n<li><strong>Sauvetage et recapitalisation</strong> : programme TARP de 700 milliards de dollars (octobre 2008), garanties publiques des émissions bancaires, nationalisations (Royal Bank of Scotland, Fortis, Dexia), tests de résistance de 2009 aux États-Unis.</li>\n<li><strong>Relance budgétaire</strong> : plan américain (ARRA) d'environ 800 milliards de dollars en 2009, plan européen et plans nationaux ; coordination au G20 de Londres (avril 2009).</li></ul>\n<p>Ces réponses ont évité une répétition de 1929, mais au prix d'une forte hausse de la dette publique (les déficits et les sauvetages font passer la dette française d'environ 65 % du PIB en 2007 à plus de 80 % en 2010) et d'un débat sur l'aléa moral (« too big to fail »). Elles ont aussi transféré la fragilité vers les États, ce qui a préparé la crise de la zone euro.</p>"
      },
      {
       "titre": "La crise des dettes souveraines de la zone euro",
       "contenu": "<p>En octobre 2009, le nouveau gouvernement grec révèle que le déficit public est bien supérieur à ce qui avait été annoncé (plus de 12 % du PIB, révisé ensuite à plus de 15 %). Les taux grecs s'envolent ; la Grèce reçoit en mai 2010 un premier programme d'aide de l'Union européenne et du FMI (110 milliards d'euros), suivi de l'Irlande (2010, crise bancaire), du Portugal (2011), d'un second programme grec en 2012 avec une restructuration de la dette détenue par le secteur privé (décote de plus de 50 % en valeur nominale), de l'Espagne (aide à ses banques en 2012), de Chypre (2013) et d'un troisième programme grec (2015). Des mécanismes de solidarité sont créés : le Fonds européen de stabilité financière (2010) puis le Mécanisme européen de stabilité (2012).</p>\n<h4>Les causes</h4>\n<ul><li><strong>Déséquilibres de balance courante</strong> : entrées de capitaux, boom du crédit et perte de compétitivité dans les pays du Sud et en Irlande, excédents allemands.</li>\n<li><strong>Zone monétaire non optimale</strong> (Mundell 1961) : sans change ni politique monétaire propres, l'ajustement passe par la baisse des salaires et des prix (dévaluation interne), lente et récessive.</li>\n<li><strong>Boucle fatale banques-États</strong> : les banques détiennent beaucoup de dette de leur État ; la baisse des titres publics fragilise les banques, et le sauvetage des banques fragilise l'État (Irlande, Espagne).</li>\n<li><strong>Fragilité de la dette sans banque centrale nationale</strong> (De Grauwe 2011) : un pays de la zone euro s'endette dans une monnaie qu'il ne peut pas émettre, comme en devise étrangère ; les marchés peuvent alors déclencher une crise de liquidité autoréalisatrice, ce que ne subissent pas le Royaume-Uni ou le Japon.</li></ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>Application :</strong> à l'été 2012, le taux à dix ans espagnol dépasse 7 % et l'écart italien avec l'Allemagne dépasse 5 points ; les marchés spéculent sur l'éclatement de l'euro. Le 26 juillet 2012 à Londres, Mario Draghi déclare que la BCE fera « tout ce qu'il faudra » (« whatever it takes ») pour préserver l'euro. Le 6 septembre 2012, la BCE annonce les <strong>opérations monétaires sur titres</strong> (OMT) : des achats potentiellement illimités de titres publics de courte maturité d'un pays qui accepte un programme du MES. Les écarts de taux se résorbent rapidement, alors que les OMT n'ont <strong>jamais été utilisées</strong> : en éliminant l'équilibre de panique, la promesse crédible du prêteur en dernier ressort suffit. La Cour de justice de l'Union européenne a validé le programme en 2015 (arrêt Gauweiler).</div>\n<p>Le coût de la crise est considérable : la zone euro connaît une seconde récession en 2011-2013, et la Grèce perd environ un quart de son PIB entre 2008 et 2013, avec un chômage supérieur à 25 %.</p>"
      },
      {
       "titre": "Union bancaire et régulation macroprudentielle",
       "contenu": "<h4>L'union bancaire</h4>\n<p>Décidée en 2012 pour briser la boucle banques-États, elle comprend :</p>\n<ul><li>le <strong>mécanisme de surveillance unique</strong> (MSU), opérationnel depuis novembre 2014 : la BCE supervise directement les banques importantes de la zone euro (un peu plus d'une centaine de groupes), les autres restant supervisées par les autorités nationales sous son contrôle ;</li>\n<li>le <strong>mécanisme de résolution unique</strong> (depuis 2016), avec le Conseil de résolution unique et un fonds de résolution financé par les banques ; la directive sur le redressement et la résolution des banques impose le <strong>renflouement interne</strong> (bail-in) : actionnaires et créanciers supportent les pertes avant tout argent public ;</li>\n<li>un <strong>système européen de garantie des dépôts</strong>, toujours inachevé, la garantie restant nationale (harmonisée à 100 000 euros).</li></ul>\n<h4>Bâle III et la politique macroprudentielle</h4>\n<p>La régulation <strong>microprudentielle</strong> vise la solidité de chaque banque ; la crise a montré qu'elle ne suffit pas, car des comportements individuellement prudents (vendre ses actifs, réduire ses prêts) peuvent être collectivement déstabilisants. La politique <strong>macroprudentielle</strong> vise le risque <strong>systémique</strong>, dans sa dimension temporelle (procyclicité du crédit) et transversale (interconnexions, institutions trop grandes pour faire faillite). Les accords de <strong>Bâle III</strong> (2010, finalisés en 2017) prévoient :</p>\n<table><thead><tr><th>Exigence</th><th>Niveau</th></tr></thead>\n<tbody><tr><td>Fonds propres de base (CET1) minimum</td><td>4,5 % des actifs pondérés par les risques</td></tr>\n<tr><td>Coussin de conservation</td><td>+2,5 %, soit 7 % de CET1</td></tr>\n<tr><td>Coussin contracyclique</td><td>de 0 à 2,5 %, relevé quand le crédit croît trop vite</td></tr>\n<tr><td>Surcharge pour les banques systémiques mondiales</td><td>de 1 à 3,5 %</td></tr>\n<tr><td>Ratio de levier</td><td>fonds propres de catégorie 1 ≥ 3 % de l'exposition totale non pondérée</td></tr>\n<tr><td>Liquidité</td><td>ratio de liquidité à court terme (LCR) et ratio de financement stable à un an (NSFR) ≥ 100 %</td></tr></tbody></table>\n<p>La finalisation de 2017 (plancher limitant le gain des modèles internes à 72,5 % des exigences standard à terme) est appliquée dans l'Union européenne depuis le 1<sup>er</sup> janvier 2025, avec des aménagements. Les autorités disposent aussi d'instruments portant sur les emprunteurs : en France, le Haut Conseil de stabilité financière limite depuis 2022, de façon juridiquement contraignante, le taux d'effort des crédits immobiliers à 35 % du revenu et leur durée à 25 ans, avec une marge de dérogation. Selon le principe de Tinbergen, à un objectif de stabilité financière doit correspondre un instrument dédié, distinct du taux directeur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Piège d'examen :</strong> le ratio de solvabilité de Bâle se calcule sur les actifs <strong>pondérés par les risques</strong>, pas sur le total du bilan. Une banque peut respecter un ratio CET1 de 12 % et avoir un levier élevé si ses actifs sont jugés peu risqués (titres publics notés AAA, prêts immobiliers) : c'est pourquoi on a ajouté un ratio de levier non pondéré.</div>"
      },
      {
       "titre": "La crise Covid, NGEU et l'inflation de 2021-2023",
       "contenu": "<p>La crise sanitaire de 2020 est d'abord un choc d'offre et de demande simultané imposé par les confinements : le PIB de la zone euro baisse d'environ 6 % en 2020 et celui de la France de près de 8 %. La réponse est massive et rapide, instruite par les leçons de 2008 et de 2010-2012 : chômage partiel (dispositifs d'activité partielle en France, de Kurzarbeit en Allemagne), prêts garantis par l'État, suspension des règles budgétaires (clause dérogatoire générale), programme d'achats d'urgence de la BCE (PEPP) et instrument SURE de financement européen du chômage partiel (100 milliards d'euros).</p>\n<p>En juillet 2020, le Conseil européen adopte <strong>NextGenerationEU</strong> (NGEU), un plan de relance de 750 milliards d'euros (aux prix de 2018) financé pour la première fois par un <strong>endettement commun</strong> de grande ampleur émis par la Commission européenne. Son cœur, la facilité pour la reprise et la résilience, combine subventions et prêts, versés contre la réalisation de réformes et d'investissements (transition écologique, numérique) ; il bénéficie surtout aux pays les plus touchés et les moins riches (Italie, Espagne). Les fonds doivent être engagés d'ici 2026. NGEU marque une étape vers une capacité budgétaire européenne, longtemps refusée.</p>\n<h4>L'inflation de 2021-2023 et ses causes</h4>\n<p>L'inflation atteint 10,6 % dans la zone euro en octobre 2022, 9,1 % aux États-Unis en juin 2022, et environ 7 % en France au sens de l'IPCH début 2023, du jamais vu depuis le début des années 1980. Les causes sont multiples et leur poids diffère selon les pays :</p>\n<ul><li><strong>Chocs d'offre</strong> : goulets d'étranglement des chaînes d'approvisionnement lors de la réouverture (semi-conducteurs, transport maritime), puis flambée des prix de l'énergie et des produits alimentaires après l'invasion de l'Ukraine (le prix du gaz européen a été multiplié par plus de dix par rapport à ses niveaux d'avant crise au plus fort de l'été 2022). Ce facteur domine dans la zone euro.</li>\n<li><strong>Demande</strong> : épargne accumulée pendant les confinements, réorientation de la demande vers les biens, et forte relance budgétaire aux États-Unis (plan de 1 900 milliards de dollars en mars 2021), ce qui pèse davantage dans l'inflation américaine.</li>\n<li><strong>Marché du travail tendu</strong> : aux États-Unis, le ratio postes vacants / chômeurs a atteint des records ; la courbe de Phillips est plus pentue quand le marché du travail est très tendu.</li>\n<li><strong>Profits</strong> : dans la zone euro, la hausse des marges unitaires a contribué de façon importante à l'inflation domestique en 2022, les salaires rattrapant ensuite en 2023-2024.</li>\n<li><strong>Politique monétaire</strong> : réaction tardive des banques centrales, qui ont d'abord jugé l'inflation transitoire.</li></ul>\n<p>Bernanke et Blanchard (2023) concluent, pour les États-Unis, que l'essentiel de la poussée initiale provient des chocs de prix (énergie, alimentation, pénuries sectorielles), mais que la composante due à la tension du marché du travail est plus persistante. Les anticipations d'inflation de long terme sont restées ancrées, ce qui a permis une désinflation rapide en 2023-2024 sans hausse forte du chômage. En France, le bouclier tarifaire sur l'énergie a contenu l'inflation au prix d'un coût budgétaire élevé.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les crises financières naissent de booms du crédit et de la transformation de maturité ; elles se propagent par le levier, les ventes forcées et les paniques ; elles se combattent par le prêteur en dernier ressort, la recapitalisation et la relance, et se préviennent par la régulation macroprudentielle. La zone euro a dû inventer en crise ses instruments manquants : MES, OMT, union bancaire, NGEU.</div>"
      }
     ],
     "points_cles": [
      "Reinhart et Rogoff (2009) : les crises financières sont récurrentes et suivent souvent des booms du crédit.",
      "Diamond-Dybvig (1983) : la transformation de maturité crée deux équilibres, dont une panique autoréalisatrice ; remèdes : assurance des dépôts et prêteur en dernier ressort (Bagehot 1873).",
      "Crises de change : première génération (Krugman 1979, fondamentaux), deuxième génération (Obstfeld 1994, autoréalisatrice), troisième génération (Asie 1997, crises jumelles).",
      "1929-1933 : PIB réel et prix en baisse d'environ un quart aux États-Unis, chômage d'environ 25 %, masse monétaire en baisse d'un tiers (Friedman-Schwartz) ; déflation par la dette (Fisher 1933), canal du crédit (Bernanke 1983), étalon-or (Eichengreen 1992).",
      "Subprimes : bulle immobilière, crédits subprime, titrisation et tranches, levier et système bancaire parallèle, ruée sur les pensions ; faillite de Lehman le 15 septembre 2008.",
      "Avec un levier de 25, une perte de 4 % sur les actifs efface les fonds propres ; le désendettement passe par des ventes forcées.",
      "Réponses de 2008 : liquidité illimitée, taux à zéro, QE, TARP (700 Md$), relance budgétaire, coordination au G20.",
      "Crise de la zone euro : révélation du déficit grec (2009), programmes d'aide (2010-2015), boucle banques-États, fragilité d'une dette émise dans une monnaie que l'État ne contrôle pas (De Grauwe).",
      "« Whatever it takes » (Draghi, 26 juillet 2012) et OMT (septembre 2012) : jamais utilisées, elles ont suffi à faire refluer les écarts de taux.",
      "Union bancaire : supervision unique par la BCE (2014), résolution unique et bail-in (2016), garantie des dépôts européenne inachevée.",
      "Bâle III : CET1 4,5 % + coussin de conservation 2,5 %, coussin contracyclique 0-2,5 %, ratio de levier 3 %, LCR et NSFR ; finalisation appliquée dans l'UE depuis 2025.",
      "NGEU (2020) : 750 Md€ aux prix de 2018, premier endettement commun d'ampleur de l'UE.",
      "Inflation 2021-2023 : chocs d'offre (pénuries, énergie), demande et relance (surtout aux États-Unis), marché du travail tendu, marges ; pic de 10,6 % en zone euro (octobre 2022)."
     ],
     "lexique": [
      {
       "terme": "Transformation de maturité",
       "def": "Financement d'actifs longs et illiquides par des ressources courtes et liquides, activité centrale des banques."
      },
      {
       "terme": "Panique bancaire",
       "def": "Retraits massifs et simultanés des déposants, pouvant provoquer la faillite d'une banque même solvable (Diamond-Dybvig 1983)."
      },
      {
       "terme": "Prêteur en dernier ressort",
       "def": "Banque centrale qui prête aux banques solvables mais illiquides en période de panique, contre bonnes garanties (règle de Bagehot)."
      },
      {
       "terme": "Titrisation",
       "def": "Transformation de crédits en titres négociables, souvent découpés en tranches de risque différent."
      },
      {
       "terme": "Effet de levier",
       "def": "Rapport entre le total des actifs et les fonds propres ; il amplifie les gains comme les pertes rapportés aux fonds propres."
      },
      {
       "terme": "Déflation par la dette",
       "def": "Spirale décrite par Fisher (1933) où les ventes d'actifs des débiteurs font baisser les prix et alourdissent la dette réelle."
      },
      {
       "terme": "Boucle banques-États",
       "def": "Interdépendance entre la solidité des banques et celle de leur État, qui se fragilisent mutuellement."
      },
      {
       "terme": "OMT",
       "def": "Opérations monétaires sur titres annoncées par la BCE en 2012 : achats potentiellement illimités de dette publique courte d'un pays sous programme du MES."
      },
      {
       "terme": "Union bancaire",
       "def": "Transfert au niveau européen de la supervision et de la résolution des banques de la zone euro."
      },
      {
       "terme": "Renflouement interne",
       "def": "Absorption des pertes d'une banque en difficulté par ses actionnaires et créanciers avant tout soutien public (bail-in)."
      },
      {
       "terme": "Politique macroprudentielle",
       "def": "Politique visant à limiter le risque systémique, notamment par des exigences de fonds propres contracycliques et des limites au crédit."
      },
      {
       "terme": "Coussin contracyclique",
       "def": "Exigence de fonds propres supplémentaire (0 à 2,5 %) accrue en période de croissance excessive du crédit et relâchée en crise."
      },
      {
       "terme": "NextGenerationEU",
       "def": "Plan de relance européen de 2020 (750 Md€ aux prix de 2018), financé par un endettement commun de l'Union."
      }
     ],
     "qcm": [
      {
       "q": "Quelles propositions sur le modèle de Diamond et Dybvig (1983) sont exactes ? (deux réponses)",
       "options": [
        "Une banque solvable peut faire faillite si les déposants anticipent que les autres vont retirer leurs fonds",
        "Les paniques ne touchent que les banques insolvables",
        "L'assurance des dépôts peut éliminer l'équilibre de panique",
        "La transformation de maturité supprime le risque de liquidité"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Le modèle comporte deux équilibres : la panique est autoréalisatrice et peut toucher une banque solvable. Une assurance des dépôts crédible retire aux déposants la raison de retirer leurs fonds, ce qui élimine l'équilibre de panique."
      },
      {
       "q": "Qu'est-ce qui caractérise une crise de change de deuxième génération (Obstfeld 1994) ?",
       "options": [
        "Elle résulte inévitablement de la monétisation d'un déficit budgétaire",
        "Elle ne concerne que les pays endettés en devises",
        "Elle survient uniquement après une crise bancaire",
        "Elle est autoréalisatrice : l'anticipation d'un abandon de la parité rend cet abandon optimal pour le gouvernement"
       ],
       "bonnes": [
        3
       ],
       "explication": "Dans les modèles de deuxième génération, le gouvernement arbitre entre parité et chômage. Si les marchés anticipent une dévaluation, la hausse des taux nécessaire pour défendre la parité devient trop coûteuse : l'attaque se justifie elle-même, comme lors de la crise du SME de 1992-1993."
      },
      {
       "q": "Quelle explication de la Grande Dépression est associée à Friedman et Schwartz (1963) ?",
       "options": [
        "L'effondrement de l'efficacité marginale du capital et l'insuffisance de la demande effective",
        "La Fed a laissé la masse monétaire chuter d'environ un tiers en ne secourant pas les banques",
        "La destruction de l'information bancaire sur les emprunteurs",
        "Le maintien de l'étalon-or par la France jusqu'en 1936"
       ],
       "bonnes": [
        1
       ],
       "explication": "Friedman et Schwartz attribuent la « Grande Contraction » à la politique de la Réserve fédérale, qui a laissé les faillites bancaires réduire la masse monétaire. L'explication par la demande effective est keynésienne, la destruction d'information est due à Bernanke (1983), l'étalon-or à Eichengreen."
      },
      {
       "q": "Une banque a 200 d'actifs et 10 de fonds propres. Ses actifs perdent 2 % de leur valeur. Quelles propositions sont exactes ? (deux réponses)",
       "options": [
        "Son levier initial est de 20",
        "Elle perd 2 % de ses fonds propres",
        "Ses fonds propres baissent de 40 %",
        "Son levier diminue après la perte"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Levier = 200 / 10 = 20. Une perte de 2 % des actifs vaut 4, soit 40 % des fonds propres (2 % × 20). Les fonds propres tombent à 6 et le levier monte à 196 / 6 ≈ 32,7."
      },
      {
       "q": "Pourquoi la titrisation de type « octroyer pour céder » a-t-elle contribué à la crise des subprimes ?",
       "options": [
        "Elle a obligé les banques à conserver tous les risques à leur bilan",
        "Elle a réduit l'incitation des prêteurs à évaluer la solvabilité des emprunteurs, puisqu'ils revendaient les crédits",
        "Elle a interdit le découpage des titres en tranches",
        "Elle a supprimé le rôle des agences de notation"
       ],
       "bonnes": [
        1
       ],
       "explication": "En revendant les crédits sous forme de titres, l'émetteur ne supporte plus les pertes futures : il a moins intérêt à sélectionner les emprunteurs. Les agences de notation ont joué un rôle central en notant favorablement des tranches risquées."
      },
      {
       "q": "À quelle date Lehman Brothers a-t-elle fait faillite ?",
       "options": [
        "9 août 2007",
        "16 mars 2008",
        "26 juillet 2012",
        "15 septembre 2008"
       ],
       "bonnes": [
        3
       ],
       "explication": "Lehman Brothers fait faillite le 15 septembre 2008, sans sauvetage public. Le 9 août 2007 correspond au gel de fonds de BNP Paribas, mars 2008 au rachat de Bear Stearns et le 26 juillet 2012 au discours de Draghi."
      },
      {
       "q": "Quelles propositions sur la crise des dettes souveraines de la zone euro sont exactes ? (deux réponses)",
       "options": [
        "Les OMT annoncées en 2012 ont fait refluer les écarts de taux sans jamais être utilisées",
        "La crise s'explique uniquement par l'indiscipline budgétaire de tous les pays touchés",
        "Un pays de la zone euro s'endette dans une monnaie qu'il ne contrôle pas, ce qui l'expose à des crises de liquidité autoréalisatrices",
        "L'Irlande et l'Espagne avaient des dettes publiques très élevées avant 2008"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "L'annonce crédible d'un prêteur en dernier ressort pour les États a suffi à éliminer l'équilibre de panique. Selon De Grauwe, l'absence de banque centrale nationale rend les dettes de la zone euro fragiles. L'Irlande et l'Espagne avaient des dettes publiques faibles avant 2008 ; leur crise venait des banques et du crédit privé."
      },
      {
       "q": "Une banque a 1 000 d'actifs pondérés par les risques et 2 500 d'exposition totale. Elle détient 80 de fonds propres CET1 (égaux à ses fonds propres de catégorie 1). Respecte-t-elle les exigences de Bâle III (CET1 + coussin de conservation, levier) ?",
       "options": [
        "Non pour le CET1, oui pour le levier",
        "Oui pour le CET1, non pour le levier",
        "Non pour les deux",
        "Oui pour les deux"
       ],
       "bonnes": [
        3
       ],
       "explication": "Ratio CET1 = 80 / 1 000 = 8 %, au-dessus des 7 % (4,5 % + 2,5 %). Ratio de levier = 80 / 2 500 = 3,2 %, au-dessus de 3 %. Les deux exigences sont respectées, de justesse."
      },
      {
       "q": "Quelle proposition sur l'union bancaire est exacte ?",
       "options": [
        "La garantie européenne des dépôts est pleinement en vigueur depuis 2016",
        "La BCE supervise directement les banques importantes de la zone euro depuis novembre 2014",
        "Le renflouement interne impose aux contribuables de supporter les pertes en priorité",
        "L'union bancaire concerne l'ensemble des pays du G20"
       ],
       "bonnes": [
        1
       ],
       "explication": "Le mécanisme de surveillance unique confie depuis novembre 2014 à la BCE la supervision directe des banques importantes. Le bail-in fait supporter les pertes d'abord aux actionnaires et créanciers ; la garantie européenne des dépôts reste inachevée."
      },
      {
       "q": "Qu'a introduit NextGenerationEU en 2020 ?",
       "options": [
        "Un endettement commun de grande ampleur émis par la Commission européenne pour financer la relance",
        "Une baisse coordonnée des taux de la BCE",
        "La suppression définitive du Pacte de stabilité et de croissance",
        "Un programme d'achats de titres publics par la BCE"
       ],
       "bonnes": [
        0
       ],
       "explication": "NGEU (750 Md€ aux prix de 2018) est financé par des emprunts émis par la Commission au nom de l'Union, une première de cette ampleur. Les achats de titres relèvent de la BCE (PEPP), et les règles budgétaires n'ont été que suspendues."
      },
      {
       "q": "Quelles propositions sur l'inflation de 2021-2023 sont exactes ? (deux réponses)",
       "options": [
        "Elle s'explique uniquement par une création monétaire excessive",
        "Les chocs d'offre (énergie, pénuries) ont joué un rôle majeur, notamment dans la zone euro",
        "La relance budgétaire et la tension du marché du travail ont davantage pesé aux États-Unis",
        "Les anticipations d'inflation de long terme se sont désancrées, provoquant une spirale prix-salaires durable"
       ],
       "bonnes": [
        1,
        2
       ],
       "explication": "Dans la zone euro, l'énergie et les pénuries dominent ; aux États-Unis, la demande soutenue par le plan de 2021 et un marché du travail très tendu comptent davantage (Bernanke-Blanchard 2023). Les anticipations de long terme sont restées ancrées, ce qui a permis une désinflation rapide."
      },
      {
       "q": "Selon la règle de Bagehot (1873), comment doit agir le prêteur en dernier ressort pendant une panique ?",
       "options": [
        "Prêter sans limite à toutes les banques, sans garantie, à taux nul",
        "Refuser de prêter afin de punir les banques imprudentes",
        "Racheter les actifs dépréciés des banques insolvables à leur valeur faciale",
        "Prêter sans limite aux banques solvables, contre de bonnes garanties, à un taux pénalisant"
       ],
       "bonnes": [
        3
       ],
       "explication": "Bagehot recommande de prêter largement pour stopper la panique, mais seulement aux institutions solvables, contre de bonnes garanties et à un taux pénalisant afin de limiter l'aléa moral."
      }
     ]
    }
   ]
  }
 ]
};
