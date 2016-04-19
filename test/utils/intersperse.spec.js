// modules - node --------------------------------------------------------------

import { deepEqual } from 'assert'

// modules - local -------------------------------------------------------------

import intersperse from '../../src/utils/intersperse'

// cases -----------------------------------------------------------------------

exports['UTIL: intersperse'] = {

  'intersperse an array of values with another value': () => {
    deepEqual(intersperse(['a', 'b', 'c'], ', '), ['a', ', ', 'b', ', ', 'c'])
  },

}
