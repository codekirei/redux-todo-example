import { ADD_TODO, TOGGLE_TODO } from '../constants/action-constants'
import { createReducer } from '../utils'

export default (state, { type, id, text }) =>
  createReducer(state, type, {
    [ADD_TODO]: () => ({
      id,
      text,
      key: id,
      completed: false,
    }),
    [TOGGLE_TODO]: () => state.id !== id
      ? state
      : Object.assign({}, state, { completed: !state.completed })
      ,
  })
