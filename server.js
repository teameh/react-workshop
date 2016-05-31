var browserSync = require('browser-sync');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config.browsersync');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');


var compiler = webpack(webpackConfig);
compiler.apply(new ProgressPlugin(function(percentage, msg) {
  // show progress
  //console.log((percentage * 100) + '%', msg);
}));

browserSync({
  ui: false,
  ghostMode: false,
  online: false,
  open: false,
  notify: false,
  host: webpackConfig.devServer.host,
  port: webpackConfig.devServer.port,
  xip: false,
  tunnel: true,
  server: {
    baseDir: webpackConfig.devServer.contentBase,
    middleware: [
      webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        noInfo: true,
        quiet: false,
        stats: {
          colors: true
        }
      }),
      webpackHotMiddleware(compiler)
    ]
  },
  files: [
    webpackConfig.devServer.outputPath + '/*.css'
  ]
}); 