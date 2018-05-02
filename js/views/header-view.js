import AbstractView from './abstract-view';
import {Icon} from '../data/constants';

export default class HeaderView extends AbstractView {
  constructor(gameState) {
    super();

    this.state = gameState;
  }

  renderBackButton() {
    return `<div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>`;
  }

  renderStatistics() {
    const {lives, timer} = this.gameState;

    return `<h1 class="game__timer">${timer}</h1>
             <div class="game__lives">
               ${new Array(3 - lives).fill(Icon.LIFE_EMPTY).join(``)}
               ${new Array(lives).fill(Icon.LIFE_FULL).join(``)}
             </div>`;
  }

  get template() {
    const isStateAvailable = !!this.gameState;

    return `<header>
              ${this.renderBackButton()}
              ${isStateAvailable ? this.renderStatistics() : ``}
            </header>`;
  }

  bind() {
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, this.onBackButtonClick);
  }

  onBackButtonClick() {}
}

