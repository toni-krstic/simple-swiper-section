(function(){
    let swiper = new Swiper(".mySwiper", {
        spaceBetween: 8,
        breakpoints: {
          375: {
            slidesPerView: 1.15,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1.8,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2.4,
          },
          864:{
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 3,
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        
      });
})();