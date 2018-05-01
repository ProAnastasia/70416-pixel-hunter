import {ScreenName} from '../data/constants';
import Application from '../application';
import GreetingView from '../view/greeting-view';
// import showScreen from '../modules/show-screen';
// import rules from './rules';
//
// const greetingScreen = new GreetingView();
//
// greetingScreen.onButtonClick = () => {
//   showScreen(rules);
// };
//
// export default greetingScreen;

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
