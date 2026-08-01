/* MathBase — enrichir-decimaux.js
   Chapitre « Entiers & décimaux » (matière NOMBRES).

   1. RENOMMAGE de trois familles :
        « Diviser par 10 et… »          → « Diviser par 10,100,1000 etc... »
        « Encadrer au dixième »         → « Encadrer »
        « Chiffre et nombre de centaines » → « Chiffre et nombre »
      (comparaison souple : casse, accents et ponctuation ignorés, donc le
       libellé exact en base n'a pas besoin d'être connu au caractère près.)

   2. ENRICHISSEMENT : pour chaque famille du chapitre, le script cherche un
      lot d'énoncés dans le catalogue ci-dessous (reconnaissance par mots-clés
      du libellé de la famille) et insère ceux qui manquent.
      · Répartition voulue : plus de « Difficile » que de « Facile »
        → 2 faciles, 3 moyens, 5 difficiles par famille.
      · Les colonnes level / subject / classe / type ne sont PAS inventées :
        elles sont recopiées depuis les exercices déjà présents dans la
        famille (valeur majoritaire), pour que les nouveaux se fondent
        exactement dans les anciens.
      · Les titres poursuivent la numérotation existante (« Encadrer 7 »).
      · Idempotent : un énoncé déjà présent (comparaison souple) est ignoré,
        on peut relancer le script sans créer de doublons.

   3. Les familles du chapitre sans lot correspondant sont listées en fin de
      rapport : il suffit de me donner leur nom pour que j'écrive leur lot.

   Sécurité : simulation par défaut, sauvegarde avant écriture.

   Usage (PowerShell) :
     $env:DATABASE_URL = "postgresql://..."
     node enrichir-decimaux.js              # simulation, ne touche à rien
     node enrichir-decimaux.js --execute    # applique
*/

const fs = require("fs");
const { Pool } = require("pg");

const EXECUTE = process.argv.includes("--execute");
if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

/* Comparaison souple : casse, accents et ponctuation ignorés. */
const cle = t => String(t || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/* ═══════════════════ 1. RENOMMAGES ═══════════════════
   `depuis` est un PRÉFIXE comparé souplement : « Diviser par 10 et… »,
   « diviser par 10 » ou « Diviser par 10, 100 » sont tous reconnus.
   Relancer le script est sans effet (la cible commence par le préfixe). */
const RENOMMAGES = [
  { depuis: "diviser par 10",     vers: "Diviser par 10,100,1000 etc..." },
  { depuis: "encadrer",           vers: "Encadrer" },
  { depuis: "chiffre et nombre",  vers: "Chiffre et nombre" },
];

/* ═══════════════════ 2. CATALOGUE D'ÉNONCÉS ═══════════════════
   Chaque lot : `test` reconnaît la famille d'après son libellé normalisé.
   L'ordre compte : le premier lot qui reconnaît la famille est retenu.
   Format d'un énoncé : [difficulté, énoncé, corrigé]
   F = Facile · M = Moyen · D = Difficile   (2 F, 3 M, 5 D par famille) */
const CATALOGUE = [

/* ── Multiplier / diviser par 0,1 ; 0,01 ; 0,001 ──────────────────────────
   Placé en tête : « multiplier par 0,1 » contient « multiplier », il doit
   être reconnu avant le lot « multiplier par 10 ». */
{
  id: "par-0,1",
  // Le libellé BRUT doit contenir 0,1 / 0,01 / 0,001 (et non « 10, 100, 1000 »,
  // qui donne la même suite de caractères une fois la ponctuation effacée).
  test: (f, brut) => /(multipli|divis)/.test(f)
                  && /0[.,]0{0,2}1(?!\d)/.test(brut)
                  && !/\b10\b|\b100\b|\b1000\b/.test(f),
  exos: [
    ["F", "Calcule : 45 × 0,1 puis 45 × 0,01.",
          "45 × 0,1 = 4,5 (la virgule recule d'un rang). 45 × 0,01 = 0,45 (elle recule de deux rangs)."],
    ["F", "Calcule : 8 ÷ 0,1 puis 8 × 0,1.",
          "8 ÷ 0,1 = 80 : on cherche combien de fois 0,1 tient dans 8, et 0,1 y tient 80 fois. 8 × 0,1 = 0,8."],
    ["M", "Calcule : 3,7 × 0,01 ; 250 × 0,001 ; 0,9 × 0,1.",
          "3,7 × 0,01 = 0,037 · 250 × 0,001 = 0,25 · 0,9 × 0,1 = 0,09."],
    ["M", "Compare 60 × 0,1 et 60 ÷ 10. Que remarques-tu ?",
          "60 × 0,1 = 6 et 60 ÷ 10 = 6 : les deux résultats sont égaux. Multiplier par 0,1 revient à diviser par 10."],
    ["M", "Calcule 0,9 ÷ 0,1, puis 0,9 ÷ 0,01.",
          "0,9 ÷ 0,1 = 9 et 0,9 ÷ 0,01 = 90 : diviser par 0,1 revient à multiplier par 10, diviser par 0,01 à multiplier par 100."],
    ["D", "Calcule 4,5 ÷ 0,01, puis explique pourquoi le résultat est plus grand que 4,5.",
          "4,5 ÷ 0,01 = 450. Diviser par un nombre plus petit que 1 donne un résultat plus GRAND : on regarde combien de fois 0,01 tient dans 4,5, et il y tient 450 fois."],
    ["D", "Complète : 7 × … = 0,07 ; … ÷ 0,1 = 3,5 ; 0,4 × … = 0,004.",
          "7 × 0,01 = 0,07 · 0,35 ÷ 0,1 = 3,5 · 0,4 × 0,01 = 0,004."],
    ["D", "Range dans l'ordre croissant : 5 × 0,1 ; 5 ÷ 10 ; 5 × 0,01 ; 5 ÷ 100.",
          "5 × 0,1 = 0,5 · 5 ÷ 10 = 0,5 · 5 × 0,01 = 0,05 · 5 ÷ 100 = 0,05.\nDonc 5 × 0,01 = 5 ÷ 100 < 5 × 0,1 = 5 ÷ 10, soit 0,05 = 0,05 < 0,5 = 0,5."],
    ["D", "Vrai ou faux : « multiplier par 0,1 donne toujours un résultat plus petit ». Teste avec 20, puis avec 0.",
          "20 × 0,1 = 2 : plus petit. Mais 0 × 0,1 = 0 : le résultat n'est pas plus petit, il est égal. L'affirmation est donc FAUSSE (elle n'est vraie que pour les nombres strictement positifs)."],
    ["D", "Calcule 12 × 0,1 × 0,1 × 0,1, puis écris ce calcul sous la forme d'une seule division.",
          "12 × 0,1 = 1,2 ; × 0,1 = 0,12 ; × 0,1 = 0,012. Multiplier trois fois par 0,1 revient à diviser par 1000 : 12 ÷ 1000 = 0,012."],
  ]
},

/* ── Diviser par 10, 100, 1000 ─────────────────────────────────────────── */
{
  id: "diviser-10",
  test: f => /divis/.test(f) && /\b10\b|\b100\b|\b1000\b|dix/.test(f),
  exos: [
    ["F", "Calcule : 45 ÷ 10 puis 45 ÷ 100.",
          "45 ÷ 10 = 4,5 (la virgule recule d'un rang). 45 ÷ 100 = 0,45 (elle recule de deux rangs)."],
    ["F", "Calcule : 7,2 ÷ 10 puis 380 ÷ 100.",
          "7,2 ÷ 10 = 0,72 · 380 ÷ 100 = 3,8."],
    ["M", "Calcule : 6 ÷ 1000 ; 24,5 ÷ 100 ; 9,07 ÷ 10.",
          "6 ÷ 1000 = 0,006 (il faut ajouter deux zéros après la virgule) · 24,5 ÷ 100 = 0,245 · 9,07 ÷ 10 = 0,907."],
    ["M", "Complète : 350 ÷ … = 3,5 et 8 ÷ … = 0,008.",
          "350 ÷ 100 = 3,5 (la virgule a reculé de 2 rangs) et 8 ÷ 1000 = 0,008 (elle a reculé de 3 rangs)."],
    ["M", "Un lot de 100 stylos identiques pèse 1 250 g. Quelle est la masse d'un stylo ?",
          "1 250 ÷ 100 = 12,5. Un stylo pèse 12,5 g."],
    ["D", "Calcule 4 ÷ 10 ÷ 10 ÷ 10, puis écris ce calcul sous la forme d'une seule division.",
          "4 ÷ 10 = 0,4 ; ÷ 10 = 0,04 ; ÷ 10 = 0,004. Diviser trois fois par 10 revient à diviser par 1000 : 4 ÷ 1000 = 0,004."],
    ["D", "Complète : 27 ÷ … = 0,027 ; … ÷ 100 = 4,06 ; 5,1 ÷ … = 0,0051.",
          "27 ÷ 1000 = 0,027 · 406 ÷ 100 = 4,06 · 5,1 ÷ 1000 = 0,0051."],
    ["D", "Range dans l'ordre croissant : 52 ÷ 100 ; 5,2 ÷ 10 ; 520 ÷ 1000 ; 0,52 ÷ 10.",
          "52 ÷ 100 = 0,52 · 5,2 ÷ 10 = 0,52 · 520 ÷ 1000 = 0,52 · 0,52 ÷ 10 = 0,052.\nDonc 0,52 ÷ 10 < 52 ÷ 100 = 5,2 ÷ 10 = 520 ÷ 1000 : les trois premiers sont égaux à 0,52, le dernier vaut 0,052."],
    ["D", "Vrai ou faux : « diviser par 100 revient à multiplier par 0,01 ». Justifie sur l'exemple de 47.",
          "VRAI. 47 ÷ 100 = 0,47 et 47 × 0,01 = 0,47 : les deux opérations reculent la virgule de deux rangs."],
    ["D", "Une bobine de 1 000 m de fil coûte 84 €. Calcule le prix de 1 m, puis celui de 10 m.",
          "1 m : 84 ÷ 1000 = 0,084 €. 10 m : 0,084 × 10 = 0,84 € (ou 84 ÷ 100 = 0,84 €)."],
  ]
},

/* ── Multiplier par 10, 100, 1000 ──────────────────────────────────────── */
{
  id: "multiplier-10",
  test: f => /multipli/.test(f) && /\b10\b|\b100\b|\b1000\b|dix/.test(f),
  exos: [
    ["F", "Calcule : 3,6 × 10 puis 3,6 × 100.",
          "3,6 × 10 = 36 (la virgule avance d'un rang). 3,6 × 100 = 360 (elle avance de deux rangs, on complète par un zéro)."],
    ["F", "Calcule : 0,45 × 100 puis 12 × 1000.",
          "0,45 × 100 = 45 · 12 × 1000 = 12 000."],
    ["M", "Calcule : 0,007 × 1000 ; 5,28 × 10 ; 0,9 × 100.",
          "0,007 × 1000 = 7 · 5,28 × 10 = 52,8 · 0,9 × 100 = 90."],
    ["M", "Complète : 4,7 × … = 470 et … × 100 = 6,3.",
          "4,7 × 100 = 470 et 0,063 × 100 = 6,3."],
    ["M", "Un carnet coûte 3,45 €. Combien coûtent 10 carnets ? Et 100 carnets ?",
          "10 carnets : 3,45 × 10 = 34,50 €. 100 carnets : 3,45 × 100 = 345 €."],
    ["D", "Calcule 0,062 × 10 × 100, puis écris ce calcul sous la forme d'une seule multiplication.",
          "0,062 × 10 = 0,62 ; × 100 = 62. Multiplier par 10 puis par 100 revient à multiplier par 1000 : 0,062 × 1000 = 62."],
    ["D", "Complète : … × 1000 = 74 ; 0,05 × … = 500 ; 9,8 × … = 98 000.",
          "0,074 × 1000 = 74 · 0,05 × 10 000 = 500 · 9,8 × 10 000 = 98 000."],
    ["D", "Range dans l'ordre décroissant : 0,08 × 1000 ; 8 × 10 ; 0,8 × 100 ; 0,008 × 1000.",
          "0,08 × 1000 = 80 · 8 × 10 = 80 · 0,8 × 100 = 80 · 0,008 × 1000 = 8.\nLes trois premiers sont égaux à 80, le dernier vaut 8 : 80 = 80 = 80 > 8."],
    ["D", "Un micron vaut 0,001 mm. Exprime 250 microns en millimètres, puis en centimètres.",
          "250 × 0,001 = 0,25 mm. Comme 1 cm = 10 mm : 0,25 ÷ 10 = 0,025 cm."],
    ["D", "Sans poser d'opération, calcule 2,5 × 1000 ÷ 100, puis explique pourquoi cela revient à multiplier par 10.",
          "2,5 × 1000 = 2 500 puis 2 500 ÷ 100 = 25. La virgule avance de 3 rangs puis recule de 2 : au total elle avance d'un seul rang, ce qui est bien une multiplication par 10."],
  ]
},

/* ── Encadrer (à l'unité, au dixième, au centième, au millième…) ────────── */
{
  id: "encadrer",
  test: f => /encadr/.test(f),
  exos: [
    ["F", "Encadre 7,3 par deux nombres entiers consécutifs.",
          "7 < 7,3 < 8."],
    ["F", "Encadre 12,46 au dixième.",
          "12,4 < 12,46 < 12,5."],
    ["M", "Encadre 3,807 au centième, puis au dixième.",
          "Au centième : 3,80 < 3,807 < 3,81. Au dixième : 3,8 < 3,807 < 3,9."],
    ["M", "Encadre 0,0925 au millième.",
          "0,092 < 0,0925 < 0,093."],
    ["M", "Encadre 45,9 à l'unité, puis à la dizaine.",
          "À l'unité : 45 < 45,9 < 46. À la dizaine : 40 < 45,9 < 50."],
    ["D", "Encadre 9,996 au centième puis au dixième. Que remarques-tu sur la borne supérieure ?",
          "Au centième : 9,99 < 9,996 < 10. Au dixième : 9,9 < 9,996 < 10. Dans les deux cas la borne supérieure est un nombre entier : le nombre est tout proche de 10."],
    ["D", "Trouve tous les nombres à deux chiffres après la virgule x tels que 4,2 < x < 4,3.",
          "4,21 ; 4,22 ; 4,23 ; 4,24 ; 4,25 ; 4,26 ; 4,27 ; 4,28 ; 4,29. Il y en a 9."],
    ["D", "On sait que 5,7 < n < 5,8. Peut-on en déduire l'arrondi de n au dixième ? Justifie.",
          "Non. Si n < 5,75 l'arrondi est 5,7 ; si n > 5,75 l'arrondi est 5,8. L'encadrement ne suffit pas à trancher : il faudrait comparer n à 5,75."],
    ["D", "Encadre le quotient 100 ÷ 7 par deux entiers consécutifs, puis au dixième.",
          "100 ÷ 7 ≈ 14,285… Comme 7 × 14 = 98 et 7 × 15 = 105 : 14 < 100 ÷ 7 < 15. Au dixième : 14,2 < 100 ÷ 7 < 14,3."],
    ["D", "Un nombre x vérifie 8,3 < x < 8,4. Donne un encadrement de x + 1, puis de 10x.",
          "9,3 < x + 1 < 9,4 (on ajoute 1 aux deux bornes). 83 < 10x < 84 (on multiplie les deux bornes par 10)."],
  ]
},

/* ── Chiffre et nombre de … (unités, dizaines, centaines, dixièmes…) ───── */
{
  id: "chiffre-nombre",
  test: f => /chiffre/.test(f) && !/lettre/.test(f),
  exos: [
    ["F", "Dans 4 736 : quel est le chiffre des centaines ? Quel est le chiffre des dizaines ?",
          "Chiffre des centaines : 7. Chiffre des dizaines : 3."],
    ["F", "Dans 58,26 : donne le chiffre des dixièmes, puis le chiffre des unités.",
          "Chiffre des dixièmes : 2. Chiffre des unités : 8."],
    ["M", "Dans 3 407 : donne le chiffre des centaines, puis le nombre de centaines.",
          "Chiffre des centaines : 4. Nombre de centaines : 34 (car 3 407 = 34 × 100 + 7 ; on lit tout ce qui est à gauche du rang des centaines, ce rang compris)."],
    ["M", "Dans 92 615 : donne le nombre de milliers, puis le nombre de dizaines.",
          "Nombre de milliers : 92. Nombre de dizaines : 9 261."],
    ["M", "Dans 7,483 : donne le chiffre des centièmes, puis le nombre de centièmes.",
          "Chiffre des centièmes : 8. Nombre de centièmes : 748."],
    ["D", "Dans 45 032 : donne le chiffre des dizaines, le nombre de dizaines, le chiffre des milliers et le nombre de milliers.",
          "Chiffre des dizaines : 3 · nombre de dizaines : 4 503 · chiffre des milliers : 5 · nombre de milliers : 45."],
    ["D", "Dans 6,205 : donne le nombre de dixièmes, le nombre de centièmes et le nombre de millièmes.",
          "Nombre de dixièmes : 62 · nombre de centièmes : 620 · nombre de millièmes : 6 205."],
    ["D", "Trouve un nombre entier dont le chiffre des centaines est 7 et le nombre de centaines est 37.",
          "Le nombre de centaines vaut 37, donc le nombre est compris entre 3 700 et 3 799 ; le chiffre des centaines y est bien 7. Par exemple 3 742 (toute réponse entre 3 700 et 3 799 convient)."],
    ["D", "Vrai ou faux : « dans 8 250, le nombre de dizaines est 5 ». Justifie et corrige si nécessaire.",
          "FAUX. 5 est le CHIFFRE des dizaines. Le NOMBRE de dizaines est 825, car 8 250 = 825 × 10."],
    ["D", "Écris le nombre qui possède 47 centaines, 6 dizaines et 8 unités. Donne ensuite son nombre de dizaines.",
          "47 × 100 + 6 × 10 + 8 = 4 700 + 60 + 8 = 4 768. Son nombre de dizaines est 476."],
  ]
},

/* ── Comparer et ranger des décimaux ───────────────────────────────────── */
{
  id: "comparer",
  test: f => /compar|rang|ordre croissant|ordre decroissant|classer/.test(f),
  exos: [
    ["F", "Compare 5,7 et 5,09 en utilisant le bon symbole.",
          "Les parties entières sont égales (5). On compare les dixièmes : 0 < 7, donc 5,09 < 5,7."],
    ["F", "Range dans l'ordre croissant : 2,5 ; 2,05 ; 2,55 ; 2,4.",
          "2,05 < 2,4 < 2,5 < 2,55."],
    ["M", "Compare 7,4 et 7,40, puis 0,6 et 0,60. Conclus.",
          "7,4 = 7,40 et 0,6 = 0,60 : ajouter des zéros à la fin de la partie décimale ne change pas le nombre."],
    ["M", "Range dans l'ordre décroissant : 8,09 ; 8,9 ; 8,109 ; 8,19.",
          "En écrivant tout avec 3 décimales : 8,900 > 8,190 > 8,109 > 8,090. Donc 8,9 > 8,19 > 8,109 > 8,09."],
    ["M", "Intercale un nombre décimal entre 3,4 et 3,5.",
          "Par exemple 3,45, car 3,40 < 3,45 < 3,50. (Beaucoup d'autres réponses conviennent : 3,41 ; 3,499…)"],
    ["D", "Range dans l'ordre croissant : 12,3 ; 12,03 ; 12,30 ; 12,003 ; 12,33.",
          "12,003 < 12,03 < 12,3 = 12,30 < 12,33. Attention : 12,3 et 12,30 sont le MÊME nombre."],
    ["D", "Trouve trois nombres décimaux compris entre 1,2 et 1,21.",
          "Par exemple 1,201 ; 1,205 ; 1,209. Il faut aller jusqu'aux millièmes : entre deux décimaux, on peut toujours en intercaler d'autres."],
    ["D", "Vrai ou faux : « un nombre qui a plus de chiffres après la virgule est plus grand ». Justifie par un exemple.",
          "FAUX. 0,9 possède un seul chiffre après la virgule et 0,1234 en possède quatre, pourtant 0,9 > 0,1234. On compare rang par rang, pas en comptant les chiffres."],
    ["D", "Compare 0,08 × 10 et 8 ÷ 10.",
          "0,08 × 10 = 0,8 et 8 ÷ 10 = 0,8 : les deux nombres sont égaux."],
    ["D", "Un panneau limite la charge d'un pont à 3,9 t. Un premier camion pèse 3,85 t, un second 3,95 t. Lequel peut passer ?",
          "3,85 < 3,90 : le premier camion passe. 3,95 > 3,90 : le second ne peut pas passer. (Comparer 3,85 et 3,9 revient à comparer 3,85 et 3,90.)"],
  ]
},

/* ── Arrondir / valeur approchée / troncature ──────────────────────────── */
{
  id: "arrondir",
  test: f => /arrondi|valeur approch|troncature|approximation/.test(f),
  exos: [
    ["F", "Arrondis 7,68 à l'unité.",
          "Le chiffre des dixièmes est 6, donc supérieur ou égal à 5 : on arrondit au-dessus. 7,68 ≈ 8."],
    ["F", "Arrondis 12,34 au dixième.",
          "Le chiffre des centièmes est 4, donc inférieur à 5 : on garde le dixième. 12,34 ≈ 12,3."],
    ["M", "Arrondis 5,479 au centième, puis au dixième.",
          "Au centième : le chiffre suivant est 9, donc 5,479 ≈ 5,48. Au dixième : le chiffre des centièmes est 7, donc 5,479 ≈ 5,5."],
    ["M", "Arrondis 199,7 à l'unité, puis à la dizaine.",
          "À l'unité : 199,7 ≈ 200. À la dizaine : 199,7 ≈ 200 également."],
    ["M", "Donne la troncature à l'unité de 9,87, puis son arrondi à l'unité.",
          "Troncature : on coupe après les unités, donc 9. Arrondi : le chiffre des dixièmes est 8, donc 10. Les deux ne donnent pas le même résultat."],
    ["D", "Arrondis 0,0649 au millième, puis au centième, puis au dixième.",
          "Au millième : 0,0649 ≈ 0,065. Au centième : 0,0649 ≈ 0,06 (le chiffre des millièmes est 4). Au dixième : 0,0649 ≈ 0,1.\nAttention au piège : il ne faut PAS arrondir en cascade à partir de 0,065, sinon on trouverait 0,07 au centième, ce qui est faux."],
    ["D", "L'arrondi au dixième d'un nombre est 4,3. Entre quelles valeurs ce nombre se situe-t-il ?",
          "Ce nombre est compris entre 4,25 et 4,35 : 4,25 ≤ n < 4,35."],
    ["D", "Calcule 22 ÷ 7, puis donne une valeur approchée au centième par défaut et par excès.",
          "22 ÷ 7 ≈ 3,142857… Par défaut : 3,14. Par excès : 3,15. Donc 3,14 < 22 ÷ 7 < 3,15."],
    ["D", "Vrai ou faux : « arrondir 2,4499 au dixième donne 2,5 ». Justifie.",
          "FAUX. Pour arrondir au dixième, on regarde le chiffre des centièmes : c'est 4, donc 2,4499 ≈ 2,4. L'erreur consiste à arrondir d'abord au centième (2,45), puis au dixième."],
    ["D", "La population d'une ville est de 48 736 habitants. Donne l'arrondi au millier, à la centaine, puis à la dizaine.",
          "Au millier : 49 000. À la centaine : 48 700. À la dizaine : 48 740."],
  ]
},

/* ── Écrire en lettres / en chiffres ───────────────────────────────────── */
{
  id: "lettres",
  test: f => /lettre|en chiffres|ecrire un nombre/.test(f),
  exos: [
    ["F", "Écris en chiffres : trois mille quatre cent douze.",
          "3 412."],
    ["F", "Écris en lettres : 205.",
          "Deux cent cinq."],
    ["M", "Écris en lettres : 4 080.",
          "Quatre mille quatre-vingts."],
    ["M", "Écris en chiffres : douze millions trois cent mille.",
          "12 300 000."],
    ["M", "Écris en lettres : 71, puis 91.",
          "Soixante et onze ; quatre-vingt-onze."],
    ["D", "Écris en lettres : 2 500 300.",
          "Deux millions cinq cent mille trois cents. (« cent » ne prend pas de s devant « mille », mais en prend un dans « trois cents ».)"],
    ["D", "Écris en lettres : 3,45, de deux façons différentes.",
          "« Trois virgule quarante-cinq » ou « trois unités et quarante-cinq centièmes »."],
    ["D", "Écris en chiffres : quatre-vingt-dix mille neuf cent quatre-vingts.",
          "90 980."],
    ["D", "Écris en lettres : 0,07 puis 0,7. Explique la différence.",
          "0,07 se lit « sept centièmes » et 0,7 « sept dixièmes ». 0,7 vaut dix fois plus que 0,07."],
    ["D", "Écris en chiffres : cinq unités et douze centièmes ; puis : trois dizaines et quatre millièmes.",
          "5,12 ; 30,004."],
  ]
},

/* ── Décomposer un décimal / écriture d'un nombre décimal ──────────────── */
{
  id: "decomposer",
  test: f => /decompos|ecriture|forme developpee|somme|position|valeur d un chiffre|rang/.test(f),
  exos: [
    ["F", "Décompose 3 456 sous la forme d'une somme de produits.",
          "3 456 = 3 × 1000 + 4 × 100 + 5 × 10 + 6."],
    ["F", "Écris sous forme décimale : 7 + 0,4 + 0,05.",
          "7,45."],
    ["M", "Décompose 82,37 en faisant apparaître les dizaines, unités, dixièmes et centièmes.",
          "82,37 = 8 × 10 + 2 + 3 × 0,1 + 7 × 0,01."],
    ["M", "Écris sous forme décimale : 5 × 100 + 3 + 9 × 0,01.",
          "500 + 3 + 0,09 = 503,09. Attention : il n'y a pas de dizaines ni de dixièmes, on écrit des zéros à ces rangs."],
    ["M", "Décompose 40,08.",
          "40,08 = 4 × 10 + 8 × 0,01."],
    ["D", "Décompose 306,405 sous la forme d'une somme de produits, puis en utilisant des fractions décimales.",
          "306,405 = 3 × 100 + 6 + 4 × 0,1 + 5 × 0,001 = 3 × 100 + 6 + 4/10 + 5/1000."],
    ["D", "Écris sous forme décimale : 2 × 1000 + 7 × 10 + 4 × 0,1 + 6 × 0,001.",
          "2 000 + 70 + 0,4 + 0,006 = 2 070,406."],
    ["D", "Un nombre s'écrit 5 + 3/10 + 8/1000. Donne son écriture décimale, puis son nombre de millièmes.",
          "5 + 0,3 + 0,008 = 5,308. Nombre de millièmes : 5 308."],
    ["D", "Vrai ou faux : 4,5 = 4 + 5/100. Justifie et corrige si nécessaire.",
          "FAUX : 4,5 = 4 + 5/10. Le nombre 4 + 5/100 vaut 4,05."],
    ["D", "Retrouve le nombre : il possède 3 dizaines, 0 unité, 6 dixièmes et 2 millièmes.",
          "30 + 0,6 + 0,002 = 30,602 (il n'y a pas de centièmes : on écrit un zéro à ce rang)."],
  ]
},

/* ── Fractions décimales ↔ écriture décimale ───────────────────────────── */
{
  id: "fractions-decimales",
  test: f => /fraction/.test(f),
  exos: [
    ["F", "Écris 7/10 et 43/100 en écriture décimale.",
          "7/10 = 0,7 et 43/100 = 0,43."],
    ["F", "Écris 0,9 et 0,25 sous forme de fraction décimale.",
          "0,9 = 9/10 et 0,25 = 25/100."],
    ["M", "Écris 305/100 et 8/1000 en écriture décimale.",
          "305/100 = 3,05 et 8/1000 = 0,008."],
    ["M", "Écris 12,7 et 4,06 sous forme de fraction décimale.",
          "12,7 = 127/10 et 4,06 = 406/100."],
    ["M", "Compare 3/10 et 27/100.",
          "3/10 = 0,3 et 27/100 = 0,27. Comme 0,27 < 0,30 : 27/100 < 3/10."],
    ["D", "Range dans l'ordre croissant : 7/10 ; 68/100 ; 0,7 ; 705/1000.",
          "7/10 = 0,700 · 68/100 = 0,680 · 705/1000 = 0,705.\nDonc 68/100 < 7/10 = 0,7 < 705/1000."],
    ["D", "Écris 1250/1000 en écriture décimale, puis sous forme de fraction décimale de dénominateur 100.",
          "1250/1000 = 1,25 = 125/100."],
    ["D", "Écris 3 + 4/100 sous la forme d'une seule fraction décimale.",
          "3 = 300/100, donc 3 + 4/100 = 304/100 (soit 3,04)."],
    ["D", "Vrai ou faux : 5/100 = 0,5. Justifie et corrige si nécessaire.",
          "FAUX : 5/100 = 0,05. C'est 5/10 qui vaut 0,5."],
    ["D", "Une pièce mesure 45/1000 m d'épaisseur. Exprime cette épaisseur en mètres sous forme décimale, puis en millimètres.",
          "45/1000 = 0,045 m. Comme 1 m = 1000 mm : 0,045 × 1000 = 45 mm."],
  ]
},

/* ── Demi-droite graduée / repérer, placer un décimal ──────────────────── */
{
  id: "demi-droite",
  test: f => /demi droite|graduee|graduation|abscisse|reperer|placer|droite numerique/.test(f),
  exos: [
    ["F", "Quelle est l'abscisse du point situé exactement au milieu des points d'abscisses 3 et 4 ?",
          "Le milieu de 3 et 4 a pour abscisse 3,5."],
    ["F", "Une demi-droite est graduée de 0 à 1 en 10 parts égales. Quelle est l'abscisse du 7e trait après 0 ?",
          "Chaque part vaut 0,1, donc le 7e trait a pour abscisse 0,7."],
    ["M", "Entre 2 et 3, on partage en 5 parts égales. Donne l'abscisse de chacun des traits intermédiaires.",
          "Chaque part vaut 1 ÷ 5 = 0,2. Les traits ont pour abscisses 2,2 ; 2,4 ; 2,6 ; 2,8."],
    ["M", "Donne l'abscisse du milieu du segment dont les extrémités ont pour abscisses 1,4 et 1,6.",
          "(1,4 + 1,6) ÷ 2 = 3 ÷ 2 = 1,5."],
    ["M", "Sur une demi-droite graduée d'unité 1, combien y a-t-il de dixièmes entre l'origine et le point d'abscisse 4,3 ?",
          "4,3 = 43 dixièmes : il y a 43 dixièmes."],
    ["D", "Une graduation va de 0 à 0,1, partagée en 10 parts égales. Quelle est l'abscisse du 3e trait ? Et celle du milieu entre le 3e et le 4e trait ?",
          "Chaque part vaut 0,01 : le 3e trait a pour abscisse 0,03. Le milieu entre 0,03 et 0,04 a pour abscisse 0,035."],
    ["D", "A a pour abscisse 5,2 et B pour abscisse 5,8. Donne l'abscisse du milieu de [AB], puis celle du point qui partage [AB] en trois parts égales et qui est le plus proche de A.",
          "Milieu : (5,2 + 5,8) ÷ 2 = 5,5. La longueur AB vaut 0,6 ; le tiers vaut 0,2, donc le point cherché a pour abscisse 5,2 + 0,2 = 5,4."],
    ["D", "Sur une graduation, un trait sur deux est numéroté : 12,3 puis 12,5 puis 12,7. Que vaut l'écart entre deux traits consécutifs ?",
          "L'écart entre deux nombres affichés est 0,2, et il correspond à deux traits : chaque écart vaut 0,2 ÷ 2 = 0,1."],
    ["D", "Explique comment placer 3,07 sur une demi-droite graduée de 3 à 3,1.",
          "On partage l'intervalle de 3 à 3,1 en 10 parts égales : chaque part vaut 0,01. Le point 3,07 se trouve au 7e trait après 3."],
    ["D", "L'abscisse d'un point est comprise entre 6,4 et 6,5, et ce point est plus proche de 6,5 que de 6,4. Propose deux abscisses possibles.",
          "Il faut une abscisse comprise entre 6,45 et 6,5 : par exemple 6,46 et 6,49."],
  ]
},

/* ── Ordre de grandeur / calcul mental approché ────────────────────────── */
{
  id: "ordre-grandeur",
  test: f => /ordre de grandeur|estim/.test(f),
  exos: [
    ["F", "Donne un ordre de grandeur de 197 + 402.",
          "197 ≈ 200 et 402 ≈ 400, donc la somme vaut environ 600 (résultat exact : 599)."],
    ["F", "Donne un ordre de grandeur de 9,8 × 5.",
          "9,8 ≈ 10, donc le produit vaut environ 10 × 5 = 50 (résultat exact : 49)."],
    ["M", "Donne un ordre de grandeur de 4,97 × 21.",
          "4,97 ≈ 5 et 21 ≈ 20, donc environ 5 × 20 = 100 (résultat exact : 104,37)."],
    ["M", "Donne un ordre de grandeur de 1 987 + 3 012 + 995.",
          "Environ 2 000 + 3 000 + 1 000 = 6 000 (résultat exact : 5 994)."],
    ["M", "Sans calculatrice, dis si 0,49 × 82 est plus proche de 4, de 40 ou de 400.",
          "0,49 ≈ 0,5 et 82 ≈ 80, donc environ 0,5 × 80 = 40 : le résultat est proche de 40."],
    ["D", "Une calculatrice affiche 3 964 pour le calcul 3,98 × 99. Ce résultat est-il plausible ? Justifie.",
          "Non : 3,98 ≈ 4 et 99 ≈ 100, donc le produit vaut environ 400. L'affichage est 10 fois trop grand (le vrai résultat est 394,02) : une virgule a sans doute été oubliée."],
    ["D", "Donne un ordre de grandeur de 0,102 × 4 950.",
          "0,102 ≈ 0,1 et 4 950 ≈ 5 000, donc environ 0,1 × 5 000 = 500 (résultat exact : 504,9)."],
    ["D", "Estime le prix de 48 articles à 19,95 € l'unité, puis dis si 957,60 € est un résultat plausible.",
          "48 ≈ 50 et 19,95 ≈ 20, donc environ 50 × 20 = 1 000 €. 957,60 € est proche de 1 000 € : le résultat est plausible (il est même exact)."],
    ["D", "Donne un ordre de grandeur de 6 037 ÷ 29.",
          "6 037 ≈ 6 000 et 29 ≈ 30, donc environ 6 000 ÷ 30 = 200 (résultat exact ≈ 208,2)."],
    ["D", "Un élève annonce 0,72 comme résultat de 7,2 ÷ 0,1. Contrôle sa réponse par un ordre de grandeur.",
          "Diviser par 0,1 revient à multiplier par 10 : le résultat doit être plus GRAND que 7,2, environ 72. La réponse 0,72 est donc fausse : c'est 7,2 × 0,1, pas 7,2 ÷ 0,1."],
  ]
},

/* ── Problèmes avec des nombres décimaux ───────────────────────────────── */
{
  id: "problemes",
  test: f => /probleme|situation|resoudre un probleme|vie courante/.test(f),
  exos: [
    ["F", "Un stylo coûte 1,20 €. Combien coûtent 10 stylos ?",
          "1,20 × 10 = 12. Dix stylos coûtent 12 €."],
    ["F", "Un ruban de 2,5 m est coupé en 10 morceaux de même longueur. Quelle est la longueur d'un morceau ?",
          "2,5 ÷ 10 = 0,25. Chaque morceau mesure 0,25 m, soit 25 cm."],
    ["M", "1 kg de café coûte 18,50 €. Quel est le prix de 100 g ?",
          "100 g, c'est 1 kg ÷ 10, donc 18,50 ÷ 10 = 1,85 €."],
    ["M", "Un flacon contient 0,75 L. Combien faut-il de flacons pour obtenir 30 L ?",
          "30 ÷ 0,75 = 40. Il faut 40 flacons."],
    ["M", "Une plaque de 100 carreaux identiques pèse 42,5 kg. Quelle est la masse d'un carreau ?",
          "42,5 ÷ 100 = 0,425. Un carreau pèse 0,425 kg, soit 425 g."],
    ["D", "Une feuille de papier a une épaisseur de 0,1 mm. Quelle est l'épaisseur d'une rame de 500 feuilles, en millimètres puis en centimètres ?",
          "0,1 × 500 = 50 mm, soit 5 cm."],
    ["D", "Un robinet fuit et perd 0,05 L d'eau par minute. Combien de litres sont perdus en 1 heure ? Et en 1 jour ?",
          "En 1 h : 0,05 × 60 = 3 L. En 1 jour : 3 × 24 = 72 L."],
    ["D", "Un article coûte 12,99 €. Donne d'abord un ordre de grandeur du prix de 100 articles, puis calcule le prix exact.",
          "Ordre de grandeur : 13 × 100 = 1 300 €. Prix exact : 12,99 × 100 = 1 299 €."],
    ["D", "Une voiture consomme 5,6 L de carburant aux 100 km. Quelle est sa consommation pour 10 km ? Pour 1 000 km ?",
          "Pour 10 km : 5,6 ÷ 10 = 0,56 L. Pour 1 000 km : 5,6 × 10 = 56 L."],
    ["D", "Un boulanger vend 1 000 baguettes à 1,15 € l'unité. Quelle est sa recette ? S'il baisse le prix de 0,05 €, combien perd-il sur ces 1 000 baguettes ?",
          "Recette : 1,15 × 1 000 = 1 150 €. Perte : 0,05 × 1 000 = 50 € (la nouvelle recette est 1 100 €)."],
  ]
},

];

const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };

/* Valeur la plus fréquente d'une colonne parmi les exercices d'une famille. */
function majoritaire(lignes, champ, defaut) {
  const comptes = new Map();
  lignes.forEach(l => {
    const v = l[champ];
    if (v === null || v === undefined || String(v).trim() === "") return;
    comptes.set(v, (comptes.get(v) || 0) + 1);
  });
  if (!comptes.size) return defaut;
  return [...comptes.entries()].sort((a, b) => b[1] - a[1])[0][0];
}

/* Plus grand numéro final déjà utilisé dans les titres de la famille. */
function dernierNumero(lignes) {
  let max = 0;
  lignes.forEach(l => {
    const m = String(l.title || "").match(/(\d+)\s*$/);
    if (m) max = Math.max(max, Number(m[1]));
  });
  return max;
}

(async () => {
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  /* Le chapitre peut être orthographié « Entiers & décimaux », « Entiers et
     decimaux »… : on ratisse large puis on filtre sur la forme normalisée. */
  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, solution,
            classe, chapitre, type, famille
       FROM exercises
      WHERE chapitre ILIKE '%cimaux%' OR chapitre ILIKE '%decimaux%'
      ORDER BY id`);

  const rows = brut.filter(r => {
    const c = cle(r.chapitre);
    return c.includes("entier") && c.includes("decimaux");
  });

  if (!rows.length) {
    console.log("Aucun exercice trouvé dans le chapitre « Entiers & décimaux ».");
    console.log("Chapitres approchants en base :",
      [...new Set(brut.map(r => r.chapitre))].join(" | ") || "(aucun)");
    await pool.end(); return;
  }

  const CHAPITRE = majoritaire(rows, "chapitre", "Entiers & décimaux");
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s).\n`);

  /* ── ÉTAT INITIAL ── */
  const avant = {};
  rows.forEach(r => { const f = r.famille || "(sans famille)"; avant[f] = (avant[f] || 0) + 1; });
  console.log("Familles avant :");
  console.table(Object.entries(avant).map(([famille, n]) => ({ famille, n })));

  /* ── 1. RENOMMAGES ── */
  const renommages = [];
  RENOMMAGES.forEach(r => {
    const k = cle(r.depuis);
    const touches = rows.filter(x => x.famille && cle(x.famille).startsWith(k));
    const anciens = [...new Set(touches.map(x => x.famille))].filter(a => a !== r.vers);
    if (!touches.length) {
      console.log(`\n⚠ Renommage ignoré : aucune famille ne commence par « ${r.depuis} ».`);
      return;
    }
    if (!anciens.length) {
      console.log(`\n· « ${r.vers} » porte déjà le bon nom (${touches.length} exercice(s)).`);
    } else {
      console.log(`\n→ ${anciens.map(a => `« ${a} »`).join(" + ")} devient « ${r.vers} » ` +
                  `(${touches.length} exercice(s))`);
    }
    renommages.push({ ids: touches.map(x => x.id), vers: r.vers });
    touches.forEach(x => { x.famille = r.vers; });   // état mis à jour pour la suite
  });

  /* ── 2. ENRICHISSEMENT ── */
  const parFamille = new Map();
  rows.forEach(r => {
    const f = (r.famille && r.famille.trim()) || null;
    if (!f) return;
    const k = cle(f);
    if (!parFamille.has(k)) parFamille.set(k, { nom: f, items: [] });
    parFamille.get(k).items.push(r);
  });

  const contenusExistants = new Set(rows.map(r => cle(r.content)));
  const aInserer = [];
  const sansLot  = [];
  const rapport  = [];

  for (const [k, g] of parFamille) {
    const lot = CATALOGUE.find(c => c.test(k, g.nom));
    if (!lot) { sansLot.push(g.nom); continue; }

    const modele = {
      level:   majoritaire(g.items, "level",   "college"),
      subject: majoritaire(g.items, "subject", "Arithmétique"),
      classe:  majoritaire(g.items, "classe",  "6ème"),
      type:    majoritaire(g.items, "type",    "exercice"),
    };
    let num = dernierNumero(g.items);
    let ajoutes = 0, doublons = 0;

    lot.exos.forEach(([d, content, solution]) => {
      if (contenusExistants.has(cle(content))) { doublons++; return; }
      contenusExistants.add(cle(content));
      num++;
      aInserer.push({
        title: `${g.nom} ${num}`,
        content, solution,
        difficulty: LIBELLE[d],
        level: modele.level, subject: modele.subject, classe: modele.classe,
        chapitre: CHAPITRE, type: modele.type, famille: g.nom,
      });
      ajoutes++;
    });

    rapport.push({
      famille: g.nom, lot: lot.id, avant: g.items.length,
      ajoutes, deja: doublons, apres: g.items.length + ajoutes,
      classe: modele.classe,
    });
  }

  console.log("\n\nEnrichissement prévu :");
  if (rapport.length) console.table(rapport);
  else console.log("  (aucune famille reconnue par le catalogue)");

  const parDiff = {};
  aInserer.forEach(e => { parDiff[e.difficulty] = (parDiff[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} exercice(s) — ` +
    `Facile ${parDiff.Facile || 0} · Moyen ${parDiff.Moyen || 0} · Difficile ${parDiff.Difficile || 0}`);

  if (sansLot.length) {
    console.log("\n⚠ Familles du chapitre sans lot d'énoncés (rien n'y a été ajouté) :");
    sansLot.forEach(f => console.log("   - " + f));
    console.log("   → communiquez-moi ces libellés pour que j'écrive leurs énoncés.");
  }

  if (!EXECUTE) {
    console.log("\nAperçu des 3 premiers énoncés :");
    aInserer.slice(0, 3).forEach(e =>
      console.log(`\n  [${e.difficulty}] ${e.title}\n  ${e.content}\n  → ${e.solution}`));
    console.log("\n(simulation — relancez avec --execute)");
    await pool.end(); return;
  }

  /* ── SAUVEGARDE PUIS ÉCRITURE ── */
  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const nom = `decimaux-avant-enrichissement-${stamp}.json`;
  fs.writeFileSync(nom, JSON.stringify(rows, null, 2), "utf8");
  console.log(`\nSauvegarde de l'état antérieur : ${nom}`);

  for (const r of renommages) {
    const res = await pool.query("UPDATE exercises SET famille = $1 WHERE id = ANY($2)",
      [r.vers, r.ids]);
    console.log(`${res.rowCount} exercice(s) → famille « ${r.vers} »`);
  }

  let n = 0;
  for (const e of aInserer) {
    await pool.query(
      `INSERT INTO exercises
         (title, content, level, subject, difficulty, solution, classe, chapitre, type, famille)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [e.title, e.content, e.level, e.subject, e.difficulty, e.solution,
       e.classe, e.chapitre, e.type, e.famille]);
    n++;
  }
  console.log(`${n} exercice(s) inséré(s).`);

  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY n DESC`, [CHAPITRE]);
  console.log("\nFamilles après :");
  console.table(apres);

  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
