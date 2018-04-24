import AbstractView from './abstract-view';
import renderHeader from "../screens/header";
import statisticsBar from '../screens/statistics-bar';
import footerTemplate from "../screens/footer";

export default class LevelTypeTwoView extends AbstractView {
  constructor(gameState = {}, images = []) {
    super();
    this.gameState = gameState;
    this.title = `Угадайте для каждого изображения фото или рисунок?`;
    this.images = images;
    this.onRadioChangeHandler = this.onRadioChangeHandler.bind(this);
  }

  get template() {
    return `${renderHeader(true, true)}
            ${this.renderGame()}
            ${footerTemplate}`;
  }

  renderGame() {
    return `<div class="game">
              <p class="game__task">${this.title}</p>
              <form class="game__content">
                <div class="game__option">
                  <img src=${this.images[0].src} alt="Option 1" width="468" height="458">
                  <label class="game__answer game__answer--photo">
                    <input name="question1" type="radio" value="photo">
                    <span>Фото</span>
                  </label>
                  <label class="game__answer game__answer--paint">
                    <input name="question1" type="radio" value="paint">
                    <span>Рисунок</span>
                  </label>
                </div>
                <div class="game__option">
                  <img src=${this.images[1].src} alt="Option 2" width="468" height="458">
                  <label class="game__answer  game__answer--photo">
                    <input name="question2" type="radio" value="photo">
                    <span>Фото</span>
                  </label>
                  <label class="game__answer  game__answer--paint">
                    <input name="question2" type="radio" value="paint">
                    <span>Рисунок</span>
                  </label>
                </div>
              </form>
              <div class="stats">
                  ${this.renderStatistics(this.gameState)}
              </div>
            </div>`;
  }

  renderStatistics({answers} = []) {
    return statisticsBar(answers);
  }

  bind() {
    const radioButtons = [...this.element.querySelectorAll(`input[type=radio]`)];
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, this.onBackButtonClick);

    radioButtons.forEach((radioButton) => {
      radioButton.addEventListener(`change`, () => {
        const selectedRadioButtons = radioButtons.filter((item) => item.checked === true);

        if (selectedRadioButtons.length === 2) {
          const areAnswersCorrect = selectedRadioButtons[0].value === this.images[0].type &&
                                    selectedRadioButtons[1].value === this.images[1].type;

          this.onRadioChangeHandler(areAnswersCorrect);
        }
      });
    });
  }

  onBackButtonClick() {}

  // eslint-disable-next-line no-unused-vars
  onRadioChangeHandler(areAnswersCorrect) {}
}
