/* eslint arrow-body-style: ["error", "always"]*/

const path = require('path');
const getConfigWebpack = require('../../../webpack.config.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

var configWebpack;
var compiler;
var webpackMiddleware;

function init(config) {
  configWebpack = getConfigWebpack(config);
  compiler = webpack(configWebpack);
  webpackMiddleware = webpackDevMiddleware(compiler, {
    publicPath: configWebpack.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
  return {
    webpackMiddleware,
    webpackHotMiddleware: webpackHotMiddleware(compiler)
  };
}

module.exports = (config) => {
  return {
    init,
    MAIN_TEMPLATE: path.join(config.TEMPLATE_PATH, 'development.jade'),
  };
};
