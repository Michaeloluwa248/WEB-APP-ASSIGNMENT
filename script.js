  $(document).ready(function (){
    document.querySelector('body').classList.add("loaded")  
    console.log("Welcome to michael school of language");
     /* begin begin Back to Top button  */
(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 10) {
      window.scrollBy(0, -1000);
      setTimeout(backToTop, 200);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
/* end begin Back to Top button  */
  })

 