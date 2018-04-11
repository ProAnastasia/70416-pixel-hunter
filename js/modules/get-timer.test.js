import assert from 'assert';
import {getTimer} from './get-timer';

describe(`Check timer`, () => {
  it(`should return an error if time type is not appropriate (Number) or negative values were used`, () => {
    assert.throws(() => getTimer({}));
    assert.throws(() => getTimer(null));
    assert.throws(() => getTimer(-2));
    assert.throws(() => getTimer());
    assert.throws(() => getTimer(`test string`));
  });

  it(`should return time value as specified`, () => {
    assert.equal(getTimer(10).currentTime, 10);
    assert.equal(getTimer(20).currentTime, 20);
    assert.equal(getTimer(30).currentTime, 30);
  });

  it(`should return reduced value with each tick method call`, () => {
    const timer = getTimer(12);

    assert.equal(timer.tick(), 11);
    assert.equal(timer.tick(), 10);
    assert.equal(timer.tick(), 9);
  });
});
