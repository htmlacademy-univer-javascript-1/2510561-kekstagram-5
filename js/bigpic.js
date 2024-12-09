import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const commentTemplate = document.querySelector('#comments').content.querySelector('li');
const socialComments = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsCounter = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

let currentComments = [];
let visibleCommentsCount = 0;
const COMMENTS_STEP = 5;

const createComment = (comment) => {
  const { avatar, name, message } = comment;
  const currentComment = commentTemplate.cloneNode(true);
  currentComment.querySelector('.social__picture').src = avatar;
  currentComment.querySelector('.social__picture').alt = name;
  currentComment.querySelector('.social__text').textContent = message;
  return currentComment;
};

const updateVisibleComments = () => {
  const nextComments = currentComments.slice(visibleCommentsCount, visibleCommentsCount + COMMENTS_STEP);
  const commentFragment = document.createDocumentFragment();
  
  nextComments.forEach((comment) => {
    commentFragment.append(createComment(comment));
  });

  socialComments.append(commentFragment);
  visibleCommentsCount += nextComments.length;
  commentsCounter.textContent = `${visibleCommentsCount} из ${currentComments.length} комментариев`;

  if (visibleCommentsCount >= currentComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
  commentsLoader.removeEventListener('click', updateVisibleComments);
};

const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onBigPictureCancelClick = () => {
  closeBigPicture();
  bigPictureCancel.removeEventListener('click', onBigPictureCancelClick);
};

const openBigPicture = (picture) => {
  const { url, description, likes, comments } = picture;

  bigPicture.classList.remove('hidden');
  commentsCounter.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImage.src = url;
  bigPictureLikes.textContent = likes;
  bigPictureDescription.textContent = description;
  commentsCount.textContent = comments.length;

  socialComments.innerHTML = '';
  currentComments = comments;
  visibleCommentsCount = 0;
  updateVisibleComments();

  document.addEventListener('keydown', onBigPictureEscKeydown);
  bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
  commentsLoader.addEventListener('click', updateVisibleComments);
};

export { openBigPicture };
