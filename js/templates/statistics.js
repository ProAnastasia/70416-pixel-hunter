import {backButtonClickHandler} from '../utils/back-button';
import {resetGameState} from '../modules/change-game-state';
import {getResultScores} from '../modules/get-result-scores';

import StatisticsView from '../view/statistics-view';

export const statisticsScreen = (gameState) => {
  const totalScores = getResultScores(gameState.answers, gameState.lives);
  const screen = new StatisticsView(gameState, totalScores);
  const screenLayout = screen.element;

  screen.onBackButtonClick = backButtonClickHandler(screenLayout, () => {
    resetGameState(gameState);
  });

  return screenLayout;
};
