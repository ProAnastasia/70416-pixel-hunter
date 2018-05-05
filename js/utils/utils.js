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

/**
 * Load data from server using fetch
 * @param {String} source
 * @return {Promise}
 */
export const loadData = (source) => {
  return fetch(source)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`${response.status}: ${response.text}`);
        }
      });
};

/**
 * Post data to server
 * @param {array} data
 * @param {String} address
 * @return {Promise}
 */
export const saveData = (data, address) => {
  const options = {
    method: `POST`,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': `application/json`
    }
  };

  return fetch(address, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.text}`);
        }
      });
};
