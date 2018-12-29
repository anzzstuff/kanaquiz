const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new SWPrecacheWebpackPlugin( {
      cacheId: 'kana-quiz',
      filename: 'sw.js',
      stripPrefix: '/home/anzz/code/kanaquiz/',
      maximumFileSizeToCacheInBytes: 4194304,
      minify: true,
      runtimeCaching: [
        {
          handler: 'fastest',
          urlPattern: /\.(woff2|svg|ttf|eot|woff)$/,
        },
        {
          handler: 'networkFirst',
          urlPattern: /\.html$/
        }
      ],
    })
  ],
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
