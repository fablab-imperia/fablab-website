
var clickHandler = function () {
  console.log('Click just happened');
};

var onDocumentLoaded = function() {
  var element = document.getElementById('themesel');
  element.addEventListener('click', clickHandler);
};

window.addEventListener('load', onDocumentLoaded);

