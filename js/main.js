AOS.init();
// anime({
//     targets: '.arrow',
//     translateY: 100,
//     easing:'easeInOutSine',
//     loop:true,
//     direction: 'alternate',
//   });
  $(document).ready(function(){
        $('.slider-for').slick({
          accessibility:false,
          swipe : false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav',
          adaptiveHeight:true
        });
        $('.slider-nav').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: true,
          centerMode: true,
          focusOnSelect: true,
          vertical:true,
          
        });
    });
