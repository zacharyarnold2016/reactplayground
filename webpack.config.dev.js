const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, 'dev'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	watch: true,
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [path.resolve(__dirname, './src'), 'node_modules'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
};
