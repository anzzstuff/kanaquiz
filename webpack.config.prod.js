const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: { collapseWhitespace: true, removeCommecnts: true },
      inject: false
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: './src/src-sw.js',
      swDest: 'sw.js'
    })
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
  }
};
