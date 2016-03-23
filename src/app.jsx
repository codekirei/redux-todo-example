import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Root from './components/root.jsx'
import initializeStore from './store'
import './styles/index.css'

let initialState
const store = initializeStore(initialState)

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
