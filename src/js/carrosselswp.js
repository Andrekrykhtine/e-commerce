const swiper = new Swiper('.swiper', {
    loop: true, // Ativa o looping infinito
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000, // Tempo entre as transições
    },
});

