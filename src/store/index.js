import { createStore } from 'redux'
import reducer from '../reducers'

export default (initialState = void 0) => {
  const store = createStore(reducer, initialState)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    )
  }
  return store
}
