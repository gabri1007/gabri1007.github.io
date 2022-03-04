let txt = 'Gabriel Filaine';
let i = 0;
let speed = 140;

function typewriter() {
    if (i < txt.length) {
        document.getElementById('prenom').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }

}
typewriter();