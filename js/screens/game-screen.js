import {ScreenName} from '../data/constants';
import {GameParam} from '../data/constants';
import HeaderView from '../views/header-view';
import LevelTypeOne from '../views/level-type-1-view';
import LevelTypeTwo from '../views/level-type-2-view';
import LevelTypeThree from '../views/level-type-3-view';
import Application from '../application';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.gameState);
    this.screenContent = new LevelTypeOne(this.model._gameState);
    this.content = this.renderContent();
    this.timer = null;
  }

  get element() {
    return this.content;
  }

  renderContent() {
    const container = document.createElement(`div`);

    container.appendChild(this.header.element);
    container.appendChild(this.screenContent.element);

    return container;
  }

  startTimer() {
    const setTimer = () => {
      this.model.decreaseTimer();

      if (this.model.gameState.timer >= 0) {
        this.updateHeader();
      }
    };

    this._timer = setInterval(setTimer, GameParam.TIMER_PERIOD);
  }

  stopTimer() {
    clearInterval(this._timer);
  }

  updateHeader() {
    const timer = this.content.querySelector(`.game__timer`);

    timer.innerHTML = this.model.gameState.timer;
  }

  startGame() {
    this.startTimer();
  }

  init() {
    this.header.onBackButtonClick = () => {
      Application.showScreen(ScreenName.GREETING);
    };

    this.startGame();
  }
}
