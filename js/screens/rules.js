import {getRandomElement} from '../utils/utils';
import showScreen from '../modules/show-screen';
import {renderLevel} from '../modules/render-level';
import RulesView from '../view/rules-view';

import levelTypes from '../data/level-types';
import gameState from '../modules/get-game-state';
import greeting from "./greeting";

const screen = new RulesView();

screen.onBackButtonClick = () => {
  showScreen(greeting);
};

screen.onFormSubmit = () => {
  const generatedLevelType = getRandomElement(levelTypes).type;

  renderLevel(generatedLevelType, gameState);
};

export default screen.element;
