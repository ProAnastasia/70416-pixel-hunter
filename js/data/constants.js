/**
 * Enum for game param
 * @readonly
 * @enum {number}
 */
export const GameParam = {
  QUESTION_TIME_FAST: 10,
  QUESTION_TIME_SLOW: 20,
  QUESTIONS_TOTAL_NUM: 10,
  LIVES_MAX_NUM: 3
};
/**
 * Enum for game points
 * @readonly
 * @enum {number}
 */
export const GamePoint = {
  ANSWER_CORRECT: 100,
  ANSWER_QUICK: 50,
  ANSWER_SLOW: 50,
  LIVE_VALUE: 50,
  INITIAL_SCORE: 1150
};
/**
 * Initial game state description
 * @type {Object}
 */
export const INITIAL_GAME_STATE = {
  totalPoints: 0,
  lives: 3,
  timer: 30,
  answers: new Array(GameParam.QUESTIONS_TOTAL_NUM).fill(`unknown`),
  questionNum: 0
};
/**
 * Enum for icons sources
 * @readonly
 * @enum {string}
 */
export const Icon = {
  LIFE_FULL: `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`,
  LIFE_EMPTY: `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`
};
/**
 * Enum for nswers types
 * @readonly
 * @enum {string}
 */
export const AnswerType = {
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`,
  UNKNOWN: `unknown`
};
