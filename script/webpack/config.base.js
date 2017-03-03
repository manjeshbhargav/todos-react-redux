'use strict';

const path = require('path');
const projectRoot = path.join(__dirname, '../..');

module.exports = {
  entry: {
    index: `${projectRoot}/src/app.jsx`
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    modules: [
      `${projectRoot}/src`,
      `${projectRoot}/node_modules`
    ]
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'es2015',
                'react'
              ]
            }
          }
        ]
      }
    ]
  }
};
