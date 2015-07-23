jQuery(function () {
  // Hide URL field in image dialog.
  CKEDITOR.on('dialogDefinition', function (ev) {
      var dialogName = ev.data.name;
      var dialogDefinition = ev.data.definition;

      if (dialogName == 'image2') {
          var infoTab = dialogDefinition.getContents('info');
          infoTab.remove('src');
      }
  });

  // Hide image button from toolbar.
  CKEDITOR.on('instanceReady', function(e) {
    jQuery('.cke_button__image').parent().hide();
  });
});
