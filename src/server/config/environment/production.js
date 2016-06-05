/* eslint arrow-body-style: ["error", "always"]*/

const path = require('path');

module.exports = (config) => {
  return {
    MAIN_TEMPLATE: path.join(config.TEMPLATE_PATH, 'production.jade')
  };
};

