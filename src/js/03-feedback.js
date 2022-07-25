import throttle from 'lodash.throttle';

const STORAGE_KEY_FEEDBACK = 'feedback-form-state';

let dataObj = {};

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.input-form');
const textareaEl = document.querySelector('.textarea-form');

function parsedObject() {
  let savedDataObj = localStorage.getItem(STORAGE_KEY_FEEDBACK);
  if (savedDataObj) {
    return JSON.parse(savedDataObj);
  }
}

function saveDataFormInObject(evt) {
  dataObj[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY_FEEDBACK, JSON.stringify(dataObj));
}

function checkDataInStorage(data) {
  console.log(data);
  if (data) {
    inputEl.value = data.email || '';
    textareaEl.value = data.message || '';
    dataObj = data;
  }
}

function clearLocalStorage(evt) {
  evt.preventDefault();

  console.log(dataObj);
  console.log(dataObj.email);
  console.log(dataObj.message);

  formEl.reset();
  localStorage.removeItem(STORAGE_KEY_FEEDBACK);
}

checkDataInStorage(parsedObject());
formEl.addEventListener('input', throttle(saveDataFormInObject, 500));
formEl.addEventListener('submit', clearLocalStorage);
