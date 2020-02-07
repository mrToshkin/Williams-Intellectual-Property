var navMenu = document.querySelector('.header__nav'),
    burger = document.querySelector('.burger'),
    mediaQueryList = window.matchMedia('(max-width: 1399px)');

burger.classList.remove('burger--nojs');

function pageStarted() {
  if (mediaQueryList.matches) {
    $('.header__nav').addClass('header__nav--menu-closed');
  }
}

function checkWidth(e) {
  if (e.matches) {
    $('.header__nav').addClass('header__nav--menu-closed');
  }
  else {
    $('.header__nav').removeClass('header__nav--menu-closed'),
    $('.header__nav').removeClass('header__nav--menu-opened');
  }
}

mediaQueryList.addListener(checkWidth);
pageStarted();

burger.addEventListener('click', function() {
  if (navMenu.classList.contains('header__nav--menu-closed')) {
    navMenu.classList.remove('header__nav--menu-closed');
    navMenu.classList.add('header__nav--menu-opened');
  } else {
    navMenu.classList.add('header__nav--menu-closed');
    navMenu.classList.remove('header__nav--menu-opened');
  }
});

$('.burger').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('burger--opened');
});

$(document).ready(/* function() {
  checkWidth(true);
  $(window).resize(function() {
    checkWidth(false);
    });
} */);