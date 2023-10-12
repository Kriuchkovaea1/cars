const tabContent = document.querySelectorAll('.tabs__content-item');
const tabsItem = document.querySelectorAll('.tabs__btn-item');

tabsItem.forEach(function (el) {
    el.addEventListener('click', open);
})

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;
    tabsItem.forEach(function (item) {
        item.classList.remove('tabs__btn-item--active');
    })

    tabTarget.classList.add('tabs__btn-item--active');
    tabContent.forEach(function (item){
        item.classList.remove('tabs__content-item--active')
    });

    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

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