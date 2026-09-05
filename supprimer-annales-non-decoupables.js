/* POLYMATES — supprimer-annales-non-decoupables.js

   Supprime les annales contenant au moins un exercice dont les sous-questions
   ne peuvent pas être découpées, et qui n'aurait donc qu'un seul espace de
   réponse pour plusieurs questions.

   Deux natures de blocage, toutes deux hors de portée d'une règle de texte :

   \u2022 les QCM en tableau — l'extraction PDF entrelace les colonnes et produit
     \u00ab Quelle est la forme 1 développée del'expres- 2x2 2x 4x2 \u00bb, où le numéro
     de question atterrit au milieu d'une phrase coupée ; il faudrait relire la
     mise en page du PDF, pas son texte ;
   \u2022 les exercices dont les questions ne sont séparées que par une étiquette
     de figure — découper sur \u00ab Figure N \u00bb morcellerait à tort tous les sujets
     où une figure n'est qu'une illustration.

   ── SÉCURITÉ ──────────────────────────────────────────────────────────────
   Par défaut le script ne supprime RIEN : il liste. La suppression exige
   --supprimer, et elle est précédée d'un export JSON complet des sujets visés,
   qui permet de les réimporter.

   ── USAGE (PowerShell) ────────────────────────────────────────────────────
     node supprimer-annales-non-decoupables.js              # liste seulement
     node supprimer-annales-non-decoupables.js --supprimer  # supprime
*/

"use strict";
const fs = require("fs");
const { Pool } = require("pg");

const SUPPRIMER = process.argv.includes("--supprimer");

/* Chaque entrée : le PDF, puis le début de l'exercice qui bloque. Il est
   affiché avant toute suppression pour que la décision reste vérifiable. */
const CIBLES = [
  ["Brevet_17_septembre_2013.pdf",
   "Exercice8 5points Florafaitdesbraceletsavecdelapâteàmodeler.Ilssonttousconstituésde8perlesrondesetde4 perleslo"],
  ["Brevet_Amerique_du_Nord_11_juin_2014.pdf",
   "EXERCICE5 3points Pourunebonnepartiedepêcheaubordducanal,ilfautunsiègepliantadapté! Nicolasestdetaillemoyennee"],
  ["Brevet_Amerique_du_Sud_sujet_de_secours_novembre_2013.pdf",
   "Exercice6 4points Danscetexercice,siletravailn’estpasterminé,laissertoutdemêmeunetracedelarecherche. Elleserap"],
  ["Brevet_Asie_22_juin_2015.pdf",
   "Exercice2 5points Julienestenretardpourallerrejoindresesamisauterraindebasket. Ildécidealorsdetraverserimprude"],
  ["Brevet_Asie_24_juin_2013.pdf",
   "Exercice8 6points Danscetexercice,siletravailn’estpasterminé,laissertoutdemêmeunetracedelarecherche. Elleserap"],
  ["Brevet_NouvelleCaledonie_8_decembre_2015.pdf",
   "Exercice4:Problèmedecarrelage 3points Pourrépondreàlademanded’unclient,undécorateurabesoindedécouperdestriangl"],
  ["Brevet_NouvelleCaledonie_8_decembre_2016.pdf",
   "Exercice2:Jeuvidéo 4points Dansunjeuvidéo,pourgagnerdespointsd’expérienceetfaireévoluersonpersonnage,ilfautpar"],
  ["Brevet_NouvelleCaledonie_mars_2013_2012.pdf",
   "EXERCICE1 Cetexerciceestunquestionnaireàchoixmultiple(QCM). Pourchaquelignedutableautroisréponsessontproposées"],
  ["Brevet_Polynesie_10_septembre_2018.pdf",
   "Exercice7 18points 1repartie Frisedelapiscine Unepersonnepossèdeunepiscine. Elle veut coller une frise en carr"],
  ["Brevet_Polynesie_14_septembre_2017.pdf",
   "Exercice3 6points Lejardinierd’unclubdefootballdécidedesemerànouveaudugazonsurl’airedejeu.Pourquecelui- cipous"],
  ["Brevet_Polynesie_2_septembre_2013.pdf",
   "Exercice5: 5points Teiki se promène en montagne et aimerait connaître la hauteur d’un Pinus (ou Pin des Caraib"],
  ["Brevet_Polynesie_septembre_2014.pdf",
   "Exercice8 6points Uncoupleaacheté unemaisonavecpiscine envuedelalouer. Pourcetachat,lecouplea effectuéunprêtau"],
  ["Brevet_Pondichery_28_avril_2015.pdf",
   "EXERCICE1 5POINTS CetexerciceestunQCM(questionnaireàchoixmultiples). Pourchaquelignedutableau,uneseuleaffirmat"],
  ["Brevet_Pondichery_29_avril_2014.pdf",
   "EXERCICE3 3POINTS «Jeprendsunnombreentier.Jeluiajoute3etjemultiplielerésultatpar7.J’ajouteletripledunombre ded"],
  ["Brevet_Pondichery_avril_2010.pdf",
   "EXERCICE3 Pour chaque question, écrirela lettre correspondant à la bonne réponse. Aucune justificationn’estdem"],
  ["Brevet_Pondichery_avril_2012.pdf",
   "EXERCICE3 Dansunpotaucouverclerougeonamis6bonbonsàlafraiseet10bonbonsàlamenthe. Dansunpotaucouverclebleuonamis"],
  ["Brevet_juin_2008_2.pdf",
   "Exercice2 Danscetexercice,toutetracederecherche,mêmeincomplète,oud’initiativemêmenonfructueuse,sera priseencom"],
];

if (!process.env.DATABASE_URL) { console.error("\u2717 DATABASE_URL manquant."); process.exit(1); }

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

/* Le nom de fichier se retrouve dans image_url, pas dans title : les titres
   ont été réécrits par l'IA au dépôt et ne sont pas fiables pour un DELETE. */
function correspond(annale, fichier) {
  const u = String(annale.image_url || "");
  return u.endsWith("/" + fichier) || u === fichier || u.endsWith(fichier);
}

(async () => {
  const { rows } = await pool.query(
    "SELECT id, title, image_url, exam, year, duration, questions, content FROM annales"
  );
  console.log("Annales en base : " + rows.length);

  const vises = [];
  const introuvables = [];
  for (const [fichier, extrait] of CIBLES) {
    const trouves = rows.filter(a => correspond(a, fichier));
    if (!trouves.length) { introuvables.push(fichier); continue; }
    trouves.forEach(a => vises.push({ a, fichier, extrait }));
  }

  console.log("\nSujets vis\u00e9s : " + vises.length);
  vises.forEach(v => {
    console.log("\n  \u25a4 " + v.a.title + "   (id " + v.a.id + ")");
    console.log("    exercice bloquant : " + v.extrait);
  });

  if (introuvables.length) {
    console.log("\n\u26a0 " + introuvables.length + " PDF sans annale correspondante en base :");
    introuvables.forEach(f => console.log("    " + f));
  }

  if (!SUPPRIMER) {
    console.log("\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500");
    console.log("  Rien n'a \u00e9t\u00e9 supprim\u00e9. Relance avec --supprimer pour agir.");
    console.log("\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500");
    await pool.end();
    return;
  }

  if (!vises.length) { console.log("\nRien \u00e0 supprimer."); await pool.end(); return; }

  const horodatage = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
  const nom = "sauvegarde-annales-" + horodatage + ".json";
  fs.writeFileSync(nom, JSON.stringify(vises.map(v => v.a), null, 2), "utf8");
  console.log("\n\u2713 Sauvegarde \u00e9crite : " + nom
    + "  (" + Math.round(fs.statSync(nom).size / 1024) + " Ko)");

  const ids = vises.map(v => v.a.id);
  const res = await pool.query("DELETE FROM annales WHERE id = ANY($1::int[])", [ids]);
  console.log("\u2713 " + res.rowCount + " annale(s) supprim\u00e9e(s).");
  console.log("  Restantes : " + (rows.length - res.rowCount));

  await pool.end();
})().catch(e => { console.error("\u2717 " + e.message); process.exit(1); });
