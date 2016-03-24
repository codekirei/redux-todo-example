import { SHOW_ALL } from '../constants/filter-constants'
import { SET_FILTER } from '../constants/action-constants'
import { createReducer } from '../utils'

const initialState = SHOW_ALL

export default (state = initialState, { type, filter }) =>
  createReducer(state, type, {
    [SET_FILTER]: () => filter,
  })
