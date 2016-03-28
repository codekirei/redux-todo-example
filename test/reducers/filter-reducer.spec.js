import { expect } from 'chai'
import filterReducer from '../../src/reducers/filter-reducer'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
} from '../../src/constants/filter-constants'
import { setFilter } from '../../src/actions'

exports['filter-reducer'] = {
  'initial filter': () => expect(filterReducer(undefined, { type: undefined })).to.equal(SHOW_ALL),
  setFilter: () => expect(filterReducer(undefined, setFilter(SHOW_ACTIVE))).to.equal(SHOW_ACTIVE),
}
