(function() {

  var firstScriptElement = document.getElementsByTagName('script')[0] ||
      document.body.firstChild;

  function addElement(src) {
    var newScriptElement = document.createElement('script');
    newScriptElement.async = true;
    newScriptElement.src =
        ('https:' === document.location.protocol ? 'https://' : 'http://')
        + src;
    firstScriptElement.parentNode.insertBefore(newScriptElement,
        firstScriptElement);
  }

  addElement('ajax.googleapis.com/ajax/libs/jquery/1/jquery.js');
  addElement('columbia.edu/~ssn2114/scripts/feedback_widget.js');

})();
