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

    (function loadThumbnails() {
      var path = "gallery/thumbs"
      for (var i = 1; i <= 10; i++) {
        $('.gallery').append('<img class="thumbs" src=' + path + '/image' + i + '.jpg ' + 'alt="Gallery Image">')
      }
    })();

});
