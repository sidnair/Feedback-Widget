(function() {

  var firstScriptElement = document.getElementsByTagName('script')[0] ||
      document.body.firstChild;

  function addScript(src) {
    var newScriptElement = document.createElement('script');
    newScriptElement.async = false;
    newScriptElement.src = src;
    newScriptElement.type = "text/javascript";
    firstScriptElement.parentNode.insertBefore(newScriptElement,
        firstScriptElement);
  }

  function addCSS(src) {
    var newElement = document.createElement('link');
    newElement.rel = "stylesheet";
    newElement.href = src;
    firstScriptElement.parentNode.insertBefore(newElement, firstScriptElement);
  }

  addScript('http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js');
  addScript('http://columbia.edu/~ssn2114/scripts/js/jquery-ui-1.8.14.custom.min.js');
  addScript('http://columbia.edu/~ssn2114/scripts/feedback_widget.js');


  addCSS('http://columbia.edu/~ssn2114/scripts/injected_css.css');
  addCSS('http://columbia.edu/~ssn2114/scripts/css/ui-darkness/jquery-ui-1.8.14.custom.css');
  addCSS('http://columbia.edu/~ssn2114/scripts/css/feedback_widget.css');

})();
