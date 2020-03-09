AOS.init();
// anime({
//     targets: '.arrow',
//     translateY: 100,
//     easing:'easeInOutSine',
//     loop:true,
//     direction: 'alternate',
//   });
// function getOS() {
//   var userAgent = window.navigator.userAgent,
//       platform = window.navigator.platform,
//       macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
//       windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
//       iosPlatforms = ['iPhone', 'iPad', 'iPod'],
//       os = null;

//   if (macosPlatforms.indexOf(platform) !== -1) {
//     os = 'Mac OS';
//   } else if (iosPlatforms.indexOf(platform) !== -1) {
//     os = 'iOS';
//   } else if (windowsPlatforms.indexOf(platform) !== -1) {
//     os = 'Windows';
//   } else if (/Android/.test(userAgent)) {
//     os = 'Android';
//   } else if (!os && /Linux/.test(platform)) {
//     os = 'Linux';
//   }

//   return os;
// }

// alert(getOS());
  $(document).ready(function(){
        $('.slider-for').slick({
          accessibility:false,
          swipe : false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
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
