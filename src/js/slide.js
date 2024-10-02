import Swiper from "swiper/bundle";
import 'swiper/swiper-bundle.css';
import "../scss/object/project/_swiper.scss"
document.addEventListener('DOMContentLoaded', ()=>{

  const swiper = new Swiper(".js-swiper-container", {
    // Optional parameters
    autoplay: {
      delay: 4000,
    },
    speed: 500,
    loop: true,
    effect: "fade",
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
})


