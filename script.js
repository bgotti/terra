//JavaScript
//Menu Hamburger

const menuSlider = function() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', function() {
    menu.classList.toggle('menu__active');
    hamburger.classList.toggle('toggle');
  });

};

menuSlider();
