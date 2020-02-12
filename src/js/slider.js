$(document).ready(function() {

  /* $('.review-item').removeAttr('style'); */

  $('.slider-reviews__items').slick({
    prevArrow: '.slider-reviews__nav--prev',
    nextArrow: '.slider-reviews__nav--next',
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  });
});