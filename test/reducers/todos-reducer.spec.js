// modules - node --------------------------------------------------------------

import { equal, deepEqual } from 'assert'

// modules - local -------------------------------------------------------------

import reducer, { initialState } from '../../src/reducers/todos-reducer'
import { addTodo, toggleTodo } from '../../src/actions'

// modules - test utils --------------------------------------------------------

import forceDefault from '../test-utils/force-default-reducer'
import multiEqual from '../test-utils/multi-equal'

// cases -----------------------------------------------------------------------

exports['REDUCER: TodosReducer:'] = {

  'returns expected initial state': () => {
    deepEqual(reducer(...forceDefault), initialState)
  },

  'addTodo': {

    'does not mutate state': () => {
      const state = []
      reducer(state, addTodo('foo'))
      equal(state.length, 0)
    },

    'adds a todo': () => {
      const foo = 'foo'
      const { id, text, completed } = reducer([], addTodo(foo))[0]
      multiEqual([
        ['id', typeof(id), 'string'],
        ['text', text, foo],
        ['completed', completed, false],
      ])
    },

  },

  'toggleTodo': {

    'does not mutate state': () => {
      const state = [{ id: 1, completed: false }]
      reducer(state, toggleTodo(1))
      equal(state[0].completed, false)
    },

    'toggles completed value of a todo': () => {
      const state = [
        { id: 1, completed: true },
        { id: 2, completed: false },
      ]
      deepEqual(reducer(state, toggleTodo(1)), [
        { id: 1, completed: false },
        { id: 2, completed: false },
      ])
      deepEqual(reducer(state, toggleTodo(2)), [
        { id: 1, completed: true },
        { id: 2, completed: true },
      ])
      deepEqual(reducer(state, toggleTodo(3)), state)
    },

  },

}
