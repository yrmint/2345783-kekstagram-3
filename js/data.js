import { getRandomInt } from './util.js';

// генерация фоторгафии
const generatePhoto = (number) => ({
  id: number,
  url: `photos/${ number + 1 }.jpg`,
  description: 'look at my cat!!',
  likes: getRandomInt(15, 200),
  comments: getRandomInt(0, 200),
});

// генерация массива фотографий
export const generatePhotos = (number) => {
  const photos = [];
  for(let i = 0; i < number; i++) {
    photos[i] = generatePhoto(i);
  }
  return photos;
};
