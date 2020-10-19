'use strict';

$(document).ready(function() {
  // code for parallax effect
  let stickyNavTop = $('.header__nav-catcher').offset().top;
  let stickyNav = function(){
    let scrollTop = $('.wrapper-parallax').scrollTop(); 
			         
    if (scrollTop > stickyNavTop) { 
      $('.header__nav-catcher').addClass('header__nav--sticky');
      $('.icon-logo-changer').attr("srcset", "img/svg/logo-sticked.svg");
      $('.header__nav--sticky').css('top', scrollTop + 'px');
      $('.nav__burger').css('top', scrollTop + 'px');
      $('.header__nav').css('top', scrollTop + 'px');
      $('.bg-mobile-menu').css('top', scrollTop + 'px');
    } else {
      $('.header__nav-catcher').removeClass('header__nav--sticky');
      $('.icon-logo-changer').attr("srcset", "img/svg/logo.svg");
    }
  };
  
  stickyNav();
  $('.wrapper-parallax').scroll(function() {stickyNav();});

  // accessibility submenu
  $('.js-target').on('focus', function(u){
    u.preventDefault;
    $('.submenu-absolute').addClass('submenu-absolute--js-visible')
  });
  $('.js-target').on('focusout', function(o){
    o.preventDefault;
    $('.submenu-absolute').removeClass('submenu-absolute--js-visible')
  });
});

/* // default code without parallax
  let stickyNavTop = $('.header__nav-catcher').offset().top;
  let stickyNav = function(){
    let scrollTop = $(window).scrollTop(); 
			         
    if (scrollTop > stickyNavTop) { 
      $('.header__nav-catcher').addClass('header__nav--sticky');
      $('.icon-logo-changer').attr("srcset", "img/svg/logo-sticked.svg");
    } else {
      $('.header__nav-catcher').removeClass('header__nav--sticky');
      $('.icon-logo-changer').attr("srcset", "img/svg/logo.svg");
    }
  };
  
  stickyNav();
  $(window).scroll(function() {stickyNav();}); */