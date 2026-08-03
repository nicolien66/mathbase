/* ════════════════════════════════════════════════════════════════
   MATHBASE — CONTENU DE L'ARBRE DES CONNAISSANCES
   Pour chaque thème : cours rédigé, méthodes + erreurs classiques,
   exemple résolu, problèmes avec solutions, et liens croisés vers
   le tutoriel interactif et le cours animé correspondants.
   ════════════════════════════════════════════════════════════════ */

const THEME_CONTENT = {

/* ═══════════ NOMBRES ═══════════ */

"Entiers & décimaux": {
  tuto:"decimaux", cours:"Entiers & décimaux",
  lecon:{
    definitions:[
      "Les nombres entiers servent à compter : 0, 1, 2, 3…",
      "Un nombre décimal possède une partie entière et une partie décimale, séparées par une virgule : 3,45.",
      "Chaque chiffre a une valeur selon sa position : milliers, centaines, dizaines, unités, puis dixièmes, centièmes, millièmes."
    ],
    proprietes:[
      "Chaque position vaut 10 fois la position située juste à sa droite.",
      "Multiplier par 10, 100, 1000 déplace la virgule de 1, 2, 3 rangs vers la droite.",
      "Diviser par 10, 100, 1000 déplace la virgule de 1, 2, 3 rangs vers la gauche."
    ],
    exemples:[
      "Dans 3,42 : 3 est le chiffre des unités, 4 celui des dixièmes, 2 celui des centièmes.",
      "3,47 × 100 = 347 · 4 ÷ 10 = 0,4 · 4237 ÷ 1000 = 4,237."
    ]
  },
  methodes:{
    etapes:[
      "Repérer la virgule (si le nombre est entier, elle est « cachée » tout à droite).",
      "Compter les zéros du 10, 100, 1000…",
      "Déplacer la virgule d'autant de rangs : vers la droite pour ×, vers la gauche pour ÷.",
      "Compléter avec des zéros s'il manque des chiffres (34 × 100 = 3400 ; 4 ÷ 100 = 0,04)."
    ],
    erreurs:[
      "Déplacer la virgule dans le mauvais sens (× = droite, ÷ = gauche).",
      "Oublier d'ajouter les zéros manquants : 2,5 × 100 = 250 (pas 25).",
      "Croire que 3,12 > 3,9 « parce que 12 > 9 » : on compare rang par rang, 3,9 = 3,90 > 3,12."
    ],
    resolu:{
      enonce:"Calculer 0,72 × 1000.",
      etapes:[
        "×1000 : la virgule avance de 3 rangs vers la droite.",
        "0,72 → 7,2 → 72 → il manque un chiffre : on ajoute un zéro.",
        "0,72 × 1000 = 720."
      ]
    }
  },
  problemes:[
    { q:"Calcule : 5,08 × 100 puis 63 ÷ 1000.", sol:"5,08 × 100 = 508 (virgule 2 rangs à droite). 63 ÷ 1000 = 0,063 (virgule 3 rangs à gauche, on écrit « 0, » et un zéro)." },
    { q:"Range dans l'ordre croissant : 4,3 ; 4,09 ; 4,31 ; 4,1.", sol:"On compare rang par rang : 4,09 < 4,1 < 4,3 < 4,31." },
    { q:"Un carnet coûte 2,35 €. Combien coûtent 10 carnets ? 100 carnets ?", sol:"10 carnets : 2,35 × 10 = 23,50 €. 100 carnets : 2,35 × 100 = 235 €." }
  ]
},

"Fractions": {
  tuto:"fractions", cours:"Fractions",
  lecon:{
    definitions:[
      "Une fraction a/b représente un partage : on coupe un tout en b parts égales et on en prend a.",
      "b est le dénominateur (il « nomme » le partage), a est le numérateur (il « compte » les parts).",
      "Une fraction est aussi un quotient : 3/4 = 3 ÷ 4 = 0,75."
    ],
    proprietes:[
      "Plus le dénominateur est grand, plus les parts sont petites : 1/8 < 1/4.",
      "On ne change pas une fraction en multipliant (ou divisant) le haut ET le bas par le même nombre : 6/8 = 3/4.",
      "Pour additionner des fractions, il faut le même dénominateur : 1/4 + 2/4 = 3/4.",
      "Prendre a/b d'une quantité N : on calcule N ÷ b × a."
    ],
    exemples:[
      "6/8 = 3/4 : on divise haut et bas par 2.",
      "1/2 + 1/4 = 2/4 + 1/4 = 3/4.",
      "Les 3/4 de 28 élèves : 28 ÷ 4 × 3 = 21 élèves."
    ]
  },
  methodes:{
    etapes:[
      "Pour simplifier : chercher un diviseur commun au numérateur et au dénominateur (au mieux, le PGCD).",
      "Pour additionner : mettre au même dénominateur, additionner les numérateurs, garder le dénominateur.",
      "Pour multiplier : numérateurs entre eux, dénominateurs entre eux (simplifier avant si possible).",
      "Pour une fraction de quantité : diviser par le dénominateur, multiplier par le numérateur."
    ],
    erreurs:[
      "Additionner les dénominateurs : 1/4 + 1/4 ≠ 2/8. La bonne réponse est 2/4 = 1/2.",
      "Simplifier en soustrayant au lieu de diviser.",
      "Oublier de mettre au même dénominateur avant d'additionner ou de comparer."
    ],
    resolu:{
      enonce:"Calculer 2/3 + 1/6.",
      etapes:[
        "Même dénominateur : 6 convient, car 2/3 = 4/6.",
        "4/6 + 1/6 = 5/6.",
        "5/6 est irréductible : c'est le résultat."
      ]
    }
  },
  problemes:[
    { q:"Simplifie 18/24 puis 45/60.", sol:"18/24 = 3/4 (÷6). 45/60 = 3/4 (÷15). Les deux fractions sont égales !" },
    { q:"Calcule 3/5 + 1/10.", sol:"3/5 = 6/10, donc 6/10 + 1/10 = 7/10." },
    { q:"Un réservoir de 60 L est rempli aux 2/3. Quel volume d'eau contient-il ?", sol:"60 ÷ 3 = 20 et 20 × 2 = 40 L." }
  ]
},

"Nombres relatifs": {
  tuto:"relatifs", cours:"Nombres relatifs",
  lecon:{
    definitions:[
      "Un nombre relatif est un nombre muni d'un signe : positif (+5) ou négatif (−3).",
      "Sur une droite graduée, les négatifs sont à gauche de zéro, les positifs à droite.",
      "La distance à zéro de −3 est 3 ; deux nombres opposés (comme +4 et −4) ont la même distance à zéro."
    ],
    proprietes:[
      "Addition, même signe : on additionne les distances à zéro et on garde le signe. (−3) + (−5) = −8.",
      "Addition, signes contraires : on soustrait les distances, on prend le signe de celle qui l'emporte. (−7) + (+3) = −4.",
      "Soustraire, c'est additionner l'opposé : 5 − (−2) = 5 + 2 = 7.",
      "Règle des signes pour × et ÷ : mêmes signes → +, signes différents → −."
    ],
    exemples:[
      "(−3) × (−6) = +18 · (−3) × 4 = −12 · (−20) ÷ 4 = −5.",
      "Température : −3 °C, puis il fait 5 °C de plus → −3 + 5 = +2 °C."
    ]
  },
  methodes:{
    etapes:[
      "Additionner : comparer les signes (identiques → on ajoute ; différents → on soustrait).",
      "Soustraire : transformer en addition de l'opposé, puis appliquer la règle de l'addition.",
      "Multiplier/diviser : d'abord le SIGNE du résultat (règle des signes), ensuite le calcul des distances.",
      "Toujours vérifier avec la droite graduée en cas de doute."
    ],
    erreurs:[
      "Croire que −8 > −3 : sur la droite, −8 est plus à gauche, donc −8 < −3.",
      "Appliquer la règle des signes à l'ADDITION : (−3) + (−5) = −8, pas +8 !",
      "Perdre un signe en cours de calcul : écrire chaque étape."
    ],
    resolu:{
      enonce:"Calculer A = (−4) − (−9) + (−2).",
      etapes:[
        "Soustraire (−9), c'est ajouter +9 : A = (−4) + 9 + (−2).",
        "(−4) + 9 = +5 (signes contraires : 9 − 4 = 5, le + l'emporte).",
        "5 + (−2) = +3. Donc A = 3."
      ]
    }
  },
  problemes:[
    { q:"Calcule : (−12) + 7 puis (−5) − (−8).", sol:"(−12) + 7 = −5. (−5) − (−8) = −5 + 8 = +3." },
    { q:"Calcule : (−2) × (−3) × (−5).", sol:"(−2)×(−3) = +6, puis 6 × (−5) = −30. (Nombre impair de signes − → résultat négatif.)" },
    { q:"À 7 h il fait −6 °C. À midi la température a augmenté de 9 °C. Quelle est-elle ?", sol:"−6 + 9 = +3 °C." }
  ]
},

"Puissances": {
  tuto:"puissances", cours:"Puissances",
  lecon:{
    definitions:[
      "aⁿ (« a puissance n ») est le produit de n facteurs égaux à a : 2³ = 2 × 2 × 2 = 8.",
      "a est la base, n est l'exposant.",
      "Par convention : a¹ = a et a⁰ = 1 (pour a non nul)."
    ],
    proprietes:[
      "aᵐ × aⁿ = aᵐ⁺ⁿ (même base : on additionne les exposants).",
      "aᵐ ÷ aⁿ = aᵐ⁻ⁿ.",
      "10ⁿ s'écrit 1 suivi de n zéros ; 10⁻ⁿ = 0,00…1 (n rangs après la virgule).",
      "L'écriture scientifique : a × 10ⁿ avec 1 ≤ a < 10."
    ],
    exemples:[
      "10⁴ = 10 000 · 2⁵ = 32 · 3² × 3³ = 3⁵ = 243.",
      "4 500 000 = 4,5 × 10⁶."
    ]
  },
  methodes:{
    etapes:[
      "Identifier la base et l'exposant.",
      "Même base ? Appliquer les règles sur les exposants avant de calculer.",
      "Pour l'écriture scientifique : placer la virgule après le premier chiffre non nul, compter le décalage.",
      "Vérifier l'ordre de grandeur du résultat."
    ],
    erreurs:[
      "Confondre 2³ avec 2 × 3 : 2³ = 8, pas 6 !",
      "Multiplier les exposants au lieu de les additionner : 2³ × 2² = 2⁵, pas 2⁶.",
      "Écrire a⁰ = 0 : c'est 1."
    ],
    resolu:{
      enonce:"Écrire 5² × 5⁴ sous la forme d'une seule puissance, puis calculer 10³ × 10².",
      etapes:[
        "Même base 5 : 5² × 5⁴ = 5²⁺⁴ = 5⁶.",
        "10³ × 10² = 10⁵.",
        "10⁵ = 100 000."
      ]
    }
  },
  problemes:[
    { q:"Calcule 3⁴ et 10⁶.", sol:"3⁴ = 3×3×3×3 = 81. 10⁶ = 1 000 000." },
    { q:"Écris sous une seule puissance : 7⁵ × 7³ puis 2⁸ ÷ 2³.", sol:"7⁵ × 7³ = 7⁸. 2⁸ ÷ 2³ = 2⁵ = 32." },
    { q:"Donne l'écriture scientifique de 384 000 (distance Terre–Lune en km).", sol:"384 000 = 3,84 × 10⁵ km." }
  ]
},

"Proportionnalité": {
  tuto:"proportionnalite", cours:"Proportionnalité",
  lecon:{
    definitions:[
      "Deux grandeurs sont proportionnelles quand on passe de l'une à l'autre en multipliant toujours par le même nombre : le coefficient de proportionnalité.",
      "Un tableau de proportionnalité regroupe les valeurs ; toutes les colonnes respectent le même coefficient."
    ],
    proprietes:[
      "Règle de trois : on divise pour revenir à l'unité, puis on multiplie.",
      "Produit en croix : si a → b et c → d sont proportionnels, alors a × d = b × c.",
      "On peut additionner deux colonnes d'un tableau de proportionnalité, ou multiplier une colonne par un nombre."
    ],
    exemples:[
      "3 stylos coûtent 6 € → 1 stylo coûte 2 € → 5 stylos coûtent 10 €.",
      "4 → 10 et 6 → x : 4x = 60, donc x = 15."
    ]
  },
  methodes:{
    etapes:[
      "Vérifier que la situation est bien proportionnelle (doubler l'une double l'autre ?).",
      "Organiser les données dans un tableau.",
      "Choisir : passage à l'unité (règle de trois) ou produit en croix.",
      "Conclure avec une phrase et l'unité."
    ],
    erreurs:[
      "Appliquer la proportionnalité à une situation qui ne l'est pas (l'âge et la taille !).",
      "Inverser le produit en croix : bien croiser les diagonales du tableau.",
      "Oublier l'unité dans la réponse."
    ],
    resolu:{
      enonce:"3 kg de pommes coûtent 7,50 €. Combien coûtent 5 kg ?",
      etapes:[
        "Prix de 1 kg : 7,50 ÷ 3 = 2,50 €.",
        "Prix de 5 kg : 2,50 × 5 = 12,50 €.",
        "5 kg de pommes coûtent 12,50 €."
      ]
    }
  },
  problemes:[
    { q:"7 cahiers coûtent 10,50 €. Combien coûtent 12 cahiers ?", sol:"1 cahier : 10,50 ÷ 7 = 1,50 €. 12 cahiers : 1,50 × 12 = 18 €." },
    { q:"Une voiture consomme 6 L pour 100 km. Quelle consommation pour 250 km ?", sol:"Pour 50 km : 3 L. Pour 250 km = 5 × 50 km : 5 × 3 = 15 L." },
    { q:"Sur une carte à l'échelle 1/25 000, deux villages sont séparés de 8 cm. Distance réelle ?", sol:"8 × 25 000 = 200 000 cm = 2 km." }
  ]
},

"Pourcentages": {
  tuto:"pourcentages", cours:"Pourcentages",
  lecon:{
    definitions:[
      "Un pourcentage t % est une proportion ramenée à 100 : t % = t/100.",
      "« 30 % des élèves » signifie 30 élèves sur 100."
    ],
    proprietes:[
      "Prendre t % de N : calculer N × t ÷ 100.",
      "Augmenter de t % : multiplier par (1 + t/100).",
      "Diminuer de t % : multiplier par (1 − t/100).",
      "50 % = la moitié, 25 % = le quart, 10 % = le dixième."
    ],
    exemples:[
      "20 % de 150 = 150 × 0,20 = 30.",
      "Baisse de 30 % sur 60 € : 60 × 0,70 = 42 €."
    ]
  },
  methodes:{
    etapes:[
      "Traduire le pourcentage en fraction ou en décimal (30 % = 0,30).",
      "Pour « t % de N » : multiplier.",
      "Pour une évolution : chercher le coefficient multiplicateur (1 ± t/100).",
      "Pour retrouver un pourcentage : partie ÷ total × 100."
    ],
    erreurs:[
      "Soustraire le pourcentage au prix : 60 € − 30 % ≠ 60 − 30. La réduction porte sur le prix !",
      "Additionner deux évolutions : +10 % puis +10 % ≠ +20 % (c'est ×1,1 ×1,1 = ×1,21, soit +21 %).",
      "Confondre « 30 % de 60 » (=18) et « 30 % en plus » (=78)."
    ],
    resolu:{
      enonce:"Un blouson à 80 € est soldé à −25 %. Quel est son nouveau prix ?",
      etapes:[
        "Coefficient : 1 − 25/100 = 0,75.",
        "80 × 0,75 = 60.",
        "Le blouson coûte 60 €. (Vérification : réduction 80 × 0,25 = 20 €, et 80 − 20 = 60 €.)"
      ]
    }
  },
  problemes:[
    { q:"Calcule 15 % de 240.", sol:"240 × 15 ÷ 100 = 36." },
    { q:"Un abonnement à 25 € augmente de 8 %. Nouveau prix ?", sol:"25 × 1,08 = 27 €." },
    { q:"Dans une classe de 25 élèves, 18 ont eu la moyenne. Quel pourcentage ?", sol:"18 ÷ 25 × 100 = 72 %." }
  ]
},

"Longueur": {
  tuto:"longueur", cours:"Longueur",
  lecon:{
    definitions:[
      "La longueur mesure une distance ; l'unité de référence est le mètre (m).",
      "La table des unités : km, hm, dam, m, dm, cm, mm.",
      "Le périmètre d'une figure est la longueur de son contour."
    ],
    proprietes:[
      "Chaque unité vaut 10 fois celle qui la suit : 1 m = 10 dm = 100 cm = 1000 mm.",
      "Périmètre d'un carré de côté c : P = 4 × c.",
      "Périmètre d'un rectangle : P = 2 × (L + l).",
      "Périmètre (circonférence) d'un cercle : P = 2 × π × r."
    ],
    exemples:[
      "2,5 m = 250 cm · 3 km = 3000 m.",
      "Carré de côté 4 cm : P = 16 cm."
    ]
  },
  methodes:{
    etapes:[
      "Placer le nombre dans la table des unités (un chiffre par colonne).",
      "Décaler la virgule vers la nouvelle unité.",
      "Pour un périmètre : convertir toutes les longueurs dans la MÊME unité, puis additionner.",
      "Vérifier la vraisemblance (une porte ne mesure pas 20 m !)."
    ],
    erreurs:[
      "Sauter une colonne dans les conversions (dam et hm sont souvent oubliés).",
      "Additionner des cm avec des m sans convertir.",
      "Confondre périmètre (contour) et aire (surface)."
    ],
    resolu:{
      enonce:"Un jardin rectangulaire mesure 12,5 m sur 8 m. Quelle longueur de grillage faut-il pour le clôturer ?",
      etapes:[
        "Le grillage suit le contour : c'est un périmètre.",
        "P = 2 × (12,5 + 8) = 2 × 20,5.",
        "P = 41 m de grillage."
      ]
    }
  },
  problemes:[
    { q:"Convertis : 3,2 km en m ; 45 mm en cm ; 0,7 m en mm.", sol:"3,2 km = 3200 m · 45 mm = 4,5 cm · 0,7 m = 700 mm." },
    { q:"Calcule le périmètre d'un rectangle de 9 cm sur 5,5 cm.", sol:"P = 2 × (9 + 5,5) = 2 × 14,5 = 29 cm." },
    { q:"Une piste circulaire a un rayon de 50 m. Quelle distance pour 3 tours ? (π ≈ 3,14)", sol:"Un tour : 2 × π × 50 ≈ 314 m. Trois tours : ≈ 942 m." }
  ]
},

"Aires": {
  tuto:"aires", cours:"Aires",
  lecon:{
    definitions:[
      "L'aire mesure la surface d'une figure : le nombre d'unités carrées qui la recouvrent.",
      "Les unités d'aire : km², hm² (hectare), dam² (are), m², dm², cm², mm²."
    ],
    proprietes:[
      "Chaque unité d'aire vaut 100 fois la suivante : 1 m² = 100 dm² = 10 000 cm².",
      "Rectangle : A = longueur × largeur · Carré : A = c².",
      "Triangle : A = (base × hauteur) ÷ 2.",
      "Disque : A = π × r²."
    ],
    exemples:[
      "Rectangle 5 × 3 : A = 15 cm².",
      "Disque de rayon 2 : A = π × 4 ≈ 12,57 cm²."
    ]
  },
  methodes:{
    etapes:[
      "Identifier la figure (ou la découper en figures simples).",
      "Vérifier que toutes les longueurs sont dans la même unité.",
      "Appliquer la formule (attention : pour le triangle, la hauteur est perpendiculaire à la base).",
      "Donner le résultat en unités CARRÉES."
    ],
    erreurs:[
      "Convertir les aires comme des longueurs : 1 m² = 10 000 cm², pas 100 !",
      "Oublier le ÷2 dans l'aire du triangle.",
      "Prendre un côté penché comme hauteur : la hauteur est toujours perpendiculaire."
    ],
    resolu:{
      enonce:"Calculer l'aire d'un triangle de base 6 cm et de hauteur 4 cm.",
      etapes:[
        "Formule : A = (base × hauteur) ÷ 2.",
        "A = (6 × 4) ÷ 2 = 24 ÷ 2.",
        "A = 12 cm²."
      ]
    }
  },
  problemes:[
    { q:"Calcule l'aire d'un carré de côté 7 cm.", sol:"A = 7² = 49 cm²." },
    { q:"Une pièce en L est formée d'un rectangle 5 m × 3 m et d'un carré de côté 2 m. Aire totale ?", sol:"15 + 4 = 19 m²." },
    { q:"Convertis 2,5 m² en cm².", sol:"1 m² = 10 000 cm², donc 2,5 m² = 25 000 cm²." }
  ]
},

"Repérage temps & durées": {
  tuto:"durees", cours:"Repérage temps & durées",
  lecon:{
    definitions:[
      "L'heure repère un instant (il est 9 h 40) ; la durée mesure le temps écoulé entre deux instants (1 h 35 min).",
      "1 h = 60 min et 1 min = 60 s : le temps se compte en base 60, pas en base 10 !"
    ],
    proprietes:[
      "Durée = instant d'arrivée − instant de départ.",
      "1 h 30 min = 1,5 h (car 30 min = 0,5 h). Attention : 1 h 30 ≠ 1,30 h.",
      "Pour additionner des durées, on convertit les minutes qui dépassent 60 en heures."
    ],
    exemples:[
      "De 9 h 40 à 11 h 15 : 20 min (jusqu'à 10 h) + 1 h 15 = 1 h 35.",
      "45 min + 30 min = 75 min = 1 h 15."
    ]
  },
  methodes:{
    etapes:[
      "Découper le trajet en morceaux simples : jusqu'à l'heure ronde suivante, puis les heures pleines, puis le reste.",
      "Additionner les morceaux.",
      "Convertir si les minutes dépassent 60.",
      "Vérifier sur une frise ou une horloge."
    ],
    erreurs:[
      "Poser la soustraction comme en base 10 : 11 h 15 − 9 h 40 ne se calcule pas chiffre à chiffre !",
      "Écrire 1 h 30 = 1,3 h (c'est 1,5 h).",
      "Oublier de convertir 75 min en 1 h 15."
    ],
    resolu:{
      enonce:"Un film commence à 20 h 45 et dure 2 h 20. À quelle heure finit-il ?",
      etapes:[
        "20 h 45 + 2 h = 22 h 45.",
        "22 h 45 + 20 min = 23 h 05.",
        "Le film se termine à 23 h 05."
      ]
    }
  },
  problemes:[
    { q:"Quelle est la durée entre 8 h 25 et 12 h 10 ?", sol:"De 8 h 25 à 12 h 25 : 4 h. On retire 15 min : 3 h 45." },
    { q:"Convertis 2 h 45 en minutes, puis 200 min en h et min.", sol:"2 h 45 = 165 min. 200 min = 3 h 20 (car 180 min = 3 h)." },
    { q:"Un train part à 14 h 50 et roule 1 h 35. Heure d'arrivée ?", sol:"14 h 50 + 1 h = 15 h 50, + 35 min = 16 h 25." }
  ]
},

"Arithmétique": {
  tuto:"arithmetique", cours:"Arithmétique",
  lecon:{
    definitions:[
      "b est un diviseur de a si la division de a par b tombe juste ; a est alors un multiple de b.",
      "Un nombre premier possède exactement deux diviseurs : 1 et lui-même (2, 3, 5, 7, 11, 13…).",
      "Le PGCD de deux nombres est leur Plus Grand Commun Diviseur."
    ],
    proprietes:[
      "Critères de divisibilité : par 2 (chiffre pair), par 3 (somme des chiffres), par 5 (finit par 0 ou 5), par 9, par 10.",
      "Tout entier > 1 se décompose de façon unique en produit de facteurs premiers.",
      "Une fraction est irréductible quand son numérateur et son dénominateur ont pour PGCD 1."
    ],
    exemples:[
      "84 = 2² × 3 × 7 · 60 = 2² × 3 × 5.",
      "PGCD(84, 60) = 2² × 3 = 12, donc 60/84 = 5/7."
    ]
  },
  methodes:{
    etapes:[
      "Pour décomposer : diviser par 2 tant que possible, puis par 3, 5, 7… jusqu'à obtenir 1.",
      "Pour le PGCD : décomposer les deux nombres, garder les facteurs communs avec leurs plus petits exposants.",
      "Pour simplifier une fraction : diviser haut et bas par le PGCD.",
      "Vérifier en remultipliant."
    ],
    erreurs:[
      "Oublier que 1 n'est PAS premier (il n'a qu'un diviseur).",
      "S'arrêter trop tôt dans la décomposition (12 = 4 × 3 n'est pas terminé : 4 = 2²).",
      "Confondre diviseur et multiple."
    ],
    resolu:{
      enonce:"Rendre irréductible la fraction 84/60.",
      etapes:[
        "84 = 2² × 3 × 7 et 60 = 2² × 3 × 5.",
        "PGCD = 2² × 3 = 12.",
        "84/60 = (84 ÷ 12)/(60 ÷ 12) = 7/5."
      ]
    }
  },
  problemes:[
    { q:"Liste tous les diviseurs de 36.", sol:"1, 2, 3, 4, 6, 9, 12, 18, 36." },
    { q:"Décompose 90 en facteurs premiers.", sol:"90 = 2 × 45 = 2 × 3 × 15 = 2 × 3² × 5." },
    { q:"On veut ranger 84 billes rouges et 60 billes bleues en sachets identiques, sans reste. Combien de sachets au maximum ?", sol:"PGCD(84, 60) = 12 sachets (chacun : 7 rouges et 5 bleues)." }
  ]
},

/* ═══════════ ALGÈBRE ═══════════ */

"Enchaînement d'opérations": {
  tuto:"operations", cours:"Enchaînement d'opérations",
  lecon:{
    definitions:[
      "Une expression numérique enchaîne plusieurs opérations : 7 + 3 × (8 − 5).",
      "Les priorités opératoires fixent l'ordre dans lequel on calcule."
    ],
    proprietes:[
      "1. Les parenthèses d'abord (les plus intérieures en premier).",
      "2. Puis les multiplications et divisions.",
      "3. Enfin les additions et soustractions, de gauche à droite.",
      "Une barre de fraction agit comme des parenthèses au numérateur ET au dénominateur."
    ],
    exemples:[
      "3 + 4 × 2 = 3 + 8 = 11 (pas 14 !).",
      "(3 + 4) × 2 = 14 : les parenthèses changent tout."
    ]
  },
  methodes:{
    etapes:[
      "Souligner le calcul prioritaire.",
      "L'effectuer et réécrire TOUTE l'expression en dessous.",
      "Recommencer jusqu'au résultat.",
      "Une seule opération par ligne : c'est la garantie zéro erreur."
    ],
    erreurs:[
      "Calculer de gauche à droite sans priorités : 20 − 2 × 5 = 10, pas 90.",
      "Faire deux opérations à la fois et en perdre une.",
      "Oublier une partie de l'expression en la réécrivant."
    ],
    resolu:{
      enonce:"Calculer A = 5 + 2 × (9 − 4) − 3.",
      etapes:[
        "Parenthèses : 9 − 4 = 5 → A = 5 + 2 × 5 − 3.",
        "Multiplication : 2 × 5 = 10 → A = 5 + 10 − 3.",
        "Gauche à droite : A = 15 − 3 = 12."
      ]
    }
  },
  problemes:[
    { q:"Calcule : 18 − 3 × 4 puis (18 − 3) × 4.", sol:"18 − 12 = 6 et 15 × 4 = 60." },
    { q:"Calcule : 40 ÷ (2 + 3) + 6 × 2.", sol:"40 ÷ 5 + 12 = 8 + 12 = 20." },
    { q:"Place des parenthèses pour que 4 + 2 × 5 = 30.", sol:"(4 + 2) × 5 = 30." }
  ]
},

"Calcul littéral": {
  tuto:"litteral", cours:"Calcul littéral",
  lecon:{
    definitions:[
      "En calcul littéral, des lettres représentent des nombres inconnus ou quelconques.",
      "3x signifie 3 × x (le signe × est sous-entendu devant une lettre ou une parenthèse).",
      "Des termes sont semblables quand ils ont exactement la même partie littérale : 5x et −2x, mais pas 5x et 5x².",
      "Développer : transformer un produit en somme (enlever les parenthèses).",
      "Factoriser : le chemin inverse, transformer une somme en produit (mettre en facteur commun)."
    ],
    proprietes:[
      "Réduire = regrouper les termes semblables : 5x + 3 − 2x + 7 = 3x + 10.",
      "x + x = 2x, mais x × x = x².",
      "Substituer = remplacer la lettre par une valeur pour tester ou calculer.",
      "Distributivité simple : k(a + b) = ka + kb.",
      "Double distributivité : (a + b)(c + d) = ac + ad + bc + bd.",
      "Identités remarquables : (a+b)² = a² + 2ab + b² · (a−b)² = a² − 2ab + b² · a² − b² = (a−b)(a+b)."
    ],
    exemples:[
      "2x + 5 + 3x − 1 = 5x + 4.",
      "Pour x = 4 : 2x + 1 = 2 × 4 + 1 = 9.",
      "3(x + 2) = 3x + 6 · (x + 1)(x + 4) = x² + 5x + 4.",
      "5x + 10 = 5(x + 2) · x² − 9 = (x − 3)(x + 3)."
    ]
  },
  methodes:{
    etapes:[
      "Réduire : repérer les familles de termes (les x², les x, les nombres), les regrouper avec leur signe, additionner les coefficients, puis ranger le résultat (x² puis x puis nombres).",
      "Développer : distribuer chaque terme en gardant bien les signes, puis réduire.",
      "Factoriser : chercher le facteur commun (un nombre, une lettre, ou une parenthèse entière).",
      "Sinon, reconnaître une identité remarquable (deux carrés ? un double produit ?).",
      "Vérifier : re-développer le résultat factorisé, ou substituer une valeur de x dans les deux expressions."
    ],
    erreurs:[
      "Additionner 3x et 5 en « 8x » : ils ne sont pas semblables !",
      "Perdre le signe − devant un terme lors du regroupement.",
      "Écrire x × x = 2x au lieu de x².",
      "Oublier de distribuer sur le deuxième terme : 3(x + 2) = 3x + 2 est faux.",
      "Erreur de signe avec un − devant la parenthèse : −(x − 3) = −x + 3.",
      "(a + b)² = a² + b² : FAUX, il manque le double produit 2ab."
    ],
    resolu:{
      enonce:"Réduire B = 4x² + 3x − x² + 5 − 7x, puis développer et réduire C = (x + 3)(x − 2) + 4x.",
      etapes:[
        "B — les x² : 4x² − x² = 3x² ; les x : 3x − 7x = −4x. Donc B = 3x² − 4x + 5.",
        "C — double distributivité : (x + 3)(x − 2) = x² − 2x + 3x − 6 = x² + x − 6.",
        "C = x² + x − 6 + 4x, soit C = x² + 5x − 6."
      ]
    }
  },
  problemes:[
    { q:"Réduis : 7a + 2 − 3a + 9.", sol:"7a − 3a + 2 + 9 = 4a + 11." },
    { q:"Calcule la valeur de 3x² − 2x pour x = 2.", sol:"3 × 4 − 2 × 2 = 12 − 4 = 8." },
    { q:"Exprime le périmètre d'un rectangle de largeur x et de longueur x + 3.", sol:"P = 2(x + x + 3) = 2(2x + 3) = 4x + 6." },
    { q:"Développe : 5(2x − 3) puis (x + 4)².", sol:"10x − 15 et x² + 8x + 16." },
    { q:"Factorise : 7x + 21 puis x² − 25.", sol:"7(x + 3) et (x − 5)(x + 5)." },
    { q:"Calcule astucieusement 101² à l'aide d'une identité remarquable.", sol:"101² = (100 + 1)² = 10000 + 200 + 1 = 10201." }
  ]
},

"Équations": {
  tuto:"equation1", cours:"Équations du 1er degré",
  lecon:{
    definitions:[
      "Une équation est une égalité contenant un nombre inconnu, noté x : 3x + 5 = 20.",
      "Résoudre l'équation, c'est trouver TOUTES les valeurs de x qui rendent l'égalité vraie.",
      "Une équation est comme une balance en équilibre : les deux plateaux doivent rester égaux."
    ],
    proprietes:[
      "On peut ajouter ou soustraire le même nombre des deux côtés.",
      "On peut multiplier ou diviser les deux côtés par le même nombre non nul.",
      "Un produit est nul si et seulement si l'un de ses facteurs est nul (équation produit)."
    ],
    exemples:[
      "3x + 5 = 20 → 3x = 15 → x = 5.",
      "7x − 4 = 3x + 12 → 4x = 16 → x = 4."
    ]
  },
  methodes:{
    etapes:[
      "Regrouper les termes en x d'un côté, les nombres de l'autre (en changeant les signes au passage).",
      "Réduire chaque côté.",
      "Diviser par le coefficient de x.",
      "VÉRIFIER en remplaçant x par la valeur trouvée dans l'équation de départ."
    ],
    erreurs:[
      "Ne faire l'opération que d'un seul côté de l'égalité.",
      "Oublier de changer le signe en « faisant passer » un terme.",
      "Ne pas vérifier : la vérification détecte presque toutes les erreurs !"
    ],
    resolu:{
      enonce:"Résoudre 5x − 7 = 2x + 8.",
      etapes:[
        "−2x des deux côtés : 3x − 7 = 8.",
        "+7 des deux côtés : 3x = 15.",
        "÷3 : x = 5. Vérification : 5×5−7 = 18 et 2×5+8 = 18 ✓."
      ]
    }
  },
  problemes:[
    { q:"Résous : 4x + 9 = 25.", sol:"4x = 16, donc x = 4." },
    { q:"Résous : 6x − 5 = 2x + 11.", sol:"4x = 16, donc x = 4." },
    { q:"Je pense à un nombre, je le triple, j'ajoute 7 et j'obtiens 25. Quel est ce nombre ?", sol:"3x + 7 = 25 → 3x = 18 → x = 6." }
  ]
},

"Inéquations": {
  tuto:"inequations", cours:"Inéquations",
  lecon:{
    definitions:[
      "Une inéquation est une inégalité avec une inconnue : 2x + 1 < 7.",
      "Ses solutions forment en général une infinité de nombres (un intervalle), qu'on représente sur une droite graduée."
    ],
    proprietes:[
      "On peut ajouter ou soustraire le même nombre des deux côtés sans changer le sens.",
      "On peut multiplier ou diviser par un nombre POSITIF sans changer le sens.",
      "Multiplier ou diviser par un nombre NÉGATIF inverse le sens de l'inégalité."
    ],
    exemples:[
      "x + 4 ≤ 9 → x ≤ 5.",
      "−2x > 4 → x < −2 (on a divisé par −2 : le sens s'inverse)."
    ]
  },
  methodes:{
    etapes:[
      "Résoudre comme une équation : regrouper, réduire.",
      "Au moment de diviser par le coefficient de x : vérifier son signe !",
      "S'il est négatif, retourner le symbole (< devient >).",
      "Représenter les solutions sur une droite graduée (crochet ou rond selon ≤ ou <)."
    ],
    erreurs:[
      "Oublier d'inverser le sens en divisant par un négatif : c'est LE piège du chapitre.",
      "Donner une seule valeur comme solution au lieu d'un intervalle.",
      "Confondre < (strict) et ≤ (large) dans la représentation."
    ],
    resolu:{
      enonce:"Résoudre −3x + 6 ≥ 0.",
      etapes:[
        "−6 des deux côtés : −3x ≥ −6.",
        "÷(−3), négatif → on inverse : x ≤ 2.",
        "Les solutions sont tous les nombres inférieurs ou égaux à 2."
      ]
    }
  },
  problemes:[
    { q:"Résous : 2x − 3 < 7.", sol:"2x < 10, donc x < 5." },
    { q:"Résous : 5 − 4x ≤ 17.", sol:"−4x ≤ 12, on divise par −4 : x ≥ −3." },
    { q:"Un forfait coûte 15 € plus 2 € par film. Combien de films au maximum avec 30 € ?", sol:"15 + 2x ≤ 30 → 2x ≤ 15 → x ≤ 7,5 : au maximum 7 films." }
  ]
},

/* ═══════════ GÉOMÉTRIE ═══════════ */

"Géométrie": {
  tuto:"geometrie", cours:"Géométrie",
  lecon:{
    definitions:[
      "La géométrie étudie les figures : points, droites, segments, angles, polygones et solides.",
      "Le codage d'une figure indique les égalités : petits traits pour les longueurs égales, arcs pour les angles égaux, carré pour l'angle droit.",
      "Un solide est une figure en trois dimensions : cube, pavé droit, cylindre, sphère…"
    ],
    proprietes:[
      "Le carré : 4 côtés égaux et 4 angles droits.",
      "Le cube possède 6 faces carrées, 12 arêtes, 8 sommets.",
      "Deux droites perpendiculaires forment un angle droit ; deux droites parallèles ne se coupent jamais."
    ],
    exemples:[
      "Sur une figure codée, deux segments marqués d'un même trait sont égaux — même si le dessin est imprécis.",
      "Une boîte à chaussures est un pavé droit : 6 faces rectangulaires."
    ]
  },
  methodes:{
    etapes:[
      "Lire l'énoncé ET le codage : le codage prime sur l'apparence du dessin.",
      "Construire proprement : règle pour les droites, équerre pour les angles droits, compas pour reporter les longueurs.",
      "Nommer les points et coder au fur et à mesure.",
      "Rédiger : citer la propriété utilisée, pas seulement le résultat."
    ],
    erreurs:[
      "Croire ce que « montre » le dessin sans le codage (un angle qui a l'air droit ne l'est pas forcément).",
      "Confondre droite (AB), segment [AB] et longueur AB.",
      "Mesurer sur la figure alors qu'on demande de démontrer."
    ],
    resolu:{
      enonce:"ABCD est un quadrilatère dont les 4 côtés sont codés égaux et l'angle A est droit. Que peut-on dire de ABCD ?",
      etapes:[
        "4 côtés égaux : ABCD est un losange.",
        "Un losange avec un angle droit a ses 4 angles droits.",
        "ABCD est donc un carré."
      ]
    }
  },
  problemes:[
    { q:"Combien un pavé droit a-t-il de faces, d'arêtes et de sommets ?", sol:"6 faces, 12 arêtes, 8 sommets (comme le cube)." },
    { q:"Trace un segment [AB] de 6 cm puis sa médiatrice. Que vérifie tout point de cette droite ?", sol:"La médiatrice est perpendiculaire à [AB] en son milieu ; tous ses points sont à égale distance de A et de B." },
    { q:"Quelle différence entre (AB) et [AB] ?", sol:"(AB) est la droite illimitée passant par A et B ; [AB] est le segment limité par A et B." }
  ]
},

"Symétrie axiale": {
  tuto:"symetrie-axiale", cours:"Symétrie axiale",
  lecon:{
    definitions:[
      "Deux figures sont symétriques par rapport à une droite (d) si elles se superposent par pliage le long de (d).",
      "(d) est l'axe de symétrie ; l'image d'un point A est notée A′."
    ],
    proprietes:[
      "A et A′ sont à égale distance de l'axe, et [AA′] est perpendiculaire à l'axe : l'axe est la médiatrice de [AA′].",
      "La symétrie axiale conserve les longueurs, les angles, les aires et l'alignement.",
      "Un point situé SUR l'axe est son propre symétrique."
    ],
    exemples:[
      "Un papillon, la lettre A, un cœur : autant de figures avec un axe de symétrie.",
      "Le symétrique d'un cercle est un cercle de même rayon."
    ]
  },
  methodes:{
    etapes:[
      "Pour construire A′ : tracer la perpendiculaire à l'axe passant par A.",
      "Reporter au compas la distance de A à l'axe, de l'autre côté.",
      "Recommencer pour chaque sommet de la figure.",
      "Relier les images dans le même ordre."
    ],
    erreurs:[
      "Tracer [AA′] « à peu près » sans perpendiculaire à l'axe.",
      "Placer A′ du même côté que A.",
      "Oublier qu'un point sur l'axe ne bouge pas."
    ],
    resolu:{
      enonce:"Sur quadrillage, l'axe est vertical et A est à 2 carreaux à gauche de l'axe. Où est A′ ?",
      etapes:[
        "On part de A perpendiculairement à l'axe (horizontalement).",
        "On compte 2 carreaux jusqu'à l'axe, puis encore 2 de l'autre côté.",
        "A′ est à 2 carreaux à droite de l'axe, à la même hauteur que A."
      ]
    }
  },
  problemes:[
    { q:"Combien d'axes de symétrie possède un carré ? Un rectangle ?", sol:"Le carré : 4 axes (2 médianes + 2 diagonales). Le rectangle : 2 axes (les médianes seulement)." },
    { q:"Le triangle ABC a AB = 5 cm. Son image A′B′C′ par une symétrie axiale : que vaut A′B′ ?", sol:"5 cm — la symétrie conserve les longueurs." },
    { q:"Quelles lettres majuscules ont un axe de symétrie vertical ?", sol:"Par exemple A, H, I, M, O, T, U, V, W, X, Y." }
  ]
},

"Symétrie centrale": {
  tuto:"symetrie-centrale", cours:"Symétrie centrale",
  lecon:{
    definitions:[
      "La symétrie de centre O est un demi-tour (rotation de 180°) autour du point O.",
      "L'image A′ de A vérifie : O est le milieu du segment [AA′]."
    ],
    proprietes:[
      "La symétrie centrale conserve les longueurs, les angles, les aires et le parallélisme.",
      "L'image d'une droite est une droite qui lui est parallèle.",
      "Une figure a un centre de symétrie si elle est invariante par ce demi-tour (le S, le parallélogramme…)."
    ],
    exemples:[
      "Le symétrique de A par rapport à O : on prolonge [AO] d'une longueur AO au-delà de O.",
      "Le centre d'un parallélogramme (intersection des diagonales) est son centre de symétrie."
    ]
  },
  methodes:{
    etapes:[
      "Tracer la demi-droite [AO).",
      "Reporter au compas la longueur AO au-delà de O : on obtient A′.",
      "Répéter pour chaque sommet.",
      "Vérifier : la figure image est « retournée » (demi-tour), pas seulement décalée."
    ],
    erreurs:[
      "Confondre avec la symétrie axiale (miroir) : ici la figure fait un demi-tour.",
      "Placer A′ entre A et O au lieu d'au-delà de O.",
      "Oublier que O lui-même est invariant."
    ],
    resolu:{
      enonce:"Sur quadrillage, A est à 2 carreaux à gauche et 1 au-dessus de O. Où est A′ ?",
      etapes:[
        "On inverse le déplacement : de O, on va 2 carreaux à DROITE et 1 EN DESSOUS.",
        "A′ est donc symétrique « en diagonale opposée ».",
        "Vérification : O est bien le milieu de [AA′]."
      ]
    }
  },
  problemes:[
    { q:"Quelle est l'image d'un segment de 4 cm par une symétrie centrale ?", sol:"Un segment de 4 cm, parallèle au premier." },
    { q:"Le point M(3 ; 2) a pour image M′ par la symétrie de centre O(0 ; 0). Coordonnées de M′ ?", sol:"M′(−3 ; −2) : on change les deux signes." },
    { q:"Cite une figure ayant un centre mais pas d'axe de symétrie.", sol:"Le parallélogramme (non rectangle, non losange) : centre de symétrie, aucun axe." }
  ]
},

"Angles et parallélisme": {
  tuto:"angles", cours:"Angles et parallélisme",
  lecon:{
    definitions:[
      "Quand une sécante coupe deux droites, elle forme 8 angles.",
      "Les angles alternes-internes sont entre les deux droites, de part et d'autre de la sécante.",
      "Les angles correspondants sont du même côté de la sécante, l'un « interne », l'autre « externe »."
    ],
    proprietes:[
      "Si les deux droites sont parallèles, les alternes-internes sont égaux, et les correspondants aussi.",
      "Réciproquement : des alternes-internes (ou correspondants) égaux prouvent que les droites sont parallèles.",
      "Deux angles opposés par le sommet sont toujours égaux ; deux angles supplémentaires font 180°."
    ],
    exemples:[
      "Si α = 62° et son alterne-interne β sont formés par deux parallèles : β = 62°.",
      "Un angle de 110° et son voisin sur la même droite : 180 − 110 = 70°."
    ]
  },
  methodes:{
    etapes:[
      "Colorier ou marquer l'angle connu.",
      "Situer l'angle cherché : alterne-interne ? correspondant ? opposé par le sommet ? supplémentaire ?",
      "Citer la propriété correspondante (et le parallélisme si nécessaire).",
      "Conclure avec la mesure."
    ],
    erreurs:[
      "Utiliser « alternes-internes égaux » SANS avoir de droites parallèles.",
      "Confondre alternes-internes et correspondants.",
      "Oublier les angles supplémentaires (qui font 180°, pas 90°)."
    ],
    resolu:{
      enonce:"(d) et (d′) sont parallèles, coupées par une sécante. Un angle mesure 115°. Que vaut son alterne-interne ? Et l'angle qui le suit sur (d′) ?",
      etapes:[
        "Droites parallèles → alternes-internes égaux : 115°.",
        "Sur la droite (d′), l'angle suivant est supplémentaire : 180 − 115.",
        "Il mesure 65°."
      ]
    }
  },
  problemes:[
    { q:"Deux angles opposés par le sommet : si l'un fait 47°, que fait l'autre ?", sol:"47° — ils sont toujours égaux." },
    { q:"Une sécante forme un angle de 90° avec (d). Si (d) // (d′), quel angle forme-t-elle avec (d′) ?", sol:"90° aussi (angles correspondants égaux) : la sécante est perpendiculaire aux deux." },
    { q:"Des alternes-internes mesurent 71° et 71°. Que peut-on conclure ?", sol:"Les deux droites coupées par la sécante sont parallèles (réciproque)." }
  ]
},

"Figures": {
  tuto:"parallelogrammes", cours:"Figures",
  lecon:{
    definitions:[
      "Un parallélogramme est un quadrilatère dont les côtés opposés sont parallèles deux à deux.",
      "Rectangle, losange et carré sont des parallélogrammes particuliers."
    ],
    proprietes:[
      "Les côtés opposés sont égaux : AB = DC et AD = BC.",
      "Les diagonales se coupent en leur MILIEU (c'est le centre de symétrie).",
      "Les angles opposés sont égaux.",
      "Rectangle : diagonales de même longueur · Losange : diagonales perpendiculaires · Carré : les deux à la fois."
    ],
    exemples:[
      "Si les diagonales de ABCD se coupent en leur milieu, ABCD est un parallélogramme.",
      "Un parallélogramme avec un angle droit est un rectangle."
    ]
  },
  methodes:{
    etapes:[
      "Pour DÉMONTRER qu'un quadrilatère est un parallélogramme : diagonales de même milieu, OU côtés opposés parallèles, OU deux côtés opposés parallèles ET égaux.",
      "Pour préciser sa nature : tester les diagonales (égales ? perpendiculaires ?).",
      "Pour construire : utiliser le centre (symétrie centrale des sommets).",
      "Toujours citer LA propriété utilisée."
    ],
    erreurs:[
      "« Ça a l'air d'un parallélogramme » : l'apparence ne démontre rien.",
      "Croire que des diagonales perpendiculaires suffisent pour un losange (il faut d'abord un parallélogramme).",
      "Confondre les propriétés du rectangle et du losange."
    ],
    resolu:{
      enonce:"ABCD a ses diagonales [AC] et [BD] qui se coupent en leur milieu O, et AC = BD. Nature de ABCD ?",
      etapes:[
        "Diagonales de même milieu → ABCD est un parallélogramme.",
        "Ses diagonales sont de plus de même longueur.",
        "Un parallélogramme à diagonales égales est un rectangle."
      ]
    }
  },
  problemes:[
    { q:"Dans un parallélogramme ABCD, AB = 7 cm et BC = 4 cm. Donne DC et AD.", sol:"DC = AB = 7 cm et AD = BC = 4 cm (côtés opposés égaux)." },
    { q:"Les diagonales d'un quadrilatère se coupent en leur milieu et sont perpendiculaires. Nature ?", sol:"Parallélogramme (milieu commun) + diagonales perpendiculaires = losange." },
    { q:"Un parallélogramme a un angle de 60°. Donne les trois autres.", sol:"60°, 120°, 120° (angles opposés égaux, angles consécutifs supplémentaires)." }
  ]
},

"Géométrie du triangle": {
  tuto:"triangle", cours:"Géométrie du triangle",
  lecon:{
    definitions:[
      "Un triangle a 3 sommets, 3 côtés, 3 angles.",
      "Droites remarquables : médiatrice (perpendiculaire au milieu d'un côté), hauteur (du sommet, perpendiculaire au côté opposé), médiane (du sommet au milieu du côté opposé)."
    ],
    proprietes:[
      "La somme des trois angles vaut toujours 180°.",
      "Inégalité triangulaire : chaque côté est plus court que la somme des deux autres.",
      "Les trois médiatrices se coupent au centre du cercle circonscrit.",
      "Triangle isocèle : deux angles égaux à la base · équilatéral : trois angles de 60°."
    ],
    exemples:[
      "Angles de 48° et 63° : le troisième vaut 180 − 111 = 69°.",
      "3 cm, 4 cm, 8 cm : impossible, car 3 + 4 = 7 < 8."
    ]
  },
  methodes:{
    etapes:[
      "Pour un angle manquant : additionner les deux connus, soustraire de 180°.",
      "Pour la constructibilité : comparer le plus grand côté à la somme des deux autres.",
      "Pour construire un triangle de 3 côtés donnés : un segment à la règle, puis deux arcs de compas.",
      "Exploiter la nature (isocèle, équilatéral, rectangle) : elle offre des angles ou côtés gratuits."
    ],
    erreurs:[
      "Oublier que « isocèle en A » signifie AB = AC (les angles égaux sont en B et C).",
      "Tester l'inégalité triangulaire avec les mauvais côtés : c'est le PLUS GRAND qu'on compare.",
      "Confondre hauteur et médiane."
    ],
    resolu:{
      enonce:"ABC est isocèle en A avec l'angle A = 40°. Calculer les angles B et C.",
      etapes:[
        "B + C = 180 − 40 = 140°.",
        "Isocèle en A → B = C.",
        "B = C = 70°."
      ]
    }
  },
  problemes:[
    { q:"Un triangle a des angles de 35° et 90°. Le troisième ?", sol:"180 − 125 = 55°." },
    { q:"Peut-on construire un triangle de côtés 5 cm, 7 cm, 11 cm ?", sol:"Oui : 5 + 7 = 12 > 11, l'inégalité triangulaire est vérifiée." },
    { q:"Dans un triangle équilatéral, que valent les angles ? Et les axes de symétrie ?", sol:"Trois angles de 60° et trois axes de symétrie." }
  ]
},

"Solides": {
  tuto:"prisme", cours:"Solides",
  lecon:{
    definitions:[
      "Un prisme droit a deux bases polygonales identiques et parallèles, reliées par des rectangles.",
      "Un cylindre de révolution a deux disques pour bases.",
      "Le patron est le dessin « à plat » du solide."
    ],
    proprietes:[
      "Volume = aire de la base × hauteur (pour les deux solides).",
      "Cylindre : V = π × r² × h.",
      "1 L = 1 dm³ ; 1 m³ = 1000 L."
    ],
    exemples:[
      "Cylindre r = 2, h = 5 : V = π × 4 × 5 ≈ 62,8 unités³.",
      "Prisme à base triangulaire d'aire 6 cm², hauteur 10 cm : V = 60 cm³."
    ]
  },
  methodes:{
    etapes:[
      "Identifier la base (le polygone ou le disque qui se répète).",
      "Calculer l'aire de cette base.",
      "Multiplier par la hauteur (distance entre les deux bases).",
      "Convertir si on demande des litres (1 dm³ = 1 L)."
    ],
    erreurs:[
      "Prendre une face latérale pour la base.",
      "Utiliser le diamètre au lieu du rayon dans πr².",
      "Oublier la conversion cm³ / L (1 L = 1000 cm³)."
    ],
    resolu:{
      enonce:"Une boîte cylindrique a un rayon de 4 cm et une hauteur de 10 cm. Volume en cm³ puis en L ? (π ≈ 3,14)",
      etapes:[
        "Base : π × 4² = 16π ≈ 50,24 cm².",
        "V = 50,24 × 10 ≈ 502,4 cm³.",
        "502,4 cm³ ≈ 0,5 L."
      ]
    }
  },
  problemes:[
    { q:"Volume d'un prisme droit de base 12 cm² et de hauteur 7 cm ?", sol:"V = 12 × 7 = 84 cm³." },
    { q:"Un verre cylindrique : r = 3 cm, h = 12 cm. Contenance en cL ? (π ≈ 3,14)", sol:"V = π × 9 × 12 ≈ 339 cm³ ≈ 33,9 cL." },
    { q:"De quoi est composé le patron d'un prisme droit à base triangulaire ?", sol:"2 triangles (les bases) et 3 rectangles (les faces latérales)." }
  ]
},

"Théorème de Pythagore": {
  tuto:"pythagore", cours:"Théorème de Pythagore",
  lecon:{
    definitions:[
      "Dans un triangle RECTANGLE, l'hypoténuse est le côté opposé à l'angle droit — c'est le plus long.",
      "Théorème de Pythagore : le carré de l'hypoténuse égale la somme des carrés des deux autres côtés."
    ],
    proprietes:[
      "Si ABC est rectangle en A : BC² = AB² + AC².",
      "Réciproque : si BC² = AB² + AC², alors ABC est rectangle en A.",
      "Contraposée : si BC² ≠ AB² + AC², le triangle n'est PAS rectangle."
    ],
    exemples:[
      "AB = 6, AC = 8 : BC² = 36 + 64 = 100, donc BC = 10.",
      "5, 12, 13 : 13² = 169 = 5² + 12² → triangle rectangle."
    ]
  },
  methodes:{
    etapes:[
      "Vérifier qu'on a un triangle rectangle (pour le théorème) ou qu'on veut le prouver (réciproque).",
      "Repérer l'hypoténuse (face à l'angle droit).",
      "Écrire l'égalité, remplacer par les valeurs, calculer les carrés.",
      "Terminer par une racine carrée (théorème) ou une comparaison (réciproque)."
    ],
    erreurs:[
      "Utiliser Pythagore dans un triangle non rectangle.",
      "Se tromper d'hypoténuse : c'est toujours le côté EN FACE de l'angle droit.",
      "Oublier la racine carrée finale (répondre BC = 100 au lieu de 10)."
    ],
    resolu:{
      enonce:"ABC rectangle en A, AB = 5 cm, BC = 13 cm. Calculer AC.",
      etapes:[
        "BC est l'hypoténuse : BC² = AB² + AC².",
        "169 = 25 + AC², donc AC² = 144.",
        "AC = √144 = 12 cm."
      ]
    }
  },
  problemes:[
    { q:"Triangle rectangle de côtés de l'angle droit 9 et 12. Hypoténuse ?", sol:"h² = 81 + 144 = 225, donc h = 15." },
    { q:"Un triangle de côtés 6, 8, 11 est-il rectangle ?", sol:"11² = 121 mais 6² + 8² = 100 : 121 ≠ 100, il n'est pas rectangle." },
    { q:"Une échelle de 5 m est posée à 3 m du mur. À quelle hauteur touche-t-elle le mur ?", sol:"h² = 5² − 3² = 16, donc h = 4 m." }
  ]
},

"Théorème de Thalès": {
  tuto:"thales", cours:"Théorème de Thalès",
  lecon:{
    definitions:[
      "Configuration de Thalès : M sur [AB], N sur [AC], avec (MN) parallèle à (BC).",
      "Le petit triangle AMN est alors une réduction du grand triangle ABC."
    ],
    proprietes:[
      "Théorème : AM/AB = AN/AC = MN/BC.",
      "Réciproque : si AM/AB = AN/AC (points alignés dans le même ordre), alors (MN) // (BC).",
      "La configuration « papillon » (droites sécantes en A entre les parallèles) fonctionne de la même façon."
    ],
    exemples:[
      "AM = 3, AB = 9, BC = 12 : MN = 12 × 3/9 = 4.",
      "Si AM/AB = 2/5 alors AN/AC = 2/5 aussi."
    ]
  },
  methodes:{
    etapes:[
      "Vérifier les hypothèses : points alignés + parallélisme.",
      "Écrire les trois rapports en partant du sommet commun A.",
      "Remplacer par les longueurs connues.",
      "Produit en croix pour la longueur cherchée."
    ],
    erreurs:[
      "Mélanger les rapports (AM/AB avec AN/BC) : toujours petit triangle SUR grand triangle.",
      "Utiliser Thalès sans parallélisme démontré.",
      "Pour la réciproque, oublier de vérifier l'ordre des points."
    ],
    resolu:{
      enonce:"(MN) // (BC), AM = 4, MB = 6, AN = 5. Calculer AC.",
      etapes:[
        "AB = AM + MB = 10. Thalès : AM/AB = AN/AC.",
        "4/10 = 5/AC → 4 × AC = 50.",
        "AC = 12,5."
      ]
    }
  },
  problemes:[
    { q:"(MN) // (BC), AM = 2, AB = 6, BC = 9. Calcule MN.", sol:"MN = BC × AM/AB = 9 × 2/6 = 3." },
    { q:"AM/AB = 3/7 et AN/AC = 3/7, points alignés dans le même ordre. Conclusion ?", sol:"D'après la réciproque de Thalès, (MN) // (BC)." },
    { q:"Un bâton de 1 m planté verticalement a une ombre de 1,5 m ; au même moment, un arbre a une ombre de 9 m. Hauteur de l'arbre ?", sol:"Thalès (rayons du soleil parallèles) : h/1 = 9/1,5, donc h = 6 m." }
  ]
},

"Trigonométrie": {
  tuto:"trigonometrie", cours:"Trigonométrie",
  lecon:{
    definitions:[
      "Dans un triangle RECTANGLE, pour un angle aigu x : l'hypoténuse est en face de l'angle droit, le côté opposé est en face de x, le côté adjacent touche x.",
      "cos(x) = adjacent/hypoténuse · sin(x) = opposé/hypoténuse · tan(x) = opposé/adjacent (SOH-CAH-TOA)."
    ],
    proprietes:[
      "cos(x) et sin(x) sont toujours compris entre 0 et 1.",
      "cos²(x) + sin²(x) = 1.",
      "La calculatrice donne l'angle avec cos⁻¹, sin⁻¹, tan⁻¹ (mode degrés !)."
    ],
    exemples:[
      "cos(60°) = 0,5 · sin(30°) = 0,5 · tan(45°) = 1.",
      "adjacent 5, hypoténuse 10 : cos(x) = 0,5 → x = 60°."
    ]
  },
  methodes:{
    etapes:[
      "Marquer l'angle utilisé et nommer les trois côtés PAR RAPPORT À CET ANGLE.",
      "Choisir le bon rapport : celui qui relie les deux côtés en jeu (SOH-CAH-TOA).",
      "Écrire l'égalité, puis résoudre (produit en croix ou touche inverse).",
      "Vérifier : l'hypoténuse doit rester le côté le plus long."
    ],
    erreurs:[
      "Se tromper de côté « opposé/adjacent » : ils dépendent de l'ANGLE choisi !",
      "Calculatrice en radians au lieu de degrés.",
      "Utiliser la trigonométrie dans un triangle non rectangle."
    ],
    resolu:{
      enonce:"Triangle rectangle : hypoténuse 8 cm, angle x = 35°. Calculer le côté opposé à x (au dixième).",
      etapes:[
        "Opposé et hypoténuse → sinus : sin(35°) = opp/8.",
        "opp = 8 × sin(35°) ≈ 8 × 0,574.",
        "opp ≈ 4,6 cm."
      ]
    }
  },
  problemes:[
    { q:"Adjacent 7, hypoténuse 14 : quel est l'angle x ?", sol:"cos(x) = 7/14 = 0,5, donc x = 60°." },
    { q:"tan(x) = 1. Que vaut x ?", sol:"x = 45° (opposé = adjacent)." },
    { q:"Une rampe fait un angle de 5° avec le sol et l'horizontale mesure 20 m. Quelle hauteur atteint-elle ? (tan 5° ≈ 0,087)", sol:"h = 20 × tan(5°) ≈ 1,75 m." }
  ]
},

"Triangles semblables": {
  tuto:"triangles-semblables", cours:"Triangles semblables",
  lecon:{
    definitions:[
      "Deux triangles sont semblables s'ils ont les mêmes angles deux à deux.",
      "Leurs côtés sont alors proportionnels ; le coefficient est le rapport de similitude k."
    ],
    proprietes:[
      "Il suffit de DEUX angles égaux pour conclure (le troisième suit automatiquement).",
      "Les longueurs sont multipliées par k, les aires par k².",
      "Des triangles en configuration de Thalès sont semblables."
    ],
    exemples:[
      "k = 2 : côtés doublés, aire quadruplée.",
      "Triangles de côtés 3-4-5 et 6-8-10 : semblables avec k = 2."
    ]
  },
  methodes:{
    etapes:[
      "Chercher deux paires d'angles égaux (angles codés, opposés par le sommet, alternes-internes…).",
      "Conclure à la similitude.",
      "Associer les côtés homologues (face aux angles égaux).",
      "Écrire les rapports et calculer."
    ],
    erreurs:[
      "Associer les mauvais côtés : les côtés homologues font face aux angles égaux.",
      "Multiplier l'aire par k au lieu de k².",
      "Confondre « semblables » (même forme) et « égaux » (superposables)."
    ],
    resolu:{
      enonce:"Deux triangles semblables : le premier a des côtés 3, 5, 6 ; le plus petit côté du second mesure 9. Les autres côtés ?",
      etapes:[
        "k = 9/3 = 3.",
        "Côtés du second : 3×3 = 9, 5×3 = 15, 6×3 = 18.",
        "Ses côtés mesurent 9, 15 et 18."
      ]
    }
  },
  problemes:[
    { q:"Deux triangles ont des angles 40°-60°-80° et 60°-80°-40°. Sont-ils semblables ?", sol:"Oui : mêmes angles deux à deux." },
    { q:"k = 5 : par combien l'aire est-elle multipliée ?", sol:"Par k² = 25." },
    { q:"Un triangle d'aire 8 cm² est agrandi avec k = 3. Nouvelle aire ?", sol:"8 × 9 = 72 cm²." }
  ]
},

"Homothéties": {
  tuto:"homotheties", cours:"Homothéties",
  lecon:{
    definitions:[
      "L'homothétie de centre O et de rapport k transforme M en M′ tel que OM′ = k × OM (sur la droite (OM)).",
      "C'est un agrandissement (k > 1) ou une réduction (0 < k < 1) « depuis » le point O."
    ],
    proprietes:[
      "Les longueurs sont multipliées par |k|, les aires par k².",
      "Si k < 0, l'image est de l'autre côté de O (figure retournée).",
      "L'homothétie conserve les angles et l'alignement ; l'image d'une droite est une droite parallèle."
    ],
    exemples:[
      "k = 2 : figure deux fois plus grande, deux fois plus loin de O.",
      "k = −1 : c'est exactement la symétrie centrale de centre O."
    ]
  },
  methodes:{
    etapes:[
      "Tracer la demi-droite [OM) (ou la droite (OM) si k < 0).",
      "Mesurer OM et reporter k × OM depuis O.",
      "Répéter pour chaque sommet, relier.",
      "Vérifier le parallélisme des côtés image/original."
    ],
    erreurs:[
      "Mesurer depuis M au lieu de depuis O.",
      "Oublier de retourner la figure quand k < 0.",
      "Multiplier l'aire par k au lieu de k²."
    ],
    resolu:{
      enonce:"OM = 4 cm. Où est M′, image de M par l'homothétie de centre O et de rapport 2,5 ?",
      etapes:[
        "OM′ = 2,5 × OM = 2,5 × 4.",
        "OM′ = 10 cm.",
        "M′ est sur la demi-droite [OM), à 10 cm de O."
      ]
    }
  },
  problemes:[
    { q:"Homothétie de rapport k = 1/2 : un segment de 8 cm devient…", sol:"…un segment de 4 cm (réduction de moitié)." },
    { q:"À quelle transformation correspond l'homothétie de rapport k = −1 ?", sol:"La symétrie centrale de centre O." },
    { q:"Un triangle d'aire 5 cm² subit une homothétie de rapport 4. Nouvelle aire ?", sol:"5 × 4² = 80 cm²." }
  ]
},

"Translation et rotation": {
  tuto:"translation", cours:"Translation et rotation",
  lecon:{
    definitions:[
      "La translation fait GLISSER toute la figure selon un vecteur (une direction, un sens, une longueur).",
      "La rotation fait TOURNER la figure autour d'un centre, d'un angle donné, dans un sens donné."
    ],
    proprietes:[
      "Toutes deux conservent les longueurs, les angles, les aires : la figure garde forme et taille.",
      "Dans une translation, tous les points se déplacent de la même façon.",
      "Une rotation de 180° est la symétrie centrale."
    ],
    exemples:[
      "Translation « 3 carreaux à droite, 1 en bas » : chaque sommet fait ce déplacement.",
      "Les cabines d'une grande roue : rotation autour de l'axe central."
    ]
  },
  methodes:{
    etapes:[
      "Translation sur quadrillage : lire le vecteur (combien à droite/gauche, combien en haut/bas), l'appliquer à CHAQUE sommet.",
      "Rotation : relier le point au centre, reporter l'angle au rapporteur, reporter la distance au compas.",
      "Relier les images dans le même ordre.",
      "Vérifier que la figure n'est ni agrandie ni déformée."
    ],
    erreurs:[
      "Ne déplacer qu'un seul point de la figure.",
      "Inverser le sens du vecteur.",
      "Oublier le sens de rotation (horaire / anti-horaire)."
    ],
    resolu:{
      enonce:"A(1 ; 2). Image de A par la translation « +3 en x, −1 en y » ?",
      etapes:[
        "x : 1 + 3 = 4.",
        "y : 2 − 1 = 1.",
        "A′(4 ; 1)."
      ]
    }
  },
  problemes:[
    { q:"Quelle transformation envoie chaque cabine d'un manège sur la suivante ?", sol:"Une rotation autour du centre du manège." },
    { q:"B(−2 ; 5), translation « +4 ; +2 ». Image ?", sol:"B′(2 ; 7)." },
    { q:"Une rotation de 90° change-t-elle les longueurs de la figure ?", sol:"Non : rotation et translation conservent longueurs, angles et aires." }
  ]
},

"Volumes": {
  tuto:null, cours:null,
  lecon:{
    definitions:[
      "L'espace contient les solides : polyèdres (faces planes : cube, pavé, prisme, pyramide) et solides de révolution (cylindre, cône, boule).",
      "En perspective cavalière, les arêtes cachées sont en pointillés ; les faces avant gardent leur forme réelle."
    ],
    proprietes:[
      "Volumes : pavé L×l×h · prisme/cylindre : base × h · pyramide/cône : (1/3) × base × h · boule : (4/3)πr³.",
      "1 L = 1 dm³ · 1 m³ = 1000 L.",
      "Une section d'un solide par un plan donne une figure plane (couper un cylindre parallèlement à sa base donne un disque)."
    ],
    exemples:[
      "Boule de rayon 3 : V = (4/3) × π × 27 ≈ 113 cm³.",
      "Aquarium 50 × 30 × 40 cm : V = 60 000 cm³ = 60 L."
    ]
  },
  methodes:{
    etapes:[
      "Identifier le solide (ou le décomposer en solides simples).",
      "Repérer base et hauteur sur la perspective.",
      "Appliquer la formule de volume adaptée.",
      "Convertir vers l'unité demandée (souvent les litres)."
    ],
    erreurs:[
      "Lire des longueurs faussées par la perspective (les fuyantes sont raccourcies).",
      "Confondre aire (m²) et volume (m³).",
      "Se tromper dans les conversions de volume : 1 m³ = 1 000 000 cm³."
    ],
    resolu:{
      enonce:"Une piscine est un pavé droit de 8 m × 4 m × 1,5 m. Combien de litres d'eau pour la remplir ?",
      etapes:[
        "V = 8 × 4 × 1,5 = 48 m³.",
        "1 m³ = 1000 L.",
        "48 000 L d'eau."
      ]
    }
  },
  problemes:[
    { q:"Volume d'une boule de rayon 6 cm ? (π ≈ 3,14)", sol:"V = (4/3) × π × 216 ≈ 904,3 cm³." },
    { q:"Que donne la section d'un cube par un plan parallèle à une face ?", sol:"Un carré identique aux faces du cube." },
    { q:"Convertis 2,4 m³ en litres puis en cm³.", sol:"2,4 m³ = 2400 L = 2 400 000 cm³." }
  ]
},

/* ═══════════ FONCTIONS ═══════════ */

"Notions de fonctions": {
  tuto:"fonctions-notion", cours:"Notions de fonctions",
  lecon:{
    definitions:[
      "Une fonction f est une machine qui, à chaque nombre x, associe UN SEUL nombre noté f(x).",
      "f(x) est l'IMAGE de x ; x est UN ANTÉCÉDENT de f(x).",
      "La courbe de f est l'ensemble des points (x ; f(x))."
    ],
    proprietes:[
      "Une image est unique ; un nombre peut en revanche avoir plusieurs antécédents.",
      "Sur la courbe : l'image se lit verticalement (axe des y), l'antécédent horizontalement (axe des x).",
      "On décrit une fonction par une formule, un tableau de valeurs ou une courbe."
    ],
    exemples:[
      "f(x) = 3x − 2 : f(4) = 10, donc l'image de 4 est 10 et 4 est un antécédent de 10.",
      "Pour f(x) = x², le nombre 9 a deux antécédents : 3 et −3."
    ]
  },
  methodes:{
    etapes:[
      "Pour une IMAGE : remplacer x par la valeur dans la formule et calculer.",
      "Pour un ANTÉCÉDENT : poser f(x) = valeur, puis résoudre l'équation.",
      "Sur une courbe : partir du bon axe, rejoindre la courbe, lire sur l'autre axe.",
      "Toujours reformuler : « l'image de … est … »."
    ],
    erreurs:[
      "Confondre image et antécédent (le sens de la machine !).",
      "Oublier un antécédent quand il y en a plusieurs.",
      "Mal lire les axes sur un graphique."
    ],
    resolu:{
      enonce:"f(x) = 2x + 3. Calculer l'image de 5, puis l'antécédent de 11.",
      etapes:[
        "Image de 5 : f(5) = 2×5 + 3 = 13.",
        "Antécédent de 11 : 2x + 3 = 11 → 2x = 8.",
        "x = 4 : l'antécédent de 11 est 4."
      ]
    }
  },
  problemes:[
    { q:"g(x) = x² − 1. Image de 3 ? de −3 ?", sol:"g(3) = 8 et g(−3) = 8 : deux antécédents pour la même image !" },
    { q:"h(x) = 4x − 6. Antécédent de 10 ?", sol:"4x − 6 = 10 → 4x = 16 → x = 4." },
    { q:"Sur une courbe, comment lire l'image de 2 ?", sol:"On part de 2 sur l'axe horizontal, on monte (ou descend) jusqu'à la courbe, on lit la valeur sur l'axe vertical." }
  ]
},

"Fonction linéaire": {
  tuto:"fonction-lineaire", cours:"Fonction linéaire",
  lecon:{
    definitions:[
      "Une fonction linéaire s'écrit f(x) = a x, où a est le coefficient.",
      "Elle traduit une situation de PROPORTIONNALITÉ : f(x) est proportionnel à x."
    ],
    proprietes:[
      "Sa représentation graphique est une DROITE passant par l'ORIGINE.",
      "a est le coefficient directeur (la pente) ; a = f(1).",
      "f(kx) = k f(x) et f(x + y) = f(x) + f(y)."
    ],
    exemples:[
      "f(x) = 3x : f(2) = 6, la droite passe par O et par (1 ; 3).",
      "Un prix proportionnel à la masse : p(m) = 2,5 m."
    ]
  },
  methodes:{
    etapes:[
      "Trouver a : si f(x₀) = y₀ est connu, a = y₀/x₀.",
      "Tracer : placer O et le point (1 ; a), relier à la règle.",
      "Calculer une image : multiplier par a.",
      "Reconnaître sur un graphique : droite qui passe par l'origine → linéaire."
    ],
    erreurs:[
      "Ajouter un « + b » : ce serait affine, plus linéaire.",
      "Croire qu'une droite qui ne passe pas par O est linéaire.",
      "Calculer a en divisant x par f(x) au lieu de f(x) par x."
    ],
    resolu:{
      enonce:"g est linéaire et g(2) = 7. Trouver g(x) puis g(6).",
      etapes:[
        "a = g(2)/2 = 7/2 = 3,5.",
        "g(x) = 3,5x.",
        "g(6) = 3,5 × 6 = 21."
      ]
    }
  },
  problemes:[
    { q:"f(x) = 4x. Image de 2,5 ? Antécédent de 30 ?", sol:"f(2,5) = 10. Antécédent : 4x = 30 → x = 7,5." },
    { q:"Une remise de 20 % : quelle fonction linéaire donne le prix payé ?", sol:"p(x) = 0,8x (on paie 80 % du prix)." },
    { q:"La droite d'une fonction linéaire passe par (3 ; 12). Trouve a.", sol:"a = 12/3 = 4, donc f(x) = 4x." }
  ]
},

"Fonction affine": {
  tuto:"fonction-affine", cours:"Fonction affine",
  lecon:{
    definitions:[
      "Une fonction affine s'écrit f(x) = a x + b.",
      "a est le coefficient directeur (la pente) ; b est l'ordonnée à l'origine."
    ],
    proprietes:[
      "Sa courbe est une DROITE qui coupe l'axe des ordonnées au point (0 ; b).",
      "a = accroissement de f(x) ÷ accroissement de x = (f(x₂) − f(x₁))/(x₂ − x₁).",
      "Si b = 0, la fonction est linéaire ; si a = 0, elle est constante."
    ],
    exemples:[
      "f(x) = 2x + 1 : droite de pente 2, coupant l'axe des y en 1.",
      "Un forfait : 15 € + 2 € par film → c(x) = 2x + 15."
    ]
  },
  methodes:{
    etapes:[
      "Identifier a et b dans l'écriture.",
      "Tracer : placer (0 ; b), puis avancer de 1 en x et monter de a — relier.",
      "Retrouver a et b depuis deux points : a par le taux d'accroissement, puis b en remplaçant.",
      "Interpréter : b = valeur de départ, a = variation par unité."
    ],
    erreurs:[
      "Échanger a et b (la pente est le nombre DEVANT x).",
      "Lire l'ordonnée à l'origine ailleurs qu'en x = 0.",
      "Signe de a : une droite qui descend a une pente négative."
    ],
    resolu:{
      enonce:"f est affine, f(1) = 5 et f(3) = 11. Déterminer f(x).",
      etapes:[
        "a = (11 − 5)/(3 − 1) = 6/2 = 3.",
        "f(x) = 3x + b ; avec f(1) = 5 : 3 + b = 5 → b = 2.",
        "f(x) = 3x + 2."
      ]
    }
  },
  problemes:[
    { q:"f(x) = −2x + 7 : donne la pente, l'ordonnée à l'origine, et f(3).", sol:"a = −2, b = 7, f(3) = 1." },
    { q:"Un taxi : 3 € de prise en charge + 1,50 €/km. Exprime le prix p(x) et calcule pour 8 km.", sol:"p(x) = 1,5x + 3 ; p(8) = 15 €." },
    { q:"Résous f(x) = 0 pour f(x) = 4x − 10.", sol:"4x = 10 → x = 2,5 (la droite coupe l'axe des x en 2,5)." }
  ]
},

/* ═══════════ PROBABILITÉS ═══════════ */

"Probabilités": {
  tuto:"proba-simple", cours:"Probabilités simples",
  lecon:{
    definitions:[
      "Une expérience aléatoire a plusieurs issues possibles, sans qu'on puisse prédire laquelle.",
      "L'univers est l'ensemble de toutes les issues ; un événement est un ensemble d'issues.",
      "La probabilité P(A) mesure la chance qu'un événement A se réalise : 0 ≤ P(A) ≤ 1."
    ],
    proprietes:[
      "Équiprobabilité : P(A) = nombre d'issues favorables ÷ nombre d'issues total.",
      "P = 0 : événement impossible · P = 1 : événement certain.",
      "P(contraire de A) = 1 − P(A) ; la somme des probabilités des issues vaut 1."
    ],
    exemples:[
      "Dé équilibré : P(multiple de 3) = 2/6 = 1/3.",
      "P(pair) = 1/2, donc P(impair) = 1 − 1/2 = 1/2."
    ]
  },
  methodes:{
    etapes:[
      "Lister l'univers (toutes les issues).",
      "Vérifier l'équiprobabilité (dé équilibré, tirage au hasard…).",
      "Compter les issues favorables à l'événement.",
      "P = favorables/total, à simplifier ; éventuellement passer par le contraire."
    ],
    erreurs:[
      "Compter deux fois la même issue, ou en oublier une.",
      "Utiliser favorables/total quand les issues ne sont PAS équiprobables.",
      "Donner une probabilité supérieure à 1 (impossible)."
    ],
    resolu:{
      enonce:"Un sac contient 3 boules rouges, 5 bleues et 2 vertes. On tire une boule au hasard. P(rouge) ? P(pas verte) ?",
      etapes:[
        "Total : 3 + 5 + 2 = 10 boules, tirage équiprobable.",
        "P(rouge) = 3/10.",
        "P(pas verte) = 1 − 2/10 = 8/10 = 4/5."
      ]
    }
  },
  problemes:[
    { q:"On lance un dé : P(obtenir au moins 5) ?", sol:"Issues favorables : 5 et 6 → P = 2/6 = 1/3." },
    { q:"Une roue a 8 secteurs égaux dont 3 gagnants. P(gagner) ? P(perdre) ?", sol:"P(gagner) = 3/8 et P(perdre) = 5/8." },
    { q:"Dans un jeu de 52 cartes, P(tirer un cœur) ?", sol:"13 cœurs sur 52 cartes : P = 13/52 = 1/4." }
  ]
},

/* ═══════════ STATISTIQUES ═══════════ */

"Organisation des données": {
  tuto:"stats-organisation", cours:"Organisation des données",
  lecon:{
    definitions:[
      "Une série statistique regroupe des données (les notes d'une classe, les sports préférés…).",
      "L'effectif d'une valeur : combien de fois elle apparaît. L'effectif total : le nombre de données.",
      "La fréquence d'une valeur = effectif ÷ effectif total (souvent en %)."
    ],
    proprietes:[
      "La somme des effectifs = effectif total ; la somme des fréquences = 1 (ou 100 %).",
      "Diagramme en barres : comparer des catégories · circulaire : des parts d'un tout · histogramme : des classes de valeurs.",
      "Dans un diagramme circulaire : angle = fréquence × 360°."
    ],
    exemples:[
      "12 élèves sur 34 préfèrent la danse : fréquence = 12/34 ≈ 35 %.",
      "25 % du total → un secteur de 90°."
    ]
  },
  methodes:{
    etapes:[
      "Dépouiller les données dans un tableau (valeurs / effectifs).",
      "Calculer l'effectif total puis les fréquences.",
      "Choisir le bon graphique selon ce qu'on veut montrer.",
      "Toujours titrer les axes et le graphique."
    ],
    erreurs:[
      "Confondre effectif (un nombre) et fréquence (une proportion).",
      "Faire un camembert dont les angles ne totalisent pas 360°.",
      "Comparer des effectifs de groupes de tailles différentes au lieu des fréquences."
    ],
    resolu:{
      enonce:"Sur 40 élèves, 10 viennent à vélo. Fréquence, et angle du secteur « vélo » dans un diagramme circulaire ?",
      etapes:[
        "Fréquence : 10/40 = 0,25 = 25 %.",
        "Angle : 0,25 × 360.",
        "Le secteur « vélo » mesure 90°."
      ]
    }
  },
  problemes:[
    { q:"Notes obtenues : 8 apparaît 3 fois sur 20 copies. Effectif et fréquence de la note 8 ?", sol:"Effectif = 3, fréquence = 3/20 = 15 %." },
    { q:"Un secteur d'un camembert mesure 72°. Quelle fréquence représente-t-il ?", sol:"72/360 = 0,2 = 20 %." },
    { q:"Quel graphique choisir pour montrer l'évolution de la température sur une journée ?", sol:"Une courbe (graphique cartésien) : elle montre l'évolution dans le temps." }
  ]
},

"Statistiques": {
  tuto:"stats-position", cours:"Indicateurs de position",
  lecon:{
    definitions:[
      "Les indicateurs de position résument toute une série par une seule valeur.",
      "Moyenne = somme des valeurs ÷ nombre de valeurs.",
      "Médiane = valeur qui partage la série ORDONNÉE en deux moitiés · Mode = valeur la plus fréquente."
    ],
    proprietes:[
      "Moyenne pondérée : somme des (valeur × effectif) ÷ effectif total.",
      "La médiane est peu sensible aux valeurs extrêmes, contrairement à la moyenne.",
      "L'étendue = valeur maximale − valeur minimale : elle mesure la dispersion."
    ],
    exemples:[
      "8 ; 11 ; 12 ; 14 ; 15 → moyenne 12, médiane 12.",
      "10 ; 10 ; 10 ; 10 ; 100 → moyenne 28 mais médiane 10 !"
    ]
  },
  methodes:{
    etapes:[
      "ORDONNER la série avant tout calcul de médiane.",
      "Moyenne : additionner tout, diviser par l'effectif total (pondérer si tableau).",
      "Médiane : effectif impair → valeur centrale ; pair → milieu des deux valeurs centrales.",
      "Interpréter avec une phrase (« en moyenne… », « la moitié des élèves… »)."
    ],
    erreurs:[
      "Chercher la médiane sur une série non triée.",
      "Oublier les effectifs dans une moyenne pondérée.",
      "Confondre médiane (position) et moyenne (calcul)."
    ],
    resolu:{
      enonce:"Notes : 6 ; 15 ; 9 ; 12 ; 15 ; 9 ; 15. Moyenne, médiane, mode ?",
      etapes:[
        "Série triée : 6 ; 9 ; 9 ; 12 ; 15 ; 15 ; 15 (7 valeurs).",
        "Moyenne = 81/7 ≈ 11,6. Médiane = 4ᵉ valeur = 12.",
        "Mode = 15 (trois apparitions)."
      ]
    }
  },
  problemes:[
    { q:"Moyenne de la série 7 ; 12 ; 14 ; 15 ?", sol:"(7+12+14+15)/4 = 48/4 = 12." },
    { q:"Médiane de 3 ; 8 ; 9 ; 12 ; 20 ; 25 (6 valeurs) ?", sol:"Milieu des 3ᵉ et 4ᵉ valeurs : (9 + 12)/2 = 10,5." },
    { q:"Un élève a 8 et 12 (coefficient 1) et 14 (coefficient 2). Moyenne pondérée ?", sol:"(8 + 12 + 14×2)/4 = 48/4 = 12." }
  ]
},

};

/* ═══════════ STRUCTURE MATIÈRE → CHAPITRES (pour la page exercices) ═══════════ */
const CHAPTER_STRUCTURE = [
  {
    "subject": "NOMBRES",
    "color": "#7ab4c8",
    "chapters": [
      "Entiers & décimaux",
      "Fractions",
      "Nombres relatifs",
      "Puissances",
      "Proportionnalité",
      "Pourcentages",
      "Longueur",
      "Repérage temps & durées",
      "Arithmétique"
    ]
  },
  {
    "subject": "ALGÈBRE",
    "color": "#c8a07a",
    "chapters": [
      "Enchaînement d'opérations",
      "Calcul littéral",
      "Équations",
      "Inéquations"
    ]
  },
  {
    "subject": "GÉOMÉTRIE",
    "color": "#a07ac8",
    "chapters": [
      "Géométrie",
      "Symétrie axiale",
      "Symétrie centrale",
      "Angles et parallélisme",
      "Figures",
      "Géométrie du triangle",
      "Aires",
      "Solides",
      "Théorème de Pythagore",
      "Théorème de Thalès",
      "Trigonométrie",
      "Triangles semblables",
      "Homothéties",
      "Translation et rotation",
      "Volumes"
    ]
  },
  {
    "subject": "FONCTIONS",
    "color": "#7ac8a0",
    "chapters": [
      "Notions de fonctions",
      "Fonction linéaire",
      "Fonction affine"
    ]
  },
  {
    "subject": "PROBABILITÉS",
    "color": "#c87a9a",
    "chapters": [
      "Probabilités"
    ]
  },
  {
    "subject": "STATISTIQUES",
    "color": "#e8a87c",
    "chapters": [
      "Organisation des données",
      "Statistiques"
    ]
  }
];
if (typeof window !== 'undefined') window.CHAPTER_STRUCTURE = CHAPTER_STRUCTURE;
