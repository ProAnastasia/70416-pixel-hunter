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

export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Get random image from data
 * @return {String}
 */
export const getRandomImage = (images) => {
  return images[generateRandomNumber(0, images.length)];
};
