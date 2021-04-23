const path = require('path');

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
  // module:{
  //   rules:[
  //     {
  //       test: /\.(js|jsx)/,
  //       exclude: /node_modules/,
  //       loader: 'babel-loader'
  //     }
  //   ]
  // }
}