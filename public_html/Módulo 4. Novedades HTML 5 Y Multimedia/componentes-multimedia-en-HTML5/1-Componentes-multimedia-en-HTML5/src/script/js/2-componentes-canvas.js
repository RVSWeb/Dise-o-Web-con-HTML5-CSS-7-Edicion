/* 
 Created on : 13-sep-2019, 21:57:11
 Author     : Raul Vela
 */

/**
 * Creamos un objeto de tipo 'canvas' 
 * con un contexto de renderizado de dos dimensiones
 * 
 * getContext - Retorna un contexto de dibujo en el lienzo, 
 *              o null si el identificador del contexto no está soportado.
 * 
 * @param {type} object - lienzo
 * @return {unresolved} - creación de un objeto "CanvasRenderingContext2D" 
 *                        que representa un contexto de renderizado de 
 *                        dos dimensiones.
 */
var crearContexto2d = function (lienzo) {
  if (!lienzo) {
    return null;
  }
//     objeto.propiedad
  if (!lienzo.getContext) {
    return null;
  }
  return lienzo.getContext('2d',
          {antialias: false,
            depth: false});
};

/**
 * Funcion que establece propiedades al objeto contexto2d
 * 
 * @param {type} contexto2d
 * @return {undefined}
 */
var pintarRectangulo = function (contexto2d) {
  if (!contexto2d) {
// devuelve el flujo de ejecucion
    return;
  }
  contexto2d.fillStyle = 'rgba(250,0,0,0.5)';
  contexto2d.fillRect(10, 10, 278, 180);
};


/**
 * Funcion anonima lanza el evento onload
 */
//objeto.evento = function()
window.onload = function () {
// obtenemos el elemento HTML5
  var lienzo = document.getElementById('lienzo-1');
//  
  var contexto2d = crearContexto2d(lienzo);
//  Lanzar funcion
  pintarRectangulo(contexto2d);
};