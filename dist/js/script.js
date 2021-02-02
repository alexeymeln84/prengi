$(document).ready(function(){
    $('.main-slider').slick({
        centerMode: true,
        dots: true,
        speed: 1000,
        infinite: true, 
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    
    $('.slider-solutions').slick({
        centerMode: true,
        dots: false,
        speed: 1000,
        infinite: true, 
        variableWidth: true,
        adaptiveHeight: true,
        autoplay: false,
        centerPadding: '15px',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    
    $('.solutions__list').on('click', 'li', function(){
        const lindex = $(this).index();
        $( ".slider-solutions" ).slick('slickGoTo', parseInt(lindex));
        $('.solutions__list li').removeClass('active');
        $(this).addClass('active');
    });

    $('.slider-solutions').on('afterChange', function(event, slick, currentSlide, nextSlide){
        const slideIndex = $(this).index();
        $('.solutions__list li').removeClass('active');
        $('.solutions__list li').eq(currentSlide).addClass('active')
      });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1500) {
          $('.pageup').fadeIn('slow');
        } else {
          $('.pageup').fadeOut('slow');
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 90) {
          $('.hamburger').fadeIn('slow');
        } else {
          $('.hamburger').fadeOut('slow');
        }
    });
});

const hamburger = document.querySelector('.hamburger'),
      closed = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closed.addEventListener('click', () => {
    menu.classList.remove('active');
});


$("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});