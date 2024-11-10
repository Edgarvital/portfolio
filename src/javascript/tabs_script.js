$(document).ready(function () {
    $('.tab-button').click(function () {
        $('.tab-button').removeClass('active');
        $('.tab-content').removeClass('active').hide();

        $(this).addClass('active');
        const targetTab = $('#' + $(this).data('tab'));

        // Exibe com um pequeno atraso para a transição funcionar corretamente
        targetTab.show(0, function () {
            $(this).addClass('active');
        });
    });
});
