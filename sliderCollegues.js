$(document).ready(function (){
    $('.collegues-slider-main').slick({
        mobileFirst: false,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: false,
        arrows: false,
        centerPadding: "10%",
        lazyLoad: "blazy",
        slidesToShow: 5,
        infinity: true,
        responsive:[{
            breakpoint: 1024,
            settings:{
                autoplay: true,
                pauseOnHover: false,
                arrows: false,
                centerPadding: "10%",
                slidesToShow: 3,
                waitForAnimate: false
            }
        },
            {
                breakpoint: 600,
                settings: {
                    autoplay: true,
                    pauseOnHover: false,
                    arrows: false,
                    centerPadding: "10%",
                    slidesToShow: 2,
                    waitForAnimate: false
                }
            }]
    })

    $('.collegues-slider-attach').slick({
        mobileFirst: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
        centerPadding: "10%",
        lazyLoad: "blazy",
        slidesToShow: 5,
        infinity: true,
        responsive:[{
            breakpoint: 1024,
            settings:{
                autoplay: true,
                pauseOnHover: false,
                arrows: false,
                centerPadding: "10%",
                slidesToShow: 3,
                waitForAnimate: false
            }
        },
            {
                breakpoint: 600,
                settings: {
                    autoplay: true,
                    pauseOnHover: false,
                    arrows: false,
                    centerPadding: "10%",
                    slidesToShow: 2,
                    waitForAnimate: false
                }
            }]
    })
})