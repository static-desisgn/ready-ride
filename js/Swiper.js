
    // <!-- Initialize Swiper --> //
        var swiper1 = new Swiper(".rider-slide", {
            slidesPerView: 3,
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
        });

        var swiper2 = new Swiper(".rider-slide-2", {
            slidesPerView: 3,
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
        });