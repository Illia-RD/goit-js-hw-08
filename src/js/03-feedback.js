import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input[name="email"]');
const messageRef = document.querySelector('textarea[name="message"]');

const formData = {
  email: '',
  message: '',
};
const FORM_STATE_KEY = 'feedback-form-state';

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FORM_STATE_KEY, JSON.stringify(formData));
}

const savedFeedbackForm = JSON.parse(localStorage.getItem(FORM_STATE_KEY));
inputRef.value = savedFeedbackForm.email;
messageRef.value = savedFeedbackForm.message;

function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(FORM_STATE_KEY)));
  localStorage.removeItem(FORM_STATE_KEY);
  event.currentTarget.reset();
}

/*================================================================================*/
