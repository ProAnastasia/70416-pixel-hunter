import AbstractView from './abstract-view';
import statisticsBar from '../components/statistics-bar';
import footerTemplate from "../components/footer";

export default class LevelTypeThreeView extends AbstractView {
  constructor(gameState, data) {
    super();
    this.gameState = gameState;
    this.gameData = data;
    this.title = this.gameData[`question`];
    this.images = this.gameData[`answers`];
    this.type = this.getRequiredType();
    this.onAnswer = this.onAnswer.bind(this);
  }

  get template() {
    return `${this.renderGame()}
            ${footerTemplate}`;
  }

  getRequiredType() {
    const savedTypes = {
      [`photo`]: 0,
      [`painting`]: 0
    };

    this.images.forEach((image) => {
      savedTypes[image.type]++;
    });

    return savedTypes[`photo`] === 1 ? `photo` : `painting`;
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
                <img src=${image.image.url} alt="Option 1" width="304" height="455">
              </div>`;
    }).join(` `);
  }

  renderStatistics({answers} = []) {
    return statisticsBar(answers);
  }

  bind() {
    const answerButtons = [...this.element.querySelectorAll(`.game__option`)];

    answerButtons.forEach((answerButton) => {
      answerButton.addEventListener(`click`, (e) => {
        if (e.target.classList.contains(`game__option`)) {
          const imageSrc = e.target.querySelector(`img`).src;
          const image = this.images.filter((elem) => elem.image.url === imageSrc)[0];
          const isCorrectAnswer = image.type === this.type;

          this.onAnswer(isCorrectAnswer);
        }
      });
    });
  }

  onAnswer() {}
}
