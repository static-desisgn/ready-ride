// Swiper 1
var swiper1 = new Swiper(".rider-slide", {
    spaceBetween: 24,
    loop: true,
    speed: 5000,
    freeMode: true,
    freeModeMomentum: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false,
    },
    allowTouchMove: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});


// Swiper 2
var swiper2 = new Swiper(".rider-slide-2", {
    spaceBetween: 24,
    loop: true,
    speed: 5000,
    freeMode: true,
    freeModeMomentum: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    allowTouchMove: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});
