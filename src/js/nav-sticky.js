$(document).ready(function() {
  var stickyNavTop = $('.header__nav-catcher').offset().top;
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop(); 
			         
  if (scrollTop > stickyNavTop) { 
      $('.header__nav-catcher').addClass('header__nav--sticky');
      $('.icon-logo-changer').attr("srcset", "img/svg/logo-sticked.svg");
    } else {
      $('.header__nav-catcher').removeClass('header__nav--sticky');
      $('.icon-logo-changer').attr("srcset", "img/svg/logo.svg");
    }
  };
  
  stickyNav();
  $(window).scroll(function() {stickyNav();});

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