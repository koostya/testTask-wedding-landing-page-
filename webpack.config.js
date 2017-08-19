var webpack = require("webpack");
module.exports = {
	//define entry point
	context: __dirname + "/src",
	entry: './main.js',

	//define output point
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.scss?$/,
				loader: 'style-loader!css-loader?url=false!sass-loader'
			},
			{ test: /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/, loader: 'url-loader?limit=100000' }
		]
	}
};