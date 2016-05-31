var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
var Clean = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: __dirname + '/dist/',
    publicPath: '/',
    filename: 'app.js'
  },
  plugins: [
    new Clean(['dist/*.js', 'dist/*.css', 'dist/*.gz']),
    new webpack.DefinePlugin({
      'process.env': {'NODE_ENV': '"production"'}
    }),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: true
        }
    }),
    new CompressionPlugin({
      asset: "{file}.gz",
      algorithm: "gzip",
      regExp: /\.js$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style','css?modules&importLoaders=1&localIdentName=[hash:base64:5]!sass')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
