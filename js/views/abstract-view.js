import {createElementFromTemplate} from '../utils/utils';

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`There is no opportunity to instantiate class: AbstractView`);
    }
  }

  get template() {
    throw new Error(`There is should be template here`);
  }

  render() {
    return createElementFromTemplate(this.template);
  }

  bind() {
    // Bind handlers
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }

    return this._element;
  }
}
