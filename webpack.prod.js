const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMonitor = require('webpack-monitor');
// CSS minification plugin
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    // UglifyJSPlugin handles minification and tree shaking.
    new UglifyJSPlugin(),
    // OptimizeCSSAssets handles CSS minification
    new OptimizeCSSAssets(),
    // WebpackMonitor saves stats about your product build.
    // To view data about your build and it's size, set launch to true.
    new WebpackMonitor({
      capture: true,
      launch: false,
      port: 1337,
    }),
  ],
  module: {
    rules: [
      {
        // Transpile our styles and using the ExtractTextPlugin, pull the CSS out to it's own file (main.css in webpack.common)
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
            {
              loader: 'postcss-loader',
            },
          ],
        }),
      },
    ],
  },
});
