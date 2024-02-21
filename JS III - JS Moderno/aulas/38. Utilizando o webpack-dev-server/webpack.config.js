const path = require('path')

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    compress: true,
    port: 8081
  },
  entry: {
    index: './src/index.js'
  },
  mode: 'production',
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].min.js'
  }
}