import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const feedbackInfo = {};
const STORAGE_KEY = 'feedback-form-state';


form.addEventListener('input', throttle(getInputValues, 500));
form.addEventListener('submit', handleSubmit);

try {
    const currentFeedbackInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
     if (currentFeedbackInfo) {
        inputEmail.value = currentFeedbackInfo.email ? currentFeedbackInfo.email : '';
        message.value = currentFeedbackInfo.message ? currentFeedbackInfo.message : '';    
     }
} catch (error) {
        console.log(error.message)
}

function getInputValues(event) {
    feedbackInfo[`${event.target.name}`] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackInfo));
}

function handleSubmit(event) {
    event.preventDefault();
    if (inputEmail.value === '' || message.value === '') {
        return alert('Please fill an empty field');
      }
      else {
    console.log({ email: inputEmail.value, message: message.value});
}

    form.reset();
    localStorage.removeItem(STORAGE_KEY);
}
