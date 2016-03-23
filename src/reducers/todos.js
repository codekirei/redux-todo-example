import { ADD_TODO, TOGGLE_TODO } from '../constants/action-types'
import todo from './todo'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action),
      ]
    case TOGGLE_TODO:
      return state.map(t => todo(t, action))
    default:
      return state
  }
}
