// modules - node --------------------------------------------------------------

import { deepEqual } from 'assert'

// modules - local -------------------------------------------------------------

import reducer from '../../src/reducers'
import { initialState as filter } from '../../src/reducers/filter-reducer'
import { initialState as todos } from '../../src/reducers/todos-reducer'
import { initialState as input } from '../../src/reducers/input-reducer'

// modules - test utils --------------------------------------------------------

import forceDefault from '../test-utils/force-default-reducer'

// cases -----------------------------------------------------------------------

exports['REDUCER: CombinedReducer:'] = {

  'returns expected intial state': () => {
    deepEqual(reducer(...forceDefault), { filter, todos, input })
  },

}
