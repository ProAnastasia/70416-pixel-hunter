import GreetingView from '../view/greeting-view';
import showScreen from '../modules/show-screen';
import rules from './rules';

const greetingScreen = new GreetingView();

greetingScreen.onButtonClick = () => {
  showScreen(rules);
};

export default greetingScreen;
