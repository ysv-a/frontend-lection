document.addEventListener('DOMContentLoaded', init)

function init() {
    lazyloadInit()
    initFancybox()
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


function initFancybox()
{
    let load_fancybox = 0;
    document.querySelector('.gallery__grid').addEventListener('click', (event) => {
        if(load_fancybox === 0){
            event.preventDefault();
            const target = event.target
            if(target.nodeName === 'IMG'){
                load_fancybox = 1
                const parent = target.parentElement
                const clickUrl = parent.href

                const images = document.querySelectorAll('[data-fancybox="gallery"]')
                const res = Array.prototype.map.call(images, (item) => {
                    return {
                        src: item.href,
                        type: "image",
                    }
                })
                const startIndex = res.findIndex((item) => item.src === clickUrl)

                loadScript('https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js', true, () => {
                    Fancybox.show(res, {
                        startIndex: startIndex
                    });
                });
                loadStyle('https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css');
            }
        }
    })

}

function lazyloadInit() {
    if(document.querySelector('.lazy')){
        new LazyLoad({
            elements_selector: ".lazy"
        });
    }
}
