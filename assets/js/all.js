"use strict";

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
$(window).resize(function () {
  if ($(window).width() > 768) {
    $('#multiCollapseExample1').collapse('show');
  } else {
    $('#multiCollapseExample1').collapse('hide');
  }
});
$('.navbar-collapse .navbar-list li .back').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});
$('.navbar-collapse .navbar-list li .cart').on('click', function () {
  $('.navbar-collapse').collapse('hide');
  $('#cartModal').modal('show');
});
//# sourceMappingURL=all.js.map
