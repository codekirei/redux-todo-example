import { SHOW_ALL } from '../constants/filter-constants'
import { SET_FILTER } from '../constants/action-constants'

export const initialState = SHOW_ALL

export default (currentFilter = initialState, { type, filter }) => {
  switch (type) {
    case SET_FILTER:
      return filter
    default:
      return currentFilter
  }
}
