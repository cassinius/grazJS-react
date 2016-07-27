var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// var ignore = new webpack.IgnorePlugin(/^(react|react-dom)$/);

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
      }
    ] //,
    // noParse: [ "react", "react-dom" ]
  },
	plugins: [
		new BrowserSyncPlugin(
			// BrowserSync options
			{
				// browse to http://localhost:3000/ during development
				host: 'localhost',
				port: 3000,
				server: { baseDir: ['./'] }
				// proxy the Webpack Dev Server endpoint
				// (which should be serving on http://localhost:3100/)
				// through BrowserSync
				// proxy: 'http://localhost:3100/'
			},
			// plugin options
			{
				// prevent BrowserSync from reloading the page
				// and let Webpack Dev Server take care of this
				reload: false
			}
		)
	],
  externals: {
    // Use external version of React and ReactDOM
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devtool: "source-map"
};

module.exports = config;
