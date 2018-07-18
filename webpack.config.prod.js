const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const entry = {
  'rex': './src/themes/default'
};

const plugins = [
  new CleanWebpackPlugin(['dist']),
];

const rules = [

];

module.exports = merge(common, {
  entry,
  plugins,
  module: {
    rules,
  },
});