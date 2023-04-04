const zoomInElement = document.querySelector('.scale__control--bigger');
const zoomOutElement = document.querySelector('.scale__control--smaller');
const scaleValueElement = document.querySelector('.scale__control--value');
const imgElement = document.querySelector('.img-upload__preview');

zoomOutElement.addEventListener('click', () => {
  const intScale = parseInt(scaleValueElement.value, 10);
  if (intScale > 25) {
    scaleValueElement.value = `${intScale - 25}%`;
    imgElement.style = `transform: scale(${parseInt(scaleValueElement.value, 10) / 100})`;
  }
});

zoomInElement.addEventListener('click', () => {
  const intScale = parseInt(scaleValueElement.value, 10);
  if (intScale < 100) {
    scaleValueElement.value = `${intScale + 25}%`;
    imgElement.style = `transform: scale(${parseInt(scaleValueElement.value, 10) / 100})`;
  }
});
