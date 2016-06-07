const webpack = require('webpack');
const config = require('./server/config/environment');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./webpack.config.js')(config);

module.exports = {
  entry: config.APP_PATH,
  output: {
    path: config.PUBLIC_PATH,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'A simple template with webpack and express',
      filename: 'index.html',
      template: config.MAIN_TEMPLATE
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ],

  // Transform source code using Babel and React Hot Loader
  module: webpackConfig.module,
  // Automatically transform files with these extensions
  resolve: webpackConfig.resolve,
  resolveLoader: {
    root: config.MODULES_PATH
  }
};

webpack(module.exports).run((err, stats) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('ended', err);
    console.log(stats.toString({
      colors: true
    }));
  }
});
