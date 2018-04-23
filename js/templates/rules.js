import {getRandomElement} from '../utils/utils';
import {backButtonClickHandler} from '../utils/back-button';
import {renderLevel} from '../modules/render-level';
import RulesView from '../view/rules-view';

import levelTypes from '../data/level-types';
import gameState from '../modules/get-game-state';

const screen = new RulesView();
const screenLayout = screen.element;

screen.onBackButtonClick = backButtonClickHandler(screenLayout);

screen.onFormSubmit = (input) => {
  const generatedLevelType = getRandomElement(levelTypes).type;

  renderLevel(generatedLevelType, gameState);
  input.value = ``;
};

screen.onInputChange = (event, button) => {
  button.disabled = event.target.value === ``;
};

export default screen.element;
