import {GameParam, AnswerType} from '../data/constants';

/**
 * Get answer time for stat according to time
 * @param {number} time
 * @return {String}
 */
export const checkAnswerTime = (time) => {
  let answerType;

  if (time < GameParam.QUESTION_TIME_FAST) {
    answerType = AnswerType.FAST;
  } else if (time <= GameParam.QUESTION_TIME_SLOW) {
    answerType = AnswerType.CORRECT;
  } else {
    answerType = AnswerType.SLOW;
  }

  return answerType;
};
