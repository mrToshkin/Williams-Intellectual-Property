$(document).ready(function() {
  var navMenu = document.querySelector('.header__nav'),
      burger = document.querySelector('.burger'),
      widthTablet = window.matchMedia('(max-width: 1399px)'); // media query list

  burger.classList.remove('burger--nojs');

  function pageStarted() {
    if (widthTablet.matches) {
      $('.header__nav').addClass('header__nav--menu-closed');
    }
  };

  function checkWidth(e) {
    if (e.matches) {
      $('.header__nav').addClass('header__nav--menu-closed');
    }
    else {
      $('.header__nav').removeClass('header__nav--menu-closed'),
      $('.header__nav').removeClass('header__nav--menu-opened');
    }
  };

  widthTablet.addListener(checkWidth);
  pageStarted();
  /* svg4everybody(rawopts:{}); */

  $('.burger').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('burger--opened');
    $('.bg-mobile-menu').toggleClass('bg-mobile-menu--opened');
  });

  burger.addEventListener('click', function() {
    if (navMenu.classList.contains('header__nav--menu-closed')) {
      navMenu.classList.remove('header__nav--menu-closed');
      navMenu.classList.add('header__nav--menu-opened');
      $('.wrapper-parallax').height($('.bg-mobile-menu').height());
      $('.wrapper-parallax').css('overflow-y', 'hidden');
    } else {
      navMenu.classList.add('header__nav--menu-closed');
      navMenu.classList.remove('header__nav--menu-opened');
      $('.wrapper-parallax').removeAttr('style')
    }
  });
});