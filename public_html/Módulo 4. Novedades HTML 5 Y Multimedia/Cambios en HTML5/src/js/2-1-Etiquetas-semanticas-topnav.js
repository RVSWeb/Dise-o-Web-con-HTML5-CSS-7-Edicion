/* 
 Created on : 20-ago-2019, 19:04:44
 Author     : Rad
 */


function menuDesplegable() {
  var x = document.getElementById('my-top-nav-responsive');
  
  if (x.className === 'top-nav') {
    x.className += ' responsive';
  } else {
    x.className = 'top-nav';
  }
}