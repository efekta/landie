$(document).ready(function(){
    // fixed header
    $(window).scroll(function() {
        if($(this).scrollTop() >= 50) {
            $('.header').addClass('fixed');
        }
        else{
            $('.header').removeClass('fixed');
        }
    });

    // mob menu
    $('.burger').on('click', function (e) {
        $('.header__nav').toggleClass('show');
        $('.burger').toggleClass('open');
    })
});
