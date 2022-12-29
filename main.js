import { listaAnimes } from "./listaAnimes.js";

let btns = document.querySelectorAll('.btnAnime');
let audio = document.createElement("audio");

btns.forEach(element => {
    element.addEventListener('click', () => {
        audio.pause();
        audio.src = `./sounds/${escolheMusicaAleatoriaDeUmAnime(element.id)}`;
        audio.play();
    })
});

function escolheMusicaAleatoriaDeUmAnime(nomeAnime) {
    for (let anime of listaAnimes) {
        if (anime.nome === nomeAnime) {
            return anime.musicas[geraNumeroAleatorio(anime.musicas.length - 1)];
        }
    }
}

function geraNumeroAleatorio(max) {
    const numero = Math.floor(Math.random() * (max + 1))
    return numero;
}