import AbstractView from './abstract-view';
import footerTemplate from "../templates/footer";

export default class IntroView extends AbstractView {
  constructor() {
    super();
    this.description = `Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`;
  }

  get template() {
    return `<div id="main" class="central__content">
              <div id="intro" class="intro">
                <h1 class="intro__asterisk">*</h1>
                <p class="intro__motto"><sup>*</sup>${this.description}</p>
              </div>
            </div>
            ${footerTemplate}`;
  }

  bind() {
    const toggleScreenButton = this.element.querySelector(`.intro__asterisk`);

    toggleScreenButton.addEventListener(`click`, () => {
      this.onButtonClick();
    });
  }

  onButtonClick() {}
}
