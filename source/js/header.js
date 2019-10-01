var mainNav = document.querySelector(".main-nav__list");
var navHead = document.querySelector(".page-header__nav-header");
var menubtn = document.querySelector(".menu-btn");

var slideIndex = 1;

var touchstartX = 0;
var touchendX = 0;
var reviewsList = document.querySelector('.reviews__item');

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

  reviewsList.addEventListener("touchstart", function(event) {
    touchstartX = event.changedTouches["0"].screenX;
    console.log(touchstartX);
  }, );

  reviewsList.addEventListener("touchend", function(event) {
    touchendX = event.changedTouches["0"].screenX;
    console.log(touchendX);
    handleGesure();
  }, );

  function handleGesure() {
    if (touchendX < touchstartX) {
      showSlides(slideIndex += 1);
    }
    if (touchendX > touchstartX) {
      showSlides(slideIndex += -1);
    }
    if (touchendX == touchstartX) {
      showSlides(slideIndex += 0);
    }
  }

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
console.log(touchstartX);
console.log(touchendX);
