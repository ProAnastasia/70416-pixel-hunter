import {GameParam} from '../data/constants';
import LevelTypeOne from '../views/level-type-1-view';
import LevelTypeTwo from '../views/level-type-2-view';
import LevelTypeThree from '../views/level-type-3-view';
import Application from '../application';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this._content = new LevelTypeOne(this.model._gameState);
    this._timer = null;
  }

  get element() {
    return this._content.element;
  }

  startTimer() {
    const setTimer = () => {
      this.model.decreaseTimer();
      this.updateHeader();
    };

    this._timer = setInterval(setTimer, GameParam.TIMER_PERIOD);
  }

  stopTimer() {
    clearInterval(this._timer);
  }

  updateHeader() {

  }

  startGame() {
    this.startTimer();
  }

  init() {
    this.startGame();
  }
}
