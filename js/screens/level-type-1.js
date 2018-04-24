import {getRandomElement, generateRandomImages} from '../utils/utils';
import showScreen from '../modules/show-screen';
import {checkAnswerTime} from '../modules/check-answer-time';
import {renderLevel} from '../modules/render-level';
import changeGameState from '../modules/change-game-state';

import LevelTypeOneView from '../view/level-type-1-view';
import levelTypes from '../data/level-types';
import greeting from "./greeting";

export const levelTypeOne = (gameState) => {
  const randomImages = generateRandomImages(1, ``);
  const screen = new LevelTypeOneView(gameState, randomImages);

  screen.onBackButtonClick = () => {
    showScreen(greeting);
  };

  screen.onRadioChangeHandler = (isAnswerCorrect) => {
    const generatedLevelType = getRandomElement(levelTypes).type;

    changeGameState(isAnswerCorrect, checkAnswerTime(50)); // temporarily static value
    renderLevel(generatedLevelType, gameState);
  };

  return screen.element;
};
