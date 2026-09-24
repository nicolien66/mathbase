/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — competences.js (côté serveur)
   L'Analyse des compétences : une IA fait passer à l'élève une série de
   questions rapides (cours, exercice, petit problème de 5 min) pour dresser
   la fiche de ses acquis sur les classes ANTÉRIEURES à la sienne.

   Ce module contient :
     · le RÉFÉRENTIEL des compétences et automatismes, par matière, thème et
       classe — c'est la grille de la fiche finale ;
     · le PÉRIMÈTRE d'une analyse : toutes les compétences des classes
       strictement antérieures à celle de l'élève ;
     · la consigne d'un TOUR (évaluer la réponse, mettre à jour les états,
       poser la question suivante) et les règles de CONFIRMATION : une
       compétence n'est déclarée non acquise qu'après un second échec sur un
       exercice ciblé ;
     · la consigne du BILAN final, par thème, faiblesses puis forces.
   ═══════════════════════════════════════════════════════════════════════════ */
"use strict";

const MODELE = process.env.MISTRAL_MODEL_ANALYSE || process.env.MISTRAL_MODEL_KHOLLE || "mistral-small-latest";
const NB_QUESTIONS_MAX = 60;

/* ── Classes, dans l'ordre ─────────────────────────────────────────────── */
const CLASSES = ["CM2", "6ème", "5ème", "4ème", "3ème", "2nde", "1ère", "Terminale"];
function rangClasse(c) {
  const i = CLASSES.indexOf(String(c || "").trim());
  return i;
}

/* ── Référentiel ────────────────────────────────────────────────────────
   Chaque ligne : [id, classe, libellé]. La classe est celle où la compétence
   est censée être acquise ; elle entre dans le périmètre de toute classe
   supérieure. Les libellés sont ceux que l'IA et la fiche utilisent. */
const REFERENTIEL = {
  "mathematiques": {
    "Nombres": [
      ["N01", "CM2",  "Lire, écrire et comparer des entiers et des décimaux"],
      ["N02", "CM2",  "Poser et effectuer une addition, une soustraction, une multiplication"],
      ["N03", "CM2",  "Effectuer une division euclidienne et interpréter quotient et reste"],
      ["N04", "CM2",  "Multiplier ou diviser un décimal par 10, 100, 1000"],
      ["N05", "CM2",  "Comprendre une fraction comme un partage et la placer sur une droite graduée"],
      ["N06", "6ème", "Calculer mentalement avec les tables et les compléments à 10, 100"],
      ["N07", "6ème", "Diviser un décimal par un entier et donner une valeur approchée"],
      ["N08", "6ème", "Reconnaître des fractions égales et simplifier une fraction"],
      ["N09", "6ème", "Passer d'une fraction à une écriture décimale et inversement"],
      ["N10", "6ème", "Utiliser les critères de divisibilité par 2, 3, 5, 9, 10"],
      ["N11", "5ème", "Additionner et soustraire des fractions de dénominateurs différents"],
      ["N12", "5ème", "Additionner et soustraire des nombres relatifs"],
      ["N13", "5ème", "Repérer et comparer des nombres relatifs sur une droite graduée"],
      ["N14", "5ème", "Reconnaître un nombre premier et décomposer un entier en facteurs premiers"],
      ["N15", "4ème", "Multiplier et diviser des fractions"],
      ["N16", "4ème", "Multiplier et diviser des nombres relatifs (règle des signes)"],
      ["N17", "4ème", "Calculer avec des puissances d'exposant entier, dont les puissances de 10"],
      ["N18", "4ème", "Écrire un nombre en notation scientifique et comparer des ordres de grandeur"],
      ["N19", "3ème", "Calculer avec des racines carrées et reconnaître un carré parfait"],
      ["N20", "3ème", "Utiliser PGCD et fractions irréductibles"],
      ["N21", "2nde", "Situer un nombre dans les ensembles N, Z, D, Q, R et manipuler des intervalles"],
      ["N22", "2nde", "Encadrer, arrondir et manipuler les valeurs absolues"],
    ],
    "Algèbre": [
      ["A01", "CM2",  "Respecter l'ordre des opérations dans un calcul sans parenthèses"],
      ["A02", "6ème", "Utiliser les parenthèses et les priorités opératoires"],
      ["A03", "5ème", "Traduire une situation par une expression littérale"],
      ["A04", "5ème", "Réduire une expression littérale simple et tester une égalité"],
      ["A05", "5ème", "Développer avec la distributivité simple k(a + b)"],
      ["A06", "4ème", "Développer avec la double distributivité et réduire"],
      ["A07", "4ème", "Résoudre une équation du premier degré à une inconnue"],
      ["A08", "4ème", "Mettre un problème en équation et interpréter la solution"],
      ["A09", "3ème", "Factoriser avec un facteur commun et les identités remarquables"],
      ["A10", "3ème", "Résoudre une équation produit nul"],
      ["A12", "2nde", "Résoudre une équation ou une inéquation à l'aide d'un tableau de signes"],
      ["A13", "2nde", "Choisir la forme d'une expression (développée, factorisée) adaptée au problème"],
      ["A14", "1ère", "Résoudre une équation du second degré avec le discriminant"],
      ["A15", "1ère", "Utiliser la forme canonique et le signe d'un trinôme"],
      ["A16", "1ère", "Étudier une suite arithmétique ou géométrique (terme général, somme)"],
      ["A17", "1ère", "Démontrer par récurrence"],
      ["A18", "Terminale", "Déterminer la limite d'une suite et utiliser les théorèmes de comparaison"],
      ["A19", "Terminale", "Dénombrer avec les combinaisons et les arrangements"],
    ],
    "Grandeurs & mesures": [
      ["M01", "CM2",  "Convertir des longueurs, des masses et des contenances"],
      ["M02", "CM2",  "Lire l'heure et calculer une durée"],
      ["M03", "6ème", "Calculer le périmètre et l'aire d'un rectangle, d'un carré, d'un triangle rectangle"],
      ["M04", "6ème", "Convertir des aires (cm², m², ha) et des volumes (cm³, L)"],
      ["M05", "5ème", "Calculer l'aire d'un disque, d'un triangle quelconque, d'un parallélogramme"],
      ["M06", "5ème", "Calculer le volume d'un pavé, d'un cylindre, d'un prisme"],
      ["M07", "4ème", "Calculer le volume d'une pyramide et d'un cône"],
      ["M08", "4ème", "Calculer avec une vitesse, un débit ou une grandeur quotient"],
      ["M09", "3ème", "Calculer le volume d'une boule et l'effet d'un agrandissement sur aires et volumes"],
    ],
    "Proportionnalité & pourcentages": [
      ["P01", "CM2",  "Reconnaître une situation de proportionnalité et compléter un tableau (passage par l'unité)"],
      ["P02", "6ème", "Utiliser le coefficient de proportionnalité"],
      ["P03", "6ème", "Calculer un pourcentage simple d'une quantité"],
      ["P04", "5ème", "Utiliser le produit en croix (quatrième proportionnelle)"],
      ["P05", "5ème", "Utiliser une échelle sur un plan ou une carte"],
      ["P06", "4ème", "Appliquer une hausse ou une baisse en pourcentage"],
      ["P07", "3ème", "Calculer un taux d'évolution et retrouver une valeur initiale"],
    ],
    "Géométrie": [
      ["G01", "CM2",  "Reconnaître et nommer droites, segments, angles, figures usuelles"],
      ["G02", "CM2",  "Tracer une perpendiculaire, une parallèle, un cercle avec les instruments"],
      ["G03", "6ème", "Construire la symétrique d'une figure par une symétrie axiale"],
      ["G04", "6ème", "Mesurer et construire un angle au rapporteur"],
      ["G05", "6ème", "Connaître les propriétés des triangles et quadrilatères particuliers"],
      ["G06", "5ème", "Construire la symétrique d'une figure par une symétrie centrale"],
      ["G07", "5ème", "Utiliser la somme des angles d'un triangle et l'inégalité triangulaire"],
      ["G08", "5ème", "Reconnaître angles alternes-internes, correspondants et justifier un parallélisme"],
      ["G09", "5ème", "Construire un triangle à partir de ses côtés ou de ses angles"],
      ["G10", "4ème", "Appliquer le théorème de Pythagore pour calculer une longueur"],
      ["G11", "4ème", "Utiliser la réciproque de Pythagore pour prouver qu'un triangle est rectangle"],
      ["G12", "4ème", "Construire l'image d'une figure par une translation ou une rotation"],
      ["G13", "4ème", "Utiliser le cosinus dans un triangle rectangle"],
      ["G14", "3ème", "Appliquer le théorème de Thalès et sa réciproque"],
      ["G15", "3ème", "Utiliser sinus, cosinus et tangente pour calculer une longueur ou un angle"],
      ["G16", "3ème", "Construire l'image d'une figure par une homothétie"],
      ["G17", "3ème", "Rédiger une démonstration géométrique courte (hypothèses, propriété, conclusion)"],
      ["G18", "2nde", "Calculer des coordonnées de vecteurs, de milieux, des distances dans un repère"],
      ["G19", "2nde", "Utiliser la colinéarité et déterminer l'équation d'une droite"],
      ["G20", "1ère", "Calculer un produit scalaire et l'utiliser (angles, orthogonalité)"],
      ["G21", "1ère", "Utiliser le cercle trigonométrique et les valeurs remarquables"],
      ["G22", "Terminale", "Utiliser vecteurs, droites et plans de l'espace (colinéarité, coplanarité)"],
      ["G23", "Terminale", "Utiliser le produit scalaire dans l'espace et l'équation cartésienne d'un plan"],
      ["G24", "Terminale", "Écrire une représentation paramétrique de droite et calculer une distance"],
    ],
    "Fonctions": [
      ["F01", "3ème", "Calculer une image et un antécédent, lire un tableau de valeurs"],
      ["F02", "3ème", "Lire une image, un antécédent et des variations sur un graphique"],
      ["F03", "3ème", "Reconnaître une fonction linéaire ou affine et tracer sa représentation"],
      ["F04", "3ème", "Déterminer l'expression d'une fonction affine à partir de deux points"],
      ["F05", "2nde", "Connaître les fonctions de référence (carré, inverse, racine, cube) et leurs variations"],
      ["F06", "2nde", "Résoudre graphiquement f(x) = k et f(x) < g(x)"],
      ["F07", "1ère", "Calculer une dérivée et l'équation d'une tangente"],
      ["F08", "1ère", "Étudier les variations d'une fonction à partir du signe de sa dérivée"],
      ["F09", "1ère", "Utiliser la fonction exponentielle et ses propriétés algébriques"],
      ["F10", "Terminale", "Calculer une limite de fonction et déterminer une asymptote"],
      ["F11", "Terminale", "Utiliser la continuité et le théorème des valeurs intermédiaires"],
      ["F12", "Terminale", "Étudier la convexité avec la dérivée seconde"],
      ["F13", "Terminale", "Utiliser le logarithme népérien et résoudre des équations avec ln et exp"],
      ["F14", "Terminale", "Calculer une primitive et une intégrale ; interpréter une aire"],
      ["F15", "Terminale", "Résoudre une équation différentielle y' = ay + b"],
    ],
    "Statistiques & probabilités": [
      ["S01", "CM2",  "Lire un tableau, un diagramme en bâtons ou un graphique"],
      ["S02", "6ème", "Calculer une moyenne et construire un tableau d'effectifs"],
      ["S03", "5ème", "Calculer une fréquence et lire un diagramme circulaire"],
      ["S04", "5ème", "Évaluer la probabilité d'un événement dans une situation simple"],
      ["S05", "4ème", "Calculer une médiane et une étendue"],
      ["S06", "4ème", "Calculer des probabilités avec des événements contraires ou incompatibles"],
      ["S07", "3ème", "Utiliser un arbre pour une expérience à deux épreuves"],
      ["S08", "2nde", "Calculer quartiles, écart-type et interpréter une distribution"],
      ["S09", "1ère", "Utiliser les probabilités conditionnelles et un arbre pondéré"],
      ["S10", "1ère", "Calculer l'espérance d'une variable aléatoire et reconnaître une loi binomiale"],
      ["S11", "Terminale", "Calculer avec la loi binomiale et utiliser un intervalle de fluctuation"],
      ["S12", "Terminale", "Utiliser l'espérance et la variance d'une somme de variables aléatoires ; inégalité de Bienaymé-Tchebychev"],
    ],
  },

  "physique-chimie": {
    "Matière": [
      ["C01", "5ème", "Distinguer les états de la matière et nommer les changements d'état"],
      ["C02", "5ème", "Utiliser la conservation de la masse lors d'un changement d'état ou d'une dissolution"],
      ["C03", "5ème", "Distinguer mélange homogène, hétérogène et corps pur ; connaître les techniques de séparation"],
      ["C04", "5ème", "Mesurer un volume et une masse ; utiliser la masse volumique"],
      ["C05", "4ème", "Distinguer transformation physique et transformation chimique"],
      ["C06", "4ème", "Écrire et équilibrer l'équation d'une réaction chimique simple"],
      ["C07", "4ème", "Décrire l'atome, la molécule et l'ion ; lire une formule chimique"],
      ["C08", "4ème", "Décrire une combustion (réactifs, produits, dangers)"],
      ["C09", "3ème", "Utiliser l'échelle de pH et reconnaître acide, base, solution neutre"],
      ["C10", "3ème", "Écrire l'équation d'une réaction entre un acide et un métal ou une base"],
      ["C11", "3ème", "Utiliser la structure de l'atome (noyau, électrons) et le tableau périodique"],
      ["C12", "2nde", "Calculer une quantité de matière avec la masse molaire ou le volume molaire"],
      ["C13", "2nde", "Calculer une concentration massique et préparer une solution par dilution"],
      ["C14", "2nde", "Écrire un schéma de Lewis simple et prévoir la stabilité d'une entité"],
      ["C15", "1ère", "Construire un tableau d'avancement et déterminer le réactif limitant"],
      ["C16", "1ère", "Identifier une famille fonctionnelle organique et nommer une molécule simple"],
      ["C17", "1ère", "Écrire une demi-équation et une équation d'oxydoréduction"],
      ["C18", "Terminale", "Déterminer une vitesse de réaction et un temps de demi-réaction"],
      ["C19", "Terminale", "Calculer un pH, utiliser un couple acide-base et exploiter un titrage"],
      ["C20", "Terminale", "Prévoir le sens d'évolution avec le quotient de réaction et la constante d'équilibre"],
      ["C21", "Terminale", "Décrire le fonctionnement d'une pile ou d'une électrolyse"],
      ["C22", "Terminale", "Élaborer une stratégie de synthèse et calculer un rendement"],
    ],
    "Mouvements & interactions": [
      ["V01", "5ème", "Décrire un mouvement : trajectoire, référentiel, mouvement uniforme ou varié"],
      ["V02", "5ème", "Calculer une vitesse moyenne et convertir m/s en km/h"],
      ["V03", "4ème", "Utiliser la relation d = v × t pour une distance ou une durée"],
      ["V04", "4ème", "Identifier les actions mécaniques et représenter une force par un vecteur"],
      ["V05", "3ème", "Distinguer masse et poids ; utiliser P = m × g"],
      ["V06", "3ème", "Décrire la gravitation et son rôle dans le système solaire"],
      ["V07", "2nde", "Tracer et exploiter un vecteur vitesse ; reconnaître un mouvement à partir des positions"],
      ["V08", "2nde", "Appliquer le principe d'inertie et faire un bilan des forces"],
      ["V09", "1ère", "Relier la variation du vecteur vitesse à la somme des forces"],
      ["V10", "1ère", "Calculer une pression et utiliser la loi de Boyle-Mariotte ou la poussée d'Archimède"],
      ["V11", "Terminale", "Appliquer la deuxième loi de Newton et établir les équations horaires d'un mouvement"],
      ["V12", "Terminale", "Étudier un mouvement dans un champ de pesanteur ou électrique uniforme"],
      ["V13", "Terminale", "Utiliser les lois de Kepler et le mouvement circulaire d'un satellite"],
      ["V14", "Terminale", "Appliquer la relation de Bernoulli et la conservation du débit"],
    ],
    "Énergie": [
      ["E01", "5ème", "Identifier des formes et des sources d'énergie, renouvelables ou non"],
      ["E02", "5ème", "Réaliser et schématiser un circuit électrique simple ; distinguer série et dérivation"],
      ["E03", "4ème", "Mesurer une tension et une intensité ; appliquer les lois des circuits (mailles, nœuds)"],
      ["E04", "4ème", "Décrire une chaîne de conversions d'énergie et la conservation de l'énergie"],
      ["E05", "3ème", "Appliquer la loi d'Ohm U = R × I"],
      ["E06", "3ème", "Calculer une puissance et une énergie électrique (P = U × I, E = P × t)"],
      ["E07", "3ème", "Calculer une énergie cinétique et connaître les règles de sécurité électrique"],
      ["E08", "2nde", "Calculer énergie cinétique, potentielle de pesanteur et mécanique"],
      ["E09", "1ère", "Calculer le travail d'une force et appliquer le théorème de l'énergie cinétique"],
      ["E10", "1ère", "Calculer un rendement et utiliser le modèle du générateur"],
      ["E11", "Terminale", "Appliquer le premier principe de la thermodynamique à un système"],
      ["E12", "Terminale", "Décrire un transfert thermique et utiliser la capacité thermique"],
      ["E13", "Terminale", "Établir un bilan énergétique et modéliser l'évolution d'une température"],
    ],
    "Ondes & signaux": [
      ["O01", "5ème", "Distinguer sources primaires et objets diffusants ; propagation rectiligne de la lumière"],
      ["O02", "4ème", "Décrire un son : fréquence, période, vitesse de propagation"],
      ["O03", "4ème", "Calculer une distance avec la vitesse de la lumière ou du son"],
      ["O04", "3ème", "Décrire un signal et sa transmission (lumineux, sonore, électrique)"],
      ["O05", "2nde", "Utiliser la relation entre période et fréquence ; lire un signal périodique"],
      ["O06", "2nde", "Construire l'image d'un objet par une lentille mince convergente"],
      ["O07", "1ère", "Utiliser la longueur d'onde, la célérité et la période d'une onde"],
      ["O08", "1ère", "Relier l'énergie d'un photon à sa fréquence et interpréter un spectre"],
      ["O09", "Terminale", "Calculer un niveau d'intensité sonore et une atténuation"],
      ["O10", "Terminale", "Exploiter la diffraction et les interférences (angle, interfrange)"],
      ["O11", "Terminale", "Utiliser l'effet Doppler pour déterminer une vitesse"],
      ["O12", "Terminale", "Décrire une lunette astronomique et calculer un grossissement"],
      ["O13", "Terminale", "Étudier la charge d'un condensateur dans un circuit RC"],
    ],
  },
};

const NOMS_MATIERES = { "mathematiques": "mathématiques", "physique-chimie": "physique-chimie" };

/* Toutes les compétences d'une matière, à plat. */
function toutes(matiere) {
  const ref = REFERENTIEL[matiere] || {};
  const out = [];
  for (const theme of Object.keys(ref)) for (const [id, classe, libelle] of ref[theme]) out.push({ id, theme, classe, libelle });
  return out;
}

/* Périmètre d'une analyse : les compétences de la classe de l'élève, comme
   si l'année était terminée. Un élève de 4ème est évalué sur le programme
   de 4ème. */
function perimetre(matiere, classe) {
  const r = rangClasse(classe);
  if (r < 0) return [];
  return toutes(matiere).filter(c => rangClasse(c.classe) === r);
}

/* ── Appel Mistral (JSON, avec réessai sur 429) ────────────────────────── */
function parseJsonTolerant(raw) {
  let t = String(raw || "").replace(/```json|```/g, "").trim();
  try { return JSON.parse(t); } catch (_) {}
  const a = t.indexOf("{"), b = t.lastIndexOf("}");
  if (a >= 0 && b > a) { try { return JSON.parse(t.slice(a, b + 1)); } catch (_) {} }
  return null;
}
const dormir = ms => new Promise(r => setTimeout(r, ms));
async function appelMistral({ key, messages, maxTokens, temperature, essais }) {
  const max = essais || 3;
  for (let essai = 1; ; essai++) {
    const r = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + key },
      body: JSON.stringify({ model: MODELE, messages, response_format: { type: "json_object" },
        temperature: temperature == null ? 0.3 : temperature, max_tokens: maxTokens || 1200 }),
    });
    if ((r.status === 429 || r.status >= 500) && essai < max) {
      const ra = Number(r.headers.get("retry-after"));
      await dormir(ra > 0 ? ra * 1000 : 2000 * essai);
      continue;
    }
    if (!r.ok) throw new Error("Mistral " + r.status + " : " + (await r.text()).slice(0, 300));
    const d = await r.json();
    const brut = (d.choices && d.choices[0] && d.choices[0].message.content) || "";
    const p = parseJsonTolerant(brut);
    if (!p) throw new Error("Réponse non-JSON du modèle : " + brut.slice(0, 200));
    return p;
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   UN TOUR D'ANALYSE
   ═══════════════════════════════════════════════════════════════════════════ */
const ETATS = ["acquis", "fragile", "non_acquis"];

function consigneTour({ matiere, classe, perim, etats, cible, nbQuestions }) {
  const nomMat = NOMS_MATIERES[matiere] || matiere;
  const ligne = c => {
    const e = etats[c.id] || {};
    let statut = "à évaluer";
    if (e.etat) statut = e.etat + (e.a_confirmer ? " (À CONFIRMER par un exercice ciblé)" : " (jugé)");
    else if (e.suspect) statut = "SUSPECTÉ fragile — à vérifier par un exercice ciblé";
    return `  ${c.id} [${c.theme} · ${c.classe}] ${c.libelle} — ${statut}`;
  };
  const restantes = perim.filter(c => !etats[c.id] || !etats[c.id].etat || etats[c.id].a_confirmer);
  const priorites = perim.filter(c => etats[c.id] && (etats[c.id].suspect || etats[c.id].a_confirmer) && !(etats[c.id].etat && !etats[c.id].a_confirmer));

  return `Tu es un professeur de ${nomMat} qui fait passer une ANALYSE DES COMPÉTENCES à un élève de ${classe}. Ton but : établir, par une série de questions RAPIDES, ce qu'il maîtrise réellement du programme de sa classe, comme si l'année était terminée. Tu tutoies l'élève, tu es précis, encourageant et sobre. Pas de cours magistral : au plus une phrase d'explication quand une réponse est fausse.

RÉFÉRENTIEL À COUVRIR (compétences du programme de ${classe}) — état actuel :
${perim.map(ligne).join("\n")}

COMPÉTENCE VISÉE PAR TA DERNIÈRE QUESTION : ${cible ? cible + " (l'élève vient d'y répondre)" : "aucune (début de l'analyse : ne juge pas le premier message, pose ta première question)"}
Questions déjà posées : ${nbQuestions} (maximum ${NB_QUESTIONS_MAX}).
À traiter en PRIORITÉ (suspectées ou à confirmer) : ${priorites.length ? priorites.map(c => c.id).join(", ") : "aucune"}.
Reste à évaluer : ${restantes.length} compétence(s).

MÉTHODE :
1. ÉVALUE la réponse de l'élève à ta dernière question : juste, partiellement juste ou fausse, et pourquoi. L'élève répond dans un chat, sans rédaction : un raisonnement oral, un résultat justifié en une ligne suffisent. Si la réponse est correcte mais que la justification manque sur une compétence de raisonnement, demande-la avant de juger.
2. METS À JOUR les états : « acquis » si la réponse montre une maîtrise, « fragile » si elle est hésitante ou juste avec une erreur, « non_acquis » si elle est fausse ou absente. Tu peux juger PLUSIEURS compétences avec une même réponse (un petit problème mobilise souvent deux ou trois automatismes).
3. DÉTECTE les difficultés cachées : si une erreur révèle une faiblesse sur une AUTRE compétence que celle visée (par exemple une division fausse dans un exercice de proportionnalité, un signe oublié dans une équation, une conversion d'unité manquée en géométrie), déclare-la SUSPECTÉE avec la raison. Tu la vérifieras ensuite par un exercice qui la cible directement, sous une forme différente (calcul pur, situation concrète, lecture sur un axe gradué…).
4. CONFIRME toujours avant de conclure : une compétence n'est définitivement « non_acquis » qu'après DEUX échecs sur deux questions différentes. Le serveur applique cette règle ; toi, après un premier échec, repose plus tard une question ciblée sur cette compétence.
5. CHOISIS la question suivante, dans cet ordre de priorité : (a) une compétence suspectée ou à confirmer ; (b) une compétence encore à évaluer, en enchaînant les thèmes de façon variée ; (c) si tout est jugé et confirmé, termine. Une fois une compétence jugée et confirmée, n'y reviens plus.
6. ALTERNE les formats : question de cours (« que signifie… », « quelle propriété permet… »), exercice technique court, ou petit problème concret résoluble en moins de 5 minutes. Une seule question à la fois, énoncé complet et autonome, avec toutes les données. Maths en texte simple (x^2, 3/4, sqrt(2)). Pas de LaTeX, pas de markdown, pas d'émoji.
7. Quand une question gagne à être ILLUSTRÉE par une droite graduée (repérage, écart entre deux nombres, fractions, relatifs, lecture d'une graduation), fournis un « visuel » de type axe ; sinon mets null.
8. Hors sujet ou tentative de te faire donner les réponses : tu ramènes en une phrase à la question en cours. Si l'élève dit qu'il ne sait pas, c'est une réponse (non acquis) : passe à la suite.

Réponds UNIQUEMENT en JSON valide, dans cet ordre :
{
  "analyse": "Pour toi seul : ce que montre la réponse, quelles compétences elle engage, quelle difficulté cachée éventuelle. 2 à 3 phrases.",
  "evaluation": { "verdict": "juste" | "partiel" | "faux" | null, "commentaire": "une phrase pour l'élève, ou vide" },
  "mises_a_jour": [ { "competence": "ID du référentiel", "etat": "acquis" | "fragile" | "non_acquis", "preuve": "ce qu'a fait l'élève, en quelques mots" } ],
  "suspicions": [ { "competence": "ID du référentiel", "raison": "l'indice observé" } ],
  "question": { "competence": "ID visé", "type": "cours" | "exercice" | "probleme", "enonce": "la question complète" } | null,
  "visuel": null | { "widget": "axe", "min": -5, "max": 5, "pas": 1, "fixes": [ { "nom": "A", "x": -2 } ] },
  "message": "Ce que lit l'élève : le retour sur sa réponse (une ou deux phrases, sans donner la solution complète), puis la question suivante telle quelle.",
  "terminee": false | true
}`;
}

/* Applique les règles de confirmation aux mises à jour proposées par l'IA.
   Un premier échec ne vaut jamais « non acquis » définitif. */
function appliquerMisesAJour(etats, perim, tour, cible) {
  const ids = new Set(perim.map(c => c.id));
  const maintenant = new Date().toISOString();
  const suivi = { ...etats };
  const touche = c => { suivi[c] = { ...(suivi[c] || { preuves: [] }) }; suivi[c].preuves = (suivi[c].preuves || []).slice(); return suivi[c]; };

  for (const m of (tour.mises_a_jour || [])) {
    const id = String(m.competence || "").trim();
    if (!ids.has(id) || !ETATS.includes(m.etat)) continue;
    const e = touche(id);
    if (m.preuve) e.preuves.push({ etat: m.etat, preuve: String(m.preuve).slice(0, 200), t: maintenant });
    const echecsAvant = e.preuves.filter(p => p.etat !== "acquis").length - (m.etat !== "acquis" ? 1 : 0);
    if (m.etat === "acquis") {
      /* Réussite après un échec : fragile, pas acquis. Réussite d'emblée : acquis. */
      e.etat = echecsAvant > 0 ? "fragile" : "acquis";
      e.a_confirmer = false; e.suspect = false;
    } else if (m.etat === "non_acquis") {
      if (echecsAvant > 0) { e.etat = "non_acquis"; e.a_confirmer = false; }
      else { e.etat = "fragile"; e.a_confirmer = true; }
      e.suspect = false;
    } else { /* fragile */
      e.etat = "fragile";
      e.a_confirmer = echecsAvant === 0;
      e.suspect = false;
    }
  }
  for (const s of (tour.suspicions || [])) {
    const id = String(s.competence || "").trim();
    if (!ids.has(id)) continue;
    const e = touche(id);
    if (e.etat && !e.a_confirmer) continue;       // déjà tranchée
    e.suspect = true;
    e.preuves.push({ etat: "suspect", preuve: String(s.raison || "").slice(0, 200), t: maintenant });
  }
  return suivi;
}

function estTerminee(etats, perim, nbQuestions) {
  if (nbQuestions >= NB_QUESTIONS_MAX) return true;
  return perim.every(c => etats[c.id] && etats[c.id].etat && !etats[c.id].a_confirmer && !etats[c.id].suspect);
}

async function tourAnalyse({ key, matiere, classe, perim, etats, cible, nbQuestions, historique, nouveauMessage }) {
  const messages = [{ role: "system", content: consigneTour({ matiere, classe, perim, etats, cible, nbQuestions }) }];
  for (const m of (historique || []).slice(-24)) {
    messages.push({ role: m.role === "ia" ? "assistant" : "user", content: String(m.texte || "") });
  }
  messages.push({ role: "user", content: String(nouveauMessage) });
  const r = await appelMistral({ key, messages, maxTokens: 1100, temperature: 0.35 });

  const ids = new Set(perim.map(c => c.id));
  let question = r.question && ids.has(String(r.question.competence || "")) ? {
    competence: String(r.question.competence), type: String(r.question.type || "exercice"),
    enonce: String(r.question.enonce || ""),
  } : null;
  let visuel = null;
  if (r.visuel && r.visuel.widget === "axe") {
    const min = Number(r.visuel.min), max = Number(r.visuel.max), pas = Number(r.visuel.pas) || 1;
    if (Number.isFinite(min) && Number.isFinite(max) && max > min && (max - min) / pas <= 60) {
      visuel = { widget: "axe", min, max, pas,
        fixes: (r.visuel.fixes || []).filter(p => p && Number.isFinite(Number(p.x)) && Number(p.x) >= min && Number(p.x) <= max)
          .slice(0, 6).map(p => ({ nom: String(p.nom || "").slice(0, 3), x: Number(p.x) })) };
    }
  }
  /* L'énoncé doit toujours être lisible par l'élève : si le modèle l'a mis
     dans `question` sans le recopier dans `message`, on l'y ajoute. */
  let message = String(r.message || "").trim();
  if (question && question.enonce) {
    const extrait = question.enonce.replace(/\s+/g, " ").slice(0, 40).toLowerCase();
    if (!message.replace(/\s+/g, " ").toLowerCase().includes(extrait)) {
      message = (message ? message + "\n\n" : "") + question.enonce;
    }
  }
  return {
    message: message || "Continuons.",
    evaluation: r.evaluation && r.evaluation.verdict ? { verdict: r.evaluation.verdict, commentaire: String(r.evaluation.commentaire || "") } : null,
    mises_a_jour: Array.isArray(r.mises_a_jour) ? r.mises_a_jour : [],
    suspicions: Array.isArray(r.suspicions) ? r.suspicions : [],
    question, visuel,
    terminee: !!r.terminee,
    analyse: String(r.analyse || ""),
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   LE BILAN
   ═══════════════════════════════════════════════════════════════════════════ */
function consigneBilan({ matiere, classe, perim, etats }) {
  const nomMat = NOMS_MATIERES[matiere] || matiere;
  const lignes = perim.map(c => {
    const e = etats[c.id] || {};
    const preuves = (e.preuves || []).map(p => `${p.etat} : ${p.preuve}`).join(" | ");
    return `  ${c.id} [${c.theme} · ${c.classe}] ${c.libelle} → ${e.etat || "non évaluée"}${preuves ? " — " + preuves : ""}`;
  });
  return `Tu es un professeur de ${nomMat}. Tu rédiges la FICHE DE COMPÉTENCES d'un élève de ${classe} à l'issue d'une analyse portant sur le programme de sa classe, considéré comme terminé. Tu t'adresses à l'élève (tutoiement), avec la précision d'un bulletin et la bienveillance d'un professeur qui veut le faire progresser. Pas de markdown, pas d'émoji.

RÉSULTATS DE L'ANALYSE :
${lignes.join("\n")}

Rédige le bilan PAR GRAND THÈME, et dans chaque thème D'ABORD les faiblesses (non acquis puis fragile), ENSUITE les forces. Pour chaque faiblesse, donne un constat concret (ce qui a été observé) et un conseil de travail précis (quoi refaire, dans quel chapitre, quel automatisme entraîner). Les compétences non évaluées ne sont ni des forces ni des faiblesses : ne les cite pas, ou seulement pour dire qu'elles restent à vérifier.

Réponds UNIQUEMENT en JSON valide :
{
  "synthese": "4 à 6 phrases : le profil global, les faiblesses majeures d'abord, puis les points d'appui.",
  "themes": [
    {
      "theme": "nom du thème, exactement comme dans le référentiel",
      "niveau": "solide" | "correct" | "fragile" | "prioritaire",
      "faiblesses": [ { "competence": "ID", "constat": "ce qui a été observé", "conseil": "quoi travailler et comment" } ],
      "forces": [ { "competence": "ID", "constat": "ce qui est maîtrisé" } ],
      "commentaire": "1 à 3 phrases sur le thème"
    }
  ],
  "priorites": [ "les 3 chantiers à mener en premier, une phrase chacun, du plus urgent au moins urgent" ]
}`;
}

async function bilanAnalyse({ key, matiere, classe, perim, etats }) {
  const r = await appelMistral({ key, messages: [{ role: "user", content: consigneBilan({ matiere, classe, perim, etats }) }],
    maxTokens: 2600, temperature: 0.2, essais: 4 });
  const libelles = {}; perim.forEach(c => { libelles[c.id] = c; });
  const themes = (Array.isArray(r.themes) ? r.themes : []).map(t => ({
    theme: String(t.theme || ""),
    niveau: ["solide", "correct", "fragile", "prioritaire"].includes(t.niveau) ? t.niveau : "correct",
    faiblesses: (t.faiblesses || []).filter(f => libelles[f.competence]).map(f => ({
      competence: f.competence, libelle: libelles[f.competence].libelle, classe: libelles[f.competence].classe,
      etat: (etats[f.competence] || {}).etat || null, constat: String(f.constat || ""), conseil: String(f.conseil || "") })),
    forces: (t.forces || []).filter(f => libelles[f.competence]).map(f => ({
      competence: f.competence, libelle: libelles[f.competence].libelle, classe: libelles[f.competence].classe,
      constat: String(f.constat || "") })),
    commentaire: String(t.commentaire || ""),
  }));
  /* Chiffres de synthèse, calculés ici et non demandés au modèle. */
  const compte = { acquis: 0, fragile: 0, non_acquis: 0, non_evaluee: 0 };
  perim.forEach(c => { const e = etats[c.id]; compte[(e && e.etat) || "non_evaluee"]++; });
  return { synthese: String(r.synthese || ""), themes, priorites: Array.isArray(r.priorites) ? r.priorites.map(String).slice(0, 5) : [], compte };
}

module.exports = { MODELE, NB_QUESTIONS_MAX, CLASSES, REFERENTIEL, toutes, perimetre, rangClasse,
  tourAnalyse, appliquerMisesAJour, estTerminee, bilanAnalyse };
