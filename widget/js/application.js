$(function() {
  $('#controls').buttonset();
  $('button').button();
  $('#hideButton').hover(function() {
    $(this).css({
    });
  });
});




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

