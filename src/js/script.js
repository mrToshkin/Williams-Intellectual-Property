//-------menu--------//
var navMenu = document.querySelector('.header__nav');
var burger = document.querySelector('.burger');

navMenu.classList.remove('header__nav--menu-opened');
navMenu.classList.add('header__nav--menu-closed');
burger.classList.remove('burger--nojs');

burger.addEventListener("click", function() {
  if (navMenu.classList.contains("header__nav--menu-closed")) {
    navMenu.classList.remove("header__nav--menu-closed");
    navMenu.classList.add("header__nav--menu-opened");
  } else {
    navMenu.classList.add("header__nav--menu-closed");
    navMenu.classList.remove("header__nav--menu-opened");
  }
});

$('.burger').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('burger--opened');
});