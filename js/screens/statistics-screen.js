import {ScreenName} from '../data/constants';
import Application from '../application';
import HeaderView from '../views/header-view';
import StatisticsView from '../views/statistics-view';

export default class StatisticsScreen {
  constructor(model) {
    this.model = model;
    this.player = this.model.player;
    this.gameState = this.model.gameState;
    this.total = this.model.getTotalScores();
    this.screenContent = new StatisticsView(this.gameState, this.total);
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
  }
}
