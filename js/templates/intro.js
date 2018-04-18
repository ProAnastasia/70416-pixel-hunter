import {createElementFromTemplate} from '../utils';
import showScreen from '../modules/show-screen';
import footer from './footer';
import greeting from './greeting';

const screenLayout = `<div id="main" class="central__content">
                        <div id="intro" class="intro">
                          <h1 class="intro__asterisk">*</h1>
                          <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
                        </div>
                      </div>`;

const screenElement = createElementFromTemplate(`${screenLayout}${footer}`);
const toggleScreenButton = screenElement.querySelector(`.intro__asterisk`);

toggleScreenButton.addEventListener(`click`, () => {
  showScreen(greeting());
});

export default screenElement;
