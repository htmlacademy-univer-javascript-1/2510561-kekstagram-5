const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomElement = (array) => array[getRandomNumber(0, array.length - 1)];

const generateComments = (count) => {
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
  return Array.from({ length: count }, () => ({
    id: getRandomNumber(1, 1000),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: Array.from({ length: getRandomNumber(1, 2) }, () => getRandomElement(messages)).join(' '),
    name: getRandomElement(names)
  }));
};

const generatePhotos = () => {
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

  return Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: getRandomElement(descriptions),
    likes: getRandomNumber(15, 200),
    comments: generateComments(getRandomNumber(0, 30))
  }));
};

// eslint-disable-next-line no-console
console.log(generatePhotos());
