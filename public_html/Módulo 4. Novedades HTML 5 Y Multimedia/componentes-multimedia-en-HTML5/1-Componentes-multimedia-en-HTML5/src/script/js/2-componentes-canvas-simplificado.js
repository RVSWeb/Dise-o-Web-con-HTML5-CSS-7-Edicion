/* 
 Created on : 13-sep-2019, 21:57:11
 Author     : Raul Vela
 */

/**
 * 
 * @param {type} lienzo
 * @return {unresolved}
 */
var crearContexto2d = function (lienzo) {
  return lienzo.getContext('2d');
};

/**
 * 
 * 
 * @param {type} contexto2d
 * @return {undefined}
 */
var pintarRectangulo = function (contexto2d) {
  contexto2d.fillStyle = 'rgb(255,5,5)';
  contexto2d.fillRect(10, 10, 278, 180);
};


/**
 * Lanza el evento 
 * 
 * @return {undefined}
 */
window.onload = function () {
  var lienzo = document.getElementById('lienzo-1');
  var contexto2d = crearContexto2d(lienzo);
  pintarRectangulo(contexto2d);
};
