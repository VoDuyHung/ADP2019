$(document).ready(function() {
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        var heightHtop = $('.header-top').height();
        var paddingHtop = ($('.header-top').innerHeight() - heightHtop);
        var mainheight = heightHtop + paddingHtop;
        var heightheader = $('#header').height();

        if (scroll >= mainheight + 2) {
            $('#header').addClass("fixed-top");
            $('.banner-main').css("margin-top", heightheader);
            $('.banner-sub').css("margin-top", heightheader);
        } else {
            $('#header').removeClass("fixed-top");
            $('.banner-main').css("margin-top", "0px");
            $('.banner-sub').css("margin-top", "0px");
        }
    });
    //make menu for landing page
    //  var nav = $('nav[role="navigation"]');
    // nav.find('a').on('click', function () {
    //     var $el = $(this)
    //         id = $el.attr('href');
    //     $('html, body').animate({
    //         scrollTop: $(id).offset().top - 85
    //     }, 500);
    //   return false;
    // });
     $(function() {
        var url = window.location.pathname;
        var activePage = url.substring(url.lastIndexOf('/') + 1);
        $('#header li a').each(function() {
            var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1);
            if (activePage == linkPage) {
                $(this).closest('li').addClass('menu-active');
            }
        });
        $('.menu-has-children ul a').each(function(){
                var linkPage1 = this.href.substring(this.href.lastIndexOf('/') + 1);
                if(activePage == linkPage1){
                     $(this).parents().addClass('menu-active');
                }
            });
        })

    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 200
    });
    $('.banner-main-bg').owlCarousel({
        items: 1,
        nav: false,
        autoHeight: true,
        slideSpeed: 500,
        paginationSpeed: 500,
        dots: true,
        loop: true,
        autoplay: true,
        mouseDrag: true,
        autoplayTimeout: 5000,
    });
    $('.feedback-objects').owlCarousel({
        items: 1,
        nav: false,
        autoHeight: true,
        slideSpeed: 500,
        dots: true,
        loop: true,
        autoplay: true,
        mouseDrag: true,
        autoplayTimeout: 7000,
    });
    $('.logo-univer').owlCarousel({
        loop: true,
        responsiveClass: true,
        dots: true,
        autoplay: true,
        margin: 30,
        nav: false,
        autoHeight: true,
        // autoWidth:true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    });
    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: "0px" }, 1000);
        return false;
    });
    new WOW().init();
    
    // Initiate superfish on nav menu
    
    // Mobile Navigation
    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fas fa-bars"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fas fa-caret-down"></i>');

        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-caret-up fa-caret-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    // Smooth scroll for the menu and links with .scrollto classes
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();

                    if (!$('#header').hasClass('header-fixed')) {
                        top_space = top_space - 20;
                    }
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });

    //Datepicker
    $( ".date-pic" ).datepicker({
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: true,
        autoclose: true,
        format: 'dd/mm/yyyy',
        uiLibrary: 'bootstrap4'
    });
        $('[data-fancybox="images"]').fancybox({
        afterLoad : function(instance, current) {
            if ( current.width < 720 || current.height < 440 ) {
                current.width  = current.width;
                current.height = current.height;
            }
            else{
                current.width = 720;
                current.height = 440;
            }
        }
    });
});
    function initMap() {
        var uluru = {
            lat: 16.089957,
            lng: 108.217051
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
