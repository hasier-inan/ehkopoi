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
  debug: true,
  output: {
    path: './built/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, '.'),
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!postcss-loader!sass?includePaths[]=./node_modules')
      }, {
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: [/node_modules/, /built/],
        loader: "babel",
        query:
          {
            presets:['react']
          }
      }
    ]
  },
  postcss: [autoPrefixer({browsers: ['last 10 versions']})],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css', '.md']
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
  ],
  sassLoader: {
    outputStyle: 'compressed',
    includePaths: ['node_modules']
  }
};