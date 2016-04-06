import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ProdRoot } from './components/root'
import './styles/index.css'

const rootEl = document.getElementById('root')

const store = process.env.NODE_ENV === 'production'
  ? require('./store').prodStore()
  : require('./store').devStore()

const prodRender = () =>
  ReactDOM.render(<Provider store={store}><ProdRoot /></Provider>, rootEl)

const devRender = () => {
  const DevRoot = require('./components/root').DevRoot
  ReactDOM.render(<Provider store={store}><DevRoot /></Provider>, rootEl)
}

const render = process.env.NODE_ENV === 'production' ? prodRender : devRender

if (module.hot) module.hot.accept('./components/root', () => setTimeout(render))

render()
