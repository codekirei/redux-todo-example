import { SHOW_ALL } from '../constants/filter-constants'
import { SET_FILTER } from '../constants/action-constants'
import { createReducer } from '../utils'

const initialFilter = SHOW_ALL

export default (currentFilter = initialFilter, { type, filter }) =>
  createReducer(currentFilter, type, {
    [SET_FILTER]: () => filter,
  })
