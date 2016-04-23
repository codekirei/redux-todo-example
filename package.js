const name    = 'redux-todo-example'
const version = '0.0.0'
const author  = 'Jacob Blakely (codekirei)'
const license = 'MIT'

const scripts = {

  'start': 'scripts/dev-server.js',

  // building ------------------------------------------------------------------

  'build': 'npm-run-all clean:dist build:dist',
  'build:dist': 'scripts/build.js',
  'package': 'node scripts/build-package-json.js',

  // cleaning ------------------------------------------------------------------

  'clean': 'npm-run-all clean:*',
  'clean:dist': 'rimraf dist',
  'clean:coverage': 'rimraf coverage',

  // linting -------------------------------------------------------------------

  'lint': 'npm-run-all lint:styles lint:scripts',
  'lint:styles': "stylelint --config configs/stylelint.yml 'src/styles/**/*.css'",
  'lint:scripts': "eslint '{src,scripts,test}/**/*.js?(x)'",

  // serving -------------------------------------------------------------------

  'serve:coverage': 'scripts/coverage-server.js',
  'serve:build': 'browser-sync start --server dist --no-open',

  // testing -------------------------------------------------------------------

  'test': 'mocha',
  'test:v': 'npm run -s test -- -R spec',
  'test:w': "chokidar '{src,test}/**/*.{js,jsx,html}' -c 'clear && npm test'",
  'cover': 'istanbul cover --config configs/istanbul.yml _mocha',
  'cover:w': "chokidar '{src,test}/**/*.{js,jsx,html}' -c 'clear && npm run cover'",
  'report': 'cat coverage/lcov.info | lcov-summary',

}

const dependencies = {
  'node-uuid': '1.4.7',
  'react': '15.0.1',
  'react-dom': '15.0.1',
  'react-redux': '4.4.5',
  'redux': '3.5.1',
}

const devDependencies = {

  // babel ---------------------------------------------------------------------

  'babel-cli': '6.7.7',
  'babel-preset-es2015': '6.6.0',
  'babel-preset-react': '6.5.0',
  'babel-preset-stage-1': '6.5.0',
  'babel-register': '6.7.2',

  // build utils ---------------------------------------------------------------

  'html-minifier': '2.0.0',
  'jsdom': '8.4.0',

  // cli utils -----------------------------------------------------------------

  'browser-sync': '2.12.3',
  'chokidar-cli': '1.2.0',
  'clear-cli': '1.0.1',
  'npm-run-all': '1.7.0',
  'rimraf': '2.5.2',

  // eslint --------------------------------------------------------------------

  'babel-eslint': '6.0.3',
  'eslint': '2.8.0',
  'eslint-config-airbnb': '7.0.0',
  'eslint-config-airbnb-base': '1.0.0',
  'eslint-plugin-import': '1.5.0',
  'eslint-plugin-jsx-a11y': '0.6.2',
  'eslint-plugin-react': '5.0.1',

  // testing -------------------------------------------------------------------

  'ignore-styles': '1.2.0',
  'istanbul': '1.0.0-alpha.2',
  'lcov-summary': '1.0.1',
  'mocha': '2.4.5',
  'mocha-tldr-reporter': '1.0.0',
  'react-addons-test-utils': '15.0.1',
  'sinon': '1.17.3',

  // postcss -------------------------------------------------------------------

  'kirei-css': '0.1.1',
  'postcss-import': '8.1.0',

  // redux dev tooling ---------------------------------------------------------

  'redux-devtools': '3.2.0',
  'redux-devtools-dock-monitor': '1.1.1',
  'redux-devtools-log-monitor': '1.0.11',
  'redux-immutable-state-invariant': '1.2.3',

  // stylelint -----------------------------------------------------------------

  'stylelint': '5.4.0',
  'stylelint-config-standard': '5.0.0',

  // webpack -------------------------------------------------------------------

  'babel-loader': '6.2.4',
  'css-loader': '0.23.1',
  'extract-text-webpack-plugin': '1.0.1',
  'postcss-loader': '0.8.2',
  'style-loader': '0.13.1',
  'webpack': '1.13.0',
  'webpack-dev-middleware': 'github:webpack/webpack-dev-middleware',
  'webpack-hot-middleware': '2.10.0',

}

module.exports = {
  name,
  version,
  private: true,
  author,
  license,
  scripts,
  dependencies,
  devDependencies,
}
