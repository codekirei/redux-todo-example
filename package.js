const name = 'redux-todo-example'
const version = '0.0.0'
const author = 'Jacob Blakely (codekirei)'
const license = 'MIT'

const scripts = {

  'start': 'scripts/dev-server.js',

  // building ------------------------------------------------------------------

  'build': 'npm-run-all clean:dist build:dist',
  'build:dist': 'scripts/build.js',
  'package': 'node scripts/build-package-json.js',

  // cleaning ------------------------------------------------------------------

  'clean:coverage': 'rimraf coverage',
  'clean:dist': 'rimraf dist',
  'clean:modules': 'rimraf node_modules',

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
  'react': '15.0.2',
  'react-dom': '15.0.2',
  'react-redux': '4.4.5',
  'redux': '3.5.2',
}

const devDependencies = {

  // babel ---------------------------------------------------------------------

  'babel-cli': '6.8.0',
  'babel-preset-es2015': '6.6.0',
  'babel-preset-react': '6.5.0',
  'babel-preset-stage-1': '6.5.0',
  'babel-register': '6.8.0',

  // build utils ---------------------------------------------------------------

  'html-minifier': '2.1.2',
  'jsdom': '9.0.0',

  // cli utils -----------------------------------------------------------------

  'browser-sync': '2.12.8',
  'chokidar-cli': '1.2.0',
  'clear-cli': '1.0.1',
  'npm-run-all': '2.1.0',
  'rimraf': '2.5.2',

  // eslint --------------------------------------------------------------------

  'eslint': '2.9.0',
  'eslint-config-kirei-react': '0.2.4',

  // testing -------------------------------------------------------------------

  'ignore-styles': '2.0.0',
  'istanbul': '1.0.0-alpha.2',
  'lcov-summary': '1.0.1',
  'mocha': '2.4.5',
  'mocha-tldr-reporter': '1.0.0',
  'react-addons-test-utils': '15.0.2',
  'sinon': '1.17.4',

  // postcss -------------------------------------------------------------------

  'kirei-css': '0.1.1',
  'postcss-import': '8.1.2',

  // redux dev tooling ---------------------------------------------------------

  'redux-devtools': '3.3.1',
  'redux-devtools-dock-monitor': '1.1.1',
  'redux-devtools-log-monitor': '1.0.11',
  'redux-immutable-state-invariant': '1.2.3',

  // stylelint -----------------------------------------------------------------

  'stylelint': '6.3.3',
  'stylelint-config-standard': '7.0.0',

  // webpack -------------------------------------------------------------------

  'babel-loader': '6.2.4',
  'css-loader': '0.23.1',
  'extract-text-webpack-plugin': '1.0.1',
  'postcss-loader': '0.9.1',
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
