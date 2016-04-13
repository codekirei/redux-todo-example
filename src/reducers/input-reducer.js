import {
  ADD_TODO,
  SET_INPUT,
} from '../constants/action-constants'

export const initialState = ''

export default (currentState = initialState, { type, text }) => {
  switch (type) {
    case ADD_TODO:
      return ''
    case SET_INPUT:
      return text
    default:
      return currentState
  }
}
