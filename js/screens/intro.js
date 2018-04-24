import IntroView from '../view/intro-view';
import showScreen from '../modules/show-screen';
import greeting from './greeting';

const screen = new IntroView();

screen.onButtonClick = () => {
  showScreen(greeting);
};

export default screen.element;
