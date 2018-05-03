import {generateRandomImages} from '../utils/utils';
import AbstractView from './abstract-view';
import statisticsBar from '../components/statistics-bar';
import footerTemplate from "../components/footer";

export default class LevelTypeThreeView extends AbstractView {
  constructor(gameState = {}) {
    super();
    this.gameState = gameState;
    this.title = `Найдите рисунок среди изображений`;
    this.images = generateRandomImages(3, `paint`);
    this.onAnswer = this.onAnswer.bind(this);
  }

  get template() {
    return `${this.renderGame()}
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

    answerButtons.forEach((answerButton) => {
      answerButton.addEventListener(`click`, (e) => {
        if (e.target.classList.contains(`game__option`)) {
          const imageSrc = e.target.querySelector(`img`).src;
          const image = this.images.filter((elem) => elem.src === imageSrc)[0];
          const isCorrectAnswer = image.type === `paint`;

          this.onAnswer(isCorrectAnswer);
        }
      });
    });
  }

  // eslint-disable-next-line no-unused-vars
  onAnswer(isCorrectAnswer) {}
}