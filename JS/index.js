
const Header = document.getElementById('header');
const BreadCrumb = document.getElementById('breadcrumb');

window.addEventListener('scroll', ()=>{
    const ScrollTriger = 20;
    if(window.scrollY > ScrollTriger ){
    Header.classList.add('.scroll')
    BreadCrumb.classList.add('.scroll')
    }else if(window.scrollY < ScrollTriger){
      BreadCrumb.classList.remove('.scroll')
     }
})
//scroll Animation
const Hamburger = document.getElementById('hamburgermenu');
const Navsp = document.getElementById('sp-nav');

Hamburger.addEventListener('click', ()=>{
  Hamburger.classList.toggle('.active');
  Navsp.classList.toggle('.active');
})

//hambugermenu


const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay:{
    delay: 4000,
  },
  speed: 500,
  loop: true,
  effect: "fade",

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});
//swiper

const SideBtn = document.getElementById('side-btn');

window.addEventListener('scroll', ()=>{
  const elementPosition = SideBtn.getBoundingClientRect().top;
  if(elementPosition < window.innerHeight){
    SideBtn.classList.add('.show');
   }

})
window.addEventListener('scroll', ()=> {
   if(window.scrollY === 0){
     SideBtn.classList.remove('.show');
    }
  })
// sidebutton