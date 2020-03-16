$(document).ready(function() {

  /* $('.review-item').removeAttr('style'); */

  $('.slider-reviews__items').slick({
    prevArrow: '.slider-reviews__nav--prev',
    nextArrow: '.slider-reviews__nav--next',
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  $('.slider-latest-news__items').slick({
    prevArrow: '.slider-latest-news__nav--prev',
    nextArrow: '.slider-latest-news__nav--next',
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1399,
        settings: "unslick"
      }
    ]
  });

  $('.slider__items').slick({
    prevArrow: '.slider__nav--prev',
    nextArrow: '.slider__nav--next',
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});