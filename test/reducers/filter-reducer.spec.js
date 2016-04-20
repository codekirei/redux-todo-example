// modules - node --------------------------------------------------------------

import { equal } from 'assert'

// modules - local -------------------------------------------------------------

import reducer, { initialState } from '../../src/reducers/filter-reducer'
import { SHOW_ALL, SHOW_ACTIVE } from '../../src/constants/filter-constants'
import { setFilter } from '../../src/actions'

// modules - test utils --------------------------------------------------------

import forceDefault from '../test-utils/force-default-reducer'

// cases -----------------------------------------------------------------------

exports['REDUCER: FilterReducer:'] = {

  'returns expected initial state': () => {
    equal(reducer(...forceDefault), initialState)
  },

  'setFilter': {

    'does not mutate state': () => {
      const state = SHOW_ALL
      reducer(state, setFilter(SHOW_ACTIVE))
      equal(state, SHOW_ALL)
    },

    'sets filter': () => {
      equal(reducer(SHOW_ALL, setFilter(SHOW_ACTIVE)), SHOW_ACTIVE)
    },

  },

}
