$(document).ready(function () {

    sliderRun(); // запускаем промо слайдер

    // Address visible
    if ($(".header-address__caption").length > 0) {
        $(".header-address__caption").click(function () {
            $("body").toggleClass("lock");
            $(this).toggleClass("active");
            $(".header-address__desc").toggleClass("active");
        });
    }

    // Main menu open
    if ($(".header__burger").length > 0) {
        $(".header__burger").click(function () {
            $(this).toggleClass("active");
            $(".menu").toggleClass("active");
            $(".menu__mobile").toggleClass("active");
        });
    }

    // Promo slider
    if ($(".promo__slick").length > 0) {
        $('.promo__slick').slick({
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            responsive: [
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    }
                }
            ]
        });
        $('.promo-arrow').click(function (event) {
            $(this).parents('.promo').find('.promo__slick').slick('slickNext');
            $(".progress-slider").html('<span></span>');
            $('.promo__slick--js').attr('data-step', 1);

        });
        $('.promo__slick').on('afterChange', function (event, slick, currentSlide) {
            productsliderinfo();
        });

        function productsliderinfo() {
            $('.promo__info-box').html("0" + $('.promo__slide').length);
        }
        productsliderinfo();
        $(".promo__slick").on('afterChange', function (event, slick, currentSlide) {
            var promonumber = (currentSlide + 1);
            $(".promo__info-number").html("0" + promonumber);
        });
    }

    // Promo slider
    if ($(".equipment__slick").length > 0) {
        $('.equipment__slick').slick({
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            responsive: [
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    }
                }
            ]
        });
        $('.equipment-arrow').click(function (event) {
            $(this).parents('.equipment').find('.equipment__slick').slick('slickNext');
        });
        $('.equipment__slick').on('afterChange', function (event, slick, currentSlide) {
            productsliderinfo();
        });

        function productsliderinfo() {
            $('.equipment__info-box').html("0" + $('.equipment__slide').length);
        }
        productsliderinfo();
        $(".equipment__slick").on('afterChange', function (event, slick, currentSlide) {
            var promonumber = (currentSlide + 1);
            $(".equipment__info-number").html("0" + promonumber);
        });
    }

    var swiperHome = $('.doctors__wrap');
    swiperHome.each(function () {
        var mySwiper = new Swiper(this, {
            slidesPerView: 3.6,
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: false,
            speed: 1000,
            iOSEdgeSwipeDetection: true,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                hide: false,
                dragSize: 20,
                snapOnRelease: false,
            },
            breakpoints: {
                370: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                760: {
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                },
                1010: {
                    slidesPerView: 2.6,
                    slidesPerGroup: 1,
                }
            }
        });
    });

    // Product tabs
    if ($(".services__tab").length > 0) {
        $(function () {
            $('.services__tabs').each(function () {
                $(this).find('.services__tab').each(function (i) {
                    $(this).click(function () {
                        $(this).addClass('active').siblings().removeClass('active').closest('.services__wrap').find('.services-top__block').removeClass('active').eq(i).addClass('active').closest('.services__wrap').find('.services__block').removeClass('active').eq(i).addClass('active');
                    });
                });
            });
        })
    }

    // calendar mask
    $('.datepicker-here').datepicker({
        onSelect: function (date, cellType, inst) {
            $(inst.el).parent().removeClass('input-field__error').addClass('input-field__ok');
            var myDatepicker = $(inst.el).datepicker().data('datepicker');
            myDatepicker.hide();
        }
    });

    // Select
    if ($("select").length > 0) {
        $('select').select2();
        $('b[role="presentation"]').hide();
        $('.select2-selection__arrow').append('<span></span>');
    }

    // Phone mask
    $(".phone-mask").mask("+7 (999)999-99-99");

    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var mapOptions = {
            zoom: 16,
            disableDefaultUI: true,
            center: new google.maps.LatLng(55.838196, 37.452319),

        };
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        markerImage = '/images/marker.svg';
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.838196, 37.452319),
            map: map,
            icon: markerImage
        });

        var info = new google.maps.InfoWindow({
            content: '<small>адрес клиники</small><p>Подольск, ул. Академика<br> Доллежаля д.4</p>'
        });

        marker.addListener("click", function () {
            info.open(map, marker);
        });
    }

    if ($(window).outerWidth() >= '1260') {
        const containerID = '#confidentiality-modal';
        const scrollbar = Scrollbar.init(document.querySelector(containerID), {
            damping: 0.1,
            alwaysShowTracks: true
        });
    }

    // Fancybox
    $(".footer__confidentiality").fancybox({
        "hideOnContentClick": false,
    });



    inView('.main-doctor__after').on('enter', function (event, isInView) {
        $('.main-doctor__after').addClass('active');
    }).on('exit', function (event, isInView) {
        $('.main-doctor__after').removeClass('active');
    });

    inView('.subscription__img img').on('enter', function (event, isInView) {
        $('.subscription__img img').addClass('active');
    }).on('exit', function (event, isInView) {
        $('.subscription__img img').removeClass('active');
    });

});

// timer slider
function sliderRun() {

    setInterval(function () {
        var step = parseInt($('.promo__slick--js').attr('data-step'));
        var widthPromoBtn = $(".progress-slider>span").width();
        var progressSliderWidth = $(".progress-slider").width();

        if (step < 101) {
            var linePercent = 100 - step;
            $(".progress-slider>span").css('transform', 'translateX(-' + linePercent + '%)');
            $('.promo-arrow__icon').attr('class', ' promo-arrow__icon c100 p' + step);
            $('.promo__slick--js').attr('data-step', step + 1);
        } else {
            $('.promo__slick--js').attr('data-step', 1);
            $('.slick-active .promo-arrow').click();
            $(".progress-slider").html('<span></span>');
        }

    }, 100);
}

