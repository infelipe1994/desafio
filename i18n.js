const NextI18Next = require('next-i18next').default

const localeSubpaths = {
  all: {
    en: 'en',
    pt: 'pt'
  },
  foreign: {
    en: 'en'
  },
  none: {}
}

module.exports = new NextI18Next({
  defaultLanguage: 'pt',
  localeSubpaths: localeSubpaths[process.env.LOCALE_SUBPATHS],
  otherLanguages: ['en']
})
