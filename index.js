function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.classList.contains("responsive")) {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
}


var topnav;
var sticky;
function ready(){
  topnav = document.getElementById("myTopnav");
  sticky = topnav.offsetTop;                          
  window.onscroll = function() {navsticky()};
}

function navsticky() {
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky")                      
  } else {
    topnav.classList.remove("sticky");
    console.log("sticky");
  }
}
