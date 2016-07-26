var webpack = require('webpack');
var path = require('path');

// var ignore = new webpack.IgnorePlugin(/^(react|react-dom)$/);

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');


var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ] //,
    // noParse: [ "react", "react-dom" ]
  },
  // plugins: [
  //   ignore
  // ],
  // resolve: {
  //   extensions: ['', '.js'],
  //   alias: {
  //     "react": "./src/lib/dummyReact.js"
  //   }
  // },
  externals: {
    // Use external version of React and ReactDOM
    "react": "React",
    "react-dom": "ReactDOM"
  }
};

module.exports = config;
