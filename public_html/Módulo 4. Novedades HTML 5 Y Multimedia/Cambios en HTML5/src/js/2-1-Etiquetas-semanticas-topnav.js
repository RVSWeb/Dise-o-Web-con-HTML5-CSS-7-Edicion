/* 
 Created on : 20-ago-2019, 19:04:44
 Author     : Rad
 */


function menuDesplegable() {
  var x = document.getElementById('myTopnav');
  
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}