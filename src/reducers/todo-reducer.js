import { ADD_TODO, TOGGLE_TODO } from '../constants/action-types'
import { reducer } from './reducer-utils'

const todoReducer = (state, { type, id, text }) =>
  reducer(state, type, {
    [ADD_TODO]: () => ({ id, text, completed: false }),
    [TOGGLE_TODO]: () => state.id !== id
      ? state
      : Object.assign({}, state, { completed: !state.completed })
      ,
  })

export default todoReducer
