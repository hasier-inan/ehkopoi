const config = require('./webpack.base.config.js');

config.entry = ['./preview.js'];
config.output = {
  path: '/',
  publicPath: '/assets/',
  filename: 'bundle.js'
};

config.module.loaders = [{
  test: /\.json$/,
  loader: 'json'
}, {
  test: /\.js$|.jsx$/,
  loader: 'babel-loader',
  exclude: [/node_modules/, /built/]
}, {
  test: /\.css$/,
  loader: 'style!css',
}, {
  test: /.scss/,
  loaders: [
    'style',
    'css',
    'sass?includePaths[]=./node_modules'
  ]
}];

module.exports = config;