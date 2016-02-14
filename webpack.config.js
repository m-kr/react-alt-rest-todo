var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './client/src/index'
  ],
  output: {
    path: __dirname + '/client/assets/js/',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
    { test: /\.jsx$/, loader: 'react-hot!babel', exclude: /node_modules/ },
	{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
    { test: /\.scss$/, loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]},
    { test: /\.css$/, loader: "style!css" }]
  },
  watch: true
};