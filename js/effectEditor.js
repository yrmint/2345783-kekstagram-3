const imgElement = document.querySelector('.img-upload__preview');

let chosenEffect = document.querySelector('.img-upload__effects').querySelectorAll('input[name="effect"]:checked');

export let oldEffect = 'effects__preview--none';

const radios = document.querySelector('.img-upload__effects').querySelectorAll('input[name="effect"]');
radios.forEach((radio) => {
  radio.addEventListener('input', () => { setChosenEffect(); });
});

function setChosenEffect() {
  for (const radio of radios) {
    if (radio.checked) {
      chosenEffect = radio;
      imgElement.classList.remove(oldEffect);
      imgElement.classList.add(`effects__preview--${chosenEffect.value}`);
      oldEffect = `effects__preview--${chosenEffect.value}`;
    }
  }
}
