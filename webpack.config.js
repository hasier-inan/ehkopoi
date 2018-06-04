var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoPrefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src/main/js/index.js'
  },
  devtool: 'sourcemaps',
  cache: true,
  output: {
    path:  __dirname + '/src/built/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, '.'),
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!postcss-loader!sass?includePaths[]=./node_modules')
      }, {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /built/],
        loader: "babel-loader",
        query:
          {
            presets:['react']
          }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.md']
  },
  stats: {
    colors: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {discardComments: {removeAll: true}},
      canPrint: true
    })
  ]
};