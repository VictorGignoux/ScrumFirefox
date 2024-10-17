var isButtonsShown = false;

/*var audios = ["audios/lescheu.mp3"];

var links = ["lescheu"];

const audio = new Audio("audios/lescheu_1.mp3");*/

const scrum = "341935233539371";
const abc = "azertyuiopqsdfghjklmwxcvbn";
const droptable = 5;

/* THEME COLORS
var theme = ["bg","bg_bis","shadows * from bg_bis","title","srch_txt * from title","title_shadow","footer"]*/

/* theme vert de base */
var thm_green = ["#18534F", "#1D6E68", "#76B2AE", "#FEEAA1", "#2e4240", "#D6955B", "#171F26"];

/* theme bleu */
var thm_blue = ["#1C2942", "#3B556D", "#496c8c", "#5FC2BA", "#FFFFFF", "#d2cccc", "#0B162C"];

/* theme violet */
var thm_purple = ["#96527A", "#CD6889", "#d58ba3", "#971854", "#4c291c", "#f89cf6", "#5B374D"];

/* theme orange */
var thm_orange = ["#FD9D4E", "#EED281", "#e8d394", "#F5432D", "#7e2e25", "#F3F3AE", "#010122"];

/* theme exotic */
var thm_exotic = ["#59D189", "#A7F578", "#e8d394", "#FF9179", "#7e2e25", "#FFD472", "#ED584C"];

/* theme connected */
var thm_connect = ["#313131", "#444444", "#ef2b31", "#e95a26", "#663320", "#e9ab7d", "#4F0002"];

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

function activeInput(input) {
    document.getElementById(input).focus();
}

// acivation de sons au clic des liens
/*for(let i = 0; i < links.lenght;i++)
{
    document.getElementById(links[i]).addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        document.getElementById(audios[i]).play(); // Joue le son
    });
}*/

function checkInput() {
    activeInput('mdp');
    let input = document.getElementById('mdp');
    input.addEventListener('input', function() {
        if(input.value == 'gestion'){
            window.location = '../GestWeb/index.html';
        }
        else{
            if(qwack(input.value)){
                input.style.backgroundColor = "#16af1c";
                window.location.href = 'masterMode.html';
            }
            else{
                input.style.backgroundColor = "#af1816";
            }
        }
    });
}

function qwack(blop){
    if(blop.length == droptable){
        let i = 0;
        let ship = false;
        while(!ship && i < blop.length){
            ship = blop[i] == abc[scrum[i * 3] * scrum[i * 3 + 1] - scrum[i * 3 + 2]];
            i++;
        }
        return ship;
    }
    else{
        return false;
    }
}

function activeListener(){
    document.getElementById('')
}