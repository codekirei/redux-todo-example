// modules - node --------------------------------------------------------------

import { equal } from 'assert'

// modules - local -------------------------------------------------------------

import { TOGGLE_TODO } from '../../src/constants/action-constants'
import { toggleTodo } from '../../src/actions'

// setup -----------------------------------------------------------------------

const id = 'foo'

let action

// cases -----------------------------------------------------------------------

exports['ACTION: toggleTodo: '] = {

  before: () => {
    action = toggleTodo(id)
  },

  type: () => {
    equal(action.type, TOGGLE_TODO)
  },

  id: () => {
    equal(action.id, id)
  },

}
