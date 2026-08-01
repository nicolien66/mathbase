/* MathBase — generer-longueur.js
   Chapitre « Longueur » : 100 exercices par famille, sur 7 familles.

   Les quatre familles « Comparer / Convertir des surfaces / des volumes »
   sont CRÉÉES ici : elles n'existent que par les exercices qu'on y insère.
   Leurs énoncés reprennent exactement la forme de leurs homologues de
   longueur, à la puissance près :

     longueurs  1 rang = × 10        « Convertis : a) 7,3 km en m … »
     surfaces   1 rang = × 100       « Convertis : a) 7,3 km² en m² … »
     volumes    1 rang = × 1000      « Convertis : a) 7,3 m³ en dm³ … »

   Un seul moteur les produit, paramétré par la puissance k ∈ {1, 2, 3} :
   convertir de l'unité de rang i vers celle de rang j revient à multiplier
   par 10^(k(j−i)). C'est là tout l'enjeu des deux nouvelles familles, et le
   corrigé rappelle systématiquement le facteur (1 m² = 100 dm², 1 m³ = 1000 dm³).

   Arithmétique exacte : chaque valeur est un entier accompagné d'un nombre de
   décimales, jamais un flottant. Les écarts de rang sont bornés pour que les
   nombres restent lisibles et les mantisses exactes.

   · 20 faciles / 30 moyens / 50 difficiles par famille.
   · Pas de famille « Cours ». Problèmes inclus (--exclure-problemes pour les
     laisser de côté).
   · Tirage déterministe + déduplication : rejouable sans doublon.

   Usage :
     node generer-longueur.js --apercu
     node generer-longueur.js --apercu "Convertir des volumes"
     $env:DATABASE_URL = "postgresql://..."
     node generer-longueur.js            # simulation
     node generer-longueur.js --execute  # applique
   Options : --cible N (100) · --graine N (20260804) · --exclure-problemes
*/

"use strict";
const fs = require("fs");

const ARGS = process.argv.slice(2);
const EXECUTE = ARGS.includes("--execute");
const APERCU  = ARGS.includes("--apercu");
const EXCLURE_PB = ARGS.includes("--exclure-problemes");
const opt = (n, d) => { const i = ARGS.indexOf(n); return i >= 0 && ARGS[i + 1] ? +ARGS[i + 1] : d; };
const CIBLE  = opt("--cible", 100);
const GRAINE = opt("--graine", 20260804);
const REPART = { F: 0.20, M: 0.30, D: 0.50 };
const LIBELLE = { F: "Facile", M: "Moyen", D: "Difficile" };

function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let alea = mulberry32(GRAINE);
const ri = (a, b) => a + Math.floor(alea() * (b - a + 1));
const pick = t => t[Math.floor(alea() * t.length)];
const melange = t => { const c = [...t]; for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(alea() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; } return c; };

/* ══ décimaux exacts : valeur = m × 10^(−e) ══ */
const grp = s => s.length >= 4 ? s.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : s;
function fmt(m, e) {
  let s = String(m).padStart(e + 1, "0");
  let ip = s.slice(0, s.length - e), dp = e ? s.slice(s.length - e) : "";
  dp = dp.replace(/0+$/, "");
  return grp(ip) + (dp ? "," + dp : "");
}
const D = (m, e = 0) => ({ m, e });
const p10 = (x, k) => { const e = x.e - k; return e >= 0 ? { m: x.m, e } : { m: x.m * Math.pow(10, -e), e: 0 }; };
const S = x => fmt(x.m, x.e);
const cmp = (a, b) => { const e = Math.max(a.e, b.e); return a.m * Math.pow(10, e - a.e) - b.m * Math.pow(10, e - b.e); };
/* conversion du rang i vers le rang j, puissance k */
const conv = (x, i, j, k) => p10(x, k * (j - i));

/* ══ systèmes d'unités ══ */
const SYS = {
  1: { nom: "longueur", uni: ["km","hm","dam","m","dm","cm","mm"], span: 4,
       fact: "10", phrase: "chaque rang vaut 10 fois le suivant" },
  2: { nom: "surface",  uni: ["km²","hm²","dam²","m²","dm²","cm²","mm²"], span: 3,
       fact: "100", phrase: "chaque rang vaut 100 fois le suivant, car les longueurs sont élevées au carré" },
  3: { nom: "volume",   uni: ["m³","dm³","cm³","mm³"], span: 2,
       fact: "1000", phrase: "chaque rang vaut 1000 fois le suivant, car les longueurs sont élevées au cube" },
};
/* équivalences usuelles, pour les modèles difficiles */
const EQUIV = { 2: [["ha","hm²",1],["a","dam²",2]], 3: [["L","dm³",1],["mL","cm³",2]] };

/* couple de rangs (i, j) distincts, écart borné */
function rangs(k) {
  const n = SYS[k].uni.length, s = SYS[k].span;
  for (let t = 0; t < 80; t++) {
    const i = ri(0, n - 1), j = ri(0, n - 1);
    if (i !== j && Math.abs(i - j) <= s) return [i, j];
  }
  return [0, 1];
}
/* valeur « jolie » : 1 à 4 chiffres significatifs, 0 à 2 décimales */
function valeur() {
  const e = pick([0, 0, 1, 1, 2]);
  const m = e === 0 ? ri(2, 999) : ri(11, 9999);
  return D(m, e);
}
/* la conversion doit rester lisible : mantisse exacte et pas trop de chiffres */
function lisible(x) { return x.m <= 9e12 && String(x.m).length <= 13; }

/* un item « valeur unité » */
const txt = (x, k, i) => `${S(x)} ${SYS[k].uni[i]}`;

/* chaîne ordonnée « a < b = c » sur des items {t, x} */
function chaine(items, sens) {
  const t = [...items].sort((a, b) => sens === "c" ? cmp(a.x, b.x) : cmp(b.x, a.x));
  let out = t[0].t;
  for (let n = 1; n < t.length; n++)
    out += (cmp(t[n].x, t[n - 1].x) === 0 ? " = " : (sens === "c" ? " < " : " > ")) + t[n].t;
  return out;
}

const OBJETS = [["ruban","m"],["corde","m"],["planche","m"],["fil","m"],["tissu","m"],["tuyau","m"]];
const PRENOMS = ["Léa","Hugo","Nina","Sacha","Jade","Malo","Inès","Timéo","Alice","Noé","Lina","Adam"];

/* ══════════ FABRIQUES ══════════ */

/* — CONVERTIR — calquée sur « Convertis : a) 7,3 km en m b) … c) … » */
function banqueConvertir(k) {
  const U = SYS[k].uni, F = SYS[k].fact, PH = SYS[k].phrase;
  const un = () => { for (let t = 0; t < 60; t++) { const [i, j] = rangs(k), x = valeur(), y = conv(x, i, j, k);
    if (lisible(y)) return { i, j, x, y }; } return null; };
  return [
  { d:"F", g(){ const a=un(),b=un(),c=un(); if(!a||!b||!c) return null;
    return { q:`Convertis : a) ${txt(a.x,k,a.i)} en ${U[a.j]} b) ${txt(b.x,k,b.i)} en ${U[b.j]} c) ${txt(c.x,k,c.i)} en ${U[c.j]}`,
             s:`a) ${S(a.y)} ${U[a.j]} b) ${S(b.y)} ${U[b.j]} c) ${S(c.y)} ${U[c.j]}` }; } },
  { d:"F", g(){ const a=un(); if(!a) return null;
    return { q:`Convertis ${txt(a.x,k,a.i)} en ${U[a.j]}.`,
             s:`${txt(a.x,k,a.i)} = ${S(a.y)} ${U[a.j]}.` }; } },
  { d:"F", g(){ const a=un(),b=un(); if(!a||!b) return null;
    return { q:`Convertis : a) ${txt(a.x,k,a.i)} en ${U[a.j]} b) ${txt(b.x,k,b.i)} en ${U[b.j]}`,
             s:`a) ${S(a.y)} ${U[a.j]} b) ${S(b.y)} ${U[b.j]}` }; } },
  { d:"M", g(){ const a=un(),b=un(),c=un(); if(!a||!b||!c) return null;
    return { q:`Convertis : a) ${txt(a.x,k,a.i)} en ${U[a.j]} b) ${txt(b.x,k,b.i)} en ${U[b.j]} c) ${txt(c.x,k,c.i)} en ${U[c.j]}`,
             s:`a) ${S(a.y)} ${U[a.j]} b) ${S(b.y)} ${U[b.j]} c) ${S(c.y)} ${U[c.j]}\nRappel : ${PH}.` }; } },
  { d:"M", g(){ const a=un(); if(!a) return null;
    const n=Math.abs(a.j-a.i), sens=a.j>a.i?"plus petite":"plus grande";
    return { q:`Convertis ${txt(a.x,k,a.i)} en ${U[a.j]} et explique le facteur utilisé.`,
             s:`On passe de ${U[a.i]} à ${U[a.j]} : ${n} rang${n>1?"s":""} vers une unité ${sens}.\nChaque rang vaut ${F}, donc le facteur est ${F}${n>1?` élevé à la puissance ${n}`:""}, soit 10${n*k>1?`^${n*k}`:""} = ${grp(String(Math.pow(10,n*k)))}.\n${txt(a.x,k,a.i)} = ${S(a.y)} ${U[a.j]}.` }; } },
  { d:"M", g(){ const [i,j]=rangs(k); const n=Math.abs(i-j);
    const gr=i<j?i:j, pe=i<j?j:i;
    return { q:`Complète : 1 ${U[gr]} = … ${U[pe]}`,
             s:`1 ${U[gr]} = ${grp(String(Math.pow(10,k*(pe-gr))))} ${U[pe]}.\n${PH.charAt(0).toUpperCase()+PH.slice(1)}, et il y a ${pe-gr} rang${pe-gr>1?"s":""} d'écart.` }; } },
  { d:"D", g(){ const a=un(); if(!a) return null;
    const m=ri(0,U.length-1); if(m===a.i||m===a.j||Math.abs(m-a.j)>SYS[k].span) return null;
    const z=conv(a.y,a.j,m,k); if(!lisible(z)) return null;
    return { q:`Convertis ${txt(a.x,k,a.i)} en ${U[a.j]}, puis le résultat en ${U[m]}.`,
             s:`${txt(a.x,k,a.i)} = ${S(a.y)} ${U[a.j]}.\n${S(a.y)} ${U[a.j]} = ${S(z)} ${U[m]}.\nOn aurait pu convertir directement : ${txt(a.x,k,a.i)} = ${S(z)} ${U[m]}.` }; } },
  { d:"D", g(){ const a=un(); if(!a) return null;
    return { q:`Complète : ${txt(a.x,k,a.i)} = … ${U[a.j]}`,
             s:`${S(a.y)} ${U[a.j]}.\nOn multiplie par ${grp(String(Math.pow(10,k*Math.abs(a.j-a.i))))} ${a.j>a.i?"":"en divisant, car on va vers une unité plus grande"}.` }; } },
  { d:"D", g(){ const a=un(); if(!a||k===1) return null;
    const n=Math.abs(a.j-a.i), faux=p10(a.x,(a.j-a.i)); const el=pick(PRENOMS);
    if(cmp(faux,a.y)===0) return null;
    return { q:`Pour convertir ${txt(a.x,k,a.i)} en ${U[a.j]}, ${el} déplace la virgule de ${n} rang${n>1?"s":""} et trouve ${S(faux)} ${U[a.j]}. Explique son erreur.`,
             s:`${el} a raisonné comme sur des longueurs, où un rang vaut 10. Ici ${PH}.\nIl faut donc déplacer la virgule de ${k} × ${n} = ${k*n} rangs, et non ${n}.\n${txt(a.x,k,a.i)} = ${S(a.y)} ${U[a.j]}.` }; } },
  { d:"D", g(){ if(!EQUIV[k]) return null;
    const [sym,eq,idx]=pick(EQUIV[k]); const x=valeur();
    const j=ri(0,U.length-1); if(Math.abs(j-idx)>SYS[k].span||j===idx) return null;
    const y=conv(x,idx,j,k); if(!lisible(y)) return null;
    return { q:`Sachant que 1 ${sym} = 1 ${eq}, convertis ${S(x)} ${sym} en ${U[j]}.`,
             s:`${S(x)} ${sym} = ${S(x)} ${eq}.\n${S(x)} ${eq} = ${S(y)} ${U[j]}.` }; } },
  { d:"D", g(){ const a=un(),b=un(); if(!a||!b) return null;
    if(a.j!==b.j) return null;
    const som=D(a.y.m*Math.pow(10,Math.max(a.y.e,b.y.e)-a.y.e)+b.y.m*Math.pow(10,Math.max(a.y.e,b.y.e)-b.y.e),Math.max(a.y.e,b.y.e));
    return { q:`Convertis ${txt(a.x,k,a.i)} et ${txt(b.x,k,b.i)} en ${U[a.j]}, puis additionne.`,
             s:`${txt(a.x,k,a.i)} = ${S(a.y)} ${U[a.j]} et ${txt(b.x,k,b.i)} = ${S(b.y)} ${U[a.j]}.\nSomme : ${S(a.y)} + ${S(b.y)} = ${S(som)} ${U[a.j]}.` }; } },
  { d:"D", g(){ const a=un(); if(!a) return null;
    const n=Math.abs(a.j-a.i);
    return { q:`Convertis ${txt(a.x,k,a.i)} en ${U[a.j]}. De combien de rangs la virgule se déplace-t-elle ?`,
             s:`${txt(a.x,k,a.i)} = ${S(a.y)} ${U[a.j]}.\nIl y a ${n} rang${n>1?"s":""} d'unité entre ${U[a.i]} et ${U[a.j]}, et chaque rang vaut ${F} : la virgule se déplace de ${k*n} rang${k*n>1?"s":""} vers la ${a.j>a.i?"droite":"gauche"}.` }; } },
  ];
}

/* — COMPARER — calquée sur « Range dans l'ordre croissant : 0,9 km ; 950 m ; 9 500 dm. » */
function banqueComparer(k) {
  const U = SYS[k].uni, PH = SYS[k].phrase;
  /* n items exprimés dans des unités variées, autour d'une même valeur de base */
  function jeu(n, egalite) {
    for (let t = 0; t < 80; t++) {
      const rb = ri(1, U.length - 2);                 // rang de base
      const base = ri(2, 99) * pick([1, 10, 100]);    // valeur de base entière
      const vals = [];
      for (let a = 0; a < n; a++) {
        const v = egalite && a === 1 ? vals[0].base : base + ri(-40, 40) * pick([1, 1, 10]);
        if (v <= 0) { vals.length = 0; break; }
        const d = Math.max(0, Math.min(U.length - 1, rb + ri(-SYS[k].span, SYS[k].span)));
        const x = conv(D(v, 0), rb, d, k);
        if (!lisible(x) || String(x.m).length > 9) { vals.length = 0; break; }
        vals.push({ base: v, d, x });
      }
      if (vals.length !== n) continue;
      if (new Set(vals.map(v => `${S(v.x)} ${U[v.d]}`)).size !== n) continue;
      /* au moins deux unités différentes, sinon la conversion préalable
         demandée par l'énoncé n'aurait aucun objet */
      if (new Set(vals.map(v => v.d)).size < 2) continue;
      return { rb, vals };
    }
    return null;
  }
  const items = j => j.vals.map(v => ({ t: `${S(v.x)} ${U[v.d]}`, x: D(v.base, 0), d: v.d }));
  /* on n'écrit pas les « conversions » identité (99 dm³ = 99 dm³) */
  const detail = (j) => {
    const cv = j.vals.filter(v => v.d !== j.rb)
      .map(v => `${S(v.x)} ${U[v.d]} = ${grp(String(v.base))} ${U[j.rb]}`);
    const dj = j.vals.filter(v => v.d === j.rb);
    let out = cv.join(" et ");
    if (dj.length) out += (out ? ", et " : "")
      + `${dj.map(v => `${S(v.x)} ${U[v.d]}`).join(" et ")} ${dj.length > 1 ? "sont déjà" : "est déjà"} dans cette unité`;
    return out;
  };

  return [
  { d:"F", g(){ const j=jeu(2,false); if(!j) return null; const it=items(j);
    return { q:`Compare : ${it.map(i=>i.t).join(" et ")}. (Convertis d'abord dans la même unité.)`,
             s:`${detail(j)}.\nDonc ${chaine(it,"c")}.` }; } },
  { d:"F", g(){ const j=jeu(3,false); if(!j) return null; const it=items(j);
    return { q:`Range dans l'ordre croissant : ${it.map(i=>i.t).join(" ; ")}. (Convertis d'abord dans la même unité.)`,
             s:`${detail(j)}.\nDonc ${chaine(it,"c")}.` }; } },
  { d:"F", g(){ const j=jeu(2,false); if(!j) return null; const it=items(j);
    return { q:`Quelle est la plus grande de ces deux ${SYS[k].nom}s : ${it.map(i=>i.t).join(" ou ")} ?`,
             s:`${detail(j)}.\nLa plus grande est ${[...it].sort((a,b)=>cmp(b.x,a.x))[0].t}.` }; } },
  { d:"M", g(){ const j=jeu(3,false); if(!j) return null; const it=items(j);
    return { q:`Range dans l'ordre croissant : ${it.map(i=>i.t).join(" ; ")}. (Convertis d'abord dans la même unité.)`,
             s:`${detail(j)}.\nDonc ${chaine(it,"c")}.` }; } },
  { d:"M", g(){ const j=jeu(3,false); if(!j) return null; const it=items(j);
    return { q:`Range dans l'ordre décroissant : ${it.map(i=>i.t).join(" ; ")}. (Convertis d'abord dans la même unité.)`,
             s:`${detail(j)}.\nDonc ${chaine(it,"d")}.` }; } },
  { d:"M", g(){ const j=jeu(3,true); if(!j) return null; const it=items(j);
    return { q:`Range dans l'ordre croissant : ${it.map(i=>i.t).join(" ; ")}. (Convertis d'abord dans la même unité.)`,
             s:`${detail(j)}.\nDonc ${chaine(it,"c")} : deux d'entre elles sont ÉGALES malgré des écritures différentes.` }; } },
  { d:"D", g(){ const j=jeu(4,false); if(!j) return null; const it=items(j);
    return { q:`Range dans l'ordre croissant : ${it.map(i=>i.t).join(" ; ")}. (Convertis d'abord dans la même unité.)`,
             s:`${detail(j)}.\nDonc ${chaine(it,"c")}.` }; } },
  { d:"D", g(){ const j=jeu(4,true); if(!j) return null; const it=items(j);
    return { q:`Range dans l'ordre décroissant : ${it.map(i=>i.t).join(" ; ")}. (Convertis d'abord dans la même unité.)`,
             s:`${detail(j)}.\nDonc ${chaine(it,"d")}.` }; } },
  { d:"D", g(){ const j=jeu(2,true); if(!j) return null; const it=items(j);
    return { q:`Ces deux ${SYS[k].nom}s sont-elles égales : ${it.map(i=>i.t).join(" et ")} ?`,
             s:`${detail(j)}.\nLes deux valent ${j.vals[0].base} ${U[j.rb]} : elles sont ÉGALES, seule l'écriture diffère.` }; } },
  { d:"D", g(){ const j=jeu(3,false); if(!j) return null; const it=items(j);
    const petit=[...it].sort((a,b)=>cmp(a.x,b.x))[0], grand=[...it].sort((a,b)=>cmp(b.x,a.x))[0];
    return { q:`Parmi ${it.map(i=>i.t).join(" ; ")}, quelle est la plus petite ? la plus grande ?`,
             s:`${detail(j)}.\nLa plus petite est ${petit.t}, la plus grande est ${grand.t}.` }; } },
  { d:"D", g(){ const j=jeu(2,false); if(!j) return null; const it=items(j);
    const el=pick(PRENOMS);
    const parChiffre=[...it].sort((a,b)=>b.x.m*0+ (parseFloat(String(b.t).replace(/[  ]/g,"").replace(",","."))-parseFloat(String(a.t).replace(/[  ]/g,"").replace(",","."))))[0];
    const vrai=[...it].sort((a,b)=>cmp(b.x,a.x))[0];
    if(parChiffre.t===vrai.t) return null;
    return { q:`${el} affirme que ${parChiffre.t} est plus grande que l'autre, parce que le nombre écrit est plus grand. A-t-il raison ? On compare ${it.map(i=>i.t).join(" et ")}.`,
             s:`On ne peut pas comparer des nombres exprimés dans des unités différentes.\n${detail(j)}.\nLa plus grande est en réalité ${vrai.t} : ${el} a tort.` }; } },
  { d:"D", g(){ const j=jeu(3,false); if(!j) return null; const it=items(j);
    const cible=U[j.rb];
    return { q:`Convertis ${it.map(i=>i.t).join(" ; ")} en ${cible}, puis range-les dans l'ordre croissant.`,
             s:`${detail(j)}.\nOrdre croissant : ${chaine(it,"c")}.\nRappel : ${PH}.` }; } },
  ];
}

/* ══════════ FAMILLES ══════════ */
const FAMILLES = {
  "Convertir des longueurs": banqueConvertir(1),
  "Comparer des longueurs":  banqueComparer(1),
  "Convertir des surfaces":  banqueConvertir(2),
  "Comparer des surfaces":   banqueComparer(2),
  "Convertir des volumes":   banqueConvertir(3),
  "Comparer des volumes":    banqueComparer(3),
};
/* familles nouvelles, à créer par insertion */
const NOUVELLES = ["Convertir des surfaces","Comparer des surfaces","Convertir des volumes","Comparer des volumes"];
/* gabarit des familles nouvelles : recopié sur leur homologue de longueur */
const MODELE_DE = { "Convertir des surfaces":"Convertir des longueurs", "Comparer des surfaces":"Comparer des longueurs",
                    "Convertir des volumes":"Convertir des longueurs",  "Comparer des volumes":"Comparer des longueurs" };

/* — Le ruban à partager (problème) — */
FAMILLES["Le ruban à partager"] = [
{ d:"F", g(){ const o=pick(OBJETS), cm=pick([20,25,40,50]), n=ri(4,20), tot=D(cm*n,2);
  return { q:`Un ${o[0]} de ${S(p10(tot,0))} m est découpé en morceaux de ${cm} cm. Combien de morceaux obtient-on ?`,
           s:`${S(tot)} m = ${cm*n} cm.\n${cm*n} ÷ ${cm} = ${n} morceaux.` }; } },
{ d:"F", g(){ const o=pick(OBJETS), cm=pick([15,20,25,30]), n=ri(5,25);
  return { q:`On coupe ${n} morceaux de ${cm} cm dans un ${o[0]}. Quelle longueur totale cela représente-t-il, en mètres ?`,
           s:`${n} × ${cm} = ${grp(String(n*cm))} cm.\n${grp(String(n*cm))} cm = ${S(D(n*cm,2))} m.` }; } },
{ d:"F", g(){ const o=pick(OBJETS), cm=pick([25,50]), n=ri(4,16);
  return { q:`Un ${o[0]} de ${S(D(cm*n,2))} m est partagé en ${n} morceaux égaux. Quelle est la longueur d'un morceau, en centimètres ?`,
           s:`${S(D(cm*n,2))} m = ${cm*n} cm.\n${cm*n} ÷ ${n} = ${cm} cm par morceau.` }; } },
{ d:"M", g(){ const o=pick(OBJETS), cm=pick([20,25,40,50,80]), n=ri(4,20), reste=ri(1,cm-1);
  const tot=D(cm*n+reste,2);
  return { q:`Un ${o[0]} de ${S(tot)} m est découpé en morceaux de ${cm} cm. Combien de morceaux entiers obtient-on ? Quelle longueur reste-t-il ?`,
           s:`${S(tot)} m = ${cm*n+reste} cm.\n${cm*n+reste} = ${cm} × ${n} + ${reste}.\n${n} morceaux entiers, et il reste ${reste} cm.` }; } },
{ d:"M", g(){ const o=pick(OBJETS), cm=pick([30,40,60]), n=ri(5,15), prix=ri(2,9);
  return { q:`Un ${o[0]} de ${S(D(cm*n,2))} m est découpé en morceaux de ${cm} cm, vendus ${prix} € pièce. Quelle est la recette totale ?`,
           s:`${S(D(cm*n,2))} m = ${cm*n} cm, soit ${cm*n} ÷ ${cm} = ${n} morceaux.\nRecette : ${n} × ${prix} = ${n*prix} €.` }; } },
{ d:"M", g(){ const o=pick(OBJETS), mm=pick([150,250,400]), n=ri(5,20);
  return { q:`Un ${o[0]} de ${S(D(mm*n,3))} m est coupé en morceaux de ${mm} mm. Combien de morceaux ?`,
           s:`${S(D(mm*n,3))} m = ${grp(String(mm*n))} mm.\n${grp(String(mm*n))} ÷ ${mm} = ${n} morceaux.` }; } },
{ d:"D", g(){ const o=pick(OBJETS), cm=pick([25,35,45,60]), n=ri(6,20), reste=ri(1,cm-1);
  const tot=D(cm*n+reste,2);
  return { q:`Un ${o[0]} de ${S(tot)} m est découpé en morceaux de ${cm} cm. Combien de morceaux entiers ? Quelle longueur faudrait-il ajouter pour un morceau de plus ?`,
           s:`${S(tot)} m = ${cm*n+reste} cm = ${cm} × ${n} + ${reste}.\n${n} morceaux entiers, reste ${reste} cm.\nIl faudrait ajouter ${cm} − ${reste} = ${cm-reste} cm.` }; } },
{ d:"D", g(){ const o=pick(OBJETS), c1=pick([20,30,40]), c2=pick([25,50,60]), n1=ri(3,8), n2=ri(3,8);
  const tot=D(c1*n1+c2*n2,2);
  return { q:`Dans un ${o[0]} de ${S(tot)} m, on coupe ${n1} morceaux de ${c1} cm et ${n2} morceaux de ${c2} cm. Reste-t-il quelque chose ?`,
           s:`Longueur utilisée : ${n1} × ${c1} + ${n2} × ${c2} = ${n1*c1} + ${n2*c2} = ${c1*n1+c2*n2} cm.\n${S(tot)} m = ${c1*n1+c2*n2} cm : tout est utilisé, il ne reste rien.` }; } },
{ d:"D", g(){ const o=pick(OBJETS), cm=pick([25,40,50]), n=ri(6,18), perte=ri(1,3);
  return { q:`Un ${o[0]} de ${S(D(cm*n,2))} m est découpé en morceaux de ${cm} cm, mais chaque coupe fait perdre ${perte} cm. Combien de morceaux entiers obtient-on ?`,
           s:`Chaque morceau consomme ${cm} + ${perte} = ${cm+perte} cm (sauf le dernier, sans coupe finale).\n${cm*n} ÷ ${cm+perte} = ${Math.floor(cm*n/(cm+perte))} reste ${cm*n%(cm+perte)}.\nOn obtient ${Math.floor(cm*n/(cm+perte))} morceaux entiers${cm*n%(cm+perte)>=cm?" (le reste suffirait pour un de plus si l'on ne coupait pas)":""}.` }; } },
{ d:"D", g(){ const o=pick(OBJETS), cm=pick([20,25,40]), n=ri(5,15); const el=pick(PRENOMS);
  const tot=D(cm*n,2);
  return { q:`Un ${o[0]} mesure ${S(tot)} m. ${el} veut des morceaux de ${cm} cm et calcule ${S(tot)} ÷ ${cm} = ${S(D(Math.round(cm*n/cm*100),4))}. Explique son erreur.`,
           s:`${el} a divisé des mètres par des centimètres sans convertir.\nIl faut d'abord tout mettre dans la même unité : ${S(tot)} m = ${cm*n} cm.\n${cm*n} ÷ ${cm} = ${n} morceaux.` }; } },
{ d:"D", g(){ const o=pick(OBJETS), n=ri(4,12), cm=pick([15,24,36,45]);
  return { q:`Un ${o[0]} de ${S(D(cm*n,2))} m doit être partagé en ${n} morceaux égaux, puis chaque morceau en 3. Quelle est la longueur finale d'un morceau, en centimètres ?`,
           s:`${S(D(cm*n,2))} m = ${cm*n} cm.\nPremier partage : ${cm*n} ÷ ${n} = ${cm} cm.\nSecond partage : ${cm} ÷ 3 = ${cm%3===0?`${cm/3} cm`:`${(cm/3).toFixed(2).replace(".",",")} cm environ`}.` }; } },
{ d:"D", g(){ const o=pick(OBJETS), cm=pick([30,40,50,60]), n=ri(5,15);
  return { q:`Combien de morceaux de ${cm} cm peut-on couper dans un ${o[0]} de ${S(D(cm*n,2))} m ? Et si les morceaux mesuraient ${cm/2} cm ?`,
           s:`${S(D(cm*n,2))} m = ${cm*n} cm.\nAvec des morceaux de ${cm} cm : ${cm*n} ÷ ${cm} = ${n}.\nAvec des morceaux de ${cm/2} cm : ${cm*n} ÷ ${cm/2} = ${2*n}, soit deux fois plus.` }; } },
];

/* ══════════ MOTEUR ══════════ */
/* Les exposants ² et ³ ne sont pas alphanumériques : sans cette conversion,
   « 1 hm² = … dam² » et « 1 hm = … dam » auraient la même clé, et la
   déduplication rejetterait à tort les énoncés de surface ou de volume. */
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
    lignes.push({ famille: nom, nouvelle: NOUVELLES.includes(nom) ? "oui" : "", total: ex.length,
                  Facile: n.F, Moyen: n.M, Difficile: n.D, modeles: FAMILLES[nom].length });
    total += ex.length;
    if (dem) { console.log(`\n══ ${nom} ══`);
      ["F","M","D"].forEach(d => ex.filter(e => e.d === d).slice(0, 3).forEach(e =>
        console.log(`\n[${LIBELLE[d]}] ${e.content}\n  → ${e.solution.replace(/\n/g, "\n    ")}`))); }
  }
  console.log(""); console.table(lignes);
  console.log(`Total : ${total} énoncés sur ${lignes.length} famille(s).`);
  process.exit(0);
}

(async () => {
  const { Pool } = require("pg");
  if (!process.env.DATABASE_URL) { console.error("✗ DATABASE_URL manquant."); process.exit(1); }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  if (!EXECUTE) console.log("=== SIMULATION — ajoutez --execute pour appliquer ===\n");

  const { rows: brut } = await pool.query(
    `SELECT id, title, content, level, subject, difficulty, classe, chapitre, type, famille
       FROM exercises WHERE chapitre ILIKE '%ongueur%' ORDER BY id`);
  const rows = brut.filter(r => cle(r.chapitre).includes("longueur"));
  if (!rows.length) { console.log("Chapitre introuvable."); await pool.end(); return; }
  const maj = (t, ch, def) => { const c = new Map();
    t.forEach(l => { const v = l[ch]; if (v != null && String(v).trim() !== "") c.set(v, (c.get(v) || 0) + 1); });
    return c.size ? [...c.entries()].sort((a, b) => b[1] - a[1])[0][0] : def; };
  const CHAPITRE = maj(rows, "chapitre", "Longueur");
  console.log(`Chapitre « ${CHAPITRE} » : ${rows.length} exercice(s).\n`);

  const parFam = new Map();
  rows.forEach(r => { if (!r.famille) return; const k = cleS(r.famille);
    if (!parFam.has(k)) parFam.set(k, { nom: r.famille, items: [] }); parFam.get(k).items.push(r); });

  const vus = new Set(rows.map(r => cle(r.content)));
  const aInserer = [], rapport = [], inconnues = [];
  const CANON = {}; Object.keys(FAMILLES).forEach(f => { CANON[cleS(f)] = f; });

  /* familles existantes + les 4 nouvelles */
  const aTraiter = [...parFam.values()];
  NOUVELLES.forEach(n => { if (!parFam.has(cleS(n))) aTraiter.push({ nom: n, items: [], neuve: true }); });

  for (const g of aTraiter) {
    const type = g.items.length ? maj(g.items, "type", "exercice") : "exercice";
    if (type === "probleme" && EXCLURE_PB) {
      rapport.push({ famille: g.nom, type, avant: g.items.length, ajoutes: 0, apres: g.items.length, note: "exclue (problème)" }); continue; }
    const canon = CANON[cleS(g.nom)];
    if (!canon) { inconnues.push(g.nom); continue; }
    const dej = { F: 0, M: 0, D: 0 };
    g.items.forEach(i => { const d = i.difficulty === "Facile" ? "F" : i.difficulty === "Moyen" ? "M" : i.difficulty === "Difficile" ? "D" : null; if (d) dej[d]++; });
    alea = mulberry32(GRAINE + canon.length * 7919);
    const neufs = genererFamille(canon, besoinsDepuis(dej), vus);
    /* une famille neuve hérite des colonnes de son homologue de longueur */
    const source = g.items.length ? g.items
      : (parFam.get(cleS(MODELE_DE[g.nom] || "")) || { items: rows }).items;
    const mod = { level: maj(source, "level", "college"), subject: maj(source, "subject", "Grandeurs et mesures"),
                  classe: maj(source, "classe", "6ème"), type: g.items.length ? type : maj(source, "type", "exercice") };
    let num = 0; g.items.forEach(i => { const m = String(i.title || "").match(/(\d+)\s*$/); if (m) num = Math.max(num, +m[1]); });
    neufs.forEach(e => { num++; aInserer.push({ title: `${g.nom} ${num}`, content: e.content, solution: e.solution,
      difficulty: LIBELLE[e.d], level: mod.level, subject: mod.subject, classe: mod.classe,
      chapitre: CHAPITRE, type: mod.type, famille: g.nom }); });
    rapport.push({ famille: g.nom, type: mod.type, avant: g.items.length, ajoutes: neufs.length,
                   apres: g.items.length + neufs.length, note: g.neuve ? "NOUVELLE" : "" });
  }
  console.table(rapport);
  const dd = {}; aInserer.forEach(e => { dd[e.difficulty] = (dd[e.difficulty] || 0) + 1; });
  console.log(`Total à insérer : ${aInserer.length} — Facile ${dd.Facile||0} · Moyen ${dd.Moyen||0} · Difficile ${dd.Difficile||0}`);
  if (inconnues.length) console.log("\n⚠ Familles sans générateur :", inconnues.join(" | "));
  if (!EXECUTE) { console.log("\n(simulation — relancez avec --execute)"); await pool.end(); return; }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.writeFileSync(`longueur-avant-generation-${stamp}.json`, JSON.stringify(brut, null, 2), "utf8");
  console.log(`\nSauvegarde : longueur-avant-generation-${stamp}.json`);
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
