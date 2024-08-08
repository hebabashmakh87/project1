const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
  });

  btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
  });

  iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
  }); 


 let menu = document.querySelector('#menu-bars');
 let navigation = document.querySelector('.navigation');

  menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navigation.classList.toggle('active');

  }

  let section = document.querySelectorAll('section')
  let navLinks = document.querySelectorAll('header .navigation a')


  window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navigation.classList.remove('active');


    section.forEach(sec =>{

      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');

      if(top => offset && top < offset + height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelectorAll('header .navigation a[href*='+id+']').classList.add('active');
        });
      };


    }); 


  }

  document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
  }

  document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
  }
  
  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
         slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
     },
     768: {
      slidesperView: 2,
   },
   1024: {
    slidesPerView: 2,
 },
     
   },
  });

