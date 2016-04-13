// todo-form-connector ---------------------------------------------------------

import { addTodo } from '../actions'

export const submitHandler = dispatch => (text, e) => {
  e.preventDefault()
  if (text.trim()) dispatch(addTodo(text))
}

// todo-list-connector ---------------------------------------------------------

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../constants/filter-constants'

export const filterTodos = (todos, filter) => ({
  [SHOW_ALL]: todos,
  [SHOW_COMPLETED]: todos.filter(todo => todo.completed),
  [SHOW_ACTIVE]: todos.filter(todo => !todo.completed),
})[filter]
