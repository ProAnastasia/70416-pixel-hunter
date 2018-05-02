import {getRandomElement, generateRandomImages} from '../utils/utils';
import showScreen from '../modules/show-screen';
import {checkAnswerTime} from '../modules/check-answer-time';
import {renderLevel} from '../modules/render-level';
import changeGameState from '../modules/change-game-state';

import LevelTypeThreeView from '../views/level-type-3-view';
import levelTypes from '../data/level-types';
import greeting from "./greeting";

export const levelTypeThree = (gameState) => {
  const randomImages = generateRandomImages(3, `paint`);
  const screen = new LevelTypeThreeView(gameState, randomImages);


  screen.onBackButtonClick = () => {
    showScreen(greeting);
  };

  screen.onButtonClickHandler = (isCorrectAnswer) => {
    const generatedLevelType = getRandomElement(levelTypes).type;

    changeGameState(isCorrectAnswer, checkAnswerTime(20));
    renderLevel(generatedLevelType, gameState);
  };

  return screen.element;
};
