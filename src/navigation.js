const primaryNavigation = document.querySelector('#primary-navigation');
const navToggle = document.querySelector('.nav-toggle');
const logo = document.querySelector('.logo');

const showMenu = (nav,toggleBtn)=>{
   toggleBtn.addEventListener('click',()=>{
        const isOpened = toggleBtn.getAttribute('aria-expanded')
        if(isOpened === 'false'){
            toggleBtn.setAttribute('aria-expanded',true)
            nav.setAttribute('aria-expanded',true)
            toggleBtn.src = './images/icon-close.svg'
            logo.style.fill =' #fff';
            document.body.style.overflow = 'hidden'
        }
        else{
            toggleBtn.setAttribute('aria-expanded',false)
            nav.setAttribute('aria-expanded',false)
            toggleBtn.src = './images/icon-hamburger.svg';
            logo.style.fill = '#242A45';
            document.body.style.overflow = null
            
        }
        
   })
}
showMenu(primaryNavigation,navToggle);
