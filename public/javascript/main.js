'use strict'

$(document).ready(function() {

    // LANDING SCREEN
    var scrolled = false

    $('.landing-image').css('filter', 'grayscale(0%)');

    function animateHeader() {
        if (scrolled === true) {
            $('header').addClass('header-active').children().removeClass('logo-big');
        }
    }

    $(document).scroll(function() {
        scrolled = true
        animateHeader()
    });

    // GALLERY FUNCTIONALITY
    (function loadThumbnails() {
        var path = "gallery/thumbs"
        for (var i = 1; i <= 10; i++) {
            $('.gallery').append('<img class="thumbs" data-index="' + i + '" src=' + path + '/image' + i + '.jpg ' + 'alt="Gallery Image">')
        }
    })();

    $('.overlay').hide();

    $('.gallery').click(function() {
        $('.overlay').addClass('active').append('<img class="full-image" data-index="' + event.target.dataset.index + '" src="gallery/full/image' + event.target.dataset.index + '.jpg" alt="Gallery Image">').hide().fadeIn(650);
    });

    $('.close').click(function() {
        $('.full-image').remove();
        $('.overlay').removeClass('active');
        $('.overlay').hide();
    });

    // LEFT ARROW
    $('img.controls:nth-of-type(2)').click(function() {
        var currentIndex = $('.full-image').data('index');
        if (currentIndex === 1) {
            $('.full-image').remove();
            $('.overlay').removeClass('active');
            $('.overlay').hide();
        } else {
            $('.full-image').remove();
            $('.overlay').append('<img class="full-image" data-index="' + (currentIndex - 1) + '" src="gallery/full/image' + (currentIndex - 1) + '.jpg" alt="Gallery Image">');
        }
    });

    // RIGHT ARROW
    $('img.controls:nth-of-type(3)').click(function() {
        var currentIndex = $('.full-image').data('index');
        if (currentIndex === 10) {
            $('.full-image').remove();
            $('.overlay').removeClass('active');
            $('.overlay').hide();
        } else {
            $('.full-image').remove();
            $('.overlay').append('<img class="full-image" data-index="' + (currentIndex + 1) + '" src="gallery/full/image' + (currentIndex + 1) + '.jpg" alt="Gallery Image">');
        }
    });

    // EMAIL CAPTURE
    var socket = io.connect();
    console.log('Server connected to client!');
    $('form').submit(function() {
        var user = {}
        user.fullName = $("input[type='text']:nth-of-type(1)").val()
        user.email = $("input[type='text']:nth-of-type(2)").val()
        console.log(user);
        socket.emit('newUser', {user: user});
        return false
    });

    // DETECT iOS
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
        $('body').css({'background-image': "url('/images/body-bg-iphone.png')", 'background-attachment': 'inherit'});
        console.log('iPhone');
    } else {
        console.log('not iPhone');
    }

});
