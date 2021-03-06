import {INITIAL_GAME_STATE, GameParam} from '../data/constants';
import {getResultScores} from '../modules/get-result-scores';

export default class GameModel {
  constructor(player, data) {
    this._player = player;
    this._gameData = data;
    this._gameState = {};
    this._result = {};
    this.restartGame();
  }

  get gameState() {
    return this._gameState;
  }

  get gameData() {
    return this._gameData;
  }

  get player() {
    return this._player;
  }

  get result() {
    const {lives, answers} = this.gameState;

    return {
      totalPoints: this.getTotalScores(),
      lives,
      answers: [...answers],
      isGameWon: this.gameState.isGameWon
    };
  }

  decreaseLives() {
    this.gameState.lives--;
  }

  saveAnswer(answer) {
    this.gameState.answers[this._gameState.questionNum] = answer;
    this.gameState.questionNum++;
  }

  checkIsDead() {
    return this.gameState.lives <= 0;
  }

  restartGame() {
    this._gameState = Object.assign({}, INITIAL_GAME_STATE);
    this.gameState.answers = [...INITIAL_GAME_STATE.answers];
  }

  setVictory() {
    this.gameState.isGameWon = true;
  }

  isNextLevelExist() {
    return this.gameState.questionNum !== GameParam.QUESTIONS_TOTAL_NUM;
  }

  decreaseTimer() {
    this.gameState.timer--;
  }

  stopTimer() {
    this.gameState.timer = INITIAL_GAME_STATE.timer;
  }

  getTotalScores() {
    return getResultScores(this.gameState.answers, this.gameState.lives);
  }
}
