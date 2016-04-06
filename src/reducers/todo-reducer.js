import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../constants/action-constants'
import createReducer from '../utils/create-reducer'

export default (todo, { type, id, text }) =>
  createReducer(todo, type, {
    [ADD_TODO]: () => ({
      id,
      text,
      key: id,
      completed: false,
    }),
    [TOGGLE_TODO]: () => todo.id !== id
      ? todo
      : Object.assign({}, todo, { completed: !todo.completed })
      ,
  })
