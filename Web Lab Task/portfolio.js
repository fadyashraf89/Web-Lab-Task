document.addEventListener('DOMContentLoaded', function () {
    const profilePicture = document.getElementById('profilePicture');
    const minScale = 0.80;

    window.addEventListener('scroll', function () {
        const scaleFactor = Math.max(minScale, 1 - window.scrollY * 0.001);

        profilePicture.style.transform = `scale(${scaleFactor})`;

        if (window.scrollY > 100) {
            profilePicture.classList.add('small');
        } else {
            profilePicture.classList.remove('small');
        }
    });
});

$(document).ready(function () {
    // Smooth scroll to anchor links
    $('.scroll-link').click(function (e) {
        e.preventDefault();
        var targetId = $(this).attr('href');
        $('html, body').animate({
                scrollTop: $(targetId).offset().top - $('header').outerHeight()
            },
            {
                duration: 100,
            });
    });

    // Add scrolled class on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
});
