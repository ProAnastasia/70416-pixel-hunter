import {INITIAL_GAME_STATE, GameParam, GamePoint} from '../data/constants';

const countScores = (answers, lives) => {
  let scores = INITIAL_GAME_STATE.totalPoints;

  answers.forEach((answer) => {
    if (answer.value) {
      scores += GamePoint.ANSWER_CORRECT;

      if (answer.time <= GameParam.QUESTION_TIME_FAST) {
        scores += GamePoint.ANSWER_QUICK;
      }

      if (answer.time > GameParam.QUESTION_TIME_SLOW) {
        scores -= GamePoint.ANSWER_SLOW;
      }
    }
  });

  return scores + (lives * GamePoint.LIVE_VALUE);
};

/**
 * Get number of answers and lives, returns number of scores accordingly and handle errors
 * @param {Array} answers
 * @param {Number} livesNum
 * @return {Number}
 */
export const getResultScores = (answers, livesNum) => {
  if (answers.length < GameParam.QUESTIONS_TOTAL_NUM) {
    return -1;
  }

  if (!Array.isArray(answers)) {
    throw new Error(`answers param should have type: Array`);
  }

  if (typeof livesNum !== `number`) {
    throw new Error(`livesNum param should have type: Number`);
  }

  if (livesNum < 0) {
    throw new Error(`livesNum should be only positive number`);
  }

  if (livesNum > GameParam.LIVES_MAX_NUM) {
    throw new Error(`livesNum should be less than maximum lives number`);
  }

  return countScores(answers, livesNum);
};
