import {ScreenName} from '../data/constants';
import Application from '../application';
import RulesView from '../view/rules-view';

export default class RulesScreen {
  constructor() {
    this.content = new RulesView();
  }

  get element() {
    return this.content.element;
  }

  init() {
    this.content.onBackButtonClick = () => {
      Application.showScreen(ScreenName.GREETING);
    };

    this.content.onFormSubmit = (player) => {
      Application.showGame(player);
    };
  }
}
