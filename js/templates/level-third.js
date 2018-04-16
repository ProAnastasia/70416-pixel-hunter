import {createElementFromTemplate} from '../utils';
import renderHeader from './header';
import showScreen from '../modules/show-screen';
import footer from './footer';
import greeting from './greeting';
import statistics from './statistics';

const screenLayout = `<div class="game">
                        <p class="game__task">Найдите рисунок среди изображений</p>
                        <form class="game__content  game__content--triple">
                          <div class="game__option">
                            <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
                          </div>
                          <div class="game__option  game__option--selected">
                            <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
                          </div>
                          <div class="game__option">
                            <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
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
const answerButtons = [...screenElement.querySelectorAll(`.game__option`)];
const buttonOnClickHandler = () => {
  showScreen(statistics);
};

answerButtons.forEach((answerButton) => {
  answerButton.addEventListener(`click`, buttonOnClickHandler);
});

backButton.addEventListener(`click`, () => {
  showScreen(greeting);
});

export default screenElement;
