$(document).ready(function() {

  // var IFRAME_SOURCE = "feedback_widget.html";
  var IFRAME_CONTENT = '<!DOCTYPE html> <html>   <head>     <link href="css/ui-darkness/jquery-ui-1.8.14.custom.css" rel="stylesheet">     <link href="css/feedback_widget.css" rel="stylesheet">      <!--      <script src="js/jquery-1.5.1.min.js"></script>     <script src="js/jquery-ui-1.8.14.custom.min.js"></script>     <script src="js/application.js"></script>     -->   </head>   <body>     <div id="container">       <div id="title" class="section">         <div id="hideButton">&ndash;</div>         <h1>Send Feedback</h1>       </div>     <div class="section">       <form>         <div id="controls">           <input type="radio" id="highlight" name="radio" />           <label for="highlight">Highlight</label>                      <input type="radio" id="blackout" name="radio" checked="checked" />           <label for="blackout">Blackout</label>                     <input type="radio" id="annotate" name="radio" />           <label for="annotate">Annotate</label>         </div>       </form>     </div>       <div id="description" class="section">         <span>Please describe the problem:</span>         <div id="textAreaWrapper">           <textarea></textarea>         </div>       </div>       <div id="submitControls" class="section">         <span class="button" id="submit">           <button>Submit</button>         </span>       </div>     </div>   </body> </html>'
  var IFRAME_OVERLAY_SOURCE = "overlay_page.html";
  var BASE_Z_INDEX = 10000;

  function getFrameStyle(styleObj) {
    var styleAttrsString = '';
    $.each(styleObj, function(k, v) {
       styleAttrsString += k + ':' + v + ';';
    });
    return styleAttrsString;
  }

  function injectWidgetLayout() {
    var styleAttrsString = getFrameStyle({
      width: '275px',
      height: '275px', bottom: '0',
      right: '5px',
      position: 'fixed',
      outline: '0',
      'z-index': BASE_Z_INDEX + 1,
      background: 'white',
      border: 'none',
    });
    $('<div id="widgetFrame">' + IFRAME_CONTENT + '</div>')
        .appendTo($('body'));
    $('#controls').buttonset();
    $('button').button();
    $('#hideButton').hover(function() {
      $(this).css({
      });
    });
    /*
    $('<iframe />', {
      id: 'widgetFrame',
      src: IFRAME_SOURCE,
      style: styleAttrsString
    }).appendTo($('body'));
    */
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
    // for now, just reduce opacity...
    var OPACITY_MULTIPLIER = 0.6;
    function setOpacity(el, n) {
      $(el).css('opacity', n)
    }

    function getOpacity(el) {
      return $(el).css('opacity');
    }

    $('*', document.body).each(function(i, el) {
      setOpacity(el, getOpacity(el) * OPACITY_MULTIPLIER);
    });
    /*
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
    */
  }

  /*
  function injectInvisibleHtml() {
    var iframe = $('<iframe id="invisibleFrame"></iframe>');
    $('*').each(function(i, el) {
      var name = el.nodeName;
      if (name !== 'SCRIPT' && name !== 'LINK') {
        var newNode = $(document.createElement(name));
      }
    });
  }
  */

  var overlayElements = {
  };

  var highlight, unHighlight, blackout, unBlackout;

  function highlight() {
    $('<div></div>')
        .offset($(this).offset())
        .width($(this).widht())
        .height($(this).height());
  }

  function blackout(e, el) {
    el.addClass('focus');
  }

  function unBlackout() {
  }

  var markupTools = {
    highlight: [highlight, unHighlight],
    blackout: [blackout, unBlackout]
  };

  var activeTool = 'blackout';

  // TODO - maybe run some filtering here
  function runActiveMarkup(e, el) {
    markupTools[activeTool][0](e, el);
  }

  function runActiveUndoMarkup(e) {
    markupTools[activeTool][1](e, el);
  }

  function registerListeners() {
    var highlightableElements = ['h1'];
    var orSelector = highlightableElements.join(',');
    $(orSelector).hover(
      /* mouse over */ function(e) { runActiveMarkup(e, $(this)) }, 
      /* mouse out */ function(e) { runActiveUndoMarkup(e, $(this)) });

    //TODO: add click listeners

    // $.each(highlightableElements, function(i, name) { });
  }


  // injectInvisibleHtml();
  injectOverlayLayout();
  injectWidgetLayout();
  registerListeners();

});
