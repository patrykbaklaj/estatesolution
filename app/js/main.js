import 'bootstrap';
import Popper from "popper.js/dist/popper-utils.js";


$(document).ready(function () {

    $(window).on('scroll', () => {
        if ($(window).scrollTop() >= 100) {
            $('#nav').addClass('nav-white');
            $('#nav').addClass('box-shadow');
            $('#nav .navbar-brand img').attr('src', './app/assets/images/estatesolution-logo-small.png');
        } else {
            $('#nav').removeClass('nav-white');
            $('#nav').removeClass('box-shadow');
            if (window.location.pathname == '/kontakt.html') {

                $('#nav .navbar-brand img').attr('src', './app/assets/images/estatesolution-logo-small-white.png');
            }
        };
    });

    $('#arrow-top').on('click', () => {
        $('body, html').stop().animate({
            scrollTop: $('body').offset().top
        }, 1100)
    })

});
