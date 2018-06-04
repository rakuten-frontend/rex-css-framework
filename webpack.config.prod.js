const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const entry = {
  'rex-default': './src/themes/theme-default',
  'rex-blue': './src/themes/theme-blue',
  'rex-red': './src/themes/theme-red',
  'rex-green': './src/themes/theme-green',
  'rex-yellow': './src/themes/theme-yellow',
  'rex-purple': './src/themes/theme-purple',
  'rex-pink': './src/themes/theme-pink',
  'rex-blue': './src/themes/theme-blue',
  'rex-dark-blue': './src/themes/theme-dark-blue'
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
