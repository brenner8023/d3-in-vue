import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import * as Webpack from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';

export default {
  context: process.cwd(),
  target: ['web', 'es5'],
  entry: [
    './src/main.ts',
  ],
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].[contenthash:8].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
      hash: true,
    }),
    new ForkTsCheckerWebpackPlugin(),
    new Webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(css)|(less)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ['\\.vue$'],
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        test: /\.png|jpg|gif|jpeg|svg/,
        type: 'asset',
        generator: {
          filename: 'static/images/[contenthash:8][ext][query]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'static/fonts/[contenthash:8][ext][query]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'static/media/[contenthash:8][ext][query]',
        },
      },
    ],
  },
} as Webpack.Configuration;
