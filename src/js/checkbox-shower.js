'use strict';

$(document).ready(function() {
  $('.form__input-checkbox--shower-block').change(function(){
    if($(this).is(":checked")) {
      $('#form__block--hiden').removeClass("form__block--hiden");
    } else {
      $('#form__block--hiden').addClass("form__block--hiden");
    }
  });
});