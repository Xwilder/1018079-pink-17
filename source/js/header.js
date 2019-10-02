var mainNav = document.querySelector(".main-nav__list");
var navHead = document.querySelector(".page-header__nav-header");
var menubtn = document.querySelector(".menu-btn");

var slideIndex = 1;

var touchstartX = 0;
var touchendX = 0;
var reviewsList = document.querySelector('.reviews__list');
var priceList =  document.querySelector('.price-table');

//раскрытие меню
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

//слайдер коментариев
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

reviewsList.addEventListener("touchstart", function(event) {
  touchstartX = event.changedTouches["0"].screenX;
}, );

reviewsList.addEventListener("touchend", function(event) {
  touchendX = event.changedTouches["0"].screenX;
  touchFunc();
}, );

function touchFunc() {
  if (touchendX < touchstartX) {
    n = 1;
    showSlides(slideIndex += n);
  }
  if (touchendX > touchstartX) {
    n = -1
    showSlides(slideIndex += n);
  }
  if (touchendX == touchstartX) {
    n = 0
    showSlides(slideIndex += n);
  }
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

//слайдер таблицы цен
priceList.addEventListener("touchstart", function(event) {
  touchstartX = event.changedTouches["0"].screenX;
  console.log(touchstartX);
}, );

priceList.addEventListener("touchend", function(event) {
  touchendX = event.changedTouches["0"].screenX;
  console.log(touchendX);
  priceTouchFunc();
}, );

function priceTouchFunc() {
  var table = document.getElementsByClassName("price-table");

  if (touchendX > touchstartX) {
    left = left - 180;
    table.style.left = left + 'px';
    console.log(left);
  }
  if (touchendX < touchstartX) {
    left = left + 180;
    table.style.left = left + 'px';
    console.log(left);
  }
  if (touchendX == touchstartX) {
    n = 0
    showSlides(slideIndex += n);
  }
}
