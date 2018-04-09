import {assert} from 'chai';
import {getResultScores} from './getResultScores';

describe(`Check score counter`, () => {
  it(`should return counted number of scores`, () => {
    const result = getResultScores();
    assert.equal(result, 1150);
  });
});
