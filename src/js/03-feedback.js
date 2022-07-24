const throttle = require('lodash.throttle');

const dataObj = {};

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.input-form');
const textareaEl = document.querySelector('.textarea-form');

function saveDataFormInObject(evt) {
  if (evt.target.classList.contains('input-form')) {
    dataObj.name = evt.target.value;
  } else {
    dataObj.message = evt.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
}
function parsedObject() {
  const savedDataObj = localStorage.getItem('feedback-form-state');
  return JSON.parse(savedDataObj);
}

function checkDataInStorage(data) {
  console.log(localStorage);
  if (!data) {
    return;
  }
  inputEl.value = data.name || '';
  textareaEl.value = data.message || '';
}

function clearLocalStorage(event) {
  event.preventDefault();

  console.log(dataObj);
  console.log(dataObj.name);
  console.log(dataObj.message);
  formEl.reset();
  localStorage.clear();
}

checkDataInStorage(parsedObject());
formEl.addEventListener('input', throttle(saveDataFormInObject, 500));
formEl.addEventListener('submit', clearLocalStorage);
