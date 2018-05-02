import {ScreenName} from '../data/constants';
import Application from '../application';
import HeaderView from '../views/header-view';
import RulesView from '../views/rules-view';

export default class RulesScreen {
  constructor() {
    this.content = this.renderContent();
  }

  get element() {
    return this.content;
  }

  renderContent() {
    const header = new HeaderView();
    const screenContent = new RulesView();
    const container = document.createElement(`div`);

    container.appendChild(header.element);
    container.appendChild(screenContent.element);

    return container;
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
