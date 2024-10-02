'use strict'
   // header 
const Header = document.querySelector('.l-header');
    window.addEventListener('scroll',()=>{
    if(window.scrollY > 0){
      Header.classList.add('active');
    }else{
      Header.classList.remove('active');
    }
   })
  
  //  side-btn
  const SideBtn = document.querySelector('.c-side-btn');
 window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300) {
        SideBtn.classList.add('visible')
    } else{
        SideBtn.classList.remove('visible');
    }
 })
  SideBtn.addEventListener('click',()=> {
    window.scrollTo({
        top: 0,
    });
})