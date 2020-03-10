$(document).ready(function() {
  $(function() {
    var countFiles = 1,
        $body = $('body'),
        typeFileArea = ['txt', 'doc', 'docx', 'jpg', 'pdf'],
        countTypeFiles = typeFileArea.length;
  
    //create new element
    $body.on('click', '.file-upload label', function() {
      var wrapFiles = $('.file-upload'),
          newFileInput;
  
      countFiles = wrapFiles.data('count-files') + 1;
      wrapFiles.data('count-files', countFiles);

      newFileInput = 
        '<div class="one-file">'+
          '<input class="file-upload__input visually-hidden" name="file-'+countFiles+'" id="file-'+countFiles+'" type="file">'+
          '<label class="file-upload__button button" for="file-'+countFiles+'">'+
            '<span class="file-upload__button-text">Attach File</span>'+
          '</label>'+
          '<div class="file-upload__attached-file hide-btn">'+
            '<span class="attached-file__button-delete-file"></span>'+
            '<span class="attached-file__file-name"></span>'+
          '</div>'+
        '</div>';
      wrapFiles.prepend(newFileInput);
    });
  
    //show text file and check type file
    $body.on('change', 'input[type="file"]', function() {
      var $this = $(this),
          valText = $this.val(),
          fileName = valText.split(/(\\|\/)/g).pop(),
          fileItem = $this.siblings('.file-upload__attached-file'),
          beginSlice = fileName.lastIndexOf('.') + 1,
          typeFile = fileName.slice(beginSlice);
  
      fileItem.find('.attached-file__file-name').text(fileName);
      if (valText != '') {
        fileItem.removeClass('hide-btn');
        for (var i = 0; i < countTypeFiles; i++) {  
          if (typeFile == typeFileArea[i]) {
            $this.parent().addClass('has-mach');
          }
        }
      } else {
        fileItem.addClass('hide-btn');
      } 
      if (!$this.parent().hasClass('has-mach')) {
        $this.parent().addClass('error');
      }
    });
  
    //remove file
    $body.on('click', '.attached-file__button-delete-file', function() {
      var elem = $(this).closest('.one-file');
      elem.fadeOut(400);
      setTimeout(function() {
        elem.remove();
      }, 400);
    });
  });
});