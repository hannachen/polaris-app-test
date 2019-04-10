const {resolve, join} = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FixDefaultImportPlugin = require('webpack-fix-default-import-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: join(__dirname, 'src/index.jsx')
  },
  output: {
    path: join(__dirname, 'build'),
    filename: '[name].js',
  },
  plugins: [
    new FixDefaultImportPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                "@babel/plugin-proposal-class-properties"
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
    modules: [resolve(__dirname), resolve(__dirname, 'node_modules')],
  },
  devServer: {
    disableHostCheck: true,
    contentBase: join(__dirname, 'dist'),
    inline: false,
    host: '0.0.0.0',
    hot: false,
    port: 22370,
  },
};
