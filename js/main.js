$(function(){

    $('.why__slider').slick({
        arrows: false,
        dots: true
    })
    $('.menu__btn').on('click', function () {
        $('.menu').toggleClass('active')
    })
    $(document).ready(function(){
        $(".menu__list").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });


});