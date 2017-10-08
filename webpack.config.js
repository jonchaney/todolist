const path = require('path');
var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: './lib/js/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      }
    ]
  },
  devtool: 'source-maps'
};