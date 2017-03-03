'use strict';

const webpackConfigBase = require('./config.base');

module.exports = Object.assign({
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: '/'
  }
}, webpackConfigBase);
