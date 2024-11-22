const tabList = document.querySelector('.tab-list')
const tabs = document.querySelectorAll('.tab')
const slides = document.querySelectorAll('.slide')
const slideContainer = document.querySelector('.slide-container')

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width


slides.forEach( (slide,index)=>{
    slide.style.left = `${slideWidth * index}px`;
})

tabs.forEach((tab,index)=>{
    tab.addEventListener('click',(e)=>{
        updateActiveTab(tab);
        updateSlide(index)
    })
   

})


updateActiveTab(tabs[0])
function updateActiveTab(tab){
    
    const currentab = tabList.querySelector('[aria-selected = "true"]')
    const targetTab = tab
    currentab.setAttribute('aria-selected',false);
    targetTab.setAttribute('aria-selected',true);

    const text = tab.querySelector('p')
    const width = text.offsetWidth - 12
    tabList.style.setProperty( '--indicator-width', `${width}px`)
   
}


function updateSlide(tabIndex){
    slideContainer.style.transform = `translate(-${(slideWidth * tabIndex)}px)`

}
