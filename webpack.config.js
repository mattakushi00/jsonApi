const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
	devtool: 'eval-source-map',

	entry: path.join(__dirname, 'src/index.js'),

	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dist'),
		publicPath: '',
	},

	devServer: {
		host: '0.0.0.0',
		port: 9000,
		contentBase: path.join(__dirname, 'dist')
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],

	module: {
		rules: [
			{
				test: /\.html/,
				loader: 'html-loader',
				options: {
					esModule: false
				}
			},
		]
	}
}