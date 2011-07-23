(function() {

  var firstScriptElement = document.getElementsByTagName('script')[0] ||
      document.body.firstChild;

  function addScript(src) {
    var newScriptElement = document.createElement('script');
    newScriptElement.async = true;
    newScriptElement.src =
        ('https:' === document.location.protocol ? 'https://' : 'http://')
        + src;
    firstScriptElement.parentNode.insertBefore(newScriptElement,
        firstScriptElement);
  }

  function addCSS(src) {
    var newElement = document.createElement('link');
    newScriptElement.href =
        ('https:' === document.location.protocol ? 'https://' : 'http://')
        + src;
    firstScriptElement.parentNode.insertBefore(newScriptElement,
        firstScriptElement);
  }

  addScript('ajax.googleapis.com/ajax/libs/jquery/1/jquery.js');
  addScript('columbia.edu/~ssn2114/scripts/feedback_widget.js');
  addScript('columbia.edu/~ssn2114/scripts/injected_css.css');

})();
