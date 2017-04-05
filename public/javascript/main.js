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
        $('.gallery').append('<img class="thumbs" data-index="' + i + '" src=' + path + '/image' + i + '.jpg ' + 'alt="Gallery Image">')
      }
    })();

    // GALLERY FUNCTIONALITY
    $('.overlay').hide();
    $('.gallery').click(function(){
      $('.overlay').addClass('active').append('<img class="full-image" data-index="' + event.target.dataset.index + '" src="gallery/full/image' + event.target.dataset.index + '.jpg" alt="Gallery Image">').hide().fadeIn(1500);
    });

    $('.close').click(function(){
      $('.full-image').remove();
      $('.overlay').removeClass('active');
    });

    $('img.controls:first-of-type').click(function(){
      console.log('left clicked');
    });

    $('img.controls:nth-of-type(2)').click(function(){
      console.log('right clicked');
    });

});
