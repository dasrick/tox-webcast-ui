var webpack = require('webpack');
var path = require('path');
var srcPath = path.resolve(__dirname, 'src', 'app.js');
var dstPath = path.resolve(__dirname, 'web', 'js');
//var resolveBowerPath = function (componentPath) {
//  return path.join(__dirname, 'bower_components', componentPath);
//};

var config;
config = {

  // We change to normal source mapping
  devtool: 'cheap-module-source-map',
  entry: srcPath,
  output: {
    path: dstPath,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate-loader', // works RTL - example 'ng-annotate!jshint'
        exclude: /node_modules|coverage|scripts|web|bower_components/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'appversion': JSON.stringify(require('./package.json').version)
      }
    }),
    //new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
  //,
  //resolve: {
  //  alias: {
  //    'mi24-player': resolveBowerPath('/mi24-player/angular-player')
  //  }
  //}
};

module.exports = config;