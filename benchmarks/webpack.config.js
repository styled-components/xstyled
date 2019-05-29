const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const SRC_DIR = path.resolve(__dirname, 'src')

module.exports = {
  mode: 'production',
  entry: path.resolve(SRC_DIR, 'index.js'),
  devServer: {
    inline:true,
    contentBase: './public',
    port: 8083,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'xstyled Benchmark',
  })],
}
