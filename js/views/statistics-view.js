import AbstractView from './abstract-view';
import statisticsBar from '../components/statistics-bar';
import footerTemplate from "../components/footer";

import {GamePoint} from '../data/constants';

export default class StatisticsView extends AbstractView {
  constructor(results = []) {
    super();
    this.results = results.reverse();
  }

  get template() {
    return `${this.renderScreen()}
            ${footerTemplate}`;
  }

  getCorrectAnswersNum(result) {
    const answersNum = {
      fastAnswersNum: result.answers.filter((answer) => answer === `fast`).length,
      slowAnswersNum: result.answers.filter((answer) => answer === `slow`).length,
      correctAnswersNum: result.answers.filter((answer) => answer === `correct`).length
    };
    const {fastAnswersNum, slowAnswersNum, correctAnswersNum} = answersNum;

    return {
      fastAnswersNum,
      slowAnswersNum,
      total: fastAnswersNum + slowAnswersNum + correctAnswersNum
    };
  }

  renderStatistics(answers = []) {
    return statisticsBar(answers);
  }

  renderFastPoints(answersNum) {
    return `<tr>
              <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">${answersNum}&nbsp;<span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;${GamePoint.ANSWER_QUICK}</td>
              <td class="result__total">${GamePoint.ANSWER_QUICK * answersNum}</td>
            </tr>`;
  }

  renderLivesPoints(livesNum) {
    const lives = livesNum - 1;

    return `<tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
              <td class="result__points">×&nbsp;${GamePoint.LIFE_VALUE}</td>
              <td class="result__total">${lives * GamePoint.LIFE_VALUE}</td>
            </tr>`;
  }

  renderPenaltyPoints(answersNum) {
    return `<tr>
              <td></td>
              <td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">${answersNum}&nbsp;<span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">×&nbsp;${answersNum}</td>
              <td class="result__total">${0 - (answersNum * GamePoint.ANSWER_SLOW)}</td>
            </tr>
            <tr>`;
  }

  renderTemplate(result, index) {
    const {total, fastAnswersNum, slowAnswersNum} = this.getCorrectAnswersNum(result);

    return `<table class="result__table">
                <tr>
                  <td class="result__number">${index + 1}.</td>
                  <td colspan="2">
                    ${this.renderStatistics(result.answers)}
                  </td>
                  <td class="result__points">×&nbsp;${GamePoint.ANSWER_CORRECT}</td>
                  <td class="result__total">${result.isGameWon ? total * 100 : `FAIL`}</td>
                  ${fastAnswersNum !== 0 ? this.renderFastPoints(fastAnswersNum) : ``}
                  ${slowAnswersNum !== 0 ? this.renderPenaltyPoints(slowAnswersNum) : ``}
                  ${result.lives > 0 ? this.renderLivesPoints(result.lives) : ``}
                  <tr>
                    <td colspan="5" class="result__total  result__total--final">${result.totalPoints}</td>
                  </tr>
                </tr>
              </table>`;
  }

  renderScreen() {
    return `<div class="result">
              <h1>${this.results[0].isGameWon ? `Победа` : `Проигрыш`}</h1>
              ${this.results.map((result, index) => this.renderTemplate(result, index)).join(``)}</div>`;
  }
}
