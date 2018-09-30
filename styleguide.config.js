/* global module, require, __dirname */
const path = require('path');

module.exports = {
  title: 'Signal Sciences',
  components: 'src/components/**/[A-Z]*.js',
  theme: {
    color: {
      link: '#f05424',
      linkHover: '#d33d0e'
    },
    fontFamily: {
      base: 'Open Sans'
    }
  },
  template: {
    favicon: 'https://www.signalsciences.com/favicon.ico',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans|Roboto'
        }
      ]
    }
  },
  require: [
    'babel-polyfill',
    path.join(__dirname, './public/core.css')
  ]
};
