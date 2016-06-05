const path = require('path');
const config = require('./config/environment');

function getIndex(req, res) {
  res.sendFile(path.resolve(config.PUBLIC_PATH, 'index.html'));
}

function getIndexMiddleware(req, res) {
  console.log('getIndexMiddleware exec');
  res.write(
    config.webpackMiddleware.fileSystem.readFileSync(
      path.join(config.PUBLIC_PATH, 'index.html')
    )
  );
  res.end();
}
module.exports = (app) => {
  console.log('routers', config.isProduction);
  if (!config.isProduction) {
    console.log('getIndexMiddleware');
    app.use('/', getIndexMiddleware);
    app.use('/index', getIndexMiddleware);
    app.use('/index.html', getIndexMiddleware);
  } else {
    app.use('/', getIndex);
    app.use('/index', getIndex);
    app.use('/index.html', getIndex);
  }
};
