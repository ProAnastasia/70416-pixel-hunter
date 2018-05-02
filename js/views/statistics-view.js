import AbstractView from './abstract-view';
import renderHeader from "./header-view";
import statisticsBar from '../screens/statistics-bar';
import footerTemplate from "../components/footer";

import {GamePoint} from '../data/constants';

export default class StatisticsView extends AbstractView {
  constructor(gameState = {}, totalScores) {
    super();
    this.gameState = gameState;
    this.isGameWon = this.gameState.isGameWon;
    this.title = this.isGameWon ? `<h1>Победа!</h1>` : `<h1>Проигрыш</h1>`;
    this.answers = this.gameState.answers;
    this.lives = this.gameState.lives;
    this.answersNum = {
      fastAnswersNum: this.answers.filter((answer) => answer === `fast`).length,
      slowAnswersNum: this.answers.filter((answer) => answer === `slow`).length,
      correctAnswersNum: this.answers.filter((answer) => answer === `correct`).length,
    };
    this.totalScores = totalScores;
  }

  get template() {
    return `${renderHeader(true, false)}
            ${this.renderScreen()}
            ${footerTemplate}`;
  }

  renderStatistics(answers = []) {
    return statisticsBar(answers);
  }

  renderScreen() {
    return `<div class="result">
                          ${this.title}
                          <table class="result__table">
                            <tr>
                              <td class="result__number">1.</td>
                              <td colspan="2">
                                ${this.renderStatistics(this.answers)}
                              </td>
                              <td class="result__points">×&nbsp;${GamePoint.ANSWER_CORRECT}</td>
                              <td class="result__total">${this.totalScores}</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="result__extra">Бонус за скорость:</td>
                              <td class="result__extra">${this.answersNum.fastAnswersNum}&nbsp;<span class="stats__result stats__result--fast"></span></td>
                              <td class="result__points">×&nbsp;${GamePoint.ANSWER_QUICK}</td>
                              <td class="result__total">${GamePoint.ANSWER_QUICK * this.answersNum.fastAnswersNum}</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="result__extra">Бонус за жизни:</td>
                              <td class="result__extra">${this.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
                              <td class="result__points">×&nbsp;${GamePoint.LIFE_VALUE}</td>
                              <td class="result__total">${this.lives * GamePoint.LIFE_VALUE}</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="result__extra">Штраф за медлительность:</td>
                              <td class="result__extra">${this.answersNum.slowAnswersNum}&nbsp;<span class="stats__result stats__result--slow"></span></td>
                              <td class="result__points">×&nbsp;${this.answersNum.slowAnswersNum}</td>
                              <td class="result__total">${0 - (this.answersNum.slowAnswersNum * 50)}</td>
                            </tr>
                            <tr>
                              <td colspan="5" class="result__total  result__total--final">${this.totalScores}</td>
                            </tr>
                          </table>
                          <table class="result__table">
                            <tr>
                              <td class="result__number">2.</td>
                              <td>
                                ${this.renderStatistics(this.answers)}
                              </td>
                              <td class="result__total"></td>
                              <td class="result__total  result__total--final">
                              ${this.isGameWon ? `Win` : `Fail`}
                              </td>
                            </tr>
                          </table>
                          <table class="result__table">
                            <tr>
                              <td class="result__number">3.</td>
                              <td colspan="2">
                                ${this.renderStatistics(this.answers)}
                              </td>
                              <td class="result__points">×&nbsp;${GamePoint.ANSWER_CORRECT}</td>
                              <td class="result__total">${this.totalScores}</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="result__extra">Бонус за жизни:</td>
                              <td class="result__extra">${this.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
                              <td class="result__points">×&nbsp;${GamePoint.LIFE_VALUE}</td>
                              <td class="result__total">${this.lives * GamePoint.LIFE_VALUE}</td>
                            </tr>
                            <tr>
                              <td colspan="5" class="result__total  result__total--final">${this.totalScores}</td>
                            </tr>
                          </table>
                        </div>`;
  }

  bind() {
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, this.onBackButtonClick);
  }

  onBackButtonClick() {}
}
