(function($) {
    'use strict';

    /* Navbar scroll*/
    $('.navbar-nav ul li a').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top)
            }, 1000);
            $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
            return false;
        }
    });

    /* Full page scroll*/
    if ($('#pagepiling').length > 0) {

        $('#pagepiling').pagepiling({
            scrollingSpeed: 280,
            navigation: false,
            menu: '.navbar-nav',
            anchors: ['home', 'about', 'experience', 'skills', 'projects', 'partners', 'testimonials', 'news', 'contact'],
            afterRender: function(anchorLink, index) {
                NavbarColor();

            },
            afterLoad: function(anchorLink, index) {
                $('.pp-section .intro').removeClass('animate');
                $('.active .intro').addClass('animate');
                NavbarColor();
            }
        });

        function NavbarColor() {
            if ($('.pp-section.active').hasClass('navbar-is-white')) {
                $('.navbar-desctop').addClass('navbar-white');
                $('.progress-nav').addClass('progress-nav-white');
                $('.navbar-bottom').addClass('navbar-bottom-white');
            } else {
                $('.navbar-desctop').removeClass('navbar-white');
                $('.progress-nav').removeClass('progress-nav-white');
                $('.navbar-bottom').removeClass('navbar-bottom-white');
            }
        }
    }

    /* Navbar mobile */
    $('.navbar-nav-mobile li a').on('click', function() {
        $('body').removeClass('menu-is-open');
        $('.navbar-nav-mobile li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

})(jQuery);