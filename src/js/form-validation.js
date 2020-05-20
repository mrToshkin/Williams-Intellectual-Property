$(document).ready(function() {
  var formValidate = function() {
    $('form').each(function() {
      $(this).on('submit', function() {
        $(this).validate({
          rules: {
            name: 'required',
            lastname: 'required',
            phone: 'required',
            email: 'required',
            invention: 'required',
            provisional: 'required',
            utility: 'required',
            design: 'required',
            subject: 'required',
            textarea: 'required'
          },
          messages: {
            name: 'Enter correct name',
            lastname: 'Enter correct last name',
            phone: 'Enter correct phone number',
            email: 'Enter correct e-mail',
            subject: 'Enter correct subject',
            textarea: 'Enter correct subject'
          },
          errorPlacement: function (error, element) {
            element.attr('placeholder', error[0].outerText);
          }
        });
        if ($(this).valid()) {
          var wrap = $(this)[0].closest('.form__send');
          if (wrap) {
            $(wrap).siblings('.form__accepted').show();
            $(wrap).hide();
          }
        }
        return false;
      })
    });
  };
  formValidate();

  //----- click Ok for return form ---------//
  $('.form__button--ok').on('click', function(e) {
    e.preventDefault;
    $('.form__send').css('display', 'block');
    $('.form__accepted').css('display', 'none');
  });
});