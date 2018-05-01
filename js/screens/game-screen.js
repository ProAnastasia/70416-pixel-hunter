import LevelTypeOne from '../view/level-type-1-view';
import LevelTypeTwo from '../view/level-type-2-view';
import LevelTypeThree from '../view/level-type-3-view';
import Application from '../application';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.content = new LevelTypeOne(this.model.gameState);
  }

  get element() {
    return this.content.element;
  }

  init() {

  }
}
