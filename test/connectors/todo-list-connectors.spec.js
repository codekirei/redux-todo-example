// modules - node --------------------------------------------------------------

import { deepEqual } from 'assert'

// modules - local -------------------------------------------------------------

import { filterTodos } from '../../src/connectors/todo-list-connectors'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../src/constants/filter-constants'

// setup -----------------------------------------------------------------------

const todos = {
  all: [
    { id: 1, completed: true },
    { id: 2, completed: false },
  ],
  completed: [
    { id: 1, completed: true },
  ],
  active: [
    { id: 2, completed: false },
  ],
}

// cases -----------------------------------------------------------------------

exports['CONNECTOR: TodoListConnectors:'] = {

  filterTodos: {

    all: () => {
      deepEqual(filterTodos(todos.all, SHOW_ALL), todos.all)
    },

    completed: () => {
      deepEqual(filterTodos(todos.all, SHOW_COMPLETED), todos.completed)
    },

    active: () => {
      deepEqual(filterTodos(todos.all, SHOW_ACTIVE), todos.active)
    },

  },

}
