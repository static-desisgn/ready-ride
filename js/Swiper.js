// Swiper 1
var swiper1 = new Swiper(".rider-slide", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    speed: 6000,
    freeMode: true,
    freeModeMomentum: false,
    allowTouchMove: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});


// Swiper 2
var swiper2 = new Swiper(".rider-slide-2", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    speed: 6000,
    freeMode: true,
    freeModeMomentum: false,
    allowTouchMove: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
    },
});
