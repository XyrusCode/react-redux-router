const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'cheap-module-source-map', // source map for debugging
    entry: './src/index', // entry point of the application
    output: {
        path: path.resolve(__dirname, 'build'), // where to output the files
        publicPath: '/', // public URL of the output directory when referenced in a browser
        filename: 'bundle.js' // name of the bundle
    },
    devServer: {
        stats: 'minimal', // reduce the information written to the command line
        overlay: true, // overlay any errors that occur in the browser
        historyApiFallback: true, // all requests will be sent to index.html
        disableHostCheck: true, // disable host check to work with cloud9
        headers: { 'Access-Control-Allow-Origin': '*' }, // allow access from all origins
        https: false // use http instead of https

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'src/favicon.ico'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // look for js and jsx files
                exclude: /node_modules/, // exclude node_modules
                use: ['babel-loader', 'eslint-loader'] // use babel-loader and eslint-loader
            }, {
                test: /(\.css)$/, // look for css files
                use: ['style-loader', 'css-loader'] // use style-loader and css-loader
            }
        ]
    }
};