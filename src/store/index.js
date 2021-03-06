import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers'
import DevTools from '../components/devtools.jsx'

export const initialState = void 0

export const devStore = (state = initialState) => {
  const enhancer = compose(
    applyMiddleware(
      require('redux-immutable-state-invariant')()
    ),
    DevTools.instrument()
  )
  const store = createStore(reducer, state, enhancer)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    )
  }
  return store
}

export const prodStore = (state = initialState) => createStore(reducer, state)
