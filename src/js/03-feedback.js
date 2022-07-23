const throttle = require('lodash.throttle');
console.log(localStorage);
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
  let savedDataObj = localStorage.getItem('feedback-form-state');
  return JSON.parse(savedDataObj);
}

function checkDataInStorage(data) {
  if (data.name === '' || data.message === '') {
    return;
  }
  inputEl.value = data.name;
  textareaEl.value = data.message;
}

function clearLocalStorage(event) {
  event.preventDefault();

  console.log(dataObj);
  console.log(dataObj.name);
  console.log(dataObj.message);

  inputEl.value = '';
  textareaEl.value = '';
  localStorage.clear();
  console.log(localStorage);
}

formEl.addEventListener('input', throttle(saveDataFormInObject, 500));
formEl.addEventListener('submit', clearLocalStorage);
window.addEventListener('load', checkDataInStorage(parsedObject()));
