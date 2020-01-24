var path = require('path')
var withOffline = require('next-offline')

module.exports = withOffline({
  generateInDevMode: true,
  target: 'serverless',
  transformManifest: function(manifest) {
    return ['/'].concat(manifest)
  },
  webpack: function(config) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      react: 'preact/compat',
      react$: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom$': 'preact/compat'
    })

    config.resolve.alias['@'] = path.join(__dirname)

    return config
  },
  workboxOpts: {
    runtimeCaching: [
      {
        handler: 'NetworkFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200]
          },
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxAgeSeconds: 24 * 30 * 60 * 60,
            maxEntries: 150
          }
        },
        urlPattern: /^https?.*/
      }
    ],
    swDest: 'static/service-worker.js'
  }
})
