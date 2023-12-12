const swiper = new Swiper('.second-section', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
      },
    navigation: {
    nextEl: '.com-next',
    prevEl: '.com-prev',
    },
  });

