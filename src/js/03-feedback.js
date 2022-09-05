import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input[name="email"]');
const messageRef = document.querySelector('textarea[name="message"]');

const currentFeedback = {};
const FORM_STATE_KEY = 'feedback-form-state';

let submittedFeedback = null;

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  const { name, value } = event.target;

  if (name === inputRef.name) {
    currentFeedback.email = value;
  }

  if (name === messageRef.name) {
    currentFeedback.message = value;
  }

  localStorage.setItem(FORM_STATE_KEY, JSON.stringify(currentFeedback));
}

try {
  const { email, message } = JSON.parse(localStorage.getItem(FORM_STATE_KEY));
  inputRef.value = email;
  messageRef.value = message;
} catch (error) {}

function onFormSubmit(event) {
  e.preventDefault();

  try {
    submittedFeedback = JSON.parse(localStorage.getItem(FORM_STATE_KEY));
    console.log(submittedFeedback);
  } catch (error) {}

  localStorage.removeItem(FORM_STATE_KEY);

  event.currentTarget.reset();
}
