/**
 * Description of the required order of screens
 * @const
 * @readonly
 * @type {Array}
 */
const SCREENS_ORDER = [`greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`];

/**
 * Enum for key codes
 * @readonly
 * @enum {number}
 */
const KeyCode = {
  RIGHT_ARROW: 39,
  LEFT_ARROW: 37
};

/**
 * Container for all screens
 * @type {Node}
 */
const mainScreensContainer = document.querySelector(`main.central`);

/**
 * Index of the current screen
 * @type {number}
 */
let currentScreenIndex = 0;

/**
 * An array of the templates with screens
 * @type {Array}
 */
const screens = [...document.querySelectorAll(`template`)];

/**
 * Clear content of the screens container
 * @function
 */
const clearContainerContent = () => {
  mainScreensContainer.innerHTML = ``;
};

/**
 * Show screen with number
 * @param {Number} number
 */
const showScreen = (number) => {
  const currentScreen = screens.find((screen) => screen.id === SCREENS_ORDER[number]);
  const currentScreenContent = currentScreen.content.cloneNode(true);

  clearContainerContent();
  mainScreensContainer.appendChild(currentScreenContent);
};

/**
 * Set keyup handler and show screens accordingly
 * @param {Boolean} altKey
 * @param {Number} keyCode
 */
const onKeyPressHandler = ({altKey, keyCode}) => {
  if (!altKey) {
    return;
  }

  switch (keyCode) {
    case KeyCode.LEFT_ARROW:
      if (currentScreenIndex > 0) {
        --currentScreenIndex;
        showScreen(currentScreenIndex);
      }
      break;
    case KeyCode.RIGHT_ARROW:
      if (currentScreenIndex < screens.length - 1) {
        ++currentScreenIndex;
        showScreen(currentScreenIndex);
      }
      break;
  }
};

document.addEventListener(`keyup`, onKeyPressHandler);

showScreen(currentScreenIndex);
