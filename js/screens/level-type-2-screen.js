import {getRandomElement, generateRandomImages} from '../utils/utils';
import showScreen from '../modules/show-screen';
import {checkAnswerTime} from '../modules/check-answer-time';
import {renderLevel} from '../modules/render-level';
import changeGameState from '../modules/change-game-state';

import LevelTypeTwoView from '../views/level-type-2-view';
import levelTypes from '../data/level-types';
import greeting from "./greeting-screen";

export const levelTypeTwo = (gameState) => {
  const randomImages = generateRandomImages(2, ``);
  const screen = new LevelTypeTwoView(gameState, randomImages);

  screen.onBackButtonClick = () => {
    showScreen(greeting);
  };

  screen.onRadioChangeHandler = (areAnswersCorrect) => {
    const generatedLevelType = getRandomElement(levelTypes).type;

    changeGameState(areAnswersCorrect, checkAnswerTime(10)); // temporarily static value
    renderLevel(generatedLevelType, gameState);
  };

  return screen.element;
};
