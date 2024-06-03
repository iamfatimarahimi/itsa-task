document.addEventListener("DOMContentLoaded", (event) => {
  new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCurser: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
  });
  pagination.style.backgroundcolor ="#fff";
});