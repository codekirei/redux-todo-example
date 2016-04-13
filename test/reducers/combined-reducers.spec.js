import { expect } from 'chai'
import reducer from '../../src/reducers'
import { initialState as filter } from '../../src/reducers/filter-reducer'
import { initialState as todos } from '../../src/reducers/todos-reducer'
import forceDefault from '../test-utils/force-default-reducer'

exports['combined-reducers'] = {

  'returns expected intial state': () =>
    expect(reducer(...forceDefault)).to.deep.equal({ filter, todos }),

}
