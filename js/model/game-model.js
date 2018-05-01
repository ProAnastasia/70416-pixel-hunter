import {INITIAL_GAME_STATE, GameParam} from '../data/constants';

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
    return GameParam.QUESTION_DURATION - this._gameState.timer;
  }

  checkIsDead() {
    return this._gameState.lives <= 0;
  }

  restartGame() {
    this._gameState = INITIAL_GAME_STATE;
  }

  decreaseTimer() {
    this._gameState.timer--;
  }

  stopTimer() {
    this._gameState.timer = INITIAL_GAME_STATE.timer;
  }
}
