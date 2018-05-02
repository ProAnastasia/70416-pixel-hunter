import AbstractView from './abstract-view';
import footerTemplate from "../components/footer";

export default class RulesView extends AbstractView {
  constructor() {
    super();
    this.title = `Правила`;
    this.description = `Угадай 10 раз для каждого изображения фото`;
  }

  get template() {
    return `<div class="rules">
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
    const form = this.element.querySelector(`.rules__form`);
    const formInputName = form.querySelector(`.rules__input`);
    const formButton = form.querySelector(`.rules__button`);

    formInputName.addEventListener(`input`, (event) => {
      formButton.disabled = event.target.value === ``;
    });

    form.addEventListener(`submit`, (event) => {
      const playerName = formInputName.value;

      event.preventDefault();

      this.onFormSubmit(playerName);
      formInputName.value = ``;
    });
  }

  onFormSubmit() {}
}
