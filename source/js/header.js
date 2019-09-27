var mainNav = document.querySelector(".main-nav__list");
var navHead = document.querySelector(".page-header__nav-header");
var menubtn = document.querySelector(".menu-btn");

var slideIndex = 1;


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

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("reviews__item");
  var toggle = document.getElementsByClassName("slider__toggle");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i=0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for (i = 0; i < toggle.length; i++){
    toggle[i].className = toggle[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";

  toggle[slideIndex-1].className+= " active";
}
