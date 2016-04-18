'use strict'; 

var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var env = process.env.NODE_ENV;

var config = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.json?$/, loader: 'json' },
      { test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]' },
      { test: /\.less$/, loader: "style!css!less" }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
};

if(env === 'build'){
  config.output = {
    library: 'ReactReduxWorkbench',
    libraryTarget: 'umd'
  }
} else if(env === 'development'){
  config.devtool = 'eval-source-map';

  config.entry = [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src/dev.js')
  ];

  config.output = {
    path: path.join(__dirname, '/dist/'),
    filename: 'react-workbench.js',
    publicPath: '/'
  };

  config.plugins = config.plugins.concat([
    new HtmlWebpackPlugin({
      template: 'index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]);
} else if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false
      }
    })
  )
}

module.exports = config
