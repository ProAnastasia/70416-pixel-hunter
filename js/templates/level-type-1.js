import {createElementFromTemplate, getRandomElement, generateRandomImages} from '../utils/utils';
import {checkAnswerTime} from '../modules/check-answer-time';
import {renderLevel} from '../modules/render-level';
import changeGameState from '../modules/change-game-state';
import renderHeader from './header';
import showScreen from '../modules/show-screen';
import statisticsBar from './statistics-bar';
import footer from './footer';
import greeting from './greeting';
import levelTypes from '../data/level-types';

export const levelTypeOne = (gameState) => {
  const randomImages = generateRandomImages(1, ``);
  const screenLayout = `<div class="game">
                          <p class="game__task">Угадай, фото или рисунок?</p>
                          <form class="game__content  game__content--wide">
                            <div class="game__option">
                              <img src=${randomImages[0].src} alt="Option 1" width="705" height="455">
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
                            ${statisticsBar(gameState.answers)}
                          </div>
                        </div>`;
  const screenElement = createElementFromTemplate(`${renderHeader(true, true)}${screenLayout}${footer}`);
  const backButton = screenElement.querySelector(`.back`);
  const answerButtons = [...screenElement.querySelectorAll(`input[type="radio"]`)];
  const imageType = randomImages[0].type;

  const buttonOnClickHandler = (e) => {
    const isAnswerCorrect = e.target.value === imageType;
    const answerType = checkAnswerTime(50);
    const generatedLevelType = getRandomElement(levelTypes).type;

    changeGameState(isAnswerCorrect, answerType);
    renderLevel(generatedLevelType, gameState);
  };

  answerButtons.forEach((answerButton) => {
    answerButton.addEventListener(`change`, buttonOnClickHandler, false);
  });

  backButton.addEventListener(`click`, () => {
    showScreen(greeting());
  });

  return screenElement;
};
