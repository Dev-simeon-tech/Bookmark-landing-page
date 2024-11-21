const faqs = document.querySelectorAll('.faq');
const accordion = document.querySelector('.accordion');

faqs.forEach((faq)=>{
    faq.addEventListener('click',(e)=>{
        if(!e.target.closest('.question')) return;
        openAccordion(faq);
    })
})

function openAccordion(targetFaq){
    const currentFaq = accordion.querySelector('[aria-selected="true"]');
    if(currentFaq){
        currentFaq.setAttribute('aria-selected',false)
    }
    
    if(currentFaq === targetFaq){
        currentFaq.setAttribute('aria-selected',false)
    }else{
        targetFaq.setAttribute('aria-selected',true)
    }

}