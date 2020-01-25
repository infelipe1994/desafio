/* eslint-disable security/detect-non-literal-require */
var path = require('path')
var { setConfig } = require('next/config')

setConfig(require(path.join(__dirname, 'next.config')))
require(path.join(__dirname, 'server'))
