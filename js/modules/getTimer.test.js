import assert from 'assert';
import {getTimer} from './getTimer';

describe(`Check timer`, () => {
  it(`should return return an error if time type is not appropriate (Number)`, () => {
    assert.throws(() => getTimer({}));
    assert.throws(() => getTimer(null));
    assert.throws(() => getTimer(`test string`));
  });
});
