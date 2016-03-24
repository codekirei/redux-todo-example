import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import './styles/index.css'

const store = configureStore()
const rootEl = document.getElementById('root')

const render = () => {
  const Root = require('./components/root.jsx')
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    rootEl
  )
}

if (module.hot) module.hot.accept('./components/root.jsx', () => setTimeout(render))

render()
