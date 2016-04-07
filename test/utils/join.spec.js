import { expect } from 'chai'
import intersperse from '../../src/utils/intersperse'

exports['utils/intersperse'] = {
  'intersperse an array of values with another value': () =>
    expect(intersperse(['a', 'b', 'c'], ', '))
      .to.deep.equal(['a', ', ', 'b', ', ', 'c'])
  ,
}
