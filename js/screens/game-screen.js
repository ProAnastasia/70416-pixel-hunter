import {generateRandomNumber} from '../utils/utils';
import {ScreenName, GameParam, AnswerType} from '../data/constants';
import HeaderView from '../views/header-view';
import LevelTypeOne from '../views/level-type-1-view';
import LevelTypeTwo from '../views/level-type-2-view';
import LevelTypeThree from '../views/level-type-3-view';
import Application from '../application';

const levelViews = [LevelTypeOne, LevelTypeTwo, LevelTypeThree];
const RandomLevel = levelViews[generateRandomNumber(0, levelViews.length)];

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.gameState);
    this.screenContent = new RandomLevel(this.model.gameState);
    this.content = this.renderContent();
    this.timer = null;
    this.checkAnswerTime = this.checkAnswerTime.bind(this);
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
    this.screenContent.onAnswer = this.onAnswer.bind(this);
    this.startTimer();
  }

  changeLevel() {
    const isDead = this.model.checkIsDead();
    const RandomView = levelViews[generateRandomNumber(0, levelViews.length)];

    if (!isDead) {
      this.header = new HeaderView(this.model.gameState);
      this.screenContent = new RandomView(this.model.gameState);
      this.content = this.renderContent();
      this.startGame();
    }
  }

  onAnswer(isAnswerCorrect) {
    let timer;
    let answerType;
    console.log(isAnswerCorrect);
    this.stopTimer();

    if (isAnswerCorrect) {
      timer = this.model.gameState.timer;
      answerType = this.checkAnswerTime(timer);
    } else {
      answerType = AnswerType.WRONG;
    }
    this.model.saveAnswer(answerType);

  }

  checkAnswerTime(time) {
    const answerTime = GameParam.QUESTION_DURATION - time;
    let answerType;

    switch (true) {
      case (answerTime < GameParam.QUESTION_TIME_FAST):
        answerType = AnswerType.FAST;
        break;
      case (answerTime <= GameParam.QUESTION_TIME_SLOW):
        answerType = AnswerType.CORRECT;
        break;
      default:
        answerType = AnswerType.SLOW;
    }

    return answerType;
  }

  init() {
    this.header.onBackButtonClick = () => {
      Application.showScreen(ScreenName.GREETING);
    };

    this.startGame();
  }
}
