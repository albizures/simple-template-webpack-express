const express = require('express'),
      path = require('path'),
      app = express(),
      BUILD_PATH = path.resolve(__dirname,'..' ,'dist');
require("./config")(app);
require("./router.js")(app);


if (!process.env.PRODUCTION) {
  const webpack = require('webpack');
  const compiler = webpack(require('../webpack.local.config'));
	const ProgressPlugin = require('webpack/lib/ProgressPlugin');
	compiler.apply(new ProgressPlugin(function(percentage, msg) {
	  console.log((percentage * 100) + '%', msg);
	}));
  compiler.watch({ // watch options:
    errorDetails : true,
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
  }, function(err, stats) {
    console.log('ended');
    console.log(stats.toString({colors : true}));
  });
}


const port = process.env.PORT || 8080;
const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Run http://%s:%s', host, port);
});

module.exports = app;
