const UglifyJsPlugin = require('uglifyjs-3-webpack-plugin');


module.exports = {
	entry: './src/block.js',
	output: {
		path: __dirname,
		filename: 'dist/block.build.min.js',
    },
    plugins: [
        new UglifyJsPlugin()
    ],
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};