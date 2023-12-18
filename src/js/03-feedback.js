import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
let feedBackInfo = { email: "", message: "" };
const STORAGE_KEY = 'feedback-form-state';


form.addEventListener('input', throttle(getInputValues, 500));
form.addEventListener('submit', handleSubmit);

try {
    const currentFeedBackInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
     if (currentFeedBackInfo) {
        inputEmail.value = currentFeedBackInfo.email ? currentFeedBackInfo.email : '';
        message.value = currentFeedBackInfo.message ? currentFeedBackInfo.message : '';    
     }
} catch (error) {
        console.log(error.message)
}

function getInputValues(event) {
    feedBackInfo[`${event.target.name}`] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedBackInfo));
}

function handleSubmit(event) {
    event.preventDefault();
    if (inputEmail.value === '' || message.value === '') {
        return alert('Please fill an empty field');
      }
      else {
    console.log({ email: inputEmail.value, message: message.value});
}

    localStorage.removeItem(STORAGE_KEY);
}
