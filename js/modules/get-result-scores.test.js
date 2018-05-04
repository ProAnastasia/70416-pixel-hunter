import {assert} from 'chai';
import {getResultScores} from './get-result-scores';

/**
 * Fill array with answers objects
 * @param {Number} length
 * @param {Object} answer
 * @return {Array}
 */
const fillArrayWithAnswers = (length, answer) => {
  return new Array(length).fill(answer);
};

const notEnoughAnswers = fillArrayWithAnswers(9, `correct`);
const averageAnswers = fillArrayWithAnswers(10, `correct`);
const fastAnswers = fillArrayWithAnswers(10, `fast`);
const slowAnswers = fillArrayWithAnswers(10, `slow`);
const differentAnswers = [
  ...fillArrayWithAnswers(2, `fast`),
  ...fillArrayWithAnswers(5, `correct`),
  ...fillArrayWithAnswers(3, `slow`),
];

describe(`Check score counter`, () => {
  it(`should return -1 if answers array length is less than 10`, () => {
    assert.equal(getResultScores(notEnoughAnswers, 3), -1);
  });

  it(`should return an error if answersNum type is not appropriate (Array)`, () => {
    assert.throws(() => getResultScores({}, 1));
    assert.throws(() => getResultScores(0, 1));
    assert.throws(() => getResultScores(null, 1));
    assert.throws(() => getResultScores(`test string`, 1));
  });

  it(`should return return an error if livesNum type is not appropriate (Number)`, () => {
    assert.throws(() => getResultScores(averageAnswers, {}));
    assert.throws(() => getResultScores(averageAnswers, []));
    assert.throws(() => getResultScores(averageAnswers, null));
    assert.throws(() => getResultScores(averageAnswers, `1`));
  });

  it(`should return 1150 scores if user answers are not fast/slow and 3 lives`, () => {
    assert.equal(getResultScores(averageAnswers, 4), 1150);
  });

  it(`should return 1650 scores if user answers are fast and lives are full`, () => {
    assert.equal(getResultScores(fastAnswers, 4), 1650);
  });

  it(`should return 650 scores if user answers are slow and lives are full`, () => {
    assert.equal(getResultScores(slowAnswers, 4), 650);
  });

  it(`should return 1100 scores if user answers are fast/slow and lives are full`, () => {
    assert.equal(getResultScores(differentAnswers, 4), 1100);
  });
});
