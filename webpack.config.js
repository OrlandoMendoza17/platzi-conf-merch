const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
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
        loader: 'babel-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      // favicon: ''
      inject: 'body',
      title: 'PlatziConf-Merch',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html'
    })
  ]
}