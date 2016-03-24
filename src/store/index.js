import { createStore, compose } from 'redux'
import reducer from '../reducers'
import DevTools from '../components/devtools.jsx'

const initialState = void 0

const enhancer = compose(
  DevTools.instrument()
)

const devStore = (state = initialState) => {
  const store = createStore(reducer, state, enhancer)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    )
  }
  return store
}

const productionStore = (state = initialState) => createStore(reducer, state)

if (process.env.NODE_ENV === 'production') {
  module.exports = productionStore
} else {
  module.exports = devStore
}
