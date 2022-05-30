const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'js/bundle-[name]-[hash:5].js',
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name]-[hash:5][ext]',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // 使用数组
              [
                '@babel/preset-env',
                {
                  // 数组的第二项为env选项
                  targets: 'last 2 versions',
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
            ],
            // 解决ES6和CommonJS模块导出的问题: https://babeljs.io/docs/en/options#sourcetype
            // sourceType: 'unambiguous',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/temp.html',
    }),
    new HtmlWebpackPlugin({
      title: '测试',
      template: './src/temp.html',
      filename: 'temp.html',
    }),
  ],
};
