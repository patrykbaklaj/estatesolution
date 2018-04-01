import 'bootstrap';
import Popper from "popper.js/dist/popper-utils.js";


$(document).ready(function () {

    // handle menu
    $(window).on('scroll', () => {
        if ($(window).scrollTop() >= 100) {
            $('#nav').addClass('nav-white');
            $('#nav').addClass('box-shadow');
            $('#nav .navbar-brand img').attr('src', './app/assets/images/estatesolution-logo-small.png');
        } else {
            $('#nav').removeClass('nav-white');
            $('#nav').removeClass('box-shadow');
            if (window.location.pathname == '/estatesolution/kontakt.html') {

                $('#nav .navbar-brand img').attr('src', './app/assets/images/estatesolution-logo-small-white.png');
            }
        };
    });

    // handle arrow TOP
    $('#arrow-top').on('click', () => {
        $('body, html').stop().animate({
            scrollTop: $('body').offset().top
        }, 1100)
    })

    //handle arrow Contact
    $('.arrow-down').on('click', () => {
        console.log("first");
        $('body, html').stop().animate({
            scrollTop: $('.to-scroll').offset().top - 120
        }, 700)
    });

});
