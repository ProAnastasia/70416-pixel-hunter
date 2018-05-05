import {ScreenName, DATA_SOURCE, DEFAULT_PLAYER, APP_ID} from './data/constants';
import {loadData, saveData} from './utils/utils';
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

let loadedData;

export default class Application {
  static showStatistics(model) {
    const player = model.player;

    this.saveResults(model.result, player)
        .then(() => {
          const statisticsScreen = new StatisticsScreen(model);

          statisticsScreen.init();
          showScreen(statisticsScreen.element);
        });
  }

  static showGame(player) {
    const model = new GameModel(player, loadedData);
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

  static loadData() {
    const questionsSource = `${DATA_SOURCE}/questions`;

    loadData(questionsSource)
        .then(function (data) {
          loadedData = data;
        })
        .catch((error) => {
          throw new Error(error);
        });
  }

  static saveResults(data, player = DEFAULT_PLAYER) {
    const statisticsAddress = `${DATA_SOURCE}/stats/${APP_ID}-${player}`;

    return saveData(data, statisticsAddress);
  }
}
