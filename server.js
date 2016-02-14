// webpack
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

// server
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// // MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// server
var app = new (require('express'))();
var port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// Routes
app.use('/api', require('./server/routes/api'));

// Statics
app.use("/assets", express.static(__dirname + '/client/assets'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
