/**
 * Enum for game points
 * @readonly
 * @enum {number}
 */
const gamePoints = {
  ANSWER_RIGHT: 100,
  ANSWER_QUICK: 50,
  ANSWER_SLOW: 50,
  LIVE_VALUE: 50,
  INITIAL_SCORE: 1150
};
/**
 * Get number of answers and lives, returns number of scores accordingly
 *  @return {Number}
 */
export const getResultScores = () => {
  return gamePoints.INITIAL_SCORE;
};

