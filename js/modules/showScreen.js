/**
 * Container for all screens
 * @type {Node}
 */
const mainScreensContainer = document.querySelector(`main.central`);

/**
 * Clear content of the screens container
 * @function
 */
const clearContainerContent = () => {
  mainScreensContainer.innerHTML = ``;
};

export default (screen) => {
  clearContainerContent();
  mainScreensContainer.appendChild(screen);
};
