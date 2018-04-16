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
