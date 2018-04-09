import {assert} from 'chai';
import {getResultScores} from './getResultScores';

describe(`Check score counter`, () => {
  it(`Should return return an error if answersNum type is not appropriate (Array)`, () => {
    assert.throws(() => getResultScores({}, 1));
    assert.throws(() => getResultScores(0, 1));
    assert.throws(() => getResultScores(null, 1));
    assert.throws(() => getResultScores(`test string`, 1));
  });

  it(`Should return return an error if livessNum type is not appropriate (Number)`, () => {
    assert.throws(() => getResultScores([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], {}));
    assert.throws(() => getResultScores([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], []));
    assert.throws(() => getResultScores([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], null));
    assert.throws(() => getResultScores([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], `1`));
  });
});
