import {ScreenName} from './data/constants';
import IntroScreen from './screens/intro';
import GreetingScreen from './screens/greeting';
import RulesScreen from './screens/rules';
import StatisticsScreen from './screens/statistics';
// import GameScreen from './screens/game-screen';
import showScreen from './modules/show-screen';

const screens = {
  [ScreenName.INTRO]: IntroScreen,
  [ScreenName.GREETING]: GreetingScreen,
  [ScreenName.RULES]: RulesScreen
};

export default class Application {
  static showStatistics() {
    const statistics = new StatisticsScreen();

    showScreen(statistics.element);
  }

  static showGame() {
    // presenter logic
    console.log(`trying to show screen`);
  }

  /**
   * Show screen according to passed param
   * @param {String} name
   */
  static showScreen(name) {
    const SelectedScreen = screens[name];
    const currentScreen = new SelectedScreen();

    currentScreen.init();
    showScreen(currentScreen.element);
  }
}
