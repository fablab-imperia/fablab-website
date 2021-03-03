var onDocumentLoaded = function() {
    // var element = document.getElementById('themesel');
    // element.addEventListener('click', clickHandler);
    window.onscroll = function() {scrollFunction()};
  };
  
  
  function scrollFunction() {
    window.addEventListener('scroll', function () {
      let header = document.querySelector('header');
      let windowPosition = window.scrollY > 10;  // > 0 has too much delay when scrolling back to top
      header.classList.toggle('navbar-scrolling', windowPosition);
    })
  }
  
  window.addEventListener('load', onDocumentLoaded);
  