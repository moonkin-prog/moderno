$(function(){
    
    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });
    
    $('.trends__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle()
    });

    $('.user-btn').on('click', function(){
        $('.header__buttons').toggleClass('active');
    });

    var mixer = mixitup('.catalog');

});