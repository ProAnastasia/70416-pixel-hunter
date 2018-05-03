import AbstractView from './abstract-view';
import statisticsBar from '../components/statistics-bar';
import footerTemplate from "../components/footer";

import {GamePoint} from '../data/constants';

export default class StatisticsView extends AbstractView {
  constructor(gameState = {}, totalScores) {
    super();
    this.gameState = gameState;
    this.isGameWon = this.gameState.isGameWon;
    this.title = this.isGameWon ? `<h1>Победа!</h1>` : `<h1>Проигрыш</h1>`;
    this.answers = [...this.gameState.answers];
    this.lives = this.gameState.lives - 1;
    this.answersNum = {
      fastAnswersNum: this.answers.filter((answer) => answer === `fast`).length,
      slowAnswersNum: this.answers.filter((answer) => answer === `slow`).length,
      correctAnswersNum: this.answers.filter((answer) => answer === `correct`).length
    };
    this.totalScores = totalScores;
  }

  get template() {
    return `${this.renderScreen()}
            ${footerTemplate}`;
  }

  getCorrectAnswersNum() {
    const {fastAnswersNum, slowAnswersNum, correctAnswersNum} = this.answersNum;

    return fastAnswersNum + slowAnswersNum + correctAnswersNum;
  }

  renderStatistics(answers = []) {
    return statisticsBar(answers);
  }

  renderFastPoints() {
    return `<tr>
              <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">${this.answersNum.fastAnswersNum}&nbsp;<span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;${GamePoint.ANSWER_QUICK}</td>
              <td class="result__total">${GamePoint.ANSWER_QUICK * this.answersNum.fastAnswersNum}</td>
            </tr>`;
  }

  renderLivesPoints() {
    return `<tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${this.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
              <td class="result__points">×&nbsp;${GamePoint.LIFE_VALUE}</td>
              <td class="result__total">${this.lives * GamePoint.LIFE_VALUE}</td>
            </tr>`;
  }

  renderPenaltyPoints() {
    return `<tr>
              <td></td>
              <td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">${this.answersNum.slowAnswersNum}&nbsp;<span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">×&nbsp;${this.answersNum.slowAnswersNum}</td>
              <td class="result__total">${0 - (this.answersNum.slowAnswersNum * GamePoint.ANSWER_SLOW)}</td>
            </tr>
            <tr>`;
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
                  <td class="result__total">${this.isGameWon ? this.getCorrectAnswersNum() * 100 : `FAIL`}</td>
                  ${this.answersNum.fastAnswersNum !== 0 ? this.renderFastPoints() : ``}
                  ${this.answersNum.slowAnswersNum !== 0 ? this.renderPenaltyPoints() : ``}
                  ${this.lives > 0 ? this.renderLivesPoints() : ``}
                  <tr>
                    <td colspan="5" class="result__total  result__total--final">${this.totalScores}</td>
                  </tr>
                </tr>
              </table>
            </div>`;
  }
}
