import {ScreenName} from '../data/constants';
import Application from '../application';
import HeaderView from '../views/header-view';
import RulesView from '../views/rules-view';

export default class RulesScreen {
  constructor() {
    this.screenContent = new RulesView();
    this.header = new HeaderView();
    this.content = this.renderContent();
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

  init() {
    this.header.onBackButtonClick = () => {
      Application.showScreen(ScreenName.GREETING);
    };

    this.screenContent.onFormSubmit = (player) => {
      Application.showGame(player);
    };
  }
}
