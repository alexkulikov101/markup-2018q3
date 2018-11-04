var btn = document.querySelector('.burger-btn');
var mask = document.querySelector('.page-header__mask');
var list = document.querySelector('.header-nav__list');


btn.addEventListener('click', function(){
  mask.classList.toggle('is-active');
  list.classList.toggle('is-active');
});


$('.comments__slider').flickity({
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  wrapAround: true,
  autoPlay: false
});
