import {ScreenName} from '../data/constants';
import Application from '../application';
import IntroView from '../view/intro-view';

export default class IntroScreen {
  constructor() {
    this.content = new IntroView();
  }

  get element() {
    return this.content.element;
  }

  init() {
    this.content.onButtonClick = () => {
      Application.showScreen(ScreenName.GREETING);
    };
  }
}
