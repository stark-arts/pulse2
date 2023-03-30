$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/slide_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/slide_right.svg"></button>'
    });
  });