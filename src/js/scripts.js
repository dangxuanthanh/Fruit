$(document).ready(function () {
    checkIE();
    swiperInit();
    tabActive();
    tabActiveHome();
    tabActiveFruit();
    tabActiveLogin();
    toggleSupportClient();
    projectDetailSlide();
    productPromotionDetail();
    quantityNumber();
    showBackToTop();
});

$('.product-list').click(function () {
    $(".product-list").removeClass('click');

    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(250);
    } else {
        $this.parent().parent().find('li .product-list_inner').removeClass('show');
        $this.parent().parent().find('li .product-list_inner').slideUp(250);
        $this.toggleClass('click');
        $this.next().toggleClass('show');
        $this.next().slideToggle(250);
    }
});

$('.menu-dropdown').click(function (e) {
    e.preventDefault();
    $("i").removeClass('click');

    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .dropdown-inner').removeClass('show');
        $this.parent().parent().find('li .dropdown-inner').slideUp(350);
        $this.toggleClass('click');
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

$('.header_bars').click(function () {
    $(this).toggleClass("click");
    $('body').toggleClass('no-scroll');
    $('.menu_mobile').toggleClass("show");
    $('.overlay').toggleClass("show");
});
$('.Language-show').click(function () {
    $(this).toggleClass("click");
    $('.Language-hide').toggleClass("show");
});
$('.overlay').click(function () {
    $(this).toggleClass("click");
    $('body').toggleClass('no-scroll');
    $('.menu_mobile').toggleClass("show");
    $('.overlay').toggleClass("show");
});

$('.addtocart').click(function () {
    $('.drop-menu').toggleClass("show");
});

window.onload = function () {
    $(".mask, .modal-ads").addClass('active');
};
$('.mask, .close').click(function () {
    $(this).toggleClass("click");
    $('.mask').toggleClass("active");
    $('.modal-ads').toggleClass("active");
});

function swiperInit() {
    var homerSwiper = new Swiper(".home-banner .swiper-container", {
        // Optional parameters
        speed: 1205,
        slidesPerView: 1,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: ".home-banner-pagination",
            type: "bullets",
            clickable: "true"
        }
    });
    var brandSwiper = new Swiper(".block_product-detail-4 .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".block_product-detail-4 .nav-arrow-next",
            prevEl: ".block_product-detail-4 .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 5,
            },
            1440: {
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 5,
            },
        },
    });
    var brandSwiper = new Swiper(".block_s-2 .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".block_s-2 .nav-arrow-next",
            prevEl: ".block_s-2 .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1025: {
                slidesPerView: 5,
            },
            1440: {
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 5,
            },
        },
    });
    $(".trinity-item-swiper .swiper-container").each(function (index, element) {
        var $this = $(this);
        $this.addClass("instance-" + index);
        $this
            .parent()
            .find(".nav-arrow-prev")
            .addClass("btn-prev-" + index);
        $this
            .parent()
            .find(".nav-arrow-next")
            .addClass("btn-next-" + index);

        var productHomeTabswiper = new Swiper(".instance-" + index, {
            slidesPerColumn: 1,
            speed: 750,
            observer: true,
            spaceBetween: 20,
            observeParents: true,
            breakpointsInverse: true,
            breakpoints: {
                200: {
                    slidesPerView: 1,
                },
                375: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                769: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
            },
            navigation: {
                nextEl: ".btn-next-" + index,
                prevEl: ".btn-prev-" + index,
            },
        });
    });
    var brandSwiper = new Swiper(".block_s-4 .slide-fruit", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 5,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".block_s-4 .nav-arrow-next",
            prevEl: ".block_s-4 .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 2,
            },
        },
    });
    var brandSwiper = new Swiper(".block_s-5 .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".block_s-5 .nav-arrow-next",
            prevEl: ".block_s-5 .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            },
            1600: {
                slidesPerView: 4,
            },
        },
    });
}