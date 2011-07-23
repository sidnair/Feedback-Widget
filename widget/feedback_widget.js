$(document).ready(function() {

  var IFRAME_SOURCE = "feedback_widget.html";

  var overlayElements = {
  };

  var highlight, unHighlight, blackout, unBlackout;

  var markupTools = {
    highlight: [highlight, unHighlight],
    blackout: [blackout, unBlackout]
  };

  // TODO - maybe run some filtering here
  function runActiveMarkup(e) {
    markupTools[activeTool][0](e);
  }

  function runActiveUndoMarkup(e) {
    markupTools[activeTool][1](e);
  }

  function registerListeners() {
    var highlightableElements = [];
    var orSelector = highlightableElements.join(',');
    $(orSelector).hover(
      /* mouse over */ function(e) { runActiveMarkup(e) }, 
      /* mouse out */ function(e) { runActiveUndoMarkup(e) });

    //TODO: add click listeners

    // $.each(highlightableElements, function(i, name) { });
  }

  function injectLayout() {
    styleAttrs = {
      width: '250px',
      height: '255px',
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
