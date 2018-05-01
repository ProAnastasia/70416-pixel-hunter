import GreetingScreen from './screens/greeting';
import StatisticsScreen from './screens/statistics';
import showScreen from './modules/show-screen';

export default class Application {
  static showGreeting() {
    const greeting = new GreetingScreen();

    showScreen(greeting.element);
  }

  static showStatistics() {
    const statistics = new StatisticsScreen();

    showScreen(statistics.element);
  }
}
