import {assert} from 'chai';
import {GameParam, GamePoint, AnswerType} from '../data/constants';
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

const notEnoughAnswers = fillArrayWithAnswers(9, {value: true, time: 12});
const averageAnswers = fillArrayWithAnswers(10, {value: true, time: 12});
const fastAnswers = fillArrayWithAnswers(10, {value: true, time: 8});
const slowAnswers = fillArrayWithAnswers(10, {value: true, time: 28});
const differentAnswers = [
  ...fillArrayWithAnswers(2, {value: true, time: 5}),
  ...fillArrayWithAnswers(5, {value: true, time: 11}),
  ...fillArrayWithAnswers(3, {value: true, time: 22}),
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
    assert.equal(getResultScores(averageAnswers, 3), 1150);
  });

  it(`should return 1650 scores if user answers are fast and lives are full`, () => {
    assert.equal(getResultScores(fastAnswers, 3), 1650);
  });

  it(`should return 650 scores if user answers are slow and lives are full`, () => {
    assert.equal(getResultScores(slowAnswers, 3), 650);
  });

  it(`should return 1100 scores if user answers are fast/slow and lives are full`, () => {
    assert.equal(getResultScores(differentAnswers, 3), 1100);
  });
});
