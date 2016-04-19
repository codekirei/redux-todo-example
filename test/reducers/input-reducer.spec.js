// modules - node --------------------------------------------------------------

import { equal, deepEqual } from 'assert'

// modules - local -------------------------------------------------------------

import reducer, { initialState } from '../../src/reducers/input-reducer'
import { addTodo, setInput } from '../../src/actions'

// modules - test utils --------------------------------------------------------

import forceDefault from '../test-utils/force-default-reducer'

// cases -----------------------------------------------------------------------

exports['REDUCER: InputReducer:'] = {

  'returns expected initial state': () => {
    deepEqual(reducer(...forceDefault), initialState)
  },

  addTodo: {

    'does not mutate state': () => {
      const state = 'foo'
      reducer(state, addTodo('bar'))
      equal(state, 'foo')
    },

    'returns empty string': () => {
      equal(reducer('foo', addTodo('foo')), '')
    },

  },

  setInput: {

    'does not mutate state': () => {
      const state = 'foo'
      reducer(state, setInput('bar'))
      equal(state, 'foo')
    },

    'returns text': () => {
      equal(reducer('', setInput('foo')), 'foo')
    },

  },

}
