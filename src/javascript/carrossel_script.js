$(document).ready(function() {
    let currentIndex = 0;

    // Função para mover os slides (anterior ou próximo)
    function moveSlide(direction) {
        const slides = $('.carousel-item');
        const totalSlides = slides.length;
        
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

        $('.carousel-slide').css('transform', `translateX(-${currentIndex * 100}%)`);
    }

    moveSlide(0); 

    $('.prev').on('click', function() {
        moveSlide(-1); 
    });

    $('.next').on('click', function() {
        moveSlide(1);
    });
});
