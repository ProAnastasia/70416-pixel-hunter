import {INITIAL_GAME_STATE} from '../data/constants';
import gameState from '../modules/get-game-state';
import {AnswerType} from '../data/constants';

/**
 * Fill game progress according to answer type
 * @param {boolean} isAnswerCorrect
 * @param {string} type
 */
export default (isAnswerCorrect, type) => {
  gameState.answers[gameState.questionNum] = isAnswerCorrect ? type : AnswerType.WRONG;

  if (!isAnswerCorrect) {
    gameState.lives--;
  }

  gameState.questionNum++;
};
/**
 * Reset game state to defaut
 * @param {Object} state
 */
export const resetGameState = (state) => {
  state.lives = INITIAL_GAME_STATE.lives;
  state.timer = INITIAL_GAME_STATE.timer;
  state.points = INITIAL_GAME_STATE.totalPoints;
  state.answers = [...INITIAL_GAME_STATE.answers];
  state.questionNum = INITIAL_GAME_STATE.questionNum;
  state.isGameWon = false;
};
