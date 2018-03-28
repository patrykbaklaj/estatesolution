

import 'bootstrap';
import Popper from "popper.js/dist/popper-utils.js";


$(document).ready(function () {

    $(window).on('scroll', () => {
        if($(window).scrollTop() >= 100) {
            $('#nav').addClass('nav-white');
            $('#nav').addClass('box-shadow');
        } else {
            $('#nav').removeClass('nav-white');
            $('#nav').removeClass('box-shadow');
        };
    })

});
