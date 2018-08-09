const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const entry = {
  'rex': './src/rex.scss',
  'rex-core': './src/rex-core.scss',
  'rex-core-webfonts': './src/rex-core-webfonts.scss',
  'rex-grid-responsive': './src/rex-grid-responsive.scss',
  'rex-grid-mobile': './src/rex-grid-mobile.scss',
  'rex-grid-non-mobile': './src/rex-grid-non-mobile.scss',
  'rex-icons-cdn': './src/rex-icons-cdn.scss',
  'rex-icons': './src/rex-icons.scss',
  'rex-typography': './src/rex-typography.scss',
  'rex-tables': './src/rex-tables.scss',
  'rex-buttons': './src/rex-buttons.scss',
  'rex-button-groups': './src/rex-button-groups.scss',
  'rex-forms': './src/rex-forms.scss',
  'rex-component/lists': './src/rex-component-lists.scss',
  'rex-component/alerts': './src/rex-component-alerts.scss',
  'rex-component/breadcrumbs': './src/rex-component-breadcrumbs.scss',
  'rex-component/pagination': './src/rex-component-pagination.scss',
  'rex-component/track': './src/rex-component-track.scss',
  'rex-component/search': './src/rex-component-search.scss',
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