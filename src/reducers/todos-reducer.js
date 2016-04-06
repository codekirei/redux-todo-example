import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../constants/action-constants'
import createReducer from '../utils/create-reducer'

export const initialState = []

export default (todos = initialState, { type, id, text }) =>
  createReducer(todos, type, {
    [ADD_TODO]: () => todos.concat({
      id,
      text,
      key: id,
      completed: false,
    }),
    [TOGGLE_TODO]: () => todos.map(todo =>
      todo.id !== id
        ? todo
        : Object.assign({}, todo, { completed: !todo.completed })
    ),
  })
