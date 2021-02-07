
var clickHandler = function () {
  console.log('Click just happened');
  // document.documentElement.style.setProperty('--primary-color', '225533');
  // document.documentElement.style.setProperty('--second-color', 'CF250E');
  // document.documentElement.style.setProperty('--third-color', '025b9f');
  // document.documentElement.style.setProperty('--background-semitransp-color', 'rgba(10,69,10,0.42');

  // document.documentElement.style.setProperty('--primary-linear-gradient', 'linear-gradient(180.55deg, #f18730 0.48%, #754207 99.52%)');
  // document.documentElement.style.setProperty('--background-linear-gradient', 'linear-gradient(180deg, #c9b171 -2.22%, #86571a 97.78%)');
};

var onDocumentLoaded = function() {
  var element = document.getElementById('themesel');
  element.addEventListener('click', clickHandler);
};

window.addEventListener('load', onDocumentLoaded);

 