import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ProductionRoot as Root } from './components/root.jsx'
import './styles/index.css'

const rootEl = document.getElementById('root')

const store = process.env.NODE_ENV === 'production'
  ? require('./store').productionStore()
  : require('./store').devStore()

const render = process.env.NODE_ENV === 'production'
  ? () => {
    ReactDOM.render(<Provider store={store}><Root /></Provider>, rootEl)
  }
  : () => {
    const DevRoot = require('./components/root.jsx').DevRoot
    ReactDOM.render(<Provider store={store}><DevRoot /></Provider>, rootEl)
  }

if (module.hot) module.hot.accept('./components/root.jsx', () => setTimeout(render))

render()
