import {GameParam} from '../data/constants';
import LevelTypeOne from '../view/level-type-1-view';
import LevelTypeTwo from '../view/level-type-2-view';
import LevelTypeThree from '../view/level-type-3-view';
import Application from '../application';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this._content = new LevelTypeOne(this.model._gameState);
    this.timerContainer = this._content.element.querySelector(`.game__timer`);
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
    this.timerContainer.innerHTML = this.model._gameState.timer;
  }

  startGame() {
    this.startTimer();
  }

  init() {
    this.startGame();
  }
}
