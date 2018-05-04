import images from '../data/images';
/**
 * Get template of the layout from string
 * @param {String} template
 * @return {Element}
 */
export const createElementFromTemplate = (template) => {
  const container = document.createElement(`div`);

  container.innerHTML = template;

  return container;
};
/**
 * Generate whole random number with min and max
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const getRandomElement = (array) => {
  return array[generateRandomNumber(0, array.length)];
};

const generateRandomPicture = (type) => {
  const imagesData = type ? images.filter((image) => image.type === type) : images;

  return imagesData[generateRandomNumber(0, imagesData.length)];
};

const generateTwoPictures = (type) => {
  let generatedArray = [];
  let randomPicture = generateRandomPicture(type);

  while (generatedArray.length < 2) {
    randomPicture = generateRandomPicture(type);

    const isAnswerInArray = generatedArray.filter((picture) => picture.src === randomPicture.src).length;

    if (!isAnswerInArray) {
      generatedArray.push(randomPicture);
    }
  }

  return generatedArray;
};

const generateThreeImages = (type) => {
  const reversedType = type === `paint` ? `photo` : `paint`;
  const generatedOnePicture = generateRandomPicture(type);
  const generatedRestPictures = generateTwoPictures(reversedType);

  return [generatedOnePicture, ...generatedRestPictures];
};

const shuffleElements = (array) => {
  const compareRandom = () => {
    return Math.random() - 0.5;
  };

  return array.sort(compareRandom);
};
/**
 * Generate array of unique images
 * @param {Number} length
 * @param {String} imageType
 * @return {Array}
 */
export const generateRandomImages = (length, imageType) => {
  let selectedImages = [];

  switch (length) {
    case 1:
      selectedImages = [generateRandomPicture()];
      break;
    case 2:
      selectedImages = generateTwoPictures();
      break;
    case 3:
      selectedImages = shuffleElements(generateThreeImages(imageType));
      break;
  }

  return selectedImages;
};

export const loadData = (source) => {
  return fetch(source)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`${response.status}: ${response.text}`);
        }
      });
};
