/* MathBase — generer-temps.js
   Chapitre « Repérage temps & durées » : 100 exercices par famille.

   ⚠ FAMILLE « Les unités de temps » EXCLUE, comme demandé. Elle est signalée
   dans le rapport et laissée intacte.

   Tout est calculé en SECONDES entières, puis reformaté en h / min / s.
   C'est indispensable ici : le temps se compte en base 60, et poser les
   calculs comme sur des décimaux donne des résultats faux (11 h 20 − 8 h 45
   n'est pas « 2 h 75 »). Plusieurs modèles « erreur d'élève » exploitent
   précisément cette confusion.

   Les corrigés reprennent les méthodes de vos énoncés témoins :
     · durée   → on passe par l'heure ronde, puis on ajoute les minutes ;
     · arrivée → on ajoute les heures, puis les minutes ;
     · relais  → on additionne les secondes, on reporte, puis les minutes.

   · 20 faciles / 30 moyens / 50 difficiles par famille.
   · Pas de famille « Cours ». Problèmes inclus (--exclure-problemes).
   · Tirage déterministe + déduplication : rejouable sans doublon.

   Usage :
     node generer-temps.js --apercu
     node generer-temps.js --apercu "Heures décimales"
     $env:DATABASE_URL = "postgresql://..."
     node generer-temps.js            # simulation
     node generer-temps.js --execute  # applique
   Options : --cible N (100) · --graine N (20260806) · --exclure-problemes
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const EXCLURE_PB = ARGS.includes("--exclure-problemes");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260806);
const REPART = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };
/* familles laissées de côté (comparaison souple) */
const EXCLUES = ["les unites de temps"];

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const ri = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];

/* ══ temps exact, en secondes ══ */
const pad = n => String(n).padStart(2, "0");
const H = s => Math.floor(s / 3600), M = s => Math.floor(s % 3600 / 60), Sec = s => s % 60;
function heure(sec) {                       // instant d'horloge
  const h = H(sec), m = M(sec), s = Sec(sec);
  if (s) return `${h} h ${pad(m)} min ${s} s`;
  return m ? `${h} h ${pad(m)}` : `${h} h`;
}
function duree(sec) {                       // durée
  const h = H(sec), m = M(sec), s = Sec(sec), p = [];
  if (h) p.push(`${h} h`);
  if (m) p.push(h ? `${pad(m)} min` : `${m} min`);
  if (s) p.push(`${s} s`);
  return p.length ? p.join(" ") : "0 min";
}
const hm = (h, m) => h * 3600 + m * 60;
/* groupement des milliers : « 11 227 s » et non « 11227 s » */
const grp = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
/* heure de départ « jolie » */
const depart = (hMin = 6, hMax = 20) => hm(ri(hMin, hMax), pick([0,5,10,12,15,20,25,30,35,40,45,50,52,55,58]));

/* ── narration : durée entre deux instants, en passant par l'heure ronde ── */
function narreDuree(deb, fin) {
  const total = fin - deb, hFin = H(fin) * 3600;
  if (H(deb) === H(fin)) return `Les deux instants sont dans la même heure : ${M(fin)} − ${M(deb)} = ${M(total)} min.\nDurée : ${duree(total)}.`;
  const p1 = hFin - deb, p2 = fin - hFin;
  if (p2 === 0) return `De ${heure(deb)} à ${heure(fin)} : ${duree(p1)}.\nDurée : ${duree(total)}.`;
  return `De ${heure(deb)} à ${heure(hFin)} : ${duree(p1)}.\nDe ${heure(hFin)} à ${heure(fin)} : ${duree(p2)}.\nDurée totale : ${duree(total)}.`;
}
/* ── narration : ajout d'une durée à un instant ── */
function narreAjout(deb, dur) {
  const fin = deb + dur, h = H(dur), m = M(dur) * 60 + Sec(dur);
  if (h && m) { const inter = deb + h * 3600;
    return `${heure(deb)} + ${h} h = ${heure(inter)}, puis + ${duree(m)} = ${heure(fin)}.`; }
  if (h) return `${heure(deb)} + ${h} h = ${heure(fin)}.`;
  /* passage par l'heure ronde, comme dans « L'arrivée du bus » */
  const versRonde = 3600 - (deb % 3600);
  if (M(deb) !== 0 && dur > versRonde) {
    const ronde = deb + versRonde;
    return `${heure(deb)} + ${duree(versRonde)} = ${heure(ronde)}, puis + ${duree(dur - versRonde)} = ${heure(fin)}.`;
  }
  return `${heure(deb)} + ${duree(dur)} = ${heure(fin)}.`;
}

const PRENOMS = ["Léa","Hugo","Nina","Sacha","Jade","Malo","Inès","Timéo","Alice","Noé","Lina","Adam"];
const TRAJETS = [["train","trajet"],["car","trajet"],["avion","vol"],["bateau","traversée"],["métro","parcours"]];
const SEANCES = [["film","dure"],["concert","dure"],["match","dure"],["spectacle","dure"],["cours","dure"]];
const LIGNES = ["A","B","C","12","27","38","44","51"];

/* ══════════ FAMILLES ══════════ */
const FAMILLES = {};

/* ── Calculer une durée ── */
FAMILLES["Calculer une durée"] = [
{ d:"F", g(){ const [v,t]=pick(TRAJETS), deb=depart(6,10), fin=deb+hm(ri(1,3),pick([5,10,15,20,25,30,35,40,45,50]));
  if(H(fin)>23) return null;
  return { q:`Un ${v} part à ${heure(deb)} et arrive à ${heure(fin)}. Combien de temps dure le ${t} ?`,
           s:narreDuree(deb,fin) }; } },
{ d:"F", g(){ const h=ri(8,18), m1=pick([0,5,10,15,20]), m2=m1+pick([15,20,25,30,35,40]);
  if(m2>=60) return null;
  return { q:`Quelle est la durée entre ${heure(hm(h,m1))} et ${heure(hm(h,m2))} ?`,
           s:narreDuree(hm(h,m1),hm(h,m2)) }; } },
{ d:"F", g(){ const deb=depart(7,11), fin=deb+hm(ri(1,4),0);
  if(H(fin)>23) return null;
  return { q:`Quelle est la durée entre ${heure(deb)} et ${heure(fin)} ?`, s:narreDuree(deb,fin) }; } },
{ d:"M", g(){ const deb=depart(6,12), fin=deb+hm(ri(1,5),ri(1,59));
  if(H(fin)>23) return null;
  return { q:`Quelle est la durée entre ${heure(deb)} et ${heure(fin)} ?`, s:narreDuree(deb,fin) }; } },
{ d:"M", g(){ const [v,t]=pick(TRAJETS), deb=depart(5,13), fin=deb+hm(ri(2,6),ri(1,59));
  if(H(fin)>23) return null;
  return { q:`Un ${v} part à ${heure(deb)} et arrive à ${heure(fin)}. Quelle est la durée du ${t} ?`,
           s:narreDuree(deb,fin) }; } },
{ d:"M", g(){ const [s,]=pick(SEANCES), deb=depart(13,20), fin=deb+hm(ri(1,3),ri(1,59));
  if(H(fin)>23) return null;
  return { q:`Un ${s} commence à ${heure(deb)} et se termine à ${heure(fin)}. Quelle est sa durée ?`,
           s:narreDuree(deb,fin) }; } },
{ d:"D", g(){ const deb=depart(9,11), fin=deb+hm(ri(3,7),ri(1,59));
  if(H(fin)>23||H(fin)<13) return null;
  return { q:`Un magasin ouvre à ${heure(deb)} et ferme à ${heure(fin)}. Quelle est sa durée d'ouverture ?`,
           s:`${narreDuree(deb,fin)}\nOn peut vérifier : ${heure(deb)} + ${duree(fin-deb)} = ${heure(fin)}.` }; } },
{ d:"D", g(){ const deb=hm(ri(21,23),ri(1,59)), fin=hm(ri(1,5),ri(1,59));
  const total=(24*3600-deb)+fin;
  return { q:`Un vol part à ${heure(deb)} et arrive à ${heure(fin)} le lendemain. Quelle est sa durée ?`,
           s:`De ${heure(deb)} à minuit : ${duree(24*3600-deb)}.\nDe minuit à ${heure(fin)} : ${duree(fin)}.\nDurée totale : ${duree(total)}.` }; } },
{ d:"D", g(){ const deb=depart(7,10)+ri(1,59), fin=deb+ri(3600,5*3600)+ri(1,59);
  if(H(fin)>23) return null;
  return { q:`Une expérience commence à ${heure(deb)} et se termine à ${heure(fin)}. Quelle est sa durée ?`,
           s:`Secondes : de ${Sec(deb)} s à ${Sec(fin)} s.\nEn passant par l'heure ronde : de ${heure(deb)} à ${heure(H(fin)*3600)} il s'écoule ${duree(H(fin)*3600-deb)}, puis ${duree(fin-H(fin)*3600)}.\nDurée totale : ${duree(fin-deb)}.` }; } },
{ d:"D", g(){ const deb=hm(ri(8,10),pick([45,50,52,55])), fin=deb+hm(ri(2,4),ri(20,55)); const el=pick(PRENOMS);
  if(H(fin)>23) return null;
  const fauxH=H(fin)-H(deb), fauxM=M(fin)-M(deb);
  if(fauxM>=0) return null;                       // l'erreur n'apparaît qu'avec un emprunt
  return { q:`De ${heure(deb)} à ${heure(fin)}, ${el} calcule ${H(fin)} − ${H(deb)} = ${fauxH} et ${M(fin)} − ${M(deb)} = ${fauxM}, et annonce ${fauxH} h ${fauxM} min. Explique son erreur.`,
           s:`${el} soustrait les minutes comme des décimaux, ce qui donne un nombre négatif : impossible.\nLe temps se compte en base 60 : il faut emprunter 1 h = 60 min, ou passer par l'heure ronde.\n${narreDuree(deb,fin)}` }; } },
{ d:"D", g(){ const deb=depart(7,11), d1=hm(ri(1,3),ri(1,59)), d2=hm(ri(1,3),ri(1,59));
  const f1=deb+d1, f2=deb+d2;
  if(H(f1)>23||H(f2)>23||d1===d2) return null;
  return { q:`Deux trajets partent à ${heure(deb)} : le premier arrive à ${heure(f1)}, le second à ${heure(f2)}. Lequel est le plus long, et de combien ?`,
           s:`Premier : ${duree(d1)}. Second : ${duree(d2)}.\nLe ${d1>d2?"premier":"second"} est le plus long, de ${duree(Math.abs(d1-d2))}.` }; } },
{ d:"D", g(){ const deb=depart(8,12), pause=hm(0,pick([15,20,30,45])), fin=deb+hm(ri(2,5),ri(1,59));
  if(H(fin)>23) return null;
  return { q:`Une réunion a lieu de ${heure(deb)} à ${heure(fin)}, avec une pause de ${duree(pause)}. Quelle est la durée de travail effective ?`,
           s:`Durée totale : ${duree(fin-deb)}.\nOn retire la pause : ${duree(fin-deb)} − ${duree(pause)} = ${duree(fin-deb-pause)}.` }; } },
];

/* ── Calculer une heure d'arrivée ── */
FAMILLES["Calculer une heure d'arrivée"] = [
{ d:"F", g(){ const [s,v]=pick(SEANCES), deb=depart(9,20), dur=hm(ri(1,2),pick([0,15,30,45,50]));
  if(H(deb+dur)>23) return null;
  return { q:`Un ${s} commence à ${heure(deb)} et ${v} ${duree(dur)}. À quelle heure se termine-t-il ?`,
           s:narreAjout(deb,dur) }; } },
{ d:"F", g(){ const deb=depart(7,18), dur=hm(0,pick([10,15,20,25,30,40,45]));
  return { q:`Il est ${heure(deb)}. Quelle heure sera-t-il dans ${duree(dur)} ?`, s:narreAjout(deb,dur) }; } },
{ d:"F", g(){ const deb=depart(6,15), dur=hm(ri(1,4),0);
  if(H(deb+dur)>23) return null;
  return { q:`Un trajet part à ${heure(deb)} et dure ${duree(dur)}. À quelle heure arrive-t-il ?`, s:narreAjout(deb,dur) }; } },
{ d:"M", g(){ const [s,v]=pick(SEANCES), deb=depart(9,20), dur=hm(ri(1,3),ri(1,59));
  if(H(deb+dur)>23) return null;
  return { q:`Un ${s} commence à ${heure(deb)} et ${v} ${duree(dur)}. À quelle heure se termine-t-il ?`,
           s:narreAjout(deb,dur) }; } },
{ d:"M", g(){ const deb=hm(ri(8,20),pick([40,45,50,52,55,58])), dur=hm(0,ri(20,59));
  if(H(deb+dur)>23) return null;
  return { q:`Il est ${heure(deb)}. Quelle heure sera-t-il dans ${duree(dur)} ?`, s:narreAjout(deb,dur) }; } },
{ d:"M", g(){ const [v,t]=pick(TRAJETS), deb=depart(6,14), dur=hm(ri(2,5),ri(1,59));
  if(H(deb+dur)>23) return null;
  return { q:`Un ${v} part à ${heure(deb)}. Le ${t} dure ${duree(dur)}. À quelle heure arrive-t-il ?`, s:narreAjout(deb,dur) }; } },
{ d:"D", g(){ const deb=hm(ri(21,23),ri(1,59)), dur=hm(ri(2,7),ri(1,59));
  const fin=(deb+dur)%(24*3600);
  if(deb+dur<24*3600) return null;
  return { q:`Un vol part à ${heure(deb)} et dure ${duree(dur)}. À quelle heure arrive-t-il ?`,
           s:`De ${heure(deb)} à minuit : ${duree(24*3600-deb)}.\nIl reste ${duree(dur-(24*3600-deb))} après minuit.\nArrivée à ${heure(fin)}, le lendemain.` }; } },
{ d:"D", g(){ const fin=depart(14,20), dur=hm(ri(1,4),ri(1,59)), deb=fin-dur;
  if(deb<5*3600) return null;
  return { q:`Un trajet dure ${duree(dur)} et doit se terminer à ${heure(fin)}. À quelle heure faut-il partir ?`,
           s:`On remonte le temps : ${heure(fin)} − ${duree(dur)}.\n${narreDuree(deb,fin)}\nIl faut partir à ${heure(deb)}.` }; } },
{ d:"D", g(){ const deb=depart(8,14), d1=hm(ri(1,2),ri(1,59)), att=hm(0,pick([10,15,20,25,30])), d2=hm(ri(1,2),ri(1,59));
  const fin=deb+d1+att+d2;
  if(H(fin)>23) return null;
  return { q:`Un voyageur part à ${heure(deb)}, roule ${duree(d1)}, attend ${duree(att)} en correspondance, puis roule encore ${duree(d2)}. À quelle heure arrive-t-il ?`,
           s:`Durée totale : ${duree(d1)} + ${duree(att)} + ${duree(d2)} = ${duree(d1+att+d2)}.\n${narreAjout(deb,d1+att+d2)}` }; } },
{ d:"D", g(){ const deb=depart(8,16), dur=hm(ri(1,3),ri(31,59)); const el=pick(PRENOMS);
  if(H(deb+dur)>23) return null;
  const faux=deb+H(dur)*3600+M(dur)*60;         // faux seulement si l'élève « pose » en base 10
  const fauxM=M(deb)+M(dur);
  if(fauxM<60) return null;
  return { q:`Un trajet part à ${heure(deb)} et dure ${duree(dur)}. ${el} additionne les minutes et annonce ${H(deb)+H(dur)} h ${fauxM}. Explique son erreur.`,
           s:`${fauxM} min dépasse 60 : une heure d'horloge ne peut pas afficher plus de 59 minutes.\n${fauxM} min = ${Math.floor(fauxM/60)} h ${pad(fauxM%60)} min, qu'il faut reporter sur les heures.\n${narreAjout(deb,dur)}` }; } },
{ d:"D", g(){ const deb=depart(7,12), dur=hm(ri(1,3),ri(1,59)), n=ri(2,4);
  const fin=deb+dur*n;
  if(H(fin)>23) return null;
  return { q:`Un atelier de ${duree(dur)} est répété ${n} fois de suite à partir de ${heure(deb)}, sans pause. À quelle heure se termine le dernier ?`,
           s:`Durée totale : ${n} × ${duree(dur)} = ${duree(dur*n)}.\n${narreAjout(deb,dur*n)}` }; } },
{ d:"D", g(){ const deb=depart(6,10), dur=ri(3600,4*3600)+ri(1,59);
  const fin=deb+dur;
  if(H(fin)>23) return null;
  return { q:`Une course part à ${heure(deb)} et dure ${duree(dur)}. À quelle heure le coureur franchit-il l'arrivée ?`,
           s:`On ajoute d'abord les heures : ${heure(deb)} + ${H(dur)} h = ${heure(deb+H(dur)*3600)}.\nPuis les minutes et les secondes : + ${duree(M(dur)*60+Sec(dur))} = ${heure(fin)}.` }; } },
];

/* ── Convertir des durées ── */
FAMILLES["Convertir des durées"] = [
{ d:"F", g(){ const h=ri(1,6), m=pick([5,10,15,20,25,30,40,45,50]), t=ri(70,300);
  return { q:`Convertis : a) ${h} h ${m} min en minutes b) ${t} min en heures et minutes`,
           s:`a) ${h} × 60 + ${m} = ${h*60+m} min.\nb) ${t} = ${Math.floor(t/60)} × 60 + ${t%60}, soit ${duree(t*60)}.` }; } },
{ d:"F", g(){ const h=ri(1,8), m=ri(1,59);
  return { q:`Convertis ${h} h ${pad(m)} min en minutes.`, s:`${h} × 60 + ${m} = ${h*60+m} min.` }; } },
{ d:"F", g(){ const t=ri(65,400);
  return { q:`Convertis ${t} min en heures et minutes.`,
           s:`${t} = ${Math.floor(t/60)} × 60 + ${t%60}, soit ${duree(t*60)}.` }; } },
{ d:"M", g(){ const m=ri(2,20), s=ri(1,59);
  return { q:`Convertis ${m} min ${pad(s)} s en secondes.`, s:`${m} × 60 + ${s} = ${m*60+s} s.` }; } },
{ d:"M", g(){ const t=ri(70,900);
  return { q:`Convertis ${t} s en minutes et secondes.`,
           s:`${t} = ${Math.floor(t/60)} × 60 + ${t%60}, soit ${duree(t)}.` }; } },
{ d:"M", g(){ const h=ri(1,5), m=ri(1,59);
  return { q:`Convertis ${h} h ${pad(m)} min en secondes.`,
           s:`${h} h = ${grp(h*3600)} s et ${m} min = ${grp(m*60)} s.\nTotal : ${grp(h*3600)} + ${grp(m*60)} = ${grp(h*3600+m*60)} s.` }; } },
{ d:"D", g(){ const h=ri(1,6), m=ri(1,59), s=ri(1,59);
  return { q:`Convertis ${h} h ${pad(m)} min ${s} s en secondes.`,
           s:`${h} × 3600 = ${grp(h*3600)} s · ${m} × 60 = ${grp(m*60)} s · ${s} s.\nTotal : ${grp(h*3600+m*60+s)} s.` }; } },
{ d:"D", g(){ const tot=ri(3700,36000);
  return { q:`Convertis ${grp(tot)} s en heures, minutes et secondes.`,
           s:`${grp(tot)} ÷ 3600 = ${H(tot)} reste ${grp(tot%3600)} : ${H(tot)} h.\n${grp(tot%3600)} ÷ 60 = ${M(tot)} reste ${Sec(tot)} : ${M(tot)} min et ${Sec(tot)} s.\nSoit ${duree(tot)}.` }; } },
{ d:"D", g(){ const j=ri(1,5), h=ri(1,23);
  return { q:`Convertis ${j} jour${j>1?"s":""} ${h} h en heures, puis en minutes.`,
           s:`${j} × 24 + ${h} = ${j*24+h} h.\n${j*24+h} × 60 = ${grp((j*24+h)*60)} min.` }; } },
{ d:"D", g(){ const h=ri(1,4), m=ri(1,59); const el=pick(PRENOMS);
  return { q:`Pour convertir ${h} h ${pad(m)} min en minutes, ${el} écrit ${h}${pad(m)} min. Explique son erreur.`,
           s:`${el} a simplement collé les deux nombres, comme s'il s'agissait d'une écriture décimale.\nUne heure vaut 60 minutes, pas 100 : ${h} × 60 + ${m} = ${h*60+m} min.` }; } },
{ d:"D", g(){ const t=ri(100,600);
  return { q:`Convertis ${t} min en heures et minutes, puis vérifie ton résultat par le calcul inverse.`,
           s:`${t} ÷ 60 = ${Math.floor(t/60)} reste ${t%60}, soit ${duree(t*60)}.\nVérification : ${Math.floor(t/60)} × 60 + ${t%60} = ${t} min.` }; } },
{ d:"D", g(){ const a=ri(1,3), am=ri(1,59), b=ri(1,3), bm=ri(1,59);
  const t1=hm(a,am), t2=hm(b,bm);
  if(t1===t2) return null;
  return { q:`Compare ${a} h ${pad(am)} min et ${b*60+bm} min. Laquelle est la plus longue ?`,
           s:`On convertit dans la même unité : ${a} h ${pad(am)} min = ${a*60+am} min.\n${a*60+am} min et ${b*60+bm} min : la plus longue est ${a*60+am>b*60+bm?`${a} h ${pad(am)} min`:`${b*60+bm} min`}.` }; } },
];

/* ── Heures décimales ── */
/* dixièmes, quarts et demis : leur conversion en minutes tombe juste */
const DEC = [[1,6],[2,12],[25,15],[3,18],[4,24],[5,30],[6,36],[7,42],[75,45],[8,48],[9,54]];
const decTxt = d => d === 25 ? "25" : d === 75 ? "75" : String(d);
FAMILLES["Heures décimales"] = [
{ d:"F", g(){ const h=ri(1,9), [d,m]=pick(DEC);
  return { q:`Convertis ${h},${decTxt(d)} h en heures et minutes.`,
           s:`0,${decTxt(d)} h = 0,${decTxt(d)} × 60 = ${m} min.\n${h},${decTxt(d)} h = ${h} h ${pad(m)} min (attention : pas ${h} h ${decTxt(d)} min !).` }; } },
{ d:"F", g(){ const [d,m]=pick(DEC);
  return { q:`Combien de minutes représente 0,${decTxt(d)} h ?`, s:`0,${decTxt(d)} × 60 = ${m} min.` }; } },
{ d:"F", g(){ const h=ri(1,6), [d,m]=pick(DEC);
  return { q:`Convertis ${h} h ${pad(m)} min en heures décimales.`,
           s:`${m} min = ${m} ÷ 60 = 0,${decTxt(d)} h.\n${h} h ${pad(m)} min = ${h},${decTxt(d)} h.` }; } },
{ d:"M", g(){ const h=ri(1,9), [d,m]=pick(DEC);
  return { q:`Un trajet dure ${h},${decTxt(d)} h. Exprime cette durée en heures et minutes.`,
           s:`0,${decTxt(d)} h = 0,${decTxt(d)} × 60 = ${m} min.\nDurée : ${h} h ${pad(m)} min.` }; } },
{ d:"M", g(){ const h=ri(1,8), m=pick([6,12,18,24,30,36,42,48,54]);
  const d=m/6;
  return { q:`Convertis ${h} h ${pad(m)} min en heures décimales.`,
           s:`${m} ÷ 60 = 0,${d} h.\n${h} h ${pad(m)} min = ${h},${d} h.` }; } },
{ d:"M", g(){ const h=ri(1,6), [d,m]=pick(DEC); const el=pick(PRENOMS);
  if(d===25||d===75) return null;
  return { q:`${el} convertit ${h},${d} h en ${h} h ${d} min. Explique son erreur.`,
           s:`${el} a lu la partie décimale comme des minutes. Or 1 h vaut 60 min, pas 100.\n0,${d} h = 0,${d} × 60 = ${m} min, donc ${h},${d} h = ${h} h ${pad(m)} min.` }; } },
{ d:"D", g(){ const h=ri(1,9), m=ri(1,59);
  const dec=(m/60);
  if(Number.isInteger(dec*100)) return null;      // on veut ici un cas NON exact
  return { q:`Convertis ${h} h ${pad(m)} min en heures décimales, arrondi au centième.`,
           s:`${m} ÷ 60 = ${(m/60).toFixed(4).replace(".",",")}…\nArrondi au centième : ${(Math.round(m/60*100)/100).toFixed(2).replace(".",",")} h.\nDonc ${h} h ${pad(m)} min ≈ ${(h+Math.round(m/60*100)/100).toFixed(2).replace(".",",")} h.` }; } },
{ d:"D", g(){ const h=ri(1,6), [d,m]=pick(DEC), tarif=ri(9,30);
  return { q:`Un artisan facture ${tarif} € l'heure et travaille ${h},${decTxt(d)} h. Quelle est la durée en heures et minutes, et le montant à payer ?`,
           s:`Durée : 0,${decTxt(d)} × 60 = ${m} min, soit ${h} h ${pad(m)} min.\nMontant : ${h},${decTxt(d)} × ${tarif} = ${((h+d/(d===25||d===75?100:10))*tarif).toFixed(2).replace(".",",")} €.` }; } },
{ d:"D", g(){ const h1=ri(1,4), [d1,m1]=pick(DEC), h2=ri(1,4), [d2,m2]=pick(DEC);
  const tot=hm(h1,m1)+hm(h2,m2);
  return { q:`Additionne ${h1},${decTxt(d1)} h et ${h2},${decTxt(d2)} h, et donne le résultat en heures et minutes.`,
           s:`${h1},${decTxt(d1)} h = ${h1} h ${pad(m1)} min et ${h2},${decTxt(d2)} h = ${h2} h ${pad(m2)} min.\nSomme : ${duree(tot)}.` }; } },
{ d:"D", g(){ const [d,m]=pick(DEC);
  return { q:`Range dans l'ordre croissant : 0,${decTxt(d)} h ; ${m} min ; ${m*60} s.`,
           s:`0,${decTxt(d)} h = ${m} min et ${m*60} s = ${m} min.\nLes trois durées sont ÉGALES : seules les unités changent.` }; } },
{ d:"D", g(){ const h=ri(1,5), [d,m]=pick(DEC);
  return { q:`Une machine fonctionne ${h},${decTxt(d)} h par jour. Combien de temps fonctionne-t-elle en 5 jours ? Donne le résultat en heures et minutes.`,
           s:`Par jour : ${h} h ${pad(m)} min, soit ${hm(h,m)/60} min.\nEn 5 jours : 5 × ${hm(h,m)/60} = ${5*hm(h,m)/60} min = ${duree(5*hm(h,m))}.` }; } },
{ d:"D", g(){ const h=ri(1,6), m=pick([6,12,18,24,30,36,42,48,54]), d=m/6;
  return { q:`Pourquoi ${h} h ${pad(m)} min ne s'écrit-il pas ${h},${m} h ? Donne la bonne écriture décimale.`,
           s:`${h},${m} h signifierait ${h} h plus ${m} centièmes d'heure — or on veut ${m} MINUTES.\n${m} min = ${m} ÷ 60 = 0,${d} h, donc la bonne écriture est ${h},${d} h.` }; } },
];

/* ── L'arrivée du bus (problème) ── */
FAMILLES["L'arrivée du bus"] = [
{ d:"F", g(){ const deb=hm(ri(6,19),pick([48,50,52,55,58])), dur=hm(0,ri(25,55));
  return { q:`Un bus part à ${heure(deb)} et son trajet dure ${duree(dur)}. À quelle heure arrive-t-il ?`,
           s:`${narreAjout(deb,dur)}\nLe bus arrive à ${heure(deb+dur)}.` }; } },
{ d:"F", g(){ const deb=depart(6,19), dur=hm(0,pick([15,20,25,30]));
  return { q:`Un bus part à ${heure(deb)} et met ${duree(dur)} pour arriver. À quelle heure est-il à destination ?`,
           s:`${narreAjout(deb,dur)}` }; } },
{ d:"F", g(){ const fin=depart(8,19), dur=hm(0,ri(20,50)), deb=fin-dur;
  return { q:`Un bus arrive à ${heure(fin)} après ${duree(dur)} de trajet. À quelle heure est-il parti ?`,
           s:`On remonte : ${heure(fin)} − ${duree(dur)} = ${heure(deb)}.\nLe bus est parti à ${heure(deb)}.` }; } },
{ d:"M", g(){ const ligne=pick(LIGNES), deb=hm(ri(6,19),ri(40,59)), dur=hm(0,ri(30,59));
  return { q:`Le bus de la ligne ${ligne} part à ${heure(deb)} et son trajet dure ${duree(dur)}. À quelle heure arrive-t-il ?`,
           s:`${narreAjout(deb,dur)}\nIl arrive à ${heure(deb+dur)}.` }; } },
{ d:"M", g(){ const deb=depart(7,18), dur=hm(0,ri(25,55)), retard=ri(5,20);
  return { q:`Un bus doit partir à ${heure(deb)} mais accuse ${retard} min de retard. Le trajet dure ${duree(dur)}. À quelle heure arrive-t-il ?`,
           s:`Départ réel : ${heure(deb)} + ${retard} min = ${heure(deb+retard*60)}.\n${narreAjout(deb+retard*60,dur)}` }; } },
{ d:"M", g(){ const deb=depart(6,18), inter=ri(10,20), n=ri(3,6);
  return { q:`Un bus part à ${heure(deb)} et un autre toutes les ${inter} minutes. À quelle heure part le ${n}e bus ?`,
           s:`Le ${n}e bus part ${n} − 1 = ${n-1} intervalles après le premier.\n${n-1} × ${inter} = ${(n-1)*inter} min.\n${narreAjout(deb,(n-1)*inter*60)}` }; } },
{ d:"D", g(){ const deb=hm(ri(6,17),ri(35,59)), d1=hm(0,ri(20,45)), att=ri(5,15), d2=hm(0,ri(20,45));
  const fin=deb+d1+att*60+d2;
  if(H(fin)>23) return null;
  return { q:`Un élève prend un bus à ${heure(deb)} pendant ${duree(d1)}, attend ${att} min, puis prend un second bus pendant ${duree(d2)}. À quelle heure arrive-t-il ?`,
           s:`Durée totale : ${duree(d1)} + ${att} min + ${duree(d2)} = ${duree(d1+att*60+d2)}.\n${narreAjout(deb,d1+att*60+d2)}` }; } },
{ d:"D", g(){ const arrivee=depart(8,17), marche=ri(5,15), dur=hm(0,ri(25,50));
  const deb=arrivee-dur-marche*60;
  if(deb<5*3600) return null;
  return { q:`Un élève doit être au collège à ${heure(arrivee)}. Le bus met ${duree(dur)}, et il faut ${marche} min de marche entre l'arrêt et le collège. À quelle heure doit-il prendre le bus ?`,
           s:`Temps nécessaire : ${duree(dur)} + ${marche} min = ${duree(dur+marche*60)}.\nDépart au plus tard : ${heure(arrivee)} − ${duree(dur+marche*60)} = ${heure(deb)}.` }; } },
{ d:"D", g(){ const deb=depart(6,17), dur=hm(0,ri(25,50)), inter=ri(12,20);
  const fin=deb+dur, suivant=deb+inter*60, finSuivant=suivant+dur;
  return { q:`Un bus part à ${heure(deb)}, le suivant ${inter} min plus tard. Le trajet dure ${duree(dur)}. Quelles sont les heures d'arrivée des deux bus ?`,
           s:`Premier : ${narreAjout(deb,dur)}\nSecond : départ à ${heure(suivant)}, arrivée à ${heure(finSuivant)}.\nL'écart de ${inter} min se retrouve à l'arrivée.` }; } },
{ d:"D", g(){ const deb=hm(ri(7,18),ri(40,59)), dur=hm(0,ri(30,59)); const el=pick(PRENOMS);
  const fauxM=M(deb)+M(dur);
  if(fauxM<60) return null;
  return { q:`Un bus part à ${heure(deb)} et roule ${duree(dur)}. ${el} annonce une arrivée à ${H(deb)} h ${fauxM}. Explique son erreur.`,
           s:`${fauxM} min est impossible sur une horloge : au-delà de 59 minutes, on passe à l'heure suivante.\n${fauxM} − 60 = ${fauxM-60}, et l'on ajoute 1 h.\n${narreAjout(deb,dur)}` }; } },
{ d:"D", g(){ const deb=depart(6,10), dur=hm(0,ri(30,55)), n=ri(3,5);
  return { q:`Un bus fait l'aller-retour sans pause : ${duree(dur)} à l'aller, autant au retour. Il part à ${heure(deb)}. À quelle heure termine-t-il son ${n}e aller-retour ?`,
           s:`Un aller-retour dure 2 × ${duree(dur)} = ${duree(2*dur)}.\n${n} aller-retours : ${n} × ${duree(2*dur)} = ${duree(2*dur*n)}.\n${narreAjout(deb,2*dur*n)}` }; } },
{ d:"D", g(){ const deb=depart(7,16), dur=hm(0,ri(25,50)), arret=ri(3,8), n=ri(2,5);
  const total=dur+arret*n*60;
  return { q:`Un bus part à ${heure(deb)}. Le trajet dure ${duree(dur)} sans compter ${n} arrêts de ${arret} min chacun. À quelle heure arrive-t-il ?`,
           s:`Temps d'arrêt : ${n} × ${arret} = ${n*arret} min.\nDurée totale : ${duree(dur)} + ${n*arret} min = ${duree(total)}.\n${narreAjout(deb,total)}` }; } },
];

/* ── Le marathon en relais (problème) ── */
const relais = n => Array.from({ length: n }, () => ri(45, 75) * 60 + ri(0, 59));
FAMILLES["Le marathon en relais"] = [
{ d:"F", g(){ const t=relais(2), tot=t.reduce((a,b)=>a+b,0);
  return { q:`Deux coureurs se relaient : ${duree(t[0])}, puis ${duree(t[1])}. Calcule la durée totale.`,
           s:`Secondes : ${t.map(Sec).join(" + ")} = ${t.reduce((a,b)=>a+Sec(b),0)} s${t.reduce((a,b)=>a+Sec(b),0)>=60?` = ${duree(t.reduce((a,b)=>a+Sec(b),0))}`:""}.\nDurée totale : ${duree(tot)}.` }; } },
{ d:"F", g(){ const t=relais(2);
  return { q:`Le premier relayeur court ${duree(t[0])} et le second ${duree(t[1])}. Lequel a été le plus rapide, et de combien ?`,
           s:`${duree(t[0])} et ${duree(t[1])}.\nLe ${t[0]<t[1]?"premier":"second"} est le plus rapide, de ${duree(Math.abs(t[0]-t[1]))}.` }; } },
{ d:"F", g(){ const t=relais(3), tot=t.reduce((a,b)=>a+b,0);
  return { q:`Trois coureurs se relaient : ${t.map(duree).join(", puis ")}. Calcule la durée totale.`,
           s:`Total en secondes : ${grp(tot)} s.\nDurée totale : ${duree(tot)}.` }; } },
{ d:"M", g(){ const t=relais(3), tot=t.reduce((a,b)=>a+b,0);
  const sS=t.reduce((a,b)=>a+Sec(b),0), sM=t.reduce((a,b)=>a+M(b)+H(b)*60,0);
  return { q:`Trois coureurs se relaient : ${t.map(duree).join(", puis ")}. Calcule la durée totale de la course.`,
           s:`Secondes : ${t.map(Sec).join(" + ")} = ${sS} s = ${duree(sS)}.\nMinutes : ${t.map(x=>M(x)+H(x)*60).join(" + ")} = ${sM} min, plus ${Math.floor(sS/60)} min = ${sM+Math.floor(sS/60)} min = ${duree((sM+Math.floor(sS/60))*60)}.\nDurée totale : ${duree(tot)}.` }; } },
{ d:"M", g(){ const t=relais(4), tot=t.reduce((a,b)=>a+b,0);
  return { q:`Quatre coureurs se relaient : ${t.map(duree).join(", ")}. Calcule la durée totale.`,
           s:`En secondes : ${t.map(grp).join(" + ")} = ${grp(tot)} s.\nDurée totale : ${duree(tot)}.` }; } },
{ d:"M", g(){ const t=relais(3), tot=t.reduce((a,b)=>a+b,0), deb=depart(8,10);
  return { q:`Une équipe part à ${heure(deb)}. Les trois relais durent ${t.map(duree).join(", ")}. À quelle heure l'équipe franchit-elle l'arrivée ?`,
           s:`Durée totale : ${duree(tot)}.\n${narreAjout(deb,tot)}` }; } },
{ d:"D", g(){ const t=relais(3), tot=t.reduce((a,b)=>a+b,0);
  const sS=t.reduce((a,b)=>a+Sec(b),0), sM=t.reduce((a,b)=>a+M(b)+H(b)*60,0);
  return { q:`Trois coureurs se relaient : ${t.map(duree).join(", puis ")}. Calcule la durée totale de la course.`,
           s:`Secondes : ${t.map(Sec).join(" + ")} = ${sS} s = ${duree(sS)}.\nMinutes : ${t.map(x=>M(x)+H(x)*60).join(" + ")} = ${sM} min, plus ${Math.floor(sS/60)} min de report = ${sM+Math.floor(sS/60)} min = ${duree((sM+Math.floor(sS/60))*60)}.\nDurée totale : ${duree(tot)}.` }; } },
{ d:"D", g(){ const t=relais(4), tot=t.reduce((a,b)=>a+b,0);
  if(tot%4!==0) return null;
  return { q:`Quatre coureurs se relaient : ${t.map(duree).join(", ")}. Calcule la durée totale, puis la durée moyenne par coureur.`,
           s:`Total : ${grp(tot)} s = ${duree(tot)}.\nMoyenne : ${grp(tot)} ÷ 4 = ${grp(tot/4)} s = ${duree(tot/4)}.` }; } },
{ d:"D", g(){ const t=relais(3), tot=t.reduce((a,b)=>a+b,0), obj=Math.round((tot-ri(60,400))/60)*60;
  return { q:`Trois coureurs se relaient : ${t.map(duree).join(", ")}. L'équipe visait ${duree(obj)}. De combien a-t-elle dépassé son objectif ?`,
           s:`Durée réalisée : ${duree(tot)}.\nDépassement : ${duree(tot)} − ${duree(obj)} = ${duree(tot-obj)}.` }; } },
{ d:"D", g(){ const t=relais(3), tot=t.reduce((a,b)=>a+b,0); const el=pick(PRENOMS);
  const sS=t.reduce((a,b)=>a+Sec(b),0);
  if(sS<60) return null;
  const fauxM=t.reduce((a,b)=>a+M(b)+H(b)*60,0);
  return { q:`Trois relais durent ${t.map(duree).join(", ")}. ${el} additionne séparément et annonce ${fauxM} min ${sS} s. Est-ce correct ?`,
           s:`Le calcul est juste, mais l'écriture ne l'est pas : ${sS} s dépasse 60 s.\n${sS} s = ${duree(sS)}, que l'on reporte sur les minutes.\nDurée totale : ${duree(tot)}.` }; } },
{ d:"D", g(){ const t=relais(3), tot=t.reduce((a,b)=>a+b,0), km=ri(30,42);
  return { q:`Une équipe couvre ${km} km en trois relais de ${t.map(duree).join(", ")}. Calcule la durée totale, puis la durée moyenne par kilomètre, arrondie à la seconde.`,
           s:`Durée totale : ${duree(tot)}, soit ${grp(tot)} s.\nPar kilomètre : ${grp(tot)} ÷ ${km} ≈ ${grp(Math.round(tot/km))} s, soit environ ${duree(Math.round(tot/km))}.` }; } },
{ d:"D", g(){ const t=relais(4), tot=t.reduce((a,b)=>a+b,0);
  const mini=Math.min(...t), maxi=Math.max(...t);
  if(mini===maxi) return null;
  return { q:`Quatre relais durent ${t.map(duree).join(", ")}. Calcule la durée totale, ainsi que l'écart entre le relais le plus rapide et le plus lent.`,
           s:`Durée totale : ${duree(tot)}.\nPlus rapide : ${duree(mini)}. Plus lent : ${duree(maxi)}.\nÉcart : ${duree(maxi-mini)}.` }; } },
];

/* ══════════ MOTEUR ══════════ */
const cle = t => String(t || "").replace(/²/g, "2").replace(/³/g, "3")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const sing = m => m.replace(/s$/, "");
const cleS = t => cle(t).split(" ").map(sing).join(" ");

function genererFamille(nom, besoins, vus) {
  const modeles = FAMILLES[nom], sortie = [];
  for (const d of ["F", "M", "D"]) {
    const dispo = modeles.filter(m => m.d === d);
    if (!dispo.length) continue;
    let reste = besoins[d], essais = 0;
    while (reste > 0 && essais < besoins[d] * 500 + 12000) {
      essais++;
      let r; try { r = pick(dispo).g(); } catch (e) { continue; }
      if (!r || !r.q || !r.s) continue;
      const k = cle(r.q);
      if (vus.has(k)) continue;
      vus.add(k); sortie.push({ d, content: r.q, solution: r.s }); reste--;
    }
    if (reste > 0) console.warn(`  ⚠ ${nom} / ${LIBELLE[d]} : ${reste} manquant(s).`);
  }
  return sortie;
}
function besoinsDepuis(ex) {
  const c = { F: Math.round(CIBLE * REPART.F), M: Math.round(CIBLE * REPART.M), D: 0 };
  c.D = CIBLE - c.F - c.M;
  return { F: Math.max(0, c.F - (ex.F || 0)), M: Math.max(0, c.M - (ex.M || 0)), D: Math.max(0, c.D - (ex.D || 0)) };
}

if (APERCU) {
  const f = ARGS[ARGS.indexOf("--apercu") + 1];
  const dem = f && !f.startsWith("--") ? f : null;
  let total = 0; const lignes = [];
  for (const nom of Object.keys(FAMILLES)) {
    if (dem && cleS(nom) !== cleS(dem)) continue;
    alea = mulberry32(GRAINE + nom.length * 7919);
    const ex = genererFamille(nom, besoinsDepuis({}), new Set());
    const n = { F: 0, M: 0, D: 0 }; ex.forEach(e => n[e.d]++);
    lignes.push({ famille: nom, total: ex.length, Facile: n.F, Moyen: n.M, Difficile: n.D, modeles: FAMILLES[nom].length });
    total += ex.length;
    if (dem) { console.log(`\n══ ${nom} ══`);
      ["F","M","D"].forEach(d => ex.filter(e => e.d === d).slice(0, 3).forEach(e =>
        console.log(`\n[${LIBELLE[d]}] ${e.content}\n  → ${e.solution.replace(/\n/g, "\n    ")}`))); }
  }
  console.log(""); console.table(lignes);
  console.log(`Total : ${total} énoncés sur ${lignes.length} famille(s).`);
  console.log(`Exclue : « Les unités de temps ».`);
  process.exit(0);
}

(async () => {
  const { Pool } = require("pg");
  if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%temps%' OR chapitre ILIKE '%dur%es%' ORDER BY id`);
  const rows = brut.filter(r => { const c = cle(r.chapitre); return c.includes("temps") && c.includes("duree"); });
  if (!rows.length) { console.log("Chapitre introuvable."); await pool.end(); return; }
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = maj(rows, "chapitre", "Repérage temps & durées");
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s).\n`);

  const parFam = new Map();
  rows.forEach(r => { if (!r.famille) return; const k = cleS(r.famille);
    if (!parFam.has(k)) parFam.set(k, { nom: r.famille, items: [] }); parFam.get(k).items.push(r); });

  const vus = new Set(rows.map(r => cle(r.content)));
  const aInserer = [], rapport = [], inconnues = [];
  const CANON = {}; Object.keys(FAMILLES).forEach(f => { CANON[cleS(f)] = f; });

  for (const [k, g] of parFam) {
    const type = maj(g.items, "type", "exercice");
    if (EXCLUES.map(cleS).includes(k)) {
      rapport.push({ famille: g.nom, type, avant: g.items.length, ajoutes: 0, apres: g.items.length, note: "EXCLUE (demandé)" }); continue; }
    if (type === "probleme" && EXCLURE_PB) {
      rapport.push({ famille: g.nom, type, avant: g.items.length, ajoutes: 0, apres: g.items.length, note: "exclue (problème)" }); continue; }
    const canon = CANON[k];
    if (!canon) { inconnues.push(g.nom); continue; }
    const dej = { F: 0, M: 0, D: 0 };
    g.items.forEach(i => { const d = i.difficulty === "Facile" ? "F" : i.difficulty === "Moyen" ? "M" : i.difficulty === "Difficile" ? "D" : null; if (d) dej[d]++; });
    alea = mulberry32(GRAINE + canon.length * 7919);
    const neufs = genererFamille(canon, besoinsDepuis(dej), vus);
    const mod = { level: maj(g.items, "level", "college"), subject: maj(g.items, "subject", "Arithmétique"),
                  classe: maj(g.items, "classe", "6ème"), type };
    let num = 0; g.items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });
    neufs.forEach(e => { num++; aInserer.push({ title: `${g.nom} ${num}`, content: e.content, solution: e.solution,
      difficulty: LIBELLE[e.d], level: mod.level, subject: mod.subject, classe: mod.classe,
      chapitre: CHAPITRE, type: mod.type, famille: g.nom }); });
    rapport.push({ famille: g.nom, type, avant: g.items.length, ajoutes: neufs.length, apres: g.items.length + neufs.length, note: "" });
  }
  console.table(rapport);
  const dd = {}; aInserer.forEach(e => { dd[e.difficulty] = (dd[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile||0} · Moyen ${dd.Moyen||0} · Difficile ${dd.Difficile||0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));
  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`temps-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : temps-avant-generation-${stamp}.json`);
  const T = 200;
  for (let i = 0; i < aInserer.length; i += T) {
    const lot = aInserer.slice(i, i + T), vals = [], par2 = [];
    lot.forEach((e, j) => { const b = j * 10;
      vals.push(`($${b+1},$${b+2},$${b+3},$${b+4},$${b+5},$${b+6},$${b+7},$${b+8},$${b+9},$${b+10})`);
      par2.push(e.title, e.content, e.level, e.subject, e.difficulty, e.solution, e.classe, e.chapitre, e.type, e.famille); });
    await pool.query(`INSERT INTO exercises
      (title, content, level, subject, difficulty, solution, classe, chapitre, type, famille)
      VALUES ${vals.join(",")}`, par2);
    console.log(`  ${Math.min(i + T, aInserer.length)} / ${aInserer.length}`);
  }
  const { rows: apres } = await pool.query(
    `SELECT COALESCE(famille,'(sans famille)') AS famille, count(*)::int AS n
       FROM exercises WHERE chapitre = $1 GROUP BY 1 ORDER BY famille`, [CHAPITRE]);
  console.log("\nFamilles après :"); console.table(apres);
  await pool.end();
})().catch(e => { console.error("Erreur :", e.message); process.exit(1); });
