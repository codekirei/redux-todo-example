import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ProdRoot } from './components/root'
import './styles/index.css'

const store = process.env.NODE_ENV === 'production'
  ? require('./store').prodStore()
  : require('./store').devStore()

const rootEl = document.getElementById('root')
const renderAsRoot = component =>
  render(<Provider store={store}>{component}</Provider>, rootEl)

const prodRender = () => renderAsRoot(<ProdRoot />)

const devRender = () => {
  const DevRoot = require('./components/root').DevRoot
  renderAsRoot(<DevRoot />)
}

const renderer = process.env.NODE_ENV === 'production' ? prodRender : devRender

if (module.hot) module.hot.accept('./components/root', () => setTimeout(renderer))

renderer()
