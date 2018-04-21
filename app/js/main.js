import 'bootstrap';
import Popper from "popper.js/dist/popper-utils.js";

$(document).ready(function () {


    if (window.location.href.indexOf('#') > 0) {
        $('body, html').stop().animate({
            scrollTop: $(window.location.hash).offset().top - 85
        }, 500)
    }

    // handle menu
    $(window).on('scroll', () => {
        if ($(window).scrollTop() >= 90) {
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

    //handle dropdown
    $("#navbarDropdown").on("mouseenter", () => {
        $(".dropdown-menu").stop().slideDown();
    });

    $("#navbarDropdown").on("mouseleave", () => {
        $(".dropdown-menu").stop().slideUp();
    });

    //    handle dropdown-click
    $('.dropdown-item').on('click', function (event) {
        var targetElement = $($(this)[0].hash);
        if (window.location.href.indexOf('#') > 0) {
            event.preventDefault();
            $('body, html').stop().animate({
                scrollTop: targetElement.offset().top - 85
            }, 500)
        }
    })


    // handle arrow TOP
    $('#arrow-top').on('click', () => {
        $('body, html').stop().animate({
            scrollTop: $('body').offset().top
        }, 1100)
    })

    //handle arrow Contact
    $('.arrow-down').on('click', () => {
        $('body, html').stop().animate({
            scrollTop: $('.to-scroll').offset().top - 120
        }, 700)
    });

});
