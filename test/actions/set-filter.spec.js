// modules - node --------------------------------------------------------------

import { equal } from 'assert'

// modules - local -------------------------------------------------------------

import { SET_FILTER } from '../../src/constants/action-constants'
import { setFilter } from '../../src/actions'

// setup -----------------------------------------------------------------------

const filter = 'foo'

let action

// cases -----------------------------------------------------------------------

exports['ACTION: setFilter:'] = {

  before: () => {
    action = setFilter(filter)
  },

  type: () => {
    equal(action.type, SET_FILTER)
  },

  filter: () => {
    equal(action.filter, filter)
  },

}
