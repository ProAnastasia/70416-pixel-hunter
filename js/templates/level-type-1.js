import {getRandomElement, generateRandomImages} from '../utils/utils';
import {backButtonClickHandler} from '../utils/back-button';
import {checkAnswerTime} from '../modules/check-answer-time';
import {renderLevel} from '../modules/render-level';
import changeGameState from '../modules/change-game-state';

import LevelTypeOneView from '../view/level-type-1-view';
import levelTypes from '../data/level-types';

export const levelTypeOne = (gameState) => {
  const randomImages = generateRandomImages(1, ``);
  const screen = new LevelTypeOneView(gameState, randomImages);
  const screenLayout = screen.element;

  screen.onBackButtonClick = backButtonClickHandler(screenLayout);
  screen.onRadioChangeHandler = (e, type) => {
    const isAnswerCorrect = e.target.value === type;
    const answerType = checkAnswerTime(50);
    const generatedLevelType = getRandomElement(levelTypes).type;

    changeGameState(isAnswerCorrect, answerType);
    renderLevel(generatedLevelType, gameState);
  };

  return screenLayout;
};
