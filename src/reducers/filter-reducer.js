import { SHOW_ALL } from '../constants/filter-constants'
import { SET_FILTER } from '../constants/action-constants'
import createReducer from '../utils/create-reducer'

export const initialState = SHOW_ALL

export default (currentFilter = initialState, { type, filter }) =>
  createReducer(currentFilter, type, {
    [SET_FILTER]: () => filter,
  })
