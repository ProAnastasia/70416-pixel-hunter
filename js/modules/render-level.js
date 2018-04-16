import showScreen from '../modules/show-screen';
import levelTypeOne from '../templates/level-type-1';
import levelTypeTwo from '../templates/level-type-2';
import levelTypeThree from '../templates/level-type-3';

const levels = {
  'one-image': levelTypeOne,
  'two-images': levelTypeTwo,
  'three-images': levelTypeThree
};

export const renderLevel = (levelType) => {
  showScreen(levels[levelType]);
};
