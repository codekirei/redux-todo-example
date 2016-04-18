// modules - node --------------------------------------------------------------

import { equal } from 'assert'

// modules - local -------------------------------------------------------------

import { ADD_TODO } from '../../src/constants/action-constants'
import { addTodo } from '../../src/actions'

// setup -----------------------------------------------------------------------

const text = 'foo'

let action

// cases -----------------------------------------------------------------------

exports['ACTION: addTodo: '] = {

  before: () => {
    action = addTodo(text)
  },

  type: () => {
    equal(action.type, ADD_TODO)
  },

  id: () => {
    equal(typeof(action.id), 'string')
  },

  text: () => {
    equal(action.text, text)
  },

}
