import throttle from 'lodash.throttle';
const STORAGE_KEY_FEEDBACK = 'feedback-form-state';
const dataObj = {};

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.input-form');
const textareaEl = document.querySelector('.textarea-form');

function saveDataFormInObject(evt) {
  dataObj[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY_FEEDBACK, JSON.stringify(dataObj));
}

function parsedObject() {
  const savedDataObj = localStorage.getItem(STORAGE_KEY_FEEDBACK);
  return JSON.parse(savedDataObj);
}

function checkDataInStorage(data) {
  console.log(localStorage);
  if (data) {
    inputEl.value = data.email;
    textareaEl.value = data.message;
  }
}

function clearLocalStorage(event) {
  event.preventDefault();

  console.log(dataObj);
  console.log(dataObj.email);
  console.log(dataObj.message);

  formEl.reset();
  localStorage.removeItem(STORAGE_KEY_FEEDBACK);
}

checkDataInStorage(parsedObject());
formEl.addEventListener('input', throttle(saveDataFormInObject, 500));
formEl.addEventListener('submit', clearLocalStorage);
