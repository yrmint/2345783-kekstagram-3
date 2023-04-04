//module7 task2
import { generatePhotos } from './data.js';
import { insertPhotoMiniature } from './photoMiniature.js';
import './form.js';
import './formValidator.js';
import './effectEditor.js';
import './scaleEditor.js';

const photos = generatePhotos(25);
insertPhotoMiniature(photos);
