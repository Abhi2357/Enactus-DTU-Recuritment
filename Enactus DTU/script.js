console.log("hi");
window.onscroll = function() {stickybar()};
var navbar = document.getElementById("navbar");
console.log(navbar);
navbar.classList.add("sticky");
var sticky = navbar.offsetTop;
function stickybar() {
    if (window.pageYOffset >= sticky) {
      // navbar.classList.add("sticky");
      console.log("add class");
     }
     else {
      //  console.log("remove class");
      // navbar.classList.remove("sticky");
    }
  }