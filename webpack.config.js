const path = require('path');
// const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        library: '',
        libraryTarget: 'umd',
        auxiliaryComment: '',
        path: path.resolve(__dirname, 'dist'),
        filename: ''
    },
    plugins: [
        new UglifyJsPlugin(),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version) // 提取package中的version
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env'],
                        plugins: [require('babel-plugin-transform-runtime')]
                    }
                }
            }
        ]
    }
};
