const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/script.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		port: 4200,
		contentBase: path.join(__dirname, 'dist'),
		watchContentBase: true,
		hot: true
	},
	module: {
		rules: [
			{
				include: /node_modules/,
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
					},
				],
			},
			{
				exclude: /node_modules/,
				test: /\.(sa|sc)ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'sass-loader',
				],
			},
			{
				exclude: /node_modules/,
				test: /\.(js|jsx|mjs)$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							babelrc: true,
						},
					},
				],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	],
};
