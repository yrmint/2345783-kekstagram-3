import { getRandom } from './util.js';

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
  export const generatePhotos = (number) => {
    for(let i = 1; i <= number; i++) {
      photos[i] = generatePhoto(i);
      console.log(photos[i]);
    }
  };
