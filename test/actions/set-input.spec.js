// modules - node --------------------------------------------------------------

import { equal } from 'assert'

// modules - local -------------------------------------------------------------

import { SET_INPUT } from '../../src/constants/action-constants'
import { setInput } from '../../src/actions'

// setup -----------------------------------------------------------------------

const text = 'foo'
let action

// cases -----------------------------------------------------------------------

exports['ACTION: setInput:'] = {

  before: () => {
    action = setInput(text)
  },

  type: () => {
    equal(action.type, SET_INPUT)
  },

  text: () => {
    equal(action.text, text)
  },

}
