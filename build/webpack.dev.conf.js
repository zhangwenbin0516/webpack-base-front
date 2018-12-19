"use strict";
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '../'),
  mode: 'production',
  entry: {
    app: ['babel-polyfill', './src/app.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './js/[name][hash].js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.join(__dirname, '..', 'src'),
      'src': path.join(__dirname, '..', 'src'),
      'assets': path.join(__dirname, '..', 'src/assets'),
      'page': path.join(__dirname, '..', 'src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        include: '/src/',
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        include: '/src/',
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    /*new HtmlWebpackPlugin({
      template: path.join(__dirname, '../..', 'index.html')
    })*/
  ],
  target: 'node'
}