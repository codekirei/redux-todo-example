// modules - node --------------------------------------------------------------

import path from 'path'

// modules - npm ---------------------------------------------------------------

import webpack from 'webpack'
import ExtractTextPlugin, { extract } from 'extract-text-webpack-plugin'

// setup -----------------------------------------------------------------------

const cwd = process.cwd()

// entry -----------------------------------------------------------------------

function entry(env) {
  const entries = []
  if (env === 'dev') entries.push('webpack-hot-middleware/client')
  entries.push(path.resolve(cwd, 'src', 'app.jsx'))
  return entries
}

// output ----------------------------------------------------------------------

const output = {
  path: path.join(cwd, 'dist'),
  filename: 'app.js',
  publicPath: '/',
}

// loaders ---------------------------------------------------------------------

function babelLoader(env) {
  const loader = {
    test: /\.jsx?$/,
    include: path.join(cwd, 'src'),
    loader: 'babel',
  }
  if (env === 'dev') loader.query = { cacheDirectory: true }
  return loader
}

function cssLoader(env) {
  const loader = { test: /\.css$/ }
  if (env === 'dev') loader.loaders = ['style', 'css?sourceMap', 'postcss']
  else loader.loader = extract(['css', 'postcss'])
  return loader
}

const postcss = instance => [
  require('postcss-import')({ addDependencyTo: instance }),
  require('kirei-css'),
]

const loaders = env => [babelLoader(env), cssLoader(env)]

// plugins ---------------------------------------------------------------------

const plugins = env => []
  .concat(
  [ // common plugins
    new webpack.optimize.OccurenceOrderPlugin(),
  ])
  .concat(env === 'dev' ?
  [ // dev plugins
    new webpack.HotModuleReplacementPlugin(),
  ] :
  [ // dist plugins
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
      },
    }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ])

// combined config -------------------------------------------------------------

const config = (env = 'dev') => ({
  entry: entry(env),
  output,
  devtool: env === 'dev' ? 'cheap-module-eval-source-map' : false,
  noInfo: true,
  module: { loaders: loaders(env) },
  postcss,
  plugins: plugins(env),
})

export default config
