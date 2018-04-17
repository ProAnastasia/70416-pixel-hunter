import images from './data/images';
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
/**
 * Generate array of unique images
 * @param {Number} length
 * @return {Array}
 */
export const generateRandomImages = (length) => {
  const numbersArray = [];
  let counter = 0;

  if (length === 1) {
    return [images[generateRandomNumber(0, 1)]];
  }

  while (counter < length) {
    const randomNumber = generateRandomNumber(0, images.length);

    if (numbersArray.indexOf(randomNumber) === -1) {
      numbersArray.push(randomNumber);
    } else {
      numbersArray.push(generateRandomNumber(0, images.length)); // instead of recursion
    }

    ++counter;
  }

  return numbersArray.map((number) => images[number]);
};
