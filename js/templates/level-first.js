import {createElementFromTemplate} from '../utils';
import renderHeader from './header';
import showScreen from '../modules/show-screen';
import footer from './footer';
import greeting from './greeting';
import levelSecond from './level-second';

const screenLayout = `<div class="game">
                        <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
                        <form class="game__content">
                          <div class="game__option">
                            <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
                            <label class="game__answer game__answer--photo">
                              <input name="question1" type="radio" value="photo">
                              <span>Фото</span>
                            </label>
                            <label class="game__answer game__answer--paint">
                              <input name="question1" type="radio" value="paint">
                              <span>Рисунок</span>
                            </label>
                          </div>
                          <div class="game__option">
                            <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
                            <label class="game__answer  game__answer--photo">
                              <input name="question2" type="radio" value="photo">
                              <span>Фото</span>
                            </label>
                            <label class="game__answer  game__answer--paint">
                              <input name="question2" type="radio" value="paint">
                              <span>Рисунок</span>
                            </label>
                          </div>
                        </form>
                      </div>`;

const screenElement = createElementFromTemplate(`${renderHeader(true, true)}${screenLayout}${footer}`);
const backButton = screenElement.querySelector(`.back`);
const radioButtons = [...screenElement.querySelectorAll(`input[type=radio]`)];
const radioOnChangeHandler = () => {
  const selectedRadioButtons = radioButtons.filter((radioButton) => radioButton.checked === true);

  if (selectedRadioButtons.length === 2) {
    showScreen(levelSecond);
  }
};

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener(`change`, radioOnChangeHandler);
});

backButton.addEventListener(`click`, () => {
  showScreen(greeting);
});

export default screenElement;
