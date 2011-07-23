$(document).ready(function() {

  var IFRAME_SOURCE = "feedback_widget.html";
  var IFRAME_OVERLAY_SOURCE = "overlay_page.html";
  var BASE_Z_INDEX = 10000;

  function injectWidgetLayout() {
    styleAttrs = {
      width: '275px',
      height: '275px',
      bottom: '0',
      right: '5px',
      position: 'fixed',
      outline: '0',
      border: '1px solid black',
      "z-index": BASE_Z_INDEX + 1,
      background: 'white'
    };
    var styleAttrsString = ''
    $.each(styleAttrs, function(k, v) {
       styleAttrsString += k + ':' + v + ';';
    });
    $('<iframe />', {
      id: 'widgetFrame',
      src: IFRAME_SOURCE,
      style: styleAttrsString
    }).appendTo($('body'));
  }

  /*
  function injectOverlayLayout() {
    styleAttrs = {
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: '0',
      left: '0',
      background: '#666',
      outline: '0',
      opacity: 0.4,
      "z-index": BASE_Z_INDEX
    };
    var styleAttrsString = ''
    $.each(styleAttrs, function(k, v) {
       styleAttrsString += k + ':' + v + ';';
    });
    $('<iframe />', {
      id: 'overlayFrame',
      src: IFRAME_OVERLAY_SOURCE,
      style: styleAttrsString,
    }).appendTo($('body'));
  }
  */

  function injectOverlayLayout() {
    var pane = $('<div class="overlay" id="pane"></div>');
    pane.appendTo($('body'));
    pane.css({
      position: 'fixed',
      top: '0%',
      left: '0%',
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      zIndex: '10000',
      opacity: 0.55
    });
  }

  injectWidgetLayout();
  injectOverlayLayout();
});
