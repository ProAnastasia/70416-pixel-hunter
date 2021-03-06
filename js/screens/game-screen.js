import {ScreenName, GameParam, AnswerType} from '../data/constants';
import HeaderView from '../views/header-view';
import LevelTypeOne from '../views/level-type-1-view';
import LevelTypeTwo from '../views/level-type-2-view';
import LevelTypeThree from '../views/level-type-3-view';
import Application from '../application';

/**
 * enum for views
 * @type {Function}
 */
const LevelView = {
  [`tinder-like`]: LevelTypeOne,
  [`two-of-two`]: LevelTypeTwo,
  [`one-of-three`]: LevelTypeThree
};

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.gameState);
    this.screenContent = this.selectView();
    this.content = document.createElement(`div`);
    this.content.appendChild(this.header.element);
    this.content.appendChild(this.screenContent.element);
    this.timer = null;
    this.checkAnswerTime = this.checkAnswerTime.bind(this);
  }

  get element() {
    return this.content;
  }

  selectView() {
    const {gameData, gameState} = this.model;
    const index = gameState.questionNum === GameParam.QUESTIONS_TOTAL_NUM ? GameParam.QUESTIONS_TOTAL_NUM - 1 : gameState.questionNum;
    const currentQuestion = gameData[index];
    const currentType = currentQuestion.type;

    return new LevelView[currentType](gameState, currentQuestion);
  }

  startTimer() {
    const setTimer = () => {
      this.model.decreaseTimer();

      if (this.model.gameState.timer >= 0) {
        this.updateHeader();
      } else {
        this.checkAnswer(false);
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
    this.screenContent.onAnswer = this.checkAnswer.bind(this);
    this.startTimer();
  }

  changeLevel() {
    const isDead = this.model.checkIsDead();

    this.model.stopTimer();

    if (!isDead) {
      this.rederNewLevel();
      this.startGame();
    } else {
      Application.showStatistics(this.model);
    }
  }

  rederNewLevel() {
    const newHeader = new HeaderView(this.model.gameState);
    const newLevel = this.selectView();

    this.content.replaceChild(newHeader.element, this.header.element);
    this.content.replaceChild(newLevel.element, this.screenContent.element);
    this.header = newHeader;
    this.screenContent = newLevel;
  }

  checkAnswer(isAnswerCorrect) {
    let timer;
    let answerType;

    this.stopTimer();

    if (isAnswerCorrect) {
      timer = this.model.gameState.timer;
      answerType = this.checkAnswerTime(timer);
    } else {
      answerType = AnswerType.WRONG;
      this.model.decreaseLives();
    }
    this.model.saveAnswer(answerType);
    this.isNextAvailable();
  }

  isNextAvailable() {
    const isDead = this.model.checkIsDead();
    const isNextLevelAvailable = this.model.isNextLevelExist();

    if (isDead || !isNextLevelAvailable) {
      if (!isDead) {
        this.model.setVictory();
      }

      Application.showStatistics(this.model);

      return;
    }

    this.changeLevel();
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
