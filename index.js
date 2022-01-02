/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/*
// When the user scrolls the page, execute myFunction
window.onscroll = function() {navsticky()};

// Get the navbar
var topnav = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = topnav.offsetTop;                          //EI LÖYDÄ offsetTop komentoa?

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navsticky() {
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky")                      //EI LÖYDÄ sticky classia?
  } else {
    topnav.classList.remove("sticky");
    console.log("sticky");
  }
}
*/