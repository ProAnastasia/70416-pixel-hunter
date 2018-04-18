import {createElementFromTemplate} from '../utils';
import renderHeader from './header';
import showScreen from '../modules/show-screen';
import getStatistics from '../templates/statistics-bar';
import {getResultScores} from '../modules/get-result-scores';
import footer from './footer';
import greeting from './greeting';
import {GamePoint} from '../data/constants';

export const statisticsScreen = (gameState) => {
  const title = gameState.isGameWon ? `<h1>Победа!</h1>` : `<h1>Проигрыш</h1>`;
  const statBar = getStatistics((gameState.answers));

  const answersCount = {
    fastAnswersNum: gameState.answers.filter((answer) => answer === `fast`).length,
    slowAnswersNum: gameState.answers.filter((answer) => answer === `slow`).length,
    correctAnswersNum: gameState.answers.filter((answer) => answer === `correct`).length,
  };

  const screenLayout = `<div class="result">
                          ${title}
                          <table class="result__table">
                            <tr>
                              <td class="result__number">1.</td>
                              <td colspan="2">
                                ${statBar}
                              </td>
                              <td class="result__points">×&nbsp;${GamePoint.ANSWER_CORRECT}</td>
                              <td class="result__total">${getResultScores(gameState.answers, gameState.lives)}</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="result__extra">Бонус за скорость:</td>
                              <td class="result__extra">${answersCount.fastAnswersNum}&nbsp;<span class="stats__result stats__result--fast"></span></td>
                              <td class="result__points">×&nbsp;${GamePoint.ANSWER_QUICK}</td>
                              <td class="result__total">${GamePoint.ANSWER_QUICK * answersCount.fastAnswersNum}</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="result__extra">Бонус за жизни:</td>
                              <td class="result__extra">${gameState.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
                              <td class="result__points">×&nbsp;${GamePoint.LIFE_VALUE}</td>
                              <td class="result__total">${gameState.lives * GamePoint.LIFE_VALUE}</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="result__extra">Штраф за медлительность:</td>
                              <td class="result__extra">${answersCount.slowAnswersNum}&nbsp;<span class="stats__result stats__result--slow"></span></td>
                              <td class="result__points">×&nbsp;${answersCount.slowAnswersNum}</td>
                              <td class="result__total">${0 - (answersCount.slowAnswersNum * 50)}</td>
                            </tr>
                            <tr>
                              <td colspan="5" class="result__total  result__total--final">${getResultScores(gameState.answers, gameState.lives)}</td>
                            </tr>
                          </table>
                          <table class="result__table">
                            <tr>
                              <td class="result__number">2.</td>
                              <td>
                                ${statBar}
                              </td>
                              <td class="result__total"></td>
                              <td class="result__total  result__total--final">
                              ${gameState.isGameWon ? `Win` : `Fail`}
                              </td>
                            </tr>
                          </table>
                          <table class="result__table">
                            <tr>
                              <td class="result__number">3.</td>
                              <td colspan="2">
                                ${statBar}
                              </td>
                              <td class="result__points">×&nbsp;${GamePoint.ANSWER_CORRECT}</td>
                              <td class="result__total">${getResultScores(gameState.answers, gameState.lives)}</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="result__extra">Бонус за жизни:</td>
                              <td class="result__extra">${gameState.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
                              <td class="result__points">×&nbsp;${GamePoint.LIFE_VALUE}</td>
                              <td class="result__total">${gameState.lives * GamePoint.LIFE_VALUE}</td>
                            </tr>
                            <tr>
                              <td colspan="5" class="result__total  result__total--final">${getResultScores(gameState.answers, gameState.lives)}</td>
                            </tr>
                          </table>
                        </div>`;

  const screenElement = createElementFromTemplate(`${renderHeader(true, false)}${screenLayout}${footer}`);
  const backButton = screenElement.querySelector(`.back`);


  backButton.addEventListener(`click`, () => {
    showScreen(greeting(gameState));
  });

  return screenElement;
};
