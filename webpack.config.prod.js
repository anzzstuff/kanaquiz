var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        './src/index'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
            'NODE_ENV': JSON.stringify('production')
            }
        }),
        new HtmlWebPackPlugin({
            template: 'src/index.html',
            filename: '../index.html'
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                screw_ie8: true,
                warnings: false
            },
        }),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }, {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            }, {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|woff|woff2)?(\?v=\d+.\d+.\d+)?$/, 
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(eot|ttf)$/, 
                loader: 'file-loader'
            }            
        ]
    },
    postcss: function() {
        return [autoprefixer, precss];
    }
};