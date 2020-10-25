$(function () {

 



    // ============== menu ========================================
    $(".header__burger").on("click", function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });







    // ============== bg ========================================
    function ibg() {

        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }

    ibg();

    // ============== skroll ========================================
    // $('a[href^="#"]').click(function () {
    //     var target = $(this).attr('href');
    //     $('html, body').animate({
    //         scrollTop: $(target).offset().top
    //     }, 1150);
    // });
    // ============== projects ========================================
    // $(' .projects__all').on('click', function () {
    //     $('.projects__content-box').addClass('projects__all');
    //     $('.projects__category').on('click', function () {
    //         $('.projects__content-box').removeClass('projects__all');
    //     });
    // });
    // ============== menu ========================================


    // function burgerMenu(selector) {
    //     let menu = $(selector);
    //     let button = menu.find('.burger__menu-btn');
    //     let links = menu.find('.burger__menu-list');
    //     let overlay = menu.find('.burger__menu-overplay');

    //     button.on('click', (e) => {
    //         e.preventDefault();
    //         toggleMenu();
    //     });

    //     links.on('click', () => toggleMenu());
    //     overlay.on('click', () => toggleMenu());

    //     function toggleMenu() {
    //         menu.toggleClass('burger__menu-active');
    //         if (menu.hasClass('burger__menu-active')) {
    //             $('body').css('overflow', 'hidden');
    //         } else {
    //             $('body').css('overflow', 'visible');
    //         }
    //     }
    // }
    // burgerMenu('.burger__menu');
    // const menu = document.querySelector("svg");
    // menu.addEventListener("click", morph);

    // function morph() {
    //     menu.classList.toggle("open");
    // }

    

    $(".product-page__wish-button").on("click", function (event) {
        $('.product-page__wish-button').toggleClass('active');
    });

    // ============== slick ========================================
    $('.slider__inner').slick({
        dots: true,
        infinite: false,
        speed: 1000,
        cssEase: 'linear',
        autoplaySpeed: 2000,
    });
    $('.slider-active').slick({
        slidesToShow: 1,
        dots: false,
        arrows: true,
        appendArrows: $('.portfolio__details-nav__arrow'),
        fade: true,
        infinite: false,
        swipe:false,
        draggable:false,
        // cssEase: 'linear',
        touchMove:false,
        swipeToSlide:false,
    });
    $('.portfolio__details-slider__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.portfolio__details-slider__nav',
    });

    $('.portfolio__details-slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.portfolio__details-slider__for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
    });
    // ============== mixitup ========================================
    var mixer = mixitup('.products__inner, .product-page__inner');
    var mixer = mixitup(containerEl);
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.products__items'
        },
        animation: {
            duration: 900
        }
    });
});