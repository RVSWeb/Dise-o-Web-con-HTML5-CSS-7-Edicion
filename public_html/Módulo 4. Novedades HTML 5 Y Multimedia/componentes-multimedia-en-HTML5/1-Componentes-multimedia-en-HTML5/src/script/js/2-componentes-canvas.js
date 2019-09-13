/* 
 Created on : 13-sep-2019, 21:57:11
 Author     : Raul Vela
 */

var crearContexto2d = function (lienzo) {

  if (!lienzo) {
    return null;
  }

  if (!lienzo.getContext) {
    return null;
  }

  return lienzo.getContext('2d');
};

var pintarRectangulo = function (contexto2d) {
  if (!contexto2d) {
    return;
  }
  contexto2d.fillStyle = 'rgb(200,0,0)';
  contexto2d.fillRect(10, 10, 100, 100);
};

window.onload = function () {
  var lienzo = document.getElementById('lienzo-1');
  var contexto2d = crearContexto2d(lienzo);
  pintarRectangulo(contexto2d);
};