/* global module, require, __dirname */
const path = require('path');

module.exports = {
  title: 'Signal Sciences',
  components: 'src/components/**/[A-Z]*.js',
  skipComponentsWithoutExample: true,
  styleguideDir: 'docs',
  theme: {
    color: {
      link: '#d33d0e',
      linkHover: '#f05424'
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
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400|Roboto:400,700'
        }
      ]
    }
  },
  require: [
    'babel-polyfill',
    path.join(__dirname, './public/core.css'),
    path.resolve(__dirname, 'docs/setup.js')
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    const dir = path.dirname(componentPath);
    return `import ${name} from '${dir}';`;
  }
};
