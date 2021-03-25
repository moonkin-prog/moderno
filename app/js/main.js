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

    $('.info-tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.info-tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.info-tabs .tabs').find('.tab').removeClass('acitve');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });


    $('.settings__tabs .settings__tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.settings__tabs').find('.settings__tab-item').removeClass('active-tab').hide();
        $('.settings__tabs .settings__tabs-box').find('.settings__tab').removeClass('acitve');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });


    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle()
    });

    $('.user-btn').on('click', function() {
        $('.header__buttons').toggleClass('active');
    });

    var mixer = mixitup('.catalog');

});