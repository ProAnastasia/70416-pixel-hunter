import {createElementFromTemplate, getRandomElement, generateRandomImages} from '../utils';
import {checkAnswerTime} from '../modules/check-answer-time';
import {renderLevel} from '../modules/render-level';
import changeGameState from '../modules/change-game-state';
import renderHeader from './header';
import showScreen from '../modules/show-screen';
import statisticsBar from './statistics-bar';
import footer from './footer';
import greeting from './greeting';
import levelTypes from '../data/level-types';

export const levelTypeThree = (gameState) => {
  const randomImages = generateRandomImages(3);
  const screenLayout = `<div class="game">
                          <p class="game__task">Найдите рисунок среди изображений</p>
                          <form class="game__content  game__content--triple">
                            <div class="game__option">
                              <img src=${randomImages[0].src} alt="Option 1" width="304" height="455">
                            </div>
                            <div class="game__option  game__option--selected">
                              <img src=${randomImages[1].src} alt="Option 1" width="304" height="455">
                            </div>
                            <div class="game__option">
                              <img src=${randomImages[2].src} alt="Option 1" width="304" height="455">
                            </div>
                          </form>
                           <div class="stats">
                            ${statisticsBar(gameState.answers)}
                          </div>
                        </div>`;

  const screenElement = createElementFromTemplate(`${renderHeader(true, true)}${screenLayout}${footer}`);
  const backButton = screenElement.querySelector(`.back`);
  const answerButtons = [...screenElement.querySelectorAll(`.game__option`)];
  const buttonOnClickHandler = (e) => {
    if (e.target.classList.contains(`game__option`)) {
      const imageSrc = e.target.querySelector(`img`).src;
      const image = randomImages.filter((elem) => elem.src === imageSrc)[0];
      const isCorrectAnswer = image.type === `painting`;
      const generatedLevelType = getRandomElement(levelTypes).type;
      const answerType = checkAnswerTime(20);

      changeGameState(isCorrectAnswer, answerType);
      renderLevel(generatedLevelType, gameState);
    }
  };

  answerButtons.forEach((answerButton) => {
    answerButton.addEventListener(`click`, buttonOnClickHandler);
  });

  backButton.addEventListener(`click`, () => {
    showScreen(greeting);
  });

  return screenElement;
};
