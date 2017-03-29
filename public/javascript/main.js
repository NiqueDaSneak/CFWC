'use strict'

$(document).ready(function() {
    var scrolled = false

    $('.landing-image').css('filter', 'grayscale(0%)');

    function animateHeader() {
        if (scrolled === true) {
            $('header').addClass('header-active').children().removeClass('logo-big');
            // $('.landing-image').fadeOut(500);
        }
    }

    $(document).scroll(function() {
        scrolled = true
        animateHeader()
    });
});
