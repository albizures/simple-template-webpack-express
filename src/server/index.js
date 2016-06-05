const express = require('express');
const config = require('./config/environment');
const app = express();

require('./config/express.js')(app);
require('./router.js')(app);

const port = config.PORT;
const server = app.listen(port, () => {
  console.log('Run http://%s:%s', server.address().address, server.address().port);
});

module.exports = app;
