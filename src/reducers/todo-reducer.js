import { ADD_TODO, TOGGLE_TODO } from '../constants/action-types'
import { reducer } from './reducer-utils'

export default (state, { type, key, text }) =>
  reducer(state, type, {
    [ADD_TODO]: () => ({ key, text, completed: false }),
    [TOGGLE_TODO]: () => state.key !== key
      ? state
      : Object.assign({}, state, { completed: !state.completed })
      ,
  })
