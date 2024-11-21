const inputBox = document.querySelector('.input-box')
const form = document.querySelector('#form')
const input = document.querySelector('#email-input')

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const validateEmailResponse = validateEmail(input.value.trim())
   
    if(validateEmailResponse){
        input.value = '';
        return inputBox.classList.remove('error');
    }
    inputBox.classList.add('error');
    
})
