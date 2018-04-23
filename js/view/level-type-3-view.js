import AbstractView from './abstract-view';
import renderHeader from "../templates/header";
import statisticsBar from '../templates/statistics-bar';
import footerTemplate from "../templates/footer";

export default class LevelTypeThreeView extends AbstractView {
  constructor(gameState = {}, images = []) {
    super();
    this.gameState = gameState;
    this.title = `Найдите рисунок среди изображений`;
    this.images = images;
    this.onButtonClickHandler = this.onButtonClickHandler.bind(this);
  }

  get template() {
    return `
      ${renderHeader(true, true)}
      ${this.renderGame()}
      ${footerTemplate}`;
  }

  renderGame() {
    return `<div class="game">
              <p class="game__task">${this.title}</p>
              <form class="game__content  game__content--triple">
               ${this.renderOptions()}
              </form>
               <div class="stats">
                ${this.renderStatistics(this.gameState)}
              </div>
            </div>`;
  }

  renderOptions() {
    return this.images.map((image) => {
      return `<div class="game__option">
                <img src=${image.src} alt="Option 1" width="304" height="455">
              </div>`;
    }).join(` `);
  }

  renderStatistics({answers} = []) {
    return statisticsBar(answers);
  }

  bind() {
    const answerButtons = [...this.element.querySelectorAll(`.game__option`)];

    this.onBackButtonClick();

    answerButtons.forEach((answerButton) => {
      answerButton.addEventListener(`click`, (e) => {
        this.onButtonClickHandler(e, this.images);
      });
    });
  }

  onBackButtonClick() {}

  // eslint-disable-next-line no-unused-vars
  onButtonClickHandler(event, images) {}
}
