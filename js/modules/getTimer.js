/**
 *  Get timer and handle changes
 * @param {Number} timer
 * @returns {Object}
 */
export const getTimer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`time param should have type: Number`);
  }

  if (time < 0) {
    throw new Error(`time param should be only positive number`);
  }

  return {
    currentTime: time,
    tick: function () {
      if (this.currentTime === 0) {
        return `No more time`;
      }
      if (this.currentTime > 0) {
        this.currentTime--;
      }
      return this.currentTime;
    }
  };
};
