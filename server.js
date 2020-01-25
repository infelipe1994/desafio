var express = require('express')
var next = require('next')
var nextI18NextMiddleware = require('next-i18next/middleware').default
var path = require('path')

// eslint-disable-next-line security/detect-non-literal-require
var nextI18next = require(path.join(__dirname, 'i18n'))

var app = next({ dev: process.env.NODE_ENV !== 'production' })
var handle = app.getRequestHandler()
var port = process.env.PORT || 3000

;(async () => {
  await app.prepare()

  var server = express()

  await nextI18next.initPromise

  server.use(nextI18NextMiddleware(nextI18next))
  server.get('*', (request, response) => handle(request, response))

  await server.listen(port)

  console.log(`> Ready on http://localhost:${port}`)
})()
