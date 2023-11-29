import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const feedbackInfo = {};

form.addEventListener('input', throttle(getInputValues, 500));
form.addEventListener('submit', handleSubmit);

try {
    const currentFeedbackInfo = JSON.parse(localStorage.getItem("feedback-form-state"));
    inputEmail.value = currentFeedbackInfo.email ? currentFeedbackInfo.email : '';
    message.value = currentFeedbackInfo.message ? currentFeedbackInfo.message : '';
} catch (error) {
        console.log(error.message)
}

function getInputValues(event) {
    feedbackInfo[`${event.target.name}`] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackInfo));
}

function handleSubmit(event) {
    event.preventDefault();
     try { console.log(JSON.parse(localStorage.getItem("feedback-form-state"))) } catch (error) {
        console.log(error.message)
    }
    form.reset();
    localStorage.removeItem("feedback-form-state");
}
