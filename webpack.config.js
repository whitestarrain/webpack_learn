const { resolve } = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'js/bundle-[name]-[hash:5].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name]-[hash:5][ext]'
        }
      }
    ]
  }
}
