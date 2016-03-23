import { createStore } from 'redux'
import reducer from '../reducers'

const initializeStore = initialState => {
  const store = createStore(reducer, initialState)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }
  return store
}

export default initializeStore
