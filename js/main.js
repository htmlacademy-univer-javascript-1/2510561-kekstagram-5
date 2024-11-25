const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const names = [
  'Мария',
  'Алина',
  'Алёна',
  'Дарья',
  'Кристина',
  'Светлана',
  'Вячеслав',
  'Анастасия'
];

const descriptions = [
  'Закат',
  'Осень',
  'Вечер',
  'Утро',
  'Завтрак',
  'Природа',
  'Работа',
  'Спорт',
  'Книги',
  'Планы',
];

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createComment() {
  return {
    id: getRandomNum(1, 1000),
    avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
    message: getRandomElement(messages),
    name: getRandomElement(names)
  };
}

function createComments() {
  const comments = [];
  const count = getRandomNum(0, 30);

  for (let i = 0; i < count; i++) {
    comments.push(createComment());
  }

  return comments;
}

function generateObjects() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomElement(descriptions),
      likes: getRandomNum(15, 200),
      comments: createComments()
    };

    photos.push(photo);
  }

  return photos;
}

generateObjects();
