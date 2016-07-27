var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/index'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'src/index.html',
            filename: '../index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            }, {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            }, {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|woff|woff2)?(\?v=\d+.\d+.\d+)?$/, 
                loader: 'url-loader?limit=25000'
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