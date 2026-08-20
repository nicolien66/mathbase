/* ═══════════════════════════════════════════════════════════════
   POLYMATES — francais-verbes.js : le moteur de conjugaison.

     MB_VERBES.conjugue("prendre")  → tous les temps du programme
     MB_VERBES.cherche("pren")      → suggestions d'infinitifs
     MB_VERBES.liste()              → les verbes du catalogue
     MB_VERBES.aleatoire(filtre)    → un verbe au hasard, pour l'entraînement

   Trois mécanismes, dans cet ordre :
     1. le verbe est au catalogue des irréguliers → on lit ses formes ;
     2. le verbe se termine par un irrégulier connu (re·prendre, dé·venir)
        → on conjugue la base et on recolle le préfixe ;
     3. sinon, on applique les règles régulières (-er, -ir, -re, -uire).

   Le catalogue ne stocke que ce qui ne se devine pas : les six formes du
   présent, le radical du futur, le passé simple, le participe passé. Tout
   le reste s'en déduit — c'est exactement la méthode des cinq formes clés
   enseignée dans le chapitre « Les verbes irréguliers à connaître ».
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const PERS = ["je", "tu", "il", "nous", "vous", "ils"];

  /* Les verbes qui forment leurs temps composés avec être. Tous les
     pronominaux s'y ajoutent automatiquement. */
  const ETRE = ("aller venir arriver partir entrer sortir monter descendre naître mourir " +
    "rester tomber retourner passer devenir revenir parvenir intervenir survenir " +
    "décéder apparaître repartir rentrer remonter redescendre").split(" ");

  /* ── Le catalogue ──────────────────────────────────────────────
     p  : les six formes du présent de l'indicatif
     f  : le radical du futur (on y ajoute -ai, -as, -a, -ons, -ez, -ont)
     ps : le passé simple — t = la série (a, i, u, in), r = le radical
     pp : le participe passé (masculin singulier)
     pa : le participe présent, s'il ne suit pas le « nous » du présent
     sj : les six formes du subjonctif présent, si elles sont irrégulières
     im : l'impératif, s'il ne suit pas le présent
     aux: l'auxiliaire, s'il n'est pas déduit de la liste ci-dessus       */
  const IRR = {
    être:      { p:["suis","es","est","sommes","êtes","sont"], f:"ser", ps:{t:"u",r:"f"}, pp:"été", pa:"étant",
                 imparf:"ét", sj:["sois","sois","soit","soyons","soyez","soient"], im:["sois","soyons","soyez"] },
    avoir:     { p:["ai","as","a","avons","avez","ont"], f:"aur", ps:{t:"u",r:"e"}, pp:"eu",
                 sj:["aie","aies","ait","ayons","ayez","aient"], im:["aie","ayons","ayez"] },
    aller:     { p:["vais","vas","va","allons","allez","vont"], f:"ir", ps:{t:"a",r:"all"}, pp:"allé",
                 sj:["aille","ailles","aille","allions","alliez","aillent"], im:["va","allons","allez"] },
    faire:     { p:["fais","fais","fait","faisons","faites","font"], f:"fer", ps:{t:"i",r:"f"}, pp:"fait",
                 sj:["fasse","fasses","fasse","fassions","fassiez","fassent"] },
    dire:      { p:["dis","dis","dit","disons","dites","disent"], f:"dir", ps:{t:"i",r:"d"}, pp:"dit" },
    prendre:   { p:["prends","prends","prend","prenons","prenez","prennent"], f:"prendr", ps:{t:"i",r:"pr"}, pp:"pris" },
    venir:     { p:["viens","viens","vient","venons","venez","viennent"], f:"viendr", ps:{t:"in",r:"v"}, pp:"venu" },
    tenir:     { p:["tiens","tiens","tient","tenons","tenez","tiennent"], f:"tiendr", ps:{t:"in",r:"t"}, pp:"tenu" },
    voir:      { p:["vois","vois","voit","voyons","voyez","voient"], f:"verr", ps:{t:"i",r:"v"}, pp:"vu" },
    pouvoir:   { p:["peux","peux","peut","pouvons","pouvez","peuvent"], f:"pourr", ps:{t:"u",r:"p"}, pp:"pu",
                 sj:["puisse","puisses","puisse","puissions","puissiez","puissent"], im:null },
    vouloir:   { p:["veux","veux","veut","voulons","voulez","veulent"], f:"voudr", ps:{t:"u",r:"voul"}, pp:"voulu",
                 sj:["veuille","veuilles","veuille","voulions","vouliez","veuillent"],
                 im:["veuille","veuillons","veuillez"] },
    savoir:    { p:["sais","sais","sait","savons","savez","savent"], f:"saur", ps:{t:"u",r:"s"}, pp:"su", pa:"sachant",
                 sj:["sache","saches","sache","sachions","sachiez","sachent"], im:["sache","sachons","sachez"] },
    devoir:    { p:["dois","dois","doit","devons","devez","doivent"], f:"devr", ps:{t:"u",r:"d"}, pp:"dû" },
    valoir:    { p:["vaux","vaux","vaut","valons","valez","valent"], f:"vaudr", ps:{t:"u",r:"val"}, pp:"valu",
                 sj:["vaille","vailles","vaille","valions","valiez","vaillent"] },
    falloir:   { p:[null,null,"faut",null,null,null], f:"faudr", ps:{t:"u",r:"fall"}, pp:"fallu", pa:null,
                 sj:[null,null,"faille",null,null,null], im:null, impersonnel:true },
    pleuvoir:  { p:[null,null,"pleut",null,null,null], f:"pleuvr", ps:{t:"u",r:"pl"}, pp:"plu", pa:"pleuvant",
                 sj:[null,null,"pleuve",null,null,null], im:null, impersonnel:true },
    mettre:    { p:["mets","mets","met","mettons","mettez","mettent"], f:"mettr", ps:{t:"i",r:"m"}, pp:"mis" },
    battre:    { p:["bats","bats","bat","battons","battez","battent"], f:"battr", ps:{t:"i",r:"batt"}, pp:"battu" },
    partir:    { p:["pars","pars","part","partons","partez","partent"], f:"partir", ps:{t:"i",r:"part"}, pp:"parti" },
    sortir:    { p:["sors","sors","sort","sortons","sortez","sortent"], f:"sortir", ps:{t:"i",r:"sort"}, pp:"sorti" },
    dormir:    { p:["dors","dors","dort","dormons","dormez","dorment"], f:"dormir", ps:{t:"i",r:"dorm"}, pp:"dormi" },
    sentir:    { p:["sens","sens","sent","sentons","sentez","sentent"], f:"sentir", ps:{t:"i",r:"sent"}, pp:"senti" },
    mentir:    { p:["mens","mens","ment","mentons","mentez","mentent"], f:"mentir", ps:{t:"i",r:"ment"}, pp:"menti" },
    servir:    { p:["sers","sers","sert","servons","servez","servent"], f:"servir", ps:{t:"i",r:"serv"}, pp:"servi" },
    courir:    { p:["cours","cours","court","courons","courez","courent"], f:"courr", ps:{t:"u",r:"cour"}, pp:"couru" },
    mourir:    { p:["meurs","meurs","meurt","mourons","mourez","meurent"], f:"mourr", ps:{t:"u",r:"mour"}, pp:"mort" },
    ouvrir:    { p:["ouvre","ouvres","ouvre","ouvrons","ouvrez","ouvrent"], f:"ouvrir", ps:{t:"i",r:"ouvr"}, pp:"ouvert", er:true },
    offrir:    { p:["offre","offres","offre","offrons","offrez","offrent"], f:"offrir", ps:{t:"i",r:"offr"}, pp:"offert", er:true },
    souffrir:  { p:["souffre","souffres","souffre","souffrons","souffrez","souffrent"], f:"souffrir", ps:{t:"i",r:"souffr"}, pp:"souffert", er:true },
    couvrir:   { p:["couvre","couvres","couvre","couvrons","couvrez","couvrent"], f:"couvrir", ps:{t:"i",r:"couvr"}, pp:"couvert", er:true },
    cueillir:  { p:["cueille","cueilles","cueille","cueillons","cueillez","cueillent"], f:"cueiller", ps:{t:"i",r:"cueill"}, pp:"cueilli", er:true },
    fuir:      { p:["fuis","fuis","fuit","fuyons","fuyez","fuient"], f:"fuir", ps:{t:"i",r:"fu"}, pp:"fui" },
    acquérir:  { p:["acquiers","acquiers","acquiert","acquérons","acquérez","acquièrent"], f:"acquerr", ps:{t:"i",r:"acqu"}, pp:"acquis" },
    vêtir:     { p:["vêts","vêts","vêt","vêtons","vêtez","vêtent"], f:"vêtir", ps:{t:"i",r:"vêt"}, pp:"vêtu" },
    naître:    { p:["nais","nais","naît","naissons","naissez","naissent"], f:"naîtr", ps:{t:"i",r:"naqu"}, pp:"né" },
    connaître: { p:["connais","connais","connaît","connaissons","connaissez","connaissent"], f:"connaîtr", ps:{t:"u",r:"conn"}, pp:"connu" },
    paraître:  { p:["parais","parais","paraît","paraissons","paraissez","paraissent"], f:"paraîtr", ps:{t:"u",r:"par"}, pp:"paru" },
    croire:    { p:["crois","crois","croit","croyons","croyez","croient"], f:"croir", ps:{t:"u",r:"cr"}, pp:"cru" },
    boire:     { p:["bois","bois","boit","buvons","buvez","boivent"], f:"boir", ps:{t:"u",r:"b"}, pp:"bu" },
    lire:      { p:["lis","lis","lit","lisons","lisez","lisent"], f:"lir", ps:{t:"u",r:"l"}, pp:"lu" },
    écrire:    { p:["écris","écris","écrit","écrivons","écrivez","écrivent"], f:"écrir", ps:{t:"i",r:"écriv"}, pp:"écrit" },
    vivre:     { p:["vis","vis","vit","vivons","vivez","vivent"], f:"vivr", ps:{t:"u",r:"véc"}, pp:"vécu" },
    suivre:    { p:["suis","suis","suit","suivons","suivez","suivent"], f:"suivr", ps:{t:"i",r:"suiv"}, pp:"suivi" },
    rire:      { p:["ris","ris","rit","rions","riez","rient"], f:"rir", ps:{t:"i",r:"r"}, pp:"ri" },
    plaire:    { p:["plais","plais","plaît","plaisons","plaisez","plaisent"], f:"plair", ps:{t:"u",r:"pl"}, pp:"plu" },
    taire:     { p:["tais","tais","tait","taisons","taisez","taisent"], f:"tair", ps:{t:"u",r:"t"}, pp:"tu" },
    conduire:  { p:["conduis","conduis","conduit","conduisons","conduisez","conduisent"], f:"conduir", ps:{t:"i",r:"conduis"}, pp:"conduit" },
    craindre:  { p:["crains","crains","craint","craignons","craignez","craignent"], f:"craindr", ps:{t:"i",r:"craign"}, pp:"craint" },
    peindre:   { p:["peins","peins","peint","peignons","peignez","peignent"], f:"peindr", ps:{t:"i",r:"peign"}, pp:"peint" },
    joindre:   { p:["joins","joins","joint","joignons","joignez","joignent"], f:"joindr", ps:{t:"i",r:"joign"}, pp:"joint" },
    résoudre:  { p:["résous","résous","résout","résolvons","résolvez","résolvent"], f:"résoudr", ps:{t:"u",r:"résol"}, pp:"résolu" },
    coudre:    { p:["couds","couds","coud","cousons","cousez","cousent"], f:"coudr", ps:{t:"i",r:"cous"}, pp:"cousu" },
    moudre:    { p:["mouds","mouds","moud","moulons","moulez","moulent"], f:"moudr", ps:{t:"u",r:"moul"}, pp:"moulu" },
    vaincre:   { p:["vaincs","vaincs","vainc","vainquons","vainquez","vainquent"], f:"vaincr", ps:{t:"i",r:"vainqu"}, pp:"vaincu" },
    recevoir:  { p:["reçois","reçois","reçoit","recevons","recevez","reçoivent"], f:"recevr", ps:{t:"u",r:"reç"}, pp:"reçu" },
    asseoir:   { p:["assieds","assieds","assied","asseyons","asseyez","asseyent"], f:"assiér", ps:{t:"i",r:"ass"}, pp:"assis" },
    envoyer:   { p:["envoie","envoies","envoie","envoyons","envoyez","envoient"], f:"enverr", ps:{t:"a",r:"envoy"}, pp:"envoyé", erSansS:true, groupe:1 },
    haïr:      { p:["hais","hais","hait","haïssons","haïssez","haïssent"], f:"haïr", ps:{t:"i",r:"haï"}, pp:"haï", groupe:2 },
  };

  /* Les verbes en -re réguliers (famille de vendre) : très nombreux, ils
     n'ont pas besoin d'entrée. Ceux qui suivent en sont écartés. */
  const RE_IRREGULIERS = /(prendre|mettre|battre|naître|connaître|paraître|croire|boire|suivre|vivre|écrire|lire|dire|rire|faire|plaire|taire|conduire|craindre|peindre|joindre|résoudre|coudre|moudre|vaincre|être|traire|clore)$/;

  /* ── Petites fabriques ────────────────────────────────────────── */
  const T_PS = {
    a:  ["ai","as","a","âmes","âtes","èrent"],
    i:  ["is","is","it","îmes","îtes","irent"],
    u:  ["us","us","ut","ûmes","ûtes","urent"],
    in: ["ins","ins","int","înmes","întes","inrent"],
  };
  const T_IMP  = ["ais","ais","ait","ions","iez","aient"];
  const T_FUT  = ["ai","as","a","ons","ez","ont"];
  const T_SUBJ = ["e","es","e","ions","iez","ent"];

  function map6(f) { return [0,1,2,3,4,5].map(f); }
  /* Devant a et o, le c prend une cédille et le g un e : c'est le son
     qui commande l'orthographe. */
  function adoucir(radical, suite) {
    if (/c$/.test(radical) && /^[ao]/.test(suite)) return radical.slice(0, -1) + "ç";
    if (/g$/.test(radical) && /^[ao]/.test(suite)) return radical + "e";
    return radical;
  }
  function colle(radical, terminaison) {
    return adoucir(radical, terminaison) + terminaison;
  }

  /* ── Radicaux d'un verbe du 1er groupe ─────────────────────────
     Le français note le même son de plusieurs façons : le radical change
     donc devant une terminaison muette (e, es, ent) et devant le futur. */
  const VOY  = "aàâäeéèêëiîïoôöuùûüy";
  const CONS = new RegExp("[^" + VOY + "]");
  const fin  = motif => new RegExp(motif.replace(/C/g, "[^" + VOY + "]") + "$");

  function radicauxEr(inf) {
    const r = inf.slice(0, -2);
    let muet = r, futur = r;                    /* muet : devant e, es, ent */

    if (/[aeiou]y$/.test(r)) {
      /* -yer : le y devient i devant un e muet (j'essaie, j'essaierai) */
      muet  = r.slice(0, -1) + "i";
      futur = r.slice(0, -1) + "i";
    } else if (fin("Cel").test(r) && !/^(gel|dégel|congel|pel|martel|model|démantel|harcel|cisel|écartel|regel|surgel)$/.test(r)) {
      muet = r + "l"; futur = r + "l";           /* appeler → j'appelle */
    } else if (fin("Cet").test(r) && !/^(ach|rach|brevet|corset|croch|décroch|fil|furet|hal|halet|inqui)/.test(r)) {
      muet = r + "t"; futur = r + "t";           /* jeter → je jette */
    } else if (fin("eC{1,2}").test(r)) {
      /* lever, mener, peser, acheter, geler : le e devient è partout */
      muet  = r.replace(fin("e(C{1,2})"), "è$1");
      futur = muet;
    } else if (fin("éC{1,2}").test(r)) {
      /* céder, espérer, répéter : é devient è, mais le futur garde é */
      muet = r.replace(fin("é(C{1,2})"), "è$1");
    }
    return { r: r, muet: muet, futur: futur };
  }

  /* ── Conjugaison régulière ─────────────────────────────────────── */
  function reguliere(inf) {
    if (/er$/.test(inf)) {
      const { r, muet, futur } = radicauxEr(inf);
      return {
        groupe: inf === "aller" ? 3 : 1,
        p:  [muet+"e", muet+"es", muet+"e", colle(r,"ons"), colle(r,"ez"), muet+"ent"],
        nousRad: adoucir(r, "o") ,
        imparfRad: r,
        f:  futur + "er",
        ps: { t:"a", r:r },
        pp: r + "é",
        pa: colle(r, "ant"),
        erSansS: true,
      };
    }
    if (/ir$/.test(inf)) {                                   /* 2e groupe */
      const r = inf.slice(0, -2);
      return { groupe:2, p:[r+"is",r+"is",r+"it",r+"issons",r+"issez",r+"issent"],
               imparfRad:r+"iss", f:inf, ps:{t:"i",r:r}, pp:r+"i", pa:r+"issant" };
    }
    if (/re$/.test(inf)) {                                   /* famille de vendre */
      const r = inf.slice(0, -2);
      const il = /d$/.test(r) ? r : r + "t";
      return { groupe:3, p:[r+"s",r+"s",il,r+"ons",r+"ez",r+"ent"],
               imparfRad:r, f:r+"r", ps:{t:"i",r:r}, pp:r+"u", pa:r+"ant" };
    }
    return null;
  }

  /* ── Résolution : catalogue, puis préfixe, puis règles ─────────── */
  const BASES = Object.keys(IRR).sort((a, b) => b.length - a.length);

  function base(inf) {
    inf = String(inf || "").trim().toLowerCase().replace(/^(se |s')/, "");
    if (!inf) return null;

    if (IRR[inf]) return { inf: inf, d: IRR[inf], prefixe: "" };

    /* re·prendre, dé·venir, sur·vivre… : on conjugue la base, on recolle. */
    for (const b of BASES) {
      if (inf.length > b.length && inf.endsWith(b)) {
        const pre = inf.slice(0, inf.length - b.length);
        if (/[a-zàâäéèêëîïôöùûüç-]+$/.test(pre)) return { inf: inf, base: b, d: IRR[b], prefixe: pre };
      }
    }
    if (/re$/.test(inf) && RE_IRREGULIERS.test(inf)) return null;
    const r = reguliere(inf);
    return r ? { inf: inf, d: r, prefixe: "", regulier: true } : null;
  }

  /* ── Le tableau complet ────────────────────────────────────────── */
  function conjugue(demande) {
    const b = base(demande);
    if (!b) return null;
    const d = b.d, px = b.prefixe;
    const inf = b.inf;               /* b.inf porte déjà le préfixe */
    const pref = s => (s == null ? null : px + s);

    const present = d.p.map(pref);
    /* L'imparfait se lit toujours sur le « nous » du présent — sauf être. */
    const imparfRad = d.imparf ? d.imparf
      : (d.imparfRad != null ? d.imparfRad
        : (d.p[3] ? d.p[3].replace(/ons$/, "") : null));
    const imparfait = imparfRad == null ? map6(() => null)
      : map6(i => pref(colle(imparfRad, T_IMP[i])));

    const psT = T_PS[d.ps.t];
    const passeSimple = map6(i => pref(colle(d.ps.r, psT[i])));

    const futur = map6(i => pref(d.f + T_FUT[i]));
    const conditionnel = map6(i => pref(d.f + T_IMP[i]));

    /* Subjonctif : radical du « ils » du présent, terminaisons -e -es -e,
       et les personnes du pluriel calquées sur l'imparfait. */
    let subj;
    if (d.sj) subj = d.sj.map(pref);
    else {
      const rad = d.p[5] ? d.p[5].replace(/ent$/, "") : null;
      subj = map6(i => {
        if (i === 3 || i === 4) return imparfait[i] ? pref(colle(imparfRad, T_SUBJ[i])) : null;
        return rad == null ? null : pref(colle(rad, T_SUBJ[i]));
      });
    }

    /* Impératif : les trois personnes du présent, sans sujet. Le -s tombe
       à la 2e du singulier pour les verbes en -er et pour aller. */
    let imperatif;
    if (d.im === null) imperatif = [null, null, null];
    else if (d.im) imperatif = d.im.map(pref);
    else {
      const tu = d.p[1];
      const sansS = (d.erSansS || d.er) && /es$/.test(tu || "") ? tu.slice(0, -1) : tu;
      imperatif = [pref(sansS), pref(d.p[3]), pref(d.p[4])];
    }

    const pp = pref(d.pp);
    const pa = d.pa === null ? null
      : pref(d.pa || (imparfRad != null ? colle(imparfRad, "ant") : null));

    const pronominalPre = /^(se |s')/.test(String(demande).trim().toLowerCase());
    const aux = pronominalPre ? "être"
      : (d.aux || (ETRE.indexOf(inf) >= 0 || ETRE.indexOf(b.base || b.inf) >= 0 ? "être" : "avoir"));
    const auxD = conjugueAux(aux);

    const pronominal = /^(se |s')/.test(String(demande).trim().toLowerCase());
    /* Un verbe pronominal traîne son pronom réfléchi : il se place devant
       le verbe (ou devant l'auxiliaire), et s'élide devant une voyelle. */
    const REFL = ["me", "te", "se", "nous", "vous", "se"];
    function reflechir(forme, i) {
      if (forme == null) return null;
      const p = REFL[i];
      return (i < 3 || i === 5) && /^[aeiouyéèêâîôûh]/i.test(forme)
        ? p.slice(0, 1) + "'" + forme
        : p + " " + forme;
    }
    /* Un temps composé : l'auxiliaire porte le temps, le participe le sens. */
    /* Avec être, le participe s'accorde avec le sujet : les tables de
       conjugaison donnent le masculin, et marquent le pluriel. */
    const ppPluriel = aux === "être" && !/[sx]$/.test(pp) ? pp + "s" : pp;
    function compose(formesAux) {
      return map6(i => formesAux[i] == null ? null
        : formesAux[i] + " " + (aux === "être" && i >= 3 ? ppPluriel : pp));
    }

    /* Deux masques, appliqués en dernier : l'impersonnel n'a que « il »,
       le pronominal porte son pronom à toutes les personnes. */
    const masque = formes => {
      let f = formes;
      if (d.impersonnel) f = f.map((x, i) => (i === 2 ? x : null));
      if (pronominal)    f = f.map(reflechir);
      return f;
    };

    const temps = {
      "Présent":              present,
      "Imparfait":            imparfait,
      "Passé simple":         passeSimple,
      "Futur simple":         futur,
      "Passé composé":        compose(auxD["Présent"]),
      "Plus-que-parfait":     compose(auxD["Imparfait"]),
      "Passé antérieur":      compose(auxD["Passé simple"]),
      "Futur antérieur":      compose(auxD["Futur simple"]),
      "Conditionnel présent": conditionnel,
      "Conditionnel passé":   compose(auxD["Conditionnel présent"]),
      "Subjonctif présent":   subj,
      "Subjonctif passé":     compose(auxD["Subjonctif présent"]),
    };
    Object.keys(temps).forEach(k => { temps[k] = masque(temps[k]); });

    /* À l'impératif affirmatif, le pronom passe derrière, avec un trait
       d'union, et « te » devient « toi ». */
    if (pronominal) {
      const suffixe = ["toi", "nous", "vous"];
      imperatif = imperatif.map((f, i) => (f == null ? null : f + "-" + suffixe[i]));
    } else if (d.impersonnel) {
      imperatif = [null, null, null];
    }

    return {
      infinitif: (pronominal ? "se " + inf : inf).replace(/^se ([aeiouyéèêâîôûh])/i, "s'$1"),
      pronominal: pronominal,
      groupe: d.groupe || (b.regulier ? (/ir$/.test(inf) ? 2 : /er$/.test(inf) ? 1 : 3) : 3),
      auxiliaire: aux,
      impersonnel: !!d.impersonnel,
      participePresent: pa,
      participePasse: pp,
      gerondif: pa ? "en " + pa : null,
      temps: temps,
      imperatif: imperatif,
    };
  }

  /* Les auxiliaires sont conjugués une fois pour toutes. */
  let CACHE_AUX = null;
  function conjugueAux(quel) {
    if (!CACHE_AUX) {
      CACHE_AUX = {};
      ["avoir", "être"].forEach(a => {
        const d = IRR[a];
        const imparfRad = d.imparf || d.p[3].replace(/ons$/, "");
        const psT = T_PS[d.ps.t];
        CACHE_AUX[a] = {
          "Présent": d.p.slice(),
          "Imparfait": map6(i => imparfRad + T_IMP[i]),
          "Passé simple": map6(i => d.ps.r + psT[i]),
          "Futur simple": map6(i => d.f + T_FUT[i]),
          "Conditionnel présent": map6(i => d.f + T_IMP[i]),
          "Subjonctif présent": d.sj.slice(),
        };
      });
    }
    return CACHE_AUX[quel];
  }

  /* ── Habillage : le pronom, avec élision et « que » du subjonctif ── */
  function pronom(i, temps) {
    const base = ["je", "tu", "il", "nous", "vous", "ils"][i];
    if (!/^Subjonctif/.test(temps || "")) return base;
    return (i === 2 || i === 5) ? "qu'" + base : "que " + base;   /* qu'il, qu'ils */
  }
  /* « je » s'élide devant une voyelle — y compris quand un pronom réfléchi
     s'est glissé entre les deux (je m'assieds, et non j' m'assieds). */
  function avecPronom(forme, i, temps) {
    if (forme == null) return null;
    let p = pronom(i, temps);
    if (/je$/.test(p) && /^[aeiouyéèêâîôûh]/i.test(forme)) p = p.replace(/je$/, "j'");
    return /'$/.test(p) ? p + forme : p + " " + forme;
  }

  /* ── Recherche et tirage ───────────────────────────────────────── */
  const COURANTS = ("être avoir aller faire dire prendre venir tenir voir pouvoir vouloir savoir " +
    "devoir mettre partir sortir dormir sentir servir courir mourir naître connaître croire boire " +
    "lire écrire vivre suivre rire ouvrir offrir recevoir craindre peindre conduire attendre " +
    "entendre répondre perdre vendre rendre descendre chanter aimer parler manger placer jeter " +
    "appeler acheter lever payer essayer finir choisir grandir réussir remplir bâtir").split(" ");

  function normalise(s) {
    return String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function cherche(q, n) {
    const nq = normalise(q).replace(/^(se |s')/, "");
    if (!nq) return [];
    const pool = COURANTS.concat(Object.keys(IRR));
    const vus = new Set();
    const res = [];
    pool.forEach(v => {
      if (vus.has(v)) return;
      if (normalise(v).indexOf(nq) === 0) { vus.add(v); res.push(v); }
    });
    pool.forEach(v => {
      if (vus.has(v)) return;
      if (normalise(v).indexOf(nq) > 0) { vus.add(v); res.push(v); }
    });
    return res.slice(0, n || 8);
  }

  function liste() { return COURANTS.slice(); }
  function aleatoire(pool) {
    const p = (pool && pool.length) ? pool : COURANTS;
    return p[Math.floor(Math.random() * p.length)];
  }

  window.MB_VERBES = {
    conjugue, cherche, liste, aleatoire, avecPronom, pronom,
    irreguliers: () => Object.keys(IRR),
    PERSONNES: PERS,
    TEMPS_SIMPLES: ["Présent","Imparfait","Passé simple","Futur simple","Conditionnel présent","Subjonctif présent"],
    TEMPS_COMPOSES: ["Passé composé","Plus-que-parfait","Passé antérieur","Futur antérieur","Conditionnel passé","Subjonctif passé"],
  };
})();
