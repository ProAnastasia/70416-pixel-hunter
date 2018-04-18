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

export const levelTypeTwo = (gameState) => {
  const randomImages = generateRandomImages(2, ``);
  const screenLayout = `<div class="game">
                          <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
                          <form class="game__content">
                            <div class="game__option">
                              <img src=${randomImages[0].src} alt="Option 1" width="468" height="458">
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
                              <img src=${randomImages[1].src} alt="Option 2" width="468" height="458">
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
                          <div class="stats">
                            ${statisticsBar(gameState.answers)}
                          </div>
                        </div>`;
  const screenElement = createElementFromTemplate(`${renderHeader(true, true)}${screenLayout}${footer}`);
  const backButton = screenElement.querySelector(`.back`);
  const radioButtons = [...screenElement.querySelectorAll(`input[type=radio]`)];
  const radioOnChangeHandler = () => {
    const selectedRadioButtons = radioButtons.filter((radioButton) => radioButton.checked === true);

    if (selectedRadioButtons.length === 2) {
      const areAnswersCorrect = selectedRadioButtons[0].value === randomImages[0].type &&
                                selectedRadioButtons[1].value === randomImages[1].type;
      const answerType = checkAnswerTime(10);
      const generatedLevelType = getRandomElement(levelTypes).type;

      changeGameState(areAnswersCorrect, answerType);
      renderLevel(generatedLevelType, gameState);
    }
  };

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener(`change`, radioOnChangeHandler);
  });

  backButton.addEventListener(`click`, () => {
    showScreen(greeting());
  });

  return screenElement;
};
