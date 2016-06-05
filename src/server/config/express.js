const config = require('./environment');
const express = require('express');
const favicon = require('serve-favicon');

module.exports = (app) => {
  if (!config.isProduction) {
    app.use(config.webpackMiddleware);
    app.use(config.webpackHotMiddleware);
  } else {
    app.use(express.static(config.PUBLIC_PATH));
  }
  app.use(favicon('src/favicon.ico'));
};
