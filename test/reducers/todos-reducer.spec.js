// modules ---------------------------------------------------------------------

import { expect } from 'chai'
import reducer, { initialState } from '../../src/reducers/todos-reducer'
import {
  addTodo,
  toggleTodo,
} from '../../src/actions'
import forceDefault from '../test-utils/force-default-reducer'

// setup -----------------------------------------------------------------------

const text = 'foo'
let addedTodo

// cases -----------------------------------------------------------------------

exports['todos-reducer'] = {

  'returns expected initial state': () =>
    expect(reducer(...forceDefault)).to.deep.equal(initialState),

  addTodo: {

    'does not mutate state': () => {
      const state = []
      reducer(state, addTodo(text))
      expect(state.length).to.equal(0)
    },

    'adds a todo': {
      before: () => { addedTodo = reducer([], addTodo(text))[0] },
      id: () => expect(addedTodo.id).to.be.a('string'),
      key: () => expect(addedTodo.key).to.equal(addedTodo.id),
      text: () => expect(addedTodo.text).to.equal(text),
      completed: () => expect(addedTodo.completed).to.be.false,
    },

  },

  toggleTodo: {

    'does not mutate state': () => {
      const state = [{ id: 1, completed: false }]
      reducer(state, toggleTodo(1))
      expect(state[0].completed).to.equal(false)
    },

    'toggles completed value of a todo': () => {
      const state = [
        { id: 1, completed: true },
        { id: 2, completed: false },
      ]
      expect(reducer(state, toggleTodo(1))).to.deep.equal([
        { id: 1, completed: false },
        { id: 2, completed: false },
      ])
      expect(reducer(state, toggleTodo(2))).to.deep.equal([
        { id: 1, completed: true },
        { id: 2, completed: true },
      ])
      expect(reducer(state, toggleTodo(3))).to.deep.equal(state)
    },

  },

}
