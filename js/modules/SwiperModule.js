export default function SwiperModule() {
  const swiperBanner = new Swiper(".banner__slider .swiper", {
    loop: true,
    effect: "fade",
    speed: 600,
    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: ".banner__slider .swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".banner__slider .swiper-button-next",
      prevEl: ".banner__slider .swiper-button-prev",
    },
  });
  const swiperProductNav = new Swiper(".product-gallery .slider-nav .swiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    watchSlidesProgress: true,
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });
  const swiperProductMain = new Swiper(
    ".product-gallery .slider-main .swiper",
    {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      thumbs: { swiper: swiperProductNav },
    }
  );
  const swiperRelated = new Swiper(".related__slider .swiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    speed: 600,
    // autoplay: {
    //   delay: 3500,
    // },
    pagination: {
      el: ".related__slider .swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".related__slider .swiper-button-next",
      prevEl: ".related__slider .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 12,
      },

      991: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });
}
