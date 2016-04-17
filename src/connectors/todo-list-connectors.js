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
