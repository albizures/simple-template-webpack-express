/* eslint arrow-body-style: ["error", "always"]*/

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (config) => {
  return {
    devtool: '#inline-source-map',
    entry: [
      'webpack-hot-middleware/client?reload=true',
      config.APP_PATH
    ],
    output: {
      path: config.PUBLIC_PATH,
      filename: '[name].js',
      publicPath: '/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin({
        title: 'A simple template with webpack and express',
        filename: 'index.html',
        template: config.MAIN_TEMPLATE
      })
    ],

    module: {
      loaders: [{
        test: /\.js$/,
        include: config.CLIENT_PATH,
        loader: 'babel-loader'
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?name=assets/images/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }, {
        test: /\.jade$/,
        loader: 'jade-loader'
      }, {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader']
      }, {
        test: /\.styl?$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader']
      }, {
        test: /workers/,
        loaders: ['worker?name=workers/[name].[ext]', 'babel-loader']
      }],
      preLoaders: [{
        test: /\.js?$/,
        exclude: [/build/, /node_modules/],
        loaders: ['eslint-loader']
      }]
    },
    resolve: {
      extensions: ['', '.js', '.css', '.styl', '.jade']
    },
    resolveLoader: {
      root: config.MODULES_PATH
    }
  };
};
