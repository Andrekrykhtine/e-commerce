// script.js
const swiper = new Swiper('.swiper', {
    // Loop infinito
    loop: true,
    
    // Navegação por setas
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Paginação
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // Autoplay
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    // Efeito de transição
    effect: 'slide',
    
    // Responsivo
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});
