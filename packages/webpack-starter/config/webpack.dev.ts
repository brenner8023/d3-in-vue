import * as path from 'path';
import * as Webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';

const config = {
  mode: 'development',
  // experiments: {
  //   lazyCompilation: true,
  // },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
    cacheDirectory: path.resolve(__dirname, '.cache'),
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
    ],
    open: true,
    port: 'auto',
    // compress: true,
    client: {
      overlay: true,
    },
  },
  // module: {
  // noParse: /^(vue|vue-router|vuex)$/,
  // },
};

console.log(merge(common, config));

export default merge(common, config);
