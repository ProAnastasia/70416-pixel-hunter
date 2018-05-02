import showScreen from '../modules/show-screen';
import {GameParam} from '../data/constants';
import {levelTypeOne} from '../screens/level-type-1-screen';
import {levelTypeTwo} from '../screens/level-type-2-screen';
import {levelTypeThree} from '../screens/level-type-3-screen';
import statisticsScreen from '../screens/statistics-screen';

const levels = {
  [`one-image`]: levelTypeOne,
  [`two-images`]: levelTypeTwo,
  [`three-images`]: levelTypeThree
};

export const renderLevel = (levelType, currentGameState) => {
  if (currentGameState.lives === 0 || currentGameState.questionNum === GameParam.QUESTIONS_TOTAL_NUM) {
    currentGameState.isGameWon = currentGameState.lives !== 0;
    showScreen(statisticsScreen(currentGameState));

    return;
  }

  showScreen(levels[levelType](currentGameState));
};
