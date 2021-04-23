const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  context: __dirname,
  mode: 'development',
  devtool: 'source-map',
  resolve:{
    extensions: ['.js', '.jsx']
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(jpg|jpeg|png|gif|jfif|woff|eot|ttf|svg|mp4|webp)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            fallback: {
              loader: "file-loader",
              options: {
                name: "[name].[contenthash].[ext]",
                // name: "../[path][name].[ext]",
              }
            }
          }
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      // favicon: ''
      inject: 'body',
      title: 'Platzi-Conf-Merch',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
}