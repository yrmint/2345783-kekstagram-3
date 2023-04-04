import { isEscapeKey } from './util.js';

const downloadButton = document.querySelector('#upload-file');
const cancellButton = document.querySelector('#upload-cancel');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');

function cleanForm() {
  downloadButton.value = '';
  hashtag.value = '';
  comment.value = '';
}

const onFormEscapeKeyDown = (e) => {
  if (isEscapeKey(e)) {
    e.preventDefault();
    closeDownloadWindow();
  }
};

function openDownloadWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.addEventListener('keydown', onFormEscapeKeyDown);
}

function closeDownloadWindow() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscapeKeyDown);
  cleanForm();
}

downloadButton.addEventListener('change', () => { openDownloadWindow(); });

cancellButton.addEventListener('click', () => {closeDownloadWindow(); });