const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/App.tsx',
	output: {
		filename: 'main.tsx',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.ts$|tsx/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 25000,
				},
			},
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[hash].[ext]',
				},
			},
			{
				loader: 'babel-loader',
				test: '/.(ts|tsx)$/',
				exclude: /node_modules/,
			},
		],
	},
};
