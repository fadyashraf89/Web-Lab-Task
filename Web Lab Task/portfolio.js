$(document).ready(function () {
    const profilePicture = $('#profilePicture');
    const minScale = 0.80;

    $(window).scroll(function () {
        const scaleFactor = Math.max(minScale, 1 - $(window).scrollTop() * 0.001);
        profilePicture.css('transform', 'scale(' + scaleFactor + ')');

        if ($(window).scrollTop() > 100) {
            profilePicture.addClass('small');
        } else {
            profilePicture.removeClass('small');
        }
    });

    $('.scroll-link').click(function (e) {
        e.preventDefault();
        var targetId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetId).offset().top - $('header').outerHeight()
        }, {
            duration: 100,
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });

    $("#profilePicture").click(function () {
        $(this).toggleClass("transparent");
    });
});