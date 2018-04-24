import AbstractView from './abstract-view';
import renderHeader from "../screens/header";
import statisticsBar from '../screens/statistics-bar';
import footerTemplate from "../screens/footer";

export default class LevelTypeOneView extends AbstractView {
  constructor(gameState = {}, images = []) {
    super();
    this.gameState = gameState;
    this.title = `Угадай, фото или рисунок?`;
    this.images = images;
    this.type = this.images[0].type;
    this.onRadioChangeHandler = this.onRadioChangeHandler.bind(this);
  }

  get template() {
    return `
      ${renderHeader(true, true)}
      ${this.renderGame()}
      ${footerTemplate}`;
  }

  renderStatistics({answers} = []) {
    return statisticsBar(answers);
  }

  renderGame() {
    return `<div class="game">
             <p class="game__task">${this.title}</p>
              <form class="game__content  game__content--wide">
                <div class="game__option">
                  <img src=${this.images[0].src} alt="Option 1" width="705" height="455">
                  <label class="game__answer  game__answer--photo">
                    <input name="question1" type="radio" value="photo">
                    <span>Фото</span>
                  </label>
                  <label class="game__answer  game__answer--wide  game__answer--paint">
                    <input name="question1" type="radio" value="paint">
                    <span>Рисунок</span>
                  </label>
                </div>
              </form>
              <div class="stats">
                ${this.renderStatistics(this.gameState)}
              </div>
            </div>`;
  }

  bind() {
    const answerButtons = [...this.element.querySelectorAll(`input[type="radio"]`)];
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, this.onBackButtonClick);

    answerButtons.forEach((answerButton) => {
      answerButton.addEventListener(`change`, (e) => {
        const isAnswerCorrect = e.target.value === this.type;

        this.onRadioChangeHandler(isAnswerCorrect);
      });
    });
  }

  onBackButtonClick() {}

  // eslint-disable-next-line no-unused-vars
  onRadioChangeHandler(event, type) {}
}
