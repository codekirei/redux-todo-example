// modules ---------------------------------------------------------------------

import { expect } from 'chai'
import reducer, { initialState } from '../../src/reducers/input-reducer'
import {
  addTodo,
  setInput,
} from '../../src/actions'
import forceDefault from '../test-utils/force-default-reducer'

// cases -----------------------------------------------------------------------

exports['input-reducer'] = {

  'returns expected initial state': () => {
    expect(reducer(...forceDefault)).to.deep.equal(initialState)
  },

  addTodo: {

    'does not mutate state': () => {
      const state = 'foo'
      reducer(state, addTodo('bar'))
      expect(state).to.equal('foo')
    },

    'returns empty string': () => {
      expect(reducer('foo', addTodo('foo'))).to.equal('')
    },

  },

  setInput: {

    'does not mutate state': () => {
      const state = 'foo'
      reducer(state, setInput('bar'))
      expect(state).to.equal('foo')
    },

    'returns text': () => {
      expect(reducer('', setInput()))
    }
  }

}
