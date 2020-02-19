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
});