module.exports = {
  entry: {
    index: './src/index.js'
  },
  mode: 'development',
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.ts$/, use: 'ts-loader'}
    ]
  }
}

// $ procurar no final do arquivo ( arquivo.css ), \ desconsidera o .