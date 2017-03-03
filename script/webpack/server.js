'use strict';

const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./config.dev');
const webpackDevMiddleWare = require('webpack-dev-middleware');

const app = express();
const port = parseInt(process.argv[2], 10);
const webpackCompiler = webpack(webpackConfig);

app.use(webpackDevMiddleWare(webpackCompiler, {
  publicPath: '/'
}));

app.listen(port, function() {
  console.log('Webpack Dev Server is listening on port: ', port);
});
