const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV || 'production';

const SRC_PATH = path.resolve(__dirname, 'assets');
const DIST_PATH = path.resolve(__dirname, 'public', 'dist');

module.exports = {
  entry: {
    styles: path.resolve(SRC_PATH, 'scss', 'index.scss'),
    bundle: path.resolve(SRC_PATH, 'js', 'index.js'),
  },
  output: {
    path: DIST_PATH,
    chunkFilename: `[name]${env === 'production' && '.[chunkhash]'}.bundle.js`,
    filename: '[name].js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {},
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer(),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
    unsafeCache: false,
  },
  devServer: {
    stats: {
      errors: false,
      errorDetails: false,
      warnings: false,
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  node: {
    fs: 'empty',
  },
};
