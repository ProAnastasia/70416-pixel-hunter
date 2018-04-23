import {getRandomElement, generateRandomImages} from '../utils/utils';
import {backButtonClickHandler} from '../utils/back-button';
import {checkAnswerTime} from '../modules/check-answer-time';
import {renderLevel} from '../modules/render-level';
import changeGameState from '../modules/change-game-state';

import LevelTypeThreeView from '../view/level-type-3-view';
import levelTypes from '../data/level-types';

export const levelTypeThree = (gameState) => {
  const randomImages = generateRandomImages(3, `paint`);
  const screen = new LevelTypeThreeView(gameState, randomImages);
  const screenLayout = screen.element;

  screen.onBackButtonClick = backButtonClickHandler(screenLayout);
  screen.onButtonClickHandler = (e, images) => {
    if (e.target.classList.contains(`game__option`)) {
      const imageSrc = e.target.querySelector(`img`).src;
      const image = images.filter((elem) => elem.src === imageSrc)[0];
      const isCorrectAnswer = image.type === `paint`;
      const generatedLevelType = getRandomElement(levelTypes).type;
      const answerType = checkAnswerTime(20);

      changeGameState(isCorrectAnswer, answerType);
      renderLevel(generatedLevelType, gameState);
    }
  };

  return screenLayout;
};
