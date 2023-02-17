/* webpack.config.js */
const path = require('path');
var meta = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const name = meta.name.substring(meta.name.lastIndexOf('/') + 1)

module.exports = {
  entry: {
	  index: './src/index.js',
  },
  plugins: [
      new HtmlWebpackPlugin({
		inject:'head' ,
        title: meta.title,
		library: name,
  		template: './src/index.html',
  		anchor: name+"_container",
    	  description: meta.description,
		scriptLoading: 'blocking'
      }),
	  //new BundleAnalyzerPlugin()
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
  	  library: name,
      clean: true 
    }, 
  module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
	devServer: {
	    open: true,
	    watchFiles: ['src/**/*'],
	},
};
