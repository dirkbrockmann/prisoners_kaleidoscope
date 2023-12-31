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
	    subtitle: meta.subtitle,
		library: name,
  		template: './src/index.html',
  		anchor: name+"_container",
    	  description: meta.description,
		scriptLoading: 'blocking'
      }),
	 // new BundleAnalyzerPlugin()
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
	  	       test: /\.css$/,
	  	       use: [
	  	         "style-loader",
	  	         {
	  	           loader: "css-loader",
	  	           options: {
	  	             importLoaders: 1,
	  				   modules: {
	  					   localIdentName: '[hash:base64:5]__[local]',
	  				   },

	  	           },
	  	         },
	  	       ],
	  	       include: /\.module\.css$/,
	  	     },
	  	     {
	  	       test: /\.css$/,
	  	       use: ["style-loader", "css-loader"],
	  	       exclude: /\.module\.css$/,
	  	     },
	  	   ]
    },
	devServer: {
	    open: true,
	    watchFiles: ['src/**/*'],
	},
};
