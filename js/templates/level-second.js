import {createElementFromTemplate} from '../utils';
import renderHeader from './header';
import showScreen from '../modules/show-screen';
import footer from './footer';
import greeting from './greeting';
import levelThird from './level-third';

const screenLayout = `<div class="game">
                        <p class="game__task">Угадай, фото или рисунок?</p>
                        <form class="game__content  game__content--wide">
                          <div class="game__option">
                            <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
                            <label class="game__answer  game__answer--photo">
                              <input name="question1" type="radio" value="photo">
                              <span>Фото</span>
                            </label>
                            <label class="game__answer  game__answer--wide  game__answer--paint">
                              <input name="question1" type="radio" value="paint">
                              <span>Рисунок</span>
                            </label>
                          </div>
                        </form>
                        <div class="stats">
                          <ul class="stats">
                            <li class="stats__result stats__result--wrong"></li>
                            <li class="stats__result stats__result--slow"></li>
                            <li class="stats__result stats__result--fast"></li>
                            <li class="stats__result stats__result--correct"></li>
                            <li class="stats__result stats__result--wrong"></li>
                            <li class="stats__result stats__result--unknown"></li>
                            <li class="stats__result stats__result--slow"></li>
                            <li class="stats__result stats__result--unknown"></li>
                            <li class="stats__result stats__result--fast"></li>
                            <li class="stats__result stats__result--unknown"></li>
                          </ul>
                        </div>
                      </div>`;

const screenElement = createElementFromTemplate(`${renderHeader(true, true)}${screenLayout}${footer}`);
const backButton = screenElement.querySelector(`.back`);
const answerButtons = [...screenElement.querySelectorAll(`.game__answer`)];
const buttonOnClickHandler = () => {
  showScreen(levelThird);
};

answerButtons.forEach((answerButton) => {
  answerButton.addEventListener(`click`, buttonOnClickHandler);
});

backButton.addEventListener(`click`, () => {
  showScreen(greeting);
});

export default screenElement;
