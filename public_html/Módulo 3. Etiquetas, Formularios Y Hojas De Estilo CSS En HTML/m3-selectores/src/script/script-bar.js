/* 
 Created on : 08-ago-2019, 19:10:53
 Author     : Rad
 */
let navigation = document.querySelector(".navigation");
let bars = document.querySelector(".bars");

bars.onclick = function () {
  navigation.classList.toggle('show');
  bars.classList.toggle('active');
};
