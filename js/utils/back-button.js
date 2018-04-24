import showScreen from '../modules/show-screen';
import greeting from '../screens/greeting';
/**
 * Set click handler to backButton
 * @param {Node} parentElement
 * @param {Function} callback
 */
export const backButtonClickHandler = (parentElement, callback) => {
  const backButton = parentElement.querySelector(`.back`);

  backButton.addEventListener(`click`, (event) => {
    event.preventDefault();

    showScreen(greeting);
    if (callback) {
      callback();
    }
  });
};
