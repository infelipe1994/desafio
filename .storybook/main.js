var path = require('path')

module.exports = {
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  stories: ['../stories/**/*.stories.js'],
  webpackFinal: function(config) {
    config.resolve.alias['@'] = path.join(__dirname, '..')

    return config
  }
}
