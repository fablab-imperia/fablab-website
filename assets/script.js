
/* var clickHandler = function () {
  console.log('Click just happened');
  document.documentElement.style.setProperty('--primary-color', '225533');
  document.documentElement.style.setProperty('--second-color', 'CF250E');
  document.documentElement.style.setProperty('--third-color', '025b9f');
  document.documentElement.style.setProperty('--background-semitransp-color', 'rgba(10,69,10,0.42');

  document.documentElement.style.setProperty('--primary-linear-gradient', 'linear-gradient(180.55deg, #f18730 0.48%, #754207 99.52%)');
  document.documentElement.style.setProperty('--background-linear-gradient', 'linear-gradient(180deg, #c9b171 -2.22%, #86571a 97.78%)');
}; */

// let summaryHover1=document.getElementById("labCard");

var onDocumentLoaded = function() {
  // var element = document.getElementById('themesel');
  // element.addEventListener('click', clickHandler);
  window.onscroll = function() {scrollFunction()};
};


function scrollFunction() {
  window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 200;  // > 0 has too much delay when scrolling back to top
    header.classList.toggle('scrolling-active', windowPosition);
  })
}

window.addEventListener('load', onDocumentLoaded);

 