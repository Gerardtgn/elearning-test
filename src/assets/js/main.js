(function($){
	"use strict";

    // Header Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){  
            $('.navbar-area').addClass("is-sticky");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Others Option Responsive JS
    $(".others-option-for-responsive .dot-menu").on("click", function(){
        $(".others-option-for-responsive .container .container").toggleClass("active");
    });
    
    // Button Hover JS
    $(function() {
        $('.default-btn')
        .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        })
        .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        });
    });

    // Mean Menu
    $('.mean-menu').meanmenu({
        meanScreenWidth: "1199"
    });

    // TweenMax JS
    $('.main-banner, .banner-section, .banner-wrapper-area, .banner-wrapper').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.banner-shape1, .banner-shape2, .banner-shape3, .banner-shape4, .banner-shape5, .banner-shape6, .banner-shape7, .banner-shape8, .banner-shape9, .banner-shape10, .banner-shape11, .banner-shape12, .banner-shape13').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });
    $('.about-area, .about-area-two, .about-area-three').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.shape1, .shape2, .shape3, .shape4, .shape6, .shape7, .shape8, .shape9, .shape10, .shape11, .shape12, .shape13, .shape14, .shape15, .shape16, .shape17, .shape18, .shape19, .shape20, .shape21, .shape22, .shape23').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });
    $('.funfacts-and-feedback-area').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.shape1, .shape2, .shape3, .shape4, .shape6, .shape7, .shape8, .shape9, .shape10, .shape11, .shape12, .shape13, .shape14, .shape15, .shape16, .shape17, .shape18, .shape19, .shape20, .shape21, .shape22, .shape23').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });
    $('.get-instant-courses-area').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.shape1, .shape2, .shape3, .shape4, .shape6, .shape7, .shape8, .shape9, .shape10, .shape11, .shape12, .shape13, .shape14, .shape15, .shape16, .shape17, .shape18, .shape19, .shape20, .shape21, .shape22, .shape23').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });
    $('.view-all-courses-area, .view-all-courses-area-two').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.shape1, .shape2, .shape3, .shape4, .shape6, .shape7, .shape8, .shape9, .shape10, .shape11, .shape12, .shape13, .shape14, .shape15, .shape16, .shape17, .shape18, .shape19, .shape20, .shape21, .shape22, .shape23').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });
    $('.premium-access-area').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.shape1, .shape2, .shape3, .shape4, .shape6, .shape7, .shape8, .shape9, .shape10, .shape11, .shape12, .shape13, .shape14, .shape15, .shape16, .shape17, .shape18, .shape19, .shape20, .shape21, .shape22, .shape23').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });
    $('.slogan-area').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.shape1, .shape2, .shape3, .shape4, .shape6, .shape7, .shape8, .shape9, .shape10, .shape11, .shape12, .shape13, .shape14, .shape15, .shape16, .shape17, .shape18, .shape19, .shape20, .shape21, .shape22, .shape23').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });
    $('.subscribe-area').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.shape1, .shape2, .shape3, .shape4, .shape6, .shape7, .shape8, .shape9, .shape10, .shape11, .shape12, .shape13, .shape14, .shape15, .shape16, .shape17, .shape18, .shape19, .shape20, .shape21, .shape22, .shape23').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });
    $('.feedback-area').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.shape1, .shape2, .shape3, .shape4, .shape6, .shape7, .shape8, .shape9, .shape10, .shape11, .shape12, .shape13, .shape14, .shape15, .shape16, .shape17, .shape18, .shape19, .shape20, .shape21, .shape22, .shape23').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });
    $('.success-story-area').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.shape1, .shape2, .shape3, .shape4, .shape6, .shape7, .shape8, .shape9, .shape10, .shape11, .shape12, .shape13, .shape14, .shape15, .shape16, .shape17, .shape18, .shape19, .shape20, .shape21, .shape22, .shape23').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });
    $('.health-coaching-banner-area').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.health-coaching-shape2, .health-coaching-shape4, .health-coaching-shape5, .health-coaching-shape6, .health-coaching-shape7').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });
    $('.experience-area').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.experience-shape1, .experience-shape2').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });
    $('.kindergarten-main-banner').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.kindergarten-banner-image .image img').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });

    // Banner Animation
    window.onload = function() {
        var timeline = new TimelineMax();
        timeline.from(".main-banner-content, .main-banner-courses-list, .banner-wrapper-content, .banner-wrapper-image, .banner-content, .banner-image", 1, {y:60},0)
    }

    // Feedback Slides
    $('.feedback-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        animateOut: 'fadeOut',
        autoHeight: true,
        items: 1,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    });

    // Isotop Js
    var $grid = $('.blog-items, .courses-items').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // Use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
    });

    // Count Time 
    function makeTimer() {
        var endTime = new Date("September 20, 2030 17:00:00 PDT");			
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() { makeTimer(); }, 0);

    // MixItUp Shorting
    try {
        var mixer = mixitup('.shorting', {
            controls: {
                toggleDefault: 'none'
            }
        });
    } catch (err) {}
    
    // Sidebar Sticky
    $('.courses-sidebar-sticky').stickySidebar({
        topSpacing: 90,
        bottomSpacing: 90
    });

    // Testimonials Slides
    $('.testimonials-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        animateOut: 'fadeOut',
        autoHeight: true,
        items: 1,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    });

    // Feedback Slides Two
    $('.feedback-slides-two').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    // FAQ Accordion
    $(function() {
        $('.accordion').find('.accordion-title').on('click', function(){
            // Adds Active Class
            $(this).toggleClass('active');
            // Expand or Collapse This Panel
            $(this).next().slideToggle('fast');
            // Hide The Other Panels
            $('.accordion-content').not($(this).next()).slideUp('fast');
            // Removes Active Class From Other Titles
            $('.accordion-title').not($(this)).removeClass('active');		
        });
    });
    
    // Article Image Slides
    $('.article-image-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        animateOut: 'fadeOut',
        items: 1,
        navText: [
            "<i class='flaticon-chevron'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ]
    });

    // Odometer JS
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // Courses Slides
    $('.courses-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Advisor Slides
    $('.advisor-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

    // Popup Image
    $('.popup-btn').magnificPopup({
        type: 'image',
        gallery: {
            enabled:true
        }
    });

    // Tabs
    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('.tab ul.tabs li a').on('click', function (g) {
            var tab = $(this).closest('.tab'), 
            index = $(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab-content').find('div.tabs-item').not('div.tabs-item:eq(' + index + ')').slideUp();
            tab.find('.tab-content').find('div.tabs-item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });
    })(jQuery);
    
    // Advisor Slides Two
    $('.advisor-slides-two').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Price Range Slider JS
    $(".js-range-of-price").ionRangeSlider({
        type: "double",
        drag_interval: true,
        min_interval: null,
        max_interval: null,
    });

    // Input Plus & Minus Number JS
    $('.input-counter').each(function() {
        var spinner = jQuery(this),
        input = spinner.find('input[type="text"]'),
        btnUp = spinner.find('.plus-btn'),
        btnDown = spinner.find('.minus-btn'),
        min = input.attr('min'),
        max = input.attr('max');
        
        btnUp.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
    
    // Load More
    $(function () {
        $(".courses-section .col-lg-4").slice(0, 6).show();
        $("body").on('click touchstart', '.load-more-btn .load-more', function (e) {
            e.preventDefault();
            $(".courses-section .col-lg-4:hidden").slice(0, 3).slideDown();
            if ($(".courses-section .col-lg-4:hidden").length == 0) {
                $(".load-more-btn").css('display', 'none');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1000);
        });
    });

    // Nice Select JS
    $('select').niceSelect();

    // Popup Video
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Blog Slides
    $('.blog-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Feedback Slides Three
    $('.feedback-slides-three').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 0,
        navText: [
            "<i class='flaticon-chevron'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1550: {
                items: 5
            }
        }
    });

    // Services Slides
    $('.services-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='flaticon-chevron'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Courses Slides Two
    $('.courses-slides-two').owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='flaticon-chevron'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });
    function callbackFunction (resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub(){
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub(){
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    // AJAX MailChimp
    $(".newsletter-form").ajaxChimp({
        url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // Go to Top
    $(function(){
        // Scroll Event
        $(window).on('scroll', function(){
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.go-top').addClass('active');
            if (scrolled < 300) $('.go-top').removeClass('active');
        });  
        // Click Event
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" },  500);
        });
    });

    // Newsletter Modal JS
    /*$(".btn-yes").on('click', function () {
        document.cookie = "enter=true";
        $("#newsletter-modal").hide();
        $("body").removeClass('modal-open');
    });
    if(getCookie('enter') != 'true' ){
        setTimeout(function(){
            $("body").addClass('modal-open');
            $("#newsletter-modal").show();
        }, 500)
    }
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }*/

    // Gym Banner Slides
    $(function() {
        $('.gym-banner-slides').owlCarousel({
            items: 1,
            nav: true,
            loop: true,
            dots: false,
            autoplay: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            autoplayHoverPause: true,
            onInitialized: sliderCounter, // When the plugin has initialized.
            onTranslated: sliderCounter, // When the translation of the stage has finished.
            navText: [
                "<i class='flaticon-chevron'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
            responsive: {
                0: {
                    autoHeight: true
                },
                576: {
                    autoHeight: false
                },
                768: {
                    autoHeight: false
                },
                992: {
                    autoHeight: false
                }
            }
        });
        function sliderCounter(event) {
            var element = event.target; // DOM element, in this example .owl-carousel
            var items = event.item.count; // Number of items
            var item = event.item.index * 1; // Position of the current item

            // it loop is true then reset counter from 1
            if (item > items) {
                item = item - items
            }
            $(element).parent().find('.sliderCounter').html("0" + item + "/0" + items)
        }
    });

    // Gym Feedback Slides
    $('.gym-feedback-slides').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        autoHeight: true,
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-chevron'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ]
    });

    // Trainer Slides
    $('.trainer-slides').owlCarousel({
        nav: false,
        margin: 30,
        loop: true,
        dots: false,
        autoplay: false,
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-chevron'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1550: {
                items: 5
            }
        }
    });

    // WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       20,          // distance to the element when triggering the animation (default is 0)
				mobile:       true, // trigger animations on mobile devices (default is true)
				live:         true,       // act on asynchronously loaded content (default is true)
			});
			wow.init();
        }
	});

    // Testimonials Slides
    $('.testimonials-slides-two').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    });

    // Partner Slides
    $('.partner-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

    /*new-js*/

    // Coaching Feedback Slides
    $('.coaching-feedback-slides').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    });

    // Motivation Feedback Slides
    $('.motivation-feedback-slides').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    });

    // Motivation Events Slides
    $('.motivation-events-slides').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    });

    // Kitchen Feedback Slides
    $('.kitchen-feedback-slides').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    });


    /* Start "Online Art Demo" & "Single Instructor Demo" "JS" */

    // Banner Animation
    window.onload = function() {
        var timeline = new TimelineMax();
        timeline.from(".online-art-banner-image, .online-art-banner-content, .online-art-banner-wrap-image, .instructor-banner-content, .instructor-banner-image", 1, {y:60},0)
    }

    // TweenMax JS
    $('.oa-video-box').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.oa-video-shape-1, .oa-video-shape-2, .oa-video-shape-3').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });

    // OA Feedback Slides
    $('.oa-feedback-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        animateOut: 'fadeOut',
        autoHeight: true,
        items: 1,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    });

    // Instructor Feedback Slides
    $('.instructor-feedback-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    /* End "Online Art Demo" & "Single Instructor Demo" "JS" */

    /* College Website */

    // cw-partner
    $('.cw-partner').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,

        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 4,
                margin: 50,
            }
        }
    })

    // cw-courses-slider
    $('.cw-courses-slider').owlCarousel({
        loop: false,
        margin: 24,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],

        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            992:{
                items: 3,
            },
            1200:{
                items: 4,
            }
        }
    })

    // cw-courses-slider
    $('.cw-feedback-slider').owlCarousel({
        loop: false,
        margin: 24,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],

        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 1
            },
            992:{
                items: 2,
            },
            1200:{
                items: 1,
            },
            1400:{
                items: 2,
            }
        }
    })

    // cw-college-staff-slider
    $('.cw-college-staff-slider').owlCarousel({
        loop: false,
        margin: 24,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            992:{
                items: 3,
            },
            1200:{
                items: 4,
            }
        }
    })
    /* End College Website */

    /* Online Photography Home */
    // op-partner
    $('.op-partner').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,

        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 5,
                margin: 50,
            }
        }
    })

    // op-feedback-slides
    $('.op-feedback-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,  
        items: 1,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    });

    // Isotop Js
    var $grid = $('.op-gallery-items').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // Use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
    });

    //
    $('.op-gallery-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
    /* End Online Photography Home */

}(jQuery));