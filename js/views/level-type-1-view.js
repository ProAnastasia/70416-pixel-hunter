import AbstractView from './abstract-view';
import statisticsBar from '../components/statistics-bar';
import footerTemplate from "../components/footer";

export default class LevelTypeOneView extends AbstractView {
  constructor(gameState, data) {
    super();
    this.gameState = gameState;
    this.gameData = data;
    this.title = this.gameData[`question`];
    this.images = this.gameData.answers;
    this.type = this.images[0].type === `painting` ? `paint` : this.images[0].type;
    this.onAnswer = this.onAnswer.bind(this);
  }

  get template() {
    return `
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
                  <img src=${this.images[0].image.url} alt="Option 1" width="705" height="455">
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

    answerButtons.forEach((answerButton) => {
      answerButton.addEventListener(`change`, (e) => {
        const isAnswerCorrect = e.target.value === this.type;
        this.onAnswer(isAnswerCorrect);
      });
    });
  }

  // eslint-disable-next-line no-unused-vars
  onAnswer(isAnswerCorrect) {}
}
