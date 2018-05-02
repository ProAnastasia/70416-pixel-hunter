export default (answers) => {
  return `<ul class="stats">
            ${answers.map((state) => `<li class="stats__result stats__result--${state}"></li>`).join(``)}
          </ul>`;
};
