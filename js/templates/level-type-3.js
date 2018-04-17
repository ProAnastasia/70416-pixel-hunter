import {createElementFromTemplate, getRandomElement} from '../utils';
import renderHeader from './header';
import showScreen from '../modules/show-screen';
import getGameState from '../modules/get-game-state';
import statisticsBar from './statistics-bar';
import footer from './footer';
import greeting from './greeting';

import images from '../data/images';

const screenLayout = `<div class="game">
                        <p class="game__task">Найдите рисунок среди изображений</p>
                        <form class="game__content  game__content--triple">
                          <div class="game__option">
                            <img src=${getRandomElement(images).src} alt="Option 1" width="304" height="455">
                          </div>
                          <div class="game__option  game__option--selected">
                            <img src=${getRandomElement(images).src} alt="Option 1" width="304" height="455">
                          </div>
                          <div class="game__option">
                            <img src=${getRandomElement(images).src} alt="Option 1" width="304" height="455">
                          </div>
                        </form>
                         <div class="stats">
                          ${statisticsBar(getGameState.answers)}
                        </div>
                      </div>`;

const screenElement = createElementFromTemplate(`${renderHeader(true, true)}${screenLayout}${footer}`);
const backButton = screenElement.querySelector(`.back`);
const answerButtons = [...screenElement.querySelectorAll(`.game__option`)];
const buttonOnClickHandler = () => {
  // showScreen(statistics);
};

answerButtons.forEach((answerButton) => {
  answerButton.addEventListener(`click`, buttonOnClickHandler);
});

backButton.addEventListener(`click`, () => {
  showScreen(greeting);
});

export default screenElement;
