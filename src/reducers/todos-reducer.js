import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../constants/action-constants'
import createReducer from '../utils/create-reducer'

const initialTodos = []

export default (todos = initialTodos, { type, id, text }) =>
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
