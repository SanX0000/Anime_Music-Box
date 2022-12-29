"use strict";

var _listaAnimes = require("./listaAnimes.js");

var btns = document.querySelectorAll('.btnAnime');
var audio = document.createElement("audio");
btns.forEach(function (element) {
  element.addEventListener('click', function () {
    audio.pause();
    audio.src = "./sounds/".concat(escolheMusicaAleatoriaDeUmAnime(element.id));
    audio.play();
  });
});

function escolheMusicaAleatoriaDeUmAnime(nomeAnime) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _listaAnimes.listaAnimes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var anime = _step.value;

      if (anime.nome === nomeAnime) {
        return anime.musicas[geraNumeroAleatorio(anime.musicas.length - 1)];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function geraNumeroAleatorio(max) {
  var numero = Math.floor(Math.random() * (max + 1));
  return numero;
}
//# sourceMappingURL=main.dev.js.map
