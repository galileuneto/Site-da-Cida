const menuIcon = document.getElementById("menuIcon");
const content = document.querySelector(".content");
var tela = document.getElementById("tela");
const content1 = document.querySelector("#content1")

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("menu-open");
});

var navBar = document.querySelector(".nav-bar");
var showNavBar = false;

function abrir() {
  showNavBar = !showNavBar;
  if (showNavBar == true) {
    navBar.style.left = "0";
    navBar.style.animationName = "showNavBar";
    menuIcon.style.right = "10px";
    content.style.filter = "blur(2px)";
  } else {
    navBar.style.left = "-120px";
    navBar.style.animationName = "";
    menuIcon.style.right = "-40px";
    content.style.filter = '';
  }
}


function fechar() {
    if (showNavBar) {
        showNavBar = true;
        abrir();
    }
}

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 768 && showNavBar) {
    showNavBar = true;
    abrir();
  }
});
