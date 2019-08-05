// Initialize Scroll
AOS.init({
    duration: 800,
    easing: 'slide'
});

// IIFE jQuery
(function ($) {

    'use strict';
    console.log('hi from jquery')

    // scrolling effects
    $(window).stellar({
        responsive: true,
        scrollProperty: 'scroll',
        horizontalScrolling: false,
        horizontalOffset: 0,
        verticalOffset: 0,
        parallaxBackgrounds: true,
        parallaxElements: true,
        hideDistantElements: false
    });

    // loading scrollax function to DOM
    $.Scrollax();

    // hight manipulation function
    var fullHeight = function () {
        $('js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('js-fullheight').css('height', $(window).height());
        });
    }
    // loading fullHeight to DOM
    fullHeight();

    // loader function
    var loader = function () {
        setTimeout(function () {
            console.log("from loader")
            if ($('#hair-sallon-loader').length > 0) {
                $('#hair-sallon-loader').removeClass('show')
            }
        }, 1000);
    }
    // loading loader function on DOM
    loader();

    // loading scrolling effect plugin after loader
    $.Scrollax();

    // carousel
    var carousel = function () {
        $('.home-slider').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            margin: 0,
            nav: false,
            navText: ["<span class='ion-md-arrow-black></span>", "<span class='ion-chevron-right'></span>"],
            autopalyHoverPause: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false
                }
            }
        });
        $('.working-carousel').owlCarousel({
            autoplay: true,
            loop: true,
            items: 1,
            nav: true,
            navText: ["<span class='ion-md-arrow-black></span>", "<span class='ion-chevron-right'></span>"],
            stagePadding: 0,
            center: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 0
                },
                600: {
                    items: 3,
                    stagePadding: 50
                },
                1000: {
                    items: 3,
                    stagePadding: 100
                }
            }

        });
    };

    // loading carousel function on DOM
    carousel();
})(jQuery);

// adding animate on scroll
var animateOnScroll = function () {
    console.log("animateOnScroll")
    var i = 0;
    $(this.element);
    $('.ftco-animate').waypoint(function (direction) {
        if(direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
            i++;
            $(this.element).addClass('item-animate');
            setTimeout(function() {
                $('body .ftco-animate.item-animate').each(function (e) {
                    var element = $(this);
                    setTimeout(function() {
                        var animateEffect = element.data('animate-effect');
                        if(animateEffect === 'fadeIn') {
                            element.addClass('fadeIn ftco-animated');
                        } else if (animateEffect === 'fadeInLeft') {
                            element.addClass('fadeInLeft ftco-animated');
                        } else if (animateEffect === 'fadeInRight') {
                            element.addClass('fadeInRight ftco-animated')
                        } else {
                            element.addClass('fadeInUp ftco-animated');
                        }
                        element.removeClass('item-animate');
                    }, e * 50, 'easeInOutExpo');
                });
            }, 100)
        }
    }, {offset: '95%'});
};

// loading animateOnScroll on DOM
animateOnScroll();

// navbar toggle
var navbarToggle = function () {
    $('.navbar-toggler').click(function () {
        $('.navbar-colapse').toggle();
    });
};

// loading navbarToggle function on DOM
navbarToggle();

// adding active links 
var activeLinks = function () {
    var path = window.location.href;
    $('li a').each(function () {
        if (this.href === path) {
            $(this).addClass('active')
        }
    });
};

// loading activeLinks function on DOM
activeLinks();
    // });
