var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: 'mocha!./test/testJsonSchema.js',
  devtool: 'source-map',
  output: {
    filename: 'test.build.js',
    path: 'tests/',
    publicPath: 'http://localhost:3000/tests'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    new ExtractTextPlugin('app.css', {
      allChunks: true
    })
  ],
  module: {
      loaders: [
          {
              test: /\.js$/,
              loaders: ['babel-loader']
          },
          {
              test: /(\.css|\.less)$/,
              loader: 'null-loader',
              exclude: [
                  /build/
              ]
          },
          {
              test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
              loader: 'null-loader'
          }
      ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
