/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');
var path = require('path');

var node_modules_dir = path.join(__dirname, 'node_modules'),
  app_dir          = path.join(__dirname, 'src');

module.exports = {

  output: {
    publicPath: '/assets/',
    path: 'dist/assets/',
    filename: 'main.js'
  },

  debug: false,
  devtool: false,
  entry: './src/scripts/main.js',

  stats: {
    colors: true,
    reasons: false
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'styles': '../../../src/styles',
      'components': '../../../src/scripts/components/'
    }
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jsxhint'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jsx-loader?harmony'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    },
      {test: /\.woff$/, loader: "url-loader?prefix=font/&limit=5000"},
      {test: /\.woff2$/, loader: "url-loader?prefix=font/&limit=5000"},
      {test: /\.eot$/, loader: "file-loader?prefix=font/"},
      {test: /\.ttf$/, loader: "file-loader?prefix=font/"},
      {test: /\.svg$/, loader: "file-loader?prefix=font/"}
    ]
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin(
      {
        name: "vendor",
        filename: 'vendor.bundle.js',
        minChunks: function (module, count) {
          return module.resource && module.resource.indexOf(app_dir) === -1;
        }
      }

    )
  ]
};
