import { ADD_TODO, TOGGLE_TODO } from '../constants/action-constants'
import { createReducer } from '../utils'

export default (state, { type, key, text }) =>
  createReducer(state, type, {
    [ADD_TODO]: () => ({ key, text, completed: false }),
    [TOGGLE_TODO]: () => state.key !== key
      ? state
      : Object.assign({}, state, { completed: !state.completed })
      ,
  })
