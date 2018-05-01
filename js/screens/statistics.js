import {resetGameState} from '../modules/change-game-state';
import showScreen from '../modules/show-screen';
import {getResultScores} from '../modules/get-result-scores';

import StatisticsView from '../view/statistics-view';
import greeting from "./greeting";

export default (gameState) => {
  const totalScores = getResultScores(gameState.answers, gameState.lives);
  const screen = new StatisticsView(gameState, totalScores);

  screen.onBackButtonClick = () => {
    resetGameState(gameState);
    showScreen(greeting);
  };

  return screen;
};
