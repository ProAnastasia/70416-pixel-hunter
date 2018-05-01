import {ScreenName} from './data/constants';
import GreetingScreen from './screens/greeting';
import StatisticsScreen from './screens/statistics';
import IntroScreen from './screens/intro';
import RulesScreen from './screens/rules';
// import GameScreen from './screens/game-screen';
import showScreen from './modules/show-screen';

const screens = {
  [ScreenName.INTRO]: IntroScreen,
  [ScreenName.RULES]: RulesScreen,
  [ScreenName.GAME_SCREEN]: 'GameScreen'
};

export default class Application {
  static showGreeting() {
    const greeting = new GreetingScreen();

    showScreen(greeting.element);
  }

  static showStatistics() {
    const statistics = new StatisticsScreen();

    showScreen(statistics.element);
  }

  static showScreen(name) {
    const currentScreen = new screens[name]();

    showScreen(currentScreen.element);
    currentScreen.init();
  }
}
