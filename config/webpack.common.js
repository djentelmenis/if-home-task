/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const entry = path.join(__dirname, '..', 'app', 'index.js');
const output = path.join(__dirname, '..', 'dist');
const template = path.join(__dirname, '..', 'app', 'index.html');
const favicon = path.join(
  __dirname,
  '..',
  'app',
  'public',
  'img',
  'favicon.png',
);
const filename = 'bundle.js';

module.exports = {
  entry: ['react-hot-loader/patch', entry],
  output: {
    path: output,
    filename,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template,
      favicon,
    }),
  ],
};
