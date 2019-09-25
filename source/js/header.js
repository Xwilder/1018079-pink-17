var mainNav = document.querySelector(".main-nav__list");
var navHead = document.querySelector(".page-header__nav-header");
var menubtn = document.querySelector(".menu-btn");


window.onload = function (evt) {
  evt.preventDefault();
  mainNav.classList.add("nav-close");
  navHead.classList.add("nav-hidden");
};

menubtn.addEventListener("click", function toggle (evt) {
  evt.preventDefault();
  menubtn.classList.toggle("btn-active");
  navHead.classList.toggle("nav-hidden");
  mainNav.classList.toggle("nav-close");
});
