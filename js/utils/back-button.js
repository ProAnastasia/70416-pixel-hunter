import showScreen from '../modules/show-screen';
import greeting from '../templates/greeting';
/**
 * Set click handler to backButton
 * @param {Node} parentElement
 */
export const backButtonClickHandler = (parentElement) => {
  const backButton = parentElement.querySelector(`.back`);

  backButton.addEventListener(`click`, (event) => {
    event.preventDefault();
    showScreen(greeting);
  });
};
