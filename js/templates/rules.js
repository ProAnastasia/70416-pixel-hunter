import {createElementFromTemplate} from '../utils';
import showScreen from '../modules/show-screen';
import renderHeader from './header';
import footer from './footer';
import greeting from './greeting';

const screenLayout = `<div class="rules">
                        <h1 class="rules__title">Правила</h1>
                        <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
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
                      </div>`;

const screenElement = createElementFromTemplate(`${renderHeader(true, false)}${screenLayout}${footer}`);
const backButton = screenElement.querySelector(`.back`);
const form = screenElement.querySelector(`.rules__form`);
const formInputName = form.querySelector(`.rules__input`);
const formButton = form.querySelector(`.rules__button`);

backButton.addEventListener(`click`, () => {
  showScreen(greeting);
});

formInputName.addEventListener(`input`, (event) => {
  formButton.disabled = event.target.value === ``;
});

form.addEventListener(`submit`, (event) => {
  event.preventDefault();

  showScreen(levelFirst);
});

export default screenElement;
