
const path = require('path');
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const ROOT_PATH = path.join(__dirname, '..', '..', '..', '..');
const PUBLIC_PATH = path.join(ROOT_PATH, 'public');
const CLIENT_PATH = path.join(ROOT_PATH, 'src', 'client');
const APP_PATH = path.join(CLIENT_PATH, 'index.js');
const MODULES_PATH = path.join(ROOT_PATH, 'node_modules');
const ASSETS_PATH = path.join(CLIENT_PATH, 'assets');
const TEMPLATE_PATH = path.join(CLIENT_PATH, 'template');
const all = {
  isProduction: env !== 'development',
  ROOT_PATH,
  PUBLIC_PATH,
  CLIENT_PATH,
  APP_PATH,
  MODULES_PATH,
  TEMPLATE_PATH,
  ASSETS_PATH,
  PORT: 8080,
  init() {}
};
const config = Object.assign(
  all,
  require('./' + env + '.js')(all)
);

module.exports = Object.assign({}, config, config.init(config));
