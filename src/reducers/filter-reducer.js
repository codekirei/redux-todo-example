import { SHOW_ALL } from '../constants/filters'
import { SET_FILTER } from '../constants/action-types'
import { reducer } from './reducer-utils'

const initialState = SHOW_ALL

export default (state = initialState, { type, filter }) =>
  reducer(state, type, {
    [SET_FILTER]: () => filter,
  })
