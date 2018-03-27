/**
 * Describe required order of the screens
 * @const
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
 * An array of the templates with screens
 * @type {Array}
 */
const screens = [...document.querySelectorAll(`template`)];
