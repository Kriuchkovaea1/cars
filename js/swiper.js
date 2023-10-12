const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },
    effect: "fade",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});