import {GameParam, GamePoint, AnswerType} from '../data/constants';

const countScores = (answers, lives) => {
  let scores;

  lives = lives < 0 ? 0 : lives;
  scores = lives * GamePoint.LIFE_VALUE;

  answers.forEach((answer) => {
    switch (answer) {
      case AnswerType.CORRECT:
        scores += GamePoint.ANSWER_CORRECT;
        break;
      case AnswerType.FAST:
        scores += (GamePoint.ANSWER_QUICK + GamePoint.ANSWER_CORRECT);
        break;
      case AnswerType.SLOW:
        scores += (GamePoint.ANSWER_CORRECT - GamePoint.ANSWER_SLOW);
        break;
      default:
        break;
    }
  });

  return scores;
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
