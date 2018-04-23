import {getRandomElement, generateRandomImages} from '../utils/utils';
import {backButtonClickHandler} from '../utils/back-button';
import {checkAnswerTime} from '../modules/check-answer-time';
import {renderLevel} from '../modules/render-level';
import changeGameState from '../modules/change-game-state';

import LevelTypeTwoView from '../view/level-type-2-view';
import levelTypes from '../data/level-types';

export const levelTypeTwo = (gameState) => {
  const randomImages = generateRandomImages(2, ``);
  const screen = new LevelTypeTwoView(gameState, randomImages);
  const screenLayout = screen.element;

  screen.onBackButtonClick = backButtonClickHandler(screenLayout);
  screen.onRadioChangeHandler = (e, images, radioButtons) => {
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

  return screenLayout;
};
