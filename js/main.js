// генерация случайного числа
function getRandom(min, max) {
    if (min < 0 || max < 0) {
      return('Необходимо использовать только неотрицательные числа');
    }
    if (max<=min) {
      return('Максимальная граница диапазона должна быть больше минимальной');
    } else {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  
// проверка максимальной длины строки
function getLength(str, maxLength) {
    if (str !== String(str)) {
      return('Вы ввели не строку!');
    }
    if (str.length <= maxLength) {
      return true;
    }
    return false;
  }

// генерация фоторгафии
const generatePhoto = (number) => ({
  id: number,
  url: `photos/${  number  }.jpg`,
  description: `look at my cat!!`,
  likes: getRandom(15, 200),
  comments: getRandom(0, 200),
});

// массив с фотографиями
let photos = [];

// генерация массива фотографий
const generatePhotos = (number) => {
  for(let i = 1; i <= number; i++) {
    photos[i] = generatePhoto(i);
    console.log(photos[i]);
  }
};

generatePhotos(25);
