import {ScreenName} from './data/constants';
import IntroScreen from './screens/intro-screen';
import GreetingScreen from './screens/greeting-screen';
import RulesScreen from './screens/rules-screen';
import StatisticsScreen from './screens/statistics-screen';
import GameModel from './model/game-model';
import GameScreen from './screens/game-screen';
import showScreen from './modules/show-screen';

const screens = {
  [ScreenName.INTRO]: IntroScreen,
  [ScreenName.GREETING]: GreetingScreen,
  [ScreenName.RULES]: RulesScreen
};

export default class Application {
  static showStatistics(gameState, total) {
    const statisticsScreen = new StatisticsScreen(gameState, total);

    statisticsScreen.init();
    showScreen(statisticsScreen.element);
  }

  static showGame(player) {
    const model = new GameModel(player);
    const gameScreen = new GameScreen(model);

    gameScreen.init();
    showScreen(gameScreen.element);
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
