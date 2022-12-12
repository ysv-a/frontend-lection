document.addEventListener('DOMContentLoaded', init)

function init() {
    sliderInit()
    lazyloadInit()
}

function sliderInit() {
    new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });
}


function lazyloadInit() {
    if(document.querySelector('.lazy')){
        new LazyLoad({
            elements_selector: ".lazy"
        });
    }
}
