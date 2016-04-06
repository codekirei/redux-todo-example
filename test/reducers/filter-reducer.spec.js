import { expect } from 'chai'
import reducer, { initialState } from '../../src/reducers/filter-reducer'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
} from '../../src/constants/filter-constants'
import { setFilter } from '../../src/actions'

exports['filter-reducer'] = {

  'returns expected initial state': () =>
    expect(reducer(undefined, { type: undefined })).to.equal(initialState),

  'does not mutate state': () => {
    const state = SHOW_ALL
    reducer(state, setFilter(SHOW_ACTIVE))
    expect(state).to.equal(SHOW_ALL)
  },

  'sets filter': () => expect(reducer(SHOW_ALL, setFilter(SHOW_ACTIVE))).to.equal(SHOW_ACTIVE),
}
