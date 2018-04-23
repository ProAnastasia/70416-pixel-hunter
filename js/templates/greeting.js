import greeting from '../view/greeting-view';
import showScreen from '../modules/show-screen';
import rules from './rules';

greeting.onButtonClick = () => {
  showScreen(rules);
};

export default greeting.element;
