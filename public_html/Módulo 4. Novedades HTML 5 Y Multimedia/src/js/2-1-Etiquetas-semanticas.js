/* 
 Created on : 20-ago-2019, 19:04:44
 Author     : Rad
 */

var x = document.getElementsByClassName('section-subtitle');

x[0].innerHTML = new Date().getDate()
        + "-" + new Date().getMonth()
        + "-" + new Date().getFullYear();

