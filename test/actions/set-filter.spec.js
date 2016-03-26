import { SET_FILTER } from '../../src/constants/action-constants'
import { setFilter } from '../../src/actions'
import { expect } from 'chai'

const filter = 'foo'
const action = setFilter(filter)

exports.setFilter = {
  type: () => expect(action.type).to.equal(SET_FILTER),
  filter: () => expect(action.filter).to.equal(filter),
}
