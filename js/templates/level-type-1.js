import {createElementFromTemplate, generateRandomNumber, generateRandomImages} from '../utils';
import getGameState from '../modules/get-game-state';
import renderHeader from './header';
import showScreen from '../modules/show-screen';
import statisticsBar from './statistics-bar';
import footer from './footer';
import greeting from './greeting';

const randomImages = generateRandomImages(1);

const screenLayout = `<div class="game">
                        <p class="game__task">Угадай, фото или рисунок?</p>
                        <form class="game__content  game__content--wide">
                          <div class="game__option">
                            <img src=${randomImages[generateRandomNumber(0, randomImages.length)].src} alt="Option 1" width="705" height="455">
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
                          ${statisticsBar(getGameState.answers)}
                        </div>
                      </div>`;

const screenElement = createElementFromTemplate(`${renderHeader(true, true)}${screenLayout}${footer}`);
const backButton = screenElement.querySelector(`.back`);
const answerButtons = [...screenElement.querySelectorAll(`.game__answer`)];
const buttonOnClickHandler = () => {
  // showScreen(levelThird);
};

answerButtons.forEach((answerButton) => {
  answerButton.addEventListener(`click`, buttonOnClickHandler);
});

backButton.addEventListener(`click`, () => {
  showScreen(greeting);
});

export default screenElement;
