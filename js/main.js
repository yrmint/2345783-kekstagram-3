//module7 task2
import { getPhotos } from './data.js';
import { insertPhotoMiniature } from './photoMiniature.js';
import { showDownloadAlert } from './alert.js';
import './form.js';
import './formValidator.js';
import './effectEditor.js';
import './scaleEditor.js';

getPhotos(insertPhotoMiniature, showDownloadAlert);
