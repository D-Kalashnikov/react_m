const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: "./src/script.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	mode: "development",
	devServer: {
		port: 4200,
		hot: true,
	},
	module: {
		rules: [
			{
				include: /node_modules/,
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
					},
				],
			},
			{
				exclude: /node_modules/,
				test: /\.(sa|sc)ss$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
						},
					},
					"sass-loader",
				],
			},
			{
				exclude: /node_modules/,
				test: /\.(js|jsx|mjs)$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							babelrc: true,
						},
					},
				],
			},
			{
				test: /\.(ico|jpg|jpeg|png|gif|mp4|svg)(\?.*)?$/,
				loader: "file-loader",
				options: {
					limit: 1000,
					name: "[name].[ext]",
					outputPath: "media",
				},
			},
			{
				issuer: /\.(sa|sc)ss$/,
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "fonts",
						},
					},
				],
			},
			{
				test: /\.(pdf)(\?.*)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "files/[name].[ext]",
						},
					},
				],
			},
		],
	},
	resolve: {
		alias: {
			"@app": path.resolve(__dirname, "src"),
		},
		extensions: [".js", ".jsx", ".scss"],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
