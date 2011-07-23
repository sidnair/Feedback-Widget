$(document).ready(function() {

  var IFRAME_SOURCE = "feedback_widget.html";

  function injectLayout() {
    styleAttrs = {
      width: '275px',
      height: '265px',
      bottom: '0',
      right: '5px',
      position: 'fixed',
      outline: '0',
      border: '1px solid black'
    };
    var styleAttrsString = ''
    $.each(styleAttrs, function(k, v) {
       styleAttrsString += k + ':' + v + ';';
    });
    $('<iframe />', {
      src: IFRAME_SOURCE,
      "z-index": '10004',
      style: styleAttrsString
    }).appendTo($('body'));

  }

  injectLayout();

});
