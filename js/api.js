import { isEscapeKey } from './util.js';

const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageElement = document.querySelector('#error').content.querySelector('.error');
const successButton = successMessageElement.querySelector('.success__button');
const errorButton = errorMessageElement.querySelector('.error__button');

const onEscapeKeyDown = (e) => {
  if (isEscapeKey(e)) {
    e.preventDefault();
    closeUploadSuccess();
    closeUploadError();
  }
};

function closeUploadSuccess() {
  successMessageElement.classList.add('hidden');
  document.removeEventListener('click', closeUploadSuccess);
  document.removeEventListener('keydown', onEscapeKeyDown);
}

function openUploadSuccess(){
  document.addEventListener('click', closeUploadSuccess);
  successButton.addEventListener('click', () => {
    closeUploadSuccess();
  });
  successMessageElement.classList.remove('hidden');
  document.body.append(successMessageElement);
  document.body.addEventListener('keydown', onEscapeKeyDown);
}

function closeUploadError() {
  errorMessageElement.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.removeEventListener('keydown', onEscapeKeyDown);
}

function openUploadError(){
  errorButton.addEventListener('click', () => {
    closeUploadError();
  });
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  errorMessageElement.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  document.body.append(errorMessageElement);
  document.body.addEventListener('keydown', onEscapeKeyDown);
}

export {
  openUploadSuccess,
  closeUploadSuccess,
  openUploadError,
  closeUploadError
};
