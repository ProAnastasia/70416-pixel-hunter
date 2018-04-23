import GreetingView from '../view/greeting-view';
import showScreen from '../modules/show-screen';
import rules from './rules';

const screen = new GreetingView();

screen.onButtonClick = () => {
  showScreen(rules());
};

export default screen.element;
