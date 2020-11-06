$(function () {
    $('.products-slider').slick({

        prevArrow: '<button class="slider-btn slider-btn-left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn-right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
        infinite: false,
    });

$('.questions-item-title').on('click', function(){
    $('.questions-item').removeClass('questions-item--active');
    $(this).parent().addClass('questions-item--active');
});

$('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontalling: true,
    sectionSelector: '.page-section',
    scrollOverflow: true,
    menu: '#header-nav',
    anchors:['top', 'products', 'benefits', 'specification', 'questions', 'contacts'],
});

$('.menu-btn').on('click', function(){
    $('.menu-btn').toggleClass('menu-btn-active');
    $('.menu-list').toggleClass('menu-list-active');
});

$('.menu-list-link').on('click', function(){
    $('.menu-btn').removeClass('menu-btn-active');
    $('.menu-list').removeClass('menu-list-active');
});

});