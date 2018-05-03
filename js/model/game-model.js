import {INITIAL_GAME_STATE, GameParam} from '../data/constants';
import {getResultScores} from '../modules/get-result-scores';

export default class GameModel {
  constructor(player) {
    this.player = player;
    this._gameState = {};
    this.restartGame();
  }

  get gameState() {
    return this._gameState;
  }

  get currentTimeValue() {
    return this._gameState.timer;
  }

  get livesNum() {
    return this._gameState.lives;
  }

  decreaseLives() {
    this._gameState.lives--;
  }

  saveAnswer(answer) {
    this._gameState.answers[this._gameState.questionNum] = answer;
    this._gameState.questionNum++;
  }

  checkIsDead() {
    return this._gameState.lives <= 0;
  }

  restartGame() {
    this._gameState = Object.assign({}, INITIAL_GAME_STATE);
  }

  setVictory() {
    this._gameState.isGameWon = true;
  }

  isNextLevelExist() {
    return this._gameState.questionNum !== GameParam.QUESTIONS_TOTAL_NUM;
  }

  decreaseTimer() {
    this._gameState.timer--;
  }

  stopTimer() {
    this._gameState.timer = INITIAL_GAME_STATE.timer;
  }

  getTotalScores() {
    return getResultScores(this._gameState.answers, this._gameState.lives);
  }
}
