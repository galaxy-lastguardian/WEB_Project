import $ from 'jquery';
import '../slick/slick';
import '../slick/slick.css';

$(document).ready(function(){
    $('.reviews-slider').slick({
        prevArrow: $('#PrevSlide'),
        nextArrow: $('#NextSlide'),
        adaptiveHeight: true,
        centerMode: false,
        lazyLoad: "blazy",
        infinite: true,
        speed: 550,
        fade: true,
        cssEase: 'linear'
    });

    $('.reviews-slider').on('init reInit', function (event, slick) {
        $('.current-slide').text('0' + 1 + ' ');
    })
    $('.reviews-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('.current-slide').text('0' + (currentSlide + 1) + ' ');
    })
});

