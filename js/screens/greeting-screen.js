import {ScreenName} from '../data/constants';
import Application from '../application';
import GreetingView from '../views/greeting-view';

export default class GreetingScreen {
  constructor() {
    this.content = new GreetingView();
  }

  get element() {
    return this.content.element;
  }

  init() {
    this.content.onButtonClick = () => {
      Application.showScreen(ScreenName.RULES);
    };
  }
}
