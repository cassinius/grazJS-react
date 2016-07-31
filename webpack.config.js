var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/app');


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
      },
			{
				test: /\.styl$/,
				loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
			}
    ] //,
    // noParse: [ "react", "react-dom", "feathers/client", "feathers-socketio/client", "feathers-hooks", "socket.io-client"]
  },
	plugins: [
	],
  externals: {
    // Use external version of React and ReactDOM
    "react": "React",
    "react-dom": "ReactDOM",
		"feathers/client": "feathers",
		"feathers-socketio/client": "feathers.socketio",
		"feathers-hooks": "feathers.hooks",
		"socket.io-client": "io"
  },
  devtool: "source-map"
};

module.exports = config;
