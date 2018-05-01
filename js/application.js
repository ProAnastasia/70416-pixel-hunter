import {ScreenName} from './data/constants';
import GreetingScreen from './screens/greeting';
import StatisticsScreen from './screens/statistics';
import IntroScreen from './screens/intro';
import RulesScreen from './screens/rules';
// import GameScreen from './screens/game-screen';
import showScreen from './modules/show-screen';

const screens = {
  [ScreenName.GREETING]: GreetingScreen,
  [ScreenName.RULES]: RulesScreen,
  [ScreenName.GAME_SCREEN]: 'GameScreen'
};

export default class Application {
  static showIntro() {
    const intro = new IntroScreen();

    showScreen(intro.element);
    intro.init();
  }

  static showStatistics() {
    const statistics = new StatisticsScreen();

    showScreen(statistics.element);
  }

  /**
   * Show screen according to passed param
   * @param {String} name
   */
  static showScreen(name) {
    const SelectedScreen = screens[name];
    const currentScreen = new SelectedScreen();

    showScreen(currentScreen.element);
    currentScreen.init();
  }
}
