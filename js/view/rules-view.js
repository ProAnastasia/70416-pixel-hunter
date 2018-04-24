import AbstractView from './abstract-view';
import renderHeader from "../screens/header";
import footerTemplate from "../screens/footer";

export default class RulesView extends AbstractView {
  constructor() {
    super();
    this.title = `Правила`;
    this.description = `Угадай 10 раз для каждого изображения фото`;
  }

  get template() {
    return `${renderHeader(true, false)}
            <div class="rules">
              <h1 class="rules__title">${this.title}</h1>
              <p class="rules__description">${this.description} <img
                src="img/photo_icon.png" width="16" height="16"> или рисунок <img
                src="img/paint_icon.png" width="16" height="16" alt="">.<br>
                Фотографиями или рисунками могут быть оба изображения.<br>
                На каждую попытку отводится 30 секунд.<br>
                Ошибиться можно не более 3 раз.<br>
                <br>
                Готовы?
              </p>
              <form class="rules__form">
                <input class="rules__input" type="text" placeholder="Ваше Имя">
                <button class="rules__button  continue" type="submit" disabled>Go!</button>
              </form>
            </div>
            ${footerTemplate}`;
  }

  bind() {
    this.onBackButtonClick();

    const form = this.element.querySelector(`.rules__form`);
    const formInputName = form.querySelector(`.rules__input`);
    const formButton = form.querySelector(`.rules__button`);

    formInputName.addEventListener(`input`, (event) => {
      this.onInputChange(event, formButton);
    });

    form.addEventListener(`submit`, (event) => {
      event.preventDefault();

      this.onFormSubmit(formInputName);
    });
  }

  onBackButtonClick() {}

  // eslint-disable-next-line no-unused-vars
  onFormSubmit(input) {}

  // eslint-disable-next-line no-unused-vars
  onInputChange(event) {}
}
