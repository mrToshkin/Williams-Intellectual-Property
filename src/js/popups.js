$(document).ready(function() {
  var popupLink = function() {
    $('.js-popup-link').magnificPopup({
      showCloseBtn: false,
      removalDelay: 200,
      mainClass: 'mfp-fade'
    });

    $(document).on('click', '.popup__js-close', function(){
      $.magnificPopup.close();
    });
  };
  popupLink();
});