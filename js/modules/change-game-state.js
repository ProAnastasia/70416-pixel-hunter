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
