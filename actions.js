var isButtonsShown = false;

/* THEME COLORS
bg
bg_bis
shadows * from bg_bis
title
srch_txt * from title
title_shadow
footer
*/

/* theme vert de base */
var thm_green = ["#18534F", "#1D6E68", "#76B2AE", "#FEEAA1", "#2e4240", "#D6955B", "#171F26"];

/* theme bleu */
var thm_blue = ["#1C2942", "#3B556D", "#496c8c", "#5FC2BA", "#FFFFFF", "#d2cccc", "#0B162C"];

/* theme violet */
var thm_purple = ["#96527A", "#CD6889", "#d58ba3", "#FE895E", "#4c291c", "#F99F72", "#5B374D"];

/* theme orange */
var thm_orange = ["#FD9D4E", "#EED281", "#e8d394", "#F5432D", "#7e2e25", "#F3F3AE", "#010122"];

/* theme exotic */
var thm_exotic = ["#59D189", "#A7F578", "#e8d394", "#FF9179", "#7e2e25", "#FFD472", "#ED584C"];

function changeTheme(theme) {
    document.documentElement.style.setProperty('--bg', theme[0]);
    document.documentElement.style.setProperty('--bgbis', theme[1]);
    document.documentElement.style.setProperty('--shadow', theme[2]);
    document.documentElement.style.setProperty('--title', theme[3]);
    document.documentElement.style.setProperty('--srch-txt', theme[4]);
    document.documentElement.style.setProperty('--title-shadow', theme[5]);
    document.documentElement.style.setProperty('--footer', theme[6]);
}

function randomTheme() {
    document.documentElement.style.setProperty('--bg', couleurHexa());
    document.documentElement.style.setProperty('--bgbis', couleurHexa());
    document.documentElement.style.setProperty('--shadow', couleurHexa());
    document.documentElement.style.setProperty('--title', couleurHexa());
    document.documentElement.style.setProperty('--srch-txt', couleurHexa());
    document.documentElement.style.setProperty('--title-shadow', couleurHexa());
    document.documentElement.style.setProperty('--footer', couleurHexa());
}

function genererCouleurAleatoire() {
    // Générer un nombre aléatoire entre 0 et 255
    const aleatoire = Math.floor(Math.random() * 256);
    
    // Convertir le nombre en hexadécimal et ajouter un zéro devant si nécessaire
    const couleurHex = aleatoire.toString(16).padStart(2, '0');
    
    return couleurHex;
}

function couleurHexa() {
    // Appeler la fonction pour chaque composant (R, G, B)
    const rouge = genererCouleurAleatoire();
    const vert = genererCouleurAleatoire();
    const bleu = genererCouleurAleatoire();
    
    // Combiner les composants en une seule chaîne
    return `#${rouge}${vert}${bleu}`;
}

function setup() {
    document.getElementById("maRecherche").focus();
}