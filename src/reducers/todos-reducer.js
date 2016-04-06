import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../constants/action-constants'
import createReducer from '../utils/create-reducer'
import todoReducer from './todo-reducer'

const initialTodos = []

export default (todos = initialTodos, action) =>
  createReducer(todos, action.type, {
    [ADD_TODO]: () => todos.concat(todoReducer(null, action)),
    [TOGGLE_TODO]: () => todos.map(todo => todoReducer(todo, action)),
  })
