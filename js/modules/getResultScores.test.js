import {assert} from 'chai';
import {getResultScores} from './getResultScores';

/**
 * Fill array with answers objects
 * @param {Number} length
 * @param {Object} answer
 * @return {Array}
 */
const fillArrayWithAnswers = (length, answer) => {
  return new Array(length).fill(answer);
};

const averageAnswers = fillArrayWithAnswers(10, {value: true, time: 12});
const fastAnswers = fillArrayWithAnswers(10, {value: true, time: 8});
const slowAnswers = fillArrayWithAnswers(10, {value: true, time: 28});

describe(`Check score counter`, () => {
  it(`Should return return an error if answersNum type is not appropriate (Array)`, () => {
    assert.throws(() => getResultScores({}, 1));
    assert.throws(() => getResultScores(0, 1));
    assert.throws(() => getResultScores(null, 1));
    assert.throws(() => getResultScores(`test string`, 1));
  });

  it(`Should return return an error if livesNum type is not appropriate (Number)`, () => {
    assert.throws(() => getResultScores(averageAnswers, {}));
    assert.throws(() => getResultScores(averageAnswers, []));
    assert.throws(() => getResultScores(averageAnswers, null));
    assert.throws(() => getResultScores(averageAnswers, `1`));
  });

  it(`Should return 1150 scores if user answers are not fast/slow and 3 lives`, () => {
    assert.equal(getResultScores(averageAnswers, 3), 1150);
  });

  it(`Should return 1650 scores if user answers are fast and lives are full`, () => {
    assert.equal(getResultScores(fastAnswers, 3), 1650);
  });

  it(`Should return 650 scores if user answers are fast and lives are full`, () => {
    assert.equal(getResultScores(slowAnswers, 3), 650);
  });
});
