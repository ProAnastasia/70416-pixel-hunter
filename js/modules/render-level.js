import showScreen from '../modules/show-screen';
import {GameParam} from '../data/constants';
import {levelTypeOne} from '../templates/level-type-1';
import {levelTypeTwo} from '../templates/level-type-2';
import {levelTypeThree} from '../templates/level-type-3';
import {statisticsScreen} from '../templates/statistics';

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
