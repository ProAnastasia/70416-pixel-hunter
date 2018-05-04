import AbstractView from './abstract-view';
import statisticsBar from '../components/statistics-bar';
import footerTemplate from "../components/footer";

export default class LevelTypeTwoView extends AbstractView {
  constructor(gameState, data) {
    super();
    this.gameState = gameState;
    this.gameData = data;
    this.title = this.gameData[`question`];
    this.images = this.adaptImagesTypes();
    this.onAnswer = this.onAnswer.bind(this);
  }

  get template() {
    return `${this.renderGame()}
            ${footerTemplate}`;
  }

  adaptImagesTypes() {
    return this.gameData[`answers`].map((image) => {
      if (image.type === `painting`) {
        image.type = `paint`;
      }
      return image;
    });
  }

  renderGame() {
    return `<div class="game">
              <p class="game__task">${this.title}</p>
              <form class="game__content">
                <div class="game__option">
                  <img src=${this.images[0].image.url} alt="Option 1" width="468" height="458">
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
                  <img src=${this.images[1].image.url} alt="Option 2" width="468" height="458">
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

    radioButtons.forEach((radioButton) => {
      radioButton.addEventListener(`change`, () => {
        const selectedRadioButtons = radioButtons.filter((item) => item.checked === true);

        if (selectedRadioButtons.length === 2) {
          const areAnswersCorrect = selectedRadioButtons[0].value === this.images[0].type &&
                                    selectedRadioButtons[1].value === this.images[1].type;

          this.onAnswer(areAnswersCorrect);
        }
      });
    });
  }

  // eslint-disable-next-line no-unused-vars
  onAnswer(areAnswersCorrect) {}
}
