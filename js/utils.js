/**
 * Get template of the layout from string
 * @param {String} template
 * @return {Element}
 */
export const createElementFromTemplate = (template) => {
  const container = document.createElement(`div`);

  container.innerHTML = template;

  return container;
};
