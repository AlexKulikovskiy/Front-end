$(document).ready(function() {
    $(".hamburger").click(function() {
      $(".stick").toggleClass(function () {
        return $(this).is('.open, .close') ? 'open close' : 'open';
      });
    });
  });

  const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu__close');

  hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  });

  closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
  });