import { generateObjects } from './util.js';
import { openBigPicture } from './bigpic.js';

const photos = generateObjects();
const photoElements = document.querySelectorAll('.picture');

photoElements.forEach((photoElement, index) => {
  photoElement.addEventListener('click', () => openBigPicture(photos[index]));
});
