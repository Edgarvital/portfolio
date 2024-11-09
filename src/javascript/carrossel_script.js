$(document).ready(function() {
    let currentIndex = 0;

    // Função para mover os slides (anterior ou próximo)
    function moveSlide(direction) {
        const slides = $('.carousel-item');
        const totalSlides = slides.length;
        
        // Calculando o próximo índice, garantindo que seja um valor válido (circular)
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

        // Movendo o carrossel para o slide atual
        $('.carousel-slide').css('transform', `translateX(-${currentIndex * 100}%)`);
    }

    moveSlide(0); // Inicia o carrossel mostrando o primeiro slide

    // Função para alternar entre os itens do carrossel ao clicar nos botões de navegação
    $('.prev').on('click', function() {
        moveSlide(-1);  // Mover para o slide anterior
    });

    $('.next').on('click', function() {
        moveSlide(1);  // Mover para o próximo slide
    });
});
