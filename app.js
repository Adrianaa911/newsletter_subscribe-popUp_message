const form = document.querySelector('.signup-form');
const emailInput = document.getElementById('email');
const alert = document.querySelector('.alert');
const subscriptionButton = document.querySelector('.btn-subscribe');
const popup = document.querySelector('.popup-container');
const successText = document.querySelector('.confirmation-text');
const dismissButton = document.querySelector('.btn-dismiss');
console.log(successText, dismissButton, subscriptionButton);
console.log()

// the input email
function validateEmail(email) {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

// enter a valid email
function setEmailValidationStatus() {
    const emailValue = emailInput.value;
    const isEmailValid = validateEmail(emailValue)
    console.log(isEmailValid)

    if (!isEmailValid) {
        alert.style.display = 'flex';
        emailInput.style.outline = '1px solid #F94144';
        emailInput.style.border = 'none';
    } else {
        subscriptionButton.style.background = 'linear-gradient(to bottom, #FF6500, #F94144)'
        emailInput.style.outline = ''
        alert.style.display = 'none';
    }
    return isEmailValid
}

function handleSubmit(e) {
    e.preventDefault()
    const emailValue = emailInput.value;

    if (!validateEmail(emailValue)) {
        alert.style.display = 'flex';
        emailInput.style.outline = '1px solid #F94144';
        emailInput.style.border = 'none';
    }

    // captures data 
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData)
    console.log(data)

    // access specific values - confirmation text (after $ ALWAYS {}!!)
    successText.innerHTML = `A confirmation email has been sent to <span class="bold-email">${data.email}</span>. Please open it and click the button inside to confirm your subscription.`
    popup.style.display = 'flex';

    emailInput.value = ''
    subscriptionButton.style.background = '#000435'
}

//close window message
function closePopup() {
    popup.style.display = 'none'
}

emailInput.addEventListener('input', setEmailValidationStatus)
form.addEventListener('submit', handleSubmit)
dismissButton.addEventListener('click', closePopup) //close window message

/*
const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

}

const setEmailValidationStatus = () => {
    const emailValue = emailInput.value;
    const isValid = validateEmail(emailValue)

    if(!isValid) {
        emailInput.style.border = 'none'
        emailInput.style.outline = '1px solid #f94144'
        alert.style.display = 'flex';
        subscriptionButton.style.backgroundColor = '#000435'
    } else {
        emailInput.style.border = ''
        alert.style.display = 'none'
        subscriptionButton.style.background = 'linear-gradient(to bottom, #ff6500, #f94144)'
        emailInput.style.outline = '';   
    }

    return isValid
}
function handleInput() {
    setEmailValidationStatus()
}

function closePopup() {
    popup.style.display = 'none'
}

function handleSubmit() {
    e.preventDefault(e)
    const emailValue = emailInput.value;

    if (!validateEmail(emailValue)) {
        alert.style.display = 'flex';
        emailInput.style.outline = '1px solid #f94144';
        popup.style.display = 'none'
        return 
    } 
    const formData = new formData(e.target);
    const data = Object.fromEntries(formData);
    successText.innerHTML = `A confirmation email has been sent to <span class="bold-email">${data.email}. Please open it and click the button inside to confirm your subscription.</span>`
    popup.style.display = "flex";

    emailInput.value = ''
    subscriptionButton.style.background = '#000435';
}

emailInput.addEventListener('input', handleInput)
dismissButton.addEventListener('click', closePopup)
form.addEventListener('submit', handleSubmit) */
